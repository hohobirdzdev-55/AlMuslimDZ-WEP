import React from 'react';
import {
  APK_DOWNLOAD_URL,
  PRIVACY_POLICY_URL,
  DEVELOPER_INFO,
  APP_CONFIG,
} from '../config';
import {
  Download,
  ShieldCheck,
  Mail,
  ArrowUp,
  ExternalLink,
  Globe,
  MessageCircle,
  Code2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040e0b] border-t border-[#13382d] pt-14 pb-10 text-[#c9d5cf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#12362b]">
          {/* Column 1: Brand Info & Identity (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-right">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-11 h-11 rounded-xl overflow-hidden ring-1 ring-[#c29b68]/40 bg-[#0a221a] flex items-center justify-center p-1 shadow-md shrink-0">
                <img
                  src="/el muslim dz.png"
                  alt="شعار AlMuslimDZ الرسمي"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#f7f4ed] leading-tight">
                  {APP_CONFIG.nameEn} – {APP_CONFIG.nameAr}
                </h3>
                <p className="text-xs text-[#c29b68] font-medium mt-0.5">
                  {APP_CONFIG.subTagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#8ba49a] leading-relaxed max-w-md mb-5">
              تطبيق إسلامي شامل يجمع أهم الأدوات والخدمات الإسلامية في مكان واحد.
            </p>

            <a
              href={APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b251c] border border-[#1d4c3d] hover:border-[#c29b68]/70 text-[#f7f4ed] hover:text-[#dfbd8e] text-xs font-semibold shadow-sm transition-all hover:bg-[#0e2f24]"
            >
              <Download className="w-3.5 h-3.5 text-[#c29b68]" />
              <span>تحميل التطبيق المباشر (APK)</span>
            </a>
          </div>

          {/* Column 2: Legal & Important Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col text-right">
            <h4 className="text-sm font-bold text-[#f7f4ed] mb-4 pb-2 border-b border-[#12362b] inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c29b68]" />
              <span>روابط مهمة</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PRIVACY_POLICY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-[#c29b68] group-hover:scale-110 transition-transform" />
                  <span>سياسة الخصوصية</span>
                  <ExternalLink className="w-3 h-3 text-[#6e897e] group-hover:text-[#dfbd8e] opacity-75" />
                </a>
              </li>

              <li>
                <a
                  href={DEVELOPER_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors group"
                >
                  <Globe className="w-4 h-4 text-[#c29b68] group-hover:scale-110 transition-transform" />
                  <span>{DEVELOPER_INFO.portfolioLabel}</span>
                  <ExternalLink className="w-3 h-3 text-[#6e897e] group-hover:text-[#dfbd8e] opacity-75" />
                </a>
              </li>

              <li>
                <a
                  href={DEVELOPER_INFO.emailUrl}
                  className="inline-flex items-center gap-2 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#c29b68] group-hover:scale-110 transition-transform" />
                  <span>التواصل مع المطور</span>
                </a>
              </li>

              <li>
                <a
                  href={APK_DOWNLOAD_URL}
                  download={APP_CONFIG.apkFileName}
                  className="inline-flex items-center gap-2 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors group"
                >
                  <Download className="w-4 h-4 text-[#c29b68] group-hover:scale-110 transition-transform" />
                  <span>تحميل نسخة أندرويد</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Developer Info & Official Direct Channels (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col text-right">
            <h4 className="text-sm font-bold text-[#f7f4ed] mb-4 pb-2 border-b border-[#12362b] inline-flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#c29b68]" />
              <span>عن المطور</span>
            </h4>

            <div className="p-3.5 rounded-xl bg-[#081d17]/80 border border-[#143d30] mb-3">
              <p className="text-xs text-[#8ba49a] mb-1">تطوير وتصميم</p>
              <a
                href={DEVELOPER_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#dfbd8e] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>{DEVELOPER_INFO.name}</span>
                <ExternalLink className="w-3 h-3 text-[#c29b68]" />
              </a>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              {/* Email */}
              <li>
                <a
                  href={DEVELOPER_INFO.emailUrl}
                  className="inline-flex items-center gap-2.5 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors"
                  aria-label="مراسلة المطور عبر البريد الإلكتروني"
                >
                  <span className="p-1 rounded bg-[#0b251c] text-[#c29b68] border border-[#194336]">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="dir-ltr text-right font-mono text-xs sm:text-sm">
                    {DEVELOPER_INFO.email}
                  </span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={DEVELOPER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors"
                  aria-label="تواصل عبر واتساب"
                >
                  <span className="p-1 rounded bg-[#0b251c] text-[#25D366] border border-[#194336]">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  <span>واتساب: {DEVELOPER_INFO.whatsappDisplay}</span>
                </a>
              </li>

              {/* Portfolio */}
              <li>
                <a
                  href={DEVELOPER_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#b2c4bc] hover:text-[#dfbd8e] transition-colors"
                  aria-label="زيارة الموقع الشخصي للمطور"
                >
                  <span className="p-1 rounded bg-[#0b251c] text-[#c29b68] border border-[#194336]">
                    <Globe className="w-3.5 h-3.5" />
                  </span>
                  <span>زيارة موقع المطور</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal, Copyright, and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e897e] text-center sm:text-right">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© {APP_CONFIG.year} {APP_CONFIG.nameEn} — جميع الحقوق محفوظة.</p>
            <span className="hidden sm:inline text-[#1d4c3d]">•</span>
            <p className="text-[#8ba49a]">
              تطوير{' '}
              <a
                href={DEVELOPER_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c29b68] hover:text-[#dfbd8e] font-medium transition-colors underline-offset-2 hover:underline"
              >
                {DEVELOPER_INFO.name}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8ba49a] hover:text-[#dfbd8e] transition-colors underline-offset-2 hover:underline"
            >
              سياسة الخصوصية
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#0b251c] border border-[#174335] hover:border-[#c29b68] text-[#c9d5cf] hover:text-[#dfbd8e] transition-colors"
              aria-label="العودة إلى أعلى الصفحة"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
