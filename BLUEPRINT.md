# BLUEPRINT: ASTRA-11 website + Client Portal

_Last updated: 2026-10-30 (Global Gate portal milestones: Setup and Brand marked Done, Website marked In progress; before that, 2026-10-29: UX/UI + Web Design services, Current clients portfolio section and SEO tags)_

## 1. Working on
**2026-10-30:** Keeping Global Gate's portal progress current. Tito asked to mark Setup and Brand as done and Website as in progress. Done in the `portal_milestones` data table (no repo change, nothing to commit). Global Gate's milestones are now: Setup `done`, Brand `done`, Website `active`, Trade Intelligence `upcoming`.

**2026-10-29:** Making the public ASTRA-11 site (astra-11.com) show design AND AI instead of AI only. Tito added UX/UI Design and Web Design as services (based on his broadcast/design background) and has three real clients in development: Global Gate Consulting (import & export brokerage), CUATRO (marketing agency) and Las Recetas Mágicas de Valentina (pastry chef). Design (style guide / design system / landing page, built in Figma Make and published as figma.site pages) is delivered; websites, AI integrations and AI automations are in development. Everything below for 2026-10-29 is pushed to `main` (e36c8aa, 2edd2b6, 75cc327, d41012e, 078b4d1). Nothing from the website session is uncommitted except this file.

**2026-10-28 (earlier session, client portal):** Getting Global Gate's two finished brand deliverables (Style Guide v0.2 and Design System v0.1, plain HTML+CSS in `/Volumes/ASTRA11-v1/CLIENTS/USA/GLOBAL GATE CONSULTING/GGC_Website/`) into the portal for client review and approval. Decision: English only for this client; deliver as image-based PDFs (exact visual match with the HTML) rather than adding HTML support to the portal. Both reviews now exist as `pending`; the client has NOT been told yet (Tito sends the email himself).

