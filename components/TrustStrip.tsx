import React from 'react';
import { Eye, Award, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <Eye className="text-primary-800" size={28} />,
      title: "Transparent advice",
      desc: "We focus on what protects your home. We do not push extra work."
    },
    {
      icon: <Award className="text-primary-800" size={28} />,
      title: "High workmanship standards",
      desc: "We treat your home with respect and keep workmanship standards high."
    },
    {
      icon: <ClipboardCheck className="text-primary-800" size={28} />,
      title: "Site survey before any quote",
      desc: "We do not guess. We do not price work without seeing the roof."
    }
  ];

  return (
    <section className="bg-white border-y border-warm-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-charcoal tracking-tight">
            Roofing advice you can trust
          </h2>
          <p className="text-charcoal/60 mt-3 max-w-2xl mx-auto leading-relaxed">
            Some companies take too long to respond. Others quote for work you do not need.
            We keep things simple, honest, and clear.
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-warm-50 border border-warm-100 hover:border-primary-800/20 transition-colors duration-300"
            >
              <div className="mb-5 p-4 bg-white rounded-2xl shadow-sm border border-warm-100">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-charcoal mb-3">{item.title}</h4>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-800/20">
              Request a survey and quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
