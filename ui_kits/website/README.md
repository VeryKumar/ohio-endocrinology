# Ohio Endocrinology — Website UI Kit

High-fidelity recreation of the Ohio Endocrinology marketing site, composed from the design-system components and populated with **verified facts** from `content/site-facts.md` (crawled from ohioendocrinology.com, 2026-07-06).

## Screens
- **HomePage.jsx** — single-page site: hero, providers, the **6 services** (5 published + GLP-1, client-requested), stats, new-patient section, 4 verbatim testimonials, two locations, CTA.
- **ServiceDetail.jsx** — reusable, data-driven detail page (one per service): gradient hero with icon/graphic, "what it is / why us / who's a candidate / what to expect" sections, FAQ accordion, compliance footnote, related-services rail, CTA. Content lives in **services-data.js**.
- **Header.jsx** — single dark utility bar (address, HIPAA, text, phone) above the sticky white nav; Book Appointment → GlaceEMR portal.
- **Footer.jsx** — contact strip + navy footer with full contact block.
- **Ticker.jsx** — fixed announcement bar with pause.

## Services & GLP-1
- `services-data.js` holds all six services. GLP-1 (**GLP-1 Weight Management**) is a **client-requested new service** — copy drafted from `content/services/glp-1.md`, flagged ⚠️ where facts need confirmation. The other five reflect the live-site blurbs, lightly expanded.
- GLP-1 uses generated brand SVGs: `assets/glp-1/icon-glp1-pen.svg` (chip icon) and `assets/glp-1/card-glp1.svg` (hero graphic). Preview: `preview/glp-1-preview.html`.

## Run
Open `index.html`. Nav links smooth-scroll to sections; Book Appointment opens the patient portal in a new tab.

## Assets
- `../../assets/logo-mark.png` — coral "O" cropped from the client's logo. ⚠️ It clashes with the navy/teal system; a new mark is recommended.
- `../../assets/source/dr-vikram-kumar.jpg`, `namrata-kumar.png` — provider portraits, **only ~200×250** — request higher-res.

## ⚠️ Client confirmations (from site-facts.md)
- Hero phone shows (440) 476-3770 but the live `tel:` dials (440) 340-1541 — this kit uses the main office line **(440) 322-0872**; confirm the correct scheduling number.
- Wednesday hours read "12:30 am" on the live site (typo for 12:30 pm).
- The printable New Patient Form link is broken (`href=""`) — need the real PDF.
- Thyroid is in the practice name but has no service card — consider adding it (+ telehealth, which a testimonial mentions).
- Testimonials are unattributed on the live site — shown here as "Verified patient."
