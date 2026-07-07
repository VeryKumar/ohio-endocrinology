/* @ds-bundle: {"format":4,"namespace":"OhioEndocrinologyDesignSystem_eecab4","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardIcon","sourcePath":"components/data-display/Card.jsx"},{"name":"CardBody","sourcePath":"components/data-display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/data-display/Card.jsx"},{"name":"CardText","sourcePath":"components/data-display/Card.jsx"},{"name":"CardLink","sourcePath":"components/data-display/Card.jsx"},{"name":"StatsStrip","sourcePath":"components/data-display/Stat.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Testimonial","sourcePath":"components/data-display/Testimonial.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"HipaaNotice","sourcePath":"components/feedback/HipaaNotice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"873a7aee2efd","components/data-display/Badge.jsx":"ec242324ff11","components/data-display/Card.jsx":"523419c5eb0f","components/data-display/Stat.jsx":"b6e222c49c67","components/data-display/Testimonial.jsx":"51a0832090c6","components/feedback/Accordion.jsx":"0b861dc7c3e9","components/feedback/Alert.jsx":"be25c4417a10","components/feedback/HipaaNotice.jsx":"7fc76f07e5aa","components/forms/Checkbox.jsx":"1648d9db2761","components/forms/FormField.jsx":"985a481e9048","components/forms/Input.jsx":"b3851d2202b7","components/forms/Select.jsx":"87907543eb16","components/forms/Textarea.jsx":"e27dd5d6abde","components/layout/Divider.jsx":"d0c4d70deaf3","components/layout/SectionHeading.jsx":"2a5fcf78bc6a","ui_kits/website/Footer.jsx":"3efafef06c37","ui_kits/website/Header.jsx":"e541b1b6d4c7","ui_kits/website/HomePage.jsx":"57f5d5bfb4dd","ui_kits/website/ServiceDetail.jsx":"a3d6c58a75d0","ui_kits/website/Ticker.jsx":"b20b98b51f1c","ui_kits/website/services-data.js":"9a28b7d1e9fc"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldControlStyle","sourcePath":"components/forms/FormField.jsx"}]} */

(() => {

const __ds_ns = (window.OhioEndocrinologyDesignSystem_eecab4 = window.OhioEndocrinologyDesignSystem_eecab4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Button
 * Pill-shaped action. Inter 600, min 48×48 touch target, 2px border, lifts 2px on hover.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 1.25rem',
      fontSize: '0.875rem',
      minHeight: 40
    },
    md: {
      padding: '0.85rem 2rem',
      fontSize: '1rem',
      minHeight: 48
    },
    lg: {
      padding: '1rem 2.5rem',
      fontSize: '1.125rem',
      minHeight: 56
    },
    xl: {
      padding: '1.15rem 3rem',
      fontSize: '1.25rem',
      minHeight: 64
    }
  };
  const variants = {
    primary: {
      bg: 'var(--oe-blue)',
      color: '#fff',
      border: 'var(--oe-blue)',
      hoverBg: 'var(--oe-navy)',
      hoverBorder: 'var(--oe-navy)'
    },
    teal: {
      bg: 'var(--oe-teal)',
      color: '#fff',
      border: 'var(--oe-teal)',
      hoverBg: 'var(--oe-teal-dark)',
      hoverBorder: 'var(--oe-teal-dark)'
    },
    gold: {
      bg: 'var(--oe-gold)',
      color: '#fff',
      border: 'var(--oe-gold)',
      hoverBg: 'var(--oe-gold-dark)',
      hoverBorder: 'var(--oe-gold-dark)'
    },
    outline: {
      bg: 'transparent',
      color: 'var(--oe-navy)',
      border: 'var(--oe-navy)',
      hoverBg: 'var(--oe-navy)',
      hoverBorder: 'var(--oe-navy)',
      hoverColor: '#fff'
    },
    'outline-white': {
      bg: 'transparent',
      color: '#fff',
      border: 'rgba(255,255,255,0.6)',
      hoverBg: '#fff',
      hoverBorder: '#fff',
      hoverColor: 'var(--oe-navy)'
    }
  };
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--oe-sp-2)',
    fontFamily: 'var(--oe-font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    minHeight: s.minHeight,
    borderRadius: 'var(--oe-radius-pill)',
    border: `2px solid ${hover && !disabled ? v.hoverBorder : v.border}`,
    background: hover && !disabled ? v.hoverBg : v.bg,
    color: hover && !disabled ? v.hoverColor || v.color : v.color,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transform: hover && !disabled ? 'translateY(-2px)' : 'none',
    boxShadow: hover && !disabled ? 'var(--oe-shadow-lg)' : 'none',
    transition: 'all var(--oe-transition)',
    ...style
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: base,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Badge
 * Small pill label with tinted-alpha background.
 */
function Badge({
  color = 'teal',
  children,
  style = {},
  ...rest
}) {
  const colors = {
    blue: {
      bg: 'rgba(30,95,168,0.10)',
      fg: 'var(--oe-blue)'
    },
    teal: {
      bg: 'rgba(0,180,166,0.12)',
      fg: 'var(--oe-teal-dark)'
    },
    gold: {
      bg: 'rgba(200,146,42,0.14)',
      fg: 'var(--oe-gold-dark)'
    },
    navy: {
      bg: 'rgba(13,45,78,0.10)',
      fg: 'var(--oe-navy)'
    },
    green: {
      bg: 'var(--oe-success-bg)',
      fg: 'var(--oe-success)'
    }
  };
  const c = colors[color] || colors.teal;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--oe-sp-1)',
      fontFamily: 'var(--oe-font-body)',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.03em',
      padding: '0.3rem 0.75rem',
      borderRadius: 'var(--oe-radius-pill)',
      background: c.bg,
      color: c.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Card
 * White surface, 16px radius, navy-tinted shadow, full-height flex column.
 * Lifts 6px on hover. Compose with the sub-parts.
 */
