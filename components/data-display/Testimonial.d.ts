import * as React from 'react';

/**
 * Patient testimonial card — faded quote mark, gold star row, gradient-circle initial avatar.
 */
export interface TestimonialProps {
  /** The testimonial text. */
  quote?: React.ReactNode;
  /** Author name (its initial fills the avatar). */
  author?: string;
  /** Sub-line, e.g. "Thyroid patient · Cleveland". */
  detail?: string;
  /** Filled stars, 0–5. */
  rating?: number;
  style?: React.CSSProperties;
}
export function Testimonial(props: TestimonialProps): JSX.Element;
