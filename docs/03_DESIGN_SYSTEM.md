# Design System

> The design system is the atomic foundation. All visual decisions reference this document.

---

## Color System

### Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| Primary Background | `#050816` | Page base |
| Secondary Background | `#0B1120` | Section alternate |
| Surface | `#121826` | Elevated panels |
| Glass Surface | `rgba(255,255,255,0.05)` | Glassmorphism cards |

### Accents

| Token | Value | Usage |
|-------|-------|-------|
| Primary Accent | `#22C55E` | CTAs, highlights, links |
| Secondary Accent | `#4ADE80` | Hover states, secondary actions |
| Hover Accent | `#16A34A` | Active/hover fill |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| Primary Text | `#FFFFFF` | Headings, body |
| Secondary Text | `#B4BECF` | Descriptions, metadata |
| Muted Text | `#7A8599` | Captions, placeholders |

### Borders & Dividers

| Token | Value | Usage |
|-------|-------|-------|
| Borders | `rgba(255,255,255,.08)` | Card borders, inputs |
| Divider | `rgba(255,255,255,.04)` | Section separators |

### Status

| Token | Value | Usage |
|-------|-------|-------|
| Error | `#EF4444` | Validation, alerts |
| Success | `#22C55E` | Confirmations, badges |

See [[04_UI_GUIDELINES]] for how colors map to components.

---

## Typography

### Font Stack

| Role | Font | Fallback |
|------|------|----------|
| Primary | Inter | Manrope |
| Code | JetBrains Mono | monospace |

### Type Scale

| Element | Weight | Size | Spacing |
|---------|--------|------|---------|
| H1 | Bold | Large | Tight |
| H2 | Bold | Medium | Tight |
| H3 | SemiBold | Base+ | Normal |
| Body | Regular | Base | Comfortable line-height |
| Code | JetBrains Mono | — | Monospace |

### Rules

- Headings: Bold, large, tight letter-spacing
- Body: Readable, comfortable, generous line-height
- Code snippets: JetBrains Mono always

See [[10_ACCESSIBILITY]] for contrast requirements.

---

## Spacing System

Use an **8-point grid**:

| Token | Value |
|-------|-------|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 32px |
| xl | 48px |
| 2xl | 64px |
| 3xl | 96px |
| 4xl | 128px |

- Sections should have generous spacing
- Avoid crowded layouts
- Reference [[04_UI_GUIDELINES]] for layout padding rules

---

## Corner Radius

| Element | Radius |
|---------|--------|
| Buttons | 12px |
| Cards | 18px |
| Images | 24px |
| Tags | 999px (pill) |

Maintain consistency throughout the project. See [[05_COMPONENT_LIBRARY]] for per-component specs.

---

## Shadows

Soft shadows only:

| Element | Shadow |
|---------|--------|
| Large cards | `0 20px 60px rgba(0,0,0,.35)` |
| Buttons | `0 8px 20px rgba(0,0,0,.25)` |

Avoid harsh shadows.

---

## Glassmorphism

Use lightly. Cards may have:

- Background blur
- Semi-transparent surface (`rgba(255,255,255,0.05)`)
- Thin border (`rgba(255,255,255,.08)`)
- Soft shadow

Never overuse glass effects. See [[05_COMPONENT_LIBRARY]] for glass card specs.

---

## Layout Tokens

| Token | Value |
|-------|-------|
| Max Width | 1400px |
| Content Width | 1200px |
| Container Padding (Desktop) | 80px |
| Container Padding (Tablet) | 48px |
| Container Padding (Mobile) | 24px |

See [[11_DEVELOPMENT_RULES]] for responsive breakpoints.

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[02_PORTFOLIO_THEME]]
- [[04_UI_GUIDELINES]]
- [[05_COMPONENT_LIBRARY]]
- [[06_ANIMATION_GUIDE]]
