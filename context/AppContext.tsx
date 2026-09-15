"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "couple" | "vendor" | "admin";

export interface VendorPackage {
  id: string;
  title: string;
  price: string;
  features: string[];
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  city: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  priceRange: string;
  coverImage: string;
  logo: string;
  gallery: string[];
  packages: VendorPackage[];
  description: string;
  bookedDates: string[]; // ISO date strings (YYYY-MM-DD)
}

export interface Inquiry {
  id: string;
  vendorId: string;
  vendorName: string;
  coupleName: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  budget: string;
  notes: string;
  status: "pending" | "quoted" | "rejected";
  quotePrice?: string;
  quoteNotes?: string;
  createdAt: string;
}

export interface BroadcastRequest {
  id: string;
  coupleName: string;
  phone: string;
  category: string;
  city: string;
  district: string;
  eventDate: string;
  maxBudget: number; // Toman
  guestCount: number;
  stylePreferences: string;
  notes: string;
  createdAt: string;
  status: "open" | "closed";
}

export interface QuoteItem {
  description: string;
  price: number;
}

export interface VendorQuote {
  id: string;
  requestId: string;
  vendorId: string;
  vendorName: string;
  vendorLogo: string;
  vendorRating: number;
  totalPrice: number;
  validDays: number;
  coverLetter: string;
  items: QuoteItem[];
  status: "pending" | "accepted" | "declined";
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  description: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  dueDate: string;
}

export interface GuestItem {
  id: string;
  name: string;
  side: "bride" | "groom";
  status: "confirmed" | "pending" | "declined";
  plusOne: boolean;
}

export interface BudgetItem {
  id: string;
  category: string;
  estimated: number;
  actual: number;
}

export interface SeatingElement {
  id: string;
  name: string;
  type: "circular" | "rectangular" | "stage" | "dancefloor" | "entrance";
  capacity: number;
  x: number; // grid position X percentage or px
  y: number; // grid position Y percentage or px
  assignedGuestIds: string[];
}

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  vendors: Vendor[];
  categories: Category[];
  inquiries: Inquiry[];
  checklist: ChecklistItem[];
  guests: GuestItem[];
  budget: BudgetItem[];
  seatingElements: SeatingElement[];
  smsAlertsEnabled: boolean;
  setSmsAlertsEnabled: (enabled: boolean) => void;
  smsLog: { id: string; recipient: string; message: string; timestamp: string }[];
  addInquiry: (inquiry: Omit<Inquiry, "id" | "status" | "createdAt">) => void;
  updateInquiryQuote: (id: string, quotePrice: string, quoteNotes: string) => void;
  toggleVendorVerification: (vendorId: string) => void;
  toggleVendorDate: (vendorId: string, dateStr: string) => void;
  addCategory: (name: string, description: string) => void;
  deleteCategory: (id: string) => void;
  toggleChecklist: (id: string) => void;
  addChecklistItem: (title: string, category: string, dueDate: string) => void;
  addGuestItem: (name: string, side: "bride" | "groom", plusOne: boolean) => void;
  toggleGuestStatus: (id: string, status: "confirmed" | "pending" | "declined") => void;
  updateBudgetItem: (id: string, actual: number) => void;
  addSeatingElement: (name: string, type: SeatingElement["type"], capacity: number) => void;
  removeSeatingElement: (id: string) => void;
  updateSeatingElementPosition: (id: string, x: number, y: number) => void;
  assignGuestToSeat: (guestId: string, tableId: string) => void;
  unassignGuestFromSeat: (guestId: string) => void;
  sendSmsBroadcast: (targetGroup: string, message: string) => void;
  broadcastRequests: BroadcastRequest[];
  vendorQuotes: VendorQuote[];
  addBroadcastRequest: (req: Omit<BroadcastRequest, "id" | "createdAt" | "status">) => void;
  submitVendorQuote: (quote: Omit<VendorQuote, "id" | "createdAt" | "status">) => void;
  acceptQuote: (quoteId: string) => void;
}

