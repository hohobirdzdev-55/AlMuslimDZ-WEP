import React from 'react';
import {
  BookOpen,
  BookMarked,
  HeartHandshake,
  Scroll,
  Clock,
  Bell,
  Compass,
  Sparkles,
  Calculator,
  Quote,
  CalendarDays,
  CloudSun,
  CheckCircle2,
  Bookmark,
  Sliders,
} from 'lucide-react';
import { CORE_SERVICES } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-[#c29b68]" />,
  BookMarked: <BookMarked className="w-5 h-5 text-[#c29b68]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#c29b68]" />,
  Scroll: <Scroll className="w-5 h-5 text-[#c29b68]" />,
  Clock: <Clock className="w-5 h-5 text-[#c29b68]" />,
  Bell: <Bell className="w-5 h-5 text-[#c29b68]" />,
  Compass: <Compass className="w-5 h-5 text-[#c29b68]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#c29b68]" />,
  Calculator: <Calculator className="w-5 h-5 text-[#c29b68]" />,
  Quote: <Quote className="w-5 h-5 text-[#c29b68]" />,
  CalendarDays: <CalendarDays className="w-5 h-5 text-[#c29b68]" />,
  CloudSun: <CloudSun className="w-5 h-5 text-[#c29b68]" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#c29b68]" />,
  Bookmark: <Bookmark className="w-5 h-5 text-[#c29b68]" />,
  Sliders: <Sliders className="w-5 h-5 text-[#c29b68]" />,
};

export const CoreServices: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative islamic-pattern-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-3">
            <span>الخدمات المدمجة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
            خدمات إسلامية متعددة في مكان واحد
          </h2>
          <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed">
            جميع الأدوات والخدمات الأساسية التي يحتاجها المسلم في حياته اليومية، مبنية بعناية وسهولة داخل تطبيق AlMuslimDZ.
          </p>
        </div>

        {/* Services Grid (15 in-app services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_SERVICES.map((service, index) => {
            const icon = iconMap[service.iconName] || <BookOpen className="w-5 h-5 text-[#c29b68]" />;
            return (
              <div
                key={service.id}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#0a221a] hover:bg-[#0e2d23] border border-[#163f32] hover:border-[#c29b68]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#143e32] group-hover:bg-[#1a4f40] transition-colors">
                      {icon}
                    </div>
                    {service.highlight && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#c29b68]/15 text-[#dfbd8e] border border-[#c29b68]/30 font-medium">
                        أساسي
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#f7f4ed] mb-2 group-hover:text-[#dfbd8e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8ba49a] group-hover:text-[#c9d5cf] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
