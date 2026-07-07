**Card** — white content card for services, features, providers. Composes sub-parts; lifts 6px on hover.

```jsx
<Card>
  <CardBody>
    <CardIcon><i className="fa-solid fa-heart-pulse" /></CardIcon>
    <CardTitle>Thyroid & Parathyroid</CardTitle>
    <CardText>Comprehensive evaluation and management of thyroid disorders.</CardText>
    <CardLink href="/services/thyroid">Learn more</CardLink>
  </CardBody>
</Card>
```

Parts: `CardIcon` (60px soft gradient chip), `CardBody` (sp-8 padding), `CardTitle` (Playfair 1.5rem), `CardText` (muted 15px), `CardLink` (arrow link, gap widens on hover). Set `hover={false}` to disable the lift.
