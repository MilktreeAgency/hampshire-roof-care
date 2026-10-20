# Milktree Agency | Hampshire Roofcare

## Mid-month SEO review — 15 October 2026

Prepared for the one-hour October review. This is an internal working brief, not a claim that the October content programme has been completed. No production changes or client messages were made during this review.

**Main finding:** Google Business Profile is now verified, so customer review collection can begin. The website passes the sampled technical checks, but important commercial pages are still not confirmed indexed. The prepared public-email correction and planned October guide are not live.

### Three priorities

1. **Resolve priority-page indexing.** Search Console still says the roof-repairs URL is unknown to Google. Pitched replacement and Winchester appear under crawled but not indexed with old crawl dates. Run fresh live inspections, review rendered content and internal links, then request a crawl after any substantive corrections. The 1 October crawl request did not establish indexing. Eligibility and requests cannot guarantee inclusion.
2. **Prepare and review the October content release.** Use the accompanying repair-versus-replacement draft, improve the repairs and pitched-replacement pages, refresh slipped-tile guidance, and include the local email correction to `asa@hampshireroofcare.co.uk`. Keep the existing service areas. Review factual roofing claims with Asa and include real job evidence when available. Address the measured video/image bottlenecks in the next implementation batch; do not call the old speed scores current.
3. **Start genuine Google review collection.** The verified profile's official review link and independently decoded QR assets are ready. The client can invite existing and previous customers to give honest feedback. Collect job photos and permission for a future local project page. No customer requests have been sent by this task.

### Early reporting: equal, complete five-day windows

| Metric | 2–6 October | 7–11 October |
| --- | ---: | ---: |
| Google Search clicks | 8 | 0 |
| Google Search impressions | 229 | 110 |
| Search click-through rate | 3.5% | 0% |
| Average search position | 30.0 | 26.2 |
| GA4 sessions, all channels | 8 | 1 |
| GA4 Organic Search sessions | 6 | 0 |
| GA4 key events, all channels | 0 | 0 |
| Organic email-link clicks | 1 | 0 |
| Organic phone-link clicks | 1 | 0 |

Source: authenticated Search Console Web performance and GA4 traffic acquisition, read on 15 October. Both comparisons contain five complete days, exclude the setup date and avoid the latest processing tail. Counts are too small to establish a stable trend or attribute a change to SEO. The periods contain different weekdays. GSC uses Pacific reporting dates and GA4 uses UK time; the systems should not be expected to match exactly. Average position depends on the searches and pages shown, and is not a fixed local ranking.

The earlier email and telephone clicks indicate interest; they do not prove an email was sent or a call connected. GA4 recorded no key events in these windows, but live accepted-form tracking still needs validation and consent limits measurement. October accepted enquiries and qualified leads are **unknown**, not zero. The two confirmed Formspree enquiries belong to September; their traffic sources and commercial outcomes remain unknown.

New Forest, lead-flashing guidance and Southampton received 41, 29 and 18 page impressions respectively in the current window. These are small observed signals for future content refinement, not keyword-volume estimates. Page and query rows need not sum to property totals. No new competitor/rank-tracking audit was run today.

### Indexing and technical health

- Coverage report, last updated 9 October: **7 indexed, 20 not indexed** across known URLs. The latter comprises 14 discovered but not indexed, 2 crawled but not indexed, 2 redirects, 1 noindex and 1 alternative canonical. Expected redirects/utility exclusions are not automatically faults; these 27 known URLs are not the same set as the 23 sitemap URLs.
- Sitemap status remains **Success**, 23 discovered pages; last read 6 October. Discovery does not establish indexing.
- Roof repairs inspection on 15 October: URL not on Google / unknown to Google; no last crawl or referring sitemap shown. The public page returns 200 with rendered text, a self-referencing www canonical and index/follow instructions. No fresh live Google test or repeat indexing request was made today.
- Crawled-not-indexed examples: pitched replacement, last crawl 11 July; Winchester, last crawl 31 May. Both dates predate the October static-HTML work, which makes a fresh live inspection useful.
- Manual actions and security issues: **No issues detected** in both reports.
- Public home, repairs, pitched replacement, slipped-tile guide, Southampton and contact samples returned 200 with appropriate titles, canonicals and indexable instructions. Robots and sitemap returned 200; an invented missing route returned 404/noindex.
- The planned `/guides/roof-repair-or-replacement` still returns 404. It is not yet published. Live pages still link to the old Gmail address; the confirmed business address exists only in the local changes.
- The non-www HTTPS host still uses a 307 redirect. Review Vercel's domain configuration before changing it to a permanent redirect.

