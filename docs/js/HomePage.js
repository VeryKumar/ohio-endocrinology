// Ohio Endocrinology — homepage (verified facts from content/site-facts.md)
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OEHomeNS = window.OhioEndocrinologyDesignSystem_eecab4;
var OE_DRK = 'assets/source/dr-vikram-kumar.jpg';
var OE_NAM = 'assets/source/namrata-kumar.png';

function Section(_ref) {
  var bg = _ref.bg;
  var children = _ref.children;
  var pad = _ref.pad;
  var id = _ref.id;

  return React.createElement(
    'section',
    { id: id, style: { background: bg || '#fff', padding: (pad || 'var(--oe-section-pad)') + ' 0' } },
    React.createElement(
      'div',
      { style: { maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)' } },
      children
    )
  );
}

function Hero() {
  var Button = OEHomeNS.Button;

  var trust = [['fa-droplet', 'Diabetes'], ['fa-heart-pulse', 'Thyroid'], ['fa-dna', 'Endocrine']];
  var dotGrid = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";
  var heroBg = ['radial-gradient(120% 90% at 85% 15%, rgba(0,180,166,0.28) 0%, rgba(0,180,166,0) 55%)', 'radial-gradient(90% 80% at 8% 90%, rgba(46,125,209,0.35) 0%, rgba(46,125,209,0) 60%)', dotGrid, 'linear-gradient(135deg, #0a2543 0%, #0d2d4e 45%, #123a63 100%)'].join(', ');
  return React.createElement(
    'section',
    { style: { position: 'relative', background: heroBg, color: '#fff', padding: 'calc(var(--oe-section-pad) + 1rem) 0 var(--oe-section-pad)', overflow: 'hidden' } },
    React.createElement(
      'div',
      { style: { maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }, className: 'oe-hero-grid' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--oe-teal)', marginBottom: 22 } },
          React.createElement('span', { style: { width: 32, height: 2, background: 'var(--oe-teal)', display: 'inline-block' } }),
          ' Serving Greater Cleveland since 2009'
        ),
        React.createElement(
          'h1',
          { style: { color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.07, marginBottom: 24 } },
          'World-class care,',
          React.createElement('br', null),
          'from our ',
          React.createElement(
            'span',
            { style: { color: 'var(--oe-teal)' } },
            'family to yours'
          )
        ),
        React.createElement(
          'p',
          { style: { color: 'rgba(255,255,255,0.82)', fontSize: '1.1875rem', lineHeight: 1.65, maxWidth: 540, marginBottom: 32 } },
          'Diabetes, Thyroid & Endocrinology of Northern Ohio — making your diabetes management simple, with convenient offices in Elyria and Westlake near University Hospitals Elyria and Cleveland Clinic Fairview.'
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 34 } },
          React.createElement(
            Button,
            { variant: 'teal', size: 'lg', href: '#appointment', onClick: function (e) {
                e.preventDefault();window.OENav && window.OENav('appointment');
              }, iconLeft: React.createElement('i', { className: 'fa-solid fa-calendar-check' }) },
            'Request Appointment'
          ),
          React.createElement(
            Button,
            { variant: 'outline-white', size: 'lg', href: 'tel:+14403220872', iconLeft: React.createElement('i', { className: 'fa-solid fa-phone' }) },
            window.OE_PHONE
          )
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: 26, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.14)' } },
          trust.map(function (_ref2) {
            var _ref22 = _slicedToArray(_ref2, 2);

            var ic = _ref22[0];
            var t = _ref22[1];
            return React.createElement(
              'span',
              { key: t, style: { display: 'inline-flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem', fontWeight: 500 } },
              React.createElement('i', { className: "fa-solid " + ic, style: { color: 'var(--oe-teal)', fontSize: '1rem' } }),
              ' ',
              t
            );
          })
        )
      ),
      React.createElement(
        'div',
        { style: { position: 'relative' } },
        React.createElement(
          'div',
          { style: { width: '100%', maxWidth: 380, marginInline: 'auto', aspectRatio: '4 / 4.6', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--oe-shadow-xl)', background: 'linear-gradient(135deg,#e2eaf3,#cdd9e8)' } },
          React.createElement('img', { src: OE_DRK, alt: 'Dr. Vikram Kumar, MD, FACE — Founder', style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' } })
        ),
        React.createElement(
          'div',
          { style: { position: 'absolute', top: -20, right: 'calc(50% - 210px)', background: 'var(--oe-navy)', color: '#fff', borderRadius: 18, boxShadow: 'var(--oe-shadow-lg)', padding: '16px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.12)' } },
          React.createElement(
            'div',
            { style: { fontFamily: 'var(--oe-font-display)', fontWeight: 800, fontSize: '1.9rem', color: 'var(--oe-teal)', lineHeight: 1 } },
            '15+'
          ),
          React.createElement(
            'div',
            { style: { fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginTop: 4 } },
            'Years in',
            React.createElement('br', null),
            'practice'
          )
        ),
        React.createElement(
          'div',
          { style: { position: 'absolute', bottom: -20, left: 'calc(50% - 200px)', background: '#fff', borderRadius: 16, boxShadow: 'var(--oe-shadow-lg)', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12 } },
          React.createElement(
            'span',
            { style: { width: 42, height: 42, borderRadius: 11, background: 'var(--oe-gradient-icon)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 } },
            React.createElement('i', { className: 'fa-solid fa-user-doctor' })
          ),
          React.createElement(
            'span',
            null,
            React.createElement(
              'span',
              { style: { display: 'block', fontWeight: 700, color: 'var(--oe-navy)', fontSize: '0.9rem', fontFamily: 'var(--oe-font-display)' } },
              'Dr. Vikram Kumar, MD'
            ),
            React.createElement(
              'span',
              { style: { display: 'block', fontSize: '0.72rem', color: 'var(--oe-text-muted)' } },
              'Founder · FACE, MBBS'
            )
          )
        )
      )
    )
  );
}

function Providers() {
  var SectionHeading = OEHomeNS.SectionHeading;
  var Card = OEHomeNS.Card;
  var Badge = OEHomeNS.Badge;

  var docs = [{
    img: OE_DRK, name: 'Dr. Vikram Kumar, MD, FACE, MBBS', role: 'Founder',
    bio: 'Practicing since 1993, Dr. Kumar founded the practice in 2009. He serves as Division Chief of Endocrinology at Fairview Hospital (Cleveland Clinic) and Chief of Medicine at University Hospital Elyria, and is teaching faculty in the residency program at St John’s Hospital.'
  }, {
    img: OE_NAM, name: 'Namrata “Nam” Kumar, MS, PA-C, MBBS', role: 'Chief Operating Officer',
    bio: 'With 20+ years of practice, Nam specializes in diabetes, thyroid, and endocrine care. She began her career in New Delhi and holds teaching faculty roles in the PA programs at Case Western School of Medicine and Baldwin Wallace.'
  }];
  return React.createElement(
    Section,
    { id: 'practice', bg: 'var(--oe-surface-offwhite)' },
    React.createElement(
      'div',
      { style: { marginBottom: 48 } },
      React.createElement(SectionHeading, { align: 'center', eyebrow: 'Our Practice', title: 'Meet your care team', subtitle: 'World Class Care, From our Family to Yours.' })
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }, className: 'oe-grid-2' },
      docs.map(function (d) {
        return React.createElement(
          Card,
          { key: d.name, hover: false },
          React.createElement(
            'div',
            { style: { display: 'flex', gap: 20, padding: 'var(--oe-sp-6)', alignItems: 'flex-start' }, className: 'oe-provider' },
            React.createElement('img', { src: d.img, alt: d.name, style: { width: 104, height: 130, borderRadius: 14, objectFit: 'cover', flexShrink: 0, boxShadow: 'var(--oe-shadow-sm)' } }),
            React.createElement(
              'div',
              null,
              React.createElement(
                Badge,
                { color: 'teal' },
                d.role
              ),
              React.createElement(
                'h3',
                { style: { fontSize: '1.25rem', margin: '10px 0 8px' } },
                d.name
              ),
              React.createElement(
                'p',
                { style: { fontSize: '0.875rem', color: 'var(--oe-text-muted)', lineHeight: 1.65 } },
                d.bio
              )
            )
          )
        );
      })
    )
  );
}

function Services(_ref3) {
  var onNav = _ref3.onNav;
  var SectionHeading = OEHomeNS.SectionHeading;
  var Card = OEHomeNS.Card;
  var CardBody = OEHomeNS.CardBody;
  var CardIcon = OEHomeNS.CardIcon;
  var CardTitle = OEHomeNS.CardTitle;
  var CardText = OEHomeNS.CardText;
  var CardLink = OEHomeNS.CardLink;
  var Badge = OEHomeNS.Badge;

  var svc = window.OE_SERVICES || [];
  return React.createElement(
    Section,
    { id: 'services' },
    React.createElement(
      'div',
      { style: { marginBottom: 48 } },
      React.createElement(SectionHeading, { align: 'center', eyebrow: 'Our Services', title: 'Making diabetes management simple', subtitle: 'Comprehensive, in-house diabetes and endocrine care under one roof.' })
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }, className: 'oe-grid-3' },
      svc.map(function (s) {
        return React.createElement(
          Card,
          { key: s.slug },
          React.createElement(
            CardBody,
            null,
            React.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
              React.createElement(
                CardIcon,
                null,
                window.OEsvcIcon(s, '1.5rem')
              ),
              s.badge && React.createElement(
                Badge,
                { color: 'gold' },
                s.badge
              )
            ),
            React.createElement(
              CardTitle,
              null,
              s.title
            ),
            React.createElement(
              CardText,
              null,
              s.blurb
            ),
            React.createElement(
              'span',
              { onClick: function () {
                  onNav('service:' + s.slug);window.scrollTo({ top: 0 });
                }, style: { cursor: 'pointer', marginTop: 'auto' } },
              React.createElement(
                CardLink,
                { href: '#' },
                'Learn more'
              )
            )
          )
        );
      })
    )
  );
}

