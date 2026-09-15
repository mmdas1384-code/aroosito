"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  Eye,
  MessageSquareQuote,
  TrendingUp,
  Calendar as CalendarIcon,
  Bell,
  CheckCircle2,
  Plus,
  Send,
  ShieldCheck,
  Store,
  Package,
  Image as ImageIcon
} from "lucide-react";

export default function VendorDashboardPage() {
  const {
    vendors,
    inquiries,
    updateInquiryQuote,
    toggleVendorDate,
    smsAlertsEnabled,
    setSmsAlertsEnabled
  } = useApp();

  const currentVendor = vendors[0]; // Active Vendor Demo Context
  const vendorInquiries = inquiries.filter((i) => i.vendorId === currentVendor.id || i.vendorId === "v1");

  const [activeTab, setActiveTab] = useState<"calendar" | "inquiries" | "packages">("calendar");

  // Custom Quote Form state
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(null);
  const [quotePrice, setQuotePrice] = useState("");
  const [quoteNotes, setQuoteNotes] = useState("");

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInquiryId || !quotePrice) return;
    updateInquiryQuote(selectedInquiryId, quotePrice, quoteNotes);
    setSelectedInquiryId(null);
    setQuotePrice("");
    setQuoteNotes("");
  };

  // Jalali Calendar Days Mock
  const daysInMonth = Array.from({ length: 30 }, (_, i) => {
    const dayStr = (i + 1).toString().padStart(2, "0");
    return {
      num: i + 1,
      dateIso: `2025-05-${dayStr}`
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Header & Verification Bar */}
          <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={currentVendor.logo} alt={currentVendor.name} className="w-16 h-16 rounded-2xl border border-accent object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-graphite">{currentVendor.name}</h1>
                  {currentVendor.isVerified && (
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-primary/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>تاییدیه رسمی</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-secondary mt-0.5">پنل مدیریت اختصاصی کسب و کار • {currentVendor.category}</p>
              </div>
            </div>

            {/* SMS Notification Toggle */}
            <div className="bg-bg-custom p-3 rounded-2xl border border-accent flex items-center gap-3">
              <Bell className={`w-5 h-5 ${smsAlertsEnabled ? "text-primary" : "text-secondary"}`} />
              <div>
                <span className="text-xs font-bold text-graphite block">دریافت پیامک مشتری جدید</span>
                <span className="text-[10px] text-secondary">ارسال آنی SMS هنگام ثبت استعلام</span>
              </div>
              <button
                onClick={() => setSmsAlertsEnabled(!smsAlertsEnabled)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  smsAlertsEnabled ? "bg-primary" : "bg-accent"
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  smsAlertsEnabled ? "translate-x-0" : "-translate-x-6"
                }`} />
              </button>
            </div>
          </div>

          {/* Metric Cards Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-secondary font-medium">بازدید پروفایل در ماه جاری</span>
                <p className="text-2xl font-extrabold text-graphite mt-1">۲,۴۵۰ نفر</p>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +۱۸٪ نسبت به ماه قبل
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-secondary font-medium">درخواست‌های استعلام جدید</span>
                <p className="text-2xl font-extrabold text-primary mt-1">{vendorInquiries.length} مورد</p>
                <span className="text-[11px] text-primary font-bold mt-1 block">پاسخ‌دهی آنی فعال</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <MessageSquareQuote className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-secondary font-medium">روزهای پر شده در تقویم</span>
                <p className="text-2xl font-extrabold text-graphite mt-1">{currentVendor.bookedDates.length} روز</p>
                <span className="text-[11px] text-secondary font-medium mt-1 block">قابل مدیریت از تقویم</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-accent pb-2">
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "calendar"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>تقویم روزهای پر و خالی (شمسی)</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "inquiries"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>پاسخ‌دهی به استعلام‌های زوج‌ها ({vendorInquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("packages")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "packages"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>مدیریت پکیج‌ها و گالری نمونه کارها</span>
            </button>
          </div>

          {/* TAB 1: CALENDAR */}
          {activeTab === "calendar" && (
            <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-graphite">تقویم رزرو روزها (اردیبهشت ۱۴۰۴)</h3>
                  <p className="text-xs text-secondary mt-1">با کلیک روی هر تاریخ، وضعیت آن را بین "آزاد" (سبز برند #2E533F) و "رزرو شده" (قرمز) تغییر دهید.</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-primary" /> آزاد جهت رزرو</span>
                  <span className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-rose-600" /> پر / رزرو شده</span>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-3 text-center">
                {["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"].map((d) => (
                  <div key={d} className="text-xs font-bold text-secondary py-1">{d}</div>
                ))}

                {daysInMonth.map((day) => {
                  const isBooked = currentVendor.bookedDates.includes(day.dateIso);
                  return (
                    <button
                      key={day.num}
                      onClick={() => toggleVendorDate(currentVendor.id, day.dateIso)}
                      className={`p-4 rounded-2xl border text-sm font-bold flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                        isBooked
                          ? "bg-rose-600 text-white border-rose-600 shadow-xs scale-98"
                          : "bg-primary text-white border-primary shadow-xs hover:bg-primary-hover"
                      }`}
                    >
                      <span className="text-base font-extrabold">{day.num}</span>
                      <span className="text-[10px] opacity-90 mt-1 font-medium">
                        {isBooked ? "رزرو شد" : "آزاد"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: INQUIRIES */}
          {activeTab === "inquiries" && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-accent shadow-xs divide-y divide-accent/60 overflow-hidden">
                {vendorInquiries.map((inq) => (
                  <div key={inq.id} className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-primary" />
                        <div>
                          <h4 className="text-base font-bold text-graphite">{inq.coupleName}</h4>
                          <span className="text-xs text-secondary">شماره تماس: {inq.phone} • تاریخ درخواست: {inq.createdAt}</span>
                        </div>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        inq.status === "quoted"
                          ? "bg-emerald-50 text-primary border border-primary/20"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {inq.status === "quoted" ? "پاسخ ارسال شد" : "در انتظار قیمت"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-bg-custom p-3 rounded-xl border border-accent/60 text-xs">
                      <div><span className="text-secondary block">تاریخ مراسم:</span><span className="font-bold text-graphite">{inq.eventDate}</span></div>
                      <div><span className="text-secondary block">تعداد مهمانان:</span><span className="font-bold text-graphite">{inq.guestCount} نفر</span></div>
                      <div className="sm:col-span-2"><span className="text-secondary block">توضیحات زوج:</span><span className="font-bold text-graphite">{inq.notes || "بدون توضیحات"}</span></div>
                    </div>

                    {inq.status === "quoted" ? (
                      <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs space-y-1">
                        <span className="font-bold text-primary block">پیش‌فاکتور صادر شده:</span>
                        <p className="font-extrabold text-graphite text-sm">مبلغ: {inq.quotePrice}</p>
                        <p className="text-secondary">{inq.quoteNotes}</p>
                      </div>
                    ) : (
                      selectedInquiryId === inq.id ? (
                        <form onSubmit={handleSendQuote} className="bg-bg-custom p-4 rounded-2xl border border-primary space-y-3 text-xs">
                          <h5 className="font-bold text-primary">صدور پیش‌فاکتور و پاسخ به {inq.coupleName}:</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              required
                              placeholder="مبلغ پیشنهادی (مثلا: ۱۱۰,۰۰۰,۰۰۰ تومان)"
                              value={quotePrice}
                              onChange={(e) => setQuotePrice(e.target.value)}
                              className="p-3 rounded-xl border border-accent focus:outline-none focus:border-primary bg-white"
                            />
                            <input
                              type="text"
                              placeholder="توضیحات پکیج و تخفیف‌ها..."
                              value={quoteNotes}
                              onChange={(e) => setQuoteNotes(e.target.value)}
                              className="p-3 rounded-xl border border-accent focus:outline-none focus:border-primary bg-white"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="submit"
                              className="bg-primary text-white px-5 py-2 rounded-xl font-bold hover:bg-primary-hover flex items-center gap-1.5"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>ارسال نهایی برای مشتری</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedInquiryId(null)}
                              className="border border-accent text-graphite px-4 py-2 rounded-xl font-medium"
                            >
                              انصراف
                            </button>
                          </div>
                        </form>
                      ) : (
                        <button
                          onClick={() => setSelectedInquiryId(inq.id)}
                          className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>صدور قیمت و پاسخ</span>
                        </button>
                      )
                    )}

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PACKAGES & PORTFOLIO */}
          {activeTab === "packages" && (
            <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-graphite">پکیج‌ها و تعرفه‌های فعال</h3>
                  <p className="text-xs text-secondary mt-0.5">مدیریت پکیج‌های نمایش داده شده در پروفایل عمومی شما</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentVendor.packages.map((pkg) => (
                  <div key={pkg.id} className="p-5 rounded-2xl border border-accent space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-graphite">{pkg.title}</h4>
                      <span className="text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="text-xs text-secondary space-y-1.5">
                      {pkg.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
