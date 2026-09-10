import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden islamic-pattern-bg">
      {/* Decorative ambient halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[500px] h-[300px] bg-[#1a5542]/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo badge */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl overflow-hidden ring-1 ring-[#c29b68]/50 shadow-xl bg-[#0a221a] flex items-center justify-center p-1.5">
          <img
            src="/el muslim dz.png"
            alt="شعار AlMuslimDZ الرسمي"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#f7f4ed] tracking-tight mb-5">
          جاهز لتجربة AlMuslimDZ؟
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-[#c9d5cf] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          حمّل التطبيق واستفد من مجموعة من الخدمات الإسلامية اليومية في مكان واحد.
        </p>

        {/* Big Download Button */}
        <div className="flex flex-col items-center">
          <a
            href={APK_DOWNLOAD_URL}
            download={APP_CONFIG.apkFileName}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl bg-[#c29b68] hover:bg-[#d4ad78] text-[#081d17] font-bold text-lg sm:text-xl shadow-xl shadow-[#c29b68]/20 transition-all hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#c29b68] focus:ring-offset-2 focus:ring-offset-[#081d17]"
            id="final-download-cta-btn"
          >
            <Download className="w-6 h-6 text-[#081d17] stroke-[2.2]" />
            <span>تحميل التطبيق مجاناً</span>
          </a>

          <div className="flex items-center gap-2 mt-4 text-sm text-[#88a397]">
            <Smartphone className="w-4 h-4 text-[#c29b68]" />
            <span className="font-semibold text-[#c9d5cf]">Android APK</span>
            <span>•</span>
            <span>تنزيل مباشر وسريع</span>
            <span>•</span>
            <span className="text-[#dfbd8e]">مجاني 100%</span>
          </div>

          <p className="text-xs text-[#6e877e] mt-3">
            ملف APK مخصص لأجهزة Android. يمكنك تثبيته مباشرة على هاتفك.
          </p>
        </div>
      </div>
    </section>
  );
};
