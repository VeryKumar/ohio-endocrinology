import React from 'react';
import { FormField, fieldControlStyle } from './FormField.jsx';

/**
 * Ohio Endocrinology — Textarea
 * Multi-line field matching Input styling.
 */
export function Textarea({ label, hint, error, required, id, rows = 4, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  return (
    <FormField label={label} htmlFor={fieldId} required={required} hint={hint} error={error} style={style}>
      <textarea
        id={fieldId}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...fieldControlStyle(!!error, focused), resize: 'vertical', lineHeight: 1.6 }}
        {...rest}
      />
    </FormField>
  );
}
