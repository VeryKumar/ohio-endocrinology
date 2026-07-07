**Form fields** — Input, Textarea, Select, Checkbox. All share the 2px-border, 48px, blue-focus-ring look and take `label`, `hint`, `error`, `required`. `FormField` is the standalone label+error wrapper.

```jsx
<Input label="Full name" required placeholder="Jane Doe" />
<Input label="Email" type="email" error="Please enter a valid email" />
<Select label="Preferred office" placeholder="Choose one" options={['Cleveland', 'Sandusky', 'Toledo']} />
<Textarea label="Reason for visit" hint="Do not include health details." rows={4} />
<Checkbox required label="I consent to be contacted about my request." />
```

Error text replaces the hint and turns the border red. Pair public forms with `<HipaaNotice />`.
