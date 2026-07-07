import React from 'react';
import { Divider } from './Divider.jsx';

/**
 * Ohio Endocrinology — SectionHeading
 * The signature eyebrow → title → teal divider → subtitle pattern.
 */
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', divider = 'teal', style = {} }) {
  const centered = align === 'center';
  return (
    <div style={{ textAlign: align, maxWidth: centered ? 720 : undefined, marginInline: centered ? 'auto' : undefined, ...style }}>
      {eyebrow && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--oe-sp-3)',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--oe-teal)',
          marginBottom: 'var(--oe-sp-3)',
        }}>
          <span aria-hidden="true" style={{ width: 28, height: 2, background: 'var(--oe-teal)', display: 'inline-block' }} />
          {eyebrow}
        </div>
      )}
      {title && <h2 style={{ margin: 0 }}>{title}</h2>}
      <Divider variant={divider} center={centered} />
      {subtitle && (
        <p style={{
          fontSize: '1.125rem', color: 'var(--oe-text-muted)', lineHeight: 1.7,
          maxWidth: 660, marginInline: centered ? 'auto' : undefined,
        }}>{subtitle}</p>
      )}
    </div>
  );
}
