import * as React from 'react';

/** Multi-line text field, matches Input styling. Spreads native textarea props. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  rows?: number;
}
export function Textarea(props: TextareaProps): JSX.Element;
