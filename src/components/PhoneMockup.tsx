import React from 'react';
import { ZoomIn } from 'lucide-react';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  onExpand?: () => void;
  priority?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  alt,
  className = '',
  onExpand,
  priority = false,
}) => {
  return (
    <div
      className={`group relative mx-auto rounded-[32px] p-2 sm:p-2.5 bg-[#0a1813] border-2 border-[#1c4738] shadow-2xl shadow-black/50 transition-all duration-300 hover:border-[#c29b68]/70 hover:shadow-black/70 ${className}`}
    >
      {/* Subtle outer metallic rim */}
      <div className="absolute inset-0 rounded-[32px] pointer-events-none ring-1 ring-white/10" />

      {/* Camera punch-hole notch at top center */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-3 h-3 rounded-full bg-black/80 ring-1 ring-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#16382e]" />
      </div>

      {/* Screen container with aspect-[1/2] strictly matching 540x1080 screenshots with object-contain */}
      <div className="relative overflow-hidden rounded-[24px] bg-[#071913] aspect-[1/2] w-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Click to expand overlay on hover */}
        {onExpand && (
          <button
            type="button"
            onClick={onExpand}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-zoom-in text-white z-10"
            aria-label="تكبير لقطة الشاشة"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081d17]/90 border border-[#c29b68]/50 text-xs sm:text-sm font-medium text-[#f5f0e6] shadow-lg backdrop-blur-sm">
              <ZoomIn className="w-4 h-4 text-[#c29b68]" />
              <span>تكبير الصورة</span>
            </div>
          </button>
        )}
      </div>

      {/* Subtle bottom gesture bar */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20 pointer-events-none" />
    </div>
  );
};
