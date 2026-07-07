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