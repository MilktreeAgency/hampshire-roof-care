import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GripVertical, ArrowLeftRight, Camera } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string;
  showLabels?: boolean;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  showLabels = true,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Placeholder component for when no images provided
  const ImagePlaceholder: React.FC<{ label: string; type: 'before' | 'after' }> = ({ label, type }) => (
    <div className={`absolute inset-0 flex flex-col items-center justify-center ${
      type === 'before' 
        ? 'bg-gradient-to-br from-warm-200 via-warm-100 to-warm-200' 
        : 'bg-gradient-to-br from-primary-100 via-primary-50 to-primary-100'
    }`}>
      <div className="absolute inset-0 bg-mesh-pattern opacity-30" />
      <div className={`relative z-10 p-6 rounded-2xl ${
        type === 'before' ? 'bg-charcoal/10' : 'bg-primary-500/10'
      }`}>
        <Camera size={48} className={type === 'before' ? 'text-charcoal/40' : 'text-primary-500/60'} strokeWidth={1.5} />
      </div>
      <p className={`relative z-10 mt-4 font-heading font-semibold ${
        type === 'before' ? 'text-charcoal/60' : 'text-primary-700'
      }`}>
        {label} Photo
      </p>
      <p className="relative z-10 text-sm text-slate-muted mt-1">Add your {type} image</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative ${aspectRatio} overflow-hidden rounded-2xl lg:rounded-3xl shadow-soft-lg ${className}`}
      ref={containerRef}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        {afterImage ? (
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder label={afterLabel} type="after" />
        )}
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {beforeImage ? (
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder label={beforeLabel} type="before" />
        )}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
          <ArrowLeftRight size={20} className="text-charcoal" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-white/0 via-white to-white" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-white/0 via-white to-white" />
      </div>

      {/* Labels */}
      {showLabels && (
        <>
          <div className="absolute top-4 left-4 px-4 py-2 bg-charcoal/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            {beforeLabel}
          </div>
          <div className="absolute top-4 right-4 px-4 py-2 bg-primary-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            {afterLabel}
          </div>
        </>
      )}

      {/* Instruction Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="flex items-center gap-2">
          <GripVertical size={14} />
          Drag to compare
        </span>
      </div>
    </motion.div>
  );
};

// Compact version for galleries
export const BeforeAfterCompact: React.FC<{
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  className?: string;
}> = ({ beforeImage, afterImage, title, className = '' }) => {
  return (
    <div className={`group ${className}`}>
      <BeforeAfterSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
        aspectRatio="aspect-[4/3]"
        showLabels={false}
      />
      {title && (
        <h4 className="mt-3 font-heading font-semibold text-charcoal group-hover:text-primary-600 transition-colors">
          {title}
        </h4>
      )}
    </div>
  );
};

// Grid layout for multiple before/after comparisons
export const BeforeAfterGrid: React.FC<{
  items: Array<{
    beforeImage?: string;
    afterImage?: string;
    title?: string;
  }>;
  columns?: 2 | 3;
  className?: string;
}> = ({ items, columns = 2, className = '' }) => {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6 lg:gap-8 ${className}`}>
      {items.map((item, index) => (
        <BeforeAfterCompact key={index} {...item} />
      ))}
    </div>
  );
};

export default BeforeAfterSlider;




