import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
  variant?: 'default' | 'large' | 'hero' | 'compact';
  icon?: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
  className = '',
  variant = 'default',
  icon,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  const variantStyles = {
    default: {
      container: 'text-center p-6',
      number: 'text-4xl md:text-5xl font-heading font-bold text-charcoal',
      label: 'text-slate-body text-sm mt-2',
    },
    large: {
      container: 'text-center p-8',
      number: 'text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal',
      label: 'text-slate-body text-base mt-3',
    },
    hero: {
      container: 'text-center p-4 md:p-6',
      number: 'text-3xl md:text-4xl font-heading font-bold text-white',
      label: 'text-white/70 text-xs md:text-sm mt-1.5',
    },
    compact: {
      container: 'flex items-center gap-4 p-4',
      number: 'text-2xl md:text-3xl font-heading font-bold text-charcoal',
      label: 'text-slate-muted text-sm',
    },
  };

  const styles = variantStyles[variant];

  if (variant === 'compact') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`${styles.container} ${className}`}
      >
        {icon && (
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
            {icon}
          </div>
        )}
        <div>
          <div className={styles.number}>
            {prefix}{count.toLocaleString()}{suffix}
          </div>
          <div className={styles.label}>{label}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`${styles.container} ${className}`}
    >
      {icon && (
        <div className={`mx-auto mb-4 w-14 h-14 rounded-2xl flex items-center justify-center ${
          variant === 'hero' ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary-600'
        }`}>
          {icon}
        </div>
      )}
      <div className={styles.number}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
};

// Stats Row Component for Hero
export const StatsRow: React.FC<{
  stats: Array<{
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  variant?: 'light' | 'dark' | 'glass';
  className?: string;
}> = ({ stats, variant = 'glass', className = '' }) => {
  const bgStyles = {
    light: 'bg-white border border-warm-200',
    dark: 'bg-charcoal',
    glass: 'glass border border-white/20',
  };

  return (
    <div className={`${bgStyles[variant]} rounded-2xl md:rounded-full overflow-hidden ${className}`}>
      <div className="grid grid-cols-2 md:flex md:divide-x divide-white/10">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`px-6 py-5 md:px-8 md:py-6 ${index >= 2 ? 'col-span-1' : ''}`}
          >
            <StatCounter
              {...stat}
              variant={variant === 'dark' || variant === 'glass' ? 'hero' : 'default'}
              duration={2 + index * 0.2}
              className="!p-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Large Stats Grid
export const StatsGrid: React.FC<{
  stats: Array<{
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}> = ({ stats, columns = 4, className = '' }) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl border border-warm-200 shadow-soft hover:shadow-soft-lg transition-shadow"
        >
          <StatCounter
            {...stat}
            variant="default"
            duration={2 + index * 0.15}
          />
        </div>
      ))}
    </div>
  );
};

export default StatCounter;




