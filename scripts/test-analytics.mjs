import assert from 'node:assert/strict';
import { createServer } from 'vite';

// Isolated browser API doubles: no browser is controlled, and no network hit is sent.
const values = new Map(); const scripts = []; const expiredCookies = []; let reloads = 0;
globalThis.localStorage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
globalThis.window = { location: { hostname: 'www.hampshireroofcare.co.uk', pathname: '/', reload: () => reloads++ } };
globalThis.document = {
  title: 'Roofing Services | Hampshire Roof Care',
  referrer: 'https://www.google.com/search?q=private-search-term',
  createElement: () => ({}), head: { appendChild: script => scripts.push(script) },
  get cookie() { return '_ga=mock; _ga_DW33S98E2J=mock; other=keep'; },
  set cookie(value) { expiredCookies.push(value); },
};
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
try {
  const analytics = await server.ssrLoadModule('/lib/analytics.ts');
  const { saveConsent, readConsent, trackPageView, trackEvent, CONSENT_KEY, safePagePath } = analytics;
  assert.equal(readConsent(), null);
  trackPageView('/', 'first'); trackEvent('generate_lead', 'contact');
  assert.equal(scripts.length, 0, 'No tag before consent');
  saveConsent('rejected'); trackPageView('/', 'first'); assert.equal(scripts.length, 0);
  saveConsent('accepted'); trackPageView('/', 'first'); trackPageView('/', 'first');
  assert.equal(scripts.length, 1);
  const commands = () => window.dataLayer.map(args => Array.from(args));
  assert.equal(commands().filter(([kind, name]) => kind === 'event' && name === 'page_view').length, 1, 'StrictMode/double effect deduplicated');
  const config = commands().find(([kind]) => kind === 'config')[2];
  assert.equal(config.send_page_view, false); assert.equal(config.allow_google_signals, false);
  assert.equal(config.page_referrer, 'https://www.google.com');
  assert.equal(commands()[0][2].ad_storage, 'denied');
  window.location.pathname = '/contact'; document.title = 'Contact | Hampshire Roof Care';
  trackPageView('/contact', 'second'); trackEvent('generate_lead', 'contact');
  const lead = commands().find(([, name]) => name === 'generate_lead')[2];
  assert.deepEqual(Object.keys(lead).sort(), ['form_id', 'page_location']);
  assert.equal(lead.form_id, 'contact');
  trackPageView('/', 'first');
  assert.equal(commands().filter(([kind, name]) => kind === 'event' && name === 'page_view').length, 3, 'Back navigation records a view');
  assert.equal(safePagePath('/someone@example.com'), '/404');
  assert.equal(JSON.stringify(commands()).includes('private-search-term'), false);
  const beforeReject = commands().filter(([kind]) => kind === 'event').length;
  saveConsent('rejected'); trackEvent('click_to_call');
  assert.equal(commands().filter(([kind]) => kind === 'event').length, beforeReject);
  assert.equal(reloads, 1); assert.equal(window['ga-disable-G-DW33S98E2J'], true);
  assert(expiredCookies.some(value => value.startsWith('_ga=')));
  assert(!expiredCookies.some(value => value.startsWith('other=')));
  values.set(CONSENT_KEY, JSON.stringify({ version: 1, choice: 'accepted', expires: 0 }));
  assert.equal(readConsent(), null, 'Expired consent is not accepted');
  saveConsent('accepted'); window.location.hostname = 'localhost';
  trackEvent('generate_lead', 'quote'); assert.equal(scripts.length, 1, 'Local previews do not load GA');
  window.location.hostname = 'www.hampshireroofcare.co.uk';
  window.gtag = () => { throw new Error('Blocked script'); };
  assert.doesNotThrow(() => trackEvent('generate_lead', 'quote'));
  console.log('Analytics tests passed: consent, expiry, one-time tag, page deduplication/back navigation, safe fields/referrer, withdrawal, local-host exclusion, blocked SDK. No network events sent.');
} finally {
  await server.close();
  delete globalThis.window; delete globalThis.document; delete globalThis.localStorage;
}
