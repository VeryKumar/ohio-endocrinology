**HipaaNotice** — HIPAA-conscious callout for forms. Amber "don't submit PHI" by default; `secure` for the green encrypted variant.

```jsx
<HipaaNotice />
<HipaaNotice secure />
```

Use the default above any public contact/appointment form; use `secure` inside an authenticated/encrypted portal. Override copy via children.
