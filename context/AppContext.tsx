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

// CHAT & NOTIFICATION MODELS
export interface ChatMessage {
  id: string;
  conversationId: string;
  senderRole: "couple" | "vendor";
  senderName: string;
  text: string;
  attachmentUrl?: string;
  attachmentName?: string;
  timestamp: string;
}

export interface ChatConversation {
  id: string;
  coupleName: string;
  vendorId: string;
  vendorName: string;
  vendorLogo: string;
  lastMessage: string;
  lastTimestamp: string;
  unreadCount: number;
}

export interface NotificationItem {
  id: string;
  targetRole: "couple" | "vendor" | "admin";
  title: string;
  description: string;
  type: "inquiry" | "quote" | "message" | "reminder";
  timestamp: string;
  isRead: boolean;
}

export interface SmsGatewayConfig {
  provider: "kavenegar" | "ghasedak";
  apiKey: string;
  senderLine: string;
  triggerInquirySms: boolean;
  triggerQuoteSms: boolean;
  triggerBookingReminder: boolean;
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

  // MESSAGING & NOTIFICATION CONTEXT
  conversations: ChatConversation[];
  messages: ChatMessage[];
  notifications: NotificationItem[];
  smsGatewayConfig: SmsGatewayConfig;
  sendChatMessage: (conversationId: string, text: string, senderRole: "couple" | "vendor", attachmentUrl?: string, attachmentName?: string) => void;
  markNotificationRead: (id: string) => void;
  updateSmsGatewayConfig: (config: Partial<SmsGatewayConfig>) => void;
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
  }
];

