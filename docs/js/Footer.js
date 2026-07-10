// Ohio Endocrinology — contact strip + footer (verified facts)
const OEFooterNS = window.OhioEndocrinologyDesignSystem_eecab4;
function ContactStrip() {
  const {
    Button
  } = OEFooterNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--oe-surface-offwhite)',
      borderTop: '1px solid var(--oe-border)',
      padding: 'var(--oe-section-pad-sm) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 700,
      fontSize: '1.25rem',
      color: 'var(--oe-navy)'
    }
  }, "Call our office"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14403220872",
    style: {
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 800,
      fontSize: '2rem',
      color: 'var(--oe-teal)',
      textDecoration: 'none'
    }
  }, window.OE_PHONE), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--oe-text-muted)',
      marginTop: 2
    }
  }, "Or text us at ", window.OE_TEXT)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#appointment",
    onClick: e => {
      e.preventDefault();
      window.OENav && window.OENav('appointment');
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Request Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#contact",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-location-dot"
    })
  }, "Find an Office"))));
}
function FooterCol({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--oe-teal)',
      marginBottom: 'var(--oe-sp-4)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, children));
}
function FooterLink({
  children,
  href
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: href ? undefined : e => e.preventDefault(),
    target: href && href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
      fontSize: '0.9rem'
    }
  }, children);
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(ContactStrip, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--oe-navy)',
      color: 'rgba(255,255,255,0.9)',
      padding: 'var(--oe-section-pad) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      display: 'grid',
      gridTemplateColumns: '1.8fr 1fr 1fr 1.1fr',
      gap: 40
    },
    className: "oe-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.OE_LOGO,
    alt: "Ohio Endocrinology",
    style: {
      width: 42,
      height: 42,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 700,
      fontSize: '1.2rem',
      color: '#fff'
    }
  }, "Ohio Endocrinology")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '0.9rem',
      maxWidth: 340
    }
  }, "Diabetes, Thyroid & Endocrinology of Northern Ohio. World Class Care, From our Family to Yours \u2014 serving Greater Cleveland since 2009.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Care"
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: "#services"
  }, "Diabetes Management"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#services"
  }, "Insulin Pumps & CGM"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#services"
  }, "Hormone & Endocrine"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#services"
  }, "In-house A1C")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Patients"
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: window.OE_PORTAL
  }, "Patient Portal"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "portal-help/"
  }, "Portal Registration Guide"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#newpatients"
  }, "New Patients"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#testimonials"
  }, "Testimonials"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "conditions/"
  }, "Conditions We Treat"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "treatments/"
  }, "Treatments & Services"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "locations/"
  }, "Areas We Serve")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Contact"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      color: 'var(--oe-teal)',
      width: 18
    }
  }), " ", window.OE_PHONE), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-comment-sms",
    style: {
      color: 'var(--oe-teal)',
      width: 18
    }
  }), " Text ", window.OE_TEXT), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-fax",
    style: {
      color: 'var(--oe-teal)',
      width: 18
    }
  }), " Fax (440) 322-4991"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: '0.85rem',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "673 E River St, Elyria, OH 44035", /*#__PURE__*/React.createElement("br", null), "25200 Center Ridge Rd #1100, Westlake, OH 44145"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '32px auto 0',
      padding: 'var(--oe-sp-5) var(--oe-container-pad)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      color: 'rgba(255,255,255,0.38)',
      fontSize: '0.78rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Diabetes, Thyroid & Endocrinology of Northern Ohio. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved"
  }), " HIPAA Notice \xB7 Privacy \xB7 Terms"))));
}
window.OEFooter = Footer;