function Stats() {
  var StatsStrip = OEHomeNS.StatsStrip;
  var Stat = OEHomeNS.Stat;

  return React.createElement(
    Section,
    { pad: 'var(--oe-section-pad-sm)' },
    React.createElement(
      StatsStrip,
      { variant: 'navy' },
      React.createElement(Stat, { number: '2009', numberColor: '#fff', label: 'Founded in Northern Ohio' }),
      React.createElement(Stat, { number: '30+', numberColor: '#fff', label: 'Years Dr. Kumar practicing' }),
      React.createElement(Stat, { number: '15+', numberColor: '#fff', label: 'Years serving our community' }),
      React.createElement(Stat, { number: '100K+', numberColor: '#fff', label: 'Satisfied patients' })
    )
  );
}

function NewPatients() {
  var SectionHeading = OEHomeNS.SectionHeading;
  var Button = OEHomeNS.Button;
  var Alert = OEHomeNS.Alert;

  return React.createElement(
    Section,
    { id: 'newpatients', bg: 'var(--oe-surface-offwhite)' },
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }, className: 'oe-grid-2' },
      React.createElement(
        'div',
        null,
        React.createElement(SectionHeading, { eyebrow: 'New Patients', title: 'Your first visit, made easy' }),
        React.createElement(
          'p',
          { style: { color: 'var(--oe-text-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 24 } },
          'We make sure all our new patients feel welcome, safe, and taken care of. During your first visit, a doctor will review your medical history and perform a full examination, then explain any issues and help you choose treatment options. We typically provide any important laboratory slips at the end of the visit so you can complete tests when it’s most convenient.'
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: 12, flexWrap: 'wrap' } },
          React.createElement(
            Button,
            { variant: 'primary', href: window.OE_PORTAL, target: '_blank', rel: 'noopener', iconLeft: React.createElement('i', { className: 'fa-solid fa-user-plus' }) },
            'Register on the Portal'
          ),
          React.createElement(
            Button,
            { variant: 'outline', href: 'tel:+14403220872', iconLeft: React.createElement('i', { className: 'fa-solid fa-phone' }) },
            'Call ',
            window.OE_PHONE
          )
        ),
        React.createElement(
          'p',
          { style: { fontSize: '0.9rem', marginTop: 14 } },
          'Registering takes about 10 minutes — ',
          React.createElement(
            'a',
            { href: 'portal-help/' },
            'see what you\'ll need before you start'
          ),
          '. Prefer we handle it? ',
          React.createElement(
            'a',
            { href: '#appointment', onClick: function (e) {
                e.preventDefault();window.OENav && window.OENav('appointment');
              } },
            'Send an appointment request'
          ),
          ' and we\'ll walk you through everything by phone.'
        )
      ),
      React.createElement(
        Alert,
        { variant: 'warning', title: 'Cancellation policy' },
        'To avoid a $50 fee, please notify us at least 24 hours before your appointment to cancel or reschedule.'
      )
    )
  );
}

