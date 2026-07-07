import * as React from 'react';

/**
 * Band of headline metrics. StatsStrip is the container; Stat is one metric.
 *
 * @startingPoint section="Content" subtitle="Headline metrics band" viewport="700x200"
 */
export interface StatsStripProps {
  /** Band background. */
  variant?: 'navy' | 'teal' | 'light';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatsStrip(props: StatsStripProps): JSX.Element;

export interface StatProps {
  /** The big number, e.g. "4.9★" or "15k+". */
  number?: React.ReactNode;
  /** Caption under the number. */
  label?: React.ReactNode;
  /** Use on the `light` strip variant. */
  light?: boolean;
  /** Override the number color (e.g. "#fff" for bold white on the navy strip). Defaults to teal. */
  numberColor?: string;
  style?: React.CSSProperties;
}
export function Stat(props: StatProps): JSX.Element;
