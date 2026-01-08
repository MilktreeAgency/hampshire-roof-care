import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react';

interface FinalCTAProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ setIsQuoteModalOpen }) => {

  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B87333" className="text-copper" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">5-Star Rated Service</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-6">
              Ready to Protect
              <br />
              <span className="text-primary-400">Your Home?</span>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 text-lg lg:text-xl max-w-lg leading-relaxed mb-8">
              Don't wait for a small leak to become a costly problem. Get honest advice and a clear quote—no pressure, no obligation.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: Shield, text: 'Fully Insured' },
                { icon: Clock, text: 'Free Survey' },
                { icon: Star, text: 'No Pressure' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <item.icon size={16} className="text-primary-400" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:07538284300"
                className="inline-flex items-center justify-center gap-3 bg-white text-charcoal hover:bg-white/90 px-8 py-5 rounded-full font-heading font-semibold text-lg transition-all duration-300 shadow-soft-lg group"
              >
                <Phone size={22} />
                <span>Call 07538 284300</span>
              </a>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-5 rounded-full font-heading font-semibold text-lg transition-all duration-300 shadow-glow-primary group"
              >
                <span>Book Free Survey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Response Time */}
            <p className="text-white/40 text-sm mt-6">
              We typically respond within 2 hours during business hours
            </p>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <img
                src="/Completed Project.jpg"
                alt="Completed roofing project"
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-soft-xl max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary-600" size={28} />
                  </div>
                  <div>
                    <p className="text-charcoal font-heading font-semibold mb-1">Quality Guarantee</p>
                    <p className="text-slate-muted text-sm">Work completed to the highest standards with written warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
