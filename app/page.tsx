"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  Search,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Star,
  Sparkles,
  Building2,
  Camera,
  Shirt,
  Flower2,
  Music,
  Calculator,
  MessageSquareQuote,
  CalendarCheck,
  CheckSquare
} from "lucide-react";

export default function HomePage() {
  const { categories, vendors } = useApp();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2": return Building2;
      case "Camera": return Camera;
      case "Sparkles": return Sparkles;
      case "Shirt": return Shirt;
      case "Flower2": return Flower2;
      case "Music": return Music;
      default: return Building2;
    }
  };

  const featuredVendors = vendors.filter((v) => v.isVerified);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 via-bg-custom to-bg-custom py-16 md:py-24 border-b border-accent/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Right Column: Copy & Search */}
              <div className="space-y-6 text-right">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>پلتفرم تخصصی و هوشمند برنامه‌ریزی عروسی</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite leading-tight">
                  برنامه‌ریزی رویایی‌ترین شب زندگی با{" "}
                  <span className="text-primary underline decoration-accent decoration-wavy underline-offset-8">
                    عروسی تو
                  </span>
                </h1>

                <p className="text-base md:text-lg text-graphite/80 leading-relaxed max-w-xl">
                  بهترین باغ تالارها، آتلیه‌ها، سالن‌های زیبایی و خدمات مجالس را با تضمین قیمت، تاییدیه رسمی اعتبار و استعلام آنلاین رزرو کنید.
                </p>

                {/* Quick Search Widget */}
                <div className="bg-white p-3 rounded-2xl border border-accent shadow-lg flex flex-col sm:flex-row gap-2 max-w-2xl">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-bg-custom rounded-xl border border-accent/60">
                    <Search className="w-5 h-5 text-secondary shrink-0" />
                    <input
                      type="text"
                      placeholder="جستجوی نام کسب و کار یا حوزه خدمات..."
                      className="w-full bg-transparent border-none text-sm focus:outline-none text-graphite placeholder:text-secondary font-medium"
                    />
                  </div>
                  <Link
                    href="/directory"
                    className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>جستجو</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>

                {/* Quick Stats Banner */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-accent/60 text-right">
                  <div>
                    <p className="text-2xl font-bold text-primary">۱,۲۰۰+</p>
                    <p className="text-xs text-secondary font-medium">کسب و کار معتبر</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">۱۵,۰۰۰+</p>
                    <p className="text-xs text-secondary font-medium">زوج موفق</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">۹۸٪</p>
                    <p className="text-xs text-secondary font-medium">رضایت‌مندی</p>
                  </div>
                </div>
              </div>

              {/* Left Column: Visual Showcase */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80"
                    alt="عروسی تو"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-accent w-full text-right shadow-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          تاییدیه رسمی عروسی تو
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>۴.۹</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-graphite text-sm">باغ تالار تشریفاتی رویال اسپیناس</h4>
                      <p className="text-xs text-secondary">استعلام قیمت آنلاین فعال • لواسانات</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Business Categories Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">دسته‌بندی خدمات</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-1">
                دسته بندی کسب و کارهای عروسی
              </h2>
            </div>
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
            >
              <span>مشاهده همه دسته‌ها</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const IconComponent = getCategoryIcon(cat.iconName);
              return (
                <Link
                  key={cat.id}
                  href={`/directory?category=${encodeURIComponent(cat.name)}`}
                  className="bg-white p-5 rounded-2xl border border-accent hover:border-primary hover:shadow-md transition-all group flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-custom border border-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-graphite group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-secondary mt-0.5">{cat.count}+ کسب و کار</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Verified Vendors */}
        <section className="py-16 bg-white border-y border-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>برترین‌های دارای تاییدیه رسمی</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite">
                  تامین‌کنندگان برگزیده و معتبر
                </h2>
              </div>
              <Link
                href="/directory"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover"
              >
                <span>مشاهده همه تامین‌کنندگان</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVendors.slice(0, 3).map((vendor) => (
                <div
                  key={vendor.id}
                  className="bg-bg-custom rounded-2xl border border-accent overflow-hidden hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={vendor.coverImage}
                      alt={vendor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>تاییدیه رسمی عروسی تو</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-secondary">
                        <span>{vendor.category}</span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>{vendor.rating} ({vendor.reviewCount})</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-base text-graphite line-clamp-1">
                        {vendor.name}
                      </h3>
                      <p className="text-xs text-secondary line-clamp-2">
                        {vendor.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-accent/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-secondary block">حدود قیمت:</span>
                        <span className="text-xs font-bold text-primary">{vendor.priceRange}</span>
                      </div>
                      <Link
                        href={`/vendors/${vendor.id}`}
                        className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-primary-hover transition-colors"
                      >
                        استعلام قیمت و اطلاعات
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Tools Teaser Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="bg-white/10 text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full inline-block">
                ابزارهای رایگان برنامه‌ریزی
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                کنترل صفر تا صد هزینه‌ها و چک‌لیست کارهای عروسی
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                با ابزار محاسبه‌گر بودجه هوشمند و چک‌لیست زمان‌بندی‌شده، هیچ جزئیاتی از مدیریت مهمانان و برنامه‌های مراسم شما از قلم نخواهد افتاد.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/tools"
                  className="bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-bg-custom transition-all shadow-md flex items-center gap-2"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>شروع برنامه‌ریزی آنلاین</span>
                </Link>
                <Link
                  href="/quizzes"
                  className="border border-white/40 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>تست استایل‌شناسی</span>
                </Link>
              </div>
            </div>

            {/* Background Decorative Pattern */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
              <CheckCircle2 className="w-96 h-96 text-white" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
