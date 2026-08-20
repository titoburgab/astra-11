# Booking CTA Integration — ASTRA-11 Website

## What this is
ASTRA-11 has a live, automated consultation-booking system built in n8n (separate project:
"Automated Book System"). The website's job is just to link to it — no embedding, no API
calls, no backend work needed on the astra-11.com side.

## The link
https://n8n-wl35.srv1826775.hstgr.cloud/form/book-consultation

## How this was decided
- The booking form itself (date/time picker, availability, confirmation emails) is fully
  self-serve and already built/tested on the n8n side.
- astra-11.com's existing CTA already reads "Book a session," which confirms self-serve is
  the right model (no manual review/approval step in between).
- Simplest integration = a plain link/button to the form's public URL. Considered but not
  chosen: iframe embed (needs n8n framing config) or a branded subdomain like
  book.astra-11.com (needs DNS work) — both optional upgrades later, not required now.

## Implementation
```html
<a href="https://n8n-wl35.srv1826775.hstgr.cloud/form/book-consultation" class="cta-button">
  Book a Session
</a>
```
- Open in the **same tab** (not a new tab) — it's a short form, not an external site visit.
- No query params or tokens needed.

## Known future change (doesn't affect this link)
The booking form will soon get 1-2 extra qualifying questions (e.g. "what are you looking to
build/solve?") added on the n8n side, plus the confirmation emails will switch from a Gmail
sender to a real @astra-11.com address via Hostinger SMTP. Neither change affects this URL —
it stays valid as-is.
