import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Smartphone, ShieldCheck, ArrowDown } from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_CONFIG, getAbsoluteDownloadUrl } from '../config';
import QRCode from 'qrcode';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onOpenScreenshot?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScreenshot }) => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    // Check if client is running on Android device
    const ua = navigator.userAgent.toLowerCase();
    setIsAndroid(ua.includes('android'));

    // Generate direct download QR code
    const fullUrl = getAbsoluteDownloadUrl();
    QRCode.toDataURL(fullUrl, {
      width: 256,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then((url) => {
        setQrCodeUrl(url);
      })
      .catch((err) => {
        console.error('Error generating download QR Code in Hero:', err);
      });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Official Cover Background with responsive positioning and elegant overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-[center_top] md:bg-center transition-opacity duration-700 opacity-30 sm:opacity-40"
          style={{
            backgroundImage: "url('/cover.png')",
          }}
        />
        {/* Harmonized emerald & dark-green overlays preserving cover visual richness while guaranteeing WCAG text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081d17]/85 via-[#081d17]/80 to-[#081d17]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081d17]/95 via-[#081d17]/65 to-transparent rtl:bg-gradient-to-l rtl:from-[#081d17]/95 rtl:via-[#081d17]/65 rtl:to-transparent" />
        {/* Subtle geometric overlay pattern */}
        <div className="absolute inset-0 islamic-pattern-bg opacity-25" />
      </div>

      {/* Decorative ambient radial lighting */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#174e3e]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Right content for RTL: Main Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Official Logo & Brand Header */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-2.5 pr-2.5 sm:pr-3 pl-4 sm:pl-5 rounded-2xl bg-[#0a221a]/85 border border-[#1c4e3f]/90 shadow-lg shadow-black/30 backdrop-blur-md mb-6 transition-all hover:border-[#c29b68]/50">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden ring-1 ring-[#c29b68]/50 bg-[#061712] flex items-center justify-center p-1 shrink-0 shadow-md">
                <img
                  src="/el muslim dz.png"
                  alt="شعار AlMuslimDZ الرسمي"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-bold font-display text-[#f7f4ed] tracking-tight">
                    {APP_CONFIG.nameAr}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[#164335] text-[#dfbd8e] font-semibold">
                    {APP_CONFIG.nameEn}
                  </span>
                </div>
                <span className="text-xs text-[#c29b68] font-medium mt-0.5">
                  {APP_CONFIG.subTagline}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold font-display text-[#f7f4ed] leading-[1.25] tracking-tight mb-6">
              {APP_CONFIG.tagline}
            </h1>

            {/* Short Clear Description */}
            <p className="text-base sm:text-lg text-[#c9d5cf] leading-relaxed max-w-2xl mb-8 font-normal">
              {APP_CONFIG.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4">
              {/* Primary CTA: Direct APK Download */}
              <a
                href={APK_DOWNLOAD_URL}
                download={APP_CONFIG.apkFileName}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#c29b68] hover:bg-[#d4ad78] text-[#081d17] font-bold text-base shadow-lg shadow-[#c29b68]/20 transition-all hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c29b68] focus:ring-offset-2 focus:ring-offset-[#081d17]"
                id="hero-primary-download-btn"
              >
                <Download className="w-5 h-5 text-[#081d17] stroke-[2.2]" />
                <span>تحميل التطبيق مجاناً</span>
              </a>

              {/* Secondary CTA: Explore Features */}
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e2b22] hover:bg-[#143c2f] border border-[#1c4e3f] text-[#f7f4ed] font-medium text-base transition-colors"
              >
                <span>اكتشف المميزات</span>
                <ArrowDown className="w-4 h-4 text-[#c29b68]" />
              </button>
            </div>

            {/* Quick QR & Technical Note Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-2">
              {/* Scannable Download QR Code (Enlarged by ~18% for effortless scanning) */}
              <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#0a221a]/85 border border-[#1a4b3d]/80 shadow-sm backdrop-blur-sm hover:border-[#c29b68]/40 transition-colors">
                <div className="bg-white p-1.5 rounded-lg shadow-sm shrink-0 ring-1 ring-black/5">
                  {qrCodeUrl ? (
                    <a
                      href={APK_DOWNLOAD_URL}
                      download={APP_CONFIG.apkFileName}
                      title="تحميل تطبيق AlMuslimDZ"
                      className="block focus:outline-none"
                    >
                      <img
                        src={qrCodeUrl}
                        alt="رمز QR لتحميل تطبيق AlMuslimDZ"
                        className="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] object-contain block"
                        width={66}
                        height={66}
                      />
                    </a>
                  ) : (
                    <div className="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] bg-gray-100 animate-pulse rounded" />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#f7f4ed]">
                  امسح لتحميل التطبيق
                </span>
              </div>

              {/* Technical Subtitle Note */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#88a397]">
                <Smartphone className="w-4 h-4 text-[#c29b68]" />
                <span className="font-semibold text-[#c9d5cf]">Android</span>
                <span>•</span>
                <span>ملف APK مباشر</span>
                <span>•</span>
                <span className="text-[#dfbd8e]">مجاني بالكامل</span>
                {!isAndroid && (
                  <span className="hidden md:inline mr-2 text-xs px-2 py-0.5 rounded bg-[#0e2b22] border border-[#194336] text-[#88a397]">
                    (مخصص لأجهزة Android)
                  </span>
                )}
              </div>
            </div>

            {/* Reassurance pills (No login required, offline core, privacy safe) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-[#194336]/80 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c29b68] shrink-0" />
                <span className="text-xs text-[#c9d5cf]">بدون إنشاء حساب</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c29b68] shrink-0" />
                <span className="text-xs text-[#c9d5cf]">واجهة خفيفة وسريعة</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#c29b68] shrink-0" />
                <span className="text-xs text-[#c9d5cf]">متوافق مع إصدارات Android</span>
              </div>
            </div>
          </div>

          {/* Right column for RTL: Android Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Soft decorative halo behind phone */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#154637]/30 to-transparent rounded-full blur-2xl -z-10" />

            <div className="w-full max-w-[280px] sm:max-w-[320px]">
              <PhoneMockup
                src="/screenshots/home.JPEG"
                alt="لقطة شاشة الشاشة الرئيسية لتطبيق AlMuslimDZ"
                priority={true}
                onExpand={() => onOpenScreenshot && onOpenScreenshot('home')}
              />
              <p className="text-center text-xs text-[#88a397] mt-3">
                الواجهة الرئيسية للتطبيق • اضغط للتكبير
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
