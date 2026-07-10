// Ohio Endocrinology — authority page generator.
// Usage: node tools/build-authority-pages.mjs
// Emits static HTML into docs/{conditions,treatments,locations}/<slug>/index.html,
// hub index pages, sitemap.xml, and robots.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE as P, CONDITIONS, TREATMENTS, LOCATIONS } from './authority-content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CLINIC_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: P.name,
  alternateName: P.legal,
  url: P.domain + '/',
  telephone: '+1-440-322-0872',
  medicalSpecialty: 'Endocrinologic',
  address: [
    { '@type': 'PostalAddress', streetAddress: '673 E River St', addressLocality: 'Elyria', addressRegion: 'OH', postalCode: '44035', addressCountry: 'US' },
    { '@type': 'PostalAddress', streetAddress: '25200 Center Ridge Rd, Suite 1100', addressLocality: 'Westlake', addressRegion: 'OH', postalCode: '44145', addressCountry: 'US' },
  ],
};

const CSS = `
  body { background: #fff; }
  .oe-wrap { max-width: 880px; margin: 0 auto; padding: 0 var(--oe-container-pad); }
  .oe-topnav { position: sticky; top: 0; z-index: 100; background: #fff; box-shadow: var(--oe-shadow-sm); }
  .oe-topnav-in { max-width: var(--oe-container); margin: 0 auto; padding: 0 var(--oe-container-pad); height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .oe-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .oe-brand img { width: 38px; height: 38px; border-radius: 9px; }
  .oe-brand b { font-family: var(--oe-font-display); font-weight: 700; font-size: 1.1rem; color: var(--oe-navy); }
  .oe-navlinks { display: flex; align-items: center; gap: 14px; }
  .oe-navlinks a.plain { color: #334155; text-decoration: none; font-weight: 600; font-size: 0.9rem; padding: 8px 4px; }
  .oe-btn { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 11px 24px; border-radius: var(--oe-radius-pill); font-weight: 600; font-size: 0.95rem; text-decoration: none; border: 2px solid transparent; transition: all var(--oe-transition); }
  .oe-btn:hover { transform: translateY(-2px); box-shadow: var(--oe-shadow-md); }
  .oe-btn-primary { background: var(--oe-blue); color: #fff; }
  .oe-btn-primary:hover { background: var(--oe-navy); color: #fff; }
  .oe-btn-white { background: transparent; color: #fff; border-color: rgba(255,255,255,0.65); }
  .oe-btn-white:hover { background: #fff; color: var(--oe-navy); }
  .oe-hero { background: linear-gradient(135deg, #0a2543 0%, #0d2d4e 45%, #123a63 100%); color: #fff; padding: clamp(3rem,7vw,4.5rem) 0; }
  .oe-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--oe-teal); margin-bottom: 16px; }
  .oe-eyebrow::before { content: ''; width: 28px; height: 2px; background: var(--oe-teal); }
  .oe-hero h1 { color: #fff; font-size: clamp(1.9rem, 4.5vw, 2.9rem); margin: 0 0 14px; }
  .oe-hero p { color: rgba(255,255,255,0.85); font-size: 1.1rem; max-width: 640px; }
  .oe-crumbs { font-size: 0.8rem; color: rgba(255,255,255,0.62); margin-bottom: 20px; }
  .oe-crumbs a { color: rgba(255,255,255,0.75); text-decoration: none; }
  .oe-crumbs a:hover { color: #fff; }
  main section { padding: clamp(2.2rem,5vw,3.2rem) 0; }
  main section.alt { background: var(--oe-surface-offwhite, #f7f9fc); }
  main h2 { font-size: clamp(1.35rem,3vw,1.7rem); margin-bottom: 14px; }
  main p { margin-bottom: 14px; line-height: 1.75; color: #1e293b; }
  .oe-faq details { background: #fff; border: 1px solid var(--oe-border, #e2e8f0); border-radius: 12px; margin-bottom: 10px; box-shadow: var(--oe-shadow-card); }
  .oe-faq summary { cursor: pointer; font-weight: 600; color: var(--oe-navy); padding: 16px 18px; list-style: none; display: flex; justify-content: space-between; gap: 12px; min-height: 48px; align-items: center; }
  .oe-faq summary::after { content: '▾'; color: var(--oe-teal); }
  .oe-faq details[open] summary::after { content: '▴'; }
  .oe-faq details > div { padding: 0 18px 16px; color: #334155; line-height: 1.7; }
  .oe-related { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 14px; }
  .oe-related a { display: block; background: #fff; border: 1px solid var(--oe-border, #e2e8f0); border-radius: 12px; padding: 16px 18px; text-decoration: none; color: var(--oe-navy); font-weight: 600; font-size: 0.95rem; box-shadow: var(--oe-shadow-card); transition: all var(--oe-transition); }
  .oe-related a:hover { transform: translateY(-4px); box-shadow: var(--oe-shadow-lg); }
  .oe-related a span { display: block; margin-top: 6px; color: var(--oe-text-muted); font-weight: 400; font-size: 0.82rem; }
  .oe-cta { background: linear-gradient(135deg, #00958a 0%, #00b4a6 100%); color: #fff; text-align: center; }
  .oe-cta h2 { color: #fff; }
  .oe-cta p { color: rgba(255,255,255,0.92); }
  .oe-note { font-size: 0.82rem; color: var(--oe-text-muted); border-top: 1px solid var(--oe-border, #e2e8f0); padding-top: 16px; }
  footer.oe-foot { background: var(--oe-navy); color: rgba(255,255,255,0.75); font-size: 0.88rem; padding: 36px 0; }
  footer.oe-foot a { color: rgba(255,255,255,0.85); }
  footer.oe-foot .cols { display: flex; flex-wrap: wrap; gap: 28px 56px; justify-content: space-between; }
  @media (max-width: 640px) { .oe-navlinks a.plain { display: none; } }
`;

