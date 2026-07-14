# UI Guidelines

> Translates the [[03_DESIGN_SYSTEM]] tokens into concrete UI patterns and layout rules.

---

## Layout

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Max Width | 1400px | 1400px | 100% |
| Content Width | 1200px | 100% | 100% |
| Container Padding | 80px | 48px | 24px |

See [[11_DEVELOPMENT_RULES]] for responsive breakpoint definitions.

---

## Hero Section

- Large typography with strong visual hierarchy
- Portrait should dominate the right side
- Background should remain simple
- Must immediately communicate:
  1. Who I am
  2. What I build
  3. Why clients should care

See [[08_CONTENT_STRATEGY]] for hero copy guidelines.

---

## Buttons

### Primary

- Filled with `#22C55E` (Primary Accent)
- Rounded corners (12px — see [[03_DESIGN_SYSTEM]])
- Soft shadow: `0 8px 20px rgba(0,0,0,.25)`

### Secondary

- Outlined, transparent background
- Border: `rgba(255,255,255,.08)`

### Hover States

- Scale slightly (1.02–1.05)
- Glow softly (green ambient)
- Fast transition (0.2s)

See [[06_ANIMATION_GUIDE]] for interaction animations.

---

## Cards

Cards should float slightly above the background:

- Rounded corners (18px)
- Thin borders (`rgba(255,255,255,.08)`)
- Soft blur
- Background: `rgba(255,255,255,0.05)` or `#121826`

### Hover Animation

1. Lift (translateY)
2. Glow (accent shadow)
3. Shadow increase

Never use flat cards.

See [[05_COMPONENT_LIBRARY]] for card component variants.

---

## Icons

- Use **Lucide Icons**
- Consistent stroke width
- No colorful icons — inherit theme colors
- Rotate slightly on hover

See [[06_ANIMATION_GUIDE]] for icon micro-interactions.

---

## Images

- Large, high quality, rounded (24px radius)
- Never stretch, never pixelate
- Use screenshots from actual applications
- Avoid stock images

---

## Project Showcase

The featured project should feel like a **product landing page**:

- Large phone mockups
- Wide screenshots
- Large headings
- Generous whitespace

### Narrative Flow

Problem → Research → Design → Development → Result

See [[07_CASE_STUDY_STRUCTURE]] for the full case study format.

---

## Navigation

- Animated underline on active section
- Smooth hover transitions
- Updates while scrolling
- See [[06_ANIMATION_GUIDE]] for scroll-linked nav behavior

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Primary experience, full layout |
| Tablet | Reduce spacing, adjust grids |
| Mobile | Single-column, stacked content, simplified interactions |

See [[11_DEVELOPMENT_RULES]] for exact breakpoints.

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[03_DESIGN_SYSTEM]]
- [[05_COMPONENT_LIBRARY]]
- [[06_ANIMATION_GUIDE]]
- [[10_ACCESSIBILITY]]
- [[11_DEVELOPMENT_RULES]]
