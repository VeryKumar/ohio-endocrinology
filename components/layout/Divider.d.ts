import * as React from 'react';

/** 60×3px teal pill divider. */
export interface DividerProps {
  variant?: 'teal' | 'gold' | 'blue';
  /** Center horizontally. */
  center?: boolean;
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;