const INITIAL_CATEGORIES: Category[] = [
  { id: "1", name: "تالار و باغ تشریفات", iconName: "Building2", count: 42, description: "تالارهای مجلل، باغ تالارها و ویلاهای اختصاصی عروسی" },
  { id: "2", name: "آتلیه و فیلمبرداری", iconName: "Camera", count: 35, description: "عکاسی و فیلمبرداری حرفه‌ای سینمایی و فرمالیته" },
  { id: "3", name: "سالن زیبایی و آرایشگاه", iconName: "Sparkles", count: 58, description: "گریم تخصصی عروس، میکاپ و شینینون" },
  { id: "4", name: "مزون عروس و لباس داماد", iconName: "Shirt", count: 29, description: "لباس عروس سفارشی، کت و شلوار داماد و اکسسوری" },
  { id: "5", name: "گل‌آرایی و ماشین عروس", iconName: "Flower2", count: 24, description: "دیزاین گل سفره عقد، ماشین عروس و دسته گل" },
  { id: "6", name: "موسیقی و دی‌جی", iconName: "Music", count: 18, description: "گروه موزیک زنده، نورپردازی و دی‌جی حرفه‌ای" },
];

const INITIAL_VENDORS: Vendor[] = [
  {
    id: "v1",
    name: "باغ تالار تشریفاتی رویال اسپیناس",
    category: "تالار و باغ تشریفات",
    city: "تهران",
    address: "تهران، منطقه لواسانات، خروجی اول",
    phone: "۰۲۱-۲۲۳۳۴۴۵۵",
    rating: 4.9,
    reviewCount: 128,
    isVerified: true,
    priceRange: "۸۰ تا ۱۵۰ میلیون تومان",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      { id: "p1", title: "پکیج طلایی (VIP)", price: "۱۲۰,۰۰۰,۰۰۰ تومان", features: ["ظرفیت تا ۳۰۰ نفر", "منوی شام ۴ رنگ VIP", "موزیک زنده + نورپردازی", "گل‌آرایی طبیعی سالن و ورودی"] },
      { id: "p2", title: "پکیج نقره‌ای", price: "۸۵,۰۰۰,۰۰۰ تومان", features: ["ظرفیت تا ۲۰۰ نفر", "منوی شام ۲ رنگ", "دی‌جی حرفه‌ای", "شمع‌آرایی ورودی"] }
    ],
    description: "باغ تالار تشریفاتی رویال اسپیناس با فضای سرسبز ۶۰۰۰ متری و سالن‌های بدون ستون مجلل، آماده برگزاری باشکوه‌ترین شب زندگی شماست.",
    bookedDates: ["1403-02-15", "1403-02-20", "1403-03-01", "2025-05-15", "2025-05-20"]
  },
  {
    id: "v2",
    name: "استودیو عکاسی و فیلمبرداری لنز طلایی",
    category: "آتلیه و فیلمبرداری",
    city: "تهران",
    address: "تهران، سعادت آباد، خیابان سرو غربی",
    phone: "۰۲۱-۸۸۹۹۷۷۶۶",
    rating: 4.8,
    reviewCount: 94,
    isVerified: true,
    priceRange: "۳۵ تا ۷۰ میلیون تومان",
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      { id: "p3", title: "پکیج فیلمبرداری ۴K سینمایی", price: "۴۵,۰۰۰,۰۰۰ تومان", features: ["۲ دوربین Sony Alpha FX3", "تصویربرداری هلی‌شات", "آلبوم دیجیتال ایتالیایی 80x40", "کلیپ فرمالیته شمال/شمال‌غرب"] }
    ],
    description: "استودیو لنز طلایی با کادر مجرب خانم و آقا، ثبت نامیرا و عاشقانه لحظات شما را تضمین می‌کند.",
    bookedDates: ["2025-05-18", "2025-06-05"]
  },
  {
    id: "v3",
    name: "سالن زیبایی میکاپ VIP پرنسس",
    category: "سالن زیبایی و آرایشگاه",
    city: "شیراز",
    address: "شیراز، خیابان قصردشت، نبش کوچه ۱۴",
    phone: "۰۷۱-۳۶۲۸۰۰۰۰",
    rating: 4.7,
    reviewCount: 62,
    isVerified: false,
    priceRange: "۲۰ تا ۴۰ میلیون تومان",
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      { id: "p4", title: "پکیج میکاپ سوپر VIP عروس", price: "۳۰,۰۰۰,۰۰۰ تومان", features: ["پاکسازی و فشیال تخصصی پوست", "میکاپ با برندهای Estée Lauder و Dior", "شینیون تخصصی", "تاج و تور اختصاصی"] }
    ],
    description: "تخصصی‌ترین مرکز گریم و میکاپ عروس در جنوب کشور با استفاده از متریال ماندگار ۱۲ ساعته.",
    bookedDates: ["2025-05-22"]
  },
  {
    id: "v4",
    name: "مزون تخصصی عروس الگانس",
    category: "مزون عروس و لباس داماد",
    city: "اصفهان",
    address: "اصفهان، خیابان نظر شرقی، مجتمع پارس",
    phone: "۰۳۱-۳۶۶۶۱۱۲۲",
    rating: 4.9,
    reviewCount: 45,
    isVerified: true,
    priceRange: "۲۵ تا ۶۰ میلیون تومان",
    coverImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      { id: "p5", title: "طراحی و دوخت لباس عروس اختصاصی", price: "۴۵,۰۰۰,۰۰۰ تومان", features: ["پارچه فرانسوی و ترکیه‌ای اصلی", "دوخت سفارشی مطابق اندام", "تور و شنل هدیه", "۳ جلسه پرو تخصصی"] }
    ],
    description: "مزون الگانس ارائه دهنده جدیدترین کالکشن‌های اروپایی و دوخت سفارشی فاخر برای عروس‌های خاص پسند.",
    bookedDates: []
  }
];

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-1",
    vendorId: "v1",
    vendorName: "باغ تالار تشریفاتی رویال اسپیناس",
    coupleName: "سارا و علی",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    eventDate: "۱۴۰۴/۰۴/۱۵",
    guestCount: 250,
    budget: "۱۰۰ تا ۱۵۰ میلیون تومان",
    notes: "درخواست استعلام منوی VIP برای ۲۵۰ میهمان همراه با گل‌آرایی ورودی.",
    status: "pending",
    createdAt: "۱۴۰۳/۱۲/۰۱"
  },
  {
    id: "inq-2",
    vendorId: "v2",
    vendorName: "استودیو عکاسی و فیلمبرداری لنز طلایی",
    coupleName: "مریم و رضا",
    phone: "۰۹۱۹۸۷۶۵۴۳۲",
    eventDate: "۱۴۰۴/۰۵/۰۲",
    guestCount: 150,
    budget: "۴۰ میلیون تومان",
    notes: "استعلام قیمت فیلمبرداری فرمالیته در کویر.",
    status: "quoted",
    quotePrice: "۴۲,۰۰۰,۰۰۰ تومان",
    quoteNotes: "شامل ۲ رزرو هلی‌شات و تدوین کلیپ اختصاصی سینمایی.",
    createdAt: "۱۴۰۳/۱۱/۲۸"
  }
];

