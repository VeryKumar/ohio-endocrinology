**Button** — pill-shaped primary action; use for any CTA or form submit. Min 48px touch target, lifts 2px on hover.

```jsx
<Button variant="primary" size="lg" href="/request-appointment">Request an Appointment</Button>
<Button variant="outline">Learn More</Button>
```

Variants: `primary` (blue → navy hover, the default CTA), `teal`, `gold`, `outline` (navy outline → filled), `outline-white` (for navy/gradient bands). Sizes: `sm` (40px) · `md` (48px, default) · `lg` (56px) · `xl` (64px). Pass `iconLeft`/`iconRight` for Font Awesome `<i>` or SVG glyphs; `fullWidth` stretches (use on mobile CTAs).
