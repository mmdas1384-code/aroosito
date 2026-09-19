"use client";

import React, { useState, useEffect } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Music,
  Volume2,
  VolumeX,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Send,
  Sparkles,
  Share2,
  Copy,
  Check
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DigitalInvitationPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [status, setStatus] = useState<"attending" | "declined">("attending");
  const [plusOnes, setPlusOnes] = useState(1);
  const [dietary, setDietary] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // RSVP Counter State
  const [rsvps, setRsvps] = useState([
    { id: 1, name: "محمدحسین و همسر", status: "attending", plusOnes: 2, dietary: "بدون لکتوز", note: "با آرزوی خوشبختی برای علی و سارا عزیز ❤️" },
    { id: 2, name: "زهرا حسینی", status: "attending", plusOnes: 1, dietary: "گیاه‌خوار", note: "بسیار خوشحالیم برای این جشن زیبا!" },
    { id: 3, name: "رضا کریمی", status: "declined", plusOnes: 0, dietary: "", note: "متأسفانه مسافرت هستم ولی بهترین‌ها رو براتون آرزو دارم." }
  ]);

  // Live Countdown Timer logic
  const weddingDate = new Date();
  weddingDate.setDate(weddingDate.getDate() + 45); // 45 days in future

  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 14,
    minutes: 32,
    seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://aroosito.com/invitation/ali-sara");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: guestName,
      status,
      plusOnes: status === "attending" ? plusOnes : 0,
      dietary,
      note
    };

    setRsvps([newEntry, ...rsvps]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRsvpModalOpen(false);
      setGuestName("");
      setNote("");
    }, 1800);
  };

  const attendingCount = rsvps.filter(r => r.status === "attending").reduce((acc, curr) => acc + curr.plusOnes, 0);
  const declinedCount = rsvps.filter(r => r.status === "declined").length;
  const pendingCount = 150 - (attendingCount + declinedCount);

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* TOP TOOLBAR & CUSTOM URL GENERATOR BANNER */}
        <div className="bg-white border border-accent rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ماژول کارت دعوت دیجیتال اختصاصی</span>
            </div>
            <h1 className="text-xl font-bold text-graphite">کارت دعوت اختصاصی علی و سارا</h1>
            <p className="text-xs text-secondary mt-0.5" dir="ltr">aroosito.com/invitation/ali-sara</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "لینک کپی شد!" : "کپی لینک کارت دعوت"}</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                isPlaying
                  ? "bg-rose-500 text-white border-rose-600 animate-pulse"
                  : "bg-bg-custom border-accent text-graphite hover:border-primary"
              }`}
            >
              {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-secondary" />}
              <span>{isPlaying ? "توقف موزیک جادویی" : "پخش موزیک لایت عروسی"}</span>
            </button>
          </div>
        </div>

        {/* HERO LANDING CARD WITH WEDDING DETAILS */}
        <div className="relative bg-white border border-accent rounded-3xl overflow-hidden shadow-lg">
          <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
              alt="علی و سارا"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent"></div>

            <div className="absolute bottom-8 right-8 left-8 text-white text-center space-y-3">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-accent uppercase">با افتخار شما را دعوت می‌نماییم به پیوند</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-vazir text-white">
                علی <Heart className="inline-block w-8 h-8 mx-2 text-rose-400 fill-rose-400 animate-bounce" /> سارا
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">پنج‌شنبه ۱۵ شهریور ۱۴۰۳ • ساعت ۱۸:۰۰ الی ۲۴:۰۰</p>
            </div>
          </div>

          {/* COUNTDOWN TIMER SECTION */}
          <div className="p-8 bg-bg-custom border-b border-accent text-center space-y-6">
            <h3 className="text-sm font-bold text-secondary flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>شمارش معکوس تا آغاز جشن رویایی</span>
            </h3>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
              <div className="bg-white border border-accent rounded-2xl p-3 shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-primary">{timeLeft.days}</span>
                <span className="text-[11px] text-secondary font-medium">روز</span>
              </div>
              <div className="bg-white border border-accent rounded-2xl p-3 shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-primary">{timeLeft.hours}</span>
                <span className="text-[11px] text-secondary font-medium">ساعت</span>
              </div>
              <div className="bg-white border border-accent rounded-2xl p-3 shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-primary">{timeLeft.minutes}</span>
                <span className="text-[11px] text-secondary font-medium">دقیقه</span>
              </div>
              <div className="bg-white border border-accent rounded-2xl p-3 shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-primary">{timeLeft.seconds}</span>
                <span className="text-[11px] text-secondary font-medium">ثانیه</span>
              </div>
            </div>

            {/* RSVP CTA BUTTON */}
            <div className="pt-2">
              <button
                onClick={() => setRsvpModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>اعلام حضور و ثبت پاسخ RSVP</span>
              </button>
            </div>
          </div>

          {/* LOCATION MAP & ADDRESS SECTION */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <span>محل برگزاری جشن</span>
              </div>
              <h4 className="text-base font-bold text-graphite">باغ تالار تشریفاتی زمرد</h4>
              <p className="text-xs text-graphite/80 leading-relaxed">
                تهران، احمدآباد مستوفی، خیابان صنوبر، پلاک ۴۵ (ورودی اختصاصی با پارکینگ مجهز).
              </p>
              <div className="pt-2 flex gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-custom border border-accent hover:border-primary text-graphite px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>مسیریابی در گوگل مپس</span>
                </a>
              </div>
            </div>

            {/* MAP EMBED SIMULATION */}
            <div className="aspect-16/9 rounded-2xl overflow-hidden border-2 border-accent relative bg-slate-100 flex items-center justify-center shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="نقشه تالار"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bg-white/90 backdrop-blur-xs px-4 py-2 rounded-xl border border-accent shadow-md flex items-center gap-2 text-xs font-bold text-primary">
                <MapPin className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>باغ تالار زمرد</span>
              </div>
            </div>
          </div>
        </div>

        {/* COUPLE'S RSVP MANAGEMENT COUNTERS & RESPONSE LIST */}
        <div className="bg-white border border-accent rounded-3xl p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-accent pb-4">
            <div>
              <h3 className="text-xl font-bold text-graphite flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span>داشبورد و آمار پاسخ‌ مهمانان (RSVP)</span>
              </h3>
              <p className="text-xs text-secondary mt-0.5">مدیریت آنلاین شرکت‌کنندگان و رژیم‌های غذایی</p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              مجموع مدعوین: ۱۵۰ نفر
            </span>
          </div>

          {/* COUNTER CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-800 font-bold">تعداد قطعی شرکت‌کنندگان</span>
                <span className="block text-2xl font-black text-emerald-900 mt-1">{attendingCount} نفر</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-200 text-emerald-800 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-rose-800 font-bold">عذرخواهی کرده‌ها (عدم حضور)</span>
                <span className="block text-2xl font-black text-rose-900 mt-1">{declinedCount} نفر</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-200 text-rose-800 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-800 font-bold">در انتظار پاسخ</span>
                <span className="block text-2xl font-black text-amber-900 mt-1">{pendingCount} نفر</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* RESPONSE LIST */}
          <div className="space-y-3 pt-4">
            <h4 className="text-sm font-bold text-graphite">آخرین پاسخ‌های ثبت شده:</h4>
            <div className="space-y-2">
              {rsvps.map(r => (
                <div key={r.id} className="p-4 bg-bg-custom rounded-2xl border border-accent/70 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-graphite">{r.name}</span>
                      {r.status === "attending" ? (
                        <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> شرکت می‌کند ({r.plusOnes} نفر)
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <XCircle className="w-3 h-3" /> عدم حضور
                        </span>
                      )}
                    </div>
                    {r.note && <p className="text-xs text-graphite/80 italic">"{r.note}"</p>}
                  </div>

                  {r.dietary && (
                    <span className="text-xs font-bold text-secondary bg-white px-3 py-1 rounded-lg border border-accent self-start sm:self-auto">
                      رژیم غذایی: {r.dietary}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* RSVP FORM MODAL */}
      {rsvpModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-accent rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 relative">
            <button
              onClick={() => setRsvpModalOpen(false)}
              className="absolute top-4 left-4 text-secondary hover:text-graphite"
            >
              ✕
            </button>

            <div className="border-b border-accent pb-3">
              <span className="text-xs font-bold text-primary">کارت دعوت عروسی علی و سارا</span>
              <h3 className="text-lg font-bold text-graphite">تأیید حضور در جشن</h3>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-graphite">پاسخ شما با موفقیت ثبت شد!</h4>
                <p className="text-xs text-secondary">از این‌که با حضورتان جشن ما را گرم‌تر می‌کنید سپاسگزاریم ❤️</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-graphite mb-1">نام و نام خانوادگی:</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    placeholder="مثلا: علی محمدی"
                    className="w-full bg-bg-custom border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-graphite mb-1">وضعیت حضور:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus("attending")}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        status === "attending"
                          ? "bg-primary text-white border-primary"
                          : "border-accent text-graphite hover:border-primary"
                      }`}
                    >
                      با افتخار شرکت می‌کنم
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("declined")}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        status === "declined"
                          ? "bg-rose-600 text-white border-rose-600"
                          : "border-accent text-graphite hover:border-rose-600"
                      }`}
                    >
                      متأسفانه نمی‌توانم بیایم
                    </button>
                  </div>
                </div>

                {status === "attending" && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-graphite mb-1">تعداد همراهان (شامل خودتان):</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={plusOnes}
                          onChange={e => setPlusOnes(parseInt(e.target.value) || 1)}
                          className="w-full bg-bg-custom border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-graphite mb-1">ملاحظات غذایی (اختیاری):</label>
                        <input
                          type="text"
                          value={dietary}
                          onChange={e => setDietary(e.target.value)}
                          placeholder="گیاه‌خوار / بدون گلوتن..."
                          className="w-full bg-bg-custom border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-bold text-graphite mb-1">پیام تبریک برای عروس و داماد:</label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="آرزوی خوشبختی..."
                    className="w-full bg-bg-custom border border-accent rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>ثبت پاسخ نهایی</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
