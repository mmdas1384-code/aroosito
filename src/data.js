const categories = [
  { id: 'venue', title: 'تالار و باغ تالار', icon: '🏰', count: '۱۲۴ تالار' },
  { id: 'atelier', title: 'آتلیه و عکاسی', icon: '📸', count: '۸۵ آتلیه' },
  { id: 'beauty', title: 'سالن زیبایی و آرایش', icon: '💄', count: '۹۶ سالن' },
  { id: 'catering', title: 'تشریفات و خدمات مجالس', icon: '🍽️', count: '۶۴ تشریفات' },
  { id: 'dress', title: 'مزون و لباس عروس', icon: '👗', count: '۵۲ مزون' },
  { id: 'flowers', title: 'گل‌آرایی و ماشین عروس', icon: '💐', count: '۴۳ فروشگاه' },
  { id: 'music', title: 'موسیقی و دی‌جی', icon: '🎵', count: '۳۸ گروه' },
  { id: 'cake', title: 'کیک و شیرینی عروسی', icon: '🎂', count: '۲۹ قنادی' }
];

const initialVendors = [
  {
    id: 1,
    name: 'باغ تالار تشریفاتی رویال',
    category: 'venue',
    city: 'تهران',
    location: 'گرمدره',
    rating: 4.9,
    reviewsCount: 128,
    priceRange: 'پریمیوم (نفری ۱٫۵ تا ۲٫۵ میلیون)',
    capacity: '۲۰۰ تا ۸۰۰ نفر',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    description: 'یکی از مجلل‌ترین باغ تالارهای گرمدره با فضای سبز بی‌نظیر، برکه اختصاصی و سالن‌های بدون ستون فوق‌العاده شیک.',
    phone: '۰۲۱-۸۸۸۸۹۹۹۹',
    address: 'تهران، کیلومتر ۱۹ جاده مخصوص، گرمدره'
  },
  {
    id: 2,
    name: 'آتلیه تخصصی عکاسی و فیلمبرداری پریناز',
    category: 'atelier',
    city: 'تهران',
    location: 'جردن',
    rating: 4.8,
    reviewsCount: 94,
    priceRange: 'اقتصادی تا عالی',
    capacity: 'سناریوی اختصاصی عروس و داماد',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    description: 'مجهز به عمارت اختصاصی عکاسی، کادر مجرب خانم، ساخت تیزر فرمالیته در شمال و کیش.',
    phone: '۰۲۱-۲۲۰۱۰۰۰۰',
    address: 'تهران، جردن، خیابان گلشهر'
  },
  {
    id: 3,
    name: 'سالن زیبایی و آرایش عروس المیرا',
    category: 'beauty',
    city: 'تهران',
    location: 'الهیه',
    rating: 4.9,
    reviewsCount: 156,
    priceRange: 'VIP',
    capacity: 'پذیرش روزانه حداکثر ۳ عروس',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'ارائه‌دهنده گریم و میکاپ عروس بر اساس جدیدترین سبک‌های اروپایی و کلاسیک با متریال برند.',
    phone: '۰۲۱-۲۶۲۰۰۰۰۰',
    address: 'تهران، الهیه، فرشته'
  },
  {
    id: 4,
    name: 'تشریفات و خدمات مجالس بهرامی',
    category: 'catering',
    city: 'کرج',
    location: 'مهرشهر',
    rating: 4.7,
    reviewsCount: 62,
    priceRange: 'متوسط تا بالا',
    capacity: 'تا ۱۰۰۰ نفر',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description: 'طراحی دکوراسیون سفارشی، فنگ‌شویی دیزاین، منوهای متنوع ایرانی و بین‌المللی همراه با تست زنده شام.',
    phone: '۰۲۶-۳۴۴۰۰۰۰۰',
    address: 'کرج، مهرشهر، بلوار شهرداری'
  },
  {
    id: 5,
    name: 'مزون تخصصی لباس عروس و شامپاین',
    category: 'dress',
    city: 'تهران',
    location: 'سعادت‌آباد',
    rating: 4.9,
    reviewsCount: 88,
    priceRange: 'متوسط تا لوکس',
    capacity: 'دوخت سفارشی و اجاره',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    description: 'ککسیون جدیدترین لباس‌های عروس وارداتی و دوخت اختصاصی بر اساس سایز و آناتومی شما.',
    phone: '۰۲۱-۲۲۳۷۰۰۰۰',
    address: 'تهران، سعادت‌آباد، میدان کاج'
  },
  {
    id: 6,
    name: 'استودیو گل‌آرایی و دیزاین ارکیده',
    category: 'flowers',
    city: 'اصفهان',
    location: 'مرداویج',
    rating: 4.8,
    reviewsCount: 45,
    priceRange: 'مناسب',
    capacity: 'انواع خودروهای لوکس و کلاسیک',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    description: 'طراحی دسته‌گل عروس با گل‌های خاص هلندی و تزئین ماشین عروس با سبک‌های مدرن و مینیمال.',
    phone: '۰۳۱-۳۶۷۰۰۰۰۰',
    address: 'اصفهان، مرداویج، خیابان استقلال'
  }
];

