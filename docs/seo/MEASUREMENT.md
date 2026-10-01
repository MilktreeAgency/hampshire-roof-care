# Google measurement and reporting setup

Verified 1 October 2026 using the user's existing signed-in Chrome tabs. The user created the properties; this task configured and connected them. No duplicate properties or new credentials were created.

## Setup register

| Item | Verified state |
| --- | --- |
| Signed-in Google user | `levi@milktreeagency.com`; verified Search Console owner |
| Search Console | Domain property `sc-domain:hampshireroofcare.co.uk` |
| Sitemap | `https://www.hampshireroofcare.co.uk/sitemap.xml`; processed successfully, 23 discovered pages |
| GA account | Milktree, `193548959` (agency account from the user's setup) |
| GA4 property | Hampshire Roof Care Company, `556932982` |
| Web stream | `15921862823`, `https://www.hampshireroofcare.co.uk` |
| Measurement ID | `G-DW33S98E2J` |
| Reporting settings | United Kingdom time (seasonal UK time), GBP |
| Search Console–GA4 link | Created and verified for the domain and web stream |
| Enhanced measurement | Disabled to avoid overlap with explicit app events |
| Primary key event | `generate_lead`, once per event, no default monetary value |
| Reporting API identity | Not configured; browser reports available via signed-in Chrome |
| Vercel | `milktree-agencys-projects/hampshire-roof-care`; production deployed |
| Business Profile | URL/access/details still need verification |
| Formspree | Existing endpoint reused; recipient and inbox delivery unconfirmed |
| DNS provider | User has full access; provider not recorded; no DNS changes made here |

Ownership should be reviewed with the client so the client retains suitable access. No ownership or permission changes were made in this task.

## Live collection and consent

`lib/analytics.ts` loads Google's tag only after explicit acceptance and only on the www/apex production hosts. Preview/local visits do not collect analytics. Choices expire after 180 days and can be changed using the footer's Cookie settings. Rejection stops collection, removes this site's GA cookies and reloads if the SDK had started. Consent-denied storage/advertising defaults and disabled advertising signals accompany the opt-in implementation.

Manual page views cover initial loads, client navigation and back/forward with automatic `send_page_view` disabled. Known paths are allowlisted; query strings, fragments and full referrers are excluded. No form names, email addresses, phone numbers, postcodes, messages or raw form values enter analytics payloads.

| Event | Trigger | Meaning |
| --- | --- | --- |
| `page_view` | Consented initial or virtual page view | Usage, not a lead |
| `generate_lead` | Formspree accepts contact/quote request | Primary web key event; not qualified work or proof of inbox delivery; allowlisted `form_id` |
| `click_to_call` | Telephone link click | Intent, not a connected call |
| `click_email` | Email link click | Intent, not an email sent |
| `quote_start` | Quote modal deliberately opened | Funnel diagnostic, not a lead |

Live validation: zero Google tags before acceptance, one after acceptance, zero after withdrawal/reload. GA4 Realtime showed one test visitor and one `page_view` with the correct roof-repairs title. Automated isolated tests cover event payloads, consent expiry, unavailable storage, back navigation, deduplication and SDK failure. Mocked form tests cover failure/retry/success; no real lead was submitted, so live `generate_lead` and inbox delivery remain to be verified.

The separate cookie page and updated privacy copy describe analytics plus existing providers. Existing Google Fonts, Vimeo and Formspree are not controlled by the analytics choice. Terms/privacy content and all providers still need a full legal/privacy review; this is not a compliance certification.

References: [SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications?hl=en), [page views](https://developers.google.com/analytics/devguides/collection/ga4/views?hl=en), [Search Console linking](https://support.google.com/analytics/answer/10737381?hl=en-419).

## Reporting automation

The active review task runs on the 1st and 15th at 09:00 Europe/London. It uses approved APIs if available, otherwise the signed-in Chrome reports, and records unavailable/processing data explicitly. It prepares dated reports and a 60-minute review agenda in this project. This computer and the Codex desktop app must be running, with the required session/network access. No always-on cloud collector has been provisioned.

A processed sitemap establishes discovery, not indexing. The first indexed-state inspection of roof repairs said the URL was unknown to Google; record the live test separately from indexed state. Other priority-page inspections, security/manual-action checks and a complete organic reporting baseline remain follow-up work. New GA data cannot establish historical traffic or month-on-month growth.

## Automated data pulls: next implementation after access

The scheduled task can run local checks now. A browser tag does not grant private reporting access. Use a client-controlled Google Cloud project with Search Console and Analytics Data APIs enabled and an approved reporting identity with Search Console read access and GA4 Viewer access. Store credentials securely outside Git/browser code; prefer managed credentials where available. Never use `VITE_*` for secrets.

The collector must:

- Query Search Analytics for complete available dates, separating totals, page, query and device. Paginate and record filters/windows. Anonymised or limited query rows need not sum to property totals; respect the API's date semantics.
- Query GA4 organic sessions, engagement and accepted lead events using session-channel filtering, with secondary clicks separate. Compare equal complete periods; annotate freshness and scope.
- Save dated aggregate results and reports under `docs/seo/reports/`. Keep credentials, personal data and sensitive raw exports outside Git.
- Record per-source errors and last successful collection. Preserve prior history; unavailable data must not become zero.
- Refresh credentials securely, handle rate limits and support dry-run/testing. Prove a successful real collection before calling reporting connected.

References: [Search Analytics API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query), [Analytics Data API](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart).


Google live inspection (1 October, 11:55 UK): roof repairs is available to Google and can be indexed, with one valid breadcrumb item. Indexing was requested and Google confirmed addition to its priority crawl queue. This does not establish that indexing is complete.
