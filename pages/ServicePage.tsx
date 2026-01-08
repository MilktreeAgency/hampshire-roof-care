import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../lib/content';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Clock, Shield, AlertTriangle, Wrench, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ImagePlaceholder, { GalleryPlaceholder } from '../components/ImagePlaceholder';
import { ServiceCard, FeatureList, TrustBadge, AlertBox } from '../components/ServiceFeature';

interface ServicePageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ setIsQuoteModalOpen }) => {
  const { slug } = useParams<{ slug?: string }>();

  // Service Hub Page
  if (!slug) {
    return (
      <div className="pt-24 md:pt-28 pb-16 md:pb-24 bg-warm-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Our Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6"
            >
              Complete Roofing Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-body max-w-2xl leading-relaxed"
            >
              From minor repairs to complete replacements, we deliver expert roofing services with honest advice and transparent pricing. Every job starts with a proper site survey.
            </motion.p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  subtitle={service.subtitle}
                  image={service.image}
                  variant={index === 0 ? 'featured' : 'default'}
                  features={index === 0 ? ['Leak repairs', 'Storm damage', 'Tile replacement', 'Emergency call-outs'] : []}
                />
              </motion.div>
            ))}
          </div>

          {/* Not Sure CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
            <div className="relative">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Tell us what you've noticed and we'll guide you to the right solution. Our advice is always free and honest.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:07538284300" className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors shadow-soft-lg">
                  <Phone size={20} />
                  <span>Call 07538 284300</span>
                </a>
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-colors shadow-glow-primary">
                    Book Free Survey
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Individual Service Page
  const service = services.find(s => s.slug === slug);
  const otherServices = services.filter(s => s.slug !== slug);

  if (!service) {
    return (
      <div className="pt-32 px-6 text-center min-h-screen bg-warm-50">
        <h1 className="font-heading text-2xl font-bold text-charcoal mb-4">Service not found</h1>
        <Link to="/services" className="text-primary-600 hover:underline">Back to services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Header */}
      <div className="relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/services" className="inline-flex items-center text-white/60 hover:text-white mb-6 md:mb-8 transition-colors group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform md:w-[18px] md:h-[18px]" /> 
              All Services
            </Link>
            <span className="block px-3 py-1 md:px-4 md:py-1.5 bg-primary-600/20 text-primary-300 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 mx-auto w-fit">
              Professional Service
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight px-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">{service.subtitle}</p>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-10 px-4">
              <a 
                href="tel:07538284300" 
                className="inline-flex items-center gap-2 bg-white text-charcoal px-6 py-3 md:px-8 md:py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-all shadow-soft-lg text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <Phone size={18} className="md:w-5 md:h-5" />
                <span>Call Now</span>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-heading font-semibold transition-all shadow-glow-primary group text-sm md:text-base w-full justify-center">
                  <span>Book Free Survey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:py-24">
        {/* Mobile Quick Contact - Shows only on mobile */}
        <div className="lg:hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-warm-200 rounded-2xl p-5 shadow-soft"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { icon: Shield, text: "Fully insured" },
                { icon: CheckCircle, text: "Honest advice" },
                { icon: Clock, text: "Free survey" },
                { icon: FileCheck, text: "Written quotes" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-body text-sm">
                  <item.icon size={14} className="text-primary-600 flex-shrink-0" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/contact" className="w-full">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-heading font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-soft text-sm">
                  Book Free Survey
                  <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:07538284300" className="w-full border-2 border-charcoal text-charcoal font-heading font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-charcoal hover:text-white text-sm">
                <Phone size={16} />
                07538 284300
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-12">
            {/* Service Action Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={`/${service.title} in Action.jpg`}
                alt={`${service.title} in Action`}
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover rounded-2xl md:rounded-3xl"
              />
            </motion.div>

            {/* Main Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 border border-warm-200 shadow-soft"
            >
              <div 
                className="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-headings:font-bold prose-p:text-slate-body prose-li:text-slate-body prose-strong:text-charcoal prose-a:text-primary-600 prose-h2:text-xl prose-h2:md:text-2xl prose-h3:text-lg prose-h3:md:text-xl" 
                dangerouslySetInnerHTML={{ __html: service.content }} 
              />
            </motion.div>

            {/* Photo Evidence Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 md:p-3 bg-primary-100 rounded-xl">
                  <Wrench className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-charcoal">Our Work</h3>
                  <p className="text-slate-muted text-sm md:text-base">Examples of completed projects</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <img
                    key={num}
                    src={`/ourwork-${num}.jpg`}
                    alt={`Completed project ${num}`}
                    className="aspect-square object-cover rounded-xl"
                  />
                ))}
              </div>
            </motion.div>

            {/* What Affects Cost */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 border border-warm-200"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2.5 md:p-3 bg-white rounded-xl shadow-soft">
                  <FileCheck className="text-primary-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-charcoal">What Affects the Cost?</h3>
                  <p className="text-slate-muted text-sm md:text-base">Factors we consider when quoting</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4">
                {[
                  'Size and scope of the work',
                  'Accessibility and roof height',
                  'Materials required',
                  'Condition of existing structure',
                  'Time and labour involved',
                  'Any additional repairs needed'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 md:gap-3 p-3 md:p-4 bg-white rounded-xl border border-warm-100">
                    <CheckCircle size={18} className="text-primary-600 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-charcoal font-medium text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <AlertBox
                variant="info"
                title="No Guesswork"
                description="We always survey your roof before quoting. This ensures accurate pricing with no surprises."
                className="mt-4 md:mt-6"
              />
            </motion.div>
          </div>
          
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-warm-200 rounded-3xl p-8 shadow-soft"
              >
                <h4 className="font-heading font-bold text-charcoal text-xl mb-6">Why Choose Us</h4>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Shield, text: "Fully insured work" },
                    { icon: CheckCircle, text: "Transparent, honest advice" },
                    { icon: Clock, text: "Free site survey" },
                    { icon: FileCheck, text: "Written quotes" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-body">
                      <div className="p-2 bg-primary-50 rounded-lg">
                        <item.icon size={18} className="text-primary-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-heading font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-soft hover:shadow-glow-primary group">
                    Book Free Survey
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:07538284300" className="w-full mt-3 border-2 border-charcoal text-charcoal font-heading font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-charcoal hover:text-white">
                  <Phone size={18} />
                  07538 284300
                </a>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface rounded-3xl p-6 border border-warm-200"
              >
                <h4 className="font-heading font-bold text-charcoal text-lg mb-4">Other Services</h4>
                <div className="space-y-3">
                  {otherServices.slice(0, 4).map((s) => (
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
            </div>
          </div>
        </div>

        {/* Other Services - Mobile only */}
        <div className="lg:hidden mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-5 border border-warm-200"
          >
            <h4 className="font-heading font-bold text-charcoal text-lg mb-4">Other Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherServices.slice(0, 4).map((s) => (
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
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
              Book your free site survey today. We'll inspect your roof and provide a clear, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a href="tel:07538284300" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-charcoal px-6 py-3.5 md:px-8 md:py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors text-sm md:text-base">
                <Phone size={18} className="md:w-5 md:h-5" />
                <span>Call 07538 284300</span>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-heading font-semibold transition-colors group text-sm md:text-base">
                  Book Free Survey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
