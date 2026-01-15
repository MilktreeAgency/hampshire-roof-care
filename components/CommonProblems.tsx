import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wind, AlertTriangle, ThermometerSun, Layers, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommonProblemsProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const CommonProblems: React.FC<CommonProblemsProps> = ({ setIsQuoteModalOpen }) => {
  const problems = [
    {
      icon: Droplets,
      title: "Water Stains on Ceiling",
      description: "Brown marks or damp patches after rain often indicate a roof leak. Water can travel before showing, making the source tricky to find.",
      urgency: "Act quickly to prevent structural damage",
      link: "/guides/water-stain-on-ceiling-after-rain"
    },
    {
      icon: Wind,
      title: "Slipped or Missing Tiles",
      description: "High winds often displace tiles, exposing the felt underneath to UV and rain. Left alone, this leads to bigger problems.",
      urgency: "Repair before wet weather arrives",
      link: "/guides/slipped-roof-tiles"
    },
    {
      icon: Building,
      title: "Chimney Leaks",
      description: "Chimneys are the most common source of roof leaks. Flashing can crack or pull away, and mortar degrades over time.",
      urgency: "Common cause of damp patches indoors",
      link: "/guides/chimney-leaks"
    },
    {
      icon: Layers,
      title: "Flat Roof Bubbling",
      description: "Bubbles on flat roofs mean trapped moisture. Sun heats the water, causing delamination. Often needs replacement, not repair.",
      urgency: "May indicate replacement needed",
      link: "/guides/flat-roof-bubbling"
    },
    {
      icon: ThermometerSun,
      title: "Cracked Lead Flashing",
      description: "Lead flashing seals joints and edges. When it cracks or lifts, water tracks into your home causing damp and staining.",
      urgency: "Waterproofing failure risk",
      link: "/guides/lead-flashing-explained"
    },
    {
      icon: AlertTriangle,
      title: "Loose Ridge Cement",
      description: "Cracked cement along the ridge allows water in and loosens tiles. In high winds, tiles can become dangerous.",
      urgency: "Safety and water damage risk",
      link: "/services/roof-pointing-and-cement-work"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4"
            >
              Warning Signs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-charcoal tracking-tight"
            >
              Roof Problems That Need Attention
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-slate-body leading-relaxed mb-6">
              Spotting issues early can save you thousands in repairs. Here are the most common problems we see—and what they mean for your home.
            </p>
            <Link 
              to="/guides"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              <span>View All Guides</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={problem.link}
                className="block h-full group"
              >
                <div className="h-full bg-surface rounded-2xl p-6 lg:p-8 border border-warm-200 hover:border-primary-300 hover:shadow-soft-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-glow-primary transition-all duration-300">
                    <problem.icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-primary-700 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-body text-sm leading-relaxed mb-4">
                    {problem.description}
                  </p>

                  {/* Urgency Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-200">
                    <AlertTriangle size={14} className="text-amber-600" />
                    <span className="text-xs font-medium text-amber-700">{problem.urgency}</span>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Visual Example Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal rounded-3xl p-8 lg:p-12 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
          
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                Not Sure What's Wrong?
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Roof problems can be confusing. That's why we offer a free site survey—we'll climb up, inspect properly, and explain exactly what we find. No jargon, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-charcoal hover:bg-white/90 px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 group"
                >
                  <span>Book Free Survey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:07538284300"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300"
                >
                  Call 07538 284300
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/roofissue1.jpg"
                alt="Damaged roof tiles showing signs of wear and water damage in Hampshire"
                className="rounded-2xl aspect-square object-cover"
              />
              <img
                src="/roofissue2.jpg"
                alt="Common roof problems including cracked tiles and deteriorating cement work"
                className="rounded-2xl aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommonProblems;
