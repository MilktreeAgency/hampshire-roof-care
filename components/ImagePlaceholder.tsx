import React from 'react';
import { Camera, Upload, Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  aspectRatio?: string;
  label?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'hero' | 'gallery' | 'profile' | 'before-after';
  showUploadHint?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 'w-full',
  height = 'h-64',
  aspectRatio,
  label = 'Professional Photo',
  description = 'Add your image here',
  className = '',
  variant = 'default',
  showUploadHint = true,
}) => {
  const variantStyles = {
    default: {
      bg: 'bg-gradient-to-br from-warm-100 via-warm-200 to-warm-100',
      icon: ImageIcon,
      iconSize: 48,
      pattern: true,
    },
    hero: {
      bg: 'bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-charcoal/90',
      icon: Camera,
      iconSize: 64,
      pattern: true,
      dark: true,
    },
    gallery: {
      bg: 'bg-gradient-to-br from-surface via-warm-100 to-surface',
      icon: ImageIcon,
      iconSize: 40,
      pattern: true,
    },
    profile: {
      bg: 'bg-gradient-to-br from-primary-100 via-primary-50 to-primary-100',
      icon: Camera,
      iconSize: 32,
      pattern: false,
    },
    'before-after': {
      bg: 'bg-gradient-to-br from-warm-200 via-warm-100 to-warm-200',
      icon: Camera,
      iconSize: 56,
      pattern: true,
    },
  };

  const config = variantStyles[variant];
  const Icon = config.icon;
  const isDark = 'dark' in config && config.dark;

  return (
    <div
      className={`
        ${width} 
        ${aspectRatio ? aspectRatio : height} 
        ${config.bg}
        relative overflow-hidden rounded-2xl
        border-2 border-dashed 
        ${isDark ? 'border-white/20' : 'border-warm-300'}
        flex flex-col items-center justify-center
        transition-all duration-300
        hover:border-primary-300
        group
        ${className}
      `}
    >
      {/* Mesh Pattern Background */}
      {config.pattern && (
        <div className="absolute inset-0 bg-mesh-pattern opacity-50" />
      )}
      
      {/* Decorative Elements */}
      <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${isDark ? 'bg-white/5' : 'bg-primary-500/5'}`} />
      <div className={`absolute bottom-4 right-4 w-16 h-16 rounded-full ${isDark ? 'bg-white/5' : 'bg-primary-500/5'}`} />
      <div className={`absolute top-1/4 right-1/4 w-8 h-8 rounded-lg ${isDark ? 'bg-white/5' : 'bg-copper/10'} rotate-12`} />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Icon Container */}
        <div 
          className={`
            mb-4 p-5 rounded-2xl
            ${isDark ? 'bg-white/10' : 'bg-white/80'}
            shadow-soft
            group-hover:scale-105 transition-transform duration-300
          `}
        >
          <Icon 
            size={config.iconSize} 
            className={`${isDark ? 'text-white/60' : 'text-primary-400'} group-hover:${isDark ? 'text-white/80' : 'text-primary-500'} transition-colors`}
            strokeWidth={1.5}
          />
        </div>
        
        {/* Label */}
        <h4 className={`font-heading font-semibold text-lg mb-1 ${isDark ? 'text-white/80' : 'text-charcoal/70'}`}>
          {label}
        </h4>
        
        {/* Description */}
        <p className={`text-sm ${isDark ? 'text-white/50' : 'text-slate-muted'} max-w-[200px]`}>
          {description}
        </p>
        
        {/* Upload Hint */}
        {showUploadHint && (
          <div 
            className={`
              mt-4 px-4 py-2 rounded-full
              ${isDark ? 'bg-white/10 text-white/60' : 'bg-white text-slate-muted'}
              text-xs font-medium
              flex items-center gap-2
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            `}
          >
            <Upload size={14} />
            <span>Replace with your photo</span>
          </div>
        )}
      </div>
      
      {/* Corner Accent */}
      <div className={`absolute bottom-0 right-0 w-24 h-24 ${isDark ? 'bg-primary-500/20' : 'bg-primary-500/10'} rounded-tl-[100px]`} />
    </div>
  );
};

// Before/After specific placeholder
export const BeforeAfterPlaceholder: React.FC<{
  type: 'before' | 'after';
  className?: string;
}> = ({ type, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <ImagePlaceholder
        variant="before-after"
        aspectRatio="aspect-[4/3]"
        label={type === 'before' ? 'Before Photo' : 'After Photo'}
        description={`Add ${type} transformation image`}
        showUploadHint={true}
      />
      <div 
        className={`
          absolute top-4 left-4 
          px-3 py-1.5 rounded-full
          text-xs font-bold uppercase tracking-wider
          ${type === 'before' 
            ? 'bg-charcoal/80 text-white' 
            : 'bg-primary-500 text-white'
          }
        `}
      >
        {type}
      </div>
    </div>
  );
};

// Gallery Grid Placeholder
export const GalleryPlaceholder: React.FC<{
  count?: number;
  className?: string;
}> = ({ count = 4, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <ImagePlaceholder
          key={i}
          variant="gallery"
          aspectRatio="aspect-square"
          label={`Project ${i + 1}`}
          description="Add project photo"
          showUploadHint={false}
        />
      ))}
    </div>
  );
};

// Team Member Placeholder
export const TeamMemberPlaceholder: React.FC<{
  name?: string;
  role?: string;
  className?: string;
}> = ({ name = 'Team Member', role = 'Role', className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <ImagePlaceholder
        variant="profile"
        width="w-32"
        height="h-32"
        className="rounded-full mx-auto mb-4"
        label=""
        description=""
        showUploadHint={false}
      />
      <h4 className="font-heading font-semibold text-charcoal">{name}</h4>
      <p className="text-sm text-slate-muted">{role}</p>
    </div>
  );
};

export default ImagePlaceholder;




