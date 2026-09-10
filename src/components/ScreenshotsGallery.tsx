import React, { useState } from 'react';
import { SCREENSHOTS } from '../data/screenshots';
import { PhoneMockup } from './PhoneMockup';
import { Smartphone, Eye } from 'lucide-react';

interface ScreenshotsGalleryProps {
  onOpenScreenshot: (id: string) => void;
}

export const ScreenshotsGallery: React.FC<ScreenshotsGalleryProps> = ({ onOpenScreenshot }) => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const categories = [
    'الكل',
    'الرئيسية',
    'القرآن',
    'الأذكار',
    'الأدعية',
    'القبلة',
    'التسبيح',
    'الزكاة',
    'صفة الصلاة',
    'الطقس',
    'الإعدادات',
    'المزيد',
  ];

  const filteredScreenshots =
    activeCategory === 'الكل'
      ? SCREENSHOTS
      : SCREENSHOTS.filter((s) => s.category === activeCategory);

  return (
    <section id="screenshots" className="py-16 sm:py-24 bg-[#051510] border-y border-[#173e31] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>معرض الصور</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
            استكشف التطبيق من الداخل
          </h2>
          <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed">
            واجهة بسيطة تجمع أهم الخدمات الإسلامية اليومية في تجربة واحدة.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap focus:outline-none ${
                activeCategory === cat
                  ? 'bg-[#c29b68] text-[#081d17] font-bold shadow'
                  : 'bg-[#0b221a] hover:bg-[#12382c] text-[#c9d5cf] border border-[#174235]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-[#091f18] p-5 rounded-2xl border border-[#143a2f] hover:border-[#c29b68]/40 transition-all duration-300"
            >
              {/* Phone Mockup with Click-to-Expand */}
              <div className="w-full max-w-[240px] sm:max-w-[250px] mb-4">
                <PhoneMockup
                  src={item.src}
                  alt={item.altText}
                  onExpand={() => onOpenScreenshot(item.id)}
                />
              </div>

              {/* Label & Description */}
              <div className="w-full text-center mt-2">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#12392d] text-[#dfbd8e] border border-[#194336]">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold font-display text-[#f7f4ed]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#8ba49a] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => onOpenScreenshot(item.id)}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#c29b68] hover:text-[#dfbd8e] font-medium transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>عرض بحجم كامل</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
