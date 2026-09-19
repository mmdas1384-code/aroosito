"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  Search,
  Filter,
  MapPin,
  Star,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  MessageSquareQuote,
  SlidersHorizontal,
  X
} from "lucide-react";

function DirectoryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const { vendors, categories } = useApp();
  const activeCategories = categories.filter((c) => c.isActive !== false);

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  // Active image index tracker for individual cards
  const [cardImageIndex, setCardImageIndex] = useState<{ [key: string]: number }>({});

  const handleNextImage = (vendorId: string, max: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCardImageIndex((prev) => {
      const current = prev[vendorId] || 0;
      return { ...prev, [vendorId]: (current + 1) % max };
    });
  };

  const handlePrevImage = (vendorId: string, max: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCardImageIndex((prev) => {
      const current = prev[vendorId] || 0;
      return { ...prev, [vendorId]: (current - 1 + max) % max };
    });
  };

  const filteredVendors = useMemo(() => {
    return vendors.filter((v) => {
      if (selectedCategory !== "all" && v.category !== selectedCategory) return false;
      if (selectedCity !== "all" && v.city !== selectedCity) return false;
      if (verifiedOnly && !v.isVerified) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = v.name.toLowerCase().includes(q);
        const matchesCat = v.category.toLowerCase().includes(q);
        const matchesCity = v.city.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesCity) return false;
      }
      return true;
    });
  }, [vendors, selectedCategory, selectedCity, verifiedOnly, searchQuery]);

  const cities = Array.from(new Set(vendors.map((v) => v.city)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title & Breadcrumbs */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-secondary font-medium">
          <Link href="/" className="hover:text-primary">خانه</Link>
          <span>/</span>
          <span className="text-primary font-bold">دسته بندی کسب و کارها</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">
          دسته بندی و راهنمای کسب و کارهای عروسی
        </h1>
        <p className="text-sm text-secondary">
          جستجو و مقایسه بیش از {vendors.length} تامین‌کننده معتبر و استعلام قیمت مستقیم
        </p>
      </div>

      {/* Filters Bar & Search */}
      <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs space-y-4">

        {/* Search & Main Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Search Field */}
          <div className="md:col-span-2 relative">
            <Search className="w-5 h-5 text-secondary absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی نام آتلیه، تالار، آرایشگاه یا شهر..."
              className="w-full pr-11 pl-4 py-2.5 rounded-xl border border-accent text-sm focus:outline-none focus:border-primary text-graphite placeholder:text-secondary/70 bg-bg-custom"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary hover:text-graphite"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-accent text-sm font-medium focus:outline-none focus:border-primary text-graphite bg-bg-custom"
            >
              <option value="all">همه دسته‌بندی‌ها ({activeCategories.length})</option>
              {activeCategories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-accent text-sm font-medium focus:outline-none focus:border-primary text-graphite bg-bg-custom"
            >
              <option value="all">همه شهرها</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Secondary Toggles: Verified Only & Active Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-accent/60">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-graphite">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="w-4 h-4 rounded text-primary focus:ring-primary border-accent"
            />
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-primary" />
              فقط نمایش تامین‌کنندگان با "تاییدیه رسمی عروسی تو"
            </span>
          </label>

          <div className="text-xs text-secondary font-medium">
            نمایش <span className="font-bold text-primary">{filteredVendors.length}</span> مورد
          </div>
        </div>

      </div>

      {/* Vendors Grid */}
      {filteredVendors.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-accent text-center space-y-4">
          <p className="text-base text-secondary font-medium">
            هیچ تامین‌کننده‌ای با فیلترهای انتخاب شده یافت نشد.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedCity("all");
              setSearchQuery("");
              setVerifiedOnly(false);
            }}
            className="text-xs font-bold text-primary underline"
          >
            پاک کردن تمام فیلترها
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => {
            const images = [vendor.coverImage, ...vendor.gallery];
            const currentIndex = cardImageIndex[vendor.id] || 0;
            const currentImg = images[currentIndex] || vendor.coverImage;

            return (
              <div
                key={vendor.id}
                className="bg-white rounded-2xl border border-accent overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Carousel Header */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={currentImg}
                    alt={vendor.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end z-10">
                    {vendor.isVerified && (
                      <span className="bg-white/95 backdrop-blur-md text-primary text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-primary/20">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        <span>تاییدیه رسمی عروسی تو</span>
                      </span>
                    )}
                  </div>

                  {/* City Badge */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white" />
                      <span>{vendor.city}</span>
                    </span>
                  </div>

                  {/* Carousel Nav Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(vendor.id, images.length, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-graphite p-1.5 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(vendor.id, images.length, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-graphite p-1.5 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-secondary bg-bg-custom px-2.5 py-0.5 rounded-md border border-accent">
                        {vendor.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{vendor.rating}</span>
                        <span className="text-secondary font-normal">({vendor.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-graphite hover:text-primary transition-colors line-clamp-1">
                      {vendor.name}
                    </h3>

                    <p className="text-xs text-graphite/70 line-clamp-2 leading-relaxed">
                      {vendor.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-accent flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-secondary block">حدود تعرفه:</span>
                      <span className="text-xs font-extrabold text-primary">{vendor.priceRange}</span>
                    </div>

                    <Link
                      href={`/vendors/${vendor.id}`}
                      className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <MessageSquareQuote className="w-3.5 h-3.5" />
                      <span>استعلام قیمت</span>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="p-8 text-center text-secondary">در حال بارگذاری دسته‌بندی‌ها...</div>}>
          <DirectoryContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