const INITIAL_CONVERSATIONS: ChatConversation[] = [
  {
    id: "conv-1",
    coupleName: "سارا و علی",
    vendorId: "v1",
    vendorName: "باغ تالار تشریفاتی رویال اسپیناس",
    vendorLogo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80",
    lastMessage: "سلام، جزییات منوی VIP برای تاریخ ۱۵ تیر ارسال شد.",
    lastTimestamp: "۱۰:۴۵",
    unreadCount: 1
  },
  {
    id: "conv-2",
    coupleName: "مریم و رضا",
    vendorId: "v2",
    vendorName: "استودیو عکاسی لنز طلایی",
    vendorLogo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    lastMessage: "امکان رزرو هلی‌شات برای فرمالیته وجود دارد؟",
    lastTimestamp: "دیروز",
    unreadCount: 0
  }
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "m-1",
    conversationId: "conv-1",
    senderRole: "couple",
    senderName: "سارا و علی",
    text: "سلام وقت بخیر، آیا تاریخ ۱۵ تیرماه سالن VIP شما خالی است؟",
    timestamp: "۱۰:۳۰"
  },
  {
    id: "m-2",
    conversationId: "conv-1",
    senderRole: "vendor",
    senderName: "رویال اسپیناس",
    text: "سلام، بله این تاریخ آزاد است. جزییات منوی VIP و کاتالوگ پکیج خدمت شما ارسال شد.",
    attachmentUrl: "#",
    attachmentName: "پکیج_تشریفات_VIP_اسپیناس.pdf",
    timestamp: "۱۰:۴۵"
  }
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-1",
    targetRole: "vendor",
    title: "استعلام قیمت جدید",
    description: "زوج محترم (سارا و علی) استعلام جدیدی برای تاریخ ۱۴۰۴/۰۴/۱۵ ثبت کردند.",
    type: "inquiry",
    timestamp: "۱۰ دقیقه پیش",
    isRead: false
  },
  {
    id: "notif-2",
    targetRole: "couple",
    title: "صدور پیش‌فاکتور رسمی",
    description: "مجموعه رویال اسپیناس پیش‌فاکتور پیشنهادی خود را صادر کرد.",
    type: "quote",
    timestamp: "۱ ساعت پیش",
    isRead: false
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>("couple");
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [guests, setGuests] = useState<GuestItem[]>([]);
  const [budget, setBudget] = useState<BudgetItem[]>([]);
  const [seatingElements, setSeatingElements] = useState<SeatingElement[]>([]);
  const [broadcastRequests, setBroadcastRequests] = useState<BroadcastRequest[]>([]);
  const [vendorQuotes, setVendorQuotes] = useState<VendorQuote[]>([]);
  const [conversations, setConversations] = useState<ChatConversation[]>(INITIAL_CONVERSATIONS);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [smsGatewayConfig, setSmsGatewayConfig] = useState<SmsGatewayConfig>({
    provider: "kavenegar",
    apiKey: "kv-98234-x89123-demo-key",
    senderLine: "10008400",
    triggerInquirySms: true,
    triggerQuoteSms: true,
    triggerBookingReminder: true
  });

  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState<boolean>(true);
  const [smsLog, setSmsLog] = useState<{ id: string; recipient: string; message: string; timestamp: string }[]>([
    { id: "s1", recipient: "۰۹۱۲۳۴۵۶۷۸۹", message: "تست سامانه کاوه‌نگار: استعلام جدید از زوج سارا و علی ثبت گردید.", timestamp: "۱۰:۳۰" }
  ]);

  const addInquiry = (inquiryData: Omit<Inquiry, "id" | "status" | "createdAt">) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      status: "pending",
      createdAt: new Date().toLocaleDateString("fa-IR")
    };
    setInquiries((prev) => [newInquiry, ...prev]);

    if (smsGatewayConfig.triggerInquirySms) {
      setSmsLog((prev) => [
        {
          id: `sms-${Date.now()}`,
          recipient: inquiryData.phone,
          message: `[سامانه ${smsGatewayConfig.provider}] پیامک ارسالی: استعلام جدید از طرف ${inquiryData.coupleName} برای ${inquiryData.eventDate}`,
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
    setCategories((prev) => [...prev, { id: `cat-${Date.now()}`, name, description, iconName: "Sparkles", count: 0 }]);
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const toggleChecklist = (id: string) => {
    setChecklist((prev) => prev.map((c) => (c.id === id ? { ...c, completed: !c.completed } : c)));
  };

  const addChecklistItem = (title: string, category: string, dueDate: string) => {
    setChecklist((prev) => [...prev, { id: `chk-${Date.now()}`, title, category, completed: false, dueDate }]);
  };

  const addGuestItem = (name: string, side: "bride" | "groom", plusOne: boolean) => {
    setGuests((prev) => [...prev, { id: `gst-${Date.now()}`, name, side, status: "pending", plusOne }]);
  };

  const toggleGuestStatus = (id: string, status: "confirmed" | "pending" | "declined") => {
    setGuests((prev) => prev.map((g) => (g.id === id ? { ...g, status } : g)));
  };

  const updateBudgetItem = (id: string, actual: number) => {
    setBudget((prev) => prev.map((b) => (b.id === id ? { ...b, actual } : b)));
  };

  const addSeatingElement = (name: string, type: SeatingElement["type"], capacity: number) => {
    setSeatingElements((prev) => [
      ...prev,
      { id: `seat-${Date.now()}`, name, type, capacity, x: 20, y: 20, assignedGuestIds: [] }
    ]);
  };

  const removeSeatingElement = (id: string) => {
    setSeatingElements((prev) => prev.filter((el) => el.id !== id));
  };

  const updateSeatingElementPosition = (id: string, x: number, y: number) => {
    setSeatingElements((prev) => prev.map((el) => (el.id === id ? { ...el, x, y } : el)));
  };

  const assignGuestToSeat = (guestId: string, tableId: string) => {
    setSeatingElements((prev) =>
      prev.map((table) => {
        const cleaned = table.assignedGuestIds.filter((gid) => gid !== guestId);
        if (table.id === tableId && cleaned.length < table.capacity) {
          return { ...table, assignedGuestIds: [...cleaned, guestId] };
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
      { id: `sms-${Date.now()}`, recipient: targetGroup, message, timestamp: new Date().toLocaleTimeString("fa-IR") },
      ...prev
    ]);
  };

  const addBroadcastRequest = (req: Omit<BroadcastRequest, "id" | "createdAt" | "status">) => {
    const newReq: BroadcastRequest = { ...req, id: `br-${Date.now()}`, createdAt: new Date().toLocaleDateString("fa-IR"), status: "open" };
    setBroadcastRequests((prev) => [newReq, ...prev]);
  };

  const submitVendorQuote = (quote: Omit<VendorQuote, "id" | "createdAt" | "status">) => {
    const newQuote: VendorQuote = { ...quote, id: `vq-${Date.now()}`, createdAt: new Date().toLocaleDateString("fa-IR"), status: "pending" };
    setVendorQuotes((prev) => [newQuote, ...prev]);
  };

  const acceptQuote = (quoteId: string) => {
    setVendorQuotes((prev) => prev.map((q) => (q.id === quoteId ? { ...q, status: "accepted" } : q)));
  };

  // CHAT ACTIONS
  const sendChatMessage = (conversationId: string, text: string, senderRole: "couple" | "vendor", attachmentUrl?: string, attachmentName?: string) => {
    const newMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      conversationId,
      senderRole,
      senderName: senderRole === "couple" ? "زوج محترم" : "پشتیبانی تامین‌کننده",
      text,
      attachmentUrl,
      attachmentName,
      timestamp: new Date().toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, newMsg]);

    // Update conversation last message
    setConversations((prev) =>
      prev.map((c) => (c.id === conversationId ? { ...c, lastMessage: text, lastTimestamp: newMsg.timestamp } : c))
    );
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
  };

  const updateSmsGatewayConfig = (config: Partial<SmsGatewayConfig>) => {
    setSmsGatewayConfig((prev) => ({ ...prev, ...config }));
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
        acceptQuote,
        conversations,
        messages,
        notifications,
        smsGatewayConfig,
        sendChatMessage,
        markNotificationRead,
        updateSmsGatewayConfig
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
