// Ohio Endocrinology — announcement ticker bar (fixed to bottom of viewport)
function Ticker() {
  const [paused, setPaused] = React.useState(false);
  const items = [
    ['fa-location-dot', <span key="a"><strong style={{ color: '#fff' }}>Two convenient offices</strong> &mdash; Elyria (primary) &amp; Westlake, near UH Elyria and Cleveland Clinic Fairview</span>],
    ['fa-phone', <span key="b">Questions? Call us at <strong style={{ color: 'var(--oe-gold-light)' }}>(440) 322-0872</strong> &mdash; we&rsquo;re here to help</span>],
    ['fa-comment-sms', <span key="c"><strong style={{ color: 'var(--oe-teal)' }}>Prefer to text?</strong> Reach us at (440) 656-7755</span>],
    ['fa-calendar-check', <span key="d"><strong style={{ color: 'var(--oe-teal)' }}>Now accepting new patients</strong> &mdash; register on our secure patient portal</span>],
  ];
  const run = [...items, ...items];
  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 'var(--oe-z-ticker)', background: 'var(--oe-navy-deep)', color: 'rgba(255,255,255,0.85)', borderTop: '1px solid rgba(0,180,166,0.35)', height: 44, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 48, whiteSpace: 'nowrap', paddingLeft: 48, animation: 'oe-ticker 34s linear infinite', animationPlayState: paused ? 'paused' : 'running' }}>
          {run.map(([ic, node], i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '0.82rem' }}>
              <i className={"fa-solid " + ic} style={{ color: 'var(--oe-teal)' }} />{node}
            </span>
          ))}
        </div>
      </div>
      <button onClick={() => setPaused(p => !p)} aria-label={paused ? 'Play announcements' : 'Pause announcements'}
        style={{ flexShrink: 0, width: 44, height: 44, border: 'none', borderLeft: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '0.8rem' }}>
        <i className={paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'} />
      </button>
    </div>
  );
}

window.OETicker = Ticker;