function Card({
  hover = true,
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--oe-surface)',
      border: '1px solid var(--oe-border)',
      borderRadius: 'var(--oe-radius-lg)',
      boxShadow: hover && h ? 'var(--oe-shadow-xl)' : 'var(--oe-shadow-card)',
      transform: hover && h ? 'translateY(-6px)' : 'none',
      transition: 'all var(--oe-transition)',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}

/** 60px gradient icon chip (soft blue→teal bg, blue glyph). */
function CardIcon({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--oe-radius)',
      background: 'var(--oe-gradient-icon-soft)',
      color: 'var(--oe-blue)',
      fontSize: '1.5rem',
      marginBottom: 'var(--oe-sp-5)',
      ...style
    }
  }, children);
}

/** Padded body region. */
function CardBody({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      padding: 'var(--oe-sp-8)',
      ...style
    }
  }, children);
}

/** Playfair title. */
function CardTitle({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.5rem',
      marginBottom: 'var(--oe-sp-3)',
      ...style
    }
  }, children);
}

/** Muted body text. */
function CardText({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--oe-text-muted)',
      lineHeight: 1.7,
      ...style
    }
  }, children);
}

/** Arrow link whose gap widens on hover. */
function CardLink({
  href = '#',
  children,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: h ? 'var(--oe-sp-3)' : 'var(--oe-sp-2)',
      marginTop: 'var(--oe-sp-5)',
      color: 'var(--oe-blue)',
      fontWeight: 600,
      fontSize: '0.9375rem',
      textDecoration: 'none',
      transition: 'gap var(--oe-transition)',
      ...style
    }
  }, children, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Card, CardIcon, CardBody, CardTitle, CardText, CardLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Stat & StatsStrip
 * Dark navy gradient band of headline metrics with a teal top hairline.
 */
function StatsStrip({
  variant = 'navy',
  children,
  style = {},
  ...rest
}) {
  const bg = {
    navy: 'var(--oe-gradient-hero)',
    teal: 'var(--oe-gradient-teal)',
    light: 'var(--oe-surface-offwhite)'
  }[variant];
  const isLight = variant === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 'var(--oe-sp-8)',
      padding: 'var(--oe-sp-12) var(--oe-sp-8)',
      borderRadius: 'var(--oe-radius-lg)',
      background: bg,
      borderTop: isLight ? 'none' : '3px solid var(--oe-teal)',
      ...style
    }
  }, rest), children);
}
function Stat({
  number,
  label,
  light,
  numberColor,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      lineHeight: 1,
      color: numberColor || (light ? 'var(--oe-teal-dark)' : 'var(--oe-teal)')
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--oe-sp-2)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: light ? 'var(--oe-text-muted)' : 'rgba(255,255,255,0.75)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatsStrip, Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Testimonial
 * Card with giant faded quote mark, gold star row, italic quote, gradient-avatar author.
 */
function Testimonial({
  quote,
  author,
  detail,
  rating = 5,
  style = {},
  ...rest
}) {
  const initial = (author || '?').trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--oe-surface)',
      border: '1px solid var(--oe-border)',
      borderRadius: 'var(--oe-radius-lg)',
      boxShadow: 'var(--oe-shadow-card)',
      padding: 'var(--oe-sp-8)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '0.25rem',
      right: 'var(--oe-sp-5)',
      fontFamily: 'Georgia, serif',
      fontSize: '5rem',
      lineHeight: 1,
      color: 'rgba(0,180,166,0.22)',
      pointerEvents: 'none'
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("div", {
    "aria-label": `${rating} out of 5 stars`,
    style: {
      color: 'var(--oe-gold-light)',
      fontSize: '1rem',
      letterSpacing: '0.1em',
      marginBottom: 'var(--oe-sp-4)'
    }
  }, '★'.repeat(rating), '☆'.repeat(5 - rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: 'var(--oe-text-muted)',
      lineHeight: 1.7,
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--oe-sp-3)',
      marginTop: 'var(--oe-sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--oe-radius-pill)',
      background: 'var(--oe-gradient-icon)',
      color: '#fff',
      fontWeight: 700,
      fontFamily: 'var(--oe-font-display)'
    }
  }, initial), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: 'var(--oe-navy)'
    }
  }, author), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--oe-text-muted)'
    }
  }, detail))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * Ohio Endocrinology — Accordion / FAQ
 * Bordered rounded items. Active item gets a blue-light border, soft gradient trigger,
 * and a chevron that rotates 180°.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--oe-sp-3)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: `1px solid ${isOpen ? 'var(--oe-blue-light)' : 'var(--oe-border)'}`,
        borderRadius: 'var(--oe-radius-lg)',
        background: 'var(--oe-surface)',
        boxShadow: isOpen ? 'var(--oe-shadow-sm)' : 'none',
        overflow: 'hidden',
        transition: 'all var(--oe-transition)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--oe-sp-4)',
        textAlign: 'left',
        cursor: 'pointer',
        padding: 'var(--oe-sp-5) var(--oe-sp-6)',
        minHeight: 48,
        border: 'none',
        background: isOpen ? 'var(--oe-gradient-icon-soft)' : 'transparent',
        fontFamily: 'var(--oe-font-body)',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--oe-navy)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        color: 'var(--oe-teal)',
        fontSize: '0.875rem',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--oe-transition)'
      }
    }, "\u25BC")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--oe-sp-6) var(--oe-sp-5)',
        color: 'var(--oe-text-muted)',
        lineHeight: 1.7,
        fontSize: '0.9375rem'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Alert
 * Flex icon + text, tinted background, colored border/text.
 */
