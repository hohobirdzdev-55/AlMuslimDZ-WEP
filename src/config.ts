/**
 * AlMuslimDZ – Central Configuration File
 * 
 * URLs, contact info, and configuration parameters.
 */

// Official Privacy Policy live URL
export const PRIVACY_POLICY_URL = 'https://al-muslim-dz-privacy.vercel.app/';

// Direct APK download URL (hosted on archive.org)
export const APK_DOWNLOAD_URL =
  'https://archive.org/download/al-muslim-dz/AlMuslim%20dz%20.apk';

/**
 * Resolves the full absolute download URL for the APK.
 * When scanned via a QR Code on a phone camera, this ensures an absolute URL is accessed.
 */
export const getAbsoluteDownloadUrl = (): string => {
  if (APK_DOWNLOAD_URL.startsWith('http://') || APK_DOWNLOAD_URL.startsWith('https://')) {
    return APK_DOWNLOAD_URL;
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${APK_DOWNLOAD_URL.startsWith('/') ? '' : '/'}${APK_DOWNLOAD_URL}`;
  }
  return APK_DOWNLOAD_URL;
};

// Developer contact info & social links
export const DEVELOPER_INFO = {
  name: 'HOHOBIRDZ DEV',
  creditText: 'تطوير وتصميم HOHOBIRDZ DEV',
  email: 'hohobirdzdev@gmail.com',
  emailUrl: 'mailto:hohobirdzdev@gmail.com',
  whatsappDisplay: '+213 782 049 027',
  whatsappUrl: 'https://wa.me/213782049027',
  portfolioUrl: 'https://hoho-bir-dz-developer-portfolio.ai.studio/',
  portfolioLabel: 'الموقع الرسمي للمطور',
};

export const DEVELOPER_EMAIL = DEVELOPER_INFO.email;
export const DEVELOPER_WHATSAPP = DEVELOPER_INFO.whatsappUrl;
export const DEVELOPER_PORTFOLIO_URL = DEVELOPER_INFO.portfolioUrl;

// Application identity information
export const APP_CONFIG = {
  nameEn: 'AlMuslimDZ',
  nameAr: 'المسلم DZ',
  tagline: 'كل ما يحتاجه المسلم في تطبيق واحد',
  subTagline: 'رفيقك المسلم في حياتك اليومية',
  description: 'تطبيق إسلامي شامل يجمع أهم الأدوات والخدمات الإسلامية في مكان واحد.',
  developer: 'HOHOBIRDZ DEV',
  year: 2026,
  platform: 'Android',
  format: 'APK',
  isFree: true,
  apkFileName: 'AlMuslimDZ.apk',
};
