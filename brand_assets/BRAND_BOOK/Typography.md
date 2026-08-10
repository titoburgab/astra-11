# Typography

## BRAND_BOOK / Typography.md

> *Typography carries the personality of ASTRA-11. The type system is precise, confident, and human — it communicates engineering rigor without coldness.*

---

## Typeface Decision

See `FOUNDATION/Decision_Log.md` — DECISION-005 for full rationale.

---

## Primary Typeface: Sora

**Foundry:** Community-published (Google Fonts)
**License:** Open Font License (OFL) — free for all use
**Website:** fonts.google.com/specimen/Sora

Sora is a geometric sans with a distinctive wide-tracked wordmark treatment. It combines geometric precision with a confident, technical character — exactly the balance ASTRA-11 requires. It is confident without being cold, technical without being sterile.

**Weights used:**
- Sora ExtraLight (200) / Light (300) — Wordmark, large display text, editorial contexts
- Sora Regular (400) — Sub-section headers
- Sora Medium (500) — Sub-headings, UI labels, emphasis
- Sora Bold (700) / ExtraBold (800) — Headlines, strong emphasis

**Never use:** italic variants in UI contexts

---

## Secondary Typeface: Inter

**Foundry:** Rasmus Andersson
**License:** Open Font License (OFL) — free for all use
**Website:** rsms.me/inter

Inter is the secondary typeface for body copy, UI components, data tables, code references, and contexts where Sora's character would compete with dense functional content.

**Weights used:**
- Inter Regular (400) — Body, labels, captions
- Inter Medium (500) — Data emphasis, UI labels
- Inter SemiBold (600) — Strong UI emphasis

---

## Type Scale

Based on a 1.25 (Major Third) modular scale, anchored at 16px base.

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `display-xl` | 72px / 4.5rem | 1.05 | Sora Light | Hero headlines |
| `display-lg` | 56px / 3.5rem | 1.1 | Sora Light | Section headlines |
| `display-md` | 40px / 2.5rem | 1.15 | Sora Regular | Sub-section headers |
| `heading-lg` | 32px / 2rem | 1.2 | Sora Medium | H1 |
| `heading-md` | 24px / 1.5rem | 1.3 | Sora Medium | H2 |
| `heading-sm` | 20px / 1.25rem | 1.35 | Sora Medium | H3 |
| `body-lg` | 18px / 1.125rem | 1.6 | Inter Regular | Lead paragraph |
| `body-md` | 16px / 1rem | 1.65 | Inter Regular | Body text (default) |
| `body-sm` | 14px / 0.875rem | 1.6 | Inter Regular | Secondary text, captions |
| `label` | 12px / 0.75rem | 1.4 | Inter Medium | Labels, tags, metadata |
| `code` | 14px / 0.875rem | 1.6 | JetBrains Mono | Code blocks, technical strings |

---

## Fallback Stack

For environments where Sora is not available:

```css
--font-primary: "Sora", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-secondary: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
```

---

## Letter Spacing

| Context | Value |
|---|---|
| Display (xl, lg) | -0.02em |
| Headings | -0.01em |
| Body | 0 |
| Labels and caps | +0.08em |
| All-caps labels | +0.12em |
| Wordmark lockup | +0.6em (logo only — see `BRAND_BOOK/Logo_Construction.md`) |

---

## Rules

**Do:**
- Use Sora for the wordmark, all headline, and brand-voice contexts
- Use Inter for body copy, dense UI, and data contexts
- Set body text at minimum 16px
- Maintain line height between 1.5–1.7 for body text
- Use letter-spacing adjustments for optical corrections at display sizes

**Do not:**
- Mix more than two typeface families in any single context
- Use decorative or futuristic display fonts — they contradict the brand's engineering character
- Use italic Sora for emphasis in UI — use weight instead
- Set body text smaller than 14px in production interfaces
- Apply the wordmark's wide tracking to body or UI type — it is a logo-only treatment

---

## Token Reference

Production-ready typography tokens: `TOKENS/typography.json`

CSS variable names follow the pattern `--astra11-text-[token]`

---

*Related documents: `DESIGN_SYSTEM/Typography.md` | `TOKENS/typography.json` | `BRAND_BOOK/Color_System.md`*

---

© ASTRA-11 Brand Book — Typography.md v3.0
