import React, { useState, useEffect } from 'react';
import { Menu, X, Home as HomeIcon, Phone, ChevronDown } from 'lucide-react';
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
  const showTransparent = isHomePage && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          showTransparent
            ? 'bg-transparent py-5'
            : 'bg-white/95 backdrop-blur-xl border-b border-warm-200 py-4 shadow-soft'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src={showTransparent ? "/logo-white.png" : "/logo-dark.png"}
              alt="Hampshire Roof Care"
              className="h-10 md:h-12 w-auto transition-all duration-300"
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-charcoal" size={24} />
            ) : (
              <Menu className={showTransparent ? 'text-white' : 'text-charcoal'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-warm-200 shadow-soft-lg lg:hidden overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-1">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path || 
                    (item.path !== '/' && location.pathname.startsWith(item.path));
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`font-medium text-lg py-3 px-4 rounded-xl transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600' 
                          : 'text-charcoal hover:bg-surface'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <div className="h-px bg-warm-200 my-3" />
                
                <a 
                  href="tel:07538284300"
                  className="flex items-center gap-3 text-charcoal font-medium py-3 px-4 rounded-xl hover:bg-surface transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={20} />
                  <span>07538 284300</span>
                </a>
                
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="mt-2 bg-primary-600 text-white w-full py-4 rounded-xl font-heading font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  Book Free Survey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
