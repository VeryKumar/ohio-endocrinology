import React from 'react';

/**
 * Ohio Endocrinology — HipaaNotice
 * Amber left-bordered warning box discouraging PHI submission. `secure` = green variant.
 */
export function HipaaNotice({ secure = false, children, style = {}, ...rest }) {
  const c = secure
    ? { bg: 'var(--oe-success-bg)', border: 'var(--oe-success)', fg: 'var(--oe-success)', icon: '🔒' }
    : { bg: 'var(--oe-warning-bg)', border: 'var(--oe-warning)', fg: 'var(--oe-warning)', icon: '⚠' };
  return (
    <div
      style={{
        display: 'flex', gap: 'var(--oe-sp-3)', alignItems: 'flex-start',
        padding: 'var(--oe-sp-4) var(--oe-sp-5)',
        borderRadius: 'var(--oe-radius)',
        borderLeft: `4px solid ${c.border}`,
        background: c.bg,
        fontSize: '0.8125rem',
        lineHeight: 1.6,
        color: 'var(--oe-text)',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ flexShrink: 0 }}>{c.icon}</span>
      <div>
        {children || (secure
          ? <><strong style={{ color: c.fg }}>Secure & encrypted.</strong> This connection is protected. You may include health details.</>
          : <><strong style={{ color: c.fg }}>Do not submit PHI.</strong> Please don't include diagnoses, medications, or other protected health information in this form.</>
        )}
      </div>
    </div>
  );
}
