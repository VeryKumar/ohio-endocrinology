// Ohio Endocrinology — service catalog + detail content.
// GLP-1 copy is drafted for client approval (see content/services/glp-1.md); the
// other five reflect the live-site blurbs, expanded lightly. ⚠️ = confirm with client.
window.OE_SERVICES = [
  {
    slug: 'a1c',
    icon: 'fa-vial',
    title: 'Hemoglobin A1C (in-house)',
    blurb: 'Proper control of your diabetes requires a big-picture view of your blood sugar. By doing Hemoglobin A1C in house, our doctors get results the same day.',
    subtitle: 'Same-day A1C results, right in our office — so your plan can change the day you visit.',
    sections: [
      { h: 'What it is', body: 'Hemoglobin A1C measures your average blood sugar over the past two to three months. It is the single most important number for understanding how well your diabetes is controlled — and because we run it in house, you get results during your visit instead of waiting days for a lab.' },
      { h: 'Why it matters', list: ['See your control at a glance, not just a single-day snapshot', 'Adjust medication the same day, based on real data', 'Track progress visit over visit toward your goal', 'No separate trip to an outside lab'] },
    ],
    faq: [
      { q: 'Do I need to fast for an A1C?', a: 'No — A1C does not require fasting, so it can be done any time during your visit.' },
      { q: 'How often should it be checked?', a: 'Typically every 3 months if you are adjusting treatment, or twice a year once you are at goal. ⚠️ confirm the practice’s standard cadence.' },
    ],
  },
  {
    slug: 'insulin-pumps',
    icon: 'fa-syringe',
    title: 'Insulin Pumps',
    blurb: 'Insulin pumps deliver insulin the moment it is needed — for steadier control and fewer daily injections.',
    subtitle: 'Steadier control with fewer injections — we help you choose, start, and fine-tune your pump.',
    sections: [
      { h: 'What it is', body: 'An insulin pump is a small device that delivers insulin continuously through a thin tube under the skin, releasing more when it is needed — such as at mealtimes. For many people it means tighter control and far fewer daily needle sticks.' },
      { h: 'How we help', list: ['Decide whether a pump is right for you', 'Choose a device that fits your life and insurance', 'Get started with hands-on training', 'Fine-tune your settings as your needs change'] },
    ],
    faq: [
      { q: 'Is a pump better than injections?', a: 'It depends on your goals and lifestyle. Pumps offer more flexibility and steadier control for many patients, but they are not for everyone — we will help you decide.' },
    ],
  },
  {
    slug: 'cgm',
    icon: 'fa-wave-square',
    title: 'Continuous Glucose Monitors',
    blurb: 'For the most precise monitoring, we offer continuous glucose monitors for minute-by-minute measurement of your blood sugar.',
    subtitle: 'Minute-by-minute glucose data — so you and your care team can see patterns, not guesses.',
    sections: [
      { h: 'What it is', body: 'A continuous glucose monitor (CGM) is a small sensor worn on the body that measures your glucose around the clock and sends readings to your phone or a reader. It replaces most fingersticks and reveals patterns that a single reading can never show.' },
      { h: 'Why patients love it', list: ['See highs and lows in real time, with alerts', 'Understand how food, activity, and stress affect you', 'Share data with our team for smarter adjustments', 'Fewer painful fingersticks'] },
    ],
    faq: [
      { q: 'Will my insurance cover a CGM?', a: 'Many plans cover CGMs for people on insulin, and coverage is expanding. We help verify your benefits. ⚠️ confirm.' },
    ],
  },
  {
    slug: 'testosterone',
    icon: 'fa-dumbbell',
    title: 'Testosterone Injections',
    blurb: 'Our doctors make every effort to preserve your hormone levels through medication, with the option for injections when they are needed.',
    subtitle: 'Endocrinologist-supervised hormone care — the right treatment, monitored properly.',
    sections: [
      { h: 'What it is', body: 'Low testosterone can affect energy, mood, strength, and metabolic health. Our doctors first work to preserve your natural hormone levels through medication, and offer supervised testosterone injections when they are the right option.' },
      { h: 'Our approach', list: ['Confirm low testosterone with proper lab testing', 'Rule out underlying causes first', 'Preserve natural levels when possible', 'Monitor closely if injections are needed'] },
    ],
    faq: [
      { q: 'Is testosterone therapy safe?', a: 'When properly evaluated and monitored by a specialist, it can be safe and effective. It requires ongoing lab monitoring, which is exactly what endocrinologists do.' },
    ],
  },
  {
    slug: 'inhaled-insulin',
    icon: 'fa-wind',
    title: 'Inhaled Insulin',
    blurb: 'A fantastic recent advancement in diabetes medication science, inhaled insulin can help you manage sugars without breaking your skin.',
    subtitle: 'Mealtime insulin you breathe in — a needle-free option for the right patients.',
    sections: [
      { h: 'What it is', body: 'Inhaled insulin is a rapid-acting mealtime insulin taken through a small inhaler instead of an injection. For patients who dread needles, it can make managing blood sugar dramatically easier.' },
      { h: 'Is it right for you?', list: ['Best for mealtime (rapid-acting) insulin needs', 'Not suitable for everyone — lung conditions matter', 'Requires a quick breathing test before starting', 'We evaluate whether it fits your plan'] },
    ],
    faq: [
      { q: 'Can it replace all my injections?', a: 'Inhaled insulin covers mealtime needs; you may still need a long-acting insulin. We will map out the full plan with you.' },
    ],
  },
  {
    slug: 'glp-1',
    icon: 'glp1-pen', // custom SVG asset
    title: 'GLP-1 Weight Management',
    badge: 'New',
    blurb: 'GLP-1 medications like semaglutide and tirzepatide can transform blood sugar control and support lasting weight loss. Our doctors manage your therapy from first dose to maintenance — safely, and with insurance guidance.',
    hero: '../../assets/glp-1/card-glp1.svg',
    subtitle: 'The same medications making headlines — prescribed and managed the right way, by endocrinologists who have used them since the beginning.',
    sections: [
      { h: 'What are GLP-1 medications?', body: 'GLP-1 receptor agonists — including semaglutide (Ozempic®, Wegovy®) and tirzepatide (Mounjaro®, Zepbound®) — mimic a natural hormone your body releases after eating. They help your pancreas release insulin when it is needed, quiet constant hunger signals, and slow digestion so you feel full longer. The result for many patients: meaningfully lower A1C, steady weight loss, and better cardiovascular health. These are powerful medications — and they work best with a specialist watching the whole picture.' },
      { h: 'Why manage GLP-1s with an endocrinologist?', list: [
        'Right medication, right dose — matched to your labs, history, and goals',
        'The full metabolic picture — in-house A1C and CGM show how you are really responding',
        'Side effects handled early — careful titration, and we stay reachable',
        'Insurance & affordability guidance — help with prior authorizations ⚠️ confirm',
        'Muscle-preserving weight loss — losing the right weight, not just weight',
      ] },
      { h: 'Who is a candidate?', list: [
        'Type 2 diabetes not at goal on current medication',
        'BMI 30+, or 27+ with a weight-related condition ⚠️ confirm criteria',
        'Prediabetes or insulin resistance with difficulty losing weight ⚠️ confirm scope',
        'A history of "trying everything" without lasting results',
      ] },
      { h: 'What to expect', steps: [
        ['Evaluation', 'Full history, exam, and labs (A1C in-house). We confirm you are a safe candidate and set realistic goals together.'],
        ['Start low, go slow', 'You begin at a starter dose, with clear instructions for the once-weekly injection.'],
        ['Titrate & monitor', 'Follow-ups every 4–8 weeks ⚠️ confirm cadence, stepping the dose up as your body adjusts.'],
        ['Maintain', 'Once at goal, we build the long-term plan — based on your labs, not a trend.'],
      ] },
    ],
    faq: [
      { q: 'Do you prescribe Ozempic and Mounjaro, or compounded versions?', a: 'We prescribe FDA-approved GLP-1 medications through your pharmacy. ⚠️ confirm the practice’s stance on compounded semaglutide.' },
      { q: 'Will my insurance cover it?', a: 'Often yes for type 2 diabetes; coverage for weight loss alone varies widely by plan. We help you understand prior authorization and manufacturer savings programs. ⚠️ confirm.' },
      { q: 'How much weight will I lose?', a: 'In clinical trials, patients lost on average 15% of body weight on semaglutide and up to 20% on tirzepatide over about a year, combined with nutrition and activity changes. Your results depend on your dose, consistency, and metabolism.' },
      { q: 'What are the side effects?', a: 'The most common are nausea, constipation, and fatigue, especially when the dose increases. Careful titration prevents most of it — and you can text us at (440) 656-7755 when something feels off.' },
      { q: 'I am already on insulin — can I still use a GLP-1?', a: 'Often yes — and it may reduce how much insulin you need. This combination requires endocrinologist supervision, which is exactly what we do.' },
      { q: 'Do I have to stay on it forever?', a: 'Weight and blood sugar tend to return when the medication stops — GLP-1s treat a chronic condition, they do not cure it. At maintenance visits we discuss the long-term plan that fits your health and budget.' },
    ],
    compliance: 'GLP-1 medications are prescription-only and are not appropriate for everyone. Individual results vary. Trial results cited: STEP 1 (semaglutide 2.4 mg, NEJM 2021) and SURMOUNT-1 (tirzepatide, NEJM 2022). Ozempic® and Wegovy® are registered trademarks of Novo Nordisk; Mounjaro® and Zepbound® are registered trademarks of Eli Lilly. This page is for information only and is not medical advice.',
  },
];