function page({ path, title, metaDesc, eyebrow, h1, heroSub, crumbs, bodyHtml, faqs, ldExtra }) {
  const rel = '../../';
  const canonical = `${P.domain}/${path}/`;
  const ld = [CLINIC_LD];
  if (faqs && faqs.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  if (ldExtra) ld.push(ldExtra);
  const crumbHtml = crumbs.map((c, i) => (c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : esc(c.label))).join(' › ');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} | ${P.name}</title>
<meta name="description" content="${esc(metaDesc)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="${rel}assets/logo-mark.png">
<link rel="stylesheet" href="${rel}styles.css">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<nav class="oe-topnav" aria-label="Main">
  <div class="oe-topnav-in">
    <a class="oe-brand" href="${rel}"><img src="${rel}assets/logo-mark.png" alt=""><b>Ohio Endocrinology</b></a>
    <div class="oe-navlinks">
      <a class="plain" href="${rel}conditions/">Conditions</a>
      <a class="plain" href="${rel}treatments/">Treatments</a>
      <a class="plain" href="${rel}locations/">Locations</a>
      <a class="plain" href="${P.phoneHref}">${P.phone}</a>
      <a class="oe-btn oe-btn-primary" href="${rel}#appointment">Request Appointment</a>
    </div>
  </div>
</nav>
<header class="oe-hero">
  <div class="oe-wrap">
    <div class="oe-crumbs">${crumbHtml}</div>
    <div class="oe-eyebrow">${esc(eyebrow)}</div>
    <h1>${esc(h1)}</h1>
    <p>${esc(heroSub)}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px">
      <a class="oe-btn oe-btn-primary" href="${rel}#appointment">Request Appointment</a>
      <a class="oe-btn oe-btn-white" href="${P.phoneHref}">Call ${P.phone}</a>
    </div>
  </div>
</header>
<main>
${bodyHtml}
<section class="oe-cta">
  <div class="oe-wrap">
    <h2>Ready to talk it through?</h2>
    <p>Send us your details and we'll call you within one business day — or call the office now.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:22px">
      <a class="oe-btn oe-btn-white" href="${rel}#appointment">Request Appointment</a>
      <a class="oe-btn oe-btn-primary" style="background:var(--oe-navy)" href="${P.phoneHref}">Call ${P.phone}</a>
    </div>
  </div>
</section>
<section>
  <div class="oe-wrap">
    <p class="oe-note">This page offers general health information and isn't a substitute for medical advice, diagnosis, or treatment. For guidance about your own health, please schedule a visit. If you're experiencing a medical emergency, call 911.</p>
  </div>
</section>
</main>
<footer class="oe-foot">
  <div class="oe-wrap cols">
    <div>
      <b style="font-family:var(--oe-font-display);color:#fff">Ohio Endocrinology</b><br>
      ${P.elyria}<br>${P.westlake}<br>
      <a href="${P.phoneHref}">${P.phone}</a> · Text ${P.text}
    </div>
    <div>
      <a href="${rel}">Home</a><br>
      <a href="${rel}conditions/">Conditions we treat</a><br>
      <a href="${rel}treatments/">Treatments &amp; services</a><br>
      <a href="${rel}locations/">Areas we serve</a><br>
      <a href="${P.portal}" rel="noopener" target="_blank">Patient portal</a>
    </div>
  </div>
  <div class="oe-wrap" style="margin-top:24px;font-size:0.78rem;color:rgba(255,255,255,0.38)">© 2026 ${P.legal}. All rights reserved.</div>
</footer>
</body>
</html>`;
}

const officeLine = (key) => (key === 'westlake' ? `our Westlake office (${P.westlake})` : `our Elyria office (${P.elyria})`);

function sectionHtml(sections, alt0 = false) {
  return sections
    .map((s, i) => `<section${(i % 2 === 0) === alt0 ? ' class="alt"' : ''}><div class="oe-wrap"><h2>${esc(s.h2)}</h2>${s.body}</div></section>`)
    .join('\n');
}

function faqHtml(faqs) {
  return `<section class="alt"><div class="oe-wrap"><h2>Common questions</h2><div class="oe-faq">${faqs
    .map((f) => `<details><summary>${esc(f.q)}</summary><div>${esc(f.a)}</div></details>`)
    .join('')}</div></div></section>`;
}

const ALL = {};
for (const c of CONDITIONS) ALL[`conditions/${c.slug}`] = { label: c.h1, kicker: c.eyebrow };
for (const t of TREATMENTS) ALL[`treatments/${t.slug}`] = { label: t.h1, kicker: t.eyebrow };
for (const l of LOCATIONS) ALL[`locations/${l.slug}`] = { label: `Endocrinologist near ${l.city}, OH`, kicker: 'Areas We Serve' };

function relatedHtml(paths) {
  const items = paths
    .filter((p) => ALL[p])
    .map((p) => `<a href="../../${p}/">${esc(ALL[p].label)}<span>${esc(ALL[p].kicker)}</span></a>`)
    .join('');
  return `<section><div class="oe-wrap"><h2>Related care</h2><div class="oe-related">${items}</div></div></section>`;
}

function writePage(path, html) {
  const dir = join(OUT, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log('wrote', path + '/index.html');
}

// ---- condition & treatment pages ----
for (const list of [CONDITIONS, TREATMENTS]) {
  const kind = list === CONDITIONS ? 'conditions' : 'treatments';
  const hubLabel = kind === 'conditions' ? 'Conditions' : 'Treatments';
  for (const c of list) {
    const path = `${kind}/${c.slug}`;
    const intro = `<section><div class="oe-wrap">${c.intro.map((p) => `<p style="font-size:1.05rem">${p}</p>`).join('')}</div></section>`;
    const body = intro + sectionHtml(c.sections, true) + faqHtml(c.faqs) + relatedHtml(c.related);
    writePage(path, page({
      path,
      title: c.title,
      metaDesc: c.metaDesc,
      eyebrow: c.eyebrow,
      h1: c.h1,
      heroSub: `Board-certified endocrine care in Elyria & Westlake — and by televisit across Ohio.`,
      crumbs: [{ label: 'Home', href: '../../' }, { label: hubLabel, href: `../../${kind}/` }, { label: c.h1 }],
      bodyHtml: body,
      faqs: c.faqs,
    }));
  }
}

// ---- location pages ----
for (const l of LOCATIONS) {
  const path = `locations/${l.slug}`;
  const title = `Endocrinologist near ${l.city}, OH`;
  const metaDesc = `Looking for an endocrinologist near ${l.city}, Ohio? Ohio Endocrinology treats diabetes, thyroid, and hormone conditions from offices in Elyria and Westlake, plus televisits.`;
  const faqs = [
    { q: `Which office is most convenient from ${l.city}?`, a: `For most patients in ${l.city}, ${officeLine(l.office)} is the convenient choice — and many routine follow-ups can be done by televisit from home.` },
    { q: 'Do I need a referral?', a: `It depends on your insurance plan — many allow direct specialist booking. Call ${P.phone} and we'll help you check.` },
    { q: 'How soon can new patients be seen?', a: `We work hard to keep new-patient scheduling accessible. Call ${P.phone} or send an appointment request online and we'll find you a time promptly.` },
    { q: 'Can I do my visits by video instead?', a: 'Many visits, yes — televisits are available to patients anywhere in Ohio for routine follow-ups and many consultations.' },
  ];
  const body = `
<section><div class="oe-wrap">
  <p style="font-size:1.05rem">If you're searching for an endocrinologist near ${l.city}, you don't need to look toward downtown Cleveland. ${l.context}. Ohio Endocrinology — Diabetes, Thyroid &amp; Endocrinology of Northern Ohio — has been caring for this community since 2009.</p>
  <p>Dr. Vikram Kumar, MD, FACE has practiced endocrinology since 1993 and serves as Division Chief of Endocrinology at Fairview Hospital (Cleveland Clinic) and Chief of Medicine at University Hospital Elyria. Together with Namrata Kumar, MS, PA-C, our team cares for the full range of hormone and metabolic conditions.</p>
</div></section>
<section class="alt"><div class="oe-wrap">
  <h2>What we treat for ${l.city} patients</h2>
  <p>Type 1 and type 2 diabetes (including insulin pumps and continuous glucose monitors), prediabetes, thyroid conditions — underactive and overactive thyroid, nodules, Hashimoto's, Graves' disease — plus PCOS, osteoporosis, and medically supervised GLP-1 weight management.</p>
  <p>We test A1C in-house so results are ready during your visit, and routine follow-ups can often be handled by secure televisit so you skip the drive entirely.</p>
</div></section>
<section><div class="oe-wrap">
  <h2>Visiting us from ${l.city}</h2>
  <p>${l.context}. Appointments are confirmed by phone, and our team will help you figure out referrals and insurance before your first visit. To get started, request an appointment online or call <a href="${P.phoneHref}">${P.phone}</a> — we'll call you back within one business day.</p>
</div></section>` + faqHtml(faqs) + relatedHtml(['conditions/type-2-diabetes', 'conditions/hypothyroidism', 'treatments/glp-1-weight-management', 'treatments/telehealth-endocrinology']);
  writePage(path, page({
    path,
    title,
    metaDesc,
    eyebrow: 'Areas We Serve',
    h1: `Endocrinologist near ${l.city}, Ohio`,
    heroSub: `Diabetes, thyroid, and hormone care for the ${l.city} community — close to home, explained in plain language.`,
    crumbs: [{ label: 'Home', href: '../../' }, { label: 'Locations', href: '../../locations/' }, { label: l.city }],
    bodyHtml: body,
    faqs,
  }));
}