function Alert({
  variant = 'info',
  title,
  icon,
  children,
  style = {},
  ...rest
}) {
  const v = {
    info: {
      bg: 'var(--oe-info-bg)',
      fg: 'var(--oe-blue)',
      border: 'var(--oe-blue)'
    },
    success: {
      bg: 'var(--oe-success-bg)',
      fg: 'var(--oe-success)',
      border: 'var(--oe-success)'
    },
    warning: {
      bg: 'var(--oe-warning-bg)',
      fg: 'var(--oe-warning)',
      border: 'var(--oe-warning)'
    },
    error: {
      bg: 'var(--oe-error-bg)',
      fg: 'var(--oe-error)',
      border: 'var(--oe-error)'
    }
  }[variant];
  const defaultIcon = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕'
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 'var(--oe-sp-3)',
      alignItems: 'flex-start',
      padding: 'var(--oe-sp-4) var(--oe-sp-5)',
      borderRadius: 'var(--oe-radius)',
      border: `1px solid ${v.border}`,
      background: v.bg,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'var(--oe-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: v.fg,
      fontWeight: 700,
      flexShrink: 0,
      lineHeight: 1.4
    }
  }, icon || defaultIcon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: v.fg,
      marginBottom: children ? 2 : 0
    }
  }, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/HipaaNotice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — HipaaNotice
 * Amber left-bordered warning box discouraging PHI submission. `secure` = green variant.
 */
function HipaaNotice({
  secure = false,
  children,
  style = {},
  ...rest
}) {
  const c = secure ? {
    bg: 'var(--oe-success-bg)',
    border: 'var(--oe-success)',
    fg: 'var(--oe-success)',
    icon: '🔒'
  } : {
    bg: 'var(--oe-warning-bg)',
    border: 'var(--oe-warning)',
    fg: 'var(--oe-warning)',
    icon: '⚠'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--oe-sp-3)',
      alignItems: 'flex-start',
      padding: 'var(--oe-sp-4) var(--oe-sp-5)',
      borderRadius: 'var(--oe-radius)',
      borderLeft: `4px solid ${c.border}`,
      background: c.bg,
      fontSize: '0.8125rem',
      lineHeight: 1.6,
      color: 'var(--oe-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", null, children || (secure ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.fg
    }
  }, "Secure & encrypted."), " This connection is protected. You may include health details.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: c.fg
    }
  }, "Do not submit PHI."), " Please don't include diagnoses, medications, or other protected health information in this form."))));
}
Object.assign(__ds_scope, { HipaaNotice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/HipaaNotice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Checkbox
 * Consent-style checkbox with adjacent label. 20px box, teal check when on.
 */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  onChange,
  required,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      gap: 'var(--oe-sp-3)',
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: 'var(--oe-text)',
      minHeight: 44,
      padding: '2px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    required: required,
    style: {
      appearance: 'auto',
      width: 20,
      height: 20,
      marginTop: 2,
      accentColor: 'var(--oe-teal)',
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--oe-error)',
      marginLeft: 2
    }
  }, "*")));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--oe-navy)',
  marginBottom: 'var(--oe-sp-2)'
};
const hintStyle = {
  fontSize: '0.75rem',
  color: 'var(--oe-text-muted)',
  marginTop: 'var(--oe-sp-1)'
};
const errorStyle = {
  fontSize: '0.75rem',
  color: 'var(--oe-error)',
  marginTop: 'var(--oe-sp-1)',
  fontWeight: 500
};
function fieldControlStyle(invalid, focused) {
  return {
    width: '100%',
    minHeight: 48,
    padding: '0.8rem 1rem',
    fontFamily: 'var(--oe-font-body)',
    fontSize: '1rem',
    color: 'var(--oe-text)',
    background: 'var(--oe-surface)',
    border: `2px solid ${invalid ? 'var(--oe-error)' : focused ? 'var(--oe-blue)' : 'var(--oe-border-dark)'}`,
    borderRadius: 'var(--oe-radius)',
    boxShadow: focused && !invalid ? '0 0 0 3px var(--oe-focus-ring)' : 'none',
    outline: 'none',
    transition: 'border-color var(--oe-transition), box-shadow var(--oe-transition)'
  };
}

