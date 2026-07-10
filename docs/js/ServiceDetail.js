// Ohio Endocrinology — reusable service detail page (data-driven via window.OE_SERVICES)
const OESvcNS = window.OhioEndocrinologyDesignSystem_eecab4;
const OE_PEN = 'assets/glp-1/icon-glp1-pen.svg';
function svcIcon(s, size) {
  if (s.icon === 'glp1-pen') return /*#__PURE__*/React.createElement("img", {
    src: OE_PEN,
    alt: "",
    style: {
      width: size || '1.5rem',
      height: size || '1.5rem'
    }
  });
  return /*#__PURE__*/React.createElement("i", {
    className: "fa-solid " + s.icon,
    style: {
      fontSize: size || '1.5rem'
    }
  });
}
window.OEsvcIcon = svcIcon;
function ServiceDetail({
  slug,
  onNav
}) {
  const {
    Button,
    SectionHeading,
    Accordion,
    Badge
  } = OESvcNS;
  const list = window.OE_SERVICES || [];
  const s = list.find(x => x.slug === slug) || list[0];
  const dotGrid = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";
  const heroBg = ['radial-gradient(120% 90% at 88% 12%, rgba(0,180,166,0.26) 0%, rgba(0,180,166,0) 55%)', dotGrid, 'linear-gradient(135deg, #0a2543 0%, #0d2d4e 50%, #123a63 100%)'].join(', ');
  const others = list.filter(x => x.slug !== s.slug);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: heroBg,
      color: '#fff',
      padding: 'var(--oe-section-pad) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      display: 'grid',
      gridTemplateColumns: s.hero ? '1.1fr 0.9fr' : '1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "oe-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('services'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      color: 'var(--oe-teal)',
      fontWeight: 600,
      fontSize: '0.85rem',
      cursor: 'pointer',
      padding: 0,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left"
  }), " All services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--oe-teal)',
      fontSize: '1.4rem',
      flexShrink: 0
    }
  }, svcIcon(s, '1.6rem')), s.badge && /*#__PURE__*/React.createElement(Badge, {
    color: "gold"
  }, s.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      marginBottom: 18
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: '1.1875rem',
      lineHeight: 1.6,
      maxWidth: 560,
      marginBottom: 30
    }
  }, s.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "teal",
    size: "lg",
    href: "#appointment",
    onClick: e => {
      e.preventDefault();
      window.OENav && window.OENav('appointment');
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Request Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-white",
    size: "lg",
    href: "tel:+14403220872",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone"
    })
  }, window.OE_PHONE))), s.hero && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: 'var(--oe-shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.hero,
    alt: "",
    style: {
      width: '100%',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--oe-section-pad) 0',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)'
    }
  }, s.sections.map((sec, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.4rem,2.6vw,1.875rem)',
      marginBottom: 16
    }
  }, sec.h), sec.body && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--oe-text-muted)',
      fontSize: '1.0625rem',
      lineHeight: 1.75
    }
  }, sec.body), sec.list && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'grid',
      gap: 12,
      marginTop: 8
    }
  }, sec.list.map((li, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      color: 'var(--oe-text)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check",
    style: {
      color: 'var(--oe-teal)',
      marginTop: 5,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: li.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    }
  })))), sec.steps && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      marginTop: 8
    }
  }, sec.steps.map((st, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--oe-gradient-icon)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontFamily: 'var(--oe-font-display)'
    }
  }, j + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--oe-navy)',
      marginBottom: 2
    }
  }, st[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--oe-text-muted)',
      lineHeight: 1.65
    }
  }, st[1]))))))), s.faq && s.faq.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.4rem,2.6vw,1.875rem)',
      marginBottom: 20
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement(Accordion, {
    items: s.faq.map(f => ({
      q: f.q,
      a: f.a
    }))
  })), s.compliance && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--oe-text-muted)',
      lineHeight: 1.6,
      borderTop: '1px solid var(--oe-border)',
      paddingTop: 20
    }
  }, s.compliance))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--oe-section-pad-sm) 0 var(--oe-section-pad)',
      background: 'var(--oe-surface-offwhite)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Services",
    title: "Explore other services"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, others.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.slug,
    onClick: () => {
      onNav('service:' + o.slug);
      window.scrollTo({
        top: 0
      });
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderRadius: 'var(--oe-radius-pill)',
      border: '1px solid var(--oe-border)',
      background: '#fff',
      color: 'var(--oe-navy)',
      fontWeight: 600,
      fontSize: '0.9rem',
      cursor: 'pointer',
      boxShadow: 'var(--oe-shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--oe-blue)',
      display: 'inline-flex'
    }
  }, svcIcon(o, '1rem')), o.title))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--oe-gradient-teal)',
      color: '#fff',
      padding: 'var(--oe-section-pad) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      marginBottom: 16
    }
  }, s.slug === 'glp-1' ? 'Wondering if a GLP-1 is right for you?' : 'Have questions about ' + s.title + '?'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '1.125rem',
      marginBottom: 28
    }
  }, s.slug === 'glp-1' ? 'Get a straight answer from a specialist — not a subscription website.' : 'Talk with our team — we’re here to help you decide the right next step.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-white",
    size: "lg",
    href: window.OE_PORTAL,
    target: "_blank",
    rel: "noopener"
  }, "New Patient Registration"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    href: "tel:+14403220872",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone"
    })
  }, "Call ", window.OE_PHONE)))));
}
window.OEServiceDetail = ServiceDetail;