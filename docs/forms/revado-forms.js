/* Revado Forms — lightweight multi-step form engine.
   Steps with inline validation, animated transitions, stepper UI, review screen; submits to Web3Forms.
   Config: RevadoForm('root', { name, subjectPrefix, endpoint, accessKey, steps: [{ title, fields: [...] }] })
   Field: { key, label, type: 'text|tel|email|date|select|textarea', required, options, hint, half, autocomplete } */
(function () {
  'use strict';

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE_POINTER = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

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

  function formatPhone(v) {
    var d = v.replace(/\D/g, '').slice(0, 10);
    if (d.length > 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
    if (d.length > 3) return '(' + d.slice(0, 3) + ') ' + d.slice(3);
    if (d.length > 0) return '(' + d;
    return '';
  }

  window.RevadoForm = function (rootId, cfg) {
    var root = document.getElementById(rootId);
    var state = {};
    var step = 0;
    var maxVisited = 0;
    var honey = '';

    function scrollToTop() {
      var y = root.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: REDUCED ? 'auto' : 'smooth' });
    }

    function setError(f, msg) {
      var node = document.getElementById('rf-' + f.key);
      var err = document.getElementById('rf-err-' + f.key);
      if (!node) return;
      if (msg) {
        node.classList.add('rf-invalid');
        node.setAttribute('aria-invalid', 'true');
        if (err) { err.textContent = msg; err.classList.add('rf-error-show'); }
        if (!REDUCED) {
          node.classList.remove('rf-shake');
          void node.offsetWidth; // restart animation
          node.classList.add('rf-shake');
        }
      } else {
        node.classList.remove('rf-invalid');
        node.removeAttribute('aria-invalid');
        if (err) { err.textContent = ''; err.classList.remove('rf-error-show'); }
      }
    }

    function validateField(f) {
      var v = (state[f.key] || '').trim();
      if (f.required && !v) return 'Please fill this in — we need it to help you.';
      if (v && f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) return 'That email doesn’t look right — mind checking it?';
      if (v && f.type === 'tel' && v.replace(/\D/g, '').length < 10) return 'Please enter a 10-digit phone number.';
      return '';
    }

    function fieldControl(f) {
      var common = {
        id: 'rf-' + f.key, name: f.key, class: 'rf-control',
        'aria-required': f.required ? 'true' : null,
        'aria-describedby': 'rf-err-' + f.key,
      };
      var onInput = function (e) {
        var v = e.target.value;
        if (f.type === 'tel') {
          v = formatPhone(v);
          e.target.value = v;
        }
        state[f.key] = v;
        setError(f, '');
      };
      if (f.type === 'select') {
        common.onchange = onInput;
        var s = el('select', common);
        s.appendChild(el('option', { value: '', text: f.placeholder || 'Please choose' }));
        (f.options || []).forEach(function (o) { s.appendChild(el('option', { value: o, text: o })); });
        if (state[f.key]) s.value = state[f.key];
        return s;
      }
      common.oninput = onInput;
      if (f.type === 'textarea') {
        common.rows = 4;
        var t = el('textarea', common);
        t.value = state[f.key] || '';
        return t;
      }
      common.type = f.type || 'text';
      if (f.autocomplete) common.autocomplete = f.autocomplete;
      if (f.type === 'tel') { common.inputmode = 'tel'; }
      if (f.type === 'email') { common.inputmode = 'email'; }
      if (/zip/i.test(f.key)) { common.inputmode = 'numeric'; common.maxlength = '10'; }
      var i = el('input', common);
      i.value = state[f.key] || '';
      return i;
    }

    function stepper(isReview) {
      var labels = cfg.steps.map(function (s) { return s.title; }).concat(['Review']);
      var current = isReview ? cfg.steps.length : step;
      var pct = labels.length > 1 ? (current / (labels.length - 1)) * 100 : 0;
      var row = el('div', { class: 'rf-steps', role: 'list', 'aria-label': 'Form progress' }, [
        el('div', { class: 'rf-steps-track' }),
        el('div', { class: 'rf-steps-fill', style: 'width:' + pct + '%' }),
      ]);
      labels.forEach(function (label, i) {
        var done = i < current;
        var cls = 'rf-dot' + (done ? ' rf-dot-done' : '') + (i === current ? ' rf-dot-current' : '');
        var clickable = i <= maxVisited && i !== current;
        var dot = el('button', {
          type: 'button', class: cls, role: 'listitem',
          'aria-label': 'Step ' + (i + 1) + ': ' + label + (done ? ' (completed)' : i === current ? ' (current)' : ''),
          'aria-current': i === current ? 'step' : null,
          disabled: clickable ? null : 'disabled',
          onclick: clickable ? function () { step = i; render(); scrollToTop(); } : null,
        }, [el('span', { class: 'rf-dot-inner', html: done ? '<i class="fa-solid fa-check"></i>' : String(i + 1) })]);
        dot.appendChild(el('span', { class: 'rf-dot-label', text: label }));
        row.appendChild(dot);
      });
      return row;
    }

    function render() {
      var isReview = step === cfg.steps.length;
      if (step > maxVisited) maxVisited = step;
      root.innerHTML = '';
      root.appendChild(stepper(isReview));
      root.appendChild(el('div', { class: 'rf-step-title', text: isReview ? 'Almost done — check your details' : cfg.steps[step].title }));

      var body = el('div', { class: REDUCED ? '' : 'rf-anim' });
      if (isReview) {
        var rev = el('div', { class: 'rf-review' });
        cfg.steps.forEach(function (s, si) {
          var box = el('div', { class: 'rf-review-group' });
          box.appendChild(el('div', { class: 'rf-review-head' }, [
            el('span', { text: s.title }),
            el('a', { href: '#', text: 'Edit', onclick: function (e) { e.preventDefault(); step = si; render(); scrollToTop(); } }),
          ]));
          s.fields.forEach(function (f) {
            box.appendChild(el('div', { class: 'rf-review-row' }, [
              el('span', { class: 'rf-review-label', text: f.label }),
              el('span', { class: 'rf-review-val', text: state[f.key] || '—' }),
            ]));
          });
          rev.appendChild(box);
        });
        rev.appendChild(el('p', { class: 'rf-note', html: 'By sending, you confirm this information is accurate. Please <strong>don’t include medical details</strong> — we’ll cover those privately at your visit.' }));
        body.appendChild(rev);
      } else {
        var grid = el('div', { class: 'rf-grid' });
        cfg.steps[step].fields.forEach(function (f) {
          var w = el('div', { class: 'rf-field' + (f.half ? ' rf-half' : '') });
          w.appendChild(el('label', { for: 'rf-' + f.key, html: f.label + (f.required ? ' <span class="rf-req">*</span>' : '') }));
          w.appendChild(fieldControl(f));
          w.appendChild(el('div', { class: 'rf-error', id: 'rf-err-' + f.key, role: 'alert' }));
          if (f.hint) w.appendChild(el('div', { class: 'rf-hint', text: f.hint }));
          grid.appendChild(w);
        });
        body.appendChild(grid);
      }
      root.appendChild(body);

      var hp = el('input', { type: 'text', name: '_rf_honey', tabindex: '-1', 'aria-hidden': 'true', autocomplete: 'off', class: 'rf-honey', oninput: function (e) { honey = e.target.value; } });
      root.appendChild(hp);

      var nav = el('div', { class: 'rf-nav' });
      if (step > 0) nav.appendChild(el('button', { type: 'button', class: 'rf-btn rf-btn-ghost', html: '<i class="fa-solid fa-arrow-left"></i> Back', onclick: function () { step--; render(); scrollToTop(); } }));
      nav.appendChild(el('button', {
        type: 'button', class: 'rf-btn rf-btn-primary',
        html: isReview ? 'Send to our office <i class="fa-solid fa-paper-plane"></i>' : 'Continue <i class="fa-solid fa-arrow-right"></i>',
        onclick: isReview ? submit : next,
      }));
      root.appendChild(nav);

      // focus first control on desktop only (avoids keyboard pop on phones)
      if (FINE_POINTER && !isReview) {
        var first = root.querySelector('.rf-control');
        if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, REDUCED ? 0 : 220);
      }
    }

    function next() {
      var firstBad = null;
      cfg.steps[step].fields.forEach(function (f) {
        var msg = validateField(f);
        setError(f, msg);
        if (msg && !firstBad) firstBad = f;
      });
      if (firstBad) {
        var node = document.getElementById('rf-' + firstBad.key);
        if (node) node.focus({ preventScroll: false });
        return;
      }
      step++;
      render();
      scrollToTop();
    }

    function submit() {
      if (honey) return;
      var btns = root.querySelectorAll('.rf-btn');
      btns.forEach(function (b) { b.disabled = true; });
      btns[btns.length - 1].innerHTML = '<span class="rf-spinner"></span> Sending…';
      var payload = {
        access_key: cfg.accessKey,
        subject: cfg.subjectPrefix + ' — ' + (state[cfg.nameKey || 'name'] || 'submission'),
        from_name: 'Ohio Endocrinology Website — Revado Forms',
        botcheck: honey,
      };
      cfg.steps.forEach(function (s) {
        s.fields.forEach(function (f) { payload[f.label] = state[f.key] || '(not provided)'; });
      });
      var emailField = null;
      cfg.steps.forEach(function (s) { s.fields.forEach(function (f) { if (f.type === 'email') emailField = f; }); });
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
            root.appendChild(el('div', { class: 'rf-done' + (REDUCED ? '' : ' rf-anim') }, [
              el('div', { class: 'rf-done-icon' + (REDUCED ? '' : ' rf-pop'), html: '<i class="fa-solid fa-check"></i>' }),
              el('h3', { text: 'Sent — thank you!' }),
              el('p', { html: 'Our team has received your ' + cfg.name.toLowerCase() + ' and will call you within one business day. Need us sooner? Call <a href="tel:+14403220872">(440) 322-0872</a>.' }),
            ]));
            scrollToTop();
          } else {
            root.appendChild(el('div', { class: 'rf-done rf-done-err' }, [
              el('h3', { text: 'Something went wrong' }),
              el('p', { html: 'Your form couldn’t be sent. Please try again, or call us at <a href="tel:+14403220872">(440) 322-0872</a> — we’re happy to help.' }),
              el('button', { type: 'button', class: 'rf-btn rf-btn-primary', text: 'Try again', onclick: function () { render(); } }),
            ]));
          }
        });
    }

    // Enter advances (except in textarea)
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'textarea' || tag === 'button' || tag === 'a') return;
      e.preventDefault();
      if (step < cfg.steps.length) next();
    });

    render();
  };
})();
