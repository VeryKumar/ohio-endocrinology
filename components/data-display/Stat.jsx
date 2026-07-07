import React from 'react';

/**
 * Ohio Endocrinology — Stat & StatsStrip
 * Dark navy gradient band of headline metrics with a teal top hairline.
 */
export function StatsStrip({ variant = 'navy', children, style = {}, ...rest }) {
  const bg = {
    navy: 'var(--oe-gradient-hero)',
    teal: 'var(--oe-gradient-teal)',
    light: 'var(--oe-surface-offwhite)',
  }[variant];
  const isLight = variant === 'light';
  return (
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 'var(--oe-sp-8)',
        padding: 'var(--oe-sp-12) var(--oe-sp-8)',
        borderRadius: 'var(--oe-radius-lg)',
        background: bg,
        borderTop: isLight ? 'none' : '3px solid var(--oe-teal)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Stat({ number, label, light, numberColor, style = {} }) {
  return (
    <div style={{ textAlign: 'center', ...style }}>
      <div style={{
        fontFamily: 'var(--oe-font-display)',
        fontWeight: 800,
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        lineHeight: 1,
        color: numberColor || (light ? 'var(--oe-teal-dark)' : 'var(--oe-teal)'),
      }}>
        {number}
      </div>
      <div style={{
        marginTop: 'var(--oe-sp-2)',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: light ? 'var(--oe-text-muted)' : 'rgba(255,255,255,0.75)',
      }}>
        {label}
      </div>
    </div>
  );
}
