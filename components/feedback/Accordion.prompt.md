**Accordion** — FAQ list of collapsible items. Active item highlights with a blue-light border and rotated chevron.

```jsx
<Accordion items={[
  { q: 'Do I need a referral?', a: 'Most insurance plans allow self-referral; check with your carrier.' },
  { q: 'What should I bring?', a: 'Photo ID, insurance card, and a list of current medications.' },
]} />
```

Single-open by default; pass `allowMultiple` to keep several panels open.