const initialChecklist = [
  { id: 1, timeframe: '12_months', title: 'تعیین تاریخ تقریبی عروسی و بودجه کل', completed: true },
  { id: 2, timeframe: '12_months', title: 'بررسی و انتخاب سبک عروسی (مدرن، سنتی، روستیک)', completed: true },
  { id: 3, timeframe: '9_months', title: 'رزرو تالار یا باغ تالار عروسی', completed: false },
  { id: 4, timeframe: '9_months', title: 'قرارداد با آتلیه عکاسی و فیلمبرداری', completed: false },
  { id: 5, timeframe: '6_months', title: 'انتخاب و رزرو آرایشگاه عروس و داماد', completed: false },
  { id: 6, timeframe: '6_months', title: 'سفارش یا دوخت لباس عروس و کت‌وشلوار داماد', completed: false },
  { id: 7, timeframe: '3_months', title: 'تهیه و ارسال کارت‌های دعوت مهمانان', completed: false },
  { id: 8, timeframe: '3_months', title: 'هماهنگی و خرید حلقه‌های ازدواج', completed: false },
  { id: 9, timeframe: '1_month', title: 'تست نهایی منوی شام و خدمات تشریفات', completed: false },
  { id: 10, timeframe: '1_month', title: 'تست نهایی لباس عروس و کفش', completed: false },
  { id: 11, timeframe: '1_week', title: 'هماهنگی نهایی با دی‌جی و گروه موسیقی', completed: false },
  { id: 12, timeframe: '1_week', title: 'تایید نهایی تعداد مهمانان با تالار', completed: false }
];

const initialBudgetItems = [
  { id: 1, title: 'تالار و ورودی باغ', category: 'venue', estimatedPercent: 40, estimatedAmount: 200000000, actualAmount: 190000000 },
  { id: 2, title: 'آتلیه و عکاسی', category: 'atelier', estimatedPercent: 20, estimatedAmount: 100000000, actualAmount: 105000000 },
  { id: 3, title: 'آرایشگاه عروس و داماد', category: 'beauty', estimatedPercent: 12, estimatedAmount: 60000000, actualAmount: 55000000 },
  { id: 4, title: 'لباس عروس و کت‌وشلوار', category: 'dress', estimatedPercent: 15, estimatedAmount: 75000000, actualAmount: 80000000 },
  { id: 5, title: 'گل‌آرایی و ماشین عروس', category: 'flowers', estimatedPercent: 8, estimatedAmount: 40000000, actualAmount: 38000000 },
  { id: 6, title: 'متفرقه و ذخیره مبادا', category: 'other', estimatedPercent: 5, estimatedAmount: 25000000, actualAmount: 20000000 }
];

const initialGuests = [
  { id: 1, name: 'علی رضایی', group: 'family_bride', plusOnes: 3, status: 'confirmed' },
  { id: 2, name: 'محمد احمدی', group: 'family_groom', plusOnes: 2, status: 'confirmed' },
  { id: 3, name: 'سارا کاظمی', group: 'friends', plusOnes: 1, status: 'pending' },
  { id: 4, name: 'امیرحسین مرادی', group: 'colleagues', plusOnes: 1, status: 'declined' }
];

const articles = [
  {
    id: 1,
    title: '۱۰ نکته طلایی در انتخاب تالار عروسی که هیچکس به شما نمی‌گوید!',
    category: 'راهنمای تالار',
    readTime: '۵ دقیقه',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    summary: 'چگونه بهترین باغ تالار را متناسب با بودجه و تعداد مهمانان انتخاب کنیم و چه مواردی را در قرارداد ذکر کنیم؟'
  },
  {
    id: 2,
    title: 'چگونه بودجه عروسی را هوشمندانه مدیریت کنیم؟',
    category: 'مدیریت مالی',
    readTime: '۷ دقیقه',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    summary: 'راهکارهای کاهش هزینه‌های غیرضروری عروسی بدون افت کیفیت مراسم و ابزارهای حسابگر آنلاین.'
  },
  {
    id: 3,
    title: 'چک‌لیست کامل زیبایی عروسی؛ از ۳ ماه قبل تا روز مراسم',
    category: 'زیبایی و گریم',
    readTime: '۴ دقیقه',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    summary: 'برنامه‌ریزی مراقبت‌های پوست، مو و تست‌های آرایش قبل از روز اصلی عروسی برای داشتن بهترین ظاهر.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { categories, initialVendors, initialChecklist, initialBudgetItems, initialGuests, articles };
}