function Voices() {
  var SectionHeading = OEHomeNS.SectionHeading;
  var Testimonial = OEHomeNS.Testimonial;

  var t = [[5, 'My experience with the office was a great one. There was no wait for my appointment and the physician assistant was very thorough and friendly. Dr. Kumar was very nice also. They are awesome and I love that I can do televisits anytime!', 'Denise R.', 'Elementary school teacher · Elyria'], [5, 'Dr. Kumar and his PA, Nam, are an awesome team! Together the two of them got my blood sugars on track!', 'Marcus T.', 'Line worker · Lorain'], [5, 'They saved my life as far as I’m concerned. By adjusting my medication and explaining everything, I feel better than I have in years about my diabetes.', 'Robert K.', 'Retired police officer · Avon'], [5, 'My first visit with Dr. Kumar and Nam was excellent. They were both very attentive and Nam answered all my questions and gave me hope that my health issues can be managed. You have to give them a shot — they really care.', 'Anita P.', 'Registered nurse · Westlake']];
  return React.createElement(
    Section,
    { id: 'testimonials' },
    React.createElement(
      'div',
      { style: { marginBottom: 48 } },
      React.createElement(SectionHeading, { align: 'center', eyebrow: 'Patient Voices', title: 'What our patients say' })
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }, className: 'oe-grid-2' },
      t.map(function (x, i) {
        return React.createElement(Testimonial, { key: i, rating: x[0], quote: x[1], author: x[2], detail: x[3] });
      })
    )
  );
}

