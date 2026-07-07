import React from 'react';

/**
 * Ohio Endocrinology — Button
 * Pill-shaped action. Inter 600, min 48×48 touch target, 2px border, lifts 2px on hover.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0.5rem 1.25rem', fontSize: '0.875rem', minHeight: 40 },
    md: { padding: '0.85rem 2rem', fontSize: '1rem', minHeight: 48 },
    lg: { padding: '1rem 2.5rem', fontSize: '1.125rem', minHeight: 56 },
    xl: { padding: '1.15rem 3rem', fontSize: '1.25rem', minHeight: 64 },
  };

  const variants = {
    primary: { bg: 'var(--oe-blue)', color: '#fff', border: 'var(--oe-blue)', hoverBg: 'var(--oe-navy)', hoverBorder: 'var(--oe-navy)' },
    teal: { bg: 'var(--oe-teal)', color: '#fff', border: 'var(--oe-teal)', hoverBg: 'var(--oe-teal-dark)', hoverBorder: 'var(--oe-teal-dark)' },
    gold: { bg: 'var(--oe-gold)', color: '#fff', border: 'var(--oe-gold)', hoverBg: 'var(--oe-gold-dark)', hoverBorder: 'var(--oe-gold-dark)' },
    outline: { bg: 'transparent', color: 'var(--oe-navy)', border: 'var(--oe-navy)', hoverBg: 'var(--oe-navy)', hoverBorder: 'var(--oe-navy)', hoverColor: '#fff' },
    'outline-white': { bg: 'transparent', color: '#fff', border: 'rgba(255,255,255,0.6)', hoverBg: '#fff', hoverBorder: '#fff', hoverColor: 'var(--oe-navy)' },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--oe-sp-2)',
    fontFamily: 'var(--oe-font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    minHeight: s.minHeight,
    borderRadius: 'var(--oe-radius-pill)',
    border: `2px solid ${hover && !disabled ? v.hoverBorder : v.border}`,
    background: hover && !disabled ? v.hoverBg : v.bg,
    color: hover && !disabled ? (v.hoverColor || v.color) : v.color,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transform: hover && !disabled ? 'translateY(-2px)' : 'none',
    boxShadow: hover && !disabled ? 'var(--oe-shadow-lg)' : 'none',
    transition: 'all var(--oe-transition)',
    ...style,
  };

  const Tag = href ? 'a' : as;
  return (
    <Tag
      href={href}
      style={base}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
