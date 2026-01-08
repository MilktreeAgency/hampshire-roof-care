import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Star, ChevronDown, ArrowRight, CheckCircle, Upload, Shield, Award, Clock, Users, Wrench, Target, Heart, Quote, Search, HelpCircle, MessageSquare, FileCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImagePlaceholder, { TeamMemberPlaceholder, GalleryPlaceholder } from '../components/ImagePlaceholder';
import { StatsGrid } from '../components/StatCounter';
import { AlertBox, TrustBadge } from '../components/ServiceFeature';

// ============================================
// CONTACT PAGE
// ============================================
interface ContactPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setIsQuoteModalOpen }) => (
  <div className="pt-28 pb-24 bg-warm-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6"
        >
          Book Your Free Survey
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-body max-w-2xl mx-auto leading-relaxed"
        >
          Get honest advice and a clear quote with no obligation. We'll inspect your roof properly and explain exactly what we find.
        </motion.p>
      </div>

      {/* Response Time Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 rounded-full border border-primary-100">
          <Clock size={20} className="text-primary-600" />
          <span className="text-primary-700 font-medium">We typically respond within 2 hours</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 lg:p-10 rounded-3xl border border-warm-200 shadow-soft"
          >
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Contact Options</h2>
            
            <div className="space-y-6">
              <a href="tel:07538284300" className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-surface transition-colors">
                <div className="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal">Call Us</h3>
                  <p className="text-slate-muted text-sm mb-1">Mon-Fri, 8am - 6pm</p>
                  <span className="text-xl font-heading font-bold text-primary-600">07538 284300</span>
                </div>
              </a>
              
              <a href="mailto:info.hampshireroofcare@gmail.com" className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-surface transition-colors">
                <div className="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal">Email</h3>
                  <p className="text-slate-muted text-sm mb-1">For general enquiries</p>
                  <span className="text-primary-600 font-medium">info.hampshireroofcare@gmail.com</span>
                </div>
              </a>
              
              <div className="flex items-start gap-4 p-4">
                <div className="p-3 bg-primary-50 rounded-xl text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal">Service Area</h3>
                  <p className="text-slate-body">Southampton, Winchester, New Forest, Chandler's Ford, and surrounding areas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-charcoal p-8 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
            <div className="relative">
              <h3 className="font-heading text-xl font-bold mb-6">Before You Book</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                  <span><strong className="text-white">Free survey, no obligation.</strong> We inspect and quote properly—no guesswork.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                  <span><strong className="text-white">No phone estimates.</strong> We need to see your roof to quote accurately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                  <span><strong className="text-white">No insurance work.</strong> We work directly with homeowners only.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 lg:p-10 rounded-3xl border border-warm-200 shadow-soft-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-100 rounded-xl">
              <Calendar size={20} className="text-primary-600" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-charcoal">Request a Survey</h2>
          </div>
          <p className="text-slate-muted mb-8">Fill in the form and we'll get back to you promptly.</p>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
              <input 
                type="text" 
                className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Postcode *</label>
                <input 
                  type="text" 
                  className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                <input 
                  type="tel" 
                  className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
              <input 
                type="email" 
                className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">What help do you need? *</label>
              <select className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                <option value="">Select a service...</option>
                <option value="roof-repairs">Roof Repairs</option>
                <option value="pitched-roof-replacement">Pitched Roof Replacement</option>
                <option value="flat-roof-replacement">Flat Roof Replacement</option>
                <option value="leadwork">Leadwork and Lead Flashing</option>
                <option value="cement-work">Cement Work and Roof Pointing</option>
                <option value="not-sure">Not Sure - Need Advice</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Tell us what you've noticed *</label>
              <textarea 
                rows={4} 
                className="w-full bg-surface border border-warm-200 rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Where is the problem? When did you notice it? Any signs indoors?"
                required
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Upload Photos (optional)</label>
              <div className="border-2 border-dashed border-warm-300 rounded-xl p-6 text-center hover:border-primary-300 transition-colors cursor-pointer bg-surface">
                <Upload className="mx-auto text-slate-light mb-2" size={32} />
                <p className="text-sm text-slate-muted">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-light mt-1">Photos from ground level help us prepare</p>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-heading font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-soft hover:shadow-glow-primary"
            >
              Submit Survey Request
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            <p className="text-center text-xs text-slate-muted">
              By submitting, you agree to our <Link to="/privacy-policy" className="text-primary-600 hover:underline">privacy policy</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  </div>
);

// ============================================
// ABOUT PAGE
// ============================================
interface AboutPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setIsQuoteModalOpen }) => {
  const stats = [
    { end: 500, suffix: '+', label: 'Roofs Protected' },
    { end: 15, suffix: '+', label: 'Years Experience' },
    { end: 100, suffix: '%', label: 'Satisfaction Rate' },
    { end: 5, suffix: '★', label: 'Average Rating' },
  ];

  const values = [
    {
      icon: Shield,
      title: "Honesty First",
      description: "We never recommend work you don't need. If a repair will do, we'll tell you. If replacement makes more sense, we'll explain exactly why."
    },
    {
      icon: Wrench,
      title: "Craftsmanship",
      description: "Roofing is our trade and our reputation. We take pride in every job, using proper materials and proven techniques."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden costs, no surprises. We survey before we quote, and the price we give is the price you pay."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "We respect your home and your time. Sites are kept tidy, work is completed as agreed, and we're here if you have questions."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <div className="pt-28 pb-16 lg:pb-24 bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6">
                Roofing You Can Trust
              </h1>
              <p className="text-xl text-slate-body leading-relaxed mb-8">
                Hampshire Roof Care Company was built on a simple idea: homeowners deserve honest advice and quality work. No pressure tactics. No unnecessary upselling. Just straightforward roofing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-all group">
                    <span>Book Free Survey</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="tel:07538284300"
                  className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 rounded-full font-heading font-semibold transition-all"
                >
                  <Phone size={18} />
                  <span>07538 284300</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="/Completed Project.jpg"
                alt="Hampshire Roof Care completed project"
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-charcoal rounded-2xl p-6 shadow-soft-xl max-w-xs">
                <p className="text-white/90 font-medium mb-2">
                  "We treat every roof as if it were our own home."
                </p>
                <p className="text-white/50 text-sm">— The Hampshire Roof Care Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-6">Our Story</h2>
            <p className="text-lg text-slate-body leading-relaxed">
              After years in the roofing industry, we saw too many homeowners being sold work they didn't need. Quotes given without proper inspections. Technical jargon used to confuse rather than explain. We started Hampshire Roof Care Company to do things differently.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TrustBadge
                  icon={<value.icon size={28} strokeWidth={1.5} />}
                  title={value.title}
                  description={value.description}
                  variant="large"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-4">Credentials & Insurance</h2>
            <p className="text-lg text-slate-body">Fully insured and working to industry standards</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-warm-200 text-center">
              <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-2">Fully Insured</h3>
              <p className="text-slate-body text-sm">Public liability cover for your protection</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-warm-200 text-center">
              <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award size={40} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-2">Quality Guaranteed</h3>
              <p className="text-slate-body text-sm">Workmanship you can rely on</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-warm-200 text-center">
              <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-primary-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-2">Local Experts</h3>
              <p className="text-slate-body text-sm">Serving Hampshire for 15+ years</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Book your free survey and experience the Hampshire Roof Care difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:07538284300" className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/90 transition-colors">
                <Phone size={20} />
                <span>Call 07538 284300</span>
              </a>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-colors group">
                  Book Free Survey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// ============================================
// REVIEWS PAGE
// ============================================
interface ReviewsPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ setIsQuoteModalOpen }) => {
  const reviews = [
    { name: "Sarah J.", location: "Winchester", text: "Clear, simple advice with no pressure. They explained exactly what my roof needed and didn't try to upsell me on work I didn't need. Highly recommend.", service: "Roof Repairs" },
    { name: "David M.", location: "Southampton", text: "Careful workmanship and a tidy, respectful service. I knew exactly what was happening at each step. The team was professional throughout.", service: "Pitched Roof Replacement" },
    { name: "James T.", location: "New Forest", text: "Exceptional work on our chimney flashing. It's rare to find tradesmen who still work to this standard. Polite, punctual, and highly skilled.", service: "Leadwork" },
    { name: "Margaret H.", location: "Chandler's Ford", text: "From the initial survey to the completed work, everything was explained clearly. No jargon, no pressure. Just honest advice and quality work.", service: "Flat Roof Replacement" },
    { name: "Robert P.", location: "Southampton", text: "After years of patch repairs with other companies, Hampshire Roof Care finally fixed the problem properly. Should have called them first!", service: "Roof Repairs" },
    { name: "Christine L.", location: "Winchester", text: "The survey was thorough and the quote was fair. They did exactly what they said they would do. I'd recommend them to anyone.", service: "Cement Work" }
  ];

  const featuredReview = reviews[0];

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            Customer Reviews
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6"
          >
            What Our Customers Say
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-body max-w-2xl mx-auto leading-relaxed"
          >
            Real feedback from Hampshire homeowners. We're proud of our reputation for honest advice and quality workmanship.
          </motion.p>
        </div>

        {/* Featured Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Quote className="text-primary-500 mb-6" size={48} />
              <p className="text-white text-2xl lg:text-3xl leading-relaxed mb-8">
                "{featuredReview.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center font-heading font-bold text-xl text-white">
                  {featuredReview.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-white">{featuredReview.name}</div>
                  <div className="text-white/50 text-sm">{featuredReview.location} • {featuredReview.service}</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/Customer Photo.jpg"
                alt="Happy customer"
                className="aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* What Customers Value */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 mb-12 border border-warm-200"
        >
          <h3 className="font-heading font-bold text-charcoal mb-4">What customers value most:</h3>
          <div className="flex flex-wrap gap-3">
            {["Clear, simple advice", "No pressure and no upselling", "Careful workmanship", "A tidy, respectful service", "Knowing what is happening at each step"].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full text-sm text-charcoal border border-warm-200">
                <CheckCircle size={16} className="text-primary-600" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.slice(1).map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-warm-200 hover:shadow-soft-lg transition-shadow"
            >
              <div className="flex text-copper mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-slate-body leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-heading font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-charcoal">{review.name}</div>
                  <div className="text-xs text-slate-muted">{review.location} • {review.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal mb-4">Experience the Same Quality</h2>
          <p className="text-slate-body mb-8 max-w-xl mx-auto">Book your free survey and discover why Hampshire homeowners trust us.</p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-all group">
              Book Free Survey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// ============================================
// FAQ PAGE
// ============================================
interface FAQPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ setIsQuoteModalOpen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      icon: FileCheck,
      title: "Quotes & Surveys",
      faqs: [
        { q: "Do you offer quotes without seeing the roof?", a: "No. We always carry out a site survey first. Roofs can look fine from the ground but have hidden issues. A proper check helps us give you honest advice and an accurate quote." },
        { q: "Is the site survey really free?", a: "Yes, completely free with no obligation. We'll inspect your roof, explain what we find, and give you a clear quote. There's no pressure to proceed." },
        { q: "Why do you need a site survey?", a: "Because it protects you. It means we can find the real cause of the problem, you can avoid paying for work you do not need, the quote is accurate (not a guess), and you can make a clear decision with confidence." },
        { q: "What happens during the site survey?", a: "We inspect the roof and focus on the places where problems often start. This can include missing or damaged tiles, roof edges and joins, chimney areas and flashing, signs of water getting in, and general wear. We then explain what we found in simple terms." }
      ]
    },
    {
      icon: Wrench,
      title: "Repairs & Work",
      faqs: [
        { q: "How do I know if my roof needs repairing?", a: "Common signs include damp patches on ceilings or walls, drips in the loft after rain, slipped or missing tiles, leaks around chimneys, cracked cement along the roof line, and flat roofs that hold water." },
        { q: "Is a leak always easy to find?", a: "Not always. Water can travel along rafters before dripping down, meaning the actual leak may be far from where you see the stain. That's why we inspect properly rather than guessing." },
        { q: "How long does a typical repair take?", a: "Most repairs are completed in a day or less. Larger jobs may take 2-3 days. We'll give you a realistic timeline after the survey." }
      ]
    },
    {
      icon: Shield,
      title: "Insurance & Coverage",
      faqs: [
        { q: "Are you fully insured?", a: "Yes. We carry public liability insurance to protect you and your property. We're happy to provide documentation if needed." },
        { q: "Do you do insurance jobs?", a: "No. We work directly with homeowners only, not through insurance companies. This keeps things simple and ensures you get honest advice." },
        { q: "Do you offer guarantees?", a: "Yes. All our work comes with a workmanship guarantee. Materials also carry manufacturer warranties where applicable." }
      ]
    }
  ];

  let globalIndex = 0;

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="pt-28 pb-24 bg-warm-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            FAQ
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-body max-w-2xl mx-auto"
          >
            Clear answers in plain English. If you can't find what you need, get in touch.
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-light" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-warm-200 rounded-xl pl-12 pr-4 py-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-xl">
                  <category.icon className="text-primary-600" size={20} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-charcoal">{category.title}</h2>
              </div>
              <div className="space-y-3">
                {category.faqs.map((faq, faqIndex) => {
                  const currentGlobalIndex = globalIndex++;
                  return (
                    <div 
                      key={faqIndex} 
                      className="bg-white rounded-2xl border border-warm-200 overflow-hidden hover:shadow-soft transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === currentGlobalIndex ? null : currentGlobalIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
                      >
                        <h3 className="font-heading text-lg font-semibold text-charcoal pr-4">{faq.q}</h3>
                        <div className={`p-2 rounded-xl transition-all duration-300 ${
                          openIndex === currentGlobalIndex ? 'bg-primary-100 rotate-180' : 'bg-surface'
                        }`}>
                          <ChevronDown 
                            className={`transition-colors ${
                              openIndex === currentGlobalIndex ? 'text-primary-600' : 'text-slate-muted'
                            }`} 
                            size={20} 
                          />
                        </div>
                      </button>
                      <AnimatePresence>
                        {openIndex === currentGlobalIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="h-px bg-warm-200 mb-4" />
                              <p className="text-slate-body leading-relaxed">{faq.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 lg:p-10 rounded-3xl border border-warm-200 shadow-soft"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary-100 rounded-xl">
              <HelpCircle className="text-primary-600" size={24} />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">Still Have Questions?</h2>
              <p className="text-slate-body">We're here to help. Get in touch and we'll give you straight answers.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:07538284300" className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-full font-heading font-semibold transition-colors">
              <Phone size={18} />
              <span>07538 284300</span>
            </a>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-heading font-semibold transition-colors group w-full sm:w-auto">
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ============================================
// PRIVACY PAGE
// ============================================
interface PrivacyPageProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ setIsQuoteModalOpen }) => (
  <div className="pt-28 pb-24 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-heading text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-slate-body">
          <p>
            This privacy policy explains how Hampshire Roof Care Company uses and protects any information that you give us when you use this website.
          </p>
          <p>
            We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
          </p>
          <h2>Information we collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>Name and contact information including email address and phone number</li>
            <li>Property address and postcode</li>
            <li>Information about your roofing enquiry</li>
            <li>Photographs you choose to upload</li>
          </ul>
          <h2>What we do with the information</h2>
          <p>
            We use this information solely to respond to your enquiry and to provide you with our roofing services. We do not share your information with third parties for marketing purposes.
          </p>
          <h2>Your rights</h2>
          <p>
            You have the right to request a copy of the information we hold about you, and to have any inaccuracies corrected. You can also request that we delete your data.
          </p>
          <h2>Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at info.hampshireroofcare@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
