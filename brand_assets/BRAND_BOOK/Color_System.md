# Color System

## BRAND_BOOK / Color_System.md

> *The AITHORIS color system is built on three primary values and an extended motion palette. Every color decision has a defined purpose and usage context.*

---

## Resolved Conflict Notice

The Ivory value is officially `#F5F5F2`. See `FOUNDATION/Decision_Log.md` — DECISION-001.

---

## Primary Palette

These three colors form the complete primary palette for all static brand applications.

| Name | HEX | RGB | CMYK | Role |
|---|---|---|---|---|
| Obsidian | `#0A0A0A` | 10, 10, 10 | 75, 68, 67, 90 | Primary background (dark), primary text (light) |
| Ivory | `#F5F5F2` | 245, 245, 242 | 0, 0, 2, 4 | Primary background (light), primary text (dark) |
| Signal Red | `#FF3B30` | 255, 59, 48 | 0, 87, 82, 0 | Accent, emphasis, CTAs, Origin Node |

### Usage Rules

**Obsidian** is the primary dark background. Use for: dark-mode interfaces, hero sections, headers, premium presentations, physical brand applications on dark materials.

**Ivory** is the primary light background. Use for: light-mode interfaces, documentation, body text backgrounds, print materials. Never substitute pure white (`#FFFFFF`) for Ivory in AITHORIS brand contexts.

**Signal Red** is the brand accent. Use for: the Origin Node in the logo, primary CTAs, key data highlights, active states in UI, and emphasis in motion sequences. Do not use Signal Red for body text.

### Pairings

| Background | Text | Contrast Ratio | WCAG |
|---|---|---|---|
| Ivory `#F5F5F2` | Obsidian `#0A0A0A` | 18.7:1 | AAA ✓ |
| Obsidian `#0A0A0A` | Ivory `#F5F5F2` | 18.7:1 | AAA ✓ |
| Ivory `#F5F5F2` | Signal Red `#FF3B30` | 4.6:1 | AA ✓ (large text) |
| Obsidian `#0A0A0A` | Signal Red `#FF3B30` | 4.1:1 | AA ✓ (large text) |

Signal Red fails WCAG AA at normal text sizes on both backgrounds. **Do not use Signal Red for body text or small-size text.**

---

## Motion Palette

Reserved exclusively for motion graphics, animations, data visualizations, and infographics. Not for use in static brand contexts.

| Name | HEX | Role in Motion |
|---|---|---|
| Copper | `#FF7A00` | Warm energy; mid-range data emphasis |
| Amber | `#FFB800` | Transition; connection in progress states |
| Orange | `#FF4000` | High energy; directional flow |
| Gold | `#FFD166` | Resolution; completion states |
| Plasma | `#FF2D55` | Bridge between Signal Red and warm motion colors |

### Motion Color Usage
These colors animate the Origin Node concept: they represent the movement of intelligence from origin to connection to synthesis.

The sequence Copper → Amber → Gold suggests forward progress.
The sequence Signal Red → Plasma → Orange suggests energy and activation.

See `BRAND_BOOK/Motion_Identity.md` for specific animation sequences.

---

## Neutral Extensions

For UI contexts requiring additional tonal range:

| Name | HEX | Use |
|---|---|---|
| Obsidian-80 | `#1A1A1A` | Card backgrounds (dark mode) |
| Obsidian-60 | `#2A2A2A` | Border, divider (dark mode) |
| Obsidian-40 | `#555555` | Subdued text, placeholders |
| Ivory-80 | `#E8E8E5` | Borders, dividers (light mode) |
| Ivory-60 | `#DDDDD9` | Subtle backgrounds within light sections |

---

## What to Avoid

- Do not introduce colors outside this system without a documented decision in `Decision_Log.md`
- Do not use gradient fills on the primary logo
- Do not use Signal Red for body text at sizes below 24px
- Do not use motion palette colors in static print materials
- Do not use pure white (`#FFFFFF`) as a substitute for Ivory in brand contexts

---

## Design Token Reference

Production-ready color tokens: `TOKENS/colors.json`

CSS variable names follow the pattern `--aithoris-color-[name]`

See `DESIGN_SYSTEM/Colors.md` for component-level color application.

---

*Related documents: `DESIGN_SYSTEM/Colors.md` | `TOKENS/colors.json` | `BRAND_BOOK/Motion_Identity.md` | `FOUNDATION/Decision_Log.md`*

---

© AITHORIS Brand Book — Color_System.md v2.0