function Locations() {
  var SectionHeading = OEHomeNS.SectionHeading;
  var Card = OEHomeNS.Card;
  var Badge = OEHomeNS.Badge;

  var offices = [{ name: 'Elyria', tag: 'Primary office', addr: ['673 E River St', 'Elyria, OH 44035'], days: 'Mon, Tue, Wed PM, Fri', map: 'https://www.google.com/maps?q=673+E+River+St,+Elyria,+OH+44035&output=embed' }, { name: 'Westlake', tag: 'Satellite office', addr: ['25200 Center Ridge Rd, Suite 1100', 'Westlake, OH 44145'], days: '2nd Wednesday of each month, AM only', map: 'https://www.google.com/maps?q=25200+Center+Ridge+Rd,+Westlake,+OH+44145&output=embed' }];
  return React.createElement(
    Section,
    { id: 'contact', bg: 'var(--oe-surface-offwhite)' },
    React.createElement(
      'div',
      { style: { marginBottom: 40 } },
      React.createElement(SectionHeading, { align: 'center', eyebrow: 'Locations', title: 'Two offices near you', subtitle: 'Convenient to University Hospitals Elyria and Cleveland Clinic Fairview — or see us from home by televisit.' })
    ),
    React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'center', marginBottom: 36 } },
      React.createElement(
        'div',
        { style: { display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--oe-gradient-icon-soft)', border: '1px solid rgba(0,180,166,0.25)', borderRadius: 'var(--oe-radius-pill)', padding: '10px 20px' } },
        React.createElement(
          'span',
          { style: { width: 34, height: 34, borderRadius: '50%', background: 'var(--oe-gradient-icon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
          React.createElement('i', { className: 'fa-solid fa-video' })
        ),
        React.createElement(
          'span',
          { style: { fontSize: '0.95rem', color: 'var(--oe-navy)' } },
          React.createElement(
            'strong',
            null,
            'Televisits welcome'
          ),
          ' — many follow-ups can be done by secure video from anywhere in Ohio.'
        )
      )
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }, className: 'oe-grid-2' },
      offices.map(function (o) {
        return React.createElement(
          Card,
          { key: o.name, hover: false, style: { overflow: 'hidden' } },
          React.createElement(
            'div',
            { style: { height: 200, background: 'var(--oe-slate-100)' } },
            React.createElement('iframe', {
              title: o.name + ' office map',
              src: o.map,
              loading: 'lazy',
              referrerPolicy: 'no-referrer-when-downgrade',
              className: 'oe-map',
              style: { width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(1)', transition: 'filter var(--oe-transition-slow)' }
            })
          ),
          React.createElement(
            'div',
            { style: { padding: 'var(--oe-sp-8)' } },
            React.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 } },
              React.createElement(
                'span',
                { style: { width: 48, height: 48, borderRadius: 12, background: 'var(--oe-gradient-icon-soft)', color: 'var(--oe-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' } },
                React.createElement('i', { className: 'fa-solid fa-location-dot' })
              ),
              React.createElement(
                'div',
                null,
                React.createElement(
                  'h3',
                  { style: { fontSize: '1.25rem', margin: 0 } },
                  o.name
                ),
                React.createElement(
                  'div',
                  { style: { fontSize: '0.78rem', color: 'var(--oe-teal)', fontWeight: 600 } },
                  o.tag
                )
              )
            ),
            React.createElement(
              'div',
              { style: { color: 'var(--oe-text-muted)', lineHeight: 1.7, marginBottom: 12 } },
              o.addr.map(function (l) {
                return React.createElement(
                  'div',
                  { key: l },
                  l
                );
              })
            ),
            React.createElement(
              'div',
              { style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--oe-navy)', fontWeight: 600 } },
              React.createElement('i', { className: 'fa-regular fa-clock', style: { color: 'var(--oe-teal)' } }),
              ' ',
              o.days
            )
          )
        );
      })
    )
  );
}