### Work completed in this review

- Read the project plan, status and measurement register; preserved existing source changes and untracked reporting assets.
- Ran `npm run check` successfully: TypeScript, isolated analytics tests, build and SEO checks; 26 routes plus 404, 23 indexable sitemap URLs and 50 internal paths/assets checked. A 511.52 KB uncompressed main JS chunk (143.35 KB gzip) remains a build warning.
- Read authenticated Google performance, indexing, sitemap, manual-action, security and business-profile reports without changing permissions or creating credentials.
- Verified the official review link opens the Hampshire Roofcare Company review form. Created PNG/SVG QR assets and decoded the PNG back to the exact URL. No review was posted.
- Prepared the October guide and on-page edit brief as local review material, plus a customer review-request draft. Updated project records and saved aggregate evidence without customer personal data.

No new mobile speed test was run. The **1 October laboratory baseline** remains home 56/100 with LCP 12.2s and roof repairs 69/100 with LCP 12.8s. That run identified heavy Vimeo transfers and service images; it does not describe current real-user Core Web Vitals. Repeat the same mobile tests after the performance changes.

### Access and remaining evidence

Signed-in Chrome access works for GSC, GA4 and Business Profile. The treg API connection returned “the team named in this grant (milktreeagency) is no longer available”; unattended API reporting remains unavailable. Browser reporting allowed this review to proceed. Restore the approved connection separately if reliable unattended collection is required; no workaround credentials or expanded access were created.

Needed from the business: October enquiry outcomes, customer-approved job photos/details, and confirmation of proposed roofing copy and remaining guarantees/testimonials. Live `generate_lead` still needs to be matched to a consented accepted enquiry; do not create a real test enquiry without an agreed test arrangement. Profile verification is no longer a blocker.

The previous deployed batch remains the 1 October on-page release. Review/merge the SEO branch before redeploying from older `main`. This review authorises no new production release.

### 60-minute review agenda

| Time | Focus | Result |
| --- | --- | --- |
| 0–10 min | Confirm October enquiry quality and review the small reporting sample | Separate real enquiries from click events; record outcomes |
| 10–25 min | Live-inspect repairs, pitched replacement and Winchester | Record crawl eligibility and precise next fixes |
| 25–45 min | Review the guide, service edits, email correction and performance batch | Agree one scoped implementation/release package |
| 45–55 min | Review QR assets and gather customer/job evidence | Client has an honest review request and photo brief |
| 55–60 min | Confirm owners, release checks and next reporting date | Clear actions for the 1 November monthly review |

### Files and sources

- [Aggregate evidence](2026-10-15-evidence.json) and [public response checks](2026-10-15-public-checks.json).
- [October content draft](2026-10-15-content-draft.md).
- [Review QR PNG](2026-10-15-review-assets/hampshire-roofcare-google-review-qr.png), [vector SVG](2026-10-15-review-assets/hampshire-roofcare-google-review-qr.svg), and [usage/message draft](2026-10-15-review-assets/README.md).
- [Official customer review link](https://g.page/r/CdUkZX3eXwjuEBM/review).
- [Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Ahampshireroofcare.co.uk), [GA4](https://analytics.google.com/analytics/web/#/a193548959p556932982/reports/intelligenthome), [Business Profile](https://business.google.com/locations).
- Google explains [index eligibility](https://developers.google.com/search/docs/essentials/technical) and [crawl requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl); neither guarantees indexing.
