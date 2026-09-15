"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, HelpCircle, CheckCircle, ArrowLeft, RefreshCw, Store } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: { label: string; style: "royal" | "boho" | "modern" | "classic" }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "فضای رویایی شما برای برگزاری جشن عروسی کدام است؟",
    options: [
      { label: "تالار و هتل‌های ۵ ستاره باشکوه با لوسترهای کریستال", style: "royal" },
      { label: "باغ سرسبز طبیعی، فضای باز و دکوراسیون چوبی rustic", style: "boho" },
      { label: "عمارت مدرن با معماری مینیمال و نورپردازی هوشمند", style: "modern" },
      { label: "تالارهای سنتی اصیل با گل‌آرایی طبیعی کلاسیک", style: "classic" },
    ],
  },
  {
    id: 2,
    text: "کدام سبک طراحی لباس و استایل میکاپ را ترجیح می‌دهید؟",
    options: [
      { label: "لباس پرنسسی سنگ‌دوزی شده همراه با تاج بلند", style: "royal" },
      { label: "لباس دانتل سبک با تاج گل طبیعی و میکاپ نود", style: "boho" },
      { label: "لباس ساتن ساده و شیک بدون سنگ با خطوط مدرن", style: "modern" },
      { label: "لباس A-line کلاسیک با تور بلند و تور سر ساده", style: "classic" },
    ],
  },
  {
    id: 3,
    text: "موسیقی و تم کلی پذیرایی از میهمانان چگونه باشد؟",
    options: [
      { label: "ارکستر زنده بزرگ و منوی تشریفاتی VIP چند رنگ", style: "royal" },
      { label: "موزیک آکوستیک زنده، فینگرفود و بار نوشیدنی طبیعی", style: "boho" },
      { label: "دی‌جی حرفه‌ای با استیج LED و نورپردازی مدرن", style: "modern" },
      { label: "گروه موزیک کلاسیک و پذیرایی سنتی منظم", style: "classic" },
    ],
  },
];

export default function QuizzesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ royal: 0, boho: 0, modern: 0, classic: 0 });
  const [resultStyle, setResultStyle] = useState<string | null>(null);

  const handleSelectOption = (style: "royal" | "boho" | "modern" | "classic") => {
    const updatedScores = { ...scores, [style]: scores[style] + 1 };
    setScores(updatedScores);

    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate winner
      let maxStyle = "classic";
      let maxVal = -1;
      (Object.keys(updatedScores) as (keyof typeof updatedScores)[]).forEach((k) => {
        if (updatedScores[k] > maxVal) {
          maxVal = updatedScores[k];
          maxStyle = k;
        }
      });
      setResultStyle(maxStyle);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ royal: 0, boho: 0, modern: 0, classic: 0 });
    setResultStyle(null);
  };

  const getStyleDetails = (styleKey: string) => {
    switch (styleKey) {
      case "royal":
        return {
          title: "سبک مجلل و سلطنتی (Royal VIP)",
          desc: "شما عاشق شکوه، تالارهای بلند و منوهای پرزرق و برق هستید. برگزاری عروسی در هتل‌های ۵ ستاره یا باغ‌تالارهای تشریفاتی بهترین گزینه برای شماست.",
          category: "تالار و باغ تشریفات"
        };
      case "boho":
        return {
          title: "سبک بوهو و طبیعی (Boho Chic)",
          desc: "شما به سادگی، طبیعت و صمیمیت علاقه دارید. باغ‌های سرسبز با گل‌آرایی طبیعی روستیک و موسیقی آکوستیک شبی فراموش‌نشدنی را می‌سازد.",
          category: "گل‌آرایی و ماشین عروس"
        };
      case "modern":
        return {
          title: "سبک مدرن و مینیمال (Modern Minimal)",
          desc: "خطوط تمیز، نورپردازی مدرن، آتلیه‌های فرمالیته با زاویه دید جدید و شیک بودن در عین سادگی انتخاب اصلی شماست.",
          category: "آتلیه و فیلمبرداری"
        };
      default:
        return {
          title: "سبک کلاسیک و اصیل (Classic Romantic)",
          desc: "شما سبک‌های نامیرا و همیشگی را می‌پسندید. تشریفات منظم، موسیقی کلاسیک و آلبوم‌های عکس استاندارد انتخاب متناسب با سلیقه شماست.",
          category: "مزون عروس و لباس داماد"
        };
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>تست روانشناسی و استایل‌شناسی عروسی</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite">
              کدام سبک عروسی متناسب با شخصیت شماست؟
            </h1>
            <p className="text-xs sm:text-sm text-secondary max-w-lg mx-auto">
              با پاسخ به ۳ سوال کوتاه، بهترین تم برگزاری و پیشنهادهای متناسب با سلیقه خود را کشف کنید.
            </p>
          </div>

          {!resultStyle ? (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-accent shadow-lg space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-secondary border-b border-accent/60 pb-4">
                <span>سوال {currentQuestion + 1} از {QUESTIONS.length}</span>
                <span className="text-primary font-extrabold">{Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100)}%</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-graphite leading-relaxed">
                {QUESTIONS[currentQuestion].text}
              </h3>

              <div className="space-y-3">
                {QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.style)}
                    className="w-full text-right p-4 rounded-2xl border border-accent hover:border-primary hover:bg-primary/5 text-xs sm:text-sm font-medium text-graphite transition-all flex items-center justify-between group"
                  >
                    <span>{option.label}</span>
                    <ArrowLeft className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-3xl border border-accent shadow-xl text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-secondary">نتیجه تست استایل شما:</span>
                <h3 className="text-2xl font-extrabold text-primary">
                  {getStyleDetails(resultStyle).title}
                </h3>
                <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-md mx-auto pt-2">
                  {getStyleDetails(resultStyle).desc}
                </p>
              </div>

              <div className="pt-4 border-t border-accent flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/directory?category=${encodeURIComponent(getStyleDetails(resultStyle).category)}`}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  <span>مشاهده تامین‌کنندگان پیشنهادی ({getStyleDetails(resultStyle).category})</span>
                </Link>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto border border-accent hover:bg-bg-custom text-graphite px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4 text-secondary" />
                  <span>انجام مجدد تست</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
