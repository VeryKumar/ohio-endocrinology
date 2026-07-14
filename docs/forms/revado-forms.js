/* Revado Forms — lightweight multi-step form engine.
   Renders steps with validation + review screen, submits to Web3Forms.
   Config: RevadoForm('root', { name, subjectPrefix, endpoint, accessKey, steps: [{ title, icon, fields: [...] }] })
   Field: { key, label, type: 'text|tel|email|date|select|textarea', required, options, hint, half } */
(function () {
  'use strict';

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined) return;
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k.indexOf('on') === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  window.RevadoForm = function (rootId, cfg) {
    var root = document.getElementById(rootId);
    var state = {};
    var step = 0;
    var total = cfg.steps.length + 1; // + review step
    var honey = '';

    function fieldControl(f) {
      var common = {
        id: 'rf-' + f.key, name: f.key,
        class: 'rf-control', 'aria-required': f.required ? 'true' : 'false',
        oninput: function (e) { state[f.key] = e.target.value; e.target.classList.remove('rf-invalid'); },
        onchange: function (e) { state[f.key] = e.target.value; e.target.classList.remove('rf-invalid'); },
      };
      if (f.type === 'select') {
        var s = el('select', common);
        s.appendChild(el('option', { value: '', text: f.placeholder || 'Please choose' }));
        (f.options || []).forEach(function (o) {
          s.appendChild(el('option', { value: o, text: o, selected: state[f.key] === o ? 'selected' : null }));
        });
        if (state[f.key]) s.value = state[f.key];
        return s;
      }
      if (f.type === 'textarea') {
        common.rows = 4;
        var t = el('textarea', common);
        t.value = state[f.key] || '';
        return t;
      }
      common.type = f.type || 'text';
      if (f.autocomplete) common.autocomplete = f.autocomplete;
      var i = el('input', common);
      i.value = state[f.key] || '';
      return i;
    }

    function renderStep() {
      root.innerHTML = '';
      var isReview = step === cfg.steps.length;

      // progress
      var pct = Math.round(((step) / total) * 100);
      root.appendChild(el('div', { class: 'rf-progress' }, [
        el('div', { class: 'rf-progress-label', text: isReview ? 'Review & send' : 'Step ' + (step + 1) + ' of ' + cfg.steps.length + ' — ' + cfg.steps[step].title }),
        el('div', { class: 'rf-bar' }, [el('div', { class: 'rf-bar-fill', style: 'width:' + Math.max(pct, 8) + '%' })]),
      ]));

      var body;
      if (isReview) {
        body = el('div', { class: 'rf-review' });
        cfg.steps.forEach(function (s, si) {
          var box = el('div', { class: 'rf-review-group' });
          box.appendChild(el('div', { class: 'rf-review-head' }, [
            el('span', { text: s.title }),
            el('a', { href: '#', text: 'Edit', onclick: function (e) { e.preventDefault(); step = si; renderStep(); } }),
          ]));
          s.fields.forEach(function (f) {
            box.appendChild(el('div', { class: 'rf-review-row' }, [
              el('span', { class: 'rf-review-label', text: f.label }),
              el('span', { class: 'rf-review-val', text: state[f.key] || '—' }),
            ]));
          });
          body.appendChild(box);
        });
        body.appendChild(el('p', { class: 'rf-note', html: 'By sending, you confirm this information is accurate. Please <strong>don’t include medical details</strong> — we’ll cover those privately at your visit.' }));
      } else {
        body = el('div', { class: 'rf-grid' });
        cfg.steps[step].fields.forEach(function (f) {
          var w = el('div', { class: 'rf-field' + (f.half ? ' rf-half' : '') });
          w.appendChild(el('label', { for: 'rf-' + f.key, html: f.label + (f.required ? ' <span class="rf-req">*</span>' : '') }));
          w.appendChild(fieldControl(f));
          if (f.hint) w.appendChild(el('div', { class: 'rf-hint', text: f.hint }));
          body.appendChild(w);
        });
      }
      root.appendChild(body);

      // honeypot
      var hp = el('input', { type: 'text', name: '_rf_honey', tabindex: '-1', 'aria-hidden': 'true', autocomplete: 'off', class: 'rf-honey', oninput: function (e) { honey = e.target.value; } });
      root.appendChild(hp);

      // nav buttons
      var nav = el('div', { class: 'rf-nav' });
      if (step > 0) nav.appendChild(el('button', { type: 'button', class: 'rf-btn rf-btn-ghost', text: 'Back', onclick: function () { step--; renderStep(); window.scrollTo({ top: root.getBoundingClientRect().top + window.scrollY - 120 }); } }));
      nav.appendChild(el('button', {
        type: 'button',
        class: 'rf-btn rf-btn-primary',
        text: isReview ? 'Send to our office' : 'Continue',
        onclick: isReview ? submit : next,
      }));
      root.appendChild(nav);
    }

    function next() {
      var ok = true;
      cfg.steps[step].fields.forEach(function (f) {
        var node = document.getElementById('rf-' + f.key);
        var v = (state[f.key] || '').trim();
        var bad = (f.required && !v) ||
          (v && f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) ||
          (v && f.type === 'tel' && v.replace(/\D/g, '').length < 10);
        if (bad) { node.classList.add('rf-invalid'); ok = false; }
      });
      if (!ok) return;
      step++;
      renderStep();
      window.scrollTo({ top: root.getBoundingClientRect().top + window.scrollY - 120 });
    }

    function submit() {
      if (honey) return;
      var btns = root.querySelectorAll('.rf-btn');
      btns.forEach(function (b) { b.disabled = true; });
      btns[btns.length - 1].textContent = 'Sending…';
      var payload = {
        access_key: cfg.accessKey,
        subject: cfg.subjectPrefix + ': ' + (state[cfg.nameKey || 'name'] || 'submission'),
        from_name: 'Ohio Endocrinology Website — Revado Forms',
        botcheck: honey,
      };
      cfg.steps.forEach(function (s) {
        s.fields.forEach(function (f) { payload[f.label] = state[f.key] || '(not provided)'; });
      });
      var emailField = cfg.steps.flatMap(function (s) { return s.fields; }).find(function (f) { return f.type === 'email'; });
      if (emailField && state[emailField.key]) payload.email = state[emailField.key];

      fetch(cfg.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok && d.success }; }); })
        .catch(function () { return { ok: false }; })
        .then(function (res) {
          root.innerHTML = '';
          if (res.ok) {
            root.appendChild(el('div', { class: 'rf-done' }, [
              el('div', { class: 'rf-done-icon', text: '✓' }),
              el('h3', { text: 'Sent — thank you!' }),
              el('p', { html: 'Our team has received your ' + cfg.name.toLowerCase() + ' and will call you within one business day. Need us sooner? Call <a href="tel:+14403220872">(440) 322-0872</a>.' }),
            ]));
          } else {
            root.appendChild(el('div', { class: 'rf-done rf-done-err' }, [
              el('h3', { text: 'Something went wrong' }),
              el('p', { html: 'Your form couldn’t be sent. Please try again, or call us at <a href="tel:+14403220872">(440) 322-0872</a> — we’re happy to help.' }),
              el('button', { type: 'button', class: 'rf-btn rf-btn-primary', text: 'Try again', onclick: function () { renderStep(); } }),
            ]));
          }
        });
    }

    renderStep();
  };
})();
