// Netlify event-triggered function: runs on every VERIFIED Netlify Forms submission
// (spam / honeypot-flagged submissions never reach here). Sends an SMS lead alert to
// the leads manager via Twilio. The existing Netlify email notification is untouched.
//
// Env vars (Netlify site settings → Environment variables):
//   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_MESSAGING_SERVICE_SID, TWILIO_FROM
//   LEADS_SMS_TO   comma-separated E.164 recipients, e.g. "+14405551234,+12165551234"
//   SMS_DRY_RUN    "1" to log the message body instead of sending (local testing)
//
// No npm dependencies: uses the Node runtime's global fetch and Twilio's REST API.

const TIMEOUT_MS = 6000; // Netlify sync function cap is 10s
const MAX_BODY = 400;    // ~6 UCS-2 segments (header emoji forces UCS-2)
const FOOTER = 'Full details in email. Do not reply.';

exports.handler = async (event) => {
  try {
    const raw = JSON.parse(event.body || '{}');
    const p = raw.payload || raw; // functions:invoke passes the JSON verbatim
    const data = p.data || {};
    const formName = p.form_name || 'unknown-form';
    const number = p.number;

    const env = process.env;
    const recipients = String(env.LEADS_SMS_TO || '').split(',').map((s) => s.trim()).filter(Boolean);
    const body = buildBody(formName, number, data);
    console.log(JSON.stringify({ form: formName, number, recipients: recipients.length, len: body.length }));

    if (env.SMS_DRY_RUN === '1' || env.SMS_DRY_RUN === 'true') {
      console.log('DRY RUN body:\n' + body);
      return ok();
    }
    if (!recipients.length) { console.warn('LEADS_SMS_TO is empty; skipping SMS'); return ok(); }
    if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN) { console.error('Twilio credentials missing; skipping SMS'); return ok(); }

    const auth = 'Basic ' + Buffer.from(env.TWILIO_ACCOUNT_SID + ':' + env.TWILIO_AUTH_TOKEN).toString('base64');
    const results = await Promise.allSettled(recipients.map((to) => sendOne(to, body, auth, env)));
    results.forEach((r, i) => {
      if (r.status === 'rejected') console.error('SMS failed to ...' + recipients[i].slice(-4) + ':', r.reason && r.reason.message);
    });
    return ok();
  } catch (err) {
    console.error('submission-created error:', err && err.message);
    return ok(); // never 5xx: nothing useful to retry, and email still goes out
  }
};

function ok() { return { statusCode: 200, body: '' }; }

async function sendOne(to, body, auth, env) {
  const url = 'https://api.twilio.com/2010-04-01/Accounts/' + env.TWILIO_ACCOUNT_SID + '/Messages.json';
  const params = new URLSearchParams({ To: to, Body: body });
  if (env.TWILIO_MESSAGING_SERVICE_SID) params.append('MessagingServiceSid', env.TWILIO_MESSAGING_SERVICE_SID);
  if (env.TWILIO_FROM) params.append('From', env.TWILIO_FROM);

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { Authorization: auth, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error('Twilio HTTP ' + res.status + ' code=' + json.code + ' ' + json.message);
    console.log('SMS queued', json.sid, json.status, 'to ...' + to.slice(-4));
  } finally {
    clearTimeout(timer);
  }
}

// ---------- message formatting ----------

const PLACEHOLDER = /^\((not provided|none given|none|not selected)\)$|^no preference$/i;
const SKIP_KEYS = new Set(['ip', 'user_agent', 'referrer', 'botcheck']);

function buildBody(formName, number, d) {
  const g = (k) => clean(d[k]);
  const tagged = (label, v) => (v ? label + ': ' + v : '');
  const num = number ? ' #' + number : '';
  // One emoji in the header only (rest stays ASCII) so lead texts stand out from other alerts.
  const EMOJI = { 'appointment-request': '\u{1FA7A}', 'new-patient': '\u{1F195}', 'records-request': '\u{1F4C1}' };
  const head = (EMOJI[formName] || '\u{1F4E8}') + ' ';
  let lines;
  let longKey = null; // the free-text line that gets truncated first

  if (formName === 'appointment-request') {
    lines = [
      head + 'Appt request' + num,
      g('Name'),
      tagged('Ph', phone(g('Phone'))),
      g('Email Address'),
      tagged('New pt', g('Are you a new patient?')),
      tagged('Service', g('Service')),
      join([tagged('Office', g('Preferred office')), tagged('Date', g('Date')), tagged('Time', g('Time'))]),
      tagged('Comments', g('Comments or Questions')),
    ];
    longKey = 7;
  } else if (formName === 'new-patient') {
    lines = [
      head + 'New patient form' + num,
      g('Full legal name'),
      tagged('Ph', phone(g('Phone'))),
      g('Email'),
      tagged('Seen before', g('Have you been seen by us before?')),
      join([tagged('Office', g('Preferred office')), tagged('Time', g('Preferred appointment time'))]),
      tagged('Insurance', g('Insurance company')),
      tagged('Referring', g('Referring doctor')),
      tagged('Pharmacy', g('Preferred pharmacy')),
    ];
  } else if (formName === 'records-request') {
    lines = [
      head + 'Records request' + num,
      g('Full legal name'),
      tagged('Ph', phone(g('Phone'))),
      g('Email'),
      tagged('Needs', g('What do you need?')),
      tagged('Send to', g('Where should records go?')),
      tagged('Notes', g('Anything else about this request?')),
    ];
    longKey = 6;
  } else {
    lines = [head + formName + num];
    Object.keys(d).forEach((k) => {
      if (SKIP_KEYS.has(k)) return;
      const v = clean(d[k]);
      if (v) lines.push(k + ': ' + v);
    });
  }
  return fit(lines, longKey, FOOTER, MAX_BODY);
}

function clean(v) {
  const s = String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
  return PLACEHOLDER.test(s) ? '' : s;
}
function join(parts) { return parts.filter(Boolean).join(', '); }

// Display-only normalisation of the patient's number so it is tappable on the phone.
function phone(v) {
  const digits = String(v || '').replace(/\D/g, '');
  if (digits.length === 10) return '+1' + digits;
  if (digits.length === 11 && digits[0] === '1') return '+' + digits;
  return v || '';
}

// The header emoji forces UCS-2 encoding (67-char segments), so keep everything else
// plain ASCII and shorten the free-text line first, then the tail, to stay under MAX_BODY.
function fit(lines, longKey, footer, max) {
  const ascii = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/[^\x20-\x7E\n]/g, '');
  const assemble = () => [lines[0]].concat(lines.slice(1).filter(Boolean), footer).map((l, i) => (i === 0 ? l : ascii(l))).join('\n');
  let out = assemble();
  if (out.length > max && longKey != null && lines[longKey]) {
    const over = out.length - max;
    lines[longKey] = lines[longKey].slice(0, Math.max(0, lines[longKey].length - over - 3)) + '...';
    out = assemble();
  }
  return out.length > max ? out.slice(0, max - 3) + '...' : out;
}