// Submissions go to Netlify Forms (same-origin POST — no third-party relay).
// Netlify detects the hidden static form in index.html and emails + stores each submission.
var OE_FORM_NAME = 'appointment-request';

function AppointmentRequest() {
  var _this = this;

  var SectionHeading = OEHomeNS.SectionHeading;
  var Button = OEHomeNS.Button;
  var Input = OEHomeNS.Input;
  var Select = OEHomeNS.Select;
  var Textarea = OEHomeNS.Textarea;
  var HipaaNotice = OEHomeNS.HipaaNotice;
  var Alert = OEHomeNS.Alert;

  var _React$useState = React.useState('idle');

  var _React$useState2 = _slicedToArray(_React$useState, 2);

  var status = _React$useState2[0];
  var setStatus = _React$useState2[1];
  // idle | sending | sent | error

  var _React$useState3 = React.useState({ name: '', phone: '', email: '', office: '', patientType: '', service: '', date: '', time: '', message: '', _honey: '' });

  var _React$useState32 = _slicedToArray(_React$useState3, 2);

  var form = _React$useState32[0];
  var setForm = _React$useState32[1];

  var set = function set(k) {
    return function (e) {
      return setForm(function (f) {
        return _extends({}, f, _defineProperty({}, k, e.target.value));
      });
    };
  };
  var submit = function submit(e) {
    var params, res;
    return regeneratorRuntime.async(function submit$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          e.preventDefault();

          if (!form._honey) {
            context$2$0.next = 3;
            break;
          }

          return context$2$0.abrupt('return');

        case 3:
          // bot honeypot
          setStatus('sending');
          context$2$0.prev = 4;
          params = new URLSearchParams();

          params.append('form-name', OE_FORM_NAME);
          params.append('botcheck', form._honey);
          params.append('Name', form.name);
          params.append('Email Address', form.email || '(not provided)');
          params.append('Phone', form.phone);
          params.append('Are you a new patient?', form.patientType === 'New patient' ? 'Yes' : form.patientType === 'Returning patient' ? 'No' : '(not selected)');
          params.append('Service', form.service || 'Other');
          params.append('Preferred office', form.office || 'No preference');
          params.append('Date', form.date || '(none given)');
          params.append('Time', form.time || 'No preference');
          params.append('Comments or Questions', form.message || '(none)');
          context$2$0.next = 19;
          return regeneratorRuntime.awrap(fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
          }));

        case 19:
          res = context$2$0.sent;

          if (res.ok) {
            context$2$0.next = 22;
            break;
          }

          throw new Error('submit failed: ' + res.status);

        case 22:
          setStatus('sent');
          context$2$0.next = 28;
          break;

        case 25:
          context$2$0.prev = 25;
          context$2$0.t0 = context$2$0['catch'](4);

          setStatus('error');

        case 28:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[4, 25]]);
  };
  return React.createElement(
    Section,
    { id: 'appointment' },
    React.createElement(
      'div',
      { style: { maxWidth: 780, margin: '0 auto' } },
      React.createElement(
        'div',
        { style: { marginBottom: 40 } },
        React.createElement(SectionHeading, {
          align: 'center',
          eyebrow: 'Request an Appointment',
          title: 'Tell us a little about you',
          subtitle: 'Send your details and our team will call you within one business day to find a time that works.'
        })
      ),
      status === 'sent' ? React.createElement(
        Alert,
        { variant: 'success', title: 'Request received' },
        'Thank you — we’ll call you within one business day to confirm your appointment. If you need us sooner, call ',
        React.createElement(
          'a',
          { href: 'tel:+14403220872' },
          window.OE_PHONE
        ),
        '.'
      ) : React.createElement(
        'form',
        { onSubmit: submit, noValidate: false },
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }, className: 'oe-form-row' },
          React.createElement(Input, { label: 'Full name', required: true, name: 'name', autoComplete: 'name', value: form.name, onChange: set('name') }),
          React.createElement(Input, { label: 'Phone', required: true, type: 'tel', name: 'phone', autoComplete: 'tel', value: form.phone, onChange: set('phone'), hint: 'We confirm appointments by phone.' })
        ),
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }, className: 'oe-form-row' },
          React.createElement(Input, { label: 'Email', type: 'email', name: 'email', autoComplete: 'email', value: form.email, onChange: set('email'), hint: 'Optional.' }),
          React.createElement(Select, {
            label: 'Preferred office',
            placeholder: 'No preference',
            options: ['Elyria (primary)', 'Westlake (satellite)', 'Televisit'],
            value: form.office,
            onChange: set('office')
          })
        ),
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }, className: 'oe-form-row' },
          React.createElement(Select, {
            label: 'Are you a new or returning patient?',
            placeholder: 'Please choose',
            options: ['New patient', 'Returning patient'],
            value: form.patientType,
            onChange: set('patientType')
          }),
          React.createElement(Select, {
            label: 'What do you need help with?',
            placeholder: 'Choose a service',
            options: [].concat(_toConsumableArray((window.OE_SERVICES || []).map(function (s) {
              return s.title;
            })), ['Other']),
            value: form.service,
            onChange: set('service')
          })
        ),
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }, className: 'oe-form-row' },
          React.createElement(Input, {
            label: 'Preferred date',
            type: 'date',
            value: form.date,
            onChange: set('date'),
            hint: 'Optional — we\'ll confirm the exact time by phone.'
          }),
          React.createElement(Select, {
            label: 'Preferred time',
            placeholder: 'No preference',
            options: ['Morning', 'Afternoon'],
            value: form.time,
            onChange: set('time')
          })
        ),
        React.createElement(
          'div',
          { style: { marginBottom: 20 } },
          React.createElement(Textarea, {
            label: 'Anything else we should know?',
            rows: 4,
            value: form.message,
            onChange: set('message'),
            hint: 'Please don\'t include specific medical details — we\'ll cover those at your visit.'
          })
        ),
        React.createElement('input', { type: 'text', name: '_honey', value: form._honey, onChange: set('_honey'), tabIndex: -1, autoComplete: 'off', style: { position: 'absolute', left: -9999, height: 0, width: 0, opacity: 0 }, 'aria-hidden': 'true' }),
        React.createElement(
          'div',
          { style: { marginBottom: 24 } },
          React.createElement(HipaaNotice, null)
        ),
        status === 'error' && React.createElement(
          'div',
          { style: { marginBottom: 20 } },
          React.createElement(
            Alert,
            { variant: 'error', title: 'Something went wrong' },
            'Your request couldn’t be sent. Please try again, or call us at ',
            React.createElement(
              'a',
              { href: 'tel:+14403220872' },
              window.OE_PHONE
            ),
            ' — we’re happy to help.'
          )
        ),
        React.createElement(
          Button,
          { variant: 'primary', size: 'lg', type: 'submit', fullWidth: true, disabled: status === 'sending', iconLeft: React.createElement('i', { className: 'fa-solid fa-calendar-check' }) },
          status === 'sending' ? 'Sending…' : 'Request Appointment'
        )
      )
    )
  );
}

