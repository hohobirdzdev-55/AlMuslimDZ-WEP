import React from 'react';
import { Layers, LayoutDashboard, BookOpenCheck, Wrench, ShieldCheck, HelpCircle } from 'lucide-react';

export const WhyAlMuslimDZ: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-[#c29b68]" />,
      title: 'تطبيق واحد',
      description: 'مجموعة متنوعة من الخدمات الإسلامية في مكان واحد.',
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-[#c29b68]" />,
      title: 'بسيط وسهل',
      description: 'واجهة واضحة ومصممة للاستخدام اليومي.',
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-[#c29b68]" />,
      title: 'القرآن والأذكار',
      description: 'الوصول السريع إلى المحتوى الإسلامي الأساسي.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#c29b68]" />,
      title: 'أدوات عملية',
      description: 'القبلة، التسبيح الإلكتروني، حاسبة الزكاة، مواقيت الصلاة وغيرها.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c29b68]" />,
      title: 'بدون تعقيد',
      description: 'يمكن استخدام الخدمات الأساسية دون الحاجة إلى إنشاء حساب.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative islamic-pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>المقارنة والقيمة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
            لماذا AlMuslimDZ؟
          </h2>
          <p className="text-base sm:text-lg text-[#dfbd8e] font-medium leading-relaxed mb-6">
            يجمع AlMuslimDZ مجموعة من الأدوات والخدمات الإسلامية اليومية في تجربة واحدة بسيطة.
          </p>
          {/* Integrated Services Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {[
              'القرآن الكريم',
              'الأذكار',
              'مواقيت الصلاة',
              'اتجاه القبلة',
              'التسبيح الإلكتروني',
              'حاسبة الزكاة',
              'الأدعية',
              'صفة صلاة النبي ﷺ',
              'الطقس',
              'أدوات إضافية',
            ].map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#0e2b22] border border-[#194336] text-[#c9d5cf]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0a221a] border border-[#174235] hover:border-[#c29b68]/40 transition-all duration-200 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-3 rounded-xl bg-[#143e32] w-fit mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#f7f4ed] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8ba49a] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
