"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  Search,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowLeft,
  MessageSquareQuote,
  CheckSquare,
  Users,
  Calculator,
  Building2,
  Camera,
  Shirt,
  Flower2,
  Music,
  MapPin,
  X,
  Send,
  CheckCircle2,
  Plus,
  RefreshCw,
  Store
} from "lucide-react";

export default function HomePage() {
  const {
    categories,
    vendors,
    addInquiry,
    checklist,
    toggleChecklist,
    addChecklistItem,
    budget,
    updateBudgetItem
  } = useApp();

  const activeCategories = categories.filter((c) => c.isActive !== false);

  // Inquiry Modal State
  const [selectedVendorForInquiry, setSelectedVendorForInquiry] = useState<any>(null);
  const [coupleName, setCoupleName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("۱۴۰۴/۰۵/۱۵");
  const [guestCount, setGuestCount] = useState<number>(150);
  const [notes, setNotes] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Directory Filter State on Home Page
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Quiz State
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // New Checklist Title State
  const [newChecklistTitle, setNewChecklistTitle] = useState("");

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

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coupleName || !phone || !selectedVendorForInquiry) return;

    addInquiry({
      vendorId: selectedVendorForInquiry.id,
      vendorName: selectedVendorForInquiry.name,
      coupleName,
      phone,
      eventDate,
      guestCount,
      budget: selectedVendorForInquiry.priceRange,
      notes,
    });

    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedVendorForInquiry(null);
      setCoupleName("");
      setPhone("");
      setNotes("");
    }, 2000);
  };

  const handleAddChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChecklistTitle.trim()) return;
    addChecklistItem(newChecklistTitle, "امور اصلی", "۱ ماه قبل");
    setNewChecklistTitle("");
  };

  const filteredVendors = vendors.filter((v) => {
    if (selectedCategory !== "all" && v.category !== selectedCategory) return false;
    if (selectedCity !== "all" && v.city !== selectedCity) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!v.name.toLowerCase().includes(q) && !v.category.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const totalEstimatedBudget = budget.reduce((acc, curr) => acc + curr.estimated, 0);
  const totalActualBudget = budget.reduce((acc, curr) => acc + curr.actual, 0);
  const completedChecklistCount = checklist.filter((c) => c.completed).length;
  const checklistPercent = checklist.length > 0 ? Math.round((completedChecklistCount / checklist.length) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      {/* 1. Main Navigation Header */}
      <Header />

      <main className="flex-grow space-y-16 pb-16">

        {/* 2. Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 via-bg-custom to-bg-custom py-16 md:py-24 border-b border-accent/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="space-y-6 text-right">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>پلتفرم تخصصی و هوشمند برنامه‌ریزی عروسی</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite leading-tight">
                  برنامه‌ریزی رویایی‌ترین شب زندگی با{" "}
                  <span className="text-primary underline decoration-accent underline-offset-8">
                    عروسی تو
                  </span>
                </h1>

                <p className="text-base md:text-lg text-graphite/80 leading-relaxed max-w-xl">
                  بهترین باغ تالارها، آتلیه‌ها، سالن‌های زیبایی و خدمات مجالس را با تضمین قیمت، تاییدیه رسمی اعتبار و استعلام آنلاین رزرو کنید.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/inquiry"
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all flex items-center gap-2"
                  >
                    <MessageSquareQuote className="w-5 h-5" />
                    <span>استعلام قیمت آنلاین</span>
                  </Link>

                  <a
                    href="#directory-section"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    <span>دسته‌بندی کسب و کارها</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-accent/60 text-right">
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

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right space-y-2 mb-8">
            <span className="text-xs font-bold text-secondary uppercase">دسته‌بندی‌ها</span>
            <h2 className="text-2xl font-bold text-graphite">دسته بندی کسب و کارهای عروسی</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {activeCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const vendorCount = vendors.filter((v) => v.category === cat.name).length;
              return (
                <Link
                  key={cat.id}
                  href={`/directory?category=${encodeURIComponent(cat.name)}`}
                  className={`p-5 rounded-2xl border transition-all text-center flex flex-col items-center space-y-3 cursor-pointer ${
                    selectedCategory === cat.name
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-graphite border-accent hover:border-primary"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedCategory === cat.name ? "bg-white/20 text-white" : "bg-bg-custom text-primary"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{cat.name}</h3>
                    <p className={`text-[11px] mt-0.5 ${selectedCategory === cat.name ? "text-white/80" : "text-secondary"}`}>
                      {vendorCount > 0 ? `${vendorCount} کسب و کار` : "جدید"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. Smart Budget Calculator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-accent pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <Calculator className="w-4 h-4" />
                  <span>محاسبه‌گر بودجه آنلاین</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-graphite">برآورد هزینه هوشمند عروسی</h2>
              </div>

              <div className="flex items-center gap-6 bg-bg-custom p-4 rounded-2xl border border-accent">
                <div>
                  <span className="text-xs text-secondary block">مجموع بودجه تخمینی:</span>
                  <span className="text-base font-extrabold text-graphite">{totalEstimatedBudget.toLocaleString("fa-IR")} تومان</span>
                </div>
                <div className="h-8 w-px bg-accent" />
                <div>
                  <span className="text-xs text-secondary block">مجموع پرداختی تا اکنون:</span>
                  <span className="text-base font-extrabold text-primary">{totalActualBudget.toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {budget.map((b) => (
                <div key={b.id} className="p-4 rounded-2xl border border-accent bg-bg-custom/50 space-y-2">
                  <span className="text-xs font-bold text-graphite block">{b.category}</span>
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>پیش‌بینی: {b.estimated.toLocaleString("fa-IR")}</span>
                  </div>
                  <div className="pt-1">
                    <label className="text-[10px] text-secondary block mb-1">پرداخت شده (تومان):</label>
                    <input
                      type="number"
                      value={b.actual}
                      onChange={(e) => updateBudgetItem(b.id, Number(e.target.value))}
                      className="w-full p-2 rounded-xl border border-accent text-xs font-bold text-primary bg-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Checklist & Style Quiz Teaser */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Interactive Checklist Preview */}
          <div className="bg-white p-6 rounded-3xl border border-accent shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-accent pb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-base text-graphite">چک‌لیست کارهای عروسی ({checklistPercent}% انجام شده)</h3>
              </div>
              <Link href="/tools" className="text-xs font-bold text-primary hover:underline">
                مدیریت کامل
              </Link>
            </div>

            <form onSubmit={handleAddChecklist} className="flex gap-2">
              <input
                type="text"
                placeholder="افزودن کار جدید..."
                value={newChecklistTitle}
                onChange={(e) => setNewChecklistTitle(e.target.value)}
                className="flex-1 p-2.5 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary"
              />
              <button type="submit" className="bg-primary text-white px-4 py-2.5 rounded-xl text-xs font-bold">
                <Plus className="w-4 h-4" />
              </button>
            </form>

            <div className="space-y-2 max-h-56 overflow-y-auto">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="p-3 rounded-xl border border-accent/60 flex items-center justify-between cursor-pointer hover:bg-bg-custom transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${item.completed ? "text-primary" : "text-secondary"}`} />
                    <span className={`text-xs font-semibold ${item.completed ? "line-through text-secondary" : "text-graphite"}`}>
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-secondary bg-bg-custom px-2 py-0.5 rounded-md border border-accent">
                    {item.dueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Style Quiz Teaser */}
          <div className="bg-primary text-white p-6 rounded-3xl shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span>تست روانشناسی استایل</span>
              </div>
              <h3 className="text-xl font-bold">کدام تم عروسی با شخصیت شما سازگار است؟</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                با پاسخ به ۳ سوال کوتاه، بهترین سبک برگزاری عروسی (سلطنتی، بوهو، مدرن یا کلاسیک) را پیدا کنید.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between">
              <Link
                href="/quizzes"
                className="bg-white text-primary px-6 py-3 rounded-xl text-xs font-bold hover:bg-bg-custom transition-all shadow-sm"
              >
                شروع آنلاین تست استایل
              </Link>
            </div>
          </div>

        </section>

        {/* 5. Vendor Directory Grid & Direct Price Request */}
        <section id="directory-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>تامین‌کنندگان معتبر</span>
              </div>
              <h2 className="text-2xl font-bold text-graphite">دسته بندی و راهنمای کسب و کارهای عروسی</h2>
            </div>

            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-2 px-3 rounded-xl border border-accent text-xs font-bold bg-white text-graphite"
              >
                <option value="all">همه دسته‌ها</option>
                {activeCategories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-2xl border border-accent overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full">
                    <img src={vendor.coverImage} alt={vendor.name} className="w-full h-full object-cover" />
                    {vendor.isVerified && (
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-primary flex items-center gap-1 shadow-xs border border-primary/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>تاییدیه رسمی عروسی تو</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-secondary bg-bg-custom px-2.5 py-0.5 rounded-md border border-accent">
                        {vendor.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{vendor.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-graphite line-clamp-1">{vendor.name}</h3>
                    <p className="text-xs text-secondary line-clamp-2">{vendor.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-accent/60 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-secondary block">حدود قیمت:</span>
                    <span className="text-xs font-bold text-primary">{vendor.priceRange}</span>
                  </div>

                  <button
                    onClick={() => setSelectedVendorForInquiry(vendor)}
                    className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    <span>استعلام قیمت</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Direct Price Request on Home Page */}
        {selectedVendorForInquiry && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl border border-accent w-full max-w-md p-6 space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-accent pb-3">
                <h3 className="text-base font-bold text-graphite">استعلام قیمت آنلاین از {selectedVendorForInquiry.name}</h3>
                <button onClick={() => setSelectedVendorForInquiry(null)} className="text-secondary hover:text-graphite">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {inquirySubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                  <h4 className="font-bold text-primary text-base">استعلام شما ثبت شد!</h4>
                  <p className="text-xs text-secondary">پاسخ به صورت پیامک برای شما ارسال می‌شود.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-graphite mb-1">نام و نام خانوادگی زوج:</label>
                    <input
                      type="text"
                      required
                      placeholder="سارا و علی"
                      value={coupleName}
                      onChange={(e) => setCoupleName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-accent"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-graphite mb-1">شماره همراه:</label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-accent text-left dir-ltr"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold shadow-md"
                  >
                    ارسال درخواست استعلام
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