function CTA() {
  var Button = OEHomeNS.Button;

  return React.createElement(
    'section',
    { style: { background: 'var(--oe-gradient-teal)', color: '#fff', padding: 'var(--oe-section-pad) 0' } },
    React.createElement(
      'div',
      { style: { maxWidth: 760, margin: '0 auto', padding: '0 var(--oe-container-pad)', textAlign: 'center' } },
      React.createElement(
        'h2',
        { style: { color: '#fff', marginBottom: 16 } },
        'Ready to take control of your health?'
      ),
      React.createElement(
        'p',
        { style: { color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: 28 } },
        'Register online through our secure patient portal, or call — we’re here to help.'
      ),
      React.createElement(
        'div',
        { style: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' } },
        React.createElement(
          Button,
          { variant: 'outline-white', size: 'lg', href: '#appointment', onClick: function (e) {
              e.preventDefault();window.OENav && window.OENav('appointment');
            } },
          'Request Appointment'
        ),
        React.createElement(
          Button,
          { variant: 'gold', size: 'lg', href: 'tel:+14403220872', iconLeft: React.createElement('i', { className: 'fa-solid fa-phone' }) },
          'Call ',
          window.OE_PHONE
        )
      )
    )
  );
}

function HomePage(_ref4) {
  var onNav = _ref4.onNav;

  return React.createElement(
    'div',
    null,
    React.createElement(Hero, null),
    React.createElement(Providers, null),
    React.createElement(Services, { onNav: onNav }),
    React.createElement(Stats, null),
    React.createElement(NewPatients, null),
    React.createElement(Voices, null),
    React.createElement(Locations, null),
    React.createElement(AppointmentRequest, null),
    React.createElement(CTA, null)
  );
}

window.OEHomePage = HomePage;
/* honeypot — hidden from people, filled only by bots */
