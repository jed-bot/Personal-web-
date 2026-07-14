# SEO Guide

> Search optimization for the portfolio. Ensures discoverability without compromising the [[02_PORTFOLIO_THEME|theme's]] design quality.

---

## Meta Tags

| Tag | Requirement |
|-----|-------------|
| `<title>` | Unique per page, 50–60 chars |
| `<meta description>` | Unique, 150–160 chars, includes keywords |
| `<meta viewport>` | `width=device-width, initial-scale=1` |
| `<meta charset>` | `UTF-8` |

---

## Heading Hierarchy

- One `<h1>` per page — the page title
- `<h2>` for major sections
- `<h3>` for subsections
- Never skip levels

See [[08_CONTENT_STRATEGY]] for heading copy guidelines.

---

## Images

- Descriptive `alt` text on every image
- Use `loading="lazy"` for below-fold images
- Serve optimized formats (WebP, AVIF)
- Responsive `srcset` for different viewports

See [[05_COMPONENT_LIBRARY]] for image component specs and [[11_DEVELOPMENT_RULES]] for performance optimization.

---

## Semantic HTML

- Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper ARIA labels where needed
- See [[10_ACCESSIBILITY]] for full semantic requirements

---

## URLs & Links

- Clean, descriptive URLs
- Internal links between pages (contextual)
- No broken links
- Use `rel="noopener"` for external links

---

## Performance (SEO Impact)

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

See [[11_DEVELOPMENT_RULES]] for the full performance checklist.

---

## Structured Data

- Add JSON-LD for Person schema
- Include `sameAs` links to social profiles
- Add `JobTitle`, `knowsAbout` fields

---

## Social Sharing

- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Ensure shared image is 1200x630px

---

## Checklist

- [ ] Unique title and meta per page
- [ ] Semantic heading hierarchy
- [ ] Alt text on all images
- [ ] Lazy loading for images
- [ ] Clean URLs
- [ ] Internal linking
- [ ] Structured data
- [ ] Open Graph tags
- [ ] No broken links
- [ ] Lighthouse 95+

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[08_CONTENT_STRATEGY]]
- [[10_ACCESSIBILITY]]
- [[11_DEVELOPMENT_RULES]]