const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: "c1", title: "تعیین تاریخ تقریبی عروسی و بودجه کل", category: "مقدمات", completed: true, dueDate: "۱۲ ماه قبل" },
  { id: "c2", title: "رزرو باغ تالار یا ورودی سالن", category: "خدمات اصلی", completed: true, dueDate: "۹ ماه قبل" },
  { id: "c3", title: "انتخاب و قرارداد با آتلیه عکاسی", category: "خدمات اصلی", completed: false, dueDate: "۶ ماه قبل" },
  { id: "c4", title: "سفارش یا دوخت لباس عروس و کت داماد", category: "استایل", completed: false, dueDate: "۴ ماه قبل" },
  { id: "c5", title: "تنظیم لیست میهمانان و چاپ کارت دعوت", category: "مراسم", completed: false, dueDate: "۲ ماه قبل" },
  { id: "c6", title: "هماهنگی ماشین عروس و دسته گل", category: "جزئیات", completed: false, dueDate: "۲ هفته قبل" }
];

const INITIAL_GUESTS: GuestItem[] = [
  { id: "g1", name: "خانواده آقای محمدی", side: "groom", status: "confirmed", plusOne: true },
  { id: "g2", name: "دکتر حسینی و بانو", side: "bride", status: "confirmed", plusOne: true },
  { id: "g3", name: "مهندس احمدی", side: "groom", status: "pending", plusOne: false },
  { id: "g4", name: "خانم ناصری", side: "bride", status: "pending", plusOne: false },
  { id: "g5", name: "استاد کریمی", side: "groom", status: "confirmed", plusOne: true },
  { id: "g6", name: "خانواده رضایی", side: "bride", status: "confirmed", plusOne: true }
];