// ---- hub pages ----
function hub(path, title, metaDesc, h1, sub, groups) {
  const body = groups
    .map(
      (g, i) => `<section${i % 2 ? ' class="alt"' : ''}><div class="oe-wrap"><h2>${esc(g.h2)}</h2><div class="oe-related">${g.items
        .map((p) => `<a href="../${p}/">${esc(ALL[p].label)}<span>${esc(ALL[p].kicker)}</span></a>`)
        .join('')}</div></div></section>`
    )
    .join('\n');
  // hub pages live one level up, fix rel paths from the shared template (../../ -> ../)
  const html = page({
    path,
    title,
    metaDesc,
    eyebrow: 'Ohio Endocrinology',
    h1,
    heroSub: sub,
    crumbs: [{ label: 'Home', href: '../' }, { label: title }],
    bodyHtml: body,
    faqs: null,
  }).replaceAll('../../', '../');
  writePage(path, html);
}

hub('conditions', 'Conditions We Treat', 'Endocrine conditions treated at Ohio Endocrinology in Elyria and Westlake: diabetes, thyroid disorders, PCOS, osteoporosis, and more.',
  'Conditions we treat', 'Hormone and metabolic conditions, cared for by specialists — in Elyria, Westlake, and by televisit across Ohio.',
  [
    { h2: 'Diabetes & metabolic health', items: ['conditions/type-2-diabetes', 'conditions/type-1-diabetes', 'conditions/prediabetes', 'conditions/pcos', 'conditions/osteoporosis'] },
    { h2: 'Thyroid conditions', items: ['conditions/hypothyroidism', 'conditions/hyperthyroidism', 'conditions/thyroid-nodules', 'conditions/hashimotos-thyroiditis', 'conditions/graves-disease'] },
  ]);

