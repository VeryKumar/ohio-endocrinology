// Ohio Endocrinology — authority page content.
// Facts limited to verified practice details (see content/site-facts.md).
// Voice: warm, plain-language, "you"/"we", no diagnosis-speak, no invented stats.

export const PRACTICE = {
  name: 'Ohio Endocrinology',
  legal: 'Diabetes, Thyroid & Endocrinology of Northern Ohio',
  phone: '(440) 322-0872',
  phoneHref: 'tel:+14403220872',
  text: '(440) 656-7755',
  fax: '(440) 322-4991',
  portal: 'https://patientportal.glaceemr.com/glaceportal_login/UserRegistration?practiceId=eclinic&requestFor=UserRegistration',
  domain: 'http://www.ohioendocrinology.com',
  elyria: '673 E River St, Elyria, OH 44035',
  westlake: '25200 Center Ridge Rd, Suite 1100, Westlake, OH 44145',
};

const seeEndo = (what) =>
  `Primary care doctors handle a lot — but ${what} often benefits from a specialist who works with it every day. That's what we do.`;

export const CONDITIONS = [
  {
    slug: 'type-2-diabetes',
    keyword: 'type 2 diabetes doctor',
    title: 'Type 2 Diabetes Care in Elyria & Westlake, OH',
    h1: 'Type 2 diabetes care, made simple',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Board-certified type 2 diabetes care in Elyria and Westlake, Ohio. Personalized medication plans, in-house A1C testing, CGM, and plain-language guidance.',
    intro: [
      `Living with type 2 diabetes means a lot of small decisions every day — what to eat, when to test, whether that number on the meter is something to worry about. Our job is to make those decisions simpler. We build a plan around your life, explain everything in plain language, and adjust as you go.`,
      `Dr. Vikram Kumar and our team have cared for people with diabetes in Northern Ohio since 2009, with offices in Elyria and Westlake and televisits available across Ohio.`,
    ],
    sections: [
      {
        h2: 'How we manage type 2 diabetes',
        body: `<p>Every plan starts with understanding where you are: your A1C (which we test in-house, so you get results at your visit), your medications, your habits, and what's realistic for you. From there we fine-tune — that might mean adjusting oral medications, discussing newer options like GLP-1 medications, adding continuous glucose monitoring so you can see your patterns, or simply making sense of the plan you already have.</p><p>Follow-ups don't always need a drive: many of our patients handle routine check-ins by secure televisit from home.</p>`,
      },
      {
        h2: 'When to see an endocrinologist for type 2 diabetes',
        body: `<p>${seeEndo('diabetes')} It may be time to see a specialist if your A1C stays high despite treatment, your medications keep changing without clear results, you're experiencing lows, or you simply want a clear, coherent plan from a team that will explain the "why" behind it.</p>`,
      },
    ],
    faqs: [
      { q: 'Do I need a referral to be seen for type 2 diabetes?', a: `Many insurance plans let you book directly with a specialist; some require a referral from your primary care doctor. Call us at ${PRACTICE.phone} and we'll help you check what your plan needs.` },
      { q: 'Can you take over my diabetes medications from my family doctor?', a: 'Yes. We coordinate with your primary care physician — we manage the diabetes plan in detail and keep them informed, so your care stays joined-up.' },
      { q: 'Do you offer A1C testing at the office?', a: 'Yes — we run A1C in-house, so results are ready during your visit instead of days later.' },
      { q: 'Are GLP-1 medications an option for type 2 diabetes?', a: 'For many patients, yes. Whether they fit your situation depends on your health history and insurance coverage — it’s a conversation we’ll have at your visit.' },
    ],
    related: ['treatments/glp-1-weight-management', 'treatments/continuous-glucose-monitoring', 'treatments/in-house-a1c-testing', 'conditions/prediabetes', 'conditions/type-1-diabetes'],
  },
  {
    slug: 'type-1-diabetes',
    keyword: 'type 1 diabetes specialist',
    title: 'Type 1 Diabetes Specialist in Elyria & Westlake, OH',
    h1: 'Type 1 diabetes care that keeps up with you',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Type 1 diabetes care in Northern Ohio: insulin pump therapy, CGM setup and interpretation, in-house A1C, and specialists who explain everything clearly.',
    intro: [
      `Type 1 diabetes is a full-time job you never applied for. The right specialist team — and the right technology — can hand a big part of that job back to the tools, so you can spend less time thinking about insulin and more time living.`,
      `We care for adults with type 1 diabetes across Northern Ohio, with deep experience in insulin pumps, continuous glucose monitors, and the day-to-day realities of managing blood sugar.`,
    ],
    sections: [
      {
        h2: 'Technology-forward type 1 care',
        body: `<p>Insulin pumps and continuous glucose monitors have changed what daily life with type 1 can look like. We help you choose devices that fit your life, get them set up and covered by insurance where possible, and — just as important — make sense of the data they produce. At each visit we review your patterns together and adjust your settings with you, not just for you.</p>`,
      },
      {
        h2: 'A partner for the long run',
        body: `<p>Type 1 diabetes is a marathon, and your needs change over the years. Whether you're switching from injections to a pump, tightening control before a life event, or troubleshooting stubborn overnight highs, we've seen it before and we'll work through it with you. Routine follow-ups can often be done by televisit.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you manage insulin pumps?', a: 'Yes — insulin pump therapy is one of our core services, from choosing a pump to setup, training, and ongoing adjustments.' },
      { q: 'Can you help me get a continuous glucose monitor?', a: 'Yes. We prescribe and configure CGMs, work with your insurance, and teach you how to actually use the data day to day.' },
      { q: 'I was just diagnosed as an adult. Is that something you see?', a: 'Yes — adult-onset type 1 (including LADA) is something we diagnose and manage. If your current diagnosis doesn’t quite fit how your diabetes behaves, that’s worth a specialist look.' },
      { q: 'How often will I need appointments?', a: 'Most people with type 1 see us every three to six months once things are stable, with many follow-ups available by televisit.' },
    ],
    related: ['treatments/insulin-pump-therapy', 'treatments/continuous-glucose-monitoring', 'conditions/type-2-diabetes', 'treatments/telehealth-endocrinology'],
  },
  {
    slug: 'prediabetes',
    keyword: 'prediabetes treatment',
    title: 'Prediabetes Treatment in Elyria & Westlake, OH',
    h1: 'Prediabetes: the best time to act is now',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Told you have prediabetes? Ohio Endocrinology helps Northern Ohio patients turn the diagnosis around with realistic plans, monitoring, and expert guidance.',
    intro: [
      `Hearing "your blood sugar is borderline" can be unsettling — but prediabetes is also the moment when you have the most power to change the story. With the right plan, many people bring their numbers back to a healthy range and never develop type 2 diabetes.`,
      `We help you understand exactly where you stand, what actually moves the needle, and how to track progress without obsessing over it.`,
    ],
    sections: [
      {
        h2: 'What we do for prediabetes',
        body: `<p>First, we confirm the picture: an in-house A1C and a review of your labs, weight history, family history, and medications (some of which can nudge blood sugar upward). Then we build a plan that fits your real life — food changes you can sustain, activity that works for your schedule, and, where appropriate, medication to reduce your risk. We follow up regularly so you can see the trend, not just a single number.</p>`,
      },
      {
        h2: 'Why see a specialist for prediabetes?',
        body: `<p>${seeEndo('borderline blood sugar')} A focused visit can answer the questions a rushed appointment can't: How close am I to diabetes, really? Which changes matter most for me? Is medication worth considering? You leave with a clear plan instead of a vague warning.</p>`,
      },
    ],
    faqs: [
      { q: 'What A1C counts as prediabetes?', a: 'An A1C from 5.7% to 6.4% is generally considered prediabetes. We confirm with in-house testing and look at the whole picture, not just one number.' },
      { q: 'Can prediabetes be reversed?', a: 'Many people bring their blood sugar back into the normal range with sustained changes to food, activity, and weight — especially when they start early. That’s exactly what we help with.' },
      { q: 'Will I have to take medication?', a: 'Not necessarily. Lifestyle changes are the foundation. For some patients, medication is a sensible addition — we’ll discuss honestly whether it makes sense for you.' },
      { q: 'How often should I be rechecked?', a: 'Typically every three to six months while you’re actively working on it, so you can see progress and adjust. In-house A1C makes those checks quick.' },
    ],
    related: ['conditions/type-2-diabetes', 'treatments/glp-1-weight-management', 'treatments/in-house-a1c-testing'],
  },
  {
    slug: 'hypothyroidism',
    keyword: 'hypothyroidism doctor',
    title: 'Hypothyroidism Treatment in Elyria & Westlake, OH',
    h1: 'Hypothyroidism care that listens first',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Underactive thyroid care in Northern Ohio: careful testing, right-sized medication, and specialists who take your symptoms seriously.',
    intro: [
      `Tiredness that sleep doesn't fix. Feeling cold when no one else is. Weight that creeps up for no reason. An underactive thyroid can show up as a dozen vague symptoms — and because they're vague, too many people are told everything is "normal" when it isn't quite.`,
      `Thyroid care is one of the core things we do. We test carefully, treat precisely, and keep adjusting until you actually feel like yourself.`,
    ],
    sections: [
      {
        h2: 'Getting the diagnosis — and the dose — right',
        body: `<p>Diagnosing hypothyroidism is straightforward; treating it well takes more attention. The right medication dose is personal, and it changes with weight, age, pregnancy, and other medications. We check the right labs, interpret them alongside your symptoms rather than in isolation, and fine-tune your dose over time. If your thyroid levels are "in range" but you still don't feel right, that's a conversation we take seriously.</p>`,
      },
      {
        h2: 'Hashimoto’s and beyond',
        body: `<p>The most common cause of an underactive thyroid is Hashimoto's thyroiditis, an autoimmune condition we diagnose and manage routinely. Whatever the cause, most hypothyroidism is very treatable — the goal isn't just normal labs, it's feeling well.</p>`,
      },
    ],
    faqs: [
      { q: 'What are common symptoms of hypothyroidism?', a: 'Fatigue, feeling cold, dry skin, constipation, weight gain, low mood, and brain fog are common. None are unique to thyroid disease, which is why proper testing matters.' },
      { q: 'My TSH is normal but I still feel awful. Is it worth a visit?', a: 'Yes. A specialist visit can look deeper — the full thyroid picture, other hormone systems, and non-thyroid causes — instead of stopping at one number.' },
      { q: 'Will I be on thyroid medication forever?', a: 'Usually hypothyroidism is lifelong, but the medication is safe, inexpensive, and effective when dosed correctly. Some temporary forms of thyroiditis do resolve on their own.' },
      { q: 'Can you manage my thyroid during pregnancy?', a: 'Yes — thyroid needs change significantly in pregnancy and proper management matters for both you and the baby. We monitor closely and adjust promptly.' },
    ],
    related: ['conditions/hashimotos-thyroiditis', 'conditions/hyperthyroidism', 'conditions/thyroid-nodules'],
  },
  {
    slug: 'hyperthyroidism',
    keyword: 'hyperthyroidism treatment',
    title: 'Hyperthyroidism Treatment in Elyria & Westlake, OH',
    h1: 'Hyperthyroidism: calming an overactive thyroid',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Overactive thyroid care in Northern Ohio — expert diagnosis of Graves’ disease and other causes, with treatment options explained in plain language.',
    intro: [
      `A racing heart, unexplained weight loss, feeling shaky, anxious, or overheated — an overactive thyroid pushes your whole body into overdrive, and it deserves prompt, expert attention.`,
      `We diagnose the cause of hyperthyroidism, explain your options clearly, and manage treatment from first visit through long-term follow-up.`,
    ],
    sections: [
      {
        h2: 'Finding the cause before choosing the treatment',
        body: `<p>Hyperthyroidism has several distinct causes — Graves' disease, overactive nodules, thyroid inflammation — and the right treatment depends on which one you have. We use targeted lab work and imaging when needed to pin down the cause first.</p><p>Treatment may involve medication to settle thyroid hormone levels, radioactive iodine, or surgery in select cases. We'll walk you through the trade-offs of each so the decision makes sense to you.</p>`,
      },
      {
        h2: 'Why timeliness matters',
        body: `<p>Untreated hyperthyroidism strains the heart and bones and can seriously affect quality of life. If you've been told your thyroid is overactive — or your symptoms fit — don't wait months for answers. We keep the schedule accessible for new patients precisely because timing matters.</p>`,
      },
    ],
    faqs: [
      { q: 'What causes hyperthyroidism?', a: 'The most common cause is Graves’ disease, an autoimmune condition. Overactive thyroid nodules and temporary thyroid inflammation (thyroiditis) are other frequent causes.' },
      { q: 'Is hyperthyroidism dangerous?', a: 'Left untreated it can strain your heart, thin your bones, and in rare cases become an emergency. With proper treatment, it’s very manageable.' },
      { q: 'Will treatment make me hypothyroid instead?', a: 'Some treatments (like radioactive iodine) often lead to an underactive thyroid that’s then treated with daily medication — a trade many patients find worthwhile. We’ll discuss what to expect with each option.' },
      { q: 'Do you monitor Graves’ eye symptoms?', a: 'We screen for thyroid eye disease and coordinate with ophthalmology when it needs dedicated care.' },
    ],
    related: ['conditions/graves-disease', 'conditions/thyroid-nodules', 'conditions/hypothyroidism'],
  },
  {
    slug: 'thyroid-nodules',
    keyword: 'thyroid nodule specialist',
    title: 'Thyroid Nodule Evaluation in Elyria & Westlake, OH',
    h1: 'Found a thyroid nodule? Let’s find out what it means',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Thyroid nodule evaluation in Northern Ohio. Most nodules are benign — we’ll tell you clearly where yours stands and what, if anything, to do next.',
    intro: [
      `Thyroid nodules are extremely common — many are discovered by accident on a scan done for something else — and the large majority are benign. But "probably fine" isn't a plan. A proper evaluation tells you where you stand and what, if anything, needs to happen next.`,
      `We evaluate nodules methodically and explain the findings in plain language, so you leave with clarity instead of worry.`,
    ],
    sections: [
      {
        h2: 'How nodules are evaluated',
        body: `<p>Evaluation typically starts with thyroid function labs and a dedicated thyroid ultrasound, which lets us assess a nodule's size and features. Based on standardized criteria, some nodules simply need periodic monitoring; others warrant a fine-needle biopsy — a quick office-based procedure — to examine cells directly. We coordinate every step and go over the results with you personally.</p>`,
      },
      {
        h2: 'What happens after the evaluation',
        body: `<p>Most patients end up on a simple surveillance plan: a follow-up ultrasound at sensible intervals to confirm nothing is changing. If a nodule is overactive, causing symptoms, or biopsy results raise concern, we'll lay out next steps — including coordination with experienced surgeons when that's appropriate — and stay involved throughout.</p>`,
      },
    ],
    faqs: [
      { q: 'Are thyroid nodules usually cancer?', a: 'No — the large majority of thyroid nodules are benign. Evaluation exists to reliably identify the small fraction that need more attention.' },
      { q: 'A nodule showed up on a CT scan for something else. Do I need to act?', a: 'Incidental nodules are common and usually benign, but they should be evaluated properly with thyroid labs and a dedicated ultrasound. It’s a straightforward process.' },
      { q: 'Does a biopsy hurt?', a: 'A fine-needle biopsy uses a very thin needle and takes a few minutes. Most people describe it as brief pressure — easier than they feared.' },
      { q: 'How often are follow-up ultrasounds needed?', a: 'It depends on the nodule’s features — commonly every 6 to 24 months. We’ll set a schedule that matches guidelines and your specific findings.' },
    ],
    related: ['conditions/hyperthyroidism', 'conditions/hypothyroidism', 'conditions/hashimotos-thyroiditis'],
  },
  {
    slug: 'hashimotos-thyroiditis',
    keyword: "Hashimoto's disease doctor",
    title: "Hashimoto's Thyroiditis Care in Elyria & Westlake, OH",
    h1: 'Hashimoto’s thyroiditis, managed for the long term',
    eyebrow: 'Conditions We Treat',
    metaDesc: "Hashimoto's thyroiditis care in Northern Ohio — clear diagnosis, right-sized treatment, and honest answers about symptoms, antibodies, and what actually helps.",
    intro: [
      `Hashimoto's thyroiditis is the most common cause of an underactive thyroid — an autoimmune condition where the immune system gradually slows the thyroid down. It often runs in families, and it can simmer for years before symptoms bring it to light.`,
      `We diagnose Hashimoto's properly, treat it when treatment helps, and give you straight answers about the parts that are overhyped online.`,
    ],
    sections: [
      {
        h2: 'Diagnosis and treatment, without the noise',
        body: `<p>Diagnosis combines thyroid function labs, antibody testing, and sometimes ultrasound. If your thyroid function is reduced, thyroid hormone replacement — carefully dosed and periodically adjusted — is the mainstay of treatment, and it works well.</p><p>The internet is full of Hashimoto's cures, protocols, and supplement regimens. Some lifestyle measures genuinely support how you feel; others are expensive noise. We'll help you tell the difference honestly.</p>`,
      },
      {
        h2: 'Living well with Hashimoto’s',
        body: `<p>Because Hashimoto's evolves slowly, the key is steady follow-up: rechecking levels at the right intervals, adjusting doses as your needs change, and paying attention when symptoms and labs don't line up. Televisits make those routine check-ins easy.</p>`,
      },
    ],
    faqs: [
      { q: 'I have Hashimoto’s antibodies but normal thyroid levels. Do I need treatment?', a: 'Often not yet — antibodies alone don’t always require medication. What you need is periodic monitoring so treatment starts at the right time if your levels drift.' },
      { q: 'Will a special diet cure my Hashimoto’s?', a: 'No diet has been proven to cure it. Balanced nutrition supports how you feel, and we’re happy to talk through specific approaches you’ve read about — honestly.' },
      { q: 'Is Hashimoto’s related to other autoimmune conditions?', a: 'It can cluster with conditions like celiac disease, type 1 diabetes, and vitamin B12 deficiency. We screen thoughtfully when your history suggests it.' },
      { q: 'Does Hashimoto’s affect pregnancy?', a: 'It can — thyroid hormone needs typically rise in pregnancy. With monitoring and timely dose adjustments, outcomes are excellent.' },
    ],
    related: ['conditions/hypothyroidism', 'conditions/thyroid-nodules', 'treatments/telehealth-endocrinology'],
  },
  {
    slug: 'graves-disease',
    keyword: "Graves' disease treatment",
    title: "Graves' Disease Treatment in Elyria & Westlake, OH",
    h1: 'Graves’ disease: expert care for an overactive immune-thyroid loop',
    eyebrow: 'Conditions We Treat',
    metaDesc: "Graves' disease care in Northern Ohio — diagnosis, medication, radioactive iodine, and surgical coordination, with every option explained clearly.",
    intro: [
      `Graves' disease is an autoimmune condition that pushes the thyroid into overdrive — and with it, your heart rate, metabolism, and nerves. It's the most common cause of hyperthyroidism, and it's very treatable with the right plan.`,
      `We manage Graves' disease from diagnosis through remission or definitive treatment, and we coordinate eye care when Graves' affects the eyes.`,
    ],
    sections: [
      {
        h2: 'Three paths, one decision made together',
        body: `<p>Graves' disease has three established treatments: antithyroid medication (often the first step, and for some patients the only one needed), radioactive iodine, and thyroid surgery. Each has real pros and cons involving remission odds, timelines, and future thyroid function. Our approach is to explain all three in plain terms and decide together — your age, plans (including pregnancy), eye involvement, and preferences all matter.</p>`,
      },
      {
        h2: 'Watching the whole picture',
        body: `<p>Beyond hormone levels, we monitor the things Graves' can touch: heart rhythm, bone health, and the eyes. If you develop thyroid eye disease symptoms — irritation, bulging, double vision — we coordinate promptly with ophthalmology colleagues while continuing to manage the underlying condition.</p>`,
      },
    ],
    faqs: [
      { q: 'Can Graves’ disease go into remission?', a: 'Yes — a meaningful share of patients treated with antithyroid medication achieve remission, typically after 12 to 18 months of treatment. We’ll discuss your odds candidly.' },
      { q: 'Which treatment is "best"?', a: 'There’s no universal best — medication, radioactive iodine, and surgery each fit different situations. The right answer depends on your specifics, and we’ll help you weigh them.' },
      { q: 'I’m planning a pregnancy. Does that change treatment?', a: 'Yes, significantly — some options and medications are preferred around pregnancy. Tell us early and we’ll plan treatment around your timeline.' },
      { q: 'Will my eyes be affected?', a: 'Only a minority of patients develop significant thyroid eye disease. We screen for it at visits and involve eye specialists early when needed. Not smoking is one of the best things you can do to lower the risk.' },
    ],
    related: ['conditions/hyperthyroidism', 'conditions/thyroid-nodules', 'conditions/hypothyroidism'],
  },
  {
    slug: 'pcos',
    keyword: 'PCOS specialist',
    title: 'PCOS Care in Elyria & Westlake, OH',
    h1: 'PCOS care that treats the whole picture',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'PCOS care in Northern Ohio — irregular cycles, weight, insulin resistance, and hormones addressed together by an endocrine specialist.',
    intro: [
      `Polycystic ovary syndrome is more than irregular periods. It's a hormone and metabolism condition that can affect weight, skin, hair, fertility, mood, and long-term health — and it deserves care that connects those dots instead of treating each one separately.`,
      `As endocrine specialists, we look at PCOS from the hormone side: what's driving your symptoms, and which levers actually help.`,
    ],
    sections: [
      {
        h2: 'The insulin connection',
        body: `<p>For many women with PCOS, insulin resistance is the engine underneath the symptoms — driving weight gain, worsening cycles, and raising long-term diabetes risk. That's squarely an endocrinology problem, and treating it often improves everything downstream. Depending on your goals, care may include metabolic medications, cycle regulation, weight-management support (including GLP-1 medications where appropriate), and targeted treatment for skin and hair symptoms.</p>`,
      },
      {
        h2: 'Care built around your goals',
        body: `<p>PCOS care looks different depending on what matters most to you right now — regular cycles, weight, skin and hair, planning a pregnancy, or long-term metabolic health. We'll ask, listen, and build the plan around your answer, coordinating with your OB/GYN where fertility care is involved.</p>`,
      },
    ],
    faqs: [
      { q: 'How is PCOS diagnosed?', a: 'Diagnosis is based on a combination of symptoms, hormone labs, and sometimes ultrasound findings — after ruling out look-alike conditions like thyroid disorders. We’ll walk through it step by step.' },
      { q: 'Does PCOS raise my risk of diabetes?', a: 'Yes — insulin resistance in PCOS raises long-term type 2 diabetes risk, which is why periodic screening and early metabolic care matter. That prevention is a core part of how we treat PCOS.' },
      { q: 'Can PCOS be treated if I’m not trying to get pregnant?', a: 'Absolutely. Cycle regulation, weight and metabolic health, and skin and hair symptoms are all treatable regardless of fertility plans.' },
      { q: 'Do GLP-1 medications help with PCOS?', a: 'For some patients with PCOS and elevated weight, GLP-1 medications can meaningfully help weight and metabolic health, which often improves PCOS symptoms. We’ll discuss whether it fits your situation.' },
    ],
    related: ['treatments/glp-1-weight-management', 'conditions/prediabetes', 'conditions/hypothyroidism'],
  },
  {
    slug: 'osteoporosis',
    keyword: 'osteoporosis specialist',
    title: 'Osteoporosis Treatment in Elyria & Westlake, OH',
    h1: 'Osteoporosis: protecting your bones for the years ahead',
    eyebrow: 'Conditions We Treat',
    metaDesc: 'Osteoporosis care in Northern Ohio — bone density interpretation, fracture risk assessment, and modern treatment options from an endocrine specialist.',
    intro: [
      `Bone loss is silent until it isn't. Osteoporosis usually announces itself with a fracture — which is exactly why treating it early, before that first break, matters so much.`,
      `Bone health is hormone health, which makes osteoporosis a core endocrinology condition. We assess your real fracture risk and match treatment to it.`,
    ],
    sections: [
      {
        h2: 'Beyond the T-score',
        body: `<p>A bone density (DEXA) report is a starting point, not a verdict. We interpret your scan alongside your age, fracture history, medications (like long-term steroids), and secondary causes of bone loss — including thyroid and parathyroid conditions, low hormone levels, and vitamin D deficiency — that a quick read can miss. Sometimes treating a hidden cause changes the whole plan.</p>`,
      },
      {
        h2: 'Modern treatment, matched to your risk',
        body: `<p>Today's options range from lifestyle and vitamin D/calcium optimization to antiresorptive medications and newer bone-building agents for higher-risk patients. We'll explain what each does, how long treatment lasts, and what monitoring looks like — so you understand the plan you're on and why.</p>`,
      },
    ],
    faqs: [
      { q: 'Who should have a bone density test?', a: 'Generally women 65+, men 70+, and younger adults with risk factors — fractures from minor falls, long-term steroid use, early menopause, or conditions that affect bone. We can order one if you’re due.' },
      { q: 'I broke a bone in a minor fall. Is that a red flag?', a: 'Yes — a fracture from standing height or less is often the first sign of osteoporosis and deserves a proper evaluation, whatever your age.' },
      { q: 'Are osteoporosis medications safe?', a: 'For patients at meaningful fracture risk, benefits substantially outweigh the rare side effects you may have read about. We’ll go through the honest numbers with you.' },
      { q: 'Can osteoporosis be caused by another condition?', a: 'Yes — thyroid or parathyroid disease, low sex hormones, celiac disease, and certain medications can all drive bone loss. Checking for these is part of a proper workup.' },
    ],
    related: ['conditions/hyperthyroidism', 'conditions/hypothyroidism', 'treatments/telehealth-endocrinology'],
  },
];

