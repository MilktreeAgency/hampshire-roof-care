import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const { routes, indexable, origin } = JSON.parse(await readFile('dist/seo-routes.json', 'utf8'));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const titles = new Set();
const descriptions = new Set();
const errors = [];
const localLinks = new Set();
for (const route of [...routes, '/404']) {
  try {
    const html = await readFile(route === '/' ? 'dist/index.html' : `dist${route}.html`, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/name="description" content="([^"]+)"/)?.[1];
    assert(title && description, 'Missing title or description');
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, 'Expected one rendered H1');
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, 'Expected one canonical');
    assert(!html.includes('<!--app-html-->'), 'Empty application shell');
    assert(!html.includes('cdn.tailwindcss.com'), 'Runtime CSS compiler remains');
    assert(!html.includes('aggregateRating'), 'Unverified aggregate rating remains');
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(json);
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^" ]*"/g)) {
      const decoded = decodeURIComponent(href.replaceAll('&amp;', '&'));
      if (!decoded.startsWith('//')) localLinks.add(decoded);
    }
    if (indexable.includes(route)) {
      assert(!titles.has(title), 'Duplicate indexable title'); titles.add(title);
      assert(!descriptions.has(description), 'Duplicate indexable description'); descriptions.add(description);
      assert(html.includes(`rel="canonical" href="${origin}${route}"`), 'Canonical mismatch');
      assert(!html.includes('noindex'), 'Indexable route is noindexed');
      assert(sitemap.includes(`<loc>${origin}${route}</loc>`), 'Missing sitemap entry');
    } else {
      assert(html.includes('noindex'), 'Utility/error page should be noindexed');
      assert(!sitemap.includes(`<loc>${origin}${route}</loc>`), 'Noindex URL in sitemap');
    }
  } catch (error) { errors.push(`${route}: ${error.message}`); }
}
for (const link of localLinks) {
  if (routes.includes(link)) continue;
  try { await access(`dist${link}`); }
  catch { errors.push(`Broken internal link or asset: ${link}`); }
}
assert.equal((sitemap.match(/<loc>/g) || []).length, indexable.length, 'Sitemap count mismatch');
assert(!sitemap.includes('<lastmod>'), 'Do not add unsupported content dates');
if (errors.length) {
  console.error(errors.join('\n')); process.exitCode = 1;
} else console.log(`SEO checks passed: ${routes.length} pages + 404, ${indexable.length} unique indexable pages, ${localLinks.size} internal links/assets.`);
