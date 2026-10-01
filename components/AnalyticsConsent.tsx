import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { readConsent, saveConsent, trackEvent, trackPageView, CONSENT_KEY, type Consent } from '../lib/analytics';

export const openCookieSettings = () => window.dispatchEvent(new Event('hrc-cookie-settings'));

export default function AnalyticsConsent() {
  const location = useLocation();
  const [choice, setChoice] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = readConsent(); setChoice(saved); setOpen(!saved);
    const show = () => setOpen(true);
    const sync = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) window.location.reload(); };
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      const href = link?.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackEvent('click_to_call');
      if (href.startsWith('mailto:')) trackEvent('click_email');
    };
    window.addEventListener('hrc-cookie-settings', show);
    window.addEventListener('storage', sync);
    document.addEventListener('click', click);
    return () => {
      window.removeEventListener('hrc-cookie-settings', show);
      window.removeEventListener('storage', sync);
      document.removeEventListener('click', click);
    };
  }, []);
  useEffect(() => {
    if (choice !== 'accepted') return;
    // Metadata effects run first, so each virtual view has the new page title.
    const frame = requestAnimationFrame(() => trackPageView(location.pathname, location.key));
    return () => cancelAnimationFrame(frame);
  }, [choice, location.pathname, location.key]);
  const choose = (value: Consent) => { saveConsent(value); setChoice(value); setOpen(false); };
  if (!open) return null;
  return <section aria-labelledby="cookie-heading" aria-label="Cookie preferences" className="fixed z-[100] bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-warm-50 border border-primary-200 rounded-2xl shadow-soft-xl p-5 sm:p-6">
    <h2 id="cookie-heading" className="font-heading text-xl font-bold text-charcoal mb-2">Your cookie choice</h2>
    <p className="text-sm text-slate-body leading-relaxed mb-4">With your permission, we use Google Analytics to understand visits and enquiries. You can use the site without analytics and change your choice at any time.</p>
    <div className="grid grid-cols-2 gap-3">
      <button onClick={() => choose('rejected')} className="rounded-xl border-2 border-primary-600 text-primary-700 font-semibold py-3 px-2 hover:bg-primary-50">Reject analytics</button>
      <button onClick={() => choose('accepted')} className="rounded-xl border-2 border-primary-600 bg-primary-600 text-white font-semibold py-3 px-2 hover:bg-primary-700">Accept analytics</button>
    </div>
    <Link to="/cookie-policy" className="inline-block mt-3 text-sm text-primary-700 underline" onClick={() => setOpen(false)}>Read our cookie policy</Link>
  </section>;
}
