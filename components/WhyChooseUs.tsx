import React from 'react';
import { CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ setIsQuoteModalOpen }) => {
  const benefits = [
    {
      title: "You get straight answers",
      description: "We focus on what protects your home. We do not push extra work."
    },
    {
      title: "You know what is happening",
      description: "We explain what we found, what it means, and what we recommend."
    },
    {
      title: "Work done with care",
      description: "We treat your home with respect and keep workmanship standards high."
    }
  ];

  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-charcoal mb-4">
            Why homeowners choose Hampshire Roof Care Company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-800/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-800/20"
          >
            Speak to us today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
