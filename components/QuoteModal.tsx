import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, User, MessageSquare, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: ''
  });

  const totalSteps = 2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStep(1);
    setFormData({ name: '', email: '', phone: '', postcode: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const canProceedStep1 = formData.name.trim() && formData.postcode.trim();
  const canProceedStep2 = formData.email.trim() && formData.phone.trim();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-50"
            onClick={handleClose}
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full max-w-lg"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary-600 px-8 py-6 relative">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  
                  <div className="pr-8">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                      Get Your Free Quote
                    </h2>
                    <p className="text-primary-100 text-sm">
                      We'll get back to you within 24 hours
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 flex items-center gap-2">
                    {[1, 2].map((s) => (
                      <div
                        key={s}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          s <= step ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-2">Step {step} of {totalSteps}</p>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit}>
                  <div className="p-8 min-h-[320px] relative overflow-hidden">
                    <AnimatePresence mode="wait" custom={step}>
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-3">
                              <User size={24} />
                            </div>
                            <h3 className="text-lg font-heading font-semibold text-charcoal">
                              Let's start with your details
                            </h3>
                          </div>

                          {/* Name */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-warm-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-charcoal placeholder-slate-muted"
                              placeholder="Enter your full name"
                              autoFocus
                            />
                          </div>

                          {/* Postcode */}
                          <div>
                            <label htmlFor="postcode" className="block text-sm font-medium text-charcoal mb-2">
                              Your Postcode
                            </label>
                            <input
                              type="text"
                              id="postcode"
                              name="postcode"
                              required
                              value={formData.postcode}
                              onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value.toUpperCase() }))}
                              className="w-full px-4 py-4 border-2 border-warm-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-charcoal placeholder-slate-muted"
                              placeholder="e.g. SO14 1AA"
                            />
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-3">
                              <MessageSquare size={24} />
                            </div>
                            <h3 className="text-lg font-heading font-semibold text-charcoal">
                              How can we reach you?
                            </h3>
                          </div>

                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-warm-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-charcoal placeholder-slate-muted"
                              placeholder="your@email.com"
                              autoFocus
                            />
                          </div>

                          {/* Phone */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-warm-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-charcoal placeholder-slate-muted"
                              placeholder="07XXX XXXXXX"
                            />
                          </div>

                          {/* Message (Optional) */}
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                              Brief description <span className="text-slate-muted">(optional)</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={2}
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-charcoal placeholder-slate-muted resize-none"
                              placeholder="Tell us about your roof..."
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Navigation */}
                  <div className="px-8 pb-8 flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 px-5 py-3 text-charcoal font-medium hover:bg-warm-100 rounded-xl transition-colors"
                      >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceedStep1}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canProceedStep2}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <CheckCircle size={18} />
                        <span>Get My Quote</span>
                      </button>
                    )}
                  </div>
                </form>

                {/* Trust Footer */}
                <div className="bg-warm-50 px-8 py-4 border-t border-warm-200">
                  <p className="text-xs text-slate-muted text-center">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;