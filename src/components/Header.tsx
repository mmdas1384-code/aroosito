"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Store,
  CheckSquare,
  Sparkles,
  Calculator,
  User,
  Briefcase,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"couple" | "vendor">("couple");

  const navLinks = [
    {
      title: "دسته بندی کسب و کارها",
      href: "/vendors",
      icon: Store,
      description: "تالارها، آتلیه‌ها، مزون‌ها و تمامی خدمات عروسی"
    },
    {
      title: "برنامه ریزی جشن ها و چک لیست ها",
      href: "/planning-tools",
      icon: CheckSquare,
      description: "مدیریت بودجه، زمان‌بندی و چک‌لیست کارهای عروسی"
    },
    {
      title: "تست های روانشناسی و استایل شناسی",
      href: "/quizzes",
      icon: Sparkles,
      description: "کوئیزهای تحلیلی برای انتخاب بهترین استایل و تِم جشن"
    },
    {
      title: "استعلام قیمت آنلاین",
      href: "/price-inquiry",
      icon: Calculator,
      description: "دریافت آنی قیمت خدمات از برترین پرووایدرها"
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
                <Heart className="w-5 h-5 fill-white/20 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-primary font-sans">
                  عروسی تو
                </span>
                <span className="text-[10px] text-secondary font-medium tracking-wider -mt-1">
                  AROOSI TO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-main hover:text-primary hover:bg-accent-light/50 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-secondary group-hover:text-primary" />
                    <span>{link.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Auth Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                setAuthType("couple");
                setIsAuthModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary border border-accent hover:border-primary/40 hover:bg-accent-light/40 transition-all"
            >
              <User className="w-4 h-4 text-primary" />
              <span>ورود / ثبت نام زوج‌ها</span>
            </button>

            <button
              onClick={() => {
                setAuthType("vendor");
                setIsAuthModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/15 transition-all"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span>ورود صاحبان کسب‌وکار</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-text-main hover:bg-accent-light text-primary focus:outline-none"
              aria-label="منو"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-accent bg-background px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-light/60 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center shrink-0 text-primary mt-0.5">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-main">
                      {link.title}
                    </div>
                    <div className="text-xs text-secondary mt-0.5">
                      {link.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-accent/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setAuthType("couple");
                setIsAuthModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-primary border border-primary/30 hover:bg-accent-light/50"
            >
              <User className="w-4 h-4" />
              <span>ورود / ثبت نام زوج‌ها</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setAuthType("vendor");
                setIsAuthModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover shadow-sm"
            >
              <Briefcase className="w-4 h-4" />
              <span>ورود / ثبت نام کسب‌وکارها</span>
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal Simulation */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-main/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-background rounded-2xl shadow-xl border border-accent max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 left-4 text-secondary hover:text-text-main"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                {authType === "couple" ? <User className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-text-main">
                {authType === "couple" ? "ورود / ثبت‌نام زوج‌ها" : "ورود / ثبت‌نام کسب‌وکارها"}
              </h3>
              <p className="text-sm text-secondary mt-1">
                {authType === "couple"
                  ? "برای دسترسی به چک‌لیست‌ها و ذخیره کسب‌وکارهای محبوب وارد شوید"
                  : "برای مدیریت خدمات، قیمت‌ها و پاسخ به استعلام‌های مشتریان وارد شوید"}
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsAuthModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-main mb-1.5">
                  شماره موبایل
                </label>
                <input
                  type="tel"
                  placeholder="09123456789"
                  className="w-full px-4 py-2.5 rounded-xl border border-accent focus:outline-none focus:border-primary text-left dir-ltr text-sm"
                  dir="ltr"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
              >
                دریافت کد تایید
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setAuthType(authType === "couple" ? "vendor" : "couple")}
                className="text-xs text-secondary hover:text-primary underline"
              >
                {authType === "couple" ? "ورود به عنوان صاحب کسب‌وکار" : "ورود به عنوان زوج"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
