# SEO implementation status

Updated 1 October 2026. The first technical and analytics batch is deployed to production and tested. Source changes are preserved on `codex/month-one-seo-foundations`. The older `main` branch must be updated before any deployment from it. The site is not yet signed off as fully SEO-ready.

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

1. Confirm Formspree ownership/recipient and actual inbox delivery with the client. Mocked successful HTTP responses do not prove delivery; no real enquiry was sent in this task.
2. Verify remaining business/review claims, years, project counts, warranties, insurance and location-specific photos. Do not invent supporting evidence.
3. Review priority-page indexing after Google processes the new property. Collect the first complete reporting period; current reports are still processing.
4. Measure mobile performance, optimise the measured bottleneck and review remaining moderate router advisories.
5. Verify the existing Google Business Profile and improve one existing commercial page using real project evidence.
6. Complete the legal-notice review, especially the terms route still reusing privacy content. The analytics choice does not control existing Google Fonts, Vimeo or Formspree; no whole-site compliance sign-off is claimed.
7. Change the existing non-www 307 redirect to a permanent redirect in Vercel after checking domain configuration.
8. If always-on/API reporting is required, configure an approved reporting identity and collector. The current automation depends on this computer, app and signed-in browser.

## Ongoing release acceptance

Run `npm run check`; deploy a Vercel preview; inspect commercial/utility/missing URLs and mobile interactions; confirm relevant forms and factual copy. Record deployment and post-release checks. Preserve the prior Vercel deployment for rollback. Do not treat index eligibility as an indexing or ranking guarantee.

Google live inspection (1 October, 11:55 UK): roof repairs is available to Google and can be indexed, with one valid breadcrumb item. Indexing was requested and Google confirmed addition to its priority crawl queue. This does not establish that indexing is complete.
