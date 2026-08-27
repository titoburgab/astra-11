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

## Spanish-speaker checkbox — added 2026-08-19, removed 2026-08-20
The `spanishRep` checkbox ("Idioma" / "Español") on the booking form was removed. It was
originally added because a *separate* bug made the confirmation email always render in
English regardless of language — the checkbox was a workaround so the business team could at
least be told a booking needed Spanish handling. That underlying bug is now fixed (see below),
so `lang` is a fully reliable, single-source-of-truth signal end-to-end, and a manual checkbox
that could drift out of sync with it (checked on an English session, unchecked on a Spanish
one) was judged redundant. "Email Business Owner - New Booking" now derives the "Language:
Español" line automatically from `$('Booking Request').item.json.formQueryParameters?.lang`
instead.

## 2026-08-20 bug fix: language was silently defaulting to English almost everywhere
Every downstream node's language ternary (confirmation email, "Choose a Time," booking
confirmation, decline/expired/no-availability screens, `Lock Booking`'s stored `lang` column)
referenced `$('Booking Request').item.json.query?.lang` — but the trigger's actual output field
is `formQueryParameters`, not `query` (confirmed across multiple executions). `query` was
always `undefined` there, so every one of those ternaries silently fell through to English,
including the client confirmation email — the entire original reason the checkbox above was
added. Fixed by correcting every reference to `formQueryParameters?.lang`. Verified end-to-end
live (via the actual site CTA, both languages) after the fix: every screen — including
"Choose a Time"/"Elige un horario," the confirmation email, and the whole cancel/reschedule
flow — now stays consistently in one language throughout a session. The Manage Booking
workflow's own screens were already written correctly (`$('Evaluate Booking').item.json.lang`);
only `Evaluate Booking`'s own read of the trigger's query params had the same `query` vs
`formQueryParameters` bug, now fixed.

Also added: a self-healing check (`Verify Event Still Exists` → `Is Slot Taken?`) in both the
booking and reschedule slot-taken checks, so a booking row whose Google Calendar event was
deleted outside the app (e.g. manually, during testing) can no longer permanently block that
time slot — it auto-corrects on the next lookup instead of requiring manual database cleanup.

## 2026-08-27 incident: infinite retry loop on bad test data
`ASTRA-11 Contact Form - Booking Follow-up` (`hNuYbO89faxE7Ac3`) was emailing a "Workflow
failed — No recipients defined" alert every 30 minutes (265 error executions total). Root
cause: 3 leads from 2026-08-19/20 build-time testing (ids 14, 15, 16 — e.g. name "TOTO",
email "BUBU") had non-email garbage in the `email` column of the `ASTRA-11 Contact Leads`
data table. `Send Booking Follow-up Email` failed on every attempt, which meant
`Mark Follow-up Sent` (the node that flips `booking_email_sent` to `true`) never ran — so the
3 rows stayed "pending" and were picked up again by every 30-minute schedule trigger, forever.

Fixed in two parts:
- Cleaned up the 3 rows (marked `booking_email_sent: true` via a pinned test run so no real
  email was sent, letting the real `Mark Follow-up Sent` Data Table write go through).
- Added a permanent guard: `Filter Due Follow-ups` now computes an `emailValid` flag (regex
  check), and a new `Email Valid?` IF node routes invalid-email leads straight to
  `Mark Follow-up Sent` (skipping the send attempt) instead of letting a bad address retry
  forever. A malformed email can no longer jam this queue.

## 2026-08-27 fix: business notifications missing hello@astra-11.com
Booking business-owner notification emails (`Email Business Owner - New Booking` in
`Booking System - Consultation Booking`, and `Email Business - Cancelled` /
`Email Business - Rescheduled` in `Booking System - Manage Booking`) had `sendTo` set to
only `hola.astra11@gmail.com`. The regular contact form (`ASTRA-11-WEB — Contact Form
Intake`) sends to `hello@astra-11.com` instead, so the two channels had drifted out of sync
and the business inbox at `hello@astra-11.com` never learned about bookings. Fixed by
setting `sendTo` on all three Gmail nodes to `hola.astra11@gmail.com, hello@astra-11.com`
(Gmail node's `sendTo` supports comma-separated multiple recipients). Both workflows
republished.

## Known future change (doesn't affect this link)
The booking form will soon get 1-2 extra qualifying questions (e.g. "what are you looking to
build/solve?") added on the n8n side, plus the confirmation emails will switch from a Gmail
sender to a real @astra-11.com address via Hostinger SMTP. Neither change affects this URL —
it stays valid as-is.
