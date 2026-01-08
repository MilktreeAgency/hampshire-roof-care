import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { guides, services } from '../lib/content';
import { ArrowLeft, ArrowRight, BookOpen, Phone, AlertTriangle, CheckCircle, Lightbulb, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { ServiceCard, AlertBox } from '../components/ServiceFeature';

interface GuidePageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ setIsQuoteModalOpen }) => {
  const { slug } = useParams<{ slug?: string }>();

  // Guides Hub Page
  if (!slug) {
    return (
      <div className="pt-24 md:pt-28 pb-20 md:pb-24 bg-warm-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="mb-10 md:mb-16 lg:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4"
            >
              Roofing Advice
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-4 md:mb-6"
            >
              Expert Roofing Guides
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-slate-body max-w-2xl leading-relaxed"
            >
              Honest, practical advice for Hampshire homeowners. Understand common roof problems and know when to call a professional.
            </motion.p>
          </div>

          {/* Safety Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <AlertBox
              variant="warning"
              title="Important Safety Note"
              description="Never climb onto your roof—it's not worth the risk. If you think there's damage, contact us and we'll advise on the next step safely."
            />
          </motion.div>
          
          {/* Guides Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link 
                  to={`/guides/${guide.slug}`} 
                  className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-warm-200 hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-40 md:h-48 overflow-hidden relative">
                    <img
                      src="/roofissue1.jpg"
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-bold text-charcoal uppercase tracking-wider shadow-soft">
                        Guide
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-slate-body text-sm mb-4 md:mb-6 flex-1 line-clamp-2">{guide.subtitle}</p>
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Read Guide</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-warm-200 shadow-soft"
          >
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-charcoal mb-3 md:mb-4">
                  Need Expert Help?
                </h2>
                <p className="text-slate-body text-base md:text-lg leading-relaxed">
                  Guides are helpful, but nothing beats a proper inspection. If you're unsure what's going on with your roof, book a free survey and we'll explain exactly what we find.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-end">
                <a 
                  href="tel:07538284300" 
                  className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-heading font-semibold transition-colors text-sm md:text-base"
                >
                  <Phone size={18} />
                  <span>07538 284300</span>
                </a>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-heading font-semibold transition-colors group text-sm md:text-base"
                >
                  <span>Book Free Survey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Individual Guide Page
  const guide = guides.find(g => g.slug === slug);
  const otherGuides = guides.filter(g => g.slug !== slug).slice(0, 3);

  if (!guide) {
    return (
      <div className="pt-32 px-4 sm:px-6 text-center min-h-screen bg-warm-50">
        <h1 className="font-heading text-2xl font-bold text-charcoal mb-4">Article not found</h1>
        <Link to="/guides" className="text-primary-600 hover:underline">Back to guides</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <div className="pt-24 md:pt-28 pb-8 md:pb-12 bg-white border-b border-warm-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/guides" className="inline-flex items-center text-slate-muted hover:text-primary-600 mb-6 md:mb-8 transition-colors group text-sm md:text-base">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Guides
            </Link>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-primary-100 text-primary-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                Expert Guide
              </span>
              <span className="text-slate-light text-xs md:text-sm">5 min read</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-charcoal mb-4 md:mb-6 leading-tight tracking-tight">
              {guide.title}
            </h1>
            <p className="text-base md:text-xl text-slate-body leading-relaxed">{guide.subtitle}</p>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-3 md:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/roofissue1.jpg"
            alt={guide.title}
            className="w-full aspect-video object-cover rounded-2xl md:rounded-3xl shadow-soft-lg"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-primary-100 mb-8 md:mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Lightbulb className="text-primary-600" size={18} />
                </div>
                <h3 className="font-heading font-bold text-charcoal text-sm md:text-base">Key Takeaways</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-body text-sm md:text-base">Don't ignore early warning signs—small problems become big ones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-body text-sm md:text-base">Stay safe—never climb on your roof to investigate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-body text-sm md:text-base">A professional survey costs nothing and provides peace of mind</span>
                </li>
              </ul>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 border border-warm-200 shadow-soft"
            >
              <div 
                className="prose prose-sm md:prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-headings:font-bold prose-p:text-slate-body prose-li:text-slate-body prose-strong:text-charcoal prose-a:text-primary-600 prose-h3:text-xl md:prose-h3:text-2xl prose-h4:text-lg md:prose-h4:text-xl" 
                dangerouslySetInnerHTML={{ __html: guide.content }} 
              />
            </motion.div>

            {/* Visual Symptom Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-10 space-y-4 md:space-y-6"
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal">Visual Reference</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <img
                  src="/roofissue1.jpg"
                  alt="Roof issue example 1"
                  className="aspect-square object-cover rounded-lg md:rounded-xl"
                />
                <img
                  src="/roofissue2.jpg"
                  alt="Roof issue example 2"
                  className="aspect-square object-cover rounded-lg md:rounded-xl"
                />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-12 bg-charcoal rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
              <div className="relative text-center">
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                  Noticed Something Wrong?
                </h3>
                <p className="text-white/70 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
                  If you've spotted any of these signs, we can carry out a free site survey and explain exactly what we find.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white text-charcoal px-6 md:px-8 py-3.5 md:py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors group text-sm md:text-base w-full sm:w-auto justify-center"
                  >
                    Book Free Survey
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="tel:07538284300"
                    className="inline-flex items-center gap-2 text-white font-heading font-semibold hover:text-white/80 transition-colors text-sm md:text-base"
                  >
                    <Phone size={18} />
                    <span>07538 284300</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Shows first on mobile, sticky on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28 space-y-4 md:space-y-6">
              {/* Quick Help */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-warm-200 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-soft"
              >
                <h4 className="font-heading font-bold text-charcoal text-base md:text-lg mb-3 md:mb-4">Need Expert Help?</h4>
                <p className="text-slate-body text-sm mb-4 md:mb-6">
                  Our free survey takes the guesswork out of roof problems.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-heading font-semibold py-3.5 md:py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group text-sm md:text-base"
                >
                  Book Free Survey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:07538284300"
                  className="mt-3 flex items-center justify-center gap-2 text-charcoal font-heading font-semibold py-3.5 md:py-4 border-2 border-charcoal rounded-xl hover:bg-charcoal hover:text-white transition-colors text-sm md:text-base"
                >
                  <Phone size={18} />
                  <span>07538 284300</span>
                </a>
              </motion.div>

              {/* Related Services - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="hidden lg:block bg-surface rounded-3xl p-6 border border-warm-200"
              >
                <h4 className="font-heading font-bold text-charcoal text-lg mb-4">Related Services</h4>
                <div className="space-y-3">
                  {services.slice(0, 3).map((s) => (
                    <ServiceCard
                      key={s.slug}
                      slug={s.slug}
                      title={s.title}
                      subtitle={s.subtitle}
                      image={s.image}
                      variant="compact"
                    />
                  ))}
                </div>
              </motion.div>

              {/* More Guides - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden lg:block bg-white rounded-3xl p-6 border border-warm-200"
              >
                <h4 className="font-heading font-bold text-charcoal text-lg mb-4">More Guides</h4>
                <div className="space-y-4">
                  {otherGuides.map((g) => (
                    <Link
                      key={g.slug}
                      to={`/guides/${g.slug}`}
                      className="block group"
                    >
                      <h5 className="font-semibold text-charcoal text-sm group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                        {g.title}
                      </h5>
                      <div className="flex items-center text-primary-600 text-xs font-medium">
                        <span>Read guide</span>
                        <ArrowUpRight size={12} className="ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/guides"
                  className="flex items-center gap-2 text-primary-600 font-semibold text-sm mt-6 hover:gap-3 transition-all"
                >
                  <span>View All Guides</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile-only: More Guides section at bottom */}
        <div className="lg:hidden mt-10 md:mt-12">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-4">More Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="block group bg-white rounded-xl p-4 border border-warm-200 hover:border-primary-200 transition-colors"
              >
                <h5 className="font-semibold text-charcoal text-sm group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                  {g.title}
                </h5>
                <div className="flex items-center text-primary-600 text-xs font-medium">
                  <span>Read guide</span>
                  <ArrowUpRight size={12} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
          <Link 
            to="/guides"
            className="flex items-center justify-center gap-2 text-primary-600 font-semibold text-sm mt-6 hover:gap-3 transition-all"
          >
            <span>View All Guides</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
