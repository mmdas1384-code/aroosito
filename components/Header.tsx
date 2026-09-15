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
  MessageSquare
} from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { role, setRole, conversations } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              {navLinks.map((link) => {
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

          <div className="pt-2">
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
    </header>
  );
};
