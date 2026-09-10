import React from 'react';
import { Layers, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const IntroOverview: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-y border-[#194336]/60 bg-[#061712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#0a221a] border border-[#174235] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#143d31] text-[#c29b68] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#f7f4ed] mb-1.5">
                تطبيق واحد متكامل
              </h3>
              <p className="text-sm text-[#c9d5cf] leading-relaxed">
                يغنيك عن تثبيت عدة تطبيقات متفرقة للصلاة والأذكار والقرآن، ويجمعها في تجربة موحدة وخفيفة.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#0a221a] border border-[#174235] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#143d31] text-[#c29b68] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#f7f4ed] mb-1.5">
                بساطة وسهولة تامة
              </h3>
              <p className="text-sm text-[#c9d5cf] leading-relaxed">
                تصميم هادئ ومريح للعين مع الوضع الليلي، يركز على العبادة والذكر دون إرباك أو تعقيدات.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#0a221a] border border-[#174235] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#143d31] text-[#c29b68] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#f7f4ed] mb-1.5">
                خصوصية وخفة أداء
              </h3>
              <p className="text-sm text-[#c9d5cf] leading-relaxed">
                يعمل محلياً على جهازك، دون اشتراط إنشاء حسابات شخصية أو جمع بيانات غير ضرورية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
