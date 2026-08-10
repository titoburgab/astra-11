# Accessibility

## DESIGN_SYSTEM / Accessibility.md

> *Accessibility is not a checklist. It is a design constraint applied from the beginning of every project, not a review step at the end.*

---

## Standard

ASTRA-11 targets **WCAG 2.1 AA** as the minimum standard for all production interfaces.
We target **WCAG 2.1 AAA** for primary content and critical user paths.

---

## Color and Contrast

| Combination | Ratio | Level |
|---|---|---|
| Obsidian on Ivory | 18.7:1 | AAA ✓ |
| Ivory on Obsidian | 18.7:1 | AAA ✓ |
| Signal on Ivory | 4.6:1 | AA (large text) ✓ |
| Signal on Obsidian | 4.1:1 | AA (large text) ✓ |

**Signal must not be used for body text** (below 18px regular or 14px bold). It does not meet AA for normal text on either primary background.

For all new color combinations, verify contrast at: https://webaim.org/resources/contrastchecker/

---

## Typography Minimums

| Context | Minimum Size |
|---|---|
| Body text | 16px |
| Secondary text, captions | 14px |
| Interactive labels | 14px |
| Never below | 12px (labels only) |

---

## Focus States

All interactive elements must have a visible focus indicator.

```css
/* ASTRA-11 focus standard */
:focus-visible {
  outline: 2px solid var(--astra11-color-signal);
  outline-offset: 2px;
  border-radius: var(--astra11-radius-sm);
}
```

Do not use `outline: none` without providing an equivalent custom focus style.

---

## Keyboard Navigation

All functionality must be accessible via keyboard:
- Tab order must be logical and follow visual order
- All interactive elements reachable via Tab
- Escape dismisses modals, dropdowns, and overlays
- Arrow keys navigate within menus and lists
- Enter/Space activates buttons and controls

---

## Screen Reader Requirements

- All images have descriptive `alt` text (or `alt=""` for decorative images)
- Form inputs have associated `<label>` elements
- Error messages are associated with their input via `aria-describedby`
- Dynamic content updates use `aria-live` regions appropriately
- Modals trap focus and restore it on close
- Page has a logical heading hierarchy (one H1, logical H2/H3 nesting)

---

## Motion and Animation

Respect `prefers-reduced-motion` for all animations:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Loading indicators: provide static alternative (spinner → static icon).

---

## Testing Requirements

Before any production release:
- [ ] Manual keyboard navigation test
- [ ] Screen reader test (VoiceOver on macOS/iOS minimum; NVDA on Windows if possible)
- [ ] Color contrast check for all text combinations
- [ ] Automated accessibility scan (axe DevTools or equivalent)
- [ ] Zoom test at 200% — no horizontal scroll, no content loss

---

*Related documents: `BRAND_BOOK/Color_System.md` | `DESIGN_SYSTEM/Motion.md` | `TOKENS/colors.json`*

---

© ASTRA-11 Design System — Accessibility.md v2.0
