import React from 'react';

/**
 * Ohio Endocrinology — Badge
 * Small pill label with tinted-alpha background.
 */
export function Badge({ color = 'teal', children, style = {}, ...rest }) {
  const colors = {
    blue: { bg: 'rgba(30,95,168,0.10)', fg: 'var(--oe-blue)' },
    teal: { bg: 'rgba(0,180,166,0.12)', fg: 'var(--oe-teal-dark)' },
    gold: { bg: 'rgba(200,146,42,0.14)', fg: 'var(--oe-gold-dark)' },
    navy: { bg: 'rgba(13,45,78,0.10)', fg: 'var(--oe-navy)' },
    green: { bg: 'var(--oe-success-bg)', fg: 'var(--oe-success)' },
  };
  const c = colors[color] || colors.teal;
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
