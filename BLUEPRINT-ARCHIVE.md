# BLUEPRINT ARCHIVE: ASTRA-11 website + Client Portal

Older entries moved out of BLUEPRINT.md. Nothing here was deleted.

## Lessons archived 2026-10-29 (from 2026-10-26)
### The 7-day Testing-mode expiry theory was wrong here (2026-10-26)
- Tried: assumed repeated expired credentials came from the OAuth consent screen in Testing mode.
- Symptom: Audience page showed In production, External, 1/100 users.
- Cause of earlier expirations: unknown.
- Next time: check the Audience page before blaming Testing mode; keep the portal's friendly "unavailable" state for Drive outages.

### Drive folder placement rule (2026-10-26)
- Tried: created client folders at Drive root.
- Symptom: user: everything must be inside the `clientes` folder.
- Fix: parent every create to `1S79RHxER27p08ktW-DUzCOQmonsrcr1L`; reuse the client's existing folder and add subfolders.
- Next time: confirm the target Drive folder (get its ID/link) before the first create; never create at root.

### Upload size ceiling (2026-10-26)
- Tried: 30, 120 and 300 MB mp4 uploads through the n8n webhook.
- Symptom: 300 MB returned HTTP 500 `{"code":0,"message":"There was a problem executing the workflow"}`.
- Cause: unknown (likely n8n body/memory limit).
- Next time: if clients need bigger files, use a Drive-direct upload or share-link flow; the cap is 150 MB in `portal.html` (`MAX_BYTES`).

### Layout bugs found only by measuring (2026-10-26)
- Tried: screenshot review looked fine, full-page screenshot was wider than the viewport (406 vs 390 css px).
- Cause: long filename widened an auto grid column.
- Fix: measured overflowing elements with puppeteer, set `minmax(0,1fr)`.
- Next time: check `scrollWidth` vs `clientWidth` on mobile with long text.

### Throwaway scripts (2026-10-26)
- Put puppeteer scripts in the project root (ESM resolution), delete afterward; macOS `sed -i` needs an empty-string arg, use python for edits.
- Row deletion is not available in the loaded n8n tools: retire data by repointing it (e.g. `client_id: archived-test`). (Superseded 2026-10-27: deleting works through a temp workflow, see "Run, read and clean up data with temporary workflows".)

## Changes archived 2026-10-29
### 2026-10-26
- Created client portal end to end: 4 n8n data tables, 2 workflows, `HTML/portal.html`, i18n strings EN/ES (commit 5903437).
- Added Client Login links to nav (xl+), mobile menu and footer on 4 pages (b02157a).
- New access-code format with client name prefix; normalized matching in the 3 hash nodes of the main workflow; Admin workflow gained Build Code, Is Reset?, Update Client Token, Respond Token Reset nodes and a `resetToken` action; both clients' codes reissued.
- Portal link reader accepts hyphens (5d1a5c0).
- Admin workflow now creates client folders only inside `clientes`; existing client folders got portal subfolders; portal_clients rows repointed.
- Added 150 MB client-side upload cap with message; Global Gate project + 3 milestones entered; test project hidden.
- Added pointer line to `CLAUDE.md`; created this file; updated memory `project_client_portal.md`.