const INITIAL_SEATING_ELEMENTS: SeatingElement[] = [
  { id: "stg-1", name: "جایگاه عروس و داماد", type: "stage", capacity: 2, x: 40, y: 5, assignedGuestIds: [] },
  { id: "df-1", name: "سن رقص و نورپردازی", type: "dancefloor", capacity: 0, x: 35, y: 30, assignedGuestIds: [] },
  { id: "t-1", name: "میز گرد ۱ (وی‌آی‌پی)", type: "circular", capacity: 8, x: 10, y: 25, assignedGuestIds: ["g1", "g2"] },
  { id: "t-2", name: "میز گرد ۲", type: "circular", capacity: 8, x: 70, y: 25, assignedGuestIds: ["g5"] },
  { id: "t-3", name: "میز مستطیل افتخار", type: "rectangular", capacity: 10, x: 15, y: 65, assignedGuestIds: ["g6"] },
  { id: "ent-1", name: "ورودی اصلی سالن", type: "entrance", capacity: 0, x: 42, y: 85, assignedGuestIds: [] }
];

const INITIAL_BUDGET: BudgetItem[] = [
  { id: "b1", category: "تالار و پذیرایی", estimated: 120000000, actual: 115000000 },
  { id: "b2", category: "آتلیه و فیلمبرداری", estimated: 45000000, actual: 42000000 },
  { id: "b3", category: "لباس عروس و آرایشگاه", estimated: 50000000, actual: 48000000 },
  { id: "b4", category: "موزیک و نورپردازی", estimated: 25000000, actual: 0 }
];

const INITIAL_BROADCAST_REQUESTS: BroadcastRequest[] = [
  {
    id: "br-1",
    coupleName: "سارا و علی",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    category: "تالار و باغ تشریفات",
    city: "تهران",
    district: "شمال تهران / لواسان",
    eventDate: "۱۴۰۴/۰۶/۲۰",
    maxBudget: 130000000,
    guestCount: 250,
    stylePreferences: "تشریفات سینمایی VIP، گل‌آرایی طبیعی و شمع‌آرایی ورودی",
    notes: "نیازمند سالن بدون ستون با پارکینگ اختصاصی میهمانان.",
    createdAt: "۱۴۰۳/۱۲/۰۲",
    status: "open"
  },
  {
    id: "br-2",
    coupleName: "نرگس و کیوان",
    phone: "۰۹۱۹۸۷۶۵۴۳۲",
    category: "آتلیه و فیلمبرداری",
    city: "تهران",
    district: "سعادت آباد / شمال غربی",
    eventDate: "۱۴۰۴/۰۷/۱۰",
    maxBudget: 55000000,
    guestCount: 180,
    stylePreferences: "تصویربرداری ۴K سینمایی + هلی‌شات + آلبوم دیجیتال",
    notes: "فرمالیته کویر یا شمال مد نظر است.",
    createdAt: "۱۴۰۳/۱۲/۰۱",
    status: "open"
  }
];

