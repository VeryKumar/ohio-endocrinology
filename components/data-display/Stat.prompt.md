**StatsStrip / Stat** — band of headline trust metrics on a dark gradient with a teal top hairline.

```jsx
<StatsStrip variant="navy">
  <Stat number="25+" label="Years serving northern Ohio" />
  <Stat number="4.9★" label="Average patient rating" />
  <Stat number="15k+" label="Patients cared for" />
</StatsStrip>
```

`StatsStrip` variants: `navy` (default) · `teal` · `light`. On the `light` strip pass `light` to each `Stat` so numbers/labels flip to dark. Auto-fit grid, min 160px per stat.
