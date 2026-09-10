import { ServiceItem } from '../types';

/**
 * Verified In-App Services for AlMuslimDZ
 * Strictly based on actual application features.
 */
export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'quran-kareem',
    title: 'القرآن الكريم',
    description: 'فهرس كامل لسور القرآن الكريم مع معلومات السورة وعدد آياتها وموضع نزولها.',
    iconName: 'BookOpen',
    highlight: true,
  },
  {
    id: 'quran-reading',
    title: 'قراءة القرآن',
    description: 'واجهة قراءة مريحة للعين بخط واضح، ومتابعة آخر موضع للقراءة بكل سهولة.',
    iconName: 'BookMarked',
    highlight: true,
  },
  {
    id: 'azkar',
    title: 'الأذكار',
    description: 'مجموعة شاملة تشمل أذكار الصباح والمساء والاستيقاظ والنوم وأذكار ما بعد الصلاة.',
    iconName: 'HeartHandshake',
    highlight: true,
  },
  {
    id: 'adkiya',
    title: 'الأدعية',
    description: 'أدعية قرآنية ونبوية مأثورة مرتبة حسب المناسبات والحاجات اليومية للمسلم.',
    iconName: 'Scroll',
  },
  {
    id: 'prayer-times',
    title: 'مواقيت الصلاة',
    description: 'حساب دقيق لمواقيت الصلاة الخمس يومياً حسب موقعك الجغرافي الفعلي.',
    iconName: 'Clock',
    highlight: true,
  },
  {
    id: 'adhan-alerts',
    title: 'الأذان والتنبيهات',
    description: 'إمكانية تفعيل إشعارات دخول وقت الصلاة والأذان وتخصيص التنبيه لكل فريضة.',
    iconName: 'Bell',
  },
  {
    id: 'qibla-direction',
    title: 'اتجاه القبلة',
    description: 'بوصلة بصرية توجهك بدقة نحو الكعبة المشرفة اعتماداً على مستشعرات الهاتف.',
    iconName: 'Compass',
    highlight: true,
  },
  {
    id: 'tasbeeh',
    title: 'التسبيح الإلكتروني',
    description: 'مسبحة رقمية بسيطة وسهلة لمتابعة وردك اليومي من الأذكار والتسبيحات.',
    iconName: 'Sparkles',
    highlight: true,
  },
  {
    id: 'zakat-calculator',
    title: 'حاسبة الزكاة',
    description: 'أداة ميسرة لحساب زكاة المال وعروض التجارة والذهب بناءً على قيمة النصاب.',
    iconName: 'Calculator',
    highlight: true,
  },
  {
    id: 'ahadith',
    title: 'الأحاديث النبوية',
    description: 'مختارات من الأحاديث الصحيحة النافعة للتربية الإيمانية وبناء الوعي الإسلامي.',
    iconName: 'Quote',
  },
  {
    id: 'hijri-calendar',
    title: 'التقويم الهجري',
    description: 'عرض التاريخ الهجري وما يوافقه من التاريخ الميلادي لمتابعة الشهور والمناسبات.',
    iconName: 'CalendarDays',
  },
  {
    id: 'weather',
    title: 'الطقس',
    description: 'معرفة حالة الطقس ودرجات الحرارة لمدينتك لترتيب صلوات الجماعة وتنقلك اليومي.',
    iconName: 'CloudSun',
  },
  {
    id: 'prophet-prayer',
    title: 'وصف صلاة النبي ﷺ',
    description: 'شرح مبسط وواضح لصفة صلاة النبي ﷺ من التكبير إلى التسليم لضبط الأداء الصحيح.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'favorites',
    title: 'المفضلة',
    description: 'حفظ آياتك وأذكارك وأدعيتك الأكثر قراءة للرجوع إليها سريعاً في أي وقت.',
    iconName: 'Bookmark',
  },
  {
    id: 'prayer-settings',
    title: 'إعدادات وتنبيهات الصلاة',
    description: 'تعديل فارق التوقيت بالدقائق وتهيئة طرق الحساب والوضع الليلي بما يلائمك.',
    iconName: 'Sliders',
  },
];
