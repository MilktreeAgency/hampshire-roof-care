import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Wrench, Home, Layers, Droplets, Hammer, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesBentoProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const ServicesBento: React.FC<ServicesBentoProps> = ({ setIsQuoteModalOpen }) => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-charcoal tracking-tight"
            >
              Complete Roofing Solutions for Hampshire Homes
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg text-slate-body leading-relaxed">
              From minor repairs to complete replacements, we handle every aspect of residential roofing. Not sure what you need? We'll guide you with honest advice.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          
          {/* Roof Repairs - Large Feature Card */}
          <Link 
            to="/services/roof-repairs" 
            className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block min-h-[400px] md:min-h-[450px] lg:min-h-[560px]"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }} 
              transition={{ duration: 0.4 }} 
              className="w-full h-full relative"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90">
                <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
              </div>
              
              {/* Image Placeholder Area */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                <div className="w-full h-full bg-gradient-to-l from-primary-600/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10">
                      <Wrench className="text-white" size={20} />
                    </div>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 bg-copper/20 text-copper-light rounded-full text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                    Roof Repairs & Reactive Maintenance
                  </h3>
                  <p className="text-white/70 max-w-lg text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    For leaks, slipped tiles, storm damage, and small issues that can turn into costly repairs if left unattended.
                  </p>
                  
                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md">
                    {['Leak Detection', 'Tile Replacement', 'Storm Damage', 'Flashing Repairs'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60">
                        <CheckCircle size={14} className="text-primary-400 flex-shrink-0 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 text-white font-heading font-semibold text-base md:text-lg group-hover:gap-3 transition-all">
                  <span>View Service Details</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Pitched Roof Replacement */}
          <Link 
            to="/services/pitched-roof-replacement" 
            className="relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block bg-white border border-warm-200 min-h-[280px] md:min-h-[300px] hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="w-full h-full p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-600 mb-4 md:mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-soft">
                  <Home size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3 group-hover:text-primary-700 transition-colors">
                  Pitched Roof Replacement
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  When your roof is beyond repair, a replacement protects your home for decades. We explain options clearly with no jargon.
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 md:mt-6 group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowUpRight size={14} className="md:w-4 md:h-4" />
              </div>
            </motion.div>
          </Link>

          {/* Flat Roof Replacement */}
          <Link 
            to="/services/flat-roof-replacement" 
            className="relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block bg-charcoal min-h-[280px] md:min-h-[300px]"
          >
            <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative w-full h-full p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 border border-white/10">
                  <Layers size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  Flat Roof Replacement
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Flat roofs wear differently. When repairs keep coming back, replacement is often the smarter long-term investment.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 md:mt-6 group-hover:gap-3 transition-all">
                <span>Explore Options</span>
                <ArrowUpRight size={14} className="md:w-4 md:h-4" />
              </div>
            </motion.div>
          </Link>

          {/* Leadwork and Lead Flashing */}
          <Link 
            to="/services/leadwork-and-lead-flashing" 
            className="relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block min-h-[280px] md:min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700">
              <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
            </div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative w-full h-full p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6">
                  <Droplets size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  Leadwork & Lead Flashing
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Critical waterproofing around chimneys, joins, and edges. When it fails, water finds its way in.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 md:mt-6 group-hover:gap-3 transition-all">
                <span>View Details</span>
                <ArrowUpRight size={14} className="md:w-4 md:h-4" />
              </div>
            </motion.div>
          </Link>

          {/* Cement Work and Roof Pointing */}
          <Link 
            to="/services/roof-pointing-and-cement-work" 
            className="lg:col-span-2 relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block bg-white border border-warm-200 min-h-[200px] md:min-h-[220px] hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300"
          >
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }} className="w-full h-full p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex items-start gap-4 md:gap-6 flex-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-soft">
                  <Hammer size={24} strokeWidth={1.5} className="md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-charcoal mb-2 md:mb-3 group-hover:text-primary-700 transition-colors">
                    Cement Work & Roof Pointing
                  </h3>
                  <p className="text-slate-body text-sm md:text-base leading-relaxed max-w-lg mb-3 md:mb-0">
                    Secure your ridge line and roof edges. Loose cement leads to gaps, water ingress, and in high winds, becomes a safety hazard.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                    {['Ridge Tiles', 'Verge Pointing', 'Hip Repairs'].map((item, i) => (
                      <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm whitespace-nowrap group-hover:gap-3 transition-all md:mt-0 mt-2">
                <span>Get Expert Advice</span>
                <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
              </div>
            </motion.div>
          </Link>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-3xl border border-warm-200 shadow-soft">
            <div className="text-center sm:text-left">
              <p className="font-heading font-semibold text-charcoal mb-1">Not sure which service you need?</p>
              <p className="text-slate-muted text-sm">Tell us what you've noticed and we'll guide you</p>
            </div>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 shadow-soft hover:shadow-glow-primary group"
            >
              <span>Speak to an Expert</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