hub('treatments', 'Treatments & Services', 'Endocrine treatments and services at Ohio Endocrinology: GLP-1 weight management, insulin pumps, CGM, in-house A1C testing, and telehealth.',
  'Treatments & services', 'Modern tools, used well — from GLP-1 therapy to diabetes technology and same-visit lab results.',
  [{ h2: 'Our services', items: TREATMENTS.map((t) => `treatments/${t.slug}`) }]);

hub('locations', 'Areas We Serve', 'Ohio Endocrinology serves Elyria, Westlake, Lorain, Avon, North Ridgeville, and communities across Northern Ohio, plus televisits statewide.',
  'Areas we serve', 'Two offices — Elyria and Westlake — plus secure televisits for patients anywhere in Ohio.',
  [{ h2: 'Communities we serve', items: LOCATIONS.map((l) => `locations/${l.slug}`) }]);

// ---- sitemap.xml & robots.txt ----
const urls = ['', 'conditions/', 'treatments/', 'locations/',
  ...CONDITIONS.map((c) => `conditions/${c.slug}/`),
  ...TREATMENTS.map((t) => `treatments/${t.slug}/`),
  ...LOCATIONS.map((l) => `locations/${l.slug}/`)];
const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${P.domain}/${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`);
console.log('wrote sitemap.xml with', urls.length, 'urls');
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${P.domain}/sitemap.xml\n`);
console.log('wrote robots.txt');
