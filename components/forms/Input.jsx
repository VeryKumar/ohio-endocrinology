import React from 'react';
import { FormField, fieldControlStyle } from './FormField.jsx';

/**
 * Ohio Endocrinology — Input
 * 2px-border text field, 48px min height, blue focus ring, red invalid state.
 */
export function Input({ label, hint, error, required, id, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return (
    <FormField label={label} htmlFor={fieldId} required={required} hint={hint} error={error} style={style}>
      <input
        id={fieldId}
        required={required}
        aria-invalid={!!error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={fieldControlStyle(!!error, focused)}
        {...rest}
      />
    </FormField>
  );
}
