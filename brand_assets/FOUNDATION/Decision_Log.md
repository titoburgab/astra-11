# Decision Log

## FOUNDATION / Decision_Log.md

> *Every significant decision that affects the direction of AITHORIS is recorded here. This log exists so that future team members can understand why things are the way they are — and so that we can learn from our own decisions over time.*

---

## How to Use This Log

**When to add an entry:**
- Brand positioning decisions that affect the company's identity
- Architectural decisions with lasting technical implications
- Product decisions that involve significant trade-offs
- Design system decisions that affect multiple downstream documents

**What to include:**
- The decision made
- The context that made it necessary
- The options that were considered
- The rationale for the choice made
- The owner of the decision
- Known risks or open questions

---

## Log Format

```
## [DECISION-XXX] — Short Title
**Date:** YYYY-MM-DD
**Category:** Brand | Engineering | Design | Product | AI | Operations
**Status:** Active | Superseded | Under Review
**Owner:** [Name or Role]

### Decision
[What was decided]

### Context
[Why this decision needed to be made]

### Options Considered
1. [Option A] — [brief description and why it was not chosen]
2. [Option B] — [brief description and why it was not chosen]
3. [Chosen option] — [brief description]

### Rationale
[Why this option was selected]

### Risks & Open Questions
- [Known risk or outstanding question]

### Supersedes
[DECISION-XXX or "None"]
```

---

## Decisions

---

## [DECISION-001] — Official Color: Ivory

**Date:** 2026-06-01
**Category:** Design
**Status:** Active
**Owner:** Creative Director

### Decision
The official Ivory value is `#F5F5F2` (warm off-white), not `#FFFFFF` (pure white).

### Context
The visual style guide image displayed `#FFFFFF` for Ivory, while the markdown Style Guide specified `#F5F5F2`. These are meaningfully different values — one is a warm, slightly organic off-white; the other is optically harsh pure white. A decision was required.

### Options Considered
1. **`#FFFFFF` (pure white)** — Maximum contrast against Obsidian. Standard web default. Risk: feels sterile; inconsistent with the brand's warmth and material quality.
2. **`#F5F5F2` (warm off-white)** — Consistent with premium brand aesthetics (similar to Apple's background whites). Adds warmth without reducing legibility.

### Rationale
`#F5F5F2` is consistent with the brand's character: precise but not cold, technical but human. The warmth of off-white is appropriate for a brand that explicitly values human-centered design.

### Risks & Open Questions
- Ensure `#F5F5F2` meets WCAG AA contrast ratio (4.5:1) against all text colors used on this background. Confirmed: `#0A0A0A` on `#F5F5F2` achieves a contrast ratio of approximately 18.7:1. Passes.

### Supersedes
None

---

## [DECISION-002] — Primary Typeface: Söhne; Secondary Typeface: Inter

**Date:** 2026-06-01
**Category:** Design
**Status:** Active
**Owner:** Creative Director

### Decision
The primary typeface is **Söhne** (Klim Type Foundry). The secondary typeface for UI, data, and code contexts is **Inter**.

### Context
The markdown Style Guide listed Söhne as primary with Geist and IBM Plex Sans as alternatives. The visual style guide showed Söhne as primary and Inter as secondary. These are different systems.

### Options Considered
1. **Söhne + Geist** — Strong pairing. Geist is designed for code interfaces. Risk: too developer-facing for all brand contexts.
2. **Söhne + IBM Plex Sans** — IBM Plex has strong engineering associations. Risk: reads as enterprise/corporate rather than premium.
3. **Söhne + Inter** — Inter is the industry standard for readable UI type at all sizes. Neutral enough to not compete with Söhne. Broadly licensed and available.

### Rationale
Inter's neutrality allows Söhne to own the brand's personality. Inter handles legibility work (UI, tables, data) without creating typographic conflict.

### Risks & Open Questions
- Söhne requires a commercial license from Klim Type Foundry. License must be obtained before production use.
- Fallback stack for environments where Söhne is unavailable: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Supersedes
None

---

## [DECISION-003] — Official Tagline: "Connecting Intelligence."

**Date:** 2026-06-01
**Category:** Brand
**Status:** Active
**Owner:** Brand Director

### Decision
The official AITHORIS tagline is **"Connecting Intelligence."**

### Context
The visual style guide presented "Connecting Intelligence." as the primary option with three alternatives: "Engineering Intelligent Systems," "AI That Works," and "Intelligence That Connects." No document in the v1.0 repository formally declared the tagline.

### Options Considered
1. **"Engineering Intelligent Systems"** — Descriptive and precise. Risk: functional rather than memorable; reads as a category label.
2. **"AI That Works"** — Direct and confident. Risk: too generic; positions against a low bar.
3. **"Intelligence That Connects"** — Inverse of the chosen option. Risk: passive construction; the subject does the connecting to the brand, rather than the brand doing the work.
4. **"Connecting Intelligence."** — Action-oriented. Brand is the actor. "Connecting" suggests relationships, networks, and systems. "Intelligence" is the what and the who. The period signals confidence and finality.

### Rationale
"Connecting Intelligence." works at multiple levels: AITHORIS connects AI capabilities into organizational systems; it connects the intelligence already present in organizations into accessible, usable form; and the name AITHORIS itself evokes connection through its visual language (the Origin Node and its connections). The tagline and the visual identity reinforce each other.

### Risks & Open Questions
- Trademark availability should be confirmed before public launch

### Supersedes
None

---

## [DECISION-004] — Motion Color Addition: Plasma (#FF2D55)

**Date:** 2026-06-01
**Category:** Design
**Status:** Active
**Owner:** Creative Director

### Decision
**Plasma (#FF2D55)** is added to the Motion Color palette alongside Copper, Amber, Orange, and Gold.

### Context
Plasma appeared in the visual style guide image but was absent from all markdown documents. It is a distinctive warm pink-red that extends the signal red family into higher-energy motion contexts.

### Rationale
Plasma bridges Signal Red and the warmer motion colors. It provides a transition color for motion sequences that move between the primary palette and the motion palette. Including it in the official documentation prevents inconsistent usage.

### Risks & Open Questions
- Plasma should not be used in static brand contexts — motion only

### Supersedes
None

---

*New entries should be appended to this log, never deleted.*

---

© AITHORIS Foundation Repository — Decision_Log.md v2.0
