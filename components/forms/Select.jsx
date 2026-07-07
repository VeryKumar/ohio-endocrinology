import React from 'react';
import { FormField, fieldControlStyle } from './FormField.jsx';

/**
 * Ohio Endocrinology — Select
 * Native select with a custom chevron, matching Input styling.
 */
export function Select({ label, hint, error, required, id, options = [], placeholder, children, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return (
    <FormField label={label} htmlFor={fieldId} required={required} hint={hint} error={error} style={style}>
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          required={required}
          aria-invalid={!!error}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...fieldControlStyle(!!error, focused),
            appearance: 'none', WebkitAppearance: 'none',
            paddingRight: '2.5rem', cursor: 'pointer',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
          {children}
        </select>
        <span aria-hidden="true" style={{
          position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
          color: 'var(--oe-teal)', fontSize: '0.75rem', pointerEvents: 'none',
        }}>▼</span>
      </div>
    </FormField>
  );
}
