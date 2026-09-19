"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  ArrowLeft,
  RefreshCw,
  Store,
  BookOpen,
  Search,
  Bookmark,
  Share2,
  Eye,
  Clock,
  Tag,
  X,
  Palette,
  Shirt,
  Check,
  Copy,
  Heart
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    imageUrl: string;
    style: "royal" | "boho" | "minimal" | "vintage"
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "فضای رویایی شما برای برگزاری جشن عروسی کدام است؟",
    subtitle: "لوکیشن و اتمسفر برگزاری مراسم",
    options: [
      {
        label: "تالار و هتل‌های ۵ ستاره باشکوه",
        description: "لوسترهای کریستال بزرگ، معماری کلاسیک مجلل و منوی تشریفاتی VIP",
        imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400",
        style: "royal"
      },
      {
        label: "باغ سرسبز طبیعی و فضای رمانتیک",
        description: "دکوراسیون چوبی روستیک، ریسه‌های نور گرم و گل‌آرایی طبیعی صحرایی",
        imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400",
        style: "boho"
      },
      {
        label: "عمارت مدرن با معماری مینی‌مال",
        description: "خطوط تمیز هندسی، نورپردازی هوشمند یکدست و سادگی شیک",
        imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400",
        style: "minimal"
      },
      {
        label: "باغ قدیمی اصیل و فضای نوستالژیک",
        description: "آجرنماهای وینتیج، ماشین‌های کلاسیک قدیمی و شمع‌آرایی نوستالژیک",
        imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=400",
        style: "vintage"
      },
    ],
  },
  {
    id: 2,
    text: "کدام سبک لباس و استایل چهره را می‌پسندید؟",
    subtitle: "طراحی لباس عروس، کت‌وشلوار داماد و میکاپ",
    options: [
      {
        label: "لباس پرنسسی سنگ‌دوزی همراه تاج بلند",
        description: "تور سر دانتل بلند، میکاپ کلاسیک عربی/اروپایی و کت‌وشلوار تاکسیدو داماد",
        imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=400",
        style: "royal"
      },
      {
        label: "لباس دانتل سبک با تاج گل طبیعی",
        description: "پارچه‌های حریر سبک، آرایش موی باز موج‌دار و کت‌وشلوار کتان کژوال",
        imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400",
        style: "boho"
      },
      {
        label: "لباس ساتن ساده و شیک بدون سنگ",
        description: "برش‌های اندامی مدرن، میکاپ نود اروپا و کت‌وشلوار مشکی یقه آرشال",
        imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400",
        style: "minimal"
      },
      {
        label: "لباس یقه گیپور وینتیج کلاسیک",
        description: "طراحی رترو دهه ۷۰، تور سر کوتاه‌تر و استایل کلاسیک داماد با جلیقه",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
        style: "vintage"
      },
    ],
  },
  {
    id: 3,
    text: "پذیرایی و موسیقی محبوب شما برای میهمانان چیست؟",
    subtitle: "نوع تشریفات و سرگرمی جشن",
    options: [
      {
        label: "ارکستر زنده بزرگ و پکیج بوفه VIP",
        description: "گروه موسیقی کامل، آتش‌بازی ورود و خروج و بوفه بین‌المللی",
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400",
        style: "royal"
      },
      {
        label: "موسیقی آکوستیک زنده و بار فینگرفود",
        description: "گیتار زنده، نوشیدنی‌های طبیعی و استندهای پذیرایی تعاملی",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
        style: "boho"
      },
      {
        label: "دی‌جی حرفه‌ای و نورپردازی افکت متحرک",
        description: "استیج LED مینی‌مال، کوکتل‌بار اختصاصی و موزیک الکترونیک/پاپ",
        imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=400",
        style: "minimal"
      },
      {
        label: "گروه جاز سنتی و غذاهای سنتی اصیل",
        description: "موزیک کلاسیک ارکسترال، پذیرایی دیس‌پرس و گپ‌گفت صمیمی",
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400",
        style: "vintage"
      },
    ],
  },
];

