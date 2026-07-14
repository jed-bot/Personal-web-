# Accessibility

> The portfolio must be usable by everyone. Accessibility is not optional — it is a core quality marker.

---

## WCAG Compliance

Target: **WCAG 2.1 AA**

---

## Contrast

| Element | Minimum Ratio |
|---------|---------------|
| Normal text | 4.5:1 |
| Large text (18px+ bold, 24px+) | 3:1 |
| UI components | 3:1 |

See [[03_DESIGN_SYSTEM]] for color values and verify contrast ratios.

---

## Keyboard Navigation

- All interactive elements must be focusable
- Visible focus states on every focusable element
- Logical tab order (top → bottom, left → right)
- Skip-to-content link
- No keyboard traps

---

## Focus States

| Property | Value |
|----------|-------|
| Style | Visible outline or border |
| Color | `#22C55E` (Primary Accent) |
| Width | 2px minimum |
| Offset | 2px |

See [[05_COMPONENT_LIBRARY]] for input focus specs.

---

## Semantic HTML

- Use landmark elements: `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`
- One `<h1>` per page
- Proper heading hierarchy (no skipped levels)
- Lists use `<ul>` / `<ol>`
- Buttons are `<button>`, links are `<a>`

---

## ARIA

- Use `aria-label` for elements without visible text
- Use `aria-describedby` for supplementary descriptions
- Use `aria-hidden="true"` for decorative elements
- Use `role` attributes only when semantic HTML is insufficient

---

## Images

- Every meaningful image has `alt` text
- Decorative images use `alt=""` and `role="presentation"`
- See [[09_SEO_GUIDE]] for image optimization

---

## Reduced Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

See [[06_ANIMATION_GUIDE]] for animation rules.

---

## Color Independence

- Never convey information through color alone
- Use icons, text, or patterns alongside color
- Ensure UI is usable in high contrast mode

---

## Screen Reader Testing

Test with:
- NVDA (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

Verify:
- All content is announced
- Navigation makes sense
- Images have meaningful alt text
- Form fields have labels

---

## Checklist

- [ ] 4.5:1 contrast on all text
- [ ] Keyboard navigable
- [ ] Visible focus states
- [ ] Semantic HTML landmarks
- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] `prefers-reduced-motion` respected
- [ ] ARIA labels where needed
- [ ] Screen reader tested
- [ ] No color-only information

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[03_DESIGN_SYSTEM]]
- [[06_ANIMATION_GUIDE]]
- [[09_SEO_GUIDE]]
- [[11_DEVELOPMENT_RULES]]
