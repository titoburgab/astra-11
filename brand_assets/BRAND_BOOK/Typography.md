# Typography

## BRAND_BOOK / Typography.md

> *Typography carries the personality of AITHORIS. The type system is precise, confident, and human — it communicates engineering rigor without coldness.*

---

## Typeface Decision

See `FOUNDATION/Decision_Log.md` — DECISION-002 for full rationale.

---

## Primary Typeface: Söhne

**Foundry:** Klim Type Foundry
**License:** Commercial license required. Obtain before production use.
**Website:** klim.co.nz

Söhne is a contemporary grotesque inspired by the pre-digital era of Swiss typography. It combines geometric precision with humanist warmth — exactly the balance AITHORIS requires. It is confident without being cold, technical without being sterile.

**Weights used:**
- Söhne Light (300) — Large display text, editorial contexts
- Söhne Regular (400) — Body text, documentation
- Söhne Medium (500) — Sub-headings, UI labels, emphasis
- Söhne Bold (700) — Headlines, strong emphasis

**Never use:** Söhne Black, italic variants in UI contexts

---

## Secondary Typeface: Inter

**Foundry:** Rasmus Andersson
**License:** Open Font License (OFL) — free for all use
**Website:** rsms.me/inter

Inter is the secondary typeface for UI components, data tables, code references, captions, and contexts where Söhne's character would compete with dense functional content.

**Weights used:**
- Inter Regular (400) — Body, labels, captions
- Inter Medium (500) — Data emphasis, UI labels
- Inter SemiBold (600) — Strong UI emphasis

---

## Type Scale

Based on a 1.25 (Major Third) modular scale, anchored at 16px base.

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `display-xl` | 72px / 4.5rem | 1.05 | Söhne Light | Hero headlines |
| `display-lg` | 56px / 3.5rem | 1.1 | Söhne Light | Section headlines |
| `display-md` | 40px / 2.5rem | 1.15 | Söhne Regular | Sub-section headers |
| `heading-lg` | 32px / 2rem | 1.2 | Söhne Medium | H1 |
| `heading-md` | 24px / 1.5rem | 1.3 | Söhne Medium | H2 |
| `heading-sm` | 20px / 1.25rem | 1.35 | Söhne Medium | H3 |
| `body-lg` | 18px / 1.125rem | 1.6 | Söhne Regular | Lead paragraph |
| `body-md` | 16px / 1rem | 1.65 | Söhne Regular | Body text (default) |
| `body-sm` | 14px / 0.875rem | 1.6 | Inter Regular | Secondary text, captions |
| `label` | 12px / 0.75rem | 1.4 | Inter Medium | Labels, tags, metadata |
| `code` | 14px / 0.875rem | 1.6 | IBM Plex Mono | Code blocks, technical strings |

---

## Fallback Stack

For environments where Söhne is not available:

```css
--font-primary: "Söhne", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-secondary: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "IBM Plex Mono", "Fira Code", "Cascadia Code", monospace;
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

---

## Rules

**Do:**
- Use Söhne for all headline and brand-voice contexts
- Use Inter for dense UI and data contexts
- Set body text at minimum 16px
- Maintain line height between 1.5–1.7 for body text
- Use letter-spacing adjustments for optical corrections at display sizes

**Do not:**
- Mix more than two typeface families in any single context
- Use decorative or futuristic display fonts — they contradict the brand's engineering character
- Use italic Söhne for emphasis in UI — use weight instead
- Set body text smaller than 14px in production interfaces

---

## Token Reference

Production-ready typography tokens: `TOKENS/typography.json`

CSS variable names follow the pattern `--aithoris-text-[token]`

---

*Related documents: `DESIGN_SYSTEM/Typography.md` | `TOKENS/typography.json` | `BRAND_BOOK/Color_System.md`*

---

© AITHORIS Brand Book — Typography.md v2.0
