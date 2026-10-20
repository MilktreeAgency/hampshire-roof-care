# Hampshire Roof Care: month one and monthly SEO

Prepared 1 October 2026. This is the operating plan for this repository. See `STATUS.md` for implementation state: a local change is not a deployed change.

## Reporting standard and confirmed client facts

Use Milktree Agency branding for every future client report in this project: `brand/report-brand.json`, supplied vector logo, and embedded Satoshi / Instrument Sans fonts. The reusable layout reference is `reporting/build_september_report.py`. Retain its black masthead, white logo, yellow accents and readable white content pages; update the period, evidence and work rather than carrying forward old metrics. Final reports belong in `output/pdf/`, with all pages rendered and visually checked. Brand assets and reports stay outside the website deployment.

Confirmed public email: `asa@hampshireroofcare.co.uk`. Current testimonials originated in person, according to the user; preserve customer-approved wording and permission and do not label them Google reviews. Once Business Profile verification is approved, prepare and test Google's review link and QR code for the client to share with existing and previous customers. Invite honest feedback without incentives or review gating; do not send customer messages without explicit authorisation.

The two enquiries were received in September, correcting the earlier October wording. On 1 October, Formspree's submissions page showed 13 September (slipped-tile repair) and 26 September (reroofing quote). The user confirms inbox delivery. Traffic source, SEO attribution and commercial outcome are unknown. Reporting stores aggregate facts, not customer names, messages or contact details.

## October 2026 content delivery plan

The two monthly owner reviews remain one hour on the 1st and 15th at 09:00 UK time, with AI drafting, implementation and validation between reviews. Add content alongside the measured mobile-speed work:

1. New guide, provisional path `/guides/roof-repair-or-replacement`: "Roof repair or replacement: how to decide". Explain survey checks, repair limitations, roof condition and quote scope. Link to existing roof-repair and pitched-replacement services. Ask the roofer to check technical claims; do not invent prices or guarantees.
2. Improve `/services/roof-repairs` and `/services/pitched-roof-replacement`: useful survey steps, scope, decision questions, FAQs, clear next steps and relevant internal links. These extend the existing October 1 improvements rather than repeat the same work.
3. Refresh `/guides/slipped-roof-tiles`: improve safe next steps and assessment based on the genuine enquiry topic, preserve the URL and link to the repairs service. Avoid duplicating the existing guide.
4. Add one distinct project page once the business supplies an actual completed job, town, roof type, work and approved photos. Link it from its service and existing area page. If evidence is delayed, deliver the guide and existing-page updates first and carry the project page forward explicitly.

For each release: distinct title/description, clear heading structure, factual copy, descriptive image text, relevant links, tested enquiry route, mobile checks and sitemap/indexing follow-up. Retain Southampton, Winchester, New Forest and Chandler's Ford coverage; avoid mass-produced town variants. New topics are provisional editorial priorities, not measured search-volume claims. Track deployed dates and page-level visibility when data becomes available; no traffic or ranking uplift is guaranteed.

