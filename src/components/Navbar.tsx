import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Shield, ExternalLink } from 'lucide-react';
import { APK_DOWNLOAD_URL, PRIVACY_POLICY_URL, APP_CONFIG } from '../config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المميزات والخدمات', href: '#services' },
    { label: 'الأقسام الأساسية', href: '#features-deep' },
    { label: 'لقطات الشاشة', href: '#screenshots' },
    { label: 'لماذا AlMuslimDZ؟', href: '#why-us' },
    { label: 'التجربة اليومية', href: '#daily-journey' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081d17]/95 backdrop-blur-md border-b border-[#194336] shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-[#c29b68]/40 shadow-md bg-[#0a221a] flex items-center justify-center p-0.5 transition-transform group-hover:scale-105 shrink-0">
              <img
                src="/el muslim dz.png"
                alt="شعار AlMuslimDZ الرسمي"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-display text-[#f7f4ed] tracking-tight group-hover:text-[#dfbd8e] transition-colors leading-none">
                {APP_CONFIG.nameEn}
              </span>
              <span className="text-xs text-[#c29b68] font-medium mt-1 leading-none">
                {APP_CONFIG.nameAr}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-1.5 rounded-lg text-sm text-[#c9d5cf] hover:text-[#f7f4ed] hover:bg-[#0e2b22] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c29b68]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#8ba49a] hover:text-[#dfbd8e] hover:bg-[#0e2b22] transition-colors"
              title="سياسة الخصوصية الرسمية"
            >
              <Shield className="w-3.5 h-3.5 text-[#c29b68]" />
              <span>سياسة الخصوصية</span>
            </a>

            <a
              href={APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c29b68] hover:bg-[#d4ad78] text-[#081d17] font-semibold text-sm shadow-md shadow-[#c29b68]/15 transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c29b68] focus:ring-offset-2 focus:ring-offset-[#081d17]"
            >
              <Download className="w-4 h-4 text-[#081d17]" />
              <span>تحميل APK مجاناً</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c29b68] text-[#081d17] font-bold text-xs shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0e2b22] border border-[#194336] text-[#c9d5cf] hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081d17]/98 border-b border-[#194336] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#c9d5cf] hover:text-white hover:bg-[#0e2b22] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#dfbd8e] hover:text-white hover:bg-[#0e2b22] transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c29b68]" />
                سياسة الخصوصية
              </span>
              <ExternalLink className="w-4 h-4 text-[#88a397]" />
            </a>

            <div className="pt-3 border-t border-[#194336]">
              <a
                href={APK_DOWNLOAD_URL}
                download={APP_CONFIG.apkFileName}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c29b68] text-[#081d17] font-bold text-sm shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>تحميل التطبيق مجاناً (APK)</span>
              </a>
              <p className="text-center text-xs text-[#88a397] mt-2">
                Android • ملف APK مباشر • مجاني بالكامل
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
