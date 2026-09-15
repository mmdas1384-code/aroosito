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
  ArrowLeft,
  Clock,
  Calendar,
  Filter,
  CheckCircle,
  AlertCircle,
  CalendarRange,
  Tag,
  Flame,
  X
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";

export default function PlanningToolsPage() {
  const { checklist, toggleChecklist, addChecklistItem, guests, addGuestItem, toggleGuestStatus } = useApp();

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<"ai-assistant" | "budget" | "checklist" | "guests">("ai-assistant");

  // Checklist Interactive Filters & New Task Modal
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "pending" | "completed" | "urgent">("all");
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskTimeframe, setNewTaskTimeframe] = useState<string>("۱۲ تا ۹ ماه قبل");
  const [newTaskDueDate, setNewTaskDueDate] = useState<string>("");
  const [newTaskUrgent, setNewTaskUrgent] = useState<boolean>(false);

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
        {activeTab === "checklist" && (() => {
          const TIMEFRAMES = [
            "۱۲ تا ۹ ماه قبل",
            "۹ تا ۶ ماه قبل",
            "۶ تا ۳ ماه قبل",
            "۳ تا ۱ ماه قبل",
            "۱ هفته قبل",
            "روز عروسی"
          ];

          const totalTasks = checklist.length;
          const completedTasks = checklist.filter(t => t.completed).length;
          const urgentTasksCount = checklist.filter(t => t.isUrgent && !t.completed).length;
          const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

          const filteredTasks = checklist.filter(task => {
            const matchesTimeframe = selectedTimeframe === "all" || task.category === selectedTimeframe;
            if (!matchesTimeframe) return false;
            if (selectedStatus === "completed") return task.completed;
            if (selectedStatus === "pending") return !task.completed;
            if (selectedStatus === "urgent") return task.isUrgent && !task.completed;
            return true;
          });

          const handleCreateTask = (e: React.FormEvent) => {
            e.preventDefault();
            if (!newTaskTitle.trim()) return;
            addChecklistItem(newTaskTitle, newTaskTimeframe, newTaskDueDate || "در حال برنامه‌ریزی", newTaskUrgent);
            setNewTaskTitle("");
            setNewTaskDueDate("");
            setNewTaskUrgent(false);
            setShowAddModal(false);
          };

          return (
            <div className="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-8">
              {/* Header & Main Stats Progress Bar */}
              <div className="border-b border-accent pb-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-graphite flex items-center gap-2">
                      <CheckSquare className="w-6 h-6 text-primary" />
                      <span>زمان‌بندی و چک‌لیست حرفه‌ای عروسی</span>
                    </h2>
                    <p className="text-xs text-secondary mt-1">مدیریت کرونولوژیک (زمان‌بندی‌شده) تمامی اقدامات از ۱۲ ماه قبل تا شب عروسی</p>
                  </div>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-primary hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن مهم جدید</span>
                  </button>
                </div>

                {/* Real-time Progress Card */}
                <div className="bg-bg-custom border border-accent/80 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-graphite">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>پیشرفت کل اقدامات</span>
                    </span>
                    <div className="flex items-center gap-4">
                      {urgentTasksCount > 0 && (
                        <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 border border-rose-200">
                          <Flame className="w-3.5 h-3.5" />
                          <span>{urgentTasksCount} کار فوری باقی‌مانده</span>
                        </span>
                      )}
                      <span className="text-primary text-sm font-black">{progressPercent}% انجام شده ({completedTasks} از {totalTasks})</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Chronological Filter Tabs */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                    <CalendarRange className="w-4 h-4 text-primary" />
                    <span>فیلتر زمان‌بندی مراسم:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedTimeframe("all")}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                        selectedTimeframe === "all"
                          ? "bg-primary text-white border-primary shadow-xs"
                          : "bg-white text-graphite border-accent hover:border-primary"
                      }`}
                    >
                      همه مراحل ({totalTasks})
                    </button>
                    {TIMEFRAMES.map((tf) => {
                      const tfCount = checklist.filter((t) => t.category === tf).length;
                      return (
                        <button
                          key={tf}
                          onClick={() => setSelectedTimeframe(tf)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedTimeframe === tf
                              ? "bg-primary text-white border-primary shadow-xs"
                              : "bg-white text-graphite border-accent hover:border-primary"
                          }`}
                        >
                          {tf} ({tfCount})
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Status Sub-filter */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-accent/50 text-xs">
                  <span className="font-bold text-secondary flex items-center gap-1 ml-2">
                    <Filter className="w-3.5 h-3.5" /> وضعیت نمایش:
                  </span>
                  {[
                    { key: "all", label: "همه کارهای این بخش" },
                    { key: "pending", label: "در حال انجام (انجام نشده)" },
                    { key: "completed", label: "تکمیل شده" },
                    { key: "urgent", label: "فقط کارهای فوری ⚠️" }
                  ].map((st) => (
                    <button
                      key={st.key}
                      onClick={() => setSelectedStatus(st.key as any)}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        selectedStatus === st.key
                          ? "bg-secondary text-white"
                          : "bg-slate-100 text-graphite hover:bg-slate-200"
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Task Timeline Render */}
              <div className="space-y-8">
                {filteredTasks.length === 0 ? (
                  <div className="text-center py-12 bg-bg-custom rounded-2xl border border-dashed border-accent space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-secondary mx-auto opacity-50" />
                    <p className="text-sm font-bold text-graphite">هیچ موردی در این فیلتر یافت نشد</p>
                    <p className="text-xs text-secondary">فیلترهای زمان‌بندی یا وضعیت را تغییر دهید.</p>
                  </div>
                ) : (
                  (selectedTimeframe === "all" ? TIMEFRAMES : [selectedTimeframe]).map((timeframe) => {
                    const timeframeTasks = filteredTasks.filter((t) => t.category === timeframe);
                    if (timeframeTasks.length === 0) return null;

                    const tfCompleted = timeframeTasks.filter((t) => t.completed).length;

                    return (
                      <div key={timeframe} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-accent/70 pb-2">
                          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                            <span>بازه زمانی: {timeframe}</span>
                          </h3>
                          <span className="text-xs font-semibold text-secondary bg-slate-100 px-2.5 py-0.5 rounded-full border border-accent">
                            {tfCompleted} از {timeframeTasks.length} انجام شده
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {timeframeTasks.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => toggleChecklist(item.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                                item.completed
                                  ? "bg-emerald-50/40 border-emerald-200"
                                  : item.isUrgent
                                  ? "bg-rose-50/50 border-rose-200 hover:border-rose-400 shadow-xs"
                                  : "bg-white border-accent hover:border-primary shadow-xs"
                              }`}
                            >
                              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                                <div
                                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                                    item.completed
                                      ? "bg-primary border-primary text-white"
                                      : "border-secondary bg-white"
                                  }`}
                                >
                                  {item.completed && <CheckCircle className="w-4 h-4 stroke-[3]" />}
                                </div>

                                <div className="space-y-1 min-w-0 flex-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span
                                      className={`text-sm font-bold truncate ${
                                        item.completed ? "line-through text-secondary" : "text-graphite"
                                      }`}
                                    >
                                      {item.title}
                                    </span>

                                    {item.isUrgent && !item.completed && (
                                      <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        فوری / حیاتی
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[11px] font-semibold text-secondary bg-bg-custom px-3 py-1 rounded-lg border border-accent flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-primary" />
                                  <span>{item.dueDate}</span>
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Add Custom Task Modal */}
              {showAddModal && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white border border-accent rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-6">
                    <div className="flex items-center justify-between border-b border-accent pb-4">
                      <h3 className="text-base font-bold text-graphite flex items-center gap-2">
                        <Plus className="w-5 h-5 text-primary" />
                        <span>افزودن اقدام شخصی جدید</span>
                      </h3>
                      <button
                        onClick={() => setShowAddModal(false)}
                        className="text-secondary hover:text-graphite p-1 rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleCreateTask} className="space-y-4 text-xs font-bold text-graphite">
                      <div className="space-y-1.5">
                        <label>عنوان اقدام یا وظیفه:</label>
                        <input
                          type="text"
                          required
                          placeholder="مثلاً: هماهنگی خیاط لباس مادرزن..."
                          value={newTaskTitle}
                          onChange={(e) => setNewTaskTitle(e.target.value)}
                          className="w-full p-3 rounded-xl border border-accent text-xs font-semibold focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label>بازه زمانی (مرحله):</label>
                        <select
                          value={newTaskTimeframe}
                          onChange={(e) => setNewTaskTimeframe(e.target.value)}
                          className="w-full p-3 rounded-xl border border-accent text-xs font-semibold focus:outline-none focus:border-primary bg-white"
                        >
                          {TIMEFRAMES.map((tf) => (
                            <option key={tf} value={tf}>
                              {tf}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label>مهلت انجام (اختیاری):</label>
                        <input
                          type="text"
                          placeholder="مثلاً: تا آخر ماه یا ۲ هفته قبل..."
                          value={newTaskDueDate}
                          onChange={(e) => setNewTaskDueDate(e.target.value)}
                          className="w-full p-3 rounded-xl border border-accent text-xs font-semibold focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <input
                          type="checkbox"
                          id="urgentCheck"
                          checked={newTaskUrgent}
                          onChange={(e) => setNewTaskUrgent(e.target.checked)}
                          className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor="urgentCheck" className="cursor-pointer text-xs text-rose-700 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          این کار فوری و حیاتی است (نیاز به هشدار ویژه)
                        </label>
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-accent">
                        <button
                          type="button"
                          onClick={() => setShowAddModal(false)}
                          className="px-4 py-2.5 rounded-xl border border-accent text-secondary hover:bg-slate-100 font-bold"
                        >
                          انصراف
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-xl bg-primary hover:bg-emerald-900 text-white font-bold shadow-xs"
                        >
                          ثبت در چک‌لیست
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

      </main>

      <Footer />
    </div>
  );
}
