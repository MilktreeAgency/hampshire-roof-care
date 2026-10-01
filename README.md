# Hampshire Roof Care

React/Vite website, statically rendered at build time and hydrated for navigation and enquiries. Preferred production origin: https://www.hampshireroofcare.co.uk.

- [SEO plan and monthly workflow](docs/seo/PLAN.md)
- [Current status](docs/seo/STATUS.md)
- [Google measurement setup](docs/seo/MEASUREMENT.md)

Use Node.js 22 or later. Install with `npm ci`. No Gemini key is required.

```sh
npm run dev       # development app
npm run check     # typecheck, analytics tests, production build and SEO checks
npm run preview   # production HTML at http://127.0.0.1:4173, including 404 responses
```

`scripts/build.mjs` renders routes from `entry-server.tsx` into `dist`, using the same components and metadata as browser navigation. The sitemap excludes noindex pages. Add new top-level routes to both `App.tsx` and `entry-server.tsx`. Services, areas and guide slugs come from `lib/content.ts`.

Vercel must run `npm run build`, publish `dist`, and use the repository's clean URL configuration. Do not restore a catch-all rewrite to `index.html`: it defeats page-specific HTML and 404 responses. Verify direct URLs and missing-page status on a Vercel preview before releasing.

Both enquiry forms share the existing Formspree endpoint in `lib/enquiries.ts`. Mocked tests do not establish inbox delivery; confirm the recipient and delivery with the client. GA4 `G-DW33S98E2J` is live behind analytics consent. Search Console is verified and linked; the sitemap has been processed. See the measurement register for IDs, collection behaviour and reporting limits. Never commit API credentials or put them in browser code.
