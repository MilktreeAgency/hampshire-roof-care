import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Wrench, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

// Rich Service Card with Image
interface ServiceCardProps {
  slug: string;
  title: string;
  subtitle: string;
  image?: string;
  features?: string[];
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  subtitle,
  image,
  features = [],
  variant = 'default',
  className = '',
}) => {
  if (variant === 'featured') {
    return (
      <Link to={`/services/${slug}`} className={`group block ${className}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative h-full bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl border border-warm-200 transition-all"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <ImagePlaceholder
                variant="gallery"
                height="h-full"
                label={title}
                description="Add service photo"
                showUploadHint={false}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                Popular Service
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-2 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            <p className="text-slate-body mb-6">{subtitle}</p>

            {features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-body">
                    <CheckCircle size={16} className="text-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
              <span>Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/services/${slug}`} className={`group block ${className}`}>
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-4 p-4 bg-white rounded-xl border border-warm-200 hover:border-primary-300 hover:shadow-soft transition-all"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-primary-50 flex items-center justify-center">
                <Wrench size={24} className="text-primary-400" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading font-semibold text-charcoal truncate group-hover:text-primary-600 transition-colors">
              {title}
            </h4>
            <p className="text-sm text-slate-muted truncate">{subtitle}</p>
          </div>
          <ArrowRight size={18} className="text-slate-light group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </motion.div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link to={`/services/${slug}`} className={`group block ${className}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-warm-200 transition-all"
      >
        <div className="h-48 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ImagePlaceholder
              variant="gallery"
              height="h-full"
              label={title}
              description="Add service photo"
              showUploadHint={false}
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-body text-sm line-clamp-2 mb-4">{subtitle}</p>
          <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
            <span>View Service</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Feature List with Icons
interface FeatureListProps {
  features: Array<{
    icon?: React.ReactNode;
    title: string;
    description?: string;
  }>;
  variant?: 'default' | 'grid' | 'inline';
  className?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  variant = 'default',
  className = '',
}) => {
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full"
          >
            {feature.icon || <CheckCircle size={16} className="text-primary-600" />}
            <span className="text-sm font-medium text-charcoal">{feature.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4 p-6 bg-white rounded-2xl border border-warm-200 hover:shadow-soft transition-shadow"
          >
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-600">
              {feature.icon || <CheckCircle size={24} />}
            </div>
            <div>
              <h4 className="font-heading font-semibold text-charcoal mb-1">{feature.title}</h4>
              {feature.description && (
                <p className="text-slate-body text-sm">{feature.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Default - vertical list
  return (
    <div className={`space-y-4 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="mt-1 text-primary-600 flex-shrink-0">
            {feature.icon || <CheckCircle size={20} />}
          </div>
          <div>
            <h4 className="font-semibold text-charcoal">{feature.title}</h4>
            {feature.description && (
              <p className="text-slate-body text-sm mt-0.5">{feature.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Process Step Component
interface ProcessStepProps {
  number: number | string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
  variant?: 'default' | 'horizontal';
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  isLast = false,
  variant = 'default',
}) => {
  if (variant === 'horizontal') {
    return (
      <div className="relative flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Number Circle */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary-600 text-white rounded-2xl mb-6 shadow-glow-primary">
            {icon || (
              <span className="font-heading text-2xl font-bold">{number}</span>
            )}
            {!isLast && (
              <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -translate-y-1/2 ml-4" />
            )}
          </div>
          <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{title}</h3>
          <p className="text-slate-body text-sm max-w-xs mx-auto">{description}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {/* Number & Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-heading font-bold shadow-soft">
          {icon || number}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-warm-200 mt-3" />
        )}
      </div>
      
      {/* Content */}
      <div className="pb-12">
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{title}</h3>
        <p className="text-slate-body">{description}</p>
      </div>
    </div>
  );
};

// Trust Badge Component
interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'default' | 'compact' | 'large';
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
          {icon}
        </div>
        <span className="font-semibold text-charcoal text-sm">{title}</span>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`p-8 bg-white rounded-2xl border border-warm-200 shadow-soft hover:shadow-soft-lg text-center transition-shadow ${className}`}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
          {icon}
        </div>
        <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{title}</h3>
        {description && (
          <p className="text-slate-body text-sm">{description}</p>
        )}
      </motion.div>
    );
  }

  return (
    <div className={`flex items-start gap-4 p-6 bg-surface rounded-xl ${className}`}>
      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-heading font-semibold text-charcoal mb-1">{title}</h4>
        {description && (
          <p className="text-slate-body text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

// Warning/Alert Box
interface AlertBoxProps {
  title: string;
  description: string;
  variant?: 'warning' | 'info' | 'success';
  className?: string;
}

export const AlertBox: React.FC<AlertBoxProps> = ({
  title,
  description,
  variant = 'warning',
  className = '',
}) => {
  const styles = {
    warning: {
      bg: 'bg-amber-50 border-amber-200',
      icon: 'text-amber-600',
      title: 'text-amber-900',
      desc: 'text-amber-800',
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      desc: 'text-blue-800',
    },
    success: {
      bg: 'bg-primary-50 border-primary-200',
      icon: 'text-primary-600',
      title: 'text-primary-900',
      desc: 'text-primary-800',
    },
  };

  const s = styles[variant];
  const Icon = variant === 'warning' ? AlertTriangle : variant === 'success' ? CheckCircle : Shield;

  return (
    <div className={`flex gap-4 p-6 rounded-xl border ${s.bg} ${className}`}>
      <Icon className={`flex-shrink-0 mt-0.5 ${s.icon}`} size={24} />
      <div>
        <h4 className={`font-heading font-semibold mb-1 ${s.title}`}>{title}</h4>
        <p className={`text-sm ${s.desc}`}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;