The 1 October review sets the content briefs and mobile baseline. The 15 October review checks prepared content, measured speed changes, indexing, profile verification and lead quality, and agrees the next release. Guidance: [people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google review link and QR code](https://support.google.com/business/answer/16816815?hl=en-GB).

## Objective and capacity

Generate qualified roofing enquiries from Southampton, Winchester, the New Forest and Chandler's Ford. Retain the current five services: repairs, pitched replacements, flat replacements, leadwork, and pointing/cement work. The user confirmed current service areas and two monthly sessions on the 1st and 15th at 09:00 Europe/London.

Use the owner's two monthly hours for review, decisions and release. AI prepares evidence, implements agreed work, validates changes and drafts reporting. Initial remediation and account setup need additional implementation time; they cannot credibly all fit inside two hours. Technical eligibility does not guarantee indexing, rankings or leads.

## Evidence and priorities

| Priority | Audit evidence on 1 October | Required outcome |
| --- | --- | --- |
| P0 | Live `/services/roof-repairs` had an empty React root, homepage title and homepage canonical before JavaScript. | Page-specific HTML, metadata, headings and links in HTTP responses. Deployed and HTTP-verified. |
| P0 | Non-www redirects to www with 307; canonicals and sitemap used non-www. | Align with www. Inspect Vercel domain settings and change to a permanent redirect; check HTTP/HTTPS and host variants. |
| P0 | A nonexistent live URL returned HTTP 200; no global missing-page route. | Static clean URLs, noindex error page, genuine 404 for unknown top-level and nested paths. |
| P0 | Contact form had no submit handler or field names; upload area was decorative. Quote popup used Formspree. | Reliable success/error flow using the existing endpoint; client confirms recipient and actual delivery. |
| P0 | No GA4 tag or authenticated Google performance data available. | Verified/linked Search Console and GA4, live consent-aware collection and signed-in browser reporting. Current GA property belongs to the agency account; review client access. |
| P1 | Schema asserted 100 five-star reviews and city-centre coordinates without evidence. Local testimonial explicitly labelled simulated in source. | Remove unsupported markup and simulated quotes. Confirm remaining business facts and reviews. |
| P1 | Sitemap used fixed January 2024 dates; article schema invented default dates. | Generate sitemap from indexable routes; omit dates without evidence. |
| P1 | Tailwind compiled in visitors' browsers; HTML referenced missing CSS. | Build CSS assets and verify appearance with/without JavaScript. |
| P1 | Public asset folder approximately 25 MB; large JPEGs and external autoplay video. This is disk size, not page-transfer size. | 1 October mobile laboratory baseline: home performance 56, roof repairs 69; prioritise video, image sizing and rendering delays, then repeat tests. No real-user CWV assessment is available. |
| P1 | Privacy, cookie and terms routes reuse one privacy page. Planned tracking and Formspree need accurate disclosure. | Distinct, accurate notices and cookie controls before analytics activation. |
| P1 | Other review claims, 500 roofs, 15+ years, guarantees and reused local-project captions lack evidence in the repository. | Obtain client evidence; correct unsupported claims and captions before release sign-off. |
| P2 | No repeatable SEO checks or project operating documentation. | One validation command, dated reports, a maintained backlog and scheduled review. |

Google can render JavaScript; these findings do not establish that the old site was unindexed. Static rendering reduces dependence on that step. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Self-serving local-business review markup is not a route to Google review stars. Use authentic visible reviews with traceable sources. [Google review guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

## Month one

Foundation batch deployed 1 October: rendered HTML, metadata/sitemap/404 fixes, contact handling, consent-aware analytics, Google linking and scheduled reviews. Search Console processed 23 sitemap URLs and GA4 Realtime received a validation visit. See `STATUS.md` for verification and remaining work; the agendas below describe the full month-one workflow.

### Session one: foundations and ownership — 60 minutes

- 0–10: confirm business details, Google owner account, lead recipient and access to Vercel, DNS and Business Profile.
- 10–25: create/verify the Search Console Domain property and GA4 web property; record identifiers and access.
- 25–45: review prepared technical fixes on a Vercel preview: priority pages, mobile form, 404s, canonical host and actual enquiry delivery.
- 45–60: release the validated batch, submit sitemap, inspect key URLs and record baseline/deployment. If access is incomplete, record the exact dependency and continue independent work.

AI preparation between sessions: implement consent and events once the measurement ID is available; validate GA4 collection; establish reporting access; run mobile performance checks; research local repair/replacement search results and competitors; prepare one service-page improvement using real job evidence. Record actual observations and dates, never invented keyword volume or positions.

### Session two: measurement and one commercial improvement — 60 minutes

- 0–15: review sitemap/indexing, canonical selection, errors and lead tracking. Fix foundation failures first.
- 15–35: review/release one improved commercial page, provisionally roof repairs: real work, repair scope, survey process, next steps and links from relevant guides/area pages.
- 35–50: verify Business Profile categories, areas, hours, website and contact details; improve with authentic job evidence where authorised. Avoid invented offices or keyword-stuffed names.
- 50–60: review the client-report draft and choose next month's highest-impact change. New tracking data is a baseline, not evidence of month-on-month growth.

### Month-one exit criteria

1. Live commercial pages return 200 with unique metadata, correct canonical, rendered content and links; unknown URLs return 404; noindex pages stay out of sitemap.
2. Search Console verified, sitemap submitted, key URLs inspected, manual actions/security reports checked.
3. GA4 uses the correct site, time zone and currency; consent works; one page view per route; accepted enquiries are validated.
4. Client confirms form delivery and business evidence. Clicks, accepted enquiries and qualified leads remain separate metrics.
5. Mobile performance measured and the largest real bottleneck addressed or assigned with evidence.
6. Business Profile details match verified facts; one commercial page is improved with genuine evidence.
7. Reporting access tested, baseline stored and next review prepared. Unavailable data is explicitly labelled.

## Initial page/intent map

This reflects existing content, not measured demand. Validate priorities against Search Console, local results and job profitability.

| Intent | Destination | Improvement focus |
| --- | --- | --- |
| Roofing services Hampshire | `/` | Clear services/region, substantiated trust signals, paths to commercial pages. |
| Roof repairs Hampshire | `/services/roof-repairs` | Repairs, diagnostic process, authentic project and links from leak/tile guides. |
| Pitched replacement Hampshire | `/services/pitched-roof-replacement` | Materials, survey decisions, verified guarantees and real project. |
| Flat replacement Hampshire | `/services/flat-roof-replacement` | Suitable systems, drainage/insulation advice reviewed by the roofer. |
| Leadwork / flashing Hampshire | `/services/leadwork-and-lead-flashing` | Junctions, chimneys and close-up evidence. |
| Roof pointing Hampshire | `/services/roof-pointing-and-cement-work` | Symptoms, scope and professional assessment. |
| Roofer in each current town/area | Four `/areas/…` pages | Genuine local work and coverage; avoid town-name-swapped duplicates. |
| Roofing symptoms and survey questions | Six `/guides/…` pages | Useful answers, tradesperson review, relevant service links. |

Do not mass-produce service-by-town pages or generic AI blogs. Expand when real demand, distinct usefulness and service coverage justify it. AI can organise and edit evidence; business facts and testimonials need genuine sources.

## Ongoing twice-monthly process

On the 1st, AI prepares the previous complete month's performance report and change proposal. Owner hour: 15 minutes on results/lead quality, 30 reviewing one prepared improvement, 15 on QA/release and the next decision.

On the 15th, AI checks technical health, indexing and progress using recent complete data. Owner hour: 15 minutes on exceptions, 30 on a content/local improvement, 15 on validation and recording results. In months two and three, improve the existing pages with the strongest opportunity and add one authentic case study when evidence is available.

Scheduled task: `hampshire-roof-care-seo-reviews`, in this task on the agreed dates. It prepares reviewable work and reports, not automatic production releases. Local work requires the computer and desktop app to be running; this is not an always-on cloud monitor. [Scheduled task documentation](https://learn.chatgpt.com/docs/automations).

Track organic qualified enquiries/booked work (client verified), accepted web enquiries, organic sessions/landing pages, Search Console clicks/impressions/CTR/average position, indexed priority pages and technical issues. Separate brand/non-brand where possible. Average position is not a fixed local rank; a phone click is not a call answered.

Every dated report records sources, windows, freshness, comparison periods, deployed changes, checks, results and next actions. Annotate tracking changes, seasonality and low volumes. Missing data is never zero. Draft client reports here; sending requires an explicit instruction.

## Mid-month progress — 15 October 2026

[Review brief and one-hour agenda](reports/2026-10-15-mid-month-review.md) saved with matched reporting windows and technical/indexing evidence. [October content draft](reports/2026-10-15-content-draft.md) is prepared for the new repair-or-replacement guide and related existing-page edits; implementation and publication remain pending. Business Profile is verified, and the [official review link, QR and customer-message draft](reports/2026-10-15-review-assets/README.md) are ready. No client messages or production changes were made. Prioritise commercial-page indexing, the reviewed content/email/performance batch, and genuine customer/job evidence.
