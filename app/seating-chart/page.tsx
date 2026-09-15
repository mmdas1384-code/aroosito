"use client";

import React, { useState } from "react";
import {
  Header
} from "@/components/Header";
import {
  Footer
} from "@/components/Footer";
import { useApp, SeatingElement } from "@/context/AppContext";
import {
  Users,
  Grid,
  Plus,
  Trash2,
  Printer,
  FileSpreadsheet,
  Search,
  Sparkles,
  Crown,
  Music,
  DoorOpen,
  CheckCircle2,
  XCircle,
  UserCheck,
  Move,
  Download
} from "lucide-react";

export default function SeatingChartPage() {
  const {
    guests,
    seatingElements,
    addSeatingElement,
    removeSeatingElement,
    updateSeatingElementPosition,
    assignGuestToSeat,
    unassignGuestFromSeat
  } = useApp();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTableId, setSelectedTableId] = useState<string | null>(seatingElements[2]?.id || null);
  const [newElementName, setNewElementName] = useState("");
  const [newElementType, setNewElementType] = useState<SeatingElement["type"]>("circular");
  const [newElementCapacity, setNewElementCapacity] = useState("8");

  // Filtered guests
  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper to find table of a guest
  const getAssignedTableOfGuest = (guestId: string) => {
    return seatingElements.find((el) => el.assignedGuestIds.includes(guestId));
  };

  const handleAddElement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newElementName) return;
    addSeatingElement(
      newElementName,
      newElementType,
      newElementType === "circular" || newElementType === "rectangular" ? parseInt(newElementCapacity) || 8 : 0
    );
    setNewElementName("");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportList = () => {
    let report = "گزارش چیدمان صندلی‌ها و لیست میهمانان - عروسی تو\n";
    report += "--------------------------------------------------\n\n";

    seatingElements.forEach((table) => {
      if (table.capacity > 0) {
        report += `📍 ${table.name} (ظرفیت: ${table.capacity} نفر | رزرو شده: ${table.assignedGuestIds.length} نفر):\n`;
        if (table.assignedGuestIds.length === 0) {
          report += "   - بدون میهمان تخصیص یافته\n";
        } else {
          table.assignedGuestIds.forEach((gid, idx) => {
            const guest = guests.find((g) => g.id === gid);
            report += `   ${idx + 1}. ${guest ? guest.name : "میهمان"} (${guest?.side === "bride" ? "فامیل عروس" : "فامیل داماد"})\n`;
          });
        }
        report += "\n";
      }
    });

    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "seating-chart-venue-report.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Calculations for metrics
  const totalCapacity = seatingElements.reduce((acc, curr) => acc + curr.capacity, 0);
  const totalAssignedSeats = seatingElements.reduce((acc, curr) => acc + curr.assignedGuestIds.length, 0);
  const selectedTable = seatingElements.find((el) => el.id === selectedTableId);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* HEADER TOOLBAR */}
        <div className="bg-white border border-accent rounded-3xl p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-1">
              <Grid className="w-4 h-4 text-primary" />
              <span>طراح بصری چیدمان و صندلی‌های سالن</span>
            </div>
            <h1 className="text-2xl font-bold text-graphite">نقشه دوبعدی و جاینمایی میهمانان</h1>
            <p className="text-xs text-secondary mt-0.5">مدیریت بصری جایگاه عروس، میزهای دایره‌ای، سن رقص و تخصیص مستقیم میهمانان</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-bg-custom hover:bg-slate-100 text-graphite border border-accent px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-secondary" />
              <span>چاپ نقشه سالن</span>
            </button>

            <button
              onClick={handleExportList}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>خروجی لیست میزها برای مدیر تالار</span>
            </button>
          </div>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-secondary font-bold">کل ظرفیت صندلی‌ها</span>
              <span className="block text-2xl font-black text-graphite mt-1">{totalCapacity} صندلی</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-secondary font-bold">صندلی‌های پر شده</span>
              <span className="block text-2xl font-black text-emerald-700 mt-1">{totalAssignedSeats} نفر</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-secondary font-bold">صندلی‌های خالی</span>
              <span className="block text-2xl font-black text-amber-700 mt-1">{totalCapacity - totalAssignedSeats} صندلی</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <XCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-accent shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-secondary font-bold">تعداد کل میهمانان</span>
              <span className="block text-2xl font-black text-graphite mt-1">{guests.length} نفر</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* WORKSPACE & SIDE PANEL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* INTERACTIVE WORKSPACE CANVAS (8 COLS) */}
          <div className="lg:col-span-8 bg-white border border-accent rounded-3xl p-6 shadow-xs space-y-4">

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-accent pb-4">
              <div>
                <h2 className="text-lg font-bold text-graphite flex items-center gap-2">
                  <Move className="w-5 h-5 text-primary" />
                  <span>محیط چیدمان سالن پذیرایی</span>
                </h2>
                <p className="text-xs text-secondary mt-0.5">برای مشاهده و جاینمایی روی میزها کلیک کنید</p>
              </div>

              {/* ADD ELEMENT FORM */}
              <form onSubmit={handleAddElement} className="flex flex-wrap items-center gap-2 bg-bg-custom p-2 rounded-xl border border-accent">
                <input
                  type="text"
                  placeholder="نام المان/میز"
                  value={newElementName}
                  onChange={(e) => setNewElementName(e.target.value)}
                  className="bg-white border border-accent rounded-lg px-2.5 py-1 text-xs font-medium w-28 focus:outline-none focus:border-primary"
                />
                <select
                  value={newElementType}
                  onChange={(e) => setNewElementType(e.target.value as any)}
                  className="bg-white border border-accent rounded-lg px-2 py-1 text-xs font-semibold focus:outline-none"
                >
                  <option value="circular">میز گرد (۸ نفره)</option>
                  <option value="rectangular">میز مستطیل</option>
                  <option value="stage">جایگاه عروس</option>
                  <option value="dancefloor">سن رقص</option>
                  <option value="entrance">ورودی</option>
                </select>

                <button
                  type="submit"
                  className="bg-primary text-white p-1.5 rounded-lg hover:bg-primary-hover transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* CANVAS GRID CONTAINER */}
            <div className="relative w-full h-[540px] bg-bg-custom rounded-2xl border-2 border-dashed border-accent/80 overflow-hidden p-4">

              {/* GRID PATTERN BACKGROUND */}
              <div className="absolute inset-0 bg-[radial-gradient(#BDCFE0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

              {/* SEATING ELEMENTS RENDER */}
              {seatingElements.map((el) => {
                const isSelected = selectedTableId === el.id;
                const isFull = el.capacity > 0 && el.assignedGuestIds.length >= el.capacity;

                return (
                  <div
                    key={el.id}
                    onClick={() => setSelectedTableId(el.id)}
                    style={{
                      position: "absolute",
                      left: `${el.x}%`,
                      top: `${el.y}%`,
                    }}
                    className={`cursor-pointer transition-all transform hover:scale-105 select-none ${
                      isSelected ? "ring-4 ring-primary ring-offset-2 z-20" : "z-10"
                    }`}
                  >
                    {/* STAGE */}
                    {el.type === "stage" && (
                      <div className="w-44 h-16 bg-gradient-to-r from-amber-100 via-primary/20 to-amber-100 border-2 border-primary rounded-2xl flex items-center justify-center shadow-md gap-2 p-2">
                        <Crown className="w-5 h-5 text-amber-600" />
                        <span className="text-xs font-black text-primary">{el.name}</span>
                      </div>
                    )}

                    {/* DANCE FLOOR */}
                    {el.type === "dancefloor" && (
                      <div className="w-52 h-28 bg-slate-100 border-2 border-accent rounded-3xl flex flex-col items-center justify-center shadow-sm gap-1 p-2">
                        <Music className="w-6 h-6 text-secondary" />
                        <span className="text-xs font-bold text-graphite">{el.name}</span>
                        <span className="text-[10px] text-secondary">فضای آزاد و نورپردازی</span>
                      </div>
                    )}

                    {/* ENTRANCE */}
                    {el.type === "entrance" && (
                      <div className="w-36 h-10 bg-slate-200 border-2 border-dashed border-secondary rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-graphite">
                        <DoorOpen className="w-4 h-4 text-secondary" />
                        <span>{el.name}</span>
                      </div>
                    )}

                    {/* CIRCULAR TABLE */}
                    {el.type === "circular" && (
                      <div className="relative flex flex-col items-center">
                        <div className={`w-28 h-28 rounded-full border-2 flex flex-col items-center justify-center p-2 shadow-md ${
                          isFull
                            ? "bg-emerald-50 border-emerald-600 text-emerald-900"
                            : "bg-white border-primary text-primary"
                        }`}>
                          <span className="text-xs font-black text-center leading-tight">{el.name}</span>
                          <span className="text-[10px] font-bold mt-1 bg-primary/10 px-2 py-0.5 rounded-full">
                            {el.assignedGuestIds.length} / {el.capacity} صندلی
                          </span>
                        </div>

                        {/* SEAT AVATARS AROUND CIRCLE */}
                        <div className="absolute inset-0 -m-3 pointer-events-none">
                          {Array.from({ length: el.capacity }).map((_, idx) => {
                            const angle = (idx * (360 / el.capacity)) * (Math.PI / 180);
                            const radius = 56; // px
                            const cx = Math.cos(angle) * radius;
                            const cy = Math.sin(angle) * radius;
                            const isAssigned = idx < el.assignedGuestIds.length;

                            return (
                              <div
                                key={idx}
                                style={{
                                  position: "absolute",
                                  left: `calc(50% + ${cx}px - 8px)`,
                                  top: `calc(50% + ${cy}px - 8px)`,
                                }}
                                className={`w-4 h-4 rounded-full border border-white shadow-xs ${
                                  isAssigned ? "bg-emerald-600" : "bg-accent"
                                }`}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* RECTANGULAR TABLE */}
                    {el.type === "rectangular" && (
                      <div className={`w-44 h-20 rounded-2xl border-2 flex flex-col items-center justify-center p-2 shadow-md ${
                        isFull
                          ? "bg-emerald-50 border-emerald-600 text-emerald-900"
                          : "bg-white border-primary text-primary"
                      }`}>
                        <span className="text-xs font-black text-center">{el.name}</span>
                        <span className="text-[10px] font-bold mt-1 bg-primary/10 px-2 py-0.5 rounded-full">
                          {el.assignedGuestIds.length} / {el.capacity} صندلی
                        </span>
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

            {/* SELECTED TABLE ACTIONS */}
            {selectedTable && (
              <div className="bg-bg-custom border border-accent rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-graphite">المان انتخاب شده: <strong className="text-primary">{selectedTable.name}</strong></span>
                  {selectedTable.capacity > 0 && (
                    <span className="text-xs bg-white px-2.5 py-1 rounded-lg border border-accent font-semibold text-secondary">
                      ظرفیت: {selectedTable.assignedGuestIds.length} از {selectedTable.capacity} صندلی
                    </span>
                  )}
                </div>

                <button
                  onClick={() => removeSeatingElement(selectedTable.id)}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 bg-white border border-rose-200 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>حذف المان</span>
                </button>
              </div>
            )}

          </div>

          {/* GUEST ASSIGNMENT SIDE PANEL (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-white border border-accent rounded-3xl p-6 shadow-xs space-y-4">
              <div className="border-b border-accent pb-3">
                <h3 className="text-base font-bold text-graphite flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>لیست میهمانان و جایگذاری صندلی</span>
                </h3>
                <p className="text-xs text-secondary mt-0.5">برای تخصیص، ابتدا یک میز انتخاب کنید سپس روی میهمان کلیک کنید</p>
              </div>

              {/* SEARCH GUEST BAR */}
              <div className="bg-bg-custom border border-accent rounded-xl p-2 flex items-center gap-2">
                <Search className="w-4 h-4 text-secondary shrink-0" />
                <input
                  type="text"
                  placeholder="جستجوی نام میهمان..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none text-xs font-medium focus:outline-none text-graphite"
                />
              </div>

              {/* ACTIVE TABLE SELECTION BADGE */}
              {selectedTable && selectedTable.capacity > 0 ? (
                <div className="bg-primary/10 border border-primary/20 p-3 rounded-xl text-xs font-bold text-primary flex items-center justify-between">
                  <span>میز فعال: {selectedTable.name}</span>
                  <span>{selectedTable.assignedGuestIds.length}/{selectedTable.capacity} صندلی</span>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs font-semibold text-amber-800">
                  لطفا یک میز از نقشه سالن انتخاب کنید.
                </div>
              )}

              {/* GUESTS SCROLL LIST */}
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {filteredGuests.map((guest) => {
                  const assignedTable = getAssignedTableOfGuest(guest.id);
                  const isAssignedToActive = selectedTable && selectedTable.assignedGuestIds.includes(guest.id);

                  return (
                    <div
                      key={guest.id}
                      className="p-3 bg-bg-custom rounded-2xl border border-accent/80 flex items-center justify-between text-xs font-medium"
                    >
                      <div>
                        <span className="font-bold text-graphite block">{guest.name}</span>
                        <span className="text-[10px] text-secondary">
                          {guest.side === "bride" ? "فامیل عروس" : "فامیل داماد"} • {guest.plusOne ? "همراه دارد" : "تک‌نفره"}
                        </span>
                      </div>

                      <div>
                        {assignedTable ? (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                              {assignedTable.name}
                            </span>
                            <button
                              onClick={() => unassignGuestFromSeat(guest.id)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                              title="حذف از میز"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              if (selectedTable && selectedTable.capacity > 0) {
                                assignGuestToSeat(guest.id, selectedTable.id);
                              } else {
                                alert("لطفا ابتدا یک میز معتبر انتخاب کنید.");
                              }
                            }}
                            className="bg-primary text-white font-bold text-[11px] px-3 py-1 rounded-xl hover:bg-primary-hover transition-colors"
                          >
                            تخصیص صندلی
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