interface Article {
  id: string;
  title: string;
  category: "ترندهای میکاپ" | "استایل داماد" | "لباس عروس" | "عکاسی و آتلیه";
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "۱۰ ترند میکاپ عروس سال ۱۴۰۴؛ سادگی نود و درخشش طبیعی",
    category: "ترندهای میکاپ",
    summary: "بررسی جدیدترین میکاپ‌های اروپا و ایران؛ چگونه میکاپی انتخاب کنیم که عکس‌های عروسی سال‌ها بعد هم شیک بمانند؟",
    content: "در سال جدید، میکاپ‌های سنگین و غلیظ جای خود را به آرایش‌های نود (Nude) با درخشش طبیعی پوست داده‌اند. استفاده از کانسیلرهای سبک، رژگونه‌های مایع هلویی و سایه‌های ملایم مات از ویژگی‌های اصلی این ترند است. میکاپ‌آرتیست‌های برتر پیشنهاد می‌کنند که حداقل یک هفته قبل از مراسم، فشیال و آبرسانی عمیق انجام دهید.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600",
    author: "سارا معتمد (میکاپ‌آرتیست)",
    date: "۱۴۰۴/۰۱/۱۵",
    readTime: "۴ دقیقه"
  },
  {
    id: "art-2",
    title: "راهنمای جامع انتخاب کت‌وشلوار دامادی؛ از تاکسیدو تا استایل کژوال",
    category: "استایل داماد",
    summary: "چگونه کت‌وشلواری انتخاب کنیم که با جثه، تم عروسی و لباس عروس تناسب کامل داشته باشد؟ نکات کلیدی پارچه و برش.",
    content: "انتخاب کت‌وشلوار داماد به اندازه لباس عروس حائز اهمیت است. اگر تم عروسی شما سلطنتی یا کلاسیک است، تاکسیدو مشکی یا سرمه‌ای با یقه ساتن آرشال بهترین گزینه است. برای عروسی‌های بوهو و فضای باز، کت‌های کتان سبک به رنگ‌های کرم، زیتونی یا طوسی روشن توصیه می‌شود.",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600",
    author: "علی رضاپور (طراح استایل)",
    date: "۱۴۰۴/۰۱/۲۰",
    readTime: "۵ دقیقه"
  },
  {
    id: "art-3",
    title: "چگونه بهترین فرم لباس عروس را بر اساس فرم بدن انتخاب کنیم؟",
    category: "لباس عروس",
    summary: "تفاوت لباس‌های A-Line، پرنسسی، ماهی و اسکارلت؛ کدام مدل فرم اندام شما را زیباتر نشان می‌دهد؟",
    content: "شناخت فرم بدن (ساعتشنی، مستطیلی، سیب یا گلابی) اولین قدم در انتخاب لباس عروس است. لباس‌های مدل A-Line تقریباً برای تمام فرم‌های بدنی مناسب هستند و ظاهری بسیار متوازن ایجاد می‌کنند. اگر قد بلندی دارید، لباس مدل ماهی جذابیت اندام شما را دوچندان می‌کند.",
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=600",
    author: "مریم احمدی (طراح مزون)",
    date: "۱۴۰۴/۰۱/۲۵",
    readTime: "۶ دقیقه"
  },
  {
    id: "art-4",
    title: "چک‌لیست عکاسی فرمالیته و روز عروسی؛ ژست‌های طبیعی و لوکیشن‌های برتر",
    category: "عکاسی و آتلیه",
    summary: "نکات طلایی برای داشتن آلبوم عکس عروسی بی‌نظیر، هماهنگی با تیم فیلمبرداری و سناریوی فرمالیته.",
    content: "عکاسی فرمالیته قبل از عروسی استرس روز مراسم را کاهش داده و امکان ثبت شات‌های سناریومحور در لوکیشن‌های طبیعی (کویر، دریا، جنگل) را فراهم می‌سازد. حتماً لیست شات‌های درخواستی (Family Shot List) را از قبل با عکاس خود هماهنگ کنید.",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=600",
    author: "امیرحسین کاظمی (عکاس)",
    date: "۱۴۰۴/۰۲/۰۱",
    readTime: "۵ دقیقه"
  }
];

