import * as React from 'react';

/**
 * HIPAA-conscious form notice. Default amber ("don't submit PHI"); `secure` shows a green
 * encrypted-connection variant. Provide children to override the default copy.
 */
export interface HipaaNoticeProps {
  /** Green "secure & encrypted" variant. */
  secure?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function HipaaNotice(props: HipaaNoticeProps): JSX.Element;
