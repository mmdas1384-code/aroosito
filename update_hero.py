import re

hero_code = '''      <section id="hero" class="relative mt-6 sm:mt-8 bg-[#0b0f19] border border-[#D4AF37]/40 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl overflow-visible text-white space-y-6">
        <!-- Ambient Gold Radial Illumination -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Main Hero Content Dual-Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">

          <!-- RIGHT / MAIN ACTION PANEL (7 cols) -->
          <div class="lg:col-span-7 bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-5 text-right shadow-2xl">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-xs font-black">
                <i data-lucide="crown" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>Aroosi No — پلتفرم جامع و هوشمند عروسی‌های مجلل استان یزد</span>
              </div>

              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug">
                آفرینش <span class="text-[#D4AF37] underline decoration-[#D4AF37]/60 underline-offset-8">خاطره‌انگیزترین لحظات لوکس</span>
              </h1>

              <p class="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                مدیریت هوشمند، استعلام قیمت مستقیم و رزرو اختصاصی بهترین تالارها، آتلیه‌ها و تشریفات یزد
              </p>
            </div>

            <!-- SMART SEARCH BAR ("جستجوی سریع") -->
            <div class="relative w-full">
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
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <button type="button" onclick="openStartPlanningModal()" class="gold-shimmer-btn text-[#0F251A] font-black py-2.5 px-3 rounded-2xl text-xs transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 shadow-md border border-[#D4AF37]">
                <i data-lucide="sparkles" class="w-4 h-4 text-[#0F251A]"></i>
                <span>شروع برنامه‌ریزی</span>
              </button>

              <button type="button" onclick="openVipConciergeModal()" class="bg-[#141A28] hover:bg-[#1E293B] text-[#D4AF37] border border-[#C5A059]/40 font-bold py-2.5 px-3 rounded-2xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
                <i data-lucide="crown" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>دستیار استعلام</span>
              </button>

              <button type="button" onclick="openSmartWizardModal()" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/40 font-bold py-2.5 px-3 rounded-2xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md">
                <i data-lucide="wand-2" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>توصیه هوشمند AI</span>
              </button>
            </div>

            <!-- TOP YAZD AREA NAVIGATION PILLS -->
            <div class="space-y-1.5 pt-2 border-t border-[#C5A059]/20">
              <span class="text-[11px] font-bold text-slate-300 block">منطقه‌بندی و محله‌های برتر یزد:</span>
              <div class="flex flex-wrap gap-1.5 text-[10.5px] font-bold">
                <button type="button" onclick="filterVendorsByArea('صفائیه')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1">📍 صفائیه</button>
                <button type="button" onclick="filterVendorsByArea('بافت تاریخی')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1">🏛️ بافت تاریخی</button>
                <button type="button" onclick="filterVendorsByArea('ملاصدرا')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1">✨ ملاصدرا</button>
                <button type="button" onclick="filterVendorsByArea('میدان اطلسی')" class="bg-[#141A28] hover:bg-[#1E293B] text-amber-200 border border-[#C5A059]/30 px-3 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1">🌆 میدان اطلسی</button>
              </div>
            </div>
          </div>

          <!-- LEFT / CENTER FOCUSED VENDOR SHOWCASE CARDS (5 cols) -->
          <div id="featured-vendors-section" class="lg:col-span-5 bg-[#0e121c]/90 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            <div class="flex items-center justify-between border-b border-[#C5A059]/20 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span class="text-xs font-black text-[#D4AF37]">ویترین تامین‌کنندگان برتر یزد</span>
              </div>
              <div class="flex items-center gap-1">
                <button type="button" onclick="slideVipFocalCarousel('prev')" class="w-7 h-7 rounded-full bg-[#141A28] border border-[#C5A059]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#1E293B] cursor-pointer transition-all">‹</button>
                <button type="button" onclick="slideVipFocalCarousel('next')" class="w-7 h-7 rounded-full bg-[#141A28] border border-[#C5A059]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#1E293B] cursor-pointer transition-all">›</button>
              </div>
            </div>

            <!-- Asymmetric Focal Carousel Container -->
            <div id="vip-focal-stage" class="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center" onmouseenter="pauseVipFocalAutoScroll()" onmouseleave="resumeVipFocalAutoScroll()">
              <div id="vip-showcase-container" class="w-full flex items-center justify-center transition-all duration-500">
                <!-- Dynamically populated via renderVipFocalShowcase() -->
              </div>
            </div>

            <!-- Carousel Pagination Dots -->
            <div id="vip-carousel-dots" class="flex items-center justify-center gap-1.5 pt-1">
              <!-- Dynamically populated -->
            </div>
          </div>

        </div>

        <!-- LIVE METRICS / STATS BAR AT BOTTOM OF HERO -->
        <div class="bg-[#0e121c]/95 backdrop-blur-2xl border border-[#C5A059]/30 rounded-2xl p-4 relative z-10 shadow-xl">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#C5A059]/15">
            <span class="text-xs font-black text-[#D4AF37] flex items-center gap-1.5">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-[#D4AF37]"></i>
              آمارها و ویژگی‌های کلیدی پلتفرم
            </span>
            <span class="text-[10px] font-bold text-slate-400">بروزرسانی زنده استاندارد‌های VIP یزد</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl p-2.5 transition-all hover:border-[#D4AF37]/50">
              <span class="text-sm sm:text-base font-black text-[#D4AF37] block">۵۰۰+</span>
              <span class="text-[10px] sm:text-xs text-slate-300 font-bold block mt-0.5">تامین‌کننده معتبر یزد</span>
            </div>
            <div class="bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl p-2.5 transition-all hover:border-[#D4AF37]/50">
              <span class="text-sm sm:text-base font-black text-[#D4AF37] block">۲,۵۰۰+</span>
              <span class="text-[10px] sm:text-xs text-slate-300 font-bold block mt-0.5">استعلام قیمت موفق</span>
            </div>
            <div class="bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl p-2.5 transition-all hover:border-[#D4AF37]/50">
              <span class="text-sm sm:text-base font-black text-[#D4AF37] block">۱۰۰٪</span>
              <span class="text-[10px] sm:text-xs text-slate-300 font-bold block mt-0.5">تضمین اصالت & قیمت</span>
            </div>
            <div class="bg-[#141A28]/80 border border-[#C5A059]/20 rounded-xl p-2.5 transition-all hover:border-[#D4AF37]/50">
              <span class="text-sm sm:text-base font-black text-[#D4AF37] block">۲۴/۷</span>
              <span class="text-[10px] sm:text-xs text-slate-300 font-bold block mt-0.5">پشتیبانی اختصاصی</span>
            </div>
          </div>
        </div>
      </section>'''

pattern = r'      <section id="hero".*?</section>'

for filepath in ['index.html', 'home-view.html']:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    updated = re.sub(pattern, hero_code, content, flags=re.DOTALL)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated)

with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

js_updated = re.sub(pattern, hero_code, js_content, flags=re.DOTALL)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_updated)

print('Updated hero section in index.html, home-view.html, and script.js successfully')
