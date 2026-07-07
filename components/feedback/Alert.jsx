import React from 'react';

/**
 * Ohio Endocrinology — Alert
 * Flex icon + text, tinted background, colored border/text.
 */
export function Alert({ variant = 'info', title, icon, children, style = {}, ...rest }) {
  const v = {
    info: { bg: 'var(--oe-info-bg)', fg: 'var(--oe-blue)', border: 'var(--oe-blue)' },
    success: { bg: 'var(--oe-success-bg)', fg: 'var(--oe-success)', border: 'var(--oe-success)' },
    warning: { bg: 'var(--oe-warning-bg)', fg: 'var(--oe-warning)', border: 'var(--oe-warning)' },
    error: { bg: 'var(--oe-error-bg)', fg: 'var(--oe-error)', border: 'var(--oe-error)' },
  }[variant];
  const defaultIcon = { info: 'ℹ', success: '✓', warning: '⚠', error: '✕' }[variant];
  return (
    <div
      role="alert"
      style={{
        display: 'flex', gap: 'var(--oe-sp-3)', alignItems: 'flex-start',
        padding: 'var(--oe-sp-4) var(--oe-sp-5)',
        borderRadius: 'var(--oe-radius)',
        border: `1px solid ${v.border}`,
        background: v.bg,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: 'var(--oe-text)',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ color: v.fg, fontWeight: 700, flexShrink: 0, lineHeight: 1.4 }}>
        {icon || defaultIcon}
      </span>
      <div>
        {title && <div style={{ fontWeight: 700, color: v.fg, marginBottom: children ? 2 : 0 }}>{title}</div>}
        {children}
      </div>
    </div>
  );
}
