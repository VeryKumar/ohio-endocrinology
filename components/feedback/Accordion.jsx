import React from 'react';

/**
 * Ohio Endocrinology — Accordion / FAQ
 * Bordered rounded items. Active item gets a blue-light border, soft gradient trigger,
 * and a chevron that rotates 180°.
 */
export function Accordion({ items = [], allowMultiple = false, style = {} }) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--oe-sp-3)', ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{
            border: `1px solid ${isOpen ? 'var(--oe-blue-light)' : 'var(--oe-border)'}`,
            borderRadius: 'var(--oe-radius-lg)',
            background: 'var(--oe-surface)',
            boxShadow: isOpen ? 'var(--oe-shadow-sm)' : 'none',
            overflow: 'hidden',
            transition: 'all var(--oe-transition)',
          }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 'var(--oe-sp-4)', textAlign: 'left', cursor: 'pointer',
                padding: 'var(--oe-sp-5) var(--oe-sp-6)', minHeight: 48,
                border: 'none',
                background: isOpen ? 'var(--oe-gradient-icon-soft)' : 'transparent',
                fontFamily: 'var(--oe-font-body)', fontSize: '1rem', fontWeight: 600,
                color: 'var(--oe-navy)',
              }}
            >
              {it.q}
              <span aria-hidden="true" style={{
                flexShrink: 0, color: 'var(--oe-teal)', fontSize: '0.875rem',
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform var(--oe-transition)',
              }}>▼</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 var(--oe-sp-6) var(--oe-sp-5)', color: 'var(--oe-text-muted)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
