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
  ChevronRight,
  Globe,
  Play,
  Maximize2,
  ExternalLink,
  Info
} from "lucide-react";

export default function VendorProfilePage() {
  const params = useParams();
  const vendorId = params.id as string;
  const { vendors, addInquiry } = useApp();

  const vendor = vendors.find((v) => v.id === vendorId) || vendors[0];

  const { reviews, addReview } = useApp();

  const [activeTab, setActiveTab] = useState<"packages" | "gallery" | "calendar" | "reviews">("packages");
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Lightbox State
  const [lightboxMedia, setLightboxMedia] = useState<{ url: string; type: "image" | "video"; title?: string } | null>(null);

  // Review Form State
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [qualityRating, setQualityRating] = useState(5.0);
  const [punctualityRating, setPunctualityRating] = useState(5.0);
  const [valueRating, setValueRating] = useState(5.0);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const vendorReviews = reviews.filter((r) => r.vendorId === vendor.id && r.status === "approved");

  const avgQuality = vendorReviews.length ? (vendorReviews.reduce((a, b) => a + b.serviceQuality, 0) / vendorReviews.length).toFixed(1) : "5.0";
  const avgPunctuality = vendorReviews.length ? (vendorReviews.reduce((a, b) => a + b.punctuality, 0) / vendorReviews.length).toFixed(1) : "5.0";
  const avgValue = vendorReviews.length ? (vendorReviews.reduce((a, b) => a + b.valueForMoney, 0) / vendorReviews.length).toFixed(1) : "4.8";

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewComment) return;

    const overall = parseFloat(((qualityRating + punctualityRating + valueRating) / 3).toFixed(1));

    addReview({
      vendorId: vendor.id,
      authorName: reviewAuthor,
      overallRating: overall,
      serviceQuality: qualityRating,
      punctuality: punctualityRating,
      valueForMoney: valueRating,
      comment: reviewComment,
      isVerifiedCustomer: true,
      eventDate: "۱۴۰۳/۰۴/۱۰"
    });

    setReviewSuccess(true);
    setTimeout(() => {
      setReviewSuccess(false);
      setIsReviewModalOpen(false);
      setReviewAuthor("");
      setReviewComment("");
    }, 2000);
  };

  const portfolioList = vendor.portfolioMedia || vendor.gallery.map((g, idx) => ({
    id: `g-${idx}`,
    url: g,
    type: "image" as const,
    title: `نمونه‌کار شماره ${idx + 1}`
  }));

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

            {/* Price Range & Direct Action Buttons */}
            <div className="w-full md:w-auto flex flex-col items-stretch md:items-end border-t md:border-t-0 md:border-r border-accent pt-4 md:pt-0 md:pr-6 gap-3">
              <div className="text-right">
                <span className="text-xs text-secondary block">حدود تعرفه خدمات:</span>
                <span className="text-lg font-extrabold text-primary">{vendor.priceRange}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 flex-1 md:flex-none"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>استعلام قیمت آنلاین</span>
                </button>

                <a
                  href={`tel:${vendor.phone.replace(/[^0-9]/g, "")}`}
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  title="تماس مستقیم"
                >
                  <Phone className="w-4 h-4" />
                  <span>تماس</span>
                </a>

                {vendor.instagram && (
                  <a
                    href={`https://instagram.com/${vendor.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    title="اینستاگرام"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">اینستاگرام</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Quick Info Bar & Interactive Map Embed Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Working Hours & Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm border-b border-accent pb-2">
                <Clock className="w-4 h-4" />
                <span>ساعات کاری و اطلاعات پذیرش</span>
              </div>
              <p className="text-xs text-graphite/80 leading-relaxed font-semibold">
                {vendor.workingHours || "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰ (مراجعه با هماهنگی قبلی)"}
              </p>

              <div className="space-y-2 text-xs pt-2">
                <div className="flex items-center gap-2 text-graphite">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-bold">شماره تماس مستقیم: </span>
                  <a href={`tel:${vendor.phone}`} className="text-primary hover:underline font-mono dir-ltr">{vendor.phone}</a>
                </div>

                {vendor.instagram && (
                  <div className="flex items-center gap-2 text-graphite">
                    <Globe className="w-4 h-4 text-rose-500" />
                    <span className="font-bold">پیج اینستاگرام: </span>
                    <a
                      href={`https://instagram.com/${vendor.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:underline font-mono dir-ltr"
                    >
                      {vendor.instagram}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Address & Neshan / Google Maps Embed */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between border-b border-accent pb-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>آدرس و موقعیت روی نقشه</span>
                </div>
                <span className="text-xs text-secondary font-medium">{vendor.address}</span>
              </div>

              {/* Interactive Map Embed / Preview */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-accent bg-bg-custom shadow-inner flex items-center justify-center">
                {vendor.mapEmbedUrl ? (
                  <iframe
                    title="موقعیت مکانی تامین کننده"
                    src={vendor.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-4 space-y-2">
                    <MapPin className="w-8 h-8 text-primary mx-auto" />
                    <p className="text-xs font-bold text-graphite">{vendor.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vendor.name + " " + vendor.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>مسیریابی در گوگل مپس / نشان</span>
                    </a>
                  </div>
                )}
              </div>
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
              <span>نمونه‌کارها و ویدیوها ({portfolioList.length})</span>
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
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "reviews"
                  ? "bg-primary text-white shadow-xs"
                  : "text-graphite hover:bg-white"
              }`}
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>نظرات و امتیازدهی ({vendorReviews.length})</span>
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
                  <div key={pkg.id} className="bg-white p-6 rounded-2xl border-2 border-accent hover:border-primary transition-all flex flex-col justify-between space-y-4 shadow-xs">
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

          {/* Tab Content 2: Portfolio Gallery with Lightbox Viewer */}
          {activeTab === "gallery" && (
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxMedia(item)}
                    className="relative h-64 rounded-2xl overflow-hidden border border-accent group shadow-sm cursor-pointer bg-black"
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full relative flex items-center justify-center">
                        <video src={item.url} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </div>
                        <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                          ویدیو کلیپ
                        </span>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title || "نمونه‌کار"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <p className="text-white text-xs font-bold">{item.title || "مشاهده نمونه‌کار"}</p>
                      <span className="text-[10px] text-white/80 flex items-center gap-1 mt-0.5">
                        <Maximize2 className="w-3 h-3" /> برای بزرگ‌نمایی کلیک کنید
                      </span>
                    </div>
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

          {/* Tab Content 4: Verified Reviews & Ratings */}
          {activeTab === "reviews" && (
            <div className="mt-8 space-y-6">
              {/* Ratings Overview Header Card */}
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                {/* Overall Score */}
                <div className="lg:col-span-4 text-center lg:border-l border-accent lg:pl-6 space-y-2">
                  <span className="text-xs text-secondary font-bold block">میانگین کل رضایتمندی زوجین</span>
                  <div className="text-4xl sm:text-5xl font-black text-primary flex items-center justify-center gap-2">
                    <span>{vendor.rating}</span>
                    <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-xs text-graphite/80 font-semibold">بر اساس {vendorReviews.length} نظر تایید شده</p>

                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="mt-3 w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Star className="w-4 h-4 fill-white" />
                    <span>ثبت نظر و امتیاز شما</span>
                  </button>
                </div>

                {/* Sub-ratings Detailed Progress Breakdown */}
                <div className="lg:col-span-8 space-y-3">
                  <h4 className="text-xs font-bold text-graphite mb-2">تفکیک شاخص‌های کیفیت خدمات:</h4>

                  {/* Quality */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-graphite">کیفیت خدمات و پذیرایی:</span>
                      <span className="text-primary">{avgQuality} / ۵.۰</span>
                    </div>
                    <div className="w-full h-2.5 bg-bg-custom rounded-full border border-accent overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${(parseFloat(avgQuality) / 5) * 100}%` }} />
                    </div>
                  </div>

                  {/* Punctuality */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-graphite">نظم، وقت‌شناسی و مدیریت زمان:</span>
                      <span className="text-primary">{avgPunctuality} / ۵.۰</span>
                    </div>
                    <div className="w-full h-2.5 bg-bg-custom rounded-full border border-accent overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${(parseFloat(avgPunctuality) / 5) * 100}%` }} />
                    </div>
                  </div>

                  {/* Value for Money */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-graphite">ارزش نسبت به قیمت (ارزشمندی):</span>
                      <span className="text-primary">{avgValue} / ۵.۰</span>
                    </div>
                    <div className="w-full h-2.5 bg-bg-custom rounded-full border border-accent overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${(parseFloat(avgValue) / 5) * 100}%` }} />
                    </div>
                  </div>
                </div>

              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-graphite">نظرات ثبتی زوجین و مشتریان تایید شده:</h3>

                {vendorReviews.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl border border-accent text-center text-xs text-secondary font-bold">
                    هنوز نظری برای این تامین‌کننده ثبت نشده است. اولین نفری باشید که نظر ثبت می‌کنید!
                  </div>
                ) : (
                  vendorReviews.map((rev) => (
                    <div key={rev.id} className="bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-3">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-graphite text-sm">{rev.authorName}</span>

                          {rev.isVerifiedCustomer && (
                            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>مشتری تایید شده عروسی تو</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                          <span>امتیاز: {rev.overallRating}</span>
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                        </div>
                      </div>

                      <p className="text-xs text-graphite/80 leading-relaxed font-medium">{rev.comment}</p>

                      <div className="flex items-center justify-between pt-2 border-t border-accent/60 text-[11px] text-secondary">
                        <span>تاریخ برگزاری مراسم: {rev.eventDate || "ثبت شده"}</span>
                        <span>{rev.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* MODAL: SUBMIT REVIEW FORM */}
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl border border-accent w-full max-w-lg p-6 space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-accent pb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <h3 className="text-base font-bold text-graphite">ثبت نظر و امتیاز برای {vendor.name}</h3>
                </div>
                <button onClick={() => setIsReviewModalOpen(false)} className="text-secondary hover:text-graphite">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {reviewSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-primary">نظر شما با موفقیت ثبت شد!</h4>
                  <p className="text-xs text-secondary">
                    دیدگاه شما پس از بررسی توسط تیم نظارت عروسی تو منتشر خواهد شد.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-graphite mb-1">نام و نام خانوادگی:</label>
                    <input
                      type="text"
                      required
                      placeholder="مانند: علیرضا محمدی"
                      value={reviewAuthor}
                      onChange={(e) => setReviewAuthor(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-accent focus:outline-none focus:border-primary font-medium"
                    />
                  </div>

                  <div className="space-y-3 bg-bg-custom p-3.5 rounded-2xl border border-accent">
                    <h4 className="font-bold text-graphite">امتیازدهی تخصصی شاخص‌ها:</h4>

                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>کیفیت خدمات و امکانات:</span>
                        <span className="text-primary">{qualityRating} از ۵</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="0.5"
                        value={qualityRating}
                        onChange={(e) => setQualityRating(parseFloat(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>نظم و وقت‌شناسی:</span>
                        <span className="text-primary">{punctualityRating} از ۵</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="0.5"
                        value={punctualityRating}
                        onChange={(e) => setPunctualityRating(parseFloat(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>ارزش خدمات نسبت به قیمت:</span>
                        <span className="text-primary">{valueRating} از ۵</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="0.5"
                        value={valueRating}
                        onChange={(e) => setValueRating(parseFloat(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">توضیحات و تجربه شخصی شما:</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="تجربه شما از کیفیت پذیرایی، برخورد پرسنل و..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-accent focus:outline-none focus:border-primary font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال نظر برای بررسی</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* LIGHTBOX MEDIA VIEWER MODAL */}
        {lightboxMedia && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxMedia(null)}
              className="absolute top-6 left-6 text-white hover:text-accent bg-white/10 p-2.5 rounded-full border border-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-3">
              {lightboxMedia.type === "video" ? (
                <video src={lightboxMedia.url} controls autoPlay className="max-h-[75vh] w-auto rounded-2xl shadow-2xl border border-white/10" />
              ) : (
                <img src={lightboxMedia.url} alt={lightboxMedia.title || "نمونه کار"} className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10" />
              )}
              {lightboxMedia.title && (
                <div className="bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">
                  {lightboxMedia.title}
                </div>
              )}
            </div>
          </div>
        )}

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
