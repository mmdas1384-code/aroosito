import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Store,
  CheckSquare,
  Sparkles,
  Calculator,
  Search,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  Star,
  MapPin,
  ShieldCheck,
  Users,
  Building2,
  Camera,
  Shirt,
  Scissors
} from "lucide-react";

export default function Home() {
  const categories = [
    { title: "تالار و باغ تالارها", icon: Building2, count: "+۴۵۰ مورد", desc: "مجلل‌ترین سالن‌ها و باغ‌های پذیرایی" },
    { title: "آتلیه عکاسی و فیلمبرداری", icon: Camera, count: "+۳۲۰ مورد", desc: "عکاسی فرمالیته، روز مراسم و ساخت تیزر" },
    { title: "مزون عروس و کت‌وشلوار", icon: Shirt, count: "+۲۸۰ مورد", desc: "جدیدترین مدل‌های لباس عروس و داماد" },
    { title: "سالن‌های زیبایی و آرایشگاه", icon: Scissors, count: "+۵۱۰ مورد", desc: "برترین میکاپ آرتیست‌ها و شینون‌کاران" },
  ];

  const features = [
    {
      icon: Store,
      title: "دسته بندی جامع کسب و کارها",
      desc: "دسترسی مستقیم به بیش از هزاران خدمت‌دهنده معتبر با نمونه کار، قیمت و نظرات واقعی کاربران",
      href: "/vendors"
    },
    {
      icon: CheckSquare,
      title: "برنامه ریزی جشن ها و چک لیست ها",
      desc: "چک‌لیست هوشمند کارهای عروسی بر اساس زمان باقی‌مانده و ابزار مدیریت بودجه و مهمانان",
      href: "/planning-tools"
    },
    {
      icon: Sparkles,
      title: "تست های روانشناسی و استایل شناسی",
      desc: "کوئیزهای اختصاصی برای کشف استایل عروسی مورد علاقه شما و روانشناسی زوجین",
      href: "/quizzes"
    },
    {
      icon: Calculator,
      title: "استعلام قیمت آنلاین",
      desc: "دریافت سریع و شفاف قیمت‌های دقیق خدمات عروسی بدون نیاز به تماس‌های متوالی",
      href: "/price-inquiry"
    },
  ];

  const popularVendors = [
    {
      name: "باغ تالار رویال رز",
      category: "تالار و باغ عروسی",
      location: "گرمدشت، تهران",
      rating: "۴.۹",
      price: "از ۱۵,۰۰۰,۰ structure",
      badge: "تایید شده"
    },
    {
      name: "استودیو عکاسی پرنیان",
      category: "عکاسی و فیلمبرداری",
      location: "جردن، تهران",
      rating: "۴.۸",
      price: "استعلام قیمت آنلاین",
      badge: "محبوب"
    },
    {
      name: "سالن زیبایی لاریسا",
      category: "میکاپ و زیبایی عروس",
      location: "سعادت‌آباد، تهران",
      rating: "۵.۰",
      price: "پکیج‌های متنوع",
      badge: "ویژه"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-accent-light/40 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/30 text-primary text-xs font-bold border border-accent">
                <HeartHandshake className="w-4 h-4" />
                <span>برنامه‌ریزی مدرن و بی‌استرس جشن عروسی</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-text-main tracking-tight leading-tight">
                رویایی‌ترین روز زندگی‌تان را با{" "}
                <span className="text-primary border-b-4 border-accent pb-1">«عروسی تو»</span>{" "}
                برنامه‌ریزی کنید
              </h1>

              <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
                از جستجوی بهترین تالارها و آتلیه‌ها تا استعلام قیمت آنلاین، مدیریت بودجه و چک‌لیست هوشمند کارهای عروسی؛ همه در یک پلتفرم.
              </p>

              {/* Search Bar */}
              <div className="pt-4 max-w-2xl mx-auto">
                <div className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-lg border border-accent/80 flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-2.5 flex-1 w-full px-3 py-2">
                    <Search className="w-5 h-5 text-secondary" />
                    <input
                      type="text"
                      placeholder="چه خدمتی یا شهری مد نظرتان است؟ (مثلا: باغ تالار تهران)"
                      className="w-full text-sm bg-transparent focus:outline-none text-text-main placeholder:text-secondary/70"
                    />
                  </div>
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 shrink-0">
                    <span>جستجو</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick stats / Highlights */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-right sm:text-center">
                <div className="p-3 rounded-xl bg-white/60 border border-accent/40">
                  <div className="text-xl font-bold text-primary">+۱,۲۰۰</div>
                  <div className="text-xs text-secondary mt-0.5">کسب‌وکار تاییدشده</div>
                </div>
                <div className="p-3 rounded-xl bg-white/60 border border-accent/40">
                  <div className="text-xl font-bold text-primary">+۱۵,۰۰۰</div>
                  <div className="text-xs text-secondary mt-0.5">زوج راضی</div>
                </div>
                <div className="p-3 rounded-xl bg-white/60 border border-accent/40">
                  <div className="text-xl font-bold text-primary">۱۰۰٪</div>
                  <div className="text-xs text-secondary mt-0.5">شفافیت قیمت</div>
                </div>
                <div className="p-3 rounded-xl bg-white/60 border border-accent/40">
                  <div className="text-xl font-bold text-primary">۲۴/۷</div>
                  <div className="text-xs text-secondary mt-0.5">پشتیبانی و چک‌لیست</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white border-y border-accent/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-secondary tracking-wider uppercase">دسته‌بندی خدمات</span>
                <h2 className="text-2xl font-bold text-text-main mt-1">دسته بندی کسب و کارها</h2>
              </div>
              <Link
                href="/vendors"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                <span>مشاهده همه دسته بندی‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <Link
                    key={idx}
                    href="/vendors"
                    className="p-6 rounded-2xl bg-background border border-accent/60 hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-light text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-secondary bg-accent/30 px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                    <h3 className="text-lg font-bold text-text-main mt-3 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-secondary mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Platform Features */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">ابزارهای منحصر به فرد</span>
              <h2 className="text-3xl font-bold text-text-main mt-1">
                هر آنچه برای برگزاری یک عروسی بی‌نقص نیاز دارید
              </h2>
              <p className="text-sm text-secondary mt-2">
                عروسی تو همه ابزارهای برنامه‌ریزی و تصمیم‌گیری را در اختیار شما می‌گذارد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-accent/60 shadow-sm flex flex-col justify-between hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-secondary leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-accent/30">
                      <Link
                        href={feat.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2 transition-all"
                      >
                        <span>استفاده از ابزار</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Vendors Banner / Price Inquiry Feature */}
        <section className="py-16 bg-accent-light/50 border-y border-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">
                  <Calculator className="w-4 h-4" />
                  <span>استعلام قیمت آنلاین و شفاف</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-main leading-snug">
                  دیگر نیازی به تماس‌های متعدد برای پرسیدن قیمت نیست!
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  با سامانه استعلام قیمت آنلاین «عروسی تو»، می‌توانید مشخصات مراسم خود مانند تعداد مهمانان، تاریخ، نوع خدمات مد نظر را مشخص کرده و قیمت دقیق را به صورت مستقیم از برترین مجموعه دریافت کنید.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-text-main font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>مقایسه لحظه‌ای پکیج‌های منو و امکانات</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-main font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>تخفیف‌های اختصاصی کاربران عروسی تو</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-main font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>بدون هیچ‌گونه هزینه اضافه یا کمیسیون</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/price-inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover shadow-md shadow-primary/20 transition-all"
                  >
                    <span>شروع استعلام قیمت آنلاین</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Vendors List Preview Cards */}
              <div className="lg:col-span-5 space-y-4">
                {popularVendors.map((vendor, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-accent/70 shadow-sm flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-accent-light text-primary font-semibold px-2 py-0.5 rounded-md">
                          {vendor.badge}
                        </span>
                        <span className="text-xs text-secondary">{vendor.category}</span>
                      </div>
                      <h4 className="text-sm font-bold text-text-main">{vendor.name}</h4>
                      <div className="flex items-center gap-3 text-xs text-secondary pt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {vendor.location}
                        </span>
                        <span className="flex items-center gap-1 text-amber-600 font-medium">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {vendor.rating}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/vendors"
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-primary bg-accent-light hover:bg-primary hover:text-white transition-colors shrink-0"
                    >
                      مشاهده
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Quizzes & CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="max-w-2xl relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>تست استایل‌شناسی عروسی</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                  نمی‌دانید چه تِم و استایلی برای عروسی شما مناسب‌تر است؟
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  با پاسخ به چند سوال ساده در ۵ دقیقه، استایل ایده‌آل مراسم، پالت رنگی پیشنهادی و لیست مناسب‌ترین کسب‌وکارها را تحویل بگیرید.
                </p>
                <div className="pt-2">
                  <Link
                    href="/quizzes"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:bg-accent-light transition-colors shadow-md"
                  >
                    <span>شروع تست رایگان استایل</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