export const TREATMENTS = [
  {
    slug: 'glp-1-weight-management',
    keyword: 'GLP-1 weight loss doctor',
    title: 'GLP-1 Weight Management in Elyria & Westlake, OH',
    h1: 'GLP-1 weight management, supervised by specialists',
    eyebrow: 'Treatments & Services',
    metaDesc: 'Medically supervised GLP-1 weight management (semaglutide, tirzepatide) in Northern Ohio, from endocrine specialists who manage metabolism every day.',
    intro: [
      `GLP-1 medications like semaglutide and tirzepatide have changed what's possible in medical weight management. But they work best — and safest — with a physician team that understands metabolism, watches for side effects, and manages the whole picture, not just the prescription.`,
      `As endocrinologists, metabolic health is our home turf. We offer GLP-1 therapy as part of a complete, medically supervised program.`,
    ],
    sections: [
      {
        h2: 'What supervised GLP-1 care looks like',
        body: `<p>We start with a real evaluation: your health history, labs, medications, and goals — and whether a GLP-1 is appropriate and likely to be covered by your insurance. If we proceed, doses are titrated gradually to balance results with tolerability, side effects are managed proactively, and we monitor the things that matter along the way, including muscle preservation, nutrition, and related conditions like diabetes or thyroid disease.</p>`,
      },
      {
        h2: 'Why an endocrinologist instead of a med spa',
        body: `<p>These are powerful metabolic medications, and weight is rarely the only thing going on. Seeing an endocrine specialist means the same team managing your GLP-1 can also manage your diabetes, thyroid, or PCOS — and can spot when something else is driving your weight in the first place. It also means honest conversations about expectations, plateaus, and what happens long-term.</p>`,
      },
    ],
    faqs: [
      { q: 'Which GLP-1 medications do you prescribe?', a: 'We work with the established GLP-1 class, including semaglutide and tirzepatide, choosing based on your health profile and insurance coverage.' },
      { q: 'Will my insurance cover GLP-1 medication for weight?', a: 'Coverage varies widely by plan and indication. We’ll help you navigate requirements like prior authorization, and we’re straightforward about costs when coverage is limited.' },
      { q: 'What side effects should I expect?', a: 'Nausea and digestive symptoms are the most common, especially during dose increases. Gradual titration and practical strategies keep most patients comfortable — and we’re a phone call away if not.' },
      { q: 'What happens when I reach my goal weight?', a: 'That’s a planning conversation, not a cliff. We’ll discuss maintenance dosing, tapering, and the habits that protect your results — honestly and without pressure.' },
    ],
    related: ['conditions/type-2-diabetes', 'conditions/prediabetes', 'conditions/pcos'],
  },
  {
    slug: 'insulin-pump-therapy',
    keyword: 'insulin pump doctor',
    title: 'Insulin Pump Therapy in Elyria & Westlake, OH',
    h1: 'Insulin pump therapy, from selection to mastery',
    eyebrow: 'Treatments & Services',
    metaDesc: 'Insulin pump care in Northern Ohio — pump selection, insurance navigation, setup, training, and ongoing fine-tuning from experienced specialists.',
    intro: [
      `An insulin pump can smooth out blood sugar, reduce injections to one site change every few days, and — paired with a CGM — automate a remarkable amount of diabetes management. The catch: results depend heavily on setup and follow-through.`,
      `We manage pump therapy end to end: choosing the right device, getting it approved, dialing in settings, and refining them at every visit.`,
    ],
    sections: [
      {
        h2: 'Choosing and starting a pump',
        body: `<p>Today's pumps differ in real ways — tubing versus tubeless, automation features, CGM pairings, and insurance coverage. We'll help you pick the one that fits your life, handle the paperwork, and train you properly at the start so the first weeks feel manageable rather than overwhelming.</p>`,
      },
      {
        h2: 'The fine-tuning that makes pumps work',
        body: `<p>A pump is only as good as its settings. Basal rates, carb ratios, correction factors, and automation targets all need periodic adjustment as your body and routine change. At follow-ups we review your data together and tune settings with you — that ongoing partnership is where pump therapy pays off.</p>`,
      },
    ],
    faqs: [
      { q: 'Am I a candidate for an insulin pump?', a: 'Most people who take multiple daily insulin injections can benefit — type 1 or type 2. If you’re motivated to use the technology, we can almost always find a workable option.' },
      { q: 'Do pumps work with CGMs?', a: 'Yes — modern pump-CGM combinations can automatically adjust insulin in the background. It’s the closest thing yet to an artificial pancreas, and we set these systems up routinely.' },
      { q: 'Will insurance cover a pump?', a: 'Most plans cover pumps for people meeting criteria, though paperwork is involved. We handle the documentation and know the process well.' },
      { q: 'What if the pump isn’t for me?', a: 'Then we’ll say so, and build the best injection-based plan instead — possibly with a smart pen and CGM. The goal is the right tool for you, not a device for its own sake.' },
    ],
    related: ['conditions/type-1-diabetes', 'treatments/continuous-glucose-monitoring', 'conditions/type-2-diabetes'],
  },
  {
    slug: 'continuous-glucose-monitoring',
    keyword: 'continuous glucose monitor doctor',
    title: 'Continuous Glucose Monitoring (CGM) in Elyria & Westlake, OH',
    h1: 'See your blood sugar in real time with CGM',
    eyebrow: 'Treatments & Services',
    metaDesc: 'CGM prescriptions, setup, and data interpretation in Northern Ohio. Stop guessing — see your glucose patterns and act on them.',
    intro: [
      `A continuous glucose monitor replaces finger sticks with a small sensor that reads your glucose around the clock and sends it to your phone. For most people it's a revelation: you finally see what food, stress, sleep, and exercise actually do to your numbers.`,
      `We prescribe CGMs, get you started, and — the part that matters most — help you turn the data into decisions.`,
    ],
    sections: [
      {
        h2: 'Who benefits from a CGM',
        body: `<p>Anyone on insulin benefits from seeing where their glucose is heading, not just where it was at one moment. CGMs also help people with type 2 diabetes on other medications understand their patterns, catch overnight lows, and stay motivated by seeing progress. Coverage has expanded substantially in recent years — more patients qualify than a few years ago.</p>`,
      },
      {
        h2: 'From data to decisions',
        body: `<p>A CGM produces a lot of numbers; the value is in reading them well. At visits we review your reports together — time in range, patterns after meals, overnight trends — and translate them into a small number of concrete changes. Paired with an insulin pump, CGM data can even drive automatic insulin adjustments.</p>`,
      },
    ],
    faqs: [
      { q: 'Does a CGM hurt to wear?', a: 'Application is a quick press with a spring-loaded applicator — most people barely feel it — and sensors are comfortable enough to forget you’re wearing one.' },
      { q: 'Will insurance cover a CGM?', a: 'Coverage keeps expanding, especially for anyone using insulin. We know the criteria and handle the prescriptions and paperwork.' },
      { q: 'Can I see my readings on my phone?', a: 'Yes — current CGMs send readings to your smartphone, and you can share them with family and with our team for remote review.' },
      { q: 'Do I still need finger sticks?', a: 'Rarely — mostly just when a reading doesn’t match how you feel. Day to day, the sensor replaces routine finger sticks.' },
    ],
    related: ['treatments/insulin-pump-therapy', 'conditions/type-1-diabetes', 'conditions/type-2-diabetes'],
  },
  {
    slug: 'in-house-a1c-testing',
    keyword: 'A1C test same day results',
    title: 'In-House A1C Testing in Elyria & Westlake, OH',
    h1: 'A1C results during your visit — not days later',
    eyebrow: 'Treatments & Services',
    metaDesc: 'Same-visit A1C testing at Ohio Endocrinology in Elyria and Westlake. Discuss your results and adjust your plan in one appointment.',
    intro: [
      `Your A1C is the single most-watched number in diabetes care — a three-month average of your blood sugar. At many practices you get labs drawn, wait days, then play phone tag about the result. We do it differently.`,
      `We run A1C testing in-house, so the number is on the table while you're still in the room — and your plan can change the same day.`,
    ],
    sections: [
      {
        h2: 'Why same-visit results change the conversation',
        body: `<p>When your A1C is available during the appointment, the visit becomes a working session instead of a status check. Result better than expected? We celebrate and reinforce what's working. Higher than hoped? We adjust the plan right then — no follow-up calls, no waiting for a portal message, no decisions made without you in the room.</p>`,
      },
      {
        h2: 'Part of a complete diabetes visit',
        body: `<p>In-house A1C is one piece of how we run diabetes care: CGM data review, medication fine-tuning, and honest conversation happen in the same visit. It's a small logistical detail that adds up to meaningfully better care — and fewer loose ends for you to chase.</p>`,
      },
    ],
    faqs: [
      { q: 'What is an A1C, exactly?', a: 'A1C measures the percentage of hemoglobin with sugar attached, reflecting your average blood glucose over roughly the past three months. It’s the standard measure of long-term control.' },
      { q: 'Do I need to fast for an A1C test?', a: 'No — A1C doesn’t require fasting, and the in-house test is a quick finger stick.' },
      { q: 'How often should A1C be checked?', a: 'Typically every three months when treatment is changing, and every six months once you’re stable at goal.' },
      { q: 'Is the in-house test as accurate as the lab?', a: 'Point-of-care A1C analyzers are certified and closely aligned with laboratory methods — accurate for guiding treatment decisions at the visit.' },
    ],
    related: ['conditions/type-2-diabetes', 'conditions/prediabetes', 'treatments/continuous-glucose-monitoring'],
  },
  {
    slug: 'telehealth-endocrinology',
    keyword: 'telehealth endocrinologist Ohio',
    title: 'Telehealth Endocrinology Visits Across Ohio',
    h1: 'Specialist endocrine care, from your couch',
    eyebrow: 'Treatments & Services',
    metaDesc: 'Secure televisits with Ohio Endocrinology — diabetes and thyroid follow-ups by video from anywhere in Ohio, with in-person visits when needed.',
    intro: [
      `A lot of endocrine care is conversation: reviewing labs and CGM data, adjusting medications, planning next steps. That works remarkably well by video — which is why televisits are a first-class part of how we practice, not an afterthought.`,
      `If you're anywhere in Ohio, you can see our specialists by secure video for many visit types, with our Elyria and Westlake offices there when hands-on care is needed.`,
    ],
    sections: [
      {
        h2: 'What works well by televisit',
        body: `<p>Routine diabetes and thyroid follow-ups, medication adjustments, CGM and pump data reviews, lab result discussions, and many new-patient consultations all translate well to video. You'll get the same unhurried, plain-language conversation you'd get in the office — without the drive, the waiting room, or time off work.</p>`,
      },
      {
        h2: 'And what still needs an office visit',
        body: `<p>Some things deserve hands-on care: thyroid ultrasounds and biopsies, physical exams for new concerns, and in-house A1C testing. We'll be straightforward about which visits should be in person, and many patients settle into a comfortable rhythm of mostly-video care with periodic office visits.</p>`,
      },
    ],
    faqs: [
      { q: 'Are televisits covered by insurance?', a: 'Most plans cover telehealth visits, often with the same cost-sharing as office visits. We’ll verify your coverage when you schedule.' },
      { q: 'What do I need for a video visit?', a: 'A smartphone, tablet, or computer with a camera, and a reasonably quiet spot. We’ll send simple instructions before your appointment.' },
      { q: 'Can new patients start with a televisit?', a: 'Often yes, depending on the concern. Call us at (440) 322-0872 and we’ll recommend the right visit type for your situation.' },
      { q: 'How do labs work with telehealth?', a: 'We send lab orders to a location convenient to you, then review results together at your video visit.' },
    ],
    related: ['conditions/hypothyroidism', 'conditions/type-2-diabetes', 'treatments/continuous-glucose-monitoring'],
  },
];

