import * as React from 'react';

/**
 * Signature section header: eyebrow → title → teal divider → subtitle.
 *
 * @startingPoint section="Layout" subtitle="Eyebrow + title + divider + subtitle" viewport="700x220"
 */
export interface SectionHeadingProps {
  /** Uppercase teal micro-label with dash. */
  eyebrow?: React.ReactNode;
  /** The h2 title. */
  title?: React.ReactNode;
  /** Muted supporting line (max ~660px). */
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  divider?: 'teal' | 'gold' | 'blue';
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
