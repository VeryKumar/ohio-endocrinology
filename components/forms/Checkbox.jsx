import React from 'react';

/**
 * Ohio Endocrinology — Checkbox
 * Consent-style checkbox with adjacent label. 20px box, teal check when on.
 */
export function Checkbox({ label, id, checked, defaultChecked, onChange, required, style = {}, ...rest }) {
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return (
    <label htmlFor={fieldId} style={{
      display: 'flex', gap: 'var(--oe-sp-3)', alignItems: 'flex-start',
      cursor: 'pointer', fontSize: '0.875rem', lineHeight: 1.5,
      color: 'var(--oe-text)', minHeight: 44, padding: '2px 0', ...style,
    }}>
      <input
        id={fieldId}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        required={required}
        style={{
          appearance: 'auto', width: 20, height: 20, marginTop: 2,
          accentColor: 'var(--oe-teal)', flexShrink: 0, cursor: 'pointer',
        }}
        {...rest}
      />
      <span>{label}{required && <span aria-hidden="true" style={{ color: 'var(--oe-error)', marginLeft: 2 }}>*</span>}</span>
    </label>
  );
}
