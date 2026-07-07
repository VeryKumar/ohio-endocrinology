import * as React from 'react';

/**
 * White content card — 16px radius, navy-tinted shadow, lifts 6px on hover.
 * Compose with CardIcon, CardBody, CardTitle, CardText, CardLink.
 *
 * @startingPoint section="Content" subtitle="Service / feature card" viewport="700x340"
 */
export interface CardProps {
  /** Enable the hover lift. */
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

export interface CardPartProps { children?: React.ReactNode; style?: React.CSSProperties; }
export function CardIcon(props: CardPartProps): JSX.Element;
export function CardBody(props: CardPartProps): JSX.Element;
export function CardTitle(props: CardPartProps): JSX.Element;
export function CardText(props: CardPartProps): JSX.Element;

export interface CardLinkProps extends CardPartProps { href?: string; }
export function CardLink(props: CardLinkProps): JSX.Element;
