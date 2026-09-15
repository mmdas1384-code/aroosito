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
  Bell
} from "lucide-react";

export default function AdminDashboardPage() {
  const {
    vendors,
    toggleVendorVerification,
    categories,
    addCategory,
    deleteCategory,
    inquiries,
    smsLog,
    sendSmsBroadcast,
    smsGatewayConfig,
    updateSmsGatewayConfig
  } = useApp();

  const [activeTab, setActiveTab] = useState<"verification" | "categories" | "users" | "analytics" | "sms" | "gateway">("sms");

  // Category Manager Form State
  const [newCatName, setNewCatName] = useState("");
  const [newCatDesc, setNewCatDesc] = useState("");

  // SMS Broadcast Form State
  const [smsTargetGroup, setSmsTargetGroup] = useState("همه تامین‌کنندگان");
  const [smsMessage, setSmsMessage] = useState("");
  const [smsSuccess, setSmsSuccess] = useState(false);

  // SMS Gateway Config Form State
  const [gatewayProvider, setGatewayProvider] = useState<"kavenegar" | "ghasedak">(smsGatewayConfig.provider);
  const [gatewayApiKey, setGatewayApiKey] = useState(smsGatewayConfig.apiKey);
  const [gatewaySenderLine, setGatewaySenderLine] = useState(smsGatewayConfig.senderLine);

  const handleAddCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    addCategory(newCatName, newCatDesc || "دسته‌بندی جدید در عروسی تو");
    setNewCatName("");
    setNewCatDesc("");
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

          {/* TAB 2: CATEGORY MANAGER */}
          {activeTab === "categories" && (
            <div className="space-y-6">
              <form onSubmit={handleAddCategorySubmit} className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-4">
                <h3 className="text-base font-bold text-graphite">افزودن دسته‌بندی شغلی جدید</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="نام دسته (مثلاً: تشریفات آتش‌بازی و نورافشانی)"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    className="p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="توضیحات مختصر..."
                    value={newCatDesc}
                    onChange={(e) => setNewCatDesc(e.target.value)}
                    className="p-3 rounded-xl border border-accent focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن دسته‌بندی</span>
                  </button>
                </div>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <div key={cat.id} className="bg-white p-5 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-graphite text-sm">{cat.name}</h4>
                      <p className="text-xs text-secondary mt-1">{cat.description}</p>
                    </div>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="text-rose-500 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 transition-colors"
                      title="حذف دسته‌بندی"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
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