// Location pages. `office` = nearest office key; `context` = one honest local sentence fragment.
export const LOCATIONS = [
  { slug: 'elyria', city: 'Elyria', office: 'elyria', context: 'Our primary office is right here in Elyria at 673 E River St, near University Hospitals Elyria Medical Center' },
  { slug: 'westlake', city: 'Westlake', office: 'westlake', context: 'Our Westlake office at 25200 Center Ridge Rd puts specialist care close to home on Cleveland’s west side, convenient to Cleveland Clinic Fairview' },
  { slug: 'lorain', city: 'Lorain', office: 'elyria', context: 'Our Elyria office is a short drive down from Lorain, without the trek into Cleveland' },
  { slug: 'avon', city: 'Avon', office: 'elyria', context: 'From Avon, both our Elyria and Westlake offices are close by — whichever direction suits your routine' },
  { slug: 'avon-lake', city: 'Avon Lake', office: 'westlake', context: 'From Avon Lake, our Westlake office is an easy trip along the lake, with Elyria as a second option' },
  { slug: 'north-ridgeville', city: 'North Ridgeville', office: 'elyria', context: 'North Ridgeville sits comfortably between our two offices — Elyria and Westlake are both nearby' },
  { slug: 'amherst', city: 'Amherst', office: 'elyria', context: 'From Amherst, our Elyria office is just up the road' },
  { slug: 'oberlin', city: 'Oberlin', office: 'elyria', context: 'From Oberlin, our Elyria office is a straightforward drive north' },
  { slug: 'north-olmsted', city: 'North Olmsted', office: 'westlake', context: 'From North Olmsted, our Westlake office is minutes away on Center Ridge Rd' },
  { slug: 'rocky-river', city: 'Rocky River', office: 'westlake', context: 'From Rocky River, our Westlake office offers specialist care without the downtown drive' },
];

