import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeFAQsProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const HomeFAQs: React.FC<HomeFAQsProps> = ({ setIsQuoteModalOpen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you give quotes without seeing the roof?",
      a: "No—and that's a good thing. We always survey in person before quoting. Roofs can look fine from the ground but have hidden issues. A proper inspection means honest advice and accurate pricing, not guesswork."
    },
    {
      q: "Is the site survey really free?",
      a: "Yes, completely free with no obligation. We'll inspect your roof, explain what we find, and give you a clear quote. There's no pressure to proceed—the choice is entirely yours."
    },
    {
      q: "What areas do you cover?",
      a: "We serve homeowners across Hampshire and surrounding areas, including Southampton, Winchester, the New Forest, Chandler's Ford, and nearby towns. Not sure if we cover you? Just ask."
    },
    {
      q: "How do I know if I need a repair or replacement?",
      a: "That's exactly what we help you figure out. After our survey, we'll explain your options clearly—if a repair will do the job, we'll tell you. If replacement makes more sense long-term, we'll explain why."
    },
    {
      q: "Do you work on both pitched and flat roofs?",
      a: "Yes, we handle all domestic roof types. Whether you have a traditional tiled pitched roof, a felt or EPDM flat roof, or a combination, we've got the experience to help."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Common Questions
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-6"
            >
              Questions You Might Have
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-body leading-relaxed mb-8"
            >
              We believe in transparency. Here are answers to the questions we hear most often from homeowners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white rounded-2xl border border-warm-200 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-xl">
                  <HelpCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-2">Have another question?</h3>
                  <p className="text-slate-body text-sm mb-4">
                    We're here to help. Check our full FAQ page or get in touch directly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to="/faqs"
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      <span>View All FAQs</span>
                      <ArrowRight size={16} />
                    </Link>
                    <span className="text-slate-light">|</span>
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm hover:text-primary-600 transition-colors"
                    >
                      <span>Contact Us</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-warm-200 overflow-hidden hover:shadow-soft transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors"
                >
                  <h3 className="font-heading text-lg font-semibold text-charcoal pr-4">
                    {faq.q}
                  </h3>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    openIndex === index ? 'bg-primary-100 rotate-180' : 'bg-surface'
                  }`}>
                    <ChevronDown 
                      className={`transition-colors ${
                        openIndex === index ? 'text-primary-600' : 'text-slate-muted'
                      }`} 
                      size={20} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-warm-200 mb-4" />
                        <p className="text-slate-body leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;
