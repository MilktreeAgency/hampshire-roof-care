import { build, createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

await build();
const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<!--seo-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('Static rendering placeholders are missing');
}
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
try {
  const { routes, origin, render } = await server.ssrLoadModule('/entry-server.tsx');
  const indexable = [];
  for (const route of [...routes, '/404']) {
    const result = render(route);
    const file = route === '/' ? 'dist/index.html' : `dist${route}.html`;
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, template.replace('<!--seo-head-->', () => result.head).replace('<!--app-html-->', () => result.html));
    if (result.indexable) indexable.push(route);
  }
  // No fabricated lastmod values: add dates only when backed by actual content changes.
  await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    indexable.map(route => `  <url><loc>${origin}${route}</loc></url>`).join('\n') + '\n</urlset>\n');
  await writeFile('dist/seo-routes.json', JSON.stringify({ origin, routes, indexable }, null, 2));
  console.log(`Generated ${routes.length} static pages, a 404 page and ${indexable.length} sitemap URLs.`);
} finally {
  await server.close();
}
