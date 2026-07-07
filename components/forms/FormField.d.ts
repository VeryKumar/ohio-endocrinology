import * as React from 'react';

/**
 * Form field wrapper: navy label, required asterisk, hint or error line under the control.
 * Wrap any control as children, or use Input/Select/Textarea which include it.
 */
export interface FormFieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  /** Helper text (hidden when `error` is set). */
  hint?: React.ReactNode;
  /** Error message; turns the state red. */
  error?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function FormField(props: FormFieldProps): JSX.Element;
export function fieldControlStyle(invalid?: boolean, focused?: boolean): React.CSSProperties;
