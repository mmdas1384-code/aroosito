"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Heart,
  Search,
  CheckSquare,
  HelpCircle,
  Calculator,
  User,
  Menu,
  X,
  ShieldCheck,
  Store,
  Sparkles,
  MessageSquareQuote,
  MessageSquare,
  ChevronDown,
  Building2,
  Phone,
  FileText,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { role, setRole, conversations, categories, submitVendorApplication } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  // Vendor Onboarding Modal State
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState<1 | 2 | 3>(1);
  const [onboardingSubmitted, setOnboardingSubmitted] = useState(false);

  // Vendor Onboarding Form Data
  const [vendorFormData, setVendorFormData] = useState({
    businessName: "",
    category: "تالار و باغ تشریفات",
    province: "تهران",
    city: "تهران",
    managerName: "",
    phone: "",
    landline: "",
    instagram: "",
    description: "",
    priceRange: "استعلام قیمت",
    logoUrl: "",
    licenseUrl: ""
  });

  const handleVendorOnboardingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendorFormData.businessName || !vendorFormData.phone) return;

    submitVendorApplication({
      businessName: vendorFormData.businessName,
      category: vendorFormData.category,
      province: vendorFormData.province,
      city: vendorFormData.city,
      managerName: vendorFormData.managerName,
      phone: vendorFormData.phone,
      landline: vendorFormData.landline,
      instagram: vendorFormData.instagram,
      description: vendorFormData.description,
      priceRange: vendorFormData.priceRange,
      logoUrl: vendorFormData.logoUrl || "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80",
      licenseUrl: vendorFormData.licenseUrl || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80"
    });

    setOnboardingSubmitted(true);
  };

  const resetVendorModal = () => {
    setIsVendorModalOpen(false);
    setOnboardingStep(1);
    setOnboardingSubmitted(false);
    setVendorFormData({
      businessName: "",
      category: "تالار و باغ تشریفات",
      province: "تهران",
      city: "تهران",
      managerName: "",
      phone: "",
      landline: "",
      instagram: "",
      description: "",
      priceRange: "استعلام قیمت",
      logoUrl: "",
      licenseUrl: ""
    });
  };

  const activeCategories = categories.filter((c) => c.isActive !== false);

  const unreadMessagesCount = conversations.reduce((sum, c) => sum + (c.unreadCount || 0), 0);

  const navLinks = [
    { href: "/directory", label: "دسته بندی کسب و کارها", icon: Search },
    { href: "/tools", label: "برنامه ریزی و چک لیست ها", icon: CheckSquare },
    { href: "/seating-chart", label: "چیدمان صندلی‌ها", icon: Calculator },
    { href: "/invitation", label: "کارت دعوت دیجیتال", icon: Sparkles },
    { href: "/quizzes", label: "تست های روانشناسی و استایل", icon: HelpCircle },
    { href: "/inquiry", label: "استعلام قیمت آنلاین", icon: MessageSquareQuote },
    { href: "/messages", label: "گفت‌وگوها", icon: MessageSquare, badge: unreadMessagesCount },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-accent shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Right Section: Brand Name & Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                <Heart className="w-6 h-6 fill-white stroke-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary tracking-tight font-vazir">
                  عروسی تو
                </span>
                <span className="text-[10px] text-secondary font-medium">
                  پلتفرم هوشمند خدمات مجالس
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Dynamic Vendor Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                onMouseLeave={() => setCategoriesDropdownOpen(false)}
              >
                <Link
                  href="/directory"
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                    pathname === "/directory"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-graphite hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  <Search className="w-4 h-4 text-secondary" />
                  <span>دسته بندی کسب و کارها</span>
                  <ChevronDown className="w-3.5 h-3.5 text-secondary" />
                </Link>

                {categoriesDropdownOpen && (
                  <div className="absolute top-full right-0 w-64 bg-white border border-accent shadow-xl rounded-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-secondary border-b border-accent/60 mb-1">
                      دسته‌بندی‌های فعال پلتفرم ({activeCategories.length})
                    </div>
                    {activeCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/directory?category=${encodeURIComponent(cat.name)}`}
                        onClick={() => setCategoriesDropdownOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2 hover:bg-bg-custom text-xs font-semibold text-graphite hover:text-primary transition-colors"
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-secondary font-normal dir-ltr">
                          {cat.count > 0 ? `${cat.count}+` : ""}
                        </span>
                      </Link>
                    ))}
                    <div className="pt-1 border-t border-accent/60 mt-1 px-2">
                      <Link
                        href="/directory"
                        onClick={() => setCategoriesDropdownOpen(false)}
                        className="block text-center text-xs font-bold text-primary py-1.5 hover:bg-primary/5 rounded-lg"
                      >
                        مشاهده همه دسته‌بندی‌ها
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors relative ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graphite hover:text-primary hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-secondary" />
                    <span>{link.label}</span>
                    {!!link.badge && link.badge > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Left Section: Role Switcher & Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* CTA Button: Join as Vendor */}
            <button
              onClick={() => setIsVendorModalOpen(true)}
              className="bg-primary hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 border border-primary/20"
            >
              <Building2 className="w-4 h-4" />
              <span>ثبت‌نام کسب‌وکارها</span>
            </button>

            {/* Quick Role Switcher for Demo / Testing */}
            <div className="bg-bg-custom border border-accent rounded-lg p-1 flex items-center gap-1 text-xs font-medium">
              <button
                onClick={() => setRole("couple")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  role === "couple"
                    ? "bg-primary text-white shadow-xs"
                    : "text-graphite hover:text-primary"
                }`}
              >
                زوج
              </button>
              <button
                onClick={() => setRole("vendor")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  role === "vendor"
                    ? "bg-primary text-white shadow-xs"
                    : "text-graphite hover:text-primary"
                }`}
              >
                تامین‌کننده
              </button>
              <button
                onClick={() => setRole("admin")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  role === "admin"
                    ? "bg-primary text-white shadow-xs"
                    : "text-graphite hover:text-primary"
                }`}
              >
                مدیر ارشد
              </button>
            </div>

            {/* Dashboard or Auth Button depending on role */}
            {role === "vendor" && (
              <Link
                href="/vendor-dashboard"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-all shadow-xs"
              >
                <Store className="w-4 h-4" />
                <span>پنل کسب و کار</span>
              </Link>
            )}

            {role === "admin" && (
              <Link
                href="/admin"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-all shadow-xs"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>پنل مدیریت</span>
              </Link>
            )}

            {role === "couple" && (
              <div className="flex items-center gap-2">
                <Link
                  href="/tools"
                  className="flex items-center gap-2 border border-accent text-graphite px-4 py-2 rounded-lg text-sm font-medium hover:border-secondary hover:bg-white transition-all"
                >
                  <User className="w-4 h-4 text-secondary" />
                  <span>ورود / ثبت‌نام</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-graphite hover:text-primary rounded-lg border border-accent"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-accent bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1 py-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-graphite hover:bg-bg-custom hover:text-primary"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-secondary" />
                    <span>{link.label}</span>
                  </div>
                  {!!link.badge && link.badge > 0 && (
                    <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-accent">
            <div className="text-xs font-bold text-secondary mb-2">تغییر نقش کاربری:</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setRole("couple"); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-semibold rounded-lg border ${
                  role === "couple" ? "bg-primary text-white border-primary" : "border-accent text-graphite"
                }`}
              >
                زوج
              </button>
              <button
                onClick={() => { setRole("vendor"); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-semibold rounded-lg border ${
                  role === "vendor" ? "bg-primary text-white border-primary" : "border-accent text-graphite"
                }`}
              >
                تامین‌کننده
              </button>
              <button
                onClick={() => { setRole("admin"); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-semibold rounded-lg border ${
                  role === "admin" ? "bg-primary text-white border-primary" : "border-accent text-graphite"
                }`}
              >
                مدیر ارشد
              </button>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); setIsVendorModalOpen(true); }}
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg font-bold text-xs"
            >
              <Building2 className="w-4 h-4" />
              <span>ثبت‌نام کسب‌وکارها (عضویت تامین‌کننده)</span>
            </button>

            {role === "vendor" && (
              <Link
                href="/vendor-dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg font-semibold"
              >
                <Store className="w-4 h-4" />
                <span>ورود به پنل تامین‌کننده</span>
              </Link>
            )}
            {role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg font-semibold"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>ورود به پنل مدیریت</span>
              </Link>
            )}
            {role === "couple" && (
              <Link
                href="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-2.5 rounded-lg font-semibold"
              >
                <User className="w-4 h-4" />
                <span>ورود / ثبت‌نام زوج‌ها</span>
              </Link>
            )}
          </div>
        </div>
      )}
      {/* VENDOR ONBOARDING POPUP MODAL */}
      {isVendorModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-2xl rounded-3xl border border-accent p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-accent pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-graphite">فرم درخواست ثبت‌نام و جذب تامین‌کنندگان</h3>
                  <p className="text-xs text-secondary">عضویت در پلتفرم جامع عروسی تو و دسترسی به هزاران مشتری بالقوه</p>
                </div>
              </div>
              <button
                onClick={resetVendorModal}
                className="w-8 h-8 rounded-full bg-bg-custom hover:bg-accent text-secondary flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {onboardingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-graphite">درخواست عضویت شما با موفقیت ثبت گردید!</h4>
                <p className="text-xs text-secondary max-w-md mx-auto leading-relaxed">
                  اطلاعات مجموعه شما جهت احراز هویت به تیم مدیریت ارسال شد. پس از بررسی، کد تایید و دسترسی به پنل اختصاصی از طریق SMS به شماره {vendorFormData.phone} ارسال می‌گردد.
                </p>
                <button
                  onClick={resetVendorModal}
                  className="bg-primary hover:bg-emerald-900 text-white px-8 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  متوجه شدم / بستن
                </button>
              </div>
            ) : (
              <form onSubmit={handleVendorOnboardingSubmit} className="space-y-6 text-xs">
                {/* Multi-step Navigation Stepper */}
                <div className="flex items-center justify-between border-b border-accent/60 pb-3 text-xs font-bold text-secondary">
                  <div className={`flex items-center gap-2 ${onboardingStep >= 1 ? "text-primary" : ""}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${onboardingStep >= 1 ? "bg-primary text-white" : "bg-slate-200 text-graphite"}`}>1</span>
                    <span>مشخصات کسب‌وکار</span>
                  </div>
                  <div className={`flex items-center gap-2 ${onboardingStep >= 2 ? "text-primary" : ""}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${onboardingStep >= 2 ? "bg-primary text-white" : "bg-slate-200 text-graphite"}`}>2</span>
                    <span>اطلاعات تماس و مدیریت</span>
                  </div>
                  <div className={`flex items-center gap-2 ${onboardingStep >= 3 ? "text-primary" : ""}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${onboardingStep >= 3 ? "bg-primary text-white" : "bg-slate-200 text-graphite"}`}>3</span>
                    <span>توضیحات و نمونه کار</span>
                  </div>
                </div>

                {/* STEP 1: BUSINESS DETAILS */}
                {onboardingStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-graphite mb-1.5">نام برند / مجموعه تجاری *</label>
                      <input
                        type="text"
                        required
                        placeholder="مثلاً: باغ تالار تشریفاتی زمرد"
                        value={vendorFormData.businessName}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, businessName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-graphite mb-1.5">دسته‌بندی شغلی *</label>
                      <select
                        value={vendorFormData.category}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, category: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary bg-white text-xs"
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-graphite mb-1.5">استان *</label>
                        <select
                          value={vendorFormData.province}
                          onChange={(e) => setVendorFormData({ ...vendorFormData, province: e.target.value })}
                          className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary bg-white text-xs"
                        >
                          <option value="تهران">تهران</option>
                          <option value="اصفهان">اصفهان</option>
                          <option value="فارس">فارس</option>
                          <option value="خراسان رضوی">خراسان رضوی</option>
                          <option value="البرز">البرز</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-graphite mb-1.5">شهر *</label>
                        <input
                          type="text"
                          required
                          placeholder="مثلاً: تهران (لواسان)"
                          value={vendorFormData.city}
                          onChange={(e) => setVendorFormData({ ...vendorFormData, city: e.target.value })}
                          className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (vendorFormData.businessName) setOnboardingStep(2);
                        }}
                        className="bg-primary hover:bg-emerald-900 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-1.5"
                      >
                        <span>مرحله بعدی: اطلاعات تماس</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: CONTACT & MANAGEMENT */}
                {onboardingStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-graphite mb-1.5">نام و نام خانوادگی مدیریت *</label>
                      <input
                        type="text"
                        required
                        placeholder="مثلاً: علیرضا محمدی"
                        value={vendorFormData.managerName}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, managerName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-graphite mb-1.5">شماره همراه (جهت دریافت پیامک استعلام و OTP) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        value={vendorFormData.phone}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold text-left dir-ltr focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-graphite mb-1.5">تلفن ثابت مجموعه (اختیاری):</label>
                      <input
                        type="text"
                        placeholder="۰۲۱-۲۲۳۳۴۴۵۵"
                        value={vendorFormData.landline}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, landline: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold text-left dir-ltr focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-graphite mb-1.5">آدرس پیج اینستاگرام یا وب‌سایت:</label>
                      <input
                        type="text"
                        placeholder="@your_brand"
                        value={vendorFormData.instagram}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, instagram: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold text-left dir-ltr focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setOnboardingStep(1)}
                        className="border border-accent px-5 py-2.5 rounded-xl font-bold text-secondary hover:bg-slate-100 flex items-center gap-1.5"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>مرحله قبلی</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (vendorFormData.managerName && vendorFormData.phone) setOnboardingStep(3);
                        }}
                        className="bg-primary hover:bg-emerald-900 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-1.5"
                      >
                        <span>مرحله بعدی: توضیحات</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: DESCRIPTION, PRICING & DOCS */}
                {onboardingStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-graphite mb-1.5">معرفی خدمات و شرح فعالیت مجموعه *</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="خلاصه‌ای از خدمات، ظرفیت، منوها و مزایای رقابتی..."
                        value={vendorFormData.description}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, description: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-graphite mb-1.5">حدود بازه قیمتی ورودی / خدمات:</label>
                      <input
                        type="text"
                        placeholder="مثلاً: از ۳۰ تا ۸۰ میلیون تومان"
                        value={vendorFormData.priceRange}
                        onChange={(e) => setVendorFormData({ ...vendorFormData, priceRange: e.target.value })}
                        className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary text-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-bold text-graphite">پیش‌نمایش لوگو / جواز کسب (اختیاری):</label>
                      <div className="border border-dashed border-accent p-4 rounded-xl text-center bg-bg-custom space-y-2">
                        <Upload className="w-6 h-6 text-secondary mx-auto" />
                        <p className="text-[11px] text-secondary">تصویر لوگو یا تصویر جواز کسب جهت اعطای سریع نشان تاییدیه</p>
                        <input
                          type="text"
                          placeholder="یا درج لینک مستقیم تصویر لوگو..."
                          value={vendorFormData.logoUrl}
                          onChange={(e) => setVendorFormData({ ...vendorFormData, logoUrl: e.target.value })}
                          className="w-full p-2 bg-white rounded-lg border border-accent text-[11px] text-left dir-ltr"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-accent">
                      <button
                        type="button"
                        onClick={() => setOnboardingStep(2)}
                        className="border border-accent px-5 py-2.5 rounded-xl font-bold text-secondary hover:bg-slate-100 flex items-center gap-1.5"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>مرحله قبلی</span>
                      </button>

                      <button
                        type="submit"
                        className="bg-primary hover:bg-emerald-900 text-white px-8 py-2.5 rounded-xl font-bold shadow-md flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ارسال نهایی درخواست عضویت</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}

          </div>
        </div>
      )}
    </header>
  );
};