Earlier context: building a private **client portal** for ASTRA-11's first clients (GLOBAL GATE CONSULTING and CUATRO): clients log in with a private access code/link, see project progress and milestones, download deliverables and upload files. Storage is Google Drive (hola.astra11@gmail.com), backend is n8n (no new infrastructure). This session focused on **Global Gate**: clients can view/download deliverables (including Google Sheets/Docs) and, new, **review and approve work in progress**: a "For your review" section where the client opens a file, comments, approves or requests changes, with a confirmation email to the client and an activity email to hello@astra-11.com. Latest: Global Gate's project scope list is now in the portal as 4 milestones with bullet items (pushed as 15cdf36). Next: create the first real review for Global Gate (their System design file) once Tito names the file, then attach deliverables/links to milestones (needs the brand guide's delivery format).

## 2. Where we are
### Website: services, clients, SEO (2026-10-29)
- Done:
  - Services section (`HTML/index.html`, `i18n/en.js`, `i18n/es.js`): added card 06 UX/UI Design and card 07 Web Design (6+6 grid, row 3), keys `services.card6.*` / `services.card7.*`, stagger CSS for nth-child 6/7. Checked locally in puppeteer, EN/ES desktop + mobile (7 cards, no horizontal overflow). tested locally. Not looked at on the live page by me.
  - Chatbot: n8n workflow `ASTRA-11-WEB — Chatbot` (id `ooF769omDhj15LTP`, webhook `astra11-chat`): system prompt now lists services 6 UX/UI Design and 7 Web Design with their deliverables (rule kept: never invent pricing/portfolio for design work). Published, active version `9bfed5bd-b55f-46de-a239-be69caf0b553` (replaced later that day by `fb523ebd-5ed3-499e-adf1-08c0d893283e` after the stray-copy cleanup). Live webhook tested EN ("Do you do UX/UI design?") and ES ("¿Diseñan sitios web?"): both answered yes with correct details, no lead created. tested live.
  - Portfolio (`HTML/portfolio.html`): now hero (+ jump links) -> `#clients` "Current clients" (3 client cards with one screenshot each, industry, what we're doing, status "Design delivered" / "Website and AI in development", links to the live figma.site pages) -> `#systems` heading "Systems we've built" -> "How to Read This" box (now says "Every automation project below") -> the 7 automation projects (Dashboard first) -> closing CTA. Keys `portfolio.clients.*`, `portfolio.systems.*`; hero eyebrow changed to "Our work"/"Nuestro trabajo". Six screenshots in `brand_assets/assets/design-*.jpg`. tested locally (EN/ES desktop, EN/ES mobile, no overflow, no script errors).
  - Positioning copy: homepage title "AI Engineering and Design", new meta descriptions (home, about, portfolio), About intro (`about.whoWeAre.body1`), footer label "AI Engineering & Design Agency" (+ hard-coded fallbacks and logo alt text on index/about/portfolio/privacy), EN + ES. The live site (astra-11.com and /HTML/portfolio.html) was fetched and shows the new homepage title/description and portfolio description. tested live for those; About meta/intro and footer not fetched live: untested live.
  - SEO (`index/about/portfolio`): canonical URLs, Open Graph + Twitter tags, preview image `brand_assets/assets/og-image.png` (1200x630), JSON-LD on the homepage (Organization with 7 service offers + WebSite). `sitemap.xml` now includes about.html and lastmod dates. JSON and XML parse; pages load without script errors. untested live (not run through LinkedIn Post Inspector / Google Rich Results).
- In progress / unfinished:
  - Testimonials: none yet. Each client card has an HTML comment `<!-- Testimonial: add a <blockquote> here ... -->`. Plan: ask each client 3 questions (problem before / what we delivered / what changed) and get written permission (an email reply) for name, business and quote; process-type quotes are fine now, outcome quotes wait for a milestone. No placeholder quotes. unfinished
  - Client permission: Tito confirmed he has permission from the clients (2026-10-29). resolved
  - Statuses are an assumption: all three clients show "Design delivered · Website and AI in development"; Tito did not correct them after seeing the cards. CUATRO's contract was still being settled on 2026-10-27 (see portal notes below). Keep in mind for updates.
  - Tito reviewed the site in Spanish and English ("It looks great in Spanish and English") and said the Spanish client-card lines work (2026-10-29), which covers the ES `portfolio.clients.*.what` lines and the "Our work" hero label. resolved
  - Client card descriptions for CUATRO and Valentina are generic. The live pages show more (CUATRO = independent advertising agency, bold red/dark brand; Valentina = baking and community site, pastel palette, in Spanish); Tito was offered a sharper version, no answer. unfinished
  - Screenshots show things Tito may want to know about: Global Gate pages say "Style Guide v0.2 DRAFT" / "Design System v0.1 DRAFT"; the Valentina landing page screenshot includes its V1-V5 version switcher.
  - JSON-LD has no `logo` (Google does not accept SVG; a square PNG logo is needed) and no `sameAs` (no social profile URLs on the site). unfinished
  - Chatbot node `Concierge Agent`: the stray older prompt copy (`parameters.options.systemMessage`, 5,689 chars) was cleared on 2026-10-29 with `updateNodeParameters {parameters: null}` (the key remains as `null`; n8n cannot delete it). Published; active version now `fb523ebd-5ed3-499e-adf1-08c0d893283e`. Live webhook re-tested EN ("Do you do web design?") and ES ("¿Hacen diseño UX/UI?"): correct answers, no lead created. tested live. resolved
  - The preview image and tags are English only (crawlers do not run the i18n JavaScript). Known limit.
- Next step (website): (1) collect the three testimonials with permission; (2) after deploy, open the live portfolio and About page and run astra-11.com through LinkedIn Post Inspector / opengraph.xyz (link previews are cached by the apps); (3) optionally sharpen CUATRO/Valentina card text and add a PNG logo + social URLs to the JSON-LD; (4) when Tito sends more Figma links, add them as client cards (a finished project can become a case study with results). Tito said "Got it, let's do step 3" and all three steps are done.

### Client portal (2026-10-30, 2026-10-28 and earlier)
- Done (tested against live n8n endpoints):
  - 2026-10-30: Global Gate milestone states updated in `portal_milestones` (project `ggc-web-development`): Setup (`id` 1) `done`, Brand (`id` 2) `done`, Website (`id` 3) `active`, Trade Intelligence (`id` 4) still `upcoming`. Setup and Brand were read back from the table (all 4 rows) after the update; Website's update returned the row with `state: active` (not read back separately). Portal state values are `done | active | upcoming` (`active` shows as "In progress"). tested (data). NOT viewed on the live portal with Global Gate's code, so the green Done / In progress labels are untested live.
  - Portal page `HTML/portal.html` (EN/ES), login gate, project track + milestones, files list, drag-and-drop upload with progress, download. Screenshot-checked desktop/mobile, EN/ES. Tested: tested.
  - n8n workflows published: `ASTRA-11-WEB — Client Portal` (data/upload/download) and `ASTRA-11-WEB — Client Portal Admin` (createClient, upsertProject, upsertMilestone, resetToken). Tested: data, upload, download, wrong-client isolation (404), bad file type (400), 401 on bad code, resetToken (incl. unknown client), mp4 30 MB and 120 MB OK, 300 MB fails.
  - Access codes: per-client, format `<ClientName>-xxxxxxxx-xxxxxxxx-xxxxxx`, case/hyphen/space-insensitive, stored only as SHA-256 hash. Both clients have new-format codes. Typed-in login tested in a browser against the live backend. tested.
  - Drive: all folders live inside the `clientes` folder (id `1S79RHxER27p08ktW-DUzCOQmonsrcr1L`). Subfolders `Delivered by ASTRA-11` and `Uploaded by client` created inside each client's existing folder (Global Gate Consulting, cuatro); portal_clients rows point to them. tested.
  - Global Gate data: project "Global Gate Consulting Web Development" (id `ggc-web-development`), Kickoff, 0%. Milestones replaced 2026-10-27 (see below): 4 milestones (since 2026-10-30: Setup and Brand Done, Website In progress, Trade Intelligence Upcoming). Test project retired by moving it to client `archived-test`. tested via data endpoint.
  - Site links: "Client Login" (EN) / "Clientes" (ES) added to nav (xl+ only), mobile menu and footer on index/about/portfolio/privacy. Screenshot-checked.
  - Git: six commits pushed to `main` (5903437 portal page, b02157a nav links, 5d1a5c0 hyphen fix, 46feef8 file viewer + native-file badges, 860b4c4 sheet preview as PDF, 9585a5e review and approval flow). Later commits: 568b29c (CLAUDE.md pointer), 15cdf36 (milestone bullet lists). Only `BLUEPRINT.md` is uncommitted, by design.
  - 2026-10-27: Global Gate uploaded a file through the live portal and it worked (tested by Tito). That file (or a similar PDF, "Logo editable Global Gate.pdf") now sits in the delivered folder; "From you" shows "No uploads yet". tested.
  - 2026-10-27: Download of Google-native files fixed in the main workflow (Sheets to xlsx, Docs/Slides to PDF, Drawings to PNG); published. Tito downloaded both the PDF and the Google Sheet ("Global Gate Consulting - Info") from the live portal and both worked. tested.
  - 2026-10-27: View button (in-page viewer for PDF, png/jpg/gif/webp, mp4), SHEET/DOC/SLIDES/DRAW badges, extension added to exported names, mobile row layout (buttons under the file name). Pushed in 46feef8. Tested with a mocked API in puppeteer (desktop + mobile, Esc closes, no horizontal overflow); NOT yet checked on the live site after deploy. untested live.
  - 2026-10-27: Review/approval feature built and pushed (9585a5e). Backend: new workflow `ASTRA-11-WEB — Client Portal Reviews` (endpoints `astra11-portal-reviews` = list reviews + comments, `astra11-portal-review-action` = comment / approve / changes). Tested live with temporary test clients (list, bad token 401, comment, changes without text 400, missing name 400, unknown review 400, approve, comment-after-approve `closed` 400, request changes; activity email confirmed SENT). UI tested in puppeteer against the live backend (desktop + mobile, no overflow, validation messages, EN/ES switch keeps drafts, two-step approve, viewer opens from a review). Tito then tested it himself on the local page with a real Global Gate test review on `DS Test.png`: "It worked". tested.
  - 2026-10-27: Client confirmation email on approve / request changes (not on plain comments): sent to `portal_clients.email` in the client's `lang`, greets the approver by the typed name, reply-to hello@astra-11.com, links to the portal page without the code. Skipped quietly if the email is empty. Tested with temp clients (ES client with email: Spanish email built and sent to hello@; no-email client: skipped, response OK; typed `<b>` in the name was escaped). tested. NOT live-tested to Global Gate's real address.
  - 2026-10-27: Global Gate `email` set to `jenny.m.ash@gmail.com` (given by Tito "for now"). CUATRO email still empty (no confirmations sent). tested (row read back).
  - 2026-10-27 (evening): Global Gate scope list added to the portal. Old 3 milestones deleted, 4 new rows in `portal_milestones` (Setup, Brand, Website, Trade Intelligence; ES Preparación, Marca, Sitio web, Trade Intelligence), all `upcoming`, no dates, items one per line in `note_en`/`note_es`. Read back through a temp workflow: exactly 4 rows for `ggc-web-development`. tested (data). `portal.html` renders multi-line notes as bullets (`.ms-items`); tested with a mocked API in puppeteer, EN/ES at 1440 and 390 px, 19 bullets, no horizontal overflow. Committed and pushed as 15cdf36 (only `portal.html`, by name). NOT viewed on the live page with Global Gate's real code. untested live.
  - All test data (temp clients `zz-*`, test reviews/comments, Global Gate test review `ggc-test-1`) was deleted and the temp workflows archived.
  - 2026-10-28: Two PDFs made from the Global Gate HTML pages (full-page 3x Chrome captures, embedded images 4320 px wide, one continuous page each; style guide 5.1 MB, design system 3.4 MB). Tito looked at them ("much better" after 3x) and uploaded them himself to Global Gate's `Delivered by ASTRA-11` folder as `GGC-Style-Guide.pdf` (Drive id `1mD10sIiZhAuNb8I7IloyH-yrxeDYorka`) and `GGC-Design-System.pdf` (id `1BqvV0gHuXTC6hgwyn_DAEyuMvvn0V7Cc`). tested (visual check by Tito).
  - 2026-10-28: Two rows added to `portal_reviews` (insert returned insertedCount 2): `ggc-style-guide-r1` ("Style Guide") and `ggc-design-system-r1` ("Design System"), client `global-gate-consulting-14d6`, round 1, status `pending`, `requested_at` 2026-10-28T15:00:00Z, `title_es` = same English text, `decided_*` empty, no ASTRA first comment. Global Gate `lang` read back as `en`, `email` present. untested live (rows not read back; not viewed in the portal with Jenny's code).
  - 2026-10-28: NO email or message was sent to Jenny. Tito asked for a draft; I wrote it in chat (subject "Your Style Guide and Design System are ready for review", portal link, `[ACCESS CODE]` placeholder, sign-off "Best regards, ASTRA-11 Team" per Tito). Not saved to a file, no Gmail draft created. unfinished
- In progress / unfinished:
  - Global Gate reviews for Style Guide and Design System: created 2026-10-28 (see above). The earlier idea of a "System design" review: unclear if it is one of these two files or a third one; Tito did not answer. unfinished
  - Optional first ASTRA comment on each new review (draft: "Please review the colors, typography and logo usage. Approve, or tell us what to change." / for the Design System "Please review the components: buttons, forms, cards, navigation and the rest..."): Tito has not answered; none added. Would be a row in `portal_comments` (`author_type` astra, `kind` comment). unfinished
  - Email to Jenny: Tito sent it himself (he confirmed "Done" on 2026-10-28, after the checkpoint). Jenny will report back; no live check by me. resolved
  - "System design" review: resolved 2026-10-28. Tito: there was a v1 of the system design but he deleted it because it was weak. No third file is pending; do not create a System design review unless Tito brings a new version.
  - Optional ASTRA comments: Tito asked what they were. They are an optional first message from ASTRA-11 shown in each review's comment thread, telling the client what to look at. Explained in chat; still waiting for his yes/no (none added).
  - Source quirks (nav clipped link, collapsed "View HTML" blocks): Tito said "It is ok", no change wanted. resolved
  - Tall-PDF viewer check: Tito said to review it if needed. `portal.html` opens PDFs in an iframe with a blob URL (browser's native PDF viewer), so scrolling/zoom are native; the PDFs are one page of about 9,564 pt (1440 x 12,752 css px), below Acrobat's 14,400 pt limit. Not tested in a real browser (no client code; headless Chrome for Testing has no PDF viewer). untested, waiting on Jenny's feedback.
  - Test file `DS Test.png` (Drive id `1T9x9gCKzhinBYITy8axTQVEjTGMQ23AF`): Tito deleted it from Global Gate's `Delivered by ASTRA-11` folder (2026-10-27). resolved
  - CUATRO: on hold. Tito is still working on the contract with them (2026-10-27); no email, project, milestones or files until that is settled. Do not set up anything for CUATRO until Tito says so.
  - No admin action or page to create a review, add an ASTRA reply, or change a client email: I do it with `add_data_table_rows` or a temporary workflow. unfinished
  - CUATRO has no project, milestones or files yet (empty portal in Spanish). unfinished
  - Global Gate progress, dates, notes, summary are blank (not invented); project stage still "Kickoff" and progress 0% even though 2 of 4 milestones are done. Offered to Tito (e.g. 50% or a "Design delivered" stage), no answer. unfinished
  - Way for Tito to edit progress without me: not chosen yet (options: private `HTML/admin.html` using the admin webhook [recommended], ASTRA-11 Dashboard integration at `/Volumes/ASTRA11-v1/ASTRA-11/ASTRA-11 Dashboard`, or keep asking Claude). unfinished
- Next step: (0, 2026-10-28) Tito opens the live portal with Global Gate's link/code and checks that "For your review" shows Style Guide and Design System and that View opens both PDFs (3-5 MB PDFs: confirm the in-page viewer handles a ~12,000 px tall single-page PDF); then sends Jenny the email; then decide on the optional ASTRA comments and whether a "System design" review is still wanted. (1) If a System design file is still planned: Tito names it, I look up its Drive id (temp workflow with a Drive search, slim output), then add a `portal_reviews` row. (2) Later: attach a file or link to a milestone, and an optional external link (Figma/Notion); needs Tito's answer on the brand guide's delivery format. View on live PDF and Sheet is done.
- To check / report back:
  - Wording: Tito reviewed the EN/ES review strings and the confirmation email text and said "It works" (2026-10-27). resolved
  - Live site: checked 2026-10-27, `https://astra-11.com/HTML/portal.html` returns 200 and contains `reviews-section`, so 9585a5e is deployed. tested. (Tito's own review test was on `localhost:8011`; no review exists yet on the live portal.)
  - Real review for Global Gate: Tito uploaded Style Guide and Design System PDFs on 2026-10-28 and the two reviews were created. The "System design" file mentioned on 2026-10-27 was not named; ask whether it is one of these. Then confirm the live portal shows both reviews (untested live) and that the viewer copes with the tall PDFs (untested).
  - The two HTML sources have two quirks worth telling Tito's design side about: the design system's section nav bar (`.ds-nav`) scrolls sideways and hides the last link ("Page patterns") at 1440 px; "View HTML" code blocks are collapsed so the PDF has no code samples. Both source files were left unchanged (the PDF capture wraps the nav and leaves blocks closed). open
  - Local preview server for the Global Gate pages (`python3 -m http.server 8012`, PID 2156): stopped 2026-10-28 with `kill 2156` at Tito's OK; port 8012 is free. resolved
  - Upload-notification email (main workflow node `Email New Upload`) switched to SMTP `ASTRA-11 hello SMTP` from `ASTRA-11 Portal <hello@astra-11.com>` per Tito ("always use hello@astra-11.com, that is the official company name"); published, active version `e5286682-e4c6-4c7f-aa44-a07055411669`. NOT tested end to end (no client code available; same SMTP credential and node type as the tested review emails). Verify with the next real upload: execution of the main workflow should show `Email New Upload` with `accepted: ["hello@astra-11.com"]`. untested.
  - Git: `CLAUDE.md` pointer committed and pushed as 568b29c (2026-10-27, Tito: "go ahead and push"; `main` matches origin). `BLUEPRINT.md` still uncommitted: Tito said "Commit" for both, but his 2026-10-26 rule is that BLUEPRINT.md stays local, the GitHub repo `titoburgab/astra-11` is PUBLIC, and BLUEPRINT.md holds a client's personal email, Drive/n8n ids and internal notes. Waiting for Tito to confirm explicitly (or move it to a private place).
  - The first real approval will send the first email to Jenny's address; no test was sent there on purpose.
  - Email sender (resolved 2026-10-27, Tito: "use hello@astra-11.com"): the two review emails now send through SMTP credential `ASTRA-11 hello SMTP` (id `CRkmRjN6SgmpjZc0`) with From `ASTRA-11 Portal <hello@astra-11.com>` (activity) and `ASTRA-11 <hello@astra-11.com>` (client confirmation, reply-to hello@). Tested live: SMTP accepted both with envelope sender hello@astra-11.com (active version `61348877-cf2d-4ce9-94bd-4beb95d3273d`). Tito confirmed it worked in the inbox ("It worked", 2026-10-27). The upload-notification email in the MAIN workflow (`Email New Upload`) was a Gmail node on an unidentified credential; switched to the same SMTP afterwards (see above). About 14 test emails went to hello@astra-11.com from testing.
  - Approver identity: one shared code per client, so the approver only types a name (stored with the decision). Tito chose this over separate approver codes.
  - Whether the live site at astra-11.com serves 5d1a5c0 and 46feef8 and that the one-click private links open the right portal. untested (Tito's successful upload suggests the live page works, but the hyphen fix itself was not checked).
  - Sheet preview: resolved. View shows a PDF copy, Download gives the editable xlsx (860b4c4, confirmed working live by Tito).
  - Milestone Spanish text (titles and all bullet items) was written by Claude; Tito approved the draft in chat ("All good", 2026-10-27). resolved
  - Live check of the milestones: after the deploy of 15cdf36, ask Tito (or use Global Gate's link) to open the live portal and confirm 4 milestones with bullets in EN and ES. untested live.
  - Spanish strings added this session (`portal.files.view` "Ver", `close` "Cerrar", `errors.viewFailed`) were written by Claude; Tito asked to glance at them.
  - Creating a brand-new client with the new code format (createClient path) is untested: it would leave a test folder in `clientes`. The shared code chain was verified via resetToken.
  - Milestone granularity: resolved 2026-10-27. Tito gave 4 key milestones with the tasks as bullet items under each.
  - Title "Global Gate Consulting We Develoment" was read as "Web Development"; Spanish titles were written by Claude. Confirm with Tito.
  - Optional ideas offered, not built: welcome email with the link on client creation, accept full link in the login box, attach existing TecSur folder, rename stored client name "CUATRO" to "Cuatro", delete unused `portal_files` data table, delete credential "Tito Personal Drive".
  - Access codes were only shown in chat. They are not stored in plain text anywhere; if lost, reissue with the admin `resetToken` action (this replaces the old code).

## 3. Files in use
- `HTML/index.html`: Services cards 06/07, title/meta, OG/Twitter/canonical tags, JSON-LD, footer label (changed 2026-10-29, pushed).
- `HTML/portfolio.html`: Current clients section, systems heading, hero jump links, meta, tags (changed 2026-10-29, pushed). Also has the 7 automation project cards + modals (unchanged).
- `HTML/about.html`, `HTML/privacy.html`: meta/intro/footer wording, tags on about (changed 2026-10-29, pushed).
- `i18n/en.js`, `i18n/es.js`: `services.card6/7`, `portfolio.clients.*`, `portfolio.systems.*`, new meta/footer/about copy (changed 2026-10-29, pushed). Canonical source of all site copy; keep EN/ES key parity.
- `brand_assets/assets/design-*.jpg` (6 screenshots of the live figma.site pages) and `og-image.png` (link preview image): new, pushed.
- `sitemap.xml`: now lists /, /HTML/portfolio.html, /HTML/about.html (changed, pushed).
- n8n workflow `ASTRA-11-WEB — Chatbot` (`ooF769omDhj15LTP`): system prompt updated 2026-10-29 (node `Concierge Agent`, parameter `options.systemMessage`).
- Figma sites linked from the portfolio: GGC Style Guide `alone-joy-90249148`, GGC Design System `invite-clip-85563620`, CUATRO Style Guide `badge-stylus-84709012`, CUATRO Design System `gizmo-music-51218278`, Valentina Design System `side-sixth-53330695`, Valentina Landing Page `twice-donkey-90975153` (all `https://<id>.figma.site`). Tito also gave Amy G links earlier and then asked to drop them; they are not on the site.
- Preview server: `python3 -m http.server 8011` from the project root was running during the session (port 3000 stays reserved).
- Client portal files (below) not changed this session.
- `/Volumes/ASTRA11-v1/CLIENTS/USA/GLOBAL GATE CONSULTING/GGC_Website/` (outside the repo; NOT changed): `style-guide/index.html` + `tokens.css`, `design-system/index.html` + `components.css`, `assets/logo/*.svg`, `documents/`. Pages depend on `tokens.css`, `components.css`, the logo SVGs (`../assets/logo/`) and Google Fonts Montserrat, so they only render when served from this folder (port 8012).
- PDFs: the only copies are now the two in Global Gate's `Delivered by ASTRA-11` Drive folder (`GGC-Style-Guide.pdf`, `GGC-Design-System.pdf`). The scratchpad copies and all check images were deleted 2026-10-28 at Tito's OK. To regenerate, use the screenshot recipe in Lessons (serve `GGC_Website` on a local port first).
- n8n Data Table `portal_reviews` (`Dr0GhF7lw1DjgpEX`): two new Global Gate rows (changed 2026-10-28).
- `HTML/portal.html`: the client portal page (milestone notes with several lines render as `.ms-items` bullets, changed and pushed 15cdf36 on 2026-10-27; login gate, progress track, milestones, files, upload/download, a `<dialog id="viewer">` file viewer with `NATIVE`/`PREVIEW` maps, and the review UI: `#reviews-section`, `loadReviews`, `postReview`, `reviewCard`, `reviewForm`, drafts kept across re-renders, name remembered in localStorage `astra11_portal_name`). Changed 2026-10-27 (committed 46feef8, 860b4c4, 9585a5e). Calls n8n webhooks `astra11-portal-data|upload|download|reviews|review-action`.
- `i18n/en.js`, `i18n/es.js`: `portal.*` strings (incl. `tooLarge`, 150 MB hint, `files.view|close`, `errors.viewFailed`, and the whole `portal.reviews.*` block) and `nav.clientLogin`. Changed 2026-10-27 (committed 9585a5e).
- `HTML/index.html`, `HTML/about.html`, `HTML/portfolio.html`, `HTML/privacy.html`: Client Login link in nav/mobile menu/footer. Changed.
- `CLAUDE.md`: project rules (frontend skill, port 3000 reserved). Changed only by one pointer line to this file.
- `BLUEPRINT.md`: this file. New.
- n8n data table `portal_milestones` (`TPJffb91g7fqU5nD`; project_id, title_en, title_es, state, due_date, note_en, note_es, sort): Global Gate rows replaced 2026-10-27; `state` changed 2026-10-30 (Setup/Brand `done`, Website `active`). Two temp workflows used for it (`GZ1qZKgCf4eVzH1E`, `rrwt8dm7scmHbA1x`), both archived. A note with several lines (separated by `\n`) becomes bullets in the portal; one line stays a paragraph (Setup).
- n8n (not in repo): workflows `ASTRA-11-WEB — Client Portal` (id `mhdzgF35wJtSmUWo`; node "Download From Drive" changed 2026-10-27, active version `437506cb-b92c-4f91-bb2c-d49c43cf3e02`) and `ASTRA-11-WEB — Client Portal Admin` (id `tUJgDKgG4klDEnZ1`), and new `ASTRA-11-WEB — Client Portal Reviews` (id `fmqt5fDf04ewjQak`, 29 nodes, active version `61348877-cf2d-4ce9-94bd-4beb95d3273d`, emails via SMTP credential `ASTRA-11 hello SMTP`; list flow: hash, client lookup, Get Reviews, Get Comments, Build Reviews; action flow: hash, client lookup, Get Client Reviews, Validate Action, Add Comment, Is Decision?, Update Review, Build Review Email, Email Review Activity, Client Confirmation Needed?, Build Client Email, Email Client Confirmation, Respond Review OK). Archived temp helpers `Nj5furiLWfhv90Vp`, `KuRyYBROhLsxaDdV` and this session's temp workflows (all archived).
- n8n Data Tables (project `5l4YA1qsZOCmpLgv`): `portal_clients` (`PML5ztlGpPWOFt0y`; client_id, name, email, token_hash, lang, drive_folder_id, drive_uploads_id, active), `portal_projects` (`4h48xaP4k4cPd8dm`), `portal_milestones` (`TPJffb91g7fqU5nD`), `portal_files` (`PyGzvPBj6Q0vpa1o`, unused), new `portal_reviews` (`Dr0GhF7lw1DjgpEX`; review_id, client_id, file_id, title_en, title_es, round, status `pending|approved|changes_requested`, requested_at, decided_at, decided_by) and new `portal_comments` (`WfT9tuelf1i0R6yd`; review_id, client_id, author_type `client|astra`, author_name, kind `comment|approved|changes_requested`, text, created_at). Client ids: Global Gate `global-gate-consulting-14d6` (Delivered parent folder `1IPKcUc8brOFX0gj0gS09R_x-s-PndJcc`), CUATRO `cuatro-c818` (folder `1OvFveXORi_jsLSx64I89G_cFhMd9ff6T`). A new review round = a new `portal_reviews` row with `round` + 1; old rounds stay as history. A review's file must be in the client's Delivered or Uploads folder so the existing download endpoint authorizes it.
- n8n credential `ASTRA-11 Drive` (id `ytZlvQpL20xgqZg8`, hola.astra11@gmail.com, Google Cloud project ASTRA-11 Automation, OAuth client "ASTRA-11 Drive"). Admin webhook secret and path suffix are in the Admin workflow in n8n (not recorded here).
- Preview server: `python3 -m http.server 8011` from the project root (running at the end of this session; port 3000 is reserved for the Tito Dashboard). Local page `http://localhost:8011/HTML/portal.html` talks to the live n8n backend.
- `CLAUDE.md`: pointer line committed (568b29c). `BLUEPRINT.md`: untracked, intentionally uncommitted.

## 4. Changes
### 2026-10-30 (Global Gate milestone states)
- Tito: "In the Global Gate portal you can mark as done the Setup and Brand", then "For the website mark it as in progress". Updated `state` in n8n data table `portal_milestones` for project `ggc-web-development`: Setup and Brand to `done`, Website to `active`. Done with two temporary workflows (manual trigger + dataTable `update` filtered by `project_id` and `title_en`, run with `test_workflow`), read back, then archived. No repo files changed; `git status` showed only `BLUEPRINT.md` and `BLUEPRINT-ARCHIVE.md` untracked. Tito asked "commit & push": nothing to commit, so nothing was committed or pushed (BLUEPRINT files stay local by his rule).
### 2026-10-29 (UX/UI + Web Design services, Current clients, SEO)
- Commits on `main`: e36c8aa (services cards 06/07), 2edd2b6 (first "Design work" section of 6 cards), 75cc327 (portfolio regrouped into Current clients + Systems we've built; replaced the Design work section), d41012e (titles, meta descriptions, About intro, footer label), 078b4d1 (OG/Twitter/canonical tags, JSON-LD, sitemap, og-image).
- Copy flow: Tito's rule is draft in chat, wait for "go". Followed for every step. Decisions by Tito: two separate service cards; "25 years" removed from the card copy; broadcasting is context, not a site section; all six figma.site projects allowed on the site ("clients have agreed"); Amy G dropped, Valentina added; portfolio ordered clients first, then own systems; label "Current clients", not "Case studies", because projects are still in development.
- Chatbot prompt edited in n8n with `update_workflow` op `updateNodeParameters` and published; tested live.
- Throwaway scripts (`_svc.mjs`, `_shots.mjs`, `_pf.mjs`, `_og.*`, `_chk.mjs`, `_c.mjs`) and test screenshots were deleted after use. `git status` shows only `BLUEPRINT.md` untracked (by design).
### 2026-10-28 (Global Gate Style Guide + Design System into the portal)
- Tito asked how to load his Style Guide and Design System (HTML+CSS) into the portal. Found them under `CLIENTS/USA/GLOBAL GATE CONSULTING/GGC_Website/` (his path had the typo `CLIENST`). Explained: the viewer only shows PDF/images/mp4; options were PDF, HTML-in-portal (n8n + `portal.html` changes, sandboxed iframe) or a public page (rejected: public repo). Tito worried PDFs never match the HTML, so I rendered several ways and he chose by looking.
- Final approach: Puppeteer full-page captures at 1440 px width, 3x scale, sliced into 4000 px chunks, embedded in one tall single-page PDF (screen styles, not print). Rendered from a local server on port 8012. No project files changed; throwaway scripts (`_cap.mjs`, `_pdf.mjs`, `_y.mjs`) were deleted from the project root after use.
- Tito uploaded the two PDFs to Global Gate's `Delivered by ASTRA-11` Drive folder. Looked up their Drive ids and the client's `lang` with a temporary n8n workflow `TEMP GGC lookup` (id `t5Q9XV0CvIoUDPZg`, read-only, archived after reading). Added two `portal_reviews` rows with `add_data_table_rows` (English only, per Tito).
- Wrote a client email draft in chat (not sent, not saved). Sign-off set to "Best regards, ASTRA-11 Team" per Tito.
- No repo files changed this session; `git status` shows only `BLUEPRINT.md` (untracked, by design). Nothing committed or pushed.
- After the checkpoint (Tito's OK): stopped the port 8012 server, deleted the scratchpad PDFs/PNGs. The first cleanup attempt (`rm -f $S/*.pdf ...` with a shell variable) was blocked by Claude Code's safety check because the variable could expand to nothing; re-ran with literal absolute paths and it worked (nothing from the blocked command had run, including the `kill`).
### 2026-10-27 (Global Gate milestones replaced)
- Tito supplied the scope list. Replaced Global Gate's 3 old milestones (Brand style guide and design system; Redo website; AI integration) with 4, all `upcoming`, no dates: Setup, Brand, Website, Trade Intelligence (ES: Preparación, Marca, Sitio web, Trade Intelligence). Items are one per line in `note_en`/`note_es` of `portal_milestones`. Spanish wording written by Claude, Tito approved the draft. Done through a temp workflow (delete) + `add_data_table_rows`; read back: exactly 4 rows. tested.
- `HTML/portal.html`: a milestone note with more than one line renders as a bullet list (`.ms-items`); a one-line note stays a paragraph. Tested with a mocked API in puppeteer (EN/ES, 1440 and 390 px, no horizontal overflow). NOT committed/pushed yet, NOT checked on the live page with the real code. untested live.
### 2026-10-27 (evening: Global Gate milestones)
- Tito pasted the scope list (Setup, Brand, New website, Trade Intelligence tasks); chose to replace the 3 old milestones and to name the third "Website" (EN) / "Sitio web" (ES).
- `portal_milestones`: deleted all rows with `project_id = ggc-web-development` through a temp workflow (`deleteRows`, archived), then inserted 4 rows with `add_data_table_rows` (needs `projectId` `5l4YA1qsZOCmpLgv`). Read back with a second temp workflow (archived): 4 rows, upcoming, bullet line counts 1/2/8/9.
- `HTML/portal.html`: CSS `.ms-items` plus a branch in `renderProjects` that splits `note` on newlines into `<li>` when there is more than one line. Committed and pushed as 15cdf36 on request ("commit & push"); `BLUEPRINT.md` left out.
- Removed the throwaway puppeteer script and screenshots.

### 2026-10-27 (later: upload email + CLAUDE.md commit)
- Main workflow `ASTRA-11-WEB — Client Portal`: replaced Gmail node `Email New Upload` with Send Email (SMTP) from hello@astra-11.com, same subject/body; published (`e5286682-e4c6-4c7f-aa44-a07055411669`). Untested end to end.
- Committed `CLAUDE.md` (pointer line) locally as 568b29c; not pushed. `BLUEPRINT.md` left uncommitted (see Where we are).
- Checked the live site: astra-11.com serves the review section.

### 2026-10-27 (sender switched to hello@astra-11.com)
- Reviews workflow: replaced the two Gmail nodes (`Email Review Activity`, `Email Client Confirmation`) with Send Email (SMTP) nodes using credential `ASTRA-11 hello SMTP`, From hello@astra-11.com; published (`61348877-cf2d-4ce9-94bd-4beb95d3273d`). Tested with a temp client (approve): both emails accepted by SMTP; test client/review/comments deleted, temp workflow archived. No repo change.

### 2026-10-27 (review / approval flow)
- Decisions by Tito: approver types a name (shared code); email hello@astra-11.com on every comment/approval/change request; "Request changes" starts a new round with a new file.
- New n8n data tables `portal_reviews`, `portal_comments`; new workflow `ASTRA-11-WEB — Client Portal Reviews` (published). Main portal workflow untouched.
- `HTML/portal.html`, `i18n/en.js`, `i18n/es.js`: "For your review" section (status chip, round, View/Download, comment thread, name + comment form, Send comment / Request changes / two-step Approve, decided banner). Committed and pushed as 9585a5e.
- Added client confirmation email (decisions only) to the Reviews workflow via `update_workflow` ops (Validate Action now outputs `clientEmail`, `lang`, `titleLocal`); published; no repo change.
- Set Global Gate `email` to `jenny.m.ash@gmail.com` through a temporary workflow (update row), read back, archived.
- Created and deleted test data several times (temp clients with known codes, test reviews, Global Gate test review `ggc-test-1`) via temporary workflows with `deleteRows`; all archived.

### 2026-10-27
- Sheet preview: the download request now carries `preview: true` from the View button; the workflow's `sheetsToFormat` is an expression (PDF when `preview`, xlsx otherwise; active version `ce2dc7fa-a26c-47ca-ab17-1bae22465ea9`). `portal.html` gained `NATIVE[...].preview` and `viewName()`. Pushed as 860b4c4. Tito confirmed View works on the live Google Sheet. tested.
- n8n main workflow: "Download From Drive" now uses `googleFileConversion` (Sheets to xlsx, Docs and Slides to PDF, Drawings to PNG) so Google-native files download instead of failing; published.
- `HTML/portal.html`: badges for native files (SHEET/DOC/SLIDES/DRAW), View button + modal viewer for PDF/images/mp4 (also PDF exports of Docs/Slides), exported names get the right extension, mobile layout puts View/Download under the file name (max-width 520px).
- `i18n/en.js`, `i18n/es.js`: added `portal.files.view`, `portal.files.close`, `portal.errors.viewFailed`.
- Committed and pushed 46feef8 (the three files above, by name). `BLUEPRINT.md` and `CLAUDE.md` left uncommitted.
- Restarted the preview server on port 8011 (it was down); removed throwaway test scripts/screenshots from the project root.

## 5. Failures
- [resolved] Admin createClient failed: `Module 'crypto' is disallowed` then `crypto is not defined` in n8n Code node. Fixed by using the Crypto node v1 (generate/hash).
- [resolved] `validate_workflow` rejected helper function: "Function declarations are not allowed in SDK code". Fixed by expanding nodes inline (generated with a script).
- [resolved] Drive credential "Tito Personal Drive" expired ("needs to be reconnected"). User asked not to use it; replaced with `ASTRA-11 Drive`.
- [resolved] New credential saved but Drive calls failed with "Unable to sign without access token": Google sign-in had not been completed. User completed Sign in with Google.
- [resolved] Client folders were first created at Drive root ("Portal - <name>"), violating the rule that everything goes inside `clientes`. Folders no longer exist; workflow now parents everything to `clientes`.
- [resolved] "clientes" folder not found by search in hola.astra11's My Drive; found by listing children of the folder ID the user pasted.
- [resolved] Mobile: stage labels collided in Spanish; "Cerrar sesión" overflowed header. Fixed with CSS (only current label on small screens, smaller header spacing).
- [resolved] Portal page overflowed horizontally with long filenames. Fixed with `minmax(0,1fr)` grid columns.
- [resolved] Spanish desktop nav crowded/wrapped; 1024-1279px collision. Header link shown only at xl; ES label shortened to "Clientes".
- [resolved] Link reader regex `[A-Za-z0-9]+` broke hyphenated codes. Fixed in `portal.html` (5d1a5c0).
- [resolved] 2026-10-27: Google Sheet "Global Gate Consulting - Info" would have failed to download (plain Drive download cannot fetch Google-native files; also showed a generic FILE badge and "1 KB"). Fixed by Drive export conversion in the workflow; Tito confirmed both files download.
- [resolved] 2026-10-27: Tito could not view the Google Sheet (View button was only for PDFs/images/mp4; sheets had Download only). Fixed with a PDF preview export (860b4c4); confirmed working.
- [resolved] 2026-10-27: First mocked viewer test timed out waiting for `.frow`; cause was my puppeteer mock answering the CORS preflight without `access-control-allow-headers`. Fixed the mock, page code was fine.
- [resolved] 2026-10-27: Mobile file rows squeezed names to "Logo ed..." with two buttons. Fixed with a wrapping layout under 520px.
- [resolved] 2026-10-27: `create_data_table` failed `projectId Required`. Fixed by passing the personal project id `5l4YA1qsZOCmpLgv` (from `list_credentials` homeProject).
- [resolved] 2026-10-27: `get_node_types` rejected `nodeIds` strings/numbers ("Expected object", "Expected string, received number" for version). Fixed by passing objects `{nodeId, resource, operation}` with no version.
- [resolved] 2026-10-27: Review UI test: after switching language the typed name was lost, so the next Send did nothing (name validation failed). Fixed by keeping `drafts.name` across re-renders in `reviewForm`.
- [resolved] 2026-10-27: `publish_workflow` on a temp workflow with only a manual trigger: "Workflow cannot be activated because it has no trigger node"; `execute_workflow` needs a published version. Fixed by running temp workflows with `test_workflow` (pinData `{"Start":[{"json":{}}]}`), which runs the real nodes.
- [resolved] 2026-10-27: temp Drive search node validation: `options.fields.3 must be "*"`. Fixed with `fields: ["*"]`, then a Code node to slim the output.
- [resolved] 2026-10-27: unsure if the review UI was deployed; fetched the live page and found `reviews-section` (deployed). A full click-through on the live site is still not done, only on localhost.
- [resolved] 2026-10-27: `get_execution` without `workflowId` failed validation ("workflowId Required"). Fixed by passing both `workflowId` and `executionId`.
- [resolved] 2026-10-27: `add_data_table_rows` without `projectId` failed ("projectId Required"). Fixed by passing `5l4YA1qsZOCmpLgv`.
- [resolved] 2026-10-27: archived the temp delete workflow before reading its execution, so the deleted-row count could not be read ("archived and cannot be accessed"). Verified the result instead by reading the table back (exactly 4 rows).
- [resolved] 2026-10-28: `ls` of the path Tito gave failed ("No such file or directory"): he wrote `CLIENST/ USA/...`; the real folder is `/Volumes/ASTRA11-v1/CLIENTS/USA/GLOBAL GATE CONSULTING/GGC_Website`. Found by listing `/Volumes/ASTRA11-v1`.
- [resolved] 2026-10-28: First PDF (Chrome `page.pdf`, screen media) showed a purple fill in the navy hero sections. Cause: the `repeating-linear-gradient` grid lines (5% white) are rendered wrongly by Chrome's PDF output. A render-time SVG line pattern fixed it, then the image-based approach replaced it.
- [resolved] 2026-10-28: Vector PDF shadows (`--shadow-sm/md/lg`, 8-14% alpha blurs) came out dark with hard edges. Chrome's PDF renderer handles blurs badly. Fixed by switching to image-based PDF (screenshot of the screen render).
- [resolved] 2026-10-28: Design system section nav (`.ds-nav .gg-container`, `overflow-x:auto`) clipped the last link ("Page patterns") in the PDF. Fixed at capture time with `flex-wrap:wrap; overflow:visible`; source HTML unchanged.
- [resolved] 2026-10-28: 2x image PDF looked pixelated to Tito. Embedded images were really 2880 px wide (lossless); raster zoom headroom was too small. Fixed with 3x (4320 px); Tito: "much better".
- [resolved] 2026-10-29: first portfolio client cards used two side-by-side 4:3 crops of the screenshots, which cut text ("lobal Trade", "dvertising"). Fixed by using one 16:10 screenshot per card.
- [resolved] 2026-10-29: a Python regex that swapped the thumbnails left one extra `</div>` per card, which closed each article early and broke the 3-column grid (cards stacked and nested). Found in the screenshot, removed the extra tags.
- [resolved] 2026-10-29: `update_workflow` `setNodeParameter` with `parameterPath` failed ("operation 0.path: Required"), then with `path: "options.systemMessage"` ("path ... is invalid or contains unsafe segments"). Fixed with `updateNodeParameters` and a nested `{options:{systemMessage}}` object.
- [resolved] 2026-10-29: first link-preview image used `ASTRA-11_Logo_Full.svg`, which has the old tagline "AI ENGINEERING AGENCY" baked in. Re-rendered with `ASTRA-11_Logo.svg`.
- [resolved] 2026-10-29: chatbot `Concierge Agent` node carried a stray duplicate prompt at `parameters.options.systemMessage`; cleared with `updateNodeParameters {parameters: null}`, published, re-tested live.
- [resolved] 2026-10-30: `execute_workflow` on the temp milestone workflow: "has no published (active) version to execute"; `publish_workflow`: "no trigger node" (manual trigger does not count); `test_workflow` without `pinData`: "pinData Required". Fixed by `test_workflow` with `pinData {"Start":[{"json":{}}]}` (same as the 2026-10-27 lesson).
- [open] 300 MB mp4 upload fails in n8n (HTTP 500 after ~10 s, "problem executing the workflow"). Mitigated by 150 MB cap, not fixed.
- [open] Live deployment of 5d1a5c0 not yet verified.

## 6. Lessons
### Changing a milestone state (2026-10-30)
- Tried: `execute_workflow` / `publish_workflow` on a temp workflow with a manual trigger to update `portal_milestones`.
- Error / symptom: "no published (active) version to execute"; "Workflow cannot be activated because it has no trigger node"; `test_workflow` alone: "pinData Required".
- Cause: manual triggers cannot be published; `test_workflow` requires `pinData`.
- Fix: dataTable node v1.1 (`resource: row`, `operation: update`, `matchType: allConditions`, filters `project_id eq ggc-web-development` AND `title_en eq <Setup|Brand|Website>`, `columns: {mappingMode:"defineBelow", value:{state:"<done|active|upcoming>"}, matchingColumns:[], schema:[]}`), run with `test_workflow` and `pinData {"Start":[{"json":{}}]}`, read the result with `get_execution` (`includeData: true`) before `archive_workflow`.
- Next time: filter by project AND title (other projects may reuse titles); several states can be changed in one temp workflow by chaining update nodes plus a final `get` node to read back. Valid portal states are `done`, `active` (In progress), `upcoming`; anything else renders as upcoming. Tell Tito the Done labels have not been seen on the live portal.
### Editing the chatbot prompt through the n8n tools (2026-10-29)
- Tried: `update_workflow` with `setNodeParameter` and a dotted path (`options.systemMessage`).
- Error / symptom: `Invalid operations: operation 0.path: Required` (I had used `parameterPath`), then `path 'options.systemMessage' is invalid or contains unsafe segments`.
- Cause: dotted nested paths are rejected by `setNodeParameter`.
- Fix: `updateNodeParameters` with `parameters: {options: {systemMessage: "<full prompt>"}}`, then `publish_workflow`, then test the production webhook (POST `astra11-chat` with `{sessionId, message, lang, page, name:"", email:""}`; empty name/email so no lead is logged).
- Next time: you must resend the whole prompt; extract the current prompt first with Python from the saved `get_workflow_details` output (it is large, ~57 KB). The node had two systemMessage copies; the live one is `options.systemMessage`. A stray top-level key cannot be deleted with `updateNodeParameters`, only set to `null` (`{parameters: null}`), which is enough. Verify with `get_workflow_details` that `options.systemMessage` is still the full prompt, then publish.
### Regex-editing nested HTML (2026-10-29)
- Tried: a non-greedy regex over a `<div>` containing two nested thumbnail `<div>`s to replace them with one.
- Symptom: one extra `</div>` per card, grid collapsed, cards stacked and nested (seen only in the screenshot; no error).
- Cause: the pattern's trailing `</div>\s*</div>` matched one closing tag too many.
- Fix: removed the stray tags. Next time: after a structural regex edit, print the section and check that tags balance before screenshotting.
### Screenshots of the site with puppeteer (2026-10-29)
- `.reveal` elements are invisible until scrolled, so add `is-visible` to all of them before a screenshot. The fixed header appears mid-image in element screenshots (an artifact, not a bug). Language is stored in localStorage (`astra11_lang`/`lang`), so a browser reused for several pages keeps the last language; set it with `evaluateOnNewDocument` per run. Check `scrollWidth` vs `clientWidth` for overflow. Screenshots of live figma.site pages: 1280x800 PNG converted with `sips -s format jpeg -s formatOptions 80` (about 80-250 KB each).
### Image-led cards need an equal-height text block (2026-10-29)
- When card titles or labels wrap to two lines (Valentina's long name, Spanish industries), titles and bodies misalign across the row. Fix used: `lg:min-h-[2.6rem]` on the industry label and `lg:min-h-[4rem]` on the h3.
### Link-preview image and logo files (2026-10-29)
- `brand_assets/assets/ASTRA-11_Logo_Full.svg` contains the tagline "AI ENGINEERING AGENCY"; use `ASTRA-11_Logo.svg` when the tagline should not show. Preview tags are static English because crawlers do not run `i18n.js`. Google structured-data logos cannot be SVG.
### Chrome PDF output vs the screen render (2026-10-28)
- Tried: `page.pdf` with `emulateMediaType("screen")`, printBackground, one tall page (width 1440px, height = scrollHeight) for the Global Gate pages.
- Symptom: purple fill instead of navy grid-line hero backgrounds; box-shadows (low-alpha blurs) rendered dark and hard-edged; sticky/overflow nav links clipped.
- Cause: Chrome's PDF backend mishandles repeating gradients and blurs, and PDFs cannot scroll an `overflow-x:auto` bar.
- Fix: capture the page as screenshots and embed them in the PDF. Recipe: puppeteer-core with the Chrome path from `screenshot.mjs`, viewport 1440 px, `deviceScaleFactor: 3`, `p.screenshot({clip:{x:0,y,width:1440,height:ch},captureBeyondViewport:true})` in 4000 px slices (texture limit about 16384 device px, so 6000 px at 3x fails), put the slices as `<img style="display:block;width:1440px;height:chpx">` in a blank page, `page.pdf({width:"1440px",height:h+"px",pageRanges:"1"})`. Injected CSS only at capture time (`.ds-nav .gg-container{flex-wrap:wrap;overflow:visible}`).
- Next time: if the client wants an exact match with the HTML, go straight to the screenshot-based PDF at 3x (text is not selectable, files ~3-5 MB). Verify embedded size with `grep -a -o "/Width [0-9]*" file.pdf`. For a vector PDF you must patch every gradient/blur effect.

### Checking PDFs without poppler (2026-10-28)
- Tried: `pdftoppm`/`pdfinfo` (not installed); `sips -c H W --cropOffset 0 0` on a rasterized PDF.
- Symptom: `sips` renders only page 1 at 1080 px wide and its crop did not start at the top as expected (output showed a middle section).
- Fix: rasterize with `sips -s format png file.pdf`, then crop with Python PIL (`Image.crop`), and detect bad colors by counting purple-ish pixels. Compute element `y` positions with puppeteer (`getBoundingClientRect().top + scrollY`) and scale by raster height / page height.
- Next time: use PIL for crops; remember the sips raster is lower resolution than the PDF itself.

### Local server for client folders (2026-10-28)
- Pages in `GGC_Website` reference `../assets/` and `../style-guide/tokens.css`, so serve the `GGC_Website` folder itself (`python3 -m http.server 8012`), not the repo. Port 3000 stays reserved, 8011 is the astra-11 preview.

### Review rows need no email, so the client doesn't know (2026-10-28)
- Creating a `portal_reviews` row sends nothing. The only portal emails are on approve/request changes (to the client) and activity (to hello@). Always tell Tito to notify the client himself, and never send client email without his OK.

### Read the execution before archiving a temp workflow (2026-10-27)
- Tried: `test_workflow` on a temp delete workflow, then `archive_workflow`, then `get_execution`.
- Error / symptom: `Workflow '...' is archived and cannot be accessed.`; the delete count could not be read.
- Cause: archived workflows' executions are not readable.
- Fix: read the table back with a second temp workflow (get rows plus a slim Code node) and archive it only after reading.
- Next time: `get_execution` needs `workflowId` and `executionId`; read the execution first, archive last. Also pass `projectId` to `add_data_table_rows`.

### Multi-line milestone notes (2026-10-27)
- Design choice, not a failure: milestone items are stored as one line per item in `note_en`/`note_es`, and `portal.html` splits on `\n`. A single-line note stays a plain paragraph (Setup looks slightly different from the others). To change the look of a one-item milestone, change the `lines.length > 1` check in `renderProjects`.
### Run, read and clean up data with temporary workflows (2026-10-27)
- Tried: reading rows, updating a row and deleting test rows with the loaded n8n tools (they only have `add_data_table_rows` and `search_data_tables`, which returns the schema, not rows).
- Symptom: no way to read emails or delete test rows; `publish_workflow` refused a manual-trigger-only workflow ("no trigger node").
- Fix: create a temp workflow (manual trigger + dataTable `get`/`update`/`deleteRows` or Drive search + a Code node that outputs only the needed fields), run it with `test_workflow` and `pinData {"Start":[{"json":{}}]}`, read it with `get_execution` (`includeData: true`, `nodeNames` to limit output), then `archive_workflow`. This supersedes the 2026-10-26 note that row deletion is unavailable.
- Next time: filter deletes tightly (`client_id eq zz-...`), never print `token_hash`, and always slim Drive output (full `fields: ["*"]` output is huge). Test clients need a known code: compute `printf '<code>' | shasum -a 256` and add a `portal_clients` row with that `token_hash`; delete it afterwards and confirm the code returns 401.

### Email nodes with onError continue hide failures (2026-10-27)
- Tried: Gmail nodes set to `continueRegularOutput` so the webhook still answers.
- Symptom: a webhook can return `ok` even if the email failed.
- Fix: check the execution (`get_execution` on the Gmail node) for `labelIds: ["SENT"]`; done for both the activity and the confirmation email.
- Next time: verify the SENT label after changing any email node; the portal response is not proof.

### update_workflow ops details (2026-10-27)
- Parameters set through ops are raw n8n parameters: expressions need a leading `=` (`"={{ ... }}"`), unlike the SDK's `expr()`.
- `addConnection` from an IF's false output works with `"sourceIndex": 1` (verified: false branch ran, true branch did not). `removeConnection` then `addConnection` re-wires an edge.
- Inside Code-node strings in SDK code use single or double quotes consistently and `\\s` / `\\n` for regex backslashes in the SDK source; webhook body fields are under `$json.body`.

### Keep user input across re-renders (2026-10-27)
- Tried: re-render the whole portal on `i18n:change`; forms were rebuilt from scratch.
- Symptom: typed name vanished after switching EN/ES (comment text was kept because it already had a draft).
- Fix: store every field in a `drafts` object on `input`.
- Next time: any form in `portal.html` must keep its fields in `drafts` because `render()` rebuilds the DOM.

### Google-native Drive files need export (2026-10-27)
- Tried: plain Drive "download" for every file in the portal list.
- Symptom: Sheet shows generic FILE badge and "1 KB" (Drive reports no size for native files); plain download would fail.
- Cause: Sheets/Docs/Slides have no binary content; they must be exported.
- Fix: `googleFileConversion` options on the Drive download node; page maps `f.mime` to badge, export extension and preview type.
- Next time: when listing Drive files, treat `application/vnd.google-apps.*` separately. Native sheets give xlsx only (no in-page preview).

### Puppeteer mocks need a CORS preflight (2026-10-27)
- Tried: `setRequestInterception` mock that matched `portal-data` before checking the method.
- Symptom: page stayed in loading state, `.frow` never appeared.
- Cause: the OPTIONS preflight got a response without `access-control-allow-headers`.
- Fix: answer OPTIONS first with allow-origin and allow-headers on every mocked response.
- Next time: handle OPTIONS first. This repo uses `puppeteer-core` with the Chrome path from `screenshot.mjs`, not `puppeteer`.

### Testing portal flows without an access code (2026-10-27)
- Cannot call the live endpoints without a client code, and `resetToken` would replace the client's real code. Test UI with a mocked API, and ask Tito to click through the live portal for end-to-end checks.

### n8n Code node has no crypto (2026-10-26)
- Tried: `require('crypto')` then global `crypto.subtle` / `getRandomValues` for hashing and random tokens.
- Error / symptom: `Module 'crypto' is disallowed`, then `crypto is not defined`.
- Cause: task-runner sandbox blocks the module and does not expose the global.
- Fix: Crypto node v1 (`action: hash` SHA256 hex; `action: generate` hex).
- Next time: never plan hashing/randomness in a Code node; use the Crypto node. The v2 Crypto node has no hash action.

### SDK code limits (2026-10-26)
- Tried: reusable `function authChain()` in workflow SDK code.
- Error / symptom: "Function declarations are not allowed in SDK code".
- Cause: SDK parser only allows declarative nodes.
- Fix: generate the repeated nodes with a script, then paste the inlined code.
- Next time: no helper functions; arrow functions are fine only inside Code-node strings.

### update_workflow does not publish (2026-10-26, already in memory for booking system)
- Tried: edited workflows and called endpoints.
- Symptom: old behavior kept running.
- Cause: edits create a draft only.
- Fix: `publish_workflow` after every update.
- Next time: always publish, then test the production webhook.

### OAuth credential saved but not connected (2026-10-26)
- Tried: created the credential with client ID and secret, then ran a workflow.
- Error / symptom: `Unable to sign without access token`.
- Cause: "Sign in with Google" step not completed.
- Fix: user signed in with hola.astra11@gmail.com; credential showed connected.
- Next time: after the user creates a credential, run a read-only call first to verify a token exists before creating anything.
