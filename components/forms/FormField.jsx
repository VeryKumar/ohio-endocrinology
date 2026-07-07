import React from 'react';

const labelStyle = {
  display: 'block', fontSize: '0.875rem', fontWeight: 600,
  color: 'var(--oe-navy)', marginBottom: 'var(--oe-sp-2)',
};
const hintStyle = { fontSize: '0.75rem', color: 'var(--oe-text-muted)', marginTop: 'var(--oe-sp-1)' };
const errorStyle = { fontSize: '0.75rem', color: 'var(--oe-error)', marginTop: 'var(--oe-sp-1)', fontWeight: 500 };

export function fieldControlStyle(invalid, focused) {
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
    transition: 'border-color var(--oe-transition), box-shadow var(--oe-transition)',
  };
}

/** Label + control wrapper shared by form fields. */
export function FormField({ label, htmlFor, required, hint, error, children, style = {} }) {
  return (
    <div style={{ marginBottom: 'var(--oe-sp-5)', ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={labelStyle}>
          {label}{required && <span aria-hidden="true" style={{ color: 'var(--oe-error)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      {children}
      {error ? <div style={errorStyle}>{error}</div> : hint ? <div style={hintStyle}>{hint}</div> : null}
    </div>
  );
}
