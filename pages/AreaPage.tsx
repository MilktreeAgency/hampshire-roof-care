import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { areas, services } from '../lib/content';
import { MapPin, ArrowRight, ArrowLeft, Phone, CheckCircle, Star, Clock, Shield, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import ImagePlaceholder, { GalleryPlaceholder } from '../components/ImagePlaceholder';
import { ServiceCard } from '../components/ServiceFeature';

interface AreaPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const AreaPage: React.FC<AreaPageProps> = ({ setIsQuoteModalOpen }) => {
  const { slug } = useParams<{ slug?: string }>();

  // Areas Hub Page
  if (!slug) {
    return (
      <div className="pt-28 pb-24 bg-warm-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="mb-16 lg:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Areas We Cover
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6"
            >
              Roofing Services Across Hampshire
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-body max-w-2xl leading-relaxed"
            >
              We're proud to serve homeowners throughout Hampshire and surrounding areas. Click your location for area-specific information and local expertise.
            </motion.p>
          </div>
          
          {/* Core Areas Grid */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">Our Core Service Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/areas/${area.slug}`} 
                    className="group bg-white p-6 lg:p-8 rounded-2xl border border-warm-200 hover:shadow-soft-lg hover:border-primary-300 transition-all duration-300 block h-full"
                  >
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-soft">
                      <MapPin size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-charcoal mb-2 group-hover:text-primary-600 transition-colors">
                      {area.title.replace('Roofer in ', '')}
                    </h3>
                    <p className="text-slate-body text-sm mb-6 line-clamp-2">{area.subtitle}</p>
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>View Local Info</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Available */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-warm-200 shadow-soft mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                  Full Service Coverage
                </h2>
                <p className="text-slate-body mb-6 leading-relaxed">
                  Every area we cover has access to our complete range of roofing services. All quotes follow the same principle: 
                  <strong className="text-charcoal"> we survey before we quote</strong>. This keeps advice honest and pricing accurate.
                </p>
                <Link to="/services">
                  <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                    <span>View All Services</span>
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <Link 
                    key={i} 
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface hover:bg-primary-50 border border-warm-200 hover:border-primary-200 transition-all group"
                  >
                    <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                    <span className="text-charcoal text-sm font-medium group-hover:text-primary-600 transition-colors">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not Sure CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-600 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
            <div className="relative">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Not sure if we cover your area?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                The quickest way to find out is to contact us. Tell us your postcode and what you need help with.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:07538284300" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors shadow-soft-lg">
                  <Phone size={20} />
                  <span>Call 07538 284300</span>
                </a>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/10 transition-colors"
                >
                  Send an Enquiry
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Individual Area Page
  const area = areas.find(a => a.slug === slug);

  if (!area) {
    return (
      <div className="pt-32 px-6 text-center min-h-screen bg-warm-50">
        <h1 className="font-heading text-2xl font-bold text-charcoal mb-4">Area not found</h1>
        <Link to="/areas" className="text-primary-600 hover:underline">Back to areas</Link>
      </div>
    );
  }

  const areaName = area.title.replace('Roofer in ', '');
  const otherAreas = areas.filter(a => a.slug !== slug);

  // Area-specific testimonial (simulated)
  const localTestimonial = {
    text: `Exceptional work on our roof. Honest advice, fair pricing, and quality workmanship. Would highly recommend to anyone in ${areaName}.`,
    author: 'Local Customer',
    rating: 5
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Header */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/areas" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              All Areas
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <MapPin size={18} className="text-primary-400" />
              <span className="text-white/80 font-medium">Local Service Area</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mb-4">{area.title}</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{area.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a 
                href="tel:07538284300" 
                className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-all shadow-soft-lg"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-all shadow-glow-primary group"
              >
                <span>Book Free Survey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Local Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={area.image}
                alt={`${areaName} roofing projects`}
                className="w-full aspect-[16/9] object-cover rounded-3xl"
              />
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-warm-200 shadow-soft"
            >
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-headings:font-bold prose-p:text-slate-body prose-li:text-slate-body prose-strong:text-charcoal prose-a:text-primary-600" 
                dangerouslySetInnerHTML={{ __html: area.content }} 
              />
            </motion.div>

            {/* Why Choose Us in This Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: Shield, title: "Honest Advice", desc: "We don't push extra work. We explain what your roof needs and why." },
                { icon: CheckCircle, title: "High Standards", desc: "We take pride in careful workmanship and a professional service." },
                { icon: Clock, title: "Survey First", desc: "We don't guess pricing. We inspect the roof first, always." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-warm-200 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-slate-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Local Projects Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <Building className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">Local Projects</h3>
                  <p className="text-slate-muted">Work completed in {areaName}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <img
                    key={num}
                    src={`/ourwork-${num}.jpg`}
                    alt={`Local project ${num}`}
                    className="aspect-square object-cover rounded-xl"
                  />
                ))}
              </div>
            </motion.div>

            {/* Local Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(localTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-copper" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90 text-xl leading-relaxed mb-6">
                  "{localTestimonial.text}"
                </p>
                <p className="text-white/50 font-medium">— {localTestimonial.author}, {areaName}</p>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-600 text-white rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
                <div className="relative">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Book a Roofer in {areaName}
                  </h3>
                  <p className="text-white/70 mb-6">
                    Get honest advice and a clear quote with our free site survey.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="tel:07538284300"
                      className="flex items-center justify-center gap-2 bg-white text-primary-700 w-full py-4 rounded-xl font-heading font-semibold hover:bg-white/90 transition-colors"
                    >
                      <Phone size={20} />
                      <span>07538 284300</span>
                    </a>
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="w-full border-2 border-white text-white py-4 rounded-xl font-heading font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>Book Survey</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Other Areas */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-6 border border-warm-200"
              >
                <h4 className="font-heading font-bold text-charcoal text-lg mb-4">Other Areas</h4>
                <div className="space-y-3">
                  {otherAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/areas/${a.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors group"
                    >
                      <MapPin size={18} className="text-primary-600" />
                      <span className="text-charcoal font-medium group-hover:text-primary-600 transition-colors">
                        {a.title.replace('Roofer in ', '')}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Services in Area */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface rounded-3xl p-6 border border-warm-200"
              >
                <h4 className="font-heading font-bold text-charcoal text-lg mb-4">Services Available</h4>
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
                <Link 
                  to="/services"
                  className="flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 hover:gap-3 transition-all"
                >
                  <span>View All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Protect Your {areaName} Home?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Book your free site survey today. We'll inspect your roof and provide honest, no-obligation advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:07538284300" className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors">
                <Phone size={20} />
                <span>Call 07538 284300</span>
              </a>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-colors group"
              >
                Book Free Survey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AreaPage;
