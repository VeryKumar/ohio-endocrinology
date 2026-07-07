import * as React from 'react';

export interface AccordionItem {
  /** Question / trigger label. */
  q: React.ReactNode;
  /** Answer / panel body. */
  a: React.ReactNode;
}

/**
 * FAQ accordion. Active item gets a blue-light border, soft gradient trigger, rotated chevron.
 *
 * @startingPoint section="Content" subtitle="FAQ accordion" viewport="700x320"
 */
export interface AccordionProps {
  items?: AccordionItem[];
  /** Allow several panels open at once. */
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}
export function Accordion(props: AccordionProps): JSX.Element;
