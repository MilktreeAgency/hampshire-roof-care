# SEO implementation status

Updated 15 October 2026. Latest review: [mid-month brief](reports/2026-10-15-mid-month-review.md). The first technical and analytics batch is deployed to production and tested. Source changes are preserved on `codex/month-one-seo-foundations`. The older `main` branch must be updated before any deployment from it. The site is not yet signed off as fully SEO-ready.

## Current position — 15 October 2026

- Google Business Profile is **Verified**. Official review link and scan-tested QR files are ready in [review assets](reports/2026-10-15-review-assets/README.md). Earlier pending-verification notes below are historical.
- Signed-in Google reports are available. The treg team connection is unavailable, so unattended API reporting remains blocked; no new access was created.
- GSC coverage (updated 9 October): 7 indexed and 20 not indexed across known URLs; roof repairs still reports unknown to Google. Sitemap remains successful with 23 URLs, last read 6 October. No manual actions or security issues detected.
- Equal complete windows 7–11 versus 2–6 October: GSC 0 versus 8 clicks, 110 versus 229 impressions; GA4 Organic Search 0 versus 6 sessions. Low counts do not support trend or attribution claims. October enquiries and qualified outcomes remain unknown; clicks and key events are not a replacement for client confirmation.
- `npm run check` passed and sampled production checks passed. Public email is still the old Gmail address; the local correction is pending release. New October guide is not live. [Content draft](reports/2026-10-15-content-draft.md) is ready for editorial review.
- No source-code changes, commit, deployment, customer message or real form submission was made in this review. Existing working-tree changes were preserved. The 1 October mobile speed baseline has not been rerun.
- Next: priority-page live inspections; review October content/email/performance release; begin genuine review collection and gather job evidence. Full evidence and 60-minute agenda are in the linked brief.

## Completed and deployed

- Static HTML generation for 26 existing routes, plus a 404 page; hydration preserves interactive navigation.
- Page-specific metadata, www canonicals and structured data in generated responses.
- Generated sitemap covering 23 indexable URLs; utility pages excluded; unsupported dates removed.
- Global and invalid-slug noindex fallback. Vercel clean URL configuration replaces the catch-all rewrite; production direct service URLs return 200 and unknown nested URLs return 404.
- Build-time Tailwind/CSS assets, replacing the CDN compiler and missing CSS reference.
- Contact form wired to the same Formspree endpoint as the quote modal, named/labelled fields, required service selection, success/error handling, retry and submission timeout. Nonfunctional upload promise removed.
- Mobile contact layout adjusted after visual inspection found clipped cards/form content.
- Simulated local testimonials and unsupported aggregate-rating/coordinates/hours markup removed. Other visible business/review claims still need evidence.
- React Router 6.30.6 and compatible dependency fixes applied. Audit reduced from seven findings after initial tooling setup to two moderate findings requiring a separate router-major-version review; no high findings remained in the last audit. This is not a security certification.
- Consent-aware GA4 with manual page views, accepted-form lead events, phone/email clicks and quote starts. Reject/accept/settings/withdrawal and a distinct cookie policy are live.
- Search Console–GA4 link, UK time zone/GBP, and `generate_lead` key event (once per event, no assigned revenue value).
- SEO/analytics validation commands, project plan, measurement register and dated baseline report.

## Automation

Created active task `hampshire-roof-care-seo-reviews`: 1st and 15th of each month, 09:00 Europe/London. It prepares work and a one-hour review agenda in this task, preserves existing work and records unavailable sources. Current service areas retained by user instruction.

The desktop app/computer must be running for local work, and required network/account access must be available. The scheduled task can read the signed-in Google reports through Chrome. No reporting API identity or unattended API collector is configured. Future production releases remain reviewable. The task must never invent metrics or treat missing data as zero.

## Verification completed

- `npm run check`: TypeScript, isolated consent/event tests, production build and SEO checks passed.
- 26 pages plus 404 checked; 23 unique indexable titles/descriptions and correct canonical/sitemap coverage; 50 internal paths/assets checked; one H1 per page and parseable JSON-LD.
- Local Chrome: home, service, area, guide and contact direct loads; router navigation updates canonical; missing URL returns 404/noindex; no React hydration errors.
- Mocked contact form: failed request retains input, retry succeeds, success clears input. No real message was sent.
- Mobile contact visual inspection and JS-disabled service-page content check completed.
- Production GA4 Realtime received one validation page view with the correct roof-repairs page title. This was a test visit, not an organic-performance result. Live rejection after acceptance removed the tag.
- Search Console processed the submitted sitemap successfully: 23 discovered pages on 1 October. Discovered does not mean indexed.
- Build reports a roughly 500 KB uncompressed main JavaScript chunk (~140 KB gzip). Performance work remains; no Core Web Vitals score claimed.

## Release record

