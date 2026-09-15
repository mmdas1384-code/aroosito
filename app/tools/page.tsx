"use client";

import React, { useState } from "react";
import {
  Bot,
  Sparkles,
  Calculator,
  CheckSquare,
  Users,
  Download,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  PieChart,
  FileSpreadsheet,
  Send,
  Building,
  Camera,
  Scissors,
  Music,
  ArrowLeft
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";

export default function PlanningToolsPage() {
  const { checklist, toggleChecklist, addChecklistItem, guests, addGuestItem, toggleGuestStatus } = useApp();

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<"ai-assistant" | "budget" | "checklist" | "guests">("ai-assistant");

  // AI Assistant State
  const [totalBudgetInput, setTotalBudgetInput] = useState<number>(300000000);
  const [guestCountInput, setGuestCountInput] = useState<number>(250);
  const [cityInput, setCityInput] = useState<string>("تهران");
  const [styleInput, setStyleInput] = useState<string>("کلاسیک و لوکس");
  const [aiGenerated, setAiGenerated] = useState<boolean>(true);

  // Advanced Budget Tracker Items State
  const [budgetItems, setBudgetItems] = useState([
    { id: "1", category: "تالار و پذیرایی منو", allocated: 120000000, actual: 115000000, deposit: 50000000 },
    { id: "2", category: "آتلیه و عکاسی/فیلمبرداری", allocated: 60000000, actual: 65000000, deposit: 25000000 },
    { id: "3", category: "لباس عروس، داماد و میکاپ", allocated: 45000000, actual: 40000000, deposit: 20000000 },
    { id: "4", category: "موزیک زنده و نورپردازی", allocated: 45000000, actual: 45000000, deposit: 15000000 },
    { id: "5", category: "گل‌آرایی و ماشین عروس", allocated: 30000000, actual: 32000000, deposit: 10000000 }
  ]);

  const [newItemName, setNewItemName] = useState("");
  const [newItemAllocated, setNewItemAllocated] = useState("");

  // AI Recommendation Trigger
  const handleGenerateAiRecommendation = () => {
    const total = totalBudgetInput;
    setBudgetItems([
      { id: "1", category: "تالار و تشریفات پذیرایی (۴۰٪)", allocated: Math.round(total * 0.40), actual: Math.round(total * 0.38), deposit: Math.round(total * 0.20) },
      { id: "2", category: "آتلیه و فیلمبرداری سینمایی (۲۰٪)", allocated: Math.round(total * 0.20), actual: Math.round(total * 0.21), deposit: Math.round(total * 0.10) },
      { id: "3", category: "لباس عروس، داماد و میکاپ (۱۵٪)", allocated: Math.round(total * 0.15), actual: Math.round(total * 0.14), deposit: Math.round(total * 0.08) },
      { id: "4", category: "موزیک زنده، دی‌جی و نورپردازی (۱۵٪)", allocated: Math.round(total * 0.15), actual: Math.round(total * 0.15), deposit: Math.round(total * 0.05) },
      { id: "5", category: "گل‌آرایی، ماشین عروس و متفرقه (۱۰٪)", allocated: Math.round(total * 0.10), actual: Math.round(total * 0.09), deposit: Math.round(total * 0.04) }
    ]);
    setAiGenerated(true);
    setActiveTab("budget");
  };

  const handleAddBudgetItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemAllocated) return;

    setBudgetItems([
      ...budgetItems,
      {
        id: Date.now().toString(),
        category: newItemName,
        allocated: parseInt(newItemAllocated) || 0,
        actual: 0,
        deposit: 0
      }
    ]);

    setNewItemName("");
    setNewItemAllocated("");
  };

  const handleDeleteBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  const handleUpdateItemActual = (id: string, actual: number) => {
    setBudgetItems(budgetItems.map(item => item.id === id ? { ...item, actual } : item));
  };

  const handleUpdateItemDeposit = (id: string, deposit: number) => {
    setBudgetItems(budgetItems.map(item => item.id === id ? { ...item, deposit } : item));
  };

  // Calculations
  const totalAllocated = budgetItems.reduce((acc, curr) => acc + curr.allocated, 0);
  const totalActual = budgetItems.reduce((acc, curr) => acc + curr.actual, 0);
  const totalDeposit = budgetItems.reduce((acc, curr) => acc + curr.deposit, 0);
  const totalRemaining = totalAllocated - totalActual;
  const isOverBudget = totalActual > totalAllocated;

  const exportExcelMock = () => {
    alert("گزارش کامل بودجه‌بندی هوشمند عروسی تو به صورت فایل اکسل دانلود گردید.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* HEADER TOOLBAR & NAVIGATION TABS */}
        <div className="bg-white border border-accent rounded-3xl p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-1">
              <Bot className="w-4 h-4 text-primary" />
              <span>دستیار هوشمند AI و ابزارهای برنامه‌ریزی</span>
            </div>
            <h1 className="text-2xl font-bold text-graphite">ابزارهای مدیریت جشن عروسی تو</h1>
            <p className="text-xs text-secondary mt-0.5">محاسبه‌گر تخصصی بودجه، دستیار تخصصی تخصیص هزینه و چک‌لیست آنلاین</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-bg-custom p-1.5 rounded-2xl border border-accent">
            <button
              onClick={() => setActiveTab("ai-assistant")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "ai-assistant" ? "bg-primary text-white shadow-xs" : "text-graphite hover:text-primary"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>دستیار پیشنهاد هوشمند AI</span>
            </button>

            <button
              onClick={() => setActiveTab("budget")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "budget" ? "bg-primary text-white shadow-xs" : "text-graphite hover:text-primary"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>مدیریت پیشرفته بودجه</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "checklist" ? "bg-primary text-white shadow-xs" : "text-graphite hover:text-primary"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>چک‌لیست کارهای ضروری</span>
            </button>

            <a
              href="/seating-chart"
              className="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 text-graphite hover:text-primary border border-accent hover:border-primary"
            >
              <Users className="w-4 h-4 text-primary" />
              <span>چیدمان بصری صندلی‌ها ↗</span>
            </a>
          </div>
        </div>

        {/* TAB 1: AI RECOMMENDATION ENGINE ASSISTANT */}
        {activeTab === "ai-assistant" && (
          <div className="bg-white border border-accent rounded-3xl p-8 shadow-xs space-y-8">
            <div className="border-b border-accent pb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-graphite">موتور هوش مصنوعی تخصیص بهینه بودجه عروسی</h2>
                <p className="text-xs text-secondary">پاسخ به ۴ سوال ساده جهت دریافت ترکیب پیشنهادی پکیج خدمات</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* QUIZ FORM */}
              <div className="lg:col-span-6 space-y-5 bg-bg-custom p-6 rounded-2xl border border-accent">
                <div>
                  <label className="block text-xs font-bold text-graphite mb-1.5">۱. کل بودجه در نظر گرفته شده (تومان):</label>
                  <input
                    type="number"
                    step="10000000"
                    value={totalBudgetInput}
                    onChange={e => setTotalBudgetInput(parseInt(e.target.value) || 0)}
                    className="w-full bg-white border border-accent rounded-xl p-3 text-sm font-bold text-primary focus:outline-none focus:border-primary"
                  />
                  <span className="text-[11px] text-secondary mt-1 block">معادل: {totalBudgetInput.toLocaleString("fa-IR")} تومان</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-graphite mb-1.5">۲. تعداد تقریبی مهمانان:</label>
                    <input
                      type="number"
                      value={guestCountInput}
                      onChange={e => setGuestCountInput(parseInt(e.target.value) || 0)}
                      className="w-full bg-white border border-accent rounded-xl p-3 text-sm font-semibold focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-graphite mb-1.5">۳. شهر برگزاری مراسم:</label>
                    <select
                      value={cityInput}
                      onChange={e => setCityInput(e.target.value)}
                      className="w-full bg-white border border-accent rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-primary"
                    >
                      <option value="تهران">تهران</option>
                      <option value="شیراز">شیراز</option>
                      <option value="اصفهان">اصفهان</option>
                      <option value="مشهد">مشهد</option>
                      <option value="کرج">کرج</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-graphite mb-1.5">۴. سبک و تم مورد علاقه شما:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["کلاسیک و لوکس", "مدرن و مینی‌مال", "روستیک و فضای باز", "سنتی و تشریفاتی"].map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setStyleInput(style)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-right transition-all ${
                          styleInput === style
                            ? "bg-primary text-white border-primary"
                            : "bg-white border-accent text-graphite hover:border-primary"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateAiRecommendation}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>تولید هوشمند جدول بودجه‌بندی پیشنهادی</span>
                </button>
              </div>

              {/* INSTANT AI ALLOCATION PREVIEW */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-primary text-white p-6 rounded-2xl shadow-md space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-xs font-bold text-accent">تفکیک درصد پیشنهادی هوش مصنوعی</span>
                    <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-bold">{styleInput}</span>
                  </div>

                  <div className="space-y-3 text-xs font-medium">
                    <div className="flex justify-between items-center p-2.5 bg-white/10 rounded-xl">
                      <span>🏰 تالار، باغ و تشریفات منو (۴۰٪):</span>
                      <span className="font-bold text-base">{(totalBudgetInput * 0.40).toLocaleString("fa-IR")} تومان</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 bg-white/10 rounded-xl">
                      <span>📸 آتلیه و فیلمبرداری سینمایی (۲۰٪):</span>
                      <span className="font-bold text-base">{(totalBudgetInput * 0.20).toLocaleString("fa-IR")} تومان</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 bg-white/10 rounded-xl">
                      <span>👗 لباس عروس، داماد و میکاپ (۱۵٪):</span>
                      <span className="font-bold text-base">{(totalBudgetInput * 0.15).toLocaleString("fa-IR")} تومان</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 bg-white/10 rounded-xl">
                      <span>🎵 موزیک زنده، دی‌جی و نور (۱۵٪):</span>
                      <span className="font-bold text-base">{(totalBudgetInput * 0.15).toLocaleString("fa-IR")} تومان</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 bg-white/10 rounded-xl">
                      <span>💐 گل‌آرایی، ماشین عروس و متفرقه (۱۰٪):</span>
                      <span className="font-bold text-base">{(totalBudgetInput * 0.10).toLocaleString("fa-IR")} تومان</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab("budget")}
                    className="w-full bg-white text-primary hover:bg-slate-100 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>انتقال به جدول مدیریت بودجه جهت ویرایش</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADVANCED DYNAMIC BUDGET TRACKER */}
        {activeTab === "budget" && (
          <div className="space-y-6">

            {/* REAL-TIME BUDGET SUMMARY METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs">
                <span className="text-xs text-secondary font-bold">کل بودجه تخصیص یافته</span>
                <span className="block text-xl font-black text-graphite mt-1">{totalAllocated.toLocaleString("fa-IR")} تومان</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs">
                <span className="text-xs text-secondary font-bold">هزینه واقعی انجام شده</span>
                <span className={`block text-xl font-black mt-1 ${isOverBudget ? "text-rose-600" : "text-primary"}`}>
                  {totalActual.toLocaleString("fa-IR")} تومان
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs">
                <span className="text-xs text-secondary font-bold">مجموع بیعانه پرداختی</span>
                <span className="block text-xl font-black text-emerald-800 mt-1">{totalDeposit.toLocaleString("fa-IR")} تومان</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs">
                <span className="text-xs text-secondary font-bold">باقیمانده بودجه</span>
                <span className={`block text-xl font-black mt-1 ${totalRemaining < 0 ? "text-rose-600" : "text-primary"}`}>
                  {totalRemaining.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>

            {/* PROGRESS BAR & WARNING */}
            <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-graphite">وضعیت مصرف بودجه:</span>
                <span className={isOverBudget ? "text-rose-600" : "text-primary"}>
                  {Math.round((totalActual / (totalAllocated || 1)) * 100)}٪ مصرف شده
                </span>
              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-accent">
                <div
                  className={`h-full transition-all duration-300 ${isOverBudget ? "bg-rose-600" : "bg-primary"}`}
                  style={{ width: `${Math.min(100, Math.round((totalActual / (totalAllocated || 1)) * 100))}%` }}
                ></div>
              </div>

              {isOverBudget && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>هشدار: مجموع هزینه‌های واقعی شما {Math.abs(totalRemaining).toLocaleString("fa-IR")} تومان از بودجه اولیه بیشتر شده است!</span>
                </div>
              )}
            </div>

            {/* DYNAMIC BUDGET TABLE */}
            <div className="bg-white border border-accent rounded-3xl p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-accent pb-4">
                <h3 className="text-lg font-bold text-graphite flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                  <span>جدول تفکیکی هزینه‌های عروسی</span>
                </h3>

                <button
                  onClick={exportExcelMock}
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>دانلود گزارش کامل (Excel / PDF)</span>
                </button>
              </div>

              {/* ADD NEW ITEM FORM */}
              <form onSubmit={handleAddBudgetItem} className="grid grid-cols-1 sm:grid-cols-12 gap-2 bg-bg-custom p-3 rounded-2xl border border-accent">
                <input
                  type="text"
                  placeholder="عنوان هزینه جدید (مثلا: کارت دعوت)"
                  value={newItemName}
                  onChange={e => setNewItemName(e.target.value)}
                  className="sm:col-span-6 bg-white border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                />
                <input
                  type="number"
                  placeholder="مبلغ پیش‌بینی (تومان)"
                  value={newItemAllocated}
                  onChange={e => setNewItemAllocated(e.target.value)}
                  className="sm:col-span-4 bg-white border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 bg-primary text-white font-bold text-xs rounded-xl py-2.5 hover:bg-primary-hover transition-colors flex items-center justify-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن</span>
                </button>
              </form>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-bg-custom text-secondary border-b border-accent font-bold">
                    <tr>
                      <th className="p-3">دسته‌بندی / عنوان</th>
                      <th className="p-3">بودجه اولیه (تومان)</th>
                      <th className="p-3">هزینه واقعی (تومان)</th>
                      <th className="p-3">بیعانه پرداختی (تومان)</th>
                      <th className="p-3">باقیمانده</th>
                      <th className="p-3 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/60 font-medium">
                    {budgetItems.map(item => {
                      const itemRem = item.allocated - item.actual;
                      return (
                        <tr key={item.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-graphite">{item.category}</td>
                          <td className="p-3 text-graphite">{item.allocated.toLocaleString("fa-IR")}</td>
                          <td className="p-3">
                            <input
                              type="number"
                              value={item.actual}
                              onChange={e => handleUpdateItemActual(item.id, parseInt(e.target.value) || 0)}
                              className="w-28 bg-bg-custom border border-accent rounded-lg p-1 text-xs font-bold text-primary focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="p-3">
                            <input
                              type="number"
                              value={item.deposit}
                              onChange={e => handleUpdateItemDeposit(item.id, parseInt(e.target.value) || 0)}
                              className="w-28 bg-bg-custom border border-accent rounded-lg p-1 text-xs font-semibold text-emerald-800 focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className={`p-3 font-bold ${itemRem < 0 ? "text-rose-600" : "text-emerald-700"}`}>
                            {itemRem.toLocaleString("fa-IR")}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteBudgetItem(item.id)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
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

        {/* TAB 3: CHECKLIST MODULE */}
        {activeTab === "checklist" && (
          <div className="bg-white border border-accent rounded-3xl p-8 shadow-xs space-y-6">
            <div className="border-b border-accent pb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-graphite flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-primary" />
                  <span>چک‌لیست هوشمند برنامه‌ریزی عروسی</span>
                </h2>
                <p className="text-xs text-secondary mt-0.5">مدیریت زمان‌بندی‌شده تمامی مراحل تا شب جشن</p>
              </div>
            </div>

            <div className="space-y-3">
              {checklist.map(item => (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="p-4 bg-bg-custom rounded-2xl border border-accent/70 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {}}
                      className="rounded text-primary focus:ring-primary w-5 h-5 cursor-pointer"
                    />
                    <span className={`text-sm font-bold ${item.completed ? "line-through text-secondary" : "text-graphite"}`}>
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-white px-3 py-1 rounded-lg border border-accent">
                    زمان: {item.dueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
