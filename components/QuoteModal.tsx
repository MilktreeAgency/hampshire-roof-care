import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, MessageSquare, ArrowRight, ArrowLeft, CheckCircle, Home, Building2, Castle, Warehouse, Layers, Triangle, Square, CircleDot, Wrench, Hammer, Droplets, Shield } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    propertyType: '',
    roofType: '',
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: ''
  });

  const totalSteps = 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xgoovnnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          service: formData.service,
          propertyType: formData.propertyType,
          roofType: formData.roofType,
          message: formData.message,
          _subject: `New Quote Request from ${formData.name}`
        })
      });

      if (response.ok) {
        // Reset form and close modal on success
        setStep(1);
        setFormData({ service: '', propertyType: '', roofType: '', name: '', email: '', phone: '', postcode: '', message: '' });
        onClose();
      } else {
        setSubmitError('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const selectOption = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Auto-advance after selection with a small delay for visual feedback
    setTimeout(() => {
      if (step < totalSteps) setStep(step + 1);
    }, 300);
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

  const canProceedStep4 = formData.name.trim() && formData.postcode.trim();
  const canProceedStep5 = formData.email.trim() && formData.phone.trim();

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

  const serviceTypes = [
    { id: 'roof-repair', label: 'Roof Repairs', icon: Wrench, description: 'Fix leaks & damage' },
    { id: 'roof-replacement', label: 'Roof Replacement', icon: Hammer, description: 'Full roof renewal' },
    { id: 'flat-roof', label: 'Flat Roofing', icon: Square, description: 'EPDM, felt & GRP' },
    { id: 'guttering', label: 'Guttering', icon: Droplets, description: 'Repairs & cleaning' },
    { id: 'leadwork', label: 'Leadwork', icon: Shield, description: 'Flashing & valleys' },
    { id: 'not-sure', label: 'Not Sure', icon: CircleDot, description: 'Need advice' },
  ];

  const propertyTypes = [
    { id: 'detached', label: 'Detached House', icon: Home, description: 'Standalone property' },
    { id: 'semi-detached', label: 'Semi-Detached', icon: Building2, description: 'Joined on one side' },
    { id: 'terraced', label: 'Terraced', icon: Warehouse, description: 'Row of houses' },
    { id: 'bungalow', label: 'Bungalow', icon: Castle, description: 'Single storey' },
  ];

  const roofTypes = [
    { id: 'pitched-tiles', label: 'Pitched Tiles', icon: Triangle, description: 'Clay or concrete tiles' },
    { id: 'pitched-slate', label: 'Pitched Slate', icon: Layers, description: 'Natural or synthetic slate' },
    { id: 'flat', label: 'Flat Roof', icon: Square, description: 'Felt, EPDM or fibreglass' },
    { id: 'not-sure', label: 'Not Sure', icon: CircleDot, description: "I'll need advice" },
  ];

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
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 px-8 py-6 relative">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  
                  <div className="pr-8">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                      Book Your Free Survey
                    </h2>
                    <p className="text-primary-100 text-sm">
                      Get expert advice within 24 hours
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          s <= step ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-2">Step {step} of {totalSteps}</p>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit}>
                  <div className="p-6 md:p-8 min-h-[420px] relative overflow-hidden">
                    <AnimatePresence mode="wait" custom={step}>
                      {/* Step 1: Service Type */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-5"
                        >
                          <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 mb-3 shadow-sm">
                              <Wrench size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal">
                              What service do you need?
                            </h3>
                            <p className="text-slate-muted text-sm mt-1">Select a service</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {serviceTypes.map((type) => {
                              const Icon = type.icon;
                              const isSelected = formData.service === type.id;
                              return (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => selectOption('service', type.id)}
                                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] active:scale-[0.98] ${
                                    isSelected 
                                      ? 'border-primary-500 bg-primary-50 shadow-lg shadow-primary-100' 
                                      : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                                  }`}
                                >
                                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-2 transition-colors ${
                                    isSelected 
                                      ? 'bg-primary-600 text-white' 
                                      : 'bg-warm-100 text-charcoal group-hover:bg-primary-100 group-hover:text-primary-600'
                                  }`}>
                                    <Icon size={20} />
                                  </div>
                                  <h4 className={`font-semibold text-sm ${isSelected ? 'text-primary-700' : 'text-charcoal'}`}>
                                    {type.label}
                                  </h4>
                                  <p className="text-xs text-slate-muted mt-0.5">{type.description}</p>
                                  
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"
                                    >
                                      <CheckCircle size={14} className="text-white" />
                                    </motion.div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Property Type */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-5"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 mb-3 shadow-sm">
                              <Home size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal">
                              What type of property?
                            </h3>
                            <p className="text-slate-muted text-sm mt-1">Select your property type</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {propertyTypes.map((type) => {
                              const Icon = type.icon;
                              const isSelected = formData.propertyType === type.id;
                              return (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => selectOption('propertyType', type.id)}
                                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] active:scale-[0.98] ${
                                    isSelected 
                                      ? 'border-primary-500 bg-primary-50 shadow-lg shadow-primary-100' 
                                      : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                                  }`}
                                >
                                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-colors ${
                                    isSelected 
                                      ? 'bg-primary-600 text-white' 
                                      : 'bg-warm-100 text-charcoal group-hover:bg-primary-100 group-hover:text-primary-600'
                                  }`}>
                                    <Icon size={24} />
                                  </div>
                                  <h4 className={`font-semibold text-sm ${isSelected ? 'text-primary-700' : 'text-charcoal'}`}>
                                    {type.label}
                                  </h4>
                                  <p className="text-xs text-slate-muted mt-0.5">{type.description}</p>
                                  
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"
                                    >
                                      <CheckCircle size={14} className="text-white" />
                                    </motion.div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Roof Type */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-5"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 mb-3 shadow-sm">
                              <Layers size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal">
                              What type of roof?
                            </h3>
                            <p className="text-slate-muted text-sm mt-1">Select your roof type</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {roofTypes.map((type) => {
                              const Icon = type.icon;
                              const isSelected = formData.roofType === type.id;
                              return (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => selectOption('roofType', type.id)}
                                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] active:scale-[0.98] ${
                                    isSelected 
                                      ? 'border-primary-500 bg-primary-50 shadow-lg shadow-primary-100' 
                                      : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                                  }`}
                                >
                                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-colors ${
                                    isSelected 
                                      ? 'bg-primary-600 text-white' 
                                      : 'bg-warm-100 text-charcoal group-hover:bg-primary-100 group-hover:text-primary-600'
                                  }`}>
                                    <Icon size={24} />
                                  </div>
                                  <h4 className={`font-semibold text-sm ${isSelected ? 'text-primary-700' : 'text-charcoal'}`}>
                                    {type.label}
                                  </h4>
                                  <p className="text-xs text-slate-muted mt-0.5">{type.description}</p>
                                  
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"
                                    >
                                      <CheckCircle size={14} className="text-white" />
                                    </motion.div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 4: Name & Postcode */}
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-5"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 mb-3 shadow-sm">
                              <User size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal">
                              Your details
                            </h3>
                            <p className="text-slate-muted text-sm mt-1">So we can prepare your quote</p>
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

                      {/* Step 5: Contact Details */}
                      {step === 5 && (
                        <motion.div
                          key="step5"
                          custom={1}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-5"
                        >
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 mb-3 shadow-sm">
                              <MessageSquare size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal">
                              How can we reach you?
                            </h3>
                            <p className="text-slate-muted text-sm mt-1">We'll be in touch within 24 hours</p>
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
                              placeholder="Tell us about your roof issue..."
                            />
                          </div>

                          {/* Error Message */}
                          {submitError && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                              {submitError}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Navigation */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-4">
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

                    {step === 1 && formData.service && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {step === 2 && formData.propertyType && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {step === 3 && formData.roofType && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {step === 4 && (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceedStep4}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {step === 5 && (
                      <button
                        type="submit"
                        disabled={!canProceedStep5 || isSubmitting}
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle size={18} />
                            <span>Book My Survey</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>

                {/* Trust Footer */}
                <div className="bg-warm-50 px-6 md:px-8 py-4 border-t border-warm-200">
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