- Production: https://www.hampshireroofcare.co.uk
- Deployment: `dpl_2DtUybAfHZF6rBUHZbrj8nAoRcHA` ([Vercel record](https://vercel.com/milktree-agencys-projects/hampshire-roof-care/2DtUybAfHZF6rBUHZbrj8nAoRcHA)).
- Preview: https://hampshire-roof-care-hkuodd22o-milktree-agencys-projects.vercel.app
- Public response checks: correct service metadata/rendered content, 23 www sitemap URLs, no commercial-page noindex, true missing-page 404.
- Source-control follow-up: review/merge `codex/month-one-seo-foundations` before any redeployment from the older GitHub main branch, which would revert these changes.

## Next actions, in order

1. The user confirms two September website enquiries reached the inbox through Formspree. Formspree was inspected on 1 October: the two September submissions are dated 13 September (slipped-tile repair) and 26 September (reroofing quote). Inbox delivery is business-confirmed. Record enquiry quality and outcomes; recipient/account ownership and live GA4 lead-event validation remain separate follow-ups. No real enquiry was sent in this task.
2. The user confirms existing feedback was received in person. Confirm customer-approved testimonial wording/permission and supporting records for remaining guarantees, insurance and location-specific photos. Prepare the Google review link and QR code after Business Profile approval.
3. Review priority-page indexing after Google processes the new property. Collect the first complete reporting period; current reports are still processing.
4. Optimise the measured mobile bottlenecks: 1 October PageSpeed mobile scores were 56 for home and 69 for roof repairs. Defer the heavy homepage video, resize service images and reduce rendering delays, then repeat these tests. Review remaining moderate router advisories separately.
5. Google Business Profile setup is complete per the user; verification is pending. Check public details/photos when Google approves it. October includes a new repair-versus-replacement guide, two service-page improvements and an existing slipped-tile guide update; add a local project page once actual job evidence is supplied. See PLAN.md.
6. Complete the legal-notice review, especially the terms route still reusing privacy content. The analytics choice does not control existing Google Fonts, Vimeo or Formspree; no whole-site compliance sign-off is claimed.
7. Change the existing non-www 307 redirect to a permanent redirect in Vercel after checking domain configuration.
8. If always-on/API reporting is required, configure an approved reporting identity and collector. The current automation depends on this computer, app and signed-in browser.

## Ongoing release acceptance

Run `npm run check`; deploy a Vercel preview; inspect commercial/utility/missing URLs and mobile interactions; confirm relevant forms and factual copy. Record deployment and post-release checks. Preserve the prior Vercel deployment for rollback. Do not treat index eligibility as an indexing or ranking guarantee.

Google live inspection (1 October, 11:55 UK): roof repairs is available to Google and can be indexed, with one valid breadcrumb item. Indexing was requested and Google confirmed addition to its priority crawl queue. This does not establish that indexing is complete.

## September catch-up: on-page batch completed 1 October

- Corrected duplicate brand suffixes on all six guide titles; added a regression check.
- Homepage and service headings state the service and Hampshire coverage clearly.
- Corrected body heading levels across five services, four areas and six guides.
- Added two survey questions per service and relevant service-to-guide/coverage links.
- All four area pages link service mentions to the appropriate service page.
- Guides show topic-relevant service links on desktop and mobile; article content comes before the sidebar on mobile.
- FAQ answers remain in the generated HTML, with accessible expanded-state controls.
- Reused gallery photos no longer claim to show work in every town or every service type; photo subjects have descriptive alt text and galleries load lazily.
- Removed the unsubstantiated homepage 100+ five-star review count and About-page project/experience/satisfaction/rating totals; replaced with service-process information. Existing individual testimonials, rating badges, insurance and guarantee claims still need owner evidence.
- Contact page includes the weekend-appointment detail recorded during Business Profile setup. At that release the public email was unchanged. The user subsequently confirmed asa@hampshireroofcare.co.uk; local contact/footer/policy/schema source is now corrected, pending deployment.

Checks: `npm run check` passed for 26 pages plus 404 and 23 sitemap URLs. Chrome at 390px: service guidance readable; FAQ expand/collapse passed; guide related-service section visible; no horizontal guide overflow. No real form submission was sent. This is September-scope catch-up work performed on 1 October; no dates or results have been backdated.

Sources used for the on-page approach: [Google title guidance](https://developers.google.com/search/docs/appearance/title-link) and [internal link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). No ranking uplift is claimed from this implementation.

On-page release: [Vercel deployment dpl_84ufH8SxiTtyQhDHp6dywnaHGrWh](https://vercel.com/milktree-agencys-projects/hampshire-roof-care/84ufH8SxiTtyQhDHp6dywnaHGrWh), aliased to www.hampshireroofcare.co.uk. Production guide HTML confirms the corrected title, H2 section and relevant service link.

## Client report and mobile baseline, 1 October

Milktree-branded client PDF prepared under `output/pdf/`, covering September setup scope finalised on 1 October, three local competitor websites, the current mobile baseline and October priorities. No work dates, rankings or organic attribution were backdated. Two September enquiries are user-confirmed; sources and commercial outcomes are unknown. Business Profile verification is still pending.

PageSpeed Insights mobile tests: home performance 56/100, LCP 12.2 seconds; roof repairs 69/100, LCP 12.8 seconds. Both had SEO 100/100 and CLS 0 in these single laboratory runs. The homepage downloaded 17,998 KiB, about 93% from Vimeo; service image optimisation showed estimated savings of 2,541 KiB. No real-user Chrome performance data was available. See `reports/2026-10-01-mobile-speed.json` for source URLs, methodology and other scores. These results establish priorities, not completed speed improvements or a Core Web Vitals assessment.

Report revision: seven pages, using the supplied Milktree SVG, black/yellow palette, Satoshi body font and Instrument Sans headings. All seven pages rendered and visually checked. Brand assets/profile and the reference builder are saved under `brand/` and `reporting/`; future report instructions are in PLAN.md. The October content plan now includes a new decision guide, two service-page improvements, an existing guide refresh and a conditional local project page. Review link/QR preparation follows Google profile approval.

The public email correction to `asa@hampshireroofcare.co.uk` is implemented in local footer, contact/privacy/cookie copy and organisation schema. `npm run check` passed after this change (typecheck, analytics tests, static build, 26 routes plus 404 and 23 sitemap URLs). This email correction has not been deployed. The report does not claim it is already live. September Formspree dates/count are recorded without personal data in `reports/2026-09-formspree-summary.json`.
