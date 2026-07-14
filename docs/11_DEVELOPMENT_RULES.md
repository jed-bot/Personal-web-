# Development Rules

> Technical constraints and performance requirements. Every implementation decision must comply with these rules.

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

---

## Performance Checklist

- Lazy loading for images
- Responsive images (srcset)
- Optimized fonts (subset, `font-display: swap`)
- Code splitting
- Minimal JavaScript
- Fast first paint
- See [[09_SEO_GUIDE]] for SEO-related performance impact

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Desktop (>1200px) | Primary experience, full layout |
| Tablet (768–1200px) | Reduce spacing, adjust grids |
| Mobile (<768px) | Single-column, stacked, simplified |

See [[04_UI_GUIDELINES]] for layout dimensions and [[03_DESIGN_SYSTEM]] for spacing tokens.

---

## Technology Constraints

- **Animation library:** Framer Motion only
- **Icons:** Lucide Icons only
- **Fonts:** Inter (primary), JetBrains Mono (code)
- **Framework:** Per project setup (Next.js recommended)

---

## Code Quality

- Semantic HTML first
- No unnecessary `<div>` wrappers
- Component-based architecture
- Consistent naming (kebab-case for CSS, PascalCase for components)
- No hardcoded values — use design tokens from [[03_DESIGN_SYSTEM]]

---

## Image Optimization

| Format | Use Case |
|--------|----------|
| WebP | Primary format |
| AVIF | Where supported |
| PNG | Fallback for transparency |
| JPG | Fallback for photos |

- Max width: 1920px for screenshots
- Compress to < 200KB where possible
- Use `loading="lazy"` for below-fold
- See [[05_COMPONENT_LIBRARY]] for image component specs

---

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
```

- Use `font-display: swap`
- Subset to latin only
- Preload critical fonts

---

## Security

- No secrets or API keys in code
- Use environment variables for sensitive data
- Content Security Policy headers
- See [[10_ACCESSIBILITY]] for related security considerations

---

## Deployment

- Static export preferred
- CDN for assets
- Cache headers configured
- Gzip/Brotli compression enabled

---

## Checklist

- [ ] Lighthouse 95+
- [ ] Lazy loading active
- [ ] Responsive images
- [ ] Fonts optimized
- [ ] Code splitting
- [ ] Minimal JS bundle
- [ ] Semantic HTML
- [ ] Design tokens used (no hardcodes)
- [ ] No secrets in code
- [ ] CDN + compression

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[03_DESIGN_SYSTEM]]
- [[04_UI_GUIDELINES]]
- [[08_CONTENT_STRATEGY]]
- [[09_SEO_GUIDE]]
- [[10_ACCESSIBILITY]]
