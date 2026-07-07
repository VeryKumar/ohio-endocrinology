import React from 'react';

/**
 * Ohio Endocrinology — Card
 * White surface, 16px radius, navy-tinted shadow, full-height flex column.
 * Lifts 6px on hover. Compose with the sub-parts.
 */
export function Card({ hover = true, children, style = {}, ...rest }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** 60px gradient icon chip (soft blue→teal bg, blue glyph). */
export function CardIcon({ children, style = {} }) {
  return (
    <div style={{
      width: 60, height: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 'var(--oe-radius)',
      background: 'var(--oe-gradient-icon-soft)',
      color: 'var(--oe-blue)',
      fontSize: '1.5rem',
      marginBottom: 'var(--oe-sp-5)',
      ...style,
    }}>
      {children}
    </div>
  );
}

/** Padded body region. */
export function CardBody({ children, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 'var(--oe-sp-8)', ...style }}>
      {children}
    </div>
  );
}

/** Playfair title. */
export function CardTitle({ children, style = {} }) {
  return (
    <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--oe-sp-3)', ...style }}>{children}</h3>
  );
}

/** Muted body text. */
export function CardText({ children, style = {} }) {
  return (
    <p style={{ fontSize: '0.9375rem', color: 'var(--oe-text-muted)', lineHeight: 1.7, ...style }}>{children}</p>
  );
}

/** Arrow link whose gap widens on hover. */
export function CardLink({ href = '#', children, style = {} }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: h ? 'var(--oe-sp-3)' : 'var(--oe-sp-2)',
        marginTop: 'var(--oe-sp-5)', color: 'var(--oe-blue)', fontWeight: 600, fontSize: '0.9375rem',
        textDecoration: 'none', transition: 'gap var(--oe-transition)', ...style,
      }}>
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}
