// Ohio Endocrinology — site header (security bar + topbar + sticky nav)
const NS = window.OhioEndocrinologyDesignSystem_eecab4;
const {
  Button
} = NS;
const OE_PHONE = '(440) 322-0872';
const OE_TEXT = '(440) 656-7755';
const OE_PORTAL = 'https://patientportal.glaceemr.com/glaceportal_login/UserRegistration?practiceId=eclinic&requestFor=UserRegistration';
const OE_LOGO = 'assets/logo-mark.png';
window.OE_PHONE = OE_PHONE;
window.OE_TEXT = OE_TEXT;
window.OE_PORTAL = OE_PORTAL;
window.OE_LOGO = OE_LOGO;
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--oe-navy)',
      color: 'rgba(255,255,255,0.82)',
      fontSize: '0.775rem',
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '6px 22px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px 22px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oe-topbar-extra"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot",
    style: {
      color: 'var(--oe-teal)',
      marginRight: 6
    }
  }), "673 E River St, Elyria, OH 44035"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved",
    style: {
      color: 'var(--oe-teal)',
      marginRight: 6
    }
  }), "HIPAA-compliant & encrypted")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px 22px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oe-topbar-extra"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-comment-sms",
    style: {
      color: 'var(--oe-teal)',
      marginRight: 6
    }
  }), "Text ", OE_TEXT), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14403220872",
    style: {
      color: 'var(--oe-teal)',
      fontWeight: 700,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      marginRight: 6
    }
  }), OE_PHONE))));
}
function Header({
  current,
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  const links = [['home', 'Home'], ['practice', 'Our Practice'], ['services', 'Services'], ['testimonials', 'Testimonials'], ['newpatients', 'New Patients'], ['contact', 'Contact']];
  const navLink = (key, label) => {
    const active = current === key;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: "#" + key,
      onClick: e => {
        e.preventDefault();
        onNav(key);
        setOpen(false);
      },
      "aria-current": active ? 'page' : undefined,
      style: {
        padding: '8px 13px',
        borderRadius: 'var(--oe-radius-pill)',
        fontFamily: 'var(--oe-font-body)',
        fontWeight: 600,
        fontSize: '0.9rem',
        color: active ? 'var(--oe-blue)' : '#334155',
        background: active ? 'rgba(30,95,168,0.07)' : 'transparent',
        textDecoration: 'none',
        minHeight: 44,
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap'
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 'var(--oe-z-header)',
      background: '#fff',
      boxShadow: 'var(--oe-shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    className: "oe-header-row",
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      height: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: OE_LOGO,
    alt: "Ohio Endocrinology",
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 700,
      fontSize: '1.2rem',
      color: 'var(--oe-navy)',
      lineHeight: 1.1
    }
  }, "Ohio Endocrinology"), /*#__PURE__*/React.createElement("span", {
    className: "oe-brand-sub",
    style: {
      display: 'block',
      fontSize: '0.64rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--oe-text-muted)',
      fontWeight: 600
    }
  }, "Diabetes, Thyroid & Endocrinology of N. Ohio"))), /*#__PURE__*/React.createElement("nav", {
    className: "oe-desktop-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, links.map(([k, l]) => navLink(k, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    style: {
      marginLeft: 10
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Book Appointment")), /*#__PURE__*/React.createElement("button", {
    className: "oe-burger",
    "aria-label": "Menu",
    onClick: () => setOpen(!open),
    style: {
      display: 'none',
      width: 48,
      height: 48,
      border: 'none',
      background: 'transparent',
      fontSize: '1.4rem',
      color: 'var(--oe-navy)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--oe-border)',
      padding: 'var(--oe-sp-4) var(--oe-container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(([k, l]) => navLink(k, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    href: OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: 8
    }
  }, "Book Appointment")));
}
window.OEHeader = Header;
