import React from 'react';
import { Link } from 'react-router-dom';
import { areas, guides } from '../lib/content';
import { guideServices, serviceQuestions } from '../lib/page-guidance';

export default function ServiceGuidance({ slug }: { slug: string }) {
  const relatedGuides = guides.filter(guide => guideServices[guide.slug]?.includes(slug)).slice(0, 3);
  return (
    <section className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 border border-warm-200">
      <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Before you book a survey</h2>
      <div className="space-y-6">
        {(serviceQuestions[slug] || []).map(({ question, answer }) => (
          <div key={question}>
            <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{question}</h3>
            <p className="text-slate-body leading-relaxed">{answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-warm-200">
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Related roofing advice</h3>
        <ul className="space-y-3">
          {relatedGuides.map(guide => <li key={guide.slug}><Link className="text-primary-700 underline underline-offset-4 hover:text-charcoal" to={`/guides/${guide.slug}`}>{guide.title}</Link></li>)}
        </ul>
      </div>
      <div className="mt-8 pt-6 border-t border-warm-200">
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Our Hampshire service areas</h3>
        <p className="text-slate-body leading-relaxed mb-4">We visit properties across these areas. Send your postcode with your enquiry so we can confirm coverage and arrange a survey.</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {areas.map(area => <li key={area.slug}><Link className="text-primary-700 underline underline-offset-4 hover:text-charcoal" to={`/areas/${area.slug}`}>{area.title.replace('Roofer in ', '')}</Link></li>)}
        </ul>
      </div>
    </section>
  );
}
