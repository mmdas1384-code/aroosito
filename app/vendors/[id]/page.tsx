"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Star,
  Calendar as CalendarIcon,
  PackageCheck,
  Image as ImageIcon,
  MessageSquareQuote,
  CheckCircle2,
  X,
  Clock,
  Send,
  ChevronRight
} from "lucide-react";

export default function VendorProfilePage() {
  const params = useParams();
  const vendorId = params.id as string;
  const { vendors, addInquiry } = useApp();

  const vendor = vendors.find((v) => v.id === vendorId) || vendors[0];

  const [activeTab, setActiveTab] = useState<"packages" | "gallery" | "calendar">("packages");
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Inquiry Form State
  const [coupleName, setCoupleName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState<number>(150);
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coupleName || !phone) return;

    addInquiry({
      vendorId: vendor.id,
      vendorName: vendor.name,
      coupleName,
      phone,
      eventDate: eventDate || "۱۴۰۴/۰۵/۰۱",
      guestCount,
      budget: budget || vendor.priceRange,
      notes
    });

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setIsInquiryModalOpen(false);
      setCoupleName("");
      setPhone("");
      setNotes("");
    }, 2000);
  };

  // Days mock for calendar view
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow pb-16">
        {/* Header Cover Banner */}
        <div className="relative h-72 md:h-96 w-full bg-slate-200">
          <img
            src={vendor.coverImage}
            alt={vendor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <Link
              href="/directory"
              className="bg-white/80 hover:bg-white text-graphite px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md flex items-center gap-1 shadow-md transition-all"
            >
              <ChevronRight className="w-4 h-4" />
              <span>بازگشت به لیست</span>
            </Link>
          </div>
        </div>

        {/* Vendor Main Header Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-3xl border border-accent p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
                <img src={vendor.logo} alt={vendor.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                    {vendor.category}
                  </span>

                  {vendor.isVerified && (
                    <span className="bg-emerald-50 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>تاییدیه رسمی عروسی تو</span>
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">{vendor.name}</h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-secondary font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{vendor.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span>{vendor.rating}</span>
                    <span className="text-secondary font-normal">({vendor.reviewCount} نظر ثبت شده)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Range & CTA */}
            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-r border-accent pt-4 md:pt-0 md:pr-6 gap-4">
              <div className="text-right">
                <span className="text-xs text-secondary block">حدود قیمت خدمات:</span>
                <span className="text-lg font-extrabold text-primary">{vendor.priceRange}</span>
              </div>

              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>استعلام قیمت مستقیم</span>
              </button>
            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-center gap-2 border-b border-accent pb-2">
            <button
              onClick={() => setActiveTab("packages")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "packages"
                  ? "bg-primary text-white shadow-xs"
                  : "text-graphite hover:bg-white"
              }`}
            >
              <PackageCheck className="w-4 h-4" />
              <span>پکیج‌ها و تعرفه خدمات</span>
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "gallery"
                  ? "bg-primary text-white shadow-xs"
                  : "text-graphite hover:bg-white"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>گالری نمونه کارها ({vendor.gallery.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "calendar"
                  ? "bg-primary text-white shadow-xs"
                  : "text-graphite hover:bg-white"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>تقویم روزهای رزرو شده</span>
            </button>
          </div>

          {/* Tab Content 1: Packages */}
          {activeTab === "packages" && (
            <div className="mt-8 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-3">
                <h3 className="text-lg font-bold text-primary">درباره مجموعه</h3>
                <p className="text-sm text-graphite/80 leading-relaxed">{vendor.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vendor.packages.map((pkg) => (
                  <div key={pkg.id} className="bg-white p-6 rounded-2xl border-2 border-accent hover:border-primary transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-graphite">{pkg.title}</h4>
                        <span className="text-sm font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {pkg.price}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-graphite/80 pt-2 border-t border-accent/60">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsInquiryModalOpen(true)}
                      className="w-full bg-bg-custom hover:bg-primary hover:text-white border border-accent text-primary py-2.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      ثبت درخواست برای این پکیج
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 2: Gallery */}
          {activeTab === "gallery" && (
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendor.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-accent group shadow-sm">
                    <img
                      src={imgUrl}
                      alt={`نمونه کار ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 3: Calendar */}
          {activeTab === "calendar" && (
            <div className="mt-8 bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-graphite">تقویم وضعیت رزرو روزها</h3>
                  <p className="text-xs text-secondary mt-1">مشاهده روزهای پر و آزاد جهت هماهمگی مراسم شما</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                    <span>آزاد جهت رزرو</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                    <span>رزرو شده / پر</span>
                  </div>
                </div>
              </div>

              {/* Mock Month View */}
              <div className="grid grid-cols-7 gap-2 text-center pt-2">
                {["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"].map((day) => (
                  <div key={day} className="text-xs font-bold text-secondary py-1">{day}</div>
                ))}

                {daysInMonth.map((dayNum) => {
                  const isBooked = dayNum % 4 === 0;
                  return (
                    <div
                      key={dayNum}
                      className={`py-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center transition-all ${
                        isBooked
                          ? "bg-rose-50 border-rose-200 text-rose-600"
                          : "bg-emerald-50/50 border-emerald-200 text-primary"
                      }`}
                    >
                      <span>{dayNum}</span>
                      <span className="text-[9px] mt-0.5 font-normal">
                        {isBooked ? "پر" : "آزاد"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal: Online Price Inquiry */}
        {isInquiryModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl border border-accent w-full max-w-lg p-6 space-y-6 shadow-2xl relative">

              <div className="flex items-center justify-between border-b border-accent pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquareQuote className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-graphite">استعلام قیمت آنلاین</h3>
                </div>
                <button
                  onClick={() => setIsInquiryModalOpen(false)}
                  className="text-secondary hover:text-graphite p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {inquirySuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">استعلام قیمت شما ثبت شد!</h4>
                  <p className="text-xs text-secondary">
                    اطلاعات درخواست شما برای {vendor.name} ارسال شد. پاسخ از طریق SMS به اطلاع شما خواهد رسید.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-graphite font-bold mb-1">نام و نام خانوادگی زوج:</label>
                    <input
                      type="text"
                      required
                      placeholder="مانند: سارا و علی"
                      value={coupleName}
                      onChange={(e) => setCoupleName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-graphite font-bold mb-1">شماره موبایل جهت دریافت پاسخ:</label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary text-left dir-ltr"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-graphite font-bold mb-1">تاریخ تقریبی برگزاری:</label>
                      <input
                        type="text"
                        placeholder="۱۴۰۴/۰۵/۱۵"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-graphite font-bold mb-1">تعداد تقریبی مهمانان:</label>
                      <input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-graphite font-bold mb-1">توضیحات و منوی درخواستی:</label>
                    <textarea
                      rows={3}
                      placeholder="جزئیات خدمات مورد نظر شما..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال استعلام قیمت</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