const INITIAL_VENDOR_QUOTES: VendorQuote[] = [
  {
    id: "vq-1",
    requestId: "br-1",
    vendorId: "v1",
    vendorName: "باغ تالار تشریفاتی رویال اسپیناس",
    vendorLogo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80",
    vendorRating: 4.9,
    totalPrice: 125000000,
    validDays: 7,
    coverLetter: "پیش‌فاکتور رسمی پکیج سوپر VIP باغ تالار اسپیناس شامل ورودی، شام ۴ رنگ و گل‌آرایی کامل.",
    items: [
      { description: "ورودی باغ تالار و ورودی VIP میهمانان (۲۵۰ نفر)", price: 40000000 },
      { description: "منوی شام ۴ رنگ دیس‌پرس و بوفه سالاد اختصاصی", price: 55000000 },
      { description: "گل‌آرایی طبیعی جایگاه عروس و ورودی سالن", price: 18000000 },
      { description: "موزیک زنده، نورپردازی و آتش‌بازی ورودی", price: 12000000 }
    ],
    status: "pending",
    createdAt: "۱۴۰۳/۱۲/۰۲"
  },
  {
    id: "vq-2",
    requestId: "br-2",
    vendorId: "v2",
    vendorName: "استودیو عکاسی و فیلمبرداری لنز طلایی",
    vendorLogo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    vendorRating: 4.8,
    totalPrice: 48000000,
    validDays: 10,
    coverLetter: "پکیج فیلمبرداری سینمایی با ۲ دوربین Sony FX3 و هلی‌شات هوایی در فرمالیته.",
    items: [
      { description: "فیلمبرداری ۴K مراسم با دو دوربین و استابلیزر", price: 22000000 },
      { description: "تصویربرداری هلی‌شات فرمالیته کویر مرنجاب", price: 12000000 },
      { description: "آلبوم دیجیتال ژورنالی ۸۰ در ۴۰ ایتالیایی", price: 14000000 }
    ],
    status: "pending",
    createdAt: "۱۴۰۳/۱۲/۰۲"
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>("couple");
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [guests, setGuests] = useState<GuestItem[]>(INITIAL_GUESTS);
  const [budget, setBudget] = useState<BudgetItem[]>(INITIAL_BUDGET);
  const [seatingElements, setSeatingElements] = useState<SeatingElement[]>(INITIAL_SEATING_ELEMENTS);
  const [broadcastRequests, setBroadcastRequests] = useState<BroadcastRequest[]>(INITIAL_BROADCAST_REQUESTS);
  const [vendorQuotes, setVendorQuotes] = useState<VendorQuote[]>(INITIAL_VENDOR_QUOTES);
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState<boolean>(true);
  const [smsLog, setSmsLog] = useState<{ id: string; recipient: string; message: string; timestamp: string }[]>([
    { id: "s1", recipient: "۰۹۱۲۳۴۵۶۷۸۹", message: "استعلام جدیدی از زوج (سارا و علی) در عروسی تو دریافت شد.", timestamp: "۱۴۰۳/۱۲/۰۱ ۱۰:۳۰" }
  ]);

  const addInquiry = (inquiryData: Omit<Inquiry, "id" | "status" | "createdAt">) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      status: "pending",
      createdAt: new Date().toLocaleDateString("fa-IR")
    };
    setInquiries((prev) => [newInquiry, ...prev]);

    if (smsAlertsEnabled) {
      setSmsLog((prev) => [
        {
          id: `sms-${Date.now()}`,
          recipient: inquiryData.phone,
          message: `پیامک به تامین‌کننده: استعلام قیمت جدید از طرف ${inquiryData.coupleName} برای تاریخ ${inquiryData.eventDate}`,
          timestamp: new Date().toLocaleTimeString("fa-IR")
        },
        ...prev
      ]);
    }
  };

  const updateInquiryQuote = (id: string, quotePrice: string, quoteNotes: string) => {
    setInquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "quoted", quotePrice, quoteNotes }
          : item
      )
    );
  };

  const toggleVendorVerification = (vendorId: string) => {
    setVendors((prev) =>
      prev.map((v) => (v.id === vendorId ? { ...v, isVerified: !v.isVerified } : v))
    );
  };

  const toggleVendorDate = (vendorId: string, dateStr: string) => {
    setVendors((prev) =>
      prev.map((v) => {
        if (v.id !== vendorId) return v;
        const exists = v.bookedDates.includes(dateStr);
        const newDates = exists
          ? v.bookedDates.filter((d) => d !== dateStr)
          : [...v.bookedDates, dateStr];
        return { ...v, bookedDates: newDates };
      })
    );
  };

  const addCategory = (name: string, description: string) => {
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      name,
      description,
      iconName: "Sparkles",
      count: 0
    };
    setCategories((prev) => [...prev, newCat]);
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const toggleChecklist = (id: string) => {
    setChecklist((prev) =>
      prev.map((c) => (c.id === id ? { ...c, completed: !c.completed } : c))
    );
  };

  const addChecklistItem = (title: string, category: string, dueDate: string) => {
    setChecklist((prev) => [
      ...prev,
      { id: `chk-${Date.now()}`, title, category, completed: false, dueDate }
    ]);
  };

  const addGuestItem = (name: string, side: "bride" | "groom", plusOne: boolean) => {
    setGuests((prev) => [
      ...prev,
      { id: `gst-${Date.now()}`, name, side, status: "pending", plusOne }
    ]);
  };

  const toggleGuestStatus = (id: string, status: "confirmed" | "pending" | "declined") => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status } : g))
    );
  };

  const updateBudgetItem = (id: string, actual: number) => {
    setBudget((prev) =>
      prev.map((b) => (b.id === id ? { ...b, actual } : b))
    );
  };

  const addSeatingElement = (name: string, type: SeatingElement["type"], capacity: number) => {
    const newEl: SeatingElement = {
      id: `seat-${Date.now()}`,
      name,
      type,
      capacity,
      x: 20 + (seatingElements.length % 5) * 15,
      y: 40 + (seatingElements.length % 3) * 15,
      assignedGuestIds: []
    };
    setSeatingElements((prev) => [...prev, newEl]);
  };

  const removeSeatingElement = (id: string) => {
    setSeatingElements((prev) => prev.filter((el) => el.id !== id));
  };

  const updateSeatingElementPosition = (id: string, x: number, y: number) => {
    setSeatingElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, x, y } : el))
    );
  };

  const assignGuestToSeat = (guestId: string, tableId: string) => {
    setSeatingElements((prev) =>
      prev.map((table) => {
        // remove guest from all tables first
        const cleaned = table.assignedGuestIds.filter((gid) => gid !== guestId);
        if (table.id === tableId) {
          if (cleaned.length < table.capacity) {
            return { ...table, assignedGuestIds: [...cleaned, guestId] };
          }
        }
        return { ...table, assignedGuestIds: cleaned };
      })
    );
  };

  const unassignGuestFromSeat = (guestId: string) => {
    setSeatingElements((prev) =>
      prev.map((table) => ({
        ...table,
        assignedGuestIds: table.assignedGuestIds.filter((gid) => gid !== guestId)
      }))
    );
  };

  const sendSmsBroadcast = (targetGroup: string, message: string) => {
    setSmsLog((prev) => [
      {
        id: `sms-${Date.now()}`,
        recipient: `گروه target: ${targetGroup}`,
        message,
        timestamp: new Date().toLocaleTimeString("fa-IR")
      },
      ...prev
    ]);
  };

  const addBroadcastRequest = (req: Omit<BroadcastRequest, "id" | "createdAt" | "status">) => {
    const newReq: BroadcastRequest = {
      ...req,
      id: `br-${Date.now()}`,
      createdAt: new Date().toLocaleDateString("fa-IR"),
      status: "open"
    };
    setBroadcastRequests((prev) => [newReq, ...prev]);

    if (smsAlertsEnabled) {
      setSmsLog((prev) => [
        {
          id: `sms-${Date.now()}`,
          recipient: `تامین‌کنندگان گروه ${req.category} در ${req.city}`,
          message: `مناقصه جدید: زوج ${req.coupleName} درخواستی برای ${req.category} با سقف بودجه ${req.maxBudget.toLocaleString('fa-IR')} تومان ثبت کردند.`,
          timestamp: new Date().toLocaleTimeString("fa-IR")
        },
        ...prev
      ]);
    }
  };

  const submitVendorQuote = (quote: Omit<VendorQuote, "id" | "createdAt" | "status">) => {
    const newQuote: VendorQuote = {
      ...quote,
      id: `vq-${Date.now()}`,
      createdAt: new Date().toLocaleDateString("fa-IR"),
      status: "pending"
    };
    setVendorQuotes((prev) => [newQuote, ...prev]);

    if (smsAlertsEnabled) {
      setSmsLog((prev) => [
        {
          id: `sms-${Date.now()}`,
          recipient: `زوج درخواست دهنده`,
          message: `پیش‌فاکتور جدید از طرف ${quote.vendorName} ثبت شد. مبلغ کل: ${quote.totalPrice.toLocaleString('fa-IR')} تومان`,
          timestamp: new Date().toLocaleTimeString("fa-IR")
        },
        ...prev
      ]);
    }
  };

  const acceptQuote = (quoteId: string) => {
    setVendorQuotes((prev) =>
      prev.map((q) => (q.id === quoteId ? { ...q, status: "accepted" } : q))
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        vendors,
        categories,
        inquiries,
        checklist,
        guests,
        budget,
        smsAlertsEnabled,
        setSmsAlertsEnabled,
        smsLog,
        addInquiry,
        updateInquiryQuote,
        toggleVendorVerification,
        toggleVendorDate,
        addCategory,
        deleteCategory,
        toggleChecklist,
        addChecklistItem,
        addGuestItem,
        toggleGuestStatus,
        updateBudgetItem,
        seatingElements,
        addSeatingElement,
        removeSeatingElement,
        updateSeatingElementPosition,
        assignGuestToSeat,
        unassignGuestFromSeat,
        sendSmsBroadcast,
        broadcastRequests,
        vendorQuotes,
        addBroadcastRequest,
        submitVendorQuote,
        acceptQuote
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
