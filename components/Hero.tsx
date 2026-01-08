import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setIsQuoteModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video_Editing_Remove_Roof_Objects.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        {/* Fallback background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80"
            alt="Professional Roofing"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Advanced Gradient Overlay - Stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/98 via-charcoal/95 to-charcoal/90 md:from-charcoal/95 md:via-charcoal/70 md:to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-charcoal/20 md:from-charcoal/90 md:via-transparent md:to-charcoal/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Company Name Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-800 animate-pulse" />
              <span className="text-white/90 text-xs md:text-sm font-medium">Hampshire Roof Care Company</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] px-2 sm:px-0">
              Honest roofing help that keeps your home{' '}
              <span className="text-primary-300 font-extrabold">safe and dry</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              If your roof is leaking, or starting to look old and tired, you need clear honest advice and multiple solutions going forward.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 px-4 sm:px-0 justify-center lg:justify-start">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold text-base md:text-lg transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-primary-600/30 active:scale-[0.98]"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:07538284300"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={20} />
                <span>07538 284300</span>
              </a>
            </div>

            {/* Areas Served */}
            <p className="text-white/60 text-xs md:text-sm px-2 sm:px-0">
              Serving homeowners across <span className="text-white/80 font-medium">Southampton, Winchester, the New Forest,</span> and nearby areas.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Sticky Mobile CTA Bar */}
      {isScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-warm-200 shadow-soft-lg p-4"
        >
          <div className="flex gap-3">
            <a
              href="tel:07538284300"
              className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-3 rounded-xl font-heading font-semibold"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-heading font-semibold hover:bg-primary-700 transition-colors active:scale-[0.98]"
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
