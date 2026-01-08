import React from 'react';
import { Home, Phone, Mail, MapPin, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setIsQuoteModalOpen }) => {

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      
      {/* Pre-footer CTA */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">Ready to protect your home?</h3>
              <p className="text-white/60 text-sm md:text-base">Book your free roof survey today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <a 
                href="tel:07538284300"
                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-6 py-3 md:px-8 md:py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors text-sm md:text-base w-full sm:w-auto"
              >
                <Phone size={18} className="md:w-5 md:h-5" />
                <span>07538 284300</span>
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-heading font-semibold transition-colors group text-sm md:text-base w-full sm:w-auto"
              >
                <span>Book Free Survey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo-white.png"
                alt="Hampshire Roof Care"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Expert roofing services for Hampshire homeowners. Honest advice, quality workmanship, and transparent pricing.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Shield size={14} className="text-primary-400" />
                <span className="text-xs text-white/70">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Star size={14} className="text-copper" />
                <span className="text-xs text-white/70">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Roof Repairs', path: '/services/roof-repairs' },
                { name: 'Pitched Roof Replacement', path: '/services/pitched-roof-replacement' },
                { name: 'Flat Roof Replacement', path: '/services/flat-roof-replacement' },
                { name: 'Leadwork & Lead Flashing', path: '/services/leadwork-and-lead-flashing' },
                { name: 'Cement Work & Pointing', path: '/services/roof-pointing-and-cement-work' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/60 hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Areas We Cover</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Southampton', path: '/areas/southampton' },
                { name: 'Winchester', path: '/areas/winchester' },
                { name: 'New Forest', path: '/areas/new-forest' },
                { name: "Chandler's Ford", path: '/areas/chandlers-ford' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/60 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <MapPin size={14} className="text-primary-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/areas" className="inline-flex items-center gap-1 text-primary-400 text-sm mt-4 hover:gap-2 transition-all">
              <span>View all areas</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Contact & Company */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:07538284300" className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-600/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span>07538 284300</span>
              </a>
              <a href="mailto:info.hampshireroofcare@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-600/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">info.hampshireroofcare@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Clock size={16} />
                </div>
                <span>Mon-Fri: 8am - 6pm</span>
              </div>
            </div>

            <h4 className="font-heading font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'FAQs', path: '/faqs' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/60 hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Hampshire Roof Care Company. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-white/40 hover:text-white/70 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/70 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
