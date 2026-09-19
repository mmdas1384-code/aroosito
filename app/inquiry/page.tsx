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
  ArrowLeft,
  Radio,
  FileSpreadsheet,
  Check,
  Eye,
  Printer,
  X,
  BadgeCheck,
  MapPin,
  Sparkles
} from "lucide-react";

export default function OnlineInquiryPage() {
  const { vendors, categories, addInquiry, broadcastRequests, vendorQuotes, addBroadcastRequest, acceptQuote } = useApp();

  const [activeTab, setActiveTab] = useState<"broadcast" | "direct" | "comparison">("broadcast");

  // Direct Inquiry State
  const [step, setStep] = useState<number>(1);
  const [selectedVendorId, setSelectedVendorId] = useState<string>(vendors[0]?.id || "");
  const [coupleName, setCoupleName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("۱۴۰۴/۰۵/۱۵");
  const [guestCount, setGuestCount] = useState<number>(200);
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Broadcast Request State
  const [bCategory, setBCategory] = useState("تالار و باغ تشریفات");
  const [bCity, setBCity] = useState("تهران");
  const [bDistrict, setBDistrict] = useState("شمال تهران / لواسان");
  const [bCoupleName, setBCoupleName] = useState("");
  const [bPhone, setBPhone] = useState("");
  const [bEventDate, setBEventDate] = useState("۱۴۰۴/۰۶/۲۰");
  const [bGuestCount, setBGuestCount] = useState<number>(250);
  const [bMaxBudget, setBMaxBudget] = useState<number>(100000000);
  const [bStylePreferences, setBStylePreferences] = useState("تشریفات سینمایی VIP، گل‌آرایی طبیعی و شمع‌آرایی ورودی");
  const [bNotes, setBNotes] = useState("");
  const [bSubmitted, setBSubmitted] = useState(false);

  // Quote Invoice Modal State
  const [selectedInvoiceQuote, setSelectedInvoiceQuote] = useState<any | null>(null);

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bCoupleName || !bPhone) return;

    addBroadcastRequest({
      coupleName: bCoupleName,
      phone: bPhone,
      category: bCategory,
      city: bCity,
      district: bDistrict,
      eventDate: bEventDate,
      maxBudget: bMaxBudget,
      guestCount: bGuestCount,
      stylePreferences: bStylePreferences,
      notes: bNotes
    });

    setBSubmitted(true);
  };

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
              <Radio className="w-4 h-4 animate-pulse text-emerald-600" />
              <span>بازار مناقصه و استعلام قیمت هوشمند</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">
              مناقصه آنلاین و مقایسه پیش‌فاکتور خدمات عروسی
            </h1>
            <p className="text-xs sm:text-sm text-secondary max-w-xl mx-auto">
              درخواست خود را همزمان برای تمام تامین‌کنندگان معتبر شهر ارسال کنید، بهترین پیشنهادها و پیش‌فاکتورها را دریافت کنید و به صورت هوشمند مقایسه کنید.
            </p>

            {/* Navigation Tabs */}
            <div className="flex justify-center p-1.5 bg-white rounded-2xl border border-accent shadow-xs max-w-md mx-auto mt-4">
              <button
                onClick={() => setActiveTab("broadcast")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "broadcast"
                    ? "bg-primary text-white shadow-xs"
                    : "text-secondary hover:text-graphite hover:bg-bg-custom"
                }`}
              >
                <Radio className="w-4 h-4" />
                <span>مناقصه عمومی (Broadcast)</span>
              </button>
              <button
                onClick={() => setActiveTab("direct")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "direct"
                    ? "bg-primary text-white shadow-xs"
                    : "text-secondary hover:text-graphite hover:bg-bg-custom"
                }`}
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>استعلام مستقیم</span>
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "comparison"
                    ? "bg-primary text-white shadow-xs"
                    : "text-secondary hover:text-graphite hover:bg-bg-custom"
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>مقایسه پیش‌فاکتورها ({vendorQuotes.length})</span>
              </button>
            </div>
          </div>

          {/* TAB 1: BROADCAST REQUEST FORM */}
          {activeTab === "broadcast" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-xs space-y-6">
              {bSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary">مناقصه شما با موفقیت منتشر شد!</h3>
                  <p className="text-xs sm:text-sm text-secondary max-w-md mx-auto">
                    درخواست شما برای <span className="font-bold text-graphite font-vazir">تمام تامین‌کنندگان فعال دسته {bCategory} در {bCity}</span> ارسال شد. به محض ارسال پیش‌فاکتور توسط تامین‌کنندگان، پیامک اطلاع‌رسانی برای شما ارسال خواهد شد.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      onClick={() => setActiveTab("comparison")}
                      className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-primary-hover shadow-xs transition-all flex items-center gap-2"
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>مشاهده و مقایسه پیشنهادهای دریافتی</span>
                    </button>
                    <button
                      onClick={() => setBSubmitted(false)}
                      className="border border-accent text-graphite px-6 py-3 rounded-xl text-xs font-bold hover:bg-bg-custom transition-all"
                    >
                      ثبت مناقصه جدید
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBroadcastSubmit} className="space-y-6 text-xs">
                  <div className="flex items-center gap-2 border-b border-accent pb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <div>
                      <h2 className="font-bold text-sm text-graphite">ارسال درخواست همزمان به کل بازار تامین‌کنندگان</h2>
                      <p className="text-[11px] text-secondary">جزییات مراسم را وارد کنید تا بهترین پیشنهادها و پیش‌فاکتورها را دریافت کنید</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">دسته خدمات مورد نیاز:</label>
                      <select
                        value={bCategory}
                        onChange={(e) => setBCategory(e.target.value)}
                        className="w-full p-3 rounded-xl border border-accent bg-bg-custom font-bold text-graphite focus:outline-none focus:border-primary"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">شهر و محدوده جغرافیایی:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={bCity}
                          onChange={(e) => setBCity(e.target.value)}
                          className="p-3 rounded-xl border border-accent bg-bg-custom font-bold text-graphite focus:outline-none focus:border-primary"
                        >
                          <option value="تهران">تهران</option>
                          <option value="اصفهان">اصفهان</option>
                          <option value="شیراز">شیراز</option>
                          <option value="مشهد">مشهد</option>
                        </select>
                        <input
                          type="text"
                          value={bDistrict}
                          onChange={(e) => setBDistrict(e.target.value)}
                          placeholder="مثلاً شمال تهران / لواسان"
                          className="p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">نام و نام خانوادگی زوج:</label>
                      <input
                        type="text"
                        required
                        value={bCoupleName}
                        onChange={(e) => setBCoupleName(e.target.value)}
                        placeholder="مانند: سارا و علی"
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">شماره همراه (جهت پیامک پیش‌فاکتورها):</label>
                      <input
                        type="tel"
                        required
                        value={bPhone}
                        onChange={(e) => setBPhone(e.target.value)}
                        placeholder="۰۹۱۲..."
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary text-left dir-ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">تاریخ برگزاری مراسم:</label>
                      <input
                        type="text"
                        value={bEventDate}
                        onChange={(e) => setBEventDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">تعداد میهمانان:</label>
                      <input
                        type="number"
                        value={bGuestCount}
                        onChange={(e) => setBGuestCount(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-graphite font-bold mb-1.5">سقف بودجه مدنظر (تومان):</label>
                      <input
                        type="number"
                        step={5000000}
                        value={bMaxBudget}
                        onChange={(e) => setBMaxBudget(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                      <span className="text-[10px] text-secondary mt-1 block">
                        معادل { (bMaxBudget / 1000000).toLocaleString('fa-IR') } میلیون تومان
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-graphite font-bold mb-1.5">سبک، استایل و سلیقه مدنظر:</label>
                    <input
                      type="text"
                      value={bStylePreferences}
                      onChange={(e) => setBStylePreferences(e.target.value)}
                      placeholder="مثلاً سبک مدرن سینمایی، منوی بوفه VIP، گل‌آرایی مینی‌مال"
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-graphite font-bold mb-1.5">توضیحات و الزامات خاص:</label>
                    <textarea
                      rows={3}
                      value={bNotes}
                      onChange={(e) => setBNotes(e.target.value)}
                      placeholder="هرگونه نیازمندی خاص مانند داشتن سالن اختصاصی، پارکینگ، کادر خانم و..."
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold shadow-xs transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <Radio className="w-4 h-4" />
                    <span>انتشار عمومی مناقصه و ارسال پیامک به تامین‌کنندگان ({bCategory})</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: QUOTE COMPARISON & PDF PREVIEW */}
          {activeTab === "comparison" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex items-center justify-between">
                <div>
                  <h2 className="font-extrabold text-graphite text-base">پیش‌فاکتورهای دریافتی از تامین‌کنندگان</h2>
                  <p className="text-xs text-secondary">پیشنهادها را مقایسه کنید و برای صدور قرارداد نهایی تایید کنید</p>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold text-xs">
                  {vendorQuotes.length} پیشنهاد فعال
                </span>
              </div>

              {vendorQuotes.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-accent text-center space-y-3">
                  <FileSpreadsheet className="w-12 h-12 text-secondary/50 mx-auto" />
                  <p className="text-sm font-bold text-graphite">هنوز پیش‌فاکتوری ثبت نشده است</p>
                  <p className="text-xs text-secondary">ابتدا یک مناقصه عمومی ثبت کنید تا تامین‌کنندگان برای شما پیشنهاد قیمت ارسال کنند.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vendorQuotes.map((quote) => {
                    const matchingReq = broadcastRequests.find((r) => r.id === quote.requestId);
                    return (
                      <div
                        key={quote.id}
                        className={`bg-white rounded-3xl border-2 p-6 space-y-4 shadow-xs transition-all relative ${
                          quote.status === "accepted" ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-accent hover:border-secondary"
                        }`}
                      >
                        {quote.status === "accepted" && (
                          <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>پذیرفته شده</span>
                          </div>
                        )}

                        <div className="flex items-center gap-3 border-b border-accent pb-4">
                          <img src={quote.vendorLogo} alt={quote.vendorName} className="w-12 h-12 rounded-xl object-cover border border-accent" />
                          <div>
                            <h3 className="font-bold text-sm text-graphite">{quote.vendorName}</h3>
                            <div className="flex items-center gap-2 text-[11px] text-secondary">
                              <span>امتیاز: ⭐ {quote.vendorRating}</span>
                              {matchingReq && <span>• درخواست: {matchingReq.category}</span>}
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-secondary leading-relaxed bg-bg-custom p-3 rounded-xl border border-accent/60">
                          {quote.coverLetter}
                        </p>

                        {/* Itemized breakdown snippet */}
                        <div className="space-y-2">
                          <p className="text-[11px] font-bold text-graphite">ریز خدمات و آیتم‌ها:</p>
                          <div className="space-y-1.5 bg-bg-custom/50 p-3 rounded-xl">
                            {quote.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between text-xs">
                                <span className="text-graphite">{item.description}</span>
                                <span className="font-bold text-secondary">{item.price.toLocaleString('fa-IR')} تومان</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing & Actions */}
                        <div className="pt-2 border-t border-accent flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-secondary block">مبلغ کل پیش‌فاکتور:</span>
                            <span className="text-base font-extrabold text-primary">
                              {quote.totalPrice.toLocaleString('fa-IR')} <span className="text-xs font-normal">تومان</span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedInvoiceQuote(quote)}
                              className="bg-bg-custom hover:bg-accent/40 text-graphite p-2.5 rounded-xl text-xs font-bold transition-all border border-accent flex items-center gap-1"
                              title="مشاهده پیش‌فاکتور رسمی PDF"
                            >
                              <Eye className="w-4 h-4 text-primary" />
                              <span className="hidden sm:inline">پیش‌فاکتور</span>
                            </button>

                            {quote.status !== "accepted" ? (
                              <button
                                onClick={() => acceptQuote(quote.id)}
                                className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1"
                              >
                                <Check className="w-4 h-4" />
                                <span>قبول پیشنهاد</span>
                              </button>
                            ) : (
                              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>تایید شد</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* FORMAL PDF-STYLE PRE-INVOICE MODAL */}
          {selectedInvoiceQuote && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border border-accent">

                {/* Header Actions */}
                <div className="flex items-center justify-between border-b border-accent pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      ف
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-graphite">پیش‌فاکتور رسمی خدمات عروسی</h3>
                      <p className="text-[11px] text-secondary">شماره پیش‌فاکتور: {selectedInvoiceQuote.id.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="bg-bg-custom hover:bg-accent/50 text-graphite p-2 rounded-xl text-xs font-bold border border-accent flex items-center gap-1"
                    >
                      <Printer className="w-4 h-4 text-primary" />
                      <span>چاپ / PDF</span>
                    </button>
                    <button
                      onClick={() => setSelectedInvoiceQuote(null)}
                      className="p-2 text-secondary hover:text-graphite rounded-xl hover:bg-bg-custom"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Printable Invoice Paper Sheet */}
                <div className="border border-accent p-6 rounded-2xl space-y-6 bg-white font-vazir text-xs">

                  {/* Vendor & Client Meta */}
                  <div className="grid grid-cols-2 gap-4 border-b border-accent pb-4">
                    <div className="space-y-1">
                      <p className="text-[10px] text-secondary">صادرکننده (تامین‌کننده):</p>
                      <p className="font-extrabold text-sm text-graphite">{selectedInvoiceQuote.vendorName}</p>
                      <p className="text-secondary">اعتبار پیش‌فاکتور: {selectedInvoiceQuote.validDays} روز</p>
                      <p className="text-secondary">تاریخ صدور: {selectedInvoiceQuote.createdAt}</p>
                    </div>
                    <div className="space-y-1 text-left dir-rtl">
                      <p className="text-[10px] text-secondary">مشتری (زوج محترم):</p>
                      <p className="font-bold text-graphite">متقاضی سامانه عروسی تو</p>
                      <p className="text-secondary">وضعیت: {selectedInvoiceQuote.status === "accepted" ? "تایید نهایی شده" : "در انتظار تایید"}</p>
                    </div>
                  </div>

                  {/* Description Cover */}
                  <div>
                    <p className="font-bold text-graphite mb-1">توضیحات و تعهدات تامین‌کننده:</p>
                    <p className="text-secondary bg-bg-custom p-3 rounded-xl border border-accent/60 leading-relaxed">
                      {selectedInvoiceQuote.coverLetter}
                    </p>
                  </div>

                  {/* Items Table */}
                  <div className="border border-accent rounded-xl overflow-hidden">
                    <table className="w-full text-right border-collapse">
                      <thead>
                        <tr className="bg-bg-custom border-b border-accent font-bold text-graphite">
                          <th className="p-3">ردیف</th>
                          <th className="p-3">شرح خدمات / کالا</th>
                          <th className="p-3 text-left">مبلغ (تومان)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-accent/60">
                        {selectedInvoiceQuote.items.map((item: any, idx: number) => (
                          <tr key={idx} className="hover:bg-bg-custom/40">
                            <td className="p-3 font-bold text-secondary">{idx + 1}</td>
                            <td className="p-3 font-medium text-graphite">{item.description}</td>
                            <td className="p-3 text-left font-bold text-graphite">{item.price.toLocaleString('fa-IR')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Total Calculations */}
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-graphite">مبلغ قابل پرداخت کل:</span>
                      <p className="text-[10px] text-secondary">شامل کلیه خدمات فوق بدون ارزش افزوده اضافه</p>
                    </div>
                    <span className="text-lg font-extrabold text-primary">
                      {selectedInvoiceQuote.totalPrice.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>

                  {/* Stamp & Footer */}
                  <div className="flex justify-between items-end pt-4 border-t border-dashed border-accent text-[10px] text-secondary">
                    <div>
                      <p>مهر و امضای الکترونیکی تامین‌کننده</p>
                      <div className="mt-2 text-primary font-bold border border-primary/30 px-3 py-1.5 rounded-lg inline-block bg-primary/5">
                        ✓ تایید شده در پلتفرم عروسی تو
                      </div>
                    </div>
                    <p>سامانه رسمی استعلام قیمت عروسی تو (Aroosi To)</p>
                  </div>

                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedInvoiceQuote(null)}
                    className="bg-bg-custom border border-accent text-graphite px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-accent/30"
                  >
                    بستen
                  </button>
                  {selectedInvoiceQuote.status !== "accepted" && (
                    <button
                      onClick={() => {
                        acceptQuote(selectedInvoiceQuote.id);
                        setSelectedInvoiceQuote(null);
                      }}
                      className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-xs"
                    >
                      تایید و رزرو اولیه پیش‌فاکتور
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: DIRECT INQUIRY FORM */}
          {activeTab === "direct" && (
            <div>
              {submitted ? (
                <div className="bg-white p-8 rounded-3xl border border-accent shadow-xs text-center space-y-6">
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
                      className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-primary-hover transition-all shadow-xs"
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
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-xs space-y-6">

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
                        className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 mt-4"
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
                          className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2"
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
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
