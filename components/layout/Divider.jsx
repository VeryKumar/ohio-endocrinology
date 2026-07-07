import React from 'react';

/**
 * Ohio Endocrinology — Divider
 * 60×3px teal pill rule. `center` centers it; `variant` recolors.
 */
export function Divider({ variant = 'teal', center = false, style = {} }) {
  const bg = { teal: 'var(--oe-teal)', gold: 'var(--oe-gold)', blue: 'var(--oe-blue)' }[variant];
  return (
    <div style={{
      width: 60, height: 3, borderRadius: 'var(--oe-radius-pill)',
      background: bg,
      margin: center ? 'var(--oe-sp-5) auto' : 'var(--oe-sp-5) 0',
      ...style,
    }} />
  );
}