export default function QuizzesAndMagazinePage() {
  const { vendors } = useApp();

  // Active View Tab: Quiz vs Magazine
  const [mainTab, setMainTab] = useState<"quiz" | "magazine">("quiz");

  // QUIZ STATE
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ royal: 0, boho: 0, minimal: 0, vintage: 0 });
  const [resultStyle, setResultStyle] = useState<"royal" | "boho" | "minimal" | "vintage" | null>(null);

  const handleSelectOption = (style: "royal" | "boho" | "minimal" | "vintage") => {
    const updatedScores = { ...scores, [style]: scores[style] + 1 };
    setScores(updatedScores);

    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let maxStyle: "royal" | "boho" | "minimal" | "vintage" = "royal";
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
    setScores({ royal: 0, boho: 0, minimal: 0, vintage: 0 });
    setResultStyle(null);
  };

  const getStyleDetails = (styleKey: "royal" | "boho" | "minimal" | "vintage") => {
    switch (styleKey) {
      case "royal":
        return {
          title: "تم سلطنتی و پر زرق‌وبرق (Royal Luxury)",
          subtitle: "شکوه باشکوه، لوسترهای کریستال و تشریفات VIP",
          desc: "شما عاشق جلال، تالارهای با سقف بلند و المان‌های شیک کلاسیک هستید. برگزاری جشن در عمارت‌های تشریفاتی با منوی بوفه بین‌المللی متناسب‌ترین گزینه برای شماست.",
          colors: [
            { name: "سبز زمردی", hex: "#2E533F" },
            { name: "طلایی شامپاینی", hex: "#D4AF37" },
            { name: "سفید عاجی", hex: "#FFFFF0" },
            { name: "پلاتینیوم", hex: "#E5E4E2" }
          ],
          dressRecommendation: "لباس عروس اسکارلت/پرنسسی با سنگ‌دوزی سنگین و تاج شاهانه • تاکسیدو مشکی یقه ساتن آرشال برای داماد",
          recommendedCategory: "تالار و باغ تشریفات"
        };
      case "boho":
        return {
          title: "تم بوهو و فضای باز (Boho Chic)",
          subtitle: "صمیمیت رمانتیک، ریسه‌های نور و گل‌آرایی روستیک",
          desc: "شما به طبیعت، حس آزادی و صمیمیت بیش از هر چیزی اهمیت می‌دهید. باغ‌های سرسبز، گل‌آرایی‌های صحرایی طبیعی و موسیقی زنده آکوستیک فضایی جادویی خلق می‌کنند.",
          colors: [
            { name: "سبز زیتونی", hex: "#556B2F" },
            { name: "کرم خاکی", hex: "#C2B280" },
            { name: "رز خاکی", hex: "#C48B9F" },
            { name: "طلایی گرم", hex: "#E5A93C" }
          ],
          dressRecommendation: "لباس عروس دانتل حریر سبک با تاج گل طبیعی و آرایش موی باز • کت‌وشلوار کتان کرم یا طوسی کژوال",
          recommendedCategory: "گل‌آرایی و ماشین عروس"
        };
      case "minimal":
        return {
          title: "تم مینی‌مال و مدرن (Modern Minimalist)",
          subtitle: "خطوط تمیز، سادگی شیک و نورپردازی هوشمند",
          desc: "شما به زیبایی مدرن و بدون شلوغی اضافه اعتقاد دارید. عمارت‌های نوساز مدرن، لباس‌های ساده ساتن و عکاسی فرمالیته زاویه جدید انتخاب اول شماست.",
          colors: [
            { name: "دودی گرافیتی", hex: "#212529" },
            { name: "نقره‌ای فولادی", hex: "#8D99AE" },
            { name: "سفید یخی", hex: "#FDFBFC" },
            { name: "پلاتین روشن", hex: "#BDCFE0" }
          ],
          dressRecommendation: "لباس عروس ساتن ساده اندامی بدون سنگ‌دوزی با تور بلند ساده • کت‌وشلوار مدرن مشکی اندامی",
          recommendedCategory: "آتلیه و فیلمبرداری"
        };
      case "vintage":
        return {
          title: "تم وینتیج و اصیل (Classic Vintage)",
          subtitle: "نوستالژی خاطره‌انگیز، شمع‌آرایی و موسیقی کلاسیک",
          desc: "شما به المان‌های اصیل و نامیرا علاقه‌مندید. ماشین‌های کلاسیک قدیمی، لباس‌های گیپور با طراحی رترو و آلبوم‌های عکس کلاسیک خاطره‌ای ماندگار می‌سازند.",
          colors: [
            { name: "عنابی کلاسیک", hex: "#800020" },
            { name: "برنز کهنه", hex: "#CD7F32" },
            { name: "کرم وینتیج", hex: "#F5F5DC" },
            { name: "سبز یشمی", hex: "#00A86B" }
          ],
          dressRecommendation: "لباس عروس یقه گیپور کلاسیک سبک دهه ۷۰ • کت‌وشلوار سه تکه داماد همراه با جلیقه و کراوات ابریشمی",
          recommendedCategory: "مزون عروس و لباس داماد"
        };
    }
  };

  // MAGAZINE & BLOG STATE
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("همه");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(["art-1"]);
  const [activeArticleModal, setActiveArticleModal] = useState<Article | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === "همه" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Top Hero Bar & Main Tab Toggle */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>مجله تخصصی و مرکز تست استایل عروسی</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-graphite">
              تست استایل‌شناسی و مجله ایده‌پردازی عروسی
            </h1>
            <p className="text-xs sm:text-sm text-secondary">
              تم ایده‌آل جشن خود را کشف کنید یا جدیدترین مقالات و ترندهای مد، میکاپ و عکاسی را مطالعه کنید.
            </p>

            {/* Main Tabs Selection */}
            <div className="flex justify-center p-1.5 bg-white rounded-2xl border border-accent shadow-xs max-w-md mx-auto">
              <button
                onClick={() => setMainTab("quiz")}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  mainTab === "quiz"
                    ? "bg-primary text-white shadow-xs"
                    : "text-secondary hover:text-graphite hover:bg-bg-custom"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>تست روانشناسی و تم شناسی</span>
              </button>

              <button
                onClick={() => setMainTab("magazine")}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  mainTab === "magazine"
                    ? "bg-primary text-white shadow-xs"
                    : "text-secondary hover:text-graphite hover:bg-bg-custom"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>مجله و مقالات آموزشی ({ARTICLES.length})</span>
              </button>
            </div>
          </div>

          {/* MAIN TAB 1: QUIZ MODULE */}
          {mainTab === "quiz" && (
            <div className="max-w-4xl mx-auto">
              {!resultStyle ? (
                <div className="bg-white p-6 sm:p-10 rounded-3xl border border-accent shadow-xs space-y-8">
                  {/* Progress Header */}
                  <div className="flex items-center justify-between text-xs font-bold text-secondary border-b border-accent pb-4">
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      سوال {currentQuestion + 1} از {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="text-primary font-extrabold bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                      <span dir="ltr">{Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
                      <span>تکمیل شده</span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-2xl font-extrabold text-graphite">
                      {QUIZ_QUESTIONS[currentQuestion].text}
                    </h2>
                    <p className="text-xs text-secondary">{QUIZ_QUESTIONS[currentQuestion].subtitle}</p>
                  </div>

                  {/* Visual Cards Grid Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(option.style)}
                        className="group bg-bg-custom hover:bg-white rounded-2xl border-2 border-accent hover:border-primary p-4 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between space-y-3"
                      >
                        <div className="relative h-40 rounded-xl overflow-hidden">
                          <img
                            src={option.imageUrl}
                            alt={option.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                            <span className="text-white text-xs font-extrabold">{option.label}</span>
                          </div>
                        </div>

                        <p className="text-xs text-secondary leading-relaxed font-medium">
                          {option.description}
                        </p>

                        <div className="pt-2 border-t border-accent/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary-hover">
                          <span>انتخاب این گزینه</span>
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* QUIZ RESULT STYLED DISPLAY */
                <div className="bg-white p-6 sm:p-10 rounded-3xl border border-accent shadow-xs space-y-8 animate-fadeIn">

                  {/* Winner Banner Header */}
                  <div className="bg-primary/5 p-6 rounded-3xl border border-primary/20 text-center space-y-3">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-secondary block">نتیجه آنالیز استایل شخصیت شما:</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                      {getStyleDetails(resultStyle).title}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-graphite">
                      {getStyleDetails(resultStyle).subtitle}
                    </p>
                    <p className="text-xs text-secondary max-w-xl mx-auto leading-relaxed">
                      {getStyleDetails(resultStyle).desc}
                    </p>
                  </div>

                  {/* Recommended Color Palette */}
                  <div className="bg-bg-custom p-6 rounded-2xl border border-accent space-y-4">
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <h3 className="font-extrabold text-sm text-graphite">پالت رنگی پیشنهادی برای تم و دکوراسیون:</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {getStyleDetails(resultStyle).colors.map((c, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-xl border border-accent flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl border border-black/10 shadow-xs shrink-0" style={{ backgroundColor: c.hex }} />
                          <div className="text-xs">
                            <span className="font-bold text-graphite block">{c.name}</span>
                            <span className="text-[10px] text-secondary font-mono dir-ltr block">{c.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dress & Groom Style Recommendation */}
                  <div className="bg-bg-custom p-6 rounded-2xl border border-accent space-y-3">
                    <div className="flex items-center gap-2">
                      <Shirt className="w-5 h-5 text-primary" />
                      <h3 className="font-extrabold text-sm text-graphite">پیشنهاد استایل لباس عروس و داماد:</h3>
                    </div>
                    <p className="text-xs text-graphite leading-relaxed bg-white p-4 rounded-xl border border-accent">
                      {getStyleDetails(resultStyle).dressRecommendation}
                    </p>
                  </div>

                  {/* Matching Directory Vendors Recommendation */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-sm text-graphite flex items-center gap-2">
                        <Store className="w-5 h-5 text-primary" />
                        تامین‌کنندگان پیشنهادی مرتبط با این تم ({getStyleDetails(resultStyle).recommendedCategory}):
                      </h3>
                      <Link
                        href={`/directory?category=${encodeURIComponent(getStyleDetails(resultStyle).recommendedCategory)}`}
                        className="text-xs text-primary hover:text-primary-hover font-bold flex items-center gap-1"
                      >
                        <span>مشاهده همه</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {vendors
                        .filter((v) => v.category === getStyleDetails(resultStyle).recommendedCategory || v.id === "v1")
                        .slice(0, 2)
                        .map((v) => (
                          <div key={v.id} className="bg-white p-4 rounded-2xl border border-accent flex items-center gap-4 hover:border-primary transition-all">
                            <img src={v.logo} alt={v.name} className="w-14 h-14 rounded-xl object-cover border border-accent" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-xs text-graphite truncate">{v.name}</h4>
                              <p className="text-[11px] text-secondary mt-0.5">{v.category} • {v.city}</p>
                              <span className="text-[10px] text-primary font-bold block mt-1">{v.priceRange}</span>
                            </div>
                            <Link
                              href={`/vendors/${v.id}`}
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-xl text-xs transition-all font-bold"
                            >
                              پروفایل
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-accent flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={resetQuiz}
                      className="w-full sm:w-auto border border-accent hover:bg-bg-custom text-graphite px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4 text-secondary" />
                      <span>شروع مجدد تست تم شناسی</span>
                    </button>

                    <button
                      onClick={() => setMainTab("magazine")}
                      className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>مطالعه مقالات آموزشی مرتبط</span>
                    </button>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* MAIN TAB 2: MAGAZINE & BLOG PORTAL */}
          {mainTab === "magazine" && (
            <div className="space-y-8">

              {/* Search Bar & Category Filter Pills */}
              <div className="bg-white p-6 rounded-3xl border border-accent shadow-xs space-y-5">
                <div className="relative">
                  <Search className="w-5 h-5 text-secondary absolute right-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجو در عنوان مقالات، ترندهای میکاپ، استایل داماد و عکاسی..."
                    className="w-full pr-12 pl-4 py-3.5 rounded-2xl border border-accent bg-bg-custom focus:outline-none focus:border-primary text-xs font-medium"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-xs font-bold text-secondary shrink-0">دسته‌بندی:</span>
                  {["همه", "ترندهای میکاپ", "استایل داماد", "لباس عروس", "عکاسی و آتلیه"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                        selectedCategory === cat
                          ? "bg-primary text-white shadow-xs"
                          : "bg-bg-custom text-graphite hover:border-primary border border-accent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Article Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => {
                  const isBookmarked = bookmarkedIds.includes(article.id);
                  return (
                    <div
                      key={article.id}
                      className="bg-white rounded-3xl border border-accent hover:border-secondary transition-all shadow-xs hover:shadow-md overflow-hidden flex flex-col justify-between group"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary border border-accent shadow-xs">
                          {article.category}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(article.id);
                          }}
                          className={`absolute top-4 left-4 p-2.5 rounded-full backdrop-blur-md transition-all shadow-xs ${
                            isBookmarked ? "bg-primary text-white" : "bg-white/90 text-graphite hover:text-primary"
                          }`}
                          title="نشان‌کردن مقاله"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-[11px] text-secondary font-medium">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.author}</span>
                          </div>

                          <h3 className="font-extrabold text-base text-graphite group-hover:text-primary transition-colors leading-relaxed">
                            {article.title}
                          </h3>

                          <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                            {article.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-accent/60 flex items-center justify-between">
                          <button
                            onClick={() => setActiveArticleModal(article)}
                            className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1.5"
                          >
                            <Eye className="w-4 h-4" />
                            <span>مطالعه کامل مقاله</span>
                          </button>

                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(window.location.href);
                              setShareCopied(true);
                              setTimeout(() => setShareCopied(false), 2000);
                            }}
                            className="text-xs text-secondary hover:text-graphite p-2 rounded-xl hover:bg-bg-custom flex items-center gap-1"
                            title="اشتراک‌گذاری"
                          >
                            <Share2 className="w-4 h-4" />
                            <span className="text-[10px]">{shareCopied ? "کپی شد" : "اشتراک"}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ARTICLE READER MODAL */}
          {activeArticleModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border border-accent">

                <div className="flex items-center justify-between border-b border-accent pb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                      {activeArticleModal.category}
                    </span>
                    <span className="text-xs text-secondary">• زمان مطالعه: {activeArticleModal.readTime}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticleModal(null)}
                    className="p-2 text-secondary hover:text-graphite rounded-xl hover:bg-bg-custom"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-graphite leading-relaxed">
                    {activeArticleModal.title}
                  </h2>

                  <div className="flex items-center gap-3 text-xs text-secondary">
                    <span>نویسنده: {activeArticleModal.author}</span>
                    <span>•</span>
                    <span>تاریخ انتشار: {activeArticleModal.date}</span>
                  </div>

                  <div className="h-64 rounded-2xl overflow-hidden border border-accent">
                    <img src={activeArticleModal.imageUrl} alt={activeArticleModal.title} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-xs sm:text-sm text-graphite leading-loose bg-bg-custom p-4 rounded-2xl border border-accent">
                    {activeArticleModal.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-accent flex justify-between items-center text-xs">
                  <button
                    onClick={() => toggleBookmark(activeArticleModal.id)}
                    className="flex items-center gap-1.5 text-primary font-bold"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(activeArticleModal.id) ? "fill-current" : ""}`} />
                    <span>{bookmarkedIds.includes(activeArticleModal.id) ? "در لیست نشان‌شده‌ها" : "نشان‌کردن مقاله"}</span>
                  </button>

                  <button
                    onClick={() => setActiveArticleModal(null)}
                    className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold shadow-xs"
                  >
                    بستن
                  </button>
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
