# Animation Guide

> Motion design rules for the portfolio. Every animation must improve the experience — never distract.

---

## Technology

- Use **Framer Motion**
- Animations should be smooth, never flashy

---

## Duration

| Type | Duration |
|------|----------|
| Micro-interaction | 0.2s |
| Standard transition | 0.4–0.8s |
| Page/section reveal | 0.6–1.0s |

---

## Preferred Animation Types

| Animation | Usage |
|-----------|-------|
| Fade | Section reveals, content loading |
| Slide | Scroll-triggered content |
| Scale | Card hover, button press |
| Blur reveal | Hero text, featured content |
| Parallax | Background layers, scroll depth |
| Image hover | Gallery, project thumbnails |
| Mouse tracking | Hero section, featured card |

Avoid bounce animations and exaggerated effects.

See [[05_COMPONENT_LIBRARY]] for component-specific animation specs.

---

## Scroll Behavior

- Smooth scrolling globally
- Sections fade into view on scroll
- Images reveal progressively
- Cards animate only once (not on every scroll)
- Navigation updates while scrolling (active section highlight)

---

## Micro-Interactions

### Buttons

- Glow (ambient green shadow)
- Lift (`translateY(-2px)`)
- Ripple (click feedback)

### Cards

- Scale (1.02x)
- Shadow increase
- Border glow (accent color)

### Navigation

- Animated underline slides to active item
- Smooth hover color transition

### Links

- Subtle color transition (0.2s)

### Icons

- Rotate slightly on hover (2–5deg)
- Scale on click

Everything should feel responsive and intentional.

See [[04_UI_GUIDELINES]] for hover state definitions and [[05_COMPONENT_LIBRARY]] for component specs.

---

## Background Animation

- Floating light orbs (slow drift)
- Tiny particles (subtle movement)
- Noise texture (static, very subtle)

Background should never distract from content.

See [[02_PORTFOLIO_THEME]] for background layer details.

---

## Performance Rules

- Never animate layout properties (width, height) — use transforms
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`
- GPU-accelerate with `transform` and `opacity`

See [[10_ACCESSIBILITY]] for reduced-motion requirements and [[11_DEVELOPMENT_RULES]] for performance budgets.

---

## Related

- [[01_PROJECT_OVERVIEW]]
- [[03_DESIGN_SYSTEM]]
- [[04_UI_GUIDELINES]]
- [[05_COMPONENT_LIBRARY]]
- [[10_ACCESSIBILITY]]
