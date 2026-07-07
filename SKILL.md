---
name: ohio-endocrinology-design
description: Use this skill to generate well-branded interfaces and assets for Ohio Endocrinology, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tokens:** link `styles.css` (imports all `tokens/*`). Prefix `--oe-`. Colors: navy `#0d2d4e`, blue `#1e5fa8`, teal `#00b4a6`, gold `#c8922a`; slate neutrals.
- **Type:** Playfair Display headings, Inter body (16px / 1.7). Sentence case; UPPERCASE only for eyebrows.
- **Components:** namespace `OhioEndocrinologyDesignSystem_eecab4`. Button, Badge, Card(+parts), StatsStrip/Stat, Testimonial, Alert, HipaaNotice, Accordion, FormField, Input, Textarea, Select, Checkbox, SectionHeading, Divider. See each `components/**/<Name>.prompt.md`.
- **UI kit:** `ui_kits/website/` — full marketing-site recreation to copy from.
- **Icons:** Font Awesome 6.7.2 (CDN). No emoji.
- **Voice:** warm, plain-language, "you"/"we", HIPAA-conscious. See README "CONTENT FUNDAMENTALS".
