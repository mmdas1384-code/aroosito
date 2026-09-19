"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  Users,
  FolderTree,
  BarChart3,
  Send,
  Plus,
  Trash2,
  Download,
  CheckCircle2,
  XCircle,
  Search,
  MessageSquare,
  Sparkles,
  Radio,
  Key,
  Server,
  Bell,
  Edit,
  Eye,
  EyeOff,
  AlertTriangle,
  Building2,
  Camera,
  Shirt,
  Flower2,
  Music,
  Utensils,
  Scissors,
  Car,
  Crown,
  Gift,
  Heart,
  Globe
} from "lucide-react";

const CATEGORY_ICONS = [
  { name: "Building2", label: "تالار / ساختمان", Icon: Building2 },
  { name: "Camera", label: "آتلیه / دوربین", Icon: Camera },
  { name: "Sparkles", label: "زیبایی / درخشش", Icon: Sparkles },
  { name: "Shirt", label: "مزون / لباس", Icon: Shirt },
  { name: "Flower2", label: "گل‌آرایی", Icon: Flower2 },
  { name: "Music", label: "موزیک / دی‌جی", Icon: Music },
  { name: "Utensils", label: "کترینگ / تشریفات", Icon: Utensils },
  { name: "Scissors", label: "آرایشگاه / گریم", Icon: Scissors },
  { name: "Car", label: "ماشین عروس", Icon: Car },
  { name: "Crown", label: "تاج و اکسسوری", Icon: Crown },
  { name: "Gift", label: "گیفت و هدایا", Icon: Gift },
  { name: "Heart", label: "خدمات ویژه", Icon: Heart },
];

function RenderCategoryIcon({ iconName, className = "w-5 h-5" }: { iconName: string; className?: string }) {
  const match = CATEGORY_ICONS.find((i) => i.name === iconName);
  const IconComponent = match ? match.Icon : FolderTree;
  return <IconComponent className={className} />;
}

