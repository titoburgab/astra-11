# Motion Identity

## BRAND_BOOK / Motion_Identity.md

> *Motion at ASTRA-11 communicates intelligence in action — calm, intentional, and purposeful. Every animation has a reason.*

---

## Motion Philosophy

Motion is not decoration. At ASTRA-11, every animation serves one of three purposes:

1. **Orientation** — Helping users understand where they are and what has changed
2. **Feedback** — Confirming that a system has received input and is processing
3. **Narrative** — Communicating the brand's character at moments of impression

Animation that does not serve one of these purposes should not exist.

---

## Core Motion Values

**Calm** — No sudden or jarring transitions. The system should feel like it is thinking, not reacting.

**Intentional** — Every motion element was placed deliberately. Nothing animates by default.

**Smooth** — Transitions follow natural easing curves. Mechanical, linear animations are not ASTRA-11.

**Functional** — Motion supports the user's task. It does not interrupt or delay.

---

## Timing Standards

| Token | Duration | Use |
|---|---|---|
| `motion-instant` | 80ms | Immediate feedback (hover, active states) |
| `motion-fast` | 160ms | Small UI transitions (tooltips, badges) |
| `motion-base` | 240ms | Standard transitions (modals, panels) |
| `motion-slow` | 400ms | Page transitions, revealing sections |
| `motion-narrative` | 600–1200ms | Brand animations, Origin Node sequences |

---

## Easing Curves

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most UI transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the screen |
| `ease-emphasis` | `cubic-bezier(0.2, 0, 0, 1)` | Brand moments, emphasis animations |

---

## Origin Node Animation Specification

See `BRAND_BOOK/Origin_Node_Concept.md` for the full narrative description.

### Technical Parameters

**State 1: Origin**
```
element: origin-node
opacity: 0 → 1
duration: motion-slow (400ms)
easing: ease-enter
```

**State 2: Pulse**
```
element: ripple-ring
transform: scale(1) → scale(2.5)
opacity: 0.8 → 0
duration: 1200ms
easing: ease-exit
iterations: 3
delay between iterations: 400ms
```

**State 3: Connections**
```
element: connection-line[n]
stroke-dasharray: 0 → line-length
duration: 600–900ms (staggered +150ms per line)
easing: ease-standard
child node appearance: fade-in, duration: 200ms, delay: line-duration - 200ms
```

**State 4: Collapse**
```
element: connection-line[n]
stroke-dasharray: line-length → 0
direction: tip → origin
duration: 500ms
easing: ease-exit
child nodes: opacity 1 → 0, duration: 200ms, starts 100ms before line retraction
```

**State 5: Essence**
```
element: astra11-logo
clip-path or stroke-dasharray: 0 → full
origin: from origin-node coordinates
duration: 600ms
easing: ease-enter
```

---

## Loading State (Pulse Only)

Used in product interfaces to communicate active processing.

The Origin Node pulses 2–3 times, then rests. If processing continues, pulse resumes after a 1-second pause.

Do not use spinning indicators in ASTRA-11 interfaces. The pulse is the ASTRA-11 loading pattern.

---

## Motion Colors in Animation

The motion palette (Copper, Amber, Ember, Gold, Plasma) animates through the Origin Node sequences in this order:

**Activation sequence:** Orange (primary accent) → Plasma → Ember
**Progress sequence:** Ember → Amber → Copper
**Resolution sequence:** Copper → Gold

Do not apply motion colors to static elements.

---

## Reduced Motion

All ASTRA-11 animations must respect `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  /* Replace transitions with instant state changes */
  /* Replace pulsing animations with static states */
  /* Preserve state communication — remove motion, not information */
}
```

---

## Animation Standards

Professional, purposeful animation is encouraged across all ASTRA-11 digital experiences. Animation should elevate the brand and communicate intelligence in motion — not merely decorate.

**Encouraged:**
- Scroll-triggered section reveals using fade and translate combinations
- Staggered entrance animations for lists, cards, and service grids
- Smooth page transitions and route changes
- Hero animations featuring the Origin Node sequence on load
- Hover micro-interactions on interactive elements (cards, buttons, links)
- Parallax depth effects on hero and feature sections
- Typewriter or character-reveal effects for key headlines
- Continuous ambient animations where they reinforce the brand narrative (e.g., a slowly pulsing Origin Node in a background or CTA section)

**Standards:**
- All animations must feel smooth and intentional — never mechanical or abrupt
- Prefer easing curves over linear timing: ease-out for entrances, ease-in for exits
- Stagger delays between related elements: 80–150ms per item
- Hero and narrative sequences may use durations up to 1200ms
- UI transitions remain snappy: 160–400ms
- Ambient loops are permitted when subtle and non-distracting
- All animations must respect `prefers-reduced-motion` — provide static fallbacks

**Avoid:**
- Bouncing, rubber-band, or cartoonish elastic effects
- Animations that block content or delay user interaction
- Excessive simultaneous animations that compete for attention
- Motion that serves no communicative or brand purpose

---

*Related documents: `BRAND_BOOK/Origin_Node_Concept.md` | `TOKENS/motion.json` | `DESIGN_SYSTEM/Motion.md` | `DESIGN_SYSTEM/Accessibility.md`*

---

© ASTRA-11 Brand Book — Motion_Identity.md v2.0
