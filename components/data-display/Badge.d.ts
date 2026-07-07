import * as React from 'react';

/**
 * Small pill label with tinted-alpha background. Use for micro-status and category tags.
 */
export interface BadgeProps {
  /** Color scheme. */
  color?: 'blue' | 'teal' | 'gold' | 'navy' | 'green';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
