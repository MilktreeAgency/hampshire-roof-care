import { services, areas, guides } from './content';

export const MEASUREMENT_ID = 'G-DW33S98E2J';
export const CONSENT_KEY = 'hrc-cookie-choice-v1';
export type Consent = 'accepted' | 'rejected';
const SIX_MONTHS = 180 * 24 * 60 * 60 * 1000;
const ORIGIN = 'https://www.hampshireroofcare.co.uk';
const knownPaths = new Set(['/', '/about', '/contact', '/reviews', '/faqs', '/privacy-policy', '/cookie-policy', '/terms',
  '/services', '/areas', '/guides', ...services.map(p => `/services/${p.slug}`),
  ...areas.map(p => `/areas/${p.slug}`), ...guides.map(p => `/guides/${p.slug}`)]);
export const safePagePath = (path: string) => knownPaths.has(path) ? path : '/404';

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
let memoryChoice: Consent | null = null;
let started = false;
let lastView = '';
let previousLocation = '';

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return memoryChoice;
    const saved = JSON.parse(raw);
    if (saved.version === 1 && saved.expires > Date.now() && ['accepted', 'rejected'].includes(saved.choice)) return saved.choice;
    return null;
  } catch { return memoryChoice; }
}

function clearAnalyticsCookies() {
  const domains = ['', window.location.hostname, `.${window.location.hostname}`, '.hampshireroofcare.co.uk', 'hampshireroofcare.co.uk'];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (name !== '_ga' && !name.startsWith('_ga_')) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`;
  }
}

export function saveConsent(choice: Consent) {
  memoryChoice = choice;
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: 1, choice, expires: Date.now() + SIX_MONTHS })); } catch { /* Session-only preference when storage is unavailable. */ }
  if (choice === 'rejected') {
    (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = true;
    try {
      (window as AnalyticsWindow).gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    } catch { /* A blocked analytics script must not prevent withdrawal. */ }
    clearAnalyticsCookies();
    lastView = '';
    // Unload Google's timers/listeners after withdrawal, including automatic engagement.
    if (started) window.location.reload();
  }
}

export function analyticsAllowed() {
  return typeof window !== 'undefined' &&
    ['www.hampshireroofcare.co.uk', 'hampshireroofcare.co.uk'].includes(window.location.hostname) &&
    readConsent() === 'accepted';
}

function startAnalytics() {
  if (!analyticsAllowed()) return false;
  if (started) return true;
  const target = window as AnalyticsWindow;
  (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = false;
  target.dataLayer = target.dataLayer || [];
  target.gtag = function () { target.dataLayer!.push(arguments); };
  target.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  target.gtag('js', new Date());
  target.gtag('config', MEASUREMENT_ID, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_expires: SIX_MONTHS / 1000,
    page_location: ORIGIN + safePagePath(window.location.pathname),
    page_referrer: safeReferrer(document.referrer),
  });
  const script = document.createElement('script');
  script.id = 'google-analytics-tag'; script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
  started = true;
  return true;
}

function safeReferrer(referrer: string) {
  try { return referrer ? new URL(referrer).origin : ''; } catch { return ''; }
}

export function trackPageView(path: string, navigationKey: string) {
  try {
  if (!startAnalytics()) return;
  const signature = `${navigationKey}:${path}`;
  if (lastView === signature) return;
  const page_location = ORIGIN + safePagePath(path);
  const params = { page_location, page_title: document.title, page_referrer: previousLocation || safeReferrer(document.referrer) };
  const gtag = (window as AnalyticsWindow).gtag!;
  gtag('set', params);
  gtag('event', 'page_view', params);
  lastView = signature; previousLocation = page_location;
  } catch { /* Analytics must not interrupt navigation. */ }
}

export function trackEvent(name: 'generate_lead' | 'click_to_call' | 'click_email' | 'quote_start', form?: 'contact' | 'quote') {
  try {
  if (!startAnalytics()) return;
  (window as AnalyticsWindow).gtag!('event', name, {
    page_location: ORIGIN + safePagePath(window.location.pathname),
    ...(form ? { form_id: form } : {}),
  });
  } catch { /* A measurement failure must never turn a delivered enquiry into an error. */ }
}
