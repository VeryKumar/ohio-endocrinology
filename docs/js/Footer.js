// Ohio Endocrinology — contact strip + footer (verified facts)
'use strict';

var OEFooterNS = window.OhioEndocrinologyDesignSystem_eecab4;

function ContactStrip() {
  var Button = OEFooterNS.Button;

  return React.createElement(
    'div',
    { style: { background: 'var(--oe-surface-offwhite)', borderTop: '1px solid var(--oe-border)', padding: 'var(--oe-section-pad-sm) 0' } },
    React.createElement(
      'div',
      { style: { maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' } },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { fontFamily: 'var(--oe-font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--oe-navy)' } },
          'Call our office'
        ),
        React.createElement(
          'a',
          { href: 'tel:+14403220872', style: { fontFamily: 'var(--oe-font-display)', fontWeight: 800, fontSize: '2rem', color: 'var(--oe-teal)', textDecoration: 'none' } },
          window.OE_PHONE
        ),
        React.createElement(
          'div',
          { style: { fontSize: '0.85rem', color: 'var(--oe-text-muted)', marginTop: 2 } },
          'Or text us at ',
          window.OE_TEXT
        )
      ),
      React.createElement(
        'div',
        { style: { display: 'flex', gap: 12, flexWrap: 'wrap' } },
        React.createElement(
          Button,
          { variant: 'primary', href: '#appointment', onClick: function (e) {
              e.preventDefault();window.OENav && window.OENav('appointment');
            }, iconLeft: React.createElement('i', { className: 'fa-solid fa-calendar-check' }) },
          'Request Appointment'
        ),
        React.createElement(
          Button,
          { variant: 'outline', href: '#contact', iconLeft: React.createElement('i', { className: 'fa-solid fa-location-dot' }) },
          'Find an Office'
        )
      )
    )
  );
}

function FooterCol(_ref) {
  var title = _ref.title;
  var children = _ref.children;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--oe-teal)', marginBottom: 'var(--oe-sp-4)' } },
      title
    ),
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
      children
    )
  );
}

function FooterLink(_ref2) {
  var children = _ref2.children;
  var href = _ref2.href;

  return React.createElement(
    'a',
    { href: href || '#', onClick: href ? undefined : function (e) {
        return e.preventDefault();
      }, target: href && href.startsWith('http') ? '_blank' : undefined, rel: 'noopener', style: { color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem' } },
    children
  );
}

function Footer() {
  return React.createElement(
    'footer',
    null,
    React.createElement(ContactStrip, null),
    React.createElement(
      'div',
      { style: { background: 'var(--oe-navy)', color: 'rgba(255,255,255,0.9)', padding: 'var(--oe-section-pad) 0 0' } },
      React.createElement(
        'div',
        { style: { maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)', display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1.1fr', gap: 40 }, className: 'oe-footer-grid' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 } },
            React.createElement('img', { src: window.OE_LOGO, alt: 'Ohio Endocrinology', style: { width: 42, height: 42, borderRadius: 10 } }),
            React.createElement(
              'span',
              { style: { fontFamily: 'var(--oe-font-display)', fontWeight: 700, fontSize: '1.2rem', color: '#fff' } },
              'Ohio Endocrinology'
            )
          ),
          React.createElement(
            'p',
            { style: { color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', maxWidth: 340 } },
            'Diabetes, Thyroid & Endocrinology of Northern Ohio. World Class Care, From our Family to Yours — serving Greater Cleveland since 2009.'
          )
        ),
        React.createElement(
          FooterCol,
          { title: 'Care' },
          React.createElement(
            FooterLink,
            { href: '#services' },
            'Diabetes Management'
          ),
          React.createElement(
            FooterLink,
            { href: '#services' },
            'Insulin Pumps & CGM'
          ),
          React.createElement(
            FooterLink,
            { href: '#services' },
            'Hormone & Endocrine'
          ),
          React.createElement(
            FooterLink,
            { href: '#services' },
            'In-house A1C'
          )
        ),
        React.createElement(
          FooterCol,
          { title: 'Patients' },
          React.createElement(
            FooterLink,
            { href: window.OE_PORTAL },
            'Patient Portal'
          ),
          React.createElement(
            FooterLink,
            { href: 'forms/' },
            'Patient Forms'
          ),
          React.createElement(
            FooterLink,
            { href: 'portal-help/' },
            'Portal Registration Guide'
          ),
          React.createElement(
            FooterLink,
            { href: '#newpatients' },
            'New Patients'
          ),
          React.createElement(
            FooterLink,
            { href: '#testimonials' },
            'Testimonials'
          ),
          React.createElement(
            FooterLink,
            { href: 'guides/' },
            'Patient Guides'
          ),
          React.createElement(
            FooterLink,
            { href: 'conditions/' },
            'Conditions We Treat'
          ),
          React.createElement(
            FooterLink,
            { href: 'treatments/' },
            'Treatments & Services'
          ),
          React.createElement(
            FooterLink,
            { href: 'locations/' },
            'Areas We Serve'
          )
        ),
        React.createElement(
          FooterCol,
          { title: 'Contact' },
          React.createElement(
            'span',
            { style: { color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' } },
            React.createElement('i', { className: 'fa-solid fa-phone', style: { color: 'var(--oe-teal)', width: 18 } }),
            ' ',
            window.OE_PHONE
          ),
          React.createElement(
            'span',
            { style: { color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' } },
            React.createElement('i', { className: 'fa-solid fa-comment-sms', style: { color: 'var(--oe-teal)', width: 18 } }),
            ' Text ',
            window.OE_TEXT
          ),
          React.createElement(
            'span',
            { style: { color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' } },
            React.createElement('i', { className: 'fa-solid fa-fax', style: { color: 'var(--oe-teal)', width: 18 } }),
            ' Fax (440) 322-4991'
          ),
          React.createElement(
            'span',
            { style: { color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: 4, lineHeight: 1.5 } },
            '673 E River St, Elyria, OH 44035',
            React.createElement('br', null),
            '25200 Center Ridge Rd #1100, Westlake, OH 44145'
          )
        )
      ),
      React.createElement(
        'div',
        { style: { maxWidth: 'var(--oe-container)', margin: '32px auto 0', padding: 'var(--oe-sp-5) var(--oe-container-pad)', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', color: 'rgba(255,255,255,0.38)', fontSize: '0.78rem' } },
        React.createElement(
          'span',
          null,
          '© 2026 Diabetes, Thyroid & Endocrinology of Northern Ohio. All rights reserved.'
        ),
        React.createElement(
          'span',
          { style: { display: 'inline-flex', alignItems: 'center', gap: 6 } },
          React.createElement('i', { className: 'fa-solid fa-shield-halved' }),
          ' HIPAA Notice · Privacy · Terms'
        )
      )
    )
  );
}

window.OEFooter = Footer;
