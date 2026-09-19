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
  Image as ImageIcon,
  Radio,
  FileSpreadsheet,
  PlusCircle,
  Trash2,
  X,
  FileText,
  Settings,
  Upload,
  Globe,
  MapPin,
  Clock,
  Phone,
  Edit,
  Play
} from "lucide-react";

export default function VendorDashboardPage() {
  const {
    vendors,
    categories,
    inquiries,
    broadcastRequests,
    vendorQuotes,
    submitVendorQuote,
    updateInquiryQuote,
    toggleVendorDate,
    smsAlertsEnabled,
    setSmsAlertsEnabled,
    updateVendorProfile,
    addVendorPackage,
    deleteVendorPackage,
    addVendorPortfolioMedia,
    deleteVendorPortfolioMedia
  } = useApp();

  const currentVendor = vendors[0]; // Active Vendor Demo Context
  const vendorInquiries = inquiries.filter((i) => i.vendorId === currentVendor.id || i.vendorId === "v1");

  // Matching market requests for vendor's category/city
  const matchingMarketRequests = broadcastRequests.filter(
    (req) => req.category === currentVendor.category || req.city === currentVendor.city
  );

  const [activeTab, setActiveTab] = useState<"market" | "profile" | "portfolio" | "packages" | "calendar" | "inquiries">("market");

  // Vendor Profile Edit State
  const [profileForm, setProfileForm] = useState({
    name: currentVendor.name,
    category: currentVendor.category,
    city: currentVendor.city,
    address: currentVendor.address,
    phone: currentVendor.phone,
    workingHours: currentVendor.workingHours || "۱۰:۰۰ الی ۲۲:۰۰",
    instagram: currentVendor.instagram || "@vendor",
    priceRange: currentVendor.priceRange,
    description: currentVendor.description,
    logo: currentVendor.logo,
    coverImage: currentVendor.coverImage,
    mapEmbedUrl: currentVendor.mapEmbedUrl || ""
  });
  const [profileSavedSuccess, setProfileSavedSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateVendorProfile(currentVendor.id, profileForm);
    setProfileSavedSuccess(true);
    setTimeout(() => setProfileSavedSuccess(false), 2500);
  };

  // Add Portfolio Media Modal State
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaForm, setMediaForm] = useState({
    url: "",
    type: "image" as "image" | "video",
    title: ""
  });

  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaForm.url) return;
    addVendorPortfolioMedia(currentVendor.id, mediaForm);
    setIsMediaModalOpen(false);
    setMediaForm({ url: "", type: "image", title: "" });
  };

  // Add Package Modal State
  const [isPkgModalOpen, setIsPkgModalOpen] = useState(false);
  const [pkgForm, setPkgForm] = useState({
    title: "",
    price: "",
    featuresText: ""
  });

  const handleAddPackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkgForm.title || !pkgForm.price) return;
    const features = pkgForm.featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    addVendorPackage(currentVendor.id, {
      title: pkgForm.title,
      price: pkgForm.price,
      features
    });
    setIsPkgModalOpen(false);
    setPkgForm({ title: "", price: "", featuresText: "" });
  };

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

  // Itemized Quote Builder Modal State
  const [biddingReqModal, setBiddingReqModal] = useState<any | null>(null);
  const [quoteItems, setQuoteItems] = useState<{ description: string; price: number }[]>([
    { description: "ورودی سالن و خدمات تشریفات اولیه", price: 25000000 },
    { description: "منوی غذا و پذیرایی ویژه میهمانان", price: 45000000 }
  ]);
  const [coverLetter, setCoverLetter] = useState("پیش‌فاکتور رسمی ویژه زوج محترم شامل تمامی خدمات فوق همراه با گارانتی کیفیت اجرای مراسم.");
  const [validDays, setValidDays] = useState<number>(7);

  const handleAddQuoteItem = () => {
    setQuoteItems((prev) => [...prev, { description: "", price: 0 }]);
  };

  const handleRemoveQuoteItem = (index: number) => {
    setQuoteItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleQuoteItemChange = (index: number, field: "description" | "price", value: any) => {
    setQuoteItems((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  const calculatedTotalPrice = quoteItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  const handleSendBiddingQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!biddingReqModal || quoteItems.length === 0) return;

    submitVendorQuote({
      requestId: biddingReqModal.id,
      vendorId: currentVendor.id,
      vendorName: currentVendor.name,
      vendorLogo: currentVendor.logo,
      vendorRating: currentVendor.rating,
      totalPrice: calculatedTotalPrice,
      validDays,
      coverLetter,
      items: quoteItems
    });

    setBiddingReqModal(null);
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
          <div className="flex items-center gap-2 border-b border-accent pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("market")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "market"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Radio className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>فرصت‌های بازار و مناقصات مشتریان ({matchingMarketRequests.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "profile"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>ویرایش پروفایل کسب‌ووکار</span>
            </button>

            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "portfolio"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>مدیریت نمونه‌کارها ({currentVendor.portfolioMedia?.length || currentVendor.gallery.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("packages")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "packages"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>پکیج‌ها و تعرفه خدمات ({currentVendor.packages.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "calendar"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>تقویم روزهای پر و خالی</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "inquiries"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>استعلام‌های مستقیم ({vendorInquiries.length})</span>
            </button>
          </div>

          {/* TAB 0: MARKET BIDDING REQUESTS */}
          {activeTab === "market" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-graphite">درخواست‌های مناقصه عمومی مشتریان</h3>
                  <p className="text-xs text-secondary mt-0.5">درخواست‌های مرتبط با دسته {currentVendor.category} در {currentVendor.city}</p>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold">
                  {matchingMarketRequests.length} درخواست فعال
                </span>
              </div>

              <div className="space-y-4">
                {matchingMarketRequests.map((req) => {
                  const existingQuote = vendorQuotes.find(
                    (q) => q.requestId === req.id && q.vendorId === currentVendor.id
                  );

                  return (
                    <div key={req.id} className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-accent pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-base text-graphite">{req.coupleName}</h4>
                            <span className="text-xs bg-bg-custom border border-accent px-2.5 py-0.5 rounded-full font-bold text-secondary">
                              دسته: {req.category}
                            </span>
                          </div>
                          <p className="text-xs text-secondary mt-1">محدوده: {req.city} ({req.district}) • ثبت شده در: {req.createdAt}</p>
                        </div>

                        <div className="text-left dir-rtl">
                          <span className="text-[10px] text-secondary block">سقف بودجه زوج:</span>
                          <span className="font-extrabold text-primary text-base">
                            {req.maxBudget.toLocaleString('fa-IR')} <span className="text-xs font-normal">تومان</span>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-bg-custom p-3.5 rounded-2xl border border-accent/60">
                        <div><span className="text-secondary block">تاریخ مراسم:</span><span className="font-bold text-graphite">{req.eventDate}</span></div>
                        <div><span className="text-secondary block">تعداد مهمانان:</span><span className="font-bold text-graphite">{req.guestCount} نفر</span></div>
                        <div><span className="text-secondary block">استایل مدنظر:</span><span className="font-bold text-graphite">{req.stylePreferences}</span></div>
                      </div>

                      <p className="text-xs text-secondary bg-white p-3 rounded-xl border border-accent/60 leading-relaxed">
                        <span className="font-bold text-graphite">توضیحات تکمیلی مشتری: </span>
                        {req.notes || "توضیحات اضافه ثبت نشده است."}
                      </p>

                      <div className="pt-2 flex justify-end">
                        {existingQuote ? (
                          <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>پیش‌فاکتور ارسال شده: {existingQuote.totalPrice.toLocaleString('fa-IR')} تومان</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => setBiddingReqModal(req)}
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                          >
                            <FileSpreadsheet className="w-4 h-4" />
                            <span>ارسال پیش‌فاکتور اقلام‌بندی شده</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ITEMIZATION QUOTE BUILDER MODAL */}
          {biddingReqModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border border-accent text-xs">

                <div className="flex items-center justify-between border-b border-accent pb-4">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-extrabold text-base text-graphite">صدور پیش‌فاکتور رسمی برای مناقصه</h3>
                      <p className="text-secondary text-[11px]">متقاضی: {biddingReqModal.coupleName} • سقف بودجه: {biddingReqModal.maxBudget.toLocaleString('fa-IR')} تومان</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBiddingReqModal(null)}
                    className="p-2 text-secondary hover:text-graphite rounded-xl hover:bg-bg-custom"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSendBiddingQuote} className="space-y-5">
                  {/* Itemized Rows */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-graphite">ریز آیتم‌ها و خدمات قابل ارائه:</label>
                      <button
                        type="button"
                        onClick={handleAddQuoteItem}
                        className="text-primary hover:text-primary-hover font-bold flex items-center gap-1 text-[11px]"
                      >
                        <PlusCircle className="w-4 h-4" />
                        <span>افزودن ردیف خدماتی</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {quoteItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-bg-custom p-2.5 rounded-xl border border-accent">
                          <span className="font-bold text-secondary w-5 text-center">{idx + 1}</span>
                          <input
                            type="text"
                            required
                            placeholder="شرح خدمت (مثلا: منوی شام VIP یا ۲ دوربین ۴K)"
                            value={item.description}
                            onChange={(e) => handleQuoteItemChange(idx, "description", e.target.value)}
                            className="flex-1 p-2 rounded-lg border border-accent bg-white focus:outline-none focus:border-primary"
                          />
                          <input
                            type="number"
                            required
                            placeholder="مبلغ (تومان)"
                            value={item.price}
                            onChange={(e) => handleQuoteItemChange(idx, "price", e.target.value)}
                            className="w-36 p-2 rounded-lg border border-accent bg-white focus:outline-none focus:border-primary text-left dir-ltr"
                          />
                          {quoteItems.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveQuoteItem(idx)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculated Total Bar */}
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-center justify-between font-vazir">
                    <div>
                      <span className="font-bold text-graphite block">مبلغ کل پیشنهادی پیش‌فاکتور:</span>
                      <span className="text-[10px] text-secondary">جمع کل ردیف‌های فوق</span>
                    </div>
                    <span className="text-base font-extrabold text-primary">
                      {calculatedTotalPrice.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-graphite mb-1">مدت اعتبار پیش‌فاکتور (روز):</label>
                      <input
                        type="number"
                        value={validDays}
                        onChange={(e) => setValidDays(Number(e.target.value))}
                        className="w-full p-2.5 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-graphite mb-1">تعهدات و توضیحات صادرکننده:</label>
                      <input
                        type="text"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-accent focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-accent">
                    <button
                      type="button"
                      onClick={() => setBiddingReqModal(null)}
                      className="border border-accent text-graphite px-5 py-2.5 rounded-xl font-bold hover:bg-bg-custom"
                    >
                      انصراف
                    </button>
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold shadow-md flex items-center gap-1.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>ارسال پیش‌فاکتور نهایی برای زوج (SMS)</span>
                    </button>
                  </div>
                </form>

              </div>
            </div>
          )}

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

          {/* TAB: PROFILE SETTINGS EDITOR */}
          {activeTab === "profile" && (
            <form onSubmit={handleSaveProfile} className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-xs space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-accent pb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">ویرایش اطلاعات عمومی و ارتباطی کسب‌وکار</h3>
                  <p className="text-secondary mt-0.5">تغییرات شما بلافاصله در صفحه پروفایل عمومی زوج‌ها نمایش داده خواهد شد.</p>
                </div>
                {profileSavedSuccess && (
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>تغییرات با موفقیت ذخیره شد</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-graphite mb-1.5">نام تجاری کسب‌ووکار *</label>
                  <input
                    type="text"
                    required
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">دسته‌بندی شغلی *</label>
                  <select
                    value={profileForm.category}
                    onChange={(e) => setProfileForm({ ...profileForm, category: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold bg-bg-custom focus:outline-none focus:border-primary"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">شهر محل فعالیت *</label>
                  <input
                    type="text"
                    required
                    value={profileForm.city}
                    onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-graphite mb-1.5">تلفن تماس مستقیم *</label>
                  <input
                    type="text"
                    required
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold text-left dir-ltr focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">ساعات کاری و پذیرش</label>
                  <input
                    type="text"
                    value={profileForm.workingHours}
                    onChange={(e) => setProfileForm({ ...profileForm, workingHours: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">آیدی اینستاگرام</label>
                  <input
                    type="text"
                    value={profileForm.instagram}
                    onChange={(e) => setProfileForm({ ...profileForm, instagram: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-graphite mb-1.5">محدوده قیمت و تعرفه پایه</label>
                  <input
                    type="text"
                    value={profileForm.priceRange}
                    onChange={(e) => setProfileForm({ ...profileForm, priceRange: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">آدرس کامل مجموعه *</label>
                  <input
                    type="text"
                    required
                    value={profileForm.address}
                    onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-bold focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-graphite mb-1.5">لینک انکود نقشه گوگل / نشان (Map Embed URL)</label>
                <input
                  type="text"
                  placeholder="https://maps.google.com/maps?q=35.823,51.589&output=embed"
                  value={profileForm.mapEmbedUrl}
                  onChange={(e) => setProfileForm({ ...profileForm, mapEmbedUrl: e.target.value })}
                  className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr focus:outline-none focus:border-primary bg-bg-custom"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-graphite mb-1.5">آدرس تصویر لوگو (URL)</label>
                  <input
                    type="text"
                    value={profileForm.logo}
                    onChange={(e) => setProfileForm({ ...profileForm, logo: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-bold text-graphite mb-1.5">آدرس تصویر کاور اصلی (URL)</label>
                  <input
                    type="text"
                    value={profileForm.coverImage}
                    onChange={(e) => setProfileForm({ ...profileForm, coverImage: e.target.value })}
                    className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-graphite mb-1.5">توضیحات و بیوگرافی مجموعه</label>
                <textarea
                  rows={4}
                  value={profileForm.description}
                  onChange={(e) => setProfileForm({ ...profileForm, description: e.target.value })}
                  className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary leading-relaxed"
                />
              </div>

              <div className="flex justify-end pt-4 border-t border-accent">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold shadow-md flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ذخیره تغییرات پروفایل</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB: PORTFOLIO MANAGER */}
          {activeTab === "portfolio" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">مدیریت آلبوم نمونه‌کارها و تیزرهای ویدئویی</h3>
                  <p className="text-xs text-secondary mt-0.5">آپلود و مدیریت عکس‌ها و کلیپ‌های نمایش داده شده در گالری عمومی</p>
                </div>
                <button
                  onClick={() => setIsMediaModalOpen(true)}
                  className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن نمونه‌کار جدید</span>
                </button>
              </div>

              {/* Media Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {(currentVendor.portfolioMedia || currentVendor.gallery.map((g, i) => ({ id: `g-${i}`, url: g, type: "image" as const, title: `نمونه کار ${i+1}` }))).map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-accent overflow-hidden shadow-xs flex flex-col justify-between group">
                    <div className="relative h-48 bg-black">
                      {item.type === "video" ? (
                        <div className="w-full h-full flex items-center justify-center relative">
                          <video src={item.url} className="w-full h-full object-cover opacity-80" />
                          <Play className="w-10 h-10 text-white fill-white absolute" />
                        </div>
                      ) : (
                        <img src={item.url} alt={item.title || "نمونه کار"} className="w-full h-full object-cover" />
                      )}
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-graphite text-xs block truncate max-w-[180px]">
                          {item.title || "بدون عنوان"}
                        </span>
                        <span className="text-[10px] text-secondary">
                          {item.type === "video" ? "ویدیو کلیپ" : "تصویر عکاسی"}
                        </span>
                      </div>

                      <button
                        onClick={() => deleteVendorPortfolioMedia(currentVendor.id, item.id)}
                        className="text-rose-500 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 transition-colors"
                        title="حذف نمونه‌کار"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PACKAGES & SERVICES MANAGER */}
          {activeTab === "packages" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">مدیریت پکیج‌ها و تعرفه‌های خدماتی</h3>
                  <p className="text-xs text-secondary mt-0.5">تعریف پکیج‌های VIP، رزرو آنلاین و آیتم‌های خدماتی</p>
                </div>
                <button
                  onClick={() => setIsPkgModalOpen(true)}
                  className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن پکیج خدماتی جدید</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentVendor.packages.map((pkg) => (
                  <div key={pkg.id} className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-accent pb-3">
                        <h4 className="font-extrabold text-base text-graphite">{pkg.title}</h4>
                        <span className="text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {pkg.price}
                        </span>
                      </div>
                      <ul className="text-xs text-secondary space-y-2">
                        {pkg.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-accent flex justify-end">
                      <button
                        onClick={() => deleteVendorPackage(currentVendor.id, pkg.id)}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-rose-50"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>حذف این پکیج</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADD PORTFOLIO MEDIA MODAL */}
          {isMediaModalOpen && (
            <div className="fixed inset-0 bg-graphite/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white w-full max-w-lg rounded-3xl border border-accent p-6 shadow-2xl space-y-5 text-xs">
                <div className="flex justify-between items-center border-b border-accent pb-3">
                  <h3 className="font-extrabold text-base text-graphite">افزودن عکس یا ویدیو به گالری</h3>
                  <button onClick={() => setIsMediaModalOpen(false)} className="text-secondary hover:text-graphite">×</button>
                </div>

                <form onSubmit={handleAddMedia} className="space-y-4">
                  <div>
                    <label className="block font-bold text-graphite mb-1">نوع فایل:</label>
                    <select
                      value={mediaForm.type}
                      onChange={(e: any) => setMediaForm({ ...mediaForm, type: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-bold bg-bg-custom"
                    >
                      <option value="image">تصویر / عکس نمونه‌کار</option>
                      <option value="video">ویدیو کلیپ / تیزر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">آدرس اینترنتی فایل (Direct URL) *</label>
                    <input
                      type="text"
                      required
                      placeholder="https://images.unsplash.com/..."
                      value={mediaForm.url}
                      onChange={(e) => setMediaForm({ ...mediaForm, url: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">عنوان / توضیحات نمونه‌کار</label>
                    <input
                      type="text"
                      placeholder="مثال: آلبوم فرمالیته شمال یا دکور سفره عقد"
                      value={mediaForm.title}
                      onChange={(e) => setMediaForm({ ...mediaForm, title: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-semibold"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-accent">
                    <button type="button" onClick={() => setIsMediaModalOpen(false)} className="px-4 py-2 border rounded-xl">انصراف</button>
                    <button type="submit" className="bg-primary text-white px-5 py-2 rounded-xl font-bold">ذخیره در گالری</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ADD PACKAGE MODAL */}
          {isPkgModalOpen && (
            <div className="fixed inset-0 bg-graphite/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white w-full max-w-lg rounded-3xl border border-accent p-6 shadow-2xl space-y-5 text-xs">
                <div className="flex justify-between items-center border-b border-accent pb-3">
                  <h3 className="font-extrabold text-base text-graphite">تعریف پکیج خدماتی جدید</h3>
                  <button onClick={() => setIsPkgModalOpen(false)} className="text-secondary hover:text-graphite">×</button>
                </div>

                <form onSubmit={handleAddPackage} className="space-y-4">
                  <div>
                    <label className="block font-bold text-graphite mb-1">عنوان پکیج *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: پکیج برنزی یا پکیج اقتصادی VIP"
                      value={pkgForm.title}
                      onChange={(e) => setPkgForm({ ...pkgForm, title: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">قیمت / تعرفه *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: ۶۵,۰۰۰,۰۰۰ تومان"
                      value={pkgForm.price}
                      onChange={(e) => setPkgForm({ ...pkgForm, price: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">ویژگی‌ها و خدمات پکیج (هر سطر یک ویژگی):</label>
                    <textarea
                      rows={4}
                      placeholder="ظرفیت تا ۱۵۰ نفر&#10;منوی ۲ رنگ&#10;نورپردازی سالن"
                      value={pkgForm.featuresText}
                      onChange={(e) => setPkgForm({ ...pkgForm, featuresText: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent font-semibold leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-accent">
                    <button type="button" onClick={() => setIsPkgModalOpen(false)} className="px-4 py-2 border rounded-xl">انصراف</button>
                    <button type="submit" className="bg-primary text-white px-5 py-2 rounded-xl font-bold">افزودن پکیج</button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
