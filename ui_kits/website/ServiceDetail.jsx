// Ohio Endocrinology — reusable service detail page (data-driven via window.OE_SERVICES)
const OESvcNS = window.OhioEndocrinologyDesignSystem_eecab4;
const OE_PEN = '../../assets/glp-1/icon-glp1-pen.svg';

function svcIcon(s, size) {
  if (s.icon === 'glp1-pen') return <img src={OE_PEN} alt="" style={{ width: size || '1.5rem', height: size || '1.5rem' }} />;
  return <i className={"fa-solid " + s.icon} style={{ fontSize: size || '1.5rem' }} />;
}
window.OEsvcIcon = svcIcon;

function ServiceDetail({ slug, onNav }) {
  const { Button, SectionHeading, Accordion, Badge } = OESvcNS;
  const list = window.OE_SERVICES || [];
  const s = list.find((x) => x.slug === slug) || list[0];
  const dotGrid = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";
  const heroBg = [
    'radial-gradient(120% 90% at 88% 12%, rgba(0,180,166,0.26) 0%, rgba(0,180,166,0) 55%)',
    dotGrid,
    'linear-gradient(135deg, #0a2543 0%, #0d2d4e 50%, #123a63 100%)',
  ].join(', ');
  const others = list.filter((x) => x.slug !== s.slug);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: heroBg, color: '#fff', padding: 'var(--oe-section-pad) 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)', display: 'grid', gridTemplateColumns: s.hero ? '1.1fr 0.9fr' : '1fr', gap: 56, alignItems: 'center' }} className="oe-hero-grid">
          <div>
            <button onClick={() => onNav('services')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'var(--oe-teal)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', padding: 0, marginBottom: 20 }}>
              <i className="fa-solid fa-arrow-left" /> All services
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oe-teal)', fontSize: '1.4rem', flexShrink: 0 }}>{svcIcon(s, '1.6rem')}</span>
              {s.badge && <Badge color="gold">{s.badge}</Badge>}
            </div>
            <h1 style={{ color: '#fff', marginBottom: 18 }}>{s.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1875rem', lineHeight: 1.6, maxWidth: 560, marginBottom: 30 }}>{s.subtitle}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="teal" size="lg" href={window.OE_PORTAL} target="_blank" rel="noopener" iconLeft={<i className="fa-solid fa-calendar-check" />}>Book Appointment</Button>
              <Button variant="outline-white" size="lg" href="tel:+14403220872" iconLeft={<i className="fa-solid fa-phone" />}>{window.OE_PHONE}</Button>
            </div>
          </div>
          {s.hero && (
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--oe-shadow-xl)' }}>
              <img src={s.hero} alt="" style={{ width: '100%', display: 'block' }} />
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: 'var(--oe-section-pad) 0', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 var(--oe-container-pad)' }}>
          {s.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.875rem)', marginBottom: 16 }}>{sec.h}</h2>
              {sec.body && <p style={{ color: 'var(--oe-text-muted)', fontSize: '1.0625rem', lineHeight: 1.75 }}>{sec.body}</p>}
              {sec.list && (
                <ul style={{ listStyle: 'none', display: 'grid', gap: 12, marginTop: 8 }}>
                  {sec.list.map((li, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--oe-text)', lineHeight: 1.6 }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--oe-teal)', marginTop: 5, flexShrink: 0 }} />
                      <span dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              )}
              {sec.steps && (
                <div style={{ display: 'grid', gap: 16, marginTop: 8 }}>
                  {sec.steps.map((st, j) => (
                    <div key={j} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: '50%', background: 'var(--oe-gradient-icon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--oe-font-display)' }}>{j + 1}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--oe-navy)', marginBottom: 2 }}>{st[0]}</div>
                        <div style={{ color: 'var(--oe-text-muted)', lineHeight: 1.65 }}>{st[1]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {s.faq && s.faq.length > 0 && (
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(1.4rem,2.6vw,1.875rem)', marginBottom: 20 }}>Frequently asked questions</h2>
              <Accordion items={s.faq.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          )}

          {s.compliance && (
            <p style={{ fontSize: '0.75rem', color: 'var(--oe-text-muted)', lineHeight: 1.6, borderTop: '1px solid var(--oe-border)', paddingTop: 20 }}>{s.compliance}</p>
          )}
        </div>
      </section>

      {/* Explore other services */}
      <section style={{ padding: 'var(--oe-section-pad-sm) 0 var(--oe-section-pad)', background: 'var(--oe-surface-offwhite)' }}>
        <div style={{ maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)' }}>
          <div style={{ marginBottom: 28 }}><SectionHeading eyebrow="Our Services" title="Explore other services" /></div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {others.map((o) => (
              <button key={o.slug} onClick={() => { onNav('service:' + o.slug); window.scrollTo({ top: 0 }); }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderRadius: 'var(--oe-radius-pill)', border: '1px solid var(--oe-border)', background: '#fff', color: 'var(--oe-navy)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', boxShadow: 'var(--oe-shadow-xs)' }}>
                <span style={{ color: 'var(--oe-blue)', display: 'inline-flex' }}>{svcIcon(o, '1rem')}</span>{o.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--oe-gradient-teal)', color: '#fff', padding: 'var(--oe-section-pad) 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 var(--oe-container-pad)', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: 16 }}>{s.slug === 'glp-1' ? 'Wondering if a GLP-1 is right for you?' : 'Have questions about ' + s.title + '?'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: 28 }}>{s.slug === 'glp-1' ? 'Get a straight answer from a specialist — not a subscription website.' : 'Talk with our team — we’re here to help you decide the right next step.'}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="outline-white" size="lg" href={window.OE_PORTAL} target="_blank" rel="noopener">New Patient Registration</Button>
            <Button variant="gold" size="lg" href="tel:+14403220872" iconLeft={<i className="fa-solid fa-phone" />}>Call {window.OE_PHONE}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.OEServiceDetail = ServiceDetail;
