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
Live as of 2026-08-20: the `nav.cta` "Book a Session" button (header + mobile menu, all 4
pages) links to the form via `data-booking-link` in [i18n/i18n.js](../i18n/i18n.js), which sets
the `href` on every language switch:
```html
<a href="https://n8n-wl35.srv1826775.hstgr.cloud/form/book-consultation" data-booking-link class="btn btn-primary" data-i18n="nav.cta">
  Book a Session
</a>
```
- Open in the **same tab** (not a new tab) — it's a short form, not an external site visit.
- **`?lang=en` / `?lang=es` IS required** (supersedes the original "no query params needed"
  call): the n8n form reads `$json.query.lang` to pick its title/labels and, more importantly,
  to localize the client confirmation email's subject/body. `i18n.js` appends the site's
  current language automatically — do not strip it.
- Other CTAs on these pages ("Schedule a Discovery Call," "Talk to a Founder," "Start a
  Conversation") still point at the on-page contact form (`#contact`) and were left as-is —
  only the literal "Book a Session" CTA was in scope for this integration.

## Spanish-speaker checkbox (decided 2026-08-19)
Translating the confirmation email dynamically end-to-end was judged too complex, so instead:
the n8n form has a `spanishRep` checkbox ("Idioma" / "Español"). When checked, the
"Email Business Owner - New Booking" Gmail node appends "Español" to the internal notification
sent to `hola.astra11@gmail.com`, so the team knows to handle that booking in Spanish — no
email-template translation needed for that path. (The client-facing confirmation email is
separately localized via `?lang=es`, covering the templated boilerplate; the checkbox exists
for anything beyond that, e.g. needing a Spanish-speaking rep on the actual call.)

## Known future change (doesn't affect this link)
The booking form will soon get 1-2 extra qualifying questions (e.g. "what are you looking to
build/solve?") added on the n8n side, plus the confirmation emails will switch from a Gmail
sender to a real @astra-11.com address via Hostinger SMTP. Neither change affects this URL —
it stays valid as-is.
