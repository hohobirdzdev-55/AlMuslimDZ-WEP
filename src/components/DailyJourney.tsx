import React from 'react';
import { Clock, BookOpen, HeartHandshake, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export const DailyJourney: React.FC = () => {
  const steps = [
    {
      time: 'الفجر والصباح',
      title: 'الصلاة',
      desc: 'الاستيقاظ على أذان الفجر ومتابعة وقت الصلاة وشروق الشمس.',
      icon: <Clock className="w-5 h-5 text-[#c29b68]" />,
    },
    {
      time: 'بعد الصلاة',
      title: 'القرآن الكريم',
      desc: 'قراءة الورد القرآني اليومي بمتابعة تلقائية لآخر صفحة.',
      icon: <BookOpen className="w-5 h-5 text-[#c29b68]" />,
    },
    {
      time: 'أول النهار والمساء',
      title: 'الأذكار',
      desc: 'أذكار الصباح وأذكار المساء مع عداد التكرار المنظم.',
      icon: <HeartHandshake className="w-5 h-5 text-[#c29b68]" />,
    },
    {
      time: 'خلال اليوم',
      title: 'التسبيح الإلكتروني',
      desc: 'استثمار أوقات الفراغ والانتظار في الذكر والاستغفار.',
      icon: <Sparkles className="w-5 h-5 text-[#c29b68]" />,
    },
    {
      time: 'أثناء التنقل',
      title: 'القبلة',
      desc: 'تحديد جهة الكعبة بدقة عند أداء الصلاة خارج المنزل أو المسجد.',
      icon: <Compass className="w-5 h-5 text-[#c29b68]" />,
    },
    {
      time: 'على مدار الساعة',
      title: 'الخدمات اليومية',
      desc: 'التقويم الهجري، الأدعية، وحساب الزكاة والطقس عند الحاجة.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#c29b68]" />,
    },
  ];

  return (
    <section id="daily-journey" className="py-16 sm:py-24 bg-[#061712] border-t border-[#163e31] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-3">
            <span>مسار اليوم</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
            ابدأ يومك مع AlMuslimDZ
          </h2>
          <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed">
            تسلسل طبيعي وهادئ يرافقك في عباداتك وأذكارك منذ الفجر وحتى نهاية يومك.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative p-6 rounded-2xl bg-[#091f17] border border-[#143d30] flex flex-col justify-between group hover:border-[#c29b68]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#133c2e] group-hover:bg-[#184d3b] transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-[#c29b68] px-2.5 py-1 rounded-full bg-[#0d2b21] border border-[#1a4b3c]">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-[#f7f4ed] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8ba49a] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Sequence number bottom badge */}
              <div className="mt-5 pt-3 border-t border-[#12362b] flex items-center justify-between text-xs text-[#6f897f]">
                <span>المرحلة {idx + 1}</span>
                {idx < steps.length - 1 ? <span>↓ التالي</span> : <span>نهاية اليوم</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
