import * as React from 'react';

/**
 * Inline status message with icon. Tinted bg + colored border matching the variant.
 */
export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Optional bold lead line. */
  title?: React.ReactNode;
  /** Override the default variant glyph. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
