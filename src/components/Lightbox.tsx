import React, { useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Download } from 'lucide-react';
import { ScreenshotItem } from '../types';

interface LightboxProps {
  items: ScreenshotItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || currentIndex < 0 || currentIndex >= items.length) {
    return null;
  }

  const currentItem = items[currentIndex];

  const handleNext = () => {
    // In RTL, "Next" visually advances to next item (index + 1)
    onNavigate((currentIndex + 1) % items.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // In RTL, left arrow goes forward, right arrow goes backward, or vice versa
      if (e.key === 'ArrowLeft') handleNext();
      if (e.key === 'ArrowRight') handlePrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
    >
      {/* Container to prevent backdrop click closing when clicking inside */}
      <div
        className="relative max-w-4xl w-full flex flex-col items-center max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="w-full flex items-center justify-between py-2 px-3 mb-2 rounded-xl bg-[#081d17]/80 border border-[#194336] text-[#f7f4ed]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#c29b68]/20 text-[#dfbd8e] border border-[#c29b68]/30">
              {currentItem.category}
            </span>
            <h3 className="text-base font-bold font-display text-[#f7f4ed]">
              {currentItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#88a397]">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#143c2f] hover:bg-[#1d5744] text-[#f7f4ed] transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Display Area with Navigation Arrows */}
        <div className="relative w-full flex items-center justify-center">
          {/* Previous Button (Right arrow in RTL) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute right-2 sm:-right-12 z-20 p-2.5 rounded-full bg-[#081d17]/80 border border-[#194336] hover:border-[#c29b68] text-white hover:text-[#dfbd8e] transition-all shadow-xl"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Screenshot Image inside Android chassis */}
          <div className="max-h-[72vh] flex items-center justify-center">
            <img
              src={currentItem.src}
              alt={currentItem.altText}
              className="max-h-[72vh] w-auto rounded-[24px] border-2 border-[#1c4e3f] shadow-2xl object-contain"
            />
          </div>

          {/* Next Button (Left arrow in RTL) */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute left-2 sm:-left-12 z-20 p-2.5 rounded-full bg-[#081d17]/80 border border-[#194336] hover:border-[#c29b68] text-white hover:text-[#dfbd8e] transition-all shadow-xl"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Caption info below */}
        <div className="mt-3 text-center px-4 max-w-xl">
          <p className="text-sm text-[#c9d5cf]">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
