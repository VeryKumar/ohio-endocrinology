import * as React from 'react';

/**
 * Single-line text field with label, hint/error, blue focus ring, red invalid state.
 * Spreads native input props (type, value, placeholder, onChange…).
 *
 * @startingPoint section="Forms" subtitle="Text input with label" viewport="700x120"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
}
export function Input(props: InputProps): JSX.Element;
