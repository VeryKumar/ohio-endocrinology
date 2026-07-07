import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Native select with custom chevron, matches Input styling. Pass `options` or `<option>` children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  /** Disabled first option shown when empty. */
  placeholder?: string;
  options?: (string | SelectOption)[];
}
export function Select(props: SelectProps): JSX.Element;
