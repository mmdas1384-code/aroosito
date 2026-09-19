"use client";

import React from "react";
import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Send, ShieldCheck, Globe, Share2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-accent mt-auto font-vazir text-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md">
                <Heart className="w-6 h-6 fill-white stroke-primary" />
              </div>
              <span className="text-2xl font-bold text-primary">عروسی تو</span>
            </div>
            <p className="text-sm text-graphite/80 leading-relaxed">
              جامع‌ترین پلتفرم هوشمند برنامه‌ریزی جشن عروسی و استعلام قیمت آنلاین خدمات مجالس در سراسر ایران.
            </p>
            <div className="flex items-center gap-3 pt-2 text-secondary">
              <a href="#" className="w-9 h-9 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-primary border-r-4 border-primary pr-2">
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm text-graphite/80">
              <li>
                <Link href="/directory" className="hover:text-primary transition-colors">
                  دسته بندی کسب و کارها
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-primary transition-colors">
                  ابزارهای آنلاین و چک لیست عروسی
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="hover:text-primary transition-colors">
                  تست‌های روانشناسی و استایل‌شناسی
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-primary transition-colors">
                  استعلام قیمت آنلاین
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business & Vendors */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-primary border-r-4 border-primary pr-2">
              تامین‌کنندگان و کسب‌ و کارها
            </h3>
            <ul className="space-y-2 text-sm text-graphite/80">
              <li>
                <Link href="/vendor-dashboard" className="hover:text-primary transition-colors">
                  ثبت نام و پنل اختصاصی کسب و کار
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>دریافت نشان تاییدیه رسمی عروسی تو</span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  قوانین و مقررات پلتفرم
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  راهنمای جذب مشتری و تبلیغات
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-primary border-r-4 border-primary pr-2">
              ارتباط با پشتیبانی
            </h3>
            <div className="space-y-2.5 text-sm text-graphite/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span>پشتیبانی: ۰۲۱-۹۱۰۰۲۲۳۳</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span>ایمیل: info@aroosito.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج صبا</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-accent flex flex-col md:flex-row items-center justify-between text-xs text-secondary gap-4">
          <p>© تمامی حقوق مادی و معنوی این وب‌سایت متعلق به پلتفرم عروسی تو می‌باشد.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">شرایط استفاده</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">سوالات متداول</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
