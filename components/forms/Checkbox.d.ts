import * as React from 'react';

/** Consent-style checkbox with adjacent wrapping label. Teal check, 44px min target. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  required?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
