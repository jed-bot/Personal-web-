# Component Library

> A catalog of all reusable UI components. Each component references [[03_DESIGN_SYSTEM]] tokens and follows [[04_UI_GUIDELINES]] patterns.

---

## Button

| Property | Value |
|----------|-------|
| Border Radius | 12px |
| Shadow | `0 8px 20px rgba(0,0,0,.25)` |
| Transition | 0.2s ease |
| Hover Scale | 1.02–1.05 |

### Variants

- **Primary** — Filled `#22C55E`, white text
- **Secondary** — Outlined, transparent, border `rgba(255,255,255,.08)`
- **Ghost** — No border, text-only

See [[04_UI_GUIDELINES]] for button layout and [[06_ANIMATION_GUIDE]] for hover animations.

---

## Card

| Property | Value |
|----------|-------|
| Border Radius | 18px |
| Background | `rgba(255,255,255,0.05)` or `#121826` |
| Border | `rgba(255,255,255,.08)` |
| Shadow | `0 20px 60px rgba(0,0,0,.35)` |
| Padding | 24–32px |

### Hover State

1. `translateY(-4px)` lift
2. Green glow shadow
3. Border brightens

### Variants

- **Default** — Standard card
- **Glass** — Background blur + semi-transparent surface
- **Featured** — Larger, accent border

Never use flat cards. See [[03_DESIGN_SYSTEM]] for glassmorphism tokens.

---

## Glass Card

| Property | Value |
|----------|-------|
| Background | `rgba(255,255,255,0.05)` |
| Backdrop Filter | `blur(12px)` |
| Border | `1px solid rgba(255,255,255,.08)` |
| Shadow | Soft, ambient |

Use lightly. See [[02_PORTFOLIO_THEME]] for lighting philosophy.

---

## Tag / Badge

| Property | Value |
|----------|-------|
| Border Radius | 999px (pill) |
| Background | `rgba(34,197,94,0.1)` |
| Text | `#22C55E` |
| Padding | 4px 12px |
| Font Size | 12–14px |

---

## Navigation Link

- Text: `#B4BECF` (Secondary Text)
- Hover: `#FFFFFF` (Primary Text)
- Active: `#22C55E` underline
- Transition: 0.2s

See [[06_ANIMATION_GUIDE]] for animated underline behavior.

---

## Input / Form Field

| Property | Value |
|----------|-------|
| Background | `#0B1120` |
| Border | `1px solid rgba(255,255,255,.08)` |
| Border Radius | 12px |
| Focus Border | `#22C55E` |
| Text Color | `#FFFFFF` |
| Placeholder | `#7A8599` |

See [[10_ACCESSIBILITY]] for focus state requirements.

---

## Section Container

| Property | Value |
|----------|-------|
| Max Width | 1200px |
| Padding Y | 96–128px |
| Padding X | 80px (desktop) / 48px (tablet) / 24px (mobile) |
| Background | Alternating `#050816` / `#0B1120` |

---

## Divider

| Property | Value |
|----------|-------|
| Color | `rgba(255,255,255,.04)` |
| Height | 1px |
| Width | 100% |

---

## Hero Portrait

| Property | Value |
|----------|-------|
| Border Radius | 24px |
| Max Width | ~50% of viewport |
| Position | Right side |
| Shadow | Large ambient |

---

## Phone Mockup

| Property | Value |
|----------|-------|
| Border Radius | 32px |
| Border | `2px solid rgba(255,255,255,.1)` |
| Shadow | `0 20px 60px rgba(0,0,0,.5)` |

Used in [[07_CASE_STUDY_STRUCTURE]] project showcases.

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[03_DESIGN_SYSTEM]]
- [[04_UI_GUIDELINES]]
- [[06_ANIMATION_GUIDE]]
- [[11_DEVELOPMENT_RULES]]
