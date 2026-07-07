# Ohio Endocrinology — Design System

Brand and UI system for **Ohio Endocrinology**, the top-rated endocrinology practice serving northern Ohio (Cleveland, Sandusky, Toledo, Lorain). The system is *classic-meets-clinical*: serif display headings over a modern sans body, a deep navy + clinical blue palette with a teal accent and gold secondary, pill buttons, soft navy-tinted shadows, and a strong accessibility posture (48px touch targets, 3px focus rings, HIPAA-conscious form patterns, reduced-motion & high-contrast handling).

The system is designed to be **clean, bright, professional, high-contrast, and mobile-first** — matching the practice's brief.

## Sources
- Design language extracted **2026-07-06** from the homepage of `https://marshallhbrowntx.instawp.xyz/` (WordPress + Bricks; custom CSS prefixed `mhb-`), supplied as a written extraction spec. This system re-implements that language under the `oe-` prefix, rebranded for Ohio Endocrinology.
- No codebase, Figma file, or logo files were provided. **There is no logo** — the brand mark is rendered as the practice name in Playfair Display beside a generic DNA glyph placeholder (Font Awesome). Replace with a real logo when available.

## Components
Reusable primitives, grouped by concern (namespace `OhioEndocrinologyDesignSystem_eecab4`):

