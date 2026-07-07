import * as React from 'react';

/**
 * Pill-shaped action button. Primary blue → navy on hover, plus teal, gold, and
 * outline variants for dark and light bands. Min 48px touch target.
 *
 * @startingPoint section="Buttons" subtitle="Pill action buttons, all variants" viewport="700x160"
 */
export interface ButtonProps {
  /** Visual style. */
  variant?: 'primary' | 'teal' | 'gold' | 'outline' | 'outline-white';
  /** Touch-target size. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Render as an anchor when set. */
  href?: string;
  /** Element/tag when not a link. */
  as?: keyof JSX.IntrinsicElements;
  /** Icon node placed before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node placed after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to container width (stacks on mobile). */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
