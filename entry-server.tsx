import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { SEOContext, BASE_URL, type HeadData } from './components/SEO';
import { services, areas, guides } from './lib/content';

export const routes = [
  '/', '/services', ...services.map(page => `/services/${page.slug}`),
  '/areas', ...areas.map(page => `/areas/${page.slug}`),
  '/guides', ...guides.map(page => `/guides/${page.slug}`),
  '/about', '/contact', '/reviews', '/faqs', '/privacy-policy', '/terms', '/cookie-policy',
];
export const origin = BASE_URL;
const escape = (text: string) => text.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]!);

export function render(url: string) {
  let head: HeadData | undefined;
  const html = renderToString(
    <SEOContext.Provider value={data => { head = data; }}>
      <StaticRouter location={url}><App /></StaticRouter>
    </SEOContext.Provider>,
  );
  if (!head) throw new Error(`Missing metadata for ${url}`);
  return {
    html,
    indexable: !head.tags.some(tag => tag.key === 'robots' && tag.value.includes('noindex')),
    head: `<title>${escape(head.title)}</title>\n<link data-seo rel="canonical" href="${escape(head.canonical)}">\n` +
      head.tags.map(tag => `<meta data-seo ${tag.property ? 'property' : 'name'}="${escape(tag.key)}" content="${escape(tag.value)}">`).join('\n'),
  };
}