- **buttons/** — `Button`
- **data-display/** — `Badge`, `Card` (+ `CardIcon`, `CardBody`, `CardTitle`, `CardText`, `CardLink`), `StatsStrip`, `Stat`, `Testimonial`
- **feedback/** — `Alert`, `HipaaNotice`, `Accordion`
- **forms/** — `FormField`, `Input`, `Textarea`, `Select`, `Checkbox`
- **layout/** — `SectionHeading`, `Divider`

Each directory has a `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `@dsCard`-tagged HTML card.

## UI kits
- **ui_kits/website/** — the Ohio Endocrinology marketing site: homepage (hero, why-us, services, stats, testimonials, FAQ, CTA), appointment-request form, header, footer. See its `README.md`.

## Foundations (Design System tab cards)
- `guidelines/colors-*.html` — brand core, slate neutrals, semantic status, signature gradients
- `guidelines/type-*.html` — Playfair display, Inter body, type scale, eyebrow pattern
- `guidelines/spacing-scale.html`, `guidelines/brand-radii.html`, `guidelines/brand-shadows.html`

## Tokens
- `styles.css` — root entry (import list only). Consumers link this one file.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `radii-shadows.css` · `fonts.css` · `base.css`

---

## CONTENT FUNDAMENTALS

**Voice:** warm, reassuring, and plainly expert — a trusted specialist who explains things without jargon. Never clinical-cold, never salesy.

- **Person:** speaks to the patient as **"you"**; the practice is **"we" / "our team"**. ("We'll call you within one business day." "Tell us a little about you.")
- **Tone:** confident but gentle. Leads with reassurance and access ("close to home", "same-week appointments", "explained in plain language") rather than credentials-first bragging. Credentials appear as quiet trust signals (board-certified, 4.9★, 25+ years).
- **Casing:** Sentence case for headings and body. UPPERCASE reserved for eyebrows and small labels only (`WHY OHIO ENDOCRINOLOGY`), with wide letter-spacing.
- **Headlines:** short, benefit-led, often two-part with a teal-highlighted second line ("Expert endocrine care, / **close to home**").
- **Body:** concise, 1–2 sentences per idea. Avoids diagnosis-speak in public copy; medical detail is deferred to the visit.
- **HIPAA voice:** explicit and protective — public forms warn "Please don't include specific medical details," and trust bars state "HIPAA-compliant & encrypted."
- **Numerals:** figures for stats and phone (`4.9★`, `15k+`, `(419) 555-0147`); spelled out only mid-sentence when natural.
- **No emoji.** Trust and status are shown with Font Awesome icons and star glyphs (★), never emoji.
- **CTAs:** action + object, Title Case on buttons ("Request Appointment", "Find an Office", "Call the Office").

## VISUAL FOUNDATIONS

**Color.** Deep navy `#0d2d4e` anchors headings, footer, and dark bands; clinical blue `#1e5fa8` is the primary action/link color (→ navy on hover); teal `#00b4a6` is the accent (icons, dividers, eyebrows, stats, highlights); gold `#c8922a`/`#e8b84b` is a secondary accent for stars and badges. Neutrals are the Tailwind **slate** scale. Body text is slate-800 `#1e293b`, muted slate-500 `#64748b`. Semantic: error `#dc2626`, success `#16a34a`, warning `#d97706`, each with a pale bg. On navy surfaces, text uses white-alpha steps (0.90 body → 0.75 label → 0.62 caption → 0.38 legal).

**Gradients.** Signature 135° bands: hero/CTA `navy → blue → blue-light`; teal band `teal-dark → teal`; icon chips `blue → teal` (and a 10%-alpha soft version for card icon backgrounds). Used deliberately on hero and CTA sections only — the rest of the page is white or off-white.

**Type.** Headings **Playfair Display** (serif, 700, up to 800 for stats/badges), `line-height 1.2`, `letter-spacing -0.01em`, navy. Body **Inter**, 16px base, `line-height 1.7` (paragraphs 1.75). Headings are fluid (`clamp`). Links: blue, underlined, 3px underline-offset, → navy on hover. `strong` is navy 700.

**Spacing & layout.** 4px base scale. 1200px default container (1440px wide), side padding `clamp(1rem,4vw,2.5rem)`, section padding `clamp(3rem,8vw,6rem)`. Grids collapse 3→2→1 col at breakpoints 480 / 768 / 991px. Header 90px desktop / 70px mobile, sticky.

**Backgrounds.** Mostly flat white and off-white `#f7f9fc`, alternating section by section for rhythm. Full-bleed gradient bands for hero, stats, and CTA. No textures, patterns, or hand illustration. Imagery is cool-toned clinical photography (placeholders here) framed in 24px-radius rounded rectangles with a deep shadow and floating badge chips.

**Radii.** 6 (chips) / 10 (inputs, small panels) / 16 (cards) / 24px (hero imagery) + pill (buttons, badges).

**Shadows.** Always navy-tinted (`rgba(13,45,78,…)`), from `0 1px 2px` up to `0 20px 60px`. Card default `0 2px 24px rgba(13,45,78,0.09)`. Elevation increases on hover.

**Cards.** White, 1px slate-200 border, 16px radius, navy-tinted card shadow, full-height flex column. Hover **lifts 6px** and deepens to `shadow-xl`; card images scale to 1.05.

**Motion.** Standard `220ms cubic-bezier(0.4,0,0.2,1)`, slow `400ms`. The core idiom is **lift**: buttons `translateY(-2px)` + larger shadow on hover, cards `-4/-6px`. Links change color only. Scroll-reveal is a 28px fade-up. **All motion is disabled under `prefers-reduced-motion`.**

**Hover / press.** Hover = lift + bigger shadow, or a fill (outline buttons fill navy). Links darken blue→navy. Nav items get a soft `rgba(30,95,168,0.07)` pill. No scale-down press state; buttons keep the pill.

**Transparency & blur.** Used sparingly: white-alpha text and translucent pill chips on gradient bands; no backdrop blur.

**Accessibility.** `:focus-visible` = 3px `#2563eb` outline at 3px offset everywhere. 48px min touch targets (44px in dense nav). Skip link, `aria-current`/`aria-expanded` states, `forced-colors` support, print stylesheet hides chrome.

## ICONOGRAPHY

- **Primary icon set: Font Awesome 6.7.2** (solid + regular), loaded from CDN and rendered as `<i className="fa-solid fa-…" />`. This matches the source system, which used Font Awesome `<i>` tags plus occasional inline SVG.
- Icons appear inside **60px soft-gradient chips** on cards (blue glyph on a 10%-alpha blue→teal background), inline in trust rows and topbars (teal glyphs), and as small affordances (arrows, chevrons). Every icon slot styles both `<i>` font-size and `<svg>` width/height so either works.
- **Stars** use the unicode glyph `★`/`☆` in gold-light for ratings and testimonials.
- **Chevrons/arrows** for accordion and card links use unicode (`▼`, `→`) sized small.
- **No emoji anywhere.** (The `HipaaNotice` uses `⚠`/`🔒` symbols as status markers — swap for Font Awesome `fa-triangle-exclamation` / `fa-lock` if a stricter no-emoji rule is needed.)
- **No brand logo provided** — a Font Awesome `fa-dna` glyph in a gradient chip stands in beside the wordmark. Replace with the real mark when available.

## Intentional additions
- `FormField` — a shared label/hint/error wrapper extracted so `Input`/`Select`/`Textarea` stay consistent (the source described these patterns as `.mhb-form-*` rather than one component).
- `Divider` — the standalone teal pill rule (`.mhb-divider`), also embedded in `SectionHeading`.
