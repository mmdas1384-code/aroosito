"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  MessageSquareQuote,
  Send,
  CheckCircle2,
  Building2,
  Calendar,
  Users,
  DollarSign,
  Phone,
  User,
  ArrowLeft
} from "lucide-react";

export default function OnlineInquiryPage() {
  const { vendors, addInquiry } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedVendorId, setSelectedVendorId] = useState<string>(vendors[0]?.id || "");
  const [coupleName, setCoupleName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("۱۴۰۴/۰۵/۱۵");
  const [guestCount, setGuestCount] = useState<number>(200);
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId) || vendors[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coupleName || !phone) return;

    addInquiry({
      vendorId: selectedVendor.id,
      vendorName: selectedVendor.name,
      coupleName,
      phone,
      eventDate,
      guestCount,
      budget: budget || selectedVendor.priceRange,
      notes,
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              <MessageSquareQuote className="w-4 h-4" />
              <span>سامانه یکپارچه استعلام قیمت آنلاین</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">
              دریافت پیش‌فاکتور و استعلام قیمت از تامین‌کنندگان
            </h1>
            <p className="text-xs sm:text-sm text-secondary max-w-lg mx-auto">
              فرم زیر را تکمیل کنید تا درخواست شما مستقیماً در پنل مدیریت تامین‌کننده مربوطه قرار گرفته و پاسخ از طریق SMS ارسال شود.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-8 rounded-3xl border border-accent shadow-xl text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-primary">استعلام قیمت شما با موفقیت ثبت شد!</h3>
                <p className="text-xs sm:text-sm text-secondary max-w-md mx-auto">
                  درخواست شما برای مجموعه <span className="font-bold text-graphite">{selectedVendor.name}</span> ارسال گردید. به محض صدور قیمت، پیامک اطلاع‌رسانی برای شما ارسال خواهد شد.
                </p>
              </div>

              <div className="pt-4 border-t border-accent flex justify-center gap-4">
                <Link
                  href="/vendor-dashboard"
                  className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-primary-hover transition-all shadow-md"
                >
                  مشاهده در پنل تامین‌کننده (دمو)
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="border border-accent text-graphite px-6 py-3 rounded-xl text-xs font-bold hover:bg-bg-custom transition-all"
                >
                  ثبت استعلام جدید
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-xl space-y-6">

              {/* Form Steps Header */}
              <div className="flex items-center justify-around border-b border-accent pb-4 text-xs font-bold">
                <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-secondary"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    step >= 1 ? "bg-primary text-white" : "bg-bg-custom border border-accent"
                  }`}>۱</span>
                  <span>انتخاب تامین‌کننده</span>
                </div>
                <div className="h-px w-12 bg-accent" />
                <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-secondary"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    step >= 2 ? "bg-primary text-white" : "bg-bg-custom border border-accent"
                  }`}>۲</span>
                  <span>اطلاعات مراسم و تماس</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-graphite">انتخاب تامین‌کننده مورد نظر:</label>
                  <div className="space-y-3">
                    {vendors.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVendorId(v.id)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          selectedVendorId === v.id
                            ? "border-primary bg-primary/5"
                            : "border-accent hover:border-secondary bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={v.logo} alt={v.name} className="w-12 h-12 rounded-xl object-cover border border-accent" />
                          <div>
                            <p className="text-sm font-bold text-graphite">{v.name}</p>
                            <p className="text-[11px] text-secondary">{v.category} • {v.city}</p>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-primary">{v.priceRange}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>مرحله بعدی: ثبت مشخصات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="bg-bg-custom p-3 rounded-xl border border-accent/60 flex items-center justify-between mb-2">
                    <span className="text-secondary">تامین‌کننده انتخابی:</span>
                    <span className="font-bold text-primary">{selectedVendor.name}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label className="block text-graphite font-bold mb-1">شماره همراه جهت دریافت پیامک:</label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary text-left dir-ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-graphite font-bold mb-1">تاریخ تقریبی برگزاری:</label>
                      <input
                        type="text"
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
                    <label className="block text-graphite font-bold mb-1">توضیحات و بودجه مدنظر:</label>
                    <textarea
                      rows={3}
                      placeholder="توضیحات تکمیلی یا آیتم‌های درخواستی..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-accent text-graphite py-3 px-5 rounded-xl font-bold hover:bg-bg-custom"
                    >
                      بازگشت
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>ثبت نهایی و ارسال استعلام</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
