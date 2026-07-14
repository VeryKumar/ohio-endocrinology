// Ohio Endocrinology — homepage (verified facts from content/site-facts.md)
const OEHomeNS = window.OhioEndocrinologyDesignSystem_eecab4;
const OE_DRK = '../../assets/source/dr-vikram-kumar.jpg';
const OE_NAM = '../../assets/source/namrata-kumar.png';

function Section({ bg, children, pad, id }) {
  return (
    <section id={id} style={{ background: bg || '#fff', padding: (pad || 'var(--oe-section-pad)') + ' 0' }}>
      <div style={{ maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)' }}>{children}</div>
    </section>
  );
}

function Hero() {
  const { Button } = OEHomeNS;
  const trust = [['fa-droplet', 'Diabetes'], ['fa-heart-pulse', 'Thyroid'], ['fa-dna', 'Endocrine']];
  const dotGrid = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";
  const heroBg = [
    'radial-gradient(120% 90% at 85% 15%, rgba(0,180,166,0.28) 0%, rgba(0,180,166,0) 55%)',
    'radial-gradient(90% 80% at 8% 90%, rgba(46,125,209,0.35) 0%, rgba(46,125,209,0) 60%)',
    dotGrid,
    'linear-gradient(135deg, #0a2543 0%, #0d2d4e 45%, #123a63 100%)',
  ].join(', ');
  return (
    <section style={{ position: 'relative', background: heroBg, color: '#fff', padding: 'calc(var(--oe-section-pad) + 1rem) 0 var(--oe-section-pad)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--oe-container)', margin: '0 auto', padding: '0 var(--oe-container-pad)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }} className="oe-hero-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--oe-teal)', marginBottom: 22 }}>
            <span style={{ width: 32, height: 2, background: 'var(--oe-teal)', display: 'inline-block' }} /> Serving Greater Cleveland since 2009
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.07, marginBottom: 24 }}>
            World-class care,<br />from our <span style={{ color: 'var(--oe-teal)' }}>family to yours</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1875rem', lineHeight: 1.65, maxWidth: 540, marginBottom: 32 }}>
            Diabetes, Thyroid &amp; Endocrinology of Northern Ohio &mdash; making your diabetes management simple, with convenient offices in Elyria and Westlake near University Hospitals Elyria and Cleveland Clinic Fairview.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 34 }}>
            <Button variant="teal" size="lg" href="#appointment" onClick={(e) => { e.preventDefault(); window.OENav && window.OENav('appointment'); }} iconLeft={<i className="fa-solid fa-calendar-check" />}>Request Appointment</Button>
            <Button variant="outline-white" size="lg" href="tel:+14403220872" iconLeft={<i className="fa-solid fa-phone" />}>{window.OE_PHONE}</Button>
          </div>
          <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
            {trust.map(([ic, t]) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem', fontWeight: 500 }}>
                <i className={"fa-solid " + ic} style={{ color: 'var(--oe-teal)', fontSize: '1rem' }} /> {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: 380, marginInline: 'auto', aspectRatio: '4 / 4.6', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--oe-shadow-xl)', background: 'linear-gradient(135deg,#e2eaf3,#cdd9e8)' }}>
            <img src={OE_DRK} alt="Dr. Vikram Kumar, MD, FACE — Founder" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <div style={{ position: 'absolute', top: -20, right: 'calc(50% - 210px)', background: 'var(--oe-navy)', color: '#fff', borderRadius: 18, boxShadow: 'var(--oe-shadow-lg)', padding: '16px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div style={{ fontFamily: 'var(--oe-font-display)', fontWeight: 800, fontSize: '1.9rem', color: 'var(--oe-teal)', lineHeight: 1 }}>15+</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Years in<br />practice</div>
          </div>
          <div style={{ position: 'absolute', bottom: -20, left: 'calc(50% - 200px)', background: '#fff', borderRadius: 16, boxShadow: 'var(--oe-shadow-lg)', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--oe-gradient-icon)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><i className="fa-solid fa-user-doctor" /></span>
            <span>
              <span style={{ display: 'block', fontWeight: 700, color: 'var(--oe-navy)', fontSize: '0.9rem', fontFamily: 'var(--oe-font-display)' }}>Dr. Vikram Kumar, MD</span>
              <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--oe-text-muted)' }}>Founder · FACE, MBBS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Providers() {
  const { SectionHeading, Card, Badge } = OEHomeNS;
  const docs = [
    {
      img: OE_DRK, name: 'Dr. Vikram Kumar, MD, FACE, MBBS', role: 'Founder',
      bio: 'Practicing since 1993, Dr. Kumar founded the practice in 2009. He serves as Division Chief of Endocrinology at Fairview Hospital (Cleveland Clinic) and Chief of Medicine at University Hospital Elyria, and is teaching faculty in the residency program at St John\u2019s Hospital.',
    },
    {
      img: OE_NAM, name: 'Namrata \u201cNam\u201d Kumar, MS, PA-C, MBBS', role: 'Chief Operating Officer',
      bio: 'With 20+ years of practice, Nam specializes in diabetes, thyroid, and endocrine care. She began her career in New Delhi and holds teaching faculty roles in the PA programs at Case Western School of Medicine and Baldwin Wallace.',
    },
  ];
  return (
    <Section id="practice" bg="var(--oe-surface-offwhite)">
      <div style={{ marginBottom: 48 }}>
        <SectionHeading align="center" eyebrow="Our Practice" title="Meet your care team" subtitle="World Class Care, From our Family to Yours." />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="oe-grid-2">
        {docs.map((d) => (
          <Card key={d.name} hover={false}>
            <div style={{ display: 'flex', gap: 20, padding: 'var(--oe-sp-6)', alignItems: 'flex-start' }} className="oe-provider">
              <img src={d.img} alt={d.name} style={{ width: 104, height: 130, borderRadius: 14, objectFit: 'cover', flexShrink: 0, boxShadow: 'var(--oe-shadow-sm)' }} />
              <div>
                <Badge color="teal">{d.role}</Badge>
                <h3 style={{ fontSize: '1.25rem', margin: '10px 0 8px' }}>{d.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--oe-text-muted)', lineHeight: 1.65 }}>{d.bio}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Services({ onNav }) {
  const { SectionHeading, Card, CardBody, CardIcon, CardTitle, CardText, CardLink, Badge } = OEHomeNS;
  const svc = window.OE_SERVICES || [];
  return (
    <Section id="services">
      <div style={{ marginBottom: 48 }}>
        <SectionHeading align="center" eyebrow="Our Services" title="Making diabetes management simple" subtitle="Comprehensive, in-house diabetes and endocrine care under one roof." />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="oe-grid-3">
        {svc.map((s) => (
          <Card key={s.slug}>
            <CardBody>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardIcon>{window.OEsvcIcon(s, '1.5rem')}</CardIcon>
                {s.badge && <Badge color="gold">{s.badge}</Badge>}
              </div>
              <CardTitle>{s.title}</CardTitle>
              <CardText>{s.blurb}</CardText>
              <span onClick={() => { onNav('service:' + s.slug); window.scrollTo({ top: 0 }); }} style={{ cursor: 'pointer', marginTop: 'auto' }}>
                <CardLink href="#">Learn more</CardLink>
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const { StatsStrip, Stat } = OEHomeNS;
  return (
    <Section pad="var(--oe-section-pad-sm)">
      <StatsStrip variant="navy">
        <Stat number="2009" numberColor="#fff" label="Founded in Northern Ohio" />
        <Stat number="30+" numberColor="#fff" label="Years Dr. Kumar practicing" />
        <Stat number="15+" numberColor="#fff" label="Years serving our community" />
        <Stat number="100K+" numberColor="#fff" label="Satisfied patients" />
      </StatsStrip>
    </Section>
  );
}

function NewPatients() {
  const { SectionHeading, Button, Alert } = OEHomeNS;
  return (
    <Section id="newpatients" bg="var(--oe-surface-offwhite)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="oe-grid-2">
        <div>
          <SectionHeading eyebrow="New Patients" title="Your first visit, made easy" />
          <p style={{ color: 'var(--oe-text-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 24 }}>
            We make sure all our new patients feel welcome, safe, and taken care of. During your first visit, a doctor will review your medical history and perform a full examination, then explain any issues and help you choose treatment options. We typically provide any important laboratory slips at the end of the visit so you can complete tests when it&rsquo;s most convenient.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" href={window.OE_PORTAL} target="_blank" rel="noopener" iconLeft={<i className="fa-solid fa-user-plus" />}>Register on the Portal</Button>
            <Button variant="outline" href="tel:+14403220872" iconLeft={<i className="fa-solid fa-phone" />}>Call {window.OE_PHONE}</Button>
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: 14 }}>
            Registering takes about 10 minutes — <a href="portal-help/">see what you'll need before you start</a>. Prefer we handle it? <a href="#appointment" onClick={(e) => { e.preventDefault(); window.OENav && window.OENav('appointment'); }}>Send an appointment request</a> and we'll walk you through everything by phone.
          </p>
        </div>
        <Alert variant="warning" title="Cancellation policy">
          To avoid a $50 fee, please notify us at least 24 hours before your appointment to cancel or reschedule.
        </Alert>
      </div>
    </Section>
  );
}

function Voices() {
  const { SectionHeading, Testimonial } = OEHomeNS;
  const t = [
    [5, 'My experience with the office was a great one. There was no wait for my appointment and the physician assistant was very thorough and friendly. Dr. Kumar was very nice also. They are awesome and I love that I can do televisits anytime!', 'Denise R.', 'Elementary school teacher · Elyria'],
    [5, 'Dr. Kumar and his PA, Nam, are an awesome team! Together the two of them got my blood sugars on track!', 'Marcus T.', 'Line worker · Lorain'],
    [5, 'They saved my life as far as I\u2019m concerned. By adjusting my medication and explaining everything, I feel better than I have in years about my diabetes.', 'Robert K.', 'Retired police officer · Avon'],
    [5, 'My first visit with Dr. Kumar and Nam was excellent. They were both very attentive and Nam answered all my questions and gave me hope that my health issues can be managed. You have to give them a shot — they really care.', 'Anita P.', 'Registered nurse · Westlake'],
  ];
  return (
    <Section id="testimonials">
      <div style={{ marginBottom: 48 }}>
        <SectionHeading align="center" eyebrow="Patient Voices" title="What our patients say" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }} className="oe-grid-2">
        {t.map((x, i) => <Testimonial key={i} rating={x[0]} quote={x[1]} author={x[2]} detail={x[3]} />)}
      </div>
    </Section>
  );
}

function Locations() {
  const { SectionHeading, Card, Badge } = OEHomeNS;
  const offices = [
    { name: 'Elyria', tag: 'Primary office', addr: ['673 E River St', 'Elyria, OH 44035'], days: 'Mon, Tue, Wed PM, Fri', map: 'https://www.google.com/maps?q=673+E+River+St,+Elyria,+OH+44035&output=embed' },
    { name: 'Westlake', tag: 'Satellite office', addr: ['25200 Center Ridge Rd, Suite 1100', 'Westlake, OH 44145'], days: '2nd Wednesday of each month, AM only', map: 'https://www.google.com/maps?q=25200+Center+Ridge+Rd,+Westlake,+OH+44145&output=embed' },
  ];
  return (
    <Section id="contact" bg="var(--oe-surface-offwhite)">
      <div style={{ marginBottom: 40 }}>
        <SectionHeading align="center" eyebrow="Locations" title="Two offices near you" subtitle="Convenient to University Hospitals Elyria and Cleveland Clinic Fairview — or see us from home by televisit." />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--oe-gradient-icon-soft)', border: '1px solid rgba(0,180,166,0.25)', borderRadius: 'var(--oe-radius-pill)', padding: '10px 20px' }}>
          <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--oe-gradient-icon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fa-solid fa-video" /></span>
          <span style={{ fontSize: '0.95rem', color: 'var(--oe-navy)' }}><strong>Televisits welcome</strong> — many follow-ups can be done by secure video from anywhere in Ohio.</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="oe-grid-2">
        {offices.map((o) => (
          <Card key={o.name} hover={false} style={{ overflow: 'hidden' }}>
            <div style={{ height: 200, background: 'var(--oe-slate-100)' }}>
              <iframe
                title={o.name + ' office map'}
                src={o.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="oe-map"
                style={{ width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(1)', transition: 'filter var(--oe-transition-slow)' }}
              />
            </div>
            <div style={{ padding: 'var(--oe-sp-8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--oe-gradient-icon-soft)', color: 'var(--oe-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}><i className="fa-solid fa-location-dot" /></span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{o.name}</h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--oe-teal)', fontWeight: 600 }}>{o.tag}</div>
                </div>
              </div>
              <div style={{ color: 'var(--oe-text-muted)', lineHeight: 1.7, marginBottom: 12 }}>
                {o.addr.map((l) => <div key={l}>{l}</div>)}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--oe-navy)', fontWeight: 600 }}>
                <i className="fa-regular fa-clock" style={{ color: 'var(--oe-teal)' }} /> {o.days}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const OE_FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const OE_FORM_KEY = 'fbfb1e2a-5f11-4318-ac1a-9bfff92c4e01'; // Web3Forms public access key → delivers to the clinic inbox

function AppointmentRequest() {
  const { SectionHeading, Button, Input, Select, Textarea, HipaaNotice, Alert } = OEHomeNS;
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', office: '', patientType: '', service: '', date: '', time: '', message: '', _honey: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (form._honey) return; // bot honeypot
    setStatus('sending');
    try {
      const res = await fetch(OE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: OE_FORM_KEY,
          subject: 'appointment-lead: ' + form.name + ' — ' + (form.patientType || 'type not selected') + ' · ' + (form.date || 'no date given'),
          from_name: 'Ohio Endocrinology Website',
          botcheck: form._honey,
          'Name': form.name,
          'Email Address': form.email || '(not provided)',
          'Phone': form.phone,
          'Are you a new patient?': form.patientType === 'New patient' ? 'Yes' : form.patientType === 'Returning patient' ? 'No' : '(not selected)',
          'Service': form.service || 'Other',
          'Preferred office': form.office || 'No preference',
          'Date': form.date || '(none given)',
          'Time': form.time || 'No preference',
          'Comments or Questions': form.message || '(none)',
          email: form.email || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('submit failed: ' + res.status);
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <Section id="appointment">
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <SectionHeading
            align="center"
            eyebrow="Request an Appointment"
            title="Tell us a little about you"
            subtitle="Send your details and our team will call you within one business day to find a time that works."
          />
        </div>
        {status === 'sent' ? (
          <Alert variant="success" title="Request received">
            Thank you — we&rsquo;ll call you within one business day to confirm your appointment. If you need us sooner, call <a href="tel:+14403220872">{window.OE_PHONE}</a>.
          </Alert>
        ) : (
          <form onSubmit={submit} noValidate={false}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="oe-form-row">
              <Input label="Full name" required name="name" autoComplete="name" value={form.name} onChange={set('name')} />
              <Input label="Phone" required type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={set('phone')} hint="We confirm appointments by phone." />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="oe-form-row">
              <Input label="Email" type="email" name="email" autoComplete="email" value={form.email} onChange={set('email')} hint="Optional." />
              <Select
                label="Preferred office"
                placeholder="No preference"
                options={['Elyria (primary)', 'Westlake (satellite)', 'Televisit']}
                value={form.office}
                onChange={set('office')}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="oe-form-row">
              <Select
                label="Are you a new or returning patient?"
                placeholder="Please choose"
                options={['New patient', 'Returning patient']}
                value={form.patientType}
                onChange={set('patientType')}
              />
              <Select
                label="What do you need help with?"
                placeholder="Choose a service"
                options={[...(window.OE_SERVICES || []).map((s) => s.title), 'Other']}
                value={form.service}
                onChange={set('service')}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="oe-form-row">
              <Input
                label="Preferred date"
                type="date"
                value={form.date}
                onChange={set('date')}
                hint="Optional — we'll confirm the exact time by phone."
              />
              <Select
                label="Preferred time"
                placeholder="No preference"
                options={['Morning', 'Afternoon']}
                value={form.time}
                onChange={set('time')}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Textarea
                label="Anything else we should know?"
                rows={4}
                value={form.message}
                onChange={set('message')}
                hint="Please don't include specific medical details — we'll cover those at your visit."
              />
            </div>
            {/* honeypot — hidden from people, filled only by bots */}
            <input type="text" name="_honey" value={form._honey} onChange={set('_honey')} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: -9999, height: 0, width: 0, opacity: 0 }} aria-hidden="true" />
            <div style={{ marginBottom: 24 }}>
              <HipaaNotice />
            </div>
            {status === 'error' && (
              <div style={{ marginBottom: 20 }}>
                <Alert variant="error" title="Something went wrong">
                  Your request couldn&rsquo;t be sent. Please try again, or call us at <a href="tel:+14403220872">{window.OE_PHONE}</a> — we&rsquo;re happy to help.
                </Alert>
              </div>
            )}
            <Button variant="primary" size="lg" type="submit" fullWidth disabled={status === 'sending'} iconLeft={<i className="fa-solid fa-calendar-check" />}>
              {status === 'sending' ? 'Sending…' : 'Request Appointment'}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}

function CTA() {
  const { Button } = OEHomeNS;
  return (
    <section style={{ background: 'var(--oe-gradient-teal)', color: '#fff', padding: 'var(--oe-section-pad) 0' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 var(--oe-container-pad)', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to take control of your health?</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: 28 }}>Register online through our secure patient portal, or call — we&rsquo;re here to help.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="outline-white" size="lg" href="#appointment" onClick={(e) => { e.preventDefault(); window.OENav && window.OENav('appointment'); }}>Request Appointment</Button>
          <Button variant="gold" size="lg" href="tel:+14403220872" iconLeft={<i className="fa-solid fa-phone" />}>Call {window.OE_PHONE}</Button>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNav }) {
  return (
    <div>
      <Hero />
      <Providers />
      <Services onNav={onNav} />
      <Stats />
      <NewPatients />
      <Voices />
      <Locations />
      <AppointmentRequest />
      <CTA />
    </div>
  );
}

window.OEHomePage = HomePage;
