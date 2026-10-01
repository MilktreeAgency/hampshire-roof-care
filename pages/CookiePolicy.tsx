import React from 'react';
import SEO from '../components/SEO';
import { openCookieSettings } from '../components/AnalyticsConsent';

export default function CookiePolicy() {
  return <div className="pt-28 pb-24 bg-warm-50 min-h-screen"><div className="max-w-3xl mx-auto px-6">
    <SEO title="Cookie Policy" description="How Hampshire Roof Care uses optional analytics and remembers your cookie choice." canonical="/cookie-policy" noindex />
    <h1 className="font-heading text-4xl font-bold mb-8">Cookie Policy</h1>
    <div className="prose prose-lg">
      <p>Cookies and similar browser storage can remember preferences and help measure website use.</p>
      <h2>Your choice</h2>
      <p>Google Analytics only loads after you accept analytics. Rejecting it does not stop you browsing, calling us or requesting a survey. You can change your choice using the button below or Cookie settings in the footer.</p>
      <h2>Remembering your preference</h2>
      <p>We store your analytics choice in your browser for up to 180 days. This preference is used to respect your choice. If browser storage is unavailable, your choice may only last for the current page session.</p>
      <h2>Google Analytics</h2>
      <p>When accepted, Google Analytics uses cookies such as <code>_ga</code> and <code>_ga_DW33S98E2J</code> to measure visits and distinguish browsers. We configure these cookies with a 180-day lifetime, which may renew with use. We measure pages viewed, accepted enquiry requests and contact-link clicks. Our analytics events exclude form answers and contact details. Advertising personalisation is disabled in this integration.</p>
      <p>Rejecting analytics stops future collection by this integration and clears its first-party analytics cookies. If you withdraw after it has loaded, the page reloads to unload the analytics script. This does not delete information already received by Google.</p>
      <h2>Other services</h2>
      <p>The site uses Google Fonts, Vimeo for the homepage video, and Formspree to handle enquiry submissions. These services receive connection information when their resources are requested or you submit a form. The analytics choice controls Google Analytics; it does not control these other services. You can also manage cookies through your browser settings.</p>
      <h2>Contact</h2>
      <p>For questions about website data, email <a href="mailto:info.hampshireroofcare@gmail.com">info.hampshireroofcare@gmail.com</a>.</p>
    </div>
    <button onClick={openCookieSettings} className="mt-8 rounded-xl bg-primary-600 text-white px-6 py-3 font-semibold">Change cookie settings</button>
  </div></div>;
}
