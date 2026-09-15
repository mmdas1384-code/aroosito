import React from "react";
import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Send,
  Globe,
  Share2,
  ChevronLeft
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-accent/60 pt-16 pb-8 text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-accent/40">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                <Heart className="w-5 h-5 fill-white/20 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-primary">
                  عروسی تو
                </span>
                <span className="text-[10px] text-secondary font-medium tracking-wider -mt-1">
                  AROOSI TO
                </span>
              </div>
            </Link>
            <p className="text-sm text-secondary leading-relaxed max-w-sm">
              «عروسی تو» دستیار هوشمند و مدرن برنامه‌ریزی جشن عروسی است. ما همراه شما هستیم تا خاطره‌انگیزترین روز زندگی‌تان را بدون استرس و با شفافیت کامل برنامه‌ریزی کنید.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="شبکه‌های اجتماعی"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#telegram"
                className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#website"
                className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="وب‌سایت"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-base font-bold text-text-main mb-4 border-r-2 border-primary pr-3">
              خدمات عروسی تو
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "دسته بندی کسب و کارها", href: "/vendors" },
                { name: "برنامه ریزی جشن ها و چک لیست ها", href: "/planning-tools" },
                { name: "تست های روانشناسی و استایل", href: "/quizzes" },
                { name: "استعلام قیمت آنلاین", href: "/price-inquiry" },
                { name: "مجله و مقالات عروسی", href: "/blog" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-secondary hover:text-primary flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-accent group-hover:text-primary transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-base font-bold text-text-main mb-4 border-r-2 border-primary pr-3">
              کسب‌وکارها
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "ثبت‌نام رایگان کسب‌وکار", href: "/vendor-signup" },
                { name: "پنل مدیریت تامین‌کنندگان", href: "/vendor-panel" },
                { name: "تعرفه‌ها و بسته های تبلیغاتی", href: "/pricing" },
                { name: "راهنمای ثبت خدمات", href: "/vendor-guide" },
                { name: "قوانین و مقررات همکاری", href: "/terms" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-secondary hover:text-primary flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-accent group-hover:text-primary transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold text-text-main mb-4 border-r-2 border-primary pr-3">
              ارتباط با ما
            </h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، نرسیده به میدان ونک، برج عروسی تو</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span dir="ltr">۰۲۱ - ۹۱۰۰ ۱۲۳۴</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@aroosito.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p className="text-center md:text-right">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به پلتفرم «عروسی تو» می‌باشد. © ۱۴۰۳
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
