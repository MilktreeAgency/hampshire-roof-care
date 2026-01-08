import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AreasStrip: React.FC = () => {
  const areas = [
    { name: 'Southampton', slug: 'southampton', count: '150+' },
    { name: 'Winchester', slug: 'winchester', count: '120+' },
    { name: 'New Forest', slug: 'new-forest', count: '80+' },
    { name: "Chandler's Ford", slug: 'chandlers-ford', count: '60+' },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Header */}
          <div className="lg:col-span-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Service Areas
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-charcoal tracking-tight mb-4"
            >
              Serving Hampshire & Beyond
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-body leading-relaxed mb-6"
            >
              We're proud to have helped homeowners across Hampshire with their roofing needs. Click your area for local information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/areas"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                <span>View All Areas</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Areas Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  to={`/areas/${area.slug}`}
                  className="group block p-6 bg-surface rounded-2xl border border-warm-200 hover:border-primary-300 hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <MapPin size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold text-slate-muted bg-white px-2 py-1 rounded-full">
                      {area.count} jobs
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-primary-600 transition-colors">
                    {area.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-sm text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View local info</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasStrip;