// Patient guides — the "what separates good care from bad care" cluster.
// Tone guardrail: empower the reader and describe what good care looks like;
// never disparage other physicians or practices.
export const GUIDES = [
  {
    slug: 'signs-of-a-good-doctor',
    keyword: 'signs of a good doctor',
    title: 'What Makes a Good Doctor? Signs to Look For — and Red Flags',
    h1: 'What separates a good doctor from a bad one',
    eyebrow: 'Patient Guides',
    metaDesc: 'The signs of a doctor who truly listens — and the red flags of one who doesn’t. What patients deserve from endocrine care, and how to tell the difference.',
    intro: [
      `Most people can't evaluate a doctor's medical knowledge — that's what board certification is for. But you can absolutely evaluate the thing that matters just as much: how they treat you. Whether they ask. Whether they listen. Whether your problem moves forward on your timeline, or sits in a queue on theirs.`,
      `After decades of practice, we've come to believe the difference between good and bad care usually isn't knowledge — it's attention. Here's what to look for.`,
    ],
    sections: [
      {
        h2: 'A good doctor asks — and then actually listens',
        body: `<p>The best predictor of a good visit happens in the first two minutes: does the doctor ask what's been going on and let you finish your answer? A doctor who asks open questions, follows up on what you said (not just what the chart says), and checks "did I get that right?" is doing the real work of diagnosis. You should leave a visit feeling heard — not processed.</p><p>The red-flag version: your concerns get a nod and the conversation snaps back to a script. You mention fatigue or weight changes and hear "that's just age" or "your labs are normal" as a conversation-ender rather than the start of a better question.</p>`,
      },
      {
        h2: 'Answers on your timeline, not theirs',
        body: `<p>Good care respects that you're the one living with the problem. That looks like: appointments you can actually get, test results explained promptly instead of drifting for weeks, and a plan that changes at the visit when the numbers say it should. It's why we run A1C testing in-house — so decisions happen while you're in the room — and why we return appointment requests within one business day.</p><p>The red-flag version: every question needs another appointment, results arrive without explanation (or don't arrive), and months pass between "something's wrong" and anything actually changing.</p>`,
      },
      {
        h2: 'Plain language is a skill — and a sign of respect',
        body: `<p>A doctor who can't explain your condition without jargon either doesn't fully understand it or isn't trying. Good doctors translate: what's happening, why the plan is the plan, what would make us change it. You shouldn't need to go home and search your own diagnosis to understand your own visit.</p>`,
      },
    ],
    faqs: [
      { q: 'Is it normal to feel rushed at doctor visits?', a: 'It’s common — but it isn’t something you have to accept, especially for complex, long-term conditions like diabetes and thyroid disease where the details genuinely matter.' },
      { q: 'My labs are "normal" but I still feel bad. Should I push back?', a: 'Yes. "Normal" lab ranges are population averages, and a result can be technically in range while wrong for you. A good doctor treats persistent symptoms as information, not an inconvenience.' },
      { q: 'What credentials should I look for in an endocrinologist?', a: 'Board certification in endocrinology is the baseline. Hospital appointments and teaching roles are good signals of standing among peers. But pair credentials with how the doctor communicates — both matter.' },
      { q: 'How do I find out how a practice treats patients before booking?', a: 'Read recent patient reviews for specifics (do people mention being listened to?), and call the office with a question — how the staff handles that call tells you a lot.' },
    ],
    related: ['guides/doctor-not-listening', 'guides/questions-to-ask-your-endocrinologist', 'guides/how-to-choose-an-endocrinologist'],
  },
  {
    slug: 'doctor-not-listening',
    keyword: 'my doctor is not listening to me',
    title: 'When Your Doctor Isn’t Listening: What to Do Next',
    h1: 'When your doctor isn’t listening',
    eyebrow: 'Patient Guides',
    metaDesc: 'Feeling dismissed or sidelined by your doctor? Practical steps to be heard — and how to know when it’s time for a second opinion or a new specialist.',
    intro: [
      `Few things are more discouraging than describing symptoms you live with every day and watching them get waved away. If you've heard "it's probably just stress," "that's normal at your age," or "your labs look fine" — while you keep feeling worse — this page is for you.`,
      `Two things are true at once: you can take practical steps to be heard at your current doctor, and you're allowed to decide you deserve better attention. Hormone symptoms in particular — fatigue, weight changes, mood shifts, feeling cold or wired — are among the most commonly brushed aside, precisely because they're vague. They're also exactly what endocrinologists are trained to take seriously.`,
    ],
    sections: [
      {
        h2: 'How to be harder to dismiss',
        body: `<p>Bring a written timeline: when symptoms started, how they've changed, what makes them better or worse. Specifics resist dismissal — "I've gained 18 pounds since March without changing anything" lands differently than "I've been gaining weight." Bring someone with you if you can; a second set of ears changes room dynamics. And ask questions that require a real answer: "What else could explain this?" and "If it's not my thyroid, what should we test to rule things out?"</p><p>Ask for copies of your labs, too. You're entitled to them, and patterns across years sometimes tell a story a single visit misses.</p>`,
      },
      {
        h2: 'When it’s time to stop convincing and start switching',
        body: `<p>If you've done the above more than once and still feel like a task to be closed rather than a person to be helped, that's information. Persistent unexplained symptoms are a legitimate reason to see a specialist — you don't need your current doctor's blessing to seek one, and many insurance plans let you book an endocrinologist directly.</p><p>When you see us, expect the opposite of being sidelined: we'll ask, we'll listen to the whole answer, and we'll lay out what we're going to check and why — in plain language, with a timeline you can hold us to.</p>`,
      },
    ],
    faqs: [
      { q: 'Will a new doctor think I’m being dramatic if I switch over this?', a: 'No good doctor thinks that. Patients who arrive with a symptom history and unanswered questions are patients we can actually help — that’s the job.' },
      { q: 'What symptoms do endocrinologists take seriously that often get dismissed?', a: 'Persistent fatigue, unexplained weight changes, feeling cold or overheated, hair thinning, mood and sleep changes, and blood sugar swings — all can have hormonal causes worth properly ruling in or out.' },
      { q: 'Do I need my current doctor’s referral to see you?', a: 'Many insurance plans allow direct specialist booking. Call us at (440) 322-0872 and we’ll help you check what your plan requires.' },
      { q: 'What records should I bring from my current doctor?', a: 'Recent lab results are the most useful — especially thyroid panels and A1C history. We can also request records for you once you’re a patient; you won’t have to start from zero.' },
    ],
    related: ['guides/signs-of-a-good-doctor', 'guides/second-opinion-endocrinologist', 'guides/switching-endocrinologists'],
  },
  {
    slug: 'how-to-choose-an-endocrinologist',
    keyword: 'how to choose an endocrinologist',
    title: 'How to Choose an Endocrinologist in Northern Ohio',
    h1: 'How to choose an endocrinologist',
    eyebrow: 'Patient Guides',
    metaDesc: 'A practical checklist for choosing an endocrinologist: credentials, access, communication style, and the questions to ask before your first visit.',
    intro: [
      `Choosing a specialist you may see for years deserves more than picking the first search result. The good news: a few practical checks separate the practices that will serve you well from the ones that will frustrate you.`,
      `Here's the checklist we'd give a family member searching anywhere — Northern Ohio included.`,
    ],
    sections: [
      {
        h2: 'The four things worth checking',
        body: `<p><strong>Credentials and standing.</strong> Board certification in endocrinology is the baseline; hospital leadership and teaching appointments signal respect from peers. <strong>Access.</strong> How long until a new patient is seen? Are televisits offered for follow-ups? A brilliant doctor you can't get in to see doesn't help you. <strong>How visits actually run.</strong> Are labs like A1C done in-house with same-visit results, or does every number mean another week of waiting? <strong>Communication.</strong> Call the office once before booking — whether that call is handled with patience predicts how the practice will treat you as a patient.</p>`,
      },
      {
        h2: 'Fit matters more than people admit',
        body: `<p>Endocrine conditions are managed in conversations, month after month. If a doctor explains things in a way that makes sense to you, asks about your life before rewriting your plan, and welcomes your questions, you'll do better — that's not a soft factor, it shows up in your numbers. It's reasonable to book one visit as a trial run and judge exactly that.</p>`,
      },
    ],
    faqs: [
      { q: 'Endocrinologist vs. primary care for diabetes or thyroid — when do I need the specialist?', a: 'Primary care handles straightforward cases well. Consider a specialist when numbers won’t stabilize, medications keep changing, symptoms persist despite "normal" labs, or you want technology like pumps and CGMs managed by people who work with them daily.' },
      { q: 'Does distance matter?', a: 'Less than it used to — many follow-ups work well by televisit. Choose the best doctor within a reasonable drive for in-person visits, and do routine check-ins by video.' },
      { q: 'What insurance questions should I ask when booking?', a: 'Whether the practice is in-network for your plan, whether you need a referral, and what a specialist copay looks like. Any good office will help you check — ours does.' },
      { q: 'How soon can I be seen at Ohio Endocrinology?', a: 'We keep new-patient scheduling accessible. Send an appointment request online and we’ll call within one business day to find a time.' },
    ],
    related: ['guides/signs-of-a-good-doctor', 'guides/questions-to-ask-your-endocrinologist', 'guides/first-endocrinologist-visit'],
  },
  {
    slug: 'questions-to-ask-your-endocrinologist',
    keyword: 'questions to ask endocrinologist',
    title: 'Questions to Ask Your Endocrinologist (Print This List)',
    h1: 'Questions worth asking your endocrinologist',
    eyebrow: 'Patient Guides',
    metaDesc: 'The questions that make endocrinology visits count — about your diagnosis, treatment options, monitoring, and what to do between visits.',
    intro: [
      `A good specialist visit is a two-way conversation, and the fastest way to raise the quality of your care is to arrive with questions. Not because your doctor won't volunteer information — a good one will — but because your questions steer the visit toward what you actually need to know.`,
      `Here's the list we wish every patient brought. A doctor who welcomes these questions is a keeper; a doctor who's bothered by them just told you something important.`,
    ],
    sections: [
      {
        h2: 'About your diagnosis',
        body: `<p>What exactly is my diagnosis, in plain words? How confident are we — and what else could explain my symptoms? Which of my lab values are you watching, and what do you want them to be? Is anything about my case unusual?</p>`,
      },
      {
        h2: 'About your treatment',
        body: `<p>What are all of my options, including doing nothing for now? Why this medication over the alternatives — and what are the honest trade-offs? What should improve, and by when? What would make you change the plan? If cost is a concern, is there an equally good cheaper option?</p>`,
      },
      {
        h2: 'About life between visits',
        body: `<p>What symptoms should make me call you before my next appointment? How do I reach your team with a quick question — and how fast do you respond? When will I be rechecked, and will results be explained to me or just filed? Can routine follow-ups be done by televisit?</p>`,
      },
    ],
    faqs: [
      { q: 'Is it rude to ask a doctor to explain their reasoning?', a: 'Not at all — it’s your body and your plan. Doctors who know their reasoning explain it happily. We consider "why" the most useful question a patient asks.' },
      { q: 'Should I write down the answers?', a: 'Yes, or bring someone who will. Most people retain a fraction of what’s said in a medical visit. Notes turn a good conversation into a usable plan.' },
      { q: 'What if I run out of time before my questions are answered?', a: 'Ask which questions matter most to answer today, and how to get the rest answered — portal message, call, or follow-up. How a practice handles that request is telling.' },
      { q: 'What should I bring to make the visit productive?', a: 'Your medication list with doses, recent labs if you have them, your glucose meter or CGM data if you use one, and your symptom timeline. Preparation is half the visit.' },
    ],
    related: ['guides/first-endocrinologist-visit', 'guides/how-to-choose-an-endocrinologist', 'guides/signs-of-a-good-doctor'],
  },
  {
    slug: 'second-opinion-endocrinologist',
    keyword: 'second opinion endocrinologist',
    title: 'Getting a Second Opinion from an Endocrinologist',
    h1: 'Second opinions: when and how to get one',
    eyebrow: 'Patient Guides',
    metaDesc: 'When a second opinion on your diabetes, thyroid, or hormone care makes sense, how to get one without awkwardness, and what to bring.',
    intro: [
      `A second opinion isn't an insult to your doctor — it's due diligence on your own health. Good physicians welcome them; medicine has genuine judgment calls, and a fresh set of expert eyes either confirms your plan (valuable) or improves it (more valuable).`,
      `In endocrinology, a few situations practically beg for one.`,
    ],
    sections: [
      {
        h2: 'When a second opinion earns its keep',
        body: `<p><strong>Before big, hard-to-reverse decisions</strong> — thyroid surgery, radioactive iodine, or starting long-term therapies. <strong>When progress has stalled</strong> — an A1C that hasn't moved in a year despite "trying everything." <strong>When symptoms and labs disagree</strong> — you feel unwell, everything is "normal," and the conversation has stopped advancing. <strong>When the diagnosis never quite fit</strong> — treatments that should work, don't.</p>`,
      },
      {
        h2: 'How to do it gracefully',
        body: `<p>You don't need permission, and you usually don't need a confrontation either — "I'd like a second set of eyes before we commit" is a complete sentence. Gather your recent labs, imaging reports, and medication history (you're legally entitled to your records). Then book directly with a specialist; many plans don't require a referral for this.</p><p>We see second-opinion patients regularly. Sometimes we confirm the existing plan and say so plainly — that's a good outcome too. Either way, you leave with reasoning you understand.</p>`,
      },
    ],
    faqs: [
      { q: 'Will my current doctor be offended?', a: 'Good doctors aren’t — second opinions are routine in medicine. And if a doctor reacts badly to one, that reaction is itself useful information.' },
      { q: 'Does insurance cover second opinions?', a: 'Usually yes, as a regular specialist visit. Some plans encourage them before major procedures. We’ll help you verify when you book.' },
      { q: 'What records do I need?', a: 'Recent labs (thyroid panels, A1C history), any imaging or biopsy reports, and your medication history. We can help request records once you’ve booked.' },
      { q: 'What happens if your opinion differs from my doctor’s?', a: 'We’ll explain exactly where and why we differ, in plain language, and give you what you need to decide — including questions to take back to your current doctor. The decision stays yours.' },
    ],
    related: ['guides/doctor-not-listening', 'guides/switching-endocrinologists', 'conditions/thyroid-nodules'],
  },
  {
    slug: 'switching-endocrinologists',
    keyword: 'switching endocrinologists',
    title: 'Switching Endocrinologists: When and How to Change',
    h1: 'Switching endocrinologists, without the gap',
    eyebrow: 'Patient Guides',
    metaDesc: 'How to switch endocrinologists smoothly: when it’s justified, how records transfer, and how to avoid any gap in prescriptions or care.',
    intro: [
      `People stay with doctors who aren't serving them for the same reason they stay with bad phone carriers: switching feels like hassle. But unlike your phone plan, this relationship affects your health every day — and the switch is easier than you think.`,
      `Here's the honest playbook, including how to make sure your prescriptions never skip a beat.`,
    ],
    sections: [
      {
        h2: 'Reasons that justify a switch',
        body: `<p>You consistently feel unheard or rushed. Getting an appointment takes months. Results come back without explanation. Your numbers have plateaued and the plan never changes. You've moved, and "toughing out the drive" means you skip visits. Any one of these is enough — you don't need to build a legal case. The standard is simple: is this care helping you get better on a timeline you can live with?</p>`,
      },
      {
        h2: 'The no-gap switching plan',
        body: `<p>Book the new doctor <em>before</em> leaving the old one, and make sure you have enough medication refills to bridge to that first visit — if not, request refills first. Sign a records release so your labs and history transfer (the new office usually handles this — we do). You don't owe the old practice an exit interview; a records request is all the notice required.</p><p>At your first visit with us, bring your medication list and any recent labs you have. We review your history, run what's missing — A1C in-house, same visit — and you leave with a plan, not a to-do list.</p>`,
      },
    ],
    faqs: [
      { q: 'Will there be a gap in my prescriptions?', a: 'There doesn’t have to be. Check your refill count before switching, and tell us at booking if you’re running low — we’ll prioritize getting you seen and covered.' },
      { q: 'How do my medical records transfer?', a: 'You sign a release form and the offices handle the rest. We’ll initiate the request for you when you book — you don’t have to negotiate with your old practice.' },
      { q: 'Do I need to tell my old endocrinologist why I’m leaving?', a: 'No. It’s courteous but entirely optional. The records request is all that’s formally needed.' },
      { q: 'How fast can I get in as a new patient?', a: 'Send an appointment request online or call (440) 322-0872 — we respond within one business day and keep new-patient scheduling accessible.' },
    ],
    related: ['guides/second-opinion-endocrinologist', 'guides/first-endocrinologist-visit', 'guides/doctor-not-listening'],
  },
  {
    slug: 'first-endocrinologist-visit',
    keyword: 'what to expect first endocrinologist appointment',
    title: 'Your First Endocrinologist Visit: What to Expect',
    h1: 'Your first visit, demystified',
    eyebrow: 'Patient Guides',
    metaDesc: 'What actually happens at a first endocrinology appointment — what we ask, what we test, what to bring, and how you’ll leave with a plan.',
    intro: [
      `Not knowing what to expect keeps a surprising number of people from booking the specialist visit they need. So here's exactly how a first appointment with us runs — no mystery, no surprises.`,
      `The short version: we ask a lot, we listen to the answers, we test what needs testing, and you leave understanding your situation better than when you arrived.`,
    ],
    sections: [
      {
        h2: 'How the visit runs',
        body: `<p>Your doctor reviews your medical history in detail and performs a full examination — this is the "asking and listening" part, and we don't rush it. We go through your symptoms on your timeline: when things started, what's changed, what you've already tried. Then we explain what we think is going on and what we want to check, in plain language. If an A1C is needed, we run it in-house and discuss the result during the visit. We typically provide any lab slips at the end of the visit, so you can complete remaining tests when it's convenient for you.</p>`,
      },
      {
        h2: 'What to bring (and what happens next)',
        body: `<p>Bring your medication list with doses, any recent lab results, your glucose meter or CGM data if you use one, and your insurance card. Registering on our <a href="../../portal-help/">patient portal</a> ahead of time speeds up check-in — or our team can help you register by phone before your visit.</p><p>You'll leave knowing three things: what we think is happening, what we're doing about it, and when we'll know if it's working. Follow-ups can often be done by televisit.</p>`,
      },
    ],
    faqs: [
      { q: 'How long is a first appointment?', a: 'Plan for a thorough visit — first appointments are longer than follow-ups because we review your full history properly. It’s time invested once that pays off for years.' },
      { q: 'Will I get lab work done at the first visit?', a: 'Often, yes — A1C is done in-house with same-visit results. Other labs may be ordered with slips you can complete at your convenience.' },
      { q: 'Should I stop any medications before coming?', a: 'No — don’t change anything without guidance. Bring your complete, current list and we’ll take it from there.' },
      { q: 'Can my first visit be a televisit?', a: 'Often, depending on your concern. Call (440) 322-0872 and we’ll recommend the right visit type.' },
    ],
    related: ['guides/questions-to-ask-your-endocrinologist', 'treatments/in-house-a1c-testing', 'treatments/telehealth-endocrinology'],
  },
];
