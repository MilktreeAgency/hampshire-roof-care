import React from 'react';
import { Star, ArrowUpRight, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

const Testimonials: React.FC = () => {

  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Winchester",
      text: "Clear, simple advice with no pressure. They explained exactly what my roof needed and didn't try to upsell me on work I didn't need. Absolutely brilliant service.",
      role: "Homeowner",
      service: "Roof Repairs"
    },
    {
      name: "David Miller",
      location: "Southampton",
      text: "Careful workmanship and a tidy, respectful service. I knew exactly what was happening at each step. They left the site cleaner than they found it.",
      role: "Property Owner",
      service: "Pitched Roof Replacement"
    },
    {
      name: "James Thorne",
      location: "New Forest",
      text: "Exceptional work on our chimney flashing. It's rare to find tradesmen who still work to this standard. Polite, punctual, and highly skilled.",
      role: "Homeowner",
      service: "Leadwork"
    }
  ];

  const trustPoints = [
    "Clear, simple advice",
    "No pressure and no upselling",
    "Careful workmanship",
    "Tidy, respectful service",
    "Knowing what's happening at each step"
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-charcoal text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-white/10 text-white/80 rounded-full text-sm font-semibold mb-4"
            >
              Customer Reviews
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              Trusted by Homeowners Across Hampshire
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              Real feedback from real customers. Choosing a roofer shouldn't feel risky—here's what people say about working with us.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/reviews"
              className="inline-flex items-center gap-2 text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full transition-colors whitespace-nowrap group"
            >
              <span>Read All Reviews</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* What Customers Value */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          <p className="text-white/50 text-sm mb-4 font-medium">What customers value most:</p>
          <div className="flex flex-wrap gap-3">
            {trustPoints.map((point, i) => (
              <span 
                key={i} 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
              >
                <Star size={14} className="text-copper" fill="currentColor" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-glow-primary">
                <Quote size={18} className="text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-copper" fill="currentColor" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                "{review.text}"
              </p>
              
              {/* Service Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs font-medium">
                  {review.service}
                </span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-heading font-bold text-xl text-white shadow-glow-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-white/50 flex items-center gap-1">
                    <MapPin size={12} />
                    {review.location} • {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 mb-6">Ready to experience the same quality service?</p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-white/90 px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 shadow-soft-lg group">
              <span>Get Your Free Quote</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
