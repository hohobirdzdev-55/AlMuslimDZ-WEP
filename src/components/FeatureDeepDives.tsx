import React from 'react';
import {
  BookOpen,
  BookMarked,
  HeartHandshake,
  Compass,
  Sparkles,
  Calculator,
  CheckCircle2,
  SlidersHorizontal,
  Info,
  Scroll,
  Layers,
  CloudSun,
  Flame,
  Smartphone,
} from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface FeatureDeepDivesProps {
  onOpenScreenshot: (id: string) => void;
}

export const FeatureDeepDives: React.FC<FeatureDeepDivesProps> = ({ onOpenScreenshot }) => {
  return (
    <div id="features-deep" className="space-y-20 sm:space-y-28 py-10 sm:py-16">
      {/* 1. شاشة البداية / Splash Screen */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>فلاش سكرين</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                شاشة البداية الهادئة
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                انطلاقة هادئة وسريعة تعكس هوية التطبيق الإسلامية الراقية، وتبدأ مباشرة دون شاشات تسجيل أو انتظار معقد.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>انطلاق فوري وخفيف</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    تحميل فوري لأدوات التطبيق بمجرد الفتح دون إعلانات منبثقة أو شاشات ترحيبية مشتتة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>هوية بصرية إسلامية</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    طابع متزن يبعث على الراحة والسكينة ويُهيئ المستخدم للذكر والعبادة.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/splash.JPEG"
                  alt="لقطة شاشة فلاش سكرين لتطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('splash')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. القرآن الكريم – فهرس السور */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-[#061712]/60 border-y border-[#143c2f]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/quran.JPEG"
                  alt="لقطة شاشة من تطبيق AlMuslimDZ تعرض فهرس سور القرآن الكريم"
                  onExpand={() => onOpenScreenshot('quran')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>القرآن الكريم</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                القرآن الكريم – فهرس السور
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                يوفر التطبيق فهرساً شاملاً لسور القرآن الكريم يتيح لك الوصول السلس والسريع إلى أي سورة مع كافة تفاصيلها الأساسية.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>ترتيب دقيق ومعلومات وافية</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    عرض أرقام السور، وعدد آياتها، وتحديد مكان نزولها (مكية أو مدنية) بوضوح تام.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>تصفح ميسر وسريع</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    إمكانية التمرير المريح والانتقال المباشر بين أجزاء وسور المصحف الشريف.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. قارئ القرآن الكريم / عارض السور */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <BookMarked className="w-3.5 h-3.5" />
                <span>المصحف الشريف</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                قارئ القرآن الكريم / عارض السور
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                تجربة قراءة قرآنية أصيلة ومريحة للعين بخط قرآني واضح وإطارات وزخارف إسلامية هادئة تعينك على التدبر.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>خط عثماني مريح للعين</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    نصوص الآيات بدقة عالية مع علامات الترقيم والأوقاف للقراءة المطمئنة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>متابعة موضع التوقف</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    سهولة متابعة القراءة ومواصلة وردك القرآني من حيث توقفت في جلستك السابقة.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/quran-reader.JPEG"
                  alt="لقطة شاشة قارئ القرآن الكريم وعارض السور في AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('quran-reader')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. الأذكار */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-[#061712]/60 border-y border-[#143c2f]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/azkar.JPEG"
                  alt="لقطة شاشة قسم الأذكار اليومية في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('azkar')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>حصن المسلم</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                الأذكار
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                يوفر التطبيق قسماً شاملاً للأذكار اليومية مع إمكانية الوصول إلى أذكار حصن المسلم وتصنيفاتها المعتمدة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>تصنيفات منظمة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    أذكار الصباح والمساء، أذكار النوم والاستيقاظ، أذكار الصلاة، وأدعية الأحوال المختلفة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>عداد تكرار تفاعلي</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    عداد لكل ذكر يتناقص مع كل تكرار لضبط الورد المأثور بكل سهولة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. اتجاه القبلة */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>البوصلة البصرية</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                اتجاه القبلة
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                أداة دقيقة لتحديد اتجاه الكعبة المشرفة اعتماداً على مستشعرات الهاتف وبوصلة بصرية سلسة أثناء السفر والتنقل.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>إشارة واضحة للكعبة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    مؤشر بصري يتجه نحو مكة المكرمة مع إظهار زاوية الانحراف بدقة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>جاهزة للاستخدام في أي مكان</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    تعمل في أي مدينة أو قرية دون خطوات معقدة لضمان أداء الصلاة في اتجاهها الصحيح.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/qibla.JPEG"
                  alt="لقطة شاشة اتجاه القبلة في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('qibla')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. قسم المزيد */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-[#061712]/60 border-y border-[#143c2f]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/more.JPEG"
                  alt="لقطة شاشة قسم المزيد في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('more')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>الخدمات الإضافية</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                قسم المزيد
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                مدخل بصري متكامل يوضح مجموعة الخدمات والأدوات الإضافية المتوفرة داخل التطبيق، ويوفر لك وصولاً سريعاً لكافة الميزات المدمجة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>تجميع منظم للأدوات</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    واجهة تجمع حاسبة الزكاة، صفة صلاة النبي، الأدعية، والتسبيح، والطقس، والإعدادات في شاشة واحدة واضحة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>سهولة التنقل السريع</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    أيقونات وبطاقات واضحة تمكنك من فتح الخدمة المطلوبة بلمسة واحدة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. صفة صلاة النبي ﷺ (قسم مستقل وواضح) */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>التعليم الفقهي الميسر</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                صفة صلاة النبي ﷺ
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                قسم مستقل مخصص لشرح صفة صلاة النبي ﷺ خطوة بخطوة من تكبيرة الإحرام إلى التسليم، مع إيضاح السنن والهيئات الصحيحة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>خطوات الصلاة مرتبة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    بيان أركان وواجبات وسنن الصلاة بالترتيب والتفصيل المبسط مع الأذكار المقترنة بها.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>مرجع سريع للمسلم</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    مراجعة أداء الصلاة والتأكد من صحة الحركات وهيئات الركوع والسجود والجلوس.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/prayer-prophet.JPEG"
                  alt="لقطة شاشة صفة صلاة النبي ﷺ في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('prayer-prophet')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. حاسبة الزكاة (ميزة بارزة ومميزة) */}
      <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-[#09221a] via-[#0b2b20] to-[#09221a] border-y border-[#c29b68]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/zakat.JPEG"
                  alt="لقطة شاشة حاسبة الزكاة في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('zakat')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#164536] border border-[#c29b68]/40 text-[#dfbd8e] text-xs font-semibold mb-4 shadow-sm">
                <Calculator className="w-3.5 h-3.5 text-[#c29b68]" />
                <span>أداة بارزة في التطبيق</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-3">
                حاسبة الزكاة
              </h2>
              <p className="text-base sm:text-lg text-[#dfbd8e] font-medium leading-relaxed mb-4">
                حاسبة ميسرة للزكاة ضمن أدوات التطبيق اليومية.
              </p>

              {/* Legal / Jurisprudence Notice as strictly instructed */}
              <div className="flex items-start gap-3 p-3.5 mb-6 rounded-xl bg-[#081d17] border border-[#c29b68]/30 text-xs sm:text-sm text-[#c9d5cf] leading-relaxed">
                <Info className="w-5 h-5 text-[#c29b68] shrink-0 mt-0.5" />
                <span>
                  للاستخدام الميسر، مع مراعاة اختلاف الأحكام والحالات الشرعية.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0c2e23] border border-[#1b503f]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>حساب زكاة المال والمدخرات</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    إدخال المبالغ النقدية والودائع لحساب نسبة 2.5% بعد بلوغ النصاب وحولان الحول.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c2e23] border border-[#1b503f]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>الذهب والفضة وعروض التجارة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    حقول مخصصة لجرامات الذهب وقيم البضائع التجارية لحساب الإجمالي بدقة وسرعة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. الأدعية (قسم مستقل) */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <Scroll className="w-3.5 h-3.5" />
                <span>الدعاء والابتهال</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                الأدعية
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                قسم مستقل للأدعية يضم مختارات من الأدعية القرآنية والنبوية المأثورة بأسلوب عرض هادئ ومنظم يسهل قراءتها في كل وقت.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>أدعية جامعة من القرآن والسنة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    نصوص صحيحة ومحققة مرتبة حسب الأحوال والمناسبات وحاجات المسلم اليومية.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>تصميم هادئ ومريح للعين</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    قراءة ميسرة دون إزعاج بصري مع إبراز معاني الدعاء والرجاء.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/dua.JPEG"
                  alt="لقطة شاشة قسم الأدعية في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('dua')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. الإعدادات والمظهر */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-[#061712]/60 border-y border-[#143c2f]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/settings.JPEG"
                  alt="لقطة شاشة الإعدادات والمظهر في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('settings')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>التحكم والتخصيص</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                الإعدادات والمظهر
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                يوفر التطبيق إعدادات للتحكم في تجربة الاستخدام والمظهر وتخصيص التنبيهات وفق الإمكانيات المتوفرة فعلياً في التطبيق.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>خيارات المظهر والتنبيه</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    إمكانية تفعيل الوضع الليلي أو النهاري وضبط تفضيلات الصوت والإشعارات.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>تعديل فارق التوقيت بالدقائق</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    إمكانية إضافة أو إنقاص دقائق لأوقات الصلاة لمطابقة توقيت مسجد حيك المحلي بدقة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. الطقس */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e2b22] border border-[#194336] text-[#c29b68] text-xs font-semibold mb-4">
                <CloudSun className="w-3.5 h-3.5" />
                <span>الأحوال الجوية</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-4">
                الطقس
              </h2>
              <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed mb-6">
                معرفة حالة الطقس ودرجات الحرارة لمدينتك بسهولة، لمساعدتك على ترتيب الذهاب لصلوات الجماعة وتنقلك اليومي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>درجات الحرارة والحالة العامة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    عرض درجة الحرارة الحالية وحالة السماء وسرعة الرياح لمدينتك.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a221a] border border-[#163f32]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>مدمج ضمن أدوات التطبيق</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    الاطلاع على الجو دون مغادرة التطبيق أو الحاجة لتطبيقات طقس ثقيلة أخرى.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/metio.JPEG"
                  alt="لقطة شاشة قسم الطقس في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('metio')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. التسبيح الإلكتروني (ميزة بارزة وأساسية) */}
      <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-[#09221a] via-[#0b2b20] to-[#09221a] border-y border-[#c29b68]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Mockup Column (Left on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[270px] sm:max-w-[300px]">
                <PhoneMockup
                  src="/screenshots/tasbeeh.JPEG"
                  alt="لقطة شاشة التسبيح الإلكتروني في تطبيق AlMuslimDZ"
                  onExpand={() => onOpenScreenshot('tasbeeh')}
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#164536] border border-[#c29b68]/40 text-[#dfbd8e] text-xs font-semibold mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#c29b68]" />
                <span>ميزة أساسية بارزة</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f4ed] tracking-tight mb-3">
                التسبيح الإلكتروني
              </h2>
              <p className="text-base sm:text-lg text-[#dfbd8e] font-medium leading-relaxed mb-6">
                سبّح واحتفظ بعدّ التسبيحات بسهولة من خلال عداد إلكتروني بسيط داخل التطبيق.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-[#0c2e23] border border-[#1b503f]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>اختيار الذكر المطلوب</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    التنقل السلس بين الأذكار الشهيرة كالتسبيح والتحميد والتكبير والاستغفار.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c2e23] border border-[#1b503f]">
                  <div className="flex items-center gap-2.5 mb-1.5 text-[#dfbd8e] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c29b68]" />
                    <span>مساحة ضغط مريحة</span>
                  </div>
                  <p className="text-xs text-[#88a397] leading-relaxed">
                    زر عداد كبير وسهل الاستخدام بيد واحدة، مع إمكانية التصفير أو مواصلة الإحصاء في أي وقت.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