export default function AdminDashboardPage() {
  const {
    vendors,
    toggleVendorVerification,
    categories,
    addCategory,
    updateCategory,
    toggleCategoryStatus,
    deleteCategory,
    inquiries,
    smsLog,
    sendSmsBroadcast,
    smsGatewayConfig,
    updateSmsGatewayConfig,
    reviews,
    moderateReview,
    deleteReview,
    vendorApplications,
    approveVendorApplication,
    rejectVendorApplication
  } = useApp();

  const [activeTab, setActiveTab] = useState<"applications" | "verification" | "reviews" | "categories" | "users" | "analytics" | "sms" | "gateway">("applications");

  // Category Manager Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [deletingCatId, setDeletingCatId] = useState<string | null>(null);

  // Category Form State
  const [catFormData, setCatFormData] = useState({
    name: "",
    slug: "",
    iconName: "Building2",
    description: "",
    seoText: "",
    isActive: true
  });

  // SMS Broadcast Form State
  const [smsTargetGroup, setSmsTargetGroup] = useState("همه تامین‌کنندگان");
  const [smsMessage, setSmsMessage] = useState("");
  const [smsSuccess, setSmsSuccess] = useState(false);

  // SMS Gateway Config Form State
  const [gatewayProvider, setGatewayProvider] = useState<"kavenegar" | "ghasedak">(smsGatewayConfig.provider);
  const [gatewayApiKey, setGatewayApiKey] = useState(smsGatewayConfig.apiKey);
  const [gatewaySenderLine, setGatewaySenderLine] = useState(smsGatewayConfig.senderLine);

  // Auto-generate slug from Persian name
  const generateSlug = (name: string) => {
    return name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u0600-\u06FF\-]/g, "");
  };

  const handleOpenAddModal = () => {
    setEditingCatId(null);
    setCatFormData({
      name: "",
      slug: "",
      iconName: "Building2",
      description: "",
      seoText: "",
      isActive: true
    });
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (cat: typeof categories[0]) => {
    setEditingCatId(cat.id);
    setCatFormData({
      name: cat.name,
      slug: cat.slug || generateSlug(cat.name),
      iconName: cat.iconName || "Building2",
      description: cat.description || "",
      seoText: cat.seoText || "",
      isActive: cat.isActive !== false
    });
    setIsAddModalOpen(true);
  };

  const handleSaveCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!catFormData.name.trim()) return;

    const slug = catFormData.slug.trim() || generateSlug(catFormData.name);

    if (editingCatId) {
      updateCategory(editingCatId, {
        name: catFormData.name,
        slug,
        iconName: catFormData.iconName,
        description: catFormData.description,
        seoText: catFormData.seoText,
        isActive: catFormData.isActive
      });
    } else {
      addCategory({
        name: catFormData.name,
        slug,
        iconName: catFormData.iconName,
        description: catFormData.description,
        seoText: catFormData.seoText,
        isActive: catFormData.isActive
      });
    }

    setIsAddModalOpen(false);
    setEditingCatId(null);
  };

  const handleConfirmDeleteCategory = () => {
    if (deletingCatId) {
      deleteCategory(deletingCatId);
      setDeletingCatId(null);
    }
  };

  const handleSendSmsBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsMessage.trim()) return;
    sendSmsBroadcast(smsTargetGroup, smsMessage);
    setSmsSuccess(true);
    setTimeout(() => {
      setSmsSuccess(false);
      setSmsMessage("");
    }, 2000);
  };

  const handleSaveSmsGateway = (e: React.FormEvent) => {
    e.preventDefault();
    updateSmsGatewayConfig({
      provider: gatewayProvider,
      apiKey: gatewayApiKey,
      senderLine: gatewaySenderLine
    });
  };

  // Mock export directory function
  const handleExportDirectory = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "نام تامین‌کننده,دسته‌بندی,شهر,شماره همراه,وضعیت تاییدیه\n" +
      vendors.map(v => `${v.name},${v.category},${v.city},${v.phone},${v.isVerified ? "تایید شده" : "در انتظار"}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "aroosito_directory.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Admin Header Banner */}
          <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-graphite">پنل مدیریت ارشد عروسی تو</h1>
                <p className="text-xs text-secondary mt-0.5">کنترل هویت تامین‌کنندگان، دسته‌بندی‌ها، دایرکتوری، درگاه SMS و مرکز پیام</p>
              </div>
            </div>

            <button
              onClick={handleExportDirectory}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>خروجی اکسل/CSV دایرکتوری</span>
            </button>
          </div>

          {/* Admin Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 border-b border-accent pb-2">
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all relative ${
                activeTab === "applications"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>درخواست‌های عضویت کسب‌وکارها ({vendorApplications.filter(a => a.status === "pending").length})</span>
              {vendorApplications.filter(a => a.status === "pending").length > 0 && (
                <span className="bg-rose-500 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                  {vendorApplications.filter(a => a.status === "pending").length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("verification")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "verification"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>تایید هویت و نشان اعتبارسنجی</span>
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "reviews"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-amber-500" />
              <span>نظارت بر دیدگاه‌ها و نظرات ({reviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("categories")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "categories"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <FolderTree className="w-4 h-4" />
              <span>مدیریت دسته‌بندی‌های شغلی ({categories.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "users"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>دایرکتوری زنده کاربران</span>
            </button>

            <button
              onClick={() => setActiveTab("sms")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "sms"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Send className="w-4 h-4" />
              <span>ارسال پیامک سیستم</span>
            </button>

            <button
              onClick={() => setActiveTab("gateway")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "gateway"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Server className="w-4 h-4 text-emerald-400" />
              <span>تنظیمات درگاه پیامک (کاوه‌نگار / قاصدک)</span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "analytics"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>گزارش‌گیری</span>
            </button>
          </div>

          {/* TAB: SMS GATEWAY CONTROL PANEL */}
          {activeTab === "gateway" && (
            <div className="space-y-6">
              <form onSubmit={handleSaveSmsGateway} className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-accent pb-4">
                  <div className="flex items-center gap-2">
                    <Server className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-extrabold text-base text-graphite">تنظیمات درگاه ارسال پیامک خودکار (SMS Gateway)</h3>
                      <p className="text-xs text-secondary mt-0.5">اتصال مستقیم به پنل‌های کاوه‌نگار یا قاصدک جهت ارسال پیامک کد تایید و اطلاع‌رسانی</p>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs border border-emerald-200">
                    درگاه فعال: {smsGatewayConfig.provider.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-graphite mb-1.5">انتخاب وب‌سرویس پیامک:</label>
                    <select
                      value={gatewayProvider}
                      onChange={(e: any) => setGatewayProvider(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent font-bold bg-bg-custom"
                    >
                      <option value="kavenegar">کاوه‌نگار (Kavenegar WebService)</option>
                      <option value="ghasedak">قاصدک (Ghasedak SMS API)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1.5">کلید اختصاصی API Key:</label>
                    <input
                      type="text"
                      value={gatewayApiKey}
                      onChange={(e) => setGatewayApiKey(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1.5">خط اختصاصی ارسال‌کننده:</label>
                    <input
                      type="text"
                      value={gatewaySenderLine}
                      onChange={(e) => setGatewaySenderLine(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent font-mono text-left dir-ltr bg-white"
                    />
                  </div>
                </div>

                {/* Triggers Settings */}
                <div className="space-y-3 pt-4 border-t border-accent text-xs">
                  <h4 className="font-bold text-graphite">محرک‌های خودکار ارسال SMS:</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label className="bg-bg-custom p-3.5 rounded-xl border border-accent flex items-center justify-between cursor-pointer">
                      <span className="font-medium text-graphite">ارسال SMS هنگام ثبت استعلام جدید</span>
                      <input
                        type="checkbox"
                        checked={smsGatewayConfig.triggerInquirySms}
                        onChange={(e) => updateSmsGatewayConfig({ triggerInquirySms: e.target.checked })}
                        className="w-4 h-4 text-primary rounded"
                      />
                    </label>

                    <label className="bg-bg-custom p-3.5 rounded-xl border border-accent flex items-center justify-between cursor-pointer">
                      <span className="font-medium text-graphite">ارسال SMS هنگام صادر شدن پیش‌فاکتور</span>
                      <input
                        type="checkbox"
                        checked={smsGatewayConfig.triggerQuoteSms}
                        onChange={(e) => updateSmsGatewayConfig({ triggerQuoteSms: e.target.checked })}
                        className="w-4 h-4 text-primary rounded"
                      />
                    </label>

                    <label className="bg-bg-custom p-3.5 rounded-xl border border-accent flex items-center justify-between cursor-pointer">
                      <span className="font-medium text-graphite">ارسال یادآوری رزرو ۳ روز قبل مراسم</span>
                      <input
                        type="checkbox"
                        checked={smsGatewayConfig.triggerBookingReminder}
                        onChange={(e) => updateSmsGatewayConfig({ triggerBookingReminder: e.target.checked })}
                        className="w-4 h-4 text-primary rounded"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>ذخیره تنظیمات درگاه پیامک</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: VENDOR ONBOARDING APPLICATIONS */}
          {activeTab === "applications" && (
            <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden space-y-4">
              <div className="p-6 border-b border-accent flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">درخواست‌های معلق عضویت کسب‌وکارها (Pending Vendors)</h3>
                  <p className="text-xs text-secondary mt-0.5">بررسی مدارک، اطلاعات مدیریت و تایید یا رد سریع درخواست‌های ثبت‌نام جدید</p>
                </div>
                <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                  {vendorApplications.filter(a => a.status === "pending").length} درخواست جدید
                </span>
              </div>

              <div className="divide-y divide-accent/60">
                {vendorApplications.length === 0 ? (
                  <div className="p-12 text-center text-xs text-secondary">هیچ درخواستی در صف ثبت‌نام وجود ندارد.</div>
                ) : (
                  vendorApplications.map((app) => (
                    <div key={app.id} className="p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                            🏢
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-graphite text-base">{app.businessName}</h4>
                              <span className="text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-bold">
                                {app.category}
                              </span>
                            </div>
                            <p className="text-xs text-secondary mt-1">
                              مکان: {app.province}، {app.city} • تاریخ ثبت: {app.createdAt}
                            </p>
                          </div>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          app.status === "approved"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : app.status === "rejected"
                            ? "bg-rose-50 text-rose-800 border-rose-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}>
                          {app.status === "approved" ? "تایید شده (دارای پنل)" : app.status === "rejected" ? "رد شده" : "در انتظار بررسی"}
                        </span>
                      </div>

                      {/* Detail Info Card */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-bg-custom p-4 rounded-2xl border border-accent text-xs">
                        <div>
                          <span className="block font-bold text-secondary">مدیریت مجموعه:</span>
                          <span className="font-bold text-graphite text-sm">{app.managerName}</span>
                          <span className="block text-secondary mt-1 dir-ltr text-right">موبایل: {app.phone}</span>
                          {app.landline && <span className="block text-secondary dir-ltr text-right">ثابت: {app.landline}</span>}
                        </div>

                        <div>
                          <span className="block font-bold text-secondary">اینستاگرام / وب‌سایت:</span>
                          <span className="font-bold text-primary dir-ltr text-right block">{app.instagram || "ثبت نشده"}</span>
                          <span className="block font-bold text-secondary mt-2">حدود قیمت:</span>
                          <span className="font-bold text-graphite">{app.priceRange}</span>
                        </div>

                        <div>
                          <span className="block font-bold text-secondary">شرح خدمات:</span>
                          <p className="text-graphite line-clamp-2">{app.description}</p>
                        </div>
                      </div>

                      {/* Document Preview & Action buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        {app.licenseUrl && (
                          <a
                            href={app.licenseUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                          >
                            <span>مشاهده پیش‌نمایش تصویر جواز/لوگو ↗</span>
                          </a>
                        )}

                        {app.status === "pending" && (
                          <div className="flex items-center gap-3 mr-auto">
                            <button
                              onClick={() => approveVendorApplication(app.id)}
                              className="bg-primary hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                              <span>تایید و ایجاد پنل اختصاصی</span>
                            </button>

                            <button
                              onClick={() => rejectVendorApplication(app.id)}
                              className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white px-4 py-2.5 rounded-xl border border-rose-200 font-bold text-xs transition-colors"
                            >
                              رد درخواست
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 1: VERIFICATION & BADGING */}
          {activeTab === "verification" && (
            <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden">
              <div className="p-6 border-b border-accent">
                <h3 className="text-lg font-bold text-graphite">بررسی مدارک و اعطای "تاییدیه رسمی عروسی تو"</h3>
                <p className="text-xs text-secondary mt-0.5">با فعال‌سازی این نشان، مدال تاییدیه اعتبارسنجی روی پروفایل عمومی تامین‌کننده نمایش داده خواهد شد.</p>
              </div>

              <div className="divide-y divide-accent/60">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={vendor.logo} alt={vendor.name} className="w-12 h-12 rounded-xl object-cover border border-accent" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-graphite text-sm">{vendor.name}</h4>
                          <span className="text-xs text-secondary bg-bg-custom px-2 py-0.5 rounded border border-accent">{vendor.category}</span>
                        </div>
                        <p className="text-xs text-secondary mt-0.5">{vendor.city} • تلفن: {vendor.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleVendorVerification(vendor.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          vendor.isVerified
                            ? "bg-primary text-white shadow-xs"
                            : "bg-bg-custom border border-accent text-graphite hover:border-primary"
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>{vendor.isVerified ? "دارای تاییدیه رسمی (فعال)" : "اعطای تاییدیه رسمی"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: REVIEW MODERATION PANEL */}
          {activeTab === "reviews" && (
            <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden space-y-4">
              <div className="p-6 border-b border-accent flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">مدیریت و نظارت بر نظرات و امتیازات کاربر/زوج</h3>
                  <p className="text-xs text-secondary mt-0.5">تایید، رد یا حذف دیدگاه‌های ارسالی کاربران قبل از انتشار عمومی</p>
                </div>
                <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                  {reviews.filter(r => r.status === "pending").length} نظر در انتظار بررسی
                </span>
              </div>

              <div className="divide-y divide-accent/60">
                {reviews.map((rev) => {
                  const targetVendor = vendors.find(v => v.id === rev.vendorId);
                  return (
                    <div key={rev.id} className="p-6 space-y-3">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-graphite">{rev.authorName}</span>
                          <span className="text-xs text-secondary">برای: {targetVendor?.name || "تامین‌کننده"}</span>
                          {rev.isVerifiedCustomer && (
                            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                              مشتری تایید شده
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                            rev.status === "approved"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : rev.status === "rejected"
                              ? "bg-rose-50 text-rose-800 border-rose-200"
                              : "bg-amber-50 text-amber-800 border-amber-200"
                          }`}>
                            {rev.status === "approved" ? "تایید شده" : rev.status === "rejected" ? "رد شده" : "در انتظار تایید"}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-graphite/80 font-medium bg-bg-custom p-3 rounded-xl border border-accent">
                        "{rev.comment}"
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
                        <div className="flex gap-4 text-secondary font-medium">
                          <span>کیفیت: {rev.serviceQuality}</span>
                          <span>وقت‌شناسی: {rev.punctuality}</span>
                          <span>ارزش: {rev.valueForMoney}</span>
                          <span>تاریخ: {rev.createdAt}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => moderateReview(rev.id, "approved")}
                            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-lg border border-emerald-200 font-bold text-xs transition-colors"
                          >
                            تایید دیدگاه
                          </button>
                          <button
                            onClick={() => moderateReview(rev.id, "rejected")}
                            className="bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-lg border border-amber-200 font-bold text-xs transition-colors"
                          >
                            رد دیدگاه
                          </button>
                          <button
                            onClick={() => deleteReview(rev.id)}
                            className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white px-3 py-1.5 rounded-lg border border-rose-200 font-bold text-xs transition-colors"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: CATEGORY MANAGER */}
          {activeTab === "categories" && (
            <div className="space-y-6">
              {/* Top Action Bar */}
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-graphite">مدیریت پویای دسته‌بندی‌های شغلی</h3>
                  <p className="text-xs text-secondary mt-1">
                    تعریف، ویرایش، تغییر آیکون، تنظیمات SEO و تغییر وضعیت فعال/غیرفعال دسته‌بندی‌ها (بازتاب زنده در تمام پلتفرم)
                  </p>
                </div>

                <button
                  onClick={handleOpenAddModal}
                  className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن دسته‌بندی جدید</span>
                </button>
              </div>

              {/* Categories Grid Table */}
              <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-bg-custom text-secondary border-b border-accent font-bold">
                      <tr>
                        <th className="p-4">آیکون و نام دسته‌بندی</th>
                        <th className="p-4">نام لاتین / اسلاگ (Slug)</th>
                        <th className="p-4">تعداد کسب‌وکارها</th>
                        <th className="p-4">توضیحات و سئو</th>
                        <th className="p-4">وضعیت</th>
                        <th className="p-4 text-center">عملیات مدیریت</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/60">
                      {categories.map((cat) => {
                        const vendorCount = vendors.filter((v) => v.category === cat.name).length;
                        return (
                          <tr key={cat.id} className="hover:bg-bg-custom/50 transition-colors">
                            <td className="p-4 font-bold text-graphite">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                  <RenderCategoryIcon iconName={cat.iconName} className="w-5 h-5" />
                                </div>
                                <div>
                                  <span className="block font-extrabold text-sm">{cat.name}</span>
                                  <span className="text-[10px] text-secondary">آیکون: {cat.iconName}</span>
                                </div>
                              </div>
                            </td>

                            <td className="p-4 font-mono text-secondary dir-ltr text-right">
                              <span className="bg-bg-custom px-2.5 py-1 rounded-md border border-accent">
                                /{cat.slug || cat.name.replace(/\s+/g, "-")}
                              </span>
                            </td>

                            <td className="p-4 font-bold text-graphite">
                              <span className="bg-emerald-50 text-primary px-3 py-1 rounded-full border border-emerald-200">
                                {vendorCount} کسب‌وکار
                              </span>
                            </td>

                            <td className="p-4 max-w-xs">
                              <p className="font-semibold text-graphite truncate">{cat.description || "بدون توضیح"}</p>
                              {cat.seoText && (
                                <p className="text-[10px] text-secondary truncate mt-0.5">SEO: {cat.seoText}</p>
                              )}
                            </td>

                            <td className="p-4">
                              <button
                                onClick={() => toggleCategoryStatus(cat.id)}
                                className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1.5 ${
                                  cat.isActive !== false
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                                    : "bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100"
                                }`}
                              >
                                {cat.isActive !== false ? (
                                  <>
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>فعال</span>
                                  </>
                                ) : (
                                  <>
                                    <EyeOff className="w-3.5 h-3.5" />
                                    <span>غیرفعال</span>
                                  </>
                                )}
                              </button>
                            </td>

                            <td className="p-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleOpenEditModal(cat)}
                                  className="p-2 rounded-xl bg-bg-custom text-graphite hover:bg-primary hover:text-white border border-accent transition-all"
                                  title="ویرایش دسته‌بندی"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => setDeletingCatId(cat.id)}
                                  className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white border border-rose-200 transition-all"
                                  title="حذف دسته‌بندی"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ADD / EDIT CATEGORY MODAL */}
          {isAddModalOpen && (
            <div className="fixed inset-0 bg-graphite/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white w-full max-w-xl rounded-3xl border border-accent p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center border-b border-accent pb-4">
                  <div className="flex items-center gap-2">
                    <FolderTree className="w-6 h-6 text-primary" />
                    <h3 className="font-extrabold text-lg text-graphite">
                      {editingCatId ? "ویرایش دسته‌بندی شغلی" : "افزودن دسته‌بندی شغلی جدید"}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-bg-custom hover:bg-accent text-secondary flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSaveCategorySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-graphite mb-1.5">نام دسته‌بندی (فارسی) *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: تشریفات و سفره عقد"
                      value={catFormData.name}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCatFormData((prev) => ({
                          ...prev,
                          name: val,
                          slug: generateSlug(val)
                        }));
                      }}
                      className="w-full p-3 rounded-xl border border-accent font-semibold focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1.5">آدرس اینترنتی / اسلاگ (URL Slug)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-secondary font-mono text-[11px] dir-ltr">/category/</span>
                      <input
                        type="text"
                        placeholder="venues-and-halls"
                        value={catFormData.slug}
                        onChange={(e) => setCatFormData({ ...catFormData, slug: e.target.value })}
                        className="w-full p-3 pl-24 rounded-xl border border-accent font-mono text-left dir-ltr focus:outline-none focus:border-primary bg-bg-custom"
                      />
                    </div>
                  </div>

                  {/* Icon Selection Picker */}
                  <div>
                    <label className="block font-bold text-graphite mb-1.5">انتخاب آیکون دسته‌بندی</label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {CATEGORY_ICONS.map((ico) => {
                        const IconComponent = ico.Icon;
                        const isSelected = catFormData.iconName === ico.name;
                        return (
                          <button
                            key={ico.name}
                            type="button"
                            onClick={() => setCatFormData({ ...catFormData, iconName: ico.name })}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                              isSelected
                                ? "bg-primary text-white border-primary shadow-xs"
                                : "bg-bg-custom text-graphite border-accent hover:border-primary"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="text-[10px] truncate w-full text-center">{ico.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1.5">توضیحات دسته‌بندی (برای نمایش روی کارت‌ها)</label>
                    <input
                      type="text"
                      placeholder="توضیحات مختصر..."
                      value={catFormData.description}
                      onChange={(e) => setCatFormData({ ...catFormData, description: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1.5">متن سئو و توضیحات متاتگ (SEO Meta Description)</label>
                    <textarea
                      rows={2}
                      placeholder="متن بهینه‌سازی شده برای موتورهای جستجو..."
                      value={catFormData.seoText}
                      onChange={(e) => setCatFormData({ ...catFormData, seoText: e.target.value })}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="bg-bg-custom p-3.5 rounded-xl border border-accent flex items-center justify-between cursor-pointer">
                      <span className="font-bold text-graphite">وضعیت انتشار (دسته‌بندی فعال باشد)</span>
                      <input
                        type="checkbox"
                        checked={catFormData.isActive}
                        onChange={(e) => setCatFormData({ ...catFormData, isActive: e.target.checked })}
                        className="w-4 h-4 text-primary rounded"
                      />
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-accent">
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-accent text-graphite font-bold hover:bg-bg-custom"
                    >
                      انصراف
                    </button>
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold shadow-md flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{editingCatId ? "ذخیره تغییرات" : "ایجاد دسته‌بندی"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* DELETE CONFIRMATION DIALOG */}
          {deletingCatId && (
            <div className="fixed inset-0 bg-graphite/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white w-full max-w-md rounded-3xl border border-accent p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-extrabold text-lg text-graphite">تایید حذف دسته‌بندی شغلی</h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    آیا از حذف این دسته‌بندی اطمینان دارید؟ تمامی ارجاعات دایرکتوری و فرم‌های پلتفرم به‌روزرسانی خواهند شد.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setDeletingCatId(null)}
                    className="px-5 py-2.5 rounded-xl border border-accent text-graphite font-bold text-xs hover:bg-bg-custom"
                  >
                    انصراف
                  </button>
                  <button
                    onClick={handleConfirmDeleteCategory}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md"
                  >
                    بله، حذف شود
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: USER & VENDOR DIRECTORY */}
          {activeTab === "users" && (
            <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden">
              <div className="p-6 border-b border-accent flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-graphite">دایرکتوری زنده کاربران و تامین‌کنندگان ثبت‌شده</h3>
                  <p className="text-xs text-secondary mt-0.5">مشاهده اطلاعات تماس جهت پیگیری‌های پشتیبانی پلتفرم</p>
                </div>
                <button
                  onClick={handleExportDirectory}
                  className="text-xs font-bold text-primary border border-primary px-3.5 py-2 rounded-xl hover:bg-primary/5"
                >
                  خروجی اکسل
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-bg-custom text-secondary border-b border-accent font-bold">
                    <tr>
                      <th className="p-4">نام مجموعه / زوج</th>
                      <th className="p-4">نوع کاربری</th>
                      <th className="p-4">شماره همراه</th>
                      <th className="p-4">شهر</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/60">
                    {vendors.map((v) => (
                      <tr key={v.id} className="hover:bg-bg-custom/50">
                        <td className="p-4 font-bold text-graphite">{v.name}</td>
                        <td className="p-4"><span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[11px] font-bold">تامین‌کننده ({v.category})</span></td>
                        <td className="p-4 font-semibold text-secondary">{v.phone}</td>
                        <td className="p-4 text-graphite">{v.city}</td>
                      </tr>
                    ))}
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-bg-custom/50">
                        <td className="p-4 font-bold text-graphite">{inq.coupleName}</td>
                        <td className="p-4"><span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[11px] font-bold">زوج (متقاضی)</span></td>
                        <td className="p-4 font-semibold text-secondary">{inq.phone}</td>
                        <td className="p-4 text-graphite">تهران</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-2">
                <span className="text-xs text-secondary font-medium">کل بازدیدهای یک ماه اخیر:</span>
                <p className="text-3xl font-extrabold text-primary">۴۸,۵۰۰</p>
                <span className="text-xs text-emerald-600 font-bold block">+۲۲٪ رشد نسبت به ماه گذشته</span>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-2">
                <span className="text-xs text-secondary font-medium">تعداد استعلام‌های صادر شده:</span>
                <p className="text-3xl font-extrabold text-graphite">{inquiries.length}</p>
                <span className="text-xs text-secondary block">از طریق فرم استعلام مستقیم</span>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-2">
                <span className="text-xs text-secondary font-medium">تامین‌کنندگان تایید شده:</span>
                <p className="text-3xl font-extrabold text-primary">
                  {vendors.filter(v => v.isVerified).length} از {vendors.length}
                </p>
                <span className="text-xs text-secondary block">پوشش کامل ۵ استان اصلی</span>
              </div>
            </div>
          )}

          {/* TAB 5: SMS BROADCAST PANEL */}
          {activeTab === "sms" && (
            <div className="space-y-6">
              <form onSubmit={handleSendSmsBroadcast} className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-4">
                <h3 className="text-base font-bold text-graphite">سامانه ارسال پیامک اطلاع‌رسانی</h3>

                {smsSuccess && (
                  <div className="bg-emerald-50 text-primary p-3 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>پیامک سیستم با موفقیت به صف ارسال اضافه شد.</span>
                  </div>
                )}

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-graphite mb-1">گروه دریافت‌کنندگان:</label>
                    <select
                      value={smsTargetGroup}
                      onChange={(e) => setSmsTargetGroup(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent font-medium bg-white"
                    >
                      <option value="همه تامین‌کنندگان">همه تامین‌کنندگان</option>
                      <option value="زوج‌های ثبت‌نامی">زوج‌های ثبت‌نامی</option>
                      <option value="تامین‌کنندگان دارای تاییدیه رسمی">تامین‌کنندگان دارای تاییدیه رسمی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-graphite mb-1">متن پیامک اطلاع‌رسانی:</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="متن سیستم اطلاع‌رسانی..."
                      value={smsMessage}
                      onChange={(e) => setSmsMessage(e.target.value)}
                      className="w-full p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال پیامک سیستم</span>
                  </button>
                </div>
              </form>

              {/* SMS Log */}
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-4">
                <h4 className="text-sm font-bold text-graphite">تاریخچه پیامک‌های ارسال شده</h4>
                <div className="space-y-2 divide-y divide-accent/60">
                  {smsLog.map((log) => (
                    <div key={log.id} className="pt-2 text-xs flex justify-between items-center">
                      <div>
                        <span className="font-bold text-primary block">{log.recipient}</span>
                        <p className="text-graphite">{log.message}</p>
                      </div>
                      <span className="text-[10px] text-secondary">{log.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
