"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  CheckSquare,
  Users,
  Calculator,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  DollarSign,
  Calendar,
  Sparkles,
  PieChart
} from "lucide-react";

export default function PlanningToolsPage() {
  const {
    checklist,
    toggleChecklist,
    addChecklistItem,
    guests,
    addGuestItem,
    toggleGuestStatus,
    budget,
    updateBudgetItem
  } = useApp();

  const [activeTab, setActiveTab] = useState<"checklist" | "guests" | "budget">("checklist");

  // Checklist Form State
  const [newChecklistTitle, setNewChecklistTitle] = useState("");
  const [newChecklistCategory, setNewChecklistCategory] = useState("خدمات اصلی");
  const [newChecklistDueDate, setNewChecklistDueDate] = useState("۱ ماه قبل");

  // Guest Form State
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestSide, setNewGuestSide] = useState<"bride" | "groom">("bride");
  const [newGuestPlusOne, setNewGuestPlusOne] = useState(false);

  // Checklist Calculation
  const completedCount = checklist.filter((item) => item.completed).length;
  const checklistProgress = checklist.length > 0 ? Math.round((completedCount / checklist.length) * 100) : 0;

  // Budget Calculation
  const totalEstimated = budget.reduce((acc, curr) => acc + curr.estimated, 0);
  const totalActual = budget.reduce((acc, curr) => acc + curr.actual, 0);

  const handleAddChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChecklistTitle.trim()) return;
    addChecklistItem(newChecklistTitle, newChecklistCategory, newChecklistDueDate);
    setNewChecklistTitle("");
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;
    addGuestItem(newGuestName, newGuestSide, newGuestPlusOne);
    setNewGuestName("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Header Banner */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>دستیار هوشمند زوج‌ها</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">
                برنامه‌ریزی جشن‌ها، چک‌لیست و مدیریت بودجه
              </h1>
              <p className="text-sm text-secondary">
                تمام امور برگزاری مراسم عروسی خود را با نظم و بدون استرس مدیریت کنید.
              </p>
            </div>

            {/* Quick Stats Summary */}
            <div className="flex items-center gap-4 bg-bg-custom p-4 rounded-2xl border border-accent w-full md:w-auto justify-around">
              <div className="text-center px-3">
                <span className="text-xs text-secondary block">پیشرفت کارهای عروسی</span>
                <span className="text-xl font-extrabold text-primary">{checklistProgress}%</span>
              </div>
              <div className="h-8 w-[1px] bg-accent" />
              <div className="text-center px-3">
                <span className="text-xs text-secondary block">تعداد مهمانان ثبت شده</span>
                <span className="text-xl font-extrabold text-primary">{guests.length} نفر</span>
              </div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 border-b border-accent pb-2">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "checklist"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>چک‌لیست کارهای عروسی ({completedCount}/{checklist.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("guests")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "guests"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>مدیریت لیست مهمانان و پاسخ‌ها</span>
            </button>
            <button
              onClick={() => setActiveTab("budget")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "budget"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-graphite hover:border-primary border border-accent"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>محاسبه‌گر بودجه و هزینه‌ها</span>
            </button>
          </div>

          {/* TAB 1: CHECKLIST */}
          {activeTab === "checklist" && (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-graphite">
                  <span>میزان پیشرفت کارهای عروسی</span>
                  <span className="text-primary">{checklistProgress}% تکمیل شده</span>
                </div>
                <div className="w-full bg-bg-custom rounded-full h-3 border border-accent/60 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-500 rounded-full"
                    style={{ width: `${checklistProgress}%` }}
                  />
                </div>
              </div>

              {/* Add New Checklist Item Form */}
              <form onSubmit={handleAddChecklist} className="bg-white p-5 rounded-2xl border border-accent shadow-xs grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="عنوان کار جدید..."
                  value={newChecklistTitle}
                  onChange={(e) => setNewChecklistTitle(e.target.value)}
                  className="sm:col-span-2 p-3 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="زمان‌بندی (مثلاً: ۳ ماه قبل)"
                  value={newChecklistDueDate}
                  onChange={(e) => setNewChecklistDueDate(e.target.value)}
                  className="p-3 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن به چک‌لیست</span>
                </button>
              </form>

              {/* Checklist Items List */}
              <div className="bg-white rounded-2xl border border-accent shadow-xs divide-y divide-accent/60">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className="p-4 flex items-center justify-between hover:bg-bg-custom cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      ) : (
                        <Circle className="w-6 h-6 text-secondary shrink-0" />
                      )}
                      <div>
                        <p className={`text-sm font-bold ${item.completed ? "line-through text-secondary" : "text-graphite"}`}>
                          {item.title}
                        </p>
                        <span className="text-[11px] text-secondary">{item.category}</span>
                      </div>
                    </div>

                    <span className="text-xs font-medium bg-bg-custom px-3 py-1 rounded-full border border-accent text-secondary">
                      {item.dueDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: GUESTS */}
          {activeTab === "guests" && (
            <div className="space-y-6">
              {/* Add Guest Form */}
              <form onSubmit={handleAddGuest} className="bg-white p-5 rounded-2xl border border-accent shadow-xs grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="نام مهمان یا خانوار..."
                  value={newGuestName}
                  onChange={(e) => setNewGuestName(e.target.value)}
                  className="sm:col-span-2 p-3 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary"
                />
                <select
                  value={newGuestSide}
                  onChange={(e) => setNewGuestSide(e.target.value as "bride" | "groom")}
                  className="p-3 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary bg-white font-medium"
                >
                  <option value="bride">طرف عروس</option>
                  <option value="groom">طرف داماد</option>
                </select>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>افزودن مهمان</span>
                </button>
              </form>

              {/* Guests Table */}
              <div className="bg-white rounded-2xl border border-accent shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-bg-custom text-secondary border-b border-accent font-bold">
                      <tr>
                        <th className="p-4">نام مهمان</th>
                        <th className="p-4">طرف</th>
                        <th className="p-4">وضعیت حضور (RSVP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/60">
                      {guests.map((guest) => (
                        <tr key={guest.id} className="hover:bg-bg-custom/50">
                          <td className="p-4 font-bold text-graphite">{guest.name}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              guest.side === "bride" ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                            }`}>
                              {guest.side === "bride" ? "عروس" : "داماد"}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => toggleGuestStatus(guest.id, "confirmed")}
                                className={`px-3 py-1.5 rounded-lg font-bold text-[11px] border transition-all ${
                                  guest.status === "confirmed"
                                    ? "bg-emerald-600 text-white border-emerald-600"
                                    : "border-accent text-secondary hover:text-graphite"
                                }`}
                              >
                                قطعی شد
                              </button>
                              <button
                                onClick={() => toggleGuestStatus(guest.id, "pending")}
                                className={`px-3 py-1.5 rounded-lg font-bold text-[11px] border transition-all ${
                                  guest.status === "pending"
                                    ? "bg-amber-500 text-white border-amber-500"
                                    : "border-accent text-secondary hover:text-graphite"
                                }`}
                              >
                                در انتظار
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BUDGET */}
          {activeTab === "budget" && (
            <div className="space-y-6">
              {/* Budget Summary Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-1">
                  <span className="text-xs text-secondary font-medium">مجموع بودجه پیش‌بینی شده:</span>
                  <p className="text-xl font-extrabold text-graphite">{totalEstimated.toLocaleString("fa-IR")} تومان</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-accent shadow-xs space-y-1">
                  <span className="text-xs text-secondary font-medium">مجموع هزینه‌های قطعی پرداخت شده:</span>
                  <p className="text-xl font-extrabold text-primary">{totalActual.toLocaleString("fa-IR")} تومان</p>
                </div>
              </div>

              {/* Budget Items Table */}
              <div className="bg-white rounded-2xl border border-accent shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-bg-custom text-secondary border-b border-accent font-bold">
                      <tr>
                        <th className="p-4">دسته‌بندی هزینه</th>
                        <th className="p-4">بودجه پیش‌بینی شده (تومان)</th>
                        <th className="p-4">هزینه واقعی (تومان)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/60">
                      {budget.map((item) => (
                        <tr key={item.id} className="hover:bg-bg-custom/50">
                          <td className="p-4 font-bold text-graphite">{item.category}</td>
                          <td className="p-4 font-semibold text-secondary">{item.estimated.toLocaleString("fa-IR")}</td>
                          <td className="p-4">
                            <input
                              type="number"
                              value={item.actual}
                              onChange={(e) => updateBudgetItem(item.id, Number(e.target.value))}
                              className="w-36 p-2 rounded-lg border border-accent text-xs font-bold text-primary focus:outline-none focus:border-primary"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
