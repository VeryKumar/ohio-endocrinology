import React from 'react';

/**
 * Ohio Endocrinology — Testimonial
 * Card with giant faded quote mark, gold star row, italic quote, gradient-avatar author.
 */
export function Testimonial({ quote, author, detail, rating = 5, style = {}, ...rest }) {
  const initial = (author || '?').trim().charAt(0).toUpperCase();
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--oe-surface)',
        border: '1px solid var(--oe-border)',
        borderRadius: 'var(--oe-radius-lg)',
        boxShadow: 'var(--oe-shadow-card)',
        padding: 'var(--oe-sp-8)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        position: 'absolute', top: '0.25rem', right: 'var(--oe-sp-5)',
        fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1,
        color: 'rgba(0,180,166,0.22)', pointerEvents: 'none',
      }}>”</span>

      <div aria-label={`${rating} out of 5 stars`} style={{ color: 'var(--oe-gold-light)', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: 'var(--oe-sp-4)' }}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>

      <p style={{ fontStyle: 'italic', color: 'var(--oe-text-muted)', lineHeight: 1.7, flex: 1 }}>{quote}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--oe-sp-3)', marginTop: 'var(--oe-sp-6)' }}>
        <div style={{
          width: 48, height: 48, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--oe-radius-pill)',
          background: 'var(--oe-gradient-icon)',
          color: '#fff', fontWeight: 700, fontFamily: 'var(--oe-font-display)',
        }}>{initial}</div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--oe-navy)' }}>{author}</div>
          {detail && <div style={{ fontSize: '0.75rem', color: 'var(--oe-text-muted)' }}>{detail}</div>}
        </div>
      </div>
    </div>
  );
}
