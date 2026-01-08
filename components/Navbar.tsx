import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsQuoteModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas' },
    { name: 'Guides', path: '/guides' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
  ];

  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          showTransparent
            ? 'bg-transparent py-4 lg:py-5'
            : 'bg-white/95 backdrop-blur-xl border-b border-warm-200 py-3 lg:py-4 shadow-soft'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Mobile: Hamburger on left */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className={showTransparent ? 'text-white' : 'text-charcoal'} size={24} />
          </button>

          {/* Logo - centered on mobile, left on desktop */}
          <Link to="/" className="flex items-center cursor-pointer lg:order-first absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <img 
              src={showTransparent ? "/logo-white.png" : "/logo-dark.png"}
              alt="Hampshire Roof Care"
              className="h-9 md:h-10 lg:h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path !== '/' && location.pathname.startsWith(item.path));
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    showTransparent 
                      ? `text-white/80 hover:text-white hover:bg-white/10 ${isActive ? 'text-white bg-white/10' : ''}` 
                      : `text-slate-body hover:text-primary-600 hover:bg-primary-50 ${isActive ? 'text-primary-600 bg-primary-50' : ''}`
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:07538284300"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                showTransparent 
                  ? 'text-white/80 hover:text-white hover:bg-white/10' 
                  : 'text-charcoal hover:bg-surface'
              }`}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">07538 284300</span>
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 shadow-soft hover:shadow-glow-primary active:scale-[0.98]"
            >
              Book Free Survey
            </button>
          </div>

          {/* Mobile: View Services CTA on right */}
          <Link
            to="/services"
            className={`lg:hidden px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
              showTransparent
                ? 'bg-white text-charcoal'
                : 'bg-primary-600 text-white'
            }`}
          >
            View Services
          </Link>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* Dark green background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-800"
            />
            
            {/* Menu content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between px-4 py-4">
                <button
                  className="p-2 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="text-white" size={28} />
                </button>
                
                <img 
                  src="/logo-white.png"
                  alt="Hampshire Roof Care"
                  className="h-9 w-auto absolute left-1/2 -translate-x-1/2"
                />
                
                {/* Placeholder for balance */}
                <div className="w-12" />
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8 -mt-16">
                <nav className="space-y-2">
                  {navLinks.map((item, index) => {
                    const isActive = location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path));
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`block text-3xl font-heading font-bold py-3 transition-colors ${
                            isActive 
                              ? 'text-primary-300' 
                              : 'text-white hover:text-primary-300'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-6 pb-8 space-y-3"
              >
                <a 
                  href="tel:07538284300"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-white/30 text-white font-heading font-semibold text-lg transition-colors hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={22} />
                  <span>07538 284300</span>
                </a>
                
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full bg-white text-primary-800 py-4 rounded-xl font-heading font-bold text-lg transition-all hover:bg-primary-100 active:scale-[0.98]"
                >
                  Book Free Survey
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom CTA Bar - Only on scroll */}
      <AnimatePresence>
        {isScrolled && !isMobileMenuOpen && (
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
                className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-heading font-semibold"
              >
                Book Survey
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