/** Label + control wrapper shared by form fields. */
function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--oe-sp-5)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--oe-error)',
      marginLeft: 2
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("div", {
    style: errorStyle
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { fieldControlStyle, FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Input
 * 2px-border text field, 48px min height, blue focus ring, red invalid state.
 */
function Input({
  label,
  hint,
  error,
  required,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: label,
    htmlFor: fieldId,
    required: required,
    hint: hint,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    required: required,
    "aria-invalid": !!error,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: __ds_scope.fieldControlStyle(!!error, focused)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Select
 * Native select with a custom chevron, matching Input styling.
 */
function Select({
  label,
  hint,
  error,
  required,
  id,
  options = [],
  placeholder,
  children,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: label,
    htmlFor: fieldId,
    required: required,
    hint: hint,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    required: required,
    "aria-invalid": !!error,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...__ds_scope.fieldControlStyle(!!error, focused),
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: '2.5rem',
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--oe-teal)',
      fontSize: '0.75rem',
      pointerEvents: 'none'
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ohio Endocrinology — Textarea
 * Multi-line field matching Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: label,
    htmlFor: fieldId,
    required: required,
    hint: hint,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    required: required,
    "aria-invalid": !!error,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...__ds_scope.fieldControlStyle(!!error, focused),
      resize: 'vertical',
      lineHeight: 1.6
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/**
 * Ohio Endocrinology — Divider
 * 60×3px teal pill rule. `center` centers it; `variant` recolors.
 */
function Divider({
  variant = 'teal',
  center = false,
  style = {}
}) {
  const bg = {
    teal: 'var(--oe-teal)',
    gold: 'var(--oe-gold)',
    blue: 'var(--oe-blue)'
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 3,
      borderRadius: 'var(--oe-radius-pill)',
      background: bg,
      margin: center ? 'var(--oe-sp-5) auto' : 'var(--oe-sp-5) 0',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
/**
 * Ohio Endocrinology — SectionHeading
 * The signature eyebrow → title → teal divider → subtitle pattern.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  divider = 'teal',
  style = {}
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: centered ? 720 : undefined,
      marginInline: centered ? 'auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--oe-sp-3)',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--oe-teal)',
      marginBottom: 'var(--oe-sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      background: 'var(--oe-teal)',
      display: 'inline-block'
    }
  }), eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    variant: divider,
    center: centered
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.125rem',
      color: 'var(--oe-text-muted)',
      lineHeight: 1.7,
      maxWidth: 660,
      marginInline: centered ? 'auto' : undefined
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
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
    href: window.OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
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
    href: "#newpatients"
  }, "New Patients"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "#testimonials"
  }, "Testimonials")), /*#__PURE__*/React.createElement(FooterCol, {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Ohio Endocrinology — site header (security bar + topbar + sticky nav)
const NS = window.OhioEndocrinologyDesignSystem_eecab4;
const {
  Button
} = NS;
const OE_PHONE = '(440) 322-0872';
const OE_TEXT = '(440) 656-7755';
const OE_PORTAL = 'https://patientportal.glaceemr.com/glaceportal_login/UserRegistration?practiceId=eclinic&requestFor=UserRegistration';
const OE_LOGO = '../../assets/logo-mark.png';
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
      gap: 22,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
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
      gap: 22,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// Ohio Endocrinology — homepage (verified facts from content/site-facts.md)
const OEHomeNS = window.OhioEndocrinologyDesignSystem_eecab4;
const OE_DRK = '../../assets/source/dr-vikram-kumar.jpg';
const OE_NAM = '../../assets/source/namrata-kumar.png';
function Section({
  bg,
  children,
  pad,
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg || '#fff',
      padding: (pad || 'var(--oe-section-pad)') + ' 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)'
    }
  }, children));
}
function Hero() {
  const {
    Button
  } = OEHomeNS;
  const trust = [['fa-droplet', 'Diabetes'], ['fa-heart-pulse', 'Thyroid'], ['fa-dna', 'Endocrine']];
  const dotGrid = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";
  const heroBg = ['radial-gradient(120% 90% at 85% 15%, rgba(0,180,166,0.28) 0%, rgba(0,180,166,0) 55%)', 'radial-gradient(90% 80% at 8% 90%, rgba(46,125,209,0.35) 0%, rgba(46,125,209,0) 60%)', dotGrid, 'linear-gradient(135deg, #0a2543 0%, #0d2d4e 45%, #123a63 100%)'].join(', ');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: heroBg,
      color: '#fff',
      padding: 'calc(var(--oe-section-pad) + 1rem) 0 var(--oe-section-pad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--oe-container)',
      margin: '0 auto',
      padding: '0 var(--oe-container-pad)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 64,
      alignItems: 'center'
    },
    className: "oe-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: 'var(--oe-teal)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 2,
      background: 'var(--oe-teal)',
      display: 'inline-block'
    }
  }), " Serving Greater Cleveland since 2009"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(2.4rem, 5vw, 4rem)',
      lineHeight: 1.07,
      marginBottom: 24
    }
  }, "World-class care,", /*#__PURE__*/React.createElement("br", null), "from our ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--oe-teal)'
    }
  }, "family to yours")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: '1.1875rem',
      lineHeight: 1.65,
      maxWidth: 540,
      marginBottom: 32
    }
  }, "Diabetes, Thyroid & Endocrinology of Northern Ohio \u2014 making your diabetes management simple, with convenient offices in Elyria and Westlake near University Hospitals Elyria and Cleveland Clinic Fairview."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "teal",
    size: "lg",
    href: window.OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-white",
    size: "lg",
    href: "tel:+14403220872",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone"
    })
  }, window.OE_PHONE)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      flexWrap: 'wrap',
      paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, trust.map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      color: 'rgba(255,255,255,0.9)',
      fontSize: '0.9375rem',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid " + ic,
    style: {
      color: 'var(--oe-teal)',
      fontSize: '1rem'
    }
  }), " ", t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380,
      marginInline: 'auto',
      aspectRatio: '4 / 4.6',
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: 'var(--oe-shadow-xl)',
      background: 'linear-gradient(135deg,#e2eaf3,#cdd9e8)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: OE_DRK,
    alt: "Dr. Vikram Kumar, MD, FACE \u2014 Founder",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: 'calc(50% - 210px)',
      background: 'var(--oe-navy)',
      color: '#fff',
      borderRadius: 18,
      boxShadow: 'var(--oe-shadow-lg)',
      padding: '16px 20px',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--oe-font-display)',
      fontWeight: 800,
      fontSize: '1.9rem',
      color: 'var(--oe-teal)',
      lineHeight: 1
    }
  }, "15+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)',
      marginTop: 4
    }
  }, "Years in", /*#__PURE__*/React.createElement("br", null), "practice")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      left: 'calc(50% - 200px)',
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--oe-shadow-lg)',
      padding: '13px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 11,
      background: 'var(--oe-gradient-icon)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-user-doctor"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 700,
      color: 'var(--oe-navy)',
      fontSize: '0.9rem',
      fontFamily: 'var(--oe-font-display)'
    }
  }, "Dr. Vikram Kumar, MD"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.72rem',
      color: 'var(--oe-text-muted)'
    }
  }, "Founder \xB7 FACE, MBBS"))))));
}
function Providers() {
  const {
    SectionHeading,
    Card,
    Badge
  } = OEHomeNS;
  const docs = [{
    img: OE_DRK,
    name: 'Dr. Vikram Kumar, MD, FACE, MBBS',
    role: 'Founder',
    bio: 'Practicing since 1993, Dr. Kumar founded the practice in 2009. He serves as Division Chief of Endocrinology at Fairview Hospital (Cleveland Clinic) and Chief of Medicine at University Hospital Elyria, and is teaching faculty in the residency program at St John\u2019s Hospital.'
  }, {
    img: OE_NAM,
    name: 'Namrata \u201cNam\u201d Kumar, MS, PA-C, MBBS',
    role: 'Chief Operating Officer',
    bio: 'With 20+ years of practice, Nam specializes in diabetes, thyroid, and endocrine care. She began her career in New Delhi and holds teaching faculty roles in the PA programs at Case Western School of Medicine and Baldwin Wallace.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "practice",
    bg: "var(--oe-surface-offwhite)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Practice",
    title: "Meet your care team",
    subtitle: "World Class Care, From our Family to Yours."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    },
    className: "oe-grid-2"
  }, docs.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.name,
    hover: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      padding: 'var(--oe-sp-6)',
      alignItems: 'flex-start'
    },
    className: "oe-provider"
  }, /*#__PURE__*/React.createElement("img", {
    src: d.img,
    alt: d.name,
    style: {
      width: 104,
      height: 130,
      borderRadius: 14,
      objectFit: 'cover',
      flexShrink: 0,
      boxShadow: 'var(--oe-shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    color: "teal"
  }, d.role), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.25rem',
      margin: '10px 0 8px'
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--oe-text-muted)',
      lineHeight: 1.65
    }
  }, d.bio)))))));
}
function Services({
  onNav
}) {
  const {
    SectionHeading,
    Card,
    CardBody,
    CardIcon,
    CardTitle,
    CardText,
    CardLink,
    Badge
  } = OEHomeNS;
  const svc = window.OE_SERVICES || [];
  return /*#__PURE__*/React.createElement(Section, {
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Services",
    title: "Making diabetes management simple",
    subtitle: "Comprehensive, in-house diabetes and endocrine care under one roof."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    },
    className: "oe-grid-3"
  }, svc.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.slug
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(CardIcon, null, window.OEsvcIcon(s, '1.5rem')), s.badge && /*#__PURE__*/React.createElement(Badge, {
    color: "gold"
  }, s.badge)), /*#__PURE__*/React.createElement(CardTitle, null, s.title), /*#__PURE__*/React.createElement(CardText, null, s.blurb), /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      onNav('service:' + s.slug);
      window.scrollTo({
        top: 0
      });
    },
    style: {
      cursor: 'pointer',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(CardLink, {
    href: "#"
  }, "Learn more")))))));
}
function Stats() {
  const {
    StatsStrip,
    Stat
  } = OEHomeNS;
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--oe-section-pad-sm)"
  }, /*#__PURE__*/React.createElement(StatsStrip, {
    variant: "navy"
  }, /*#__PURE__*/React.createElement(Stat, {
    number: "2009",
    numberColor: "#fff",
    label: "Founded in Northern Ohio"
  }), /*#__PURE__*/React.createElement(Stat, {
    number: "30+",
    numberColor: "#fff",
    label: "Years Dr. Kumar practicing"
  }), /*#__PURE__*/React.createElement(Stat, {
    number: "15+",
    numberColor: "#fff",
    label: "Years serving our community"
  }), /*#__PURE__*/React.createElement(Stat, {
    number: "100K+",
    numberColor: "#fff",
    label: "Satisfied patients"
  })));
}
function NewPatients() {
  const {
    SectionHeading,
    Button,
    Alert
  } = OEHomeNS;
  return /*#__PURE__*/React.createElement(Section, {
    id: "newpatients",
    bg: "var(--oe-surface-offwhite)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "oe-grid-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "New Patients",
    title: "Your first visit, made easy"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--oe-text-muted)',
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      marginBottom: 24
    }
  }, "We make sure all our new patients feel welcome, safe, and taken care of. During your first visit, a doctor will review your medical history and perform a full examination, then explain any issues and help you choose treatment options. We typically provide any important laboratory slips at the end of the visit so you can complete tests when it\u2019s most convenient."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: window.OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-user-plus"
    })
  }, "Register on the Portal"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "tel:+14403220872",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone"
    })
  }, "Call ", window.OE_PHONE))), /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "Cancellation policy"
  }, "To avoid a $50 fee, please notify us at least 24 hours before your appointment to cancel or reschedule.")));
}
function Voices() {
  const {
    SectionHeading,
    Testimonial
  } = OEHomeNS;
  const t = [[5, 'My experience with the office was a great one. There was no wait for my appointment and the physician assistant was very thorough and friendly. Dr. Kumar was very nice also. They are awesome and I love that I can do televisits anytime!', 'Denise R.', 'Elementary school teacher · Elyria'], [5, 'Dr. Kumar and his PA, Nam, are an awesome team! Together the two of them got my blood sugars on track!', 'Marcus T.', 'Line worker · Lorain'], [5, 'They saved my life as far as I\u2019m concerned. By adjusting my medication and explaining everything, I feel better than I have in years about my diabetes.', 'Robert K.', 'Retired police officer · Avon'], [5, 'My first visit with Dr. Kumar and Nam was excellent. They were both very attentive and Nam answered all my questions and gave me hope that my health issues can be managed. You have to give them a shot — they really care.', 'Anita P.', 'Registered nurse · Westlake']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "testimonials"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Patient Voices",
    title: "What our patients say"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    },
    className: "oe-grid-2"
  }, t.map((x, i) => /*#__PURE__*/React.createElement(Testimonial, {
    key: i,
    rating: x[0],
    quote: x[1],
    author: x[2],
    detail: x[3]
  }))));
}
function Locations() {
  const {
    SectionHeading,
    Card,
    Badge
  } = OEHomeNS;
  const offices = [{
    name: 'Elyria',
    tag: 'Primary office',
    addr: ['673 E River St', 'Elyria, OH 44035'],
    days: 'Mon, Tue, Wed PM, Fri',
    map: 'https://www.google.com/maps?q=673+E+River+St,+Elyria,+OH+44035&output=embed'
  }, {
    name: 'Westlake',
    tag: 'Satellite office',
    addr: ['25200 Center Ridge Rd, Suite 1100', 'Westlake, OH 44145'],
    days: '2nd Wednesday of each month, AM only',
    map: 'https://www.google.com/maps?q=25200+Center+Ridge+Rd,+Westlake,+OH+44145&output=embed'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact",
    bg: "var(--oe-surface-offwhite)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Locations",
    title: "Two offices near you",
    subtitle: "Convenient to University Hospitals Elyria and Cleveland Clinic Fairview \u2014 or see us from home by televisit."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--oe-gradient-icon-soft)',
      border: '1px solid rgba(0,180,166,0.25)',
      borderRadius: 'var(--oe-radius-pill)',
      padding: '10px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--oe-gradient-icon)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-video"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--oe-navy)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Televisits welcome"), " \u2014 many follow-ups can be done by secure video from anywhere in Ohio."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    },
    className: "oe-grid-2"
  }, offices.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.name,
    hover: false,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: 'var(--oe-slate-100)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: o.name + ' office map',
    src: o.map,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    className: "oe-map",
    style: {
      width: '100%',
      height: '100%',
      border: 0,
      display: 'block',
      filter: 'grayscale(1)',
      transition: 'filter var(--oe-transition-slow)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--oe-sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: 'var(--oe-gradient-icon-soft)',
      color: 'var(--oe-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.25rem',
      margin: 0
    }
  }, o.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--oe-teal)',
      fontWeight: 600
    }
  }, o.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--oe-text-muted)',
      lineHeight: 1.7,
      marginBottom: 12
    }
  }, o.addr.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.85rem',
      color: 'var(--oe-navy)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-clock",
    style: {
      color: 'var(--oe-teal)'
    }
  }), " ", o.days))))));
}
function CTA() {
  const {
    Button
  } = OEHomeNS;
  return /*#__PURE__*/React.createElement("section", {
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
  }, "Ready to take control of your health?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '1.125rem',
      marginBottom: 28
    }
  }, "Register online through our secure patient portal, or call \u2014 we\u2019re here to help."), /*#__PURE__*/React.createElement("div", {
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
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    href: "tel:+14403220872",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone"
    })
  }, "Call ", window.OE_PHONE))));
}
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Providers, null), /*#__PURE__*/React.createElement(Services, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(NewPatients, null), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(Locations, null), /*#__PURE__*/React.createElement(CTA, null));
}
window.OEHomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceDetail.jsx
try { (() => {
// Ohio Endocrinology — reusable service detail page (data-driven via window.OE_SERVICES)
const OESvcNS = window.OhioEndocrinologyDesignSystem_eecab4;
const OE_PEN = '../../assets/glp-1/icon-glp1-pen.svg';
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
    href: window.OE_PORTAL,
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-calendar-check"
    })
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Ticker.jsx
try { (() => {
// Ohio Endocrinology — announcement ticker bar (fixed to bottom of viewport)
function Ticker() {
  const [paused, setPaused] = React.useState(false);
  const items = [['fa-location-dot', /*#__PURE__*/React.createElement("span", {
    key: "a"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Two convenient offices"), " \u2014 Elyria (primary) & Westlake, near UH Elyria and Cleveland Clinic Fairview")], ['fa-phone', /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Questions? Call us at ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--oe-gold-light)'
    }
  }, "(440) 322-0872"), " \u2014 we\u2019re here to help")], ['fa-comment-sms', /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--oe-teal)'
    }
  }, "Prefer to text?"), " Reach us at (440) 656-7755")], ['fa-calendar-check', /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--oe-teal)'
    }
  }, "Now accepting new patients"), " \u2014 register on our secure patient portal")]];
  const run = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 'var(--oe-z-ticker)',
      background: 'var(--oe-navy-deep)',
      color: 'rgba(255,255,255,0.85)',
      borderTop: '1px solid rgba(0,180,166,0.35)',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 48,
      whiteSpace: 'nowrap',
      paddingLeft: 48,
      animation: 'oe-ticker 34s linear infinite',
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, run.map(([ic, node], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: '0.82rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid " + ic,
    style: {
      color: 'var(--oe-teal)'
    }
  }), node)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPaused(p => !p),
    "aria-label": paused ? 'Play announcements' : 'Pause announcements',
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      border: 'none',
      borderLeft: '1px solid rgba(255,255,255,0.12)',
      background: 'transparent',
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
      fontSize: '0.8rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'
  })));
}
window.OETicker = Ticker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Ticker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services-data.js
try { (() => {
// Ohio Endocrinology — service catalog + detail content.
// GLP-1 copy is drafted for client approval (see content/services/glp-1.md); the
// other five reflect the live-site blurbs, expanded lightly. ⚠️ = confirm with client.
window.OE_SERVICES = [{
  slug: 'a1c',
  icon: 'fa-vial',
  title: 'Hemoglobin A1C (in-house)',
  blurb: 'Proper control of your diabetes requires a big-picture view of your blood sugar. By doing Hemoglobin A1C in house, our doctors get results the same day.',
  subtitle: 'Same-day A1C results, right in our office — so your plan can change the day you visit.',
  sections: [{
    h: 'What it is',
    body: 'Hemoglobin A1C measures your average blood sugar over the past two to three months. It is the single most important number for understanding how well your diabetes is controlled — and because we run it in house, you get results during your visit instead of waiting days for a lab.'
  }, {
    h: 'Why it matters',
    list: ['See your control at a glance, not just a single-day snapshot', 'Adjust medication the same day, based on real data', 'Track progress visit over visit toward your goal', 'No separate trip to an outside lab']
  }],
  faq: [{
    q: 'Do I need to fast for an A1C?',
    a: 'No — A1C does not require fasting, so it can be done any time during your visit.'
  }, {
    q: 'How often should it be checked?',
    a: 'Typically every 3 months if you are adjusting treatment, or twice a year once you are at goal. ⚠️ confirm the practice’s standard cadence.'
  }]
}, {
  slug: 'insulin-pumps',
  icon: 'fa-syringe',
  title: 'Insulin Pumps',
  blurb: 'Insulin pumps deliver insulin the moment it is needed — for steadier control and fewer daily injections.',
  subtitle: 'Steadier control with fewer injections — we help you choose, start, and fine-tune your pump.',
  sections: [{
    h: 'What it is',
    body: 'An insulin pump is a small device that delivers insulin continuously through a thin tube under the skin, releasing more when it is needed — such as at mealtimes. For many people it means tighter control and far fewer daily needle sticks.'
  }, {
    h: 'How we help',
    list: ['Decide whether a pump is right for you', 'Choose a device that fits your life and insurance', 'Get started with hands-on training', 'Fine-tune your settings as your needs change']
  }],
  faq: [{
    q: 'Is a pump better than injections?',
    a: 'It depends on your goals and lifestyle. Pumps offer more flexibility and steadier control for many patients, but they are not for everyone — we will help you decide.'
  }]
}, {
  slug: 'cgm',
  icon: 'fa-wave-square',
  title: 'Continuous Glucose Monitors',
  blurb: 'For the most precise monitoring, we offer continuous glucose monitors for minute-by-minute measurement of your blood sugar.',
  subtitle: 'Minute-by-minute glucose data — so you and your care team can see patterns, not guesses.',
  sections: [{
    h: 'What it is',
    body: 'A continuous glucose monitor (CGM) is a small sensor worn on the body that measures your glucose around the clock and sends readings to your phone or a reader. It replaces most fingersticks and reveals patterns that a single reading can never show.'
  }, {
    h: 'Why patients love it',
    list: ['See highs and lows in real time, with alerts', 'Understand how food, activity, and stress affect you', 'Share data with our team for smarter adjustments', 'Fewer painful fingersticks']
  }],
  faq: [{
    q: 'Will my insurance cover a CGM?',
    a: 'Many plans cover CGMs for people on insulin, and coverage is expanding. We help verify your benefits. ⚠️ confirm.'
  }]
}, {
  slug: 'testosterone',
  icon: 'fa-dumbbell',
  title: 'Testosterone Injections',
  blurb: 'Our doctors make every effort to preserve your hormone levels through medication, with the option for injections when they are needed.',
  subtitle: 'Endocrinologist-supervised hormone care — the right treatment, monitored properly.',
  sections: [{
    h: 'What it is',
    body: 'Low testosterone can affect energy, mood, strength, and metabolic health. Our doctors first work to preserve your natural hormone levels through medication, and offer supervised testosterone injections when they are the right option.'
  }, {
    h: 'Our approach',
    list: ['Confirm low testosterone with proper lab testing', 'Rule out underlying causes first', 'Preserve natural levels when possible', 'Monitor closely if injections are needed']
  }],
  faq: [{
    q: 'Is testosterone therapy safe?',
    a: 'When properly evaluated and monitored by a specialist, it can be safe and effective. It requires ongoing lab monitoring, which is exactly what endocrinologists do.'
  }]
}, {
  slug: 'inhaled-insulin',
  icon: 'fa-wind',
  title: 'Inhaled Insulin',
  blurb: 'A fantastic recent advancement in diabetes medication science, inhaled insulin can help you manage sugars without breaking your skin.',
  subtitle: 'Mealtime insulin you breathe in — a needle-free option for the right patients.',
  sections: [{
    h: 'What it is',
    body: 'Inhaled insulin is a rapid-acting mealtime insulin taken through a small inhaler instead of an injection. For patients who dread needles, it can make managing blood sugar dramatically easier.'
  }, {
    h: 'Is it right for you?',
    list: ['Best for mealtime (rapid-acting) insulin needs', 'Not suitable for everyone — lung conditions matter', 'Requires a quick breathing test before starting', 'We evaluate whether it fits your plan']
  }],
  faq: [{
    q: 'Can it replace all my injections?',
    a: 'Inhaled insulin covers mealtime needs; you may still need a long-acting insulin. We will map out the full plan with you.'
  }]
}, {
  slug: 'glp-1',
  icon: 'glp1-pen',
  // custom SVG asset
  title: 'GLP-1 Weight Management',
  badge: 'New',
  blurb: 'GLP-1 medications like semaglutide and tirzepatide can transform blood sugar control and support lasting weight loss. Our doctors manage your therapy from first dose to maintenance — safely, and with insurance guidance.',
  hero: '../../assets/glp-1/card-glp1.svg',
  subtitle: 'The same medications making headlines — prescribed and managed the right way, by endocrinologists who have used them since the beginning.',
  sections: [{
    h: 'What are GLP-1 medications?',
    body: 'GLP-1 receptor agonists — including semaglutide (Ozempic®, Wegovy®) and tirzepatide (Mounjaro®, Zepbound®) — mimic a natural hormone your body releases after eating. They help your pancreas release insulin when it is needed, quiet constant hunger signals, and slow digestion so you feel full longer. The result for many patients: meaningfully lower A1C, steady weight loss, and better cardiovascular health. These are powerful medications — and they work best with a specialist watching the whole picture.'
  }, {
    h: 'Why manage GLP-1s with an endocrinologist?',
    list: ['Right medication, right dose — matched to your labs, history, and goals', 'The full metabolic picture — in-house A1C and CGM show how you are really responding', 'Side effects handled early — careful titration, and we stay reachable', 'Insurance & affordability guidance — help with prior authorizations ⚠️ confirm', 'Muscle-preserving weight loss — losing the right weight, not just weight']
  }, {
    h: 'Who is a candidate?',
    list: ['Type 2 diabetes not at goal on current medication', 'BMI 30+, or 27+ with a weight-related condition ⚠️ confirm criteria', 'Prediabetes or insulin resistance with difficulty losing weight ⚠️ confirm scope', 'A history of "trying everything" without lasting results']
  }, {
    h: 'What to expect',
    steps: [['Evaluation', 'Full history, exam, and labs (A1C in-house). We confirm you are a safe candidate and set realistic goals together.'], ['Start low, go slow', 'You begin at a starter dose, with clear instructions for the once-weekly injection.'], ['Titrate & monitor', 'Follow-ups every 4–8 weeks ⚠️ confirm cadence, stepping the dose up as your body adjusts.'], ['Maintain', 'Once at goal, we build the long-term plan — based on your labs, not a trend.']]
  }],
  faq: [{
    q: 'Do you prescribe Ozempic and Mounjaro, or compounded versions?',
    a: 'We prescribe FDA-approved GLP-1 medications through your pharmacy. ⚠️ confirm the practice’s stance on compounded semaglutide.'
  }, {
    q: 'Will my insurance cover it?',
    a: 'Often yes for type 2 diabetes; coverage for weight loss alone varies widely by plan. We help you understand prior authorization and manufacturer savings programs. ⚠️ confirm.'
  }, {
    q: 'How much weight will I lose?',
    a: 'In clinical trials, patients lost on average 15% of body weight on semaglutide and up to 20% on tirzepatide over about a year, combined with nutrition and activity changes. Your results depend on your dose, consistency, and metabolism.'
  }, {
    q: 'What are the side effects?',
    a: 'The most common are nausea, constipation, and fatigue, especially when the dose increases. Careful titration prevents most of it — and you can text us at (440) 656-7755 when something feels off.'
  }, {
    q: 'I am already on insulin — can I still use a GLP-1?',
    a: 'Often yes — and it may reduce how much insulin you need. This combination requires endocrinologist supervision, which is exactly what we do.'
  }, {
    q: 'Do I have to stay on it forever?',
    a: 'Weight and blood sugar tend to return when the medication stops — GLP-1s treat a chronic condition, they do not cure it. At maintenance visits we discuss the long-term plan that fits your health and budget.'
  }],
  compliance: 'GLP-1 medications are prescription-only and are not appropriate for everyone. Individual results vary. Trial results cited: STEP 1 (semaglutide 2.4 mg, NEJM 2021) and SURMOUNT-1 (tirzepatide, NEJM 2022). Ozempic® and Wegovy® are registered trademarks of Novo Nordisk; Mounjaro® and Zepbound® are registered trademarks of Eli Lilly. This page is for information only and is not medical advice.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardIcon = __ds_scope.CardIcon;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardText = __ds_scope.CardText;

__ds_ns.CardLink = __ds_scope.CardLink;

__ds_ns.StatsStrip = __ds_scope.StatsStrip;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.HipaaNotice = __ds_scope.HipaaNotice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
