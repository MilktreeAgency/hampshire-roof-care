import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, FileCheck, Camera, CheckCircle, ArrowRight, Phone } from 'lucide-react';

interface ProcessProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const Process: React.FC<ProcessProps> = ({ setIsQuoteModalOpen }) => {
  const steps = [
    {
      id: "01",
      icon: <MessageSquare size={28} strokeWidth={1.5} />,
      title: "Tell Us What You've Noticed",
      desc: "Call or use our form. Describe what you've seen—leaks, damp patches, missing tiles. Photos help us prepare."
    },
    {
      id: "02",
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "We Survey Your Roof Properly",
      desc: "We climb up and inspect thoroughly. No guessing from the ground. We check all the common problem areas."
    },
    {
      id: "03",
      icon: <FileCheck size={28} strokeWidth={1.5} />,
      title: "You Get a Clear Plan & Quote",
      desc: "We explain what we found in plain English. You'll know what needs fixing, what can wait, and the exact cost."
    }
  ];

  const surveyIncludes = [
    "Tiles, slates and coverings",
    "Key joins and edges",
    "Chimney areas and flashing",
    "Signs of water ingress",
    "Ridge and hip condition",
    "Gutter and drainage check"
  ];

  const whatYouGet = [
    "Clear explanation of the problem",
    "What needs fixing now vs later",
    "Photo evidence of issues found",
    "Your options and our recommendation",
    "Fixed quote based on actual inspection"
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-bold text-charcoal tracking-tight mb-6"
          >
            Your Free Site Survey Explained
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-body leading-relaxed"
          >
            We never guess or quote over the phone. A proper inspection means honest advice and accurate pricing.
          </motion.p>
        </div>

        {/* Process Steps - Horizontal */}
        <div className="relative mb-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-warm-200 via-primary-200 to-warm-200" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-40 h-40 bg-white border-2 border-warm-200 rounded-3xl flex flex-col items-center justify-center mb-8 shadow-soft hover:shadow-soft-lg hover:border-primary-200 transition-all group">
                    <span className="absolute -top-4 -right-4 w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-heading font-bold shadow-glow-primary">
                      {step.id}
                    </span>
                    <div className="text-primary-600 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-slate-body leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What We Check / What You Get */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* What We Check */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-3xl p-8 lg:p-10 border border-warm-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white rounded-2xl shadow-soft border border-warm-100">
                <Camera className="text-primary-600" size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-charcoal">What We Inspect</h3>
                <p className="text-slate-muted text-sm">During your free survey</p>
              </div>
            </div>
            <p className="text-slate-body mb-6 leading-relaxed">
              We check all the common problem areas that cause leaks and damage:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {surveyIncludes.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-warm-100">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-charcoal font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-charcoal rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <FileCheck className="text-white" size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">What You'll Receive</h3>
                  <p className="text-white/50 text-sm">After our inspection</p>
                </div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                You'll walk away with complete clarity:
              </p>
              <div className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                    <span className="text-white/90 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 shadow-soft hover:shadow-glow-primary group"
            >
              <span>Book Your Free Survey</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-slate-muted">or</span>
            <a 
              href="tel:07538284300" 
              className="inline-flex items-center gap-2 text-charcoal font-heading font-semibold hover:text-primary-600 transition-colors"
            >
              <Phone size={18} />
              <span>Call 07538 284300</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
