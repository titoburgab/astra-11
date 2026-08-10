# Color System

## BRAND_BOOK / Color_System.md

> *The ASTRA-11 color system is built on three primary values and a small set of neutral extensions. Every color decision has a defined purpose and usage context.*

---

## Primary Palette

These three colors form the complete primary palette for all static brand applications.

| Name | HEX | RGB | Role |
|---|---|---|---|
| Navy | `#0A0F1C` | 10, 15, 28 | Primary background (dark), primary text (light) |
| White | `#FFFFFF` | 255, 255, 255 | Primary background (light), primary text (dark) |
| Orange | `#FF5100` | 255, 81, 0 | Accent, emphasis, CTAs, logo underline |

### Usage Rules

**Navy** is the primary dark background. Use for: dark-mode interfaces, hero sections, headers, premium presentations, physical brand applications on dark materials.

**White** is the primary light background. Use for: light-mode interfaces, documentation, body text backgrounds, print materials.

**Orange** is the brand accent. Use for: the logo underline, primary CTAs, key data highlights, active states in UI, and emphasis in motion sequences. Do not use Orange for body text below 24px.

### Pairings

| Background | Text | Contrast Ratio | WCAG |
|---|---|---|---|
| White `#FFFFFF` | Navy `#0A0F1C` | 18.1:1 | AAA ✓ |
| Navy `#0A0F1C` | White `#FFFFFF` | 18.1:1 | AAA ✓ |
| White `#FFFFFF` | Orange `#FF5100` | 3.3:1 | AA (large text only) |
| Navy `#0A0F1C` | Orange `#FF5100` | 5.5:1 | AA ✓ (large text) |

Orange fails WCAG AA at normal text sizes on both backgrounds. **Do not use Orange for body text or small-size text.**

---

## Motion Palette

Reserved exclusively for motion graphics, animations, data visualizations, and infographics. Not for use in static brand contexts.

| Name | HEX | Role in Motion |
|---|---|---|
| Copper | `#FF7A00` | Warm energy; mid-range data emphasis |
| Amber | `#FFB800` | Transition; connection in progress states |
| Ember | `#FF4000` | High energy; directional flow |
| Gold | `#FFD166` | Resolution; completion states |
| Plasma | `#FF2D55` | Bridge between the primary Orange accent and warm motion colors |

### Motion Color Usage
These colors animate the Origin Node concept: they represent the movement of intelligence from origin to connection to synthesis.

The sequence Copper → Amber → Gold suggests forward progress.
The sequence Orange → Plasma → Ember suggests energy and activation.

See `BRAND_BOOK/Motion_Identity.md` for specific animation sequences.

---

## Neutral Extensions

For UI contexts requiring additional tonal range:

| Name | HEX | Use |
|---|---|---|
| Gray | `#A7ACB3` | Muted/secondary text on dark backgrounds |
| Navy-Elevated | `#121A2C` | Card and panel backgrounds (dark mode) |
| Navy-Border | `#1F2A40` | Border, divider (dark mode) |
| Gray-Soft | `#D7DAE0` | Borders, dividers (light mode) |
| Orange-Dark | `#CC4100` | Pressed/hover state for Orange on light backgrounds |
| Orange-Bright | `#FF7A33` | Hover state for Orange accents on dark backgrounds |

---

## What to Avoid

- Do not introduce colors outside this system without a documented decision in `Decision_Log.md`
- Do not use gradient fills on the primary logo
- Do not use Orange for body text at sizes below 24px
- Do not substitute a different orange, red, or amber for the official `#FF5100`

---

## Design Token Reference

Production-ready color tokens: `TOKENS/colors.json`

CSS variable names follow the pattern `--astra11-color-[name]`

See `DESIGN_SYSTEM/Colors.md` for component-level color application.

---

*Related documents: `DESIGN_SYSTEM/Colors.md` | `TOKENS/colors.json` | `BRAND_BOOK/Motion_Identity.md` | `FOUNDATION/Decision_Log.md`*

---

© ASTRA-11 Brand Book — Color_System.md v3.0
