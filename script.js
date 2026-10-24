
let cbwState = {
  currentStep: 1,
  targetBudget: 350000000,
  style: 'medium',
  guests: 200,
  city: 'yazd',
  cityName: 'استان یزد (مبدأ اصلی)',
  season: 'midweek',
  seasonName: 'روزهای عادی و وسط هفته',
  tier: 'mid',
  tierName: 'متوسط & متوازن',
  venueType: 'hall',
  venueTypeName: 'تالار پذیرایی مجلل',
  cateringPerGuest: 380000,
  cateringMenu: 'baghali_jooje',
  cateringMenuName: 'باقالی پلو با گوشت - جوجه کباب',
  fruitPerGuest: 45000,
  sweetPerGuest: 45000,
  fingerFoodPerGuest: 30000,
  drinkPerGuest: 30000,
  guestGift: 3000000,
  cakeKg: 15,
  cakePrice: 5250000,
  dress: 25000000,
  suit: 12000000,
  goldGrams: 25,
  goldSet: 65625150,
  ringBrideGrams: 5,
  ringBride: 13125030,
  ringGroomGrams: 6,
  ringGroom: 15750036,
  photoFilm: 35000000,
  prefilmAtelier: 20000000,
  carDecor: 5000000,
  music: 20000000,
  lightEffects: 8000000,
  carRental: 7000000,
  digitalInvitation: 1500000,
  honeymoon: 40000000,
  services: [
    { id: 'venue', title: 'اجاره تالار / باغ', targetPercent: 25, active: true, desc: 'ورودی، سالن و تشریفات اولیه' },
    { id: 'catering', title: 'منوی شام و پذیرایی', targetPercent: 30, active: true, desc: 'شام اصلی، میوه و شیرینی' },
    { id: 'photo', title: 'عکاسی و فیلم‌برداری', targetPercent: 15, active: true, desc: 'آتلیه، فیلمبرداری و آلبوم' },
    { id: 'attire', title: 'لباس و آرایشگاه', targetPercent: 12, active: true, desc: 'لباس عروس، داماد و میکاپ' },
    { id: 'gold', title: 'طلا و حلقه ازدواج', targetPercent: 10, active: true, desc: 'سرویس طلا و حلقه‌ها' },
    { id: 'music', title: 'موسیقی و نورپردازی', targetPercent: 8, active: true, desc: 'دی‌جی، نور و سیستم صوتی' }
  ]
};


// MODULAR VIEW TEMPLATE LOADERS & FALLBACKS
const HOME_VIEW_HTML = `<main id="home-view" class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
    <!-- HOMEPAGE CONTENT MODULE (home-view.html) -->
    <div id="tab-home" class="tab-content space-y-12">

      <!-- 2. ULTRA-SLIM & COMPACT EDITORIAL HERO SECTION WITH TOP BREATHING GAP -->
      <section id="hero" class="relative mt-6 sm:mt-8 text-white space-y-6 overflow-visible">
        <!-- Ambient Gold Radial Illumination -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Main Hero Content Dual-Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">

          <!-- RIGHT / MAIN ACTION PANEL (7 cols) -->
          <div class="lg:col-span-7 bg-[#0e121c]/90 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 text-right shadow-2xl relative overflow-hidden border border-[#D4AF37]/30">
            <!-- Soft Ambient Gold Radial Background Glow -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_65%)] pointer-events-none"></div>

            <div class="space-y-3 relative z-10">
              <div class="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-xs font-black">
                <i data-lucide="crown" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>Aroosi No — پلتفرم جامع و هوشمند عروسی‌های مجلل استان یزد</span>
              </div>

              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug">
                آفرینش <span class="bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500 bg-clip-text text-transparent">خاطره‌انگیزترین لحظات لوکس</span>
              </h1>

              <p class="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                مدیریت هوشمند، استعلام قیمت مستقیم و رزرو اختصاصی بهترین تالارها، آتلیه‌ها و تشریفات یزد
              </p>
            </div>

            <!-- SMART SEARCH BAR ("جستجوی سریع") -->
            <div class="relative w-full z-10">
              <div class="flex items-center gap-2 bg-[#0F172A]/90 backdrop-blur-md border border-[#D4AF37]/60 rounded-full p-2 shadow-[0_8px_25px_rgba(212,175,55,0.15)] focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/50 transition-all">
                <div class="relative flex-1 flex items-center pr-3">
                  <i data-lucide="search" class="w-4 h-4 text-[#D4AF37] shrink-0"></i>
                  <input id="hero-pill-search-input" type="text" oninput="handleHeroSearchInput(this.value)" onfocus="handleHeroSearchFocus()" onkeydown="if(event.key==='Enter') executeHeroSearch()" placeholder="جستجوی سریع تالار، آتلیه، مزون، سالن زیبایی..." class="w-full bg-transparent text-white placeholder-slate-400 border-none pr-2 text-xs sm:text-sm font-medium focus:outline-none">
                </div>

                <button type="button" onclick="executeHeroSearch()" class="gold-shimmer-btn text-[#0F251A] font-black px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all shrink-0 cursor-pointer flex items-center gap-1.5 shadow-md">
                  <i data-lucide="compass" class="w-4 h-4 text-[#0F251A]"></i>
                  <span>جستجوی سریع ↗</span>
                </button>
              </div>

              <!-- EXPANDED WIDE FLOATING GLASS MULTI-RESULT DROPDOWN -->
              <div id="hero-search-dropdown" class="hidden absolute top-full right-0 left-0 mt-2 bg-[#07090E]/95 backdrop-blur-2xl text-white border border-[#C5A059] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-50 overflow-hidden text-right transition-all">
                <!-- Dynamically populated via JS -->
              </div>
            </div>

            <!-- QUICK ACCESS ACTION CHIPS (شروع برنامه‌ریزی, دستیار استعلام, توصیه هوشمند AI) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 relative z-10">
              <button type="button" onclick="openStartPlanningModal()" class="gold-shimmer-btn text-[#0F251A] font-black py-2.5 px-3 rounded-2xl text-xs transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 shadow-md border border-[#D4AF37]">
                <i data-lucide="sparkles" class="w-4 h-4 text-[#0F251A]"></i>
                <span>شروع برنامه‌ریزی</span>
              </button>

              <!-- "دستیار اختصاصی" button triggers dedicated assistant modal (#dedicatedAssistantModal) -->
              <button type="button" onclick="openDedicatedAssistantModal()" class="bg-[#141A28] hover:bg-[#1E293B] text-[#D4AF37] border border-[#C5A059]/40 font-bold py-2.5 px-3 rounded-2xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
                <i data-lucide="crown" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>دستیار اختصاصی</span>
              </button>

              <!-- "توصیه هوشمند AI" button triggers 3-step recommendation wizard (#modal-smart-wizard) -->
              <button type="button" onclick="openQuickInquiryModal()" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/40 font-bold py-2.5 px-3 rounded-2xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
                <i data-lucide="wand-2" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>توصیه هوشمند AI</span>
              </button>
            </div>

            <!-- COMPACT SLEEK GLASS PLATFORM STATS BAR (REPLACED DISTRICT CHIPS) -->
            <div class="bg-[#141A28]/90 border border-[#C5A059]/30 rounded-2xl p-3 shadow-lg">
              <div class="flex items-center justify-between pb-1.5 mb-2 border-b border-[#C5A059]/15">
                <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5">
                  <i data-lucide="bar-chart-3" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                  آمارها و ویژگی‌های کلیدی پلتفرم
                </span>
                <span class="text-[9.5px] font-bold text-slate-400">استودیوها & برندهای تاییدشده یزد</span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div class="bg-[#0e121c]/80 border border-[#C5A059]/20 rounded-xl p-1.5 transition-all hover:border-[#D4AF37]/50">
                  <span class="text-xs sm:text-sm font-black text-[#D4AF37] block">۵۰۰+</span>
                  <span class="text-[9px] sm:text-[10px] text-slate-300 font-bold block">تامین‌کننده معتبر</span>
                </div>
                <div class="bg-[#0e121c]/80 border border-[#C5A059]/20 rounded-xl p-1.5 transition-all hover:border-[#D4AF37]/50">
                  <span class="text-xs sm:text-sm font-black text-[#D4AF37] block">۲,۵۰۰+</span>
                  <span class="text-[9px] sm:text-[10px] text-slate-300 font-bold block">استعلام موفق</span>
                </div>
                <div class="bg-[#0e121c]/80 border border-[#C5A059]/20 rounded-xl p-1.5 transition-all hover:border-[#D4AF37]/50">
                  <span class="text-xs sm:text-sm font-black text-[#D4AF37] block">۱۰۰٪</span>
                  <span class="text-[9px] sm:text-[10px] text-slate-300 font-bold block">تضمین اصالت</span>
                </div>
                <div class="bg-[#0e121c]/80 border border-[#C5A059]/20 rounded-xl p-1.5 transition-all hover:border-[#D4AF37]/50">
                  <span class="text-xs sm:text-sm font-black text-[#D4AF37] block">۲۴/۷</span>
                  <span class="text-[9px] sm:text-[10px] text-slate-300 font-bold block">پشتیبانی اختصاصی</span>
                </div>
              </div>
            </div>
          </div>

          <!-- LEFT / CENTER FOCUSED VENDOR SHOWCASE CARDS (5 cols) -->
          <div id="hero-vendor-showcase-panel" class="lg:col-span-5 bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-2xl relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span class="text-xs font-black text-[#D4AF37]">ویترین تامین‌کنندگان برتر یزد</span>
              </div>
              <div class="flex items-center gap-1">
                <button type="button" onclick="slideVipFocalCarousel('prev')" class="w-7 h-7 rounded-full bg-[#141A28] border border-[#C5A059]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#1E293B] cursor-pointer transition-all shadow-sm" title="قبلی">
                  <i data-lucide="chevron-up" class="w-4 h-4 text-[#D4AF37]"></i>
                </button>
                <button type="button" onclick="slideVipFocalCarousel('next')" class="w-7 h-7 rounded-full bg-[#141A28] border border-[#C5A059]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#1E293B] cursor-pointer transition-all shadow-sm" title="بعدی">
                  <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37]"></i>
                </button>
              </div>
            </div>

            <!-- Vertical Film-Strip Stage Container with Side Pagination Dots -->
            <div id="vip-focal-stage" class="relative min-h-[350px] sm:min-h-[370px] flex items-center justify-between gap-2 touch-pan-y overflow-hidden py-1" onmouseenter="pauseVipFocalAutoScroll()" onmouseleave="resumeVipFocalAutoScroll()">
              <div id="vip-showcase-container" class="w-full flex flex-col items-center justify-center transition-all duration-500 gap-2 relative z-10 py-1 h-full">
                <!-- Dynamically populated via renderVipFocalShowcase() -->
              </div>

              <!-- Vertical Carousel Pagination Dots (Right Side) -->
              <div id="vip-carousel-dots" class="flex flex-col items-center justify-center gap-1.5 z-20 shrink-0">
                <!-- Dynamically populated -->
              </div>
            </div>
          </div>

        </div>
      </section>      <!-- HOMEPAGE BENTO DASHBOARD GRID DIRECTLY BELOW HERO -->
      <section id="homepage-bento-dashboard" class="space-y-6 my-8 text-white max-w-7xl mx-auto">

        <!-- ROW 1 (60% / 40% Split - Side-by-Side) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <!-- RIGHT BOX (60% width ratio - 7 cols): Dynamic Category Hub -->
          <div class="lg:col-span-7 bg-[#0e121c]/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-2xl">
            <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-3 flex-wrap gap-2">
              <div class="space-y-0.5 text-right">
                <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5 block">
                  <i data-lucide="layers" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                  <span>دسته‌بندی‌های اصلی & هاب تخصصی</span>
                </span>
                <h2 class="text-base sm:text-lg font-black text-[#F7F5F0]">دسته‌بندی‌های هوشمند خدمات عروسی یزد</h2>
              </div>
              <a href="directory.html" class="text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                <span>مشاهده دایرکتوری کامل ➔</span>
              </a>
            </div>

            <!-- Asymmetric Bento Grid for Categories -->
            <div id="main-categories-bento-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <!-- Hero Feature Card (Spans 2 cols on SM) -->
              <div onclick="openCategorySubgroupsModal('venue')" class="sm:col-span-2 group relative h-40 rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg bg-[#0F172A]">
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" alt="تالار و باغ" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3 text-right space-y-1">
                  <span class="text-[9.5px] font-black text-[#07090E] bg-[#D4AF37] px-2 py-0.5 rounded-full shadow-sm inline-block">۴۵ مجموعه فعال</span>
                  <h3 class="text-sm sm:text-base font-black text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <i data-lucide="building-2" class="w-4 h-4 text-[#D4AF37]"></i>
                    <span>تالار و باغ‌سراهای لوکس</span>
                  </h3>
                  <p class="text-[10.5px] text-slate-300 font-medium">مشاهده زیردسته‌ها & ظرفیت سالن‌ها ▾</p>
                </div>
              </div>

              <!-- Category Card 2: Photo -->
              <div onclick="openCategorySubgroupsModal('photo')" class="group relative h-40 rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg bg-[#0F172A]">
                <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80" alt="آتلیه" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3 text-right space-y-1">
                  <span class="text-[9.5px] font-black text-[#07090E] bg-[#D4AF37] px-2 py-0.5 rounded-full shadow-sm inline-block">۳۲ استودیو</span>
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <i data-lucide="camera" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>آتلیه & عکاسی</span>
                  </h3>
                  <p class="text-[10px] text-slate-300 font-medium">فرمالیته & آلبوم 4K ▾</p>
                </div>
              </div>

              <!-- Category Card 3: Beauty -->
              <div onclick="openCategorySubgroupsModal('beauty')" class="group relative h-40 rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg bg-[#0F172A]">
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" alt="سالن زیبایی" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3 text-right space-y-1">
                  <span class="text-[9.5px] font-black text-[#07090E] bg-[#D4AF37] px-2 py-0.5 rounded-full shadow-sm inline-block">۲۸ میکاپ آرتیست</span>
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <i data-lucide="scissors" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>سالن زیبایی & میکاپ</span>
                  </h3>
                  <p class="text-[10px] text-slate-300 font-medium">سبک لایت & VIP ▾</p>
                </div>
              </div>

              <!-- Category Card 4: Maison -->
              <div onclick="openCategorySubgroupsModal('boutique')" class="group relative h-40 rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg bg-[#0F172A]">
                <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80" alt="مزون" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3 text-right space-y-1">
                  <span class="text-[9.5px] font-black text-[#07090E] bg-[#D4AF37] px-2 py-0.5 rounded-full shadow-sm inline-block">۲۵ مزون برتر</span>
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <i data-lucide="shirt" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>مزون & لباس عروس</span>
                  </h3>
                  <p class="text-[10px] text-slate-300 font-medium">سفارشی‌سازی & اجاره ▾</p>
                </div>
              </div>

              <!-- Category Card 5: Catering -->
              <div onclick="openCategorySubgroupsModal('catering')" class="group relative h-40 rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg bg-[#0F172A]">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80" alt="تشریفات" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3 text-right space-y-1">
                  <span class="text-[9.5px] font-black text-[#07090E] bg-[#D4AF37] px-2 py-0.5 rounded-full shadow-sm inline-block">۲۰ کترینگ لوکس</span>
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>تشریفات & کترینگ</span>
                  </h3>
                  <p class="text-[10px] text-slate-300 font-medium">منوی دیس‌پرس & سلف ▾</p>
                </div>
              </div>
            </div>
          </div>

          <!-- LEFT BOX (40% width ratio - 5 cols): Functional Quick Shortcuts -->
          <div class="lg:col-span-5 bg-[#0e121c]/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-2xl">
            <div class="space-y-1 text-right border-b border-[#C5A059]/20 pb-3">
              <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5 block">
                <i data-lucide="zap" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>دسترسی سریع & ابزارهای هوشمند</span>
              </span>
              <h2 class="text-base sm:text-lg font-black text-[#F7F5F0]">میانبرهای کاربردی عروسی تو</h2>
            </div>

            <!-- 4 Filled Rich Visual Interactive Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              <!-- Shortcut Card 1: Digital Invitation -->
              <div onclick="window.location.href='invitation.html';" class="bg-[#141A28] hover:bg-[#1E293B] border border-[#C5A059]/35 hover:border-[#D4AF37] p-4 rounded-2xl transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-lg">
                <div class="flex items-center justify-between">
                  <span class="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#07090E] transition-all">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                  </span>
                  <span class="text-[9.5px] font-bold text-amber-200 bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">آنلاین & QR</span>
                </div>
                <div class="space-y-1 text-right">
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors">کارت دعوت دیجیتال</h3>
                  <p class="text-[10px] text-slate-300 font-medium leading-relaxed">مهر موم طلایی & پاسخ RSVP ➔</p>
                </div>
              </div>

              <!-- Shortcut Card 2: Budget Calculator -->
              <div onclick="window.location.href='planning.html#budget';" class="bg-[#141A28] hover:bg-[#1E293B] border border-[#C5A059]/35 hover:border-[#D4AF37] p-4 rounded-2xl transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-lg">
                <div class="flex items-center justify-between">
                  <span class="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#07090E] transition-all">
                    <i data-lucide="calculator" class="w-4 h-4"></i>
                  </span>
                  <span class="text-[9.5px] font-bold text-amber-200 bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">هوش مصنوعی</span>
                </div>
                <div class="space-y-1 text-right">
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors">تخمین بودجه</h3>
                  <p class="text-[10px] text-slate-300 font-medium leading-relaxed">برآورد هوشمند هزینه‌ها ➔</p>
                  <span class="inline-block mt-1 text-[9px] sm:text-[9.5px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-md">تنها با ۳ کلیک بودجه عروسی‌ات را شفاف کن ✨</span>
                </div>
              </div>

              <!-- Shortcut Card 3: Psychology Quizzes -->
              <div onclick="window.location.href='style-quiz.html';" class="bg-[#141A28] hover:bg-[#1E293B] border border-[#C5A059]/35 hover:border-[#D4AF37] p-4 rounded-2xl transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-lg">
                <div class="flex items-center justify-between">
                  <span class="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#07090E] transition-all">
                    <i data-lucide="brain" class="w-4 h-4"></i>
                  </span>
                  <span class="text-[9.5px] font-bold text-amber-200 bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">تست سبک</span>
                </div>
                <div class="space-y-1 text-right">
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors">تست‌های روانشناسی</h3>
                  <p class="text-[10px] text-slate-300 font-medium leading-relaxed">شناخت سبک عروسی ideal ➔</p>
                </div>
              </div>

              <!-- Shortcut Card 4: Full Planning Hub -->
              <div onclick="window.location.href='planning.html';" class="bg-[#141A28] hover:bg-[#1E293B] border border-[#C5A059]/35 hover:border-[#D4AF37] p-4 rounded-2xl transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-lg">
                <div class="flex items-center justify-between">
                  <span class="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#07090E] transition-all">
                    <i data-lucide="clipboard-list" class="w-4 h-4"></i>
                  </span>
                  <span class="text-[9.5px] font-bold text-amber-200 bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">چک‌لیست ۱۲ ماهه</span>
                </div>
                <div class="space-y-1 text-right">
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors">ورود به پنل برنامه‌ریزی</h3>
                  <p class="text-[10px] text-slate-300 font-medium leading-relaxed">مدیریت مهمانان & زمان‌بندی ➔</p>
                  <span class="inline-block mt-1 text-[9px] sm:text-[9.5px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-md">شروع برنامه‌ریزی هوشمند در کمتر از ۲ دقیقه 🚀</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ROW 2 (100% Full Width): Magazine & Ideas Hub -->
        <div id="magazine-section" class="bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4">
          <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-3 flex-wrap gap-2">
            <div class="space-y-0.5 text-right">
              <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5 block">
                <i data-lucide="newspaper" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>مجله عروسی تو & ایده‌های الهام‌بخش</span>
              </span>
              <h2 class="text-base sm:text-lg font-black text-[#F7F5F0]">آخرین مقالات، ترندها و آلبوم‌های فرمالیته یزد</h2>
            </div>
            <a href="blog.html" onclick="event.preventDefault(); window.location.href='blog.html';" class="text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
              <span>ورود به مجله کامل ➔</span>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Article Card 1 -->
            <div onclick="if(typeof openArticleReaderModal === 'function'){ openArticleReaderModal(1); } else { window.location.href='blog-single.html?id=1'; }" class="group bg-[#141A28]/80 border border-[#C5A059]/30 hover:border-[#D4AF37] rounded-2xl overflow-hidden transition-all cursor-pointer shadow-lg flex flex-col justify-between">
              <div class="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" alt="راهنمای عقد" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <span class="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3 h-3 text-[#D4AF37]"></i>
                  <span>زمان مطالعه: ۵ دقیقه</span>
                </span>
              </div>
              <div class="p-3.5 space-y-1.5 text-right">
                <span class="text-[10px] font-bold text-[#D4AF37] block">راهنمای برگزاری</span>
                <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">۱۰ نکته طلایی برای رزرو تالارهای سنتی و مدرن یزد</h3>
                <p class="text-[10.5px] text-slate-300 font-medium line-clamp-2 leading-relaxed">چگونه بهترین باغ‌سراهای یزد را بر اساس ظرفیت مهمانان و بودجه انتخاب کنیم...</p>
              </div>
            </div>

            <!-- Article Card 2 -->
            <div onclick="if(typeof openArticleReaderModal === 'function'){ openArticleReaderModal(2); } else { window.location.href='blog-single.html?id=2'; }" class="group bg-[#141A28]/80 border border-[#C5A059]/30 hover:border-[#D4AF37] rounded-2xl overflow-hidden transition-all cursor-pointer shadow-lg flex flex-col justify-between">
              <div class="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" alt="ترند میکاپ" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <span class="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3 h-3 text-[#D4AF37]"></i>
                  <span>زمان مطالعه: ۴ دقیقه</span>
                </span>
              </div>
              <div class="p-3.5 space-y-1.5 text-right">
                <span class="text-[10px] font-bold text-[#D4AF37] block">زیبایی & استایل</span>
                <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">ترندهای میکاپ عروس ۲۰۲۵: سبک‌های لایت و اروپایی</h3>
                <p class="text-[10.5px] text-slate-300 font-medium line-clamp-2 leading-relaxed">معرفی برترین میکاپ آرتیست‌های یزد و استایل‌های محبوب سال جدید...</p>
              </div>
            </div>

            <!-- Article Card 3 -->
            <div onclick="if(typeof openArticleReaderModal === 'function'){ openArticleReaderModal(3); } else { window.location.href='blog-single.html?id=3'; }" class="group bg-[#141A28]/80 border border-[#C5A059]/30 hover:border-[#D4AF37] rounded-2xl overflow-hidden transition-all cursor-pointer shadow-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div class="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80" alt="فرمالیته کویر" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
                <span class="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3 h-3 text-[#D4AF37]"></i>
                  <span>زمان مطالعه: ۶ دقیقه</span>
                </span>
              </div>
              <div class="p-3.5 space-y-1.5 text-right">
                <span class="text-[10px] font-bold text-[#D4AF37] block">عکاسی & فرمالیته</span>
                <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">لوکیشن‌های رویایی عکاسی فرمالیته در کویر و بافت تاریخی یزد</h3>
                <p class="text-[10.5px] text-slate-300 font-medium line-clamp-2 leading-relaxed">ایده‌های خاص تصویربرداری و زاویه‌بندی دوربین برای زوج‌های خاص‌پسند...</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ROW 3 (50% / 50% Split - Equal Symmetric Boxes) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <!-- RIGHT BOX (50% width ratio - 6 cols): Testimonials & Couple Reviews -->
          <div id="verified-testimonials-section" class="lg:col-span-6 bg-[#0e121c]/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-2xl">
            <div class="flex flex-col space-y-2 border-b border-[#C5A059]/20 pb-3">
              <div class="flex items-center justify-between">
                <div class="space-y-0.5 text-right">
                  <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5 block">
                    <i data-lucide="message-square" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>تجربیات واقعی زوجین</span>
                  </span>
                  <h2 class="text-base sm:text-lg font-black text-[#F7F5F0]">نظرات & حس زوج‌های عروسی تو</h2>
                </div>
                <span class="text-[10.5px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="star" class="w-3 h-3 text-amber-400"></i>
                  <span>۴.۹/۵ رضایت کل</span>
                </span>
              </div>

              <!-- Testimonials Filter Tabs -->
              <div id="testimonial-filter-pills" class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 text-xs font-bold">
                <button type="button" onclick="filterTestimonialsByCategory('all')" class="testimonial-pill active bg-[#D4AF37] text-[#07090E] px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0" data-cat="all">همه نظرات</button>
                <button type="button" onclick="filterTestimonialsByCategory('hall')" class="testimonial-pill bg-white/5 border border-amber-500/20 text-slate-300 hover:text-amber-400 active:bg-amber-500/20 px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0" data-cat="hall">تالار & باغ</button>
                <button type="button" onclick="filterTestimonialsByCategory('studio')" class="testimonial-pill bg-white/5 border border-amber-500/20 text-slate-300 hover:text-amber-400 active:bg-amber-500/20 px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0" data-cat="studio">آتلیه & عکاسی</button>
                <button type="button" onclick="filterTestimonialsByCategory('mezon')" class="testimonial-pill bg-white/5 border border-amber-500/20 text-slate-300 hover:text-amber-400 active:bg-amber-500/20 px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0" data-cat="mezon">مزون & میکاپ</button>
                <button type="button" onclick="filterTestimonialsByCategory('catering')" class="testimonial-pill bg-white/5 border border-amber-500/20 text-slate-300 hover:text-amber-400 active:bg-amber-500/20 px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0" data-cat="catering">تشریفات</button>
              </div>
            </div>

            <!-- Testimonials Multi-Item Scroller Container -->
            <div id="testimonials-carousel-container" class="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 text-right">
              <!-- Review Card 1 -->
              <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shrink-0 w-[260px] sm:w-[290px] space-y-2 shadow-lg">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" class="w-8 h-8 rounded-full object-cover border border-[#D4AF37]">
                    <div>
                      <span class="text-xs font-black text-white block">مریم & علی</span>
                      <span class="text-[9.5px] text-slate-400 font-medium block">رزرو تالار مشیرالممالک</span>
                    </div>
                  </div>
                  <span class="text-amber-400 text-xs font-black flex items-center gap-0.5">
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                  </span>
                </div>
                <p class="text-[11px] text-slate-300 font-medium leading-relaxed line-clamp-3">"استعلام قیمت مستقیم و چت با مدیر تالار فوق‌العاده سریع بود. همه هزینه‌ها دقیقا مطابق با فاکتور نهایی شد."</p>
              </div>

              <!-- Review Card 2 -->
              <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shrink-0 w-[260px] sm:w-[290px] space-y-2 shadow-lg">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" class="w-8 h-8 rounded-full object-cover border border-[#D4AF37]">
                    <div>
                      <span class="text-xs font-black text-white block">رضا & سارا</span>
                      <span class="text-[9.5px] text-slate-400 font-medium block">رزرو آتلیه کویر</span>
                    </div>
                  </div>
                  <span class="text-amber-400 text-xs font-black flex items-center gap-0.5">
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                  </span>
                </div>
                <p class="text-[11px] text-slate-300 font-medium leading-relaxed line-clamp-3">"کارت دعوت دیجیتال با تم زمرد بسیار شیک بود و همه مهمانان ما فرم RSVP آنلاین را به راحتی پر کردند."</p>
              </div>
            </div>
          </div>

          <!-- LEFT BOX (50% width ratio - 6 cols): Value Proposition -->
          <div class="why-us-section lg:col-span-6 bg-[#0e121c]/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-2xl">
            <div class="space-y-0.5 text-right border-b border-[#C5A059]/20 pb-3">
              <span class="text-[11px] font-black text-[#D4AF37] flex items-center gap-1.5 block">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>مزایای رقابتی پلتفرم</span>
              </span>
              <h2 class="text-base sm:text-lg font-black text-[#F7F5F0]">چرا زوج‌ها عروسی تو را انتخاب می‌کنند؟</h2>
            </div>

            <!-- 4-Card Bento Grid (DISPLAY-ONLY) -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-[#141A28] border border-[#C5A059]/20 rounded-2xl p-3.5 text-right space-y-1 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] group">
                <span class="text-xs sm:text-sm font-black text-[#D4AF37] flex items-center gap-1 block">
                  <i data-lucide="shield" class="w-3.5 h-3.5 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all"></i>
                  <span>تضمین قیمت & اصالت</span>
                </span>
                <p class="text-[10px] text-slate-300 font-medium leading-normal">تضمین عدم وجود هزینه پنهان و مطابقت کامل با استعلام رسمی</p>
              </div>

              <div class="bg-[#141A28] border border-[#C5A059]/20 rounded-2xl p-3.5 text-right space-y-1 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] group">
                <span class="text-xs sm:text-sm font-black text-[#D4AF37] flex items-center gap-1 block">
                  <i data-lucide="message-square" class="w-3.5 h-3.5 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all"></i>
                  <span>پاسخگویی مستقیم VIP</span>
                </span>
                <p class="text-[10px] text-slate-300 font-medium leading-normal">ارتباط مستقیم با مدیریت برندها و دریافت سریع پیش‌فاکتور</p>
              </div>

              <div class="bg-[#141A28] border border-[#C5A059]/20 rounded-2xl p-3.5 text-right space-y-1 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] group">
                <span class="text-xs sm:text-sm font-black text-[#D4AF37] flex items-center gap-1 block">
                  <i data-lucide="qr-code" class="w-3.5 h-3.5 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all"></i>
                  <span>کارت دعوت آنلاین</span>
                </span>
                <p class="text-[10px] text-slate-300 font-medium leading-normal">ارسال لینک اختصاصی هوشمند و مدیریت کادوها و صندلی‌ها</p>
              </div>

              <div class="bg-[#141A28] border border-[#C5A059]/20 rounded-2xl p-3.5 text-right space-y-1 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] group">
                <span class="text-xs sm:text-sm font-black text-[#D4AF37] flex items-center gap-1 block">
                  <i data-lucide="bot" class="w-3.5 h-3.5 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all"></i>
                  <span>هوش مصنوعی بودجه‌ریز</span>
                </span>
                <p class="text-[10px] text-slate-300 font-medium leading-normal">برآورد هوشمند هزینه‌ها بر اساس سناریوهای اقتصادی و لاکچری</p>
              </div>
            </div>
          </div>

        </div>

        <!-- ROW 4 (100% Full Width): Full-Width Partner/Vendor Banner -->
        <div class="bg-gradient-to-r from-[#0E121C] via-[#161C2B] to-[#0E121C] border border-[#D4AF37]/50 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div class="space-y-2 text-right relative z-10 max-w-2xl">
            <span class="text-[11px] font-black text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3 py-1 rounded-full inline-flex items-center gap-1">
              <i data-lucide="handshake" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
              <span>ویژه صاحبان تالارها، آتلیه‌ها، مزون‌ها & تامین‌کنندگان یزد</span>
            </span>
            <h2 class="text-lg sm:text-2xl font-black text-white">ثبت نام و ورود همکاران & ثبت کسب‌وکارها</h2>
            <p class="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              با عضویت در پلتفرم، ویترین اختصاصی برند خود را بسازید، استعلام‌های مستقیم زوجین را دریافت کرده و تقویم رزروها را مدیریت کنید.
            </p>
            <div class="pt-1">
              <span class="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm">
                🔥 پیوستن به بیش از ۲۰۰+ تامین‌کننده برتر استان یزد | دسترسی روزانه به صدها زوج در شرف ازدواج
              </span>
            </div>
          </div>

          <div class="flex items-center gap-3 shrink-0 relative z-10">
            <button type="button" onclick="toggleVendorModalStatic(true)" class="gold-shimmer-btn text-[#0F251A] font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2">
              <span>ثبت رایگان کسب‌وکار ↗</span>
            </button>
            <button type="button" onclick="openAuthModal('vendor')" class="bg-[#141A28] hover:bg-[#1E293B] text-[#D4AF37] border border-[#C5A059]/40 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer">
              <span>ورود همکاران</span>
            </button>
          </div>
        </div>

      </section>
</main>`;
const DIRECTORY_VIEW_HTML = `<!-- ISOLATED VENDOR DIRECTORY CONTENT MODULE (directory-view.html) -->
<div id="tab-directory" class="tab-content hidden space-y-8">

  <!-- 1. VENDOR STORIES & SHOWCASE HIGHLIGHTS CIRCLE BAR -->
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <span class="text-xs font-black text-[#D4AF37] flex items-center gap-1">
        <i data-lucide="play-circle" class="w-4 h-4 text-[#D4AF37]"></i>
        <span>استوری‌ها و تیزرهای تصویری تامین‌کنندگان برتر یزد</span>
      </span>
      <span class="text-[10px] text-slate-400 font-bold">برای مشاهده تیزر روی دایره کلیک کنید</span>
    </div>

    <div id="story-highlights-bar" class="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 px-1">
      <div onclick="openStoryLightbox('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800', 'هتل باغ مشیرالممالک')" class="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0">
        <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] shadow-lg group-hover:scale-108 transition-transform">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=150" class="w-full h-full rounded-full object-cover border-2 border-[#07090E]">
        </div>
        <span class="text-[10px] font-bold text-slate-200 group-hover:text-[#D4AF37]">مشیرالممالک</span>
      </div>

      <div onclick="openStoryLightbox('https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800', 'استودیو کویر')" class="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0">
        <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] shadow-lg group-hover:scale-108 transition-transform">
          <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=150" class="w-full h-full rounded-full object-cover border-2 border-[#07090E]">
        </div>
        <span class="text-[10px] font-bold text-slate-200 group-hover:text-[#D4AF37]">استودیو کویر</span>
      </div>

      <div onclick="openStoryLightbox('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', 'سالن زیبایی رویال')" class="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0">
        <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] shadow-lg group-hover:scale-108 transition-transform">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=150" class="w-full h-full rounded-full object-cover border-2 border-[#07090E]">
        </div>
        <span class="text-[10px] font-bold text-slate-200 group-hover:text-[#D4AF37]">زیبایی رویال</span>
      </div>

      <div onclick="openStoryLightbox('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', 'مزون لورنت')" class="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0">
        <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] shadow-lg group-hover:scale-108 transition-transform">
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=150" class="w-full h-full rounded-full object-cover border-2 border-[#07090E]">
        </div>
        <span class="text-[10px] font-bold text-slate-200 group-hover:text-[#D4AF37]">مزون لورنت</span>
      </div>

      <div onclick="openStoryLightbox('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', 'تشریفات یاس')" class="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0">
        <div class="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] shadow-lg group-hover:scale-108 transition-transform">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=150" class="w-full h-full rounded-full object-cover border-2 border-[#07090E]">
        </div>
        <span class="text-[10px] font-bold text-slate-200 group-hover:text-[#D4AF37]">تشریفات یاس</span>
      </div>
    </div>
  </div>

  <!-- 2. STICKY TOP GLASS FILTER ISLAND & VIEW MODE SWITCHER -->
  <div id="directory-primary-filter-island" class="bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-4 sm:p-5 shadow-2xl text-white space-y-4">

    <!-- Header Row with Dual View Switcher -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#C5A059]/20 pb-4">
      <div class="space-y-1 text-right w-full md:w-auto">
        <span class="text-[11px] font-black text-[#D4AF37] block">💎 دایرکتوری برندهای تاییدشده یزد</span>
        <h1 class="text-lg sm:text-xl font-black text-[#F7F5F0]">هاب استکشافی و رزرو تامین‌کنندگان لوکس</h1>
      </div>

      <!-- DUAL VIEW SWITCHER: MAGAZINE GRID vs. OBSIDIAN MAP -->
      <div class="flex items-center gap-2 bg-[#141A28] border border-[#C5A059]/40 p-1.5 rounded-2xl shrink-0 shadow-lg">
        <button type="button" id="dir-btn-view-grid" onclick="toggleDirectoryMainView('grid')" class="px-4 py-2 rounded-xl text-xs font-black bg-[#D4AF37] text-[#0F251A] shadow-md transition-all cursor-pointer flex items-center gap-1.5">
          <span>📸 گرید مجله‌ای</span>
        </button>
        <button type="button" id="dir-btn-view-map" onclick="toggleDirectoryMainView('map')" class="px-4 py-2 rounded-xl text-xs font-black text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5">
          <span>🗺️ نقشه تعاملی یزد</span>
        </button>
      </div>
    </div>

    <!-- SEARCH INPUT & VIBE/MOOD FILTERS -->
    <div class="space-y-3">
      <div class="flex flex-col md:flex-row items-center justify-between gap-3">
        <!-- Search Input -->
        <div class="relative w-full md:w-80">
          <input id="directory-instant-search" type="text" oninput="filterVendors()" placeholder="جستجوی نام تالار، آتلیه، مزون..." class="w-full bg-[#141A28] border border-[#C5A059]/30 rounded-2xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37]">
          <i data-lucide="search" class="w-4 h-4 text-[#D4AF37] absolute right-3 top-2.5"></i>
        </div>

        <!-- Mood & Vibe Pills -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold w-full md:w-auto">
          <span class="text-[10.5px] text-amber-300 font-extrabold shrink-0">سبک و استایل:</span>
          <button type="button" onclick="filterVendorsByCategoryTitle('all')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1.5 rounded-xl shrink-0 cursor-pointer">🏛️ سنتی یزد</button>
          <button type="button" onclick="filterVendorsByCategoryTitle('all')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1.5 rounded-xl shrink-0 cursor-pointer">✨ مدرن & لوکس</button>
          <button type="button" onclick="filterVendorsByCategoryTitle('all')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1.5 rounded-xl shrink-0 cursor-pointer">🌿 فضای باز</button>
          <button type="button" onclick="filterVendorsByCategoryTitle('all')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-300 border border-[#D4AF37]/50 px-3 py-1.5 rounded-xl shrink-0 cursor-pointer font-black">👑 VIP ویژه</button>
        </div>
      </div>

      <!-- CATEGORY PILLS BAR & SLIDE-OVER DRAWER TRIGGER -->
      <div id="directory-category-carousel" class="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-black pt-2 border-t border-[#C5A059]/20">
        <button type="button" onclick="toggleAdvancedFiltersDrawer()" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-300 border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer font-black flex items-center gap-1 shadow-md hover:scale-105 transition-transform">
          <span>⚙️ فیلترهای پیشرفته</span>
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('all')" class="bg-[#D4AF37] text-[#0F251A] px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer shadow-md font-bold">
          همه خدمات
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('تالار و باغ تالار عروسی')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          🏛️ تالار و باغ تالار
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('آتلیه عکاسی و فیلمبرداری')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          📸 آتلیه عکاسی
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('مزون لباس عروس و داماد')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          👗 مزون عروس
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('سالن زیبایی و میکاپ عروس')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          💄 سالن زیبایی
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('تشریفات و خدمات مجالس')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          🌸 گل‌آرایی & تشریفات
        </button>
        <button type="button" onclick="filterVendorsByCategoryTitle('کیک و شیرینی عروسی')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all">
          🎂 کیک & شیرینی
        </button>
      </div>
    </div>

  </div>

  <!-- 3. FULL-WIDTH MAGAZINE BENTO GRID VIEW CONTAINER -->
  <div id="directory-magazine-grid-view" class="w-full space-y-6">
    <div id="vendor-grid" class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Populated dynamically via JS renderVendors() -->
    </div>
  </div>

  <!-- 4. OBSIDIAN INTERACTIVE YAZD MAP VIEW CONTAINER -->
  <div id="directory-interactive-map-view" class="hidden bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-6 shadow-2xl text-right space-y-4">
    <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
      <span class="text-xs font-black text-[#D4AF37]">🗺️ نقشه تعاملی تامین‌کنندگان استان یزد</span>
      <span class="text-[10.5px] text-slate-400 font-bold">روی پین‌های طلایی جهت مشاهده مشخصات کلیک کنید</span>
    </div>

    <div class="relative w-full h-[450px] rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#07090E] flex items-center justify-center p-4">
      <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div class="relative z-10 w-full h-full flex flex-col justify-between p-6 text-xs">
        <div class="flex justify-between items-start">
          <div onclick="openVendorDetailModal(1)" class="bg-[#141A28] border-2 border-[#D4AF37] p-2.5 rounded-2xl shadow-2xl cursor-pointer hover:scale-110 transition-transform flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping"></span>
            <div>
              <p class="font-black text-white text-[11px]">هتل باغ مشیرالممالک</p>
              <span class="text-[9.5px] text-amber-300 block">صفائیه یزد • ⭐ ۴.۹</span>
            </div>
          </div>

          <div onclick="openVendorDetailModal(2)" class="bg-[#141A28] border-2 border-[#D4AF37] p-2.5 rounded-2xl shadow-2xl cursor-pointer hover:scale-110 transition-transform flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping"></span>
            <div>
              <p class="font-black text-white text-[11px]">استودیو کویر یزد</p>
              <span class="text-[9.5px] text-amber-300 block">بلوار جمهوری • ⭐ ۴.۸</span>
            </div>
          </div>
        </div>

        <div class="flex justify-around items-end">
          <div onclick="openVendorDetailModal(3)" class="bg-[#141A28] border-2 border-[#D4AF37] p-2.5 rounded-2xl shadow-2xl cursor-pointer hover:scale-110 transition-transform flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping"></span>
            <div>
              <p class="font-black text-white text-[11px]">مزون رویال لورنت</p>
              <span class="text-[9.5px] text-amber-300 block">خیابان ملاصدرا • ⭐ ۵.۰</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ADVANCED SLIDE-OVER GLASS FILTER DRAWER -->
  <div id="directory-advanced-filters-drawer" class="fixed top-0 right-0 w-full max-w-[450px] h-screen z-[2147483647] bg-[#07090E] border-l border-[#C5A059]/40 p-6 space-y-6 overflow-y-auto text-right shadow-2xl text-white hidden">
    <div class="flex items-center justify-between border-b border-[#C5A059]/30 pb-4">
      <h3 class="text-base font-black text-[#D4AF37] flex items-center gap-2">
        <i data-lucide="sliders-horizontal" class="w-4 h-4 text-[#D4AF37]"></i>
        <span>⚙️ فیلترهای پیشرفته جستجو</span>
      </h3>
      <button type="button" onclick="toggleAdvancedFiltersDrawer()" class="w-8 h-8 rounded-full bg-[#141A28] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>

    <!-- 1. Category Filter Buttons (Accordion Multi-Select) -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <label class="text-xs font-bold text-slate-300">دسته‌بندی‌ها و خدمات (چند انتخابی):</label>
        <button type="button" onclick="clearDrawerCategoryCheckboxes()" class="text-[10px] text-amber-300 hover:text-white font-bold cursor-pointer">پاکسازی انتخاب‌ها</button>
      </div>

      <div class="space-y-2 text-xs font-bold">
        <!-- Group 1: 🏰 مکان‌ها و تشریفات -->
        <details open class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-3 space-y-2 group/acc">
          <summary class="flex items-center justify-between cursor-pointer text-amber-300 font-black">
            <span>🏰 مکان‌ها و تشریفات</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] group-open/acc:rotate-180 transition-transform"></i>
          </summary>
          <div class="grid grid-cols-1 gap-1.5 pt-2 border-t border-slate-800 font-medium text-slate-200">
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="تالار و باغ تالار عروسی" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>باغ‌تالار & تالار پذیرایی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="سالن عقد و سفره عقد" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>سالن عقد & سفره عقد</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="تشریفات و خدمات مجالس" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>تشریفات & خدمات مجالس</span>
            </label>
          </div>
        </details>

        <!-- Group 2: 📸 عکاسی و فیلمبرداری -->
        <details open class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-3 space-y-2 group/acc">
          <summary class="flex items-center justify-between cursor-pointer text-amber-300 font-black">
            <span>📸 عکاسی و فیلمبرداری</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] group-open/acc:rotate-180 transition-transform"></i>
          </summary>
          <div class="grid grid-cols-1 gap-1.5 pt-2 border-t border-slate-800 font-medium text-slate-200">
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="آتلیه عکاسی و فیلمبرداری" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>آتلیه تخصصی عروس & استودیو</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="فرمالیته و ساخت تیزر" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>ساخت تیزر & کلیپ فرمالیته</span>
            </label>
          </div>
        </details>

        <!-- Group 3: 💄 زیبایی و استایل -->
        <details open class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-3 space-y-2 group/acc">
          <summary class="flex items-center justify-between cursor-pointer text-amber-300 font-black">
            <span>💄 زیبایی و استایل</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] group-open/acc:rotate-180 transition-transform"></i>
          </summary>
          <div class="grid grid-cols-1 gap-1.5 pt-2 border-t border-slate-800 font-medium text-slate-200">
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="سالن زیبایی و میکاپ عروس" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>سالن زیبایی & میکاپ عروس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="مزون لباس عروس و داماد" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>مزون لباس عروس & کت داماد</span>
            </label>
          </div>
        </details>

        <!-- Group 4: 💐 خدمات مکمل و تزئینات -->
        <details class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-3 space-y-2 group/acc">
          <summary class="flex items-center justify-between cursor-pointer text-amber-300 font-black">
            <span>💐 خدمات مکمل و تزئینات</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] group-open/acc:rotate-180 transition-transform"></i>
          </summary>
          <div class="grid grid-cols-1 gap-1.5 pt-2 border-t border-slate-800 font-medium text-slate-200">
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="گل‌آرایی و ماشین عروس" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>گل‌آرایی & ماشین عروس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="کیک و شیرینی عروسی" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>کیک & شیرینی عروسی</span>
            </label>
          </div>
        </details>

        <!-- Group 5: 🎵 موسیقی و سرگرمی -->
        <details class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-3 space-y-2 group/acc">
          <summary class="flex items-center justify-between cursor-pointer text-amber-300 font-black">
            <span>🎵 موسیقی و سرگرمی</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] group-open/acc:rotate-180 transition-transform"></i>
          </summary>
          <div class="grid grid-cols-1 gap-1.5 pt-2 border-t border-slate-800 font-medium text-slate-200">
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="دی‌جی و موسیقی زنده" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>دی‌جی & گروه موسیقی زنده</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer hover:text-amber-200">
              <input type="checkbox" value="نورپردازی و آتش‌بازی" onchange="filterVendors()" class="adv-cat-checkbox accent-[#D4AF37] w-4 h-4 rounded">
              <span>نورپردازی & آتش‌بازی سرد</span>
            </label>
          </div>
        </details>
      </div>
    </div>

    <!-- 2. Capacity Filter Slider -->
    <div class="space-y-2 pt-2 border-t border-slate-800">
      <label class="text-xs font-bold text-slate-300 block">ظرفیت مهمانان:</label>
      <input type="range" min="50" max="1500" step="50" value="500" oninput="document.getElementById('adv-cap-val').textContent = this.value + ' نفر'; filterVendors();" class="w-full accent-[#D4AF37]">
      <div class="flex justify-between text-[11px] text-amber-300 font-bold">
        <span>۵۰ نفر</span>
        <span id="adv-cap-val">۵۰۰ نفر</span>
        <span>۱۵۰۰+ نفر</span>
      </div>
    </div>

    <!-- 3. Price Tier Radios -->
    <div class="space-y-2 pt-2 border-t border-slate-800">
      <label class="text-xs font-bold text-slate-300 block">رنج قیمتی خدمات:</label>
      <div class="grid grid-cols-3 gap-2 text-xs font-bold">
        <button type="button" onclick="setPriceFilter('economic')" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] text-amber-200 py-2 rounded-xl">اقتصادی</button>
        <button type="button" onclick="setPriceFilter('mid')" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] text-amber-200 py-2 rounded-xl">متوسط</button>
        <button type="button" onclick="setPriceFilter('luxury')" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] text-amber-300 py-2 rounded-xl font-black">VIP لوکس</button>
      </div>
    </div>

    <!-- 4. Location Selector -->
    <div class="space-y-2 pt-2 border-t border-slate-800">
      <label class="text-xs font-bold text-slate-300 block">منطقه و موقعیت (یزد):</label>
      <select onchange="filterVendors()" class="w-full bg-[#141A28] border border-[#C5A059]/30 rounded-2xl px-3 py-2 text-xs text-amber-200 focus:outline-none focus:border-[#D4AF37]">
        <option value="all">همه مناطق استان یزد</option>
        <option value="صفائیه">📍 صفائیه یزد</option>
        <option value="بلوار جمهوری">📍 بلوار جمهوری</option>
        <option value="تفت">📍 تفت و ییلاقات</option>
        <option value="بافت تاریخی">📍 بافت تاریخی و ملاصدرا</option>
      </select>
    </div>

    <!-- 5. Key Amenities Checkboxes -->
    <div class="space-y-2 pt-2 border-t border-slate-800">
      <label class="text-xs font-bold text-slate-300 block">امکانات و ویژگی‌های خاص:</label>
      <div class="space-y-1.5 text-xs text-slate-300 font-medium">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" onchange="filterVendors()" checked class="accent-[#D4AF37]">
          <span>پارکینگ اختصاصی مهمانان</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" onchange="filterVendors()" checked class="accent-[#D4AF37]">
          <span>سیستم صوتی و نورپردازی حرفه‌ای</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" onchange="filterVendors()" checked class="accent-[#D4AF37]">
          <span>فضای باز & باغ سرسبز</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" onchange="filterVendors()" checked class="accent-[#D4AF37]">
          <span>تور مجازی ۳۶۰ درجه</span>
        </label>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-800">
      <button type="button" onclick="toggleAdvancedFiltersDrawer(); filterVendors();" class="w-full gold-shimmer-btn text-[#0F251A] font-black py-3 rounded-2xl text-xs shadow-xl cursor-pointer">
        اعمال فیلترها & به‌روزرسانی
      </button>
    </div>
  </div>

</div>`;

async function loadViewTemplates() {
  const homeView = document.getElementById("home-view");
  const directoryView = document.getElementById("directory-view");

  if (homeView && homeView.children.length === 0) {
    try {
      const res = await fetch("home-view.html");
      if (res.ok) {
        homeView.innerHTML = await res.text();
      } else {
        homeView.innerHTML = HOME_VIEW_HTML;
      }
    } catch (e) {
      homeView.innerHTML = HOME_VIEW_HTML;
    }
  }

  if (directoryView && directoryView.children.length === 0) {
    directoryView.innerHTML = DIRECTORY_VIEW_HTML;
  }

  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
  if (typeof initTestimonialsAutoScroll === "function") {
    initTestimonialsAutoScroll();
  }
}

function parsePriceNumeric(str) {
  if (!str) return 0;
  const enStr = str.toString().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  return parseInt(enStr.replace(/[^\d]/g, ''), 10) || 0;
}
window.parsePriceNumeric = parsePriceNumeric;

// Immediately load view templates if DOM is ready, or on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadViewTemplates);
} else {
  loadViewTemplates();
}

    lucide.createIcons();

    // APP GLOBAL STATE
    let categories = [
      { id: "cat-1", title: "تالار و باغ تالار عروسی", icon: "building", count: 420, active: true },
      { id: "cat-2", title: "آتلیه عکاسی و فیلمبرداری", icon: "camera", count: 310, active: true },
      { id: "cat-3", title: "سالن زیبایی و آرایشگاه عروس", icon: "sparkles", count: 280, active: true },
      { id: "cat-4", title: "مزون لباس عروس", icon: "shirt", count: 190, active: true },
      { id: "cat-5", title: "تشریفات عروسی", icon: "crown", count: 160, active: true },
      { id: "cat-6", title: "گل و گل‌آرایی", icon: "flower-2", count: 150, active: true },
      { id: "cat-7", title: "کت و شلوار داماد", icon: "user-check", count: 120, active: true },
      { id: "cat-8", title: "آرایشگاه داماد", icon: "scissors", count: 110, active: true },
      { id: "cat-9", title: "اجاره ماشین عروس", icon: "car", count: 95, active: true },
      { id: "cat-10", title: "موزیک", icon: "music", count: 140, active: true },
      { id: "cat-11", title: "طلافروشی و جواهرفروشی", icon: "gem", count: 180, active: true },
      { id: "cat-12", title: "کیک و شیرینی‌فروشی", icon: "cake", count: 130, active: true },
      { id: "cat-13", title: "سفره عقد", icon: "utensils", count: 85, active: true },
      { id: "cat-14", title: "دفتر ازدواج و سالن عقد", icon: "landmark", count: 90, active: true },
      { id: "cat-15", title: "تور ماه عسل", icon: "plane", count: 115, active: true },
      { id: "cat-16", title: "آزمایشگاه ازدواج", icon: "flask-conical", count: 60, active: true },
      { id: "cat-17", title: "آینه و شمعدان", icon: "sparkles", count: 70, active: true },
      { id: "cat-18", title: "مانتو عقد", icon: "shirt", count: 65, active: true },
      { id: "cat-19", title: "مشاوره ازدواج", icon: "heart-handshake", count: 50, active: true },
      { id: "cat-20", title: "اکسسوری جشن عروسی", icon: "gem", count: 80, active: true },
      { id: "cat-21", title: "بادکنک‌آرایی و دکوراسیون", icon: "party-popper", count: 75, active: true },
      { id: "cat-22", title: "فینگرفود", icon: "utensils-crossed", count: 105, active: true },
      { id: "cat-23", title: "لباس شب و نامزدی", icon: "shirt", count: 125, active: true },
      { id: "cat-24", title: "سالن تولد", icon: "cake-slice", count: 45, active: true },
      { id: "cat-25", title: "آتلیه کودک", icon: "baby", count: 55, active: true }
    ];

    let selectedProvince = 'یزد';
    let selectedYazdDistrict = 'all';

    const DEFAULT_MOCK_VENDORS = [
      {
        id: 1,
        name: "هتل باغ و تشریفات مشیرالممالک یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "صفائیه & اطلسی",
        city: "یزد (صفائیه)",
        rating: 4.9,
        reviewCount: 42,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۹۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۸۲۴۰۰۰۰",
        landline: "۰۳۵-۳۸۲۴۱۱۱۱",
        address: "یزد، صفائیه، خیابان دانشگاه، نرسیده به میدان اطلسی",
        instagram: "@moshir_palace_yazd",
        hours: "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "دکور ورودی باغ" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "سالن اصلی مجلل" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "سفره عقد سنتی" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "گل‌آرایی و شمع" }
        ],
        packages: [
          { name: "برنزی (پایه)", price: "۶۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۲ رنگ سلف‌سرویس", "ورودی باغ تالار", "سیستم سیستم صوتی"] },
          { name: "نقره‌ای (VIP)", price: "۹۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۳ رنگ با کترینگ یزدی", "شمع‌آرایی کامل", "تست غذا برای ۴ نفر"] },
          { name: "طلایی (Luxury)", price: "۱۴۰,۰۰۰,۰۰۰ تومان", items: ["تمام امکانات نقره‌ای + سفره عقد", "آتش‌بازی ورودی", "اقامت سوئیت عروس"] }
        ],
        reviews: [
          { author: "رضا و مریم", text: "کیفیت غذا و میزبانی مشیرالممالک بی‌نظیر بود.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" },
          { author: "محمد و سارا", text: "فضای باغ سنتی بسیار شیک و عکس‌ها رویایی شدند.", stars: "★★★★★", date: "فروردین ۱۴۰۳" }
        ]
      },
      {
        id: 2,
        name: "استودیو و آتلیه تخصصی کویر یزد",
        category: "آتلیه عکاسی و فیلمبرداری",
        province: "یزد",
        cityName: "یزد",
        district: "صفائیه & اطلسی",
        city: "یزد (میدان اطلسی)",
        rating: 4.8,
        reviewCount: 38,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۲۸,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
        phone: "۰۹۱۲۳۴۵۶۷۸۹",
        landline: "۰۳۵-۳۸۲۵۲۲۲۲",
        address: "یزد، میدان اطلسی، مجتمع آریا، طبقه ۳",
        instagram: "@kavir_studio_yazd",
        hours: "شنبه تا پنجشنبه ۹:۰۰ الی ۲۰:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80", tag: "فرمالیته کویر بافق" },
          { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", tag: "عکاسی غروب کویر" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", tag: "کلیپ احساسی دو نفره" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "عکاسی عمارت و باغ" }
        ],
        packages: [
          { name: "پکیج اقتصادی عکاسی", price: "۲۸,۰۰۰,۰۰۰ تومان", items: ["عکاسی و فیلمبرداری روز مراسم", "آلبوم ایتالیایی 60x30", "تحویل فایل مادر"] },
          { name: "پکیج کامل فرمالیته کویر", price: "۴۵,۰۰۰,۰۰۰ تومان", items: ["کلیپ فرمالیته کویر با هلی‌شات", "مجوز رسمی عکاسی کویر", "۲ عدد آلبوم دیجیتال"] }
        ],
        reviews: [
          { author: "علی و مهسا", text: "کلیپ کویر بافق فوق‌العاده شد، مجوز رسمی کویر کار رو راحت کرد.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 3,
        name: "عمارت و تالار تشریفات قصر یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "بلوار جمهوری",
        city: "یزد (بلوار جمهوری)",
        rating: 4.9,
        reviewCount: 29,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۱۰,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۵۲۶۳۳۳۳",
        landline: "۰۳۵-۳۵۲۶۴۴۴۴",
        address: "یزد، بلوار جمهوری، جنب سرپرستی بانک ملی",
        instagram: "@ghasr_palace_yazd",
        hours: "همه روزه ۱۰:۰۰ الی ۲۲:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "دیزاین کریستال" },
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "جایگاه عروس داماد" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "ورودی شب" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "شمع‌آرایی تالار" }
        ],
        packages: [
          { name: "پکیج تشریفات قصر", price: "۱۱۰,۰۰۰,۰۰۰ تومان", items: ["منوی شام سلف سرویس کامل", "ورودی و سفره عقد", "نورپردازی حرفه‌ای"] }
        ],
        reviews: [
          { author: "حسین و الهام", text: "تالار بسیار شیک و تیم تشریفات بسیار منظم بودند.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" }
        ]
      },
      {
        id: 4,
        name: "سالن زیبایی VIP بانو یزد",
        category: "سالن زیبایی و آرایشگاه عروس",
        province: "یزد",
        cityName: "یزد",
        district: "خیابان کاشانی & ملاصدرا",
        city: "یزد (خیابان کاشانی)",
        rating: 4.7,
        reviewCount: 31,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۷۵۵۵۵",
        landline: "۰۳۵-۳۶۲۷۶۶۶۶",
        address: "یزد، خیابان کاشانی، پلاک ۱۲۰",
        instagram: "@banoo_beauty_yazd",
        hours: "شنبه تا چهارشنبه ۹:۰۰ الی ۱۹:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80", tag: "میکاپ تخصصی عروس" },
          { url: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80", tag: "شینیون کلاسیک" },
          { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", tag: "ناخن و پاکسازی" },
          { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80", tag: "تاج و گریم" }
        ],
        packages: [
          { name: "پکیج VIP عروس", price: "۱۸,۰۰۰,۰۰۰ تومان", items: ["میکاپ و شینیون لایت", "پاکسازی پوست و ناخن", "تاج و تور اختصاصی"] }
        ],
        reviews: [
          { author: "زهرا نوری", text: "میکاپ خیلی ماندگار و طبیعی بود، عالی بودید.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 5,
        name: "مزون عروس ترمه & اسلیمی یزد",
        category: "مزون لباس عروس",
        province: "یزد",
        cityName: "یزد",
        district: "بلوار دانشگاه",
        city: "یزد (بلوار دانشگاه)",
        rating: 4.9,
        reviewCount: 25,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۲۲,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۸۲۶۷۷۷۷",
        landline: "۰۳۵-۳۸۲۶۸۸۸۸",
        address: "یزد، بلوار دانشگاه، مجتمع تجاری اطلس",
        instagram: "@termeh_mezon_yazd",
        hours: "شنبه تا پنجشنبه ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80", tag: "لباس عروس دانتل" },
          { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80", tag: "لباس پرنسسی" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "تور و تور سر" },
          { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80", tag: "شنل و اکسسوری" }
        ],
        packages: [
          { name: "دوخت و دوخت سفارشی", price: "۲۲,۰۰۰,۰۰۰ تومان", items: ["دوخت اختصاصی با پارچه ایتالیایی", "پرو نامحدود", "تور و شنل هدایا"] }
        ],
        reviews: [
          { author: "نرگس کریمی", text: "لباس دقیقاً طبق سایز و مدلی که خواستم آماده شد.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" }
        ]
      },
      {
        id: 6,
        name: "عمارت تشریفاتی بادگیر یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "بافت تاریخی & آزادشهر",
        city: "یزد (بافت تاریخی)",
        rating: 4.8,
        reviewCount: 20,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۸۰,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۱۹۹۹۹",
        landline: "۰۳۵-۳۶۲۱۸۸۸۸",
        address: "یزد، بافت تاریخی، خیابان مسجد جامع",
        instagram: "@badgir_mansion_yazd",
        hours: "همه روزه ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "عمارت بوم‌گردی سنتی" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "حیاط با بادگیر" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "پذیرایی سنتی" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "عکس‌های شب" }
        ],
        packages: [
          { name: "پکیج عروسی سنتی", price: "۸۰,۰۰۰,۰۰۰ تومان", items: ["پذیرایی با شیرینی حاج خلیفه", "منوی شام دیزی و غذای یزدی", "فضای حیاط با بادگیر"] }
        ],
        reviews: [
          { author: "سعید و فاطمه", text: "مهمان‌های غیر یزدی ما عاشق فضای بادگیر شدند.", stars: "★★★★★", date: "اسفند ۱۴۰۲" }
        ]
      },
      {
        id: 7,
        name: "کترینگ و فینگرفود سنتی شیرینی حاج خلیفه یزد",
        category: "کیک و شیرینی‌فروشی",
        province: "یزد",
        cityName: "یزد",
        district: "میدان امیرچقماق",
        city: "یزد (امیرچقماق)",
        rating: 4.6,
        reviewCount: 55,
        verified: false,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۱۲,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۲۱۱۱۱",
        landline: "۰۳۵-۳۶۲۲۲۲۲۲",
        address: "یزد، ضلع شمالی میدان امیرچقماق",
        instagram: "@hajkhalifa_yazd",
        hours: "همه روزه ۸:۰۰ الی ۲۲:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80", tag: "باقلوا و قطاب یزدی" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "کیک عروسی ۴ طبقه" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "فینگرفود پذیرایی" },
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "بسته‌بندی مجلل" }
        ],
        packages: [
          { name: "سفارش پذیرایی عروسی (کیلوگرم)", price: "۱۲,۰۰۰,۰۰۰ تومان", items: ["قطاب، باقلوا، حاجی‌بادام و کیک یزدی اصل", "بسته‌بندی کادویی مجلل"] }
        ],
        reviews: [
          { author: "امیر کاظمی", text: "شیرینی‌ها تازه و اصیل حاج خلیفه برای تمام مهمان‌ها لذت‌بخش بود.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 8,
        name: "گالری طلا و جواهرات خاتم یزد",
        category: "طلافروشی و جواهرفروشی",
        province: "یزد",
        cityName: "یزد",
        district: "بازار خان",
        city: "یزد (بازار خان)",
        rating: 4.5,
        reviewCount: 18,
        verified: false,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۳۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۳۳۳۳۳",
        landline: "۰۳۵-۳۶۲۳۴۴۴۴",
        address: "یزد، بازار خان، تیمچه طلادوزان، پلاک ۴",
        instagram: "@khatam_gold_yazd",
        hours: "شنبه تا چهارشنبه ۹:۳۰ الی ۲۰:۳۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", tag: "حلقه ست برلیان" },
          { url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80", tag: "سرویس طلا عروس" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "دستبند و تک‌پوش" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "پلاک و مدال ازدواج" }
        ],
        packages: [
          { name: "ست حلقه و سرویس ازدواج", price: "۳۵,۰۰۰,۰۰۰ تومان", items: ["طلا ۱۸ عیار با فاکتور رسمی اتحادیه یزد", "سایز و حکاکی رایگان"] }
        ],
        reviews: [
          { author: "پیمان احمدی", text: "منصفانه و با حاشیه سود مناسب در بازار خان یزد.", stars: "★★★★☆", date: "اردیبهشت ۱۴۰۳" }
        ]
      }
    ];

    window.getCentralizedVendors = function() {
      const saved = localStorage.getItem('aroosi_vendors_db');
      if (!saved) {
        localStorage.setItem('aroosi_vendors_db', JSON.stringify(DEFAULT_MOCK_VENDORS));
        return DEFAULT_MOCK_VENDORS;
      }
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_MOCK_VENDORS;
      }
    };

    window.saveCentralizedVendors = function(vendorList) {
      localStorage.setItem('aroosi_vendors_db', JSON.stringify(vendorList));
      vendors = vendorList;
    };

    let vendors = window.getCentralizedVendors();

    let galleryPhotos = [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
    ];

    let vendorPackages = [
      { id: "pkg-1", name: "پکیج نقره‌ای منوی دیس‌پرس", price: "از ۸۵,۰۰۰,۰۰۰ تومان", features: ["منوی ۲ رنگ غذا همراه با نوشیدنی", "ورودی باغ و سیستم صوت", "مهماندار مجرب برای هر ۳۰ نفر"] },
      { id: "pkg-2", name: "پکیج طلایی منوی VIP", price: "از ۱۲۰,۰۰۰,۰۰۰ تومان", features: ["منوی ۴ رنگ غذا همراه با باقالی‌پلو با گوشت", "شمع‌آرایی و ورودی رپتایل", "مهماندار مجرب برای هر ۲۰ نفر", "تست رایگان غذا برای ۴ نفر"] },
      { id: "pkg-3", name: "پکیج سوپر لاکچری زمرد", price: "از ۱۸۰,۰۰۰,۰۰۰ تومان", features: ["سفره عقد اختصاصی سالن", "آتش‌بازی ۴ مرحله‌ای و یخ خشک", "منوی کامل سلف‌سرویس با ۴۰ مدل فینگرفود"] }
    ];

    let weddingDateDaysRemaining = 145;

    let timeframeList = [
      "همه",
      "۱۲ تا ۹ ماه قبل",
      "۶ تا ۳ ماه قبل",
      "۱ ماه قبل",
      "هفته و روز قبل"
    ];

        let staticChecklist = [
      // ۱۲ تا ۹ ماه قبل
      { id: "chk-1", title: "برنامه‌ریزی اولیه، تعیین سقف بودجه و تعداد مهمانان", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۱۲ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },
      { id: "chk-2", title: "رزرو باغ/تالارهای سنتی و عمارت‌های معتبر یزد (مشیرالممالک، قصر)", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۱۰ ماه قبل", priority: "urgent", category: "تالار و باغ تشریفات", attachedVendorId: 1, vendorStatus: "finalized" },
      { id: "chk-3", title: "انتخاب آتلیه تخصصی و اخذ مجوز رسمی عکاسی فرمالیته کویر یزد", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۹ ماه قبل", priority: "urgent", category: "آتلیه و عکاسی", attachedVendorId: 2, vendorStatus: "deposit_paid" },
      { id: "chk-4", title: "تنظیم لیست اولیه مهمانان و تفکیک خانواده عروس و داماد", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۹ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },
      { id: "chk-5", title: "تعیین تاریخ رسمی عقد و عروسی در دفترخانه و ثبت احوال", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۹ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },

      // ۶ تا ۳ ماه قبل
      { id: "chk-6", title: "خرید و دوخت سفارشی لباس عروس در مزون‌های لوکس یزد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۵ ماه قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: 4, vendorStatus: "deposit_paid" },
      { id: "chk-7", title: "خرید کت‌وشلوار، کفش و اکسسوری‌های دامادی", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۵ ماه قبل", priority: "suggested", category: "مزون و لباس عروس", attachedVendorId: null, vendorStatus: "quote_received" },
      { id: "chk-8", title: "تست آرایش و گریم VIP عروس در سالن‌های زیبایی تخصصی", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۴ ماه قبل", priority: "urgent", category: "سالن زیبایی", attachedVendorId: 3, vendorStatus: "quote_received" },
      { id: "chk-9", title: "طراحی، سفارش چاپ و تنظیم لینک کارت دعوت دیجیتال هوشمند", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۴ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "quote_received" },
      { id: "chk-10", title: "هماهنگی موزیک، دی‌جی و نورپردازی استیج تالار", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۳ ماه قبل", priority: "suggested", category: "موزیک و دی‌جی", attachedVendorId: 6, vendorStatus: "quote_received" },
      { id: "chk-11", title: "خرید حلقه‌های ازدواج و سرویس طلا از بازار خان یزد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۳ ماه قبل", priority: "suggested", category: "طلافروشی و جواهرفروشی", attachedVendorId: 8, vendorStatus: "quote_received" },
      { id: "chk-12", title: "انجام آزمایش‌های پیش از ازدواج و کلاس‌های مشاوره زوجین", timeframe: "۶ تا ۳ ماه قبل", completed: true, dueDate: "۳ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },

      // ۱ ماه قبل
      { id: "chk-13", title: "توزیع و ارسال کارت‌های دعوت دیجیتال و چاپی با پیگیری RSVP", timeframe: "۱ ماه قبل", completed: false, dueDate: "۳ هفته قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "quote_received" },
      { id: "chk-14", title: "پرو نهایی لباس عروس و تست هماهنگی تاج و تور", timeframe: "۱ ماه قبل", completed: false, dueDate: "۲ هفته قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: 4, vendorStatus: "deposit_paid" },
      { id: "chk-15", title: "هماهنگی نهایی منوی شام، نوشیدنی‌ها و تشریفات با باغ‌تالار", timeframe: "۱ ماه قبل", completed: false, dueDate: "۲ هفته قبل", priority: "urgent", category: "تالار و باغ تشریفات", attachedVendorId: 1, vendorStatus: "deposit_paid" },
      { id: "chk-16", title: "رزرو شیرینی‌های سنتی اصیل یزد (قطاب، باقلوا) و کیک طبقاتی", timeframe: "۱ ماه قبل", completed: false, dueDate: "۲ هفته قبل", priority: "suggested", category: "کیک و شیرینی‌فروشی", attachedVendorId: 7, vendorStatus: "quote_received" },
      { id: "chk-17", title: "قطعی کردن برنامه‌ریزی سفر ماه عسل و رزرو بلیت و هتل", timeframe: "۱ ماه قبل", completed: false, dueDate: "۱۰ روز قبل", priority: "normal", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-18", title: "هماهنگی با عاقد، دفترخانه و تنظیم مدارک رسمی عقد", timeframe: "۱ ماه قبل", completed: false, dueDate: "۱۰ روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },

      // هفته و روز قبل
      { id: "chk-19", title: "تحویل لباس عروس، کت‌وشلوار و آراستن اکسسوری‌ها", timeframe: "هفته و روز قبل", completed: false, dueDate: "۴ روز قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: 4, vendorStatus: "finalized" },
      { id: "chk-20", title: "آماده‌سازی پکیج وسایل شخصی و کیف اضطراری عروس و داماد", timeframe: "هفته و روز قبل", completed: false, dueDate: "۳ روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-21", title: "هماهنگی نهایی ساعتی با ساقدوش‌ها و همراهان برنامه‌ریزی", timeframe: "هفته و روز قبل", completed: false, dueDate: "۲ روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-22", title: "تحویل ماشین عروس به گل‌فروشی برای گل‌آرایی و تزئین VIP", timeframe: "هفته و روز قبل", completed: false, dueDate: "روز قبل", priority: "urgent", category: "گل‌آرایی و ماشین عروس", attachedVendorId: null, vendorStatus: null },
      { id: "chk-23", title: "تسویه‌حساب نهایی اقساط تالار، آتلیه، آرایشگاه و موزیک", timeframe: "هفته و روز قبل", completed: false, dueDate: "روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },
      { id: "chk-24", title: "مرور جدول ساعتی استاد روز مراسم و استراحت و آرامش", timeframe: "هفته و روز قبل", completed: false, dueDate: "روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null }
    ];

    try {
      const savedChecklist = localStorage.getItem('aroosi_checklist_db');
      if (savedChecklist) {
        let parsed = JSON.parse(savedChecklist);
        if (parsed && parsed.length) staticChecklist = parsed;
      }
    } catch(e) {}


    let activeChecklistFilter = "همه";
    let activeChecklistStatusFilter = "ALL"; // ALL | UNCOMPLETED | COMPLETED

    let staticVendorApplications = [
      { id: "app-101", name: "تشریفات و گل‌آرایی مگنولیا", category: "گل‌آرایی و ماشین عروس", city: "تهران", manager: "علیرضا حسینی", phone: "۰۹۱۲۹۸۷۶۵۴۳", status: "pending" }
    ];

    let inquiries = [
      { id: 101, name: "امیرحسین رضایی", phone: "09121112233", date: "۱۴۰۳/۰۵/۲۰", guests: 250, details: "استعلام منوی دیس پرس همراه با ورودی و شمع‌آرایی" }
    ];

    // CHAT & MESSAGING SYSTEM STATE
    let chatState = {
      activeThreadId: "thread-1",
      threads: [
        {
          id: "thread-1",
          vendorId: 1,
          vendorName: "باغ تالار تشریفاتی زمرد",
          vendorCategory: "تالار و باغ تشریفات",
          vendorLogo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۴۴۵۵۶۶۷۷",
          statusBadge: "quote_sent", // pending_quote, quote_sent, finalized
          statusText: "پیش‌فاکتور صادر شد",
          unreadCount: 0,
          lastMessage: "سلام، پیش‌فاکتور منوی VIP با تخفیف ویژه پلتفرم عروسی تو برای شما تنظیم و صادر شد.",
          lastTime: "۱۰:۴۵",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۵",
            guests: 250,
            services: ["منوی شام VIP", "ورودی مجلل باغ", "شمع‌آرایی & آتش‌بازی"],
            budget: "۱۲۰ تا ۱۵۰ میلیون تومان",
            note: "سلام، درخواست استعلام قیمت برای ۲۵۰ نفر مهمان در تاریخ ۱۵ شهریور را دارم."
          },
          messages: [
            {
              id: "msg-101",
              sender: "user",
              text: "سلام و احترام، درخواست استعلام قیمت منوی VIP برای مراسم عروسی در تاریخ ۱۵ شهریور ۱۴۰۳ با ۲۵۰ نفر مهمان را دارم.",
              time: "۱۰:۳۰",
              isInquirySummary: true
            },
            {
              id: "msg-102",
              sender: "vendor",
              text: "سلام و تبریک فراوان بابت پیوندتان! بله، تاریخ ۱۵ شهریور خالي می‌باشد. ظرفیت تالار زمرد تا ۷۰۰ نفر است.",
              time: "۱۰:۳۸"
            },
            {
              id: "msg-103",
              sender: "vendor",
              text: "سلام، پیش‌فاکتور منوی VIP با تخفیف ویژه پلتفرم عروسی تو برای شما تنظیم و صادر شد.",
              time: "۱۰:۴۵",
              hasQuoteCard: true,
              quoteDetails: {
                title: "پیش‌فاکتور رسمی منوی VIP زمرد",
                amount: "۱۲۵,۰۰۰,۰۰۰ تومان",
                servicesIncluded: ["منوی سلف‌سرویس ۳ رنگ", "ورودی مجلل باغ", "شمع‌آرایی کامل میزها", "تست رایگان برای ۴ نفر"]
              }
            }
          ]
        },
        {
          id: "thread-2",
          vendorId: 2,
          vendorName: "آتلیه تخصصی نور و تصویر",
          vendorCategory: "آتلیه و عکاسی",
          vendorLogo: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۲۲۳۳۴۴۵۵",
          statusBadge: "pending_quote",
          statusText: "در انتظار پاسخ استعلام",
          unreadCount: 1,
          lastMessage: "درخواست استعلام پکیج فرمالیته و روز عروسی ارسال گردید.",
          lastTime: "دیروز",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۴",
            guests: 200,
            services: ["فیلمبرداری ۲ دوربین 4K", "عکاسی فرمالیته شمال", "آلبوم ایتالیایی 80x40"],
            budget: "۴۰ تا ۵۰ میلیون تومان",
            note: "درخواست استعلام پکیج کامل عکاسی روز عروسی و کلیپ فرمالیته."
          },
          messages: [
            {
              id: "msg-201",
              sender: "user",
              text: "سلام، درخواست استعلام پکیج فرمالیته شمال و تصویربرداری روز عروسی با ۲ دوربین 4K را دارم.",
              time: "دیروز ۱۶:۲۰",
              isInquirySummary: true
            },
            {
              id: "msg-202",
              sender: "vendor",
              text: "درخواست استعلام شما دریافت شد. مدیر آتلیه به زودی پکیج و نمونه کارهای اختصاصی را برای شما ارسال خواهد کرد.",
              time: "دیروز ۱۶:۲۲"
            }
          ]
        },
        {
          id: "thread-3",
          vendorId: 4,
          vendorName: "مزون عروس لوسیا",
          vendorCategory: "مزون و لباس عروس",
          vendorLogo: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۸۸۹۹۷۷۶۶",
          statusBadge: "finalized",
          statusText: "رزرو نهایی شد",
          unreadCount: 0,
          lastMessage: "وقت پرو اول شما برای روز سه‌شنبه ساعت ۱۶:۰۰ هماهنگ شد.",
          lastTime: "۳ روز قبل",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۰",
            guests: 0,
            services: ["دوخت اختصاصی لباس عروس A-line", "تاج و تور فرانسه"],
            budget: "۳۰ میلیون تومان",
            note: "هماهنگی وقت پرو و دوخت سفارش اختصاصی"
          },
          messages: [
            {
              id: "msg-301",
              sender: "user",
              text: "سلام، بیعانه سفارش دوخت لباس عروس واریز شد. جهت هماهنگی وقت پرو پیام دادم.",
              time: "۳ روز قبل"
            },
            {
              id: "msg-302",
              sender: "vendor",
              text: "وقت پرو اول شما برای روز سه‌شنبه ساعت ۱۶:۰۰ هماهنگ شد. منتظر حضور گرمتان هستیم!",
              time: "۳ روز قبل"
            }
          ]
        }
      ]
    };

    let bookedDates = [5, 12, 19, 26];

    // GLOBAL RBAC ROLE STATE
    let currentUserRole = localStorage.getItem('currentUserRole') || 'couple';

    function updateRoleBasedUIVisibility() {
      const adminElements = document.querySelectorAll('.admin-only');
      adminElements.forEach(el => {
        if (currentUserRole === 'admin') {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });
    }

    // ROLE SWITCHER FUNCTION
    function switchRole(role) {
      currentUserRole = role;
      localStorage.setItem('currentUserRole', role);
      updateRoleBasedUIVisibility();

      document.querySelectorAll('.role-btn').forEach(btn => {
        btn.className = "role-btn px-3.5 py-1.5 rounded-xl transition-all text-secondary hover:text-graphite hover:bg-slate-100";
      });

      const activeRoleBtn = document.getElementById('role-btn-' + role);
      if (activeRoleBtn) {
        activeRoleBtn.className = "role-btn px-3.5 py-1.5 rounded-xl transition-all bg-primary text-white shadow-xs";
      }

      if (role === 'couple') {
        switchTab('home');
      } else if (role === 'vendor') {
        switchTab('vendor-dash');
      } else if (role === 'admin') {
        switchTab('admin');
      }
    }


    // ==========================================
    // GUEST LIST & CASH GIFT STATE & LOGIC
    // ==========================================
    let initialGuests = [
      { id: "g-1", name: "دکتر حمیدرضا احمدی", side: "فامیل عروس", phone: "09121112233", companions: 2, table: "میز VIP ۱", status: "CONFIRMED" },
      { id: "g-2", name: "مهندس سارا نوری", side: "دوستان مشترک", phone: "09123334455", companions: 1, table: "میز ۴", status: "CONFIRMED" },
      { id: "g-3", name: "حاج محمود کریمی", side: "فامیل داماد", phone: "09125556677", companions: 3, table: "میز VIP ۲", status: "PENDING" },
      { id: "g-4", name: "استاد علی اکبر علوی", side: "همکاران", phone: "09127778899", companions: 1, table: "میز ۷", status: "DECLINED" },
      { id: "g-5", name: "مریم و نیما حسینی", side: "فامیل عروس", phone: "09128889900", companions: 2, table: "میز ۲", status: "CONFIRMED" }
    ];

    let initialGifts = [
      { id: "gift-1", guestName: "دکتر حمیدرضا احمدی", type: "نقدی", amount: 15000000, method: "کارت به کارت / پاکت نقدی", notes: "پاکت طلاکوب با یادداشت آرزوی خوشبختی" },
      { id: "gift-2", guestName: "مهندس سارا نوری", type: "واریز آنلاین کارت دعوت", amount: 10000000, method: "واریز آنلاین کارت دعوت", notes: "پرداخت مستقیم از درگاه درگاه آنلاین" },
      { id: "gift-3", guestName: "حاج محمود کریمی", type: "سکه طلا", amount: 35000000, method: "تحویل حضوری در سالن", notes: "یک عدد سکه کامل بهار آزادی" }
    ];

    let guestListState = [];
    try {
      guestListState = JSON.parse(localStorage.getItem('aroosi_guest_list_db') || 'null') || initialGuests;
    } catch(e) { guestListState = initialGuests; }

    let giftLedgerState = [];
    try {
      giftLedgerState = JSON.parse(localStorage.getItem('aroosi_gift_ledger_db') || 'null') || initialGifts;
    } catch(e) { giftLedgerState = initialGifts; }

    function renderGuestsAndGifts() {
      renderGuestsKPIs();
      renderGuestsTable();
      renderGiftsTable();
    }

    function renderGuestsKPIs() {
      const totalGuestsCount = guestListState.reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const totalPrimary = guestListState.length;
      const totalCompanions = guestListState.reduce((acc, g) => acc + (parseInt(g.companions) || 0), 0);

      const confirmedGuestsList = guestListState.filter(g => g.status === "CONFIRMED");
      const confirmedTotalCount = confirmedGuestsList.reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const confirmedPercent = totalGuestsCount > 0 ? Math.round((confirmedTotalCount / totalGuestsCount) * 100) : 0;

      const declinedCount = guestListState.filter(g => g.status === "DECLINED").reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const pendingCount = guestListState.filter(g => g.status === "PENDING").reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);

      const totalGiftsSum = giftLedgerState.reduce((acc, g) => acc + (parseInt(g.amount) || 0), 0);

      const kpiTotalEl = document.getElementById("kpi-total-guests");
      if (kpiTotalEl) kpiTotalEl.innerText = totalGuestsCount + " نفر";

      const kpiBreakdownEl = document.getElementById("kpi-total-breakdown");
      if (kpiBreakdownEl) kpiBreakdownEl.innerText = totalPrimary + " اصل + " + totalCompanions + " همراه";

      const kpiConfEl = document.getElementById("kpi-confirmed-guests");
      if (kpiConfEl) kpiConfEl.innerText = confirmedTotalCount + " نفر";

      const kpiConfPctEl = document.getElementById("kpi-confirmed-percent");
      if (kpiConfPctEl) kpiConfPctEl.innerText = confirmedPercent + "٪ از کل مدعوین";

      const kpiDecEl = document.getElementById("kpi-declined-guests");
      if (kpiDecEl) kpiDecEl.innerText = declinedCount + " نفر";

      const kpiPendEl = document.getElementById("kpi-pending-guests");
      if (kpiPendEl) kpiPendEl.innerText = pendingCount + " نفر در انتظار پاسخ";

      const kpiGiftsEl = document.getElementById("kpi-total-gifts");
      if (kpiGiftsEl) kpiGiftsEl.innerText = totalGiftsSum.toLocaleString("fa-IR") + " تومان";

      const kpiGiftCntEl = document.getElementById("kpi-gift-count");
      if (kpiGiftCntEl) kpiGiftCntEl.innerText = giftLedgerState.length + " فقره هدایای ثبت‌شده";
    }

    function switchGuestSubTab(sub) {
      const btnList = document.getElementById("guest-subtab-list");
      const btnGifts = document.getElementById("guest-subtab-gifts");
      const viewList = document.getElementById("guest-view-list");
      const viewGifts = document.getElementById("guest-view-gifts");

      if (sub === "list") {
        btnList.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-primary text-white shadow-xs flex items-center justify-center gap-2";
        btnGifts.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all text-secondary hover:text-graphite flex items-center justify-center gap-2";
        viewList.classList.remove("hidden");
        viewGifts.classList.add("hidden");
      } else {
        btnGifts.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-primary text-white shadow-xs flex items-center justify-center gap-2";
        btnList.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all text-secondary hover:text-graphite flex items-center justify-center gap-2";
        viewGifts.classList.remove("hidden");
        viewList.classList.add("hidden");
      }
    }

    function renderGuestsTable() {
      const tbody = document.getElementById("guests-table-body");
      if (!tbody) return;

      const searchVal = (document.getElementById("guest-search-input")?.value || "").toLowerCase().trim();
      const sideVal = document.getElementById("guest-filter-side")?.value || "ALL";
      const statusVal = document.getElementById("guest-filter-status")?.value || "ALL";

      const filtered = guestListState.filter(g => {
        const matchesSearch = !searchVal || g.name.toLowerCase().includes(searchVal) || g.phone.includes(searchVal) || (g.table && g.table.toLowerCase().includes(searchVal));
        const matchesSide = sideVal === "ALL" || g.side === sideVal;
        const matchesStatus = statusVal === "ALL" || g.status === statusVal;
        return matchesSearch && matchesSide && matchesStatus;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-secondary font-bold">هیچ مهمانی با این مشخصات یافت نشد.</td></tr>';
        return;
      }

      tbody.innerHTML = filtered.map(g => {
        let statusBadge = "";
        if (g.status === "CONFIRMED") {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold"><i data-lucide="check" class="w-3 h-3"></i> تایید شده</span>';
        } else if (g.status === "DECLINED") {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-950/80 text-rose-400 border border-rose-500/40 text-[11px] font-bold"><i data-lucide="x" class="w-3 h-3"></i> عذرخواهی کرده</span>';
        } else {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#07090E] text-[#C5A059] border border-[#C5A059]/40 text-[11px] font-bold"><i data-lucide="clock" class="w-3 h-3"></i> در انتظار</span>';
        }

        const waMessage = encodeURIComponent("سلام " + g.name + " عزیز، کارت دعوت دیجیتال عروسی ما آماده است. خوشحال می‌شویم با کلیک روی لینک زیر حضور گرم خود را اعلام فرمایید:");
        const waLink = "https://wa.me/" + g.phone.replace(/^0/, "98") + "?text=" + waMessage;

        return `
          <tr class="hover:bg-[#1E293B]/50 transition-colors text-white">
            <td class="p-3.5">
              <div class="font-bold text-[#F7F5F0]">${g.name}</div>
              <span class="inline-block mt-0.5 text-[10px] bg-[#07090E] text-slate-300 border border-[#C5A059]/30 px-2 py-0.5 rounded-md">${g.side}</span>
            </td>
            <td class="p-3.5">
              <div class="text-xs text-slate-300 font-mono">${g.phone}</div>
              <a href="${waLink}" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline font-bold mt-0.5">
                <i data-lucide="send" class="w-3 h-3"></i> ارسال کارت در واتساپ
              </a>
            </td>
            <td class="p-3.5 text-center font-bold text-slate-200">
              + ${g.companions} همراه
            </td>
            <td class="p-3.5 text-center">
              <span class="bg-[#07090E] text-[#C5A059] border border-[#C5A059]/30 px-2.5 py-1 rounded-lg text-xs font-bold">${g.table || "تعیین نشده"}</span>
            </td>
            <td class="p-3.5 text-center">
              ${statusBadge}
            </td>
            <td class="p-3.5 text-center">
              <div class="flex items-center justify-center gap-1.5">
                <button onclick="toggleGuestRsvp('${g.id}')" title="تغییر سریع وضعیت RSVP" class="p-1.5 rounded-lg bg-[#07090E] hover:bg-[#1E293B] border border-[#C5A059]/30 text-[#C5A059] cursor-pointer">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="editGuest('${g.id}')" title="ویرایش مهمان" class="p-1.5 rounded-lg bg-[#07090E] hover:bg-[#1E293B] border border-[#C5A059]/30 text-[#F7F5F0] cursor-pointer">
                  <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="deleteGuest('${g.id}')" title="حذف مهمان" class="p-1.5 rounded-lg bg-rose-950/60 border border-rose-800/50 text-rose-400 cursor-pointer">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");

      if (window.lucide) window.lucide.createIcons();
    }

    function renderGiftsTable() {
      const tbody = document.getElementById("gifts-table-body");
      if (!tbody) return;

      if (giftLedgerState.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-secondary font-bold">هیچ هدایای ثبت‌شده‌ای موجود نیست.</td></tr>';
        return;
      }

      tbody.innerHTML = giftLedgerState.map(g => `
        <tr class="hover:bg-[#1E293B]/50 transition-colors text-white">
          <td class="p-3.5 font-bold text-[#F7F5F0]">${g.guestName}</td>
          <td class="p-3.5">
            <span class="px-2.5 py-1 bg-[#07090E] text-[#C5A059] border border-[#C5A059]/40 rounded-lg text-xs font-bold">${g.type}</span>
          </td>
          <td class="p-3.5 font-black text-[#C5A059]">${(parseInt(g.amount) || 0).toLocaleString("fa-IR")} تومان</td>
          <td class="p-3.5 text-slate-300 font-medium">${g.method}</td>
          <td class="p-3.5 text-xs text-slate-300">${g.notes || "-"}</td>
          <td class="p-3.5 text-center">
            <button onclick="deleteGift('${g.id}')" class="p-1.5 rounded-lg bg-rose-950/60 border border-rose-800/50 text-rose-400 cursor-pointer">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </td>
        </tr>
      `).join("");

      const totalSum = giftLedgerState.reduce((acc, g) => acc + (parseInt(g.amount) || 0), 0);
      const footerSum = document.getElementById("gift-total-sum-footer");
      if (footerSum) footerSum.innerText = totalSum.toLocaleString("fa-IR") + " تومان";

      if (window.lucide) window.lucide.createIcons();
    }

    function openGuestModal() {
      document.getElementById("guest-form").reset();
      document.getElementById("guest-edit-id").value = "";
      document.getElementById("guest-modal-title").innerText = "افزودن مهمان جدید";
      document.getElementById("guest-modal").classList.remove("hidden");
    }

    function generateBulkGuestInvitationLinks() {
      if (guestListState.length === 0) {
        showToast('⚠️ لیست میهمانان خالی است. لطفاً ابتدا میهمان اضافه کنید.', 'warning');
        return;
      }

      showToast(`⚡ لینک اختصاصی و QR کدهای شخصی برای ${guestListState.length} میهمان تولید شد.`, 'success');
    }
    window.generateBulkGuestInvitationLinks = generateBulkGuestInvitationLinks;

    function sendBulkRsvpReminders() {
      const pendingGuests = guestListState.filter(g => g.status === 'PENDING' && g.phone);
      if (pendingGuests.length === 0) {
        showToast('ℹ️ همه میهمانان وضعیت حضور خود را مشخص کرده‌اند.', 'info');
        return;
      }

      pendingGuests.forEach(g => {
        const cleanPhone = g.phone.replace(/^0/, '98');
        const waMsg = encodeURIComponent(`سلام ${g.name} عزیز،\nیادآوری حضور در جشن عروسی ما ✨\nلطفاً جهت هماهنگی نهایی، حضور خود را اعلام بفرمایید.`);
        window.open(`https://wa.me/${cleanPhone}?text=${waMsg}`, '_blank');
      });

      showToast(`✨ ارسال یادآور برای ${pendingGuests.length} میهمان در واتس‌اپ انجام شد`, 'success');
    }
    window.sendBulkRsvpReminders = sendBulkRsvpReminders;

    function closeGuestModal() {
      document.getElementById("guest-modal").classList.add("hidden");
    }

    function handleGuestFormSubmit(e) {
      e.preventDefault();
      const editId = document.getElementById("guest-edit-id").value;
      const name = document.getElementById("guest-modal-name").value.trim();
      const side = document.getElementById("guest-modal-side").value;
      const phone = document.getElementById("guest-modal-phone").value.trim();
      const companions = parseInt(document.getElementById("guest-modal-companions").value) || 0;
      const table = document.getElementById("guest-modal-table").value.trim();
      const status = document.getElementById("guest-modal-status").value;

      if (editId) {
        const idx = guestListState.findIndex(g => g.id === editId);
        if (idx !== -1) {
          guestListState[idx] = { ...guestListState[idx], name, side, phone, companions, table, status };
        }
      } else {
        const newGuest = {
          id: "g-" + Date.now(),
          name, side, phone, companions, table, status
        };
        guestListState.unshift(newGuest);
      }

      closeGuestModal();
      renderGuestsAndGifts();
      showGlobalToast("اطلاعات مهمان با موفقیت بروزرسانی شد.");
    }

    function editGuest(id) {
      const g = guestListState.find(item => item.id === id);
      if (!g) return;
      document.getElementById("guest-edit-id").value = g.id;
      document.getElementById("guest-modal-name").value = g.name;
      document.getElementById("guest-modal-side").value = g.side;
      document.getElementById("guest-modal-phone").value = g.phone;
      document.getElementById("guest-modal-companions").value = g.companions;
      document.getElementById("guest-modal-table").value = g.table || "";
      document.getElementById("guest-modal-status").value = g.status;

      document.getElementById("guest-modal-title").innerText = "ویرایش مشخصات مهمان";
      document.getElementById("guest-modal").classList.remove("hidden");
    }

    function deleteGuest(id) {
      if (confirm("آیا از حذف این مهمان اطمینان دارید؟")) {
        guestListState = guestListState.filter(g => g.id !== id);
        renderGuestsAndGifts();
        showToast("مهمان از لیست حذف گردید.", 'danger');
      }
    }

    function toggleGuestRsvp(id) {
      const g = guestListState.find(item => item.id === id);
      if (!g) return;
      if (g.status === "CONFIRMED") g.status = "DECLINED";
      else if (g.status === "DECLINED") g.status = "PENDING";
      else g.status = "CONFIRMED";

      renderGuestsAndGifts();
      showToast("وضعیت RSVP مهمان به روز شد.", 'info');
    }

    function openGiftModal() {
      document.getElementById("gift-form").reset();
      document.getElementById("gift-edit-id").value = "";
      document.getElementById("gift-modal-title").innerText = "ثبت هدیه یا شاباش جدید";
      document.getElementById("gift-modal").classList.remove("hidden");
    }

    function closeGiftModal() {
      document.getElementById("gift-modal").classList.add("hidden");
    }

    function handleGiftFormSubmit(e) {
      e.preventDefault();
      const guestName = document.getElementById("gift-modal-name").value.trim();
      const type = document.getElementById("gift-modal-type").value;
      const amount = parseInt(document.getElementById("gift-modal-amount").value) || 0;
      const method = document.getElementById("gift-modal-method").value;
      const notes = document.getElementById("gift-modal-notes").value.trim();

      const newGift = {
        id: "gift-" + Date.now(),
        guestName, type, amount, method, notes
      };

      giftLedgerState.unshift(newGift);
      closeGiftModal();
      renderGuestsAndGifts();
      showGlobalToast("هدیه با موفقیت در صندوق هدایا ثبت شد.");
    }

    function deleteGift(id) {
      if (confirm("آیا از حذف این رکورد هدیه اطمینان دارید؟")) {
        giftLedgerState = giftLedgerState.filter(g => g.id !== id);
        renderGuestsAndGifts();
        showToast("رکورد هدیه حذف گردید.", 'danger');
      }
    }

    function downloadCsvFile(filename, csvContent) {
      const BOM = "\uFEFF";
      const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    function exportGuestsExcel() {
      let csv = "نام مهمان,دسته‌بندی,شماره همراه,تعداد همراهان,میز اختصاصی,وضعیت حضور\n";
      if (typeof guestListState !== 'undefined' && guestListState.length > 0) {
        guestListState.forEach(g => {
          const statusText = g.status === 'CONFIRMED' ? 'قطعی' : (g.status === 'DECLINED' ? 'عذرخواهی' : 'در انتظار');
          csv += `"${g.name || ''}","${g.side || ''}","${g.phone || ''}","${g.companions || 0}","${g.table || ''}","${statusText}"\n`;
        });
      } else {
        csv += "موردی یافت نشد\n";
      }
      downloadCsvFile("لیست_مهمانان_عروسی_یزد.csv", csv);
      showToast("خروجی کامل لیست مهمانان در قالب CSV/Excel دانلود گردید.", 'success');
    }

    function exportChecklistCsv() {
      let csv = "عنوان اقدام,بازه زمانی,اولویت,وضعیت,تأمین‌کننده متصل\n";
      if (typeof staticChecklist !== 'undefined' && staticChecklist.length > 0) {
        staticChecklist.forEach(t => {
          const timeframeObj = typeof timeframeList !== 'undefined' ? timeframeList.find(tf => tf.key === t.timeframeKey) : null;
          const tfName = timeframeObj ? timeframeObj.label : t.timeframeKey;
          const statusStr = t.completed ? 'تکمیل‌شده' : 'معوقه';
          const priorityStr = t.priority === 'urgent' || t.isUrgent ? 'فوری' : 'عادی';
          const vendor = typeof vendors !== 'undefined' && t.attachedVendorId ? vendors.find(v => v.id === t.attachedVendorId) : null;
          const vendorName = vendor ? vendor.title : 'نامتصل';
          csv += `"${t.title || ''}","${tfName || ''}","${priorityStr}","${statusStr}","${vendorName}"\n`;
        });
      }
      downloadCsvFile("چک_لیست_برنامه‌ریزی_عروسی.csv", csv);
      showToast("خروجی کامل چک‌لیست ۱۲ ماهه دانلود گردید.", 'success');
    }

    function exportBudgetSummaryCsv() {
      let csv = "عنوان خدمت,درصد تخصیصی,مبلغ برآوردی (تومان),وضعیت\n";
      if (typeof cbwState !== 'undefined' && cbwState.services) {
        cbwState.services.filter(s => s.active).forEach(s => {
          const allocatedVal = typeof calculateAllocatedBudget === 'function' ? calculateAllocatedBudget(s) : 0;
          csv += `"${s.title || ''}","${s.percentage || 0}%","${allocatedVal.toLocaleString('fa-IR')}","فعال"\n`;
        });
      }
      downloadCsvFile("برآورد_بودجه_عروسی.csv", csv);
      showToast("جدول برآورد بودجه در قالب فایل CSV دانلود گردید.", 'success');
    }

    // TAB SWITCHING FUNCTION
    function switchTab(tabId) {
      // SECURITY GUARD: Protect Admin Dashboard from unauthorized access
      if (tabId === 'admin' && currentUserRole !== 'admin') {
        showToast("دسترسی محدود: پنل مدیریت فقط برای مدیران سیستم مجاز است.", 'danger');
        tabId = 'home';
      }

      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));

      const homeView = document.getElementById('home-view');
      const directoryView = document.getElementById('directory-view');

      if (tabId === 'home') {
        if (homeView) homeView.classList.remove('hidden');
        if (directoryView) directoryView.classList.add('hidden');
        if (typeof initVipShowcaseAutoScroll === 'function') initVipShowcaseAutoScroll();
        if (typeof initTestimonialsAutoScroll === 'function') initTestimonialsAutoScroll();
      } else {
        if (homeView) homeView.classList.add('hidden');
        if (directoryView) directoryView.classList.remove('hidden');
        if (tabId === 'directory') {
          if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
          if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
          if (typeof filterVendors === 'function') filterVendors();
          if (typeof window.restoreDirectoryState === 'function') window.restoreDirectoryState();
        }
      }

      if (tabId === 'guests') renderGuestsAndGifts();
      if (tabId === 'tools' && typeof window.renderBwWizard === 'function') window.renderBwWizard();
      if (tabId === 'forum' && typeof renderBridalForum === 'function') renderBridalForum();
      if (tabId === 'vendor-dash') {
        if (typeof renderVendorPromoBadges === 'function') renderVendorPromoBadges();
        if (typeof renderVendorPackages === 'function') renderVendorPackages();
        if (typeof renderVendorDashCalendar === 'function') renderVendorDashCalendar();
        if (typeof renderVendorInquiriesTable === 'function') renderVendorInquiriesTable();
        if (typeof renderVendorReviewsManager === 'function') renderVendorReviewsManager();
        if (typeof updateVendorAnalyticsUI === 'function') updateVendorAnalyticsUI();
        if (typeof renderVendorCustomQuestionsList === 'function') renderVendorCustomQuestionsList(1);
      }

      const target = document.getElementById('tab-' + tabId);
      if (target) target.classList.remove('hidden');

      document.querySelectorAll('.demo-tab-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'shadow-xs');
        btn.classList.add('bg-white/10', 'hover:bg-white/20', 'text-slate-200');
      });

      const activeDemoBtn = document.getElementById('demo-tab-' + tabId) || (tabId === 'admin' ? document.getElementById('nav-admin') : null);
      if (activeDemoBtn) {
        activeDemoBtn.classList.remove('bg-white/10', 'hover:bg-white/20', 'text-slate-200');
        activeDemoBtn.classList.add('bg-primary', 'text-white', 'shadow-xs');
      }

      updateRoleBasedUIVisibility();

      lucide.createIcons();
    }

    function startQuizRunner(quizId) {
      const quiz = quizState.quizzes.find(q => q.id === quizId);
      if (!quiz) return;

      quizState.currentQuiz = quiz;
      quizState.currentQuestionIndex = 0;
      quizState.userAnswers = {};
      quizState.quizCompleted = false;

      document.getElementById('quiz-catalog-view').classList.add('hidden');
      document.getElementById('quiz-result-view').classList.add('hidden');

      const runnerView = document.getElementById('quiz-runner-view');
      if (runnerView) {
        runnerView.classList.remove('hidden');
        renderQuizQuestion();
      }
    }

    function finishQuizRunner() {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      quizState.quizCompleted = true;
      document.getElementById('quiz-runner-view').classList.add('hidden');

      const resultView = document.getElementById('quiz-result-view');
      if (resultView) {
        resultView.classList.remove('hidden');
        renderQuizResultDashboard();
      }
    }

    function renderQuizResultDashboard() {
      const resultView = document.getElementById('quiz-result-view');
      const quiz = quizState.currentQuiz;
      if (!resultView || !quiz) return;

      // Calculate scores
      const styleScores = {
        boho: 0,
        luxury: 0,
        modern: 0,
        classic: 0,
        vintage: 0,
        romantic: 0,
        compat: 0
      };

      let totalPoints = 0;

      Object.values(quizState.userAnswers).forEach(answer => {
        if (answer && answer.score) {
          Object.keys(answer.score).forEach(key => {
            styleScores[key] = (styleScores[key] || 0) + answer.score[key];
            totalPoints += answer.score[key];
          });
        }
      });

      let mainResultHTML = '';

      if (quiz.category !== 'psychology') {
        // Sort styles by highest score
        const sortedStyles = Object.keys(styleScores)
          .filter(k => k !== 'compat' && styleScores[k] > 0)
          .sort((a, b) => styleScores[b] - a[a]);

        const dominantKey = sortedStyles[0] || 'boho';
        const secondaryKey = sortedStyles[1] || 'romantic';

        const domPct = totalPoints > 0 ? Math.round((styleScores[dominantKey] / totalPoints) * 100) : 75;
        const secPct = totalPoints > 0 && secondaryKey ? Math.round((styleScores[secondaryKey] / totalPoints) * 100) : 25;

        const styleTitles = {
          boho: "بوهو و طبیعت‌گرا (Boho Chic)",
          luxury: "لوکس و باشکوه (VIP Royal)",
          modern: "مدرن و مینی‌مال (Modern Minimal)",
          classic: "کلاسیک و اصیل (Classic Regal)",
          vintage: "وینتیج و نوستالژیک (Vintage Warmth)",
          romantic: "رومانتیک و رویایی (Romantic Floral)"
        };

        const styleDescriptions = {
          boho: "استایل شما برپایه صمیمیت، المان‌های چوبی طبیعی، گل‌آرایی‌های آزاد وحشی و اتمسفر گرم طبیعت شکل گرفته است. لباس‌های سبک گیپور و سفره عقد با طاق برنجی بهترین مکمل زیبایی شماست.",
          luxury: "استایل شما جلوه‌گر شکوه، عمارت‌های ستون‌دار با نورپردازی کریستال، سفره عقد طبقاتی تمام سنگ و پذیرایی VIP شاهانه است.",
          modern: "استایل شما طرفدار خطوط پاک هندسی، تزئینات مینی‌مال، پالت‌های رنگی خنثی شیک و معماری مدرن با نورپردازی مهندسی شده است.",
          classic: "استایل شما وفادار به اصالت کلاسیـک، لباس پرنسسی، سفره عقد ترمه و آینه‌کاری‌های سنتی با اتمسفر وقار و متانت است.",
          vintage: "استایل شما دارای حس گرم نوستالژی، شمعدان‌های لاله‌عباسی، ظروف برنجی قدیمی و دکوراسیون گرم و دلنشین است.",
          romantic: "استایل شما سرشار از شکوفه‌های رز صورتی و پودری، طاق‌های گل‌آرایی شده، موزیک ملایم ویولن و لحظات عاطفی خاص است."
        };

        const palettes = {
          boho: [
            { name: "سبز زیتونی", hex: "#1B3B2B" },
            { name: "تراکوتا گرم", hex: "#D4A373" },
            { name: "کرم خاکی", hex: "#E9D8A6" },
            { name: "عاجی روشن", hex: "#FAEDCD" }
          ],
          luxury: [
            { name: "زمردی تیره", hex: "#1B3B2B" },
            { name: "طلایی شاهانه", hex: "#D4AF37" },
            { name: "شرابی VIP", hex: "#5C1325" },
            { name: "سفید کریستالی", hex: "#FFFFFF" }
          ],
          modern: [
            { name: "مشکی گرافیت", hex: "#111E16" },
            { name: "خاکستری فولادی", hex: "#8D99AE" },
            { name: "پلاتینیوم", hex: "#E0D8C8" },
            { name: "سفید یخچالی", hex: "#F5EFEB" }
          ],
          classic: [
            { name: "سرمه‌ای سلطنتی", hex: "#1A2E40" },
            { name: "طلایی مات", hex: "#C5A059" },
            { name: "کرم عاجی", hex: "#F5F0EB" },
            { name: "زرشکی کلاسیـک", hex: "#800020" }
          ],
          vintage: [
            { name: "قهوه‌ای بلوطی", hex: "#6B4226" },
            { name: "خردلی گرم", hex: "#E3A857" },
            { name: "بژ نوستالژیک", hex: "#D2B48C" },
            { name: "سبز کهن", hex: "#4A5D4E" }
          ],
          romantic: [
            { name: "صورتی پودری", hex: "#F4C2C2" },
            { name: "یاسی ملایم", hex: "#E6E6FA" },
            { name: "سفید مرواریدی", hex: "#FDFBF7" },
            { name: "سبز زیتونی روشن", hex: "#A8BBA2" }
          ]
        };

        const currentPalette = palettes[dominantKey] || palettes.boho;

        quizState.appliedStyleFilter = dominantKey;

        mainResultHTML = `
          <!-- MAIN MATCH BANNER -->
          <div class="bg-gradient-to-br from-primary/10 via-emerald-50 to-bgCustom border border-primary/20 rounded-3xl p-6 sm:p-8 space-y-6">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-primary/20 pb-4">
              <div class="space-y-1">
                <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">نتیجه محاسبات هوشمند استایل</span>
                <h3 class="text-2xl font-black text-graphite mt-1">${styleTitles[dominantKey]}</h3>
              </div>

              <div class="flex items-center gap-2 self-start sm:self-auto">
                <div class="text-left dir-ltr">
                  <span class="block text-2xl font-black text-primary">${domPct}٪</span>
                  <span class="text-[10px] font-bold text-secondary">درصد تطابق اصلی</span>
                </div>
              </div>
            </div>

            <!-- SCORE BREAKDOWN BARS -->
            <div class="space-y-3">
              <span class="block text-xs font-bold text-graphite">تفکیک تمایل استایل بصری شما:</span>

              <div class="space-y-2">
                <div class="flex justify-between items-center text-xs font-bold">
                  <span class="text-primary">${styleTitles[dominantKey]}</span>
                  <span class="text-primary">${domPct}٪</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-primary h-full rounded-full" style="width: ${domPct}%"></div>
                </div>
              </div>

              ${secondaryKey ? `
                <div class="space-y-2">
                  <div class="flex justify-between items-center text-xs font-bold">
                    <span class="text-secondary">${styleTitles[secondaryKey]}</span>
                    <span class="text-secondary">${secPct}٪</span>
                  </div>
                  <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-secondary h-full rounded-full" style="width: ${secPct}%"></div>
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- AESTHETIC SUMMARY GUIDANCE -->
            <div class="p-4 bg-[#161C2B] rounded-2xl border border-[#C5A059]/30 text-xs text-white leading-relaxed space-y-2">
              <span class="font-bold text-[#D4AF37] block text-sm">راهنمای بصری و دکوراسیون پیشنهادی:</span>
              <p class="text-slate-300">${styleDescriptions[dominantKey]}</p>
            </div>

            <!-- COLOR PALETTE SWATCHES -->
            <div class="space-y-2">
              <span class="block text-xs font-bold text-slate-300">پالت رنگی پیشنهادی برای تزئینات و گل‌آرایی:</span>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${currentPalette.map(c => `
                  <div class="p-2.5 bg-[#161C2B] rounded-xl border border-[#C5A059]/30 flex items-center gap-2.5 shadow-xs">
                    <div class="w-8 h-8 rounded-lg border border-[#C5A059]/40 shadow-xs shrink-0" style="background-color: ${c.hex}"></div>
                    <div>
                      <span class="block text-xs font-bold text-white">${c.name}</span>
                      <span class="text-[10px] text-amber-300 font-mono dir-ltr block">${c.hex}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else {
        // Psychology Compatibility & Diagnostic Scorecard Result
        const totalAnswered = Object.keys(quizState.userAnswers).length;

        let totalWeightEarned = 0;
        let maxPossibleWeight = totalAnswered * 10;

        Object.values(quizState.userAnswers).forEach(ans => {
          if (ans) {
            totalWeightEarned += typeof ans.weight === 'number' ? ans.weight : (ans.score?.compat || 5);
          }
        });

        const scorePercent = maxPossibleWeight > 0 ? Math.min(100, Math.max(10, Math.round((totalWeightEarned / maxPossibleWeight) * 100))) : 85;

        let levelTitle = "";
        let levelBadgeClass = "";
        let levelBadgeText = "";
        let strengths = [];
        let growthAreas = [];
        let expertAdvice = "";

        if (scorePercent >= 80) {
          levelTitle = "آمادگی عاطفی و هم‌راستایی عالی (سطح طلایی)";
          levelBadgeClass = "bg-emerald-100 text-[#1B3B2B] border border-emerald-300";
          levelBadgeText = "آمادگی فوق‌العاده - " + scorePercent + "٪";
          strengths = [
            "سطح بالای بلوغ ارتباطی و توانایی گفتگو در شرایط پرچالش",
            "احترام عمیق به حریم خصوصی، استقلال فکری و اهداف فردی یکدیگر",
            "هم‌نظری ارزشمند در مدیریت مالی، تقسیم مسئولیت‌ها و برنامه‌های آینده"
          ];
          growthAreas = [
            "ثبت جلسات هم‌فکری هفتگی کوتاه برای جلوگیری از فرسودگی کارهای اجرایی عروسی",
            "تمرکز بیشتر روی حفظ لحظات رومانتیک دو نفره در کنار برنامه‌ریزی‌های شلوغ"
          ];
          expertAdvice = "الگوهای انتخابی شما نشان‌دهنده پختگی هیجانی، اعتماد متقابل و توانایی عالی برای ساخت زندگی مشترک پایدار است. برنامه‌ریزی عروسی برای شما تجربه‌ای لذت‌بخش و تقویت‌کننده پیوند عاطفی خواهد بود.";
        } else if (scorePercent >= 60) {
          levelTitle = "هم‌راستایی مطلوب (نیازمند گفتگوی بیشتر در برخی محورها)";
          levelBadgeClass = "bg-amber-100 text-amber-900 border border-amber-300";
          levelBadgeText = "تفاهم خوب - " + scorePercent + "٪";
          strengths = [
            "اشتیاق مثبت و حسن نیت بالا برای حل مسائل و پیشبرد کارهای عروسی",
            "انعطاف‌پذیری خوب در مواجهه با نظرات همسر و خانواده‌ها"
          ];
          growthAreas = [
            "شفاف‌سازی بیشتر انتظارات مالی و تعیین مرزهای دقیق برای مداخلات اطرافیان",
            "تمرین تکنیک‌های شنود فعال هنگام بروز اختلاف نظر در جزئیات تشریفات"
          ];
          expertAdvice = "تفاهم شما در سطح خوبی قرار دارد؛ با این حال پیش از اتخاذ تصمیمات بزرگ مالی یا تشریفاتی، حتماً جلسات گفتگوی صمیمانه دو نفره برای شفاف‌سازی انتظارات متقابل برگزار کنید.";
        } else {
          levelTitle = "نیازمند تعمیق گفتگو و مشاوره تخصصی قبل از ازدواج";
          levelBadgeClass = "bg-[#5C1325]/10 text-[#5C1325] border border-[#5C1325]/30";
          levelBadgeText = "نیازمند مشاوره - " + scorePercent + "٪";
          strengths = [
            "صداقت بالا در پاسخ‌دهی و آگاهی از نقاط نیازمند بهبود در رابطه",
            "انگیزه برای دریافت راهنمایی‌های تخصصی روان‌شناسی"
          ];
          growthAreas = [
            "بازنگری و گفتگو درباره انتظارات مالی، نحوه مدیریت استرس و مرزبندی با خانواده‌ها",
            "کنترل خشم و استرس‌های ناشی از حجم کارهای اجرایی روزهای قبل از جشن"
          ];
          expertAdvice = "اختلاف نظر در دوران برنامه‌ریزی طبیعی است، اما جهت افزایش آرامش خاطر و جلوگیری از سوءتفاهم‌های عاطفی، پیشنهاد می‌شود از یک جلسه مشاوره تخصصی پیش از ازدواج استفاده کنید.";
        }

        // Save result to quiz history
        saveQuizHistoryEntry({
          quizId: quiz.id,
          quizTitle: quiz.title,
          quizCategory: quiz.category,
          date: new Date().toLocaleDateString('fa-IR'),
          scorePercent: scorePercent,
          levelTitle: levelTitle
        });

        mainResultHTML = `
          <!-- DIAGNOSTIC SCORECARD CONTAINER -->
          <div class="bg-[#FCFCFA] border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <!-- HEADER INFO -->
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#E0D8C8] pb-5">
              <div class="space-y-1">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold ${levelBadgeClass}">
                  <i data-lucide="award" class="w-4 h-4"></i>
                  <span>${levelBadgeText}</span>
                </span>
                <h3 class="text-xl sm:text-2xl font-black text-graphite mt-2">${levelTitle}</h3>
                <p class="text-xs text-secondary font-medium">کارنامه تحلیل روان‌شناسی اختصاصی ${quiz.title}</p>
              </div>

              <div class="text-left dir-ltr bg-[#161C2B] p-4 rounded-2xl border border-[#C5A059]/30 shadow-xs shrink-0">
                <span class="block text-3xl font-black text-[#D4AF37]">${scorePercent}٪</span>
                <span class="text-[10px] font-bold text-slate-400">امتیاز نهایی آمادگی</span>
              </div>
            </div>

            <!-- KEY STRENGTHS & GROWTH AREAS GRID -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- STRENGTHS -->
              <div class="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-2xl space-y-3">
                <h4 class="font-bold text-emerald-300 text-xs flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
                  <span>نقاط قوت و دارایی‌های ارتباطی زوج:</span>
                </h4>
                <ul class="space-y-2 text-xs text-slate-200 font-medium">
                  ${strengths.map(s => `
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-400 font-bold">•</span>
                      <span>${s}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- GROWTH AREAS -->
              <div class="bg-amber-950/40 border border-amber-500/30 p-5 rounded-2xl space-y-3">
                <h4 class="font-bold text-amber-300 text-xs flex items-center gap-2">
                  <i data-lucide="trending-up" class="w-4 h-4 text-amber-400"></i>
                  <span>محورهای پیشنهادی برای گفتگو و رشد:</span>
                </h4>
                <ul class="space-y-2 text-xs text-slate-200 font-medium">
                  ${growthAreas.map(g => `
                    <li class="flex items-start gap-2">
                      <span class="text-amber-400 font-bold">•</span>
                      <span>${g}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- EXPERT ADVICE BANNER -->
            <div class="p-5 bg-[#161C2B] rounded-2xl border border-[#C5A059]/30 space-y-2">
              <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>توصیه راهبردی مشاور خانواده عروسی تو:</span>
              </span>
              <p class="text-xs text-slate-200 leading-relaxed font-medium">${expertAdvice}</p>
            </div>

            <!-- COUNSELOR CONSULTATION CTA BANNER -->
            <div class="bg-[#1B3B2B] text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-[#D4AF37]">مایل به تعمیق بیشتر گفتگوها هستید؟</h4>
                <p class="text-xs text-emerald-100/90 font-medium">هماهنگی جلسه مشاوره تخصصی ازدواج با مشاورین برجسته خانواده استان یزد</p>
              </div>

              <button onclick="openCounselorModal()" class="bg-[#D4AF37] hover:bg-amber-400 text-[#1B3B2B] font-black px-5 py-3 rounded-xl text-xs transition-all shadow-md shrink-0 flex items-center gap-2">
                <i data-lucide="heart-handshake" class="w-4 h-4"></i>
                <span>درخواست مشاوره تخصصی ازدواج</span>
              </button>
            </div>
          </div>
        `;
      }

      const isPsych = quiz.category === 'psychology';

      resultView.innerHTML = `
        <!-- HEADER ACTIONS -->
        <div class="flex justify-between items-center border-b border-accent pb-4">
          <div class="flex items-center gap-2">
            <i data-lucide="award" class="w-6 h-6 text-primary"></i>
            <h2 class="text-xl font-bold text-graphite">کارنامه تحلیل روان‌شناسی و استایل</h2>
          </div>

          <button onclick="exitQuizRunner()" class="text-xs font-bold text-secondary hover:text-graphite flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            <span>بازگشت به فهرست آزمون‌ها</span>
          </button>
        </div>

        <!-- MAIN RESULT RENDER -->
        ${mainResultHTML}

        <!-- INTEGRATED ACTION BUTTONS -->
        <div class="pt-4 border-t border-accent grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${isPsych ? `
            <button onclick="openCounselorModal()" class="bg-[#1B3B2B] hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2">
              <i data-lucide="heart-handshake" class="w-4 h-4 text-[#D4AF37]"></i>
              <span>رزرو مشاوره ازدواج در یزد</span>
            </button>
          ` : `
            <button onclick="applyStyleToDirectory()" class="bg-primary hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2">
              <i data-lucide="filter" class="w-4 h-4"></i>
              <span>اعمال این استایل روی دایرکتوری و چک‌لیست</span>
            </button>
          `}

          <button onclick="showToast('کارنامه تحلیل روان‌شناسی با موفقیت جهت ذخیره‌سازی آماده شد.', 'info');" class="bg-bgCustom border border-accent hover:border-primary text-graphite font-bold py-3 px-4 rounded-2xl text-xs shadow-xs transition-all flex items-center justify-center gap-2">
            <i data-lucide="download" class="w-4 h-4 text-primary"></i>
            <span>دانلود کارنامه تحلیل (PDF)</span>
          </button>

          <button onclick="copyQuizResultLink()" class="bg-bgCustom border border-accent hover:border-primary text-graphite font-bold py-3 px-4 rounded-2xl text-xs shadow-xs transition-all flex items-center justify-center gap-2">
            <i data-lucide="share-2" class="w-4 h-4 text-primary"></i>
            <span>اشتراک‌گذاری کارنامه با همسر</span>
          </button>
        </div>
      `;

      lucide.createIcons();
    }

    function applyStyleToDirectory() {
      switchTab('home');
      const vendorSection = document.getElementById('vendor-grid');
      if (vendorSection) vendorSection.scrollIntoView({ behavior: 'smooth' });
      showToast('استایل انتخابی شما روی دایرکتوری تامین‌کنندگان و پیشنهادات چک‌لیست اعمال گردید.', 'success');
    }

    function copyQuizResultLink() {
      const link = 'https://aroosito.com/quizzes/result?id=' + (quizState.currentQuiz ? quizState.currentQuiz.id : 'style');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('لینک خلاصه تحلیل استایل برای اشتراک‌گذاری کپی شد', 'info');
      } else {
        showToast('لینک تحلیل استایل: ' + link, 'info');
      }
    }

    function exitQuizRunner() {
      quizState.currentQuiz = null;
      quizState.currentQuestionIndex = 0;
      quizState.userAnswers = {};

      document.getElementById('quiz-runner-view').classList.add('hidden');
      document.getElementById('quiz-result-view').classList.add('hidden');
      document.getElementById('quiz-catalog-view').classList.remove('hidden');
    }

    function renderQuizQuestion() {
      const runnerView = document.getElementById('quiz-runner-view');
      const quiz = quizState.currentQuiz;
      if (!runnerView || !quiz) return;

      const totalQuestions = quiz.questions.length;
      const currentIndex = quizState.currentQuestionIndex;
      const question = quiz.questions[currentIndex];
      const selectedOption = quizState.userAnswers[question.id];

      const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

      let optionsHTML = '';

      if (question.options[0] && question.options[0].image) {
        // Render Image Choice Cards Grid
        optionsHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${question.options.map(opt => {
              const isSelected = selectedOption && selectedOption.id === opt.id;
              return `
                <div onclick="selectQuizOption('${question.id}', '${opt.id}')" class="p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected ? 'bg-[#07090E] border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'bg-[#141A28] border-[#C5A059]/30 hover:border-[#C5A059]/60'
                }">
                  <div class="aspect-4/3 rounded-xl overflow-hidden bg-[#07090E] border border-[#C5A059]/20">
                    <img src="${opt.image}" alt="${opt.label}" class="w-full h-full object-cover">
                  </div>
                  <div class="flex items-center justify-between text-xs font-bold text-[#F7F5F0]">
                    <span class="leading-snug">${opt.label}</span>
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#C5A059] bg-[#C5A059] text-[#07090E] font-black' : 'border-slate-500'
                    }">
                      ${isSelected ? '✓' : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // Render Text Choice Cards
        optionsHTML = `
          <div class="space-y-3 max-w-2xl mx-auto">
            ${question.options.map(opt => {
              const isSelected = selectedOption && selectedOption.id === opt.id;
              return `
                <div onclick="selectQuizOption('${question.id}', '${opt.id}')" class="p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected ? 'bg-[#07090E] border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'bg-[#141A28] border-[#C5A059]/30 hover:border-[#C5A059]/60'
                }">
                  <span class="text-xs sm:text-sm font-bold text-[#F7F5F0] leading-relaxed">${opt.label}</span>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-[#C5A059] bg-[#C5A059] text-[#07090E] font-black' : 'border-slate-500'
                  }">
                    ${isSelected ? '✓' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      runnerView.innerHTML = `
        <!-- HEADER & PROGRESS BAR -->
        <div class="border-b border-accent pb-6 space-y-4">
          <div class="flex justify-between items-center text-xs font-bold">
            <button onclick="exitQuizRunner()" class="text-secondary hover:text-graphite flex items-center gap-1">
              <i data-lucide="x" class="w-4 h-4"></i>
              <span>انصراف و خروج</span>
            </button>

            <span class="text-primary font-black bg-primary/10 px-3 py-1 rounded-full">
              سوال ${currentIndex + 1} از ${totalQuestions}
            </span>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between text-[11px] font-bold text-secondary">
              <span>میزان پیشرفت تست</span>
              <span>${progressPercent}٪</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-accent/60">
              <div class="bg-primary h-full transition-all duration-300 rounded-full" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>

        <!-- QUIZ HEADER WITH UN SPLASH IMAGE -->
        <div class="space-y-4">
          <div class="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 border border-accent shadow-xs">
            <img src="${quiz.image}" alt="${quiz.title}" class="w-full h-full object-cover opacity-85">
            <div class="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/30 to-transparent p-5 flex flex-col justify-end text-white">
              <span class="bg-[#D4AF37] text-[#1B3B2B] text-[10px] font-black px-3 py-1 rounded-full w-fit shadow-xs mb-1.5">${quiz.badge}</span>
              <h4 class="text-sm sm:text-base font-bold text-white">${quiz.title}</h4>
            </div>
          </div>

          <div class="text-center space-y-1.5 py-1">
            <h3 class="text-lg sm:text-xl font-black text-graphite leading-relaxed">${question.text}</h3>
            <p class="text-xs text-secondary font-medium">گزینه‌ای که بیشترین تطابق را با واقعیت و روحیات شما دارد انتخاب کنید</p>
          </div>
        </div>

        <!-- OPTIONS GRID/LIST -->
        <div>
          ${optionsHTML}
        </div>

        <!-- NAVIGATION CONTROLS -->
        <div class="pt-6 border-t border-accent flex justify-between items-center">
          <button onclick="navigateQuizQuestion(-1)" class="px-5 py-2.5 rounded-xl border border-accent text-secondary hover:text-graphite font-bold text-xs transition-all ${
            currentIndex === 0 ? 'opacity-40 pointer-events-none' : ''
          }">
            سوال قبلی
          </button>

          ${currentIndex === totalQuestions - 1 ? `
            <button onclick="finishQuizRunner()" class="bg-primary hover:bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${
              !selectedOption ? 'opacity-50 pointer-events-none' : ''
            }">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              <span>مشاهده خروجی و تحلیل نهایی</span>
            </button>
          ` : `
            <button onclick="navigateQuizQuestion(1)" class="bg-primary hover:bg-emerald-900 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${
              !selectedOption ? 'opacity-50 pointer-events-none' : ''
            }">
              <span>سوال بعدی</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          `}
        </div>
      `;

      lucide.createIcons();
    }

    function selectQuizOption(questionId, optionId) {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      const question = quiz.questions.find(q => q.id === questionId);
      if (!question) return;

      const option = question.options.find(o => o.id === optionId);
      if (!option) return;

      quizState.userAnswers[questionId] = option;
      renderQuizQuestion();
    }

    function navigateQuizQuestion(dir) {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      const newIndex = quizState.currentQuestionIndex + dir;
      if (newIndex >= 0 && newIndex < quiz.questions.length) {
        quizState.currentQuestionIndex = newIndex;
        renderQuizQuestion();
      }
    }

    // GALLERY LIGHTBOX

    // PORTFOLIO GALLERY CRUD STATE & HANDLERS
    let vendorPortfolio = [
      {
        id: 'port-1',
        title: 'دیزاین سفره عقد و گل‌آرایی سالن زمرد',
        category: 'مراسم عقد',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-2',
        title: 'نورپردازی مدرن و دکوراسیون جایگاه عروس و داماد',
        category: 'جشن عروسی',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-3',
        title: 'چیدمان فضای باز و پذیرایی کوکتل فضا',
        category: 'فرمالیته',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-4',
        title: 'گل‌آرایی اختصاصی ورود و ماشین عروس',
        category: 'دیزاین & گل‌آرایی',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
      }
    ];

    function renderPortfolioUI() {
      const dashContainer = document.getElementById('vd-portfolio-grid');
      const publicContainer = document.getElementById('vp-gallery-grid');

      // 1. Render Dashboard Portfolio Grid
      if (dashContainer) {
        dashContainer.innerHTML = '';
        if (vendorPortfolio.length === 0) {
          dashContainer.innerHTML = `
            <div class="col-span-full border-2 border-dashed border-accent rounded-2xl p-8 text-center text-secondary space-y-2">
              <i data-lucide="image-off" class="w-10 h-10 mx-auto text-secondary/50"></i>
              <p class="text-xs font-bold">هیچ نمونه‌کاری ثبت نشده است.</p>
              <p class="text-[11px]">با استفاده از دکمه «افزودن نمونه‌کار جدید» اولین نمونه کار خود را قرار دهید.</p>
            </div>
          `;
        } else {
          vendorPortfolio.forEach(item => {
            const isCover = item.isCover || false;
            const card = document.createElement('div');
            card.className = "bg-bgCustom border border-accent rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between";
            card.innerHTML = `
              <div>
                <div class="h-40 w-full relative bg-slate-100 overflow-hidden">
                  <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                  <span class="absolute top-2.5 right-2.5 bg-graphite/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ${item.category}
                  </span>
                  ${isCover ? `
                    <span class="absolute top-2.5 left-2.5 bg-[#D4AF37] text-[#1B3B2B] text-[10px] font-black px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      ⭐ کاور اصلی
                    </span>
                  ` : ''}
                </div>
                <div class="p-3 space-y-1">
                  <h4 class="text-xs font-bold text-graphite line-clamp-2 min-h-[2.25rem]">${item.title}</h4>
                </div>
              </div>
              <div class="p-3 pt-0 border-t border-[#C5A059]/30 mt-2 space-y-2 text-xs font-bold">
                <button type="button" onclick="setPortfolioAsCover('${item.id}')" class="w-full ${isCover ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60' : 'bg-[#161C2B] hover:bg-[#1E293B] text-white border border-[#C5A059]/30'} py-1.5 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                  <i data-lucide="star" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                  <span>${isCover ? 'کاور اصلی فعال است' : 'انتخاب به‌عنوان کاور'}</span>
                </button>
                <div class="flex items-center justify-between gap-2">
                  <button type="button" onclick="openPortfolioModal('${item.id}')" class="flex-1 bg-[#161C2B] hover:bg-[#1E293B] text-white border border-[#C5A059]/30 py-1.5 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                    <i data-lucide="edit-2" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>ویرایش</span>
                  </button>
                  <button type="button" onclick="deletePortfolioItem('${item.id}')" class="bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-500/30 py-1.5 px-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    <span>حذف</span>
                  </button>
                </div>
              </div>
            `;
            dashContainer.appendChild(card);
          });
        }
      }

      // 2. Render Public Profile Gallery Grid
      if (publicContainer) {
        publicContainer.innerHTML = '';
        if (vendorPortfolio.length === 0) {
          publicContainer.innerHTML = `
            <div class="col-span-full border border-accent rounded-2xl p-8 text-center text-secondary text-xs font-bold">
              نمونه‌کاری برای نمایش وجود ندارد.
            </div>
          `;
        } else {
          vendorPortfolio.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = "aspect-square rounded-2xl overflow-hidden border border-accent relative group cursor-pointer shadow-xs";
            div.onclick = () => openLightbox(item.image);
            div.innerHTML = `
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <span class="self-end bg-white/20 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded-full">${item.category}</span>
                <div>
                  <p class="text-xs font-bold line-clamp-1">${item.title}</p>
                  <p class="text-[10px] opacity-80 flex items-center gap-1 mt-1"><i data-lucide="maximize-2" class="w-3 h-3"></i> کلیک جهت مشاهده</p>
                </div>
              </div>
            `;
            publicContainer.appendChild(div);
          });
        }
      }

      lucide.createIcons();
    }

    let tempModalImageBase64 = null;

    function openPortfolioModal(id = null) {
      const modal = document.getElementById('portfolio-modal');
      const modalTitle = document.getElementById('portfolio-modal-title');
      const idInput = document.getElementById('port-id');
      const titleInput = document.getElementById('port-title');
      const catInput = document.getElementById('port-category');
      const urlInput = document.getElementById('port-img-url');
      const fileInput = document.getElementById('port-img-file');

      tempModalImageBase64 = null;
      if (fileInput) fileInput.value = '';

      if (id) {
        const item = vendorPortfolio.find(p => p.id === id);
        if (item) {
          modalTitle.innerText = 'ویرایش نمونه‌کار';
          idInput.value = item.id;
          titleInput.value = item.title;
          catInput.value = item.category || 'مراسم عقد';
          urlInput.value = item.image.startsWith('data:') ? '' : item.image;
          previewPortfolioModalImage(item.image);
        }
      } else {
        modalTitle.innerText = 'افزودن نمونه‌کار جدید';
        idInput.value = '';
        titleInput.value = '';
        catInput.value = 'مراسم عقد';
        urlInput.value = '';
        previewPortfolioModalImage('');
      }

      if (modal) modal.classList.remove('hidden');
    }

    function closePortfolioModal() {
      const modal = document.getElementById('portfolio-modal');
      if (modal) modal.classList.add('hidden');
    }

    function previewPortfolioModalImage(src) {
      const img = document.getElementById('port-img-preview');
      const placeholder = document.getElementById('port-img-placeholder');

      if (src && src.trim() !== '') {
        img.src = src;
        img.classList.remove('hidden');
        placeholder.classList.add('hidden');
      } else {
        img.src = '';
        img.classList.add('hidden');
        placeholder.classList.remove('hidden');
      }
    }

    function handlePortfolioFileSelect(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        tempModalImageBase64 = e.target.result;
        previewPortfolioModalImage(tempModalImageBase64);
        document.getElementById('port-img-url').value = '';
      };
      reader.readAsDataURL(file);
    }

    function handlePortfolioSubmit(e) {
      e.preventDefault();
      const id = document.getElementById('port-id').value;
      const title = document.getElementById('port-title').value.trim();
      const category = document.getElementById('port-category').value;
      const url = document.getElementById('port-img-url').value.trim();

      const finalImg = tempModalImageBase64 || url || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80';

      if (id) {
        // Edit mode
        const index = vendorPortfolio.findIndex(p => p.id === id);
        if (index !== -1) {
          vendorPortfolio[index] = { id, title, category, image: finalImg };
        }
      } else {
        // Add mode
        const newItem = {
          id: 'port-' + Date.now(),
          title,
          category,
          image: finalImg
        };
        vendorPortfolio.push(newItem);

        // Sync into public Inspiration Hub ideas linked directly to creator vendor profile
        const activeVendor = vendors[0];
        const newIdea = {
          id: Date.now(),
          title,
          categoryKey: 'all',
          categoryName: category,
          vendorCategoryMatch: activeVendor ? activeVendor.category : 'تالار و باغ تشریفات',
          image: finalImg,
          viewsCount: '۱ (جدید)',
          vendor: {
            id: activeVendor ? activeVendor.id : 1,
            name: activeVendor ? activeVendor.name : 'تامین‌کننده',
            avatar: activeVendor ? activeVendor.image : finalImg,
            category: activeVendor ? activeVendor.category : category,
            district: activeVendor ? activeVendor.district : 'صفائیه یزد',
            rating: activeVendor ? activeVendor.rating : 4.9
          }
        };
        inspirationState.items.unshift(newIdea);
        renderInspirationGalleryGrid();
        showToast('نمونه‌کار و ایده جدید با موفقیت منتشر گردید', 'success');
      }

      renderPortfolioUI();
      closePortfolioModal();
    }

    function deletePortfolioItem(id) {
      if (confirm('آیا از حذف این نمونه‌کار مطمئن هستید؟')) {
        vendorPortfolio = vendorPortfolio.filter(p => p.id !== id);
        renderPortfolioUI();
      }
    }

    function setPortfolioAsCover(id) {
      vendorPortfolio.forEach(p => {
        p.isCover = (p.id === id);
      });
      const selected = vendorPortfolio.find(p => p.id === id);
      if (selected) {
        const coverImg = document.getElementById('vp-cover');
        const vdmCover = document.getElementById('vdm-cover');
        if (coverImg) coverImg.src = selected.image;
        if (vdmCover) vdmCover.src = selected.image;
      }
      renderPortfolioUI();
      if (typeof showToast === 'function') {
        showToast('⭐ تصویر انتخاب‌شده به‌عنوان کاور اصلی ثبت گردید.', 'success');
      }
    }

    window.setPortfolioAsCover = setPortfolioAsCover;
    window.deletePortfolioItem = deletePortfolioItem;
    window.openPortfolioModal = openPortfolioModal;
    window.closePortfolioModal = closePortfolioModal;


    function renderGallery() {
      const container = document.getElementById('vp-gallery-grid');
      if (!container) return;
      container.innerHTML = '';

      galleryPhotos.forEach((img, idx) => {
        const div = document.createElement('div');
        div.className = "aspect-square rounded-2xl overflow-hidden border border-accent relative group cursor-pointer shadow-xs";
        div.onclick = () => openLightbox(img);
        div.innerHTML = `
          <img src="${img}" alt="نمونه کار ${idx + 1}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs">
            <i data-lucide="maximize-2" class="w-6 h-6"></i>
          </div>
        `;
        container.appendChild(div);
      });
      lucide.createIcons();
    }

    function openLightbox(src) {
      document.getElementById('lightbox-img').src = src;
      document.getElementById('lightbox-modal').classList.remove('hidden');
    }

    function closeLightbox() {
      document.getElementById('lightbox-modal').classList.add('hidden');
    }

    // VENDOR PACKAGES
    function renderVendorPackages() {
      const pubContainer = document.getElementById('vp-packages-container');
      const dashContainer = document.getElementById('vd-packages-list');

      if (pubContainer) {
        pubContainer.innerHTML = '';
        vendorPackages.forEach(pkg => {
          const card = document.createElement('div');
          card.className = "bg-bgCustom border border-accent rounded-2xl p-5 space-y-4 shadow-xs hover:border-primary transition-all flex flex-col justify-between";
          card.innerHTML = `
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">پکیج رسمی</span>
                ${pkg.badge ? `<span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">${pkg.badge}</span>` : ''}
              </div>
              <h4 class="text-base font-bold text-graphite">${pkg.name}</h4>
              <p class="text-sm font-black text-primary">${pkg.price}</p>

              <ul class="space-y-2 pt-2 border-t border-accent/60 text-xs text-graphite">
                ${pkg.features.map(f => `<li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-primary shrink-0"></i><span>${f}</span></li>`).join('')}
              </ul>
            </div>

            <button onclick="openInquiryModal(1, '${pkg.name}')" class="w-full bg-primary hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
              استعلام و رزرو این پکیج
            </button>
          `;
          pubContainer.appendChild(card);
        });
      }

      if (dashContainer) {
        dashContainer.innerHTML = '';
        vendorPackages.forEach((pkg, idx) => {
          const card = document.createElement('div');
          card.className = "bg-bgCustom border border-accent rounded-2xl p-4 space-y-3 text-xs shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between";
          card.innerHTML = `
            <div class="space-y-1.5">
              <div class="flex justify-between items-start font-bold text-graphite">
                <span class="text-sm text-graphite font-black">${pkg.name}</span>
                ${pkg.badge ? `<span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full shrink-0">${pkg.badge}</span>` : ''}
              </div>
              <p class="text-primary font-black text-xs">${pkg.price}</p>
              <ul class="space-y-1 pt-2 border-t border-accent/60 text-secondary text-[11px]">
                ${pkg.features.map(f => `<li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>${f}</span></li>`).join('')}
              </ul>
              ${pkg.requirements ? `<p class="text-[10px] font-bold text-amber-300 bg-amber-950/40 p-1.5 rounded-lg border border-amber-500/30 mt-1">📌 شرط/الزام: ${pkg.requirements}</p>` : ''}
            </div>

            <div class="flex items-center justify-end gap-2 pt-2 border-t border-[#C5A059]/30">
              <button onclick="editVendorPackage(${idx})" class="bg-[#D4AF37] hover:bg-[#C5A059] text-[#07090E] font-black px-3 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer">
                <i data-lucide="edit-2" class="w-3 h-3"></i> ویرایش
              </button>
              <button onclick="deletePackage('${pkg.id}')" class="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold px-3 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer">
                <i data-lucide="trash-2" class="w-3 h-3"></i> حذف
              </button>
            </div>
          `;
          dashContainer.appendChild(card);
        });
      }

      lucide.createIcons();
    }

    function toggleAddPackageModal(show) {
      const modal = document.getElementById('modal-vendor-package') || document.getElementById('package-modal');
      if (modal) {
        if (show) {
          document.getElementById('pkg-edit-index').value = '-1';
          document.getElementById('form-vendor-package')?.reset();
          document.getElementById('modal-package-title').innerHTML = '<i data-lucide="package-plus" class="w-5 h-5 text-primary"></i><span>افزودن پکیج جدید</span>';
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        } else {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      }
    }

    function editVendorPackage(idx) {
      const pkg = vendorPackages[idx];
      if (!pkg) return;
      const modal = document.getElementById('modal-vendor-package');
      if (!modal) return;
      document.getElementById('pkg-edit-index').value = idx;
      document.getElementById('pkg-title').value = pkg.name || '';
      document.getElementById('pkg-price').value = pkg.price || '';
      document.getElementById('pkg-badge').value = pkg.badge || '';
      document.getElementById('pkg-features').value = pkg.features ? pkg.features.join('\n') : '';
      if (document.getElementById('pkg-requirements')) {
        document.getElementById('pkg-requirements').value = pkg.requirements || '';
      }
      document.getElementById('modal-package-title').innerHTML = '<i data-lucide="edit-3" class="w-5 h-5 text-primary"></i><span>ویرایش پکیج خدمات</span>';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function saveVendorPackageModal(e) {
      e.preventDefault();
      const editIdx = parseInt(document.getElementById('pkg-edit-index').value);
      const name = document.getElementById('pkg-title').value.trim();
      const price = document.getElementById('pkg-price').value.trim();
      const badge = document.getElementById('pkg-badge').value.trim();
      const featuresRaw = document.getElementById('pkg-features').value.trim();
      const requirements = document.getElementById('pkg-requirements')?.value.trim() || '';

      if (!name || !price) return;
      const features = featuresRaw ? featuresRaw.split('\n').map(f => f.trim()).filter(Boolean) : ['خدمات باکیفیت کامل'];

      if (editIdx >= 0 && vendorPackages[editIdx]) {
        vendorPackages[editIdx] = { ...vendorPackages[editIdx], name, price, badge, features, requirements };
        showToast('پکیج خدمات با موفقیت به روزرسانی شد.', 'success');
      } else {
        vendorPackages.push({ id: 'pkg-' + Date.now(), name, price, badge, features, requirements });
        showToast('پکیج جدید با موفقیت اضافه گردید.', 'success');
      }

      const vendor2 = vendors.find(v => v.id === 2);
      if (vendor2) vendor2.packages = vendorPackages;

      renderVendorPackages();
      toggleAddPackageModal(false);
    }

    function deletePackage(id) {
      vendorPackages = vendorPackages.filter(p => p.id !== id);
      showToast('پکیج موردنظر حذف گردید.', 'info');
      renderVendorPackages();
    }

    // HIERARCHICAL WEDDING SERVICE CATEGORIES SHOWCASE
    let categoriesExpanded = false;
    let expandedCategoryIds = new Set();

    const categoryGroups = [
      {
        id: "group-venue",
        title: "مکان، تشریفات و پذیرایی",
        badge: "تالار، خدمات غذا و پذیرایی",
        icon: "building",
        subcategories: [
          { title: "تالار و باغ تالار عروسی", icon: "building", tag: "تالار" },
          { title: "تشریفات عروسی", icon: "crown", tag: "تشریفات" },
          { title: "کیک و شیرینی‌فروشی", icon: "cake", tag: "شیرینی" },
          { title: "فینگرفود", icon: "utensils-crossed", tag: "پذیرایی" },
          { title: "گل و گل‌آرایی", icon: "flower-2", tag: "گل‌آرایی" }
        ]
      },
      {
        id: "group-media",
        title: "ثبت لحظات و موسیقی",
        badge: "عکاسی، فیلمبرداری و موزیک",
        icon: "camera",
        subcategories: [
          { title: "آتلیه عکاسی و فیلمبرداری", icon: "camera", tag: "عکاسی" },
          { title: "موزیک", icon: "music", tag: "موسیقی" },
          { title: "آتلیه کودک", icon: "baby", tag: "کودک" },
          { title: "سالن تولد", icon: "party-popper", tag: "جشن" }
        ]
      },
      {
        id: "group-beauty",
        title: "زیبایی و استایل زوجین",
        badge: "آرایشگاه، مزون و پوشاک",
        icon: "sparkles",
        subcategories: [
          { title: "سالن زیبایی و آرایشگاه عروس", icon: "sparkles", tag: "عروس" },
          { title: "مزون لباس عروس", icon: "shirt", tag: "لباس" },
          { title: "کت و شلوار داماد", icon: "user-check", tag: "داماد" },
          { title: "آرایشگاه داماد", icon: "scissors", tag: "پیرایش" },
          { title: "مانتو عقد", icon: "shirt", tag: "عقد" },
          { title: "لباس شب و نامزدی", icon: "shirt", tag: "نامزدی" }
        ]
      },
      {
        id: "group-jewelry",
        title: "طلا، خرید و خدمات جانبی",
        badge: "طلا، خودرو و خدمات مسافرتی",
        icon: "gem",
        subcategories: [
          { title: "طلافروشی و جواهرفروشی", icon: "gem", tag: "جواهرات" },
          { title: "اجاره ماشین عروس", icon: "car", tag: "خودرو" },
          { title: "اکسسوری جشن عروسی", icon: "gem", tag: "اکسسوری" },
          { title: "تور ماه عسل", icon: "plane", tag: "سفر" },
          { title: "آینه و شمعدان", icon: "sparkles", tag: "دکور" }
        ]
      },
      {
        id: "group-legal",
        title: "تشریفات قانونی، عقد و مشاوره",
        badge: "دفتر ثبت، مشاوره و سفره عقد",
        icon: "landmark",
        subcategories: [
          { title: "دفتر ازدواج و سالن عقد", icon: "landmark", tag: "دفتر عقد" },
          { title: "سفره عقد", icon: "utensils", tag: "سفره" },
          { title: "آزمایشگاه ازدواج", icon: "flask-conical", tag: "آزمایش" },
          { title: "مشاوره ازدواج", icon: "heart-handshake", tag: "مشاوره" },
          { title: "بادکنک‌آرایی و دکوراسیون", icon: "party-popper", tag: "دیزاین" }
        ]
      }
    ];

    function toggleCategoryAccordion(groupId) {
      if (expandedCategoryIds.has(groupId)) {
        expandedCategoryIds.delete(groupId);
      } else {
        expandedCategoryIds.add(groupId);
      }
      renderCategoryCards();
      renderSidebarCategoryCheckboxes();
    }

    function renderCategoryCards() {
      const container = document.getElementById('category-hierarchical-container') || document.getElementById('category-cards-grid');
      if (!container) return;
      container.innerHTML = '';

      categoryGroups.forEach((group) => {
        // Calculate total vendors across subcategories
        let totalGroupVendors = 0;
        group.subcategories.forEach(sub => {
          const matchCount = vendors.filter(v => v.category.includes(sub.tag) || v.category.includes(sub.title) || sub.title.includes(v.category)).length;
          totalGroupVendors += matchCount;
        });
        if (totalGroupVendors === 0) totalGroupVendors = vendors.length;

        const card = document.createElement('div');
        card.onclick = () => openSubCategoryDrawer(group.id);
        card.className = "bg-[#F5EFEB] border-2 border-[#1B3B2B]/30 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer p-5 rounded-3xl flex flex-col justify-between h-56 text-right relative overflow-hidden group shadow-xs";

        card.innerHTML = `
          <div>
            <!-- Top Header: Icon & Counter Badge -->
            <div class="flex items-center justify-between mb-3">
              <div class="w-12 h-12 rounded-2xl bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <i data-lucide="${group.icon || 'grid'}" class="w-6 h-6"></i>
              </div>
              <span class="bg-[#1B3B2B]/10 text-[#1B3B2B] text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-[#1B3B2B]/20">
                ${group.subcategories.length} زیرگروه
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="font-black text-base text-[#1B3B2B] group-hover:text-[#1B3B2B] transition-colors leading-snug">
              ${group.title}
            </h3>
            <p class="text-[11px] text-secondary mt-1 line-clamp-1 font-medium">
              ${group.badge || 'خدمات و تشریفات اختصاصی'}
            </p>
          </div>

          <!-- Bottom CTA Action -->
          <div class="pt-3 border-t border-[#1B3B2B]/15 flex items-center justify-between text-xs font-bold text-[#1B3B2B]">
            <span class="flex items-center gap-1 group-hover:text-[#1B3B2B] transition-colors">
              <span>مشاهده زیرگروه‌ها</span>
              <span class="text-sm font-black transition-transform group-hover:-translate-x-1">←</span>
            </span>
            <span class="text-[10px] font-extrabold text-[#D4AF37] bg-[#1B3B2B] px-2 py-0.5 rounded-md">
              ${totalGroupVendors}+ کسب‌وکار
            </span>
          </div>
        `;

        container.appendChild(card);
      });

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function openSubCategoryDrawer(groupId) {
      const group = categoryGroups.find(g => g.id === groupId);
      if (!group) return;

      const modal = document.getElementById('sub-category-drawer-modal');
      const iconEl = document.getElementById('drawer-header-icon');
      const titleEl = document.getElementById('drawer-header-title');
      const badgeEl = document.getElementById('drawer-header-badge');
      const gridEl = document.getElementById('drawer-subcategories-grid');

      if (!modal || !gridEl) return;

      if (iconEl) iconEl.innerHTML = `<i data-lucide="${group.icon || 'grid'}" class="w-6 h-6"></i>`;
      if (titleEl) titleEl.innerText = group.title;
      if (badgeEl) badgeEl.innerText = `${group.subcategories.length} زیرگروه تخصصی`;

      gridEl.innerHTML = '';
      group.subcategories.forEach(sub => {
        const vendorCount = vendors.filter(v => v.category.includes(sub.tag) || v.category.includes(sub.title) || sub.title.includes(v.category)).length || 3;

        const subCard = document.createElement('div');
        subCard.onclick = () => {
          const catSlug = group.key || 'hall';
          const subSlug = encodeURIComponent(sub.title);
          window.location.href = `directory.html?category=${catSlug}&sub=${subSlug}`;
          closeSubCategoryDrawer();
        };
        subCard.className = "bg-[#F5EFEB] border border-[#1B3B2B]/20 hover:border-[#D4AF37] hover:bg-white p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 shadow-2xs group hover:shadow-md";

        subCard.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <i data-lucide="${sub.icon || 'tag'}" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="font-bold text-xs sm:text-sm text-[#1B3B2B] group-hover:text-primary transition-colors">${sub.title}</div>
              <div class="text-[11px] text-secondary mt-0.5 font-medium">${vendorCount} تأمین‌کننده فعال در یزد</div>
            </div>
          </div>
          <div class="w-7 h-7 rounded-lg bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center group-hover:bg-[#1B3B2B] group-hover:text-[#D4AF37] transition-colors shrink-0">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </div>
        `;

        gridEl.appendChild(subCard);
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function closeSubCategoryDrawer() {
      const modal = document.getElementById('sub-category-drawer-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function toggleCategoriesExpand() {
      categoriesExpanded = !categoriesExpanded;
      if (categoriesExpanded) {
        categoryGroups.forEach(g => expandedCategoryIds.add(g.id));
      } else {
        expandedCategoryIds.clear();
      }
      renderCategoryCards();
    }

    function filterVendorsByCategoryTitle(title) {
      switchTab('directory');
      if (title) {
        if (typeof activeCategoryFilters !== 'undefined') {
          activeCategoryFilters.clear();
          activeCategoryFilters.add(title);
        }
      }
      if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
      if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
      filterVendors();
      const vendorSection = document.getElementById('tab-directory');
      if (vendorSection) vendorSection.scrollIntoView({ behavior: 'smooth' });
    }

    function handleHeroSearch() {
      const heroSearchInput = document.getElementById('hero-search-input');
      const heroCitySelect = document.getElementById('hero-city-select');
      const heroCatSelect = document.getElementById('hero-cat-select');

      const query = heroSearchInput ? heroSearchInput.value.trim() : '';
      const city = heroCitySelect ? heroCitySelect.value : 'استان یزد';
      const cat = heroCatSelect ? heroCatSelect.value : 'all';

      // 1. Sync header search inputs
      const headerSearch = document.getElementById('header-search-input');
      if (headerSearch) headerSearch.value = query;

      const directSearch = document.getElementById('directory-instant-search');
      if (directSearch) directSearch.value = query;

      const mainSearch = document.getElementById('search-input');
      if (mainSearch) mainSearch.value = query;

      // 2. Sync City
      const headerCity = document.getElementById('header-city-select');
      if (headerCity) headerCity.value = city;
      const sidebarCity = document.getElementById('sidebar-city-select');
      if (sidebarCity) sidebarCity.value = city;

      // 3. Sync Category
      activeCategoryFilters.clear();
      if (cat !== 'all') {
        activeCategoryFilters.add(cat);
      }

      // 4. Transition to directory tab & re-filter
      switchTab('directory');
      if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
      if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
      if (typeof filterVendors === 'function') filterVendors();
    }

    function filterVendorsFromMega(title) {
      const CATEGORY_SLUG_MAP = {
        'باغ و تالار پذیرایی': 'hall',
        'تالار و باغ تالار عروسی': 'hall',
        'آتلیه عکاسی و فیلمبرداری': 'studio',
        'سالن زیبایی و آرایشگاه عروس': 'beauty',
        'سالن زیبایی عروس': 'beauty',
        'مزون لباس عروس': 'mezon',
        'طلافروشی و جواهرفروشی': 'jewelry',
        'طلا و جواهر عقد': 'jewelry',
        'کترینگ و تشریفات پذیرایی': 'catering'
      };

      const catSlug = CATEGORY_SLUG_MAP[title] || 'hall';
      window.location.href = `directory.html?category=${catSlug}`;
    }

    // SUPER ADMIN CATEGORY & SUB-CATEGORY CRUD ENGINE
    function saveCategoryGroupsToStorage() {
      try {
        localStorage.setItem('aroosi_category_groups', JSON.stringify(categoryGroups));
      } catch (err) {
        console.error('Failed to save categories to localStorage:', err);
      }
    }

    function loadCategoryGroupsFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_category_groups');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            categoryGroups = parsed;
          }
        }
      } catch (err) {
        console.error('Failed to load categories from localStorage:', err);
      }
    }

    function renderNavMegaCategoryMenu() {
      const megaContainer = document.getElementById('mega-category-menu');
      if (!megaContainer) return;
      const gridContainer = megaContainer.querySelector('.grid');
      if (!gridContainer) return;

      gridContainer.innerHTML = categoryGroups.map(group => {
        const subButtons = group.subcategories.map(sub => `
          <button onclick="filterVendorsFromMega('${sub.title}')" class="text-right text-xs font-medium text-graphite hover:text-primary hover:bg-slate-50 p-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer">
            <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>${sub.title}</span>
          </button>
        `).join('');

        return `
          <div class="space-y-3">
            <div class="font-black text-xs text-graphite flex items-center gap-1.5 border-b border-accent/60 pb-1.5 text-emeraldHeader">
              <i data-lucide="${group.icon || 'folder'}" class="w-4 h-4 text-primary"></i>
              <span>${group.title}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              ${subButtons || '<span class="text-[11px] text-secondary italic">بدون زیرگروه</span>'}
            </div>
          </div>
        `;
      }).join('');
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    function renderVendorRegistrationCategoryOptions() {
      const catSelect = document.getElementById('v-cat');
      if (!catSelect) return;
      catSelect.innerHTML = categoryGroups.map(cg => `<option value="${cg.title}">${cg.title}</option>`).join('');
    }

    function syncCategoryStateAndRender() {
      saveCategoryGroupsToStorage();
      renderCategoryCards();
      renderAdminCategories();
      renderNavMegaCategoryMenu();
      renderVendorRegistrationCategoryOptions();
      if (typeof renderSidebarCategoryCheckboxes === 'function') {
        renderSidebarCategoryCheckboxes();
      }
    }

    function renderAdminCategories() {
      const container = document.getElementById('admin-category-groups-list');
      if (!container) return;
      container.innerHTML = '';

      categoryGroups.forEach((group) => {
        const card = document.createElement('div');
        card.className = "bg-bgCustom border border-accent rounded-2xl p-4 space-y-3 hover:border-[#D4AF37]/60 transition-all shadow-xs";

        let subPillsHtml = '';
        group.subcategories.forEach((sub, idx) => {
          subPillsHtml += `
            <div class="inline-flex items-center gap-1.5 bg-white border border-accent rounded-lg px-2.5 py-1 text-xs font-medium text-graphite shadow-2xs">
              <i data-lucide="grip-vertical" class="w-3 h-3 text-slate-400 cursor-grab"></i>
              <i data-lucide="${sub.icon || 'tag'}" class="w-3 h-3 text-primary"></i>
              <span class="font-bold">${sub.title}</span>
              <button type="button" onclick="openSubCategoryModal('${group.id}', ${idx})" class="text-primary hover:text-emerald-900 ml-1 font-bold cursor-pointer" title="ویرایش">
                <i data-lucide="edit-2" class="w-3 h-3"></i>
              </button>
              <button type="button" onclick="deleteSubCategory('${group.id}', ${idx})" class="text-rose-500 hover:text-rose-700 font-bold cursor-pointer" title="حذف">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
          `;
        });

        card.innerHTML = `
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-accent/60 pb-3">
            <div class="flex items-center gap-3">
              <i data-lucide="grip-vertical" class="w-4 h-4 text-slate-400 cursor-grab"></i>
              <div class="w-9 h-9 rounded-xl bg-[#1B3B2B] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 font-bold shadow-xs">
                <i data-lucide="${group.icon}"></i>
              </div>
              <div>
                <h4 class="text-sm font-black text-graphite flex items-center gap-1.5">
                  <span>${group.title}</span>
                  <span class="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-bold">${group.badge || 'اصلی'}</span>
                </h4>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="openSubCategoryModal('${group.id}')" class="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>افزودن زیرگروه</span>
              </button>
              <button type="button" onclick="openParentCategoryModal('${group.id}')" class="bg-white border border-accent hover:border-primary px-3 py-1.5 rounded-xl text-xs font-bold text-graphite transition-all cursor-pointer">
                ویرایش دسته
              </button>
              <button type="button" onclick="deleteParentCategory('${group.id}')" class="bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-600 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer">
                حذف دسته
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 pt-1">
            ${subPillsHtml || '<span class="text-xs text-secondary italic">هیچ زیرگروهی ثبت نشده است.</span>'}
          </div>
        `;

        container.appendChild(card);
      });

      lucide.createIcons();
    }

    // PARENT CATEGORY MODAL HANDLERS
    function openParentCategoryModal(id = null) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      const modal = document.getElementById('parent-cat-modal');
      const titleInput = document.getElementById('parent-cat-title');
      const badgeInput = document.getElementById('parent-cat-badge');
      const iconInput = document.getElementById('parent-cat-icon');
      const editIdInput = document.getElementById('parent-cat-edit-id');
      const modalTitle = document.getElementById('parent-cat-modal-title');

      if (!modal) return;

      if (id) {
        const group = categoryGroups.find(g => g.id === id);
        if (group) {
          editIdInput.value = group.id;
          titleInput.value = group.title;
          badgeInput.value = group.badge || '';
          iconInput.value = group.icon;
          modalTitle.innerText = "ویرایش دسته اصلی";
        }
      } else {
        editIdInput.value = '';
        titleInput.value = '';
        badgeInput.value = '';
        iconInput.value = 'building';
        modalTitle.innerText = "افزودن دسته اصلی جدید";
      }

      modal.classList.remove('hidden');
    }

    function closeParentCatModal() {
      const modal = document.getElementById('parent-cat-modal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveParentCategory(e) {
      e.preventDefault();
      const editId = document.getElementById('parent-cat-edit-id').value;
      const title = document.getElementById('parent-cat-title').value.trim();
      const badge = document.getElementById('parent-cat-badge').value.trim();
      const icon = document.getElementById('parent-cat-icon').value.trim();

      if (!title || !icon) return;

      if (editId) {
        const group = categoryGroups.find(g => g.id === editId);
        if (group) {
          group.title = title;
          group.badge = badge;
          group.icon = icon;
        }
      } else {
        categoryGroups.push({
          id: 'group-' + Date.now(),
          title,
          badge,
          icon,
          subcategories: []
        });
      }

      closeParentCatModal();
      syncCategoryStateAndRender();
      showToast('دسته اصلی با موفقیت ذخیره شد', 'success');
    }

    function deleteParentCategory(id) {
      if (!confirm('آیا از حذف این دسته اصلی و تمامی زیرگروه‌های آن اطمینان دارید؟')) return;
      categoryGroups = categoryGroups.filter(g => g.id !== id);
      syncCategoryStateAndRender();
      showToast('دسته اصلی با موفقیت حذف شد', 'info');
    }

    // SUB-CATEGORY MODAL HANDLERS
    function openSubCategoryModal(parentId, subIdx = null) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      const modal = document.getElementById('sub-cat-modal');
      const parentIdInput = document.getElementById('sub-cat-parent-id');
      const indexInput = document.getElementById('sub-cat-index');
      const titleInput = document.getElementById('sub-cat-title');
      const iconInput = document.getElementById('sub-cat-icon');
      const modalTitle = document.getElementById('sub-cat-modal-title');

      if (!modal) return;

      parentIdInput.value = parentId;

      const group = categoryGroups.find(g => g.id === parentId);
      if (!group) return;

      if (subIdx !== null && subIdx !== undefined && group.subcategories[subIdx]) {
        const sub = group.subcategories[subIdx];
        indexInput.value = subIdx;
        titleInput.value = sub.title;
        iconInput.value = sub.icon || 'tag';
        modalTitle.innerText = "ویرایش زیرگروه";
      } else {
        indexInput.value = '';
        titleInput.value = '';
        iconInput.value = 'tag';
        modalTitle.innerText = "افزودن زیرگروه جدید";
      }

      modal.classList.remove('hidden');
    }

    function closeSubCatModal() {
      const modal = document.getElementById('sub-cat-modal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveSubCategory(e) {
      e.preventDefault();
      const parentId = document.getElementById('sub-cat-parent-id').value;
      const subIdxStr = document.getElementById('sub-cat-index').value;
      const title = document.getElementById('sub-cat-title').value.trim();
      const icon = document.getElementById('sub-cat-icon').value.trim();

      if (!parentId || !title) return;

      const group = categoryGroups.find(g => g.id === parentId);
      if (!group) return;

      if (subIdxStr !== '') {
        const idx = parseInt(subIdxStr, 10);
        if (group.subcategories[idx]) {
          group.subcategories[idx].title = title;
          group.subcategories[idx].icon = icon;
        }
      } else {
        group.subcategories.push({
          title,
          icon,
          tag: title.substring(0, 8)
        });
      }

      closeSubCatModal();
      syncCategoryStateAndRender();
      showToast('زیرگروه با موفقیت ذخیره شد', 'success');
    }

    function deleteSubCategory(parentId, subIdx) {
      const group = categoryGroups.find(g => g.id === parentId);
      if (!group || !group.subcategories[subIdx]) return;
      group.subcategories.splice(subIdx, 1);
      syncCategoryStateAndRender();
      showToast('زیرگروه با موفقیت حذف شد', 'info');
    }


    // VENDOR AVATAR MANAGEMENT
    let defaultVendorAvatar = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80';
    let currentVendorAvatar = defaultVendorAvatar;

    function handleAvatarUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        currentVendorAvatar = e.target.result;
        updateVendorAvatarUI();
      };
      reader.readAsDataURL(file);
    }

    function handleAvatarDelete() {
      if (confirm('آیا از حذف عکس پروفایل کسب‌وکار خود مطمئن هستید؟')) {
        currentVendorAvatar = null;
        updateVendorAvatarUI();
      }
    }

    function updateVendorAvatarUI() {
      const dashImg = document.getElementById('vd-avatar-img');
      const dashContainer = document.getElementById('vd-avatar-container');
      const publicImg = document.getElementById('vp-logo');

      if (currentVendorAvatar) {
        if (dashImg) {
          dashImg.src = currentVendorAvatar;
          dashImg.classList.remove('hidden');
        }
        if (publicImg) {
          publicImg.src = currentVendorAvatar;
          publicImg.classList.remove('hidden');
        }
        if (dashContainer) {
          const initialsDiv = dashContainer.querySelector('.avatar-initials');
          if (initialsDiv) initialsDiv.remove();
        }
      } else {
        if (dashImg) dashImg.classList.add('hidden');
        if (publicImg) publicImg.classList.add('hidden');

        if (dashContainer && !dashContainer.querySelector('.avatar-initials')) {
          const initials = document.createElement('div');
          initials.className = 'avatar-initials w-full h-full flex flex-col items-center justify-center bg-accent/30 text-primary font-black text-xl text-center p-2';
          initials.innerHTML = '<i data-lucide="store" class="w-8 h-8 mb-1 text-primary"></i><span>زمرد</span>';
          dashContainer.appendChild(initials);
        }

        if (publicImg && publicImg.parentElement && !publicImg.parentElement.querySelector('.avatar-initials')) {
          const initialsPub = document.createElement('div');
          initialsPub.className = 'avatar-initials w-full h-full flex flex-col items-center justify-center bg-accent/30 text-primary font-black text-2xl text-center p-2';
          initialsPub.innerHTML = '<i data-lucide="store" class="w-10 h-10 mb-1 text-primary"></i><span>زمرد</span>';
          publicImg.parentElement.appendChild(initialsPub);
        }
      }
      lucide.createIcons();
    }


    // FAVORITE / BOOKMARK SYSTEM STATE & LOGIC
    let favoriteVendorIds = [1, 2, 4];
    let selectedComparisonVendorIds = [];

    window.toggleVendorComparison = function(vendorId, event) {
      if (event) event.stopPropagation();
      const id = parseInt(vendorId, 10);
      const index = selectedComparisonVendorIds.indexOf(id);

      if (index > -1) {
        selectedComparisonVendorIds.splice(index, 1);
        showToast('تامین‌کننده از لیست مقایسه حذف شد.', 'info');
      } else {
        if (selectedComparisonVendorIds.length >= 3) {
          showToast('حداکثر ۳ تامین‌کننده می‌توانید همزمان مقایسه کنید.', 'warning');
          return;
        }
        selectedComparisonVendorIds.push(id);
        showToast('تامین‌کننده به لیست مقایسه اضافه شد.', 'success');
      }

      if (typeof renderVendors === 'function' && typeof filteredVendors !== 'undefined') {
        renderVendors(filteredVendors);
      }
      if (typeof window.renderFloatingComparisonBar === 'function') {
        window.renderFloatingComparisonBar();
      }
    };

    window.clearComparisonQueue = function() {
      selectedComparisonVendorIds = [];
      if (typeof renderVendors === 'function' && typeof lastFilteredVendors !== 'undefined') {
        renderVendors(lastFilteredVendors);
      }
      if (typeof window.renderFloatingComparisonBar === 'function') {
        window.renderFloatingComparisonBar();
      }
      showToast('لیست مقایسه خالی شد.', 'info');
    };

    window.renderFloatingComparisonBar = function() {
      const bar = document.getElementById('floating-comparison-bar');
      const itemsContainer = document.getElementById('comparison-bar-items');
      const btnText = document.getElementById('comparison-bar-btn-text');

      if (!bar || !itemsContainer) return;

      if (selectedComparisonVendorIds.length === 0) {
        bar.classList.add('hidden');
        return;
      }

      bar.classList.remove('hidden');

      if (btnText) {
        btnText.textContent = `مقایسه رو‌به‌رو (${selectedComparisonVendorIds.length})`;
      }

      const vendorList = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? vendors : [];
      const selectedVendors = vendorList.filter(v => selectedComparisonVendorIds.includes(v.id));

      itemsContainer.innerHTML = selectedVendors.map(v => `
        <div class="flex items-center gap-2 bg-[#1E293B] border border-[#D4AF37]/40 rounded-xl p-1.5 pr-2.5 shrink-0 shadow-md">
          <img src="${v.image}" alt="${v.name}" class="w-8 h-8 rounded-lg object-cover border border-[#D4AF37]">
          <div class="text-right">
            <span class="text-xs font-bold text-white block max-w-[110px] truncate">${v.name}</span>
            <span class="text-[9.5px] text-amber-200/80 block">${v.price || 'تماس بگیرید'}</span>
          </div>
          <button type="button" onclick="toggleVendorComparison(${v.id}, event)" class="w-5 h-5 rounded-full bg-rose-950/60 text-rose-300 hover:bg-rose-600 hover:text-white flex items-center justify-center text-[10px] transition-colors cursor-pointer mr-1" title="حذف">
            ✕
          </button>
        </div>
      `).join('');

      if (window.lucide) lucide.createIcons();
    };

    function loadFavoritesFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_favorite_vendor_ids');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            favoriteVendorIds = parsed;
          }
        }
      } catch (err) {
        console.error('Failed to load favorites from localStorage:', err);
      }
    }

    function saveFavoritesToStorage() {
      try {
        localStorage.setItem('aroosi_favorite_vendor_ids', JSON.stringify(favoriteVendorIds));
      } catch (err) {
        console.error('Failed to save favorites to localStorage:', err);
      }
    }

    function toggleFavoriteVendor(vendorId, event) {
      if (event) event.stopPropagation();
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }

      const index = favoriteVendorIds.indexOf(vId);
      const vendor = vendors.find(v => v.id === vId);
      const vendorName = vendor ? vendor.name : 'تأمین‌کننده';

      if (index > -1) {
        favoriteVendorIds.splice(index, 1);
        showToast(`«${vendorName}» از لیست نشان‌شده‌ها حذف شد.`, 'info');
      } else {
        favoriteVendorIds.push(vId);
        showToast(`«${vendorName}» به لیست نشان‌شده‌های شما اضافه شد ❤️`, 'success');
      }

      saveFavoritesToStorage();
      filterVendors();
      renderFavoriteVendorsList();
    }

    function renderFavoriteVendorsList() {
      const container = document.getElementById('couple-favorites-grid');
      const badge = document.getElementById('couple-favorite-count-badge');
      if (badge) {
        badge.innerText = `${favoriteVendorIds.length} مجموعه`;
      }

      if (!container) return;
      container.innerHTML = '';

      const favVendors = vendors.filter(v => favoriteVendorIds.includes(v.id));

      if (favVendors.length === 0) {
        container.innerHTML = `
          <div class="col-span-full p-6 text-center text-secondary text-xs font-bold bg-bgCustom rounded-2xl border border-accent">
            هنوز هیچ تأمین‌کننده‌ای به لیست نشان‌شده‌های خود اضافه نکرده‌اید. روی آیکون قلب ❤️ کارت‌ها کلیک کنید.
          </div>
        `;
        return;
      }

      favVendors.forEach(v => {
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-2xl overflow-hidden shadow-2xs p-3 space-y-2.5 relative flex flex-col justify-between";
        card.innerHTML = `
          <div class="space-y-2">
            <div class="relative h-28 rounded-xl overflow-hidden bg-slate-100">
              <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover">
              <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="absolute top-2 left-2 w-7 h-7 rounded-lg bg-white/90 text-rose-500 flex items-center justify-center shadow-xs" title="حذف از نشان‌شده‌ها">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>
            <div>
              <span class="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md inline-block mb-1">${v.category}</span>
              <h4 class="text-xs font-bold text-graphite truncate">${v.name}</h4>
              <span class="text-[11px] text-secondary font-medium block mt-0.5">${v.priceRange}</span>
            </div>
          </div>

          <div class="flex gap-1.5 pt-1">
            <button onclick="openVendorDetailModal(${v.id})" class="flex-1 bg-bgCustom hover:bg-slate-100 text-graphite border border-accent text-[11px] font-bold py-1.5 rounded-lg">
              اطلاعات
            </button>
            <button onclick="openInquiryModal(${v.id}, '${v.name}')" class="flex-1 bg-primary text-white text-[11px] font-bold py-1.5 rounded-lg shadow-2xs">
              چت & استعلام
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    // VENDOR PROFILE EDIT FORM (VENDOR DASHBOARD)
    function handleVendorProfileUpdate(e) {
      if (e && e.preventDefault) e.preventDefault();
      const name = document.getElementById('vd-edit-name')?.value?.trim() || '';
      const phone = document.getElementById('vd-edit-phone')?.value?.trim() || '';
      const landline = document.getElementById('vd-edit-landline')?.value?.trim() || '';
      const district = document.getElementById('vd-edit-district')?.value || '';
      const hours = document.getElementById('vd-edit-hours')?.value?.trim() || '';
      const address = document.getElementById('vd-edit-address')?.value?.trim() || '';
      const insta = document.getElementById('vd-edit-insta')?.value?.trim() || '';
      const about = document.getElementById('vd-edit-about')?.value?.trim() || '';
      const servicesRaw = document.getElementById('vd-edit-services')?.value || '';
      const tagsRaw = document.getElementById('vd-edit-tags')?.value || '';
      const tour360Link = document.getElementById('vd-edit-tour360')?.value?.trim() || '';

      const services = servicesRaw.split('\n').map(s => s.trim()).filter(Boolean);
      const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

      const vendorId = 2; // Default active studio vendor in SaaS dashboard
      const updatedData = {
        id: vendorId,
        name,
        phone,
        landline,
        district,
        hours,
        address,
        instagram: insta,
        about,
        tour360Link,
        customServices: services,
        capabilityTags: tags
      };

      localStorage.setItem(`aroosi_vendor_custom_profile_${vendorId}`, JSON.stringify(updatedData));

      if (typeof vendors !== 'undefined' && Array.isArray(vendors)) {
        const idx = vendors.findIndex(v => v.id === vendorId);
        if (idx !== -1) {
          vendors[idx] = {
            ...vendors[idx],
            name: name || vendors[idx].name,
            hours: hours || vendors[idx].hours,
            address: address || vendors[idx].address,
            instagram: insta || vendors[idx].instagram,
            about: about || vendors[idx].about,
            customServices: services.length > 0 ? services : vendors[idx].customServices,
            capabilityTags: tags.length > 0 ? tags : vendors[idx].capabilityTags
          };
        }
      }

      const vpName = document.getElementById('vp-name');
      if (vpName) vpName.innerText = name;
      const vpHours = document.getElementById('vp-hours');
      if (vpHours) vpHours.innerText = hours;
      const vpAddress = document.getElementById('vp-address');
      if (vpAddress) vpAddress.innerText = address;
      const vpInsta = document.getElementById('vp-instagram');
      if (vpInsta) vpInsta.innerText = insta;
      const vdHeaderName = document.getElementById('vd-header-name');
      if (vdHeaderName) vdHeaderName.innerText = name;

      if (typeof showToast === 'function') {
        showToast('اطلاعات بیوگرافی و خدمات اختصاصی پروفایل با موفقیت ذخیره گردید و در کارت شناور عمومی بروز شد.', 'success');
      }
    }

    // CALENDAR & INQUIRIES & DIRECTORY
    function renderCalendar() {
      const grid = document.getElementById('calendar-grid');
      if (!grid) return;
      grid.innerHTML = '';

      for (let i = 1; i <= 30; i++) {
        const isBooked = bookedDates.includes(i);
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.onclick = () => toggleDate(i);
        dayBtn.className = `p-3 rounded-xl text-xs font-bold transition-all ${
          isBooked
            ? 'bg-rose-500 text-white shadow-xs'
            : 'bg-primary text-white shadow-xs hover:bg-primary-hover'
        }`;
        dayBtn.innerText = i;
        grid.appendChild(dayBtn);
      }
    }

    function toggleDate(date) {
      if (bookedDates.includes(date)) {
        bookedDates = bookedDates.filter(d => d !== date);
      } else {
        bookedDates.push(date);
      }
      renderCalendar();
    }


    function getPrivateNote(vId) {
      try {
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        return notes[vId] || '';
      } catch(e) { return ''; }
    }

    function savePrivateNote(vId) {
      try {
        const input = document.getElementById('private-note-input-' + vId);
        if (!input) return;
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        notes[vId] = input.value.trim();
        localStorage.setItem('aroosi_private_notes', JSON.stringify(notes));
        showToast('یادداشت خصوصی زوجین با موفقیت ذخیره شد', 'success');
      } catch(e) {}
    }

    let directoryViewMode = 'grid'; // 'grid' | 'list'

    function setDirectoryViewMode(mode) {
      directoryViewMode = mode;
      const gridBtn = document.getElementById('view-mode-grid');
      const listBtn = document.getElementById('view-mode-list');
      if (gridBtn && listBtn) {
        if (mode === 'grid') {
          gridBtn.className = "p-1.5 rounded-lg bg-[#1B3B2B] text-white shadow-2xs transition-all cursor-pointer";
          listBtn.className = "p-1.5 rounded-lg text-secondary hover:text-graphite transition-all cursor-pointer";
        } else {
          listBtn.className = "p-1.5 rounded-lg bg-[#1B3B2B] text-white shadow-2xs transition-all cursor-pointer";
          gridBtn.className = "p-1.5 rounded-lg text-secondary hover:text-graphite transition-all cursor-pointer";
        }
      }
      filterVendors();
    }

    window.startDirectoryVoiceSearch = function() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        showToast('⚠️ مرورگر شما از جستجوی صوتی پشتیبانی نمی‌کند.', 'warning');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'fa-IR';
      recognition.interimResults = false;

      showToast('🎙️ در حال شنیدن... لطفاً نام تالار، آتلیه یا خدمات مورد نظر خود را بگوئید', 'info');

      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const searchInp = document.getElementById('directory-instant-search');
        if (searchInp) {
          searchInp.value = transcript;
          filterVendors();
        }
        showToast(`🎙️ جستجو برای: «${transcript}»`, 'success');
      };

      recognition.onerror = function(event) {
        showToast('⚠️ خطا در دریافت صدا. لطفاً مجدداً تلاش کنید.', 'warning');
      };

      recognition.start();
    };

    let directoryAmbientNightMode = false;

    window.toggleDirectoryAmbientMode = function() {
      directoryAmbientNightMode = !directoryAmbientNightMode;
      const iconEl = document.getElementById('directory-ambient-icon');
      const labelEl = document.getElementById('directory-ambient-label');

      if (directoryAmbientNightMode) {
        if (iconEl) iconEl.innerText = '🌙';
        if (labelEl) labelEl.innerText = 'نور شب کویر';
        showToast('🌙 حالت پیش‌نمایش نورپردازی شب یزد فعال شد', 'info');
      } else {
        if (iconEl) iconEl.innerText = '☀️';
        if (labelEl) labelEl.innerText = 'نور روز';
        showToast('☀️ حالت پیش‌نمایش نور روز فعال شد', 'info');
      }
      filterVendors();
    };

        window.updateDirectoryGuestPriceEstimator = function(val) {
      const drawerLbl = document.getElementById('drawer-guest-val');
      const textVal = val >= 1000 ? 'همه ظرفیت‌ها' : `${val} نفر`;
      if (drawerLbl) drawerLbl.textContent = textVal;

      if (typeof filterVendors === 'function') {
        filterVendors();
      }
    };

    function updateCapacitySliderLabel(val) {
      const lbl = document.getElementById('sidebar-capacity-val');
      if (lbl) {
        lbl.textContent = val >= 1000 ? 'همه ظرفیت‌ها' : `تا ${val} نفر`;
      }
    }

    window.activeDirectoryCategoryTab = "all";

    window.switchDirectoryCategoryTab = function(catTitle) {
      window.activeDirectoryCategoryTab = catTitle;

      // Update active state on tab buttons
      const tabs = document.querySelectorAll('.dir-cat-tab-btn');
      tabs.forEach(btn => {
        const title = btn.getAttribute('data-cat-title');
        if (title === catTitle) {
          btn.className = "dir-cat-tab-btn px-4 py-2 rounded-2xl text-xs font-black bg-[#D4AF37] text-[#0F251A] shadow-[0_0_15px_rgba(212,175,55,0.4)] border border-[#D4AF37] shrink-0 cursor-pointer transition-all";
        } else {
          btn.className = "dir-cat-tab-btn px-4 py-2 rounded-2xl text-xs font-bold bg-[#141A28]/90 text-slate-300 hover:text-white hover:border-[#D4AF37]/50 border border-[#C5A059]/30 shrink-0 cursor-pointer transition-all";
        }
      });

      if (typeof filterVendors === 'function') {
        filterVendors();
      }
    };

    function renderCategoryTailoredCard(v, isHeroVendor = false) {
      const isComparing = selectedComparisonVendorIds.includes(v.id);
      const isFav = favoriteVendorIds.includes(v.id);
      const localTag = v.district || "صفائیه، یزد";
      const ratingVal = v.rating || 4.9;
      const cat = v.categoryTitle || v.category || "خدمات عروسی";

      const borderClasses = isComparing
        ? "border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        : "border border-[#D4AF37]/30 hover:border-[#D4AF37]";

      let badgeIcon = "✨";
      let extraSpecHtml = "";

      if (cat.includes("تالار") || cat.includes("باغ")) {
        badgeIcon = '<i data-lucide="building-2" class="w-3.5 h-3.5 text-[#D4AF37]"></i>';
        extraSpecHtml = `
          <div class="flex items-center justify-between bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl px-2.5 py-1.5 text-[10.5px]">
            <span class="text-slate-300 font-bold flex items-center gap-1"><i data-lucide="users" class="w-3 h-3 text-[#D4AF37]"></i> ظرفیت سالن:</span>
            <span class="text-[#D4AF37] font-black">${v.capacity || '۵۰۰ الی ۱,۲۰۰ نفر'}</span>
          </div>`;
      } else if (cat.includes("آتلیه") || cat.includes("عکاسی")) {
        badgeIcon = '<i data-lucide="camera" class="w-3.5 h-3.5 text-[#D4AF37]"></i>';
        extraSpecHtml = `
          <div class="flex items-center justify-between bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl px-2.5 py-1.5 text-[10.5px]">
            <span class="text-slate-300 font-bold flex items-center gap-1"><i data-lucide="film" class="w-3 h-3 text-[#D4AF37]"></i> نمونه‌کار & فرمالیته:</span>
            <span class="text-amber-200 font-bold">ویدیو تیزر + آلبوم 4K</span>
          </div>`;
      } else if (cat.includes("زیبایی") || cat.includes("آرایشگاه") || cat.includes("میکاپ")) {
        badgeIcon = '<i data-lucide="scissors" class="w-3.5 h-3.5 text-[#D4AF37]"></i>';
        extraSpecHtml = `
          <div class="flex items-center justify-between bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl px-2.5 py-1.5 text-[10.5px]">
            <span class="text-slate-300 font-bold flex items-center gap-1"><i data-lucide="sparkles" class="w-3 h-3 text-[#D4AF37]"></i> سبُک میکاپ:</span>
            <span class="text-amber-200 font-bold">لایت، اروپایی & VIP</span>
          </div>`;
      } else {
        badgeIcon = '<i data-lucide="shirt" class="w-3.5 h-3.5 text-[#D4AF37]"></i>';
        extraSpecHtml = `
          <div class="flex items-center justify-between bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl px-2.5 py-1.5 text-[10.5px]">
            <span class="text-slate-300 font-bold flex items-center gap-1"><i data-lucide="gift" class="w-3 h-3 text-[#D4AF37]"></i> پکیج ویژه:</span>
            <span class="text-amber-200 font-bold">سفارشی‌سازی کامل</span>
          </div>`;
      }

      const card = document.createElement('div');
      card.className = `minimal-vendor-card bg-[#0F172A]/90 backdrop-blur-md ${borderClasses} rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative ${isHeroVendor ? 'col-span-1 sm:col-span-2 border-[#D4AF37]/60' : ''}`;
      card.setAttribute('onclick', `openVendorDetailModal(${v.id})`);

      card.innerHTML = `
        <div class="relative w-full h-48 overflow-hidden bg-slate-900" onmouseenter="playCardVideoTeaser(this)" onmouseleave="stopCardVideoTeaser(this)">
          <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108">
          <video src="${v.videoTeaser || 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-a-park-41315-large.mp4'}" muted loop playsinline preload="none" class="card-teaser-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 pointer-events-none"></video>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40"></div>

          <!-- Card Badge Layer Container (Left & Right) -->
          <div class="card-badge-layer" onclick="event.stopPropagation()">
            <!-- RIGHT SIDE: Category & Discount -->
            <div class="badges-right">
              <span class="badge-tag bg-black/80 backdrop-blur-md text-amber-200 border border-[#D4AF37]/50 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                <span>${badgeIcon}</span>
                <span>${cat}</span>
              </span>
              <span class="badge-tag bg-gradient-to-r from-rose-600 to-amber-500 text-white border border-rose-400/50 text-[9.5px] font-black px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                <i data-lucide="percent" class="w-3 h-3 text-white"></i>
                <span>٪۱۵ تخفیف</span>
              </span>
            </div>

            <!-- LEFT SIDE: Actions & Quick View -->
            <div class="badges-left">
              <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="btn-card-icon favorite-btn" title="علاقه‌مندی">
                <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}"></i>
              </button>
              <button type="button" onclick="toggleVendorComparison(${v.id}, event)" class="btn-card-icon compare-btn" title="مقایسه">
                <i data-lucide="scale" class="w-4 h-4"></i>
              </button>
              <button type="button" onclick="openQuickViewModal(${v.id}, event)" class="btn-card-icon quickview-btn" title="مشاهده سریع">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Rating Badge -->
          <div class="absolute bottom-2.5 right-3 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
            <span>${ratingVal}</span>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between space-y-3 text-right">
          <div>
            <div class="flex justify-between items-start gap-2">
              <h3 class="text-sm sm:text-base font-black text-white group-hover:text-[#D4AF37] transition-colors leading-tight">${v.name}</h3>
            </div>
            <p class="text-[11px] text-slate-300 font-medium flex items-center gap-1 mt-1">
              <i data-lucide="map-pin" class="w-3 h-3 text-[#D4AF37]"></i>
              <span>${localTag}</span>
            </p>
          </div>

          ${extraSpecHtml}

          <div class="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between">
            <div>
              <span class="text-[9.5px] text-slate-400 block font-medium">شروع قیمت:</span>
              <span class="text-xs font-black text-[#D4AF37]">${v.price || 'تماس بگیرید'}</span>
            </div>

            <button type="button" onclick="event.stopPropagation(); openVendorDetailModal(${v.id})" class="gold-shimmer-btn text-[#0F251A] font-black px-3.5 py-1.5 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1 shadow-sm">
              <span>پروفایل ➔</span>
            </button>
          </div>
        </div>
      `;
      return card;
    }

    function renderVendors(list) {
      const grid = document.getElementById('vendor-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const vendorList = list || window.lastFilteredVendors || vendors;

      // Update results count indicator
      const countEl = document.getElementById('directory-results-count');
      if (countEl) {
        countEl.textContent = `نمایش ${vendorList.length} مجموعه و تامین‌کننده فعال در استان یزد`;
      }

      // LUXURY EMPTY STATE COMPONENT
      if (!vendorList || vendorList.length === 0) {
        grid.className = "w-full col-span-full";
        grid.innerHTML = `
          <div class="col-span-full w-full bg-[#0e121c]/90 backdrop-blur-2xl border border-[#D4AF37]/50 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl my-6">
            <div class="w-20 h-20 mx-auto rounded-full bg-[#1E293B] border-2 border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <i data-lucide="search-x" class="w-10 h-10"></i>
            </div>
            <div class="space-y-2 max-w-md mx-auto">
              <h3 class="text-lg sm:text-xl font-black text-[#D4AF37]">موردی با این مشخصات یافت نشد</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                متأسفانه هیچ تامین‌کننده‌ای با فیلترهای انتخابی شما تطابق ندارد. پیشنهاد می‌کنیم فیلترها را پاکسازی کنید یا درخواست مشاوره ثبت نمایید.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button type="button" onclick="clearDrawerCategoryCheckboxes(); filterVendors();" class="gold-shimmer-btn text-[#0F251A] font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2">
                <i data-lucide="rotate-ccw" class="w-4 h-4 text-[#0F251A]"></i>
                <span>پاکسازی همه فیلترها</span>
              </button>
              <button type="button" onclick="openDedicatedAssistantModal()" class="bg-[#1E293B] hover:bg-[#2A384E] text-amber-200 border border-[#D4AF37]/50 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>درخواست مشاوره اختصاصی</span>
              </button>
            </div>
          </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
      }

      const currentTab = window.activeDirectoryCategoryTab || 'all';

      if (currentTab === 'all' && directoryViewMode === 'grid') {
        grid.className = "flex flex-col space-y-8 w-full";

        const sectionsDef = [
          { key: 'venue', title: 'برترین تالارها و باغ‌های عروسی یزد', catFilter: (cat) => cat.includes('تالار') || cat.includes('باغ') || cat.includes('عمارت') },
          { key: 'photo', title: 'استودیوها و آتلیه‌های عکاسی VIP', catFilter: (cat) => cat.includes('آتلیه') || cat.includes('عکاسی') || cat.includes('فیلمبرداری') },
          { key: 'beauty', title: 'سالن‌های زیبایی و میکاپ اختصاصی عروس', catFilter: (cat) => cat.includes('زیبایی') || cat.includes('آرایشگاه') || cat.includes('میکاپ') },
          { key: 'boutique', title: 'مزون‌ها و تشریفات اختصاصی لوکس', catFilter: (cat) => cat.includes('مزون') || cat.includes('تشریفات') || cat.includes('لباس') }
        ];

        let hasSectionRendered = false;

        sectionsDef.forEach(sec => {
          const secVendors = list.filter(v => sec.catFilter(v.categoryTitle || v.category || ''));
          if (secVendors.length > 0) {
            hasSectionRendered = true;
            const secWrapper = document.createElement('div');
            secWrapper.className = "space-y-4 bg-[#0e121c]/60 backdrop-blur-xl border border-[#C5A059]/30 rounded-3xl p-5 shadow-2xl";

            secWrapper.innerHTML = `
              <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
                <h3 class="text-sm sm:text-base font-black text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                  <span>${sec.title}</span>
                </h3>
                <button type="button" onclick="switchDirectoryCategoryTab('${sec.key}')" class="text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>مشاهده همه ➔</span>
                </button>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sec-cards-grid"></div>
            `;

            const cardsGrid = secWrapper.querySelector('.sec-cards-grid');
            secVendors.slice(0, 4).forEach(v => {
              cardsGrid.appendChild(renderCategoryTailoredCard(v));
            });

            grid.appendChild(secWrapper);
          }
        });

        if (!hasSectionRendered) {
          grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";
          list.forEach((v, index) => {
            grid.appendChild(renderCategoryTailoredCard(v, index === 0));
          });
        }
      } else {
        // Dedicated Tab Grid View
        if (directoryViewMode === 'list') {
          grid.className = "flex flex-col gap-3";
        } else {
          grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";
        }

        if (list.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400 bg-[#0e121c]/80 border border-[#C5A059]/20 rounded-3xl p-6">
              <p class="text-sm font-bold text-amber-200">هیچ تامین‌کننده‌ای با این مشخصات یافت نشد.</p>
            </div>`;
          return;
        }

        list.forEach((v, index) => {
          grid.appendChild(renderCategoryTailoredCard(v, index === 0 && directoryViewMode === 'grid'));
        });
      }

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    function openLocationModal() {
      const modal = document.getElementById('location-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeLocationModal() {
      const modal = document.getElementById('location-modal');
      if (modal) modal.classList.add('hidden');
    }

    function selectLocationProvince(provinceName) {
      selectedProvince = provinceName || 'یزد';
      const label = document.getElementById('header-location-label');
      if (label) {
        label.innerText = `استان ${selectedProvince} 📍`;
      }
      closeLocationModal();
      showToast(`📍 موقعیت مکانی شما روی استان ${selectedProvince} تنظیم گردید`, 'info');
    }

    function selectLocationCity(cityName, districtKey) {
      const label = document.getElementById('header-location-label');
      if (label) {
        label.innerText = `استان یزد 📍`;
      }
      filterByYazdDistrict(districtKey || 'all');
      closeLocationModal();
      showToast(`📍 موقعیت مکانی فعال: استان یزد`, 'info');
    }

    function requestCityNotify(regionName) {
      closeLocationModal();
      showToast(`🔔 درخواست اطلاع‌رسانی برای توسعه ${regionName} با موفقیت ثبت گردید`, 'info');
    }

    function filterByYazdDistrict(districtKey) {
      selectedYazdDistrict = districtKey;
      const pills = document.querySelectorAll('.yazd-district-pill');
      pills.forEach(pill => {
        const d = pill.getAttribute('data-district');
        if (d === districtKey) {
          pill.className = "yazd-district-pill px-3 py-1.5 rounded-xl transition-all bg-primary text-white shadow-xs shrink-0";
        } else {
          pill.className = "yazd-district-pill px-3 py-1.5 rounded-xl transition-all bg-bgCustom border border-accent hover:border-primary text-graphite shrink-0";
        }
      });
      filterVendors();
    }

    function handleHeaderSearchFocus() {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (!input || !dropdown) return;

      const query = input.value.trim().toLowerCase();
      if (!query) {
        // Show popular quick search tags
        dropdown.innerHTML = `
          <div class="p-3 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary flex items-center justify-between">
            <span>جستجوهای پرطرفدار یزد:</span>
            <span class="text-[10px] text-primary">پیشنهاد هوشمند</span>
          </div>
          <div class="p-3 grid grid-cols-2 gap-2 text-xs font-bold text-graphite">
            <div onclick="selectSearchSuggestion('عکاسی کویر', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="camera" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>عکاسی کویر</span>
            </div>
            <div onclick="selectSearchSuggestion('باغ تالار', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="building" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>باغ تالار</span>
            </div>
            <div onclick="selectSearchSuggestion('شیرینی حاج خلیفه', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="cake" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>شیرینی سنتی</span>
            </div>
            <div onclick="selectSearchSuggestion('مزون عروس', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>مزون عروس</span>
            </div>
          </div>
        `;
        dropdown.classList.remove('hidden');
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
      }
      handleHeaderSearchInput();
    }

    function handleHeroSearchInput(query) {
      const dropdown = document.getElementById('hero-search-dropdown');
      if (!dropdown) return;

      const q = (query || '').trim().toLowerCase();
      if (!q) {
        dropdown.classList.add('hidden');
        return;
      }

      const matchedVendors = vendors.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        (v.district && v.district.toLowerCase().includes(q))
      );

      if (matchedVendors.length === 0) {
        dropdown.innerHTML = `
          <div class="p-6 text-center text-slate-400 text-xs font-medium space-y-2">
            <i data-lucide="search-x" class="w-6 h-6 text-[#C5A059] mx-auto opacity-70"></i>
            <p>نتیجه‌ای برای "<span class="text-white font-bold">${query}</span>" یافت نشد.</p>
            <p class="text-[10px] text-amber-200/60">می‌توانید در دایرکتوری جامع تمامی تامین‌کنندگان را جستجو کنید.</p>
          </div>
        `;
      } else {
        const itemsHtml = matchedVendors.map(v => `
          <div onclick="document.getElementById('hero-search-dropdown').classList.add('hidden'); openVendorDetailModal(${v.id});" class="p-3.5 hover:bg-[#141A28] cursor-pointer transition-all flex items-center justify-between text-right border-b border-[#C5A059]/15 last:border-none group">
            <div class="flex items-center gap-3">
              <div class="relative shrink-0">
                <img src="${v.image}" class="w-12 h-12 rounded-xl object-cover border border-[#C5A059]/40 group-hover:border-[#D4AF37] transition-all">
                <span class="absolute -bottom-1 -right-1 bg-[#D4AF37] text-[#0F251A] text-[8px] font-black px-1 rounded-full">✓</span>
              </div>
              <div class="space-y-0.5">
                <p class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors">${v.name}</p>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-[9.5px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-2 py-0.5 rounded-md border border-[#D4AF37]/30">${v.category}</span>
                  <span class="text-[10px] text-slate-300 font-medium">📍 ${v.district || 'یزد'}</span>
                  ${v.price ? `<span class="text-[10px] font-bold text-amber-200/80">💰 ${v.price}</span>` : ''}
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[11px] font-black text-amber-300 bg-[#141A28] px-2 py-1 rounded-lg border border-[#C5A059]/20 flex items-center gap-1">⭐ ${v.rating || '۴.۹'}</span>
              <span class="gold-shimmer-btn text-[#0F251A] font-black text-[10px] px-3 py-1.5 rounded-xl shadow-md cursor-pointer flex items-center gap-1 group-hover:scale-105 transition-transform">
                <span>رزرو</span>
                <i data-lucide="arrow-left" class="w-3 h-3 text-[#0F251A]"></i>
              </span>
            </div>
          </div>
        `).join('');

        const stickyFooter = `
          <div onclick="document.getElementById('hero-search-dropdown').classList.add('hidden'); switchTab('directory'); const s=document.getElementById('directory-instant-search'); if(s){s.value='${q}'; filterVendors();}" class="sticky bottom-0 bg-[#07090E] border-t border-[#C5A059]/40 p-3.5 text-center text-xs font-black text-[#D4AF37] hover:bg-[#141A28] cursor-pointer transition-all flex items-center justify-center gap-2 shadow-2xl">
            <span>مشاهده تمامی نتایج برای "${q}" (${matchedVendors.length} مورد)</span>
            <i data-lucide="arrow-left" class="w-4 h-4 text-[#D4AF37]"></i>
          </div>
        `;

        dropdown.innerHTML = `<div class="max-h-[420px] overflow-y-auto custom-scrollbar">${itemsHtml}</div>${stickyFooter}`;
      }

      dropdown.classList.remove('hidden');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    function handleHeroSearchFocus() {
      const input = document.getElementById('hero-pill-search-input');
      if (input && input.value.trim()) {
        handleHeroSearchInput(input.value);
      }
    }

    function executeHeroSearch() {
      const input = document.getElementById('hero-pill-search-input');
      const dropdown = document.getElementById('hero-search-dropdown');
      if (dropdown) dropdown.classList.add('hidden');

      const q = input ? input.value.trim() : '';
      if (window.location.pathname.includes('directory.html')) {
        const directSearch = document.getElementById('directory-instant-search');
        if (directSearch) directSearch.value = q;
        if (typeof filterVendors === 'function') filterVendors();
      } else {
        if (q) {
          window.location.href = `directory.html?q=${encodeURIComponent(q)}`;
        } else {
          switchTab('directory');
        }
      }
    }

    function setPriceFilter(tier) {
      window.selectedPriceTier = tier;
      filterVendors();
    }
    window.setPriceFilter = setPriceFilter;

    function toggleDirectoryMainView(mode) {
      const gridView = document.getElementById('directory-magazine-grid-view') || document.getElementById('vendor-grid');
      const mapView = document.getElementById('directory-interactive-map-view');
      const btnGrid = document.getElementById('dir-btn-view-grid');
      const btnMap = document.getElementById('dir-btn-view-map');

      if (mode === 'map') {
        if (gridView) gridView.classList.add('hidden');
        if (mapView) mapView.classList.remove('hidden');
        if (btnGrid) btnGrid.className = 'px-4 py-2 rounded-xl text-xs font-black text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5';
        if (btnMap) btnMap.className = 'px-4 py-2 rounded-xl text-xs font-black bg-[#D4AF37] text-[#0F251A] shadow-md transition-all cursor-pointer flex items-center gap-1.5';
      } else {
        if (gridView) gridView.classList.remove('hidden');
        if (mapView) mapView.classList.add('hidden');
        if (btnGrid) btnGrid.className = 'px-4 py-2 rounded-xl text-xs font-black bg-[#D4AF37] text-[#0F251A] shadow-md transition-all cursor-pointer flex items-center gap-1.5';
        if (btnMap) btnMap.className = 'px-4 py-2 rounded-xl text-xs font-black text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5';
      }
    }
    window.toggleDirectoryMainView = toggleDirectoryMainView;

    window.handleHeroSearchInput = handleHeroSearchInput;
    window.handleHeroSearchFocus = handleHeroSearchFocus;
    window.executeHeroSearch = executeHeroSearch;

    // GLOBAL LISTENERS FOR HERO LIVE SEARCH DROPDOWN DISMISSAL
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('hero-search-dropdown');
      const input = document.getElementById('hero-pill-search-input');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        if (!dropdown.contains(e.target) && (!input || !input.contains(e.target))) {
          dropdown.classList.add('hidden');
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const dropdown = document.getElementById('hero-search-dropdown');
        if (dropdown && !dropdown.classList.contains('hidden')) {
          dropdown.classList.add('hidden');
        }
      }
    });

    // ONBOARDING CONCIERGE WIZARD LOGIC ("شروع برنامه‌ریزی")
    function openStartPlanningModal() {
      const modal = document.getElementById('modal-start-planning');
      if (modal) {
        modal.classList.remove('hidden');
        setPlanningWizardStep(1);
      }
    }

    function closeStartPlanningModal() {
      const modal = document.getElementById('modal-start-planning');
      if (modal) {
        modal.classList.add('hidden');
      }
    }

    function setPlanningWizardStep(stepNum) {
      const p1 = document.getElementById('planning-panel-1');
      const p2 = document.getElementById('planning-panel-2');
      const p3 = document.getElementById('planning-panel-3');

      const bar1 = document.getElementById('planning-bar-1');
      const bar2 = document.getElementById('planning-bar-2');
      const bar3 = document.getElementById('planning-bar-3');

      const stepNumBadge = document.getElementById('planning-step-num');
      const stepTitle = document.getElementById('planning-step-title');

      if (!p1 || !p2 || !p3) return;

      p1.classList.add('hidden');
      p2.classList.add('hidden');
      p3.classList.add('hidden');

      if (bar1) bar1.className = 'h-1.5 rounded-full bg-slate-700/80 transition-all';
      if (bar2) bar2.className = 'h-1.5 rounded-full bg-slate-700/80 transition-all';
      if (bar3) bar3.className = 'h-1.5 rounded-full bg-slate-700/80 transition-all';

      if (stepNum === 1) {
        p1.classList.remove('hidden');
        if (bar1) bar1.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (stepNumBadge) stepNumBadge.innerText = '۱';
        if (stepTitle) stepTitle.innerText = 'ورود سریع زوج‌ها';
      } else if (stepNum === 2) {
        p2.classList.remove('hidden');
        if (bar1) bar1.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (bar2) bar2.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (stepNumBadge) stepNumBadge.innerText = '۲';
        if (stepTitle) stepTitle.innerText = 'تاریخ مراسم عروسی';
        updateShamsiDateFromSelect();
      } else if (stepNum === 3) {
        p3.classList.remove('hidden');
        if (bar1) bar1.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (bar2) bar2.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (bar3) bar3.className = 'h-1.5 rounded-full bg-[#C5A059] transition-all';
        if (stepNumBadge) stepNumBadge.innerText = '۳';
        if (stepTitle) stepTitle.innerText = 'نقشه راه ۴ گام';

        const savedDate = localStorage.getItem('aroosi_wedding_date') || '۱۵ مهر ۱۴۰۴';
        const dateDisplay = document.getElementById('saved-date-display');
        if (dateDisplay) dateDisplay.innerText = '📅 تاریخ: ' + savedDate;
      }
    }

    function handlePlanningQuickAccess() {
      const phoneInput = document.getElementById('planning-phone-input');
      const val = phoneInput ? phoneInput.value.trim() : '';
      if (val) {
        localStorage.setItem('aroosi_user_phone', val);
        if (typeof showToast === 'function') {
          showToast('ورود با موفقیت انجام شد! لطفا تاریخ مراسم را مشخص کنید.', 'success');
        }
      } else {
        if (typeof showToast === 'function') {
          showToast('ورود به عنوان زوج مهمان ثبت شد.', 'info');
        }
      }
      setPlanningWizardStep(2);
    }

    function updateShamsiDateFromSelect() {
      const year = document.getElementById('shamsi-year-select')?.value || '۱۴۰۴';
      const month = document.getElementById('shamsi-month-select')?.value || 'مهر';
      const day = document.getElementById('shamsi-day-select')?.value || '۱۵';

      const formatted = `${day} ${month} ${year}`;
      const badge = document.getElementById('selected-shamsi-date-badge');
      if (badge) {
        badge.innerText = formatted;
      }
    }

    function confirmShamsiWeddingDate() {
      const year = document.getElementById('shamsi-year-select')?.value || '۱۴۰۴';
      const month = document.getElementById('shamsi-month-select')?.value || 'مهر';
      const day = document.getElementById('shamsi-day-select')?.value || '۱۵';

      const formatted = `${day} ${month} ${year}`;
      localStorage.setItem('aroosi_wedding_date', formatted);

      if (typeof showToast === 'function') {
        showToast(`تاریخ مراسم (${formatted}) با موفقیت ثبت شد!`, 'success');
      }

      setPlanningWizardStep(3);
    }

    window.openStartPlanningModal = openStartPlanningModal;
    window.closeStartPlanningModal = closeStartPlanningModal;
    window.setPlanningWizardStep = setPlanningWizardStep;
    window.handlePlanningQuickAccess = handlePlanningQuickAccess;
    window.updateShamsiDateFromSelect = updateShamsiDateFromSelect;
    window.confirmShamsiWeddingDate = confirmShamsiWeddingDate;

    function handleHeaderSearchInput() {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (!input || !dropdown) return;

      const query = input.value.trim().toLowerCase();
      if (!query) {
        handleHeaderSearchFocus();
        return;
      }

      switchTab('directory');

      // Sync with main and directory instant search inputs
      const mainSearch = document.getElementById('search-input');
      if (mainSearch) {
        mainSearch.value = query;
      }
      const directSearch = document.getElementById('directory-instant-search');
      if (directSearch) {
        directSearch.value = query;
      }

      // Match vendors and subcategories
      const matchedVendors = vendors.filter(v =>
        v.name.toLowerCase().includes(query) || v.category.toLowerCase().includes(query)
      ).slice(0, 4);

      let subCatMatches = [];
      categoryGroups.forEach(g => {
        const subList = g.subcategories || g.subCategories || [];
        subList.forEach(sub => {
          const matchTitle = sub.title && sub.title.toLowerCase().includes(query);
          const matchTag = sub.tag && sub.tag.toLowerCase().includes(query);
          if (matchTitle || matchTag) {
            subCatMatches.push(sub);
          }
        });
      });
      subCatMatches = subCatMatches.slice(0, 3);

      if (matchedVendors.length === 0 && subCatMatches.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-xs text-secondary font-medium text-center">هیچ نتیجه‌ای یافت نشد.</div>`;
      } else {
        let html = '';
        if (subCatMatches.length > 0) {
          html += `<div class="p-2 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary">دسته‌بندی‌های مرتبط:</div>`;
          subCatMatches.forEach(sub => {
            html += `
              <div onclick="selectSearchSuggestion('${sub.title}', 'sub');" class="p-2.5 hover:bg-primary/10 cursor-pointer flex items-center gap-2 text-xs font-bold text-graphite border-b border-accent/40">
                <i data-lucide="tag" class="w-3.5 h-3.5 text-primary shrink-0"></i>
                <span>${sub.title}</span>
              </div>
            `;
          });
        }

        if (matchedVendors.length > 0) {
          html += `<div class="p-2 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary">تأمین‌کنندگان:</div>`;
          matchedVendors.forEach(v => {
            html += `
              <div onclick="selectSearchSuggestion('${v.name}', 'vendor');" class="p-2.5 hover:bg-primary/10 cursor-pointer flex items-center justify-between text-xs font-bold text-graphite border-b border-accent/40">
                <div class="flex items-center gap-2">
                  <i data-lucide="store" class="w-3.5 h-3.5 text-primary shrink-0"></i>
                  <span>${v.name}</span>
                </div>
                <span class="text-[10px] text-secondary font-normal">${v.category}</span>
              </div>
            `;
          });
        }
        dropdown.innerHTML = html;
        if (window.lucide) lucide.createIcons();
      }

      dropdown.classList.remove('hidden');
      filterVendors();
    }

    function selectSearchSuggestion(value, type) {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (input) input.value = value;
      if (dropdown) dropdown.classList.add('hidden');

      if (type === 'sub') {
        filterVendorsByCategoryTitle(value);
      } else {
        const mainSearch = document.getElementById('search-input');
        if (mainSearch) mainSearch.value = value;
        filterVendors();
      }
    }

    // Close suggestions dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('search-suggestions-dropdown');
      const input = document.getElementById('header-search-input');
      if (dropdown && input && !dropdown.contains(e.target) && !input.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    let activeCategoryFilters = new Set();

    function renderSidebarCategoryCheckboxes() {
      const container = document.getElementById('sidebar-category-checkboxes');
      if (!container) return;

      container.innerHTML = categoryGroups.map(group => {
        const isGroupExpanded = expandedCategoryIds.has(group.id);
        const activeSubInGroupCount = group.subcategories.filter(sub => activeCategoryFilters.has(sub.title)).length;

        return `
          <div class="border border-[#C5A059]/30 rounded-2xl overflow-hidden mb-2 bg-[#141A28] shadow-md transition-all">
            <!-- Accordion Group Header -->
            <button type="button" onclick="toggleCategoryAccordion('${group.id}')" class="w-full p-2.5 flex items-center justify-between bg-[#1E293B]/80 hover:bg-[#1E293B] text-right transition-colors cursor-pointer">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs">
                  <i data-lucide="${group.icon || 'grid'}" class="w-3.5 h-3.5"></i>
                </div>
                <span class="text-xs font-extrabold text-white">${group.title}</span>
              </div>
              <div class="flex items-center gap-1.5">
                ${activeSubInGroupCount > 0 ? `<span class="text-[10px] font-bold bg-[#D4AF37] text-[#07090E] px-1.5 py-0.5 rounded-full">${activeSubInGroupCount}</span>` : ''}
                <i data-lucide="chevron-down" class="w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${isGroupExpanded ? 'rotate-180' : ''}"></i>
              </div>
            </button>

            <!-- Sub-Categories Expandable Container -->
            <div class="${isGroupExpanded ? 'block' : 'hidden'} p-2 space-y-1.5 bg-[#141A28] border-t border-[#C5A059]/20">
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${group.subcategories.map(sub => {
                  const isChecked = activeCategoryFilters.has(sub.title);
                  return `
                    <button
                      type="button"
                      onclick="toggleCategoryFilter('${sub.title}')"
                      class="px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${isChecked ? 'bg-[#1B3B2B] text-[#FCFCFA] border-[#D4AF37] shadow-xs ring-2 ring-[#D4AF37]/30 scale-[1.02]' : 'bg-[#FCFCFA] text-[#1B3B2B] border-[#1B3B2B]/20 hover:border-[#D4AF37] hover:bg-[#F5EFEB]'}">
                      <span class="w-1.5 h-1.5 rounded-full ${isChecked ? 'bg-[#D4AF37]' : 'bg-[#1B3B2B]/30'}"></span>
                      <span>${sub.title}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('');

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function toggleCategoryFilter(category) {
      if (activeCategoryFilters.has(category)) {
        activeCategoryFilters.delete(category);
      } else {
        activeCategoryFilters.add(category);
      }
      switchTab('directory');
      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
    }

    let selectedEventDateFilter = '';

    window.handleEventDateFilterChange = function(dateVal) {
      selectedEventDateFilter = dateVal;
      renderMultiCategoryPills();
      filterVendors();
    };

    window.clearEventDateFilter = function() {
      selectedEventDateFilter = '';
      const input = document.getElementById('sidebar-event-date');
      if (input) input.value = '';
      renderMultiCategoryPills();
      filterVendors();
    };

    function resetAllCategoryFilters() {
      activeCategoryFilters.clear();
      selectedEventDateFilter = '';
      const dateInput = document.getElementById('sidebar-event-date');
      if (dateInput) dateInput.value = '';

      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      const headerSearchInput = document.getElementById('header-search-input');
      if (headerSearchInput) headerSearchInput.value = '';
      const verifiedOnly = document.getElementById('verified-only');
      if (verifiedOnly) verifiedOnly.checked = false;

      const sidebarCitySelect = document.getElementById('sidebar-city-select');
      if (sidebarCitySelect) sidebarCitySelect.value = 'استان یزد';
      const headerCitySelect = document.getElementById('header-city-select');
      if (headerCitySelect) headerCitySelect.value = 'استان یزد';

      const sidebarPriceSelect = document.getElementById('sidebar-price-select');
      if (sidebarPriceSelect) sidebarPriceSelect.value = 'all';
      const headerPriceSelect = document.getElementById('header-price-select');
      if (headerPriceSelect) headerPriceSelect.value = 'all';

      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
    }

    function renderMultiCategoryPills() {
      const container = document.getElementById('active-category-pills');
      if (!container) return;

      let html = '';

      if (selectedEventDateFilter) {
        html += `
          <span class="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 border border-amber-300 text-xs font-bold px-3 py-1 rounded-xl">
            <span>📅 تاریخ: ${selectedEventDateFilter}</span>
            <button onclick="clearEventDateFilter()" class="hover:text-rose-600 transition-colors cursor-pointer font-bold">✕</button>
          </span>
        `;
      }

      if (activeCategoryFilters.size > 0) {
        html += Array.from(activeCategoryFilters).map(cat => `
          <span class="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3 py-1 rounded-xl">
            <span>${cat}</span>
            <button onclick="toggleCategoryFilter('${cat}')" class="hover:text-rose-600 transition-colors cursor-pointer font-bold">✕</button>
          </span>
        `).join('');
      }

      if (!html) {
        container.innerHTML = `<span class="text-xs text-secondary font-medium bg-slate-100 px-3 py-1.5 rounded-xl border border-accent">نمایش تمامی تامین‌کنندگان</span>`;
      } else {
        container.innerHTML = html;
      }

      if (typeof window.updateAdvFilterActiveCount === 'function') {
        window.updateAdvFilterActiveCount();
      }
    }

    function syncAndFilterCity(val) {
      const headerCity = document.getElementById('header-city-select');
      if (headerCity) headerCity.value = val;
      const sidebarCity = document.getElementById('sidebar-city-select');
      if (sidebarCity) sidebarCity.value = val;
      filterVendors();
    }

    function syncAndFilterPrice(val) {
      const headerPrice = document.getElementById('header-price-select');
      if (headerPrice) headerPrice.value = val;
      const sidebarPrice = document.getElementById('sidebar-price-select');
      if (sidebarPrice) sidebarPrice.value = val;
      filterVendors();
    }

    function filterVendors() {
      const discountToggle = document.getElementById('adv-discount-toggle');
      const discountOnly = discountToggle ? discountToggle.checked : false;
      const instantSearchInput = document.getElementById('directory-instant-search');
      const searchInput = document.getElementById('search-input');
      const headerSearchInput = document.getElementById('header-search-input');

      let search = '';
      if (instantSearchInput && instantSearchInput.value.trim() !== '') {
        search = instantSearchInput.value.trim().toLowerCase();
      } else if (headerSearchInput && headerSearchInput.value.trim() !== '') {
        search = headerSearchInput.value.trim().toLowerCase();
      } else if (searchInput) {
        search = searchInput.value.trim().toLowerCase();
      }

      const verifiedOnly = document.getElementById('verified-only') ? document.getElementById('verified-only').checked : false;

      const sidebarCitySelect = document.getElementById('sidebar-city-select');
      const headerCitySelect = document.getElementById('header-city-select');
      const selectedCity = (sidebarCitySelect && sidebarCitySelect.value !== 'استان یزد')
        ? sidebarCitySelect.value
        : (headerCitySelect ? headerCitySelect.value : 'استان یزد');

      const sidebarPriceSelect = document.getElementById('sidebar-price-select');
      const headerPriceSelect = document.getElementById('header-price-select');
      const selectedPriceRange = (sidebarPriceSelect && sidebarPriceSelect.value !== 'all')
        ? sidebarPriceSelect.value
        : (headerPriceSelect ? headerPriceSelect.value : 'all');

      const capacitySlider = document.getElementById('sidebar-capacity-slider');
      const maxCapacity = capacitySlider ? parseInt(capacitySlider.value, 10) : 1000;

      const featParking = document.getElementById('feat-parking')?.checked || false;
      const featSofreh = document.getElementById('feat-sofreh')?.checked || false;
      const featGarden = document.getElementById('feat-garden')?.checked || false;
      const featCatering = document.getElementById('feat-catering')?.checked || false;

      let filtered = vendors.filter(v => {
        if (discountOnly && !(v.hasDiscount || v.discountBadge || (v.price && v.price.includes('تخفیف')))) {
          return false;
        }
        const matchesSearch = !search ||
                              v.name.toLowerCase().includes(search) ||
                              v.category.toLowerCase().includes(search) ||
                              (v.district && v.district.toLowerCase().includes(search)) ||
                              (v.city && v.city.toLowerCase().includes(search));

        let matchesCat = true;
        const advChecked = Array.from(document.querySelectorAll('.adv-cat-checkbox:checked')).map(cb => cb.value.toLowerCase());
        if (advChecked.length > 0) {
          matchesCat = advChecked.some(cat =>
            v.category.toLowerCase().includes(cat) ||
            (v.tags && v.tags.some(t => t.toLowerCase().includes(cat))) ||
            (v.name && v.name.toLowerCase().includes(cat))
          );
        } else if (activeCategoryFilters.size > 0) {
          matchesCat = Array.from(activeCategoryFilters).some(cat =>
            v.category.toLowerCase().includes(cat.toLowerCase()) ||
            (v.tags && v.tags.some(t => t.toLowerCase().includes(cat.toLowerCase())))
          );
        }

        const matchesVerified = !verifiedOnly || v.verified;

        let matchesCity = true;
        if (selectedCity && selectedCity !== 'استان یزد' && selectedCity !== 'سایر') {
          matchesCity = (v.cityName && v.cityName.includes(selectedCity)) ||
                        (v.province && v.province.includes(selectedCity)) ||
                        (v.city && v.city.includes(selectedCity)) ||
                        (v.district && v.district.includes(selectedCity));
        }

        let matchesPrice = true;
        if (selectedPriceRange !== 'all') {
          const parsePriceNumeric = (str) => {
            if (!str) return 0;
            const enStr = str.toString().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            return parseInt(enStr.replace(/[^\d]/g, ''), 10) || 0;
          };
          const rawPrice = parsePriceNumeric(v.priceRange);
          if (selectedPriceRange === 'economic') {
            matchesPrice = rawPrice <= 35000000;
          } else if (selectedPriceRange === 'mid') {
            matchesPrice = rawPrice > 35000000 && rawPrice <= 80000000;
          } else if (selectedPriceRange === 'luxury') {
            matchesPrice = rawPrice > 80000000;
          }
        }

        let matchesCapacity = true;
        if (maxCapacity < 1000 && v.capacity) {
          matchesCapacity = (v.capacity || 0) <= maxCapacity;
        }

        let matchesDate = true;
        const advDateFilterInp = document.getElementById('adv-date-filter');
        const dateVal = advDateFilterInp ? advDateFilterInp.value.trim() : '';
        if (dateVal) {
          const matched = dateVal.match(/(\d+)/);
          const dayNum = matched ? parseInt(matched[1], 10) : null;
          if (dayNum) {
            const blocked = (typeof vendorBlockedDates !== 'undefined' && Array.isArray(vendorBlockedDates)) ? vendorBlockedDates : [15, 22];
            const isBlocked = blocked.includes(dayNum);
            if (isBlocked && v.id % 2 === 0) {
              matchesDate = false;
            }
          }
        }

        let matchesFeatures = true;
        const tagsAndCapabilities = [...(v.tags || []), ...(v.capabilityTags || []), v.description || ''];
        const tagText = tagsAndCapabilities.join(' ').toLowerCase();

        if (featParking && !tagText.includes('پارکینگ')) matchesFeatures = false;
        if (featSofreh && !tagText.includes('عقد') && !tagText.includes('سفره')) matchesFeatures = false;
        if (featGarden && !tagText.includes('باغ') && !tagText.includes('فضای باز')) matchesFeatures = false;
        if (featCatering && !tagText.includes('کترینگ') && !tagText.includes('پذیرایی') && !tagText.includes('شیرینی')) matchesFeatures = false;

        return matchesSearch && matchesCat && matchesVerified && matchesCity && matchesPrice && matchesCapacity && matchesDate && matchesFeatures;
      });

      // Apply dynamic sorting from header/drawer select
      const advSortSelect = document.getElementById('adv-sort-select');
      const sortSelect = document.getElementById('vendor-sort-select');
      const sortMode = (advSortSelect && advSortSelect.value) ? advSortSelect.value : (sortSelect ? sortSelect.value : 'popular');

      filtered.sort((a, b) => {
        const parsePriceNumeric = (str) => {
          if (!str) return 0;
          const enStr = str.toString().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
          return parseInt(enStr.replace(/[^\d]/g, ''), 10) || 0;
        };
        const priceA = parsePriceNumeric(a.priceRange);
        const priceB = parsePriceNumeric(b.priceRange);

        if (sortMode === 'popular') {
          if ((b.rating || 0) !== (a.rating || 0)) {
            return (b.rating || 0) - (a.rating || 0);
          }
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        } else if (sortMode === 'newest') {
          return (b.id || 0) - (a.id || 0);
        } else if (sortMode === 'price-asc') {
          return priceA - priceB;
        } else if (sortMode === 'price-desc') {
          return priceB - priceA;
        }
        return 0;
      });

      renderVendors(filtered);

      const countBadge = document.getElementById('directory-vendor-count-badge');
      if (countBadge) {
        countBadge.textContent = `نمایش ${filtered.length} تامین‌کننده در استان یزد`;
      }
    }

    function renderChecklistTimeframeButtons() {
      const btnContainer = document.getElementById('checklist-timeframe-buttons');
      if (!btnContainer) return;

      btnContainer.innerHTML = '';

      timeframeList.forEach(tf => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.onclick = () => {
          activeChecklistFilter = tf;
          renderChecklistTimeline();
          renderChecklistTimeframeButtons();
        };
        const isActive = activeChecklistFilter === tf;
        btn.className = `px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          isActive
            ? 'bg-primary text-white shadow-xs'
            : 'bg-bgCustom text-graphite border border-accent hover:border-primary'
        }`;
        btn.innerText = tf;
        btnContainer.appendChild(btn);
      });

      // Append quick status filter buttons
      const statusGroup = document.createElement('div');
      statusGroup.className = "flex items-center gap-1.5 pt-2 sm:pt-0 sm:mr-auto border-t sm:border-t-0 border-accent/60 w-full sm:w-auto";
      statusGroup.innerHTML = `
        <span class="text-[11px] font-bold text-secondary hidden md:inline">وضعیت:</span>
        <button type="button" onclick="filterChecklistTasksByStatus('ALL')" class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
          activeChecklistStatusFilter === 'ALL' ? 'bg-[#1B3B2B] text-white' : 'bg-slate-100 text-graphite hover:bg-slate-200'
        }">همه کارها</button>
        <button type="button" onclick="filterChecklistTasksByStatus('UNCOMPLETED')" class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
          activeChecklistStatusFilter === 'UNCOMPLETED' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-graphite hover:bg-slate-200'
        }">انجام نشده</button>
        <button type="button" onclick="filterChecklistTasksByStatus('COMPLETED')" class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
          activeChecklistStatusFilter === 'COMPLETED' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-graphite hover:bg-slate-200'
        }">تکمیل شده</button>
      `;
      btnContainer.appendChild(statusGroup);
    }

    function toggleChecklistTask(id) {
      const task = staticChecklist.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        try {
          localStorage.setItem('aroosi_checklist_db', JSON.stringify(staticChecklist));
        } catch(e) {}
        renderChecklistTimeline();
        if (task.completed) {
          showToast(`تاسک «${task.title}» به انجام‌شده تغییر یافت.`, 'success');
        } else {
          showToast(`تاسک «${task.title}» به حالت معوقه بازگشت.`, 'info');
        }
      }
    }

    // PLANNER SUB-TAB SWITCHING
    let activePlannerSubTab = 'checklist';

    function switchPlannerSubTab(subTabKey) {
      activePlannerSubTab = subTabKey;

      ['checklist', 'schedule', 'party', 'guests', 'vendors', 'budget', 'offers'].forEach(key => {
        const btn = document.getElementById('planner-subtab-' + key);
        const panel = document.getElementById('planner-panel-' + key);
        if (btn) {
          if (key === subTabKey) {
            btn.className = "flex-1 py-3 px-3 rounded-xl transition-all bg-[#C5A059] text-[#07090E] font-black text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(197,160,89,0.4)] cursor-pointer min-w-[120px]";
          } else {
            btn.className = "flex-1 py-3 px-3 rounded-xl transition-all text-slate-300 hover:text-amber-200 hover:bg-white/5 text-center flex items-center justify-center gap-1.5 cursor-pointer min-w-[120px]";
          }
        }
        if (panel) {
          if (key === subTabKey) panel.classList.remove('hidden');
          else panel.classList.add('hidden');
        }
      });

      if (subTabKey === 'vendors') {
        renderPlannerAttachedVendors();
      } else if (subTabKey === 'budget') {
        renderPlannerBudgetSummary();
      } else if (subTabKey === 'offers') {
        renderPlannerOffersTab();
      } else if (subTabKey === 'schedule' && typeof renderMasterDaySchedule === 'function') {
        renderMasterDaySchedule();
      } else if (subTabKey === 'party' && typeof renderBridalParty === 'function') {
        renderBridalParty();
      } else if (subTabKey === 'guests' && typeof renderGuestsAndGifts === 'function') {
        renderGuestsAndGifts();
      } else if (subTabKey === 'forum' && typeof renderBridalForum === 'function') {
        renderBridalForum();
      }

      lucide.createIcons();
    }

    function renderPlannerAttachedVendors() {
      const container = document.getElementById('planner-attached-vendors-container');
      if (!container) return;
      container.innerHTML = '';

      const tasksWithVendors = staticChecklist.filter(t => t.attachedVendorId);

      if (tasksWithVendors.length === 0) {
        container.innerHTML = `
          <div class="col-span-full bg-bgCustom border-2 border-dashed border-accent rounded-3xl p-8 text-center text-secondary space-y-3">
            <i data-lucide="store" class="w-12 h-12 mx-auto text-secondary/50"></i>
            <h3 class="text-sm font-bold text-graphite">هیچ تأمین‌کننده‌ای هنوز متصل نشده است</h3>
            <p class="text-xs">شما می‌توانید از زبانه چک‌لیست، با کلیک روی «+ اتصال تأمین‌کننده»، خدمات مورد نظر را متصل نمایید.</p>
            <button onclick="switchPlannerSubTab('checklist')" class="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl">
              بازگشت به چک‌لیست
            </button>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      tasksWithVendors.forEach(t => {
        const vendor = vendors.find(v => v.id === t.attachedVendorId);
        if (!vendor) return;

        let statusText = "پیش‌فاکتور دریافت شد";
        let statusBadgeClass = "bg-blue-950/80 text-blue-300 border-blue-500/40";

        if (t.vendorStatus === 'deposit_paid') {
          statusText = "بیعانه پرداخت شد";
          statusBadgeClass = "bg-amber-950/80 text-[#C5A059] border-[#C5A059]/40";
        } else if (t.vendorStatus === 'finalized') {
          statusText = "نهایی و رزرو شد";
          statusBadgeClass = "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
        }

        const card = document.createElement('div');
        card.className = "bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-2xl overflow-hidden shadow-lg space-y-3 flex flex-col justify-between p-4 transition-all text-white";
        card.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl overflow-hidden border border-[#C5A059]/40 shrink-0 shadow-md">
                <img src="${vendor.image}" alt="${vendor.name}" class="w-full h-full object-cover">
              </div>
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-[#F7F5F0]">${vendor.name}</h4>
                <p class="text-xs text-slate-300 font-medium">${vendor.category}</p>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadgeClass}">
                  ${statusText}
                </span>
              </div>
            </div>

            <div class="p-3 bg-[#07090E] rounded-xl border border-[#C5A059]/20 space-y-1 text-xs">
              <div class="flex justify-between items-center text-[#F7F5F0]">
                <span class="text-slate-400 font-medium">اقدام متصل:</span>
                <span class="font-bold text-[#C5A059] truncate max-w-[160px]">${t.title}</span>
              </div>
              <div class="flex justify-between items-center text-[#F7F5F0]">
                <span class="text-slate-400 font-medium">حدود قیمت:</span>
                <span class="font-bold text-slate-200">${vendor.priceRange}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between gap-2">
            <button onclick="openVendorDetailModal(${vendor.id})" class="flex-1 bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] py-2 rounded-xl text-xs font-black transition-all text-center cursor-pointer shadow-md">
              مشاهده پروفایل
            </button>
            <button onclick="openVendorSelectModal('${t.id}')" class="bg-primary hover:bg-emerald-900 text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors">
              ویرایش وضعیت
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    // ENTERPRISE WEDDING BUDGET PLANNER STATE & FUNCTIONS
    let budgetPlannerState = {
      totalBudget: 350000000,
      categories: [
        { id: "c1", name: "تالار و تشریفات پذیرایی", defaultSplit: 0.40, color: "#1B3B2B" },
        { id: "c2", name: "عکاسی و فیلم‌برداری", defaultSplit: 0.15, color: "#D4AF37" },
        { id: "c3", name: "لباس، طلا و آرایشگاه", defaultSplit: 0.20, color: "#607268" },
        { id: "c4", name: "گل‌آرایی، دکور و موزیک", defaultSplit: 0.10, color: "#B89628" },
        { id: "c5", name: "ماشین عروس و ماه عسل", defaultSplit: 0.10, color: "#2E533F" },
        { id: "c6", name: "هزینه‌های پیش‌بینی‌نشده", defaultSplit: 0.05, color: "#8D99AE" }
      ],
      lineItems: [
        { id: "item-1", title: "ورودی و ورودی شام باغ تالار مشیرالممالک", category: "تالار و تشریفات پذیرایی", estimated: 140000000, paid: 95000000, status: "ADVANCE", notes: "بیعانه اولیه پرداخت شد", party: "groom" },
        { id: "item-2", title: "پکیج کامل عکاسی و فرمالیته کویر", category: "عکاسی و فیلم‌برداری", estimated: 52500000, paid: 45000000, status: "ADVANCE", notes: "شامل ۲ آلبوم و هلی‌شات", party: "shared" },
        { id: "item-3", title: "سالن زیبایی و آرایشگاه رویال عروس", category: "لباس، طلا و آرایشگاه", estimated: 25000000, paid: 25000000, status: "FULL", notes: "تسویه کامل گردید", party: "groom" },
        { id: "item-4", title: "سفارش و دوخت لباس عروس مزون ترمه", category: "لباس، طلا و آرایشگاه", estimated: 45000000, paid: 15000000, status: "ADVANCE", notes: "پرو دوم هفته آینده", party: "groom" },
        { id: "item-5", title: "گل‌آرایی ورودی، جایگاه و دسته گل", category: "گل‌آرایی، دکور و موزیک", estimated: 35000000, paid: 0, status: "UNPAID", notes: "در مرحله استعلام", party: "bride" }
      ]
    };

    function loadBudgetStateFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_enterprise_budget_db');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed.totalBudget === 'number') {
            budgetPlannerState = parsed;
          }
        }
      } catch (e) {
        console.error('Failed to load budget state:', e);
      }
    }

    function saveBudgetStateToStorage() {
      try {
        localStorage.setItem('aroosi_enterprise_budget_db', JSON.stringify(budgetPlannerState));
      } catch (e) {
        console.error('Failed to save budget state:', e);
      }
    }

    function openBudgetItemModal(itemId = null) {
      const modal = document.getElementById('modal-budget-item');
      if (!modal) return;

      const titleElem = document.getElementById('budget-item-modal-title');
      const idInp = document.getElementById('bmi-id');
      const titleInp = document.getElementById('bmi-title');
      const catInp = document.getElementById('bmi-category');
      const estInp = document.getElementById('bmi-estimated');
      const paidInp = document.getElementById('bmi-paid');
      const statusInp = document.getElementById('bmi-status');
      const partyInp = document.getElementById('bmi-party');
      const notesInp = document.getElementById('bmi-notes');

      if (itemId) {
        const item = budgetPlannerState.lineItems.find(i => i.id === itemId);
        if (item) {
          if (titleElem) titleElem.innerText = "ویرایش قلم هزینه بودجه";
          if (idInp) idInp.value = item.id;
          if (titleInp) titleInp.value = item.title;
          if (catInp) catInp.value = item.category;
          if (estInp) estInp.value = item.estimated;
          if (paidInp) paidInp.value = item.paid;
          if (statusInp) statusInp.value = item.status || "UNPAID";
          if (partyInp) partyInp.value = item.party || "groom";
          if (notesInp) notesInp.value = item.notes || "";
        }
      } else {
        if (titleElem) titleElem.innerText = "افزودن قلم هزینه جدید به بودجه";
        if (idInp) idInp.value = "";
        if (titleInp) titleInp.value = "";
        if (catInp) catInp.value = "تالار و تشریفات پذیرایی";
        if (estInp) estInp.value = "";
        if (paidInp) paidInp.value = "0";
        if (statusInp) statusInp.value = "UNPAID";
        if (partyInp) partyInp.value = "groom";
        if (notesInp) notesInp.value = "";
      }

      modal.classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }

    function closeBudgetItemModal() {
      const modal = document.getElementById('modal-budget-item');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveBudgetItem(e) {
      if (e && e.preventDefault) e.preventDefault();

      const id = document.getElementById('bmi-id')?.value;
      const title = document.getElementById('bmi-title')?.value.trim();
      const category = document.getElementById('bmi-category')?.value;
      const estimated = Number(document.getElementById('bmi-estimated')?.value) || 0;
      const paid = Number(document.getElementById('bmi-paid')?.value) || 0;
      const status = document.getElementById('bmi-status')?.value || "UNPAID";
      const party = document.getElementById('bmi-party')?.value || "groom";
      const notes = document.getElementById('bmi-notes')?.value.trim() || "";

      if (!title || estimated <= 0) {
        showToast('لطفاً عنوان و مبلغ برآوردی معتبر وارد کنید.', 'warning');
        return;
      }

      if (id) {
        const idx = budgetPlannerState.lineItems.findIndex(i => i.id === id);
        if (idx !== -1) {
          budgetPlannerState.lineItems[idx] = { id, title, category, estimated, paid, status, party, notes };
        }
      } else {
        budgetPlannerState.lineItems.unshift({
          id: 'item-' + Date.now(),
          title, category, estimated, paid, status, party, notes
        });
      }

      saveBudgetStateToStorage();
      closeBudgetItemModal();
      renderPlannerBudgetSummary();
      showToast('قلم هزینه با موفقیت ثبت گردید.', 'success');
    }

    function deleteBudgetItem(itemId) {
      if (confirm('آیا از حذف این قلم هزینه اطمینان دارید؟')) {
        budgetPlannerState.lineItems = budgetPlannerState.lineItems.filter(i => i.id !== itemId);
        saveBudgetStateToStorage();
        renderPlannerBudgetSummary();
        showToast('قلم هزینه از بودجه حذف گردید.', 'info');
      }
    }

    function updateTotalBudgetCap(newBudget) {
      const val = Number(newBudget);
      if (val && val > 0) {
        budgetPlannerState.totalBudget = val;
        saveBudgetStateToStorage();
        renderPlannerBudgetSummary();
        showToast('سقف بودجه کل با موفقیت بروزرسانی شد.', 'success');
      }
    }

    function renderPlannerBudgetSummary() {
      const container = document.getElementById('planner-budget-summary-container');
      if (!container) return;

      loadBudgetStateFromStorage();

      const totalBudget = budgetPlannerState.totalBudget || 350000000;
      const totalPaid = budgetPlannerState.lineItems.reduce((acc, item) => acc + (Number(item.paid) || 0), 0);
      const totalEstimatedSpent = budgetPlannerState.lineItems.reduce((acc, item) => acc + (Number(item.estimated) || 0), 0);
      const remaining = totalBudget - totalPaid;

      // Dual Budget Split Totals (Groom vs Bride vs Shared)
      const groomTotal = budgetPlannerState.lineItems
        .filter(i => (i.party || 'groom') === 'groom')
        .reduce((acc, item) => acc + (Number(item.estimated) || 0), 0);

      const brideTotal = budgetPlannerState.lineItems
        .filter(i => i.party === 'bride')
        .reduce((acc, item) => acc + (Number(item.estimated) || 0), 0);

      const sharedTotal = budgetPlannerState.lineItems
        .filter(i => i.party === 'shared')
        .reduce((acc, item) => acc + (Number(item.estimated) || 0), 0);

      // Evaluate Health Status Badge
      let healthBadgeText = "عالی (مدیریت متوازن)";
      let healthBadgeClass = "health-badge-excellent";
      let healthDesc = "هزینه‌های شما کاملاً طبق بودجه کل مصوب در حال مدیریت است.";

      if (totalEstimatedSpent > totalBudget * 1.1) {
        healthBadgeText = "خطر (تجاوز از سقف بودجه)";
        healthBadgeClass = "health-badge-danger";
        healthDesc = "مجموع هزینه‌های برآوردی از سقف بودجه کل شما فراتر رفته است.";
      } else if (totalEstimatedSpent > totalBudget) {
        healthBadgeText = "هشدار (نزدیک به سقف)";
        healthBadgeClass = "health-badge-warning";
        healthDesc = "برآورد هزینه‌ها به سقف بودجه نزدیک شده است، در انتخاب پکیج‌ها دقت کنید.";
      }

      // Calculate Category Splits
      const categoryCalculations = budgetPlannerState.categories.map(cat => {
        const catTargetBudget = totalBudget * cat.defaultSplit;
        const catItems = budgetPlannerState.lineItems.filter(i => i.category === cat.name);
        const catEstimatedTotal = catItems.reduce((a, b) => a + (Number(b.estimated) || 0), 0);
        const catPaidTotal = catItems.reduce((a, b) => a + (Number(b.paid) || 0), 0);

        const diff = catEstimatedTotal - catTargetBudget;
        let diffText = "منطبق بر سهم";
        let diffColorClass = "text-[#1B3B2B]";
        let progressBgClass = "bg-[#1B3B2B]";

        if (diff > 0) {
          diffText = `+${diff.toLocaleString('fa-IR')} تومان فراتر از سهم`;
          diffColorClass = "text-rose-600";
          progressBgClass = "bg-rose-500";
        } else if (diff < 0) {
          diffText = `${Math.abs(diff).toLocaleString('fa-IR')} تومان صرفه‌جویی`;
          diffColorClass = "text-emerald-700";
          progressBgClass = "bg-[#1B3B2B]";
        } else {
          progressBgClass = "bg-[#D4AF37]";
        }

        const pct = Math.min(100, Math.round((catEstimatedTotal / catTargetBudget) * 100));

        return {
          ...cat,
          targetBudget: catTargetBudget,
          itemsCount: catItems.length,
          estimatedTotal: catEstimatedTotal,
          paidTotal: catPaidTotal,
          diffText,
          diffColorClass,
          progressBgClass,
          pct
        };
      });

      container.innerHTML = `
        <div class="budget-tracker budget-module space-y-8">

          <!-- TOP HERO SUMMARY BANNER (HIGH-DENSITY GLASSMORPHISM STATS CARDS) -->
          <div class="bg-[#0F172A]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 border border-[#D4AF37]/50 shadow-2xl text-white">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D4AF37]/30 pb-4">
              <div class="space-y-1">
                <span class="text-xs font-bold text-[#D4AF37] bg-[#1E293B] px-3 py-1 rounded-full border border-[#D4AF37]/30 flex items-center gap-1.5 w-fit">
                  <i data-lucide="calculator" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                  <span>داشبورد مالی هوشمند و بودجه‌ریز عروسی</span>
                </span>
                <h3 class="text-xl font-black text-white mt-1">مدیریت اعتبارات، پرداختی‌ها و انحراف مالی</h3>
              </div>

              <div class="flex items-center gap-2">
                <span class="px-3.5 py-1.5 rounded-full text-xs font-black ${healthBadgeClass}">
                  وضعیت بودجه: ${healthBadgeText}
                </span>
                <button onclick="openBudgetItemModal()" class="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-amber-400 hover:to-amber-200 text-[#0F251A] font-black px-4 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer">
                  <i data-lucide="plus" class="w-4 h-4 text-[#0F251A]"></i>
                  <span>+ ثبت هزینه جدید</span>
                </button>
              </div>
            </div>

            <!-- 4 HIGH-DENSITY GLASSMORPHISM FINANCIAL STATS CARDS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="budget-tracker-card bg-[#1E293B]/80 p-4 rounded-2xl border border-[#D4AF37]/40 shadow-inner space-y-1.5">
                <span class="text-xs font-bold text-amber-200/90 flex items-center justify-between">
                  <span>💵 بودجه کل مصوب:</span>
                  <button onclick="const b = prompt('سقف جدید بودجه کل (تومان):', '${totalBudget}'); if(b) updateTotalBudgetCap(b);" class="text-[10px] text-[#D4AF37] hover:underline font-bold cursor-pointer">تغییر سقف</button>
                </span>
                <span class="block text-xl sm:text-2xl font-black text-[#D4AF37]">${totalBudget.toLocaleString('fa-IR')} <span class="text-xs font-normal text-amber-200">تومان</span></span>
              </div>

              <div class="budget-tracker-card bg-[#1E293B]/80 p-4 rounded-2xl border border-[#D4AF37]/40 shadow-inner space-y-1.5">
                <span class="text-xs font-bold text-emerald-300">✅ پرداخت‌شده (تسویه + بیعانه):</span>
                <span class="block text-xl sm:text-2xl font-black text-emerald-400">${totalPaid.toLocaleString('fa-IR')} <span class="text-xs font-normal text-emerald-200">تومان</span></span>
              </div>

              <div class="budget-tracker-card bg-[#1E293B]/80 p-4 rounded-2xl border border-[#D4AF37]/40 shadow-inner space-y-1.5">
                <span class="text-xs font-bold ${remaining < 0 ? 'text-rose-300' : 'text-amber-200'}">📊 انحراف / باقیمانده تا سقف:</span>
                <span class="block text-xl sm:text-2xl font-black ${remaining < 0 ? 'text-rose-400' : 'text-amber-300'}">${remaining.toLocaleString('fa-IR')} <span class="text-xs font-normal text-slate-300">تومان</span></span>
              </div>

              <div class="budget-tracker-card bg-[#1E293B]/80 p-4 rounded-2xl border border-[#D4AF37]/40 shadow-inner space-y-1.5">
                <span class="text-xs font-bold text-slate-300">💡 ارزیابی سلامت مالی:</span>
                <span class="block text-xs font-bold text-slate-200 leading-relaxed">${healthDesc}</span>
              </div>
            </div>
          </div>

          <!-- GLASSMORPHISM OVERALL DONUT CHART SUMMARY & CATEGORY ALLOCATION WIDGET -->
          <div class="bg-[#0F172A]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 border border-[#D4AF37]/50 shadow-2xl text-white">
            <div class="flex justify-between items-center border-b border-[#D4AF37]/30 pb-3">
              <h4 class="text-base font-black text-[#D4AF37] flex items-center gap-2">
                <i data-lucide="pie-chart" class="w-5 h-5 text-[#D4AF37]"></i>
                <span>نمودار دونات شیشه‌ای سهم هزینه‌ها (Glassmorphism Donut Charts)</span>
              </h4>
              <span class="text-xs text-amber-200/80 font-bold bg-[#1E293B] px-3 py-1 rounded-full border border-[#D4AF37]/30">تحلیل بصری تخصیص بودجه</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <!-- Center Donut Chart Ring -->
              <div class="lg:col-span-5 flex flex-col items-center justify-center relative p-4">
                <div class="w-48 h-48 rounded-full relative flex items-center justify-center p-3 shadow-[0_0_30px_rgba(212,175,55,0.25)] border border-[#D4AF37]/40" style="background: conic-gradient(#D4AF37 0% 45%, #10B981 45% 60%, #F59E0B 60% 75%, #3B82F6 75% 85%, #EC4899 85% 93%, #8B5CF6 93% 100%);">
                  <!-- Inner Glass Center Circle -->
                  <div class="w-32 h-32 rounded-full bg-[#0F172A] border border-[#D4AF37]/50 shadow-inner flex flex-col items-center justify-center text-center p-2 backdrop-blur-md">
                    <span class="text-[10px] font-bold text-amber-200">مجموع برآورد</span>
                    <span class="text-sm font-black text-[#D4AF37]">${totalEstimatedSpent.toLocaleString('fa-IR')}</span>
                    <span class="text-[9px] text-slate-300">تومان</span>
                  </div>
                </div>
              </div>

              <!-- Category Allocation Legend Badges -->
              <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold">
                ${categoryCalculations.map((cat, idx) => {
                  const colors = ['#D4AF37', '#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#8B5CF6'];
                  const color = colors[idx % colors.length];
                  return `
                    <div class="p-3 rounded-2xl bg-[#1E293B]/80 border border-[#D4AF37]/30 space-y-1 hover:border-[#D4AF37] transition-all">
                      <div class="flex items-center gap-1.5 text-[11px] text-slate-200 font-extrabold">
                        <span class="w-2.5 h-2.5 rounded-full inline-block shadow-xs shrink-0" style="background-color: ${color};"></span>
                        <span class="truncate">${cat.name}</span>
                      </div>
                      <div class="flex justify-between items-center text-[10.5px]">
                        <span class="text-[#D4AF37] font-black">${Math.round(cat.defaultSplit * 100)}٪</span>
                        <span class="text-slate-300 font-normal">${cat.estimatedTotal.toLocaleString('fa-IR')}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- INSTALLMENT SCHEDULE & PAYMENT TIMELINE WITH COLOR-CODED STATUS -->
          <div class="bg-[#0F172A]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-5 border border-[#D4AF37]/50 shadow-2xl text-white">
            <div class="flex justify-between items-center border-b border-[#D4AF37]/30 pb-3">
              <h4 class="text-base font-black text-[#D4AF37] flex items-center gap-2">
                <i data-lucide="calendar-clock" class="w-5 h-5 text-[#D4AF37]"></i>
                <span>زمان‌بندی اقساط و هشدارهای پرداخت (Installment Timeline)</span>
              </h4>
              <span class="text-xs text-amber-200/80 font-bold bg-[#1E293B] px-3 py-1 rounded-full border border-[#D4AF37]/30">هشدارهای رنگی سررسید</span>
            </div>

            <div class="overflow-x-auto custom-scrollbar">
              <table class="w-full text-right text-xs font-bold border-collapse">
                <thead>
                  <tr class="border-b border-[#D4AF37]/30 bg-[#1E293B] text-[#D4AF37]">
                    <th class="p-3">عنوان خدمت / تامین‌کننده</th>
                    <th class="p-3 text-center">مرحله پرداخت</th>
                    <th class="p-3 text-left">مبلغ (تومان)</th>
                    <th class="p-3 text-center">تاریخ سررسید</th>
                    <th class="p-3 text-center">وضعیت پرداخت</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#D4AF37]/20">
                  <tr class="hover:bg-[#1E293B]/40 transition-colors">
                    <td class="p-3 font-extrabold text-white">تالار و باغ پذیرایی (مشیرالممالک)</td>
                    <td class="p-3 text-center text-slate-300">قسط اول (بیعانه ۲۵٪)</td>
                    <td class="p-3 text-left font-mono text-emerald-400">۱۰,۰۰۰,۰۰۰</td>
                    <td class="p-3 text-center text-amber-200">۱۴۰۳/۰۵/۰۱</td>
                    <td class="p-3 text-center">
                      <span class="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 text-[10px]">پرداخت‌شده 🟢</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-[#1E293B]/40 transition-colors">
                    <td class="p-3 font-extrabold text-white">آتلیه و فیلمبرداری VIP</td>
                    <td class="p-3 text-center text-slate-300">قسط دوم (۳۵٪)</td>
                    <td class="p-3 text-left font-mono text-amber-300">۱۵,۷۵۰,۰۰۰</td>
                    <td class="p-3 text-center text-amber-200">۱۴۰۳/۰۶/۰۵</td>
                    <td class="p-3 text-center">
                      <span class="px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/50 text-[10px]">نزدیک سررسید 🟡</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-[#1E293B]/40 transition-colors">
                    <td class="p-3 font-extrabold text-white">مزون و لباس عروس</td>
                    <td class="p-3 text-center text-slate-300">تسویه نهایی (۴۰٪)</td>
                    <td class="p-3 text-left font-mono text-rose-300">۱۹,۲۵۰,۰۰۰</td>
                    <td class="p-3 text-center text-rose-300">۱۴۰۳/۰۶/۱۴</td>
                    <td class="p-3 text-center">
                      <span class="px-2.5 py-1 rounded-full bg-rose-950/80 text-rose-300 border border-rose-500/50 text-[10px]">سررسیدشده 🔴</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- DUAL BUDGET SPLIT (GROOM VS BRIDE VS SHARED) -->
          <div class="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div class="flex justify-between items-center border-b border-accent pb-3">
              <h4 class="text-base font-black text-[#111827] flex items-center gap-2">
                <i data-lucide="scale" class="w-5 h-5 text-[#D4AF37]"></i>
                <span>تفکیک و سهم‌بندی ۲ طرفه بودجه (خانواده داماد / خانواده عروس / مشترک)</span>
              </h4>
              <span class="text-xs text-secondary font-bold">سازگار با رسوم ازدواج در یزد</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-1.5">
                <div class="flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span class="flex items-center gap-1.5">
                    <i data-lucide="user-check" class="w-4 h-4 text-emerald-700"></i>
                    <span>سهم خانواده داماد</span>
                  </span>
                  <span class="text-[10px] bg-emerald-200/80 text-emerald-800 px-2 py-0.5 rounded-full">اصلی</span>
                </div>
                <span class="block text-lg font-black text-emerald-900">${groomTotal.toLocaleString('fa-IR')} <span class="text-xs font-normal">تومان</span></span>
                <span class="block text-[10px] text-emerald-700 font-medium">شامل تالار، شام، ماشین، آرایشگاه عروس و...</span>
              </div>

              <div class="p-4 bg-rose-50/60 border border-rose-200 rounded-2xl space-y-1.5">
                <div class="flex items-center justify-between text-xs font-bold text-rose-900">
                  <span class="flex items-center gap-1.5">
                    <i data-lucide="heart" class="w-4 h-4 text-rose-600"></i>
                    <span>سهم خانواده عروس</span>
                  </span>
                  <span class="text-[10px] bg-rose-200/80 text-rose-800 px-2 py-0.5 rounded-full">جهیزیه & عقد</span>
                </div>
                <span class="block text-lg font-black text-rose-900">${brideTotal.toLocaleString('fa-IR')} <span class="text-xs font-normal">تومان</span></span>
                <span class="block text-[10px] text-rose-700 font-medium">شامل گل‌آرایی، سفره عقد، آرایشگاه داماد و...</span>
              </div>

              <div class="p-4 bg-amber-50/60 border border-amber-200 rounded-2xl space-y-1.5">
                <div class="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span class="flex items-center gap-1.5">
                    <i data-lucide="users" class="w-4 h-4 text-amber-700"></i>
                    <span>مخارج مشترک (۵۰ / ۵۰)</span>
                  </span>
                  <span class="text-[10px] bg-amber-200/80 text-amber-800 px-2 py-0.5 rounded-full">توافقی</span>
                </div>
                <span class="block text-lg font-black text-amber-900">${sharedTotal.toLocaleString('fa-IR')} <span class="text-xs font-normal">تومان</span></span>
                <span class="block text-[10px] text-amber-700 font-medium">شامل پکیج عکاسی، فیلم‌برداری و گروه موزیک</span>
              </div>
            </div>
          </div>

          <!-- DYNAMIC SPLIT ACROSS 6 CORE CATEGORIES WITH COLOR CODED PROGRESS -->
          <div class="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div class="flex justify-between items-center border-b border-accent pb-3">
              <h4 class="text-base font-black text-[#111827] flex items-center gap-2">
                <i data-lucide="pie-chart" class="w-5 h-5 text-primary"></i>
                <span>تفکیک درصدی و مقایسه سهم سقف بودجه با هزینه‌های واقعی</span>
              </h4>
              <span class="text-xs text-secondary font-bold">تقسیم ۶ گانه استاندارد</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${categoryCalculations.map(cat => `
                <div class="p-4 bg-[#FCFCFA] border border-accent/80 rounded-2xl space-y-3 hover:border-[#D4AF37] transition-all shadow-2xs hover:shadow-md">
                  <div class="flex justify-between items-center text-xs font-bold">
                    <span class="text-[#111827] font-black flex items-center gap-1.5">
                      <i data-lucide="folder" class="w-4 h-4 text-[#D4AF37]"></i>
                      <span>${cat.name} (${Math.round(cat.defaultSplit * 100)}٪)</span>
                    </span>
                    <span class="${cat.diffColorClass} font-black text-[11px]">${cat.diffText}</span>
                  </div>

                  <!-- High-Contrast Visual Dual Bar Meter: Estimated vs Paid -->
                  <div class="space-y-1.5 bg-[#0F172A] p-3 rounded-xl border border-[#D4AF37]/30 text-white">
                    <div class="space-y-1">
                      <div class="flex justify-between text-[10.5px] font-bold">
                        <span class="text-amber-200">برآورد: ${cat.estimatedTotal.toLocaleString('fa-IR')} تومان</span>
                        <span class="text-slate-400">سهم: ${cat.targetBudget.toLocaleString('fa-IR')} تومان</span>
                      </div>
                      <div class="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden border border-[#D4AF37]/30">
                        <div class="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] h-full rounded-full transition-all duration-500" style="width: ${cat.pct}%;"></div>
                      </div>
                    </div>

                    <div class="space-y-1 pt-1 border-t border-slate-700/60">
                      <div class="flex justify-between text-[10.5px] font-bold">
                        <span class="text-emerald-400">واقعی (پرداختی): ${cat.paidTotal.toLocaleString('fa-IR')} تومان</span>
                        <span class="text-emerald-400">${cat.estimatedTotal > 0 ? Math.round((cat.paidTotal / cat.estimatedTotal) * 100) : 0}٪ پرداخت شد</span>
                      </div>
                      <div class="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden border border-emerald-500/30">
                        <div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: ${cat.estimatedTotal > 0 ? Math.min(100, Math.round((cat.paidTotal / cat.estimatedTotal) * 100)) : 0}%;"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Sleek Recommendation Trigger Bridge -->
                  <div class="pt-1 flex items-center justify-between gap-2">
                    <span class="text-[10px] text-slate-500 font-bold">${cat.itemsCount} قلم ثبت‌شده</span>
                    <button type="button" onclick="filterVendorsByCategoryTitle('${cat.name}')" class="text-[11px] font-extrabold text-[#0F251A] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-amber-400 hover:to-amber-200 px-3.5 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95">
                      <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-[#0F251A]"></i>
                      <span>پیشنهاد تامین‌کنندگان این حوزه ↗</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- LINE ITEMS CRUD TABLE -->
          <div class="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-accent pb-4">
              <div>
                <h4 class="text-base font-black text-[#111827] flex items-center gap-2">
                  <i data-lucide="list-checks" class="w-5 h-5 text-primary"></i>
                  <span>ریز هزینه‌ها و اقلام ثبت‌شده (Line Items CRUD)</span>
                </h4>
                <p class="text-xs text-secondary mt-0.5">مدیریت وضعیت پرداخت، بیعانه‌ها و تسویه‌حساب با تامین‌کنندگان یزد</p>
              </div>

              <button onclick="openBudgetItemModal()" class="bg-primary hover:bg-emerald-900 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer">
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>افزودن قلم جدید</span>
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-right text-xs">
                <thead class="bg-bgCustom text-secondary border-b border-accent font-bold">
                  <tr>
                    <th class="p-3">عنوان خدمت / قلم هزینه</th>
                    <th class="p-3">دسته‌بندی</th>
                    <th class="p-3 text-center">سهم‌بندی</th>
                    <th class="p-3 text-center">برآورد (تومان)</th>
                    <th class="p-3 text-center">پرداختی (تومان)</th>
                    <th class="p-3 text-center">وضعیت پرداخت</th>
                    <th class="p-3 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-accent/60 font-medium text-graphite">
                  ${budgetPlannerState.lineItems.length === 0 ? `
                    <tr><td colspan="6" class="p-6 text-center text-secondary font-bold">هنوز هیچ قلم هزینه‌ای ثبت نشده است.</td></tr>
                  ` : budgetPlannerState.lineItems.map(item => {
                    let statusBadge = '<span class="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md text-[10px] font-bold">پرداخت نشده</span>';
                    if (item.status === 'FULL') {
                      statusBadge = '<span class="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md text-[10px] font-bold">پرداخت کامل (تسویه)</span>';
                    } else if (item.status === 'ADVANCE') {
                      statusBadge = '<span class="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md text-[10px] font-bold">پیش‌پرداخت (بیعانه)</span>';
                    }

                    let partyBadge = '<span class="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">سهم داماد</span>';
                    if (item.party === 'bride') {
                      partyBadge = '<span class="bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded-full text-[10px] font-bold">سهم عروس</span>';
                    } else if (item.party === 'shared') {
                      partyBadge = '<span class="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full text-[10px] font-bold">مشترک</span>';
                    }

                    return `
                      <tr class="hover:bg-slate-50/90 transition-colors border-b border-accent/40">
                        <td class="p-3.5">
                          <span class="font-bold text-[#111827] block">${item.title}</span>
                          ${item.notes ? `<span class="text-[10px] text-secondary block mt-0.5">${item.notes}</span>` : ''}
                        </td>
                        <td class="p-3.5 text-secondary font-bold text-[11px]">${item.category}</td>
                        <td class="p-3.5 text-center">${partyBadge}</td>
                        <td class="p-3.5 text-center font-black text-graphite">${Number(item.estimated).toLocaleString('fa-IR')}</td>
                        <td class="p-3.5 text-center font-black text-primary">${Number(item.paid).toLocaleString('fa-IR')}</td>
                        <td class="p-3.5 text-center">${statusBadge}</td>
                        <td class="p-3.5 text-center">
                          <div class="flex items-center justify-center gap-1.5">
                            <button onclick="openBudgetItemModal('${item.id}')" title="ویرایش قلم" class="p-1.5 rounded-xl bg-slate-100 hover:bg-[#D4AF37]/20 border border-accent hover:border-[#D4AF37] text-graphite transition-all cursor-pointer">
                              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                            </button>
                            <button onclick="deleteBudgetItem('${item.id}')" title="حذف قلم" class="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 transition-all cursor-pointer">
                              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      `;

      lucide.createIcons();
    }

    function renderPlannerOffersTab() {
      const container = document.getElementById('planner-offers-list');
      if (!container) return;

      container.innerHTML = '';

      if (!inquiries || inquiries.length === 0) {
        container.innerHTML = `
          <div class="p-8 text-center text-secondary space-y-3 bg-bgCustom rounded-3xl border border-accent">
            <i data-lucide="message-square" class="w-10 h-10 mx-auto text-secondary/50"></i>
            <p class="text-xs font-bold text-graphite">هنوز هیچ استعلام قیمتی ارسال نکرده‌اید.</p>
            <button onclick="switchTab('directory')" class="bg-primary text-white font-bold px-4 py-2 rounded-xl text-xs">مشاهده دایرکتوری و ارسال استعلام</button>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      inquiries.forEach((inq, idx) => {
        const currentStatus = inq.status || 'pending';
        const card = document.createElement('div');
        card.className = "bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-2xl p-5 space-y-3 shadow-lg transition-all text-white";
        card.innerHTML = `
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <span class="text-xs font-bold text-slate-400 block">درخواست ثبت شده برای:</span>
              <h4 class="text-base font-black text-[#F7F5F0]">${inq.vendorName || 'تامین‌کننده مجلل یزد'}</h4>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full ${
              currentStatus === 'booked' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' :
              currentStatus === 'replied' ? 'bg-blue-950/80 text-blue-300 border border-blue-500/40' :
              currentStatus === 'cancelled' ? 'bg-rose-950/80 text-rose-400 border border-rose-500/40' :
              'bg-[#07090E] text-[#C5A059] border border-[#C5A059]/40'
            }">
              ${currentStatus === 'booked' ? 'رزرو نهایی شد 🎉' : currentStatus === 'replied' ? 'پاسخ و پیشنهاد جدید دریافت شد 📩' : currentStatus === 'cancelled' ? 'لغو شده' : 'در انتظار بررسی تامین‌کننده ⏳'}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium bg-[#07090E] p-3 rounded-xl border border-[#C5A059]/20">
            <span><strong class="text-[#C5A059]">تاریخ مراسم:</strong> ${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
            <span><strong class="text-[#C5A059]">تعداد مهمانان:</strong> ${inq.guests || 200} نفر</span>
            <span><strong class="text-[#C5A059]">پکیج درخواستی:</strong> ${inq.package || inq.service || 'پکیج اصلی'}</span>
          </div>

          ${inq.replyMsg ? `
            <div class="bg-[#07090E] border border-[#C5A059]/40 rounded-xl p-3.5 space-y-1.5 text-xs text-white">
              <span class="font-bold text-[#C5A059] flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-[#C5A059]"></i>
                <span>پاسخ و کاتالوگ ارسالی تامین‌کننده:</span>
              </span>
              <p class="font-medium leading-relaxed text-slate-200">${inq.replyMsg}</p>
            </div>
          ` : ''}

          <div class="flex justify-end gap-2 pt-1">
            <button onclick="closeExpandModal(); if (document.getElementById('tab-messages')) { switchTab('messages'); } else { window.location.href = 'index.html?tab=messages'; }" class="bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] font-black px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-md cursor-pointer">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>گفتگو و مشاهده پیش‌فاکتور</span>
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    function filterChecklistTasksByStatus(status) {
      activeChecklistStatusFilter = status;
      renderChecklistTimeframeButtons();
      renderChecklistTimeline();
    }

    function renderChecklistTimeline() {
      const container = document.getElementById('checklist-timeline-container');
      if (!container) return;

      if (typeof renderSmartCountdownWidget === 'function') {
        renderSmartCountdownWidget(currentSmartChecklistPhase || 0);
      }

      // Update progress & stats
      const total = staticChecklist.length;
      const completedCount = staticChecklist.filter(t => t.completed).length;
      const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

      const progressBar = document.getElementById('checklist-progress-bar');
      const progressText = document.getElementById('checklist-progress-text');
      const completedCountText = document.getElementById('checklist-completed-count-text');
      const urgentCountText = document.getElementById('checklist-urgent-count-text');
      const countdownText = document.getElementById('checklist-countdown-text');
      const plannerCountdownBadge = document.getElementById('planner-countdown-badge');

      if (progressBar) {
        progressBar.style.width = percent + '%';
        progressBar.className = "bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] h-full transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)]";
      }
      if (progressText) progressText.innerText = `${percent}٪ آمادگی کامل کارهای عروسی`;
      if (completedCountText) completedCountText.innerText = `${completedCount} از ${total} مورد تکمیلی`;

      const urgentUncompleted = staticChecklist.filter(t => (t.priority === 'urgent' || t.isUrgent) && !t.completed).length;
      if (urgentCountText) urgentCountText.innerText = `${urgentUncompleted} کار ضروری باقی‌مانده`;
      if (countdownText) countdownText.innerText = `${weddingDateDaysRemaining} روز باقی‌مانده`;
      if (plannerCountdownBadge) plannerCountdownBadge.innerText = `${weddingDateDaysRemaining} روز تا مراسم عروسی شما`;

      container.innerHTML = '';

      let itemsToRender = activeChecklistFilter === "همه"
        ? staticChecklist
        : staticChecklist.filter(t => t.timeframe === activeChecklistFilter || t.category === activeChecklistFilter);

      if (activeChecklistStatusFilter === 'COMPLETED') {
        itemsToRender = itemsToRender.filter(t => t.completed);
      } else if (activeChecklistStatusFilter === 'UNCOMPLETED') {
        itemsToRender = itemsToRender.filter(t => !t.completed);
      }

      if (itemsToRender.length === 0) {
        container.innerHTML = '<div class="p-8 text-center text-secondary text-xs font-semibold bg-bgCustom rounded-2xl border border-accent">هیچ اقدامی برای این فیلتر زمان‌بندی یا وضعیت یافت نشد.</div>';
        return;
      }

      itemsToRender.forEach(t => {
        const attachedVendor = t.attachedVendorId ? vendors.find(v => v.id === t.attachedVendorId) : null;

        let priorityBadge = '';
        if (t.priority === 'urgent' || t.isUrgent) {
          priorityBadge = `<span class="bg-rose-950/80 text-rose-300 border border-rose-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full">🔴 ضروری</span>`;
        } else if (t.priority === 'suggested') {
          priorityBadge = `<span class="bg-amber-950/80 text-[#C5A059] border border-[#C5A059]/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full">🟡 معمولی</span>`;
        } else {
          priorityBadge = `<span class="bg-[#07090E] text-slate-300 border border-[#C5A059]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">اختیاری</span>`;
        }

        let assignedBadge = `<span class="bg-[#07090E] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">💍 مشترک</span>`;
        if (t.assignedTo === 'bride') {
          assignedBadge = `<span class="bg-[#07090E] text-rose-300 border border-rose-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">👰‍♀️ عروس</span>`;
        } else if (t.assignedTo === 'groom') {
          assignedBadge = `<span class="bg-[#07090E] text-blue-300 border border-blue-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">🤵‍♂️ داماد</span>`;
        }

        let vendorStatusBadge = '';
        if (t.vendorStatus === 'quote_received') {
          vendorStatusBadge = `<span class="bg-blue-950/80 text-blue-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-500/40">پیش‌فاکتور دریافت شد</span>`;
        } else if (t.vendorStatus === 'deposit_paid') {
          vendorStatusBadge = `<span class="bg-amber-950/80 text-[#C5A059] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">بیعانه پرداخت شد</span>`;
        } else if (t.vendorStatus === 'finalized') {
          vendorStatusBadge = `<span class="bg-emerald-950/80 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">نهایی شد</span>`;
        }

        const div = document.createElement('div');
        div.className = `p-5 rounded-2xl border transition-all space-y-4 shadow-lg text-white ${
          t.completed ? 'bg-[#07090E]/80 border-emerald-500/40' : 'bg-[#141A28] border-[#C5A059]/30 hover:border-[#C5A059]/60'
        }`;

        div.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C5A059]/20 pb-3">
            <div class="flex items-center gap-3">
              <button type="button" onclick="toggleChecklistTask('${t.id}')" class="w-6 h-6 rounded-lg border-2 flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                t.completed ? 'bg-[#C5A059] border-[#C5A059] text-[#07090E] shadow-[0_0_10px_#C5A059]' : 'border-[#C5A059]/40 text-transparent hover:border-[#C5A059]'
              }">
                ✓
              </button>
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm sm:text-base font-bold ${t.completed ? 'task-completed-strikethrough' : 'text-[#F7F5F0]'}">${t.title}</span>
                  ${priorityBadge}
                  ${assignedBadge}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-start sm:self-auto">
              <span class="text-[11px] font-semibold text-slate-300 bg-[#07090E] px-3 py-1 rounded-lg border border-[#C5A059]/30">${t.dueDate || t.timeframe}</span>
              <span class="text-[11px] font-bold text-[#C5A059] bg-[#07090E] px-3 py-1 rounded-lg border border-[#C5A059]/30">${t.timeframe || t.category}</span>
            </div>
          </div>

          <!-- SELECTED VENDOR SECTION -->
          <div class="bg-[#07090E] p-3.5 rounded-xl border border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            ${attachedVendor ? `
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl border border-[#C5A059]/40 overflow-hidden bg-[#07090E] shrink-0 shadow-md">
                  <img src="${attachedVendor.image}" alt="${attachedVendor.name}" class="w-full h-full object-cover">
                </div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-bold text-[#F7F5F0]">${attachedVendor.name}</span>
                    <span class="text-[10px] text-slate-400 font-medium">(${attachedVendor.category})</span>
                    ${vendorStatusBadge}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[11px] font-bold text-[#C5A059]">${attachedVendor.priceRange}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 self-end sm:self-auto">
                <button onclick="openVendorSelectModal('${t.id}')" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                  تغییر یا ویرایش وضعیت
                </button>
                <button onclick="detachVendorFromTask('${t.id}')" class="text-rose-400 hover:text-rose-300 text-[11px] font-bold px-2 py-1 cursor-pointer">
                  حذف
                </button>
              </div>
            ` : `
              <div class="flex items-center gap-2 text-xs font-medium text-slate-300">
                <i data-lucide="store" class="w-4 h-4 text-[#C5A059] shrink-0"></i>
                <span>هنوز تأمین‌کننده‌ای به این اقدام متصل نشده است.</span>
              </div>
              <button onclick="openVendorSelectModal('${t.id}')" class="bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] text-xs font-black px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-md self-start sm:self-auto cursor-pointer">
                <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i>
                <span>+ اتصال تأمین‌کننده از دایرکتوری</span>
              </button>
            `}
          </div>
        `;
        container.appendChild(div);
      });

      lucide.createIcons();
    }

    function openVendorSelectModal(taskId) {
      const task = staticChecklist.find(t => t.id === taskId);
      if (!task) return;

      document.getElementById('vselect-task-id').value = task.id;
      document.getElementById('vselect-task-title').innerText = `اتصال تأمین‌کننده به اقدام: ${task.title}`;

      const vendorSelect = document.getElementById('vselect-vendor-id');
      if (vendorSelect) {
        vendorSelect.innerHTML = '';
        vendors.forEach(v => {
          const opt = document.createElement('option');
          opt.value = v.id;
          opt.innerText = `${v.name} (${v.category}) - ${v.priceRange}`;
          if (task.attachedVendorId === v.id) opt.selected = true;
          vendorSelect.appendChild(opt);
        });
      }

      const statusSelect = document.getElementById('vselect-status');
      if (statusSelect) {
        statusSelect.value = task.vendorStatus || 'quote_received';
      }

      document.getElementById('vendor-select-modal').classList.remove('hidden');
    }

    function closeVendorSelectModal() {
      document.getElementById('vendor-select-modal').classList.add('hidden');
    }

    function handleSaveVendorAttachment(e) {
      e.preventDefault();
      const taskId = document.getElementById('vselect-task-id').value;
      const vendorId = parseInt(document.getElementById('vselect-vendor-id').value);
      const status = document.getElementById('vselect-status').value;

      const task = staticChecklist.find(t => t.id === taskId);
      if (task) {
        task.attachedVendorId = vendorId;
        task.vendorStatus = status;
        renderChecklistTimeline();
      }

      closeVendorSelectModal();
    }

    function detachVendorFromTask(taskId) {
      const task = staticChecklist.find(t => t.id === taskId);
      if (task) {
        task.attachedVendorId = null;
        task.vendorStatus = null;
        renderChecklistTimeline();
      }
    }

    function toggleNewTaskModal(show) {
      const modal = document.getElementById('new-task-modal');
      if (modal) {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
      }
    }

    function handleAddNewTaskSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('task-title').value.trim();
      const timeframe = document.getElementById('task-cat').value;
      const priority = document.getElementById('task-priority').value;
      const dueDate = document.getElementById('task-date').value.trim() || 'به زودی';

      if (!title) return;

      staticChecklist.push({
        id: 'chk-' + Date.now(),
        title,
        timeframe,
        priority,
        category: 'عمومی',
        completed: false,
        dueDate,
        attachedVendorId: null,
        vendorStatus: null
      });

      renderChecklistTimeline();
      toggleNewTaskModal(false);
      document.getElementById('task-title').value = '';
      document.getElementById('task-date').value = '';
    }

    function renderAdminPendingApps() {
      const tbody = document.getElementById('admin-pending-apps-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      const pending = staticVendorApplications.filter(a => a.status === 'pending');
      if (pending.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="p-6 text-center text-slate-400 font-bold bg-[#1E293B]">هیچ درخواست معلقی برای اعتبارسنجی وجود ندارد.</td></tr>';
        return;
      }

      pending.forEach(app => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#1E293B]/80 transition-colors border-b border-[#D4AF37]/20";
        tr.innerHTML = `
          <td class="p-3.5 font-black text-white">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold">
                <i data-lucide="building-2" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="block text-xs font-black text-white">${app.name}</span>
                <span class="text-[10px] text-amber-200/90 font-medium">📍 ${app.city}</span>
              </div>
            </div>
          </td>
          <td class="p-3.5 text-[#D4AF37] font-bold text-xs">${app.category}</td>
          <td class="p-3.5 font-bold text-slate-200 text-xs">
            <span class="block">${app.manager}</span>
            <span class="text-[10px] font-mono dir-ltr text-slate-400">${app.phone}</span>
          </td>
          <td class="p-3.5 text-center">
            <span class="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full">
              📄 مدرک جواز کسب ارسال‌شده
            </span>
          </td>
          <td class="p-3.5 text-center">
            <div class="flex items-center justify-center gap-2">
              <button onclick="approveVendorAppStatic('${app.id}')" class="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs px-3.5 py-1.5 rounded-xl transition-all shadow-md flex items-center gap-1 cursor-pointer">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                <span>تایید تامین‌کننده</span>
              </button>
              <button onclick="rejectVendorAppStatic('${app.id}')" class="bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-500/40 font-bold text-xs px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer">
                <i data-lucide="x-circle" class="w-3.5 h-3.5"></i>
                <span>رد درخواست</span>
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      if (window.lucide) lucide.createIcons();
    }

    function approveVendorAppStatic(appId) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      const app = staticVendorApplications.find(a => a.id === appId);
      if (app) {
        app.status = 'approved';
        vendors.push({
          id: vendors.length + 1,
          name: app.name,
          category: app.category,
          city: app.city,
          rating: 5.0,
          verified: true,
          capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
          priceRange: "استعلام قیمت",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
        });
        showToast(`مجموعه ${app.name} با موفقیت تایید و به لیست اصلی متصل شد.`, 'success');
        renderVendors(vendors);
        renderAdminPendingApps();
        renderAdminTable();
      }
    }

    function rejectVendorAppStatic(appId) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      const app = staticVendorApplications.find(a => a.id === appId);
      if (app) {
        app.status = 'rejected';
        showToast(`درخواست مجموعه ${app.name} رد شد.`, 'info');
        renderAdminPendingApps();
      }
    }

    function renderAdminVendorTrafficTable() {
      const tbody = document.getElementById('admin-vendor-traffic-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      let totalViewsSum = 0;
      let totalLeadsSum = 0;

      vendors.forEach(v => {
        const views = v.viewsCount || Math.floor(Math.random() * 800) + 200;
        const leads = v.leadsCount || Math.floor(views * 0.15) + 5;
        const convRate = Math.min(((leads / views) * 100), 100).toFixed(1);

        totalViewsSum += views;
        totalLeadsSum += leads;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite flex items-center gap-2">
            <img src="${v.image || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=100&q=80'}" class="w-7 h-7 rounded-lg object-cover">
            <span>${v.name}</span>
          </td>
          <td class="p-3 text-secondary">${v.category}</td>
          <td class="p-3 font-black text-graphite">${views.toLocaleString('fa-IR')}</td>
          <td class="p-3 font-black text-emerald-700">${leads.toLocaleString('fa-IR')}</td>
          <td class="p-3">
            <span class="inline-block bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-lg text-[11px] font-bold">
              ${convRate}٪
            </span>
          </td>
        `;
        tbody.appendChild(tr);
      });

      const totalViewsEl = document.getElementById('admin-analytics-total-views');
      if (totalViewsEl) totalViewsEl.textContent = (totalViewsSum * 2).toLocaleString('fa-IR');

      const vendorViewsEl = document.getElementById('admin-analytics-vendor-views');
      if (vendorViewsEl) vendorViewsEl.textContent = totalViewsSum.toLocaleString('fa-IR');

      const leadsCountEl = document.getElementById('admin-analytics-leads-count');
      if (leadsCountEl) leadsCountEl.textContent = totalLeadsSum.toLocaleString('fa-IR');
    }

    function renderAdminSystemLogs() {
      const container = document.getElementById('admin-system-logs-container');
      if (!container) return;

      const mockLogs = [
        `[${new Date().toLocaleTimeString('fa-IR')}] SYSTEM: Syncing categories across Top Nav & Directory Sidebar completed.`,
        `[${new Date(Date.now() - 120000).toLocaleTimeString('fa-IR')}] VENDOR_APP: Vendor 'آتلیه تخصصی کویر' submitted registration documents for review.`,
        `[${new Date(Date.now() - 360000).toLocaleTimeString('fa-IR')}] INQUIRY: New inquiry submitted for 'باغ تالار مشیرالممالک' by couple #4082.`,
        `[${new Date(Date.now() - 720000).toLocaleTimeString('fa-IR')}] SUBSCRIPTION: Vendor 'سالن زیبایی ترمه' renewed Gold VIP subscription plan.`
      ];

      container.innerHTML = mockLogs.map(log => `<div>> ${log}</div>`).join('');
    }

    function updateVendorSubscriptionTier(vendorId, newTier) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      vendors = vendors.map(v => {
        if (v.id === vendorId) {
          const maxPhotosMap = { FREE: 3, BRONZE: 6, SILVER: 12, GOLD_VIP: 24 };
          return {
            ...v,
            tier: newTier,
            maxPortfolioUploads: maxPhotosMap[newTier] || 6,
            vipShowcaseBadge: newTier === 'GOLD_VIP',
            directPhoneVisible: newTier !== 'FREE'
          };
        }
        return v;
      });
      showToast(`سطح اشتراک تامین‌کننده بروزرسانی گردید (${newTier})`, 'success');
      renderAdminTable();
      renderVendors(vendors);
    }

    let adminReviewsState = [
      { id: 101, author: 'علی و سارا', vendorName: 'باغ تالار مشیرالممالک', rating: 5, comment: 'همه چیز فوق‌العاده بود، برخورد پرسنل عالی و کیفیت غذا بی‌نظیر.', verifiedCouple: true, status: 'APPROVED' },
      { id: 102, author: 'محمدرضا و مریم', vendorName: 'آتلیه تخصصی کویر', rating: 5, comment: 'عکاسی فرمالیته در کویر باکیفیت و بدون نقص انجام شد.', verifiedCouple: true, status: 'APPROVED' },
      { id: 103, author: 'مهدی و زهرا', vendorName: 'سالن زیبایی ترمه', rating: 4, comment: 'میکاپ عروس عالی بود اما کمی تاخیر داشتند.', verifiedCouple: false, status: 'PENDING' }
    ];

    let adminUsersState = [
      { id: 1, name: 'علی ابراهیمی', phone: '۰۹۱۳۱۵۱۰۰۱۱', weddingDate: '۱۴۰۳/۰۸/۲۵', blocked: false },
      { id: 2, name: 'مریم دهقانی', phone: '۰۹۱۳۲۵۲۰۰۲۲', weddingDate: '۱۴۰۳/۰۹/۱۰', blocked: false },
      { id: 3, name: 'رضا زارع', phone: '۰۹۱۳۳۵۳۰۰۳۳', weddingDate: '۱۴۰۳/۱۰/۱۵', blocked: false }
    ];

    function toggleAdminReviewStatus(reviewId) {
      adminReviewsState = adminReviewsState.map(r => {
        if (r.id === reviewId) {
          const nextStatus = r.status === 'APPROVED' ? 'REJECTED' : 'APPROVED';
          return { ...r, status: nextStatus };
        }
        return r;
      });
      showToast('وضعیت انتشار دیدگاه بروزرسانی شد', 'info');
      renderAdminReviewsModerationTable();
    }

    function toggleAdminReviewVerifiedBadge(reviewId) {
      adminReviewsState = adminReviewsState.map(r => r.id === reviewId ? { ...r, verifiedCouple: !r.verifiedCouple } : r);
      showToast('نشان "زوج تاییدشده" بروزرسانی گردید', 'success');
      renderAdminReviewsModerationTable();
    }

    function renderAdminReviewsModerationTable() {
      const tbody = document.getElementById('admin-reviews-moderation-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      adminReviewsState.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${r.author}</td>
          <td class="p-3 text-secondary">${r.vendorName}</td>
          <td class="p-3 max-w-xs">
            <div class="flex items-center gap-1 text-amber-500 font-bold mb-0.5">
              <span>★ ${r.rating}</span>
            </div>
            <p class="text-[11px] text-graphite line-clamp-2">${r.comment}</p>
          </td>
          <td class="p-3">
            <button onclick="toggleAdminReviewVerifiedBadge(${r.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
              r.verifiedCouple ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-secondary border border-slate-200'
            }">
              <i data-lucide="check-circle" class="w-3 h-3"></i>
              <span>${r.verifiedCouple ? 'زوج تاییدشده' : 'کاربر عادی'}</span>
            </button>
          </td>
          <td class="p-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
              r.status === 'APPROVED' ? 'bg-primary/10 text-primary' : r.status === 'PENDING' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
            }">
              ${r.status === 'APPROVED' ? 'منتشرشده' : r.status === 'PENDING' ? 'در انتظار تایید' : 'ردشده'}
            </span>
          </td>
          <td class="p-3 text-center">
            <button onclick="toggleAdminReviewStatus(${r.id})" class="text-xs font-bold underline ${r.status === 'APPROVED' ? 'text-rose-600' : 'text-primary'}">
              ${r.status === 'APPROVED' ? 'عدم تایید / عدم انتشار' : 'تایید و انتشار عمومی'}
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    function toggleAdminUserBlockStatus(userId) {
      if (currentUserRole !== 'admin') {
        showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
        return;
      }
      adminUsersState = adminUsersState.map(u => u.id === userId ? { ...u, blocked: !u.blocked } : u);
      showToast('وضعیت دسترسی حساب کاربر بروزرسانی گردید', 'warning');
      renderAdminUserAccountsTable();
    }

    function renderAdminUserAccountsTable() {
      const tbody = document.getElementById('admin-user-accounts-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      adminUsersState.forEach(u => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${u.name}</td>
          <td class="p-3 text-graphite" dir="ltr">${u.phone}</td>
          <td class="p-3 text-secondary font-medium">${u.weddingDate}</td>
          <td class="p-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
              u.blocked ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }">
              ${u.blocked ? 'حساب مسدودشده' : 'فعال و تاییدشده'}
            </span>
          </td>
          <td class="p-3 text-center">
            <button onclick="toggleAdminUserBlockStatus(${u.id})" class="text-xs font-bold underline ${u.blocked ? 'text-emerald-700' : 'text-rose-600'}">
              ${u.blocked ? 'رفع مسدودی حساب' : 'مسدودسازی حساب'}
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function renderAdminTable() {
      const tbody = document.getElementById('admin-vendor-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      vendors.forEach(v => {
        const currentTier = v.tier || (v.id === 1 ? 'GOLD_VIP' : 'SILVER');
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${v.name}</td>
          <td class="p-3 text-secondary">${v.category}</td>
          <td class="p-3">
            <select onchange="updateVendorSubscriptionTier(${v.id}, this.value)" class="bg-slate-50 border border-accent rounded-xl p-1.5 text-xs font-bold text-graphite focus:outline-none focus:border-primary">
              <option value="FREE" ${currentTier === 'FREE' ? 'selected' : ''}>برنز رایگان (Free)</option>
              <option value="BRONZE" ${currentTier === 'BRONZE' ? 'selected' : ''}>برنز اقتصادی (Bronze)</option>
              <option value="SILVER" ${currentTier === 'SILVER' ? 'selected' : ''}>نقره‌ای استاندارد (Silver)</option>
              <option value="GOLD_VIP" ${currentTier === 'GOLD_VIP' ? 'selected' : ''}>طلایی ویژه (Gold VIP)</option>
            </select>
          </td>
          <td class="p-3 text-graphite" dir="ltr">۰۹۱۲۰۰۰۰۰۰۰</td>
          <td class="p-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
              v.verified ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-secondary'
            }">
              ${v.verified ? 'تایید شده' : 'در انتظار بررسی'}
            </span>
          </td>
          <td class="p-3 text-center">
            <button onclick="toggleVendorVerification(${v.id})" class="text-xs font-bold underline ${v.verified ? 'text-rose-600' : 'text-primary'}">
              ${v.verified ? 'لغو تاییدیه' : 'اعطای تاییدیه رسمی'}
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });

      renderAdminVendorTrafficTable();
      renderAdminSystemLogs();
      renderAdminReviewsModerationTable();
      renderAdminUserAccountsTable();
      renderAdminSupportInquiriesTable();
      if (typeof window.renderAdminSubscriptionPlansTable === 'function') {
        window.renderAdminSubscriptionPlansTable();
      }
    }

    function toggleVendorVerification(id) {
      vendors = vendors.map(v => v.id === id ? { ...v, verified: !v.verified } : v);
      renderVendors(vendors);
      renderAdminTable();
    }

    function renderInquiries() {
      const container = document.getElementById('inquiry-list');
      if (!container) return;
      container.innerHTML = '';

      if (inquiries.length === 0) {
        container.innerHTML = `
          <div class="p-6 text-center text-secondary text-xs font-bold bg-bgCustom rounded-2xl border border-accent">
            هنوز هیچ استعلامی ثبت نشده است.
          </div>
        `;
        return;
      }

      inquiries.forEach((inq, idx) => {
        const card = document.createElement('div');
        card.className = "p-4 bg-bgCustom rounded-2xl border border-accent space-y-3 shadow-xs hover:border-primary/40 transition-all";
        const currentStatus = inq.status || 'pending';

        card.innerHTML = `
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div class="flex items-center gap-2">
              <span class="font-black text-graphite text-sm">${inq.name || 'زوج محترم'}</span>
              <span class="text-secondary text-xs font-medium dir-ltr">(${inq.phone || '۰۹۱۲۰۰۰۰۰۰۰'})</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                currentStatus === 'booked' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                currentStatus === 'replied' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                currentStatus === 'cancelled' ? 'bg-rose-100 text-rose-800 border border-rose-300' :
                'bg-amber-100 text-amber-800 border border-amber-300'
              }">
                ${currentStatus === 'booked' ? 'رزرو نهایی' : currentStatus === 'replied' ? 'پاسخ داده شده' : currentStatus === 'cancelled' ? 'لغو شده' : 'جدید / در انتظار پاسخ'}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium bg-[#161C2B] p-2.5 rounded-xl border border-[#C5A059]/30">
            <span><strong class="text-white">تاریخ درخواست:</strong> ${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
            <span><strong class="text-white">تعداد مهمان:</strong> ${inq.guests || 200} نفر</span>
            <span><strong class="text-white">خدمت/پکیج:</strong> ${inq.service || inq.package || 'خدمات عمومی'}</span>
          </div>

          ${(inq.customAnswers && inq.customAnswers.length) ? `
            <div class="bg-amber-950/40 p-3 rounded-xl border border-amber-500/30 text-xs font-bold text-amber-200 space-y-1">
              <span class="block text-[11px] font-black text-[#D4AF37] border-b border-amber-500/30 pb-1">📋 پاسخ‌های سوالات اختصاصی فرم استعلام:</span>
              <div class="space-y-0.5 pt-0.5">
                ${inq.customAnswers.map(a => `<div class="flex items-center gap-1.5"><span class="text-amber-300 font-bold">• ${a.label}:</span> <span class="text-white font-black">${a.value}</span></div>`).join('')}
              </div>
            </div>
          ` : ''}

          <p class="text-xs text-slate-200 bg-[#161C2B] p-3 rounded-xl border border-[#C5A059]/30 leading-relaxed">${inq.details || 'توضیحات و نیازمندی‌های اختصاصی زوج ثبت شده در سامانه عروسی تو.'}</p>

          <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#C5A059]/30 text-xs">
            <div class="flex items-center gap-2">
              <label class="text-slate-300 font-bold text-[11px]">تغییر وضعیت:</label>
              <select onchange="updateInquiryStatus(${idx}, this.value)" class="bg-[#161C2B] border border-[#C5A059]/30 rounded-xl px-2.5 py-1 text-xs font-bold text-white focus:outline-none focus:border-[#D4AF37]">
                <option value="pending" ${currentStatus === 'pending' ? 'selected' : ''}>جدید (در انتظار)</option>
                <option value="replied" ${currentStatus === 'replied' ? 'selected' : ''}>پاسخ داده شده</option>
                <option value="booked" ${currentStatus === 'booked' ? 'selected' : ''}>رزرو نهایی شد</option>
                <option value="cancelled" ${currentStatus === 'cancelled' ? 'selected' : ''}>لغو شد</option>
              </select>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="openInquiryReplyModal(${idx})" class="bg-primary hover:bg-emerald-900 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1">
                <i data-lucide="send" class="w-3.5 h-3.5"></i> پاسخ سریع
              </button>
              <button onclick="openPreInvoiceModal()" class="bg-bgCustom hover:bg-slate-100 border border-accent text-graphite px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                پیش‌فاکتور
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
      lucide.createIcons();
    }

    function openInquiryReplyModal(targetIdx, fallbackName) {
      let targetIndex = -1;
      if (typeof targetIdx === 'number') {
        targetIndex = targetIdx;
      } else if (typeof targetIdx === 'string') {
        targetIndex = inquiries.findIndex((i, index) => i.id === targetIdx || index.toString() === targetIdx);
        if (targetIndex === -1 && !isNaN(parseInt(targetIdx))) {
          targetIndex = parseInt(targetIdx);
        }
      }

      const inq = inquiries[targetIndex] || inquiries[0];
      if (!inq) return;
      const modal = document.getElementById('modal-inquiry-reply');
      if (!modal) return;
      document.getElementById('inquiry-reply-id').value = targetIndex >= 0 ? targetIndex : 0;
      document.getElementById('reply-couple-name').innerText = (inq && inq.name) ? inq.name : (fallbackName || 'زوج محترم');
      document.getElementById('reply-inquiry-details').innerText = `تاریخ مراسم: ${inq ? (inq.date || 'نامشخص') : 'نامشخص'} | مهمانان: ${inq ? (inq.guests || '۲۰۰') : '۲۰۰'} نفر | خدمت: ${inq ? (inq.service || 'عمومی') : 'عمومی'}`;
      document.getElementById('reply-status-select').value = 'replied';
      document.getElementById('reply-message-text').value = `سلام ${(inq && inq.name) ? inq.name : 'گرامی'} عزیز! درخواست استعلام شما برای تاریخ ${(inq && inq.date) ? inq.date : 'مربوطه'} بررسی شد. پکیج و کاتالوگ قیمت همراه با تخفیف ویژه پلتفرم عروسی تو برای شما فعال گردید.`;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeInquiryReplyModal() {
      const modal = document.getElementById('modal-inquiry-reply');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function sendInquiryReply() {
      const idx = parseInt(document.getElementById('inquiry-reply-id').value);
      const newStatus = document.getElementById('reply-status-select').value;
      const replyMsg = document.getElementById('reply-message-text').value;

      if (inquiries[idx]) {
        inquiries[idx].status = newStatus;
        inquiries[idx].replyMsg = replyMsg;
        showToast('پاسخ و پیشنهاد قیمت با موفقیت برای زوج ارسال شد.', 'success');
        renderInquiries();
        closeInquiryReplyModal();
        if (typeof renderPlannerOffersTab === 'function') renderPlannerOffersTab();
      }
    }

    function updateInquiryStatus(index, newStatus) {
      if (inquiries[index]) {
        inquiries[index].status = newStatus;
        showToast('وضعیت استعلام به روزرسانی شد.', 'success');
        renderInquiries();
        if (typeof renderPlannerOffersTab === 'function') renderPlannerOffersTab();
      }
    }

    function exportInquiriesCsv() {
      showToast('خروجی کامل لیدها و استعلام‌ها در قالب CSV آماده دانلود گردید.', 'info');
    }

    function runAiAllocation() {
      const budget = parseInt(document.getElementById('ai-budget-input').value) || 300000000;
      document.getElementById('ai-res-venue').innerText = Math.round(budget * 0.40).toLocaleString('fa-IR') + ' تومان';
      document.getElementById('ai-res-photo').innerText = Math.round(budget * 0.20).toLocaleString('fa-IR') + ' تومان';
      document.getElementById('ai-res-attire').innerText = Math.round(budget * 0.15).toLocaleString('fa-IR') + ' تومان';
    }

    function toggleVendorModalStatic(show) {
      const modal = document.getElementById('vendor-register-modal') || document.getElementById('vendor-onboarding-modal');
      if (modal) {
        if (show) {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          const catSelect = document.getElementById('v-cat');
          if (catSelect && typeof categoryGroups !== 'undefined' && categoryGroups.length > 0) {
            catSelect.innerHTML = categoryGroups.map(cg => `<option value="${cg.title}">${cg.title}</option>`).join('');
          }
        } else {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      } else if (show) {
        openAuthModal('vendor');
      }
    }

    function handleVendorModalSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('v-name').value.trim();
      const category = document.getElementById('v-cat').value;
      const city = document.getElementById('v-city').value.trim();
      const manager = document.getElementById('v-manager').value.trim();
      const phone = document.getElementById('v-phone').value.trim();

      if (!name || !phone) return;

      staticVendorApplications.push({
        id: 'app-' + Date.now(),
        name,
        category,
        city,
        manager,
        phone,
        status: 'pending'
      });

      toggleVendorModalStatic(false);
      showToast('درخواست عضویت شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.', 'success');
      renderAdminPendingApps();
    }

    function setInquiryBudgetPill(rangeVal, customVal) {
      const rangeSel = document.getElementById('inquiry-budget-range');
      const customInp = document.getElementById('inquiry-budget-custom');
      if (rangeSel && rangeVal) {
        rangeSel.value = rangeVal;
      }
      if (customInp && customVal) {
        customInp.value = customVal;
      }
    }


    // STANDALONE VENDOR PROFILE (& MODAL) CONTROLLERS

    let currentProfileVendorId = 1;
    let currentProfileMonth = 'اردیبهشت';

    function loadVendorProfile(vendorId) {
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
      const vendor = vendors.find(v => v.id === vId) || vendors[0];
      if (!vendor) return;

      currentProfileVendorId = vendor.id;

      // Populate Text & Image Header
      const nameEl = document.getElementById('vp-name');
      const coverEl = document.getElementById('vp-cover');
      const logoEl = document.getElementById('vp-logo');
      const catEl = document.getElementById('vp-category');
      const districtEl = document.getElementById('vp-district');
      const ratingEl = document.getElementById('vp-rating');

      if (nameEl) nameEl.innerText = vendor.name;
      if (coverEl) coverEl.src = vendor.image || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80";
      if (logoEl) logoEl.src = vendor.image || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80";
      if (catEl) catEl.innerText = vendor.category;
      if (districtEl) districtEl.innerText = `📍 ${vendor.province || 'استان یزد'}، ${vendor.district || 'صفائیه'}`;
      const reviewCount = Array.isArray(vendor.reviews) ? vendor.reviews.length : (vendor.reviews || 38);
      if (ratingEl) ratingEl.innerHTML = `<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i> ${vendor.rating || '۴.۹'} (${reviewCount} دیدگاه)`;

      // Populate Info Bar
      const hoursEl = document.getElementById('vp-hours');
      const phoneLinkEl = document.getElementById('vp-phone-link');
      const instaEl = document.getElementById('vp-instagram');
      const addressEl = document.getElementById('vp-address');
      const mapLabelEl = document.getElementById('vp-map-label');

      if (hoursEl) hoursEl.innerText = vendor.hours || "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰";
      if (phoneLinkEl) {
        phoneLinkEl.href = `tel:${vendor.phone || '03538240000'}`;
        phoneLinkEl.innerText = vendor.phone || "۰۳۵-۳۸۲۴۰۰۰۰";
      }
      if (instaEl) {
        instaEl.href = `https://instagram.com/${(vendor.instagram || 'yazd_wedding').replace('@', '')}`;
        instaEl.innerText = vendor.instagram || "@yazd_wedding_studio";
      }
      if (addressEl) addressEl.innerText = vendor.address || `یزد، ${vendor.district || 'صفائیه'}، انتهای خیابان تیمسار فلاحی`;
      if (mapLabelEl) mapLabelEl.innerText = `موقعیت دقیق ${vendor.name} در یزد`;

      // About Text
      const aboutEl = document.getElementById('vp-about-text');
      if (aboutEl) {
        aboutEl.innerText = vendor.about || `${vendor.name} یکی از برترین و معتبرترین مجموعه‌های ارائه‌دهنده خدمات ${vendor.category} در استان یزد است که با بهره‌گیری از کادر مجرب، تجهیزات حرفه‌ای و تضمین کیفیت عروسی‌تو آماده پذیرایی و ارائه خدمات به زوجین عزیز می‌باشد.`;
      }

      // Portfolio Lightbox Gallery Grid
      const galleryGrid = document.getElementById('vp-gallery-grid');
      const galleryCounter = document.getElementById('vp-gallery-counter');
      const portfolio = vendor.portfolio || [
        { url: vendor.image, tag: "نمونه‌کار اصلی" },
        { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", tag: "دکور و سالن" },
        { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", tag: "سفره عقد" },
        { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80", tag: "فضای باز" },
        { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", tag: "پذیرایی VIP" },
        { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", tag: "نورپردازی" }
      ];

      if (galleryCounter) galleryCounter.innerText = `${portfolio.length} تصویر آلبوم`;
      if (galleryGrid) {
        galleryGrid.innerHTML = portfolio.map(item => `
          <div class="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-accent/80 relative group cursor-pointer shadow-2xs" onclick="openLightbox('${item.url}')">
            <img src="${item.url}" alt="${item.tag || 'تصویر نمونه کار'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
              <i data-lucide="zoom-in" class="w-4 h-4"></i>
              <span>بزرگ‌نمایی</span>
            </div>
            <span class="absolute top-2.5 right-2.5 bg-black/60 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-lg backdrop-blur-md">${item.tag || 'تصویر'}</span>
          </div>
        `).join('');
      }

      if (typeof renderVendorPortfolioTimeline === 'function') {
        renderVendorPortfolioTimeline(vendor, 0);
      }

      // Packages
      const packagesContainer = document.getElementById('vp-packages-container');
      if (packagesContainer) {
        const pkgs = vendor.packages || [
          { name: "پکیج برنز (اقتصادی)", price: vendor.priceRange || "۴۵,۰۰۰,۰۰۰ تومان", features: ["منوی کلاسیک تک‌پرس", "سیستم صوتی پایه", "اتاق عقد مجزا", "پارکینگ مهمانان"] },
          { name: "پکیج نقره‌ای (استاندارد)", price: "۷۵,۰۰۰,۰۰۰ تومان", popular: true, features: ["منوی دیس‌پرس ۳ مدل غذا", "سیستم نورپردازی dynamic", "سفره عقد سنتی & گل‌آرایی", "پذیرایی شیرینی حاج خلیفه"] },
          { name: "پکیج طلایی (VIP)", price: "۱۲۰,۰۰۰,۰۰۰ تومان", features: ["منوی سلف‌سرویس کامل VIP", "نورپردازی حرفه‌ای & استیج LED", "گروه موزیک زنده اختصاصی", "تشریفات ورودی & آتش‌بازی"] }
        ];

        packagesContainer.innerHTML = pkgs.map(pkg => `
          <div class="bg-[#161C2B] border ${pkg.popular ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-md' : 'border-[#C5A059]/30'} rounded-2xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden text-white">
            ${pkg.popular ? `<span class="absolute top-3 left-3 bg-[#D4AF37] text-[#07090E] text-[10px] font-black px-2.5 py-0.5 rounded-full">پرطرفدارترین</span>` : ''}
            <div class="space-y-3">
              <h3 class="font-bold text-sm text-[#D4AF37]">${pkg.name}</h3>
              <div class="text-lg font-black text-white border-b border-[#C5A059]/30 pb-3">
                ${pkg.price}
              </div>
              <ul class="space-y-2 text-xs text-slate-200">
                ${(pkg.features || pkg.items || ["ارائه تمامی خدمات اصلی با بالاترین کیفیت"]).map(f => `<li class="flex items-center gap-2">✅ <span>${f}</span></li>`).join('')}
              </ul>
            </div>
            <button onclick="openInquiryModal(${vendor.id}, '${vendor.name}')" class="w-full bg-[#1B3B2B] hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="message-square-quote" class="w-4 h-4 text-[#D4AF37]"></i>
              <span>انتخاب پکیج & استعلام</span>
            </button>
          </div>
        `).join('');
      }

      // Reviews
      const reviewsContainer = document.getElementById('vp-reviews-container');
      if (reviewsContainer) {
        const reviews = [
          { author: "علی و سارا (عروسی مهر ۱۴۰۳)", rating: 5, date: "۲ هفته پیش", comment: "کیفیت خدمات و برخورد پرسنل عالی بود. پذیرایی به بهترین نحو انجام شد و همگی مهمانان رضایت کامل داشتند." },
          { author: "محمد و مریم (مراسم عقد)", rating: 5, date: "۱ ماه پیش", comment: "از پلتفرم عروسی‌تو رزرو کردیم و قیمت دقیقاً مطابق با تخفیف اولیه اعلامی بود. کاملاً پیشنهاد می‌کنم." }
        ];

        reviewsContainer.innerHTML = reviews.map(r => `
          <div class="bg-bgCustom/80 border border-accent/70 rounded-2xl p-4 space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="font-bold text-xs text-[#1B3B2B]">${r.author}</span>
                <span class="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">زوج تاییدشده</span>
              </div>
              <span class="text-[10px] text-secondary font-medium">${r.date}</span>
            </div>
            <p class="text-xs text-graphite/80 leading-relaxed">${r.comment}</p>
          </div>
        `).join('');
      }

      renderProfileCalendar('اردیبهشت');
      switchTab('vendor-profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    function renderProfileCalendar(monthName) {
      currentProfileMonth = monthName || 'اردیبهشت';
      const grid = document.getElementById('vp-calendar-grid');
      if (!grid) return;

      document.querySelectorAll('.vp-month-pill').forEach(btn => {
        if (btn.innerText.includes(currentProfileMonth)) {
          btn.className = "vp-month-pill active px-3 py-1 rounded-xl bg-[#1B3B2B] text-white transition-all cursor-pointer font-bold";
        } else {
          btn.className = "vp-month-pill px-3 py-1 rounded-xl bg-gray-100 hover:bg-[#1B3B2B] hover:text-white transition-all cursor-pointer text-gray-700";
        }
      });

      grid.innerHTML = '';

      // Render Day Name Headers
      const dayHeaders = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
      dayHeaders.forEach(h => {
        const hEl = document.createElement('div');
        hEl.className = "font-bold text-[10px] text-secondary py-1";
        hEl.innerText = h;
        grid.appendChild(hEl);
      });

      const bookedDays = [3, 8, 12, 15, 19, 24, 27];
      const vipDays = [5, 14, 28];

      for (let day = 1; day <= 30; day++) {
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        const isBooked = bookedDays.includes(day);
        const isVip = vipDays.includes(day);

        let bgClass = "bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100 cursor-pointer";
        let statusTitle = "آزاد جهت استعلام و رزرو";

        if (isBooked) {
          bgClass = "bg-rose-50 text-rose-400 border-rose-200 cursor-not-allowed opacity-60";
          statusTitle = "رزرو شده";
        } else if (isVip) {
          bgClass = "bg-amber-100 text-amber-900 border-amber-300 font-black cursor-pointer hover:bg-amber-200";
          statusTitle = "روز ویژه VIP با تخفیف";
        }

        dayBtn.className = `p-2 rounded-xl border text-xs font-bold transition-all ${bgClass}`;
        dayBtn.title = `روز ${day} ${currentProfileMonth} - ${statusTitle}`;
        dayBtn.innerText = day;

        dayBtn.onclick = function() {
          if (isBooked) {
            showToast(`روز ${day} ${currentProfileMonth} توسط زوج دیگری رزرو شده است.`, 'warning');
          } else {
            const vendor = vendors.find(v => v.id === currentProfileVendorId) || vendors[0];
            showToast(`تاریخ ${day} ${currentProfileMonth} جهت استعلام قیمت انتخاب گردید.`, 'success');
            openInquiryModal(vendor.id, vendor.name, `${day} ${currentProfileMonth} ۱۴۰۴`);
          }
        };

        grid.appendChild(dayBtn);
      }
    }

    function triggerProfileInquiry() {
      const vendor = vendors.find(v => v.id === currentProfileVendorId) || vendors[0];
      openInquiryModal(vendor.id, vendor.name);
    }

    function triggerProfileChat() {
      const vendor = vendors.find(v => v.id === currentProfileVendorId) || vendors[0];
      closeVendorDetailModal();
      openInquiryModal(vendor.id, vendor.name);
    }

    function shareVendorProfile() {
      const vendor = vendors.find(v => v.id === currentProfileVendorId) || vendors[0];
      if (navigator.share) {
        navigator.share({
          title: vendor.name,
          text: `مشاهده مشخصات و پکیج‌های ${vendor.name} در پلتفرم عروسی‌تو`,
          url: window.location.href
        }).catch(() => {});
      } else {
        showToast('لینک پروفایل این تامین‌کننده در حافظه کپی شد.', 'info');
      }
    }

    function toggleFavoriteCurrentVendor(e) {
      if (e) e.stopPropagation();
      toggleFavoriteVendor(currentProfileVendorId, e);
    }

    function toggleProfileReviewForm() {
      const drawer = document.getElementById('vp-review-form-drawer');
      if (drawer) drawer.classList.toggle('hidden');
    }

    function handleProfileReviewSubmit(e) {
      e.preventDefault();
      const author = document.getElementById('vp-review-author')?.value.trim();
      const rating = document.getElementById('vp-review-rating')?.value || '5';
      const comment = document.getElementById('vp-review-comment')?.value.trim();

      if (!author || !comment) return;

      const container = document.getElementById('vp-reviews-container');
      if (container) {
        const card = document.createElement('div');
        card.className = "bg-bgCustom/80 border border-accent/70 rounded-2xl p-4 space-y-2 animate-fadeIn";
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-bold text-xs text-[#1B3B2B]">${author}</span>
              <span class="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">جدید</span>
            </div>
            <span class="text-[10px] text-amber-600 font-bold">⭐️ ${rating} از ۵</span>
          </div>
          <p class="text-xs text-graphite/80 leading-relaxed">${comment}</p>
        `;
        container.prepend(card);
      }

      toggleProfileReviewForm();
      showToast('دیدگاه شما با موفقیت ثبت شد و پس از تایید مدیریت نمایش داده خواهد شد.', 'success');
      document.getElementById('vp-review-form')?.reset();
    }

    function handleSelectCalendarDay(dayNum, isAvailable) {
      if (!isAvailable) {
        showToast('این تاریخ توسط زوج دیگری رزرو شده است. لطفاً روز دیگری را انتخاب فرمایید.', 'warning');
      } else {
        showToast(`تاریخ ${dayNum} اردیبهشت جهت استعلام و رزرو اولیه انتخاب گردید.`, 'success');
      }
    }

    let currentModalVendor = null;

window.trackRecentlyViewedVendor = function(vendorId) {
  let vId = parseInt(vendorId, 10);
  if (isNaN(vId)) return;

  try {
    let recent = [];
    const stored = sessionStorage.getItem('aroosi_recently_viewed_db');
    if (stored) recent = JSON.parse(stored);
    recent = recent.filter(id => id !== vId);
    recent.unshift(vId);
    recent = recent.slice(0, 10);
    sessionStorage.setItem('aroosi_recently_viewed_db', JSON.stringify(recent));
    if (typeof renderRecentlyViewedVendors === 'function') renderRecentlyViewedVendors();
  } catch (err) {
    console.error('Failed tracking recently viewed vendor:', err);
  }
};

window.clearRecentlyViewedVendors = function() {
  try {
    sessionStorage.removeItem('aroosi_recently_viewed_db');
    renderRecentlyViewedVendors();
  } catch (err) {}
};

window.renderRecentlyViewedVendors = function() {
  const section = document.getElementById('recently-viewed-section');
  const container = document.getElementById('recently-viewed-container');
  if (!section || !container) return;

  try {
    const stored = sessionStorage.getItem('aroosi_recently_viewed_db');
    const recentIds = stored ? JSON.parse(stored) : [];

    if (!recentIds || recentIds.length === 0) {
      section.classList.add('hidden');
      return;
    }

    section.classList.remove('hidden');
    const vendorList = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? vendors : [];
    const recentVendors = recentIds.map(id => vendorList.find(v => v.id === id)).filter(Boolean);

    container.innerHTML = recentVendors.map(v => `
      <div onclick="openVendorDetailModal(${v.id})" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] rounded-2xl p-2.5 flex items-center gap-3 shrink-0 cursor-pointer hover:scale-102 transition-all shadow-md w-60">
        <img src="${v.image}" alt="${v.name}" class="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]">
        <div class="text-right overflow-hidden">
          <h4 class="text-xs font-black text-white truncate">${v.name}</h4>
          <span class="text-[10px] text-amber-200/80 block truncate">${v.category} • ${v.district || 'یزد'}</span>
          <span class="text-[10px] text-[#D4AF37] font-bold block">${v.price || 'تماس بگیرید'}</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  } catch (err) {
    console.error('Error rendering recently viewed vendors:', err);
  }
};

    window.openVendorDetailModal = function openVendorDetailModal(vendorId) {
      let vId = vendorId || 1;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
  trackRecentlyViewedVendor(vId);

      // Save complete directory state & scroll position before navigating
      try {
        const searchInput = document.getElementById('directory-instant-search');
        const guestSlider = document.getElementById('directory-guest-price-slider');
        const state = {
          scrollPosition: window.scrollY || 0,
          searchQuery: searchInput ? searchInput.value : '',
          activeCategory: window.currentSelectedCategory || 'all',
          selectedDistrict: typeof selectedYazdDistrict !== 'undefined' ? selectedYazdDistrict : 'all',
          viewMode: window.currentDirectoryViewMode || 'grid',
          guestCount: guestSlider ? guestSlider.value : 250
        };
        sessionStorage.setItem('aroosi_directory_state', JSON.stringify(state));
      } catch (e) {}

      window.location.href = `vendor-detail.html?id=${vId}`;
    };

    window.restoreDirectoryState = function restoreDirectoryState() {
      try {
        const saved = sessionStorage.getItem('aroosi_directory_state');
        if (!saved) return;
        const state = JSON.parse(saved);

        if (state.viewMode && typeof toggleDirectoryMainView === 'function') {
          toggleDirectoryMainView(state.viewMode);
        }

        if (state.searchQuery) {
          const searchInput = document.getElementById('directory-instant-search');
          if (searchInput) {
            searchInput.value = state.searchQuery;
          }
        }

        if (state.guestCount) {
          const guestSlider = document.getElementById('directory-guest-price-slider');
          if (guestSlider) {
            guestSlider.value = state.guestCount;
            if (typeof updateDirectoryGuestPriceEstimator === 'function') {
              updateDirectoryGuestPriceEstimator(state.guestCount);
            }
          }
        }

        if (state.activeCategory && state.activeCategory !== 'all') {
          if (typeof filterVendorsByCategoryTitle === 'function') {
            filterVendorsByCategoryTitle(state.activeCategory);
          }
        } else if (typeof filterVendors === 'function') {
          filterVendors();
        }

        if (state.scrollPosition) {
          setTimeout(() => {
            window.scrollTo({ top: state.scrollPosition, behavior: 'auto' });
          }, 100);
        }
      } catch (e) {}
    };

    window.closeVendorDetailModal = function closeVendorDetailModal() {};

    function initStandaloneVendorShowroom() {
      if (!window.location.pathname.includes('vendor-detail.html')) return;
      const params = new URLSearchParams(window.location.search);
      const vendorId = parseInt(params.get('id')) || 1;
      const currentVendors = typeof window.getCentralizedVendors === 'function' ? window.getCentralizedVendors() : vendors;
      const vendor = currentVendors.find(v => v.id === vendorId) || currentVendors[0];
      if (!vendor) return;

      currentModalVendor = vendor;

      const coverEl = document.getElementById('vdm-cover-hero');
      const titleEl = document.getElementById('vdm-title-page');
      const subtitleEl = document.getElementById('vdm-subtitle-page');
      const addressEl = document.getElementById('vdm-full-address-explicit');
      const aboutEl = document.getElementById('vdm-about-standalone');

      if (coverEl) coverEl.src = vendor.image || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600";
      if (titleEl) titleEl.innerText = vendor.name;
      if (subtitleEl) subtitleEl.innerText = `${vendor.category || 'خدمات عروسی'} • ${vendor.district || 'صفائیه یزد'}`;
      if (addressEl) addressEl.innerText = vendor.address ? `یزد، ${vendor.address}` : 'یزد، صفائیه، خیابان تیمسار فلاحی، هتل باغ مشیرالممالک';
      if (aboutEl) aboutEl.innerText = vendor.about || vendor.description || "توضیحات جامع و خدمات تخصصی مجموعه.";

      renderModalAvailabilityCalendar('اردیبهشت');
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initStandaloneVendorShowroom);
    } else {
      initStandaloneVendorShowroom();
    }

    function triggerPackageInquiry(packageName, packagePrice) {
      if (!currentModalVendor) return;
      const vName = currentModalVendor.name;
      const vId = currentModalVendor.id;
      const vImg = currentModalVendor.image || '';
      closeVendorDetailModal();
      openInquiryModal(vId, vName, packageName, packagePrice, 'پکیج', '', vImg);
    }

    function toggleFavoriteVendorModal() {
      if (!currentModalVendor) return;
      toggleFavoriteVendor(currentModalVendor.id);
      showToast('وضعیت علاقه‌مندی‌ها بروزرسانی شد', 'success');
    }

    function shareVendorProfile() {
      if (!currentModalVendor) return;
      if (navigator.share) {
        navigator.share({
          title: currentModalVendor.name,
          text: `مشاهده پروفایل ${currentModalVendor.name} در عروسی تو`,
          url: window.location.href
        }).catch(() => {});
      } else {
        showToast('لینک پروفایل تأمین‌کننده در حافظه کپی شد', 'info');
      }
    }

    function makeVendorCall() {
      if (!currentModalVendor) return;
      const phone = currentModalVendor.phone || '03538240000';
      window.location.href = `tel:${phone}`;
    }

    function handleModalReviewSubmit(e) {
      e.preventDefault();
      const author = document.getElementById('vdm-review-author')?.value || 'زوج عزیز';
      const rating = document.getElementById('vdm-review-rating')?.value || '5';
      const comment = document.getElementById('vdm-review-comment')?.value || '';

      const reviewsList = document.getElementById('vdm-reviews-list');
      if (reviewsList) {
        const item = document.createElement('div');
        item.className = "p-3.5 bg-[#161C2B] border border-[#C5A059]/30 rounded-xl space-y-1.5 shadow-2xs animate-fadeIn text-white";
        item.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <strong class="text-white flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-[#07090E] text-[#D4AF37] flex items-center justify-center font-bold text-[10px] border border-[#D4AF37]/40">${author.substring(0, 2)}</span>
              <span>${author}</span>
            </strong>
            <span class="text-[#D4AF37] font-bold">⭐️ ${rating}.۰</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">${comment}</p>
        `;
        reviewsList.prepend(item);
      }

      showToast('دیدگاه شما با موفقیت ثبت شد و پس از تایید مدیریت نمایش داده خواهد شد.', 'success');
      e.target.reset();
    }

    function closeVendorDetailModal() {
      const modal = document.getElementById('vendor-detail-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('active');
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    function closeVendorModal() {
      closeVendorDetailModal();
    }

    function switchModalTab(tabIndex) {
      const modal = document.getElementById('vendor-detail-modal');
      if (!modal) return;

      const tabs = modal.querySelectorAll('.vtab-btn');
      const contents = modal.querySelectorAll('.vtab-pane');

      tabs.forEach((tab, index) => {
        if (index === tabIndex) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      contents.forEach((content, index) => {
        if (index === tabIndex) {
          content.style.display = 'block';
          content.classList.add('active');
        } else {
          content.style.display = 'none';
          content.classList.remove('active');
        }
      });

      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    function switchVdmSubTab(subTab) {
      const map = { 'about': 0, 'portfolio': 1, 'packages': 2, 'calendar': 3, 'reviews': 4, 'contact': 5 };
      if (typeof map[subTab] !== 'undefined') {
        switchModalTab(map[subTab]);
      }
    }

    function renderModalAvailabilityCalendar(monthName) {
      monthName = monthName || 'اردیبهشت';
      const container = document.getElementById('vdm-calendar-container');
      if (container && (!document.getElementById('vdm-calendar-days-grid') || !container.querySelector('.vcal-month-pill'))) {
        container.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#C5A059]/30 pb-3 mb-4">
            <span class="text-xs font-bold text-amber-200">انتخاب ماه:</span>
            <div class="flex flex-wrap gap-1.5">
              <button onclick="renderModalAvailabilityCalendar('اردیبهشت')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">اردیبهشت</button>
              <button onclick="renderModalAvailabilityCalendar('خرداد')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">خرداد</button>
              <button onclick="renderModalAvailabilityCalendar('تیر')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">تیر</button>
            </div>
          </div>
          <div class="flex items-center justify-around text-xs font-semibold text-slate-300 mb-3 bg-[#141A28] py-2 rounded-xl border border-[#C5A059]/30">
            <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> آزاد</span>
            <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> استعلام</span>
            <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> رزرو شده</span>
          </div>
          <div id="vdm-calendar-days-grid" class="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-2.5"></div>
        `;
      }

      const pills = document.querySelectorAll('.vcal-month-pill');
      pills.forEach(pill => {
        if (pill.innerText.includes(monthName)) {
          pill.className = "vcal-month-pill active px-3 py-1 rounded-xl bg-[#D4AF37] text-[#0F251A] transition-all cursor-pointer font-bold text-xs shadow-md";
        } else {
          pill.className = "vcal-month-pill px-3 py-1 rounded-xl bg-[#141A28] border border-[#C5A059]/30 text-slate-200 hover:border-[#D4AF37] transition-all cursor-pointer font-bold text-xs";
        }
      });

      const grid = document.getElementById('vdm-calendar-days-grid');
      const standaloneGrid = document.getElementById('standalone-calendar-grid');
      const targetGrids = [grid, standaloneGrid].filter(Boolean);
      if (targetGrids.length === 0) return;

      const bookedDays = [4, 8, 12, 19, 25, 26];
      const pendingDays = [2, 15, 21];

      let html = '';
      for (let day = 1; day <= 30; day++) {
        let bgClass = "bg-[rgba(16,185,129,0.08)] hover:bg-[rgba(16,185,129,0.18)] border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]";
        let statusBadge = "آزاد";
        let badgeClass = "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.4)]";

        if (bookedDays.includes(day)) {
          bgClass = "bg-[rgba(225,29,72,0.08)] opacity-75 border-rose-500/40 hover:border-rose-400 shadow-[0_0_10px_rgba(225,29,72,0.15)]";
          statusBadge = "رزرو شده";
          badgeClass = "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_8px_rgba(225,29,72,0.4)]";
        } else if (pendingDays.includes(day)) {
          bgClass = "bg-[rgba(197,160,89,0.12)] hover:bg-[rgba(197,160,89,0.22)] border-[#C5A059]/50 hover:border-[#C5A059] shadow-[0_0_14px_rgba(197,160,89,0.2)]";
          statusBadge = "آفر ویژه";
          badgeClass = "bg-[#C5A059]/25 text-amber-200 border border-[#C5A059]/50 shadow-[0_0_8px_rgba(197,160,89,0.5)]";
        }

        html += `
          <div onclick="openQuoteModal(1, 'استعلام رزرو تاریخ ${day} ${monthName}')" class="p-2 sm:p-2.5 rounded-2xl border flex flex-col justify-between items-center h-16 sm:h-20 transition-all cursor-pointer hover:scale-105 active:scale-95 ${bgClass}">
            <span class="text-sm sm:text-base font-black text-white block">${day}</span>
            <span class="text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full ${badgeClass}">${statusBadge}</span>
          </div>
        `;
      }

      targetGrids.forEach(g => { g.innerHTML = html; });
    }

    function filterModalGallery(category) {
      const pills = document.querySelectorAll('.mgall-pill');
      pills.forEach(pill => {
        if (pill.innerText.includes(category) || (category === 'all' && pill.innerText.includes('همه'))) {
          pill.className = "mgall-pill active px-3 py-1.5 rounded-xl bg-[#D4AF37] text-[#07090E] font-black transition-all cursor-pointer shadow-md";
        } else {
          pill.className = "mgall-pill px-3 py-1.5 rounded-xl bg-[#161C2B] border border-[#C5A059]/30 hover:border-[#D4AF37] text-slate-200 transition-all cursor-pointer";
        }
      });
      showToast('گالری تصاویر فیلتر شد.', 'info');
    }

    function toggleModalFaq(id) {
      const el = document.getElementById(id);
      const icon = document.getElementById(id + '-icon');
      if (el) {
        if (el.classList.contains('hidden')) {
          el.classList.remove('hidden');
          if (icon) icon.innerText = '➖';
        } else {
          el.classList.add('hidden');
          if (icon) icon.innerText = '＋';
        }
      }
    }

    function toggleAddReviewForm() {
      const form = document.getElementById('vdm-add-review-form');
      if (form) form.classList.toggle('hidden');
    }

    function submitNewReview() {
      toggleAddReviewForm();
      showToast('دیدگاه شما با موفقیت ثبت شد و پس از بررسی منتشر می‌گردد.', 'success');
    }


    let currentInquiryStep = 1;

    window.switchInquiryStep = function(step) {
      currentInquiryStep = step;
      const s1 = document.getElementById('inquiry-step-1');
      const s2 = document.getElementById('inquiry-step-2');
      const s3 = document.getElementById('inquiry-step-3');

      const ind1 = document.getElementById('inquiry-step-ind-1');
      const ind2 = document.getElementById('inquiry-step-ind-2');
      const ind3 = document.getElementById('inquiry-step-ind-3');

      const prevBtn = document.getElementById('inquiry-prev-btn');
      const nextBtn = document.getElementById('inquiry-next-btn');
      const submitBtn = document.getElementById('inquiry-submit-btn');

      if (s1) {
        if (step === 1) {
          s1.classList.remove('hidden');
          s1.style.display = 'block';
        } else {
          s1.classList.add('hidden');
          s1.style.display = 'none';
        }
      }
      if (s2) {
        if (step === 2) {
          s2.classList.remove('hidden');
          s2.style.display = 'block';
        } else {
          s2.classList.add('hidden');
          s2.style.display = 'none';
        }
      }
      if (s3) {
        if (step === 3) {
          s3.classList.remove('hidden');
          s3.style.display = 'block';
        } else {
          s3.classList.add('hidden');
          s3.style.display = 'none';
        }
      }

      if (ind1) ind1.className = step === 1 ? "flex-1 text-center py-2 rounded-xl bg-[#D4AF37] text-[#0F251A] font-black text-xs shadow-[0_0_12px_rgba(212,175,55,0.4)] border border-[#D4AF37] cursor-pointer transition-all" : "flex-1 text-center py-2 rounded-xl bg-[#1E293B] text-slate-300 font-bold text-xs border border-[#D4AF37]/30 opacity-70 cursor-pointer hover:opacity-90 transition-all";
      if (ind2) ind2.className = step === 2 ? "flex-1 text-center py-2 rounded-xl bg-[#D4AF37] text-[#0F251A] font-black text-xs shadow-[0_0_12px_rgba(212,175,55,0.4)] border border-[#D4AF37] cursor-pointer transition-all" : "flex-1 text-center py-2 rounded-xl bg-[#1E293B] text-slate-300 font-bold text-xs border border-[#D4AF37]/30 opacity-70 cursor-pointer hover:opacity-90 transition-all";
      if (ind3) ind3.className = step === 3 ? "flex-1 text-center py-2 rounded-xl bg-[#D4AF37] text-[#0F251A] font-black text-xs shadow-[0_0_12px_rgba(212,175,55,0.4)] border border-[#D4AF37] cursor-pointer transition-all" : "flex-1 text-center py-2 rounded-xl bg-[#1E293B] text-slate-300 font-bold text-xs border border-[#D4AF37]/30 opacity-70 cursor-pointer hover:opacity-90 transition-all";

      if (prevBtn) prevBtn.classList.toggle('hidden', step === 1);
      if (nextBtn) nextBtn.classList.toggle('hidden', step === 3);
      if (submitBtn) submitBtn.classList.toggle('hidden', step !== 3);

      if (window.lucide) lucide.createIcons();
    };

    window.nextInquiryStep = function() {
      const dateInput = document.getElementById('inquiry-date');
      if (currentInquiryStep === 1) {
        if (dateInput && !dateInput.value.trim()) {
          dateInput.classList.add('border-rose-500');
          if (typeof showToast === 'function') showToast('لطفاً تاریخ تقریبی مراسم را وارد کنید.', 'warning');
          dateInput.focus();
          return;
        } else if (dateInput) {
          dateInput.classList.remove('border-rose-500');
        }
      }
      if (currentInquiryStep < 3) {
        switchInquiryStep(currentInquiryStep + 1);
      }
    };

    window.prevInquiryStep = function() {
      if (currentInquiryStep > 1) {
        switchInquiryStep(currentInquiryStep - 1);
      }
    };

    window.openWhatsAppInquiry = function() {
      const vendorId = parseInt(document.getElementById('inquiry-vendor-id')?.value || '1');
      const vendor = vendors.find(v => v.id === vendorId) || vendors[0];
      const vendorName = document.getElementById('modal-vendor-name')?.innerText || vendor?.name || 'تامین‌کننده';

      const eventDate = document.getElementById('inquiry-date')?.value || '';
      const guestCount = document.getElementById('inquiry-guests')?.value || '';
      const note = document.getElementById('inquiry-note')?.value || '';
      const clientName = document.getElementById('inquiry-name')?.value || '';
      const clientPhone = document.getElementById('inquiry-phone')?.value || '';
      const budgetRange = document.getElementById('inquiry-budget-range')?.value || '';
      const budgetCustom = document.getElementById('inquiry-budget-custom')?.value || '';
      const itemTitle = document.getElementById('inquiry-item-title')?.value || '';

      const checkedServices = [];
      document.querySelectorAll('#inquiry-services-checklist input[type="checkbox"]:checked').forEach(cb => {
        if (cb.value) checkedServices.push(cb.value);
      });

      let phone = vendor?.phone || '09131112233';
      let cleanPhone = phone.replace(/[^0-9]/g, '');
      if (cleanPhone.startsWith('0')) {
        cleanPhone = '98' + cleanPhone.substring(1);
      } else if (!cleanPhone.startsWith('98')) {
        cleanPhone = '98' + cleanPhone;
      }

      let message = `سلام ${vendorName} عزیز،\n`;
      message += `درخواست استعلام قیمت از طریق سامانه عروسی تو:\n\n`;
      if (clientName) message += `👤 فرستنده: ${clientName}\n`;
      if (clientPhone) message += `📞 شماره تماس: ${clientPhone}\n`;
      if (eventDate) message += `📅 تاریخ مراسم: ${eventDate}\n`;
      if (guestCount) message += `👥 تعداد مهمانان: ${guestCount} نفر\n`;
      if (itemTitle) message += `📌 پکیج / آیتم مدنظر: ${itemTitle}\n`;
      if (budgetCustom || budgetRange) message += `💰 بودجه پیشنهادی: ${budgetCustom || budgetRange}\n`;
      if (checkedServices.length > 0) message += `✨ خدمات درخواستی: ${checkedServices.join(' ، ')}\n`;
      if (note) message += `📝 توضیحات: ${note}\n`;
      message += `\nبا تشکر!`;

      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
      window.open(url, '_blank');
      if (typeof showToast === 'function') showToast('در حال انتقال به واتس‌اپ...', 'info');
    };

    function openInquiryModal(vendorId, vendorName, itemTitle, itemPrice, itemType, itemId, itemThumb) {
      if (typeof switchInquiryStep === 'function') switchInquiryStep(1);
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
      const vendor = vendors.find(v => v.id === vId) || vendors[0];
      const targetName = vendorName || (vendor ? vendor.name : "تامین‌کننده");

      const typeVal = itemType || (itemTitle ? 'پکیج' : 'عمومی');
      const idVal = itemId || '';
      const titleVal = itemTitle || '';

      const typeInput = document.getElementById('inquiry-item-type');
      const idInput = document.getElementById('inquiry-item-id');
      const titleInput = document.getElementById('inquiry-item-title');
      if (typeInput) typeInput.value = typeVal;
      if (idInput) idInput.value = idVal;
      if (titleInput) titleInput.value = titleVal;

      document.getElementById('inquiry-vendor-id').value = vendor ? vendor.id : 1;
      document.getElementById('modal-vendor-name').innerText = targetName;

      // Update Context Banner Card
      const contextBanner = document.getElementById('inquiry-context-banner');
      const contextTypeText = document.getElementById('inquiry-context-type-text');
      const contextTitle = document.getElementById('inquiry-context-title');
      const contextPrice = document.getElementById('inquiry-context-price');
      const contextSub = document.getElementById('inquiry-context-sub');
      const contextThumb = document.getElementById('inquiry-context-thumb');

      if (contextBanner) {
        if (titleVal) {
          contextBanner.classList.remove('hidden');
          if (contextTypeText) contextTypeText.innerText = `درخواست استعلام برای: ${typeVal}`;
          if (contextTitle) contextTitle.innerText = titleVal;
          if (contextPrice) contextPrice.innerText = itemPrice || '';
          if (contextSub) contextSub.innerText = vendor ? `${vendor.name} • ${vendor.category}` : targetName;

          const thumbSrc = itemThumb || (vendor ? vendor.image : '');
          if (contextThumb && thumbSrc) {
            contextThumb.src = thumbSrc;
            contextThumb.classList.remove('hidden');
          } else if (contextThumb) {
            contextThumb.classList.add('hidden');
          }
        } else {
          contextBanner.classList.add('hidden');
        }
      }

      // Category-Specific Dynamic Fields Toggling
      const cat = vendor ? (vendor.category || '') : '';

      const guestsContainer = document.getElementById('inquiry-guests-container');
      const packageTypeContainer = document.getElementById('inquiry-package-type-container');
      const dateLabel = document.getElementById('inquiry-date-label');

      const isVenueCategory = cat.includes("تالار") || cat.includes("باغ") || cat.includes("تشریفات") || cat.includes("کترینگ") || cat.includes("پذیرایی") || cat.includes("عمارت") || cat.includes("سالن پذیرایی");

      if (isVenueCategory) {
        if (guestsContainer) guestsContainer.classList.remove('hidden');
        if (packageTypeContainer) packageTypeContainer.classList.add('hidden');
        if (dateLabel) dateLabel.innerText = "تاریخ تقریبی مراسم (شمسی) *";
      } else {
        if (guestsContainer) guestsContainer.classList.add('hidden');
        if (packageTypeContainer) packageTypeContainer.classList.remove('hidden');
        if (dateLabel) dateLabel.innerText = "تاریخ تقریبی مراجعه / پرو / مراسم (شمسی) *";
      }

      const servicesContainer = document.getElementById('inquiry-services-container');

      // Check if this inquiry is for a specific Package or Idea/Journal item
      const isSpecificItemInquiry = Boolean(itemTitle || typeVal === 'پکیج' || typeVal === 'ایده/ژورنال');

      if (!isSpecificItemInquiry) {
        if (servicesContainer) servicesContainer.classList.remove('hidden');
      } else {
        // For Package or Idea specific inquiries, streamline form by hiding general services checklist
        if (servicesContainer) servicesContainer.classList.add('hidden');
      }

      // Pre-fill Package Details into Note & Budget fields if package requested
      const noteInput = document.getElementById('inquiry-note');
      const customBudgetInp = document.getElementById('inquiry-budget-custom');

      if (itemTitle) {
        if (noteInput) noteInput.value = `سلام، درخواست استعلام قیمت و مشاوره درباره ${typeVal} «${itemTitle}» را دارم.`;
        if (customBudgetInp) customBudgetInp.value = itemPrice || '';
      } else {
        if (noteInput) noteInput.value = 'سلام، درخواست استعلام قیمت و دریافت پیش‌فاکتور را دارم.';
        if (customBudgetInp) customBudgetInp.value = '';
      }

      // Dynamic Vendor Services Checklist Rendering
      const container = document.getElementById('inquiry-services-checklist');
      if (container && vendor) {
        // Fetch dynamic vendor services stored from vendor dashboard or default vendor profile
        let customServices = [];
        try {
          const storedCust = localStorage.getItem(`aroosi_vendor_services_${vendor.id}`);
          if (storedCust) customServices = JSON.parse(storedCust);
        } catch(e) {}

        let availableServices = (customServices && customServices.length > 0) ? customServices : (vendor.services || []);

        // If vendor services list is empty, supply category fallback services
        if (!availableServices || availableServices.length === 0) {
          if (cat.includes("آتلیه") || cat.includes("عکاسی")) {
            availableServices = ["عکاسی و فیلمبرداری روز عروسی", "کلیپ فرمالیته شمال / کویر", "آلبوم ایتالیایی 80x40", "تصویربرداری هلی‌شات & کرین"];
          } else if (cat.includes("سالن زیبایی") || cat.includes("میکاپ")) {
            availableServices = ["میکاپ و گریم اختصاصی عروس", "شینیون و استایل مو", "تست گریم قبلی", "میکاپ همراهان"];
          } else if (cat.includes("مزون") || cat.includes("لباس")) {
            availableServices = ["دوخت سفارشی لباس عروس", "اجاره لباس عروس VIP", "تور و تاج عروس", "اکسسوری و جواهرات"];
          } else {
            availableServices = ["ورودی سالن / باغ اصلی", "منوی شام VIP / سلف سرویس", "شمع‌آرایی & آتش‌بازی", "سفره عقد اختصاصی"];
          }
        }

        container.innerHTML = availableServices.map((service, index) => `
          <label class="flex items-center justify-between gap-2 cursor-pointer p-2.5 bg-[#0F172A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl transition-all hover:bg-[#1B2A4A] group">
            <div class="flex items-center gap-2">
              <input type="checkbox" value="${service}" ${index < 3 ? 'checked' : ''} class="accent-[#D4AF37] w-4 h-4 rounded cursor-pointer">
              <span class="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors">${service}</span>
            </div>
            <i data-lucide="check" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
          </label>
        `).join('');
      }

      // Dynamic Custom Questions Rendering for Vendor
      const customContainer = document.getElementById('inquiry-custom-fields-container');
      if (customContainer) {
        const customQuestions = (!isSpecificItemInquiry && typeof getVendorCustomQuestions === 'function') ? getVendorCustomQuestions(vendor ? vendor.id : 1) : [];
        if (customQuestions && customQuestions.length > 0) {
          customContainer.innerHTML = `
            <div class="border-b border-[#D4AF37]/30 pb-1 mb-2 flex items-center justify-between">
              <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1">
                <i data-lucide="help-circle" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>سوالات اختصاصی مجموعه ${targetName}:</span>
              </span>
              <span class="text-[10px] text-amber-200">پاسخ‌های شما جهت ارزیابی دقیق‌تر</span>
            </div>
            <div class="space-y-3">
              ${customQuestions.map((q, idx) => {
                const reqAttr = q.required ? 'required' : '';
                const reqAsterisk = q.required ? '<span class="text-rose-400 mr-0.5">*</span>' : '';

                if (q.type === 'select') {
                  const optionsHtml = (q.options || []).map(opt => `<option value="${opt}" class="bg-[#0F172A] text-white">${opt}</option>`).join('');
                  return `
                    <div class="space-y-1">
                      <label class="block text-xs font-bold text-slate-200">${q.label} ${reqAsterisk}</label>
                      <select data-custom-q-id="${q.id}" data-custom-q-label="${q.label}" ${reqAttr} class="inquiry-custom-input w-full bg-[#0F172A] border border-[#D4AF37]/30 text-white rounded-xl p-2.5 text-xs font-bold focus:outline-none focus:border-[#D4AF37] cursor-pointer">
                        ${optionsHtml}
                      </select>
                    </div>
                  `;
                } else if (q.type === 'number') {
                  return `
                    <div class="space-y-1">
                      <label class="block text-xs font-bold text-slate-200">${q.label} ${reqAsterisk}</label>
                      <input type="number" data-custom-q-id="${q.id}" data-custom-q-label="${q.label}" ${reqAttr} placeholder="ورود عدد..." class="inquiry-custom-input w-full bg-[#0F172A] border border-[#D4AF37]/30 text-white placeholder-slate-400 rounded-xl p-2.5 text-xs font-bold focus:outline-none focus:border-[#D4AF37]">
                    </div>
                  `;
                } else {
                  return `
                    <div class="space-y-1">
                      <label class="block text-xs font-bold text-slate-200">${q.label} ${reqAsterisk}</label>
                      <input type="text" data-custom-q-id="${q.id}" data-custom-q-label="${q.label}" ${reqAttr} placeholder="توضیحات شما..." class="inquiry-custom-input w-full bg-[#0F172A] border border-[#D4AF37]/30 text-white placeholder-slate-400 rounded-xl p-2.5 text-xs font-bold focus:outline-none focus:border-[#D4AF37]">
                    </div>
                  `;
                }
              }).join('')}
            </div>
          `;
          customContainer.classList.remove('hidden');
          if (window.lucide) lucide.createIcons();
        } else {
          customContainer.innerHTML = '';
          customContainer.classList.add('hidden');
        }
      }

      if (typeof window.checkInquiryDateAvailability === 'function') {
        window.checkInquiryDateAvailability();
      }

      document.getElementById('inquiry-modal').classList.remove('hidden');
    }

    window.checkInquiryDateAvailability = function() {
      const dateInp = document.getElementById('inquiry-date');
      const badge = document.getElementById('inquiry-date-availability-badge');
      const vendorIdVal = parseInt(document.getElementById('inquiry-vendor-id').value) || 1;
      if (!dateInp || !badge) return;

      const dateVal = dateInp.value.trim();
      if (!dateVal) {
        badge.classList.add('hidden');
        return;
      }

      badge.classList.remove('hidden');

      const matched = dateVal.match(/(\d+)/);
      const dayNum = matched ? parseInt(matched[1], 10) : null;

      const isBlocked = (dayNum && typeof vendorBlockedDates !== 'undefined' && vendorBlockedDates.includes(dayNum)) || (dayNum === 15 || dayNum === 22);

      if (isBlocked) {
        badge.className = "mt-1 text-[11px] font-bold p-2 rounded-xl flex items-center gap-1.5 bg-rose-950/60 border border-rose-600/50 text-rose-300";
        badge.innerText = "⚠️ توجه: تاریخ انتخابی شما توسط این تامین‌کننده پر / رزرو شده گزارش شده است.";
      } else {
        badge.className = "mt-1 text-[11px] font-bold p-2 rounded-xl flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/50 text-emerald-300";
        badge.innerText = "✓ وضعیت تاریخ انتخابی: آزاد و آماده پذیرش استعلام رزرو.";
      }
    };

    function closeInquiryModal() {
      document.getElementById('inquiry-modal').classList.add('hidden');
      const formEl = document.getElementById('inquiry-form');
      const stepIndicators = document.getElementById('inquiry-step-indicators');
      const receiptContainer = document.getElementById('inquiry-receipt-container');

      if (formEl) formEl.classList.remove('hidden');
      if (stepIndicators) stepIndicators.classList.remove('hidden');
      if (receiptContainer) receiptContainer.classList.add('hidden');
      if (typeof switchInquiryStep === 'function') switchInquiryStep(1);
    }

    function handleInquirySubmit(e) {
      e.preventDefault();
      const vendorIdVal = parseInt(document.getElementById('inquiry-vendor-id').value) || 1;
      const vendor = vendors.find(v => v.id === vendorIdVal) || vendors[0];
      const name = document.getElementById('inquiry-name').value.trim();
      const phone = document.getElementById('inquiry-phone').value.trim();
      const date = document.getElementById('inquiry-date').value.trim() || '۱۴۰۳/۰۶/۱۵';
      const budgetRange = document.getElementById('inquiry-budget-range').value;
      const customBudget = (document.getElementById('inquiry-budget-custom') ? document.getElementById('inquiry-budget-custom').value.trim() : '');
      const note = document.getElementById('inquiry-note').value.trim();

      const cat = vendor ? (vendor.category || '') : '';
      let categoryDetails = {};

      if (cat.includes("سالن زیبایی") || cat.includes("میکاپ")) {
        categoryDetails = {
          bridalPackage: document.getElementById('inquiry-bridal-pkg')?.value || '',
          companions: document.getElementById('inquiry-beauty-companions')?.value || ''
        };
      } else if (cat.includes("آتلیه") || cat.includes("عکاسی")) {
        categoryDetails = {
          shootingStyle: document.getElementById('inquiry-photo-style')?.value || '',
          equipment: document.getElementById('inquiry-photo-equip')?.value || ''
        };
      } else if (cat.includes("مزون") || cat.includes("لباس")) {
        categoryDetails = {
          maisonType: document.getElementById('inquiry-maison-type')?.value || '',
          fittingDate: document.getElementById('inquiry-fitting-date')?.value || ''
        };
      } else {
        categoryDetails = {
          guestCount: document.getElementById('inquiry-guests-select')?.value || '۲۰۰ تا ۴۰۰ نفر',
          cateringStyle: document.getElementById('inquiry-catering-style')?.value || ''
        };
      }

      const finalBudgetStr = customBudget ? `${budgetRange} (بودجه پیشنهادی: ${customBudget})` : budgetRange;

      const checkedServices = [];
      document.querySelectorAll('#inquiry-services-checklist input[type="checkbox"]:checked').forEach(cb => {
        checkedServices.push(cb.value);
      });

      const customAnswers = [];
      document.querySelectorAll('#inquiry-custom-fields-container .inquiry-custom-input').forEach(inp => {
        const qLabel = inp.getAttribute('data-custom-q-label') || '';
        const qVal = inp.value.trim();
        if (qLabel && qVal) {
          customAnswers.push({ label: qLabel, value: qVal });
        }
      });

      const guestsNum = document.getElementById('inquiry-guests')?.value || 200;
      const itemType = document.getElementById('inquiry-item-type')?.value || 'عمومی';
      const itemId = document.getElementById('inquiry-item-id')?.value || '';
      const itemTitle = document.getElementById('inquiry-item-title')?.value || '';

      const inquiryPayload = {
        vendorId: vendor.id,
        vendorName: vendor.name,
        category: vendor.category,
        userName: name,
        userPhone: phone,
        eventDate: date,
        budget: finalBudgetStr,
        itemType: itemType,
        itemId: itemId,
        itemTitle: itemTitle,
        categoryDetails: categoryDetails,
        customAnswers: customAnswers,
        services: checkedServices,
        note: note,
        submittedAt: new Date().toISOString()
      };

      console.log('Inquiry JSON Payload for /api/inquiries/submit:', inquiryPayload);

      // Save inquiry to localStorage DB fallback
      try {
        const storedInquiries = JSON.parse(localStorage.getItem('aroosi_inquiries_db') || '[]');
        storedInquiries.unshift(inquiryPayload);
        localStorage.setItem('aroosi_inquiries_db', JSON.stringify(storedInquiries));
      } catch (e) {
        console.error('Failed to save inquiry to localStorage DB:', e);
      }

      try {
        if (typeof fetch === 'function' && window.location.protocol.startsWith('http')) {
          fetch('/api/inquiries/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inquiryPayload)
          }).catch(err => console.log('API submit fallback catch:', err));
        }
      } catch (err) {
        console.log('Static client environment submit:', err);
      }

      const customAnswersStr = customAnswers.map(a => `${a.label}: ${a.value}`).join(' | ');
      const combinedDetails = customAnswersStr ? `${customAnswersStr} — ${note || ''}` : (note || `استعلام ${vendor.name} - ${checkedServices.join('، ')}`);

      inquiries.push({
        id: Date.now(),
        name,
        phone,
        date,
        guests: guestsNum,
        customAnswers,
        details: combinedDetails
      });

      // Find or create active thread in chatState
      let thread = chatState.threads.find(t => t.vendorId === vendor.id);
      const currentTimeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      if (!thread) {
        thread = {
          id: "thread-" + Date.now(),
          vendorId: vendor.id,
          vendorName: vendor.name,
          vendorCategory: vendor.category,
          vendorLogo: vendor.image,
          verified: vendor.verified,
          phone: "۰۲۱-۴۴۵۵۶۶۷۷",
          statusBadge: "pending_quote",
          statusText: "در انتظار پاسخ استعلام",
          unreadCount: 0,
          lastMessage: `درخواست استعلام جدید برای ${date} ارسال گردید.`,
          lastTime: currentTimeStr,
          inquiryData: {
            date,
            guests: guestsNum,
            services: checkedServices,
            budget: finalBudgetStr,
            note
          },
          messages: []
        };
        chatState.threads.unshift(thread);
      } else {
        thread.statusBadge = "pending_quote";
        thread.statusText = "در انتظار پاسخ استعلام";
        thread.lastTime = currentTimeStr;
        thread.inquiryData = {
          date,
          guests: guestsNum,
          services: checkedServices,
          budget: finalBudgetStr,
          note
        };
      }

      const inquirySummaryText = `ارسال استعلام قیمت سریع:\n• دسته بندی: ${vendor.category}\n• تاریخ مراسم: ${date}\n• تعداد مهمانان: ${guestsNum} نفر\n• خدمات درخواستی: ${checkedServices.join('، ')}\n• بودجه: ${finalBudgetStr}\n• توضیحات: ${note || '-'}`;

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: inquirySummaryText,
        time: currentTimeStr,
        isInquirySummary: true
      });

      thread.lastMessage = `استعلام قیمت ارسال گردید (${date})`;
      chatState.activeThreadId = thread.id;
      window.currentReceiptThreadId = thread.id;
      window.currentReceiptVendorId = vendor.id;

      renderInquiries();

      const randomInquiryNum = "INQ-2024-" + Math.floor(10000 + Math.random() * 90000);

      window.currentReceiptInvoiceData = {
        num: randomInquiryNum,
        date: date,
        validity: '۷ روز کاری (تا ' + date + ')',
        vendorName: vendor.name,
        vendorPhone: vendor.phone || '۰۳۵-۳۵۲۳۹۷۶۱',
        vendorAddress: vendor.address || 'یزد، خیابان اصلی',
        vendorCode: 'YZD-VND-' + vendor.id,
        coupleName: name,
        couplePhone: phone,
        eventDate: date,
        eventLocation: vendor.name + ' - ' + (vendor.district || 'یزد'),
        title: 'استعلام قیمت آنلاین ' + (itemTitle || vendor.category),
        total: finalBudgetStr,
        subtotal: finalBudgetStr,
        discount: '۰ تومان',
        deposit: 'پیش‌پرداخت توافقی',
        installment2: 'سهم دوم',
        balance: 'تسویه نهایی',
        items: checkedServices.map(s => ({ name: s, qty: 1, unitPrice: 'طبق پکیج', discount: '۰', total: 'استعلام' })),
        trackCode: 'AROOSI-' + Math.floor(10000 + Math.random() * 90000) + '-YZD'
      };

      // Show Receipt Container in Modal
      const formEl = document.getElementById('inquiry-form');
      const stepIndicators = document.getElementById('inquiry-step-indicators');
      const receiptContainer = document.getElementById('inquiry-receipt-container');

      const receiptIdEl = document.getElementById('receipt-inquiry-id');
      const receiptVendorEl = document.getElementById('receipt-vendor-name');
      const receiptDateEl = document.getElementById('receipt-event-date');
      const receiptGuestsEl = document.getElementById('receipt-guests-count');
      const receiptBudgetEl = document.getElementById('receipt-budget-str');
      const receiptServicesEl = document.getElementById('receipt-services-list');

      if (receiptIdEl) receiptIdEl.innerText = "#" + randomInquiryNum;
      if (receiptVendorEl) receiptVendorEl.innerText = vendor.name + " (" + vendor.category + ")";
      if (receiptDateEl) receiptDateEl.innerText = date;
      if (receiptGuestsEl) receiptGuestsEl.innerText = guestsNum + " نفر";
      if (receiptBudgetEl) receiptBudgetEl.innerText = finalBudgetStr;
      if (receiptServicesEl) receiptServicesEl.innerText = checkedServices.length > 0 ? checkedServices.join('، ') : 'خدمات عمومی پکیج';

      if (formEl) formEl.classList.add('hidden');
      if (stepIndicators) stepIndicators.classList.add('hidden');
      if (receiptContainer) receiptContainer.classList.remove('hidden');

      if (window.lucide) lucide.createIcons();
      showToast('درخواست استعلام قیمت شما با موفقیت ثبت شد ✨', 'success');
      if (typeof window.triggerWebPushNotification === 'function') {
        window.triggerWebPushNotification(`استعلام جدید ثبت شد: ${vendor.name}`, {
          body: `درخواست استعلام قیمت برای تاریخ ${date} در سامانه عروسی تو ثبت گردید.`
        });
      }
    }

window.downloadReceiptPdf = function() {
  if (typeof openPreInvoicePrintModal === 'function') {
    openPreInvoicePrintModal(window.currentReceiptInvoiceData);
  } else {
    window.print();
  }
};

window.shareReceiptWhatsApp = function() {
  const d = window.currentReceiptInvoiceData;
  if (!d) return;

  const phoneRaw = d.vendorPhone || '09131112233';
  let cleanPhone = phoneRaw.replace(/[^0-9]/g, '');
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '98' + cleanPhone.substring(1);
  } else if (!cleanPhone.startsWith('98')) {
    cleanPhone = '98' + cleanPhone;
  }

  let textMsg = `سلام ${d.vendorName} عزیز،\n`;
  textMsg += `درخواست استعلام قیمت رسمی با کد پیگیری #${d.num} در سامانه عروسی تو ثبت شد:\n\n`;
  textMsg += `👤 نام متقاضی: ${d.coupleName}\n`;
  textMsg += `📞 شماره تماس: ${d.couplePhone}\n`;
  textMsg += `📅 تاریخ مراسم: ${d.eventDate}\n`;
  if (d.guests) textMsg += `👥 تعداد مهمانان: ${d.guests}\n`;
  if (d.title) textMsg += `📌 موضوع: ${d.title}\n`;
  if (d.total) textMsg += `💰 محدوده بودجه: ${d.total}\n`;
  if (d.items && d.items.length > 0) {
    const serviceList = d.items.map(i => i.name).join(' ، ');
    textMsg += `✨ خدمات درخواستی: ${serviceList}\n`;
  }
  textMsg += `\nلطفاً جهت بررسی و ارسال پیش‌فاکتور اقدام فرمایید. با تشکر!`;

  const encodedMsg = encodeURIComponent(textMsg);
  window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, '_blank');
  if (typeof showToast === 'function') showToast('در حال انتقال به واتس‌اپ...', 'info');
};

window.goToInquiryChatThread = function(vendorId, threadId) {
  const targetThreadId = threadId || window.currentReceiptThreadId;
  const targetVendorId = vendorId || window.currentReceiptVendorId;

  if (typeof chatState !== 'undefined' && chatState.threads) {
    let target = null;
    if (targetThreadId) {
      target = chatState.threads.find(t => t.id === targetThreadId);
    }
    if (!target && targetVendorId) {
      target = chatState.threads.find(t => t.vendorId == targetVendorId);
    }
    if (target) {
      chatState.activeThreadId = target.id;
      try {
        localStorage.setItem('aroosi_chat_state', JSON.stringify(chatState));
      } catch (e) {}
    }
  }

  // 1. If on standalone vendor profile page, navigate to index.html?tab=messages
  if (window.location.pathname.includes('vendor-detail.html')) {
    window.location.href = 'index.html?tab=messages';
    return;
  }

  // 2. Cleanly close inquiry modal & receipt container
  if (typeof closeInquiryModal === 'function') closeInquiryModal();

  // 3. Switch active platform tab directly to Direct Chat
  if (typeof switchTab === 'function') switchTab('messages');

  // 4. Render active chat thread and threads list
  if (typeof renderChatThreadsList === 'function') renderChatThreadsList();
  if (typeof renderChatActiveThread === 'function') renderChatActiveThread();

  // 5. Scroll smoothly to the bottom of active chat stream
  setTimeout(() => {
    const chatStream = document.getElementById('chat-messages-stream-container') ||
                       document.getElementById('chat-active-messages') ||
                       document.getElementById('chat-messages-container');
    if (chatStream) {
      chatStream.scrollTo({ top: chatStream.scrollHeight, behavior: 'smooth' });
    }
  }, 250);
};

    function openRsvpModal() {
      document.getElementById('rsvp-modal').classList.remove('hidden');
    }

    function closeRsvpModal() {
      document.getElementById('rsvp-modal').classList.add('hidden');
    }


    function handleRsvpSubmit(e) {
      e.preventDefault();
      const rsvpName = document.getElementById('rsvp-name')?.value.trim();
      if (rsvpName) {
        const existing = guestListState.find(g => g.name === rsvpName);
        if (existing) {
          existing.status = "CONFIRMED";
        } else {
          guestListState.unshift({
            id: "g-" + Date.now(),
            name: rsvpName,
            side: "دوستان مشترک",
            phone: "09120000000",
            companions: 1,
            table: "میز اختصاصی",
            status: "CONFIRMED"
          });
        }
        renderGuestsAndGifts();
      }
      closeRsvpModal();
      showGlobalToast("پاسخ RSVP شما با موفقیت ثبت و به سیستم مدیریت مهمانان اضافه شد.");
    }


    function sendSmsBroadcast() {
      const text = document.getElementById('sms-text').value.trim();
      if (!text) return showToast('لطفا متن پیامک را وارد کنید.', 'warning');
      const history = document.getElementById('sms-history');
      const item = document.createElement('div');
      item.className = "p-2 bg-white rounded-lg border border-accent/60";
      item.innerHTML = `<span class="text-primary font-bold">ارسال شد:</span> ${text}`;
      history.prepend(item);
      document.getElementById('sms-text').value = '';
      showToast('پیامک انبوه با موفقیت ارسال شد.', 'success');
    }

    // ==========================================
    // WEDDING BUDGET WIZARD STATE & LOGIC
    // ==========================================
    let bwState = {
      currentStep: 1,
      targetBudget: 350000000,
      province: "یزد",
      provinceMultiplier: 1.0,
      city: "یزد",
      style: "modern", // economic, modern, luxury, formalite
      guestCount: 250,
      services: [
        { id: "venue", title: "تالار، باغ و پذیرایی (Yazd Catering & Venue)", icon: "building", defaultWeight: 0.48, checked: true, isCustom: false },
        { id: "photo", title: "آتلیه و فرمالیته کویر یزد (Desert Photo & Video)", icon: "camera", defaultWeight: 0.18, checked: true, isCustom: false },
        { id: "bride_makeup", title: "سالن زیبایی عروس (Bride Makeup)", icon: "sparkles", defaultWeight: 0.07, checked: true, isCustom: false },
        { id: "groom_styling", title: "کت‌وشلوار و پیرایش داماد (Groom Styling)", icon: "scissors", defaultWeight: 0.04, checked: true, isCustom: false },
        { id: "bridal_dress", title: "مزون و لباس عروس (Bridal Dress)", icon: "shirt", defaultWeight: 0.07, checked: true, isCustom: false },
        { id: "sweets", title: "پذیرایی، کیک و دسر (Catering & Desserts)", icon: "cake", defaultWeight: 0.05, checked: true, isCustom: false },
        { id: "music", title: "موسیقی و نورپردازی سالن (Music & Lighting)", icon: "music", defaultWeight: 0.05, checked: true, isCustom: false },
        { id: "car_flower", title: "ماشین عروس و گل‌آرایی (Car & Floral)", icon: "flower-2", defaultWeight: 0.04, checked: true, isCustom: false },
        { id: "invitation", title: "کارت دعوت دیجیتال و گیفت (Invitations & Favors)", icon: "mail", defaultWeight: 0.02, checked: true, isCustom: false }
      ]
    };

    function updateBudgetFormattedDisplay() {
      const inputVal = parseInt(document.getElementById('bw-budget-input').value) || 0;
      cbwState.targetBudget = inputVal;
      const formatted = inputVal.toLocaleString('fa-IR');
      document.getElementById('bw-budget-formatted').innerText = `${formatted} تومان`;
    }

        function applyYazdBudgetPreset(amount) {
      document.getElementById('bw-budget-input').value = amount;
      updateBudgetFormattedDisplay();
    }

    function handleProvinceChange() {
      const provSelect = document.getElementById('bw-province-select');
      cbwState.province = provSelect.value;
      if (provSelect.value === 'تهران') cbwState.provinceMultiplier = 1.2;
      else if (provSelect.value === 'البرز') cbwState.provinceMultiplier = 1.05;
      else if (provSelect.value === 'آذربایجان شرقی' || provSelect.value === 'سایر استان‌ها') cbwState.provinceMultiplier = 0.95;
      else cbwState.provinceMultiplier = 1.0;
    }

    function selectBwStyle(styleKey) {
      cbwState.style = styleKey;
      const cards = ['economic', 'modern', 'luxury', 'formalite'];
      cards.forEach(key => {
        const el = document.getElementById('style-card-' + key);
        if (!el) return;
        if (key === styleKey) {
          el.className = "bw-style-card bg-primary/5 border-2 border-primary rounded-2xl p-5 cursor-pointer transition-all space-y-3 shadow-xs";
          const iconBox = el.querySelector('div');
          if (iconBox) iconBox.className = "w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs";
          const h4 = el.querySelector('h4');
          if (h4) h4.className = "text-sm font-bold text-primary";
        } else {
          el.className = "bw-style-card bg-bgCustom border-2 border-accent rounded-2xl p-5 cursor-pointer hover:border-primary transition-all space-y-3";
          const iconBox = el.querySelector('div');
          if (iconBox) iconBox.className = "w-10 h-10 rounded-xl bg-slate-100 text-graphite flex items-center justify-center";
          const h4 = el.querySelector('h4');
          if (h4) h4.className = "text-sm font-bold text-graphite";
        }
      });
    }

    function setBwGuestCount(count) {
      cbwState.guestCount = count;
      document.getElementById('bw-guest-input').value = count;
      updateGuestBtnStyles(count);
    }

    function handleGuestInputChange() {
      const val = parseInt(document.getElementById('bw-guest-input').value) || 200;
      cbwState.guestCount = val;
      updateGuestBtnStyles(val);
    }

    function updateGuestBtnStyles(count) {
      const btns = document.querySelectorAll('.bw-guest-btn');
      btns.forEach(btn => {
        btn.className = "bw-guest-btn py-3 px-4 rounded-xl text-xs font-bold border border-[#C5A059]/30 bg-[#161C2B] hover:border-[#D4AF37] text-slate-200 transition-all cursor-pointer";
      });

      let targetIdx = 1;
      if (count < 100) targetIdx = 0;
      else if (count >= 100 && count <= 250) targetIdx = 1;
      else if (count > 250 && count <= 500) targetIdx = 2;
      else if (count > 500) targetIdx = 3;

      if (btns[targetIdx]) {
        btns[targetIdx].className = "bw-guest-btn py-3 px-4 rounded-xl text-xs font-bold border-2 border-primary bg-primary text-white transition-all shadow-xs";
      }
    }

    function renderBwServicesChecklist() {
      const container = document.getElementById('bw-services-checklist');
      if (!container) return;
      container.innerHTML = '';

      cbwState.services.forEach(srv => {
        const card = document.createElement('div');
        card.onclick = (e) => {
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
            toggleBwService(srv.id);
          }
        };
        card.className = `p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
          srv.checked ? 'bg-[#1B3B2B] border-[#D4AF37] shadow-md' : 'bg-[#141A28] border-[#C5A059]/30 hover:border-[#D4AF37] opacity-80'
        }`;

        card.innerHTML = `
          <div class="flex items-center gap-3">
            <input type="checkbox" ${srv.checked ? 'checked' : ''} onchange="toggleBwService('${srv.id}')" class="rounded accent-[#D4AF37] w-5 h-5 cursor-pointer">
            <div class="flex items-center gap-2">
              <i data-lucide="${srv.icon}" class="w-4 h-4 ${srv.checked ? 'text-[#D4AF37]' : 'text-amber-200/70'}"></i>
              <span class="text-xs font-black ${srv.checked ? 'text-white' : 'text-slate-200'}">${srv.title}</span>
            </div>
          </div>
          ${srv.isCustom ? `<button onclick="deleteCustomBwService('${srv.id}')" class="text-rose-400 hover:text-rose-200 text-[11px] font-black">حذف</button>` : ''}
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    function toggleBwService(srvId) {
      const srv = cbwState.services.find(s => s.id === srvId);
      if (srv) {
        srv.checked = !srv.checked;
        renderBwServicesChecklist();
      }
    }

    function handleAddCustomBwService() {
      const titleInput = document.getElementById('bw-custom-title');
      const priceInput = document.getElementById('bw-custom-price');
      const title = titleInput.value.trim();
      const price = parseInt(priceInput.value) || 0;

      if (!title) return showToast('لطفاً عنوان خدمت اختصاصی را وارد نمایید.', 'warning');

      const customId = 'custom-' + Date.now();
      cbwState.services.push({
        id: customId,
        title: title + (price > 0 ? ` (برآورد: ${price.toLocaleString('fa-IR')} تومان)` : ''),
        icon: 'package-plus',
        defaultWeight: 0.05,
        fixedPrice: price > 0 ? price : null,
        checked: true,
        isCustom: true
      });

      titleInput.value = '';
      priceInput.value = '';
      renderBwServicesChecklist();
    }

    function deleteCustomBwService(srvId) {
      cbwState.services = cbwState.services.filter(s => s.id !== srvId);
      renderBwServicesChecklist();
    }

    function navigateBwStep(direction) {
      const newStep = cbwState.currentStep + direction;
      if (newStep < 1 || newStep > 5) return;

      // Validate inputs before advancing
      if (direction > 0 && cbwState.currentStep === 1) {
        if (!cbwState.targetBudget || cbwState.targetBudget < 10000000) {
          showToast('لطفاً سقف بودجه معتبر وارد نمایید (حداقل ۱۰ میلیون تومان).', 'warning');
          return;
        }
        cbwState.city = document.getElementById('bw-city-input').value.trim() || 'تهران';
      }

      if (direction > 0 && cbwState.currentStep === 4) {
        const activeCount = cbwState.services.filter(s => s.checked).length;
        if (activeCount === 0) {
          showToast('لطفاً حداقل یک خدمت را جهت تخصیص بودجه فعال/تیک بزنید.', 'warning');
          return;
        }
      }

      cbwState.currentStep = newStep;
      updateBwStepUI();
    }

    function updateBwStepUI() {
      // Hide all panels
      for (let i = 1; i <= 4; i++) {
        const panel = document.getElementById('bw-step-' + i);
        if (panel) panel.classList.add('hidden');
      }
      const resPanel = document.getElementById('bw-step-result');
      if (resPanel) resPanel.classList.add('hidden');

      // Show current panel
      if (cbwState.currentStep <= 4) {
        const currentPanel = document.getElementById('bw-step-' + cbwState.currentStep);
        if (currentPanel) currentPanel.classList.remove('hidden');
      } else {
        if (resPanel) resPanel.classList.remove('hidden');
        calculateAndRenderBwResults();
      }

      // Update Stepper Progress Bar & Badges
      const stepLabel = document.getElementById('wizard-step-label');
      const progressTitle = document.getElementById('wizard-progress-title');
      const progressPercent = document.getElementById('wizard-progress-percent');
      const progressBar = document.getElementById('wizard-progress-bar');
      const prevBtn = document.getElementById('bw-prev-btn');
      const nextBtn = document.getElementById('bw-next-btn');

      if (cbwState.currentStep <= 4) {
        stepLabel.innerText = `گام ${cbwState.currentStep} از ۴`;
        const percent = cbwState.currentStep * 25;
        progressPercent.innerText = `${percent}٪ تکمیل شده`;
        progressBar.style.width = `${percent}%`;

        const titles = [
          "پایه مالی و موقعیت مکانی",
          "انتخاب سبک و سطح تشریفات",
          "تعداد مهمانان و مقیاس مراسم",
          "تکمیل چک‌لیست خدمات مورد نیاز"
        ];
        progressTitle.innerText = titles[cbwState.currentStep - 1];

        prevBtn.classList.toggle('hidden', cbwState.currentStep === 1);
        nextBtn.classList.remove('hidden');
        nextBtn.querySelector('span').innerText = cbwState.currentStep === 4 ? "محاسبه نهایی و نمایش خروجی" : "گام بعدی";
      } else {
        stepLabel.innerText = "خروجی محاسبات هوشمند";
        progressPercent.innerText = "۱۰۰٪ تکمیل شده";
        progressBar.style.width = "100%";
        progressTitle.innerText = "جدول تخصیص هوشمند بودجه بر اساس خدمات انتخابی";

        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
      }

      if (cbwState.currentStep === 4) {
        renderBwServicesChecklist();
      }

      lucide.createIcons();
    }


    let isHiddenCostsBufferActive = false;

    function toggleHiddenCostsBuffer(isActive) {
      isHiddenCostsBufferActive = isActive;
      if (typeof calculateAndRenderBwResults === 'function') {
        calculateAndRenderBwResults();
      }
      showToast(isActive ? 'بافر ۱۰٪ هزینه‌های پنهان به محاسبات اضافه شد' : 'بافر ۱۰٪ غیرفعال گردید', 'info');
    }

    function calculateAndRenderBwResults() {
      const activeServices = cbwState.services.filter(s => s.checked);
      const totalBudget = cbwState.targetBudget;

      // Sync userBudgetState for dashboard & planner summary
      try {
        localStorage.setItem('userBudgetState', JSON.stringify({
          totalBudget: totalBudget,
          scenario: cbwState.style || 'medium',
          guestsCount: cbwState.guestCount || 250,
          lastSyncedAt: new Date().toISOString(),
          breakdown: {
            venue: Math.round(totalBudget * 0.50),
            photography: Math.round(totalBudget * 0.15),
            beauty: Math.round(totalBudget * 0.10),
            attire: Math.round(totalBudget * 0.05),
            ceremony: Math.round(totalBudget * 0.20)
          }
        }));

        let enterpriseState = {
          totalBudget: totalBudget,
          categories: [
            { name: 'تالار و باغ پذیرایی', percentage: 50, icon: 'building' },
            { name: 'عکاسی و فیلمبرداری', percentage: 15, icon: 'camera' },
            { name: 'زیبایی و میکاپ', percentage: 10, icon: 'sparkles' },
            { name: 'لباس و مزون', percentage: 5, icon: 'shirt' },
            { name: 'تشریفات و تزئینات', percentage: 20, icon: 'flower-2' }
          ],
          lineItems: [
            { id: 'bw-1', title: `ورودی تالار و کترینگ (${cbwState.guestCount || 250} نفر)`, category: 'تالار و باغ پذیرایی', estimated: Math.round(totalBudget * 0.50), paid: 0, status: 'UNPAID', party: 'groom', notes: 'محاسبه شده توسط بودجه‌ریز AI' },
            { id: 'bw-2', title: 'پکیج آتلیه عکاسی و فیلمبرداری', category: 'عکاسی و فیلمبرداری', estimated: Math.round(totalBudget * 0.15), paid: 0, status: 'UNPAID', party: 'shared', notes: 'محاسبه شده توسط بودجه‌ریز AI' },
            { id: 'bw-3', title: 'پکیج میکاپ VIP عروس', category: 'زیبایی و میکاپ', estimated: Math.round(totalBudget * 0.10), paid: 0, status: 'UNPAID', party: 'bride', notes: 'محاسبه شده توسط بودجه‌ریز AI' },
            { id: 'bw-4', title: 'اجاره لباس عروس و کت داماد', category: 'لباس و مزون', estimated: Math.round(totalBudget * 0.05), paid: 0, status: 'UNPAID', party: 'shared', notes: 'محاسبه شده توسط بودجه‌ریز AI' },
            { id: 'bw-5', title: 'گل‌آرایی، سفره عقد و تشریفات', category: 'تشریفات و تزئینات', estimated: Math.round(totalBudget * 0.20), paid: 0, status: 'UNPAID', party: 'groom', notes: 'محاسبه شده توسط بودجه‌ریز AI' }
          ]
        };
        localStorage.setItem('aroosi_enterprise_budget_db', JSON.stringify(enterpriseState));
        if (typeof window.renderPlannerBudgetSummary === 'function') {
          window.renderPlannerBudgetSummary();
        }
      } catch(e) {}

      // Separate custom fixed price services from weighted percentage services
      let sumFixedPrices = 0;
      activeServices.forEach(s => {
        if (s.fixedPrice) sumFixedPrices += s.fixedPrice;
      });

      const remainingBudgetForWeighted = Math.max(0, totalBudget - sumFixedPrices);

      // Sum weights of active non-fixed services
      let totalWeight = 0;
      activeServices.forEach(s => {
        if (!s.fixedPrice) totalWeight += s.defaultWeight;
      });

      const tbody = document.getElementById('bw-result-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      let effectiveTotal = totalBudget;
      if (isHiddenCostsBufferActive) {
        effectiveTotal = Math.round(totalBudget * 1.1);
      }
      document.getElementById('res-total-budget').innerText = isHiddenCostsBufferActive ? `${effectiveTotal.toLocaleString('fa-IR')} تومان (+۱۰٪ بافر پنهان)` : `${totalBudget.toLocaleString('fa-IR')} تومان`;
      const styleNames = {
        economic: "اقتصادی و ساده",
        modern: "مدرن و شیک",
        luxury: "لوکس و تشریفاتی (VIP)",
        formalite: "فرمالیته و خاص"
      };
      document.getElementById('res-style-city').innerText = `${styleNames[cbwState.style] || 'مدرن'} • ${cbwState.province} (${cbwState.city})`;
      document.getElementById('res-active-services-count').innerText = `${activeServices.length} خدمت منتخب فعال`;

      activeServices.forEach(srv => {
        let calculatedAmount = 0;
        let percentageText = "";

        if (srv.fixedPrice) {
          calculatedAmount = srv.fixedPrice;
          const pct = Math.round((srv.fixedPrice / totalBudget) * 100);
          percentageText = `${pct}٪ (ثابت)`;
        } else {
          const serviceRatio = totalWeight > 0 ? (srv.defaultWeight / totalWeight) : 0;
          calculatedAmount = Math.round(remainingBudgetForWeighted * serviceRatio);
          const pct = Math.round((calculatedAmount / totalBudget) * 100);
          percentageText = `${pct}٪`;
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#1E293B]/60 transition-colors";
        tr.innerHTML = `
          <td class="p-3.5 font-bold text-white flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <i data-lucide="${srv.icon}" class="w-4 h-4"></i>
            </div>
            <span>${srv.title}</span>
          </td>
          <td class="p-3.5 font-bold text-amber-300">${percentageText}</td>
          <td class="p-3.5 font-black text-[#D4AF37]">${calculatedAmount.toLocaleString('fa-IR')} تومان</td>
          <td class="p-3.5 text-slate-300 text-[11px] leading-relaxed">
            برآورد سهم استاندارد متناسب با ${cbwState.guestCount} نفر مهمان و سبک ${styleNames[cbwState.style]}
          </td>
        `;
        tbody.appendChild(tr);
      });

      // Render AI Matched Vendors for Wizard Result
      const matchedGrid = document.getElementById('ai-wizard-matched-vendors-grid');
      if (matchedGrid && typeof vendors !== 'undefined' && Array.isArray(vendors)) {
        let matchedList = vendors.slice(0, 3);
        if (totalBudget <= 200000000) {
          matchedList = vendors.filter(v => parsePriceNumeric(v.priceRange) <= 45000000).slice(0, 3);
        } else if (totalBudget >= 500000000) {
          matchedList = vendors.filter(v => parsePriceNumeric(v.priceRange) >= 80000000).slice(0, 3);
        }
        if (matchedList.length === 0) matchedList = vendors.slice(0, 3);

        matchedGrid.innerHTML = matchedList.map(v => `
          <div onclick="openVendorDetailModal(${v.id})" class="bg-[#07090E] hover:bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all shadow-md group">
            <img src="${v.image}" alt="${v.name}" class="w-14 h-14 rounded-xl object-cover border border-[#C5A059]/40 group-hover:scale-105 transition-transform shrink-0">
            <div class="overflow-hidden space-y-0.5 text-right">
              <span class="text-[9.5px] font-black text-amber-300 block truncate">${v.category}</span>
              <h4 class="text-xs font-black text-white truncate">${v.name}</h4>
              <span class="text-[10px] text-slate-300 font-bold block">${v.priceRange || 'استعلام قیمت'}</span>
            </div>
          </div>
        `).join('');
      }

      lucide.createIcons();
    }

    function resetBwWizard() {
      cbwState.currentStep = 1;
      updateBwStepUI();
    }

    // ==========================================
    // QUIZ HUB & ENGINE STATE & DATA STRUCTURES
    // ==========================================
    let quizState = {
      activeTab: "style", // style, psychology
      currentQuiz: null, // active quiz object
      currentQuestionIndex: 0,
      userAnswers: {}, // questionId: selectedOptionObject
      quizCompleted: false,
      appliedStyleFilter: null,
      quizzes: [
  {
    "id": "quiz-style-main",
    "category": "style",
    "title": "تست تعیین استایل اصلی عروسی",
    "description": "کلاسیک، بوهو، لاکچری، روستیک، مینی‌مال یا مدرن - کشف تم بصری متناسب با سلیقه شما",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "duration": "۴ دقیقه",
    "questionsCount": 4,
    "badge": "استایل اصلی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام جوم و معماری چیدمان فضایی جشن عروسی را بیشتر می‌پسندید؟",
        "options": [
          {
            "id": "opt1",
            "label": "باغ عمارت باشکوه با ستون‌های کریستالی و گل‌آرایی سنقر",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "فضای باز در دل طبیعت با چیدمان چوبی، طاق پامپاس و حس آزاد بوهو",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "romantic": 15
            }
          },
          {
            "id": "opt3",
            "label": "سالن مدرن شیک با خطوط هندسی پاک، نورپردازی مهندسی و دکور مینی‌مال",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt4",
            "label": "عمارت تاریخی با آینه‌کاری‌های سنتی اصیل و شمعدان‌های شاهانه",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "classic",
            "score": {
              "classic": 90,
              "vintage": 20
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "پالت رنگی مطلوب شما برای تزئینات و دکوراسیون سالن چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "زمردی تیره، طلایی براق و سفید کریستالی",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "رنگ‌های نود گرم، شنی، خاکی و سبز زیتونی",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "سفید یخچالی، گرافیت، خاکستری پلاتینیوم و نقره‌ای",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt4",
            "label": "صورتی پودری، یاسی ملایم و سفید مرواریدی",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "طراحی سفره عقد مورد علاقه شما چه ویژگی‌هایی دارد؟",
        "options": [
          {
            "id": "opt1",
            "label": "سفره عقد تمام کریستال با آینه‌کاری و شمعدان‌های نقره",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "سفره عقد روستیک روی کنده‌های چوب با گل‌آرایی طبیعی خشخاش و گندم",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "سفره عقد مینی‌مال روی پایه‌های شیشه‌ای و گل سفید یکدست",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt4",
            "label": "سفره عقد اصیل پارچه‌ای ترمه با ظروف عتیقه قلم‌زنی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          }
        ]
      },
      {
        "id": "q4",
        "text": "کدام اتمسفر کلی در شب جشن هیجان بیشتری به شما می‌دهد؟",
        "options": [
          {
            "id": "opt1",
            "label": "شکوه شاهانه با تشریفات سنگین و ورودی آتش‌بازی طبقاتی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "اتمسفر صمیمی، دوستانه، پر از انرژی مثبت و رقص آزاد",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt3",
            "label": "موزیک مدرن، نورپردازی لیزری ملایم و نظم دقیق زمان‌بندی",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-location",
    "category": "style",
    "title": "تست انتخاب لوکیشن و سبک فرمالیته",
    "description": "کویر، جنگل، دریا، عمارت یا استودیو - انتخاب بهترین لوکیشن عکاسی کلیپ فرمالیته",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "عکاسی فرمالیته",
    "questions": [
      {
        "id": "q1",
        "text": "کدام تصویر طبیعت حس آرامش و زیبایی بیشتری برای ویدیوی کلیپ شما دارد؟",
        "options": [
          {
            "id": "opt1",
            "label": "کویر باشکوه با رمل‌های طلایی و غروب آفتاب گرم",
            "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 85,
              "modern": 15
            }
          },
          {
            "id": "opt2",
            "label": "جنگل‌های سرسبز شمال با مه صبحگاهی و درختان کهنسال",
            "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85,
              "boho": 15
            }
          },
          {
            "id": "opt3",
            "label": "ساحل دریا با امواج خروشان و لباس‌های سبک سفید",
            "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 80,
              "romantic": 20
            }
          },
          {
            "id": "opt4",
            "label": "عمارت اروپایی با معمار کلاسیک، پله‌های سنگی و کالسکه",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "سبک لباس مورد نظر شما برای روز عکاسی فرمالیته چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "لباس اسپرت شیک، کلاه حصیری و کتانی راحت",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "لباس تور سبک حریر با دامن دنباله‌دار در باد",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "لباس رسمی فرمالیته با تاج و تور کارشده",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "زمان‌بندی ایده‌آل شما برای عکاسی فرمالیته چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "سفر ۲ روزه به شمال یا جنوب قبل از عروسی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt2",
            "label": "عکاسی یک‌روزه در عمارت اطراف شهر",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "عکاسی استودیویی مینی‌مال با نورپردازی حرفه‌ای",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-palette",
    "category": "style",
    "title": "تست پالت رنگی و تم دکوراسیون جشن",
    "description": "رنگ‌های نود، زمردی/طلایی، پاستلی، دارک لوکس - کشف پالت رنگی اختصاصی گل‌آرایی",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "پالت رنگی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام حس رنگی در نگاه اول چشم شما را می‌نوازد؟",
        "options": [
          {
            "id": "opt1",
            "label": "پالت دارک لوکس (مشکی گرافیت، زرشکی عمیق و طلایی)",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "پالت نود و شنی (کرم گرم، خاکی، زیتونی و نسکافه‌ای)",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt3",
            "label": "پالت پاستلی (صورتی روشن، یاسی ملایم، نعنایی و لیمویی)",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt4",
            "label": "پالت تک‌رنگ مینی‌مال (سفید خالص، پلاتینیوم و نقره‌ای)",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "ترجیح شما برای رنگ گل‌آرایی میزهای مهمانان چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "گل‌های ارکیده و رز سفید خالص",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "رزهای قرمز مخملی و گل‌های تیره‌رنگ باشکوه",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "ترکیب گل‌های وحشی زرد، نارنجی و برگ‌های اکالیپتوس",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "رنگ رانر و رومیزهای سالن پذیرایی چگونه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "مخمل سرمه‌ای یا زرشکی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "کتان نود و شنی با بافت طبیعی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "ساتن سفید و براق",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-gown",
    "category": "style",
    "title": "تست مدل لباس عروس بر اساس اندام و روحیات",
    "description": "پرنسسی، ماهی، A-line، یا ساده مینی‌مال - پیشنهاد برش دامن و یقه متناسب",
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "مدل لباس عروس",
    "questions": [
      {
        "id": "q1",
        "text": "کدام برش دامن احساس شیک بودن و اعتماد به نفس بیشتری به شما می‌دهد؟",
        "options": [
          {
            "id": "opt1",
            "label": "دامن پرنسسی اسکارلت پف‌دار با ژپون بزرگ",
            "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "برش اندامی ماهی (Mermaid) با جذب کامل و دنباله شیک",
            "image": "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt3",
            "label": "دامن A-line کلاسیک با ریزش ملایم و راحتی بالا",
            "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85,
              "classic": 15
            }
          },
          {
            "id": "opt4",
            "label": "لباس مستقیم ساده ساتن بدون پف و سنگ‌دوزی",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 85,
              "boho": 15
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "سبک یقه مورد علاقه شما چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "یقه دلبری یا دکلته کلاسیک",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "یقه قایقی یا آستین‌دار دانتل",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "یقه خشتی یا رومی مدرن",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "میزان کاردست و سنگ‌دوزی روی پارچه چه مقدار باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "کریستال‌دوزی و ملیله‌دوزی متراکم و درخشان",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "دانتل و گیپور ظریف برجسته",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "پارچه مینی‌مال کاملاً بدون کاردست",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-groom",
    "category": "style",
    "title": "تست سبک استایل و کت‌وشلوار داماد",
    "description": "تاکسیدو کلاسیک، اسپرت شیک یا مدرن - پیشنهاد رنگ، یقه و اکسسوری دامادی",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "duration": "۲ دقیقه",
    "questionsCount": 2,
    "badge": "استایل داماد",
    "questions": [
      {
        "id": "q1",
        "text": "کدام فرم کت و شلوار دامادی با روحیات شما سازگارتر است؟",
        "options": [
          {
            "id": "opt1",
            "label": "تاکسیدو مشکی با یقه آرشال ساتن و پاپیون مشکی رسمی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "کت و شلوار سورمه‌ای یا طوسی با کراوات ابریشمی شیک",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "کت شش‌دکمه دوبل (Double Breasted) سرمه‌ای سلطنتی",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt4",
            "label": "کت کتانی یا کرم روشن با ساسپندر و جلیقه بدون کراوات",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "انتخاب شما برای کفش و ساعت دامادی چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "کفش ورنی مشکی براق با ساعت بند چرمی کلاسیک",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "کفش چرم هشترک قهوه‌ای با ساعت استیل اسپرت",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "کفش کالج چرم شاموا نود",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      }
    ]
  },
    {
    "id": "quiz-psych-readiness",
    "category": "psychology",
    "title": "سنجش آمادگی روان‌شناختی و بلوغ ورود به زندگی مشترک",
    "description": "ارزیابی خودشناسی عمیق، مسئولیت‌پذیری عاطفی، بلوغ ارتباطی و توانایی ساخت رابطه پایدار",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "duration": "۵ دقیقه",
    "questionsCount": 10,
    "badge": "استاندارد روان‌شناسی",
    "questions": [
      {
        "id": "q1",
        "text": "تصویر ذهنی من از زندگی مشترک متکی بر واقع‌گرایی، همدلی و مسئولیت‌پذیری دوجانبه است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "توانایی گفتگو و بیان شفاف نیازها و احساسات بدون ترس از قضاوت شدن توسط پارتنر را دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "در مواجهه با اختلاف نظرها، اولویت من حل مسالمت‌آمیز مسئله است تا اثبات برتری خود.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q4",
        "text": "آمادگی کافی برای مدیریت مستقل مسائل مالی و برنامه‌ریزی اقتصادی زندگی مشترک را دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q5",
        "text": "توانایی مدیریت هیجانات، خشم و اضطراب در روزهای پرفشار قبل از عروسی را در خود می‌بینم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q6",
        "text": "احترام به استقلال فکری، اهداف شخصی و حریم خصوصی همسرم را اصل اساسی می‌دانم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q7",
        "text": "در تصمیم‌گیری‌های کلان زندگی، توانایی مرزبندی سالم با نظرات و مداخلات اطرافیان را دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q8",
        "text": "توانایی پذیرش نقاط ضعف خود و انعطاف‌پذیری برای بهبود رفتارهای ارتباطی را دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q9",
        "text": "درک متقابل از وظایف خانوادگی و تقسیم عادلانه مسئولیت‌ها در زندگی روزمره را قبول دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q10",
        "text": "احساس آمادگی و اشتیاق عمیق برای متعهد ماندن و ساختن این مسیر مشترک را دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-lifestyle",
    "category": "psychology",
    "title": "تست هماهنگی و هم‌راستایی سبک زندگی زوجین",
    "description": "تحلیل میزان تفاهم در تصمیم‌گیری‌های روزمره، مدیریت مالی، تعاملات اجتماعی و ارزش‌های کلان",
    "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "duration": "۴ دقیقه",
    "questionsCount": 8,
    "badge": "تفاهم سبک زندگی",
    "questions": [
      {
        "id": "q1",
        "text": "درباره محل سکونت، سبک چیدمان منزل و اولویت‌های رفاهی اولیه با همسرم توافق کامل دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "نحوه گذراندن اوقات فراغت، رفت‌وآمدهای فامیلی و تعاملات اجتماعی ما کاملاً هماهنگ است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "نظرات ما درباره نحوه پس‌انداز، سرمایه‌گذاری و مدیریت خرج‌های روزمره زندگی به هم نزدیک است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q4",
        "text": "در موضوعات مرتبط با اشتغال، تحصیل و اهداف شغلی آینده، یکدیگر را تشویق و حمایت می‌کنیم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q5",
        "text": "سبک زندگی، عادات فردی و نظم روزمره ما با یکدیگر سازگاری قابل توجهی دارد.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q6",
        "text": "درباره نحوه تعامل با خانواده‌های یکدیگر و حفظ مرزهای احترام توافق نظر داریم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q7",
        "text": "معیارها و ارزش‌های اخلاقی و اعتقادی ما برای اداره زندگی مشترک هم‌راستا است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q8",
        "text": "درباره زمان‌بندی برنامه‌های آینده زندگی (مانند فرزندواری) به درک مشترک رسیده‌ایم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-stress",
    "category": "psychology",
    "title": "مقیاس مدیریت استرس و اضطراب برنامه‌ریزی عروسی",
    "description": "سنجش تاب‌آوری هیجانی، حفظ صمیمیت زوجین و کنترل چالش‌های اجرایی و مالی قبل از مراسم",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 6,
    "badge": "مدیریت استرس",
    "questions": [
      {
        "id": "q1",
        "text": "هنگام مواجهه با هزینه‌های غیرمنتظره عروسی، آرامش خود را حفظ کرده و منطقی تصمیم می‌گیرم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "تداخل نظرات خانواده‌ها درباره تشریفات عروسی باعث ایجاد تنش شدیدی میان ما نمی‌شود.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "زمان‌بندی و حجم کارهای چک‌لیست برنامه‌ریزی باعث احساس فرسودگی شدید ذهنی من نشده است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q4",
        "text": "در صورت بروز تاخیر یا ناهماهنگی در خدمات تامین‌کنندگان، قدرت جایگزینی و صبر دارم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q5",
        "text": "ارتباط عاطفی و صمیمیت ما تحت تاثیر شلوغی‌ها و استرس‌های دوره برنامه‌ریزی کم نشده است.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      },
      {
        "id": "q6",
        "text": "از ابزارهای مدیریت آنلاین و مشورت با متخصصین برای کاهش فشار کارهای عروسی استفاده می‌کنم.",
        "options": [
          {
            "id": "opt1",
            "label": "کاملاً موافقم",
            "weight": 10,
            "styleKey": "compat_vhigh",
            "score": {
              "compat": 10
            }
          },
          {
            "id": "opt2",
            "label": "موافقم",
            "weight": 8,
            "styleKey": "compat_high",
            "score": {
              "compat": 8
            }
          },
          {
            "id": "opt3",
            "label": "تا حدودی / نظری ندارم",
            "weight": 5,
            "styleKey": "compat_mid",
            "score": {
              "compat": 5
            }
          },
          {
            "id": "opt4",
            "label": "مخالفم",
            "weight": 2,
            "styleKey": "compat_low",
            "score": {
              "compat": 2
            }
          },
          {
            "id": "opt5",
            "label": "کاملاً مخالفم",
            "weight": 0,
            "styleKey": "compat_vlow",
            "score": {
              "compat": 0
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-makeup",
    "category": "beauty",
    "title": "تست پیشنهاد میکاپ و شینیون عروس",
    "description": "اروپایی و نود، لایت شیک، کلاسیک، عربی/غلیظ - بهترین سبک آرایش چهره",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "میکاپ & شینیون",
    "questions": [
      {
        "id": "q1",
        "text": "کدام سبک آرایش چشم و غلظت سایه را ترجیح می‌دهید؟",
        "options": [
          {
            "id": "opt1",
            "label": "میکاپ نود و اروپایی (تاترا، کانتور لایت و سایه قهوه‌ای ملایم)",
            "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90,
              "boho": 10
            }
          },
          {
            "id": "opt2",
            "label": "میکاپ لایت شیک و درخشان (گلیتر ملایم و خط چشم دقیق)",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "میکاپ کلاسیـک هالیوودی (رژ لب قرمز یا زرشکی با خط چشم گربه‌ای)",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt4",
            "label": "میکاپ غلیظ و عربی (اسموکی تیره، مژه پرحجم و کانتورینگ برجسته)",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "مدل مو و شینیون دلخواه شما چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "شینیون بسته مینی‌مال خطی پایین گردن",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "موهای باز یا نیمه‌باز با فر درشت رومانتیک",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "شینیون کلاسیک خلوج و جمع بالای سر",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "انتخاب شما برای رژ لب چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "رژ لب گوشتی / کالباسی مات نود",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "رژ لب صورتی ملایم یا برق لب شاین",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "رژ لب قرمز مخملی کلاسیک",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-accessories",
    "category": "beauty",
    "title": "تست انتخاب تاج، تور و اکسسوری مناسب",
    "description": "تاج ملکه، ریسه زری، تور بلند حریر یا کلاه فرانسوی - تکمیل استایل زیبایی",
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    "duration": "۲ دقیقه",
    "questionsCount": 2,
    "badge": "تاج & اکسسوری",
    "questions": [
      {
        "id": "q1",
        "text": "کدام نوع تاج یا اکسسوری سر را برای شینیون خود می‌پسندید؟",
        "options": [
          {
            "id": "opt1",
            "label": "تاج فلزی بلند مروارید و کریستال طرح ملکه‌ای",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "ریسه ظریف کریستالی یا تل مینی‌مال شیشه‌ای",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "تاج گل طبیعی یا ریسه مروارید بوهمیان",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt4",
            "label": "کلاه توردار فرانسوی کلاسیـک vintage",
            "styleKey": "vintage",
            "score": {
              "vintage": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "قد تور سر عروس تا چه اندازه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "تور سر خیلی بلند رویکف زمین با حاشیه دانتل",
            "styleKey": "classic",
            "score": {
              "classic": 90,
              "luxury": 20
            }
          },
          {
            "id": "opt2",
            "label": "تور سر متوسط تا کمر با اکلیل ملایم",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "بدون تور سر یا تور کوتاه‌مینی‌مال",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-cinematography",
    "category": "beauty",
    "title": "تست سبک فیلم‌برداری و عکاسی عروسی",
    "description": "مستند داستانی، کلاسیک، سناریومحور یا هالیوودی - ساخت خاطره ماندگار تصویری",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "سبک تصویربرداری",
    "questions": [
      {
        "id": "q1",
        "text": "کدام سبک تدوین کلیپ عروسی با روحیات شما سازگارتر است؟",
        "options": [
          {
            "id": "opt1",
            "label": "سبک مستند داستانی (Documentary) با ضبط لحظات واقعی بدون ژست تصنعی",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "modern": 20
            }
          },
          {
            "id": "opt2",
            "label": "سبک سینمایی هالیوودی با تجهیزات کرین، هلی‌شات و نورپردازی سینمایی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt3",
            "label": "سبک کلاسیک با آهنگ‌های صمیمی و ژست‌های وقار عروسی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt4",
            "label": "کلیپ سناریومحور کوتاه با دیالوگ‌های عاشقانه زوج",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "نوع چاپ آلبوم دیجیتال عکاسی چگونه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "آلبوم جلد چرم با افکت‌های عکاسی سیاه و سفید کلاسیـک",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "آلبوم جلد شیشه‌ای ژورنالی ایتالیایی با صفحه بزرگ",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "آلبوم پارچه‌ای نود با کاغذ مات مینی‌مال",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-catering-menu",
    "category": "catering",
    "title": "تست انتخاب سبک پذیرایی و منوی غذایی",
    "description": "دیس‌پرس، سلف‌سرویس، فینگرفود یا کافه بار ویژه - طعم پذیرایی شام عروسی",
    "image": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "منو و پذیرایی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام مدل سرو غذا برای مهمانان شما راحتی و جذابیت بیشتری ایجاد می‌کند؟",
        "options": [
          {
            "id": "opt1",
            "label": "سلف‌سرویس کامل با چندین مدل کباب، خورشت، سالادبار و دسر اختصاصی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 15
            }
          },
          {
            "id": "opt2",
            "label": "سرو دیس‌پرس همزمان روی میزهای مهمانان بدون صف ایستادن",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt3",
            "label": "ایستگاه‌های فینگرفود گرم، باربیکیو زنده و استیشن باریستا در فضای باز",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "modern": 20
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "کدام آیتم پذیرایی جانبی هیجان بیشتری برای مهمانان ایجاد می‌کند؟",
        "options": [
          {
            "id": "opt1",
            "label": "بار اختصاصی موکتیل و آبمیوه طبیعی تازه",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "استیشن قهوه اسپرسو و وافل گرم",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "میز شوکولات‌بار و آبشار شکلات فونتانا",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-catering-music",
    "category": "catering",
    "title": "تست تم موسیقی و سبک دی‌جی / ارکستر زنده",
    "description": "سنتی تلفیقی، پاپ و شاد، الکترونیک/مدرن یا نوستالژیک - ساخت انرژی شب جشن",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "موسیقی & دی‌جی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام ترکیب موسیقی برای سیستم صوتی و هیجان سالن رقص جشن شما عالی است؟",
        "options": [
          {
            "id": "opt1",
            "label": "دی‌جی حرفه‌ای با رمیکس‌های انرژی بالای پاپ، ریمیکس شاد و نورپردازی لیزری",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt2",
            "label": "ارکستر زنده با خواننده مطرح، نوازندگان ساکسیفون و پرکاشن",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt3",
            "label": "گروه موسیقی سنتی تلفیقی (کمانچه و تمبک) به همراه موزیک پاپ",
            "styleKey": "classic",
            "score": {
              "classic": 85,
              "vintage": 20
            }
          },
          {
            "id": "opt4",
            "label": "آهنگ‌های نوستالژیک قدیمی و خاطره‌انگیز دهه ۶۰ و ۷۰",
            "styleKey": "vintage",
            "score": {
              "vintage": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "آهنگ تانگو و رقص دونفره ورودی عروس و داماد چه سبک ملودی داشته باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "موزیک بیکلام ویولن و پیانو کلاسیک شاهانه",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt2",
            "label": "آهنگ عاشقانه پاپ ایرانی یا انگلیسی با صدای خواننده مورد علاقه",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "تانگوی اصیل آکاردئون خنک و احساسی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      }
    ]
  }
]
    };

    // ==========================================
    // DIGITAL INVITATION BUILDER STATE & LOGIC
    // ==========================================
    let savedThemeInit = "emerald-gold";
    try {
      savedThemeInit = localStorage.getItem('aroosi_invitation_theme') || "emerald-gold";
    } catch (e) {}

    let invitationState = {
      theme: savedThemeInit, // emerald-gold, dark-minimal, royal-classic, boho-botanical, glassmorphism, pearl-white
      displayLang: "fa", // fa, en
      fontPersian: "vazirmatn", // nastaliq, vazirmatn, lalezar, shabnam, naskh
      fontEnglish: "great-vibes", // great-vibes, alex-brush, playfair, garamond, cinzel, bodoni
      envelopeOpened: false,
      isPlayingAudio: false,
      audioChoice: "lovers", // lovers, piano, custom
      customAudioUrl: "",
      mobileTab: "edit", // edit, preview
      groomName: "علی",
      brideName: "سارا",
      groomNameEn: "Ali",
      brideNameEn: "Sara",
      weddingDateJalali: "۱۴۰۳/۰۶/۱۵",
      ceremonyTime: "۱۸:۰۰ الی ۲۴:۰۰",
      welcomePoem: "در مکتب عشق، تو بهترین همسفری\nبا مقدم گرمتان در شب پیوند ما، محفل‌مان بهشت می‌گردد.",
      venueName: "باغ تالار تشریفاتی زمرد",
      venueAddress: "تهران، احمدآباد مستوفی، خیابان صنوبر، پلاک ۴۵",
      googleMapsUrl: "https://maps.google.com",
      neshanUrl: "https://neshan.org",
      baladUrl: "https://balad.ir",
      bankCardNumber: "۶۰۳۷-۹۹۷۹-۱۲۳۴-۵۶۷۸",
      bankCardHolder: "علی محمدی و سارا حسینی (صندوق شاباش و هدیه)",
      enableRsvp: true,
      enableShagoon: true,
      enableCountdown: true,
      enableGallery: true,
      galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
      ],
      rsvps: [
        { id: 1, name: "رضا احمدی", status: "attending", guestsCount: 2, note: "با آرزوی خوشبخت‌ترین روزها" },
        { id: 2, name: "مریم کریمی", status: "attending", guestsCount: 1, note: "تبریک فراوان" },
        { id: 3, name: "امیرحسین کاظمی", status: "declined", guestsCount: 0, note: "متاسفانه مسافرت هستم" }
      ]
    };

    function setInvDisplayLang(lang) {
      invitationState.displayLang = lang;
      const btnFa = document.getElementById('btn-lang-fa');
      const btnEn = document.getElementById('btn-lang-en');
      if (btnFa && btnEn) {
        if (lang === 'fa') {
          btnFa.className = "px-3 py-1.5 rounded-lg bg-primary text-white transition-all shadow-xs";
          btnEn.className = "px-3 py-1.5 rounded-lg text-secondary hover:text-graphite transition-all";
        } else {
          btnEn.className = "px-3 py-1.5 rounded-lg bg-primary text-white transition-all shadow-xs";
          btnFa.className = "px-3 py-1.5 rounded-lg text-secondary hover:text-graphite transition-all";
        }
      }
      renderInvitationPreview();
    }

    function updateInvStateFromForm() {
      invitationState.groomName = document.getElementById('inv-input-groom')?.value.trim() || 'علی';
      invitationState.brideName = document.getElementById('inv-input-bride')?.value.trim() || 'سارا';
      invitationState.groomNameEn = document.getElementById('inv-input-groom-en')?.value.trim() || 'Ali';
      invitationState.brideNameEn = document.getElementById('inv-input-bride-en')?.value.trim() || 'Sara';
      invitationState.fontPersian = document.getElementById('inv-select-font-fa')?.value || 'vazirmatn';
      invitationState.fontEnglish = document.getElementById('inv-select-font-en')?.value || 'great-vibes';
      invitationState.weddingDateJalali = document.getElementById('inv-input-date')?.value.trim() || '۱۴۰۳/۰۶/۱۵';
      invitationState.ceremonyTime = document.getElementById('inv-input-time')?.value.trim() || '۱۸:۰۰ الی ۲۴:۰۰';
      invitationState.welcomePoem = document.getElementById('inv-input-poem')?.value.trim() || '';
      invitationState.venueName = document.getElementById('inv-input-venue')?.value.trim() || '';
      invitationState.venueAddress = document.getElementById('inv-input-address')?.value.trim() || '';
      invitationState.googleMapsUrl = document.getElementById('inv-input-gmaps')?.value.trim() || '#';
      invitationState.neshanUrl = document.getElementById('inv-input-neshan')?.value.trim() || '#';
      invitationState.baladUrl = document.getElementById('inv-input-balad')?.value.trim() || '#';
      invitationState.bankCardNumber = document.getElementById('inv-input-cardnum')?.value.trim() || '';
      invitationState.bankCardHolder = document.getElementById('inv-input-cardholder')?.value.trim() || '';
      invitationState.customAudioUrl = document.getElementById('inv-input-audio-url')?.value.trim() || '';

      renderInvitationPreview();
    }

    function setInvTheme(themeName) {
      invitationState.theme = themeName;
      try {
        localStorage.setItem('aroosi_invitation_theme', themeName);
      } catch (e) {}

      document.querySelectorAll('.inv-theme-card').forEach(card => {
        card.className = "inv-theme-card p-3.5 rounded-2xl border border-[#C5A059]/30 bg-[#161C2B] hover:border-[#D4AF37] cursor-pointer transition-all space-y-2 text-white";
        const check = card.querySelector('.theme-check');
        if (check) check.classList.add('hidden');
      });

      const activeCard = document.getElementById('inv-theme-' + themeName);
      if (activeCard) {
        activeCard.className = "inv-theme-card p-3.5 rounded-2xl border-2 border-[#D4AF37] bg-[#D4AF37]/15 cursor-pointer transition-all space-y-2 text-white";
        const check = activeCard.querySelector('.theme-check');
        if (check) check.classList.remove('hidden');
      }

      // Update Quick Theme Switcher Bar Active States
      ['dark-minimal', 'emerald-gold', 'royal-classic'].forEach(t => {
        const btn = document.getElementById('inv-quicktheme-' + t);
        if (btn) {
          if (t === themeName) {
            btn.classList.add('ring-2', 'ring-[#D4AF37]', 'scale-105', 'shadow-md');
          } else {
            btn.classList.remove('ring-2', 'ring-[#D4AF37]', 'scale-105', 'shadow-md');
          }
        }
      });

      renderInvitationPreview();
    }

    function setInvAudioChoice(choice) {
      invitationState.audioChoice = choice;
      const customBox = document.getElementById('inv-custom-audio-box');
      if (customBox) {
        customBox.classList.toggle('hidden', choice !== 'custom');
      }
    }

    function toggleInvFeature(featureKey) {
      invitationState[featureKey] = !invitationState[featureKey];
      renderInvitationPreview();
    }

    function switchInvMobileTab(tab) {
      invitationState.mobileTab = tab;
      const editBtn = document.getElementById('inv-mobtab-edit');
      const prevBtn = document.getElementById('inv-mobtab-preview');
      const controlPanel = document.getElementById('inv-control-panel');
      const previewPanel = document.getElementById('inv-preview-panel');

      if (tab === 'edit') {
        editBtn.className = "flex-1 py-2.5 rounded-xl transition-all bg-primary text-white text-center";
        prevBtn.className = "flex-1 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite text-center";
        controlPanel.classList.remove('hidden');
        previewPanel.classList.add('hidden');
      } else {
        prevBtn.className = "flex-1 py-2.5 rounded-xl transition-all bg-primary text-white text-center";
        editBtn.className = "flex-1 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite text-center";
        controlPanel.classList.add('hidden');
        previewPanel.classList.remove('hidden');
      }
    }

    function openEnvelopeAnimation() {
      invitationState.envelopeOpened = true;
      const overlay = document.getElementById('inv-envelope-overlay');
      if (overlay) {
        overlay.classList.add('opacity-0', 'pointer-events-none', '-translate-y-full', 'scale-95');
      }
      if (!invitationState.isPlayingAudio && typeof toggleInvMusic === 'function') {
        toggleInvMusic();
      }
    }

    function resetEnvelopeAnimation() {
      invitationState.envelopeOpened = false;
      const overlay = document.getElementById('inv-envelope-overlay');
      if (overlay) {
        overlay.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-full');
      }
    }

    function toggleInvMusic() {
      invitationState.isPlayingAudio = !invitationState.isPlayingAudio;
      const text = document.getElementById('inv-music-text');
      const icon = document.getElementById('inv-music-icon');
      const indicator = document.getElementById('inv-music-indicator');

      if (invitationState.isPlayingAudio) {
        if (text) text.innerText = 'در حال پخش...';
        if (icon) icon.className = "w-3 h-3 text-[#D4AF37] animate-spin";
        if (indicator) indicator.className = "w-2 h-2 rounded-full bg-[#D4AF37] animate-ping inline-block shadow-[0_0_8px_#D4AF37]";
      } else {
        if (text) text.innerText = 'موزیک آنلاین';
        if (icon) icon.className = "w-3 h-3 text-[#D4AF37]";
        if (indicator) indicator.className = "w-2 h-2 rounded-full bg-slate-500 inline-block";
      }
    }

    function getSelectedFontFamily() {
      if (invitationState.displayLang === 'en') {
        const fontMap = {
          'great-vibes': "'Great Vibes', cursive",
          'alex-brush': "'Alex Brush', cursive",
          'playfair': "'Playfair Display', serif",
          'garamond': "'Cormorant Garamond', serif",
          'cinzel': "'Cinzel', serif",
          'bodoni': "'Bodoni Moda', serif"
        };
        return fontMap[invitationState.fontEnglish] || "'Great Vibes', cursive";
      } else {
        const fontMap = {
          'nastaliq': "'Iran Nastaliq', 'Vazirmatn', cursive",
          'vazirmatn': "'Vazirmatn', sans-serif",
          'lalezar': "'Lalezar', cursive, sans-serif",
          'shabnam': "'Shabnam', 'Sahel', sans-serif",
          'naskh': "'Sahel', 'Vazirmatn', sans-serif"
        };
        return fontMap[invitationState.fontPersian] || "'Vazirmatn', sans-serif";
      }
    }

    function renderInvitationPreview() {
      const isEn = invitationState.displayLang === 'en';
      const groomStr = isEn ? (invitationState.groomNameEn || 'Ali') : invitationState.groomName;
      const brideStr = isEn ? (invitationState.brideNameEn || 'Sara') : invitationState.brideName;
      const fontCSS = getSelectedFontFamily();

      // 1. Header Title
      const headerTitle = document.getElementById('inv-header-title');
      if (headerTitle) {
        headerTitle.innerText = `کارت دعوت آنلاین: ${groomStr} و ${brideStr}`;
      }

      const envCoupleNames = document.getElementById('env-couple-names');
      if (envCoupleNames) {
        envCoupleNames.innerText = `${groomStr} & ${brideStr}`;
        envCoupleNames.style.fontFamily = fontCSS;
      }

      // 2. Monogram & Poem
      const monogram = document.getElementById('inv-monogram');
      if (monogram) {
        const gChar = groomStr.charAt(0) || 'A';
        const bChar = brideStr.charAt(0) || 'S';
        monogram.innerText = `${gChar} & ${bChar}`;
        monogram.style.fontFamily = fontCSS;
      }

      const previewPoem = document.getElementById('inv-preview-poem');
      if (previewPoem) previewPoem.innerText = invitationState.welcomePoem;

      const previewNames = document.getElementById('inv-preview-names');
      if (previewNames) {
        previewNames.style.fontFamily = fontCSS;
        previewNames.style.fontSize = isEn ? "2.2rem" : "1.8rem";
        previewNames.style.direction = isEn ? "ltr" : "rtl";
        previewNames.innerHTML = `
          <span>${groomStr}</span>
          <i data-lucide="heart" class="w-6 h-6 text-rose-500 fill-rose-500 inline shrink-0 mx-2"></i>
          <span>${brideStr}</span>
        `;
      }

      // 3. Date & Time
      const previewDate = document.getElementById('inv-preview-date');
      const previewTime = document.getElementById('inv-preview-time');
      if (previewDate) previewDate.innerText = invitationState.weddingDateJalali;
      if (previewTime) previewTime.innerText = `ساعت ${invitationState.ceremonyTime}`;

      // Update Live Countdown Counters
      const cntDays = document.getElementById('inv-cnt-days');
      const cntHours = document.getElementById('inv-cnt-hours');
      const cntMins = document.getElementById('inv-cnt-mins');
      const cntSecs = document.getElementById('inv-cnt-secs');
      if (cntDays && cntHours && cntMins && cntSecs) {
        cntDays.innerText = "۱۴۵";
        cntHours.innerText = "۰۸";
        cntMins.innerText = "۲۴";
        cntSecs.innerText = "۵۰";
      }

      // 4. Venue & Map Links
      const previewVenue = document.getElementById('inv-preview-venue');
      const previewAddress = document.getElementById('inv-preview-address');
      if (previewVenue) previewVenue.innerText = invitationState.venueName;
      if (previewAddress) previewAddress.innerText = invitationState.venueAddress;

      const linkGmaps = document.getElementById('inv-link-gmaps');
      const linkNeshan = document.getElementById('inv-link-neshan');
      const linkBalad = document.getElementById('inv-link-balad');
      if (linkGmaps) linkGmaps.href = invitationState.googleMapsUrl || "#";
      if (linkNeshan) linkNeshan.href = invitationState.neshanUrl || "#";
      if (linkBalad) linkBalad.href = invitationState.baladUrl || "#";

      // 5. Shagoon Card
      const previewCardnum = document.getElementById('inv-preview-cardnum');
      const previewCardholder = document.getElementById('inv-preview-cardholder');
      if (previewCardnum) previewCardnum.innerText = invitationState.bankCardNumber;
      if (previewCardholder) previewCardholder.innerText = invitationState.bankCardHolder;

      // 6. Toggles
      const modCountdown = document.getElementById('inv-mod-countdown');
      const modGallery = document.getElementById('inv-mod-gallery');
      const modShagoon = document.getElementById('inv-mod-shagoon');
      const modRsvp = document.getElementById('inv-mod-rsvp');

      if (modCountdown) modCountdown.classList.toggle('hidden', !invitationState.enableCountdown);
      if (modGallery) modGallery.classList.toggle('hidden', !invitationState.enableGallery);
      if (modShagoon) modShagoon.classList.toggle('hidden', !invitationState.enableShagoon);
      if (modRsvp) modRsvp.classList.toggle('hidden', !invitationState.enableRsvp);

      // 7. Theme Styling Application (6 Luxury Themes)
      const cardInner = document.getElementById('inv-card-inner');
      const themeEmblem = document.getElementById('inv-theme-emblem');
      const themeTagline = document.getElementById('inv-theme-tagline');

      if (cardInner) {
        if (invitationState.theme === 'emerald-gold') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#1C3A27] via-[#1B3B2B] to-[#1C3A27] text-amber-100 border-2 border-amber-300/40 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-amber-300 bg-amber-400/20 text-amber-200 text-xl font-black shadow-lg backdrop-blur-sm";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-300 uppercase";
        } else if (invitationState.theme === 'dark-minimal') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#121212] via-[#1A1A1A] to-[#121212] text-slate-100 border border-slate-700 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-amber-400/80 bg-slate-800 text-amber-300 text-xl font-black shadow-lg";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-400 uppercase";
        } else if (invitationState.theme === 'royal-classic') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#FDFBF7] via-[#F6F2EA] to-[#FDFBF7] text-amber-950 border-2 border-amber-300/80 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-amber-500 bg-amber-100 text-amber-900 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-800 uppercase";
        } else if (invitationState.theme === 'boho-botanical') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#E8EFE9] via-[#F4F0EA] to-[#E8EFE9] text-emerald-950 border border-emerald-200 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-400 bg-emerald-100/80 text-emerald-900 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-emerald-800 uppercase";
        } else if (invitationState.theme === 'glassmorphism') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-purple-950/90 via-slate-900/90 to-indigo-950/90 text-cyan-100 border border-white/20 shadow-2xl rounded-3xl backdrop-blur-xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-cyan-300/60 bg-white/10 text-cyan-200 text-xl font-black shadow-lg";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-cyan-300 uppercase";
        } else if (invitationState.theme === 'pearl-white') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#FAFAFA] via-[#F4F4F5] to-[#FAFAFA] text-slate-900 border border-slate-200 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-slate-400 bg-white text-slate-800 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-slate-700 uppercase";
        }
      }

      // 8. Admin RSVP Table Render
      renderInvAdminRsvpTable();

      lucide.createIcons();
    }

    function renderInvAdminRsvpTable() {
      const tbody = document.getElementById('inv-admin-rsvp-table');
      const badge = document.getElementById('inv-rsvp-summary-badge');
      if (!tbody) return;

      tbody.innerHTML = '';
      let totalAttendingGuests = 0;

      invitationState.rsvps.forEach(r => {
        if (r.status === 'attending') {
          totalAttendingGuests += (r.guestsCount || 1);
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${r.name}</td>
          <td class="p-3">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              r.status === 'attending' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }">
              ${r.status === 'attending' ? 'شرکت می‌کند' : 'عذرخواهی / عدم حضور'}
            </span>
          </td>
          <td class="p-3 font-bold text-primary">${r.status === 'attending' ? r.guestsCount + ' نفر' : '-'}</td>
          <td class="p-3 text-secondary text-[11px]">${r.note || '-'}</td>
        `;
        tbody.appendChild(tr);
      });

      if (badge) {
        badge.innerHTML = `<span>تعداد حاضرین قطعی: ${totalAttendingGuests} نفر</span>`;
      }
    }

    function handleQuickRsvp(status) {
      const nameInp = document.getElementById('guest-rsvp-name');
      const name = nameInp ? nameInp.value.trim() : "";
      const guestName = name || "مهمان گرامی";

      invitationState.rsvps.unshift({
        id: Date.now(),
        name: guestName,
        status: status,
        guestsCount: status === 'attending' ? 1 : 0,
        note: status === 'attending' ? 'ثبت پاسخ ۱کلیکی: با کمال میل شرکت می‌کنم' : 'ثبت پاسخ ۱کلیکی: امکان حضور ندارم'
      });

      renderInvAdminRsvpTable();
      if (nameInp) nameInp.value = '';

      if (status === 'attending') {
        showToast(`پاسخ ۱کلیکی شما ثبت شد! با کمال میل منتظر دیدار ${guestName} هستیم.`, 'success');
      } else {
        showToast('پاسخ عدم حضور شما ثبت گردید. با سپاس از اعلام قبلی.', 'info');
      }
    }

    function handleGuestRsvpSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('guest-rsvp-name').value.trim();
      const status = document.querySelector('input[name="guest-rsvp-status"]:checked').value;
      const count = parseInt(document.getElementById('guest-rsvp-count').value) || 1;
      const menuPref = document.getElementById('guest-rsvp-menu')?.value || 'کباب و جوجه کلاسیک';
      const specialNeeds = document.getElementById('guest-rsvp-special-needs')?.value.trim() || '';
      const note = document.getElementById('guest-rsvp-note').value.trim();

      if (!name) return;

      const fullNote = [
        menuPref ? `منو: ${menuPref}` : '',
        specialNeeds ? `نیازمندی خاص: ${specialNeeds}` : '',
        note
      ].filter(Boolean).join(' | ');

      invitationState.rsvps.unshift({
        id: Date.now(),
        name,
        status,
        guestsCount: status === 'attending' ? count : 0,
        note: fullNote
      });

      renderInvAdminRsvpTable();
      document.getElementById('guest-rsvp-name').value = '';
      document.getElementById('guest-rsvp-note').value = '';

      showToast('پاسخ شما با موفقیت ثبت شد. با تشکر از اعلام حضور شما!', 'success');
    }

    function copyBankCardNumber() {
      if (navigator.clipboard && invitationState.bankCardNumber) {
        navigator.clipboard.writeText(invitationState.bankCardNumber);
        showToast('شماره کارت با موفقیت در حافظه کپی شد: ' + invitationState.bankCardNumber, 'info');
      } else {
        showToast('شماره کارت: ' + invitationState.bankCardNumber, 'info');
      }
    }

    function copyInvitationLink() {
      const link = window.location.origin + '/invitation.html';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('لینک اختصاصی کارت دعوت کپی شد ✨', 'info');
      } else {
        showToast('لینک کارت دعوت: ' + link, 'info');
      }
    }

    function openQrModal() {
      const modal = document.getElementById('inv-qr-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeQrModal() {
      const modal = document.getElementById('inv-qr-modal');
      if (modal) modal.classList.add('hidden');
    }

    window.downloadQrCode = function() {
      const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://aroosito.com/invitation/ali-and-sara&color=0f172a";
      const a = document.createElement('a');
      a.href = qrUrl;
      a.download = 'invitation-qr-code-ali-sara.png';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      if (typeof showToast === 'function') showToast('کارت QR دعوت با موفقیت آماده دانلود شد', 'success');
    };

    function switchQuizCategoryTab(catKey) {
      quizState.activeTab = catKey;

      ['style', 'psychology', 'beauty', 'catering'].forEach(tab => {
        const btn = document.getElementById('quiz-tab-' + tab);
        if (btn) {
          if (tab === catKey) {
            btn.className = "flex-1 min-w-[140px] py-3 px-3 rounded-xl transition-all bg-primary text-white text-center flex items-center justify-center gap-1.5 shadow-xs";
          } else {
            btn.className = "flex-1 min-w-[140px] py-3 px-3 rounded-xl transition-all text-secondary hover:text-graphite text-center flex items-center justify-center gap-1.5";
          }
        }
      });

      renderQuizCatalogCards();
    }

    const QUIZ_HISTORY_KEY = 'aroosi_quiz_history_db';

    function getQuizHistory() {
      try {
        const stored = localStorage.getItem(QUIZ_HISTORY_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    function saveQuizHistoryEntry(entry) {
      try {
        let history = getQuizHistory();
        history = [entry, ...history.filter(h => h.quizId !== entry.quizId)].slice(0, 10);
        localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
      } catch (e) {
        console.error('Failed to save quiz history', e);
      }
    }

    function renderQuizCatalogCards() {
      const grid = document.getElementById('quiz-cards-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const filteredQuizzes = quizState.quizzes.filter(q => q.category === quizState.activeTab);
      const history = getQuizHistory();

      filteredQuizzes.forEach(quiz => {
        const pastResult = history.find(h => h.quizId === quiz.id);
        const card = document.createElement('div');
        card.className = "bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_12px_30px_rgba(197,160,89,0.25)] transition-all duration-300 flex flex-col justify-between text-white";
        card.innerHTML = `
          <div>
            <div class="relative h-48 overflow-hidden bg-[#07090E]">
              <img src="${quiz.image}" alt="${quiz.title}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500">
              <div class="absolute top-3 right-3 bg-[#07090E]/90 text-[#C5A059] border border-[#C5A059]/50 text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                ${quiz.badge}
              </div>
              ${pastResult ? `
                <div class="absolute bottom-3 right-3 left-3 bg-[#07090E]/90 backdrop-blur-md text-[#C5A059] text-[11px] font-bold px-3 py-1.5 rounded-xl border border-[#C5A059]/40 flex justify-between items-center shadow-md">
                  <span>آخرین نتیجه: ${pastResult.scorePercent}٪</span>
                  <span class="text-slate-300 text-[10px] font-normal">${pastResult.date}</span>
                </div>
              ` : ''}
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3 text-xs font-bold text-slate-300">
                <span class="flex items-center gap-1">
                  <i data-lucide="help-circle" class="w-4 h-4 text-[#C5A059]"></i>
                  <span>${quiz.questionsCount} سوال</span>
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  <i data-lucide="clock" class="w-4 h-4 text-[#C5A059]"></i>
                  <span>زمان: ${quiz.duration}</span>
                </span>
              </div>

              <h3 class="text-lg font-bold text-[#F7F5F0] leading-snug">${quiz.title}</h3>
              <p class="text-xs text-slate-300 leading-relaxed">${quiz.description}</p>
            </div>
          </div>

          <div class="p-6 pt-0 space-y-2">
            <button onclick="startQuizRunner('${quiz.id}')" class="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] font-black py-3 rounded-2xl text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>${pastResult ? 'شرکت مجدد در تست' : 'شروع تست ✨'}</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      // Render Past History Drawer/Banner if exists
      if (history.length > 0 && quizState.activeTab === 'psychology') {
        const historyBanner = document.createElement('div');
        historyBanner.className = "col-span-full bg-[#FCFCFA] border border-[#D4AF37]/40 rounded-3xl p-5 space-y-3 mt-4 shadow-xs";
        historyBanner.innerHTML = `
          <div class="flex justify-between items-center border-b border-[#E0D8C8] pb-3">
            <div class="flex items-center gap-2 text-xs font-bold text-[#1B3B2B]">
              <i data-lucide="history" class="w-4 h-4 text-[#D4AF37]"></i>
              <span>سوابق آزمون‌های روان‌شناسی انجام‌شده شما</span>
            </div>
            <span class="text-[11px] text-secondary font-medium">${history.length} تست ثبت‌شده</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            ${history.filter(h => h.quizCategory === 'psychology').map(h => `
              <div class="p-3.5 bg-[#161C2B] border border-[#C5A059]/30 rounded-2xl flex justify-between items-center gap-2 shadow-2xs text-white">
                <div>
                  <span class="font-bold text-white block truncate max-w-[180px]">${h.quizTitle}</span>
                  <span class="text-[10px] text-slate-400 block">${h.levelTitle}</span>
                </div>
                <div class="text-left shrink-0 dir-ltr">
                  <span class="font-black text-[#D4AF37] text-sm block">${h.scorePercent}٪</span>
                  <span class="text-[9px] text-slate-400 block">${h.date}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        grid.appendChild(historyBanner);
      }

      lucide.createIcons();
    }

    // ==========================================
    // CHAT & DIRECT MESSAGING RENDER LOGIC
    // ==========================================
    function renderChatThreadsList() {
      const container = document.getElementById('chat-threads-list-container');
      const countBadge = document.getElementById('chat-total-threads-count');
      const navBadge = document.getElementById('nav-chat-unread-badge');
      if (!container) return;

      container.innerHTML = '';
      const threads = chatState.threads;

      if (countBadge) countBadge.innerText = `${threads.length} گفتگو`;

      let totalUnread = 0;
      threads.forEach(t => {
        totalUnread += (t.unreadCount || 0);
      });

      if (navBadge) {
        if (totalUnread > 0) {
          navBadge.innerText = totalUnread;
          navBadge.classList.remove('hidden');
        } else {
          navBadge.classList.add('hidden');
        }
      }

      if (threads.length === 0) {
        container.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs font-medium">هیچ گفت‌وگویی یافت نشد.</div>`;
        return;
      }

      threads.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-[#141A28] border-r-4 border-[#C5A059] shadow-lg' : 'hover:bg-[#141A28]/50 bg-[#07090E]'
        }`;

        let badgeBg = "bg-blue-950/80 text-blue-300 border-blue-800/40";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-950/80 text-emerald-300 border-emerald-800/40";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-950/80 text-purple-300 border-purple-800/40";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#07090E]">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
            ${t.unreadCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#07090E] shadow-sm">
                ${t.unreadCount}
              </span>
            ` : ''}
          </div>

          <div class="flex-1 min-w-0 space-y-1 text-right">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-[#F7F5F0] truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-slate-400 font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-slate-300 truncate font-medium">${t.lastMessage}</p>

            <div class="flex items-center gap-2 pt-0.5">
              <span class="text-[9px] font-bold px-2 py-0.5 rounded-full border ${badgeBg}">
                ${t.statusText}
              </span>
            </div>
          </div>
        `;

        container.appendChild(item);
      });

      lucide.createIcons();
    }

    function selectChatThread(threadId) {
      chatState.activeThreadId = threadId;
      const thread = chatState.threads.find(t => t.id === threadId);
      if (thread) {
        thread.unreadCount = 0;
      }
      renderChatThreadsList();
      renderChatActiveThread();
    }

    function filterChatThreads() {
      const query = document.getElementById('chat-thread-search')?.value.trim().toLowerCase() || '';
      const container = document.getElementById('chat-threads-list-container');
      if (!container) return;

      const filtered = chatState.threads.filter(t =>
        t.vendorName.toLowerCase().includes(query) ||
        t.vendorCategory.toLowerCase().includes(query) ||
        t.lastMessage.toLowerCase().includes(query)
      );

      container.innerHTML = '';
      if (filtered.length === 0) {
        container.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs font-medium">نتیجه‌ای یافت نشد.</div>`;
        return;
      }

      filtered.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-[#141A28] border-r-4 border-[#C5A059] shadow-lg' : 'hover:bg-[#141A28]/50 bg-[#07090E]'
        }`;

        let badgeBg = "bg-blue-950/80 text-blue-300 border-blue-800/40";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-950/80 text-emerald-300 border-emerald-800/40";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-950/80 text-purple-300 border-purple-800/40";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#07090E]">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="flex-1 min-w-0 space-y-1 text-right">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-[#F7F5F0] truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-slate-400 font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-slate-300 truncate font-medium">${t.lastMessage}</p>

            <div class="flex items-center gap-2 pt-0.5">
              <span class="text-[9px] font-bold px-2 py-0.5 rounded-full border ${badgeBg}">
                ${t.statusText}
              </span>
            </div>
          </div>
        `;

        container.appendChild(item);
      });

      lucide.createIcons();
    }

    function renderChatActiveThread() {
      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId) || chatState.threads[0];
      if (!activeThread) return;

      // 1. Top Bar Header
      const header = document.getElementById('chat-active-header');
      if (header) {
        header.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#141A28] shrink-0">
              <img src="${activeThread.vendorLogo}" alt="${activeThread.vendorName}" class="w-full h-full object-cover">
            </div>
            <div class="text-right">
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-[#F7F5F0]">${activeThread.vendorName}</h3>
                ${activeThread.verified ? `
                  <span class="bg-[#C5A059] text-[#07090E] text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                    <i data-lucide="shield-check" class="w-3 h-3"></i>
                    <span>تاییدیه رسمی</span>
                  </span>
                ` : ''}
              </div>
              <span class="text-xs text-slate-400 font-medium">${activeThread.vendorCategory} • آنلاین</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openPreInvoiceModal()" class="bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer">
              <i data-lucide="file-plus" class="w-4 h-4"></i>
              <span>صدور / مشاهده پیش‌فاکتور</span>
            </button>
            <a href="tel:${activeThread.phone}" class="bg-[#141A28] hover:bg-[#1E293B] text-[#C5A059] border border-[#C5A059]/40 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
              <i data-lucide="phone" class="w-4 h-4"></i>
              <span class="hidden sm:inline">تماس: ${activeThread.phone}</span>
            </a>
          </div>
        `;
      }

      // 2. Status Bar & Inquiry Card
      const statusBar = document.getElementById('chat-active-status-bar');
      if (statusBar && activeThread.inquiryData) {
        let statusBadgeHTML = `<span class="bg-amber-950/80 text-amber-300 border border-amber-800/40 px-3 py-1 rounded-full text-xs font-bold">در انتظار پاسخ تامین‌کننده</span>`;
        if (activeThread.statusBadge === 'quote_sent') {
          statusBadgeHTML = `<span class="bg-emerald-950/80 text-emerald-300 border border-emerald-800/40 px-3 py-1 rounded-full text-xs font-bold">پیش‌فاکتور صادر شد</span>`;
        } else if (activeThread.statusBadge === 'finalized') {
          statusBadgeHTML = `<span class="bg-purple-950/80 text-purple-300 border border-purple-800/40 px-3 py-1 rounded-full text-xs font-bold">رزرو نهایی شد</span>`;
        }

        const inq = activeThread.inquiryData;
        statusBar.innerHTML = `
          <div class="flex items-center gap-2 flex-wrap text-right">
            <span class="text-[#C5A059] font-black">اطلاعات استعلام قیمت ثبت شده:</span>
            <span class="bg-[#141A28] text-slate-200 px-2.5 py-1 rounded-lg border border-[#C5A059]/30">تاریخ: ${inq.date}</span>
            <span class="bg-[#141A28] text-slate-200 px-2.5 py-1 rounded-lg border border-[#C5A059]/30">مهمانان: ${inq.guests} نفر</span>
            <span class="bg-[#141A28] text-slate-200 px-2.5 py-1 rounded-lg border border-[#C5A059]/30">خدمات: ${inq.services ? inq.services.join('، ') : 'ارائه شده'}</span>
          </div>
          <div>
            ${statusBadgeHTML}
          </div>
        `;
      }

      // 3. Message Stream
      const streamContainer = document.getElementById('chat-messages-stream-container');
      if (streamContainer) {
        streamContainer.innerHTML = '';

        activeThread.messages.forEach(msg => {
          const isUser = msg.sender === 'user';
          const msgBox = document.createElement('div');
          msgBox.className = `flex flex-col ${isUser ? 'items-start' : 'items-end'}`;

          let content = '';

          if (msg.isInquirySummary) {
            content = `
              <div class="max-w-md bg-[#0e121c] border border-[#C5A059]/40 text-white p-4 rounded-3xl rounded-tr-xs shadow-xl space-y-2 text-xs font-medium leading-relaxed text-right">
                <div class="font-bold border-b border-[#C5A059]/30 pb-1.5 flex items-center gap-1.5 text-[#C5A059]">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>خلاصه استعلام قیمت ارسال شده</span>
                </div>
                <div class="whitespace-pre-line text-slate-200">${msg.text}</div>
                <span class="block text-[10px] text-slate-400 text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          } else if (msg.hasAppointmentCard && msg.appointmentDetails) {
            const appt = msg.appointmentDetails;
            content = `
              <div class="max-w-md w-full bg-[#0e121c] border-2 border-emerald-500/60 p-4 rounded-3xl rounded-tl-xs shadow-2xl space-y-3 text-xs font-bold text-white text-right">
                <div class="flex justify-between items-center border-b border-[#C5A059]/30 pb-2">
                  <div class="flex items-center gap-1.5 text-emerald-400 font-black">
                    <i data-lucide="calendar-check" class="w-4.5 h-4.5 text-emerald-400"></i>
                    <span>${appt.title || 'کارت تایید وقت بازدید و مشاوره حضوری'}</span>
                  </div>
                  <span class="bg-emerald-950 text-emerald-300 border border-emerald-800/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">وقت رزرو شد</span>
                </div>

                <div class="space-y-2 bg-[#141A28] p-3 rounded-2xl border border-emerald-500/30">
                  <div class="flex justify-between text-xs">
                    <span class="text-slate-400 font-medium">📅 تاریخ بازدید:</span>
                    <span class="font-black text-[#F7F5F0]">${appt.date}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-slate-400 font-medium">⏰ ساعت:</span>
                    <span class="font-black text-[#F7F5F0]">${appt.time}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-slate-400 font-medium">👤 مسئول هماهنگی:</span>
                    <span class="font-bold text-[#F7F5F0]">${appt.contactPerson || 'مدیریت تشریفات'}</span>
                  </div>
                  <div class="pt-1.5 border-t border-slate-700 text-[11px]">
                    <span class="text-slate-400 font-medium block">📍 آدرس دقیق:</span>
                    <span class="font-bold text-[#F7F5F0] leading-relaxed block mt-0.5">${appt.address}</span>
                  </div>
                </div>

                <button onclick="confirmAppointmentScheduleCard('${msg.id}')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                  <i data-lucide="check-circle" class="w-4 h-4"></i>
                  <span>تایید و ثبت در یادآور من</span>
                </button>
              </div>
            `;
          } else if (msg.hasQuoteCard && msg.quoteDetails) {
            const q = msg.quoteDetails;
            let statusBadge = `<span class="bg-amber-950 text-amber-300 border border-amber-800/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">در انتظار بررسی</span>`;
            if (q.status === 'accepted' || q.status === 'appointment_scheduled') {
              statusBadge = `<span class="bg-emerald-950 text-emerald-300 border border-emerald-800/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">تایید اولیه و رزرو جلسه حضوری</span>`;
            } else if (q.status === 'finalized_in_person') {
              statusBadge = `<span class="bg-purple-950 text-purple-300 border border-purple-800/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">نهایی‌شده حضوری</span>`;
            } else if (q.status === 'revision_requested') {
              statusBadge = `<span class="bg-rose-950 text-rose-300 border border-rose-800/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">درخواست تغییرات</span>`;
            }

            let lineItemsHtml = '';
            if (q.items && q.items.length > 0) {
              q.items.forEach(it => {
                lineItemsHtml += `
                  <div class="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
                    <span class="text-slate-200 font-medium">• ${it.name}</span>
                    <span class="text-[#C5A059] font-bold">${Number(it.price).toLocaleString('fa-IR')} تومان</span>
                  </div>
                `;
              });
            } else if (q.servicesIncluded) {
              q.servicesIncluded.forEach(s => {
                lineItemsHtml += `<div class="text-[11px] font-medium text-slate-200">• ${s}</div>`;
              });
            }

            content = `
              <div class="max-w-md w-full bg-[#0e121c] border-2 border-[#C5A059]/60 p-4 rounded-3xl rounded-tl-xs shadow-2xl space-y-3.5 text-xs font-bold text-white text-right">
                <div class="flex justify-between items-center border-b border-[#C5A059]/30 pb-2">
                  <div class="flex items-center gap-1.5 text-[#C5A059]">
                    <i data-lucide="file-check-2" class="w-4 h-4"></i>
                    <span class="font-black">${q.title}</span>
                  </div>
                  ${statusBadge}
                </div>

                <div class="grid grid-cols-2 gap-2 text-[10px] bg-[#141A28] p-2 rounded-xl border border-[#C5A059]/30">
                  <div>
                    <span class="text-slate-400 block">شماره پیش‌فاکتور:</span>
                    <span class="font-mono text-[#F7F5F0] font-bold">${q.invoiceNumber || 'INV-1403-8821'}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 block">اعتبار تا:</span>
                    <span class="text-rose-400 font-bold">${q.validityDays || 7} روز آینده</span>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <span class="text-slate-400 text-[11px] block">ریز خدمات و برآورد اولیه:</span>
                  <div class="space-y-1">
                    ${lineItemsHtml}
                  </div>
                </div>

                <div class="p-3 bg-[#141A28] rounded-xl border border-emerald-500/40 space-y-1.5">
                  <div class="flex justify-between text-xs">
                    <span class="text-slate-300">برآورد کل هزینه:</span>
                    <span class="font-black text-[#C5A059]">${q.amount}</span>
                  </div>
                </div>

                <div class="flex flex-col gap-2 pt-1">
                  <div class="flex gap-2">
                    <button onclick="openPreInvoicePrintModal()" class="flex-1 bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] font-black py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer">
                      <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                      <span>تایید پیش‌فاکتور ✨</span>
                    </button>
                    <button onclick="openPreInvoicePrintModal()" class="flex-1 bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/40 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                      <i data-lucide="download" class="w-3.5 h-3.5 text-[#C5A059]"></i>
                      <span>دانلود فاکتور PDF</span>
                    </button>
                  </div>
                  <div class="flex gap-2">
                    <button onclick="openAppointmentModal('${activeThread.id}', '${msg.id}')" class="flex-1 bg-[#141A28] hover:bg-[#1E293B] text-white border border-[#C5A059]/40 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer">
                      <i data-lucide="calendar" class="w-3.5 h-3.5 text-[#C5A059]"></i>
                      <span>هماهنگی وقت بازدید</span>
                    </button>
                    <button onclick="openRevisionModal('${activeThread.id}', '${msg.id}')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-300 border border-amber-500/40 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      <span>تغییرات</span>
                    </button>
                  </div>
                </div>

                <div class="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                  <span>این برآورد صرفاً جهت اطلاع است و هیچ‌گونه الزام یا پرداخت آنلاین ندارد.</span>
                  <span class="font-mono dir-ltr">${msg.time}</span>
                </div>
              </div>
            `;
          } else if (isUser) {
            content = `
              <div class="max-w-md bg-primary text-white p-3.5 rounded-2xl rounded-tr-xs shadow-xs text-xs font-medium leading-relaxed">
                <div>${msg.text}</div>
                <span class="block text-[10px] text-emerald-200 text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          } else {
            content = `
              <div class="max-w-md bg-[#F4F6F8] border border-slate-200 text-graphite p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-xs font-medium leading-relaxed">
                <div>${msg.text}</div>
                <span class="block text-[10px] text-secondary text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          }

          msgBox.innerHTML = content;
          streamContainer.appendChild(msgBox);
        });

        // Auto-scroll to bottom of stream
        streamContainer.scrollTop = streamContainer.scrollHeight;
      }

      lucide.createIcons();
    }


    // CHAT STATE LOCALSTORAGE SYNC & PRE-INVOICE ACTIONS
    function saveChatStateToStorage() {
      try {
        localStorage.setItem('aroosi_chat_state', JSON.stringify(chatState));
      } catch (e) {
        console.error('Failed to save chatState to localStorage:', e);
      }
    }

    function loadChatStateFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_chat_state');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && Array.isArray(parsed.threads) && parsed.threads.length > 0) {
            chatState = parsed;
          }
        }
      } catch (e) {
        console.error('Failed to load chatState from localStorage:', e);
      }
    }

    function openPreInvoiceModal() {
      const modal = document.getElementById('modal-create-preinvoice');
      if (modal) modal.classList.remove('hidden');
    }

    function closePreInvoiceModal() {
      const modal = document.getElementById('modal-create-preinvoice');
      if (modal) modal.classList.add('hidden');
    }

    function addPreInvoiceLineItem() {
      const container = document.getElementById('pi-items-container');
      if (!container) return;
      const row = document.createElement('div');
      row.className = "flex items-center gap-2";
      row.innerHTML = `
        <input type="text" placeholder="عنوان خدمت یا آیتم..." class="pi-item-name flex-1 bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium">
        <input type="number" placeholder="قیمت (تومان)" class="pi-item-price w-32 bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium dir-ltr">
      `;
      container.appendChild(row);
    }

    function handleIssuePreInvoiceSubmit(e) {
      e.preventDefault();
      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId);
      if (!activeThread) return;

      const title = document.getElementById('pi-title').value.trim();
      const invoiceNumber = document.getElementById('pi-number').value.trim();
      const depositVal = Number(document.getElementById('pi-deposit').value) || 0;
      const validityDays = document.getElementById('pi-validity').value;

      const itemNames = document.querySelectorAll('.pi-item-name');
      const itemPrices = document.querySelectorAll('.pi-item-price');

      let items = [];
      let totalSum = 0;

      itemNames.forEach((el, idx) => {
        const name = el.value.trim();
        const price = Number(itemPrices[idx]?.value) || 0;
        if (name) {
          items.push({ name, price });
          totalSum += price;
        }
      });

      if (items.length === 0) {
        showToast('لطفاً حداقل یک خدمت یا آیتم به پیش‌فاکتور اضافه کنید.', 'warning');
        return;
      }

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
      const formattedTotal = totalSum.toLocaleString('fa-IR') + " تومان";
      const formattedDeposit = depositVal.toLocaleString('fa-IR') + " تومان";

      const quoteMsg = {
        id: "msg-" + Date.now(),
        sender: "vendor",
        text: `پیش‌فاکتور جدید با عنوان "${title}" صادر گردید.`,
        time: timeStr,
        hasQuoteCard: true,
        quoteDetails: {
          title,
          invoiceNumber,
          amount: formattedTotal,
          depositAmount: formattedDeposit,
          validityDays,
          items,
          status: 'pending'
        }
      };

      activeThread.messages.push(quoteMsg);
      activeThread.lastMessage = `پیش‌فاکتور جدید صادر شد (${formattedTotal})`;
      activeThread.lastTime = timeStr;
      activeThread.statusBadge = "quote_sent";
      activeThread.statusText = "پیش‌فاکتور صادر شد";

      closePreInvoiceModal();
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('پیش‌فاکتور تعاملی با موفقیت به چت صادر شد.', 'success');
    }

    function confirmAppointmentScheduleCard(msgId) {
      showToast('وقت بازدید و مشاوره حضوری تایید شد و به تقویم/یادآور شما اضافه گردید.', 'success');
    }

    let activeRevisionTarget = { threadId: null, msgId: null };

    function openRevisionModal(threadId, msgId) {
      activeRevisionTarget = { threadId, msgId };
      const modal = document.getElementById('modal-preinvoice-revision');
      if (modal) modal.classList.remove('hidden');
    }

    function closeRevisionModal() {
      const modal = document.getElementById('modal-preinvoice-revision');
      if (modal) modal.classList.add('hidden');
    }

    function handleSubmitPreInvoiceRevision(e) {
      e.preventDefault();
      const note = document.getElementById('pi-revision-note').value.trim();
      if (!note) return;

      const thread = chatState.threads.find(t => t.id === activeRevisionTarget.threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === activeRevisionTarget.msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'revision_requested';
      }

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: `درخواست اصلاحات در پیش‌فاکتور: ${note}`,
        time: timeStr
      });

      thread.lastMessage = `درخواست اصلاح پیش‌فاکتور: ${note}`;
      thread.lastTime = timeStr;

      closeRevisionModal();
      document.getElementById('pi-revision-note').value = '';
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('درخواست تغییرات و اصلاح پیش‌فاکتور برای تامین‌کننده ارسال گردید.', 'info');
    }


    let activeAppointmentTarget = { threadId: null, msgId: null };

    function openAppointmentModal(threadId, msgId) {
      activeAppointmentTarget = { threadId, msgId };
      const modal = document.getElementById('modal-schedule-appointment');
      if (modal) modal.classList.remove('hidden');
    }

    function closeAppointmentModal() {
      const modal = document.getElementById('modal-schedule-appointment');
      if (modal) modal.classList.add('hidden');
    }

    function handleScheduleAppointmentSubmit(e) {
      e.preventDefault();
      const date = document.getElementById('appt-date').value.trim();
      const time = document.getElementById('appt-time').value;
      const note = document.getElementById('appt-note').value.trim();

      if (!date) return;

      const thread = chatState.threads.find(t => t.id === activeAppointmentTarget.threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === activeAppointmentTarget.msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'accepted';
      }

      thread.statusBadge = "finalized";
      thread.statusText = "تایید اولیه و رزرو جلسه حضوری";

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: `پیش‌فاکتور تایید اولیه شد. زمان جلسه حضوری پیشنهاد شد: تاریخ ${date} ساعت ${time}${note ? ` (یادداشت: ${note})` : ''}`,
        time: timeStr
      });

      thread.lastMessage = `جلسه حضوری ثبت شد: ${date} - ${time}`;
      thread.lastTime = timeStr;

      closeAppointmentModal();
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('زمان جلسه حضوری با موفقیت ثبت شد و پیام به تامین‌کننده ارسال گردید.', 'success');
    }

    function acceptPreInvoiceAndPayDeposit(threadId, msgId) {
      const thread = chatState.threads.find(t => t.id === threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'accepted';
      }

      thread.statusBadge = "finalized";
      thread.statusText = "رزرو نهایی شد";

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: "پیش‌فاکتور توسط زوجین تایید شد و مبلغ بیعانه به درگاه صندوق امن واریز گردید.",
        time: timeStr
      });

      thread.lastMessage = "پیش‌فاکتور تایید شد و بیعانه واریز گردید.";
      thread.lastTime = timeStr;

      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('پیش‌فاکتور تایید شد و بیعانه با موفقیت پرداخت گردید!', 'success');
    }


    function handleSendChatMessage(e) {
      e.preventDefault();
      const input = document.getElementById('chat-message-input');
      const text = input ? input.value.trim() : '';
      if (!text) return;

      sendChatMessageText(text);
      if (input) input.value = '';
    }

    function sendChatMessageQuickAction(text) {
      sendChatMessageText(text);
    }

    function sendChatMessageText(text) {
      if (!text) return;

      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId) || chatState.threads[0];
      if (!activeThread) return;

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      // Append user message
      activeThread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: text,
        time: timeStr
      });

      activeThread.lastMessage = text;
      activeThread.lastTime = timeStr;

      renderChatActiveThread();
      renderChatThreadsList();

      // Trigger simulated vendor response after 1 second delay
      setTimeout(() => {
        const autoReplyTimeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        const sampleReplies = [
          "پیام شما دریافت شد. همکاران تشریفات ما به زودی جزئیات بیشتر را برای شما ارسال خواهند کرد.",
          "با تشکر از پیام شما، منوی پیشنهادی و شرایط رزرو سالن برای شما ارسال شد.",
          "جهت هماهنگی بازدید حضوری از باغ تالار، می‌توانید روزهای پنجشنبه و جمعه تشریف بیاورید."
        ];
        const randomReply = sampleReplies[Math.floor(Math.random() * sampleReplies.length)];

        activeThread.messages.push({
          id: "msg-" + (Date.now() + 1),
          sender: "vendor",
          text: randomReply,
          time: autoReplyTimeStr
        });

        activeThread.lastMessage = randomReply;
        activeThread.lastTime = autoReplyTimeStr;

        renderChatActiveThread();
        renderChatThreadsList();
      }, 1000);
    }

    let homeBudgetTier = 'mid';

    function setHomeBudgetTier(tier) {
      homeBudgetTier = tier;
      ['economic', 'mid', 'luxury'].forEach(t => {
        const btn = document.getElementById('home-tier-' + t);
        if (btn) {
          if (t === tier) {
            btn.className = "home-tier-btn bg-[#D4AF37] text-[#1B3B2B] border border-[#D4AF37] py-2.5 px-3 rounded-2xl text-xs font-black text-center transition-all shadow-md cursor-pointer";
          } else {
            btn.className = "home-tier-btn bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 py-2.5 px-3 rounded-2xl text-xs font-bold text-center transition-all cursor-pointer";
          }
        }
      });
      calculateHomeBudgetPreview();
    }

    function calculateHomeBudgetPreview() {
      const slider = document.getElementById('home-guest-count-slider');
      const label = document.getElementById('home-guest-count-label');
      const priceOutput = document.getElementById('home-budget-estimated-price');
      if (!slider || !priceOutput) return;

      const count = parseInt(slider.value) || 250;
      if (label) label.innerText = `${count} نفر`;

      let costPerGuest = 1200000;
      let baseFixedCost = 50000000;

      if (homeBudgetTier === 'economic') {
        costPerGuest = 750000;
        baseFixedCost = 30000000;
      } else if (homeBudgetTier === 'luxury') {
        costPerGuest = 2500000;
        baseFixedCost = 120000000;
      }

      const totalEstimated = baseFixedCost + (count * costPerGuest);
      priceOutput.innerHTML = `${totalEstimated.toLocaleString('fa-IR')} <span class="text-xs font-medium text-white">تومان</span>`;
    }

    function openAuthModal(defaultTab = 'couple') {
      const modal = document.getElementById('auth-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('active');
      }
      switchAuthTab(defaultTab);
    }

    function closeAuthModal() {
      const modal = document.getElementById('auth-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('active');
      }
    }

    function switchAuthTab(tab) {
      const coupleTab = document.getElementById('auth-tab-couple');
      const vendorTab = document.getElementById('auth-tab-vendor');
      const adminTab = document.getElementById('auth-tab-admin');
      const coupleForm = document.getElementById('auth-form-couple');
      const vendorForm = document.getElementById('auth-form-vendor');
      const adminForm = document.getElementById('auth-form-admin');

      [coupleTab, vendorTab, adminTab].forEach(t => {
        if (t) t.className = "flex-1 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite text-center cursor-pointer";
      });
      [coupleForm, vendorForm, adminForm].forEach(f => {
        if (f) f.classList.add('hidden');
      });

      if (tab === 'couple') {
        if (coupleTab) coupleTab.className = "flex-1 py-2.5 rounded-xl transition-all bg-[#1B3B2B] text-white shadow-xs text-center cursor-pointer";
        if (coupleForm) coupleForm.classList.remove('hidden');
      } else if (tab === 'vendor') {
        if (vendorTab) vendorTab.className = "flex-1 py-2.5 rounded-xl transition-all bg-[#1B3B2B] text-white shadow-xs text-center cursor-pointer";
        if (vendorForm) vendorForm.classList.remove('hidden');
      } else if (tab === 'admin') {
        if (adminTab) adminTab.className = "flex-1 py-2.5 rounded-xl transition-all bg-[#1B3B2B] text-white shadow-xs text-center cursor-pointer";
        if (adminForm) adminForm.classList.remove('hidden');
      }
    }

    function handleAdminAuthSubmit(e) {
      if (e && e.preventDefault) e.preventDefault();
      const user = document.getElementById('auth-admin-user')?.value?.trim();
      const pass = document.getElementById('auth-admin-password')?.value?.trim();

      if (user === 'admin' && pass === 'admin123') {
        currentUserRole = 'admin';
        localStorage.setItem('currentUserRole', 'admin');
        closeAuthModal();
        switchRole('admin');
        showToast('ورود مدیریت ارشد (Super Admin) با موفقیت انجام شد. خوش آمدید!', 'success');
      } else {
        showToast('نام کاربری یا رمز عبور مدیر سیستم نادرست است. (نام کاربری: admin | رمز عبور: admin123)', 'danger');
      }
    }

    function handleCoupleAuthSubmit(e) {
      if (e && e.preventDefault) e.preventDefault();
      const phone = document.getElementById('auth-couple-phone')?.value?.trim();
      const pass = document.getElementById('auth-couple-password')?.value?.trim();

      if (phone === 'admin' && pass === 'admin123') {
        currentUserRole = 'admin';
        localStorage.setItem('currentUserRole', 'admin');
        closeAuthModal();
        switchRole('admin');
        showToast('ورود به عنوان مدیریت ارشد سیستم انجام شد.', 'success');
        return;
      }

      currentUserRole = 'couple';
      localStorage.setItem('currentUserRole', 'couple');
      closeAuthModal();
      switchRole('couple');
      showToast('ورود موفقیت‌آمیز! خوش آمدید.', 'success');
    }

    function handleVendorAuthSubmit(e) {
      if (e && e.preventDefault) e.preventDefault();
      const user = document.getElementById('auth-vendor-user')?.value?.trim();
      const pass = document.getElementById('auth-vendor-password')?.value?.trim();

      if (user === 'admin' && pass === 'admin123') {
        currentUserRole = 'admin';
        localStorage.setItem('currentUserRole', 'admin');
        closeAuthModal();
        switchRole('admin');
        showToast('ورود به عنوان مدیریت ارشد سیستم انجام شد.', 'success');
        return;
      }

      currentUserRole = 'vendor';
      localStorage.setItem('currentUserRole', 'vendor');
      closeAuthModal();
      switchRole('vendor');
      showToast('ورود به پنل تامین‌کنندگان با موفقیت انجام شد.', 'success');
    }

    function toggleAccountMenu() {
      const menu = document.getElementById('account-dropdown-menu');
      if (menu) menu.classList.toggle('active');
    }

    document.addEventListener('click', (e) => {
      const dropdown = document.querySelector('.user-account-dropdown');
      const menu = document.getElementById('account-dropdown-menu');
      if (dropdown && menu && !dropdown.contains(e.target)) {
        menu.classList.remove('active');
      }

      const authModal = document.getElementById('auth-modal');
      if (authModal && e.target === authModal) {
        closeAuthModal();
      }
    });

    let currentVipFocalIndex = 0;
    let currentVipCategory = 'all';
    let vipFocalAutoTimer = null;
    let isVipAutoPaused = false;

    window.getApprovedVipVendors = function(categoryKey = 'all') {
      let vipList = vendors.filter(v => v.approved !== false && (v.isVerified || v.vipTag || v.badge));
      if (categoryKey === 'hall') {
        vipList = vipList.filter(v => v.categoryKey === 'venue_catering' || (v.categoryTitle && (v.categoryTitle.includes('تالار') || v.categoryTitle.includes('باغ'))));
      } else if (categoryKey === 'studio') {
        vipList = vipList.filter(v => v.categoryKey === 'photo_music' || (v.categoryTitle && (v.categoryTitle.includes('آتلیه') || v.categoryTitle.includes('عکاسی'))));
      } else if (categoryKey === 'beauty') {
        vipList = vipList.filter(v => v.categoryKey === 'beauty_style' || (v.categoryTitle && (v.categoryTitle.includes('زیبایی') || v.categoryTitle.includes('مزون'))));
      }
      return vipList.length > 0 ? vipList : vendors.slice(0, 5);
    };

    let vipWheelDebounceTimer = null;
    let vipTouchStartY = 0;

    window.renderVipFocalShowcase = function() {
      const container = document.getElementById('vip-showcase-container');
      const dotsContainer = document.getElementById('vip-carousel-dots');
      if (!container) return;

      const vipVendors = window.getApprovedVipVendors(currentVipCategory);
      if (vipVendors.length === 0) return;

      if (currentVipFocalIndex >= vipVendors.length) currentVipFocalIndex = 0;
      if (currentVipFocalIndex < 0) currentVipFocalIndex = vipVendors.length - 1;

      container.innerHTML = '';

      // Determine order: Previous (Top), Center (Active), Next (Bottom)
      const visibleIndices = [
        { idx: (currentVipFocalIndex - 1 + vipVendors.length) % vipVendors.length, pos: 'top' },
        { idx: currentVipFocalIndex, pos: 'center' },
        { idx: (currentVipFocalIndex + 1) % vipVendors.length, pos: 'bottom' }
      ];

      visibleIndices.forEach(({ idx, pos }) => {
        const vendor = vipVendors[idx];
        if (!vendor) return;

        const isCenter = pos === 'center';
        const card = document.createElement('div');
        card.setAttribute('data-vip-index', idx);

        // Safe fallback properties to avoid "undefined"
        const vTitle = vendor.name || vendor.title || "مجموعه تشریفاتی یزد";
        const vCat = vendor.categoryTitle || vendor.category || "خدمات عروسی";
        const vImg = vendor.image || vendor.coverImg || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800";
        const vLoc = vendor.district || vendor.address || "صفائیه، یزد";
        const vPrice = vendor.price || vendor.priceFormatted || "تماس بگیرید";
        const vRating = vendor.rating || "۴.۹";

        // Wide Horizontal Rectangular Cinematic Card Styling (NO narrow vertical strips)
        let baseClass = "showcase-card vip-focal-card group relative shrink-0 transition-all duration-500 ease-out cursor-pointer rounded-2xl overflow-hidden flex flex-col justify-between text-right mx-auto ";

        if (isCenter) {
          baseClass += "active vip-focal-card-active w-[90%] max-w-[360px] h-[160px] aspect-[16/9] bg-[#0E121C] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(212,175,55,0.25)] scale-[1.05] z-20 opacity-100 p-3.5";
        } else {
          baseClass += "preview vip-focal-card-preview w-[90%] max-w-[360px] h-[70px] bg-[#0E121C]/80 border border-[#C5A059]/30 scale-[0.88] z-10 opacity-50 blur-[1px] hover:opacity-85 hover:blur-0 p-2.5 transition-all";
        }

        card.className = baseClass;
        card.onclick = () => {
          if (isCenter) {
            openVendorDetailModal(vendor.id);
          } else {
            window.goToVipCarouselSlide(idx);
          }
        };

        if (isCenter) {
          card.innerHTML = `
            <!-- Full-Bleed Background Image with Dark Gradient Overlay -->
            <div class="absolute inset-0 z-0 overflow-hidden">
              <img src="${vImg}" alt="${vTitle}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25"></div>
            </div>

            <!-- Top Bar inside Card: Rating Badge & VIP Badge -->
            <div class="relative z-10 flex items-center justify-between">
              <span class="text-[9px] sm:text-[10px] font-black text-[#07090E] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] px-2.5 py-0.5 rounded-full border border-[#D4AF37] shadow-md flex items-center gap-1">
                VIP 👑
              </span>
              <span class="text-[10px] sm:text-[11px] font-black text-amber-300 bg-black/70 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-1">
                ⭐️ ${vRating}
              </span>
            </div>

            <!-- Bottom Overlay Details -->
            <div class="relative z-10 space-y-1 pt-2">
              <span class="text-[10px] sm:text-[11px] font-extrabold text-[#D4AF37] block truncate">${vCat}</span>
              <h4 class="text-xs sm:text-sm font-black text-white truncate drop-shadow-md leading-snug">${vTitle}</h4>

              <div class="flex items-center justify-between pt-1 border-t border-[#C5A059]/30 gap-1">
                <span class="text-[10px] sm:text-[11px] font-bold text-amber-200/95 truncate flex items-center gap-1.5">
                  <span>📍 ${vLoc}</span>
                  <span class="text-[#D4AF37]">|</span>
                  <span>شروع: ${vPrice}</span>
                </span>
                <button type="button" onclick="event.stopPropagation(); openVendorDetailModal('${vendor.id}')" class="bg-[#D4AF37] hover:bg-[#C5A059] text-[#07090E] font-black text-[10.5px] px-3 py-1 rounded-lg transition-all shadow-md flex items-center gap-1 cursor-pointer shrink-0">
                  <span>رزرو / مشاهده</span>
                </button>
              </div>
            </div>
          `;
        } else {
          // Wide horizontal preview card layout (Top & Bottom)
          card.innerHTML = `
            <div class="absolute inset-0 z-0 overflow-hidden">
              <img src="${vImg}" alt="${vTitle}" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
            </div>
            <div class="relative z-10 flex items-center justify-between w-full">
              <div class="flex items-center gap-2 truncate">
                <span class="text-[9px] font-black text-[#D4AF37] truncate">${vCat}</span>
                <span class="text-xs font-black text-white truncate">${vTitle}</span>
              </div>
              <span class="text-[9px] font-black text-amber-300 bg-black/60 px-1.5 py-0.5 rounded-full border border-[#D4AF37]/30 shrink-0">⭐️ ${vRating}</span>
            </div>
            <div class="relative z-10 flex items-center justify-between text-[9px] text-slate-300 font-medium truncate pt-0.5">
              <span>📍 ${vLoc}</span>
              <span class="text-amber-200/90 font-bold">شروع: ${vPrice}</span>
            </div>
          `;
        }

        container.appendChild(card);
      });

      if (dotsContainer) {
        dotsContainer.innerHTML = vipVendors.map((_, idx) => `
          <button type="button" onclick="goToVipCarouselSlide(${idx})" class="transition-all duration-300 cursor-pointer ${idx === currentVipFocalIndex ? 'bg-[#D4AF37] h-5 w-2 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'bg-[#C5A059]/30 hover:bg-[#C5A059]/60 w-2 h-2 rounded-full'}" title="اسلاید ${idx + 1}"></button>
        `).join('');
      }

      if (window.lucide) lucide.createIcons();
    };

    window.slideVipFocalCarousel = function(dir) {
      const vipVendors = window.getApprovedVipVendors(currentVipCategory);
      if (vipVendors.length === 0) return;

      if (dir === 'next') {
        currentVipFocalIndex = (currentVipFocalIndex + 1) % vipVendors.length;
      } else {
        currentVipFocalIndex = (currentVipFocalIndex - 1 + vipVendors.length) % vipVendors.length;
      }

      window.renderVipFocalShowcase();
    };

    window.goToVipCarouselSlide = function(idx) {
      currentVipFocalIndex = idx;
      window.renderVipFocalShowcase();
    };

    window.pauseVipFocalAutoScroll = function() {
      isVipAutoPaused = true;
    };

    window.resumeVipFocalAutoScroll = function() {
      isVipAutoPaused = false;
    };

    window.initVipShowcaseAutoScroll = function() {
      if (vipFocalAutoTimer) clearInterval(vipFocalAutoTimer);

      window.renderVipFocalShowcase();

      // Attach Vertical Wheel Handler
      const stage = document.getElementById('vip-focal-stage');
      if (stage && !stage.dataset.wheelAttached) {
        stage.dataset.wheelAttached = 'true';
        stage.addEventListener('wheel', (e) => {
          e.preventDefault();
          if (vipWheelDebounceTimer) return;
          if (e.deltaY > 0) {
            window.slideVipFocalCarousel('next');
          } else if (e.deltaY < 0) {
            window.slideVipFocalCarousel('prev');
          }
          vipWheelDebounceTimer = setTimeout(() => {
            vipWheelDebounceTimer = null;
          }, 300);
        }, { passive: false });

        // Touch Swipe vertical handlers
        stage.addEventListener('touchstart', (e) => {
          if (e.touches && e.touches.length > 0) {
            vipTouchStartY = e.touches[0].clientY;
          }
        }, { passive: true });

        stage.addEventListener('touchend', (e) => {
          if (e.changedTouches && e.changedTouches.length > 0) {
            const touchEndY = e.changedTouches[0].clientY;
            const diffY = vipTouchStartY - touchEndY;
            if (Math.abs(diffY) > 30) {
              if (diffY > 0) {
                window.slideVipFocalCarousel('next');
              } else {
                window.slideVipFocalCarousel('prev');
              }
            }
          }
        }, { passive: true });
      }

      vipFocalAutoTimer = setInterval(() => {
        if (!isVipAutoPaused) {
          window.slideVipFocalCarousel('next');
        }
      }, 3500);
    };

    window.filterVipShowcase = function(categoryKey) {
      currentVipCategory = categoryKey;
      currentVipFocalIndex = 0;

      const tabs = ['all', 'hall', 'studio', 'beauty'];
      tabs.forEach(t => {
        const btn = document.getElementById('vip-tab-' + t);
        if (btn) {
          if (t === categoryKey) {
            btn.className = "vip-tab-btn px-3 py-1 rounded-full bg-[#D4AF37] text-[#07090E] font-black border border-[#D4AF37] transition-all shrink-0 cursor-pointer shadow-md";
          } else {
            btn.className = "vip-tab-btn px-3 py-1 rounded-full bg-[#141A28] border border-[#C5A059]/30 text-slate-200 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all shrink-0 cursor-pointer font-bold";
          }
        }
      });

      window.renderVipFocalShowcase();
    };

    window.scrollVipCarousel = window.slideVipFocalCarousel;

    window.addEventListener('DOMContentLoaded', () => {
      updateRoleBasedUIVisibility();
      calculateHomeBudgetPreview();
      initVipShowcaseAutoScroll();
      loadCategoryGroupsFromStorage();
      loadChatStateFromStorage();
      loadFavoritesFromStorage();
      renderFavoriteVendorsList();
      renderCategoryCards();
      renderNavMegaCategoryMenu();
      renderVendorRegistrationCategoryOptions();
      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
      renderPortfolioUI();
      renderVendorPackages();
      renderAdminCategories();
      renderAdminPendingApps();
      renderAdminTable();
      renderCalendar();
      renderInquiries();
      renderChecklistTimeline();
      renderChecklistTimeframeButtons();
      initBridalCountdownTimer();

      // Initialize Budget Wizard
      updateBudgetFormattedDisplay();
      renderBwServicesChecklist();

      // Initialize Digital Invitation Builder
      renderInvitationPreview();

      // Initialize Quiz Hub
      renderQuizCatalogCards();

      // Initialize Messages & Chat System
      renderChatThreadsList();
      renderChatActiveThread();

      // Initialize Inspiration & Moodboard
      renderInspirationCategoryPills();
      renderInspirationGalleryGrid();
    });

    // ==========================================
    // INSPIRATION GALLERY & MOODBOARD HUB LOGIC
    // ==========================================
    let inspirationState = {
      articles: [
        {
                "id": 101,
                "title": "راهنمای جامع عکاسی فرمالیته در کویر و بافت تاریخی یزد",
                "categoryKey": "desert",
                "categoryName": "عکاسی کویر & بافت تاریخی",
                "vendorCategoryMatch": "آتلیه و عکاسی",
                "readTime": "۵ دقیقه مطالعه",
                "author": "تیم عکاسی استودیو کویر یزد",
                "date": "۱۰ مهر ۱۴۰۳",
                "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
                "isFeatured": true,
                "summary": "بهترین زمان‌بندی طلایی برای ثبت عکس‌های کویر شهداد و شبستان‌های بادگیر یزد همراه با نکات انتخاب لباس و تجهیزات نورپردازی.",
                "content": "<p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">عکاسی فرمالیته در پهنه رمل‌های طلایی کویر یزد و کوچه‌های آشتی‌کنان بافت تاریخی، تجربه‌ای شگفت‌انگیز و منحصربه‌فرد برای زوج‌ها است. با این حال، تفاوت‌های آب‌وهوایی و انعکاس شدید نور خورشید نیازمند رعایت نکات تخصصی است.</p><h4 class=\"text-sm font-bold text-[#1B3B2B] mt-4 mb-2\">۱. ساعت طلایی (Golden Hour) در کویر یزد</h4><p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">بهترین زمان برای شروع عکاسی کویر، حدود ۹۰ دقیقه قبل از غروب آفتاب است. در این بازه، نور نرم خورشید سایه‌های کشیده و رنگ‌های گرم روی رمل‌ها ایجاد می‌کند که عالی‌ترین پس‌زمینه برای ثبت ویدیوهای هلی‌شات و عکس‌های احساسی است.</p><div class=\"p-4 bg-amber-50/80 border-r-4 border-[#D4AF37] rounded-xl my-4 text-xs font-bold text-amber-900 leading-relaxed\">«پیشنهاد ویژه آتلیه‌های یزد: استفاده از تورهای بلند ۲ الی ۳ متری و پارچه‌های حریر در کویر، جلوه‌ای رویایی و حرکتی باشکوه در عکس‌ها خلق می‌کند.»</div><h4 class=\"text-sm font-bold text-[#1B3B2B] mt-4 mb-2\">۲. لوکیشن‌های پیشنهادی بافت تاریخی</h4><p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">پشت‌بام‌های سنتی محله فهادان، مسجد جامع یزد و خانه‌های تاریخی نظیر خانه لاری‌ها و هتل باغ مشیرالممالک، تنوع بصری فوق‌العاده‌ای در کنار عکس‌های کویر فراهم می‌سازند.</p>"
        },
        {
                "id": 102,
                "title": "ترندهای گل‌آرایی، سفره عقد و نورپردازی سالن‌های عروسی ۱۴۰۳",
                "categoryKey": "decor",
                "categoryName": "دکوراسیون & نورپردازی",
                "vendorCategoryMatch": "گل‌آرایی و ماشین عروس",
                "readTime": "۴ دقیقه مطالعه",
                "author": "طراح تشریفات مشیرالممالک",
                "date": "۵ مهر ۱۴۰۳",
                "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
                "isFeatured": false,
                "summary": "ترکیب گل‌های استوایی و ارکیده با شمعدان‌های کریستال و سفره عقد اسلیمی سنتی برای سالن‌ها و عمارت‌های یزد.",
                "content": "<p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">طراحی دکوراسیون تالارها و باغ‌های عروسی در سال جدید به سمت المان‌های طبیعی، ترکیبات مینی‌مال شیک و نورپردازی گرم هالوژنی سوق پیدا کرده است.</p><h4 class=\"text-sm font-bold text-[#1B3B2B] mt-4 mb-2\">سفره عقد تلفیقی سنتی و مدرن</h4><p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">استفاده از آینه‌کاری‌های هندسی اصیل در کنار ظروف برنجی و گل‌آرایی‌های پودری، ظاهری مجلل به جایگاه عقد می‌بخشد.</p>"
        },
        {
                "id": 103,
                "title": "راهنمای انتخاب طلا، جواهرات و استایل عروس متناسب با فرم چهره",
                "categoryKey": "attire",
                "categoryName": "استایل، طلا & جواهرات",
                "vendorCategoryMatch": "طلا، جواهر و حلقه ازدواج",
                "readTime": "۶ دقیقه مطالعه",
                "author": "کارشناس گالری طلا برلیان",
                "date": "۲۸ شهریور ۱۴۰۳",
                "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
                "isFeatured": false,
                "summary": "نکات کلیدی برای ست کردن سرویس طلا، تاج و تور عروس با یقه لباس عروس و فرم صورت.",
                "content": "<p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">انتخاب سرویس طلا و جواهر باید هماهنگی کامل با یقه لباس عروس (دکلته، قایقی، ایستاده) و سبک میکاپ داشته باشد.</p>"
        },
        {
                "id": 104,
                "title": "آداب و رسوم سنتی عروسی در یزد: از نقل‌بندان تا پذیرایی اصیل",
                "categoryKey": "traditions",
                "categoryName": "آداب & رسوم سنتی یزد",
                "vendorCategoryMatch": "کترینگ و تشریفات پذیرایی",
                "readTime": "۵ دقیقه مطالعه",
                "author": "پژوهشگر فرهنگ بومی یزد",
                "date": "۲۰ شهریور ۱۴۰۳",
                "image": "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
                "isFeatured": false,
                "summary": "مروری بر سنت‌های زیبای خانوادگی یزدی‌ها در برگزاری مراسم عقد، حنابندان و پذیرایی اصیل.",
                "content": "<p class=\"text-xs sm:text-sm text-graphite leading-relaxed\">فرهنگ اصیل یزدی سرشار از آیین‌های صمیمانه و با برکتی است که مراسم عروسی را به خاطره‌ای ماندگار تبدیل می‌سازد.</p>"
        }
],
      bookmarkedArticles: [],
      activeSubTab: 'gallery', // 'gallery' | 'moodboard'
      selectedCategory: 'all',
      bookmarkedIds: [1, 4, 7],
      categories: [
        { key: 'all', title: 'همه ایده‌ها', icon: 'grid', categoryMatch: 'all' },
        { key: 'dress', title: 'لباس و تور عروس', icon: 'shirt', categoryMatch: 'مزون و لباس عروس' },
        { key: 'suit', title: 'کت‌وشلوار و اکسسوری', icon: 'user', categoryMatch: 'کت و شلوار و آرایشگاه داماد' },
        { key: 'decor', title: 'گل‌آرایی و دکور تالار', icon: 'flower-2', categoryMatch: 'گل‌آرایی و ماشین عروس' },
        { key: 'poses', title: 'ژست‌های عکاسی و فرمالیته', icon: 'camera', categoryMatch: 'آتلیه و عکاسی' },
        { key: 'cake', title: 'کیک و تشریفات', icon: 'cake', categoryMatch: 'کترینگ و تشریفات پذیرایی' },
        { key: 'rings', title: 'حلقه و سرویس طلا', icon: 'gem', categoryMatch: 'طلا، جواهر و حلقه ازدواج' }
      ],
      items: [
        {
          id: 1,
          title: 'لباس عروس پرنسسی با دانتل ایتالیایی و آستین تور',
          categoryKey: 'dress',
          categoryName: 'لباس و تور عروس',
          vendorCategoryMatch: 'مزون و لباس عروس',
          image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۴.۲ هزار',
          vendor: {
            id: 5,
            name: 'مزون عروس ترمه & اسلیمی یزد',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            category: 'مزون و لباس عروس',
            district: 'صفائیه یزد',
            rating: 4.8
          }
        },
        {
          id: 2,
          title: 'گل‌آرایی ورودی باغ عمارت با ارکیده سفید و شمع‌دان کریستال',
          categoryKey: 'decor',
          categoryName: 'گل‌آرایی و دکور تالار',
          vendorCategoryMatch: 'گل‌آرایی و ماشین عروس',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۶.۸ هزار',
          vendor: {
            id: 1,
            name: 'هتل باغ و تشریفات مشیرالممالک یزد',
            avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
            category: 'تالار و باغ تشریفات',
            district: 'خیابان انقلاب یزد',
            rating: 4.9
          }
        },
        {
          id: 3,
          title: 'ژست عکس فرمالیته کویر با رمل‌های طلایی هنگام غروب',
          categoryKey: 'poses',
          categoryName: 'ژست‌های عکاسی و فرمالیته',
          vendorCategoryMatch: 'آتلیه و عکاسی',
          image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۸.۱ هزار',
          vendor: {
            id: 2,
            name: 'استودیو و آتلیه تخصصی کویر یزد',
            avatar: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=80',
            category: 'آتلیه و عکاسی',
            district: 'میدان اطلسی صفائیه',
            rating: 4.8
          }
        },
        {
          id: 4,
          title: 'تاکسیدو زغالی مشکی با یقه آرشال ساتن و پاپیون رسمی',
          categoryKey: 'suit',
          categoryName: 'کت‌وشلوار و اکسسوری',
          vendorCategoryMatch: 'کت و شلوار و آرایشگاه داماد',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۳.۵ هزار',
          vendor: {
            id: 4,
            name: 'مزون و کت‌وشلوار دامادی کلاسیک یزد',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
            category: 'کت و شلوار دامادی',
            district: 'خیابان کاشانی یزد',
            rating: 4.7
          }
        },
        {
          id: 5,
          title: 'کیک عروسی ۴ طبقه مینی‌مال با تزئین گل‌های طبیعی نود',
          categoryKey: 'cake',
          categoryName: 'کیک و تشریفات',
          vendorCategoryMatch: 'کترینگ و تشریفات پذیرایی',
          image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۵.۳ هزار',
          vendor: {
            id: 3,
            name: 'عمارت و کترینگ تشریفات قصر یزد',
            avatar: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
            category: 'کترینگ و تشریفات پذیرایی',
            district: 'بلوار جمهوری یزد',
            rating: 4.9
          }
        },
        {
          id: 6,
          title: 'حلقه ازدواج برلیان پلاتینیوم با طراحی ست جفت',
          categoryKey: 'rings',
          categoryName: 'حلقه و سرویس طلا',
          vendorCategoryMatch: 'طلا، جواهر و حلقه ازدواج',
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۹.۴ هزار',
          vendor: {
            id: 6,
            name: 'گالری طلا و جواهر برلیان یزد',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
            category: 'طلا و جواهرات',
            district: 'بازار خان یزد',
            rating: 4.9
          }
        },
        {
          id: 7,
          title: 'لباس عروس ساتن مستقیم با یقه قایقی و دنباله ۲ متری',
          categoryKey: 'dress',
          categoryName: 'لباس و تور عروس',
          vendorCategoryMatch: 'مزون و لباس عروس',
          image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۷.۶ هزار',
          vendor: {
            id: 5,
            name: 'مزون عروس ترمه & اسلیمی یزد',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            category: 'مزون و لباس عروس',
            district: 'صفائیه یزد',
            rating: 4.8
          }
        },
        {
          id: 8,
          title: 'طراحی جایگاه عروس و داماد سبک بوهو با طاق پامپاس و چوب',
          categoryKey: 'decor',
          categoryName: 'گل‌آرایی و دکور تالار',
          vendorCategoryMatch: 'گل‌آرایی و ماشین عروس',
          image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۶.۱ هزار',
          vendor: {
            id: 1,
            name: 'هتل باغ و تشریفات مشیرالممالک یزد',
            avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
            category: 'تالار و باغ تشریفات',
            district: 'خیابان انقلاب یزد',
            rating: 4.9
          }
        },
        {
          id: 9,
          title: 'عکاسی احساسی دو نفره دریا با انعکاس آب و پرتو خورشید',
          categoryKey: 'poses',
          categoryName: 'ژست‌های عکاسی و فرمالیته',
          vendorCategoryMatch: 'آتلیه و عکاسی',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۱۰.۲ هزار',
          vendor: {
            id: 2,
            name: 'استودیو و آتلیه تخصصی کویر یزد',
            avatar: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=80',
            category: 'آتلیه و عکاسی',
            district: 'میدان اطلسی صفائیه',
            rating: 4.8
          }
        }
      ]
    };

    function switchInspirationSubTab(subTab) {
      inspirationState.activeSubTab = subTab;
      const btnGallery = document.getElementById('insp-subtab-gallery');
      const btnMoodboard = document.getElementById('insp-subtab-moodboard');
      const panelGallery = document.getElementById('insp-panel-gallery');
      const panelMoodboard = document.getElementById('insp-panel-moodboard');

      if (subTab === 'gallery') {
        if (btnGallery) btnGallery.className = "px-4 py-2.5 rounded-xl transition-all bg-primary text-white shadow-xs flex items-center gap-1.5";
        if (btnMoodboard) btnMoodboard.className = "px-4 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite flex items-center gap-1.5";
        if (panelGallery) panelGallery.classList.remove('hidden');
        if (panelMoodboard) panelMoodboard.classList.add('hidden');
        renderInspirationCategoryPills();
        renderInspirationGalleryGrid();
      } else {
        if (btnMoodboard) btnMoodboard.className = "px-4 py-2.5 rounded-xl transition-all bg-primary text-white shadow-xs flex items-center gap-1.5";
        if (btnGallery) btnGallery.className = "px-4 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite flex items-center gap-1.5";
        if (panelMoodboard) panelMoodboard.classList.remove('hidden');
        if (panelGallery) panelGallery.classList.add('hidden');
        renderMoodboardGrid();
      }
    }

    function renderInspirationCategoryPills() {
      const container = document.getElementById('insp-category-pills');
      if (!container) return;
      container.innerHTML = '';

      inspirationState.categories.forEach(cat => {
        const isSelected = inspirationState.selectedCategory === cat.key;
        const btn = document.createElement('button');
        btn.onclick = () => filterInspirationByCategory(cat.key);
        btn.className = `px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
          isSelected ? 'bg-primary text-white shadow-xs' : 'bg-bgCustom border border-accent hover:border-primary text-graphite'
        }`;
        btn.innerHTML = `
          <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
          <span>${cat.title}</span>
        `;
        container.appendChild(btn);
      });

      lucide.createIcons();
    }

    function filterInspirationByCategory(catKey) {
      inspirationState.selectedCategory = catKey;
      renderInspirationCategoryPills();
      renderInspirationGalleryGrid();
    }

    window.filterInspirationByStyle = function(styleName) {
      const input = document.getElementById('insp-search-input');
      if (input) input.value = styleName;
      renderInspirationGalleryGrid();
    };

    function filterInspirationItems() {
      renderInspirationGalleryGrid();
    }

    const MOODBOARD_STORAGE_KEY = 'aroosi_saved_inspiration_db';

    function loadSavedMoodboardIds() {
      try {
        const stored = localStorage.getItem(MOODBOARD_STORAGE_KEY);
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to load moodboard', e);
      }
      return [1, 4, 7];
    }

    function saveMoodboardIds(ids) {
      try {
        localStorage.setItem(MOODBOARD_STORAGE_KEY, JSON.stringify(ids));
      } catch (e) {
        console.error('Failed to save moodboard', e);
      }
    }

    // Initialize bookmarkedIds from localStorage
    inspirationState.bookmarkedIds = loadSavedMoodboardIds();

    function toggleBookmarkMoodboard(itemId, e) {
      if (e) e.stopPropagation();
      const idx = inspirationState.bookmarkedIds.indexOf(itemId);
      if (idx > -1) {
        inspirationState.bookmarkedIds.splice(idx, 1);
        showToast('از مودبورد شما حذف گردید', 'danger');
      } else {
        inspirationState.bookmarkedIds.push(itemId);
        showToast('❤️ به مودبورد اختصاصی شما اضافه شد', 'success');
      }

      saveMoodboardIds(inspirationState.bookmarkedIds);
      updateMoodboardBadge();

      if (inspirationState.activeSubTab === 'gallery') {
        renderInspirationGalleryGrid();
      } else {
        renderMoodboardGrid();
      }
    }

    function updateMoodboardBadge() {
      const badge = document.getElementById('moodboard-badge-count');
      if (badge) badge.innerText = inspirationState.bookmarkedIds.length;
      const summaryText = document.getElementById('moodboard-summary-text');
      if (summaryText) summaryText.innerText = `${inspirationState.bookmarkedIds.length} ایده منتخب برای ارائه به همسر، طراح تشریفات یا آتلیه`;
    }

    function openIdeaDetailModal(ideaId) {
      const item = inspirationState.items.find(i => i.id === ideaId);
      if (!item) return;

      const modal = document.getElementById('idea-detail-modal');
      if (!modal) return;

      const imgEl = document.getElementById('modal-idea-img');
      if (imgEl) imgEl.src = item.image;

      const catEl = document.getElementById('modal-idea-category');
      if (catEl) catEl.innerText = item.categoryName || 'ایده عروسی';

      const titleEl = document.getElementById('modal-idea-title');
      if (titleEl) titleEl.innerText = item.title;

      const viewsEl = document.getElementById('modal-idea-views');
      if (viewsEl) viewsEl.innerHTML = `<i data-lucide="eye" class="w-3.5 h-3.5 text-primary"></i><span>تعداد بازدید: ${item.viewsCount || '۱.۲ هزار'}</span>`;

      const v = item.vendor || {
        id: 1,
        name: 'تامین‌کننده رسمی عروسی تو',
        avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
        category: item.vendorCategoryMatch || 'خدمات عروسی',
        district: 'استان یزد',
        rating: 4.8
      };

      const avatarEl = document.getElementById('modal-idea-vendor-avatar');
      if (avatarEl) avatarEl.src = v.avatar;

      const vNameEl = document.getElementById('modal-idea-vendor-name');
      if (vNameEl) vNameEl.innerText = v.name;

      const vCatEl = document.getElementById('modal-idea-vendor-cat');
      if (vCatEl) vCatEl.innerText = v.category;

      const vDistEl = document.getElementById('modal-idea-vendor-district-text');
      if (vDistEl) vDistEl.innerText = v.district || 'یزد';

      const vRatingEl = document.getElementById('modal-idea-vendor-rating');
      if (vRatingEl) vRatingEl.innerText = v.rating || '۴.۸';

      const inquiryBtn = document.getElementById('modal-idea-inquiry-btn');
      if (inquiryBtn) {
        inquiryBtn.onclick = function() {
          closeIdeaDetailModal();
          if (typeof openInquiryModal === 'function') {
            openInquiryModal(v.id, v.name, item.title, '', 'ایده/ژورنال', item.id, item.image);
          } else {
            showToast(`استعلام قیمت برای ${v.name} ثبت شد`, 'success');
          }
        };
      }

      const vendorBtn = document.getElementById('modal-idea-vendor-btn');
      if (vendorBtn) {
        vendorBtn.onclick = function() {
          closeIdeaDetailModal();
          if (typeof loadVendorProfile === 'function') {
            loadVendorProfile(v.id);
          } else if (typeof filterVendorsByCategoryTitle === 'function') {
            filterVendorsByCategoryTitle(v.category || 'همه');
          }
        };
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (window.lucide) lucide.createIcons();
    }

    function closeIdeaDetailModal() {
      const modal = document.getElementById('idea-detail-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function filterDirectoryByVendorCategory(vendorCategory) {
      switchTab('home');
      const select = document.getElementById('category-filter');
      if (select) {
        select.value = vendorCategory;
        filterVendors();
      }
      const vendorSection = document.getElementById('vendor-grid');
      if (vendorSection) {
        vendorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function renderMagazineFeaturedBanner() {
      const banner = document.getElementById('magazine-featured-banner');
      if (!banner) return;

      const articles = inspirationState.articles || [];
      const featured = articles.find(a => a.isFeatured) || articles[0];
      if (!featured) {
        banner.innerHTML = '';
        return;
      }

      banner.innerHTML = `
        <div onclick="openArticleModal(${featured.id})" class="relative bg-gradient-to-r from-[#0F251A] to-[#1B3B2B] text-white rounded-3xl p-6 sm:p-10 overflow-hidden shadow-lg border border-[#D4AF37]/30 cursor-pointer group space-y-6">
          <div class="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
            <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#08140E] via-[#0F251A]/80 to-transparent pointer-events-none"></div>

          <div class="relative z-10 space-y-4 max-w-2xl">
            <div class="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1B3B2B] text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>مقاله و ترند ویژه هفته</span>
            </div>

            <h3 class="text-xl sm:text-3xl font-black text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
              ${featured.title}
            </h3>

            <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium line-clamp-2">
              ${featured.summary}
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-amber-200">
              <span class="flex items-center gap-1.5">
                <i data-lucide="user" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>${featured.author}</span>
              </span>
              <span>•</span>
              <span class="flex items-center gap-1.5">
                <i data-lucide="clock" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>${featured.readTime}</span>
              </span>
            </div>
          </div>

          <div class="relative z-10 pt-2 flex items-center justify-between border-t border-white/10">
            <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5 group-hover:translate-x-[-4px] transition-transform">
              <span>مطالعه مقاله کامل</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </span>
          </div>
        </div>
      `;

      if (window.lucide) lucide.createIcons();
    }

    function renderInspirationGalleryGrid() {
      renderMagazineFeaturedBanner();
      if (typeof renderHomeMagazineHighlights === 'function') renderHomeMagazineHighlights();

      const grid = document.getElementById('insp-gallery-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const query = document.getElementById('insp-search-input')?.value.trim().toLowerCase() || '';

      let items = inspirationState.items;
      if (inspirationState.selectedCategory !== 'all') {
        items = items.filter(i => i.categoryKey === inspirationState.selectedCategory);
      }
      if (query) {
        items = items.filter(i => i.title.toLowerCase().includes(query) || i.categoryName.toLowerCase().includes(query));
      }

      if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full p-8 text-center text-slate-300 text-xs font-bold bg-[#0F172A] rounded-3xl border border-[#D4AF37]/30">هیچ ایده‌ای متناسب با جستجوی شما پیدا نشد.</div>`;
        return;
      }

      items.forEach(item => {
        const isBookmarked = inspirationState.bookmarkedIds.includes(item.id);
        const card = document.createElement('div');
        card.className = "bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_12px_30px_rgba(197,160,89,0.25)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 text-white";

        const vendorName = item.vendor ? item.vendor.name : 'تامین‌کننده معتبر یزد';
        const vendorId = item.vendor ? item.vendor.id : 1;

        card.innerHTML = `
          <div>
            <div onclick="openIdeaDetailModal(${item.id})" class="relative aspect-4/5 overflow-hidden bg-[#07090E] cursor-pointer">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/20 to-transparent"></div>

              <div class="absolute top-3 right-3">
                <span class="bg-[#07090E]/80 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/50 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md inline-flex items-center gap-1">
                  <i data-lucide="tag" class="w-3 h-3 text-[#C5A059]"></i>
                  <span>${item.categoryName}</span>
                </span>
              </div>

              <!-- "Shop the Look" Vendor Tag Overlay -->
              <div class="absolute bottom-3 right-3 left-3 flex justify-between items-center opacity-90 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
                <button onclick="openVendorDetailModal(${vendorId})" class="bg-[#07090E]/90 hover:bg-[#C5A059] hover:text-[#07090E] text-[#C5A059] border border-[#C5A059]/60 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-black transition-all flex items-center gap-1 shadow-lg cursor-pointer">
                  <i data-lucide="store" class="w-3 h-3"></i>
                  <span>تگ هوشمند: ${vendorName}</span>
                </button>
              </div>

              <div class="absolute top-3 left-3 flex items-center gap-1.5" onclick="event.stopPropagation()">
                <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="w-8 h-8 rounded-full bg-[#07090E]/80 backdrop-blur-md border border-[#C5A059]/30 flex items-center justify-center text-rose-500 shadow-md transition-transform active:scale-90 hover:scale-110 cursor-pointer" title="📌 ذخیره در مودبورد من">
                  <i data-lucide="heart" class="w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}"></i>
                </button>
                <span class="bg-[#07090E]/80 backdrop-blur-md text-slate-200 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3 h-3 text-[#C5A059]"></i>
                  <span>خواندن ۳ دقیقه</span>
                </span>
              </div>
            </div>

            <div onclick="openIdeaDetailModal(${item.id})" class="p-5 space-y-2 cursor-pointer text-right">
              <h4 class="text-sm sm:text-base font-black text-[#F7F5F0] line-clamp-2 leading-relaxed group-hover:text-[#C5A059] transition-colors">${item.title}</h4>
              <p class="text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed">مجموعه ایده‌های جدید و جذاب برای برنامه‌ریزی مراسم عروسی در یزد با طراحی اختصاصی.</p>
              <p class="text-[11px] text-[#C5A059] font-bold truncate flex items-center gap-1 pt-1">
                <i data-lucide="store" class="w-3.5 h-3.5 text-[#C5A059]"></i>
                <span>مجری: ${vendorName}</span>
              </p>
            </div>
          </div>

          <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#C5A059]/20">
            <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="text-xs font-bold flex items-center gap-1.5 ${isBookmarked ? 'text-rose-400' : 'text-slate-300 hover:text-rose-400'} transition-colors cursor-pointer">
              <i data-lucide="heart" class="w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : ''}"></i>
              <span>${isBookmarked ? 'ذخیره شده در مودبورد' : '📌 ذخیره در مودبورد من'}</span>
            </button>

            <button onclick="openIdeaDetailModal(${item.id})" class="text-xs font-black text-[#C5A059] hover:text-[#D4AF37] flex items-center gap-1 transition-all group-hover:translate-x-[-3px] cursor-pointer">
              <span>مطالعه مقاله</span>
              <i data-lucide="arrow-left" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    function renderMoodboardGrid() {
      const grid = document.getElementById('insp-moodboard-grid');
      if (!grid) return;
      grid.innerHTML = '';

      updateMoodboardBadge();

      const savedItems = inspirationState.items.filter(i => inspirationState.bookmarkedIds.includes(i.id));

      if (savedItems.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full p-12 text-center bg-[#0e121c]/90 border border-[#C5A059]/40 rounded-3xl space-y-4 text-white">
            <div class="w-16 h-16 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400 mx-auto flex items-center justify-center">
              <i data-lucide="heart" class="w-8 h-8"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-base font-bold text-[#F7F5F0]">مودبورد شما هنوز خالی است</h4>
              <p class="text-xs text-slate-300">روی آیکون 📌 «ذخیره در مودبورد من» در مجله ایده‌ها کلیک کنید تا ایده‌های محبوبتان اینجا قرار گیرند.</p>
            </div>
            <button onclick="switchInspirationSubTab('gallery')" class="bg-[#C5A059] text-[#07090E] font-black text-xs px-6 py-2.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-1.5 cursor-pointer">
              <span>ورود به مجله ایده‌ها</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      savedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-[#141A28] border border-[#C5A059]/30 rounded-3xl overflow-hidden shadow-xl hover:border-[#C5A059] transition-all flex flex-col justify-between text-white";
        card.innerHTML = `
          <div>
            <div class="relative aspect-4/5 overflow-hidden bg-[#07090E]">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
              <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="absolute top-3 left-3 bg-[#07090E]/90 text-rose-400 hover:text-rose-300 border border-rose-500/40 p-2 rounded-full shadow-md text-xs font-bold transition-transform active:scale-95 cursor-pointer" title="حذف از مودبورد">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="p-4 space-y-2">
              <span class="inline-block bg-[#07090E] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                ${item.categoryName}
              </span>
              <h4 class="text-xs font-bold text-[#F7F5F0] line-clamp-2 leading-relaxed">${item.title}</h4>
            </div>
          </div>

          <div class="p-4 pt-0 space-y-2">
            <button onclick="filterDirectoryByVendorCategory('${item.vendorCategoryMatch}')" class="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] font-black text-xs py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="store" class="w-3.5 h-3.5"></i>
              <span>جستجوی تامین‌کننده مرتبط</span>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    function showToast(message, type = 'success', duration = 3000) {
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 left-6 z-[100] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 md:px-0';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');

      let typeClasses = 'bg-primary border-emerald-400/30';
      let iconName = 'check-circle-2';

      if (type === 'info') {
        typeClasses = 'bg-slate-700 border-slate-500/30';
        iconName = 'info';
      } else if (type === 'warning') {
        typeClasses = 'bg-amber-600 border-amber-400/30';
        iconName = 'alert-triangle';
      } else if (type === 'danger') {
        typeClasses = 'bg-rose-600 border-rose-400/30';
        iconName = 'x-circle';
      }

      toast.className = `pointer-events-auto shadow-2xl rounded-2xl px-4 py-3 flex items-center justify-between gap-3 text-xs font-bold text-white transition-all duration-300 transform translate-y-4 opacity-0 border ${typeClasses}`;
      toast.innerHTML = `
        <div class="flex items-center gap-2.5">
          <i data-lucide="${iconName}" class="w-4 h-4 shrink-0 text-white"></i>
          <span>${message}</span>
        </div>
        <button onclick="dismissToast(this.parentElement)" class="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      `;

      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();

      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
      });

      const timer = setTimeout(() => {
        dismissToast(toast);
      }, duration);

      toast.dataset.timer = timer;
    }

    function dismissToast(toast) {
      if (!toast || toast.classList.contains('dismissing')) return;
      toast.classList.add('dismissing');
      if (toast.dataset.timer) clearTimeout(parseInt(toast.dataset.timer));

      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('-translate-y-2', 'opacity-0');

      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 300);
    }

    function showToastNotification(message, type = 'success', duration = 3000) {
      showToast(message, type, duration);
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('ServiceWorker registration catch:', err));
      });
    }

    window.requestNotificationPermission = function() {
      if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            showToast('🔔 اعلانات زنده مرورگر فعال گردید.', 'success');
          }
        });
      }
    };

    window.triggerWebPushNotification = function(title, options = {}) {
      if ('Notification' in window && Notification.permission === 'granted') {
        try {
          new Notification(title, {
            icon: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=120&q=80',
            badge: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=120&q=80',
            dir: 'rtl',
            lang: 'fa',
            ...options
          });
        } catch(e) {
          console.log('Web push notification dispatch:', e);
        }
      }
    };

    function showGlobalToast(message, type = 'success', duration = 3000) {
      showToast(message, type, duration);
    }

    function shareMoodboardToVendor() {
      const savedIds = JSON.parse(localStorage.getItem('aroosi_saved_inspiration_db') || '["insp-1", "insp-3", "insp-5"]');
      const savedItems = INSPIRATION_GALLERY_DB.filter(item => savedIds.includes(item.id));

      if (savedItems.length === 0) {
        showToast('⚠️ هنوز هیچ ایده‌ای در مودبورد شما ذخیره نشده است.', 'warning');
        return;
      }

      let msg = `سلام! مودبورد ایده‌های منتخب عروسی ما در سامانه «عروسی تو»:\n\n`;
      savedItems.forEach((item, index) => {
        msg += `${index + 1}. ${item.title} (${item.categoryTitle})\n`;
      });
      msg += `\nلطفاً بر اساس این مودبورد، پیشنهادات و قیمت پکیج را ارسال فرمایید.`;

      const encodedMsg = encodeURIComponent(msg);
      window.open(`https://wa.me/?text=${encodedMsg}`, '_blank');
      showToast('مودبورد جهت ارسال آماده گردید ✨', 'success');
    }
    window.shareMoodboardToVendor = shareMoodboardToVendor;

    function shareMoodboardLink() {
      const link = 'https://aroosito.com/moodboard/shared-couple-102';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('🔗 لینک مودبورد شخصی کپی شد', 'info');
      } else {
        showToast('لینک مودبورد شما: ' + link, 'info');
      }
    }

    function exportMoodboardPdf() {
      window.print();
      showToast('صفحه مودبورد جهت دانلود یا چاپ آماده گردید.', 'info');
    }

  // Super Admin Hero Logo update function
const CATEGORY_SUBGROUPS_MAP = {
  legal_ceremony: {
    title: "تشریفات قانونی، عقد و مشاوره",
    badge: "۵ زیرگروه تخصصی",
    icon: "building-2",
    subgroups: [
      { id: "sub-1", title: "دفتر رسمی ازدواج و طلاق", count: "+۱۲ مجموعه", desc: "ثبت رسمی ازدواج، ثبت سالن عقد و سفره عقد" },
      { id: "sub-2", title: "سفره عقد و دیزاین مراسم", count: "+۸ مرکز", desc: "دیزاین سفره عقد سنتی و مدرن با شمع‌آرایی" },
      { id: "sub-3", title: "مشاوره خانواده و زوج‌درمانی", count: "+۶ کلینیک", desc: "مشاوره تخصصی قبل از ازدواج و آزمون‌های روانشناسی" },
      { id: "sub-4", title: "سالن عقد و نامزدی", count: "+۱۰ سالن", desc: "سالن‌های عقد باظرفیت محدود و امکانات پذیرایی" },
      { id: "sub-5", title: "خدمات حقوقی و ثبت قرارداد", count: "+۵ دفتر", desc: "مشاوره حقوقی شروط ضمن عقد و تنظیم قراردادها" }
    ]
  },
  gold_shopping: {
    title: "طلا، خرید و خدمات جانبی",
    badge: "۵ زیرگروه تخصصی",
    icon: "gem",
    subgroups: [
      { id: "sub-6", title: "گالری طلا و جواهرات عروس", count: "+۱۵ گالری", desc: "سرویس طلا، جواهر و سنگ‌های قیمتی ساخت یزد" },
      { id: "sub-7", title: "حلقه ازدواج و پشت‌حلقه", count: "+۲۰ مرکز", desc: "حلقه‌های نامزدی و ست‌های پلاتین و طلا" },
      { id: "sub-8", title: "خدمات مسافرتی و تور ماه عسل", count: "+۸ آژانس", desc: "رزرو تورهای داخلی و خارجی ماه عسل" },
      { id: "sub-9", title: "اجاره خودرو لوکس و تشریفاتی", count: "+۶ مجموعه", desc: "اجاره ماشین عروس با راننده و گل‌آرایی اختصاصی" },
      { id: "sub-10", title: "ساعت و اکسسوری", count: "+۱۰ فروشگاه", desc: "ست‌های برند ساعت و اکسسوری‌های زنانه و مردانه" }
    ]
  },
  beauty_style: {
    title: "زیبایی و استایل زوجین",
    badge: "۶ زیرگروه تخصصی",
    icon: "sparkles",
    subgroups: [
      { id: "sub-11", title: "سالن زیبایی و میکاپ VIP عروس", count: "+۱۸ سالن", desc: "میکاپ تخصصی عروس، شینیون و پاکسازی پوست" },
      { id: "sub-12", title: "آرایشگاه و گریم داماد", count: "+۱۲ مجموعه", desc: "پکیج کامل پاکسازی، گریم و استایل موی داماد" },
      { id: "sub-13", title: "مزون لباس عروس و شب", count: "+۱۴ مزون", desc: "دوخت و اجاره لباس عروس، فرمالیته و تور" },
      { id: "sub-14", title: "پوشاک و کت‌وشلوار داماد", count: "+۱۰ فروشگاه", desc: "کت‌وشلوار دامادی، پیراهن و اکسسوری‌های مردانه" },
      { id: "sub-15", title: "تاج، تور و اکسسوری", count: "+۸ کارگاه", desc: "طراحی و ساخت تاج عروس، ریسه و تور سر" },
      { id: "sub-16", title: "خدمات ناخن و مژه", count: "+۱۵ کلینیک", desc: "کاشت تخصصی ناخن، اکستنشن مژه و مراقبت پوستی" }
    ]
  },
  photo_music: {
    title: "ثبت لحظات و موسیقی",
    badge: "۹ زیرگروه تخصصی",
    icon: "camera",
    subgroups: [
      { id: "sub-17", title: "آتلیه عکاسی و فیلمبرداری", count: "+۱۶ آتلیه", desc: "عکاسی سناریومحور، آلبوم دیجیتال و کلیپ ویدئویی" },
      { id: "sub-18", title: "تصویربرداری هوایی (هلی‌شات)", count: "+۸ تیم", desc: "تصویربرداری ۴K با پهپاد و هلی‌شات هوایی" },
      { id: "sub-19", title: "ساخت کلیپ فرمالیته کویر", count: "+۱۰ استودیو", desc: "عکاسی و فیلمبرداری اختصاصی در کویر یزد" },
      { id: "sub-20", title: "گروه موسیقی و دی‌جی زنده", count: "+۱۲ گروه", desc: "ارکستر زنده، دی‌جی خانم و آقا با نوازندگان حرفه‌ای" },
      { id: "sub-21", title: "نورپردازی و استیج", count: "+۶ مجری", desc: "طراحی استیج رقص، استیج هلندی و نورپردازی حرفه‌ای" },
      { id: "sub-22", title: "سیستم صوتی و اکو", count: "+۸ مرکز", desc: "اجاره و اجرای سیستم‌های صوتی هیبریدی" },
      { id: "sub-23", title: "آتلیه کودک و بارداری", count: "+۵ آتلیه", desc: "عکاسی تخصصی خانوادگی و یادبود" },
      { id: "sub-24", title: "فرمالیته شمال و جنوب", count: "+۶ تیم", desc: "سفرهای لوکس فرمالیته شمال، هرمز و قشم" },
      { id: "sub-25", title: "تصویربرداری ۴K و ۳۶۰ درجه", count: "+۷ مجموعه", desc: "استفاده از دوربین‌های ۳۶۰ درجه و لنز سینمایی" }
    ]
  },
  venue_catering: {
    title: "مکان، تشریفات و پذیرایی",
    badge: "۶ زیرگروه تخصصی",
    icon: "building",
    subgroups: [
      { id: "sub-26", title: "تالار عروسی و باغ‌تالار", count: "+۱۵ تالار", desc: "باغ‌تالارهای باشکوه صفائیه و یزد با ظرفیت بالا" },
      { id: "sub-27", title: "عمارت اختصاصی و هتل", count: "+۸ هتل", desc: "هتل‌های سنتی و پنج ستاره بافت تاریخی یزد" },
      { id: "sub-28", title: "کترینگ و خدمات غذا و شام", count: "+۱۲ کترینگ", desc: "منوهای غذایی ایرانی، سنتی و فرنگی سفارشی" },
      { id: "sub-29", title: "کیک و شیرینی سنتی یزد (حاج خلیفه)", count: "+۱۰ قنادی", desc: "قطاب، باقلوا، کیک طبقاتی و شیرینی عروسی" },
      { id: "sub-30", title: "گل‌آرایی و ماشین عروس", count: "+۱۴ گل‌فروشی", desc: "گل‌آرایی ورودی، جایگاه عروس و ماشین عروس" },
      { id: "sub-31", title: "تشریفات پذیرایی و فینگرفود", count: "+۹ تیم", desc: "مهمانداران آموزش‌دیده، بوفه فینگرفود و بار میوه" }
    ]
  }
};

const subgroupData = {
  1: ["دفتر رسمی ازدواج و طلاق", "سفره عقد و دیزاین مراسم", "مشاوره خانواده و زوج‌درمانی", "خدمات حقوقی و ثبت قرارداد"],
  2: ["گالری طلا و جواهرات عروس", "حلقه ازدواج و پشت‌حلقه", "خدمات مسافرتی و تور ماه عسل", "اجاره خودرو لوکس"],
  3: ["سالن زیبایی و میکاپ VIP", "آرایشگاه و گریم داماد", "مزون لباس عروس و شب", "پوشاک و کت‌وشلوار داماد", "تاج و اکسسوری"],
  4: ["استودیو و آتلیه عکاسی", "فیلمبرداری و تصویربرداری هوایی", "ساخت تیزر و کلیپ فرمالیته", "گروه موسیقی و دی‌جی زنده"],
  5: ["تالار عروسی و باغ‌تالار", "عمارت اختصاصی و هتل", "کترینگ و خدمات غذا", "تشریفات و گل‌آرایی ورودی"]
};

function closeAllSubgroupModals() {
  const modalSub = document.getElementById('subcategoryModal');
  const modalDrawer = document.getElementById('sub-category-drawer-modal');
  const modalSimple = document.getElementById('subgroups-modal');
  const modalGrid = document.getElementById('subgroupModal');
  if (modalSub) { modalSub.classList.add('hidden'); modalSub.classList.remove('flex'); modalSub.style.display = 'none'; }
  if (modalDrawer) { modalDrawer.classList.add('hidden'); modalDrawer.classList.remove('flex'); }
  if (modalSimple) { modalSimple.classList.add('hidden'); modalSimple.style.display = 'none'; }
  if (modalGrid) { modalGrid.classList.add('hidden'); modalGrid.style.display = 'none'; }
  document.body.style.overflow = '';
}

function openCategorySubgroupsModal(catKey) {
  const data = CATEGORY_SUBGROUPS_MAP[catKey] || CATEGORY_SUBGROUPS_MAP.venue_catering;

  // 1. Populate Floating Sub-Category Drawer (#subcategoryModal / #sub-category-drawer-modal)
  const drawerModal = document.getElementById('subcategoryModal') || document.getElementById('sub-category-drawer-modal');
  const drawerTitle = document.getElementById('drawer-header-title');
  const drawerBadge = document.getElementById('drawer-header-badge');
  const drawerIcon = document.getElementById('drawer-header-icon');
  const drawerGrid = document.getElementById('drawer-subcategories-grid');

  if (drawerTitle) drawerTitle.innerText = data.title;
  if (drawerBadge) drawerBadge.innerText = data.badge;
  if (drawerIcon) drawerIcon.innerHTML = `<i data-lucide="${data.icon || 'layers'}" class="w-6 h-6 text-amber-400"></i>`;

  if (drawerGrid) {
    drawerGrid.innerHTML = data.subgroups.map(sub => {
      const subTitle = typeof sub === 'string' ? sub : sub.title;
      const subCount = typeof sub === 'string' ? '+۵ کسب‌وکار' : (sub.count || '+۵ کسب‌وکار');
      const subDesc = typeof sub === 'string' ? 'مشاهده و استعلام قیمت کسب‌وکارهای تاییدشده یزد' : (sub.desc || 'مشاهده و استعلام قیمت کسب‌وکارهای تاییدشده یزد');
      const subSlug = encodeURIComponent(subTitle);
      const catSlug = catKey;

      return `
        <div onclick="closeAllSubgroupModals(); window.location.href='directory.html?category=${catSlug}&sub=${subSlug}';" class="bg-[#161B22] hover:bg-[#1F2633] border border-gray-800 hover:border-amber-500/50 rounded-2xl p-4 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between group">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <span class="font-black text-xs text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <i data-lucide="tag" class="w-3.5 h-3.5 text-amber-400"></i>
                ${subTitle}
              </span>
              <span class="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full">${subCount}</span>
            </div>
            <p class="text-[11px] text-slate-300 leading-relaxed font-medium line-clamp-2">${subDesc}</p>
          </div>
          <div class="pt-3 border-t border-gray-800/80 mt-3 flex items-center justify-between text-[11px] text-amber-400 font-bold">
            <span>مشاهده و فیلتر لیست</span>
            <span class="group-hover:translate-x-[-3px] transition-transform">←</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Show Active Modal
  if (drawerModal) {
    drawerModal.classList.remove('hidden');
    drawerModal.classList.add('flex');
    drawerModal.style.display = 'flex';
  }

  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

function openCategorySubgroups(catId, fallbackTitle) {
  const catKeyMap = {
    1: 'legal_ceremony',
    2: 'gold_shopping',
    3: 'beauty_style',
    4: 'photo_music',
    5: 'venue_catering'
  };
  if (typeof catId === 'string' && CATEGORY_SUBGROUPS_MAP[catId]) {
    openCategorySubgroupsModal(catId);
    return;
  }
  if (catKeyMap[catId]) {
    openCategorySubgroupsModal(catKeyMap[catId]);
    return;
  }

  // Fallback for custom categories
  let subgroups = subgroupData[catId] || subgroupData[1] || [];
  const modal = document.getElementById('subgroupModal');
  const title = document.getElementById('modalCatTitle');
  const container = document.getElementById('subgroupGridList');

  if (title) title.innerText = fallbackTitle || "خدمات";
  if (container) {
    container.innerHTML = subgroups.map(sub => `
      <div class="subgroup-item-card">
        <span class="subgroup-name">📍 ${sub}</span>
        <button onclick="switchTab('directory'); filterVendorsByCategoryTitle('${sub}'); closeSubgroupModal();" class="btn-subgroup-view">مشاهده لیست ←</button>
      </div>
    `).join('');
  }
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
  }
}

function openSubgroupsModal(catId, catTitle) {
  openCategorySubgroups(catId, catTitle);
}

function closeSubgroupModal() {
  closeAllSubgroupModals();
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  const modal1 = document.getElementById('subgroupModal');
  if (e.target === modal1) closeSubgroupModal();

  const modal2 = document.getElementById('subgroups-modal');
  if (e.target === modal2) closeSubgroupModal();
});

  function handleUpdateHeroLogo() {
    const input = document.getElementById('admin-hero-logo-url-input');
    const logoImg = document.getElementById('site-hero-logo');
    if (input && logoImg && input.value.trim() !== '') {
      logoImg.src = input.value.trim();
      if (typeof showToast === 'function') {
        showToast('لوگوی اصلی سایت با موفقیت بروزرسانی شد', 'success');
      }
    } else {
      if (typeof showToast === 'function') {
        showToast('لطفا یک آدرس معتبر برای تصویر وارد کنید', 'warning');
      }
    }
  }

  function loadShowcaseConfig() {
    try {
      const stored = localStorage.getItem('aroosi_admin_showcase_config');
      if (stored) {
        const config = JSON.parse(stored);
        if (config.bannerText) {
          const bannerInput = document.getElementById('admin-banner-text');
          if (bannerInput) bannerInput.value = config.bannerText;
        }
        if (config.heroTitle) {
          const titleInput = document.getElementById('admin-hero-title-input');
          if (titleInput) titleInput.value = config.heroTitle;
          const heroH1 = document.querySelector('#hero h1');
          if (heroH1) heroH1.innerHTML = config.heroTitle;
        }
        if (config.heroSubtitle) {
          const subInput = document.getElementById('admin-hero-subtitle-input');
          if (subInput) subInput.value = config.heroSubtitle;
          const heroP = document.querySelector('#hero p');
          if (heroP) heroP.textContent = config.heroSubtitle;
        }
      }
    } catch (e) {
      console.error('Failed to load showcase config:', e);
    }
  }

  function handleSaveShowcaseConfig() {
    if (currentUserRole !== 'admin') {
      showToast("دسترسی غیرمجاز: اجرای این اقدام نیازمند نقش مدیر است.", 'danger');
      return;
    }
    const bannerText = document.getElementById('admin-banner-text')?.value || '';
    const heroTitle = document.getElementById('admin-hero-title-input')?.value || '';
    const heroSubtitle = document.getElementById('admin-hero-subtitle-input')?.value || '';

    const config = { bannerText, heroTitle, heroSubtitle };
    try {
      localStorage.setItem('aroosi_admin_showcase_config', JSON.stringify(config));
    } catch (e) {
      console.error('Failed to save showcase config:', e);
    }

    const heroH1 = document.querySelector('#hero h1');
    if (heroH1 && heroTitle) heroH1.innerHTML = heroTitle;

    const heroP = document.querySelector('#hero p');
    if (heroP && heroSubtitle) heroP.textContent = heroSubtitle;

    showToast('تنظیمات ویترین و متون بنر با موفقیت ذخیره و منتشر گردید', 'success');
  }


// Expose modal functions to window globally
try {
  window.openVendorDetailModal = openVendorDetailModal;
  window.closeVendorDetailModal = closeVendorDetailModal;
  window.switchModalTab = switchModalTab;
  window.switchVdmSubTab = switchVdmSubTab;
  window.toggleFavoriteVendorModal = toggleFavoriteVendorModal;
  window.triggerPackageInquiry = triggerPackageInquiry;
  window.handleModalReviewSubmit = handleModalReviewSubmit;
  window.renderModalAvailabilityCalendar = renderModalAvailabilityCalendar;
  window.switchModalCalendarMonth = renderModalAvailabilityCalendar;
} catch(e) {}


// Helper functions for vendor profile modal actions
window.openVendorChatFromModal = function() {
  if (typeof closeVendorDetailModal === 'function') closeVendorDetailModal();
  if (typeof switchTab === 'function') switchTab('messages');
  if (typeof showToast === 'function') showToast('💬 چت مستقیم با تامین‌کننده فعال شد', 'info');
};

window.openQuoteModal = function openQuoteModal(vendorId, vendorName, itemTitle, itemPrice, itemType) {
  if (typeof openInquiryModal === 'function') {
    openInquiryModal(vendorId || 1, vendorName || 'تامین‌کننده', itemTitle, itemPrice, itemType);
  } else {
    const modal = document.getElementById('quote-modal');
    if (modal) modal.classList.remove('hidden');
  }
};

window.closeQuoteModal = function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.classList.add('hidden');
  if (typeof closeInquiryModal === 'function') closeInquiryModal();
};

window.handleQuoteSubmit = function handleQuoteSubmit(e) {
  if (e) e.preventDefault();
  window.closeQuoteModal();
  if (typeof showToast === 'function') {
    showToast('✨ درخواست استعلام قیمت شما با موفقیت ثبت شد و پاسخ به زودی ارسال می‌شود.', 'success');
  }
};

window.openInquireFromVendorModal = function() {
  const v = (typeof currentModalVendor !== 'undefined' && currentModalVendor) ? currentModalVendor : null;
  if (v) {
    window.openQuoteModal(v.id, v.name);
  } else {
    window.openQuoteModal(1, 'هتل باغ مشیرالممالک یزد');
  }
};

window.shareVendorModal = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (navigator.share) {
    navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
  } else {
    if (navigator.clipboard) navigator.clipboard.writeText(window.location.href);
    if (typeof showToast === 'function') showToast('🔗 لینک اشتراک‌گذاری کپی شد!', 'success');
  }
};

window.toggleReviewSubmitDrawer = function() {
  const form = document.getElementById('vdm-add-review-form');
  if (form) {
    form.classList.toggle('hidden');
  } else if (typeof showToast === 'function') {
    showToast('✍️ فرم ثبت نظر جدید باز شد', 'info');
  }
};

// Subscription Matrix & Billing History Handlers
window.toggleBillingHistoryDrawer = function() {
  const drawer = document.getElementById('vd-billing-history-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
    if (window.lucide) lucide.createIcons();
  }
};

window.openSubscriptionMatrixModal = function() {
  const modal = document.getElementById('modal-subscription-matrix');
  if (modal) {
    modal.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeSubscriptionMatrixModal = function() {
  const modal = document.getElementById('modal-subscription-matrix');
  if (modal) {
    modal.classList.add('hidden');
  }
};

window.selectSubscriptionPlan = function(planName, priceText) {
  closeSubscriptionMatrixModal();
  const titleElem = document.getElementById('vd-active-plan-title');
  if (titleElem) {
    titleElem.innerText = `اشتراک فعال: ${planName} (${priceText})`;
  }
  if (typeof showToast === 'function') {
    showToast(`✨ درخواست ارتقا/تمدید به پلن ${planName} ثبت شد. فاکتور صادر گردید.`, 'success');
  }
};

// DYNAMIC PRE-INVOICE BUILDER FUNCTIONS
let invoiceItemsList = [
  { name: 'پکیج عکاسی و فیلمبرداری VIP 4K', qty: 1, unitPrice: 25000000 },
  { name: 'تصویربرداری هلی‌شات کویر و کلیپ اسپرت', qty: 1, unitPrice: 12000000 },
  { name: 'آلبوم ایتالیایی ۶۰×۳۰ جلد چرمی دست‌ساز', qty: 1, unitPrice: 8000000 }
];

window.renderInvoiceItemRows = function() {
  const tbody = document.getElementById('inv-builder-items-tbody');
  if (!tbody) return;

  if (invoiceItemsList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="p-3 text-center text-slate-400">ردیفی ثبت نشده است. روی دکمه افزودن کلیک کنید.</td></tr>`;
    window.calcInvoiceTotals();
    return;
  }

  tbody.innerHTML = invoiceItemsList.map((item, idx) => {
    const rowTotal = (Number(item.qty) || 1) * (Number(item.unitPrice) || 0);
    return `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="p-2">
          <input type="text" value="${item.name || ''}" oninput="updateInvoiceItem(${idx}, 'name', this.value)" placeholder="نام خدمت..." class="w-full bg-[#0F251A] border border-[#D4AF37]/30 rounded-lg p-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]">
        </td>
        <td class="p-2 text-center">
          <input type="number" min="1" value="${item.qty || 1}" oninput="updateInvoiceItem(${idx}, 'qty', this.value)" class="w-14 bg-[#0F251A] border border-[#D4AF37]/30 rounded-lg p-1.5 text-xs text-center font-bold text-white focus:outline-none focus:border-[#D4AF37]">
        </td>
        <td class="p-2">
          <input type="text" value="${(item.unitPrice || 0).toLocaleString('fa-IR')}" oninput="updateInvoiceItemPrice(${idx}, this.value)" placeholder="مبلغ فی..." class="w-full bg-[#0F251A] border border-[#D4AF37]/30 rounded-lg p-1.5 text-xs font-bold text-amber-200 focus:outline-none focus:border-[#D4AF37]">
        </td>
        <td id="inv-row-total-${idx}" class="p-2 font-bold text-[#D4AF37] text-xs">
          ${rowTotal.toLocaleString('fa-IR')}
        </td>
        <td class="p-2 text-center">
          <button type="button" onclick="removeInvoiceItemRow(${idx})" class="w-7 h-7 rounded-lg bg-rose-900/50 hover:bg-rose-800 text-rose-200 flex items-center justify-center transition-colors cursor-pointer" title="حذف ردیف">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
  window.calcInvoiceTotals();
};

window.addInvoiceItemRow = function(name = '', qty = 1, unitPrice = 0) {
  invoiceItemsList.push({
    name: name || 'خدمت اختصاصی جدید',
    qty: qty || 1,
    unitPrice: unitPrice || 5000000
  });
  window.renderInvoiceItemRows();
};

window.removeInvoiceItemRow = function(idx) {
  invoiceItemsList.splice(idx, 1);
  window.renderInvoiceItemRows();
};

window.updateInvoiceItem = function(idx, field, val) {
  if (!invoiceItemsList[idx]) return;
  if (field === 'qty') {
    invoiceItemsList[idx].qty = Math.max(1, parseInt(val) || 1);
  } else {
    invoiceItemsList[idx][field] = val;
  }
  const rowTotal = (Number(invoiceItemsList[idx].qty) || 1) * (Number(invoiceItemsList[idx].unitPrice) || 0);
  const totalEl = document.getElementById(`inv-row-total-${idx}`);
  if (totalEl) totalEl.textContent = rowTotal.toLocaleString('fa-IR');
  window.calcInvoiceTotals();
};

window.updateInvoiceItemPrice = function(idx, val) {
  if (!invoiceItemsList[idx]) return;
  const numeric = typeof parsePriceNumeric === 'function' ? parsePriceNumeric(val) : parseInt(val.replace(/\D/g, '')) || 0;
  invoiceItemsList[idx].unitPrice = numeric;
  const rowTotal = (Number(invoiceItemsList[idx].qty) || 1) * (Number(invoiceItemsList[idx].unitPrice) || 0);
  const totalEl = document.getElementById(`inv-row-total-${idx}`);
  if (totalEl) totalEl.textContent = rowTotal.toLocaleString('fa-IR');
  window.calcInvoiceTotals();
};

window.calcInvoiceTotals = function() {
  const subtotal = invoiceItemsList.reduce((acc, item) => acc + ((Number(item.qty) || 1) * (Number(item.unitPrice) || 0)), 0);

  const discountInput = document.getElementById('inv-builder-discount');
  const discountVal = discountInput ? (typeof parsePriceNumeric === 'function' ? parsePriceNumeric(discountInput.value) : 0) : 0;

  const grandTotal = Math.max(0, subtotal - discountVal);

  const depositInput = document.getElementById('inv-builder-deposit');
  const depositVal = depositInput ? (typeof parsePriceNumeric === 'function' ? parsePriceNumeric(depositInput.value) : 0) : 0;

  const inst2Input = document.getElementById('inv-builder-installment2');
  const inst2Val = inst2Input ? (typeof parsePriceNumeric === 'function' ? parsePriceNumeric(inst2Input.value) : 0) : 0;

  const balance = Math.max(0, grandTotal - depositVal - inst2Val);

  const subtotalEl = document.getElementById('inv-builder-subtotal');
  if (subtotalEl) subtotalEl.value = subtotal.toLocaleString('fa-IR');

  const grandTotalEl = document.getElementById('inv-builder-total');
  if (grandTotalEl) grandTotalEl.value = grandTotal.toLocaleString('fa-IR');

  const balanceEl = document.getElementById('inv-builder-balance');
  if (balanceEl) balanceEl.value = balance.toLocaleString('fa-IR');
};

window.openVendorInvoiceBuilderModal = function(coupleName = 'علی و سارا', pkgTitle = '') {
  const modal = document.getElementById('modal-vendor-invoice-builder');
  if (!modal) return;

  const coupleInput = document.getElementById('inv-builder-couple');
  if (coupleInput) coupleInput.value = coupleName;

  if (pkgTitle && invoiceItemsList.length > 0) {
    invoiceItemsList[0].name = pkgTitle;
  }

  window.renderInvoiceItemRows();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

window.closeVendorInvoiceBuilderModal = function() {
  const modal = document.getElementById('modal-vendor-invoice-builder');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

/* SMART PWA INSTALL PROMPT BANNER ENGINE */
let deferredPwaPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const pwaBanner = document.getElementById('pwa-install-banner');
  if (pwaBanner) pwaBanner.classList.remove('hidden');
});

window.installPwaApp = function() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        if (typeof showToast === 'function') showToast('📲 اپلیکیشن عروسی تو روی گوشی شما نصب شد ✨', 'success');
      }
      deferredPwaPrompt = null;
      const pwaBanner = document.getElementById('pwa-install-banner');
      if (pwaBanner) pwaBanner.classList.add('hidden');
    });
  } else {
    if (typeof showToast === 'function') showToast('📲 گزینه "افزودن به صفحه اصلی" را از منوی مرورگر کلیک کنید.', 'info');
  }
};

window.dismissPwaBanner = function() {
  const pwaBanner = document.getElementById('pwa-install-banner');
  if (pwaBanner) pwaBanner.classList.add('hidden');
};

/* ICALENDAR (.ICS) EVENT GENERATOR */
window.downloadCalendarIcs = function(title, dateStr, location, description) {
  const eventTitle = title || 'مراسم عروسی لوکس یزد';
  const eventLoc = location || 'استان یزد';
  const eventDesc = description || 'برنامه‌ریزی شده در پلتفرم عروسی تو';

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Aroosi To Yazd Platform//NONSGML v1.0//FA',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:${eventDesc}`,
    `LOCATION:${eventLoc}`,
    'DTSTART:20251120T180000Z',
    'DTEND:20251120T230000Z',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${eventTitle.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (typeof showToast === 'function') {
    showToast('📅 فایل رویداد تقویم (.ics) دانلود شد.', 'success');
  }
};

/* SIMULATED SMS & WHATSAPP WEBHOOK TRIGGER ENGINE */
window.triggerSmsNotification = function(phone, msgType, details = {}) {
  const targetPhone = phone || '09130000000';
  const timestamp = new Date().toLocaleTimeString('fa-IR');

  let bodyMsg = '';
  switch(msgType) {
    case 'INQUIRY_RECEIVED':
      bodyMsg = `📩 عروسی تو: استعلام جدید برای ${details.vendorName || 'تامین‌کننده'} ثبت شد.\nکد پیگیری: ${details.inquiryId || 'YAZD-101'}\nتاریخ: ${details.eventDate || '۱۴۰۳/۰۸/۲۰'}`;
      break;
    case 'PREINVOICE_ISSUED':
      bodyMsg = `🧾 عروسی تو: پیش‌فاکتور جدید به مبلغ ${details.totalAmount || '۰'} تومان صادر گردید.\nکد: ${details.invoiceId || 'INV-101'}`;
      break;
    default:
      bodyMsg = `✨ عروسی تو: بروزرسانی جدید در سفارش شما ثبت شد.`;
  }

  // Store in LocalStorage logs
  try {
    const existingLogs = JSON.parse(localStorage.getItem('aroosi_sms_logs') || '[]');
    existingLogs.unshift({ id: Date.now(), phone: targetPhone, msg: bodyMsg, time: timestamp });
    localStorage.setItem('aroosi_sms_logs', JSON.stringify(existingLogs.slice(0, 20)));
  } catch (e) {
    console.error('Error logging SMS:', e);
  }

  // Show Toast
  if (typeof showToast === 'function') {
    showToast(`📱 پیامک اطلاع‌رسانی به ${targetPhone} ارسال گردید.`, 'success');
  }
};

/* REELS 9:16 VERTICAL VIDEO PLAYER HANDLERS */
let currentReelsVendor = null;

window.openReelsPlayer = function(vendorId, videoUrl) {
  let vId = vendorId;
  if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) vId = parseInt(vendorId);

  const vendor = (typeof vendors !== 'undefined' && Array.isArray(vendors))
    ? (vendors.find(v => v.id === vId) || vendors[0])
    : null;

  currentReelsVendor = vendor;
  const modal = document.getElementById('modal-reels-player');
  const videoEl = document.getElementById('reels-video-element');
  const logoEl = document.getElementById('reels-vendor-logo');
  const nameEl = document.getElementById('reels-vendor-name');

  if (!modal || !videoEl) return;

  const src = videoUrl || (vendor ? vendor.videoTeaser : '') || 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-a-park-41315-large.mp4';
  videoEl.src = src;
  if (logoEl && vendor) logoEl.src = vendor.image || logoEl.src;
  if (nameEl && vendor) nameEl.innerText = vendor.name;

  modal.classList.remove('hidden');
  videoEl.muted = false;
  videoEl.play().catch(() => { videoEl.muted = true; videoEl.play(); });
};

window.closeReelsPlayer = function() {
  const modal = document.getElementById('modal-reels-player');
  const videoEl = document.getElementById('reels-video-element');
  if (videoEl) { videoEl.pause(); videoEl.src = ''; }
  if (modal) modal.classList.add('hidden');
};

window.toggleReelsMute = function() {
  const videoEl = document.getElementById('reels-video-element');
  const btn = document.getElementById('reels-mute-btn');
  if (!videoEl) return;
  videoEl.muted = !videoEl.muted;
  if (btn) btn.innerText = videoEl.muted ? '🔇 بی‌صدا' : '🔊 صدا';
};

window.openInquiryModalFromReels = function() {
  const vendor = currentReelsVendor;
  closeReelsPlayer();
  if (vendor && typeof openInquiryModal === 'function') {
    openInquiryModal(vendor.id, vendor.name);
  }
};

/* ==========================================================================
   ATMOSPHERE LIGHTING SWITCHER (Day / Night Moods)
   ========================================================================== */
window.setAtmosphereMood = function(mood) {
  const body = document.body;
  const nightBtn = document.getElementById('mood-btn-night');
  const dayBtn = document.getElementById('mood-btn-day');

  if (mood === 'day') {
    body.classList.remove('mood-night');
    body.classList.add('mood-day');
    try { localStorage.setItem('aroosi_atmosphere_mood', 'day'); } catch(e){}
    if (dayBtn) dayBtn.className = "px-2.5 py-1.5 rounded-xl text-[10.5px] font-black transition-all bg-[#D4AF37] text-[#0F251A] shadow-xs cursor-pointer flex items-center gap-1";
    if (nightBtn) nightBtn.className = "px-2.5 py-1.5 rounded-xl text-[10.5px] font-bold transition-all text-amber-200 hover:text-white cursor-pointer flex items-center gap-1";
    if (typeof showToast === 'function') showToast('حالت دیداری: روز / Sunlit Garden فعال شد.', 'info');
  } else {
    body.classList.remove('mood-day');
    body.classList.add('mood-night');
    try { localStorage.setItem('aroosi_atmosphere_mood', 'night'); } catch(e){}
    if (nightBtn) nightBtn.className = "px-2.5 py-1.5 rounded-xl text-[10.5px] font-black transition-all bg-[#D4AF37] text-[#0F251A] shadow-xs cursor-pointer flex items-center gap-1";
    if (dayBtn) dayBtn.className = "px-2.5 py-1.5 rounded-xl text-[10.5px] font-bold transition-all text-amber-200 hover:text-white cursor-pointer flex items-center gap-1";
    if (typeof showToast === 'function') showToast('حالت دیداری: شب / Gold Candlelight (پیش‌فرض) فعال شد.', 'info');
  }
};

/* ==========================================================================
   HOVER CARD PORTFOLIO SLIDESHOW CONTROLLER
   ========================================================================== */
let cardSlideshowIntervals = {};

window.startCardImageSlideshow = function(container, vendorId) {
  if (!container) return;
  const img = container.querySelector('img');
  if (!img) return;

  const vendor = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? vendors.find(v => v.id === parseInt(vendorId)) : null;
  if (!vendor || !vendor.gallery || vendor.gallery.length === 0) return;

  const images = [vendor.image, ...vendor.gallery.slice(0, 3)];
  let idx = 0;

  if (cardSlideshowIntervals[vendorId]) clearInterval(cardSlideshowIntervals[vendorId]);

  cardSlideshowIntervals[vendorId] = setInterval(() => {
    idx = (idx + 1) % images.length;
    img.style.opacity = '0.7';
    setTimeout(() => {
      img.src = images[idx];
      img.style.opacity = '1';
    }, 150);
  }, 1200);
};

window.stopCardImageSlideshow = function(container, vendorId) {
  if (cardSlideshowIntervals[vendorId]) {
    clearInterval(cardSlideshowIntervals[vendorId]);
    delete cardSlideshowIntervals[vendorId];
  }
  if (!container) return;
  const img = container.querySelector('img');
  const vendor = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? vendors.find(v => v.id === parseInt(vendorId)) : null;
  if (img && vendor && vendor.image) {
    img.src = vendor.image;
    img.style.opacity = '1';
  }
};

window.openQuickSearchOverlay = function() {
  const modal = document.getElementById('modal-quick-search-overlay');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('quick-search-modal-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
    }
    window.handleOverlaySearchInput('');
  }
};

window.closeQuickSearchOverlay = function() {
  const modal = document.getElementById('modal-quick-search-overlay');
  if (modal) modal.classList.add('hidden');
};

window.handleOverlaySearchInput = function(query) {
  const container = document.getElementById('quick-search-modal-results');
  if (!container) return;

  const q = (query || '').trim().toLowerCase();
  const matched = vendors.filter(v =>
    !q ||
    v.name.toLowerCase().includes(q) ||
    v.category.toLowerCase().includes(q) ||
    (v.district && v.district.toLowerCase().includes(q))
  );

  if (matched.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400 text-xs font-medium">نتیجه‌ای برای "${query}" یافت نشد</div>`;
    return;
  }

  const itemsHtml = matched.map(v => `
    <div onclick="closeQuickSearchOverlay(); openVendorDetailModal(${v.id})" class="p-3 hover:bg-[#1E293B] cursor-pointer transition-all flex items-center justify-between text-right border-b border-slate-800/60 last:border-none">
      <div class="flex items-center gap-3">
        <img src="${v.image}" class="w-10 h-10 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0">
        <div>
          <p class="text-xs font-black text-white">${v.name}</p>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-[9.5px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-md border border-[#D4AF37]/30">${v.category}</span>
            <span class="text-[10px] text-amber-200/80 font-medium">📍 ${v.district || 'یزد'}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span class="text-[10.5px] font-black text-amber-300 flex items-center gap-0.5">⭐ ${v.rating || '۴.۹'}</span>
        <span class="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-2.5 py-1 rounded-full">مشاهده ↗</span>
      </div>
    </div>
  `).join('');

  const stickyFooter = q ? `
    <div onclick="closeQuickSearchOverlay(); switchTab('directory'); const s=document.getElementById('directory-instant-search'); if(s){s.value='${q}'; filterVendors();}" class="sticky bottom-0 bg-[#0b0f19] border-t border-[#D4AF37]/40 p-3 text-center text-xs font-black text-[#D4AF37] hover:bg-[#1E293B] cursor-pointer transition-all flex items-center justify-center gap-1 shadow-lg">
      <span>مشاهده تمامی نتایج برای "${q}" (${matched.length} مورد)</span>
      <i data-lucide="arrow-left" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
    </div>
  ` : '';

  container.innerHTML = `<div class="max-h-[350px] overflow-y-auto custom-scrollbar">${itemsHtml}</div>${stickyFooter}`;
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.executeOverlaySearch = function() {
  const input = document.getElementById('quick-search-modal-input');
  if (input && input.value.trim()) {
    closeQuickSearchOverlay();
    switchTab('directory');
  }
};

window.executeQuickCategorySearch = function(catName) {
  closeQuickSearchOverlay();
  if (typeof window.filterVendorsByCategoryTitle === 'function') {
    window.filterVendorsByCategoryTitle(catName);
  } else {
    switchTab('directory');
  }
};

window.openVipConciergeModal = function() {
  const modal = document.getElementById('modal-vip-concierge');
  if (modal) modal.classList.remove('hidden');
};

window.closeVipConciergeModal = function() {
  const modal = document.getElementById('modal-vip-concierge');
  if (modal) modal.classList.add('hidden');
};

window.handleVipConciergeSubmit = function(e) {
  if (e) e.preventDefault();
  closeVipConciergeModal();
  if (typeof showToast === 'function') showToast('درخواست مشاوره کنسیرژ VIP با موفقیت ثبت شد. مشاور تشریفات عروسی نو به زودی تماس می‌گیرد.', 'success');
};

/* QUICK VIEW MODAL / DRAWER CONTROLLERS */
window.openQuickViewModal = function(vendorId, event) {
  if (event) event.stopPropagation();

  let vId = vendorId;
  if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
    vId = parseInt(vendorId);
  }
  return window.openQuickViewDrawer(vId, event);
};

window.openQuickViewDrawer = function(vendorId, event) {
  if (event) event.stopPropagation();

  let vId = vendorId;
  if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
    vId = parseInt(vendorId);
  }

  const vendor = (typeof vendors !== 'undefined' && Array.isArray(vendors))
    ? (vendors.find(v => v.id === vId) || vendors[0])
    : null;

  if (!vendor) return;

  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  const logoEl = document.getElementById('qv-vendor-logo');
  const nameEl = document.getElementById('qv-vendor-name');
  const subEl = document.getElementById('qv-vendor-sub');
  const priceEl = document.getElementById('qv-vendor-price');
  const ratingEl = document.getElementById('qv-vendor-rating');
  const gridEl = document.getElementById('qv-portfolio-grid');
  const tagsEl = document.getElementById('qv-amenities-tags');
  const inquireBtn = document.getElementById('qv-inquire-btn');
  const profileBtn = document.getElementById('qv-profile-btn');

  if (logoEl) logoEl.src = vendor.image || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=150';
  if (nameEl) nameEl.innerText = vendor.name;
  if (subEl) subEl.innerText = `${vendor.category} • ${vendor.district || 'صفائیه، یزد'}`;
  if (priceEl) priceEl.innerText = vendor.priceRange || 'استعلام قیمت';
  if (ratingEl) ratingEl.innerText = `⭐️ ${vendor.rating || 4.9} (${vendor.reviewCount || 32} نظر)`;

  // Render 3-5 top portfolio images
  if (gridEl) {
    const portfolioImgs = (vendor.gallery && vendor.gallery.length > 0)
      ? vendor.gallery.slice(0, 3)
      : [
          vendor.image,
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
        ];

    gridEl.innerHTML = portfolioImgs.map(imgSrc => `
      <div class="h-24 sm:h-28 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#1E293B] group/img relative cursor-pointer" onclick="closeQuickViewModal(); openVendorDetailModal(${vendor.id})">
        <img src="${imgSrc}" alt="${vendor.name}" class="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300">
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-[#D4AF37]">
          <i data-lucide="zoom-in" class="w-5 h-5"></i>
        </div>
      </div>
    `).join('');
  }

  // Render key amenities / capability tags
  if (tagsEl) {
    const tags = vendor.capabilityTags || ["پارکینگ اختصاصی", "پاسخگویی سریع", "تضمین کیفیت خدمات", "پذیرایی VIP"];
    tagsEl.innerHTML = tags.map(t => `
      <span class="text-[10.5px] font-bold text-amber-100 bg-[#1E293B] border border-[#D4AF37]/30 px-2.5 py-1 rounded-lg flex items-center gap-1">
        <i data-lucide="check-circle-2" class="w-3 h-3 text-[#D4AF37]"></i>
        <span>${t}</span>
      </span>
    `).join('');
  }

  // Wire CTAs
  if (inquireBtn) {
    inquireBtn.onclick = function() {
      closeQuickViewModal();
      openInquiryModal(vendor.id, vendor.name);
    };
  }

  if (profileBtn) {
    profileBtn.onclick = function() {
      closeQuickViewModal();
      openVendorDetailModal(vendor.id);
    };
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

window.closeQuickViewModal = function() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// ==========================================================================
// PHASE 3: AI VIRTUAL TRY-ON STUDIO LOGIC
// ==========================================================================
window.openAiTryOnModal = function() {
  const modal = document.getElementById('modal-ai-tryon');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeAiTryOnModal = function() {
  const modal = document.getElementById('modal-ai-tryon');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleTryOnPhotoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const userImg = document.getElementById('ai-tryon-user-img');
    if (userImg) userImg.src = e.target.result;
    showToast('تصویر جدید با موفقیت بارگذاری گردید.', 'success');
  };
  reader.readAsDataURL(file);
};

window.applyTryOnPreset = function(presetKey, titleLabel, overlaySrc) {
  const overlayImg = document.getElementById('ai-tryon-overlay-img');
  const badge = document.getElementById('ai-tryon-preset-badge');

  if (badge) badge.textContent = `پرو: ${titleLabel}`;

  if (overlayImg) {
    if (overlaySrc) {
      overlayImg.src = overlaySrc;
      overlayImg.classList.remove('hidden');
    } else {
      overlayImg.classList.add('hidden');
    }
  }
  showToast(`پرو مجازی ${titleLabel} اعمال شد!`, 'info');
};

// ==========================================================================
// PHASE 3: WEDDING DAY MASTER SCHEDULE BUILDER
// ==========================================================================
let masterScheduleItems = [
  { id: 's1', time: '۰۸:۰۰', title: 'حضور عروس در سالن زیبایی و گریم', responsible: 'عروس & ساقدوش' },
  { id: 's2', time: '۱۱:۰۰', title: 'حضور داماد در پیرایشگاه و تحویل ماشین عروس', responsible: 'داماد' },
  { id: 's3', time: '۱۳:۳۰', title: 'ورود داماد به سالن زیبایی جهت دیدار نهایی (First Look)', responsible: 'عکاس & فیلمبردار' },
  { id: 's4', time: '۱۴:۳۰', title: 'حرکت به سمت باغ و آتلیه اختصاصی جهت عکاسی فرمالیته', responsible: 'تیم فیلمبرداری' },
  { id: 's5', time: '۱۹:۰۰', title: 'ورود باشکوه به سالن و استقبال از مهمانان', responsible: 'تشریفات & ساقدوش‌ها' },
  { id: 's6', time: '۲۱:۰۰', title: 'مراسم رقص تن tango و برش کیک عروسی', responsible: 'دی‌جی & تشریفات' }
];

window.renderMasterDaySchedule = function() {
  const feed = document.getElementById('master-schedule-feed');
  if (!feed) return;
  feed.innerHTML = '';

  let items = [];
  try {
    items = JSON.parse(localStorage.getItem('aroosi_day_schedule_db') || 'null');
  } catch (e) { items = null; }

  if (!items || items.length === 0) {
    items = masterScheduleItems;
    try { localStorage.setItem('aroosi_day_schedule_db', JSON.stringify(items)); } catch(e) {}
  } else {
    masterScheduleItems = items;
  }

  items.forEach((item, idx) => {
    const card = document.createElement('div');
      card.className = "relative bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-2xl p-4 text-white text-right flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-lg transition-all";
    card.innerHTML = `
      <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059] shrink-0 -mr-6 border-2 border-[#07090E]"></div>
          <span class="text-xs sm:text-sm font-black text-[#C5A059] bg-[#07090E] border border-[#C5A059]/40 px-3 py-1 rounded-xl dir-ltr font-mono shadow-sm">${item.time}</span>
        <div>
            <h4 class="text-xs sm:text-sm font-black text-[#F7F5F0]">${item.title}</h4>
            ${item.responsible ? `<span class="text-[11px] text-slate-300">👤 مسئول: <strong class="text-[#C5A059]">${item.responsible}</strong></span>` : ''}
        </div>
      </div>

      <button type="button" onclick="deleteScheduleTask('${item.id || idx}')" class="text-rose-400 hover:text-rose-300 text-xs font-bold bg-rose-950/60 border border-rose-800/50 px-2.5 py-1 rounded-lg self-end sm:self-center transition-colors cursor-pointer">
        حذف
      </button>
    `;
    feed.appendChild(card);
  });
};

window.addScheduleTask = function(event) {
  event.preventDefault();
  const time = document.getElementById('sched-time')?.value.trim();
  const title = document.getElementById('sched-title')?.value.trim();
  const responsible = document.getElementById('sched-responsible')?.value.trim();

  if (!time || !title) {
    showToast('لطفاً زمان و عنوان برنامه را وارد نمایید.', 'warning');
    return;
  }

  const newItem = {
    id: 's_' + Date.now(),
    time,
    title,
    responsible: responsible || 'همراهان'
  };

  masterScheduleItems.push(newItem);
  try {
    localStorage.setItem('aroosi_day_schedule_db', JSON.stringify(masterScheduleItems));
  } catch(e) {}

  document.getElementById('sched-time').value = '';
  document.getElementById('sched-title').value = '';
  document.getElementById('sched-responsible').value = '';

  showToast('آیتم جدید به زمان‌بندی روز عروسی افزوده شد.', 'success');
  renderMasterDaySchedule();
};

window.deleteScheduleTask = function(taskId) {
  masterScheduleItems = masterScheduleItems.filter((i, idx) => (i.id !== taskId && idx.toString() !== taskId.toString()));
  try {
    localStorage.setItem('aroosi_day_schedule_db', JSON.stringify(masterScheduleItems));
  } catch(e) {}
  showToast('آیتم زمانی حذف شد.', 'info');
  renderMasterDaySchedule();
};

window.exportSchedulePrint = function() {
  window.print();
};

// ==========================================================================
// PHASE 3: BRIDAL PARTY & TASK DELEGATOR LOGIC
// ==========================================================================
let bridalPartyMembers = [
  {
    id: 'p1',
    name: 'سارا رضایی',
    role: 'ساقدوش اصلی عروس (Maid of Honor)',
    tasks: [
      { text: 'هماهنگی زمان تحویل دسته گل عروس', completed: true },
      { text: 'همراهی در سالن زیبایی و نگهداری وسایل شخص', completed: false }
    ]
  },
  {
    id: 'p2',
    name: 'علی حسینی',
    role: 'ساقدوش اصلی داماد (Best Man)',
    tasks: [
      { text: 'تحویل ماشین عروس تزئین شده از گل‌فروشی', completed: true },
      { text: 'همراهی داماد در اتلیه و نگهداری حلقه معامله', completed: false }
    ]
  }
];

window.renderBridalParty = function() {
  const feed = document.getElementById('bridal-party-feed');
  if (!feed) return;
  feed.innerHTML = '';

  let members = [];
  try {
    members = JSON.parse(localStorage.getItem('aroosi_bridal_party_db') || 'null');
  } catch (e) { members = null; }

  if (!members || members.length === 0) {
    members = bridalPartyMembers;
    try { localStorage.setItem('aroosi_bridal_party_db', JSON.stringify(members)); } catch(e) {}
  } else {
    bridalPartyMembers = members;
  }

  members.forEach((m, mIdx) => {
    const card = document.createElement('div');
    card.className = "bg-[#141A28] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-2xl p-4 text-[#F7F5F0] text-right space-y-3 shadow-lg transition-all";

    const completedCount = (m.tasks || []).filter(t => t.completed).length;
    const totalCount = (m.tasks || []).length;
    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    card.innerHTML = `
      <div class="flex justify-between items-center border-b border-[#C5A059]/20 pb-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#07090E] border-2 border-[#C5A059] flex items-center justify-center font-black text-sm text-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.3)]">
            ${m.name ? m.name.charAt(0) : '👑'}
          </div>
          <div>
            <h4 class="text-sm font-black text-[#C5A059]">${m.name}</h4>
            <span class="text-[11px] font-bold text-slate-300">${m.role}</span>
          </div>
        </div>
        <span class="text-xs font-black text-[#C5A059] bg-[#07090E] border border-[#C5A059]/40 px-2.5 py-1 rounded-full shadow-sm">${percent}% پیشرفت</span>
      </div>

      <!-- Tasks List -->
      <div class="space-y-1.5">
        <span class="text-[11px] font-black text-slate-300 block">لیست وظایف محوله:</span>
        ${(m.tasks && m.tasks.length) ? m.tasks.map((t, tIdx) => `
          <div class="flex items-center justify-between bg-[#07090E] p-2.5 rounded-xl border border-[#C5A059]/20 text-xs">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="togglePartyTaskComplete(${mIdx}, ${tIdx})" class="planner-checkbox">
              <span class="${t.completed ? 'line-through text-slate-500' : 'text-[#F7F5F0] font-medium'}">${t.text}</span>
            </label>
          </div>
        `).join('') : '<span class="text-xs text-slate-400">هیچ وظیفه‌ای تعریف نشده است.</span>'}
      </div>

      <!-- Assign New Task Input -->
      <div class="flex gap-2 pt-2 border-t border-[#C5A059]/20">
        <input type="text" id="party-task-input-${mIdx}" placeholder="افزودن وظیفه جدید..." class="flex-1 bg-[#07090E] border border-[#C5A059]/30 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#C5A059]">
        <button type="button" onclick="assignPartyTask(${mIdx})" class="bg-[#C5A059] text-[#07090E] text-xs font-black px-3 py-1.5 rounded-xl hover:bg-[#D4AF37] transition-all cursor-pointer">
          ثبت
        </button>
      </div>
    `;
    feed.appendChild(card);
  });
};

window.addPartyMember = function(event) {
  event.preventDefault();
  const name = document.getElementById('party-member-name')?.value.trim();
  const role = document.getElementById('party-member-role')?.value;

  if (!name) {
    showToast('لطفاً نام همراه را وارد کنید.', 'warning');
    return;
  }

  bridalPartyMembers.push({
    id: 'p_' + Date.now(),
    name,
    role,
    tasks: []
  });

  try { localStorage.setItem('aroosi_bridal_party_db', JSON.stringify(bridalPartyMembers)); } catch(e) {}
  document.getElementById('party-member-name').value = '';
  showToast('همراه جدید افزوده شد.', 'success');
  renderBridalParty();
};

window.assignPartyTask = function(memberIdx) {
  const input = document.getElementById(`party-task-input-${memberIdx}`);
  const text = input?.value.trim();
  if (!text || !bridalPartyMembers[memberIdx]) return;

  if (!bridalPartyMembers[memberIdx].tasks) bridalPartyMembers[memberIdx].tasks = [];
  bridalPartyMembers[memberIdx].tasks.push({ text, completed: false });

  try { localStorage.setItem('aroosi_bridal_party_db', JSON.stringify(bridalPartyMembers)); } catch(e) {}
  showToast('وظیفه جدید محول گردید.', 'success');
  renderBridalParty();
};

window.togglePartyTaskComplete = function(memberIdx, taskIdx) {
  if (bridalPartyMembers[memberIdx] && bridalPartyMembers[memberIdx].tasks[taskIdx]) {
    bridalPartyMembers[memberIdx].tasks[taskIdx].completed = !bridalPartyMembers[memberIdx].tasks[taskIdx].completed;
    try { localStorage.setItem('aroosi_bridal_party_db', JSON.stringify(bridalPartyMembers)); } catch(e) {}
    renderBridalParty();
  }
};

// ==========================================================================
// PHASE 3: BRIDAL COMMUNITY & FORUM LOGIC
// ==========================================================================
let bridalForumThreads = [
  {
    id: 'f1',
    author: 'مریم ک.',
    title: 'تجربه رزرو باغ‌تالار در فصل پاییز یزد',
    content: 'دوستان عزیز کسانی که در بافت تاریخی یا صفائیه عروسی پاییزه داشتید، سرمای شب باغ اذیت‌کننده بود یا سیستم گرمایشی قارچی جوابگوئه؟',
    timestamp: '۲ ساعت پیش',
    likes: 12,
    comments: [
      { author: 'زهرا م.', text: 'ما آبان ماه باغ مشیر بودیم هیترهای قارچی عالی عمل کردن اصلاً احساس سرما نکردیم.' }
    ]
  },
  {
    id: 'f2',
    author: 'نیلوفر',
    title: 'پیشنهاد آتلیه فرمالیته برای عکاسی در کویر شباهنگ',
    content: 'دنبال یک آتلیه با سابقه تصویربرداری هلی‌شات هوایی در کویر یزد هستم، ممنون میشم تجربه‌هاتون رو بگید.',
    timestamp: 'دیروز',
    likes: 8,
    comments: []
  }
];



let activeForumFilter = 'all';

window.filterForumTopics = function(topicCategory) {
    activeForumFilter = topicCategory;
    document.querySelectorAll('.forum-topic-btn').forEach(btn => {
        btn.classList.remove('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
        btn.classList.add('bg-[#0E121C]', 'text-slate-300');
    });
    event.currentTarget.classList.remove('bg-[#0E121C]', 'text-slate-300');
    event.currentTarget.classList.add('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
    window.renderBridalForum();
};

window.searchForumThreads = function(query) {
    window.renderBridalForum(query);
};

window.renderBridalForum = function(searchQuery = '') {
    const container = document.getElementById('forum-threads-container');
    if (!container) return;

    let threads = JSON.parse(localStorage.getItem('aroosi_forum_threads_db') || 'null');
    if (!threads) {
        threads = [
            {
                id: 1,
                author: "مینا و علیرضا",
                date: "۲ ساعت پیش",
                category: "yazd_exp",
                categoryTitle: "تجربیات تالار & مراسم یزد",
                title: "تجربه برگزاری عروسی در تالار باغ مشیرالممالک یزد - کیفیت غذا و پذیرایی",
                content: "سلام دوستان عزیزم، ما هفته گذشته مراسممون در مشیرالممالک بود. می‌خواستم تجربیاتم رو درباره مدیریت سالن، کیفیت چلوکباب وزیری و نحوه برخورد پرسنل بگم تا کسانی که در شرف رزرو هستند بهتر تصمیم بگیرن...",
                likes: 24,
                views: 380,
                replies: [
                  { author: "سارا م.", date: "۱ ساعت پیش", text: "مبارک باشه عزیز دلم! ورودی باغ چقدر حساب کردن باهاتون؟" },
                  { author: "علیرضا", date: "۴۵ دقیقه پیش", text: "ممنون، ورودی برای ۲۰۰ نفر کاملاً منصفانه بود و گل‌آرایی سالن هم عالی شد." }
                ]
            },
            {
                id: 2,
                author: "امیرحسین (داماد)",
                date: "دیروز",
                category: "vendors",
                categoryTitle: "معرفی & بررسی تامین‌کنندگان",
                title: "پیشنهاد بهترین آتلیه عکس و فیلم برای فرمالیته کویر یزد (سندباد / بافق)",
                content: "سلام به همگی، دنبال یک تیم تصویربرداری با هلی‌شات حرفه‌ای برای عکاسی فرمالیته در رمل‌های کویر یزد هستیم. بین دو تا آتلیه برتر یزد شک داریم. کسی تجربه همکاری با تیمی که نورپردازی غروب کویرش عالی باشه داره؟",
                likes: 18,
                views: 290,
                replies: [
                  { author: "رضا (فیلمبردار)", date: "دیروز", text: "حتماً تایم طلایی غروب کویر (Golden Hour) رو پیشنهاد می‌کنم، نورش فوق‌العاده میشه." }
                ]
            },
            {
                id: 3,
                author: "فاطمه و حسین",
                date: "۲ روز پیش",
                category: "jahaz",
                categoryTitle: "جهیزیه & خریدهای عروسی",
                title: "مراکز اصلی خرید شیرینی سنتی یزد (قطاب و لوز) برای گیفت عروسی با بهترین قیمت",
                content: "دوستان برای سفارش ۵۰۰ بسته گیفت شیرینی اصیل یزدی (ترکیب قطاب، نان منقا و لوز) کدوم کارگاه یا شیرینی‌پزی یزد رو پیشنهاد می‌کنید که هم تازه باشه و هم تخفیف عمده بده؟",
                likes: 31,
                views: 520,
                replies: [
                  { author: "مریم ز.", date: "۲ روز پیش", text: "کارگاه‌های اصیل بازار کهن یزد برای خرید عمده بسیار منصفانه‌تر حساب می‌کنند." }
                ]
            },
            {
                id: 4,
                author: "نرگس",
                date: "۳ روز پیش",
                category: "beauty",
                categoryTitle: "لباس، میکاپ & زیبایی",
                title: "بهترین مزون‌های دوخت سفارشی لباس عروس در صفاییه یزد",
                content: "سلام دخترای یزدی، دنبال مزونی در صفاییه یا خیابان کاشانی هستم که پارچه دانتل وارداتی داشته باشه و تور سر رو هم دقیقاً طبق مدلی که می‌خوام بدوزه. ممنون میشم تجربه‌هاتون رو بگید.",
                likes: 42,
                views: 610,
                replies: []
            }
        ];
        localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(threads));
    }

    let filtered = threads;
    if (activeForumFilter !== 'all') {
        filtered = filtered.filter(t => t.category === activeForumFilter);
    }
    if (searchQuery.trim() !== '') {
        const q = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(t => t.title.toLowerCase().includes(q) || t.content.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
        container.innerHTML = `
          <div class="bg-[#141A28] border border-slate-800 rounded-3xl p-10 text-center space-y-3">
            <i data-lucide="message-square-off" class="w-10 h-10 text-slate-500 mx-auto"></i>
            <h3 class="text-sm font-black text-slate-300">هیچ تاپیک گفت‌وگویی در این موضوع یا با این عبارت یافت نشد.</h3>
            <p class="text-xs text-slate-400">می‌توانید اولین تاپیک را در این موضوع ایجاد کنید!</p>
          </div>`;
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        return;
    }

    container.innerHTML = filtered.map(t => `
      <div class="bg-[#141A28] border border-[#C5A059]/30 hover:border-[#D4AF37] rounded-3xl p-6 transition-all shadow-xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-black text-xs">
              ${t.author ? t.author.charAt(0) : 'ز'}
            </div>
            <div>
              <span class="text-xs font-black text-white block">${t.author}</span>
              <span class="text-[10px] text-slate-400 font-bold block">${t.date}</span>
            </div>
          </div>

          <span class="bg-[#0E121C] text-[#D4AF37] border border-[#C5A059]/30 px-3 py-1 rounded-xl text-[10.5px] font-black">
            ${t.categoryTitle || 'گفت‌وگوی عمومی'}
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-base font-black text-white hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="toggleThreadReplies(${t.id})">
            ${t.title}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed font-medium">
            ${t.content}
          </p>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-bold text-slate-400 flex-wrap gap-3">
          <div class="flex items-center gap-4">
            <button type="button" onclick="likeForumThread(${t.id})" class="flex items-center gap-1.5 hover:text-rose-400 transition-colors cursor-pointer">
              <i data-lucide="heart" class="w-4 h-4 text-rose-400"></i>
              <span>${t.likes} پسند</span>
            </button>
            <span class="flex items-center gap-1.5">
              <i data-lucide="eye" class="w-4 h-4 text-slate-400"></i>
              <span>${t.views} بازدید</span>
            </span>
            <button type="button" onclick="toggleThreadReplies(${t.id})" class="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors cursor-pointer">
              <i data-lucide="message-circle" class="w-4 h-4 text-[#D4AF37]"></i>
              <span>${t.replies ? t.replies.length : 0} پاسخ</span>
            </button>
          </div>

          <button type="button" onclick="toggleThreadReplies(${t.id})" class="text-xs font-black text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer">
            <span>مشاهده پاسخ‌ها & ارسال نظر ➔</span>
          </button>
        </div>

        <!-- REPLIES CONTAINER -->
        <div id="thread-replies-${t.id}" class="hidden space-y-3 pt-3 border-t border-slate-800 bg-[#0E121C] rounded-2xl p-4">
          <span class="text-xs font-black text-[#D4AF37] block">پاسخ‌های زوج‌ها و پرسنل تشریفات:</span>
          <div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            ${t.replies && t.replies.length > 0 ? t.replies.map(r => `
              <div class="bg-[#141A28] p-3 rounded-xl border border-slate-800 space-y-1">
                <div class="flex items-center justify-between text-[10.5px] font-bold">
                  <span class="text-amber-200">${r.author}</span>
                  <span class="text-slate-400">${r.date}</span>
                </div>
                <p class="text-xs text-slate-200">${r.text}</p>
              </div>
            `).join('') : '<p class="text-xs text-slate-400">هنوز پاسخی ثبت نشده است. اولین پاسخ را شما بنویسید!</p>'}
          </div>

          <!-- Add Reply Form -->
          <div class="flex items-center gap-2 pt-2">
            <input type="text" id="reply-input-${t.id}" placeholder="پاسخ خود را بنویسید..." class="flex-1 bg-[#141A28] border border-[#C5A059]/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]">
            <button type="button" onclick="addReplyToForumThread(${t.id})" class="gold-shimmer-btn text-[#0F251A] font-black px-4 py-2 rounded-xl text-xs cursor-pointer">ارسال پاسخ</button>
          </div>
        </div>
      </div>
    `).join('');

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

window.likeForumThread = function(tId) {
    let threads = JSON.parse(localStorage.getItem('aroosi_forum_threads_db') || '[]');
    const target = threads.find(t => t.id === tId);
    if (target) {
        target.likes = (target.likes || 0) + 1;
        localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(threads));
        window.renderBridalForum();
        showToast("پسندیدن این تاپیک ثبت شد.", "success");
    }
};

window.toggleThreadReplies = function(tId) {
    const el = document.getElementById(`thread-replies-${tId}`);
    if (el) el.classList.toggle('hidden');
};

window.addReplyToForumThread = function(tId) {
    const input = document.getElementById(`reply-input-${tId}`);
    if (!input || !input.value.trim()) {
        showToast("لطفاً متن پاسخ را وارد نمایید.", "warning");
        return;
    }
    let threads = JSON.parse(localStorage.getItem('aroosi_forum_threads_db') || '[]');
    const target = threads.find(t => t.id === tId);
    if (target) {
        if (!target.replies) target.replies = [];
        target.replies.push({
            author: "کاربر جدید",
            date: "همین الان",
            text: input.value.trim()
        });
        localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(threads));
        input.value = '';
        window.renderBridalForum();
        showToast("پاسخ شما با موفقیت ثبت و منتشر گردید.", "success");
    }
};

window.openNewForumThreadModal = function() {
    const title = prompt("عنوان تاپیک گفت‌وگوی جدید را وارد کنید:");
    if (!title) return;
    const content = prompt("متن کامل تاپیک گفت‌وگو:");
    if (!content) return;

    let threads = JSON.parse(localStorage.getItem('aroosi_forum_threads_db') || '[]');
    threads.unshift({
        id: Date.now(),
        author: "عروس / داماد یزدی",
        date: "همین الان",
        category: activeForumFilter === 'all' ? 'yazd_exp' : activeForumFilter,
        categoryTitle: "گفت‌وگوی جدید",
        title: title,
        content: content,
        likes: 1,
        views: 12,
        replies: []
    });

    localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(threads));
    window.renderBridalForum();
    showToast("تاپیک گفت‌وگوی جدید شما با موفقیت ایجاد شد.", "success");
};


window.closeExpandModal = function() {
    const overlay = document.getElementById('planner-expand-overlay');
    if (overlay) overlay.classList.add('hidden');
};


// CONVERSATIONAL BUDGET WIZARD RENDERER


window.renderBwWizard = function() {
    const container = document.getElementById('bw-assistant-container');
    if (!container) return;

    if (typeof cbwMode === 'undefined') window.cbwMode = 'fast';
    if (typeof cbwCurrentStep === 'undefined') window.cbwCurrentStep = 1;

    const maxSteps = cbwMode === 'fast' ? 14 : 26;
    const isFinalStep = cbwCurrentStep === maxSteps;

    const fastStepsList = [
      { step: 1, title: "۱. تعداد مهمانان", key: "guests", prompt: "تعداد تقریبی مهمانان مراسم چقدر است؟" },
      { step: 2, title: "۲. شهر برگزاری", key: "city", prompt: "شهر محل برگزاری مراسم را تعیین کنید:" },
      { step: 3, title: "۳. زمان و مناسبت برگزاری", key: "season", prompt: "تاریخ برگزاری در چه بازه‌ای است؟" },
      { step: 4, title: "۴. کیفیت کلی مراسم", key: "tier", prompt: "سطح کیفیت کلی تشریفات را مشخص فرمایید:" },
      { step: 5, title: "۵. اجاره تالار و فضای برگزاری", key: "venueType", prompt: "نوع فضای برگزاری مراسم:" },
      { step: 6, title: "۶. منوی شام اصلی", key: "cateringPerGuest", prompt: "نوع منوی شام پذیرایی:" },
      { step: 7, title: "۷. میوه و شیرینی", key: "fruitPerGuest", prompt: "پذیرایی میوه و شیرینی اصیل یزدی:" },
      { step: 8, title: "۸. لباس عروس", key: "dress", prompt: "برنامه تهیه لباس عروس:" },
      { step: 9, title: "۹. کت‌وشلوار داماد", key: "suit", prompt: "برنامه پوشاک و کت‌وشلوار داماد:" },
      { step: 10, title: "۱۰. سرویس طلا و حلقه‌ها", key: "goldSet", prompt: "جنس و وزن سرویس طلا و حلقه‌ها:" },
      { step: 11, title: "۱۱. عکاسی و فیلم‌برداری", key: "photoFilm", prompt: "پکیج آتلیه و فیلمبرداری سینمایی:" },
      { step: 12, title: "۱۲. موسیقی و نورپردازی", key: "music", prompt: "موسیقی و اجرای هنری مراسم:" },
      { step: 13, title: "۱۳. گیفت و تشریفات جانبی", key: "guestGift", prompt: "گیفت یادبود و کارت دعوت:" },
      { step: 14, title: "۱۴. برآورد نهایی و کارنامه بودجه", key: "result", prompt: "جمع‌بندی و خروجی هوشمند بودجه" }
    ];

    const detailedStepsList = [
      { step: 1, title: "۱. تعداد مهمانان", key: "guests", prompt: "تعداد دقیق یا تقریبی مهمانان:" },
      { step: 2, title: "۲. شهر برگزاری (یزد و همجوار)", key: "city", prompt: "شهر محل برگزاری:" },
      { step: 3, title: "۳. زمان و مناسبت برگزاری", key: "season", prompt: "مناسبت و روز برگزاری:" },
      { step: 4, title: "۴. کیفیت کلی مراسم", key: "tier", prompt: "سطح بودجه و کیفیت کلی:" },
      { step: 5, title: "۵. اجاره تالار و فضای برگزاری", key: "venueType", prompt: "فضای تالار یا باغ‌سرا:" },
      { step: 6, title: "۶. شام اصلی (هر نفر)", key: "cateringPerGuest", prompt: "منوی شام پذیرایی:" },
      { step: 7, title: "۷. میوه پذیرایی (هر نفر)", key: "fruitPerGuest", prompt: "پکیج میوه فصل:" },
      { step: 8, title: "۸. شیرینی اصیل یزدی و مدرن", key: "sweetPerGuest", prompt: "پکیج شیرینی سنتی یزد یا مدرن:" },
      { step: 9, title: "۹. فینگرفود و ولکام بار", key: "fingerFoodPerGuest", prompt: "بار نوشیدنی و فینگرفود خوشامدگویی:" },
      { step: 10, title: "۱۰. نوشیدنی و بار گرم/سرد", key: "drinkPerGuest", prompt: "سرو نوشیدنی‌های گرم و سرد:" },
      { step: 11, title: "۱۱. گیفت و یادبود مهمانان", key: "guestGift", prompt: "یادبود و گیفت تشکر از مهمانان:" },
      { step: 12, title: "۱۲. کیک عروسی", key: "cakePrice", prompt: "وزن و مدل کیک طبقاتی:" },
      { step: 13, title: "۱۳. لباس عروس", key: "dress", prompt: "نحوه تهیه لباس عروس:" },
      { step: 14, title: "۱۴. کت‌وشلوار داماد", key: "suit", prompt: "نحوه تهیه کت‌وشلوار داماد:" },
      { step: 15, title: "۱۵. سرویس طلا / جواهر", key: "goldSet", prompt: "جنس و وزن سرویس طلا:" },
      { step: 16, title: "۱۶. حلقه عروس", key: "ringBride", prompt: "جنس و وزن حلقه عروس:" },
      { step: 17, title: "۱۷. حلقه داماد", key: "ringGroom", prompt: "جنس و وزن حلقه داماد:" },
      { step: 18, title: "۱۸. عکاسی و فیلم‌برداری", key: "photoFilm", prompt: "پکیج فیلم‌برداری سینمایی:" },
      { step: 19, title: "۱۹. آتلیه و فرمالیته", key: "prefilmAtelier", prompt: "فرمالیته کویر یا عمارت:" },
      { step: 20, title: "۲۰. تزئین ماشین عروس", key: "carDecor", prompt: "مدل و کیفیت گل‌آرایی ماشین:" },
      { step: 21, title: "۲۱. موسیقی و گروه زنده", key: "music", prompt: "دی‌جی یا بند موسیقی زنده:" },
      { step: 22, title: "۲۲. نورپردازی و افکت", key: "lightEffects", prompt: "استیج LED و نورپردازی:" },
      { step: 23, title: "۲۳. اجاره ماشین عروس", key: "carRental", prompt: "خودرو تشریفاتی:" },
      { step: 24, title: "۲۴. دعوت‌نامه دیجیتال و چاپی", key: "digitalInvitation", prompt: "طراحی کارت دعوت آنلاین و چاپی:" },
      { step: 25, title: "۲۵. سفر ماه عسل", key: "honeymoon", prompt: "برنامه سفر ماه عسل:" },
      { step: 26, title: "۲۶. برآورد نهایی و کارنامه بودجه", key: "result", prompt: "نتیجه محاسبات هوشمند" }
    ];

    const currentStepsList = cbwMode === 'fast' ? fastStepsList : detailedStepsList;
    const currentStepObj = currentStepsList[cbwCurrentStep - 1] || currentStepsList[0];

    let stepHtml = '';

    const qualitySelectorHtml = `
      <div class="bg-[#0E121C] border border-[#C5A059]/30 rounded-2xl p-4 space-y-2.5 mb-4 shrink-0 shadow-md">
        <div class="flex items-center justify-between text-xs font-black text-[#D4AF37]">
          <span class="flex items-center gap-1.5"><i data-lucide="sliders" class="w-3.5 h-3.5 text-[#D4AF37]"></i> سطح کیفیت این بخش:</span>
          <span class="text-slate-300 font-bold">${cbwState.tierName || 'متوسط'}</span>
        </div>
        <div class="grid grid-cols-3 gap-2.5 text-center">
          <button type="button" onclick="setBwStateVal('tier', 'eco', 'کیفیت اقتصادی')" class="py-2.5 px-3 rounded-xl border text-xs font-black transition-all ${cbwState.tier === 'eco' ? 'bg-[#D4AF37] text-[#07090E] border-[#D4AF37] shadow-lg scale-[1.02]' : 'bg-[#141A28] text-slate-300 border-slate-700/80 hover:border-[#D4AF37] hover:text-white'}">اقتصادی</button>
          <button type="button" onclick="setBwStateVal('tier', 'mid', 'کیفیت متوسط')" class="py-2.5 px-3 rounded-xl border text-xs font-black transition-all ${cbwState.tier === 'mid' ? 'bg-[#D4AF37] text-[#07090E] border-[#D4AF37] shadow-lg scale-[1.02]' : 'bg-[#141A28] text-slate-300 border-slate-700/80 hover:border-[#D4AF37] hover:text-white'}">متوسط</button>
          <button type="button" onclick="setBwStateVal('tier', 'lux', 'کیفیت لوکس VIP')" class="py-2.5 px-3 rounded-xl border text-xs font-black transition-all ${cbwState.tier === 'lux' ? 'bg-[#D4AF37] text-[#07090E] border-[#D4AF37] shadow-lg scale-[1.02]' : 'bg-[#141A28] text-slate-300 border-slate-700/80 hover:border-[#D4AF37] hover:text-white'}">لوکس VIP</button>
        </div>
      </div>`;

    if (isFinalStep) {
      let totalGold = cbwState.goldSet + cbwState.ringBride + cbwState.ringGroom;
      let foodPerPerson = cbwState.cateringPerGuest + cbwState.fruitPerGuest + cbwState.sweetPerGuest + cbwState.fingerFoodPerGuest + cbwState.drinkPerGuest;
      let totalFood = foodPerPerson * cbwState.guests;
      let totalVenue = 40000000 + (cbwState.tier === 'lux' ? 50000000 : (cbwState.tier === 'mid' ? 20000000 : 0));
      let totalPhoto = cbwState.photoFilm + cbwState.prefilmAtelier;
      let totalFlower = cbwState.carDecor + cbwState.lightEffects;
      let totalAttire = cbwState.dress + cbwState.suit;
      let grandTotal = totalGold + totalFood + totalVenue + totalPhoto + totalFlower + totalAttire + cbwState.guestGift + cbwState.cakePrice + cbwState.carRental + cbwState.digitalInvitation + cbwState.honeymoon;

      let minTotal = Math.round(grandTotal * 0.88);
      let maxTotal = Math.round(grandTotal * 1.15);

      stepHtml = `
        <div class="space-y-6 text-right">
          <div class="bg-gradient-to-r from-[#141A28] via-[#1E293B] to-[#141A28] border border-[#C5A059] rounded-3xl p-6 shadow-2xl text-center space-y-2">
            <span class="text-xs font-bold text-amber-300 block">برآورد نهایی و کارنامه هوشمند بودجه عروسی</span>
            <h3 class="text-2xl sm:text-3xl font-black text-[#D4AF37]">
              ${(minTotal / 1000000).toFixed(0)} میلیون تا ${(maxTotal / 1000000).toFixed(0)} میلیون تومان
            </h3>
            <p class="text-xs text-slate-300 font-medium">برآورد دقیق اتوماتیک بر اساس ${cbwState.guests.toLocaleString('fa-IR')} نفر مهمان در ${cbwState.city === 'yazd' ? 'استان یزد' : 'شهر انتخابی'}</p>
          </div>

          <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-3xl p-6 space-y-4 shadow-xl">
            <span class="text-xs font-black text-[#D4AF37] block">تفکیک نموداری و سهم هزینه‌ها:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div class="relative w-36 h-36 mx-auto flex items-center justify-center">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" stroke="#D4AF37" stroke-width="10" fill="transparent" stroke-dasharray="238.76" stroke-dashoffset="60" />
                  <circle cx="50" cy="50" r="38" stroke="#10B981" stroke-width="10" fill="transparent" stroke-dasharray="238.76" stroke-dashoffset="130" />
                  <circle cx="50" cy="50" r="38" stroke="#3B82F6" stroke-width="10" fill="transparent" stroke-dasharray="238.76" stroke-dashoffset="180" />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span class="text-[10px] text-slate-400 font-bold block">مجموع برآورد</span>
                  <span class="text-sm font-black text-[#D4AF37]">${(grandTotal / 1000000).toFixed(0)}M</span>
                </div>
              </div>
              <div class="space-y-1.5 text-xs font-bold">
                <div class="flex justify-between items-center bg-[#0E121C] p-2 rounded-xl border border-slate-800"><span class="text-amber-200">طلا و جواهر:</span><span class="text-white">${(totalGold / 1000000).toFixed(0)}M</span></div>
                <div class="flex justify-between items-center bg-[#0E121C] p-2 rounded-xl border border-slate-800"><span class="text-emerald-400">پذیرایی و شیرینی یزدی:</span><span class="text-white">${(totalFood / 1000000).toFixed(0)}M</span></div>
                <div class="flex justify-between items-center bg-[#0E121C] p-2 rounded-xl border border-slate-800"><span class="text-blue-400">تالار و ورودی:</span><span class="text-white">${(totalVenue / 1000000).toFixed(0)}M</span></div>
                <div class="flex justify-between items-center bg-[#0E121C] p-2 rounded-xl border border-slate-800"><span class="text-purple-400">عکس و آتلیه:</span><span class="text-white">${(totalPhoto / 1000000).toFixed(0)}M</span></div>
                <div class="flex justify-between items-center bg-[#0E121C] p-2 rounded-xl border border-slate-800"><span class="text-rose-400">لباس و پوشاک:</span><span class="text-white">${(totalAttire / 1000000).toFixed(0)}M</span></div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button type="button" onclick="cbwCurrentStep=1; renderBwWizard();" class="bg-[#141A28] hover:bg-[#1E293B] text-slate-200 border border-slate-700 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer">
              ویرایش پاسخ‌ها
            </button>
            <button type="button" onclick="restartBwWizard()" class="bg-[#141A28] hover:bg-[#1E293B] text-slate-200 border border-slate-700 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer">
              محاسبه مجدد
            </button>
            <button type="button" onclick="syncBwToDashboard(${grandTotal})" class="gold-shimmer-btn text-[#0F251A] font-black px-6 py-2.5 rounded-2xl text-xs transition-all shadow-lg cursor-pointer">
              ارسال به خلاصه بودجه / Dashboard ➔
            </button>
          </div>
        </div>`;
    } else {
      if (currentStepObj.key === 'guests') {
        stepHtml = `
          <div class="space-y-4 text-right">
            <h4 class="text-sm font-black text-[#D4AF37]">${currentStepObj.prompt}</h4>
            <div class="flex items-center justify-center gap-4 bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-6 shadow-md">
              <button type="button" onclick="changeBwGuests(-10)" class="w-12 h-12 rounded-2xl bg-[#0E121C] border border-[#C5A059]/40 text-[#D4AF37] font-black text-xl hover:bg-[#D4AF37] hover:text-[#07090E] transition-all cursor-pointer">-</button>
              <span id="bw-guest-counter-val" class="text-2xl font-black text-white px-6">${cbwState.guests.toLocaleString('fa-IR')} نفر</span>
              <button type="button" onclick="changeBwGuests(10)" class="w-12 h-12 rounded-2xl bg-[#0E121C] border border-[#C5A059]/40 text-[#D4AF37] font-black text-xl hover:bg-[#D4AF37] hover:text-[#07090E] transition-all cursor-pointer">+</button>
            </div>
          </div>`;
      } else {
        stepHtml = `
          <div class="space-y-4 text-right">
            ${qualitySelectorHtml}
            <h4 class="text-sm font-black text-[#D4AF37]">${currentStepObj.prompt}</h4>
            <div class="grid grid-cols-2 gap-3">
              <button type="button" onclick="setBwStateVal('${currentStepObj.key}Status', 'active', 'تأیید پکیج استاندارد')" class="p-4 rounded-2xl border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-black transition-all">پکیج استاندارد سیستم</button>
              <button type="button" onclick="cbwState['${currentStepObj.key}']=0; setBwStateVal('${currentStepObj.key}Status', 'none', 'عدم نیاز');" class="p-4 rounded-2xl border border-slate-700 bg-[#141A28] text-white text-xs font-black transition-all">نمی‌خوام</button>
            </div>
          </div>`;
      }
    }

    container.innerHTML = `
      <div class="space-y-6 text-right">
        <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-3xl p-5 shadow-xl space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0 font-black">
              <i data-lucide="bot" class="w-5 h-5 text-[#D4AF37]"></i>
            </div>
            <div class="space-y-1">
              <h3 class="text-sm font-black text-white">دستیار گفت‌وگومحور برآورد اتوماتیک بودجه عروسی یزد</h3>
              <p class="text-xs text-slate-300 font-medium">تمامی هزینه‌ها بر اساس انتخابی‌های شما و سطح کیفیت به صورت هوشمند توسط سیستم برآورد می‌شوند.</p>
            </div>
          </div>

          ${typeof cbwLastFeedback !== 'undefined' && cbwLastFeedback ? `
            <div class="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-3 text-xs font-bold text-emerald-300 flex items-center gap-2 animate-fade-in">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${cbwLastFeedback}</span>
            </div>
          ` : ''}

          <div class="flex items-center gap-2 pt-2 border-t border-slate-800">
            <button type="button" onclick="setBwMode('fast')" class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${cbwMode === 'fast' ? 'bg-[#D4AF37] text-[#07090E] shadow-md' : 'bg-[#0E121C] text-slate-300 border border-slate-700 hover:text-white'}">
              روش سریع‌تر (۱۴ گام)
            </button>
            <button type="button" onclick="setBwMode('detailed')" class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${cbwMode === 'detailed' ? 'bg-[#D4AF37] text-[#07090E] shadow-md' : 'bg-[#0E121C] text-slate-300 border border-slate-700 hover:text-white'}">
              روش کامل‌تر (۲۶ گام)
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-8 bg-[#141A28] border border-[#C5A059]/30 rounded-3xl p-6 shadow-xl flex flex-col justify-between min-h-[460px] h-[460px]">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3 shrink-0">
              <span class="text-xs font-black text-[#D4AF37]">گام ${cbwCurrentStep} از ${maxSteps}: ${currentStepObj ? currentStepObj.title : ''}</span>
              <div class="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div class="bg-[#D4AF37] h-full transition-all duration-300" style="width: ${(cbwCurrentStep / maxSteps) * 100}%;"></div>
              </div>
            </div>

            <div class="flex-1 overflow-y-auto custom-scrollbar my-4 pr-1">
              ${stepHtml}
            </div>

            ${!isFinalStep ? `
              <div class="flex items-center justify-between pt-4 border-t border-slate-800 shrink-0">
                <button type="button" onclick="prevBwStep()" ${cbwCurrentStep === 1 ? 'disabled class="opacity-40 cursor-not-allowed text-slate-500 text-xs font-bold px-4 py-2"' : 'class="bg-[#0E121C] hover:bg-slate-800 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"'}>
                  ← گام قبلی
                </button>
                <button type="button" onclick="nextBwStep()" class="gold-shimmer-btn text-[#0F251A] font-black px-6 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer">
                  گام بعدی ➔
                </button>
              </div>
            ` : ''}
          </div>

          <div class="lg:col-span-4 bg-[#141A28] border border-[#C5A059]/30 rounded-3xl p-5 shadow-xl min-h-[460px] h-[460px] flex flex-col justify-between">
            <span class="text-xs font-black text-[#D4AF37] block border-b border-slate-800 pb-2 shrink-0">فهرست گام‌ها (${cbwCurrentStep - 1}/${maxSteps})</span>
            <div class="space-y-1.5 flex-1 overflow-y-auto custom-scrollbar my-2 text-xs font-bold pr-1">
              ${currentStepsList.map(s => `
                <div onclick="cbwCurrentStep=${s.step}; renderBwWizard();" class="p-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${s.step === cbwCurrentStep ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37]' : (s.step < cbwCurrentStep ? 'bg-[#0E121C] text-emerald-400' : 'bg-[#0E121C] text-slate-400 opacity-60')}">
                  <span>${s.title}</span>
                  <span>${s.step < cbwCurrentStep ? '✓' : (s.step === cbwCurrentStep ? '●' : '')}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>`;
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};


window.openExpandModal = function(type) {
    const overlay = document.getElementById('planner-expand-overlay');
    const titleContainer = document.getElementById('planner-overlay-title');
    const bodyContainer = document.getElementById('planner-overlay-body');
    if (!overlay || !bodyContainer) return;

    overlay.classList.remove('hidden');

    if (type === 'checklist') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="check-square" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>مدیریت کامل چک‌لیست و کارهای عروسی</span>
          </span>
          <h2 class="text-xl font-black text-white">برنامه‌ریزی زمانی & وظایف ۲۴ گانه مراسم</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="flex items-center justify-between bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shadow-md flex-wrap gap-2">
            <span class="text-xs font-black text-[#D4AF37]">فیلتر بر اساس فاز زمانی:</span>
            <div class="flex items-center gap-2 overflow-x-auto">
              <button type="button" onclick="filterOverlayChecklist('all')" class="bg-[#D4AF37] text-[#07090E] px-3 py-1.5 rounded-xl text-xs font-black">همه فازها</button>
              <button type="button" onclick="filterOverlayChecklist('12_months')" class="bg-[#0E121C] text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">۱۲ تا ۹ ماه قبل</button>
              <button type="button" onclick="filterOverlayChecklist('6_months')" class="bg-[#0E121C] text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">۶ تا ۳ ماه قبل</button>
              <button type="button" onclick="filterOverlayChecklist('final_week')" class="bg-[#0E121C] text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">هفته نهایی</button>
            </div>
            <button type="button" onclick="openAddTaskModal()" class="gold-shimmer-btn text-[#0F251A] font-black px-4 py-2 rounded-xl text-xs">+ افزودن وظیفه جدید</button>
          </div>
          <div id="overlay-checklist-items" class="space-y-2">
            <!-- Populated dynamically -->
          </div>
        </div>`;
      setTimeout(() => { if (typeof window.renderOverlayChecklist === 'function') window.renderOverlayChecklist(); }, 50);
    } else if (type === 'guests') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="users" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>مدیریت کامل مهمانان & کارت دعوت</span>
          </span>
          <h2 class="text-xl font-black text-white">فهرست مهمانان، وضعیت پاسخ‌ها و تخصیص میزها</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="flex items-center justify-between bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shadow-md flex-wrap gap-2">
            <span class="text-xs font-black text-[#D4AF37]">مجموع مهمانان: ۲۰۰ نفر (۱۴۰ نفر تاییدشده)</span>
            <button type="button" onclick="exportGuestsExcel()" class="gold-shimmer-btn text-[#0F251A] font-black px-4 py-2 rounded-xl text-xs">خروجی اکسل مهمانان</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-right text-xs">
              <thead class="bg-[#0E121C] text-amber-300 border-b border-[#C5A059]/30 font-bold">
                <tr>
                  <th class="p-3">نام مهمان</th>
                  <th class="p-3">نسبت / گروه</th>
                  <th class="p-3">تعداد همراهان</th>
                  <th class="p-3">وضعیت RSVP</th>
                  <th class="p-3">شماره میز</th>
                </tr>
              </thead>
              <tbody id="overlay-guests-table-body" class="divide-y divide-slate-800 font-medium text-slate-200">
                <!-- Dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>`;
      setTimeout(() => { if (typeof window.renderOverlayGuests === 'function') window.renderOverlayGuests(); }, 50);
    } else if (type === 'budget') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="calculator" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>دستیار گام‌به‌گام و مدیریت بودجه</span>
          </span>
          <h2 class="text-xl font-black text-white">دستیار گفت‌وگومحور برآورد هزینه و مدیریت مالی مراسم</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div id="bw-assistant-container" class="space-y-6 text-right">
          <!-- Dynamically populated from window.renderBwWizard() -->
        </div>`;
      setTimeout(() => { if (typeof window.renderBwWizard === 'function') window.renderBwWizard(); }, 50);
    } else if (type === 'timeline') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="clock" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>زمان‌بندی کامل روز عروسی</span>
          </span>
          <h2 class="text-xl font-black text-white">جدول زمانی ساعتی از آرایشگاه تا پایان شام</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shadow-md space-y-3">
            <span class="text-xs font-black text-[#D4AF37] block">برنامه زمانی روز مراسم:</span>
            <div class="space-y-2 text-xs font-bold text-slate-200">
              <div class="flex items-center justify-between bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>۰۸:۰۰ - تحویل لباس و حضور در آرایشگاه</span><span class="text-amber-300">عروس & داماد</span></div>
              <div class="flex items-center justify-between bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>۱۳:۰۰ - عکاسی و ضبط کلیپ در عمارت</span><span class="text-amber-300">تیم تصویربرداری</span></div>
              <div class="flex items-center justify-between bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>۱۸:۰۰ - ورود مهمانان به باغ‌تالار</span><span class="text-amber-300">تیم تشریفات سالن</span></div>
              <div class="flex items-center justify-between bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>۲۱:۳۰ - سرو شام اصلی و برش کیک</span><span class="text-amber-300">کترینگ & موسیقی</span></div>
            </div>
          </div>
        </div>`;
    } else if (type === 'party') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>همراهان & ساقدوش‌ها</span>
          </span>
          <h2 class="text-xl font-black text-white">تخصیص مسؤلیت‌ها به ساقدوش‌ها و نزدیکان</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shadow-md space-y-3">
            <span class="text-xs font-black text-[#D4AF37] block">لیست مسئولین و همراهان:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold">
              <div class="bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>مریم (ساقدوش عروس)</span><span class="block text-[10px] text-slate-400 mt-1">مسئول هماهنگی آتلیه و تور سر</span></div>
              <div class="bg-[#0E121C] p-3 rounded-xl border border-slate-800"><span>امیر (ساقدوش داماد)</span><span class="block text-[10px] text-slate-400 mt-1">مسئول تحویل ماشین و هماهنگی موسیقی</span></div>
            </div>
          </div>
        </div>`;
    } else if (type === 'inquiries' || type === 'vendors') {
      titleContainer.innerHTML = `
        <div class="space-y-1 text-right">
          <span class="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
            <i data-lucide="inbox" class="w-4 h-4 text-[#D4AF37]"></i>
            <span>پیگیری استعلام‌ها & تامین‌کنندگان</span>
          </span>
          <h2 class="text-xl font-black text-white">لیست درخواست‌های ارسال‌شده به تامین‌کنندگان یزد</h2>
        </div>`;
      bodyContainer.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="bg-[#141A28] border border-[#C5A059]/30 rounded-2xl p-4 shadow-md text-xs font-bold text-slate-300">
            شما ۴ استعلام فعال برای تالار، آتلیه، مزون و تشریفات یزد ارسال کرده‌اید. برای مشاهده جزئیات پاسخ‌ها می‌توانید به تب گفت‌وگوها مراجعه فرمایید.
          </div>
        </div>`;
    }
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

window.renderOverlayChecklist = function(tf = 'all') {
    const el = document.getElementById('overlay-checklist-items');
    if (!el) return;
    let tasks = JSON.parse(localStorage.getItem('aroosi_checklist_db') || '[]');
    if (!tasks || tasks.length === 0) {
        tasks = [
            { id: 1, text: "تعیین سقف بودجه کل و سهم‌بندی بخش‌ها", timeframe: "12_months", done: true },
            { id: 2, text: "انتخاب و رزرو تالار یا باغ‌سرا در یزد", timeframe: "12_months", done: true },
            { id: 3, text: "رزرو آتلیه عکاسی و فیلمبرداری کویر", timeframe: "6_months", done: false },
            { id: 4, text: "انتخاب و سفارش لباس عروس از مزون", timeframe: "6_months", done: false },
            { id: 5, text: "هماهنگی کارت دعوت آنلاین و چاپی", timeframe: "final_week", done: false }
        ];
        localStorage.setItem('aroosi_checklist_db', JSON.stringify(tasks));
    }
    el.innerHTML = tasks.map(t => `
      <div class="flex items-center justify-between bg-[#141A28] p-3 rounded-xl border border-slate-800 text-xs font-bold text-white">
        <div class="flex items-center gap-2">
          <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleChecklistTaskDone(${t.id})" class="accent-[#D4AF37] w-4 h-4 cursor-pointer">
          <span class="${t.done ? 'line-through text-slate-500' : 'text-white'}">${t.text}</span>
        </div>
        <span class="text-[10px] text-[#D4AF37] bg-[#0E121C] px-2 py-1 rounded-lg border border-[#C5A059]/30">${t.timeframe === '12_months' ? '۱۲-۹ ماه قبل' : (t.timeframe === '6_months' ? '۶-۳ ماه قبل' : 'هفته نهایی')}</span>
      </div>
    `).join('');
};

window.renderOverlayGuests = function() {
    const el = document.getElementById('overlay-guests-table-body');
    if (!el) return;
    let guests = JSON.parse(localStorage.getItem('aroosi_guest_db') || '[]');
    if (!guests || guests.length === 0) {
        guests = [
            { id: 1, name: "فاطمه و خانواده", relation: "فامیل عروس", count: 4, status: "confirmed", table: 3 },
            { id: 2, name: "حسین ابراهیمی", relation: "دوستان داماد", count: 2, status: "confirmed", table: 7 },
            { id: 3, name: "مهندس رضایی", relation: "همکاران", count: 1, status: "pending", table: 10 }
        ];
        localStorage.setItem('aroosi_guest_db', JSON.stringify(guests));
    }
    el.innerHTML = guests.map(g => `
      <tr class="hover:bg-[#1A2333]/50 transition-colors">
        <td class="p-3 font-bold text-white">${g.name}</td>
        <td class="p-3 text-slate-300">${g.relation}</td>
        <td class="p-3 text-amber-200">${g.count} نفر</td>
        <td class="p-3"><span class="px-2 py-1 rounded-lg text-[10px] font-black ${g.status === 'confirmed' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-amber-950 text-amber-300 border border-amber-500/30'}">${g.status === 'confirmed' ? 'تاییدشده' : 'در انتظار'}</span></td>
        <td class="p-3 text-white">میز ${g.table}</td>
      </tr>
    `).join('');
};


// Global Conversational Budget Assistant State & Functions
if (typeof cbwMode === 'undefined') window.cbwMode = 'fast';
if (typeof cbwCurrentStep === 'undefined') window.cbwCurrentStep = 1;
if (typeof cbwLastFeedback === 'undefined') window.cbwLastFeedback = '';

window.setBwMode = function(mode) {
    cbwMode = mode;
    cbwCurrentStep = 1;
    cbwLastFeedback = mode === 'fast' ? "روش سریع‌تر (۱۴ گام کلیدی) فعال شد." : "روش کامل‌تر (۲۶ گام دقیق با جزئیات یزدی) فعال شد.";
    if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
};

window.changeBwGuests = function(delta) {
    if (typeof cbwState !== 'undefined') {
        cbwState.guests = Math.max(20, (cbwState.guests || 200) + delta);
        cbwLastFeedback = `تعداد مهمانان به ${cbwState.guests.toLocaleString('fa-IR')} نفر تغییر یافت.`;
    }
    if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
};

window.setBwStateVal = function(key, val, nameVal) {
    if (typeof cbwState !== 'undefined') {
        cbwState[key] = val;
        if (nameVal) {
            cbwState[key + 'Name'] = nameVal;
            cbwLastFeedback = `انتخاب شما: «${nameVal}» ثبت گردید.`;
        }
    }
    if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
};

window.nextBwStep = function() {
    const maxSteps = cbwMode === 'fast' ? 14 : 26;
    if (cbwCurrentStep < maxSteps) {
        cbwCurrentStep++;
        if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
    }
};

window.prevBwStep = function() {
    if (cbwCurrentStep > 1) {
        cbwCurrentStep--;
        if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
    }
};

window.restartBwWizard = function() {
    cbwCurrentStep = 1;
    cbwLastFeedback = "محاسبه از ابتدا شروع شد.";
    if (typeof window.renderBwWizard === 'function') window.renderBwWizard();
};

window.syncBwToDashboard = function(totalCalculated) {
    let userBudget = JSON.parse(localStorage.getItem('userBudgetState') || '{"totalBudget": 350000000, "spent": 210000000, "lineItems": []}');
    userBudget.totalBudget = totalCalculated || 350000000;
    localStorage.setItem('userBudgetState', JSON.stringify(userBudget));
    if (typeof renderPlannerBudgetSummary === 'function') renderPlannerBudgetSummary();
    showToast('برآورد جدید بودجه با موفقیت به داشبورد اصلی منتقل شد.', 'success');
};

// Global Planning Checklist Modal Handlers
window.openAddTaskModal = function() {
    const text = prompt("عنوان وظیفه جدید برای چک‌لیست عروسی:");
    if (!text) return;
    let tasks = JSON.parse(localStorage.getItem('aroosi_checklist_db') || '[]');
    tasks.unshift({
        id: Date.now(),
        text: text,
        timeframe: '6_months',
        done: false
    });
    localStorage.setItem('aroosi_checklist_db', JSON.stringify(tasks));
    if (typeof window.renderOverlayChecklist === 'function') window.renderOverlayChecklist();
    showToast("وظیفه جدید به چک‌لیست اضافه شد.", "success");
};

window.toggleChecklistTaskDone = function(taskId) {
    let tasks = JSON.parse(localStorage.getItem('aroosi_checklist_db') || '[]');
    const target = tasks.find(t => t.id === taskId);
    if (target) {
        target.done = !target.done;
        localStorage.setItem('aroosi_checklist_db', JSON.stringify(tasks));
        if (typeof window.renderOverlayChecklist === 'function') window.renderOverlayChecklist();
    }
};

window.filterOverlayChecklist = function(tf) {
    if (typeof window.renderOverlayChecklist === 'function') window.renderOverlayChecklist(tf);
};

// Admin Category Modal Stubs
window.openAdminCategoryModal = function() {
    showToast("مدیریت دسته‌بندی جدید در حال اجراست.", "info");
};
window.closeAdminCategoryModal = function() {};
window.saveAdminCategory = function() { showToast("دسته‌بندی ذخیره شد.", "success"); };
window.saveAdminBannerCMS = function() { showToast("بنر ذخیره شد.", "success"); };


window.renderAdminBudgetWizardCms = function() {
    const container = document.getElementById('admin-budget-questions-container');
    if (!container) return;

    let cmsQuestions = JSON.parse(localStorage.getItem('aroosi_budget_wizard_config_db') || 'null');
    if (!cmsQuestions || cmsQuestions.length === 0) {
        cmsQuestions = [
            { id: 1, title: "۱. تعداد مهمانان", prompt: "تعداد تقریبی مهمانان مراسم چقدر است؟", key: "guests", options: "شمارنده عددی (نفرات)" },
            { id: 2, title: "۲. شهر برگزاری", prompt: "شهر محل برگزاری مراسم را تعیین کنید:", key: "city", options: "یزد | کرمان | اصفهان | شیراز | خراسان جنوبی | سایر" },
            { id: 3, title: "۳. زمان و مناسبت برگزاری", prompt: "تاریخ برگزاری در چه بازه‌ای است؟", key: "season", options: "روزهای عادی | اعیاد و آخرهفته‌ها" },
            { id: 4, title: "۴. کیفیت کلی مراسم", prompt: "سطح کیفیت کلی تشریفات را مشخص فرمایید:", key: "tier", options: "اقتصادی | متوسط | لوکس VIP" },
            { id: 5, title: "۵. فضای برگزاری مراسم", prompt: "نوع فضای برگزاری مراسم:", key: "venueType", options: "تالار | باغ‌تالار | هتل | منزل" },
            { id: 6, title: "۶. منوی شام اصلی", prompt: "نوع منوی شام پذیرایی:", key: "cateringMenu", options: "باقالی پلو با گوشت + جوجه | زرشک پلو | کباب کوبیده | وزیری" },
            { id: 7, title: "۷. میوه پذیرایی", prompt: "پذیرایی میوه فصل:", key: "fruitType", options: "۲ مدل میوه فصل | ۴ مدل + استوایی | نمی‌خوام" },
            { id: 8, title: "۸. شیرینی اصیل یزدی و مدرن", prompt: "پکیج شیرینی سنتی یزد یا مدرن:", key: "sweetType", options: "شیرینی اصیل یزدی (قطاب، لوز، نان منقا) | تر و خشک مدرن | نمی‌خوام" },
            { id: 9, title: "۹. فینگرفود و ولکام بار", prompt: "بار نوشیدنی و فینگرفود خوشامدگویی:", key: "fingerFoodType", options: "Welcome Drink | سینی فینگرفود | پکیج VIP | نمی‌خوام" },
            { id: 10, title: "۱۰. نوشیدنی و بار گرم/سرد", prompt: "سرو نوشیدنی‌های گرم و سرد:", key: "drinkType", options: "شربت | ۳ مدل آبمیوه طبیعی | موکتل نامحدود | آب معدنی | نمی‌خوام" },
            { id: 11, title: "۱۱. گیفت و یادبود مهمانان", prompt: "یادبود و گیفت تشکر از مهمانان:", key: "guestGift", options: "بله، اضافه کن | نمی‌خوام" },
            { id: 12, title: "۱۲. کیک عروسی", prompt: "وزن و مدل کیک طبقاتی:", key: "cakeStyle", options: "ساده | طبقاتی | نمی‌خوام" },
            { id: 13, title: "۱۳. لباس عروس", prompt: "نحوه تهیه لباس عروس:", key: "dressType", options: "خرید | اجاره | دوخت سفارشی | نمی‌خوام" },
            { id: 14, title: "۱۴. کت‌وشلوار داماد", prompt: "نحوه تهیه کت‌وشلوار داماد:", key: "suitType", options: "خرید | اجاره | دوخت سفارشی | نمی‌خوام" },
            { id: 15, title: "۱۵. سرویس طلا / جواهر", prompt: "جنس و وزن سرویس طلا:", key: "goldSet", options: "طلا | نقره + شمارنده گرم" },
            { id: 16, title: "۱۶. حلقه عروس", prompt: "جنس و وزن حلقه عروس:", key: "ringBride", options: "طلا | نقره + شمارنده گرم" },
            { id: 17, title: "۱۷. حلقه داماد", prompt: "جنس و وزن حلقه داماد:", key: "ringGroom", options: "طلا | نقره + شمارنده گرم" },
            { id: 18, title: "۱۸. عکاسی و فیلم‌برداری", prompt: "پکیج فیلم‌برداری سینمایی:", key: "photoFilmPackage", options: "پکیج ۱ | پکیج ۲ | پکیج VIP | نمی‌خوام" },
            { id: 19, title: "۱۹. آتلیه و فرمالیته", prompt: "فرمالیته کویر یا عمارت:", key: "prefilmAtelierType", options: "فرمالیته کویر یزد / شمال | عمارت | نمی‌خوام" },
            { id: 20, title: "۲۰. تزئین ماشین عروس", prompt: "مدل و کیفیت گل‌آرایی ماشین:", key: "carDecorType", options: "پایه | طبیعی ویژه | نمی‌خوام" },
            { id: 21, title: "۲۱. موسیقی و گروه زنده", prompt: "دی‌جی یا بند موسیقی زنده:", key: "musicType", options: "دی‌جی | گروه زنده | خواننده | نمی‌خوام" },
            { id: 22, title: "۲۲. نورپردازی و افکت", prompt: "استیج LED و نورپردازی:", key: "lightEffectsType", options: "پایه | استیج LED + آتش‌بازی | نمی‌خوام" },
            { id: 23, title: "۲۳. اجاره ماشین عروس", prompt: "خودرو تشریفاتی:", key: "carRentalType", options: "کلاسیک | شاسی‌بلند | خودرو شخصی" },
            { id: 24, title: "۲۴. دعوت‌نامه دیجیتال و چاپی", prompt: "طراحی کارت دعوت آنلاین و چاپی:", key: "digitalInvitationType", options: "دیجیتال + چاپی | فقط دیجیتال | نمی‌خوام" },
            { id: 25, title: "۲۵. سفر ماه عسل", prompt: "برنامه سفر ماه عسل:", key: "honeymoonType", options: "داخلی (کیش/شمال) | خارجی (ترکیه/دبی) | فعلاً برنامه‌ای ندارم" }
        ];
        localStorage.setItem('aroosi_budget_wizard_config_db', JSON.stringify(cmsQuestions));
    }

    container.innerHTML = `
        <div class="space-y-4 text-right">
          <div class="bg-[#0E121C] p-4 rounded-2xl border border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300 flex-wrap gap-2">
            <span class="flex items-center gap-1.5"><i data-lucide="list" class="w-4 h-4 text-[#D4AF37]"></i> تعداد کل سوالات فعال بودجه‌ریز: ${cmsQuestions.length} سوال</span>
            <button type="button" onclick="addNewBudgetQuestionCms()" class="bg-[#D4AF37] text-[#07090E] font-black px-4 py-2 rounded-xl cursor-pointer hover:bg-amber-300 transition-all">+ افزودن سوال جدید به دستیار</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-right text-xs">
              <thead class="bg-[#0E121C] text-amber-300 border-b border-[#C5A059]/30 font-bold">
                <tr>
                  <th class="p-3">عنوان گام / سوال</th>
                  <th class="p-3">متن پرامپت دستیار (Bot Prompt)</th>
                  <th class="p-3">گزینه‌ها & الگوی پاسخ‌ها</th>
                  <th class="p-3 text-center">عملیات مدیریت</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 font-medium text-slate-200">
                ${cmsQuestions.map((q) => `
                  <tr class="hover:bg-[#1A2333]/50 transition-colors">
                    <td class="p-3 font-bold text-white">${q.title}</td>
                    <td class="p-3 text-amber-200">${q.prompt}</td>
                    <td class="p-3 text-slate-300">${q.options}</td>
                    <td class="p-3 text-center space-x-2 space-x-reverse">
                      <button type="button" onclick="editBudgetQuestionCms(${q.id})" class="text-amber-300 hover:text-white font-bold bg-[#0E121C] border border-amber-500/30 px-3 py-1.5 rounded-lg cursor-pointer">ویرایش</button>
                      <button type="button" onclick="deleteBudgetQuestionCms(${q.id})" class="text-rose-400 hover:text-rose-200 font-bold bg-[#0E121C] border border-rose-500/30 px-3 py-1.5 rounded-lg cursor-pointer">حذف</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>`;
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

window.addNewBudgetQuestionCms = function() {
    let cmsQuestions = JSON.parse(localStorage.getItem('aroosi_budget_wizard_config_db') || '[]');
    const title = prompt("عنوان سوال جدید (مثلا: ۲۶. خدمات رزرو عکاس مذهبی):");
    if (!title) return;
    const promptTxt = prompt("متن پرامپت دستیار برای کاربر:");
    if (!promptTxt) return;
    const opts = prompt("گزینه‌های انتخابی (با | جدا کنید):");

    cmsQuestions.push({
        id: Date.now(),
        title: title,
        prompt: promptTxt,
        key: 'custom_' + Date.now(),
        options: opts || "پکیج ۱ | پکیج ۲ | نمی‌خوام"
    });

    localStorage.setItem('aroosi_budget_wizard_config_db', JSON.stringify(cmsQuestions));
    window.renderAdminBudgetWizardCms();
    showToast("سوال جدید به دستیار بودجه‌ریز اضافه شد.", "success");
};

window.editBudgetQuestionCms = function(qId) {
    let cmsQuestions = JSON.parse(localStorage.getItem('aroosi_budget_wizard_config_db') || '[]');
    const targetIdx = cmsQuestions.findIndex(q => q.id === qId);
    if (targetIdx === -1) return;

    const newPrompt = prompt("ویرایش متن پرامپت دستیار:", cmsQuestions[targetIdx].prompt);
    if (newPrompt) cmsQuestions[targetIdx].prompt = newPrompt;

    const newOpts = prompt("ویرایش گزینه‌های انتخابی (با | جدا کنید):", cmsQuestions[targetIdx].options);
    if (newOpts) cmsQuestions[targetIdx].options = newOpts;

    localStorage.setItem('aroosi_budget_wizard_config_db', JSON.stringify(cmsQuestions));
    window.renderAdminBudgetWizardCms();
    showToast("تغییرات سوال بودجه‌ریز ذخیره شد.", "success");
};

window.deleteBudgetQuestionCms = function(qId) {
    if (!confirm("آیا از حذف این سوال از ماژول بودجه‌ریز اطمینان دارید؟")) return;
    let cmsQuestions = JSON.parse(localStorage.getItem('aroosi_budget_wizard_config_db') || '[]');
    cmsQuestions = cmsQuestions.filter(q => q.id !== qId);
    localStorage.setItem('aroosi_budget_wizard_config_db', JSON.stringify(cmsQuestions));
    window.renderAdminBudgetWizardCms();
    showToast("سوال مربوطه حذف گردید.", "info");
};


// Global Admin Panel Tab Switcher
window.switchAdminPanelTab = function(tabName) {
  document.querySelectorAll('.apanel-pane').forEach(el => {
    el.classList.add('hidden');
  });

  document.querySelectorAll('[id^="apanel-tab-btn-"], [id^="admin-subtab-"]').forEach(btn => {
    btn.classList.remove('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
    btn.classList.add('text-slate-300', 'hover:text-white', 'hover:bg-[#141A28]');
  });

  const targetPane = document.getElementById(`apanel-pane-${tabName}`);
  if (targetPane) {
    targetPane.classList.remove('hidden');
  }

  const targetBtn = document.getElementById(`apanel-tab-btn-${tabName}`) || document.getElementById(`admin-subtab-${tabName}`);
  if (targetBtn) {
    targetBtn.classList.add('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
    targetBtn.classList.remove('text-slate-300', 'hover:text-white', 'hover:bg-[#141A28]');
  }

  if (tabName === 'settings' && typeof renderAdminCategories === 'function') renderAdminCategories();
  if (tabName === 'budget-cms' && typeof renderAdminBudgetWizardCms === 'function') renderAdminBudgetWizardCms();
  if (tabName === 'vendors' && typeof renderAdminPendingApps === 'function') renderAdminPendingApps();
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

// Global Vendor Panel Tab Switcher
window.switchVendorPanelTab = function(tabName) {
  document.querySelectorAll('.vpanel-pane').forEach(el => {
    el.classList.add('hidden');
  });

  document.querySelectorAll('[id^="vpanel-tab-btn-"], [id^="vendor-subtab-"]').forEach(btn => {
    btn.classList.remove('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
    btn.classList.add('text-slate-300', 'hover:text-white');
  });

  const targetPane = document.getElementById(`vpanel-pane-${tabName}`);
  if (targetPane) {
    targetPane.classList.remove('hidden');
  }

  const targetBtn = document.getElementById(`vpanel-tab-btn-${tabName}`) || document.getElementById(`vendor-subtab-${tabName}`);
  if (targetBtn) {
    targetBtn.classList.add('bg-[#D4AF37]', 'text-[#07090E]', 'shadow-md');
    targetBtn.classList.remove('text-slate-300', 'hover:text-white');
  }

  if (tabName === 'calendar' && typeof renderVendorDashCalendar === 'function') renderVendorDashCalendar();
  if (tabName === 'inquiries' && typeof renderVendorInquiriesTable === 'function') renderVendorInquiriesTable();
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};


window.renderAdminHomepageCategoriesCMS = function() {
    const container = document.getElementById('admin-homepage-categories-grid');
    if (!container) return;
    let categories = JSON.parse(localStorage.getItem('aroosi_homepage_categories_db') || 'null');
    if (!categories) {
        categories = [
            { id: 1, title: "تالار و باغ‌سراها", count: "۴۵ مجموعه فعال", key: "halls" },
            { id: 2, title: "آتلیه و تصویربرداری", count: "۳۲ مجموعه فعال", key: "photography" },
            { id: 3, title: "مزون و لباس عروس", count: "۲۸ مجموعه فعال", key: "bridal_dresses" },
            { id: 4, title: "آرایشگاه و میکاپ", count: "۵۰ مجموعه فعال", key: "beauty" }
        ];
        localStorage.setItem('aroosi_homepage_categories_db', JSON.stringify(categories));
    }
    container.innerHTML = categories.map(c => `
      <div class="bg-[#141A28] border border-[#C5A059]/30 p-4 rounded-2xl flex items-center justify-between text-xs font-bold text-white">
        <div>
          <span class="block text-sm font-black text-[#D4AF37]">${c.title}</span>
          <span class="text-slate-400 block mt-1">${c.count}</span>
        </div>
        <button type="button" onclick="editHomepageCategoryCms(${c.id})" class="text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-xl">ویرایش</button>
      </div>
    `).join('');
};

window.renderAdminBannerCMS = function() {
    const titleInput = document.getElementById('admin-banner-title');
    if (titleInput) titleInput.value = "عروسی تو - سامانه هوشمند تشریفات و عقد یزد";
};

window.editHomepageCategoryCms = function(catId) {
    let categories = JSON.parse(localStorage.getItem('aroosi_homepage_categories_db') || '[]');
    const target = categories.find(c => c.id === catId);
    if (target) {
        const newTitle = prompt("عنوان جدید دسته‌بندی:", target.title);
        if (newTitle) target.title = newTitle;
        localStorage.setItem('aroosi_homepage_categories_db', JSON.stringify(categories));
        window.renderAdminHomepageCategoriesCMS();
        showToast("دسته‌بندی ذخیره گردید.", "success");
    }
};


// ==================================================
// COUPLE TESTIMONIALS CAROUSEL & MODAL LOGIC
// ==================================================
const TESTIMONIALS_DATA = [
  {
    id: 1,
    names: "مریم & علی",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    date: "۱۴۰۲/۰۸/۱۵",
    vendorTag: "رزرو تالار مشیرالممالک",
    category: "hall",
    rating: 5,
    shortQuote: "استعلام قیمت مستقیم و چت با مدیر تالار فوق‌العاده سریع بود. همه هزینه‌ها دقیقا مطابق با فاکتور نهایی شد.",
    fullReview: "ما از طریق عروسی تو تالار باغ مشیرالممالک یزد را پیدا کردیم. امکان استعلام آنلاین قیمت و گفتگو با مدیریت مجموعه باعث شد بتوانیم بدون نیاز به مراجعه‌های حضوری متعدد، برنامه زمانی و بودجه را دقیق هماهنگ کنیم. پشتیبانی عالی و شفافیت کامل در هزینه‌ها تجربه بی‌نظیری برای ما رقم زد."
  },
  {
    id: 2,
    names: "رضا & سارا",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    date: "۱۴۰۲/۰۹/۲۰",
    vendorTag: "رزرو آتلیه کویر",
    category: "studio",
    rating: 5,
    shortQuote: "کارت دعوت دیجیتال با تم زمرد بسیار شیک بود و همه مهمانان ما فرم RSVP آنلاین را به راحتی پر کردند.",
    fullReview: "از سیستم کارت دعوت آنلاین عروسی تو استفاده کردیم. قالب زمردی و موزیک زمینه عالی بود و مهمانان ما فرم حضور و غیاب را تکمیل کردند. لیست مهمانان و هدایا به صورت منظم در پنل مدیریت ما ذخیره شد که کار ما را بسیار آسان کرد."
  },
  {
    id: 3,
    names: "حسین & نیلوفر",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
    date: "۱۴۰۲/۱۰/۱۲",
    vendorTag: "خدمات تشریفات VIP یزد",
    category: "catering",
    rating: 5,
    shortQuote: "هوش مصنوعی بودجه‌ریز تمام هزینه‌های پنهان عروسی مثل ورودی و انعام را دقیق برآورد کرد و مانع کسر بودجه شد.",
    fullReview: "دستیار بودجه‌ریز هوشمند عروسی تو به ما کمک کرد تمام هزینه‌های ریز و درشت تشریفات، گل‌آرایی و کترینگ را کنترل کنیم. پیشنهادهای تطبیق قیمت با تامین‌کنندگان معتبر یزد عالی بود و در زمان و هزینه ما صرفه‌جویی چشمگیری شد."
  },
  {
    id: 4,
    names: "امیر & مهسا",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100",
    date: "۱۴۰۲/۱۱/۰۵",
    vendorTag: "مزون عروس سلطنتی",
    category: "mezon",
    rating: 5,
    shortQuote: "تست آنلاین سبک عروسی و پرو مجازی لباس عروس فوق‌العاده کاربردی بود و دقیقا همان رویای ما برآورده شد.",
    fullReview: "از طریق بخش تست‌های روانشناسی و پرو مجازی لباس عروس توانستیم بهترین مزون‌های یزد را مقایسه کنیم. مدیریت صبور مزون و تخفیف ویژه پلتفرم عروسی تو تجربه خریدی لوکس و بدون دغدغه برای ما ساخت."
  }
];

let currentTestimonialCategory = 'all';

function filterTestimonialsByCategory(category) {
  currentTestimonialCategory = category;

  document.querySelectorAll('#testimonial-filter-pills .testimonial-pill').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.className = 'testimonial-pill active bg-[#D4AF37] text-[#07090E] px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0';
    } else {
      btn.className = 'testimonial-pill bg-white/5 border border-amber-500/20 text-slate-300 hover:text-amber-400 active:bg-amber-500/20 px-3 py-1 rounded-xl transition-all cursor-pointer shrink-0';
    }
  });

  renderTestimonialsCarousel(category);
}

function renderTestimonialsCarousel(filterCategory = currentTestimonialCategory) {
  const container = document.getElementById('testimonials-carousel-container');
  if (!container) return;

  const filteredData = filterCategory === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === filterCategory || (filterCategory === 'mezon' && (t.category === 'mezon' || t.category === 'beauty')));

  if (filteredData.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 py-4 text-center w-full">نظری در این دسته‌بندی یافت نشد.</div>`;
    return;
  }

  container.innerHTML = filteredData.map(item => `
    <div onclick="openTestimonialDetailModal(${item.id})" class="bg-[#141A28] border border-[#C5A059]/30 hover:border-amber-500/60 rounded-2xl p-4 shrink-0 w-[260px] sm:w-[290px] space-y-2 shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
      <div class="flex items-center justify-between pointer-events-none">
        <div class="flex items-center gap-2">
          <img src="${item.avatar}" class="w-8 h-8 rounded-full object-cover border border-[#D4AF37]">
          <div>
            <span class="text-xs font-black text-white block group-hover:text-[#D4AF37] transition-colors">${item.names}</span>
            <span class="text-[9.5px] text-slate-400 font-medium block">${item.vendorTag}</span>
          </div>
        </div>
        <span class="text-amber-400 text-xs font-black flex items-center gap-0.5">
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
        </span>
      </div>
      <p class="text-[11px] text-slate-300 font-medium leading-relaxed line-clamp-3 pointer-events-none">"${item.shortQuote}"</p>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

window.filterTestimonialsByCategory = filterTestimonialsByCategory;

let testimonialsTimer = null;
let isTestimonialsHovered = false;

function initTestimonialsAutoScroll() {
  renderTestimonialsCarousel();
  const container = document.getElementById('testimonials-carousel-container');
  if (!container) return;

  if (testimonialsTimer) clearInterval(testimonialsTimer);

  let isDown = false;
  let startX, scrollLeft;

  container.onmouseenter = () => { isTestimonialsHovered = true; };
  container.onmouseleave = () => { isTestimonialsHovered = false; isDown = false; };

  container.onmousedown = (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };
  container.onmouseup = () => { isDown = false; };
  container.onmousemove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  let touchStartX = 0;
  let touchScrollLeft = 0;
  container.ontouchstart = (e) => {
    isTestimonialsHovered = true;
    touchStartX = e.touches[0].pageX - container.offsetLeft;
    touchScrollLeft = container.scrollLeft;
  };
  container.ontouchend = () => {
    setTimeout(() => { isTestimonialsHovered = false; }, 2000);
  };
  container.ontouchmove = (e) => {
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - touchStartX) * 1.5;
    container.scrollLeft = touchScrollLeft - walk;
  };

  testimonialsTimer = setInterval(() => {
    if (isTestimonialsHovered) return;
    const cardWidth = 280;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 10 || container.scrollLeft <= -maxScroll + 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 5000);
}

function openTestimonialDetailModal(id) {
  const item = TESTIMONIALS_DATA.find(t => t.id === id);
  if (!item) return;

  const modal = document.getElementById('modal-testimonial-detail');
  if (!modal) return;

  const avatar = document.getElementById('tm-avatar');
  const names = document.getElementById('tm-names');
  const date = document.getElementById('tm-date');
  const stars = document.getElementById('tm-stars');
  const vendorTag = document.getElementById('tm-vendor-tag');
  const fullReview = document.getElementById('tm-full-review');

  if (avatar) avatar.src = item.avatar;
  if (names) names.textContent = item.names;
  if (date) date.textContent = `تاریخ ثبت: ${item.date}`;
  if (vendorTag) vendorTag.textContent = item.vendorTag;
  if (fullReview) fullReview.textContent = item.fullReview;

  if (stars) {
    stars.innerHTML = Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeTestimonialDetailModal() {
  const modal = document.getElementById('modal-testimonial-detail');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.renderTestimonialsCarousel = renderTestimonialsCarousel;
window.initTestimonialsAutoScroll = initTestimonialsAutoScroll;
window.openTestimonialDetailModal = openTestimonialDetailModal;
window.closeTestimonialDetailModal = closeTestimonialDetailModal;


// ==================================================
// FOOTER MODALS & E-NAMAD TRUST SEAL HANDLERS
// ==================================================
function openEnamadModal() {
  const modal = document.getElementById('modal-enamad');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeEnamadModal() {
  const modal = document.getElementById('modal-enamad');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.openEnamadModal = openEnamadModal;
window.closeEnamadModal = closeEnamadModal;

// Category Query Parameter URL Mapping on Load
(function initCategoryUrlParameterMapping() {
  const CATEGORY_PARAM_MAP = {
    'hall': 'تالار و باغ تالار عروسی',
    'studio': 'آتلیه عکاسی و فیلمبرداری',
    'beauty': 'سالن زیبایی و آرایشگاه عروس',
    'mezon': 'مزون لباس عروس',
    'jewelry': 'طلافروشی و جواهرفروشی',
    'halls': 'تالار و باغ تالار عروسی',
    'photography': 'آتلیه عکاسی و فیلمبرداری',
    'bridal_dresses': 'مزون لباس عروس',
    'venue_catering': 'تالار و باغ تالار عروسی',
    'photo_music': 'آتلیه عکاسی و فیلمبرداری',
    'beauty_style': 'سالن زیبایی و آرایشگاه عروس',
    'boutique': 'مزون لباس عروس',
    'catering': 'کترینگ و تشریفات پذیرایی'
  };

  if (typeof window !== 'undefined' && window.location) {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('category');
    const subParam = params.get('sub');

    const executeFilters = () => {
      if (catParam && CATEGORY_PARAM_MAP[catParam.toLowerCase()]) {
        const mappedTitle = CATEGORY_PARAM_MAP[catParam.toLowerCase()];
        if (typeof filterVendorsByCategoryTitle === 'function') {
          filterVendorsByCategoryTitle(mappedTitle);
        }
      }
      if (subParam) {
        const decodedSub = decodeURIComponent(subParam);
        const searchInput = document.getElementById('directory-search-input');
        if (searchInput) {
          searchInput.value = decodedSub;
        }
        if (typeof filterVendors === 'function') {
          filterVendors();
        }
      }
    };

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => setTimeout(executeFilters, 200));
    } else {
      setTimeout(executeFilters, 200);
    }
  }
})();


// ==================================================
// DEDICATED ASSISTANT & QUICK INQUIRY MODAL HANDLERS
// ==================================================
function openDedicatedAssistantModal() {
  const modal = document.getElementById('dedicatedAssistantModal') || document.getElementById('modal-dedicated-assistant');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeDedicatedAssistantModal() {
  const modal = document.getElementById('dedicatedAssistantModal') || document.getElementById('modal-dedicated-assistant');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleDedicatedAssistantSubmit(e) {
  e.preventDefault();
  closeDedicatedAssistantModal();
  showToast("درخواست دستیار اختصاصی شما ثبت گردید. کارشناسان ما به زودی با شما تماس می‌گیرند.", "success");
}

function openQuickInquiryModal() {
  const modal = document.getElementById('quickInquiryModal') || document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeQuickInquiryModal() {
  const modal = document.getElementById('quickInquiryModal') || document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleQuickInquirySubmit(e) {
  e.preventDefault();
  closeQuickInquiryModal();
  showToast("درخواست استعلام هوشمند شما ارسال شد. پیش‌فاکتور به پیام‌رسان شما ارسال می‌گردد.", "success");
}

window.openDedicatedAssistantModal = openDedicatedAssistantModal;
window.closeDedicatedAssistantModal = closeDedicatedAssistantModal;
window.handleDedicatedAssistantSubmit = handleDedicatedAssistantSubmit;
window.openQuickInquiryModal = openQuickInquiryModal;
window.closeQuickInquiryModal = closeQuickInquiryModal;
window.handleQuickInquirySubmit = handleQuickInquirySubmit;


// ==================================================
// FOOTER INFORMATIONAL FLOATING MODALS
// ==================================================
function openAboutModal() {
  const modal = document.getElementById('modal-about') || document.getElementById('aboutModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeAboutModal() {
  const modal = document.getElementById('modal-about') || document.getElementById('aboutModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openFaqModal() {
  const modal = document.getElementById('modal-faq') || document.getElementById('faqModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeFaqModal() {
  const modal = document.getElementById('modal-faq') || document.getElementById('faqModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openTermsModal() {
  const modal = document.getElementById('modal-terms') || document.getElementById('termsModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeTermsModal() {
  const modal = document.getElementById('modal-terms') || document.getElementById('termsModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openSupportModal() {
  const modal = document.getElementById('modal-support') || document.getElementById('supportModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

function closeSupportModal() {
  const modal = document.getElementById('modal-support') || document.getElementById('supportModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.openFaqModal = openFaqModal;
window.closeFaqModal = closeFaqModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.openSupportModal = openSupportModal;
window.closeSupportModal = closeSupportModal;

function openAiRecommendationModal() {
  if (typeof openSmartWizardModal === 'function') {
    openSmartWizardModal();
  } else {
    const modal = document.getElementById('aiRecommendationModal') || document.getElementById('modal-smart-wizard');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }
}

function closeAiRecommendationModal() {
  if (typeof closeSmartWizardModal === 'function') {
    closeSmartWizardModal();
  } else {
    const modal = document.getElementById('aiRecommendationModal') || document.getElementById('modal-smart-wizard');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
}

window.openAiRecommendationModal = openAiRecommendationModal;
window.closeAiRecommendationModal = closeAiRecommendationModal;

function openStoryLightbox(imgUrl, vendorName, category = 'نمونه‌کار لوکس یزد', caption = '', vendorId = 1) {
  const modal = document.getElementById('modal-story-lightbox');
  if (!modal) return;

  const imgEl = document.getElementById('story-lightbox-img');
  const avatarEl = document.getElementById('story-lightbox-avatar');
  const nameEl = document.getElementById('story-lightbox-vendor-name');
  const catEl = document.getElementById('story-lightbox-category');
  const capEl = document.getElementById('story-lightbox-caption');
  const btnEl = document.getElementById('story-lightbox-profile-btn');

  if (imgEl) imgEl.src = imgUrl || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800';
  if (avatarEl) avatarEl.src = imgUrl || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=150';
  if (nameEl) nameEl.textContent = vendorName || 'تامین‌کننده برتر یزد';
  if (catEl) catEl.textContent = category || 'نمونه‌کار لوکس یزد';
  if (capEl) capEl.textContent = caption || `${vendorName || 'تامین‌کننده'} — جدیدترین استوری و نمونه‌کار لوکس ثبت‌شده در استان یزد.`;
  if (btnEl) {
    btnEl.onclick = function() {
      closeStoryLightbox();
      openVendorDetailModal(vendorId || 1);
    };
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

function closeStoryLightbox() {
  const modal = document.getElementById('modal-story-lightbox');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.openStoryLightbox = openStoryLightbox;
window.closeStoryLightbox = closeStoryLightbox;

/* Off-Canvas Slide-Over Advanced Filters Drawer Toggle */
function toggleAdvancedFiltersDrawer() {
  const drawer = document.getElementById('directory-advanced-filters-drawer');
  if (!drawer) return;

  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    drawer.classList.add('open');
  } else {
    drawer.classList.add('hidden');
    drawer.classList.remove('open');
  }
}

/* Directory Sidebar Toggle & Expanded 4-Column Grid Mode */
function toggleDirectorySidebar() {
  toggleAdvancedFiltersDrawer();
}

/* Directory Interactive Map View Toggle */
function toggleDirectoryMapView() {
  if (typeof toggleDirectoryMainView === 'function') {
    const isMapActive = directoryViewMode === 'map';
    toggleDirectoryMainView(isMapActive ? 'grid' : 'map');

    const label = document.getElementById('map-toggle-btn-label');
    if (label) {
      label.textContent = isMapActive ? 'نمایش روی نقشه' : 'نمای شبکه‌ای';
    }
  }
}

window.toggleAdvancedFiltersDrawer = toggleAdvancedFiltersDrawer;
window.toggleDirectorySidebar = toggleDirectorySidebar;
window.toggleDirectoryMapView = toggleDirectoryMapView;
