
// MODULAR VIEW TEMPLATE LOADERS & FALLBACKS
const HOME_VIEW_HTML = `<!-- HOMEPAGE CONTENT MODULE (home-view.html) -->
    <div id="tab-home" class="tab-content space-y-12">

      <!-- 2. HERO SECTION ("برنامه‌ریزی رویایی‌ترین شب زندگی با عروسی تو") -->
      <section id="hero" class="relative bg-white border border-accent rounded-3xl p-6 lg:p-8 shadow-xs overflow-hidden hero-section">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <!-- Left Column: Compact Squared Hero Intro -->
          <div class="lg:col-span-7 bg-slate-50/70 border border-accent/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs relative overflow-hidden">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-bold">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                <span>پلتفرم تخصصی و هوشمند برنامه‌ریزی عروسی</span>
              </div>

              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-graphite leading-snug">
                برنامه‌ریزی رویایی‌ترین شب زندگی با <span class="text-primary underline decoration-accent underline-offset-8">عروسی تو</span>
              </h1>

              <p class="text-xs sm:text-sm text-graphite/80 leading-relaxed max-w-xl">
                بهترین باغ تالارها، آتلیه‌ها، سالن‌های زیبایی و خدمات مجالس را با تضمین قیمت، تاییدیه رسمی اعتبار و استعلام آنلاین رزرو کنید.
              </p>

            </div>

            <!-- Stats Bar -->
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-accent/80 text-center">
              <div class="bg-white p-3 rounded-2xl border border-accent/60 shadow-2xs">
                <p class="text-base sm:text-lg font-black text-primary">+۱,۲۰۰</p>
                <p class="text-[10px] sm:text-xs text-secondary font-medium">کسب‌وکار معتبر</p>
              </div>
              <div class="bg-white p-3 rounded-2xl border border-accent/60 shadow-2xs">
                <p class="text-base sm:text-lg font-black text-primary">+۱۵,۰۰۰</p>
                <p class="text-[10px] sm:text-xs text-secondary font-medium">زوج موفق</p>
              </div>
              <div class="bg-white p-3 rounded-2xl border border-accent/60 shadow-2xs">
                <p class="text-base sm:text-lg font-black text-primary">۹۸٪</p>
                <p class="text-[10px] sm:text-xs text-secondary font-medium">رضایتمندی</p>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive VIP Vendors Showcase -->
          <div class="lg:col-span-5 bg-gradient-to-b from-slate-50 to-amber-50/30 border border-accent/80 rounded-3xl p-5 flex flex-col shadow-2xs relative space-y-3">
            <div class="flex items-center justify-between border-b border-accent/80 pb-2 flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300 flex items-center gap-1"><i data-lucide="crown" class="w-3 h-3 text-[#D4AF37]"></i> VIP</span>
                <h3 class="text-xs sm:text-sm font-black text-graphite">ویترین تامین‌کنندگان برتر استان یزد (VIP Showcase)</h3>
              </div>
              <span class="text-[10px] text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1"><i data-lucide="shield-check" class="w-3 h-3 text-[#1B3B2B]"></i> تضمین اصالت & قیمت یزد</span>
            </div>

            <!-- Tabbed Category Quick Filter -->
            <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-[11px] font-bold">
              <button type="button" onclick="filterVipShowcase('all')" id="vip-tab-all" class="vip-tab-btn pill-btn px-3 py-1 rounded-xl bg-[#1B3B2B] text-[#D4AF37] transition-all shrink-0 cursor-pointer shadow-xs">
                همه برترین‌ها
              </button>
              <button type="button" onclick="filterVipShowcase('hall')" id="vip-tab-hall" class="vip-tab-btn pill-btn px-3 py-1 rounded-xl bg-white border border-accent hover:border-[#D4AF37] text-graphite transition-all shrink-0 cursor-pointer">
                تالار و باغ‌سرا
              </button>
              <button type="button" onclick="filterVipShowcase('studio')" id="vip-tab-studio" class="vip-tab-btn pill-btn px-3 py-1 rounded-xl bg-white border border-accent hover:border-[#D4AF37] text-graphite transition-all shrink-0 cursor-pointer">
                آتلیه و عکاسی
              </button>
              <button type="button" onclick="filterVipShowcase('beauty')" id="vip-tab-beauty" class="vip-tab-btn pill-btn px-3 py-1 rounded-xl bg-white border border-accent hover:border-[#D4AF37] text-graphite transition-all shrink-0 cursor-pointer">
                سالن زیبایی
              </button>
            </div>

            <!-- 4-Column Parallax Glassmorphic VIP Showcase Container -->
            <div id="vip-showcase-container" class="vip-showcase-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[380px] overflow-hidden relative p-1">

              <!-- Column 1 (Scroll Up Stream) -->
              <div class="vip-col-wrapper overflow-hidden relative h-full">
                <div class="vip-col-stream vip-col-stream-up flex flex-col gap-3">
                  <div data-vip-cat="hall" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(1)">
                    <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80" alt="هتل باغ مشیرالممالک" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">هتل باغ مشیرالممالک</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">باغ و تالار • صفائیه</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(1)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(1, 'هتل باغ مشیرالممالک')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div data-vip-cat="beauty" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(3)">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" alt="سالن زیبایی رویال" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">سالن زیبایی رویال</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">میکاپ عروس • کاشانی</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(3)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(3, 'سالن زیبایی رویال')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Column 2 (Scroll Down Stream) -->
              <div class="vip-col-wrapper overflow-hidden relative h-full">
                <div class="vip-col-stream vip-col-stream-down flex flex-col gap-3">
                  <div data-vip-cat="studio" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(2)">
                    <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80" alt="استودیو کویر" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">استودیو تخصصی کویر</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">آتلیه • میدان اطلسی</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(2)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(2, 'استودیو کویر')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div data-vip-cat="beauty" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(4)">
                    <img src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80" alt="مزون عروس لورنت" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">مزون عروس لورنت</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">لباس عروس • صفائیه</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(4)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(4, 'مزون لورنت')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Column 3 (Scroll Up Stream) -->
              <div class="vip-col-wrapper vip-col-stream-3 overflow-hidden relative h-full">
                <div class="vip-col-stream vip-col-stream-up flex flex-col gap-3">
                  <div data-vip-cat="hall" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(5)">
                    <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80" alt="حاج خلیفه رهبر" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">حاج خلیفه رهبر</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">شیرینی سنتی • امیرچقماق</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(5)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(5, 'حاج خلیفه رهبر')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div data-vip-cat="studio" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(6)">
                    <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" alt="دی‌جی و موزیک آریا" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">دی‌جی & موزیک آریا</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">موسیقی زنده • صفائیه</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(6)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(6, 'دی‌جی آریا')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                </div>
              </div>

              <!-- Column 4 (Scroll Down Stream - hidden on mobile/tablet) -->
              <div class="vip-col-wrapper hidden lg:block overflow-hidden relative h-full">
                <div class="vip-col-stream vip-col-stream-down flex flex-col gap-3">

                  <!-- Card 7: Photography -->
                  <div data-vip-cat="studio" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(2)">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" alt="تشریفات و عکاسی کویر" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-default-cover-label">
                      <span class="text-[10px] font-black text-white block truncate drop-shadow-sm">تشریفات کویر یزد</span>
                    </div>

                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">تشریفات کویر یزد</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">تشریفات & دیزاین • صفائیه</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(2)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(2, 'تشریفات کویر یزد')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Card 8: Luxury Venue -->
                  <div data-vip-cat="hall" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(1)">
                    <img src="https://images.unsplash.com/photo-1545232979-fbfd42e000b5?auto=format&fit=crop&w=600&q=80" alt="باغ‌تالار سنتی یزد" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-default-cover-label">
                      <span class="text-[10px] font-black text-white block truncate drop-shadow-sm">باغ‌تالار سنتی یزد</span>
                    </div>

                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1545232979-fbfd42e000b5?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">باغ‌تالار سنتی یزد</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">باغ‌تالار VIP • بافت تاریخی</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(1)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(1, 'باغ‌تالار سنتی یزد')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Loop duplicates for Column 4 -->
                  <div data-vip-cat="studio" class="vip-3d-card group cursor-pointer" onclick="openVendorDetailModal(2)">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" alt="تشریفات و عکاسی کویر" class="vip-cover-img">
                    <div class="vip-3d-badge">👑 VIP</div>
                    <div class="vip-reveal-overlay">
                      <div class="flex items-center gap-1.5 w-full min-w-0">
                        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150" alt="لوگو" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37] object-cover shrink-0">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-[10.5px] sm:text-[11px] font-black text-white truncate leading-tight">تشریفات کویر یزد</h4>
                          <span class="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium block truncate">تشریفات & دیزاین • صفائیه</span>
                        </div>
                      </div>

                      <div class="flex items-center justify-around w-full max-w-full px-1 py-1" onclick="event.stopPropagation()">
                        <button type="button" onclick="openVendorDetailModal(2)" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-[#1B3B2B]/90 text-[#D4AF37] border border-[#D4AF37]/70 shadow-md flex items-center justify-center group-hover/icon:scale-110 group-hover/icon:border-[#D4AF37] transition-all duration-200">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-white group-hover/icon:text-[#D4AF37] transition-colors whitespace-nowrap">مشاهده</span>
                        </button>

                        <button type="button" onclick="openInquiryModal(2, 'تشریفات کویر یزد')" class="vip-icon-module flex flex-col items-center gap-1 cursor-pointer group/icon">
                          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] shadow-md flex items-center justify-center group-hover/icon:scale-110 transition-all duration-200">
                            <i data-lucide="tag" class="w-4 h-4"></i>
                          </div>
                          <span class="text-[9.5px] font-bold text-amber-200 group-hover/icon:text-white transition-colors whitespace-nowrap">استعلام قیمت</span>
                        </button>
                      </div>
                    </div>
                  </div>

            </div>
          </div>

        </div>
      </section>

      <!-- 4. MAIN CATEGORIES GRID ("دسته‌بندی جامع خدمات و تشریفات عروسی") -->
      <section class="main-categories-section">
        <div class="categories-header">
          <div class="categories-title-wrapper">
            <h2 class="categories-main-title">
              <svg class="title-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>دسته‌بندی‌های اصلی خدمات و تشریفات عروسی</span>
            </h2>
            <p class="categories-sub-title">بررسی و انتخاب از بین ۵ رسته اصلی با دسترسی سریع به تمامی زیرگروه‌ها</p>
          </div>
          <div class="categories-action">
            <button onclick="switchTab('directory')" class="btn-all-categories">
              <span>مشاهده همه خدمات</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
          </div>
        </div>

        <div class="categories-grid">
          <!-- Card 1 -->
          <div class="category-card" onclick="openCategorySubgroupsModal('legal_ceremony')">
            <div class="category-badge">۵ زیرگروه</div>
            <div class="category-icon-box">
              <svg width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>
            </div>
            <h3 class="category-title">تشریفات قانونی، عقد و مشاوره</h3>
            <p class="category-desc">دفتر ازدواج، مشاوره و سفره عقد</p>
            <div class="category-card-footer">
              <span class="vendor-count">+۵ کسب‌وکار</span>
              <span class="subgroups-link">مشاهده زیرگروه‌ها ←</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="category-card" onclick="openCategorySubgroupsModal('gold_shopping')">
            <div class="category-badge">۵ زیرگروه</div>
            <div class="category-icon-box">
              <svg width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3v6M2 9h20"/></svg>
            </div>
            <h3 class="category-title">طلا، خرید و خدمات جانبی</h3>
            <p class="category-desc">حلقه، طلا و خدمات مسافرتی</p>
            <div class="category-card-footer">
              <span class="vendor-count">+۱۰ کسب‌وکار</span>
              <span class="subgroups-link">مشاهده زیرگروه‌ها ←</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="category-card" onclick="openCategorySubgroupsModal('beauty_style')">
            <div class="category-badge">۶ زیرگروه</div>
            <div class="category-icon-box">
              <svg width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-2z"/><path d="M19 11v1a7 7 0 0 1-14 0v-1M12 19v3"/></svg>
            </div>
            <h3 class="category-title">زیبایی و استایل زوجین</h3>
            <p class="category-desc">آرایشگاه زنانه، مزون و پوشاک</p>
            <div class="category-card-footer">
              <span class="vendor-count">+۱۵ کسب‌وکار</span>
              <span class="subgroups-link">مشاهده زیرگروه‌ها ←</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="category-card" onclick="openCategorySubgroupsModal('photo_music')">
            <div class="category-badge">۹ زیرگروه</div>
            <div class="category-icon-box">
              <svg width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <h3 class="category-title">ثبت لحظات و موسیقی</h3>
            <p class="category-desc">عکاسی، فیلمبرداری و موزیک</p>
            <div class="category-card-footer">
              <span class="vendor-count">+۱۲ کسب‌وکار</span>
              <span class="subgroups-link">مشاهده زیرگروه‌ها ←</span>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="category-card" onclick="openCategorySubgroupsModal('venue_catering')">
            <div class="category-badge">۶ زیرگروه</div>
            <div class="category-icon-box">
              <svg width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
            </div>
            <h3 class="category-title">مکان، تشریفات و پذیرایی</h3>
            <p class="category-desc">تالار، خدمات غذا و پذیرایی</p>
            <div class="category-card-footer">
              <span class="vendor-count">+۴ کسب‌وکار</span>
              <span class="subgroups-link">مشاهده زیرگروه‌ها ←</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. QUICK TOOLS SHORTCUTS ("میان‌برهای سریع مدیریت مراسم و دعوت مهمانان") -->
      <section class="quick-tools-section">
        <div class="container text-center">
          <span class="sub-title flex items-center justify-center gap-1.5 mx-auto w-fit"><i data-lucide="wrench" class="w-3.5 h-3.5 text-[#D4AF37]"></i> ابزارهای هوشمند برنامه‌ریزی عروسی</span>
          <h2>میان‌برهای سریع مدیریت مراسم و دعوت مهمانان</h2>
          <div class="tools-grid-4">
            <div class="tool-card" onclick="switchTab('planner')">
              <div class="tool-icon text-[#D4AF37] mb-2 flex justify-end"><i data-lucide="calendar-check" class="w-8 h-8"></i></div>
              <h3>چک‌لیست ۱۲ ماهه</h3>
              <p>مدیریت گام‌به‌گام کارهای ضروری از ۱۲ ماه قبل تا شب مراسم</p>
            </div>
            <div class="tool-card" onclick="switchTab('tools')">
              <div class="tool-icon text-[#D4AF37] mb-2 flex justify-end"><i data-lucide="calculator" class="w-8 h-8"></i></div>
              <h3>مدیریت بودجه AI</h3>
              <p>محاسبه هوشمند هزینه‌ها و شیرینی‌پزی مبتنی بر یزد</p>
            </div>
            <div class="tool-card" onclick="switchTab('guests')">
              <div class="tool-icon text-[#D4AF37] mb-2 flex justify-end"><i data-lucide="users" class="w-8 h-8"></i></div>
              <h3>مدیریت مهمانان & RSVP</h3>
              <p>پیگیری وضعیت حضور مدعوین و ثبت هدایای نقدی</p>
            </div>
            <div class="tool-card" onclick="switchTab('invitation')">
              <div class="tool-icon text-[#D4AF37] mb-2 flex justify-end"><i data-lucide="mail" class="w-8 h-8"></i></div>
              <h3>کارت دعوت دیجیتال</h3>
              <p>ارسال کارت آنلاین با آدرس نقشه، منوی غذا و موزیک</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. BUDGET CALCULATOR BANNER ("محاسبه تخمینی بودجه عروسی در استان یزد") -->
      <section class="budget-calculator-section">
        <div class="dark-calc-card">
          <div class="calc-top-row">
            <a href="#" onclick="switchTab('tools'); return false;" class="btn-gold-sm flex items-center gap-1">ورود به بودجه‌ریز کامل AI <i data-lucide="arrow-left" class="w-4 h-4"></i></a>
            <div class="calc-title-box">
              <span class="calc-badge flex items-center gap-1.5"><i data-lucide="bar-chart-3" class="w-3.5 h-3.5 text-[#D4AF37]"></i> پیش‌بینی هوشمند هزینه مراسم</span>
              <h3>محاسبه تخمینی بودجه عروسی در استان یزد</h3>
            </div>
          </div>

          <div class="calc-main-content">
            <div class="calc-result-box">
              <span>برآورد کل هزینه‌های اصلی مراسم:</span>
              <h2 id="home-calc-result-price">۳۸۰,۰۰۰,۰۰۰ تومان</h2>
              <small>شامل ورودی تالار، شام، آتلیه، آرایشگاه، مزون لباس و شیرینی‌سرای یزد</small>
            </div>

            <div class="calc-controls-box">
              <div class="slider-row">
                <span id="home-calc-guest-tag" class="val-tag">250 نفر</span>
                <label>تعداد مهمانان تخمینی:</label>
              </div>
              <input type="range" id="home-calc-range" min="50" max="1000" step="25" value="250" oninput="updateHomeQuickBudget()" class="custom-range-slider cursor-pointer">

              <div class="style-row">
                <label>سطح تشریفات و خدمات:</label>
                <div class="style-btns">
                  <button type="button" onclick="setHomeCalcStyle('luxury')" id="home-style-luxury" class="s-btn flex items-center justify-center gap-1 cursor-pointer"><i data-lucide="gem" class="w-3.5 h-3.5 text-[#D4AF37]"></i> لوکس / VIP</button>
                  <button type="button" onclick="setHomeCalcStyle('medium')" id="home-style-medium" class="s-btn active flex items-center justify-center gap-1 cursor-pointer"><i data-lucide="star" class="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"></i> متوسط</button>
                  <button type="button" onclick="setHomeCalcStyle('economic')" id="home-style-economic" class="s-btn flex items-center justify-center gap-1 cursor-pointer"><i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#D4AF37]"></i> اقتصادی</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. WHY CHOOSE US ("چرا زوج‌های یزدی عروسی تو را انتخاب می‌کنند؟") -->
      <section class="why-us-section">
        <div class="container text-center">
          <h2>چرا زوج‌های یزدی "عروسی تو" را انتخاب می‌کنند؟</h2>
          <p class="section-subtext">پلتفرمی امن و هوشمند جهت تجربه‌ای بی‌دغدغه در برنامه‌ریزی رویاپردازی‌ترین جشن زندگی</p>

          <div class="why-grid-4">
            <div class="why-card">
              <div class="why-icon"><i data-lucide="shield-check" class="w-6 h-6"></i></div>
              <h3>کسب‌وکارهای تاییدشده یزد</h3>
              <p>استعلام جواز کسب، بررسی سوابق و اصالت‌سنجی کامل تمامی تامین‌کنندگان استان یزد</p>
            </div>
            <div class="why-card">
              <div class="why-icon"><i data-lucide="tag" class="w-6 h-6"></i></div>
              <h3>تضمین بهترین قیمت</h3>
              <p>ارائه پکیج‌های شفاف، قیمت بدون هزینه پنهان و تضمین قیمت عادلانه در بازار یزد</p>
            </div>
            <div class="why-card">
              <div class="why-icon"><i data-lucide="bot" class="w-6 h-6"></i></div>
              <h3>ابزارهای هوشمند AI</h3>
              <p>چک‌لیست ۱۲ ماهه، بودجه‌ریز تخصصی و کارت دعوت دیجیتال با RSVP</p>
            </div>
            <div class="why-card">
              <div class="why-icon"><i data-lucide="headphones" class="w-6 h-6"></i></div>
              <h3>پشتیبانی اختصاصی</h3>
              <p>مشاوره تلفنی و آنلاین گام‌به‌گام در برنامه‌ریزی تا شب برگزاری مراسم</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. REAL WEDDINGS GALLERY ("گالری و روایت عروسی‌های واقعی استان یزد") -->
      <section class="weddings-gallery-section">
        <div class="container">
          <div class="gallery-top-bar">
            <a href="#" onclick="switchTab('inspiration'); return false;" class="btn-gold-sm flex items-center gap-1">مشاهده مجله ایده‌ها & مودبورد <i data-lucide="arrow-left" class="w-4 h-4"></i></a>
            <div class="gallery-titles">
              <span class="rose-tag flex items-center gap-1 justify-end"><i data-lucide="heart" class="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]"></i> داستان‌های واقعی پیوند عشاق یزد</span>
              <h2>گالری و روایت عروسی‌های واقعی استان یزد</h2>
            </div>
          </div>

          <div class="gallery-grid-3">
            <div class="wedding-card">
              <div class="img-box">
                <span class="location-badge">صفائیه یزد</span>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500" alt="عروسی">
              </div>
              <div class="card-info">
                <h3>جشن عروسی زمردین: امیر & مریم</h3>
                <p>مراسم باشکوه در باغ تالار مشیرالممالک با تم زمردی و گل‌آرایی مگنولیا</p>
              </div>
            </div>

            <div class="wedding-card">
              <div class="img-box">
                <span class="location-badge">کویر سندباد یزد</span>
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500" alt="فرمالیته">
              </div>
              <div class="card-info">
                <h3>فرمالیته طلایی کویر: رضا & سارا</h3>
                <p>عکاسی فرمالیته روی رمل‌های طلایی کویر یزد توسط استودیو تخصصی کویر</p>
              </div>
            </div>

            <div class="wedding-card">
              <div class="img-box">
                <span class="location-badge">بافت تاریخی یزد</span>
                <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500" alt="عقد سنتی">
              </div>
              <div class="card-info">
                <h3>عقد سنتی در خانه تاریخی: مهدی & زهرا</h3>
                <p>سفره عقد اسلیمی و پذیرایی اصیل با شیرینی سنتی حاج خلیفه رهبر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. VENDOR REGISTRATION BANNER ("کسب‌وکار عروسی خود را به ۱۵,۰۰۰+ زوج یزدی معرفی کنید") -->
      <section class="vendor-banner-dark">
        <div class="container flex-banner">
          <div class="banner-btns">
            <a href="#" onclick="toggleVendorModalStatic(true); return false;" class="btn-gold-md flex items-center gap-1.5"><i data-lucide="plus-circle" class="w-4 h-4"></i> ثبت‌نام رایگان کسب‌وکار</a>
            <a href="#" onclick="switchRole('vendor'); return false;" class="btn-dark-md flex items-center gap-1.5"><i data-lucide="building-2" class="w-4 h-4"></i> ورود به پنل تامین‌کننده</a>
          </div>
          <div class="banner-info">
            <span class="badge-gold flex items-center gap-1 justify-end"><i data-lucide="award" class="w-3.5 h-3.5 text-[#D4AF37]"></i> ویژه صاحب‌امتیازان تالار، آتلیه، سالن زیبایی و خدمات مجالس یزد</span>
            <h2>کسب‌وکار عروسی خود را به ۱۵,۰۰۰+ زوج یزدی معرفی کنید</h2>
            <p>با ثبت‌نام در پلتفرم عروسی تو، دریافت نشان تاییدیه رسمی و مدیریت استعلام‌های آنلاین رزرو، درآمد خود را افزایش دهید.</p>
          </div>
        </div>
      </section>

    </div>`;
const DIRECTORY_VIEW_HTML = `<!-- ISOLATED VENDOR DIRECTORY CONTENT MODULE (directory-view.html) -->
<div id="tab-directory" class="tab-content hidden space-y-8">

  <!-- HEADER BREADCRUMB & TOP CONTROL BAR -->
  <div class="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-accent pb-4">
      <div class="space-y-1">
        <nav class="flex items-center gap-2 text-xs text-secondary font-bold mb-1">
          <button onclick="switchTab('home')" class="hover:text-primary transition-colors cursor-pointer">خانه</button>
          <span>/</span>
          <span class="text-graphite">دایرکتوری جامع تامین‌کنندگان یزد</span>
        </nav>
        <h1 class="text-2xl sm:text-3xl font-black text-graphite flex items-center gap-2.5">
          <i data-lucide="building-2" class="w-7 h-7 text-primary"></i>
          <span>دایرکتوری جامع تامین‌کنندگان و خدمات عروسی استان یزد</span>
        </h1>
        <p class="text-xs text-secondary font-medium">بررسی پروفایل رسمی، گالری تصاویر، لیست قیمت و استعلام آنلاین رزرو</p>
      </div>

      <button onclick="switchTab('home')" class="bg-bgCustom hover:bg-slate-100 text-graphite border border-accent px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs shrink-0 cursor-pointer">
        <i data-lucide="arrow-right" class="w-4 h-4 text-primary"></i>
        <span>بازگشت به صفحه اصلی</span>
      </button>
    </div>

    <!-- Active Filter Chips Container -->
    <div class="flex items-center justify-between gap-3 pt-2 text-xs font-bold flex-wrap">
      <div class="flex items-center gap-2 flex-wrap" id="active-category-chips">
        <span class="text-secondary">فیلترهای فعال:</span>
        <div id="active-category-pills" class="flex items-center gap-1.5 flex-wrap">
          <!-- Dynamic Category Pills rendered by renderMultiCategoryPills() -->
        </div>
      </div>

      <button onclick="resetAllCategoryFilters()" class="text-xs font-bold text-rose-600 hover:text-rose-800 transition-colors flex items-center gap-1 cursor-pointer">
        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
        <span>پاک کردن همه فیلترها</span>
      </button>
    </div>
  </div>

  <!-- DIRECTORY MAIN 2-COLUMN LAYOUT -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

    <!-- SIDEBAR ADVANCED FILTERS (col-span-12 lg:col-span-3) -->
    <aside class="lg:col-span-3 space-y-6 bg-white border border-accent rounded-3xl p-5 shadow-xs sticky top-28 directory-sidebar">
      <div class="flex items-center justify-between border-b border-accent pb-3">
        <h3 class="text-sm font-black text-graphite flex items-center gap-2">
          <i data-lucide="filter" class="w-4 h-4 text-primary"></i>
          <span>فیلترهای پیشرفته</span>
        </h3>
        <button onclick="resetAllCategoryFilters()" class="text-[11px] font-bold text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer">
          پاکسازی همه
        </button>
      </div>

      <!-- Verified Badge Toggle Switch -->
      <div class="p-3 bg-[#1B3B2B]/5 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-[#D4AF37]"></i>
          <span class="text-xs font-bold text-[#1B3B2B]">فقط تامین‌کنندگان تاییدشده</span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="verified-only" checked onchange="filterVendors()" class="sr-only peer">
          <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1B3B2B]"></div>
        </label>
      </div>

      <!-- Category & Subgroup Accordions / Multi-Select Checklist -->
      <div class="space-y-3">
        <label class="text-xs font-extrabold text-graphite block flex items-center justify-between">
          <span>دسته‌بندی خدمات:</span>
          <span class="text-[10px] text-secondary font-normal">(چند انتخابی)</span>
        </label>
        <div id="sidebar-category-checkboxes" class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar text-xs font-bold text-graphite pr-1">
          <!-- Populated dynamically via JS -->
        </div>
      </div>

      <!-- Capacity Range Slider -->
      <div class="space-y-2 pt-3 border-t border-accent">
        <div class="flex justify-between items-center text-xs font-extrabold text-graphite">
          <span>ظرفیت پذیرش (مهمان):</span>
          <span id="sidebar-capacity-val" class="text-primary font-black">همه ظرفیت‌ها</span>
        </div>
        <input type="range" id="sidebar-capacity-slider" min="50" max="1000" step="50" value="1000" oninput="updateCapacitySliderLabel(this.value); filterVendors();" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1B3B2B]">
        <div class="flex justify-between text-[10px] text-secondary font-semibold">
          <span>۵۰ نفر</span>
          <span>۱,۰۰۰+ نفر</span>
        </div>
      </div>

      <!-- City / District Selector -->
      <div class="space-y-2 pt-3 border-t border-accent">
        <label for="sidebar-city-select" class="text-xs font-extrabold text-graphite block">شهر / منطقه یزد:</label>
        <select id="sidebar-city-select" onchange="syncAndFilterCity(this.value)" class="w-full bg-bgCustom border border-accent rounded-xl p-2.5 text-xs font-bold text-graphite focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:border-[#D4AF37] cursor-pointer">
          <option value="استان یزد" selected>همه مناطق استان یزد 📍</option>
          <option value="صفائیه">صفائیه یزد</option>
          <option value="میدان اطلسی">میدان اطلسی</option>
          <option value="خیابان کاشانی">خیابان کاشانی & ملاصدرا</option>
          <option value="بافت تاریخی">بافت تاریخی یزد</option>
          <option value="میبد">میبد</option>
          <option value="اردکان">اردکان</option>
          <option value="تفت">تفت</option>
        </select>
      </div>

      <!-- Price Range Selector -->
      <div class="space-y-2 pt-3 border-t border-accent">
        <label for="sidebar-price-select" class="text-xs font-extrabold text-graphite block">بازه قیمتی:</label>
        <select id="sidebar-price-select" onchange="syncAndFilterPrice(this.value)" class="w-full bg-bgCustom border border-accent rounded-xl p-2.5 text-xs font-bold text-graphite focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:border-[#D4AF37] cursor-pointer">
          <option value="all" selected>همه بازه‌های قیمتی</option>
          <option value="economic">اقتصادی 💰</option>
          <option value="mid">متوسط 💰💰</option>
          <option value="luxury">لوکس 💰💰💰</option>
        </select>
      </div>

      <!-- Feature Checkboxes -->
      <div class="space-y-2 pt-3 border-t border-accent text-xs font-bold text-graphite">
        <label class="block text-xs font-extrabold text-graphite mb-2">امکانات و ویژگی‌های خاص:</label>
        <div class="space-y-2">
          <label class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input type="checkbox" id="feat-parking" onchange="filterVendors()" class="rounded text-[#1B3B2B] focus:ring-[#1B3B2B] w-4 h-4">
            <span>پارکینگ اختصاصی</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input type="checkbox" id="feat-sofreh" onchange="filterVendors()" class="rounded text-[#1B3B2B] focus:ring-[#1B3B2B] w-4 h-4">
            <span>سفره عقد سنتی & VIP</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input type="checkbox" id="feat-garden" onchange="filterVendors()" class="rounded text-[#1B3B2B] focus:ring-[#1B3B2B] w-4 h-4">
            <span>فضای باز & باغ اختصاصی</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <input type="checkbox" id="feat-catering" onchange="filterVendors()" class="rounded text-[#1B3B2B] focus:ring-[#1B3B2B] w-4 h-4">
            <span>کترینگ و پذیرایی VIP</span>
          </label>
        </div>
      </div>
    </aside>

    <!-- MAIN DIRECTORY CONTENT (col-span-12 lg:col-span-9) -->
    <div class="lg:col-span-9 space-y-6">

      <!-- Sorting & View Controls Bar -->
      <div id="vendor-sorting-bar" class="bg-white border border-accent rounded-2xl p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold text-graphite">
        <!-- Instant Search Box -->
        <div class="relative flex-1 max-w-md">
          <i data-lucide="search" class="w-4 h-4 text-primary absolute right-3 top-2.5"></i>
          <input type="text" id="directory-instant-search" oninput="filterVendors()" placeholder="جستجوی نام تالار، آتلیه یا مزون..." class="w-full bg-bgCustom border border-accent rounded-xl pr-9 pl-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:border-[#D4AF37]">
        </div>

        <div class="flex items-center gap-4 shrink-0 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
          <div class="flex items-center gap-2">
            <span class="text-secondary">نتایج:</span>
            <span id="directory-vendor-count-badge" class="bg-[#1B3B2B]/10 text-[#1B3B2B] border border-[#1B3B2B]/20 text-xs font-black px-2.5 py-1 rounded-xl">
              نمایش ۴۸ تامین‌کننده در استان یزد
            </span>
          </div>

          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1.5">
              <label for="vendor-sort-select" class="text-secondary shrink-0">مرتب‌سازی:</label>
              <select id="vendor-sort-select" onchange="filterVendors()" class="bg-bgCustom border border-accent rounded-xl px-3 py-1.5 text-xs font-bold text-graphite focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:border-[#D4AF37] cursor-pointer">
                <option value="popular" selected>محبوب‌ترین ⭐</option>
                <option value="newest">جدیدترین 🆕</option>
                <option value="price-asc">ارزان‌ترین 📈</option>
                <option value="price-desc">گران‌ترین 📉</option>
              </select>
            </div>

            <!-- View Layout Toggle Icons (Grid / List) -->
            <div class="flex items-center bg-bgCustom border border-accent rounded-xl p-1 gap-1">
              <button type="button" id="view-mode-grid" onclick="setDirectoryViewMode('grid')" class="p-1.5 rounded-lg bg-[#1B3B2B] text-white shadow-2xs transition-all cursor-pointer" title="نمای شبکه‌ای">
                <i data-lucide="grid" class="w-4 h-4"></i>
              </button>
              <button type="button" id="view-mode-list" onclick="setDirectoryViewMode('list')" class="p-1.5 rounded-lg text-secondary hover:text-graphite transition-all cursor-pointer" title="نمای لیستی">
                <i data-lucide="list" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dynamic Vendor Grid -->
      <div id="vendor-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Populated dynamically via JS -->
      </div>

    </div>

  </div>

</div>
`;

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
    try {
      const res = await fetch("directory-view.html");
      if (res.ok) {
        directoryView.innerHTML = await res.text();
      } else {
        directoryView.innerHTML = DIRECTORY_VIEW_HTML;
      }
    } catch (e) {
      directoryView.innerHTML = DIRECTORY_VIEW_HTML;
    }
  }

  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

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

    let vendors = [
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

      // ۶ تا ۳ ماه قبل
      { id: "chk-4", title: "تست آرایش و گریم عروس در سالن‌های زیبایی لوکس یزد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۵ ماه قبل", priority: "urgent", category: "سالن زیبایی", attachedVendorId: 3, vendorStatus: "quote_received" },
      { id: "chk-5", title: "سفارش و دوخت سفارشی لباس عروس در مزون‌های تخصصی یزد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۴ ماه قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: 4, vendorStatus: "deposit_paid" },
      { id: "chk-6", title: "خرید حلقه‌های ازدواج و سرویس طلا از بازار خان یزد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۳ ماه قبل", priority: "suggested", category: "طلافروشی و جواهرفروشی", attachedVendorId: 8, vendorStatus: "quote_received" },

      // ۱ ماه قبل
      { id: "chk-7", title: "رزرو کیک و شیرینی‌های سنتی اصیل یزد (قطاب، باقلوا حاج خلیفه)", timeframe: "۱ ماه قبل", completed: false, dueDate: "۳ هفته قبل", priority: "urgent", category: "کیک و شیرینی‌فروشی", attachedVendorId: 7, vendorStatus: "quote_received" },
      { id: "chk-8", title: "طراحی، تنظیم آدرس نقشه و ارسال کارت دعوت دیجیتال با سیستم RSVP", timeframe: "۱ ماه قبل", completed: false, dueDate: "۲ هفته قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-9", title: "هماهنگی گل‌آرایی ماشین عروس و سفره عقد سنتی/VIP", timeframe: "۱ ماه قبل", completed: false, dueDate: "۱۰ روز قبل", priority: "suggested", category: "گل‌آرایی و ماشین عروس", attachedVendorId: null, vendorStatus: null },

      // هفته و روز قبل
      { id: "chk-10", title: "هماهنگی نهایی سینک زمانی با مدیریت تالار، آتلیه و موزیک", timeframe: "هفته و روز قبل", completed: false, dueDate: "۳ روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-11", title: "تسویه‌حساب‌ها، تحویل‌ها و آرامش قبل از شب جشن عروسی", timeframe: "هفته و روز قبل", completed: false, dueDate: "روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null }
    ];

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
    let guestListState = [
      { id: "g-1", name: "دکتر حمیدرضا احمدی", side: "فامیل عروس", phone: "09121112233", companions: 2, table: "میز VIP ۱", status: "CONFIRMED" },
      { id: "g-2", name: "مهندس سارا نوری", side: "دوستان مشترک", phone: "09123334455", companions: 1, table: "میز ۴", status: "CONFIRMED" },
      { id: "g-3", name: "حاج محمود کریمی", side: "فامیل داماد", phone: "09125556677", companions: 3, table: "میز VIP ۲", status: "PENDING" },
      { id: "g-4", name: "استاد علی اکبر علوی", side: "همکاران", phone: "09127778899", companions: 1, table: "میز ۷", status: "DECLINED" },
      { id: "g-5", name: "مریم و نیما حسینی", side: "فامیل عروس", phone: "09128889900", companions: 2, table: "میز ۲", status: "CONFIRMED" }
    ];

    let giftLedgerState = [
      { id: "gift-1", guestName: "دکتر حمیدرضا احمدی", type: "نقدی", amount: 15000000, method: "کارت به کارت / پاکت نقدی", notes: "پاکت طلاکوب با یادداشت آرزوی خوشبختی" },
      { id: "gift-2", guestName: "مهندس سارا نوری", type: "واریز آنلاین کارت دعوت", amount: 10000000, method: "واریز آنلاین کارت دعوت", notes: "پرداخت مستقیم از درگاه درگاه آنلاین" },
      { id: "gift-3", guestName: "حاج محمود کریمی", type: "سکه طلا", amount: 35000000, method: "تحویل حضوری در سالن", notes: "یک عدد سکه کامل بهار آزادی" }
    ];

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
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold"><i data-lucide="check" class="w-3 h-3"></i> تایید شده</span>';
        } else if (g.status === "DECLINED") {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold"><i data-lucide="x" class="w-3 h-3"></i> عذرخواهی کرده</span>';
        } else {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold"><i data-lucide="clock" class="w-3 h-3"></i> در انتظار</span>';
        }

        const waMessage = encodeURIComponent("سلام " + g.name + " عزیز، کارت دعوت دیجیتال عروسی ما آماده است. خوشحال می‌شویم با کلیک روی لینک زیر حضور گرم خود را اعلام فرمایید:");
        const waLink = "https://wa.me/" + g.phone.replace(/^0/, "98") + "?text=" + waMessage;

        return `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="p-3.5">
              <div class="font-bold text-graphite">${g.name}</div>
              <span class="inline-block mt-0.5 text-[10px] bg-slate-100 text-secondary border border-accent px-2 py-0.5 rounded-md">${g.side}</span>
            </td>
            <td class="p-3.5">
              <div class="text-xs text-graphite font-mono">${g.phone}</div>
              <a href="${waLink}" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-900 font-bold mt-0.5">
                <i data-lucide="send" class="w-3 h-3"></i> ارسال کارت در واتساپ
              </a>
            </td>
            <td class="p-3.5 text-center font-bold">
              + ${g.companions} همراه
            </td>
            <td class="p-3.5 text-center">
              <span class="bg-emerald-50 text-primary border border-emerald-200 px-2.5 py-1 rounded-lg text-xs font-bold">${g.table || "تعیین نشده"}</span>
            </td>
            <td class="p-3.5 text-center">
              ${statusBadge}
            </td>
            <td class="p-3.5 text-center">
              <div class="flex items-center justify-center gap-1.5">
                <button onclick="toggleGuestRsvp('${g.id}')" title="تغییر سریع وضعیت RSVP" class="p-1.5 rounded-lg bg-bgCustom hover:bg-slate-200 border border-accent text-primary">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="editGuest('${g.id}')" title="ویرایش مهمان" class="p-1.5 rounded-lg bg-bgCustom hover:bg-slate-200 border border-accent text-graphite">
                  <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="deleteGuest('${g.id}')" title="حذف مهمان" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600">
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
        <tr class="hover:bg-slate-50/80 transition-colors">
          <td class="p-3.5 font-bold text-graphite">${g.guestName}</td>
          <td class="p-3.5">
            <span class="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold">${g.type}</span>
          </td>
          <td class="p-3.5 font-black text-primary">${(parseInt(g.amount) || 0).toLocaleString("fa-IR")} تومان</td>
          <td class="p-3.5 text-secondary font-medium">${g.method}</td>
          <td class="p-3.5 text-xs text-graphite">${g.notes || "-"}</td>
          <td class="p-3.5 text-center">
            <button onclick="deleteGift('${g.id}')" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600">
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
      if (typeof bwState !== 'undefined' && bwState.services) {
        bwState.services.filter(s => s.active).forEach(s => {
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
      } else if (tabId === 'directory') {
        if (homeView) homeView.classList.add('hidden');
        if (directoryView) directoryView.classList.remove('hidden');
        if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
        if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
        if (typeof filterVendors === 'function') filterVendors();
      } else {
        if (homeView) homeView.classList.add('hidden');
        if (directoryView) directoryView.classList.add('hidden');
      }

      if (tabId === 'guests') renderGuestsAndGifts();
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
            <div class="p-4 bg-white rounded-2xl border border-accent/80 text-xs text-graphite leading-relaxed space-y-2">
              <span class="font-bold text-primary block text-sm">راهنمای بصری و دکوراسیون پیشنهادی:</span>
              <p>${styleDescriptions[dominantKey]}</p>
            </div>

            <!-- COLOR PALETTE SWATCHES -->
            <div class="space-y-2">
              <span class="block text-xs font-bold text-graphite">پالت رنگی پیشنهادی برای تزئینات و گل‌آرایی:</span>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${currentPalette.map(c => `
                  <div class="p-2.5 bg-white rounded-xl border border-accent flex items-center gap-2.5 shadow-xs">
                    <div class="w-8 h-8 rounded-lg border border-accent shadow-xs shrink-0" style="background-color: ${c.hex}"></div>
                    <div>
                      <span class="block text-xs font-bold text-graphite">${c.name}</span>
                      <span class="text-[10px] text-secondary font-mono dir-ltr block">${c.hex}</span>
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

              <div class="text-left dir-ltr bg-white p-4 rounded-2xl border border-[#E0D8C8] shadow-xs shrink-0">
                <span class="block text-3xl font-black text-[#1B3B2B]">${scorePercent}٪</span>
                <span class="text-[10px] font-bold text-secondary">امتیاز نهایی آمادگی</span>
              </div>
            </div>

            <!-- KEY STRENGTHS & GROWTH AREAS GRID -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- STRENGTHS -->
              <div class="bg-emerald-50/60 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <h4 class="font-bold text-[#1B3B2B] text-xs flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                  <span>نقاط قوت و دارایی‌های ارتباطی زوج:</span>
                </h4>
                <ul class="space-y-2 text-xs text-graphite font-medium">
                  ${strengths.map(s => `
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">•</span>
                      <span>${s}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- GROWTH AREAS -->
              <div class="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl space-y-3">
                <h4 class="font-bold text-amber-900 text-xs flex items-center gap-2">
                  <i data-lucide="trending-up" class="w-4 h-4 text-amber-600"></i>
                  <span>محورهای پیشنهادی برای گفتگو و رشد:</span>
                </h4>
                <ul class="space-y-2 text-xs text-graphite font-medium">
                  ${growthAreas.map(g => `
                    <li class="flex items-start gap-2">
                      <span class="text-amber-600 font-bold">•</span>
                      <span>${g}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- EXPERT ADVICE BANNER -->
            <div class="p-5 bg-white rounded-2xl border border-[#E0D8C8] space-y-2">
              <span class="text-xs font-bold text-[#1B3B2B] flex items-center gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-[#D4AF37]"></i>
                <span>توصیه راهبردی مشاور خانواده عروسی تو:</span>
              </span>
              <p class="text-xs text-graphite leading-relaxed font-medium">${expertAdvice}</p>
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
                  isSelected ? 'bg-primary/10 border-primary shadow-md' : 'bg-bgCustom border-accent hover:border-primary/50'
                }">
                  <div class="aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-accent">
                    <img src="${opt.image}" alt="${opt.label}" class="w-full h-full object-cover">
                  </div>
                  <div class="flex items-center justify-between text-xs font-bold text-graphite">
                    <span class="leading-snug">${opt.label}</span>
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-primary bg-primary text-white' : 'border-secondary/40'
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
                  isSelected ? 'bg-primary/10 border-primary shadow-md' : 'bg-bgCustom border-accent hover:border-primary/50'
                }">
                  <span class="text-xs sm:text-sm font-bold text-graphite leading-relaxed">${opt.label}</span>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-primary bg-primary text-white' : 'border-secondary/40'
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
              <div class="p-3 pt-0 border-t border-accent/40 mt-2 space-y-2 text-xs font-bold">
                <button type="button" onclick="setPortfolioAsCover('${item.id}')" class="w-full ${isCover ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-white hover:bg-emerald-50 text-graphite border border-accent'} py-1.5 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                  <i data-lucide="star" class="w-3.5 h-3.5 text-primary"></i>
                  <span>${isCover ? 'کاور اصلی فعال است' : 'انتخاب به‌عنوان کاور'}</span>
                </button>
                <div class="flex items-center justify-between gap-2">
                  <button type="button" onclick="openPortfolioModal('${item.id}')" class="flex-1 bg-white hover:bg-slate-100 text-graphite border border-accent py-1.5 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                    <i data-lucide="edit-2" class="w-3.5 h-3.5 text-primary"></i>
                    <span>ویرایش</span>
                  </button>
                  <button type="button" onclick="deletePortfolioItem('${item.id}')" class="bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 py-1.5 px-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
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
              ${pkg.requirements ? `<p class="text-[10px] font-bold text-amber-900 bg-amber-50 p-1.5 rounded-lg border border-amber-200 mt-1">📌 شرط/الزام: ${pkg.requirements}</p>` : ''}
            </div>

            <div class="flex items-center justify-end gap-2 pt-2 border-t border-accent/60">
              <button onclick="editVendorPackage(${idx})" class="bg-white hover:bg-emerald-50 text-primary border border-primary/30 font-bold px-3 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1">
                <i data-lucide="edit-2" class="w-3 h-3"></i> ویرایش
              </button>
              <button onclick="deletePackage('${pkg.id}')" class="bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 font-bold px-3 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1">
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
          filterVendorsByCategoryTitle(sub.title);
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
      switchTab('directory');
      filterVendorsByCategoryTitle(title);
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
      if (typeof renderVendors === 'function' && typeof filteredVendors !== 'undefined') {
        renderVendors(filteredVendors);
      }
      if (typeof window.renderFloatingComparisonBar === 'function') {
        window.renderFloatingComparisonBar();
      }
      showToast('لیست مقایسه خالی شد.', 'info');
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

    function updateCapacitySliderLabel(val) {
      const lbl = document.getElementById('sidebar-capacity-val');
      if (lbl) {
        lbl.textContent = val >= 1000 ? 'همه ظرفیت‌ها' : `تا ${val} نفر`;
      }
    }

    function renderVendors(list) {
      const grid = document.getElementById('vendor-grid');
      if (!grid) return;
      grid.innerHTML = '';

      if (directoryViewMode === 'list') {
        grid.className = "flex flex-col gap-3";
      } else {
        grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";
      }

      list.forEach(v => {
        const card = document.createElement('div');
        const isComparing = selectedComparisonVendorIds.includes(v.id);

        const borderClasses = isComparing
          ? "border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          : "border border-[#D4AF37]/30 hover:border-[#D4AF37]";

        if (directoryViewMode === 'list') {
          card.className = `minimal-vendor-card bg-[#0F172A]/90 backdrop-blur-md ${borderClasses} rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col md:flex-row group cursor-pointer relative`;
        } else {
          card.className = `minimal-vendor-card bg-[#0F172A]/90 backdrop-blur-md ${borderClasses} rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative`;
        }
        card.setAttribute('onclick', `openVendorDetailModal(${v.id})`);

        const localTag = v.district || "صفائیه، یزد";
        const ratingVal = v.rating || 4.9;
        const isFav = favoriteVendorIds.includes(v.id);

        if (directoryViewMode === 'list') {
          card.innerHTML = `
            <div class="relative w-full md:w-64 h-40 overflow-hidden bg-slate-900 shrink-0">
              <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40"></div>

              <!-- Top Floating Pills -->
              <div class="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                <span class="bg-black/60 backdrop-blur-md text-amber-200 border border-[#D4AF37]/40 text-[9.5px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  ${v.category}
                </span>
              </div>

              <div class="absolute top-2.5 left-2.5 flex items-center gap-1 z-10" onclick="event.stopPropagation()">
                <button type="button" onclick="open360TourModal(${v.id})" class="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#1E293B]/90 text-amber-200 border border-[#D4AF37]/50 backdrop-blur-md flex items-center gap-1 shadow-xs hover:scale-105 cursor-pointer">
                  <span>360°</span>
                </button>

                <div class="bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                  <span>${ratingVal}</span>
                </div>
              </div>
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between space-y-2 text-right">
              <div>
                <div class="flex justify-between items-start gap-2">
                  <h3 class="text-sm sm:text-base font-black text-white group-hover:text-[#D4AF37] transition-colors leading-tight">${v.name}</h3>
                  <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="text-rose-500 hover:scale-110 transition-transform cursor-pointer" title="نشان‌شده">
                    <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-rose-500' : ''}"></i>
                  </button>
                </div>
                <span class="text-[11px] text-slate-300 font-medium block mt-1">📍 ${localTag}</span>
              </div>

              <div class="flex items-center justify-between pt-2 border-t border-slate-800 gap-2">
                <span class="text-[#D4AF37] font-black text-xs sm:text-sm">${v.priceRange || 'استعلام قیمت'}</span>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="event.stopPropagation(); openQuickViewDrawer(${v.id}, event)" class="bg-[#1E293B] hover:bg-slate-700 text-amber-200 border border-[#D4AF37]/40 text-[11px] font-bold px-2.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1" title="مشاهده سریع">
                    <i data-lucide="eye" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>سریع</span>
                  </button>
                  <button type="button" onclick="event.stopPropagation(); openVendorDetailModal(${v.id})" class="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] text-[11px] font-black px-3 py-1.5 rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer">
                    مشاهده & استعلام
                  </button>
                </div>
              </div>
            </div>
          `;
        } else {
          card.innerHTML = `
            <div>
              <div class="card-img-container relative overflow-hidden bg-slate-900" onmouseenter="startCardImageSlideshow(this, ${v.id})" onmouseleave="stopCardImageSlideshow(this, ${v.id})">
                <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30"></div>

                <!-- Corner Floating Micro-Pills -->
                <!-- Top-Right: Gold Star Rating Badge & Verified Shield Badge -->
                <div class="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                  <div class="bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/60 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                    <span>⭐ ${ratingVal}</span>
                  </div>
                  ${v.verified ? `
                    <div class="bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/60 text-[9.5px] font-black px-2 py-0.5 rounded-full shadow-md flex items-center gap-0.5">
                      <span>تایید شده 🛡️</span>
                    </div>
                  ` : ''}
                </div>

                <!-- Top-Left: Heart, Scales/Compare, and 360 Tour Micro-Icons -->
                <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10" onclick="event.stopPropagation()">
                  <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-rose-500 shadow-sm transition-transform hover:scale-110 active:scale-95 cursor-pointer" title="نشان‌شده">
                    <i data-lucide="heart" class="w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}"></i>
                  </button>

                  <button type="button" onclick="toggleVendorComparison(${v.id}, event)" class="w-7 h-7 rounded-full ${isComparing ? 'bg-[#D4AF37] text-[#0F251A]' : 'bg-black/70 text-amber-200 border border-amber-300/40'} backdrop-blur-md flex items-center justify-center shadow-sm transition-transform hover:scale-110 active:scale-95 cursor-pointer" title="مقایسه تامین‌کننده">
                    <i data-lucide="columns-2" class="w-3.5 h-3.5"></i>
                  </button>

                  <button type="button" onclick="open360TourModal(${v.id})" class="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#1E293B]/90 text-amber-200 border border-[#D4AF37]/50 backdrop-blur-md flex items-center gap-0.5 shadow-xs hover:scale-105 cursor-pointer" title="تور ۳۶۰°">
                    <i data-lucide="compass" class="w-2.5 h-2.5 text-[#D4AF37]"></i>
                    <span>۳۶۰°</span>
                  </button>
                </div>
              </div>

              <!-- Compact Body Content -->
              <div class="p-3 space-y-1.5 text-right">
                <div class="flex justify-between items-start gap-1">
                  <h3 class="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug truncate">${v.name}</h3>
                  <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="text-rose-500 hover:scale-110 transition-transform cursor-pointer shrink-0" title="نشان‌شده">
                    <i data-lucide="heart" class="w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}"></i>
                  </button>
                </div>

                <div class="flex justify-between items-center text-[10.5px] text-slate-300 font-medium">
                  <span>📍 ${localTag}</span>
                  <span class="text-[#D4AF37] font-black text-xs">${v.priceRange || 'استعلام قیمت'}</span>
                </div>
              </div>
            </div>

            <!-- Single Minimal Hover Trigger -->
            <div class="p-3 pt-0 text-right flex items-center gap-2">
              <button type="button" onclick="event.stopPropagation(); openQuickViewDrawer(${v.id}, event)" class="bg-[#1E293B] hover:bg-slate-700 text-amber-200 border border-[#D4AF37]/40 text-[11px] font-bold py-1.5 px-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0" title="مشاهده سریع">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>سریع</span>
              </button>
              <button type="button" onclick="event.stopPropagation(); openVendorDetailModal(${v.id})" class="hover-reveal-btn flex-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] text-[11px] font-black py-1.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer">
                <span>مشاهده و رزرو</span>
                <i data-lucide="chevron-left" class="w-3 h-3 text-[#0F251A]"></i>
              </button>
            </div>
          `;
        }
        grid.appendChild(card);
      });

      lucide.createIcons();
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
          <div class="border border-[#1B3B2B]/20 rounded-2xl overflow-hidden mb-2 bg-[#FCFCFA] shadow-2xs transition-all">
            <!-- Accordion Group Header -->
            <button type="button" onclick="toggleCategoryAccordion('${group.id}')" class="w-full p-2.5 flex items-center justify-between bg-[#F5EFEB]/80 hover:bg-[#F5EFEB] text-right transition-colors cursor-pointer">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs">
                  <i data-lucide="${group.icon || 'grid'}" class="w-3.5 h-3.5"></i>
                </div>
                <span class="text-xs font-extrabold text-[#1B3B2B]">${group.title}</span>
              </div>
              <div class="flex items-center gap-1.5">
                ${activeSubInGroupCount > 0 ? `<span class="text-[10px] font-bold bg-[#D4AF37] text-[#1B3B2B] px-1.5 py-0.5 rounded-full">${activeSubInGroupCount}</span>` : ''}
                <i data-lucide="chevron-down" class="w-4 h-4 text-[#1B3B2B] transition-transform duration-200 ${isGroupExpanded ? 'rotate-180' : ''}"></i>
              </div>
            </button>

            <!-- Sub-Categories Expandable Container -->
            <div class="${isGroupExpanded ? 'block' : 'hidden'} p-2 space-y-1.5 bg-[#FCFCFA] border-t border-[#1B3B2B]/10">
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
        const matchesSearch = !search ||
                              v.name.toLowerCase().includes(search) ||
                              v.category.toLowerCase().includes(search) ||
                              (v.district && v.district.toLowerCase().includes(search)) ||
                              (v.city && v.city.toLowerCase().includes(search));

        let matchesCat = true;
        if (activeCategoryFilters.size > 0) {
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
        if (selectedEventDateFilter && v.blockedDates && Array.isArray(v.blockedDates)) {
          matchesDate = !v.blockedDates.includes(selectedEventDateFilter);
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

      // Apply dynamic sorting
      const sortSelect = document.getElementById('vendor-sort-select');
      const sortMode = sortSelect ? sortSelect.value : 'popular';

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

      ['checklist', 'schedule', 'party', 'forum', 'vendors', 'budget', 'offers'].forEach(key => {
        const btn = document.getElementById('planner-subtab-' + key);
        const panel = document.getElementById('planner-panel-' + key);
        if (btn) {
          if (key === subTabKey) {
            btn.className = "flex-1 py-3 px-3 rounded-xl transition-all bg-primary text-white text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer min-w-[120px]";
          } else {
            btn.className = "flex-1 py-3 px-3 rounded-xl transition-all text-secondary hover:text-graphite hover:bg-slate-50 text-center flex items-center justify-center gap-1.5 cursor-pointer min-w-[120px]";
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
        let statusBadgeClass = "bg-blue-100 text-blue-800 border-blue-200";

        if (t.vendorStatus === 'deposit_paid') {
          statusText = "بیعانه پرداخت شد";
          statusBadgeClass = "bg-amber-100 text-amber-800 border-amber-200";
        } else if (t.vendorStatus === 'finalized') {
          statusText = "نهایی و رزرو شد";
          statusBadgeClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
        }

        const card = document.createElement('div');
        card.className = "bg-bgCustom border border-accent rounded-2xl overflow-hidden shadow-xs space-y-3 flex flex-col justify-between p-4";
        card.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl overflow-hidden border border-accent shrink-0">
                <img src="${vendor.image}" alt="${vendor.name}" class="w-full h-full object-cover">
              </div>
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-graphite">${vendor.name}</h4>
                <p class="text-xs text-secondary font-medium">${vendor.category}</p>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadgeClass}">
                  ${statusText}
                </span>
              </div>
            </div>

            <div class="p-3 bg-white rounded-xl border border-accent/60 space-y-1 text-xs">
              <div class="flex justify-between items-center text-graphite">
                <span class="text-secondary font-medium">اقدام متصل:</span>
                <span class="font-bold text-primary truncate max-w-[160px]">${t.title}</span>
              </div>
              <div class="flex justify-between items-center text-graphite">
                <span class="text-secondary font-medium">حدود قیمت:</span>
                <span class="font-bold">${vendor.priceRange}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-accent/60 flex items-center justify-between gap-2">
            <button onclick="switchTab('vendor-profile')" class="flex-1 bg-white border border-accent hover:border-primary text-graphite py-2 rounded-xl text-xs font-bold transition-colors text-center">
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
        card.className = "bg-bgCustom border border-accent rounded-2xl p-5 space-y-3 shadow-xs hover:border-primary/40 transition-all";
        card.innerHTML = `
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <span class="text-xs font-bold text-secondary block">درخواست ثبت شده برای:</span>
              <h4 class="text-base font-black text-graphite">${inq.vendorName || 'تامین‌کننده مجلل یزد'}</h4>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full ${
              currentStatus === 'booked' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
              currentStatus === 'replied' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
              currentStatus === 'cancelled' ? 'bg-rose-100 text-rose-800 border border-rose-300' :
              'bg-amber-100 text-amber-800 border border-amber-300'
            }">
              ${currentStatus === 'booked' ? 'رزرو نهایی شد 🎉' : currentStatus === 'replied' ? 'پاسخ و پیشنهاد جدید دریافت شد 📩' : currentStatus === 'cancelled' ? 'لغو شده' : 'در انتظار بررسی تامین‌کننده ⏳'}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-xs text-secondary font-medium bg-white p-3 rounded-xl border border-accent/60">
            <span><strong>تاریخ مراسم:</strong> ${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
            <span><strong>تعداد مهمانان:</strong> ${inq.guests || 200} نفر</span>
            <span><strong>پکیج درخواستی:</strong> ${inq.package || inq.service || 'پکیج اصلی'}</span>
          </div>

          ${inq.replyMsg ? `
            <div class="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 space-y-1.5 text-xs text-emerald-900">
              <span class="font-bold text-primary flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-primary"></i>
                <span>پاسخ و کاتالوگ ارسالی تامین‌کننده:</span>
              </span>
              <p class="font-medium leading-relaxed">${inq.replyMsg}</p>
            </div>
          ` : ''}

          <div class="flex justify-end gap-2 pt-1">
            <button onclick="switchTab('messages')" class="bg-primary hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-xs">
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
          priorityBadge = `<span class="bg-rose-100 text-rose-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-rose-200">ضروری</span>`;
        } else if (t.priority === 'suggested') {
          priorityBadge = `<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">پیشنهادی</span>`;
        } else {
          priorityBadge = `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200">اختیاری</span>`;
        }

        let vendorStatusBadge = '';
        if (t.vendorStatus === 'quote_received') {
          vendorStatusBadge = `<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200">پیش‌فاکتور دریافت شد</span>`;
        } else if (t.vendorStatus === 'deposit_paid') {
          vendorStatusBadge = `<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">بیعانه پرداخت شد</span>`;
        } else if (t.vendorStatus === 'finalized') {
          vendorStatusBadge = `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">نهایی شد</span>`;
        }

        const div = document.createElement('div');
        div.className = `p-5 rounded-2xl border transition-all space-y-4 ${
          t.completed ? 'bg-emerald-50/50 border-emerald-200 shadow-2xs' : 'bg-white border-accent hover:border-primary/40 shadow-xs'
        }`;

        div.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-accent/40 pb-3">
            <div class="flex items-center gap-3">
              <button type="button" onclick="toggleChecklistTask('${t.id}')" class="w-6 h-6 rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                t.completed ? 'bg-primary border-primary text-white' : 'border-secondary/40 text-transparent hover:border-primary'
              }">
                ✓
              </button>
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm sm:text-base font-bold ${t.completed ? 'task-completed-strikethrough' : 'text-[#111827]'}">${t.title}</span>
                  ${priorityBadge}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-start sm:self-auto">
              <span class="text-[11px] font-semibold text-secondary bg-bgCustom px-3 py-1 rounded-lg border border-accent/80">${t.dueDate || t.timeframe}</span>
              <span class="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">${t.timeframe || t.category}</span>
            </div>
          </div>

          <!-- SELECTED VENDOR SECTION -->
          <div class="bg-bgCustom p-3.5 rounded-xl border border-accent/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            ${attachedVendor ? `
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl border border-accent overflow-hidden bg-white shrink-0">
                  <img src="${attachedVendor.image}" alt="${attachedVendor.name}" class="w-full h-full object-cover">
                </div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-bold text-graphite">${attachedVendor.name}</span>
                    <span class="text-[10px] text-secondary font-medium">(${attachedVendor.category})</span>
                    ${vendorStatusBadge}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[11px] font-bold text-primary">${attachedVendor.priceRange}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 self-end sm:self-auto">
                <button onclick="openVendorSelectModal('${t.id}')" class="bg-white border border-accent hover:border-primary text-graphite text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                  تغییر یا ویرایش وضعیت
                </button>
                <button onclick="detachVendorFromTask('${t.id}')" class="text-rose-600 hover:text-rose-800 text-[11px] font-bold px-2 py-1">
                  حذف
                </button>
              </div>
            ` : `
              <div class="flex items-center gap-2 text-xs font-medium text-secondary">
                <i data-lucide="store" class="w-4 h-4 text-secondary shrink-0"></i>
                <span>هنوز تأمین‌کننده‌ای به این اقدام متصل نشده است.</span>
              </div>
              <button onclick="openVendorSelectModal('${t.id}')" class="bg-primary hover:bg-emerald-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
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

          <div class="flex flex-wrap items-center gap-4 text-xs text-secondary font-medium bg-white/80 p-2.5 rounded-xl border border-accent/60">
            <span><strong class="text-graphite">تاریخ درخواست:</strong> ${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
            <span><strong class="text-graphite">تعداد مهمان:</strong> ${inq.guests || 200} نفر</span>
            <span><strong class="text-graphite">خدمت/پکیج:</strong> ${inq.service || inq.package || 'خدمات عمومی'}</span>
          </div>

          ${(inq.customAnswers && inq.customAnswers.length) ? `
            <div class="bg-amber-50/80 p-3 rounded-xl border border-amber-200/80 text-xs font-bold text-amber-950 space-y-1">
              <span class="block text-[11px] font-black text-amber-900 border-b border-amber-200 pb-1">📋 پاسخ‌های سوالات اختصاصی فرم استعلام:</span>
              <div class="space-y-0.5 pt-0.5">
                ${inq.customAnswers.map(a => `<div class="flex items-center gap-1.5"><span class="text-amber-800 font-bold">• ${a.label}:</span> <span class="text-graphite font-black">${a.value}</span></div>`).join('')}
              </div>
            </div>
          ` : ''}

          <p class="text-xs text-graphite bg-white p-3 rounded-xl border border-accent/60 leading-relaxed">${inq.details || 'توضیحات و نیازمندی‌های اختصاصی زوج ثبت شده در سامانه عروسی تو.'}</p>

          <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-accent/60 text-xs">
            <div class="flex items-center gap-2">
              <label class="text-secondary font-bold text-[11px]">تغییر وضعیت:</label>
              <select onchange="updateInquiryStatus(${idx}, this.value)" class="bg-white border border-accent rounded-xl px-2.5 py-1 text-xs font-bold text-graphite focus:outline-none focus:border-primary">
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
          <div class="bg-white border ${pkg.popular ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-md' : 'border-accent'} rounded-2xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden">
            ${pkg.popular ? `<span class="absolute top-3 left-3 bg-[#D4AF37] text-[#1B3B2B] text-[10px] font-black px-2.5 py-0.5 rounded-full">پرطرفدارترین</span>` : ''}
            <div class="space-y-3">
              <h3 class="font-bold text-sm text-[#1B3B2B]">${pkg.name}</h3>
              <div class="text-lg font-black text-[#1B3B2B] border-b border-accent/60 pb-3">
                ${pkg.price}
              </div>
              <ul class="space-y-2 text-xs text-graphite/80">
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

    window.openVendorDetailModal = function openVendorDetailModal(vendorId) {
    window.closeVendorDetailModal = closeVendorDetailModal;
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
      let vendor = vendors.find(v => v.id === vId) || vendors[0];
      if (!vendor) return;

      try {
        const savedCustom = localStorage.getItem(`aroosi_vendor_custom_profile_${vendor.id}`);
        if (savedCustom) {
          const customObj = JSON.parse(savedCustom);
          vendor = {
            ...vendor,
            ...customObj,
            name: customObj.name || vendor.name,
            about: customObj.about || vendor.about,
            customServices: (customObj.customServices && customObj.customServices.length > 0) ? customObj.customServices : vendor.customServices,
            capabilityTags: (customObj.capabilityTags && customObj.capabilityTags.length > 0) ? customObj.capabilityTags : vendor.capabilityTags
          };
        }
      } catch (e) {
        console.error(e);
      }

      currentModalVendor = vendor;

      const modal = document.getElementById('vendor-detail-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('active');
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }

      const titleEl = document.getElementById('vdm-title');
      const coverEl = document.getElementById('vdm-cover');
      let avatarEl = document.getElementById('vdm-avatar');
      if (avatarEl && avatarEl.tagName !== 'IMG') {
        const childImg = avatarEl.querySelector('img');
        if (childImg) avatarEl = childImg;
      }
      const catEl = document.getElementById('vdm-category');
      const districtEl = document.getElementById('vdm-district') || document.getElementById('vdm-address');
      const bottomPriceBarEl = document.getElementById('vdm-bottom-price-bar') || document.getElementById('vdm-price');
      const aboutEl = document.getElementById('vdm-about') || document.getElementById('vdm-about-text');
      const inquireCta = document.getElementById('vdm-modal-inquire-cta');
      const chatCta = document.getElementById('vdm-modal-chat-cta');

      if (titleEl) titleEl.innerText = vendor.name;
      if (coverEl) coverEl.src = vendor.image || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80";
      if (avatarEl && avatarEl.tagName === 'IMG') avatarEl.src = vendor.image || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80";
      if (catEl) catEl.innerText = vendor.category;
      if (districtEl) districtEl.innerText = `📍 ${vendor.province || 'استان یزد'}، ${vendor.district || 'صفائیه'}`;
      if (bottomPriceBarEl) bottomPriceBarEl.innerText = vendor.priceRange || "۶۵,۰۰۰,۰۰۰ تومان";
      if (aboutEl) aboutEl.innerText = vendor.description || vendor.about || "توضیحات جامع مجموعه و خدمات تخصصی آن.";

      if (inquireCta) {
        inquireCta.onclick = function() {
          closeVendorDetailModal();
          openInquiryModal(vendor.id, vendor.name);
        };
      }

      if (chatCta) {
        chatCta.onclick = function() {
          closeVendorDetailModal();
          switchTab('messages');
        };
      }

      // Render Capability Tags Badges in Modal
      const tagsContainer = document.getElementById('vdm-capability-tags');
      if (tagsContainer) {
        const tags = vendor.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"];
        tagsContainer.innerHTML = tags.map(t => `<span class="bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">✅ ${t}</span>`).join('');
      }

      // Populate Portfolio Gallery Grid
      const galleryGrid = document.getElementById('vdm-gallery-grid');
      if (galleryGrid) {
        const portfolio = vendor.portfolio || [
          { url: vendor.image, tag: "نمونه‌کار اصلی" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "سالن و دکور" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "سفره عقد" }
        ];
        galleryGrid.innerHTML = portfolio.map(item => `
          <div class="aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-gray-200 relative group cursor-pointer" onclick="openLightbox('${item.url}')">
            <img src="${item.url}" alt="${item.tag || 'نمونه کار'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">🔍 بزرگ‌نمایی</div>
            <span class="absolute top-2 right-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">${item.tag || 'تصویر'}</span>
          </div>
        `).join('');
      }

      // Populate Packages Container
      const packagesContainer = document.getElementById('vdm-packages-container');
      if (packagesContainer) {
        const pkgs = vendor.packages || [
          { name: "برنزی (پایه)", price: "۶۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۲ رنگ سلف‌سرویس", "ورودی باغ تالار", "سیستم صوتی"] },
          { name: "نقره‌ای (VIP)", price: "۹۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۳ رنگ با کترینگ یزدی", "شمع‌آرایی کامل", "تست غذا برای ۴ نفر"] },
          { name: "طلایی (Luxury)", price: "۱۴۰,۰۰۰,۰۰۰ تومان", items: ["تمام امکانات نقره‌ای + سفره عقد", "آتش‌بازی ورودی", "اقامت سوئیت عروس"] }
        ];
        packagesContainer.innerHTML = pkgs.map(p => `
          <div class="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center border-b border-stone-100 pb-2 mb-2">
                <h4 class="font-bold text-[#1B3B2B] text-sm">${p.name}</h4>
                <span class="text-xs font-black text-[#D4AF37] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">${p.price}</span>
              </div>
              <ul class="space-y-1.5 text-xs text-stone-600">
                ${(p.items || []).map(item => `<li class="flex items-center gap-1.5"><span class="text-emerald-600">✓</span> <span>${item}</span></li>`).join('')}
              </ul>
            </div>
            <button onclick="triggerPackageInquiry('${p.name}', '${p.price}')" class="w-full bg-[#1B3B2B] hover:bg-emerald-900 text-white font-bold py-2 rounded-xl text-xs transition-colors mt-3">
              رزرو این پکیج
            </button>
          </div>
        `).join('');
      }

      // Populate Amenities Container inside About Us section
      const amenitiesContainer = document.getElementById('vdm-amenities-container');
      if (amenitiesContainer) {
        let amenities = vendor.customServices || vendor.capabilityTags;
        if (!amenities || amenities.length === 0) {
          amenities = ["پارکینگ اختصاصی (۳۰۰ خودرو)", "سیستم صوتی و نورپردازی حرفه‌ای", "سفره عقد سنتی و سنتی-مدرن", "ژنراتور برق اضطراری", "اتاق پرو و میکاپ اختصاصی عروس", "کترینگ غذا و پذیرایی یزدی"];
        }
        amenitiesContainer.innerHTML = amenities.map(a => `
          <div class="bg-stone-50 hover:bg-stone-100/80 border border-stone-200/90 hover:border-[#D4AF37]/60 rounded-xl p-2.5 flex items-center gap-2 text-xs font-bold text-stone-800 transition-all shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0"></span>
            <span class="truncate">${a}</span>
          </div>
        `).join('');
      }

      // Populate Reviews Container
      const reviewsContainer = document.getElementById('vdm-reviews-container') || document.getElementById('vdm-reviews-list');
      if (reviewsContainer) {
        const reviews = vendor.reviews || [
          { author: "رضا و مریم", text: "کیفیت غذا و میزبانی مجموعه بی‌نظیر بود.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" },
          { author: "محمد و سارا", text: "فضای باغ سنتی بسیار شیک و عکس‌ها رویایی شدند.", stars: "★★★★★", date: "فروردین ۱۴۰۳" }
        ];
        reviewsContainer.innerHTML = reviews.map(r => `
          <div class="bg-white border border-stone-200/90 rounded-2xl p-4 space-y-2 shadow-2xs text-right">
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center gap-2">
                <strong class="text-[#1B3B2B] font-bold text-sm">${r.author}</strong>
                <span class="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200/80 inline-flex items-center gap-1">
                  <i data-lucide="check-circle" class="w-3 h-3 text-emerald-600"></i>
                  <span>تاییدشده توسط عروسی نو</span>
                </span>
              </div>
              <span class="text-amber-500 font-bold">${r.stars || '★★★★★'}</span>
            </div>
            <p class="text-xs text-stone-600 leading-relaxed font-medium">${r.text}</p>
            <span class="text-[10px] text-stone-400 block">${r.date || '۱۴۰۳'}</span>
          </div>
        `).join('');
      }

      // Populate Contact Tab & Map Links
      const phoneEl = document.getElementById('vdm-contact-phone') || document.getElementById('vdm-phone');
      const addressEl = document.getElementById('vdm-contact-address') || document.getElementById('vdm-full-address');
      const hoursEl = document.getElementById('vdm-contact-hours');
      const instaEl = document.getElementById('vdm-contact-insta');

      if (phoneEl) phoneEl.innerText = vendor.phone || "۰۳۵-۳۸۲۴۰۰۰۰";
      if (addressEl) addressEl.innerText = vendor.address || `استان یزد، ${vendor.district || 'صفائیه'}`;
      if (hoursEl) hoursEl.innerText = vendor.hours || "همه روزه از ۱۰:۰۰ الی ۲۲:۰۰";
      if (instaEl) instaEl.innerText = vendor.instagram || "@yazd_wedding_studio";

      renderModalAvailabilityCalendar('اردیبهشت');
      switchModalTab(0);
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
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
        item.className = "p-3.5 bg-white border border-gray-200 rounded-xl space-y-1.5 shadow-2xs animate-fadeIn";
        item.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <strong class="text-[#1B3B2B] flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center font-bold text-[10px]">${author.substring(0, 2)}</span>
              <span>${author}</span>
            </strong>
            <span class="text-amber-500 font-bold">⭐️ ${rating}.۰</span>
          </div>
          <p class="text-[11px] text-gray-700 leading-relaxed">${comment}</p>
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
      const container = document.getElementById('vdm-calendar-container');
      if (container && (!document.getElementById('vdm-calendar-days-grid') || !container.querySelector('.vcal-month-pill'))) {
        container.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
            <span class="text-xs font-bold text-stone-700">انتخاب ماه:</span>
            <div class="flex flex-wrap gap-1.5">
              <button onclick="renderModalAvailabilityCalendar('اردیبهشت')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">اردیبهشت</button>
              <button onclick="renderModalAvailabilityCalendar('خرداد')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">خرداد</button>
              <button onclick="renderModalAvailabilityCalendar('تیر')" class="vcal-month-pill px-3 py-1 rounded-xl text-xs font-bold transition-all">تیر</button>
            </div>
          </div>
          <div class="flex items-center justify-around text-xs font-semibold text-stone-500 mb-3 bg-stone-50 py-2 rounded-xl border border-stone-100">
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
          pill.className = "vcal-month-pill active px-3 py-1 rounded-xl bg-[#1B3B2B] text-white transition-all cursor-pointer font-bold text-xs";
        } else {
          pill.className = "vcal-month-pill px-3 py-1 rounded-xl bg-white border border-stone-200 text-stone-700 hover:border-[#D4AF37] transition-all cursor-pointer font-bold text-xs";
        }
      });

      const grid = document.getElementById('vdm-calendar-days-grid');
      if (!grid) return;

      const bookedDays = [4, 8, 12, 19, 25, 26];
      const pendingDays = [2, 15, 21];

      let html = '';
      for (let day = 1; day <= 30; day++) {
        let bgClass = "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-300";
        let statusBadge = "آزاد";

        if (bookedDays.includes(day)) {
          bgClass = "bg-rose-50 text-rose-900 border-rose-300 opacity-90";
          statusBadge = "رزرو شده";
        } else if (pendingDays.includes(day)) {
          bgClass = "bg-amber-50 text-amber-900 border-amber-300";
          statusBadge = "استعلام";
        }

        html += `
          <div onclick="openInquiryModal(1, 'استعلام رزرو تاریخ ${day} ${monthName}')" class="p-2 sm:p-2.5 rounded-xl border flex flex-col justify-between items-center h-16 sm:h-20 transition-all cursor-pointer shadow-2xs ${bgClass}">
            <span class="text-xs sm:text-sm font-black">${day}</span>
            <span class="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
              bookedDays.includes(day) ? 'bg-rose-200 text-rose-900' : pendingDays.includes(day) ? 'bg-amber-200 text-amber-900' : 'bg-emerald-200 text-emerald-900'
            }">${statusBadge}</span>
          </div>
        `;
      }

      grid.innerHTML = html;
    }

    function filterModalGallery(category) {
      const pills = document.querySelectorAll('.mgall-pill');
      pills.forEach(pill => {
        if (pill.innerText.includes(category) || (category === 'all' && pill.innerText.includes('همه'))) {
          pill.className = "mgall-pill active px-3 py-1.5 rounded-xl bg-[#1B3B2B] text-white transition-all cursor-pointer";
        } else {
          pill.className = "mgall-pill px-3 py-1.5 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37] text-gray-700 transition-all cursor-pointer";
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
      const whatsappBtn = document.getElementById('inquiry-whatsapp-btn');

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
      if (whatsappBtn) whatsappBtn.classList.toggle('hidden', step !== 3);

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
      const nonVenueContainer = document.getElementById('inquiry-nonvenue-container');
      const dateLabel = document.getElementById('inquiry-date-label');

      if (cat.includes("آتلیه") || cat.includes("عکاسی") || cat.includes("فیلمبرداری") || cat.includes("مزون") || cat.includes("لباس") || cat.includes("سالن زیبایی") || cat.includes("میکاپ") || cat.includes("آرایشگاه") || cat.includes("طلا")) {
        if (guestsContainer) guestsContainer.classList.add('hidden');
        if (nonVenueContainer) nonVenueContainer.classList.remove('hidden');
        if (dateLabel) dateLabel.innerText = "تاریخ تقریبی مراجعه / پرو / مراسم *";
      } else {
        if (guestsContainer) guestsContainer.classList.remove('hidden');
        if (nonVenueContainer) nonVenueContainer.classList.add('hidden');
        if (dateLabel) dateLabel.innerText = "تاریخ تقریبی مراسم / مراجعه (شمسی) *";
      }

      const venueFields = document.getElementById('inquiry-fields-venue');
      const beautyFields = document.getElementById('inquiry-fields-beauty');
      const photoFields = document.getElementById('inquiry-fields-photo');
      const maisonFields = document.getElementById('inquiry-fields-maison');
      const servicesContainer = document.getElementById('inquiry-services-container');

      // Check if this inquiry is for a specific Package or Idea/Journal item
      const isSpecificItemInquiry = Boolean(itemTitle || typeVal === 'پکیج' || typeVal === 'ایده/ژورنال');

      // Hide all dynamic category blocks initially
      if (venueFields) venueFields.classList.add('hidden');
      if (beautyFields) beautyFields.classList.add('hidden');
      if (photoFields) photoFields.classList.add('hidden');
      if (maisonFields) maisonFields.classList.add('hidden');

      if (!isSpecificItemInquiry) {
        if (servicesContainer) servicesContainer.classList.remove('hidden');
        if (cat.includes("سالن زیبایی") || cat.includes("میکاپ") || cat.includes("آرایشگاه")) {
          if (beautyFields) beautyFields.classList.remove('hidden');
        } else if (cat.includes("آتلیه") || cat.includes("عکاسی") || cat.includes("فیلمبرداری")) {
          if (photoFields) photoFields.classList.remove('hidden');
        } else if (cat.includes("مزون") || cat.includes("لباس")) {
          if (maisonFields) maisonFields.classList.remove('hidden');
        } else {
          if (venueFields) venueFields.classList.remove('hidden');
        }
      } else {
        // For Package or Idea specific inquiries, streamline form by hiding general category blocks & services checklist
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
      showToast('پیش‌فاکتور دیجیتال استعلام شما صادر شد!', 'success');
    }

window.downloadReceiptPdf = function() {
  if (typeof openPreInvoicePrintModal === 'function') {
    openPreInvoicePrintModal(window.currentReceiptInvoiceData);
  }
};

window.shareReceiptWhatsApp = function() {
  const d = window.currentReceiptInvoiceData;
  if (!d) return;
  const msgText = encodeURIComponent(`سلام، درخواست استعلام قیمت #${d.num} برای ${d.vendorName}\nتاریخ: ${d.eventDate}\nخدمات: ${d.title}\nتماس: ${d.couplePhone}`);
  window.open(`https://wa.me/?text=${msgText}`, '_blank');
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
      bwState.targetBudget = inputVal;
      const formatted = inputVal.toLocaleString('fa-IR');
      document.getElementById('bw-budget-formatted').innerText = `${formatted} تومان`;
    }

        function applyYazdBudgetPreset(amount) {
      document.getElementById('bw-budget-input').value = amount;
      updateBudgetFormattedDisplay();
    }

    function handleProvinceChange() {
      const provSelect = document.getElementById('bw-province-select');
      bwState.province = provSelect.value;
      if (provSelect.value === 'تهران') bwState.provinceMultiplier = 1.2;
      else if (provSelect.value === 'البرز') bwState.provinceMultiplier = 1.05;
      else if (provSelect.value === 'آذربایجان شرقی' || provSelect.value === 'سایر استان‌ها') bwState.provinceMultiplier = 0.95;
      else bwState.provinceMultiplier = 1.0;
    }

    function selectBwStyle(styleKey) {
      bwState.style = styleKey;
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
      bwState.guestCount = count;
      document.getElementById('bw-guest-input').value = count;
      updateGuestBtnStyles(count);
    }

    function handleGuestInputChange() {
      const val = parseInt(document.getElementById('bw-guest-input').value) || 200;
      bwState.guestCount = val;
      updateGuestBtnStyles(val);
    }

    function updateGuestBtnStyles(count) {
      const btns = document.querySelectorAll('.bw-guest-btn');
      btns.forEach(btn => {
        btn.className = "bw-guest-btn py-3 px-4 rounded-xl text-xs font-bold border border-accent bg-white hover:border-primary text-graphite transition-all";
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

      bwState.services.forEach(srv => {
        const card = document.createElement('div');
        card.onclick = (e) => {
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
            toggleBwService(srv.id);
          }
        };
        card.className = `p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
          srv.checked ? 'bg-primary/5 border-primary' : 'bg-white border-accent hover:border-accent/80 opacity-75'
        }`;

        card.innerHTML = `
          <div class="flex items-center gap-3">
            <input type="checkbox" ${srv.checked ? 'checked' : ''} onchange="toggleBwService('${srv.id}')" class="rounded text-primary focus:ring-primary w-5 h-5 cursor-pointer">
            <div class="flex items-center gap-2">
              <i data-lucide="${srv.icon}" class="w-4 h-4 ${srv.checked ? 'text-primary' : 'text-secondary'}"></i>
              <span class="text-xs font-bold ${srv.checked ? 'text-graphite' : 'text-secondary'}">${srv.title}</span>
            </div>
          </div>
          ${srv.isCustom ? `<button onclick="deleteCustomBwService('${srv.id}')" class="text-rose-600 hover:text-rose-800 text-[11px] font-bold">حذف</button>` : ''}
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    function toggleBwService(srvId) {
      const srv = bwState.services.find(s => s.id === srvId);
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
      bwState.services.push({
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
      bwState.services = bwState.services.filter(s => s.id !== srvId);
      renderBwServicesChecklist();
    }

    function navigateBwStep(direction) {
      const newStep = bwState.currentStep + direction;
      if (newStep < 1 || newStep > 5) return;

      // Validate inputs before advancing
      if (direction > 0 && bwState.currentStep === 1) {
        if (!bwState.targetBudget || bwState.targetBudget < 10000000) {
          showToast('لطفاً سقف بودجه معتبر وارد نمایید (حداقل ۱۰ میلیون تومان).', 'warning');
          return;
        }
        bwState.city = document.getElementById('bw-city-input').value.trim() || 'تهران';
      }

      if (direction > 0 && bwState.currentStep === 4) {
        const activeCount = bwState.services.filter(s => s.checked).length;
        if (activeCount === 0) {
          showToast('لطفاً حداقل یک خدمت را جهت تخصیص بودجه فعال/تیک بزنید.', 'warning');
          return;
        }
      }

      bwState.currentStep = newStep;
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
      if (bwState.currentStep <= 4) {
        const currentPanel = document.getElementById('bw-step-' + bwState.currentStep);
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

      if (bwState.currentStep <= 4) {
        stepLabel.innerText = `گام ${bwState.currentStep} از ۴`;
        const percent = bwState.currentStep * 25;
        progressPercent.innerText = `${percent}٪ تکمیل شده`;
        progressBar.style.width = `${percent}%`;

        const titles = [
          "پایه مالی و موقعیت مکانی",
          "انتخاب سبک و سطح تشریفات",
          "تعداد مهمانان و مقیاس مراسم",
          "تکمیل چک‌لیست خدمات مورد نیاز"
        ];
        progressTitle.innerText = titles[bwState.currentStep - 1];

        prevBtn.classList.toggle('hidden', bwState.currentStep === 1);
        nextBtn.classList.remove('hidden');
        nextBtn.querySelector('span').innerText = bwState.currentStep === 4 ? "محاسبه نهایی و نمایش خروجی" : "گام بعدی";
      } else {
        stepLabel.innerText = "خروجی محاسبات هوشمند";
        progressPercent.innerText = "۱۰۰٪ تکمیل شده";
        progressBar.style.width = "100%";
        progressTitle.innerText = "جدول تخصیص هوشمند بودجه بر اساس خدمات انتخابی";

        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
      }

      if (bwState.currentStep === 4) {
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
      const activeServices = bwState.services.filter(s => s.checked);
      const totalBudget = bwState.targetBudget;

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
      document.getElementById('res-style-city').innerText = `${styleNames[bwState.style] || 'مدرن'} • ${bwState.province} (${bwState.city})`;
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
        tr.className = "hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
          <td class="p-3.5 font-bold text-graphite flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <i data-lucide="${srv.icon}" class="w-4 h-4"></i>
            </div>
            <span>${srv.title}</span>
          </td>
          <td class="p-3.5 font-bold text-primary">${percentageText}</td>
          <td class="p-3.5 font-black text-graphite">${calculatedAmount.toLocaleString('fa-IR')} تومان</td>
          <td class="p-3.5 text-secondary text-[11px] leading-relaxed">
            برآورد سهم استاندارد متناسب با ${bwState.guestCount} نفر مهمان و سبک ${styleNames[bwState.style]}
          </td>
        `;
        tbody.appendChild(tr);
      });

      lucide.createIcons();
    }

    function resetBwWizard() {
      bwState.currentStep = 1;
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
        card.className = "inv-theme-card p-3.5 rounded-2xl border border-accent bg-white hover:border-primary cursor-pointer transition-all space-y-2";
        const check = card.querySelector('.theme-check');
        if (check) check.classList.add('hidden');
      });

      const activeCard = document.getElementById('inv-theme-' + themeName);
      if (activeCard) {
        activeCard.className = "inv-theme-card p-3.5 rounded-2xl border-2 border-primary bg-emerald-50/50 cursor-pointer transition-all space-y-2";
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
      const link = 'https://aroosito.com/invitation/ali-and-sara';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('لینک اختصاصی کارت دعوت کپی شد', 'info');
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
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="relative h-48 overflow-hidden bg-slate-900">
              <img src="${quiz.image}" alt="${quiz.title}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-300">
              <div class="absolute top-3 right-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                ${quiz.badge}
              </div>
              ${pastResult ? `
                <div class="absolute bottom-3 right-3 left-3 bg-[#1B3B2B]/90 backdrop-blur-xs text-[#D4AF37] text-[11px] font-bold px-3 py-1.5 rounded-xl border border-[#D4AF37]/40 flex justify-between items-center shadow-md">
                  <span>آخرین نتیجه: ${pastResult.scorePercent}٪</span>
                  <span class="text-white text-[10px] font-normal">${pastResult.date}</span>
                </div>
              ` : ''}
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3 text-xs font-bold text-secondary">
                <span class="flex items-center gap-1">
                  <i data-lucide="help-circle" class="w-4 h-4 text-primary"></i>
                  <span>${quiz.questionsCount} سوال</span>
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  <i data-lucide="clock" class="w-4 h-4 text-primary"></i>
                  <span>زمان: ${quiz.duration}</span>
                </span>
              </div>

              <h3 class="text-lg font-bold text-graphite leading-snug">${quiz.title}</h3>
              <p class="text-xs text-secondary leading-relaxed">${quiz.description}</p>
            </div>
          </div>

          <div class="p-6 pt-0 space-y-2">
            <button onclick="startQuizRunner('${quiz.id}')" class="w-full bg-primary hover:bg-emerald-900 text-white font-bold py-3 rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>${pastResult ? 'شرکت مجدد در تست' : 'شروع تست هوشمند'}</span>
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
              <div class="p-3.5 bg-white border border-[#E0D8C8] rounded-2xl flex justify-between items-center gap-2 shadow-2xs">
                <div>
                  <span class="font-bold text-graphite block truncate max-w-[180px]">${h.quizTitle}</span>
                  <span class="text-[10px] text-secondary block">${h.levelTitle}</span>
                </div>
                <div class="text-left shrink-0 dir-ltr">
                  <span class="font-black text-[#1B3B2B] text-sm block">${h.scorePercent}٪</span>
                  <span class="text-[9px] text-secondary block">${h.date}</span>
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
        container.innerHTML = `<div class="p-6 text-center text-secondary text-xs font-medium">هیچ گفت‌وگویی یافت نشد.</div>`;
        return;
      }

      threads.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-primary/10 border-r-4 border-primary shadow-xs' : 'hover:bg-slate-100 bg-white'
        }`;

        let badgeBg = "bg-blue-100 text-blue-800 border-blue-200";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-100 text-emerald-800 border-emerald-200";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-100 text-purple-800 border-purple-200";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
            ${t.unreadCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                ${t.unreadCount}
              </span>
            ` : ''}
          </div>

          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-graphite truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-secondary font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-secondary truncate font-medium">${t.lastMessage}</p>

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
        container.innerHTML = `<div class="p-6 text-center text-secondary text-xs font-medium">نتیجه‌ای یافت نشد.</div>`;
        return;
      }

      filtered.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-primary/10 border-r-4 border-primary shadow-xs' : 'hover:bg-slate-100 bg-white'
        }`;

        let badgeBg = "bg-blue-100 text-blue-800 border-blue-200";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-100 text-emerald-800 border-emerald-200";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-100 text-purple-800 border-purple-200";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-graphite truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-secondary font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-secondary truncate font-medium">${t.lastMessage}</p>

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
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white shrink-0">
              <img src="${activeThread.vendorLogo}" alt="${activeThread.vendorName}" class="w-full h-full object-cover">
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-graphite">${activeThread.vendorName}</h3>
                ${activeThread.verified ? `
                  <span class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <i data-lucide="shield-check" class="w-3 h-3"></i>
                    <span>تاییدیه رسمی</span>
                  </span>
                ` : ''}
              </div>
              <span class="text-xs text-secondary font-medium">${activeThread.vendorCategory} • آنلاین</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openPreInvoiceModal()" class="bg-primary hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs shrink-0 cursor-pointer">
              <i data-lucide="file-plus" class="w-4 h-4"></i>
              <span>صدور / مشاهده پیش‌فاکتور</span>
            </button>
            <a href="tel:${activeThread.phone}" class="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
              <i data-lucide="phone" class="w-4 h-4"></i>
              <span class="hidden sm:inline">تماس: ${activeThread.phone}</span>
            </a>
          </div>
        `;
      }

      // 2. Status Bar & Inquiry Card
      const statusBar = document.getElementById('chat-active-status-bar');
      if (statusBar && activeThread.inquiryData) {
        let statusBadgeHTML = `<span class="bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">در انتظار پاسخ تامین‌کننده</span>`;
        if (activeThread.statusBadge === 'quote_sent') {
          statusBadgeHTML = `<span class="bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold">پیش‌فاکتور صادر شد</span>`;
        } else if (activeThread.statusBadge === 'finalized') {
          statusBadgeHTML = `<span class="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1 rounded-full text-xs font-bold">رزرو نهایی شد</span>`;
        }

        const inq = activeThread.inquiryData;
        statusBar.innerHTML = `
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-primary font-black">اطلاعات استعلام قیمت ثبت شده:</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">تاریخ: ${inq.date}</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">مهمانان: ${inq.guests} نفر</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">خدمات: ${inq.services ? inq.services.join('، ') : 'ارائه شده'}</span>
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
              <div class="max-w-md bg-primary text-white p-4 rounded-3xl rounded-tr-xs shadow-sm space-y-2 text-xs font-medium leading-relaxed">
                <div class="font-bold border-b border-white/20 pb-1.5 flex items-center gap-1.5">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>خلاصه استعلام قیمت ارسال شده</span>
                </div>
                <div class="whitespace-pre-line">${msg.text}</div>
                <span class="block text-[10px] text-emerald-200 text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          } else if (msg.hasAppointmentCard && msg.appointmentDetails) {
            const appt = msg.appointmentDetails;
            content = `
              <div class="max-w-md w-full bg-white border-2 border-emerald-500/60 p-4 rounded-3xl rounded-tl-xs shadow-lg space-y-3 text-xs font-bold text-graphite">
                <div class="flex justify-between items-center border-b border-accent pb-2">
                  <div class="flex items-center gap-1.5 text-emerald-800 font-black">
                    <i data-lucide="calendar-check" class="w-4.5 h-4.5 text-emerald-600"></i>
                    <span>${appt.title || 'کارت تایید وقت بازدید و مشاوره حضوری'}</span>
                  </div>
                  <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">وقت رزرو شد</span>
                </div>

                <div class="space-y-2 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/80">
                  <div class="flex justify-between text-xs">
                    <span class="text-secondary font-medium">📅 تاریخ بازدید:</span>
                    <span class="font-black text-graphite">${appt.date}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-secondary font-medium">⏰ ساعت:</span>
                    <span class="font-black text-graphite">${appt.time}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-secondary font-medium">👤 مسئول هماهنگی:</span>
                    <span class="font-bold text-graphite">${appt.contactPerson || 'مدیریت تشریفات'}</span>
                  </div>
                  <div class="pt-1.5 border-t border-emerald-200/60 text-[11px]">
                    <span class="text-secondary font-medium block">📍 آدرس دقیق:</span>
                    <span class="font-bold text-graphite leading-relaxed block mt-0.5">${appt.address}</span>
                  </div>
                </div>

                <button onclick="confirmAppointmentScheduleCard('${msg.id}')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                  <i data-lucide="check-circle" class="w-4 h-4"></i>
                  <span>تایید و ثبت در یادآور من</span>
                </button>
              </div>
            `;
          } else if (msg.hasQuoteCard && msg.quoteDetails) {
            const q = msg.quoteDetails;
            let statusBadge = `<span class="bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">در انتظار بررسی</span>`;
            if (q.status === 'accepted' || q.status === 'appointment_scheduled') {
              statusBadge = `<span class="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">تایید اولیه و رزرو جلسه حضوری</span>`;
            } else if (q.status === 'finalized_in_person') {
              statusBadge = `<span class="bg-purple-100 text-purple-800 border border-purple-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">نهایی‌شده حضوری</span>`;
            } else if (q.status === 'revision_requested') {
              statusBadge = `<span class="bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">درخواست تغییرات</span>`;
            }

            let lineItemsHtml = '';
            if (q.items && q.items.length > 0) {
              q.items.forEach(it => {
                lineItemsHtml += `
                  <div class="flex justify-between items-center text-[11px] border-b border-accent/40 pb-1">
                    <span class="text-graphite font-medium">• ${it.name}</span>
                    <span class="text-primary font-bold">${Number(it.price).toLocaleString('fa-IR')} تومان</span>
                  </div>
                `;
              });
            } else if (q.servicesIncluded) {
              q.servicesIncluded.forEach(s => {
                lineItemsHtml += `<div class="text-[11px] font-medium text-graphite">• ${s}</div>`;
              });
            }

            content = `
              <div class="max-w-md w-full bg-white border-2 border-primary/40 p-4 rounded-3xl rounded-tl-xs shadow-lg space-y-3.5 text-xs font-bold text-graphite">
                <div class="flex justify-between items-center border-b border-accent pb-2">
                  <div class="flex items-center gap-1.5 text-primary">
                    <i data-lucide="file-check-2" class="w-4 h-4"></i>
                    <span class="font-black">${q.title}</span>
                  </div>
                  ${statusBadge}
                </div>

                <div class="grid grid-cols-2 gap-2 text-[10px] bg-bgCustom p-2 rounded-xl border border-accent">
                  <div>
                    <span class="text-secondary block">شماره پیش‌فاکتور:</span>
                    <span class="font-mono text-graphite font-bold">${q.invoiceNumber || 'INV-1403-8821'}</span>
                  </div>
                  <div>
                    <span class="text-secondary block">اعتبار تا:</span>
                    <span class="text-rose-600 font-bold">${q.validityDays || 7} روز آینده</span>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <span class="text-secondary text-[11px] block">ریز خدمات و برآورد اولیه:</span>
                  <div class="space-y-1">
                    ${lineItemsHtml}
                  </div>
                </div>

                <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
                  <div class="flex justify-between text-xs">
                    <span class="text-secondary">برآورد کل هزینه:</span>
                    <span class="font-black text-graphite">${q.amount}</span>
                  </div>
                </div>

                <div class="flex flex-col gap-2 pt-1">
                  <button onclick="openPreInvoicePrintModal()" class="w-full bg-[#1B3B2B] hover:bg-emerald-900 text-[#D4AF37] border border-[#D4AF37]/40 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer">
                    <i data-lucide="printer" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                    <span>مشاهده و چاپ پیش‌فاکتور رسمی</span>
                  </button>
                  <div class="flex gap-2">
                    <button onclick="openAppointmentModal('${activeThread.id}', '${msg.id}')" class="flex-1 bg-primary hover:bg-emerald-900 text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer">
                      <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                      <span>هماهنگی وقت بازدید</span>
                    </button>
                    <button onclick="openRevisionModal('${activeThread.id}', '${msg.id}')" class="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      <span>تغییرات</span>
                    </button>
                  </div>
                </div>

                <div class="flex justify-between items-center text-[10px] text-secondary border-t border-accent/60 pt-2">
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

      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId);
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

      input.value = '';
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

    function filterVipShowcase(categoryKey) {
      const tabs = ['all', 'hall', 'studio', 'beauty'];
      tabs.forEach(t => {
        const btn = document.getElementById('vip-tab-' + t);
        if (btn) {
          if (t === categoryKey) {
            btn.className = "vip-tab-btn px-3 py-1 rounded-xl bg-[#1B3B2B] text-[#D4AF37] transition-all shrink-0 cursor-pointer shadow-xs font-bold";
          } else {
            btn.className = "vip-tab-btn px-3 py-1 rounded-xl bg-white border border-accent hover:border-[#D4AF37] text-graphite transition-all shrink-0 cursor-pointer font-bold";
          }
        }
      });

      const cards = document.querySelectorAll('.vip-3d-card, .vip-vendor-card');
      cards.forEach(card => {
        const cat = card.getAttribute('data-vip-cat');
        if (categoryKey === 'all' || cat === categoryKey) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function initVipShowcaseAutoScroll() {
      const showcaseContainer = document.getElementById('vip-showcase-container') ||
                                document.querySelector('.vip-showcase-container');
      if (!showcaseContainer) return;

      const streams = showcaseContainer.querySelectorAll('.vip-col-stream');

      function pauseStreams() {
        streams.forEach(s => s.style.animationPlayState = 'paused');
      }

      function resumeStreams() {
        streams.forEach(s => s.style.animationPlayState = 'running');
      }

      showcaseContainer.addEventListener("mouseenter", pauseStreams);
      showcaseContainer.addEventListener("mouseleave", resumeStreams);
      showcaseContainer.addEventListener("touchstart", pauseStreams, { passive: true });
      showcaseContainer.addEventListener("touchend", resumeStreams, { passive: true });
    }

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
        card.className = "bg-[#0F172A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_12px_30px_rgba(212,175,55,0.25)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1";

        const vendorName = item.vendor ? item.vendor.name : 'تامین‌کننده معتبر';

        card.innerHTML = `
          <div>
            <div onclick="openIdeaDetailModal(${item.id})" class="relative aspect-4/5 overflow-hidden bg-slate-900 cursor-pointer">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent"></div>

              <div class="absolute top-3 right-3">
                <span class="bg-black/60 backdrop-blur-md text-amber-200 border border-[#D4AF37]/50 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md inline-flex items-center gap-1">
                  <i data-lucide="tag" class="w-3 h-3 text-[#D4AF37]"></i>
                  <span>${item.categoryName}</span>
                </span>
              </div>

              <div class="absolute top-3 left-3 flex items-center gap-1.5" onclick="event.stopPropagation()">
                <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-rose-500 shadow-sm transition-transform active:scale-90 hover:scale-110 cursor-pointer" title="ذخیره در مودبورد">
                  <i data-lucide="heart" class="w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}"></i>
                </button>
                <span class="bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3 h-3 text-[#D4AF37]"></i>
                  <span>خواندن ۳ دقیقه</span>
                </span>
              </div>
            </div>

            <div onclick="openIdeaDetailModal(${item.id})" class="p-5 space-y-2 cursor-pointer text-right">
              <h4 class="text-sm sm:text-base font-black text-white line-clamp-2 leading-relaxed group-hover:text-[#D4AF37] transition-colors">${item.title}</h4>
              <p class="text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed">مجموعه ایده‌های جدید و جذاب برای برنامه‌ریزی مراسم عروسی در یزد با طراحی اختصاصی.</p>
              <p class="text-[11px] text-amber-200/90 font-bold truncate flex items-center gap-1 pt-1">
                <i data-lucide="store" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                <span>مجری: ${vendorName}</span>
              </p>
            </div>
          </div>

          <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/80">
            <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="text-xs font-bold flex items-center gap-1.5 ${isBookmarked ? 'text-rose-400' : 'text-slate-300 hover:text-rose-400'} transition-colors cursor-pointer">
              <i data-lucide="heart" class="w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : ''}"></i>
              <span>${isBookmarked ? 'ذخیره شده' : 'ذخیره در مودبورد'}</span>
            </button>

            <button onclick="openIdeaDetailModal(${item.id})" class="text-xs font-black text-[#D4AF37] hover:text-amber-300 flex items-center gap-1 transition-all group-hover:translate-x-[-3px] cursor-pointer">
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
          <div class="col-span-full p-12 text-center bg-white border border-accent rounded-3xl space-y-4">
            <div class="w-16 h-16 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center">
              <i data-lucide="heart" class="w-8 h-8"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-base font-bold text-graphite">مودبورد شما هنوز خالی است</h4>
              <p class="text-xs text-secondary">روی آیکون قلب در مجله ایده‌ها کلیک کنید تا ایده‌های محبوبتان اینجا قرار گیرند.</p>
            </div>
            <button onclick="switchInspirationSubTab('gallery')" class="bg-primary text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5">
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
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="relative aspect-4/5 overflow-hidden bg-slate-900">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
              <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="absolute top-3 left-3 bg-white/90 text-rose-600 hover:bg-white p-2 rounded-full shadow-md text-xs font-bold transition-transform active:scale-95" title="حذف از مودبورد">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="p-4 space-y-2">
              <span class="inline-block bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                ${item.categoryName}
              </span>
              <h4 class="text-xs font-bold text-graphite line-clamp-2 leading-relaxed">${item.title}</h4>
            </div>
          </div>

          <div class="p-4 pt-0 space-y-2">
            <button onclick="filterDirectoryByVendorCategory('${item.vendorCategoryMatch}')" class="w-full bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5">
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

    function showGlobalToast(message, type = 'success', duration = 3000) {
      showToast(message, type, duration);
    }

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
  const modalDrawer = document.getElementById('sub-category-drawer-modal');
  const modalSimple = document.getElementById('subgroups-modal');
  const modalGrid = document.getElementById('subgroupModal');
  if (modalDrawer) { modalDrawer.classList.add('hidden'); modalDrawer.classList.remove('flex'); }
  if (modalSimple) { modalSimple.classList.add('hidden'); modalSimple.style.display = 'none'; }
  if (modalGrid) { modalGrid.classList.add('hidden'); modalGrid.style.display = 'none'; }
  document.body.style.overflow = '';
}

function openCategorySubgroupsModal(catKey) {
  const data = CATEGORY_SUBGROUPS_MAP[catKey] || CATEGORY_SUBGROUPS_MAP.venue_catering;

  // 1. Populate Floating Sub-Category Drawer (#sub-category-drawer-modal)
  const drawerModal = document.getElementById('sub-category-drawer-modal');
  const drawerTitle = document.getElementById('drawer-header-title');
  const drawerBadge = document.getElementById('drawer-header-badge');
  const drawerIcon = document.getElementById('drawer-header-icon');
  const drawerGrid = document.getElementById('drawer-subcategories-grid');

  if (drawerTitle) drawerTitle.innerText = data.title;
  if (drawerBadge) drawerBadge.innerText = data.badge;
  if (drawerIcon) drawerIcon.innerHTML = `<i data-lucide="${data.icon || 'layers'}" class="w-6 h-6 text-[#1B3B2B]"></i>`;

  if (drawerGrid) {
    drawerGrid.innerHTML = data.subgroups.map(sub => {
      const subTitle = typeof sub === 'string' ? sub : sub.title;
      const subCount = typeof sub === 'string' ? '+۵ کسب‌وکار' : (sub.count || '+۵ کسب‌وکار');
      const subDesc = typeof sub === 'string' ? 'مشاهده و استعلام قیمت کسب‌وکارهای تاییدشده یزد' : (sub.desc || 'مشاهده و استعلام قیمت کسب‌وکارهای تاییدشده یزد');

      return `
        <div onclick="switchTab('directory'); filterVendorsByCategoryTitle('${subTitle}'); closeAllSubgroupModals();" class="bg-[#FCFCFA] border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-2xl p-4 transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between group">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <span class="font-black text-xs text-[#1B3B2B] group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                <i data-lucide="tag" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                ${subTitle}
              </span>
              <span class="bg-[#1B3B2B]/10 text-[#1B3B2B] text-[10px] font-bold px-2 py-0.5 rounded-full">${subCount}</span>
            </div>
            <p class="text-[11px] text-secondary leading-relaxed font-medium line-clamp-2">${subDesc}</p>
          </div>
          <div class="pt-3 border-t border-accent/50 mt-3 flex items-center justify-between text-[11px] text-[#D4AF37] font-bold">
            <span>مشاهده و فیلتر لیست</span>
            <span class="group-hover:translate-x-[-3px] transition-transform">←</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Populate Simple Subgroups Modal (#subgroups-modal)
  const simpleModal = document.getElementById('subgroups-modal');
  const simpleTitle = document.getElementById('subgroups-title');
  const simpleList = document.getElementById('subgroups-list');

  if (simpleTitle) simpleTitle.innerText = data.title + ' (' + data.badge + ')';
  if (simpleList) {
    simpleList.innerHTML = data.subgroups.map(sub => {
      const subTitle = typeof sub === 'string' ? sub : sub.title;
      return `
        <div class="flex items-center justify-between bg-[#FCFCFA] border border-[#D4AF37]/40 rounded-xl p-3 shadow-2xs">
          <span class="text-xs font-bold text-[#1B3B2B]">📍 ${subTitle}</span>
          <button onclick="switchTab('directory'); filterVendorsByCategoryTitle('${subTitle}'); closeAllSubgroupModals();" class="bg-[#1B3B2B] hover:bg-emerald-900 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors">
            مشاهده لیست ←
          </button>
        </div>
      `;
    }).join('');
  }

  // Show Active Modal
  if (drawerModal) {
    drawerModal.classList.remove('hidden');
    drawerModal.classList.add('flex');
  } else if (simpleModal) {
    simpleModal.classList.remove('hidden');
    simpleModal.style.display = 'flex';
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
} catch(e) {}


// Helper functions for vendor profile modal actions
window.openVendorChatFromModal = function() {
  if (typeof closeVendorDetailModal === 'function') closeVendorDetailModal();
  if (typeof switchTab === 'function') switchTab('messages');
  if (typeof showToast === 'function') showToast('💬 چت مستقیم با تامین‌کننده فعال شد', 'info');
};

window.openInquireFromVendorModal = function() {
  const v = (typeof currentModalVendor !== 'undefined' && currentModalVendor) ? currentModalVendor : null;
  if (typeof closeVendorDetailModal === 'function') closeVendorDetailModal();
  if (v && typeof openInquiryModal === 'function') {
    openInquiryModal(v.id, v.name);
  } else if (typeof openInquiryModal === 'function') {
    openInquiryModal(1, 'تامین‌کننده');
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
    card.className = "schedule-item-card rounded-2xl p-3.5 sm:p-4 text-white text-right flex flex-col sm:flex-row justify-between sm:items-center gap-2 shadow-md";
    card.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-xs sm:text-sm font-black text-[#D4AF37] bg-[#1E293B] border border-[#D4AF37]/30 px-3 py-1 rounded-xl dir-ltr font-mono">${item.time}</span>
        <div>
          <h4 class="text-xs sm:text-sm font-black text-white">${item.title}</h4>
          ${item.responsible ? `<span class="text-[11px] text-slate-400">👤 مسئول: <strong class="text-amber-200">${item.responsible}</strong></span>` : ''}
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
    card.className = "party-member-card rounded-2xl p-4 text-[#FFFFFF] text-right space-y-3 shadow-md";

    const completedCount = (m.tasks || []).filter(t => t.completed).length;
    const totalCount = (m.tasks || []).length;
    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    card.innerHTML = `
      <div class="flex justify-between items-start border-b border-slate-800 pb-2">
        <div>
          <h4 class="text-sm font-black text-[#D4AF37]">${m.name}</h4>
          <span class="text-[11px] font-bold text-slate-300">${m.role}</span>
        </div>
        <span class="text-xs font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">${percent}% پیشرفت</span>
      </div>

      <!-- Tasks List -->
      <div class="space-y-1.5">
        <span class="text-[11px] font-black text-slate-400 block">لیست وظایف محوله:</span>
        ${(m.tasks && m.tasks.length) ? m.tasks.map((t, tIdx) => `
          <div class="flex items-center justify-between bg-[#0F172A] p-2 rounded-xl border border-slate-800 text-xs">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="togglePartyTaskComplete(${mIdx}, ${tIdx})" class="w-4 h-4 accent-[#D4AF37] cursor-pointer">
              <span class="${t.completed ? 'line-through text-slate-500' : 'text-slate-200 font-medium'}">${t.text}</span>
            </label>
          </div>
        `).join('') : '<span class="text-xs text-slate-500">هیچ وظیفه‌ای تعریف نشده است.</span>'}
      </div>

      <!-- Assign New Task Input -->
      <div class="flex gap-2 pt-2 border-t border-slate-800/80">
        <input type="text" id="party-task-input-${mIdx}" placeholder="افزودن وظیفه جدید..." class="flex-1 bg-[#0F172A] border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]">
        <button type="button" onclick="assignPartyTask(${mIdx})" class="bg-[#D4AF37] text-[#0F251A] text-xs font-black px-3 py-1.5 rounded-xl hover:bg-amber-500 transition-all cursor-pointer">
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

window.renderBridalForum = function() {
  const feed = document.getElementById('bridal-forum-feed');
  if (!feed) return;
  feed.innerHTML = '';

  let threads = [];
  try {
    threads = JSON.parse(localStorage.getItem('aroosi_forum_threads_db') || 'null');
  } catch (e) { threads = null; }

  if (!threads || threads.length === 0) {
    threads = bridalForumThreads;
    try { localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(threads)); } catch(e) {}
  } else {
    bridalForumThreads = threads;
  }

  threads.forEach((t, tIdx) => {
    const card = document.createElement('div');
    card.className = "forum-thread-card rounded-2xl p-4 text-white text-right space-y-3 shadow-md";
    card.innerHTML = `
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-black text-xs flex items-center justify-center">👤</span>
          <span class="text-xs font-black text-white">${t.author}</span>
        </div>
        <span class="text-[10px] text-slate-400">${t.timestamp}</span>
      </div>

      <h4 class="text-xs sm:text-sm font-black text-[#D4AF37] leading-snug">${t.title}</h4>
      <p class="text-xs text-slate-200 leading-relaxed">${t.content}</p>

      <!-- Comments List -->
      <div class="space-y-2 pt-2 border-t border-slate-800/80">
        <span class="text-[11px] font-black text-slate-400 block">💬 پاسخ‌های عروس‌ها:</span>
        ${(t.comments && t.comments.length) ? t.comments.map(c => `
          <div class="bg-[#1E293B] p-2.5 rounded-xl border border-slate-700/80 text-xs space-y-0.5">
            <span class="font-bold text-amber-300 text-[11px] block">${c.author}:</span>
            <span class="text-slate-200">${c.text}</span>
          </div>
        `).join('') : '<span class="text-xs text-slate-500">اولین پاسخی باشید که نظر می‌دهید...</span>'}
      </div>

      <!-- Add Comment Form -->
      <div class="flex gap-2 pt-2">
        <input type="text" id="forum-comment-input-${tIdx}" placeholder="ارسال پاسخ یا نظر..." class="flex-1 bg-[#1E293B] border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]">
        <button type="button" onclick="addForumComment(${tIdx})" class="bg-[#D4AF37] text-[#0F251A] text-xs font-black px-3 py-1.5 rounded-xl hover:bg-amber-500 transition-all cursor-pointer">
          ارسال نظر
        </button>
      </div>
    `;
    feed.appendChild(card);
  });
};

window.handleCreateForumThread = function(event) {
  event.preventDefault();
  const title = document.getElementById('forum-thread-title')?.value.trim();
  const content = document.getElementById('forum-thread-content')?.value.trim();

  if (!title || !content) {
    showToast('لطفاً عنوان و متن مبحث را تکمیل کنید.', 'warning');
    return;
  }

  bridalForumThreads.unshift({
    id: 'f_' + Date.now(),
    author: 'عروس یزدی',
    title,
    content,
    timestamp: 'هم‌اکنون',
    likes: 0,
    comments: []
  });

  try { localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(bridalForumThreads)); } catch(e) {}

  document.getElementById('forum-thread-title').value = '';
  document.getElementById('forum-thread-content').value = '';

  showToast('مبحث جدید با موفقیت در تالار گفت‌وگو ثبت شد.', 'success');
  renderBridalForum();
};

window.addForumComment = function(threadIdx) {
  const input = document.getElementById(`forum-comment-input-${threadIdx}`);
  const text = input?.value.trim();
  if (!text || !bridalForumThreads[threadIdx]) return;

  if (!bridalForumThreads[threadIdx].comments) bridalForumThreads[threadIdx].comments = [];
  bridalForumThreads[threadIdx].comments.push({
    author: 'عروس کاربر',
    text
  });

  try { localStorage.setItem('aroosi_forum_threads_db', JSON.stringify(bridalForumThreads)); } catch(e) {}
  showToast('نظر شما ثبت گردید.', 'success');
  renderBridalForum();
};

// ==========================================================================
// HOMEPAGE MAGAZINE HIGHLIGHTS RENDERER
// ==========================================================================
window.toggleAdvancedFiltersDrawer = function() {
  const drawer = document.getElementById('directory-advanced-filters-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
    if (typeof showToast === 'function') {
      showToast(drawer.classList.contains('hidden') ? 'فیلترهای پیشرفته بسته شد.' : 'فیلترهای پیشرفته باز شد.', 'info');
    }
  }
};

window.updateAdvFilterActiveCount = function() {
  const badge = document.getElementById('adv-filter-active-count');
  if (!badge) return;
  let count = (typeof activeCategoryFilters !== 'undefined') ? activeCategoryFilters.size : 0;
  if (typeof selectedEventDateFilter !== 'undefined' && selectedEventDateFilter) count++;
  const citySelect = document.getElementById('sidebar-city-select') || document.getElementById('directory-island-city-select');
  if (citySelect && citySelect.value !== 'استان یزد') count++;
  const priceSelect = document.getElementById('sidebar-price-select');
  if (priceSelect && priceSelect.value !== 'all') count++;

  if (count > 0) {
    badge.innerText = `${count.toLocaleString('fa-IR')} فعال`;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
};

window.renderHomeMagazineHighlights = function() {
  const feed = document.getElementById('home-magazine-highlights-feed');
  if (!feed) return;
  feed.innerHTML = '';

  const articles = (typeof inspirationState !== 'undefined' && inspirationState.articles) ? inspirationState.articles : [
    {
      id: 1,
      title: 'راهنمای انتخاب باغ‌تالار لوکس در یزد با بودجه‌بندی هوشمند',
      summary: 'نکات کلیدی رزرو باغ‌تالار، بررسی منوی غذا، تخفیف وسط هفته و مدیریت ظرفیت مهمانان.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      readTime: 'خواندن ۴ دقیقه',
      category: 'تالار و تشریفات'
    },
    {
      id: 2,
      title: 'ترندهای عکاسی فرمالیته عروسی در کویر شباهنگ یزد',
      summary: 'آشنایی با بهترین ساعت عکاسی غروب، ژست‌های دونفره و تصویربرداری هوایی هلی‌شات.',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
      readTime: 'خواندن ۳ دقیقه',
      category: 'عکاسی & فیلم‌برداری'
    },
    {
      id: 3,
      title: 'جدیدترین سبک‌های میکاپ لایت عروس و تور مرواریدی ۱۴۰۳',
      summary: 'مرور سبک‌های میکاپ ضدآب، گریم هالیوودی و هماهنگی تور مروارید با تاج زمرد.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
      readTime: 'خواندن ۵ دقیقه',
      category: 'زیبایی & میکاپ'
    }
  ];

  articles.slice(0, 3).forEach(art => {
    const card = document.createElement('div');
    card.className = "bg-[#1E293B] border border-slate-700 hover:border-[#D4AF37] rounded-2xl overflow-hidden shadow-lg space-y-3 cursor-pointer group transition-all hover:scale-[1.02]";
    card.setAttribute('onclick', `switchTab('inspiration'); if(typeof openArticleModal==='function') openArticleModal(${art.id});`);
    card.innerHTML = `
      <div class="relative h-44 overflow-hidden">
        <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500">
        <span class="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-black px-2.5 py-1 rounded-full">
          ${art.category || 'ژورنال'}
        </span>
      </div>
      <div class="p-4 space-y-2 text-right">
        <h3 class="text-xs font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug">${art.title}</h3>
        <p class="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">${art.summary}</p>
        <div class="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-amber-200">
          <span>⏱️ ${art.readTime || 'خواندن ۳ دقیقه'}</span>
          <span class="text-[#D4AF37] font-bold">مطالعه کامل ←</span>
        </div>
      </div>
    `;
    feed.appendChild(card);
  });
};

/* ==========================================================================
   SMART WEDDING COUNTDOWN CHECKLIST WIDGET HANDLER
   ========================================================================== */
let currentSmartChecklistPhase = 0;

window.renderSmartCountdownWidget = function(phaseIndex = 0) {
  currentSmartChecklistPhase = phaseIndex;
  const tabsContainer = document.getElementById('smart-checklist-phase-tabs');
  const tasksContainer = document.getElementById('smart-checklist-tasks-container');
  const milestoneBadge = document.getElementById('smart-checklist-milestone-badge');
  if (!tabsContainer || !tasksContainer) return;

  const phases = [
    { name: "۱۲ ماه تا عروسی", desc: "تعیین بودجه & تاریخ", tasks: ["تعیین سقف بودجه کل و سهم‌بندی", "انتخاب تاریخ تقریبی و بررسی فصل", "افتتاح حساب مشترک هزینه‌ها"] },
    { name: "۶ ماه تا عروسی", desc: "انتخاب باغ تالار & عکاس", tasks: ["رزرو باغ تالار و کترینگ", "انتخاب آتلیه عکاسی و فیلمبرداری", "برآورد اولیه بودجه مراسم"] },
    { name: "۳ ماه تا عروسی", desc: "لباس، آرایشگاه & سفره عقد", tasks: ["پرو و سفارش لباس عروس و داماد", "رزرو سالن زیبایی و میکاپ", "انتخاب دکوراسیون و سفره عقد"] },
    { name: "۱ ماه تا عروسی", desc: "کارت دعوت & هماهنگی نهایی", tasks: ["طراحی و ارسال کارت دعوت دیجیتال", "هماهنگی ماشین عروس و گل‌آرایی", "نهایی‌سازی لیست مهمانان"] },
    { name: "۱ هفته تا عروسی", desc: "تست نهایی & استراحت", tasks: ["پرو نهایی لباس عروس", "تست منوی غذا و پذیرایی", "تحویل مدارک تشریفات"] }
  ];

  const currentPhase = phases[phaseIndex] || phases[0];
  if (milestoneBadge) milestoneBadge.innerText = currentPhase.name;

  tabsContainer.innerHTML = phases.map((p, idx) => `
    <button type="button" onclick="renderSmartCountdownWidget(${idx})" class="px-3.5 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${idx === phaseIndex ? 'bg-[#D4AF37] text-[#0F251A] font-black shadow-md' : 'bg-[#1E293B]/80 text-slate-300 hover:text-white border border-[#D4AF37]/20'}">
      <span>${p.name}</span>
    </button>
  `).join('');

  tasksContainer.innerHTML = currentPhase.tasks.map((tsk, tIdx) => `
    <div class="p-3 bg-[#1E293B]/90 border border-[#D4AF37]/30 rounded-xl flex items-center justify-between gap-3 text-xs font-bold text-white shadow-xs">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center text-[10px] shrink-0">✓</span>
        <span>${tsk}</span>
      </div>
      <span class="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30 shrink-0">اولویت بالارتبه</span>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
};

window.openVendorSelectModal = typeof openVendorSelectModal !== 'undefined' ? openVendorSelectModal : function(taskId) {
  const task = (typeof staticChecklist !== 'undefined' ? staticChecklist : []).find(t => t.id === taskId);
  if (!task) return;
  const idEl = document.getElementById('vselect-task-id');
  const titleEl = document.getElementById('vselect-task-title');
  if (idEl) idEl.value = task.id;
  if (titleEl) titleEl.innerText = `اتصال تأمین‌کننده به اقدام: ${task.title}`;

  const vendorSelect = document.getElementById('vselect-vendor-id');
  if (vendorSelect) {
    vendorSelect.innerHTML = '';
    (typeof vendors !== 'undefined' ? vendors : []).forEach(v => {
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

  const modal = document.getElementById('vendor-select-modal');
  if (modal) modal.classList.remove('hidden');
};

window.closeVendorSelectModal = typeof closeVendorSelectModal !== 'undefined' ? closeVendorSelectModal : function() {
  const modal = document.getElementById('vendor-select-modal');
  if (modal) modal.classList.add('hidden');
};

window.handleSaveVendorAttachment = typeof handleSaveVendorAttachment !== 'undefined' ? handleSaveVendorAttachment : function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const taskId = document.getElementById('vselect-task-id')?.value;
  const vendorId = parseInt(document.getElementById('vselect-vendor-id')?.value);
  const status = document.getElementById('vselect-status')?.value;

  const task = (typeof staticChecklist !== 'undefined' ? staticChecklist : []).find(t => t.id === taskId);
  if (task) {
    task.attachedVendorId = vendorId;
    task.vendorStatus = status;
    if (typeof renderChecklistTimeline === 'function') renderChecklistTimeline();
    if (typeof showToast === 'function') showToast('تامین‌کننده با موفقیت به اقدام متصل شد.', 'success');
  }

  if (typeof closeVendorSelectModal === 'function') closeVendorSelectModal();
};

window.detachVendorFromTask = typeof detachVendorFromTask !== 'undefined' ? detachVendorFromTask : function(taskId) {
  const task = (typeof staticChecklist !== 'undefined' ? staticChecklist : []).find(t => t.id === taskId);
  if (task) {
    task.attachedVendorId = null;
    task.vendorStatus = null;
    if (typeof renderChecklistTimeline === 'function') renderChecklistTimeline();
    if (typeof showToast === 'function') showToast('اتصال تامین‌کننده حذف گردید.', 'info');
  }
};

/* ==========================================================================
   LIVE EVENT PORTFOLIO TIMELINE HANDLER FOR VENDOR PROFILE MODAL
   ========================================================================== */
window.renderVendorPortfolioTimeline = function(vendor, activeStageIndex = 0) {
  const container = document.getElementById('vdm-portfolio-timeline');
  if (!container) return;

  const stages = [
    { title: "۱. آماده‌سازی & گریم", time: "۱۴:۰۰ الی ۱۶:۳۰", desc: "گریم، جامه و هماهنگی نهایی تشریفات", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" },
    { title: "۲. مراسم عقد & سفره", time: "۱۷:۰۰ الی ۱۸:۳۰", desc: "اجرای عقد رسمی، پذیرایی چای و شیرینی سنتی", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" },
    { title: "۳. ورود به سالن & استقبال", time: "۱۹:۰۰ الی ۲۰:۰۰", desc: "فرش قرمز، نورپردازی VIP و ورود عروس و داماد", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80" },
    { title: "۴. رقص تانگو & کیک", time: "۲۰:۳۰ الی ۲۱:۳۰", desc: "اجرای تانگو با مه سرد و برش کیک تشریفاتی", img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80" },
    { title: "۵. آتش‌بازی & بدرقه", time: "۲۲:۰۰ الی ۲۳:۰۰", desc: "نورافشانی صحنه، آتش‌بازی سرد و بدرقه مهمانان", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" }
  ];

  const current = stages[activeStageIndex] || stages[0];

  container.innerHTML = `
    <div class="space-y-4 text-right">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h4 class="text-xs sm:text-sm font-black text-[#D4AF37] flex items-center gap-2">
          <i data-lucide="clock" class="w-4 h-4 text-[#D4AF37]"></i>
          <span>تایم‌لاین زنده مراحل برگزاری مراسم</span>
        </h4>
        <span class="text-[10px] text-amber-200 bg-[#1E293B] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full font-bold">
          ${current.time}
        </span>
      </div>

      <!-- Pills for selecting stage -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
        ${stages.map((stg, idx) => `
          <button type="button" onclick="renderVendorPortfolioTimeline(currentModalVendor, ${idx})" class="px-3 py-1.5 rounded-xl text-[11px] font-bold shrink-0 transition-all cursor-pointer ${idx === activeStageIndex ? 'bg-[#D4AF37] text-[#0F251A] shadow-md' : 'bg-[#1E293B] text-slate-300 hover:text-white border border-slate-700'}">
            ${stg.title}
          </button>
        `).join('')}
      </div>

      <!-- Stage Detail Box -->
      <div class="p-4 bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
        <img src="${current.img}" alt="${current.title}" class="w-full sm:w-44 h-28 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0">
        <div class="space-y-1.5 text-right w-full">
          <div class="flex items-center justify-between">
            <h5 class="text-sm font-black text-white">${current.title}</h5>
            <span class="text-xs font-black text-[#D4AF37]">${current.time}</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${current.desc}</p>
          <div class="pt-1 flex items-center gap-2 text-[10px] text-emerald-400 font-bold">
            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
            <span>مرحله استاندارد تاییدشده توسط تشریفات پلتفرم</span>
          </div>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
};

/* ==========================================================================
   VIRTUAL 360 VENUE TOUR PANORAMA MODAL HANDLERS
   ========================================================================== */
let current360PanOffset = 0;

window.open360TourModal = function(vendorId) {
  const modal = document.getElementById('modal-360-tour');
  const vendorObj = (typeof vendors !== 'undefined' ? vendors : []).find(v => v && v.id === vendorId) || { name: 'تالار و باغ تشریفات عروسی یزد' };

  const nameEl = document.getElementById('m360-vendor-name');
  if (nameEl) nameEl.innerText = vendorObj.name;

  current360PanOffset = 0;
  const container = document.getElementById('m360-pano-container');
  if (container) {
    container.style.transform = `scale(1.1) translateX(${current360PanOffset}px)`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  if (window.lucide) lucide.createIcons();
};

window.close360TourModal = function() {
  const modal = document.getElementById('modal-360-tour');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.rotate360Panorama = function(direction) {
  const container = document.getElementById('m360-pano-container');
  if (!container) return;
  const step = direction === 'left' ? -120 : 120;
  current360PanOffset += step;
  if (current360PanOffset > 360) current360PanOffset = -360;
  if (current360PanOffset < -360) current360PanOffset = 360;
  container.style.transform = `scale(1.15) translateX(${current360PanOffset}px)`;
};

window.switch360Scene = function(sceneKey) {
  const img = document.getElementById('m360-pano-image');
  const scenes = {
    main: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80",
    garden: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    sofreh: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80"
  };
  if (img && scenes[sceneKey]) {
    img.src = scenes[sceneKey];
  }

  ['main', 'garden', 'sofreh'].forEach(s => {
    const btn = document.getElementById(`m360-scene-btn-${s}`);
    if (btn) {
      if (s === sceneKey) {
        btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-[#D4AF37] text-[#0F251A] shadow-md cursor-pointer";
      } else {
        btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer";
      }
    }
  });
};

/* ==========================================================================
   DIGITAL ACCEPTANCE & SIGNATURE ON PRE-INVOICE LOGIC
   ========================================================================== */
window.confirmPreInvoiceSignature = function() {
  const container = document.getElementById('pip-client-stamp-container');
  const status = document.getElementById('pip-client-sig-status');

  if (container) {
    container.innerHTML = `
      <div class="w-24 h-24 border-2 border-dashed border-emerald-700 rounded-full flex flex-col items-center justify-center rotate-[4deg] p-1 text-[9px] text-emerald-800 font-bold bg-emerald-100/80 shadow-sm animate-scaleUp">
        <span class="text-[8px] font-black text-emerald-900">امضای دیجیتال</span>
        <span>تایید خریدار</span>
        <span class="text-[7px] font-mono text-emerald-900">کد: ${Math.floor(100000 + Math.random() * 900000)}</span>
        <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-700 mt-0.5"></i>
      </div>
    `;
  }
  if (status) {
    status.innerText = "وضعیت: امضا و ثبت نهایی شد ✓";
    status.className = "text-[10px] text-emerald-800 font-black block";
  }

  showToast('پیش‌فاکتور با موفقیت و امضای دیجیتال تایید و ثبت نهایی گردید!', 'success', 4000);
  if (window.lucide) lucide.createIcons();
};

/* ==========================================================================
   VENDOR PANEL REDESIGN & STORY MANAGEMENT
   ========================================================================== */
let vendorStoriesList = JSON.parse(localStorage.getItem('aroosi_vendor_stories_2') || '[]');

let vendorArticlesList = JSON.parse(localStorage.getItem('aroosi_vendor_articles_2') || '[]');

window.switchVendorPanelTab = function(tabName) {
  const tabs = ['overview', 'inquiries', 'calendar', 'stories', 'articles', 'profile'];
  tabs.forEach(t => {
    const pane = document.getElementById(`vpanel-pane-${t}`);
    const btn = document.getElementById(`vpanel-tab-btn-${t}`);
    if (pane) {
      if (t === tabName) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    }
    if (btn) {
      if (t === tabName) {
        btn.className = "px-3.5 py-2 rounded-2xl text-xs font-black transition-all bg-[#D4AF37] text-[#0F251A] shadow-md cursor-pointer flex items-center gap-1.5";
      } else {
        btn.className = "px-3.5 py-2 rounded-2xl text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer flex items-center gap-1.5";
      }
    }
  });

  if (tabName === 'calendar' && typeof renderVendorDashCalendar === 'function') {
    renderVendorDashCalendar();
  }
  if (tabName === 'inquiries' && typeof renderVendorInquiriesDynamic === 'function') {
    renderVendorInquiriesDynamic();
    if (typeof renderVendorReverseBids === 'function') renderVendorReverseBids();
  }
  if (tabName === 'stories' && typeof renderVendorStoriesList === 'function') {
    renderVendorStoriesList();
  }
  if (tabName === 'articles' && typeof renderVendorArticlesList === 'function') {
    renderVendorArticlesList();
  }

  if (window.lucide) lucide.createIcons();
};

window.handleCreateVendorArticle = function(e) {
  e.preventDefault();
  const title = document.getElementById('varticle-title')?.value.trim();
  const category = document.getElementById('varticle-category')?.value || 'عکاسی و فیلمبرداری';
  const cover = document.getElementById('varticle-cover')?.value.trim();
  const summary = document.getElementById('varticle-summary')?.value.trim();
  const content = document.getElementById('varticle-content')?.value.trim();

  if (!title || !cover || !summary || !content) {
    showToast('لطفا تمامی فیلدهای مقاله را تکمیل کنید.', 'warning');
    return;
  }

  const newArticle = {
    id: Date.now(),
    title: title,
    categoryName: category,
    image: cover,
    summary: summary,
    content: content,
    author: 'استودیو کویر یزد',
    viewsCount: '۱۲۴',
    date: 'امروز'
  };

  vendorArticlesList.unshift(newArticle);
  try {
    localStorage.setItem('aroosi_vendor_articles_2', JSON.stringify(vendorArticlesList));
  } catch(err) {}

  showToast('مقاله/ایده جدید با موفقیت جهت بررسی هیئت تحریریه ثبت گردید!', 'success');
  document.getElementById('varticle-form')?.reset();
  window.renderVendorArticlesList();
};

window.renderVendorArticlesList = function() {
  const container = document.getElementById('vpanel-articles-list');
  if (!container) return;

  if (vendorArticlesList.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs font-bold bg-[#1E293B] rounded-2xl border border-slate-700">هنوز مقاله‌ای ثبت نکرده‌اید. با فرم بالا اولین ایده/مقاله تخصصی خود را منتشر کنید!</div>`;
    return;
  }

  container.innerHTML = vendorArticlesList.map(a => `
    <div class="p-3.5 bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-between gap-3 text-right">
      <div class="flex items-center gap-3">
        <img src="${a.image}" alt="${a.title}" class="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0">
        <div class="space-y-0.5">
          <h4 class="text-xs font-black text-white">${a.title}</h4>
          <span class="text-[10px] text-amber-200 font-bold block">${a.categoryName} • ${a.date}</span>
        </div>
      </div>
      <button type="button" onclick="deleteVendorArticle(${a.id})" class="text-rose-400 hover:text-rose-200 text-xs font-bold p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/40 cursor-pointer" title="حذف">
        حذف
      </button>
    </div>
  `).join('');
};

window.deleteVendorArticle = function(articleId) {
  vendorArticlesList = vendorArticlesList.filter(a => a.id !== articleId);
  try {
    localStorage.setItem('aroosi_vendor_articles_2', JSON.stringify(vendorArticlesList));
  } catch(err) {}

  showToast('مقاله با موفقیت حذف شد.', 'info');
  window.renderVendorArticlesList();
};

window.handleCreateVendorStory = function(e) {
  e.preventDefault();
  const title = document.getElementById('vstory-title')?.value.trim();
  const imageUrl = document.getElementById('vstory-url')?.value.trim();
  const category = document.getElementById('vstory-category')?.value || 'کویر فرمالیته';

  if (!title || !imageUrl) {
    showToast('لطفا عنوان و آدرس تصویر/ویدیو را وارد کنید.', 'warning');
    return;
  }

  const newStory = {
    id: Date.now(),
    title: title,
    image: imageUrl,
    category: category,
    date: 'امروز'
  };

  vendorStoriesList.unshift(newStory);
  try {
    localStorage.setItem('aroosi_vendor_stories_2', JSON.stringify(vendorStoriesList));
  } catch(err) {}

  showToast('استوری/هایلایت جدید با موفقیت منتشر شد و در نوار هایلایت دایرکتوری قرار گرفت!', 'success');

  document.getElementById('vstory-form')?.reset();
  window.renderVendorStoriesList();
};

window.renderVendorStoriesList = function() {
  const container = document.getElementById('vpanel-stories-list');
  if (!container) return;

  if (vendorStoriesList.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs font-bold bg-[#1E293B] rounded-2xl border border-slate-700">هنوز استوری ثبت نکرده‌اید. با فرم بالا اولین نمونه‌کار خود را منتشر کنید!</div>`;
    return;
  }

  container.innerHTML = vendorStoriesList.map(s => `
    <div class="p-3.5 bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-between gap-3 text-right">
      <div class="flex items-center gap-3">
        <img src="${s.image}" alt="${s.title}" class="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0">
        <div class="space-y-0.5">
          <h4 class="text-xs font-black text-white">${s.title}</h4>
          <span class="text-[10px] text-amber-200 font-bold block">${s.category} • ${s.date}</span>
        </div>
      </div>
      <button type="button" onclick="deleteVendorStory(${s.id})" class="text-rose-400 hover:text-rose-200 text-xs font-bold p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/40 cursor-pointer" title="حذف">
        حذف
      </button>
    </div>
  `).join('');
};

window.deleteVendorStory = function(storyId) {
  vendorStoriesList = vendorStoriesList.filter(s => s.id !== storyId);
  try {
    localStorage.setItem('aroosi_vendor_stories_2', JSON.stringify(vendorStoriesList));
  } catch(err) {}

  showToast('استوری با موفقیت حذف گردید.', 'info');
  window.renderVendorStoriesList();
};

/* ==========================================================================
   SUPER ADMIN PANEL REDESIGN
   ========================================================================== */
window.switchAdminPanelTab = function(tabName) {
  const tabs = ['analytics', 'vendors', 'content', 'subscriptions', 'reviews', 'settings'];
  tabs.forEach(t => {
    const pane = document.getElementById(`apanel-pane-${t}`);
    const btn = document.getElementById(`apanel-tab-btn-${t}`);
    if (pane) {
      if (t === tabName) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    }
    if (btn) {
      if (t === tabName) {
        btn.className = "px-3.5 py-2 rounded-2xl text-xs font-black transition-all bg-[#D4AF37] text-[#0F251A] shadow-md cursor-pointer flex items-center gap-1.5";
      } else {
        btn.className = "px-3.5 py-2 rounded-2xl text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer flex items-center gap-1.5";
      }
    }
  });

  if (tabName === 'vendors' && typeof renderAdminPendingApps === 'function') {
    renderAdminPendingApps();
  }
  if (tabName === 'subscriptions' && typeof renderAdminSubscriptionPlansTable === 'function') {
    renderAdminSubscriptionPlansTable();
  }

  if (window.lucide) lucide.createIcons();
};

window.previewPreInvoicePrint = function() {
  const couple = document.getElementById('inv-builder-couple')?.value || 'علی و سارا';
  const phone = document.getElementById('inv-builder-phone')?.value || '۰۹۱۳۰۰۰۰۰۰۰';
  const eventDate = document.getElementById('inv-builder-date')?.value || '۱۴۰۳/۰۶/۱۵';
  const total = document.getElementById('inv-builder-total')?.value || '۴۵,۰۰۰,۰۰۰';
  const subtotal = document.getElementById('inv-builder-subtotal')?.value || '۴۵,۰۰۰,۰۰۰';
  const discount = document.getElementById('inv-builder-discount')?.value || '۰';
  const deposit = document.getElementById('inv-builder-deposit')?.value || '۱۰,۰۰۰,۰۰۰';
  const inst2 = document.getElementById('inv-builder-installment2')?.value || '۱۵,۷۵۰,۰۰۰';
  const balance = document.getElementById('inv-builder-balance')?.value || '۱۹,۲۵۰,۰۰۰';
  const validity = document.getElementById('inv-builder-validity')?.value || '۳ روز کاری';

  const activeVendor = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? (vendors.find(v => v.id === 2) || vendors[0]) : {};

  const structuredData = {
    num: 'INV-1403-' + Math.floor(100 + Math.random() * 900),
    date: new Date().toLocaleDateString('fa-IR'),
    validity: validity,
    vendorName: activeVendor.name || 'استودیو و آتلیه تخصصی کویر یزد',
    vendorPhone: activeVendor.phone || '۰۳۵-۳۸۲۵۲۲۲۲',
    vendorAddress: activeVendor.address || 'یزد، میدان اطلسی، مجتمع آریا',
    vendorCode: 'YZD-VND-' + (activeVendor.id || 2),
    coupleName: couple,
    couplePhone: phone,
    eventDate: eventDate,
    eventLocation: activeVendor.address || 'استان یزد',
    title: invoiceItemsList[0]?.name || 'پکیج خدمات تشریفات عروسی',
    total: total + ' تومان',
    subtotal: subtotal + ' تومان',
    discount: discount + ' تومان',
    deposit: deposit + ' تومان',
    installment2: inst2 + ' تومان',
    balance: balance + ' تومان',
    items: invoiceItemsList.map(item => ({
      name: item.name,
      qty: item.qty,
      unitPrice: (item.unitPrice || 0).toLocaleString('fa-IR'),
      discount: '۰',
      total: ((item.qty || 1) * (item.unitPrice || 0)).toLocaleString('fa-IR')
    })),
    trackCode: 'AROOSI-' + Math.floor(10000 + Math.random() * 90000) + '-YZD'
  };

  if (typeof window.openPreInvoicePrintModal === 'function') {
    window.openPreInvoicePrintModal(structuredData);
  }
};

window.triggerPreInvoicePrint = function() {
  window.previewPreInvoicePrint();
  setTimeout(() => {
    window.print();
  }, 300);
};

window.toggleMasterDiscountBadge = function(isCheck) {
  const label = document.getElementById('vd-discount-toggle-label');
  if (label) {
    label.innerText = isCheck ? 'نشان تخفیف روی پروفایل: فعال' : 'نشان تخفیف روی پروفایل: غیرفعال';
  }
  if (typeof showToast === 'function') {
    showToast(isCheck ? '🏷️ نشان تخفیف‌های ویژه روی پروفایل عمومی فعال شد.' : 'نشان تخفیف‌های عمومی غیرفعال گردید.', 'info');
  }
};

// ==========================================
// ISOLATED STEP 2: VENDOR DASHBOARD UPGRADES
// ==========================================

// 1. PROMOTIONS & DISCOUNT BADGES STATE & FUNCTIONS
let vendorPromosState = [];
try {
  const savedPromos = localStorage.getItem('aroosi_vendor_promos_2');
  if (savedPromos) {
    vendorPromosState = JSON.parse(savedPromos);
  }
} catch (e) { vendorPromosState = []; }

if (!vendorPromosState || !vendorPromosState.length) {
  vendorPromosState = [
    { id: 'promo-1', title: 'تخفیف ۲۰٪ فصل پاییز', discountPct: 20, expiryDays: 5, description: 'ویژه عکاسی و کلیپ فرمالیته کویر یزد با مجوز رسمی', active: true },
    { id: 'promo-2', title: 'تخفیف رزرو وسط هفته (۱۵٪)', discountPct: 15, expiryDays: 12, description: 'ویژه مراسم‌های روزهای شنبه تا چهارشنبه', active: false },
    { id: 'promo-3', title: 'پیشنهاد هدیه ویژه رزرو زودهنگام', discountPct: 10, expiryDays: 30, description: 'رزرو حداقل ۶۰ روز قبل از تاریخ مراسم', active: true }
  ];
}

window.renderVendorPromoBadges = function() {
  const container = document.getElementById('vd-promo-badges-list');
  if (!container) return;
  container.innerHTML = '';

  vendorPromosState.forEach(promo => {
    const card = document.createElement('div');
    card.className = `p-4 border rounded-2xl space-y-2.5 transition-all ${
      promo.active ? 'bg-white border-primary/40 shadow-xs' : 'bg-bgCustom border-accent/80 opacity-75'
    }`;
    card.innerHTML = `
      <div class="flex justify-between items-center gap-2">
        <span class="text-graphite font-black text-xs truncate">${promo.title}</span>
        <span class="${promo.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'} text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0">
          ${promo.active ? 'فعال' : 'غیرفعال'}
        </span>
      </div>
      <div class="flex items-center gap-2 flex-wrap text-[11px]">
        <span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
          <i data-lucide="zap" class="w-3 h-3 text-rose-600"></i>
          <span>${promo.discountPct}٪ تخفیف</span>
        </span>
        <span class="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
          <i data-lucide="clock" class="w-3 h-3 text-amber-600"></i>
          <span>${promo.expiryDays} روز باقی‌مانده</span>
        </span>
      </div>
      <p class="text-[11px] text-secondary font-normal line-clamp-2">${promo.description || 'توضیحات پیشنهاد ویژه'}</p>
      <div class="flex items-center justify-end gap-1.5 pt-2 border-t border-accent/60">
        <button type="button" onclick="togglePromoBadgeStatus('${promo.id}')" class="bg-bgCustom hover:bg-slate-100 text-graphite border border-accent py-1 px-2.5 rounded-lg font-bold text-[11px] transition-colors cursor-pointer">
          ${promo.active ? 'غیرفعال‌سازی' : 'فعال‌سازی'}
        </button>
        <button type="button" onclick="openPromoBadgeModal('${promo.id}')" class="bg-white hover:bg-emerald-50 text-primary border border-primary/30 py-1 px-2.5 rounded-lg font-bold text-[11px] transition-colors cursor-pointer">
          ویرایش
        </button>
        <button type="button" onclick="deletePromoBadge('${promo.id}')" class="bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 py-1 px-2.5 rounded-lg font-bold text-[11px] transition-colors cursor-pointer">
          حذف
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();

  const vendor2 = vendors.find(v => v.id === 2);
  if (vendor2) {
    vendor2.promoBadges = vendorPromosState;
  }
};

window.openPromoBadgeModal = function(promoId = null) {
  const modal = document.getElementById('modal-vendor-promo-badge');
  if (!modal) return;

  document.getElementById('promo-edit-id').value = promoId || '';
  if (promoId) {
    const promo = vendorPromosState.find(p => p.id === promoId);
    if (promo) {
      document.getElementById('promo-title').value = promo.title || '';
      document.getElementById('promo-discount-pct').value = promo.discountPct || 10;
      document.getElementById('promo-expiry-days').value = promo.expiryDays || 7;
      document.getElementById('promo-description').value = promo.description || '';
      document.getElementById('promo-active-toggle').checked = !!promo.active;
      document.getElementById('modal-promo-title').innerText = 'ویرایش نشان تخفیف ویژه';
    }
  } else {
    document.getElementById('form-vendor-promo-badge')?.reset();
    document.getElementById('promo-edit-id').value = '';
    document.getElementById('modal-promo-title').innerText = 'افزودن نشان تخفیف ویژه جدید';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closePromoBadgeModal = function() {
  const modal = document.getElementById('modal-vendor-promo-badge');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.saveAdminSubPlan = function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const idInput = document.getElementById('sub-plan-id');
  const titleInput = document.getElementById('sub-plan-title');
  const durationInput = document.getElementById('sub-plan-duration');
  const priceInput = document.getElementById('sub-plan-price');
  const badgeInput = document.getElementById('sub-plan-badge');
  const featuresInput = document.getElementById('sub-plan-features');
  const activeInput = document.getElementById('sub-plan-active');

  const title = titleInput ? titleInput.value.trim() : '';
  const duration = durationInput ? durationInput.value.trim() : '';
  const price = priceInput ? priceInput.value.trim() : '';
  const badge = badgeInput ? badgeInput.value.trim() : '';
  const features = featuresInput ? featuresInput.value.trim() : '';
  const active = activeInput ? activeInput.checked : true;

  if (!title || !duration || !price) {
    if (typeof showToast === 'function') {
      showToast('لطفا فیلدهای ضروری (عنوان، مدت اعتبار و قیمت) را تکمیل نمایید.', 'warning');
    }
    return;
  }

  let plans = window.getAdminSubPlans();
  const planId = idInput ? idInput.value : '';

  if (planId) {
    plans = plans.map(p => p.id === Number(planId) ? {
      ...p,
      title,
      duration,
      price,
      badge,
      features,
      active
    } : p);
    if (typeof showToast === 'function') {
      showToast(`پلن اشتراک «${title}» با موفقیت بروزرسانی شد.`, 'success');
    }
  } else {
    const newId = plans.length > 0 ? Math.max(...plans.map(p => p.id || 0)) + 1 : 1;
    plans.push({
      id: newId,
      title,
      duration,
      price,
      badge,
      features,
      active
    });
    if (typeof showToast === 'function') {
      showToast(`پلن اشتراک جدید «${title}» با موفقیت ثبت شد.`, 'success');
    }
  }

  window.saveAdminSubPlans(plans);
  window.closeAdminSubPlanModal();
  window.renderAdminSubscriptionPlansTable();
};

window.deleteAdminSubPlan = function(planId) {
  if (!confirm('آیا از حذف این پلن اشتراک اطمینان دارید؟')) return;

  let plans = window.getAdminSubPlans();
  plans = plans.filter(p => p.id !== Number(planId));
  window.saveAdminSubPlans(plans);
  window.renderAdminSubscriptionPlansTable();

  if (typeof showToast === 'function') {
    showToast('پلن اشتراک با موفقیت حذف گردید.', 'info');
  }
};

window.savePromoBadgeModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const editId = document.getElementById('promo-edit-id').value;
  const title = document.getElementById('promo-title').value.trim();
  const discountPct = parseInt(document.getElementById('promo-discount-pct').value, 10) || 10;
  const expiryDays = parseInt(document.getElementById('promo-expiry-days').value, 10) || 7;
  const description = document.getElementById('promo-description').value.trim();
  const active = document.getElementById('promo-active-toggle').checked;

  if (!title) return;

  if (editId) {
    vendorPromosState = vendorPromosState.map(p => p.id === editId ? { ...p, title, discountPct, expiryDays, description, active } : p);
    showToast('نشان تخفیف با موفقیت به روزرسانی شد.', 'success');
  } else {
    vendorPromosState.push({
      id: 'promo-' + Date.now(),
      title,
      discountPct,
      expiryDays,
      description,
      active
    });
    showToast('نشان تخفیف جدید ایجاد شد و روی پروفایل فعال گردید.', 'success');
  }

  try {
    localStorage.setItem('aroosi_vendor_promos_2', JSON.stringify(vendorPromosState));
  } catch (err) {}

  renderVendorPromoBadges();
  closePromoBadgeModal();
  if (typeof renderVendors === 'function') renderVendors(vendors);
};

window.deletePromoBadge = function(promoId) {
  vendorPromosState = vendorPromosState.filter(p => p.id !== promoId);
  try {
    localStorage.setItem('aroosi_vendor_promos_2', JSON.stringify(vendorPromosState));
  } catch (err) {}
  renderVendorPromoBadges();
  if (typeof renderVendors === 'function') renderVendors(vendors);
  showToast('نشان تخفیف حذف گردید.', 'info');
};

window.togglePromoBadgeStatus = function(promoId) {
  vendorPromosState = vendorPromosState.map(p => p.id === promoId ? { ...p, active: !p.active } : p);
  try {
    localStorage.setItem('aroosi_vendor_promos_2', JSON.stringify(vendorPromosState));
  } catch (err) {}
  renderVendorPromoBadges();
  if (typeof renderVendors === 'function') renderVendors(vendors);
  showToast('وضعیت نشان تخفیف تغییر یافت.', 'info');
};

// 2. CALENDAR DAY BLOCKING STATE & FUNCTIONS
let vendorBlockedDates = [];
try {
  const savedBlocked = localStorage.getItem('aroosi_vendor_blocked_2');
  if (savedBlocked) vendorBlockedDates = JSON.parse(savedBlocked);
} catch(e) { vendorBlockedDates = []; }

if (!vendorBlockedDates || !vendorBlockedDates.length) {
  vendorBlockedDates = [5, 12, 18, 25];
}

window.renderVendorDashCalendar = function() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Render Day Name Headers
  const dayHeaders = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
  dayHeaders.forEach(h => {
    const hEl = document.createElement('div');
    hEl.className = "font-black text-[11px] text-[#D4AF37] py-2 bg-[#1E293B] rounded-xl border border-[#D4AF37]/30 text-center shadow-xs";
    hEl.innerText = h;
    grid.appendChild(hEl);
  });

  const bookedDays = [3, 15, 22];

  for (let day = 1; day <= 30; day++) {
    const isBlocked = vendorBlockedDates.includes(day);
    const isBooked = bookedDays.includes(day);

    const dayBtn = document.createElement('button');
    dayBtn.type = 'button';
    dayBtn.onclick = () => toggleVendorBlockedDate(day);

    let statusClass = "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100 cursor-pointer";
    let statusLabel = "آزاد";

    if (isBooked) {
      statusClass = "bg-amber-100 text-amber-900 border-amber-300 font-black cursor-pointer";
      statusLabel = "رزرو نهایی";
    } else if (isBlocked) {
      statusClass = "bg-rose-100 text-rose-900 border-rose-300 font-black cursor-pointer";
      statusLabel = "پر / تعطیل";
    }

    dayBtn.className = `p-2.5 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 shadow-2xs ${statusClass}`;
    dayBtn.innerHTML = `
      <span class="text-sm font-black">${day}</span>
      <span class="text-[9px] px-1.5 py-0.2 rounded-full ${
        isBlocked ? 'bg-rose-200 text-rose-900' : isBooked ? 'bg-amber-200 text-amber-950' : 'bg-emerald-200 text-emerald-900'
      }">${statusLabel}</span>
    `;

    grid.appendChild(dayBtn);
  }

  const vendor2 = vendors.find(v => v.id === 2);
  if (vendor2) {
    vendor2.blockedDates = vendorBlockedDates;
  }
};

window.toggleVendorBlockedDate = function(dayNum) {
  if (vendorBlockedDates.includes(dayNum)) {
    vendorBlockedDates = vendorBlockedDates.filter(d => d !== dayNum);
    showToast(`روز ${dayNum} شهريور از حالت تعطیل خارج و آزاد شد.`, 'success');
  } else {
    vendorBlockedDates.push(dayNum);
    showToast(`روز ${dayNum} شهريور به عنوان روز پر / تعطیل علامت‌گذاری شد.`, 'info');
  }

  try {
    localStorage.setItem('aroosi_vendor_blocked_2', JSON.stringify(vendorBlockedDates));
  } catch (err) {}

  renderVendorDashCalendar();
};

// 3. ESSENTIAL VENDOR CONTROLS: LEADS TABLE & ANALYTICS
let vendorAnalytics = { views: 3850, inquiries: 162, conversionRate: "4.2%", favorites: 48 };
try {
  const savedAnalytics = localStorage.getItem('aroosi_vendor_analytics_2');
  if (savedAnalytics) vendorAnalytics = JSON.parse(savedAnalytics);
} catch(e) {}

window.updateVendorAnalyticsUI = function() {
  const viewsEl = document.getElementById('vd-kpi-views');
  const convEl = document.getElementById('vd-kpi-conversion');
  const leadsEl = document.getElementById('vd-kpi-leads');
  const badgeEl = document.getElementById('vd-unread-inquiries-badge');

  if (viewsEl) viewsEl.innerHTML = `${vendorAnalytics.views.toLocaleString('fa-IR')} <span class="text-xs font-normal text-secondary">بازدید</span>`;
  if (convEl) convEl.innerHTML = `${vendorAnalytics.conversionRate} <span class="text-xs font-normal text-secondary">استعلام</span>`;
  if (leadsEl) leadsEl.innerHTML = `${inquiries.length.toLocaleString('fa-IR')} <span class="text-xs font-normal text-secondary">درخواست</span>`;

  const pendingCount = inquiries.filter(i => (i.status || 'pending') === 'pending').length;
  if (badgeEl) {
    badgeEl.innerText = `${pendingCount.toLocaleString('fa-IR')} درخواست جدید لید`;
  }
};

window.incrementVendorViewCount = function(vendorId) {
  if (vendorId === 2) {
    vendorAnalytics.views += 1;
    const conv = ((inquiries.length / vendorAnalytics.views) * 100).toFixed(1) + '%';
    vendorAnalytics.conversionRate = conv;
    try {
      localStorage.setItem('aroosi_vendor_analytics_2', JSON.stringify(vendorAnalytics));
    } catch(e) {}
    updateVendorAnalyticsUI();
  }
};

// ==========================================================================
// VENDOR KANBAN CRM BOARD & REVERSE BIDDING SYSTEM
// ==========================================================================
let vendorInquiryViewMode = 'kanban';

window.setVendorInquiryViewMode = function(mode) {
  vendorInquiryViewMode = mode;
  const kanbanContainer = document.getElementById('vpanel-kanban-board-container');
  const listContainer = document.getElementById('inquiry-list');
  const kanbanBtn = document.getElementById('vpanel-view-kanban-btn');
  const listBtn = document.getElementById('vpanel-view-list-btn');

  if (mode === 'kanban') {
    if (kanbanContainer) kanbanContainer.classList.remove('hidden');
    if (listContainer) listContainer.classList.add('hidden');
    if (kanbanBtn) {
      kanbanBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition-all bg-[#D4AF37] text-[#0F251A] shadow cursor-pointer";
    }
    if (listBtn) {
      listBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition-all text-slate-300 hover:text-white cursor-pointer";
    }
  } else {
    if (kanbanContainer) kanbanContainer.classList.add('hidden');
    if (listContainer) listContainer.classList.remove('hidden');
    if (listBtn) {
      listBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition-all bg-[#D4AF37] text-[#0F251A] shadow cursor-pointer";
    }
    if (kanbanBtn) {
      kanbanBtn.className = "px-3 py-1 rounded-lg text-xs font-bold transition-all text-slate-300 hover:text-white cursor-pointer";
    }
  }
  renderVendorInquiriesDynamic();
};

window.renderVendorInquiriesDynamic = function() {
  if (vendorInquiryViewMode === 'kanban') {
    renderVendorInquiriesKanban();
  } else {
    renderVendorInquiriesTable();
  }
};

window.renderVendorInquiriesKanban = function() {
  const colPending = document.getElementById('kanban-col-pending');
  const colReplied = document.getElementById('kanban-col-replied');
  const colDeposit = document.getElementById('kanban-col-deposit_paid');
  const colBooked = document.getElementById('kanban-col-booked');

  if (!colPending || !colReplied || !colDeposit || !colBooked) return;

  colPending.innerHTML = '';
  colReplied.innerHTML = '';
  colDeposit.innerHTML = '';
  colBooked.innerHTML = '';

  const searchInput = document.getElementById('vd-inquiry-search-input')?.value.toLowerCase().trim() || '';
  const statusFilter = document.getElementById('vd-inquiry-status-filter')?.value || 'all';

  const cols = {
    pending: { el: colPending, countEl: document.getElementById('kanban-cnt-pending'), items: 0 },
    replied: { el: colReplied, countEl: document.getElementById('kanban-cnt-replied'), items: 0 },
    deposit_paid: { el: colDeposit, countEl: document.getElementById('kanban-cnt-deposit_paid'), items: 0 },
    booked: { el: colBooked, countEl: document.getElementById('kanban-cnt-booked'), items: 0 }
  };

  inquiries.forEach((inq, idx) => {
    const status = inq.status || 'pending';
    const matchesSearch = !searchInput ||
      (inq.name && inq.name.toLowerCase().includes(searchInput)) ||
      (inq.phone && inq.phone.includes(searchInput)) ||
      (inq.service && inq.service.toLowerCase().includes(searchInput));
    const matchesFilter = statusFilter === 'all' || status === statusFilter;

    if (!matchesSearch || !matchesFilter) return;

    const targetCol = cols[status] || cols['pending'];
    targetCol.items++;

    const inqId = inq.id || `inq_${idx}`;
    const card = document.createElement('div');
    card.className = "kanban-card bg-[#0F172A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-3 space-y-2.5 text-white text-right shadow-md";
    card.setAttribute('draggable', 'true');
    card.setAttribute('ondragstart', `handleKanbanDragStart(event, '${inqId}')`);

    card.innerHTML = `
      <div class="flex justify-between items-center border-b border-slate-800 pb-1.5">
        <span class="font-black text-xs text-[#D4AF37]">${inq.name || 'زوج محترم'}</span>
        <span class="text-[10px] text-slate-400 font-mono dir-ltr">${inq.phone || '۰۹۱۲۰۰۰۰۰۰۰'}</span>
      </div>

      <div class="text-[11px] text-slate-200 space-y-1">
        <div class="flex justify-between items-center">
          <span class="text-slate-400">خدمت:</span>
          <span class="font-bold text-emerald-300">${inq.service || inq.package || 'خدمات عمومی'}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-400">تاریخ مراسم:</span>
          <span class="font-bold text-amber-200">${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
        </div>
      </div>

      ${(inq.customAnswers && inq.customAnswers.length) ? `
        <div class="bg-amber-950/60 p-1.5 rounded-lg border border-amber-500/30 text-[10px] text-amber-200 space-y-0.5">
          <span class="font-bold text-amber-400 block border-b border-amber-500/20 pb-0.5">📋 فرم سفارشی:</span>
          ${inq.customAnswers.slice(0, 2).map(a => `<div class="truncate">• ${a.label}: ${a.value}</div>`).join('')}
        </div>
      ` : ''}

      <div class="pt-1.5 border-t border-slate-800/80 flex items-center justify-between gap-1">
        <select onchange="updateInquiryStatus('${inqId}', this.value)" class="bg-[#1E293B] border border-slate-700 text-[10px] text-slate-200 font-bold rounded-md px-1.5 py-1 focus:outline-none focus:border-[#D4AF37] cursor-pointer">
          <option value="pending" ${status === 'pending' ? 'selected' : ''}>درخواست جدید</option>
          <option value="replied" ${status === 'replied' ? 'selected' : ''}>پیش‌فاکتور صادرشده</option>
          <option value="deposit_paid" ${status === 'deposit_paid' ? 'selected' : ''}>بیعانه پرداخت‌شده</option>
          <option value="booked" ${status === 'booked' ? 'selected' : ''}>رزرو نهایی</option>
        </select>

        <button type="button" onclick="openVendorInvoiceBuilderModal('${inq.name || 'زوج محترم'}', '${inq.service || 'پکیج مراسم'}')" class="bg-[#D4AF37] hover:bg-amber-500 text-[#0F251A] text-[10px] font-black px-2 py-1 rounded-md transition-all shadow-xs cursor-pointer">
          پیش‌فاکتور
        </button>
      </div>
    `;

    targetCol.el.appendChild(card);
  });

  Object.keys(cols).forEach(k => {
    if (cols[k].countEl) cols[k].countEl.textContent = cols[k].items;
    if (cols[k].items === 0) {
      cols[k].el.innerHTML = `
        <div class="h-24 flex items-center justify-center text-[11px] font-bold text-slate-500 border border-dashed border-slate-700 rounded-xl">
          خالی
        </div>
      `;
    }
  });

  updateVendorAnalyticsUI();
};

window.handleKanbanDragStart = function(event, id) {
  event.dataTransfer.setData('text/plain', id);
  event.target.classList.add('dragging');
};

window.handleKanbanDragOver = function(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

window.handleKanbanDrop = function(event, targetStatus) {
  event.preventDefault();
  const inquiryId = event.dataTransfer.getData('text/plain');
  if (inquiryId) {
    updateInquiryStatus(inquiryId, targetStatus);
  }
};

window.renderVendorInquiriesTable = function() {
  const container = document.getElementById('inquiry-list');
  if (!container) return;
  container.innerHTML = '';

  const searchInput = document.getElementById('vd-inquiry-search-input')?.value.toLowerCase().trim() || '';
  const statusFilter = document.getElementById('vd-inquiry-status-filter')?.value || 'all';

  let filtered = inquiries.filter(inq => {
    const matchesSearch = !searchInput ||
      (inq.name && inq.name.toLowerCase().includes(searchInput)) ||
      (inq.phone && inq.phone.includes(searchInput)) ||
      (inq.service && inq.service.toLowerCase().includes(searchInput));
    const matchesStatus = statusFilter === 'all' || (inq.status || 'pending') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-slate-400 text-xs font-bold bg-[#1E293B] rounded-2xl border border-slate-700">
        هیچ استعلامی مطابق با فیلتر جستجوی شما یافت نشد.
      </div>
    `;
    return;
  }

  filtered.forEach((inq, idx) => {
    const card = document.createElement('div');
    card.className = "p-5 bg-[#1E293B]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-lg hover:border-[#D4AF37] hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] transition-all text-white text-right";
    const currentStatus = inq.status || 'pending';
    const inqId = inq.id || `inq_${idx}`;

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
        <div class="flex items-center gap-2">
          <span class="font-black text-[#D4AF37] text-sm">${inq.name || 'زوج محترم'}</span>
          <span class="text-slate-300 text-xs font-medium dir-ltr">(${inq.phone || '۰۹۱۲۰۰۰۰۰۰۰'})</span>
        </div>
        <div class="flex items-center gap-2">
          <select onchange="updateInquiryStatus('${inqId}', this.value)" class="bg-[#0F172A] border border-[#D4AF37]/30 text-xs font-bold rounded-lg px-2 py-1 text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer">
            <option value="pending" ${currentStatus === 'pending' ? 'selected' : ''}>درخواست جدید</option>
            <option value="replied" ${currentStatus === 'replied' ? 'selected' : ''}>پیش‌فاکتور صادرشده</option>
            <option value="deposit_paid" ${currentStatus === 'deposit_paid' ? 'selected' : ''}>بیعانه پرداخت‌شده</option>
            <option value="booked" ${currentStatus === 'booked' ? 'selected' : ''}>رزرو نهایی</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium bg-[#0F172A] p-2.5 rounded-xl border border-slate-800">
        <span><strong class="text-[#D4AF37]">تاریخ درخواست:</strong> ${inq.date || '۱۴۰۳/۰۶/۱۵'}</span>
        ${inq.guests ? `<span><strong class="text-[#D4AF37]">تعداد مهمان:</strong> ${inq.guests} نفر</span>` : ''}
        <span><strong class="text-[#D4AF37]">خدمت/پکیج:</strong> ${inq.service || inq.package || 'خدمات عمومی'}</span>
      </div>

      ${(inq.customAnswers && inq.customAnswers.length) ? `
        <div class="bg-amber-950/60 p-3 rounded-xl border border-amber-500/30 text-xs font-bold text-amber-200 space-y-1">
          <span class="block text-[11px] font-black text-amber-400 border-b border-amber-500/20 pb-1">📋 پاسخ‌های سوالات اختصاصی فرم استعلام:</span>
          <div class="space-y-0.5 pt-0.5">
            ${inq.customAnswers.map(a => `<div class="flex items-center gap-1.5"><span class="text-amber-300 font-bold">• ${a.label}:</span> <span class="text-white font-black">${a.value}</span></div>`).join('')}
          </div>
        </div>
      ` : ''}

      <p class="text-xs text-slate-200 bg-[#0F172A] p-3 rounded-xl border border-slate-800 leading-relaxed">${inq.details || 'توضیحات و نیازمندی‌های اختصاصی زوج ثبت شده در سامانه عروسی تو.'}</p>

      <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
        <button type="button" onclick="openVendorInvoiceBuilderModal('${inq.name || 'زوج محترم'}', '${inq.service || 'پکیج فرمالیته'}')" class="bg-[#D4AF37] hover:bg-amber-500 text-[#0F251A] font-black px-3 py-1.5 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer">
          صدور پیش‌فاکتور
        </button>
        <button type="button" onclick="openInquiryReplyModal('${inqId}', '${inq.name || 'زوج محترم'}')" class="bg-[#0F172A] hover:bg-slate-800 text-[#D4AF37] border border-[#D4AF37]/30 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors cursor-pointer">
          پاسخ مستقیم
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  updateVendorAnalyticsUI();
};

window.updateInquiryStatus = function(inquiryId, newStatus) {
  const inq = inquiries.find((i, idx) => (i.id === inquiryId || `inq_${idx}` === inquiryId || idx.toString() === inquiryId.toString()));
  if (inq) {
    inq.status = newStatus;
    try {
      localStorage.setItem('aroosi_inquiries_db', JSON.stringify(inquiries));
    } catch (e) {}
    showToast('وضعیت کانبان استعلام به‌روزرسانی شد.', 'success');
    renderVendorInquiriesDynamic();
  }
};

// ==========================================================================
// REVERSE BIDDING / SPECIAL REQUESTS BOARD
// ==========================================================================
window.openReverseBiddingModal = function() {
  const modal = document.getElementById('modal-reverse-bidding');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeReverseBiddingModal = function() {
  const modal = document.getElementById('modal-reverse-bidding');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleReverseBiddingSubmit = function(event) {
  event.preventDefault();
  const title = document.getElementById('rb-title')?.value.trim();
  const category = document.getElementById('rb-category')?.value;
  const budget = document.getElementById('rb-budget')?.value.trim();
  const date = document.getElementById('rb-date')?.value.trim() || '۱۴۰۳/۰۸/۱۵';
  const location = document.getElementById('rb-location')?.value.trim() || 'یزد';
  const phone = document.getElementById('rb-phone')?.value.trim();
  const details = document.getElementById('rb-details')?.value.trim();

  if (!title || !budget || !phone) {
    showToast('لطفاً عنوان، بودجه و شماره تماس را تکمیل فرمایید.', 'warning');
    return;
  }

  let bids = [];
  try {
    bids = JSON.parse(localStorage.getItem('aroosi_reverse_bids_db') || '[]');
  } catch (e) { bids = []; }

  const newBid = {
    id: 'rb_' + Date.now(),
    title,
    category,
    budget,
    date,
    location,
    phone,
    details: details || 'درخواست خدمات اختصاصی و استعلام قیمت رقابتی.',
    timestamp: new Date().toLocaleDateString('fa-IR'),
    quotesCount: 0
  };

  bids.unshift(newBid);
  try {
    localStorage.setItem('aroosi_reverse_bids_db', JSON.stringify(bids));
  } catch (e) {}

  closeReverseBiddingModal();
  showToast('درخواست شما در میز مناقصه معکوس به تامین‌کنندگان ثبت شد!', 'success');
  renderVendorReverseBids();
};

window.renderVendorReverseBids = function() {
  const feed = document.getElementById('vendor-reverse-bids-feed');
  if (!feed) return;
  feed.innerHTML = '';

  let bids = [];
  try {
    bids = JSON.parse(localStorage.getItem('aroosi_reverse_bids_db') || '[]');
  } catch (e) { bids = []; }

  // Fallback initial mock bids if empty
  if (!bids || bids.length === 0) {
    bids = [
      {
        id: 'rb_mock_1',
        title: 'عکاسی و فیلم‌برداری فرمالیته در کویر یزد',
        category: 'عکاسی و فیلم‌برداری',
        budget: '۴۵,۰۰۰,۰۰۰ تومان',
        date: '۱۴۰۳/۰۸/۲۰',
        location: 'یزد / کویر شباهنگ',
        phone: '۰۹۱۳۱۱۱۰۰۰۰',
        details: 'نیازمند تیم حرفه‌ای همراه با تصویربرداری هوایی (هلی‌شات) و آلبوم دیجیتال ۳۰ در ۶۰.',
        timestamp: 'امروز',
        quotesCount: 2
      },
      {
        id: 'rb_mock_2',
        title: 'خدمات تشریفات و گل‌آرایی ورودی باغ‌تالار',
        category: 'گل‌آرایی و تشریفات',
        budget: '۶۰,۰۰۰,۰۰۰ تومان',
        date: '۱۴۰۳/۰۹/۰۵',
        location: 'صفائیه یزد',
        phone: '۰۹۱۳۲۲۲۰۰۰۰',
        details: 'دکوراسیون مدرن، گل‌آرایی طبیعی و نورپردازی حرفه‌ای مسیر ورود عروس و داماد.',
        timestamp: 'دیروز',
        quotesCount: 1
      }
    ];
    try {
      localStorage.setItem('aroosi_reverse_bids_db', JSON.stringify(bids));
    } catch (e) {}
  }

  bids.forEach(bid => {
    const card = document.createElement('div');
    card.className = "reverse-bid-card rounded-2xl p-4 text-right space-y-3 shadow-lg";
    card.innerHTML = `
      <div class="flex justify-between items-start gap-2 border-b border-slate-800 pb-2">
        <div>
          <span class="inline-block text-[10px] font-black bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full mb-1">${bid.category}</span>
          <h4 class="text-xs font-black text-white leading-snug">${bid.title}</h4>
        </div>
        <span class="text-[11px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-xl shrink-0">${bid.budget}</span>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed">${bid.details}</p>

      <div class="flex flex-wrap items-center justify-between text-[11px] text-slate-400 bg-[#0F172A] p-2 rounded-xl border border-slate-800">
        <span>📍 ${bid.location}</span>
        <span>📅 ${bid.date}</span>
        <span>📩 ${bid.quotesCount || 0} پیشنهاد ارسالی</span>
      </div>

      <div class="flex items-center justify-between pt-1">
        <span class="text-[10px] text-slate-400">تماس: <strong class="text-white dir-ltr font-mono">${bid.phone}</strong></span>
        <button type="button" onclick="sendReverseBidQuote('${bid.id}', '${bid.title}')" class="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-amber-400 hover:to-amber-200 text-[#0F251A] text-xs font-black px-3.5 py-1.5 rounded-xl shadow-md transition-all cursor-pointer">
          ارسال پیش‌فاکتور اختصاصی
        </button>
      </div>
    `;
    feed.appendChild(card);
  });
};

window.sendReverseBidQuote = function(bidId, bidTitle) {
  openVendorInvoiceBuilderModal('مشتری مناقصه معکوس', bidTitle);
  let bids = [];
  try {
    bids = JSON.parse(localStorage.getItem('aroosi_reverse_bids_db') || '[]');
  } catch (e) { bids = []; }
  const bid = bids.find(b => b.id === bidId);
  if (bid) {
    bid.quotesCount = (bid.quotesCount || 0) + 1;
    try {
      localStorage.setItem('aroosi_reverse_bids_db', JSON.stringify(bids));
    } catch (e) {}
    renderVendorReverseBids();
  }
};

// 4. CUSTOMER REVIEW RESPONSE MANAGER
window.renderVendorReviewsManager = function() {
  const container = document.getElementById('vd-reviews-list-container');
  if (!container) return;
  container.innerHTML = '';

  const vendor2 = vendors.find(v => v.id === 2);
  const reviews = (vendor2 && vendor2.reviews) ? vendor2.reviews : [
    { author: "رضا و مریم", text: "کیفیت خدمات عکاسی و برخورد تیم استودیو کویر فوق‌العاده بود.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" },
    { author: "محمد و سارا", text: "عکس‌های فرمالیته غروب کویر بسیار زیبا شد.", stars: "★★★★★", date: "فروردین ۱۴۰۳" }
  ];

  const badgeEl = document.getElementById('vd-reviews-count-badge');
  if (badgeEl) badgeEl.innerText = `${reviews.length} دیدگاه ثبت شده`;

  reviews.forEach((r, idx) => {
    const card = document.createElement('div');
    card.className = "p-4 bg-bgCustom rounded-2xl border border-accent space-y-3 text-xs shadow-xs";
    card.innerHTML = `
      <div class="flex justify-between items-center font-bold text-graphite">
        <div class="flex items-center gap-2">
          <span class="text-sm font-black">${r.author}</span>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">زوج تاییدشده</span>
        </div>
        <span class="text-amber-500 font-bold">${r.stars || '★★★★★'} (${r.date || '۱۴۰۳'})</span>
      </div>

      <p class="text-graphite font-medium bg-white p-3 rounded-xl border border-accent/60">${r.text}</p>

      ${r.vendorReply ? `
        <div class="bg-emerald-50 border-r-3 border-primary p-3 rounded-l-xl space-y-1">
          <span class="font-black text-primary text-[11px] block flex items-center gap-1">
            <i data-lucide="corner-down-left" class="w-3.5 h-3.5 text-primary"></i>
            پاسخ ثبت‌شده مدیر کسب‌وکار:
          </span>
          <p class="text-graphite font-semibold text-xs">${r.vendorReply}</p>
        </div>
      ` : ''}

      <div class="space-y-2 pt-2 border-t border-accent/60">
        <label class="block text-secondary font-bold text-[11px]">ارسال / ویرایش پاسخ رسمی مدیر:</label>
        <div class="flex gap-2">
          <input type="text" id="vd-review-reply-input-${idx}" value="${r.vendorReply || ''}" placeholder="پاسخ رسمی شما به این دیدگاه..." class="flex-1 bg-white border border-accent rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-primary">
          <button type="button" onclick="saveVendorReviewReply(${idx})" class="bg-primary hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shrink-0 shadow-2xs cursor-pointer">
            ثبت پاسخ
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
};

window.saveVendorReviewReply = function(reviewIdx) {
  const input = document.getElementById(`vd-review-reply-input-${reviewIdx}`);
  if (!input) return;

  const replyText = input.value.trim();
  const vendor2 = vendors.find(v => v.id === 2);
  if (vendor2 && vendor2.reviews && vendor2.reviews[reviewIdx]) {
    vendor2.reviews[reviewIdx].vendorReply = replyText;
    showToast('پاسخ مدیر با موفقیت ثبت شد و روی پروفایل عمومی نمایش داده خواهد شد.', 'success');
    renderVendorReviewsManager();
    if (typeof loadVendorProfile === 'function' && currentProfileVendorId === 2) {
      loadVendorProfile(2);
    }
  }
};

window.handleSendInvoiceSubmit = function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const couple = document.getElementById('inv-builder-couple')?.value || 'علی و سارا';
  const total = document.getElementById('inv-builder-total')?.value || '۴۵,۰۰۰,۰۰۰';
  const deposit = document.getElementById('inv-builder-deposit')?.value || '۱۰,۰۰۰,۰۰۰';
  const eventDate = document.getElementById('inv-builder-date')?.value || '۱۴۰۳/۰۶/۱۵';

  const itemsSummary = invoiceItemsList.map(i => `• ${i.name} (${i.qty} عدد)`).join('\n');

  if (typeof activeChatThreadId !== 'undefined' && typeof chatThreads !== 'undefined') {
    const thread = chatThreads.find(t => t.id === activeChatThreadId) || chatThreads[0];
    if (thread) {
      thread.messages.push({
        id: 'msg-' + Date.now(),
        sender: 'vendor',
        text: `📄 پیش‌فاکتور دیجیتال رسمی صادر شد:\nمشتری: ${couple}\nتاریخ مراسم: ${eventDate}\nمبلغ کل: ${total} تومان\nبیعانه: ${deposit} تومان\nریز خدمات:\n${itemsSummary}`,
        time: 'الان'
      });
      if (typeof renderActiveChatThread === 'function') renderActiveChatThread();
    }
  }

  window.closeVendorInvoiceBuilderModal();

  if (typeof showToast === 'function') {
    showToast(`🧾 پیش‌فاکتور دیجیتال به مبلغ ${total} تومان برای ${couple} ارسال شد.`, 'success');
  }
};

window.openPreInvoicePrintModal = function(invoiceData) {
  const modal = document.getElementById('modal-preinvoice-print');
  if (!modal) return;

  const data = invoiceData || {
    num: 'INV-1403-882',
    date: '۱۴۰۳/۰۶/۱۵',
    validity: '۷ روز کاری (تا ۱۴۰۳/۰۶/۲۲)',
    vendorName: 'هتل باغ و تشریفات مشیرالممالک یزد',
    vendorPhone: '۰۳۵-۳۵۲۳۹۷۶۱',
    vendorAddress: 'یزد، خیابان انقلاب، بلوار مشیرالممالک',
    vendorCode: 'YZD-VND-882',
    coupleName: 'علی و سارا',
    couplePhone: '۰۹۱۳۸۵۵۴۰۰۰',
    eventDate: '۱۴۰۳/۰۶/۱۵',
    eventLocation: 'یزد، تالار اصلی مشیرالممالک',
    title: 'پکیج خدمات تشریفات و ورودی باغ',
    total: '۴۵,۰۰۰,۰۰۰ تومان',
    subtotal: '۴۵,۰۰۰,۰۰۰ تومان',
    discount: '۰ تومان',
    deposit: '۱۰,۰۰۰,۰۰۰ تومان',
    installment2: '۱۵,۷۵۰,۰۰۰ تومان',
    balance: '۱۹,۲۵۰,۰۰۰ تومان',
    items: [
      { name: 'ورودی باغ اصلی و فضای باز VIP', qty: 1, unitPrice: '۱۵,۰۰۰,۰۰۰', discount: '۰', total: '۱۵,۰۰۰,۰۰۰' },
      { name: 'پذیرایی شام سلف‌سرویس ۳ رنگ (۲۵۰ نفر)', qty: 250, unitPrice: '۱۰۰,۰۰۰', discount: '۰', total: '۲۵,۰۰۰,۰۰۰' },
      { name: 'گل‌آرایی ورودی و نورپردازی حرفه‌ای استیج', qty: 1, unitPrice: '۵,۰۰۰,۰۰۰', discount: '۰', total: '۵,۰۰۰,۰۰۰' }
    ],
    trackCode: 'AROOSI-88219-YZD'
  };

  const setElText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setElText('pip-num', data.num || 'INV-1403-882');
  setElText('pip-date', data.date || '۱۴۰۳/۰۶/۱۵');
  setElText('pip-validity', data.validity || '۷ روز کاری');
  setElText('pip-vendor-name', data.vendorName || 'تامین‌کننده معتبر یزد');
  setElText('pip-vendor-phone', data.vendorPhone || '۰۳۵-۳۸۲۴۰۰۰۰');
  setElText('pip-vendor-address', data.vendorAddress || 'یزد، خیابان اصلی');
  setElText('pip-vendor-code', data.vendorCode || 'YZD-VND-882');
  setElText('pip-couple-name', data.coupleName || 'علی و سارا');
  setElText('pip-couple-phone', data.couplePhone || '۰۹۱۳۰۰۰۰۰۰۰');
  setElText('pip-event-date', data.eventDate || '۱۴۰۳/۰۶/۱۵');
  setElText('pip-event-location', data.eventLocation || 'یزد');
  setElText('pip-subtotal', data.subtotal || data.total || '۴۵,۰۰۰,۰۰۰ تومان');
  setElText('pip-discount', data.discount || '۰ تومان');
  setElText('pip-total-amount', data.total || '۴۵,۰۰۰,۰۰۰ تومان');
  setElText('pip-deposit', data.deposit || '۱۰,۰۰۰,۰۰۰ تومان');
  setElText('pip-installment-2', data.installment2 || '۱۵,۷۵۰,۰۰۰ تومان');
  setElText('pip-balance', data.balance || '۱۹,۲۵۰,۰۰۰ تومان');
  setElText('pip-track-code', data.trackCode || 'AROOSI-88219-YZD');
  setElText('pip-vendor-sig-date', data.date || '۱۴۰۳/۰۶/۱۵');

  const tbody = document.getElementById('pip-items-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    let itemsList = data.items || [];
    if (typeof itemsList === 'string') {
      itemsList = itemsList.split('،').map(s => ({ name: s.trim(), qty: 1, unitPrice: '—', discount: '۰', total: '—' }));
    }
    if (itemsList.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td class="p-3 text-center font-bold">۱</td>
          <td class="p-3 font-bold text-graphite">${data.title || 'پکیج خدمات تشریفات'}</td>
          <td class="p-3 text-center">۱</td>
          <td class="p-3 text-left">${data.total || '۴۵,۰۰۰,۰۰۰'}</td>
          <td class="p-3 text-left">۰</td>
          <td class="p-3 text-left font-black text-primary">${data.total || '۴۵,۰۰۰,۰۰۰'}</td>
        </tr>
      `;
    } else {
      itemsList.forEach((it, idx) => {
        const tr = document.createElement('tr');
        const itName = typeof it === 'string' ? it : (it.name || it.title || 'خدمت');
        const itQty = it.qty || 1;
        const itUnitPrice = it.unitPrice || (it.price ? Number(it.price).toLocaleString('fa-IR') + ' تومان' : '—');
        const itDisc = it.discount || '۰ تومان';
        const itTotal = it.total || (it.price ? Number(it.price * (it.qty || 1)).toLocaleString('fa-IR') + ' تومان' : '—');

        tr.innerHTML = `
          <td class="p-3 text-center font-bold text-secondary">${(idx + 1).toLocaleString('fa-IR')}</td>
          <td class="p-3 font-bold text-graphite">${itName}</td>
          <td class="p-3 text-center font-medium">${Number(itQty).toLocaleString('fa-IR')}</td>
          <td class="p-3 text-left font-medium text-graphite">${itUnitPrice}</td>
          <td class="p-3 text-left font-medium text-emerald-700">${itDisc}</td>
          <td class="p-3 text-left font-black text-primary">${itTotal}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  }

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

window.closePreInvoicePrintModal = function() {
  const modal = document.getElementById('modal-preinvoice-print');
  if (modal) modal.classList.add('hidden');
};

window.handlePreInvoiceDepositConfirmation = function() {
  const modal = document.getElementById('modal-preinvoice-print');
  if (modal) modal.classList.add('hidden');
  if (typeof showToast === 'function') {
    showToast('پیش‌فاکتور توسط شما تایید گردید! در حال انتقال به بخش گفت‌وگو و درگاه پرداخت...', 'success', 4000);
  }
  if (typeof switchTab === 'function') {
    setTimeout(() => {
      switchTab('messages');
    }, 1000);
  }
};

// ==========================================
// VENDOR CUSTOM INQUIRY FORM BUILDER LOGIC
// ==========================================

function getVendorCustomQuestions(vendorId = 1) {
  try {
    const stored = localStorage.getItem(`aroosi_vendor_custom_questions_${vendorId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading vendor custom questions from localStorage:', e);
  }

  const v = vendors.find(v => v.id === vendorId) || vendors[0];
  if (v && v.customQuestions) {
    return v.customQuestions;
  }

  // Default fallback initial questions for vendor 1
  const defaultQuestions = [
    { id: 'cq-1', label: 'حدود تعداد مهمانان مدنظر شما؟', type: 'select', options: ['زیر ۱۵۰ نفر', '۱۵۰ تا ۳۰۰ نفر', '۳۰۰ تا ۵۰۰ نفر', 'بالای ۵۰۰ نفر'], required: true },
    { id: 'cq-2', label: 'نوع منوی شام و پذیرایی مدنظر؟', type: 'select', options: ['منوی تک‌پرسی کلاسیک', 'منوی ۲ رنگ با دسر', 'منوی VIP بوفه سلف‌سرویس'], required: true },
    { id: 'cq-3', label: 'توضیحات و نیازمندی‌های خاص مراسم شما؟', type: 'text', options: [], required: false }
  ];

  if (v) v.customQuestions = defaultQuestions;
  return defaultQuestions;
}

function saveVendorCustomQuestions(vendorId = 1, questions = []) {
  try {
    localStorage.setItem(`aroosi_vendor_custom_questions_${vendorId}`, JSON.stringify(questions));
  } catch (e) {
    console.error('Error saving vendor custom questions:', e);
  }
  const v = vendors.find(v => v.id === vendorId) || vendors[0];
  if (v) {
    v.customQuestions = questions;
  }
}

window.renderVendorCustomQuestionsList = function(vendorId = 1) {
  const container = document.getElementById('vd-custom-questions-list');
  if (!container) return;

  const questions = getVendorCustomQuestions(vendorId);
  container.innerHTML = '';

  if (!questions || questions.length === 0) {
    container.innerHTML = `
      <div class="col-span-1 md:col-span-2 p-6 text-center text-secondary bg-bgCustom rounded-2xl border border-accent space-y-2">
        <p class="text-xs font-bold text-graphite">هنوز هیچ سوال اختصاصی برای فرم استعلام خود اضافه نکرده‌اید.</p>
        <p class="text-[11px] text-secondary">زوج‌ها هنگام استعلام فقط فیلدهای عمومی را مشاهده خواهند کرد.</p>
        <button type="button" onclick="openCustomQuestionModal()" class="bg-primary hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-2xs mt-1">
          + افزودن اولین سوال اختصاصی
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = "p-4 bg-bgCustom border border-accent rounded-2xl space-y-2 hover:border-primary/50 transition-all flex flex-col justify-between";

    const typeLabel = q.type === 'select' ? 'منوی کشویی' : q.type === 'number' ? 'عددی' : 'متنی';
    const reqBadge = q.required ? '<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md">الزامی</span>' : '<span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md">اختیاری</span>';
    const optsText = (q.type === 'select' && q.options && q.options.length) ? `گزینه‌ها: ${q.options.join(' ، ')}` : '';

    card.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center justify-between gap-2">
          <span class="font-black text-graphite text-xs flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-black">${idx + 1}</span>
            <span>${q.label}</span>
          </span>
          <div class="flex items-center gap-1 shrink-0">
            <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md">${typeLabel}</span>
            ${reqBadge}
          </div>
        </div>
        ${optsText ? `<p class="text-[11px] text-secondary font-medium mr-6 truncate">${optsText}</p>` : ''}
      </div>

      <div class="flex items-center justify-end gap-2 pt-2 border-t border-accent/60">
        <button type="button" onclick="openCustomQuestionModal('${q.id}')" class="text-xs text-primary hover:underline font-bold">ویرایش</button>
        <span class="text-accent">|</span>
        <button type="button" onclick="deleteCustomQuestion('${q.id}')" class="text-xs text-rose-600 hover:underline font-bold">حذف</button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
};

window.openCustomQuestionModal = function(qId = null) {
  const modal = document.getElementById('modal-vendor-custom-question');
  if (!modal) return;

  const idInp = document.getElementById('cq-id');
  const labelInp = document.getElementById('cq-label');
  const typeInp = document.getElementById('cq-type');
  const reqInp = document.getElementById('cq-required');
  const optsInp = document.getElementById('cq-options');
  const titleElem = document.getElementById('custom-q-modal-title');

  const questions = getVendorCustomQuestions(1);

  if (qId) {
    const q = questions.find(item => item.id === qId);
    if (q) {
      if (idInp) idInp.value = q.id;
      if (labelInp) labelInp.value = q.label;
      if (typeInp) typeInp.value = q.type || 'text';
      if (reqInp) reqInp.checked = !!q.required;
      if (optsInp) optsInp.value = (q.options || []).join('، ');
      if (titleElem) titleElem.innerText = 'ویرایش سوال اختصاصی فرم استعلام';
      toggleCustomQuestionOptions(q.type || 'text');
    }
  } else {
    if (idInp) idInp.value = '';
    if (labelInp) labelInp.value = '';
    if (typeInp) typeInp.value = 'text';
    if (reqInp) reqInp.checked = true;
    if (optsInp) optsInp.value = '';
    if (titleElem) titleElem.innerText = 'افزودن سوال اختصاصی جدید';
    toggleCustomQuestionOptions('text');
  }

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

window.closeCustomQuestionModal = function() {
  const modal = document.getElementById('modal-vendor-custom-question');
  if (modal) modal.classList.add('hidden');
};

window.toggleCustomQuestionOptions = function(typeVal) {
  const optsBox = document.getElementById('cq-options-container');
  if (!optsBox) return;
  if (typeVal === 'select') {
    optsBox.classList.remove('hidden');
  } else {
    optsBox.classList.add('hidden');
  }
};

window.saveCustomQuestion = function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const idVal = document.getElementById('cq-id')?.value;
  const labelVal = document.getElementById('cq-label')?.value.trim();
  const typeVal = document.getElementById('cq-type')?.value || 'text';
  const reqVal = document.getElementById('cq-required')?.checked;
  const optsRaw = document.getElementById('cq-options')?.value.trim() || '';

  if (!labelVal) {
    if (typeof showToast === 'function') showToast('لطفاً عنوان سوال را وارد کنید.', 'danger');
    return;
  }

  const optionsArr = typeVal === 'select' ? optsRaw.split(/[,،]/).map(s => s.trim()).filter(Boolean) : [];

  const questions = getVendorCustomQuestions(1);

  if (idVal) {
    const idx = questions.findIndex(q => q.id === idVal);
    if (idx !== -1) {
      questions[idx] = {
        id: idVal,
        label: labelVal,
        type: typeVal,
        required: reqVal,
        options: optionsArr
      };
    }
  } else {
    questions.push({
      id: 'cq-' + Date.now(),
      label: labelVal,
      type: typeVal,
      required: reqVal,
      options: optionsArr
    });
  }

  saveVendorCustomQuestions(1, questions);
  closeCustomQuestionModal();
  renderVendorCustomQuestionsList(1);

  if (typeof showToast === 'function') {
    showToast('✨ سوال اختصاصی با موفقیت در فرم استعلام قرار گرفت.', 'success');
  }
};

window.deleteCustomQuestion = function(qId) {
  let questions = getVendorCustomQuestions(1);
  questions = questions.filter(q => q.id !== qId);
  saveVendorCustomQuestions(1, questions);
  renderVendorCustomQuestionsList(1);
  if (typeof showToast === 'function') {
    showToast('سوال اختصاصی از فرم استعلام حذف گردید.', 'info');
  }
};

/* Support Modal & Admin Support Queue Handlers */
window.openSupportModal = function() {
  const modal = document.getElementById('modal-support');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeSupportModal = function() {
  const modal = document.getElementById('modal-support');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleSupportSubmit = function(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('supp-name')?.value || '';
  const phone = document.getElementById('supp-phone')?.value || '';
  const topic = document.getElementById('supp-topic')?.value || 'مشاوره';
  const message = document.getElementById('supp-message')?.value || '';

  const newInquiry = {
    id: Date.now(),
    name: name,
    phone: phone,
    topic: topic,
    message: message,
    date: new Date().toLocaleDateString('fa-IR'),
    status: 'معلق'
  };

  let supportDb = [];
  try {
    supportDb = JSON.parse(localStorage.getItem('aroosi_support_inquiries_db') || '[]');
  } catch (e) {
    supportDb = [];
  }

  supportDb.unshift(newInquiry);
  localStorage.setItem('aroosi_support_inquiries_db', JSON.stringify(supportDb));

  if (typeof showToast === 'function') {
    showToast('درخواست پشتیبانی شما با موفقیت ثبت گردید. کارشناسان ما به زودی با شما تماس خواهند گرفت.', 'success');
  }

  const form = document.getElementById('support-modal-form');
  if (form) form.reset();

  window.closeSupportModal();
  if (typeof window.renderAdminSupportInquiriesTable === 'function') {
    window.renderAdminSupportInquiriesTable();
  }
};

window.renderAdminSupportInquiriesTable = function() {
  const tbody = document.getElementById('admin-support-inquiries-table');
  const countBadge = document.getElementById('admin-support-count');
  if (!tbody) return;

  let supportDb = [];
  try {
    supportDb = JSON.parse(localStorage.getItem('aroosi_support_inquiries_db') || '[]');
  } catch (e) {
    supportDb = [];
  }

  if (supportDb.length === 0) {
    supportDb = [
      { id: 101, name: 'علی رضایی', phone: '۰۹۱۳۱۵۱۱۲۳۴', topic: 'مشاوره', message: 'درخواست راهنمایی جهت انتخاب باغ تالار با ظرفیت ۳۰۰ نفر در صفائیه', date: '۱۴۰۳/۰۷/۱۰', status: 'پاسخ داده شد' },
      { id: 102, name: 'مریم میری', phone: '۰۹۱۳۲۵۲۵۶۷۸', topic: 'مالی/پرداخت', message: 'سوال در خصوص نحوه فعال‌سازی اشتراک طلایی تامین‌کننده عکاسی', date: '۱۴۰۳/۰۷/۱۲', status: 'معلق' }
    ];
    localStorage.setItem('aroosi_support_inquiries_db', JSON.stringify(supportDb));
  }

  if (countBadge) {
    countBadge.textContent = `${supportDb.length} درخواست ثبت‌شده`;
  }

  tbody.innerHTML = supportDb.map(item => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="p-3 font-bold text-graphite">${item.name}</td>
      <td class="p-3 dir-ltr text-right font-semibold text-secondary">${item.phone}</td>
      <td class="p-3"><span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${item.topic}</span></td>
      <td class="p-3 max-w-xs text-secondary leading-relaxed">${item.message}</td>
      <td class="p-3 text-secondary text-[11px]">${item.date}</td>
      <td class="p-3 text-center">
        ${item.status === 'پاسخ داده شد' ? `
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
            ✓ بررسی شد
          </span>
        ` : `
          <button onclick="resolveSupportInquiry(${item.id})" class="bg-[#1B3B2B] hover:bg-emerald-900 text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-lg shadow-xs transition-colors cursor-pointer">
            علامت‌گذاری به عنوان پاسخ داده شده
          </button>
        `}
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
};

window.resolveSupportInquiry = function(id) {
  let supportDb = [];
  try {
    supportDb = JSON.parse(localStorage.getItem('aroosi_support_inquiries_db') || '[]');
  } catch (e) {
    supportDb = [];
  }
  supportDb = supportDb.map(item => item.id === id ? { ...item, status: 'پاسخ داده شد' } : item);
  localStorage.setItem('aroosi_support_inquiries_db', JSON.stringify(supportDb));
  window.renderAdminSupportInquiriesTable();
  if (typeof showToast === 'function') {
    showToast('وضعیت درخواست پشتیبانی به پاسخ داده شده تغییر یافت.', 'success');
  }
};

/* ========================================== */
/* ADMIN SUBSCRIPTION PLANS CRUD MODULE       */
/* ========================================== */

const defaultAdminSubPlans = [
  {
    id: 1,
    title: "پلن برنز (رایگان)",
    duration: "نامحدود",
    price: "۰ (رایگان)",
    badge: "پایه",
    features: "حضور در دایرکتوری عمومی\nدریافت لیدهای عمومی\nپروفایل پایه کسب‌وکار",
    active: true
  },
  {
    id: 2,
    title: "پلن نقره‌ای استاندارد",
    duration: "۶ ماهه",
    price: "۶,۵۰۰,۰۰۰",
    badge: "محبوب",
    features: "حضور در ۵ نتایج اول جستجو\nنمونه‌کار تا ۳۰ تصویر\nصدور پیش‌فاکتور دیجیتال\nپاسخگوی هوشمند ۲۴/۷",
    active: true
  },
  {
    id: 3,
    title: "پلن طلایی VIP",
    duration: "۱ ساله (۳۶۵ روز)",
    price: "۱۲,۵۰۰,۰۰۰",
    badge: "👑 VIP",
    features: "نمایش در ویترین VIP صفحه اصلی\nنشان رسمی تایید اصالت یزد\nآلبوم نمونه‌کار نامحدود\nلیدهای اختصاصی فوری + SMS\nصدور پیش‌فاکتور اقساطی",
    active: true
  }
];

window.getAdminSubPlans = function() {
  try {
    const stored = localStorage.getItem('aroosi_admin_sub_plans_db');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error(e);
  }
  localStorage.setItem('aroosi_admin_sub_plans_db', JSON.stringify(defaultAdminSubPlans));
  return defaultAdminSubPlans;
};

window.saveAdminSubPlans = function(plans) {
  localStorage.setItem('aroosi_admin_sub_plans_db', JSON.stringify(plans));
};

window.renderAdminSubscriptionPlansTable = function() {
  const tbody = document.getElementById('admin-sub-plans-table-body');
  if (!tbody) return;

  const plans = window.getAdminSubPlans();
  if (!plans || plans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400">هیچ پلن اشتراکی ثبت نشده است.</td></tr>`;
    return;
  }

  tbody.innerHTML = plans.map(plan => {
    const featureLines = (plan.features || '').split('\n').filter(f => f.trim()).map(f => `• ${f}`).join('<br>');
    return `
      <tr class="hover:bg-slate-50/80 transition-colors">
        <td class="p-3 font-bold text-graphite">
          <div class="flex items-center gap-2">
            <i data-lucide="crown" class="w-4 h-4 text-primary shrink-0"></i>
            <span>${plan.title}</span>
          </div>
        </td>
        <td class="p-3 text-secondary font-medium">${plan.duration}</td>
        <td class="p-3 font-black text-emerald-800">${plan.price}</td>
        <td class="p-3">
          <span class="bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
            ${plan.badge || 'استاندارد'}
          </span>
        </td>
        <td class="p-3 text-[11px] text-slate-600 leading-relaxed font-medium">
          ${featureLines}
        </td>
        <td class="p-3 text-center">
          <div class="flex items-center justify-center gap-2">
            <button type="button" onclick="openAdminSubPlanModal(${plan.id})" class="bg-slate-100 hover:bg-slate-200 text-graphite font-bold px-2.5 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-primary"></i>
              <span>ویرایش</span>
            </button>
            <button type="button" onclick="deleteAdminSubPlan(${plan.id})" class="bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold px-2.5 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              <span>حذف</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
};

window.openAdminSubPlanModal = function(planId = null) {
  const modal = document.getElementById('admin-sub-plan-modal');
  if (!modal) return;

  const titleEl = document.getElementById('admin-sub-plan-modal-title');
  const idInput = document.getElementById('sub-plan-id');
  const titleInput = document.getElementById('sub-plan-title');
  const durationInput = document.getElementById('sub-plan-duration');
  const priceInput = document.getElementById('sub-plan-price');
  const badgeInput = document.getElementById('sub-plan-badge');
  const featuresInput = document.getElementById('sub-plan-features');
  const activeInput = document.getElementById('sub-plan-active');

  if (planId) {
    const plans = window.getAdminSubPlans();
    const plan = plans.find(p => p.id === Number(planId));
    if (plan) {
      if (titleEl) {
        const span = titleEl.querySelector('span');
        if (span) span.textContent = 'ویرایش پلن اشتراک';
      }
      if (idInput) idInput.value = plan.id;
      if (titleInput) titleInput.value = plan.title || '';
      if (durationInput) durationInput.value = plan.duration || '';
      if (priceInput) priceInput.value = plan.price || '';
      if (badgeInput) badgeInput.value = plan.badge || '';
      if (featuresInput) featuresInput.value = plan.features || '';
      if (activeInput) activeInput.checked = plan.active !== false;
    }
  } else {
    if (titleEl) {
      const span = titleEl.querySelector('span');
      if (span) span.textContent = 'افزودن پلن اشتراک جدید';
    }
    if (idInput) idInput.value = '';
    if (titleInput) titleInput.value = '';
    if (durationInput) durationInput.value = '';
    if (priceInput) priceInput.value = '';
    if (badgeInput) badgeInput.value = '';
    if (featuresInput) featuresInput.value = '';
    if (activeInput) activeInput.checked = true;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

window.closeAdminSubPlanModal = function() {
  const modal = document.getElementById('admin-sub-plan-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

/* ========================================== */
/* VENDOR COMPARISON MODAL & FLOATING BAR     */
/* ========================================== */

window.renderFloatingComparisonBar = function() {
  const bar = document.getElementById('floating-comparison-bar');
  const container = document.getElementById('comparison-bar-items');
  const btnText = document.getElementById('comparison-bar-btn-text');
  if (!bar) return;

  if (selectedComparisonVendorIds.length === 0) {
    bar.classList.add('hidden');
    return;
  }

  bar.classList.remove('hidden');

  const mobileBadge = document.getElementById('mobile-nav-comp-badge');
  if (mobileBadge) {
    if (selectedComparisonVendorIds.length > 0) {
      mobileBadge.innerText = selectedComparisonVendorIds.length.toLocaleString('fa-IR');
      mobileBadge.classList.remove('hidden');
    } else {
      mobileBadge.classList.add('hidden');
    }
  }

  if (btnText) {
    btnText.innerText = `مقایسه تامین‌کنندگان (${selectedComparisonVendorIds.length.toLocaleString('fa-IR')})`;
  }

  if (container) {
    const selectedVendors = vendors.filter(v => selectedComparisonVendorIds.includes(v.id));
    container.innerHTML = selectedVendors.map(v => `
      <div class="flex items-center gap-2 bg-[#1E293B] border border-[#D4AF37]/30 pl-2.5 pr-1.5 py-1 rounded-xl shrink-0">
        <img src="${v.image}" alt="${v.name}" class="w-8 h-8 rounded-lg object-cover border border-[#D4AF37]/50">
        <span class="text-xs font-bold text-white max-w-[100px] truncate">${v.name}</span>
        <button type="button" onclick="toggleVendorComparison(${v.id}, event)" class="text-slate-400 hover:text-rose-400 text-xs font-bold px-1 transition-colors cursor-pointer" title="حذف">
          ✕
        </button>
      </div>
    `).join('');
  }

  if (window.lucide) lucide.createIcons();
};

window.triggerComparisonFromBar = function() {
  if (selectedComparisonVendorIds.length === 0) {
    showToast('لطفا حداقل یک تامین‌کننده برای مقایسه انتخاب کنید.', 'warning');
    return;
  }
  if (typeof window.openVendorComparisonModal === 'function') {
    window.openVendorComparisonModal(selectedComparisonVendorIds);
  }
};

window.openVendorComparisonModal = function(vendorIds) {
  const modal = document.getElementById('modal-vendor-comparison');
  if (!modal) return;

  const targetIds = (Array.isArray(vendorIds) && vendorIds.length > 0)
    ? vendorIds
    : (selectedComparisonVendorIds.length > 0 ? selectedComparisonVendorIds : [1, 2, 3]);

  const compareList = (typeof vendors !== 'undefined' && Array.isArray(vendors)) ?
    vendors.filter(v => targetIds.includes(v.id)) : [];

  const bodyEl = document.getElementById('compare-modal-body');
  if (bodyEl) {
    if (compareList.length === 0) {
      bodyEl.innerHTML = `
        <div class="py-12 text-center space-y-3">
          <i data-lucide="scale-off" class="w-12 h-12 mx-auto text-[#D4AF37]/50"></i>
          <p class="text-sm font-bold text-slate-300">هیچ تامین‌کننده‌ای جهت مقایسه انتخاب نشده است.</p>
          <p class="text-xs text-slate-400">با کلیک روی آیکون مقایسه (⚖️) کارت تامین‌کنندگان، تا ۴ گزینه را همزمان بررسی کنید.</p>
        </div>
      `;
    } else {
      const pricesNum = compareList.map(v => parsePriceNumeric(v.priceRange) || 0).filter(p => p > 0);
      const minPrice = pricesNum.length > 0 ? Math.min(...pricesNum) : null;
      const maxRating = Math.max(...compareList.map(v => parseFloat(v.rating) || 0));

      bodyEl.innerHTML = `
        <div class="comparison-matrix overflow-x-auto custom-scrollbar pb-2">
          <table class="w-full text-right border-collapse min-w-[650px]">
            <!-- Table Header: Vendor Cover, Name, Category & Removal -->
            <thead>
              <tr class="border-b border-[#D4AF37]/30 bg-[#1E293B]/80">
                <th class="p-3 w-36 text-xs font-black text-[#D4AF37] align-middle border-l border-[#D4AF37]/20">
                  معیار مقایسه
                </th>
                ${compareList.map(v => `
                  <th class="p-3 text-center align-top border-l border-[#D4AF37]/20 min-w-[180px] relative group">
                    <button type="button" onclick="toggleVendorComparison(${v.id}, event)" class="absolute top-2 left-2 w-6 h-6 rounded-full bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 flex items-center justify-center text-xs transition-colors cursor-pointer" title="حذف از مقایسه (✖)">
                      ✕
                    </button>
                    <img src="${v.image}" alt="${v.name}" class="w-full h-28 object-cover rounded-xl border border-[#D4AF37]/40 mb-2 shadow-sm">
                    <span class="text-[10px] font-bold text-amber-200 bg-[#0F172A] px-2 py-0.5 rounded-full border border-[#D4AF37]/30 inline-block mb-1">${v.category}</span>
                    <h4 class="text-xs sm:text-sm font-black text-white line-clamp-1">${v.name}</h4>
                    <span class="text-[10.5px] text-slate-300 block font-normal mt-0.5">📍 ${v.district || 'صفائیه، یزد'}</span>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody class="divide-y divide-[#D4AF37]/20 text-xs font-bold text-slate-200">
              <!-- Row 1: قیمت پایه -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  💵 قیمت پایه
                </td>
                ${compareList.map(v => {
                  const numP = parsePriceNumeric(v.priceRange);
                  const isBestPrice = minPrice && numP === minPrice;
                  return `
                    <td class="p-3 text-center border-l border-[#D4AF37]/20 ${isBestPrice ? 'best-spec-highlight text-[#D4AF37] font-black' : ''}">
                      <span class="text-sm font-black">${v.priceRange || 'استعلام'}</span>
                      ${isBestPrice ? `<span class="block text-[9.5px] text-amber-300 font-bold mt-0.5">⭐ اقتصادی‌ترین</span>` : ''}
                    </td>
                  `;
                }).join('')}
              </tr>

              <!-- Row 2: ظرفیت مهمانان -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  👥 ظرفیت مهمانان
                </td>
                ${compareList.map(v => `
                  <td class="p-3 text-center border-l border-[#D4AF37]/20">
                    <span>${v.capacity ? `${v.capacity} نفر` : '۵۰ الی ۸۰۰ نفر'}</span>
                  </td>
                `).join('')}
              </tr>

              <!-- Row 3: امتیاز و نظرات -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  ⭐️ امتیاز و رضایت
                </td>
                ${compareList.map(v => {
                  const r = parseFloat(v.rating) || 4.9;
                  const isTopRating = r === maxRating;
                  return `
                    <td class="p-3 text-center border-l border-[#D4AF37]/20 ${isTopRating ? 'best-spec-highlight' : ''}">
                      <span class="text-amber-300 font-black">⭐️ ${r}</span>
                      <span class="text-[10px] text-slate-400 block">(${v.reviewCount || 32} نظر ثبت‌شده)</span>
                    </td>
                  `;
                }).join('')}
              </tr>

              <!-- Row 4: امکانات ویژه -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  ✨ امکانات ویژه
                </td>
                ${compareList.map(v => `
                  <td class="p-3 text-center border-l border-[#D4AF37]/20">
                    <div class="flex flex-wrap justify-center gap-1">
                      ${(v.capabilityTags || ["پارکینگ اختصاصی", "سیستم صوت حرفه‌ای", "نورپردازی ۳D"]).map(t => `
                        <span class="text-[10px] bg-[#1E293B] text-amber-100 border border-[#D4AF37]/30 px-2 py-0.5 rounded-md">${t}</span>
                      `).join('')}
                    </div>
                  </td>
                `).join('')}
              </tr>

              <!-- Row 5: تور ۳۶۰° -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  🎥 بازدید و تور ۳۶۰°
                </td>
                ${compareList.map(v => `
                  <td class="p-3 text-center border-l border-[#D4AF37]/20">
                    <button type="button" onclick="open360TourModal(${v.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1E293B] hover:bg-[#D4AF37]/20 text-amber-200 border border-[#D4AF37]/40 text-[10.5px] transition-colors cursor-pointer">
                      <i data-lucide="compass" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                      <span>تور VR فعال</span>
                    </button>
                  </td>
                `).join('')}
              </tr>

              <!-- Row 6: موقعیت مکانی -->
              <tr class="hover:bg-[#1E293B]/40 transition-colors">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20">
                  📍 موقعیت مکانی
                </td>
                ${compareList.map(v => `
                  <td class="p-3 text-center border-l border-[#D4AF37]/20 text-[11px] font-normal text-slate-300">
                    ${v.address || `${v.district || 'یزد'}، خیابان اصلی`}
                  </td>
                `).join('')}
              </tr>

              <!-- Footer Row: Quick CTAs -->
              <tr class="bg-[#1E293B]/90">
                <td class="p-3 text-slate-400 font-bold bg-[#0F172A] border-l border-[#D4AF37]/20 align-middle">
                  🚀 اقدام سریع
                </td>
                ${compareList.map(v => `
                  <td class="p-3 border-l border-[#D4AF37]/20 text-center">
                    <div class="flex flex-col gap-2">
                      <button type="button" onclick="closeVendorComparisonModal(); openInquiryModal(${v.id})" class="w-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] font-black py-2 rounded-xl text-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-1">
                        <i data-lucide="send" class="w-3.5 h-3.5"></i>
                        <span>استعلام قیمت سریع</span>
                      </button>
                      <button type="button" onclick="closeVendorComparisonModal(); openVendorDetailModal(${v.id})" class="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white border border-[#D4AF37]/50 font-bold py-1.5 rounded-xl text-[11px] transition-all cursor-pointer flex items-center justify-center gap-1">
                        <i data-lucide="eye" class="w-3.5 h-3.5 text-[#D4AF37]"></i>
                        <span>مشاهده پروفایل</span>
                      </button>
                    </div>
                  </td>
                `).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

window.closeVendorComparisonModal = function() {
  const modal = document.getElementById('modal-vendor-comparison');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

/* Counselor Modal Handlers */
window.openCounselorModal = function() {
  const modal = document.getElementById('modal-counselor-consultation');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeCounselorModal = function() {
  const modal = document.getElementById('modal-counselor-consultation');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.openAboutModal = function() {
  const modal = document.getElementById('modal-about');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeAboutModal = function() {
  const modal = document.getElementById('modal-about');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.openFaqModal = function() {
  const modal = document.getElementById('modal-faq');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeFaqModal = function() {
  const modal = document.getElementById('modal-faq');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.openTermsModal = function() {
  const modal = document.getElementById('modal-terms');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeTermsModal = function() {
  const modal = document.getElementById('modal-terms');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleCounselorSubmit = function(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('counselor-name')?.value || 'کاربر گرامی';

  closeCounselorModal();

  if (typeof showToast === 'function') {
    showToast(`✨ درخواست مشاوره برای ${name} با موفقیت ثبت شد. مشاورین یزد به‌زودی جهت هماهنگی زمان با شما تماس می‌گیرند.`, 'success', 5000);
  }
};

/* Article Reader & Magazine Handlers */
window.openArticleModal = function(articleId) {
  const articles = inspirationState.articles || [];
  const article = articles.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('modal-article-reader');
  const catEl = document.getElementById('article-modal-category');
  const container = document.getElementById('article-modal-content-container');

  if (catEl) catEl.innerText = article.categoryName || 'مجله عروسی تو';

  if (container) {
    container.innerHTML = `
      <!-- ARTICLE COVER BANNER -->
      <div class="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-accent shadow-sm">
        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover opacity-90">
        <div class="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/30 to-transparent p-6 flex flex-col justify-end text-white space-y-2">
          <div class="flex items-center gap-2 text-[11px] font-bold">
            <span class="bg-[#D4AF37] text-[#1B3B2B] px-3 py-1 rounded-full shadow-xs">${article.categoryName}</span>
            <span>•</span>
            <span class="text-emerald-200">${article.readTime}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black leading-snug text-white">${article.title}</h2>
        </div>
      </div>

      <!-- AUTHOR & METADATA BAR -->
      <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F5EFEB] border border-[#E0D8C8] rounded-2xl text-xs">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center font-bold">
            <i data-lucide="user" class="w-4 h-4"></i>
          </div>
          <div>
            <span class="font-bold text-graphite block">${article.author}</span>
            <span class="text-[10px] text-secondary">${article.date}</span>
          </div>
        </div>

        <button onclick="bookmarkArticle(${article.id})" class="px-3.5 py-2 rounded-xl bg-white border border-[#E0D8C8] hover:border-[#D4AF37] text-graphite font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer">
          <i data-lucide="bookmark" class="w-4 h-4 text-[#D4AF37]"></i>
          <span>ذخیره در علاقه‌مندی‌ها</span>
        </button>
      </div>

      <!-- ARTICLE BODY TEXT -->
      <div class="prose prose-sm max-w-none space-y-4 text-graphite leading-relaxed">
        ${article.content}
      </div>

      <!-- DIRECT RELATED VENDORS CHIP ACTION -->
      <div class="p-5 bg-[#1B3B2B] text-white rounded-2xl space-y-3 shadow-md">
        <div class="space-y-1">
          <span class="text-xs font-bold text-[#D4AF37] block">تامین‌کنندگان مرتبط با موضوع این مقاله:</span>
          <p class="text-[11px] text-emerald-100/90">مشاهده و استعلام مستقیم از برترین تامین‌کنندگان دارای مجوز در استان یزد</p>
        </div>

        <button onclick="closeArticleReaderModal(); filterVendorsByCategoryTitle('${article.vendorCategoryMatch || 'همه'}')" class="bg-[#D4AF37] hover:bg-amber-400 text-[#1B3B2B] font-black px-5 py-2.5 rounded-xl text-xs transition-all shadow-xs flex items-center gap-2 cursor-pointer">
          <i data-lucide="store" class="w-4 h-4"></i>
          <span>مشاهده تامین‌کنندگان ${article.vendorCategoryMatch}</span>
        </button>
      </div>
    `;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeArticleReaderModal = function() {
  const modal = document.getElementById('modal-article-reader');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.bookmarkArticle = function(articleId) {
  if (typeof showToast === 'function') {
    showToast('✨ مقاله به فهرست مطالعه‌های بعدی شما اضافه شد.', 'success');
  }
};

/* Expose Budget and Checklist handlers to window for inline HTML events */
if (typeof openBudgetItemModal === 'function') window.openBudgetItemModal = openBudgetItemModal;
if (typeof closeBudgetItemModal === 'function') window.closeBudgetItemModal = closeBudgetItemModal;
if (typeof handleSaveBudgetItem === 'function') window.handleSaveBudgetItem = handleSaveBudgetItem;
if (typeof deleteBudgetItem === 'function') window.deleteBudgetItem = deleteBudgetItem;
if (typeof updateTotalBudgetCap === 'function') window.updateTotalBudgetCap = updateTotalBudgetCap;
if (typeof filterChecklistTasksByStatus === 'function') window.filterChecklistTasksByStatus = filterChecklistTasksByStatus;
if (typeof filterVendorsByCategoryTitle === 'function') window.filterVendorsByCategoryTitle = filterVendorsByCategoryTitle;
if (typeof openIdeaDetailModal === 'function') window.openIdeaDetailModal = openIdeaDetailModal;
if (typeof closeIdeaDetailModal === 'function') window.closeIdeaDetailModal = closeIdeaDetailModal;

/* Automatically expose all global functions to window object for reliable SPA event delegation */
if (typeof acceptPreInvoiceAndPayDeposit === "function") window.acceptPreInvoiceAndPayDeposit = acceptPreInvoiceAndPayDeposit;
if (typeof addPreInvoiceLineItem === "function") window.addPreInvoiceLineItem = addPreInvoiceLineItem;
if (typeof applyStyleToDirectory === "function") window.applyStyleToDirectory = applyStyleToDirectory;
if (typeof applyYazdBudgetPreset === "function") window.applyYazdBudgetPreset = applyYazdBudgetPreset;
if (typeof approveVendorAppStatic === "function") window.approveVendorAppStatic = approveVendorAppStatic;
if (typeof calculateAndRenderBwResults === "function") window.calculateAndRenderBwResults = calculateAndRenderBwResults;
if (typeof calculateHomeBudgetPreview === "function") window.calculateHomeBudgetPreview = calculateHomeBudgetPreview;
if (typeof closeAppointmentModal === "function") window.closeAppointmentModal = closeAppointmentModal;
if (typeof closeAuthModal === "function") window.closeAuthModal = closeAuthModal;
if (typeof closeBudgetItemModal === "function") window.closeBudgetItemModal = closeBudgetItemModal;
if (typeof closeGiftModal === "function") window.closeGiftModal = closeGiftModal;
if (typeof closeGuestModal === "function") window.closeGuestModal = closeGuestModal;
if (typeof closeIdeaDetailModal === "function") window.closeIdeaDetailModal = closeIdeaDetailModal;
if (typeof closeInquiryModal === "function") window.closeInquiryModal = closeInquiryModal;
if (typeof closeInquiryReplyModal === "function") window.closeInquiryReplyModal = closeInquiryReplyModal;
if (typeof closeLightbox === "function") window.closeLightbox = closeLightbox;
if (typeof closeLocationModal === "function") window.closeLocationModal = closeLocationModal;
if (typeof closeParentCatModal === "function") window.closeParentCatModal = closeParentCatModal;
if (typeof closePortfolioModal === "function") window.closePortfolioModal = closePortfolioModal;
if (typeof closePreInvoiceModal === "function") window.closePreInvoiceModal = closePreInvoiceModal;
if (typeof closeQrModal === "function") window.closeQrModal = closeQrModal;
if (typeof closeRevisionModal === "function") window.closeRevisionModal = closeRevisionModal;
if (typeof closeRsvpModal === "function") window.closeRsvpModal = closeRsvpModal;
if (typeof closeSubCatModal === "function") window.closeSubCatModal = closeSubCatModal;
if (typeof closeSubCategoryDrawer === "function") window.closeSubCategoryDrawer = closeSubCategoryDrawer;
if (typeof closeAllSubgroupModals === "function") window.closeAllSubgroupModals = closeAllSubgroupModals;
if (typeof closeSubgroupModal === "function") window.closeSubgroupModal = closeSubgroupModal;
if (typeof closeVendorDetailModal === "function") window.closeVendorDetailModal = closeVendorDetailModal;
if (typeof closeVendorModal === "function") window.closeVendorModal = closeVendorModal;
if (typeof closeVendorSelectModal === "function") window.closeVendorSelectModal = closeVendorSelectModal;
if (typeof confirmAppointmentScheduleCard === "function") window.confirmAppointmentScheduleCard = confirmAppointmentScheduleCard;
if (typeof copyBankCardNumber === "function") window.copyBankCardNumber = copyBankCardNumber;
if (typeof copyInvitationLink === "function") window.copyInvitationLink = copyInvitationLink;
if (typeof copyQuizResultLink === "function") window.copyQuizResultLink = copyQuizResultLink;
if (typeof deleteBudgetItem === "function") window.deleteBudgetItem = deleteBudgetItem;
if (typeof deleteCustomBwService === "function") window.deleteCustomBwService = deleteCustomBwService;
if (typeof deleteGift === "function") window.deleteGift = deleteGift;
if (typeof deleteGuest === "function") window.deleteGuest = deleteGuest;
if (typeof deletePackage === "function") window.deletePackage = deletePackage;
if (typeof deleteParentCategory === "function") window.deleteParentCategory = deleteParentCategory;
if (typeof deletePortfolioItem === "function") window.deletePortfolioItem = deletePortfolioItem;
if (typeof deleteSubCategory === "function") window.deleteSubCategory = deleteSubCategory;
if (typeof detachVendorFromTask === "function") window.detachVendorFromTask = detachVendorFromTask;
if (typeof dismissToast === "function") window.dismissToast = dismissToast;
if (typeof editGuest === "function") window.editGuest = editGuest;
if (typeof editVendorPackage === "function") window.editVendorPackage = editVendorPackage;
if (typeof exitQuizRunner === "function") window.exitQuizRunner = exitQuizRunner;
if (typeof exportBudgetSummaryCsv === "function") window.exportBudgetSummaryCsv = exportBudgetSummaryCsv;
if (typeof exportChecklistCsv === "function") window.exportChecklistCsv = exportChecklistCsv;
if (typeof exportGuestsExcel === "function") window.exportGuestsExcel = exportGuestsExcel;
if (typeof exportInquiriesCsv === "function") window.exportInquiriesCsv = exportInquiriesCsv;
if (typeof exportMoodboardPdf === "function") window.exportMoodboardPdf = exportMoodboardPdf;
if (typeof filterByYazdDistrict === "function") window.filterByYazdDistrict = filterByYazdDistrict;
if (typeof filterChatThreads === "function") window.filterChatThreads = filterChatThreads;
if (typeof filterChecklistTasksByStatus === "function") window.filterChecklistTasksByStatus = filterChecklistTasksByStatus;
if (typeof filterDirectoryByVendorCategory === "function") window.filterDirectoryByVendorCategory = filterDirectoryByVendorCategory;
if (typeof filterInspirationByCategory === "function") window.filterInspirationByCategory = filterInspirationByCategory;
if (typeof filterInspirationItems === "function") window.filterInspirationItems = filterInspirationItems;
if (typeof filterModalGallery === "function") window.filterModalGallery = filterModalGallery;
if (typeof filterVendors === "function") window.filterVendors = filterVendors;
if (typeof filterVendorsByCategoryTitle === "function") window.filterVendorsByCategoryTitle = filterVendorsByCategoryTitle;
if (typeof filterVendorsFromMega === "function") window.filterVendorsFromMega = filterVendorsFromMega;
if (typeof filterVipShowcase === "function") window.filterVipShowcase = filterVipShowcase;
if (typeof finishQuizRunner === "function") window.finishQuizRunner = finishQuizRunner;
if (typeof getPrivateNote === "function") window.getPrivateNote = getPrivateNote;
if (typeof getQuizHistory === "function") window.getQuizHistory = getQuizHistory;
if (typeof getSelectedFontFamily === "function") window.getSelectedFontFamily = getSelectedFontFamily;
if (typeof getVendorCustomQuestions === "function") window.getVendorCustomQuestions = getVendorCustomQuestions;
if (typeof handleAddCustomBwService === "function") window.handleAddCustomBwService = handleAddCustomBwService;
if (typeof handleAddNewTaskSubmit === "function") window.handleAddNewTaskSubmit = handleAddNewTaskSubmit;
if (typeof handleAvatarDelete === "function") window.handleAvatarDelete = handleAvatarDelete;
if (typeof handleAvatarUpload === "function") window.handleAvatarUpload = handleAvatarUpload;
if (typeof handleAdminAuthSubmit === "function") window.handleAdminAuthSubmit = handleAdminAuthSubmit;
if (typeof handleCoupleAuthSubmit === "function") window.handleCoupleAuthSubmit = handleCoupleAuthSubmit;
if (typeof handleGiftFormSubmit === "function") window.handleGiftFormSubmit = handleGiftFormSubmit;
if (typeof handleGuestFormSubmit === "function") window.handleGuestFormSubmit = handleGuestFormSubmit;
if (typeof handleGuestInputChange === "function") window.handleGuestInputChange = handleGuestInputChange;
if (typeof handleGuestRsvpSubmit === "function") window.handleGuestRsvpSubmit = handleGuestRsvpSubmit;
if (typeof handleQuickRsvp === "function") window.handleQuickRsvp = handleQuickRsvp;
if (typeof handleHeaderSearchFocus === "function") window.handleHeaderSearchFocus = handleHeaderSearchFocus;
if (typeof handleHeaderSearchInput === "function") window.handleHeaderSearchInput = handleHeaderSearchInput;
if (typeof handleHeroSearch === "function") window.handleHeroSearch = handleHeroSearch;
if (typeof handleInquirySubmit === "function") window.handleInquirySubmit = handleInquirySubmit;
if (typeof handleIssuePreInvoiceSubmit === "function") window.handleIssuePreInvoiceSubmit = handleIssuePreInvoiceSubmit;
if (typeof handleModalReviewSubmit === "function") window.handleModalReviewSubmit = handleModalReviewSubmit;
if (typeof handlePortfolioFileSelect === "function") window.handlePortfolioFileSelect = handlePortfolioFileSelect;
if (typeof handlePortfolioSubmit === "function") window.handlePortfolioSubmit = handlePortfolioSubmit;
if (typeof handleProfileReviewSubmit === "function") window.handleProfileReviewSubmit = handleProfileReviewSubmit;
if (typeof handleProvinceChange === "function") window.handleProvinceChange = handleProvinceChange;
if (typeof handleRsvpSubmit === "function") window.handleRsvpSubmit = handleRsvpSubmit;
if (typeof handleSaveBudgetItem === "function") window.handleSaveBudgetItem = handleSaveBudgetItem;
if (typeof handleSaveParentCategory === "function") window.handleSaveParentCategory = handleSaveParentCategory;
if (typeof handleSaveSubCategory === "function") window.handleSaveSubCategory = handleSaveSubCategory;
if (typeof handleSaveVendorAttachment === "function") window.handleSaveVendorAttachment = handleSaveVendorAttachment;
if (typeof handleScheduleAppointmentSubmit === "function") window.handleScheduleAppointmentSubmit = handleScheduleAppointmentSubmit;
if (typeof handleSelectCalendarDay === "function") window.handleSelectCalendarDay = handleSelectCalendarDay;
if (typeof handleSendChatMessage === "function") window.handleSendChatMessage = handleSendChatMessage;
if (typeof handleSubmitPreInvoiceRevision === "function") window.handleSubmitPreInvoiceRevision = handleSubmitPreInvoiceRevision;
if (typeof handleSaveShowcaseConfig === "function") window.handleSaveShowcaseConfig = handleSaveShowcaseConfig;
if (typeof handleUpdateHeroLogo === "function") window.handleUpdateHeroLogo = handleUpdateHeroLogo;
if (typeof loadShowcaseConfig === "function") window.loadShowcaseConfig = loadShowcaseConfig;
if (typeof handleVendorAuthSubmit === "function") window.handleVendorAuthSubmit = handleVendorAuthSubmit;
if (typeof handleVendorModalSubmit === "function") window.handleVendorModalSubmit = handleVendorModalSubmit;
if (typeof handleVendorProfileUpdate === "function") window.handleVendorProfileUpdate = handleVendorProfileUpdate;
if (typeof initVipShowcaseAutoScroll === "function") window.initVipShowcaseAutoScroll = initVipShowcaseAutoScroll;
if (typeof loadBudgetStateFromStorage === "function") window.loadBudgetStateFromStorage = loadBudgetStateFromStorage;
if (typeof loadCategoryGroupsFromStorage === "function") window.loadCategoryGroupsFromStorage = loadCategoryGroupsFromStorage;
if (typeof loadChatStateFromStorage === "function") window.loadChatStateFromStorage = loadChatStateFromStorage;
if (typeof loadFavoritesFromStorage === "function") window.loadFavoritesFromStorage = loadFavoritesFromStorage;
if (typeof loadSavedMoodboardIds === "function") window.loadSavedMoodboardIds = loadSavedMoodboardIds;
if (typeof loadVendorProfile === "function") window.loadVendorProfile = loadVendorProfile;
if (typeof loadViewTemplates === "function") window.loadViewTemplates = loadViewTemplates;
if (typeof makeVendorCall === "function") window.makeVendorCall = makeVendorCall;
if (typeof navigateBwStep === "function") window.navigateBwStep = navigateBwStep;
if (typeof navigateQuizQuestion === "function") window.navigateQuizQuestion = navigateQuizQuestion;
if (typeof openAppointmentModal === "function") window.openAppointmentModal = openAppointmentModal;
if (typeof openAuthModal === "function") window.openAuthModal = openAuthModal;
if (typeof openBudgetItemModal === "function") window.openBudgetItemModal = openBudgetItemModal;
if (typeof openCategorySubgroups === "function") window.openCategorySubgroups = openCategorySubgroups;
if (typeof openCategorySubgroupsModal === "function") window.openCategorySubgroupsModal = openCategorySubgroupsModal;
if (typeof openEnvelopeAnimation === "function") window.openEnvelopeAnimation = openEnvelopeAnimation;
if (typeof openGiftModal === "function") window.openGiftModal = openGiftModal;
if (typeof openGuestModal === "function") window.openGuestModal = openGuestModal;
if (typeof openIdeaDetailModal === "function") window.openIdeaDetailModal = openIdeaDetailModal;
if (typeof openInquiryModal === "function") window.openInquiryModal = openInquiryModal;
if (typeof openInquiryReplyModal === "function") window.openInquiryReplyModal = openInquiryReplyModal;
if (typeof openLightbox === "function") window.openLightbox = openLightbox;
if (typeof openLocationModal === "function") window.openLocationModal = openLocationModal;
if (typeof openParentCategoryModal === "function") window.openParentCategoryModal = openParentCategoryModal;
if (typeof openPortfolioModal === "function") window.openPortfolioModal = openPortfolioModal;
if (typeof openPreInvoiceModal === "function") window.openPreInvoiceModal = openPreInvoiceModal;
if (typeof openQrModal === "function") window.openQrModal = openQrModal;
if (typeof openRevisionModal === "function") window.openRevisionModal = openRevisionModal;
if (typeof openRsvpModal === "function") window.openRsvpModal = openRsvpModal;
if (typeof openSubCategoryDrawer === "function") window.openSubCategoryDrawer = openSubCategoryDrawer;
if (typeof openSubCategoryModal === "function") window.openSubCategoryModal = openSubCategoryModal;
if (typeof openSubgroupsModal === "function") window.openSubgroupsModal = openSubgroupsModal;
if (typeof openVendorDetailModal === "function") window.openVendorDetailModal = openVendorDetailModal;
if (typeof openVendorSelectModal === "function") window.openVendorSelectModal = openVendorSelectModal;
if (typeof previewPortfolioModalImage === "function") window.previewPortfolioModalImage = previewPortfolioModalImage;
if (typeof rejectVendorAppStatic === "function") window.rejectVendorAppStatic = rejectVendorAppStatic;
if (typeof renderAdminCategories === "function") window.renderAdminCategories = renderAdminCategories;
if (typeof renderAdminPendingApps === "function") window.renderAdminPendingApps = renderAdminPendingApps;
if (typeof renderAdminTable === "function") window.renderAdminTable = renderAdminTable;
if (typeof renderBwServicesChecklist === "function") window.renderBwServicesChecklist = renderBwServicesChecklist;
if (typeof renderCalendar === "function") window.renderCalendar = renderCalendar;
if (typeof renderCategoryCards === "function") window.renderCategoryCards = renderCategoryCards;
if (typeof renderChatActiveThread === "function") window.renderChatActiveThread = renderChatActiveThread;
if (typeof renderChatThreadsList === "function") window.renderChatThreadsList = renderChatThreadsList;
if (typeof renderChecklistTimeframeButtons === "function") window.renderChecklistTimeframeButtons = renderChecklistTimeframeButtons;
window.initBridalCountdownTimer = function() {
  if (window.bridalCountdownInterval) clearInterval(window.bridalCountdownInterval);

  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 135);

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById('bridal-cnt-days');
    const hoursEl = document.getElementById('bridal-cnt-hours');
    const minsEl = document.getElementById('bridal-cnt-mins');
    const secsEl = document.getElementById('bridal-cnt-secs');

    if (daysEl) daysEl.innerText = days.toLocaleString('fa-IR');
    if (hoursEl) hoursEl.innerText = hours.toLocaleString('fa-IR');
    if (minsEl) minsEl.innerText = mins.toLocaleString('fa-IR');
    if (secsEl) secsEl.innerText = secs.toLocaleString('fa-IR');
  }

  updateTimer();
  window.bridalCountdownInterval = setInterval(updateTimer, 1000);
};

if (typeof renderChecklistTimeline === "function") window.renderChecklistTimeline = renderChecklistTimeline;
if (typeof renderFavoriteVendorsList === "function") window.renderFavoriteVendorsList = renderFavoriteVendorsList;
if (typeof renderGallery === "function") window.renderGallery = renderGallery;
if (typeof renderGiftsTable === "function") window.renderGiftsTable = renderGiftsTable;
if (typeof renderGuestsAndGifts === "function") window.renderGuestsAndGifts = renderGuestsAndGifts;
if (typeof renderGuestsKPIs === "function") window.renderGuestsKPIs = renderGuestsKPIs;
if (typeof renderGuestsTable === "function") window.renderGuestsTable = renderGuestsTable;
if (typeof renderInquiries === "function") window.renderInquiries = renderInquiries;
if (typeof renderInspirationCategoryPills === "function") window.renderInspirationCategoryPills = renderInspirationCategoryPills;
if (typeof renderInspirationGalleryGrid === "function") window.renderInspirationGalleryGrid = renderInspirationGalleryGrid;
if (typeof renderInvAdminRsvpTable === "function") window.renderInvAdminRsvpTable = renderInvAdminRsvpTable;
if (typeof renderInvitationPreview === "function") window.renderInvitationPreview = renderInvitationPreview;
if (typeof renderMagazineFeaturedBanner === "function") window.renderMagazineFeaturedBanner = renderMagazineFeaturedBanner;
if (typeof renderModalAvailabilityCalendar === "function") window.renderModalAvailabilityCalendar = renderModalAvailabilityCalendar;
if (typeof renderMoodboardGrid === "function") window.renderMoodboardGrid = renderMoodboardGrid;
if (typeof renderMultiCategoryPills === "function") window.renderMultiCategoryPills = renderMultiCategoryPills;
if (typeof renderPlannerAttachedVendors === "function") window.renderPlannerAttachedVendors = renderPlannerAttachedVendors;
if (typeof renderPlannerBudgetSummary === "function") window.renderPlannerBudgetSummary = renderPlannerBudgetSummary;
if (typeof renderPlannerOffersTab === "function") window.renderPlannerOffersTab = renderPlannerOffersTab;
if (typeof renderPortfolioUI === "function") window.renderPortfolioUI = renderPortfolioUI;
if (typeof renderProfileCalendar === "function") window.renderProfileCalendar = renderProfileCalendar;
if (typeof renderQuizCatalogCards === "function") window.renderQuizCatalogCards = renderQuizCatalogCards;
if (typeof renderQuizQuestion === "function") window.renderQuizQuestion = renderQuizQuestion;
if (typeof renderQuizResultDashboard === "function") window.renderQuizResultDashboard = renderQuizResultDashboard;
if (typeof renderSidebarCategoryCheckboxes === "function") window.renderSidebarCategoryCheckboxes = renderSidebarCategoryCheckboxes;
if (typeof renderVendorPackages === "function") window.renderVendorPackages = renderVendorPackages;
if (typeof renderVendors === "function") window.renderVendors = renderVendors;
if (typeof requestCityNotify === "function") window.requestCityNotify = requestCityNotify;
if (typeof resetAllCategoryFilters === "function") window.resetAllCategoryFilters = resetAllCategoryFilters;
if (typeof resetBwWizard === "function") window.resetBwWizard = resetBwWizard;
if (typeof resetEnvelopeAnimation === "function") window.resetEnvelopeAnimation = resetEnvelopeAnimation;
if (typeof runAiAllocation === "function") window.runAiAllocation = runAiAllocation;
if (typeof saveBudgetStateToStorage === "function") window.saveBudgetStateToStorage = saveBudgetStateToStorage;
if (typeof saveCategoryGroupsToStorage === "function") window.saveCategoryGroupsToStorage = saveCategoryGroupsToStorage;
if (typeof saveChatStateToStorage === "function") window.saveChatStateToStorage = saveChatStateToStorage;
if (typeof saveFavoritesToStorage === "function") window.saveFavoritesToStorage = saveFavoritesToStorage;
if (typeof saveMoodboardIds === "function") window.saveMoodboardIds = saveMoodboardIds;
if (typeof savePrivateNote === "function") window.savePrivateNote = savePrivateNote;
if (typeof saveQuizHistoryEntry === "function") window.saveQuizHistoryEntry = saveQuizHistoryEntry;
if (typeof saveVendorCustomQuestions === "function") window.saveVendorCustomQuestions = saveVendorCustomQuestions;
if (typeof saveVendorPackageModal === "function") window.saveVendorPackageModal = saveVendorPackageModal;
if (typeof selectBwStyle === "function") window.selectBwStyle = selectBwStyle;
if (typeof selectChatThread === "function") window.selectChatThread = selectChatThread;
if (typeof selectLocationCity === "function") window.selectLocationCity = selectLocationCity;
if (typeof selectLocationProvince === "function") window.selectLocationProvince = selectLocationProvince;
if (typeof selectQuizOption === "function") window.selectQuizOption = selectQuizOption;
if (typeof selectSearchSuggestion === "function") window.selectSearchSuggestion = selectSearchSuggestion;
if (typeof sendInquiryReply === "function") window.sendInquiryReply = sendInquiryReply;
if (typeof sendSmsBroadcast === "function") window.sendSmsBroadcast = sendSmsBroadcast;
if (typeof setBwGuestCount === "function") window.setBwGuestCount = setBwGuestCount;
if (typeof setDirectoryViewMode === "function") window.setDirectoryViewMode = setDirectoryViewMode;
if (typeof setHomeBudgetTier === "function") window.setHomeBudgetTier = setHomeBudgetTier;
if (typeof setInquiryBudgetPill === "function") window.setInquiryBudgetPill = setInquiryBudgetPill;
if (typeof setInvAudioChoice === "function") window.setInvAudioChoice = setInvAudioChoice;
if (typeof setInvDisplayLang === "function") window.setInvDisplayLang = setInvDisplayLang;
if (typeof setInvTheme === "function") window.setInvTheme = setInvTheme;
if (typeof setPortfolioAsCover === "function") window.setPortfolioAsCover = setPortfolioAsCover;
if (typeof shareMoodboardLink === "function") window.shareMoodboardLink = shareMoodboardLink;
if (typeof shareVendorProfile === "function") window.shareVendorProfile = shareVendorProfile;
if (typeof showGlobalToast === "function") window.showGlobalToast = showGlobalToast;
if (typeof showToast === "function") window.showToast = showToast;
if (typeof showToastNotification === "function") window.showToastNotification = showToastNotification;
if (typeof startAutoScroll === "function") window.startAutoScroll = startAutoScroll;
if (typeof startQuizRunner === "function") window.startQuizRunner = startQuizRunner;
if (typeof stopAutoScroll === "function") window.stopAutoScroll = stopAutoScroll;
if (typeof submitNewReview === "function") window.submitNewReview = submitNewReview;
if (typeof switchAuthTab === "function") window.switchAuthTab = switchAuthTab;
if (typeof switchGuestSubTab === "function") window.switchGuestSubTab = switchGuestSubTab;
if (typeof switchInspirationSubTab === "function") window.switchInspirationSubTab = switchInspirationSubTab;
if (typeof switchInvMobileTab === "function") window.switchInvMobileTab = switchInvMobileTab;
if (typeof switchModalTab === "function") window.switchModalTab = switchModalTab;
if (typeof switchPlannerSubTab === "function") window.switchPlannerSubTab = switchPlannerSubTab;
if (typeof switchQuizCategoryTab === "function") window.switchQuizCategoryTab = switchQuizCategoryTab;
if (typeof switchRole === "function") window.switchRole = switchRole;
if (typeof switchTab === "function") window.switchTab = switchTab;
if (typeof switchVdmSubTab === "function") window.switchVdmSubTab = switchVdmSubTab;
if (typeof syncAndFilterCity === "function") window.syncAndFilterCity = syncAndFilterCity;
if (typeof syncAndFilterPrice === "function") window.syncAndFilterPrice = syncAndFilterPrice;
if (typeof syncCategoryStateAndRender === "function") window.syncCategoryStateAndRender = syncCategoryStateAndRender;
if (typeof toggleAccountMenu === "function") window.toggleAccountMenu = toggleAccountMenu;
if (typeof toggleAddPackageModal === "function") window.toggleAddPackageModal = toggleAddPackageModal;
if (typeof toggleAddReviewForm === "function") window.toggleAddReviewForm = toggleAddReviewForm;
if (typeof toggleBookmarkMoodboard === "function") window.toggleBookmarkMoodboard = toggleBookmarkMoodboard;
if (typeof toggleBwService === "function") window.toggleBwService = toggleBwService;
if (typeof toggleCategoriesExpand === "function") window.toggleCategoriesExpand = toggleCategoriesExpand;
if (typeof toggleCategoryAccordion === "function") window.toggleCategoryAccordion = toggleCategoryAccordion;
if (typeof toggleCategoryFilter === "function") window.toggleCategoryFilter = toggleCategoryFilter;
if (typeof toggleChecklistTask === "function") window.toggleChecklistTask = toggleChecklistTask;
if (typeof toggleDate === "function") window.toggleDate = toggleDate;
if (typeof toggleFavoriteCurrentVendor === "function") window.toggleFavoriteCurrentVendor = toggleFavoriteCurrentVendor;
if (typeof toggleFavoriteVendor === "function") window.toggleFavoriteVendor = toggleFavoriteVendor;
if (typeof toggleFavoriteVendorModal === "function") window.toggleFavoriteVendorModal = toggleFavoriteVendorModal;
if (typeof toggleGuestRsvp === "function") window.toggleGuestRsvp = toggleGuestRsvp;
if (typeof toggleHiddenCostsBuffer === "function") window.toggleHiddenCostsBuffer = toggleHiddenCostsBuffer;
if (typeof toggleInvFeature === "function") window.toggleInvFeature = toggleInvFeature;
window.addToCalendar = function() {
  const eventTitle = "جشن عروسی " + (document.getElementById('inv-preview-names')?.innerText || "علی و سارا");
  const eventDate = document.getElementById('inv-preview-date')?.innerText || "۱۴۰۳/۰۶/۱۵";
  const venue = document.getElementById('inv-preview-venue')?.innerText || "باغ تالار تشریفاتی";

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aroosi No Wedding Platform//FA
BEGIN:VEVENT
SUMMARY:${eventTitle}
DESCRIPTION:مراسم جشن عروسی در ${venue} - تاریخ: ${eventDate}
LOCATION:${venue}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'wedding-event.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (typeof showToast === 'function') {
    showToast('رویداد عروسی جهت افزودن به تقویم با موفقیت دریافت گردید!', 'success');
  }
};

if (typeof toggleInvMusic === "function") window.toggleInvMusic = toggleInvMusic;
if (typeof toggleModalFaq === "function") window.toggleModalFaq = toggleModalFaq;
if (typeof toggleNewTaskModal === "function") window.toggleNewTaskModal = toggleNewTaskModal;
if (typeof toggleProfileReviewForm === "function") window.toggleProfileReviewForm = toggleProfileReviewForm;
if (typeof toggleVendorModalStatic === "function") window.toggleVendorModalStatic = toggleVendorModalStatic;
if (typeof toggleVendorVerification === "function") window.toggleVendorVerification = toggleVendorVerification;
if (typeof triggerPackageInquiry === "function") window.triggerPackageInquiry = triggerPackageInquiry;
if (typeof triggerProfileChat === "function") window.triggerProfileChat = triggerProfileChat;
if (typeof triggerProfileInquiry === "function") window.triggerProfileInquiry = triggerProfileInquiry;
if (typeof updateBudgetFormattedDisplay === "function") window.updateBudgetFormattedDisplay = updateBudgetFormattedDisplay;
if (typeof updateBwStepUI === "function") window.updateBwStepUI = updateBwStepUI;
if (typeof updateCapacitySliderLabel === "function") window.updateCapacitySliderLabel = updateCapacitySliderLabel;
if (typeof updateGuestBtnStyles === "function") window.updateGuestBtnStyles = updateGuestBtnStyles;
if (typeof updateInquiryStatus === "function") window.updateInquiryStatus = updateInquiryStatus;
if (typeof updateInvStateFromForm === "function") window.updateInvStateFromForm = updateInvStateFromForm;
if (typeof updateMoodboardBadge === "function") window.updateMoodboardBadge = updateMoodboardBadge;
if (typeof updateTotalBudgetCap === "function") window.updateTotalBudgetCap = updateTotalBudgetCap;
if (typeof updateVendorAvatarUI === "function") window.updateVendorAvatarUI = updateVendorAvatarUI;

/* Function aliases and missing modal handlers */
if (typeof handlePortfolioSubmit === "function") {
  window.savePortfolioModal = handlePortfolioSubmit;
}

window.toggleVendorVerificationRequestModal = function(show) {
  const modal = document.getElementById('modal-vendor-verification-request') || document.getElementById('vendor-verification-modal');
  if (modal) {
    if (show) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  } else {
    if (typeof showToast === 'function') {
      showToast('درخواست تایید اعتبار شما با موفقیت به پشتیبانی ارسال شد.', 'success');
    }
  }
};

window.shareInvitationSocial = function(platform) {
  const url = encodeURIComponent('https://aroosito.com/invitation/ali-and-sara');
  const text = encodeURIComponent('دعوتنامه دیجیتال مراسم عروسی علی و سارا 🌸🍃\nبرای مشاهده جزییات و اعلام حضور روی لینک کلیک کنید:');

  if (platform === 'whatsapp') {
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  } else if (platform === 'eitaa') {
    window.open(`https://eitaa.com/share?url=${url}&text=${text}`, '_blank');
  } else {
    copyInvitationLink();
  }
};

let currentHomeCalcStyle = 'medium';

window.setHomeCalcStyle = function(style) {
  currentHomeCalcStyle = style;
  const luxuryBtn = document.getElementById('home-style-luxury');
  const mediumBtn = document.getElementById('home-style-medium');
  const ecoBtn = document.getElementById('home-style-economic');

  if (luxuryBtn) luxuryBtn.classList.toggle('active', style === 'luxury');
  if (mediumBtn) mediumBtn.classList.toggle('active', style === 'medium');
  if (ecoBtn) ecoBtn.classList.toggle('active', style === 'economic');

  updateHomeQuickBudget();
};

window.updateHomeQuickBudget = function() {
  const rangeInput = document.getElementById('home-calc-range');
  const guestTag = document.getElementById('home-calc-guest-tag');
  const resultPrice = document.getElementById('home-calc-result-price');

  if (!rangeInput) return;

  const guests = parseInt(rangeInput.value, 10) || 250;
  if (guestTag) {
    guestTag.innerText = guests.toLocaleString('fa-IR') + ' نفر';
  }

  let basePerGuest = 1400000;
  let fixedBase = 30000000;
  if (currentHomeCalcStyle === 'economic') {
    basePerGuest = 850000;
    fixedBase = 20000000;
  } else if (currentHomeCalcStyle === 'luxury') {
    basePerGuest = 2600000;
    fixedBase = 60000000;
  }

  const totalCost = fixedBase + (guests * basePerGuest);
  const formatted = totalCost.toLocaleString('fa-IR') + ' تومان';

  if (resultPrice) {
    resultPrice.innerText = formatted;
  }
};

/* ==========================================================================
   VERIFIED TESTIMONIALS CAROUSEL
   ========================================================================== */
const testimonialsList = [
  {
    couple: "علی & سارا",
    date: "مهر ۱۴۰۳ - صفائیه یزد",
    vendor: "هتل باغ مشیرالممالک & استودیو کویر",
    text: "برنامه‌ریزی عروسی با پلتفرم عروسی‌تو فوق‌العاده راحت و بی‌دردسر بود. از صدور پیش‌فاکتور شفاف تا هماهنگی عکاسی فرمالیته در کویر، همه چیز دقیقاً طبق توافق انجام شد.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80",
    rating: "★★★★★"
  },
  {
    couple: "محمد & مریم",
    date: "شهریور ۱۴۰۳ - میدان اطلسی یزد",
    vendor: "سالن زیبایی رویال & مزون عروس لورنت",
    text: "مدل رزرو اقساطی بدون دریافت کمیسیون اضافه بزرگترین کمک به بودجه ما بود. تمام قیمت‌های ثبت شده در سایت ۱۰۰٪ واقعی و تطبیق داده شده بودند.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80",
    rating: "★★★★★"
  },
  {
    couple: "حسین & زهرا",
    date: "اردیبهشت ۱۴۰۳ - بافت تاریخی یزد",
    vendor: "دی‌جی و موزیک آریا & شیرینی‌سرای حاج خلیفه رهبر",
    text: "پشتیبانی پاسخگوی ۲۴/۷ و ابزارهای رایگان تخمین بودجه عالی بودند. خوشحالم که پلتفرم تخصصی عروسی در یزد را انتخاب کردیم.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80",
    rating: "★★★★★"
  }
];

let currentTestimonialIdx = 0;

window.renderTestimonialCard = function() {
  const container = document.getElementById('testimonial-card-container');
  const badge = document.getElementById('testimonial-index-badge');
  if (!container) return;

  const item = testimonialsList[currentTestimonialIdx];
  if (!item) return;

  if (badge) {
    badge.innerText = `${(currentTestimonialIdx + 1).toLocaleString('fa-IR')} از ${testimonialsList.length.toLocaleString('fa-IR')}`;
  }

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center gap-5">
      <img src="${item.image}" alt="${item.couple}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-md shrink-0">
      <div class="space-y-2 flex-1 text-center sm:text-right">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h3 class="text-base font-black text-[#D4AF37]">${item.couple}</h3>
            <span class="text-xs text-slate-300 font-medium block">${item.date} • ${item.vendor}</span>
          </div>
          <span class="text-amber-400 font-bold text-sm">${item.rating}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic bg-[#0F251A]/60 p-3.5 rounded-xl border border-[#D4AF37]/20">
          «${item.text}»
        </p>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};

window.nextTestimonial = function() {
  currentTestimonialIdx = (currentTestimonialIdx + 1) % testimonialsList.length;
  window.renderTestimonialCard();
};

window.prevTestimonial = function() {
  currentTestimonialIdx = (currentTestimonialIdx - 1 + testimonialsList.length) % testimonialsList.length;
  window.renderTestimonialCard();
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof window.renderTestimonialCard === 'function') {
      window.renderTestimonialCard();
    }
  }, 300);
});

/* ==========================================================================
   SMART BOOKING WIZARD MODAL LOGIC
   ========================================================================== */
let currentWizardStep = 1;
let wizardData = {
  location: 'صفائیه یزد',
  budget: 'mid',
  style: 'کلاسیک و مجلل'
};

window.openSmartWizardModal = function() {
  currentWizardStep = 1;
  const modal = document.getElementById('modal-smart-wizard');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  window.renderWizardStep();
};

window.closeSmartWizardModal = function() {
  const modal = document.getElementById('modal-smart-wizard');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.closeSmartWizardResultsModal = function() {
  const modal = document.getElementById('modal-smart-wizard-results');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.renderWizardStep = function() {
  const content = document.getElementById('wizard-step-content');
  const badge = document.getElementById('wizard-step-badge');
  const progress = document.getElementById('wizard-step-progress');
  const btnPrev = document.getElementById('wizard-btn-prev');
  const btnNext = document.getElementById('wizard-btn-next');

  if (!content) return;

  if (currentWizardStep === 1) {
    if (badge) badge.innerText = "گام ۱ از ۳: زمان و موقعیت مکانی";
    if (progress) progress.innerText = "33%";
    if (btnPrev) btnPrev.classList.add('hidden');
    if (btnNext) btnNext.innerText = "ادامه (گام ۲)";

    content.innerHTML = `
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-200 mb-1.5">موقعیت مکانی/منطقه برگزاری در یزد:</label>
          <select id="wiz-location" class="w-full bg-[#1E293B] border border-[#D4AF37]/30 text-white rounded-xl p-2.5 text-xs font-bold focus:outline-none focus:border-[#D4AF37]">
            <option value="صفائیه یزد" selected>صفائیه و بلوار دانشگاه</option>
            <option value="بافت تاریخی یزد">بافت تاریخی & خانه‌های سنتی</option>
            <option value="آزادشهر و امامشهر">آزادشهر & بلوار جمهوری</option>
            <option value="کویر یزد">کویر و فرمالیته اختصاصی</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-200 mb-1.5">فصل / تاریخ تقریبی برگزاری:</label>
          <select id="wiz-season" class="w-full bg-[#1E293B] border border-[#D4AF37]/30 text-white rounded-xl p-2.5 text-xs font-bold focus:outline-none focus:border-[#D4AF37]">
            <option value="پاییز و زمستان ۱۴۰۳">پاییز / زمستان ۱۴۰۳ (فصل طلایی یزد)</option>
            <option value="بهار و تابستان ۱۴۰۴">بهار / تابستان ۱۴۰۴</option>
          </select>
        </div>
      </div>
    `;
  } else if (currentWizardStep === 2) {
    if (badge) badge.innerText = "گام ۲ از ۳: سقف بودجه کل";
    if (progress) progress.innerText = "66%";
    if (btnPrev) btnPrev.classList.remove('hidden');
    if (btnNext) btnNext.innerText = "ادامه (گام ۳)";

    content.innerHTML = `
      <div class="space-y-3">
        <label class="block text-xs font-bold text-slate-200 mb-1.5">محدوده بودجه کل مد نظر برای خدمات عروسی:</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button type="button" onclick="selectWizardBudget('economic', this)" class="p-3 bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl text-right hover:border-[#D4AF37] transition-all wiz-budget-btn cursor-pointer">
            <span class="text-xs font-black text-[#D4AF37] block mb-1">اقتصادی</span>
            <span class="text-[11px] text-slate-300 block font-normal">تا ۱۵۰ میلیون تومان</span>
          </button>
          <button type="button" onclick="selectWizardBudget('mid', this)" class="p-3 bg-[#1E293B] border-2 border-[#D4AF37] rounded-2xl text-right hover:border-[#D4AF37] transition-all wiz-budget-btn cursor-pointer">
            <span class="text-xs font-black text-[#D4AF37] block mb-1">متوسط & استاندارد</span>
            <span class="text-[11px] text-slate-300 block font-normal">۱۵۰ تا ۳۵۰ میلیون</span>
          </button>
          <button type="button" onclick="selectWizardBudget('luxury', this)" class="p-3 bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl text-right hover:border-[#D4AF37] transition-all wiz-budget-btn cursor-pointer">
            <span class="text-xs font-black text-[#D4AF37] block mb-1">VIP & لاکچری</span>
            <span class="text-[11px] text-slate-300 block font-normal">بالای ۳۵۰ میلیون</span>
          </button>
        </div>
      </div>
    `;
  } else if (currentWizardStep === 3) {
    if (badge) badge.innerText = "گام ۳ از ۳: سبک و تم مراسم";
    if (progress) progress.innerText = "100%";
    if (btnPrev) btnPrev.classList.remove('hidden');
    if (btnNext) btnNext.innerText = "نمایش ۳ تامین‌کننده برتر ✨";

    content.innerHTML = `
      <div class="space-y-3">
        <label class="block text-xs font-bold text-slate-200 mb-1.5">سبک و تم مورد علاقه شما برای عروسی:</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label class="p-3 bg-[#1E293B] border border-[#D4AF37]/40 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#D4AF37]">
            <div class="space-y-0.5">
              <span class="text-xs font-black text-white block">کلاسیک & مجلل</span>
              <span class="text-[10px] text-slate-300 block">سفره اسلیمی و تالار</span>
            </div>
            <input type="radio" name="wiz-style" value="کلاسیک و مجلل" checked class="accent-[#D4AF37]">
          </label>
          <label class="p-3 bg-[#1E293B] border border-[#D4AF37]/40 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#D4AF37]">
            <div class="space-y-0.5">
              <span class="text-xs font-black text-white block">روستیک & کویری</span>
              <span class="text-[10px] text-slate-300 block">فرمالیته کویر و فضای باز</span>
            </div>
            <input type="radio" name="wiz-style" value="روستیک و کویری" class="accent-[#D4AF37]">
          </label>
          <label class="p-3 bg-[#1E293B] border border-[#D4AF37]/40 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#D4AF37]">
            <div class="space-y-0.5">
              <span class="text-xs font-black text-white block">مدرن & مینیمال</span>
              <span class="text-[10px] text-slate-300 block">طراحی مدرن و شیک</span>
            </div>
            <input type="radio" name="wiz-style" value="مدرن و مینیمال" class="accent-[#D4AF37]">
          </label>
        </div>
      </div>
    `;
  }

  if (window.lucide) lucide.createIcons();
};

window.selectWizardBudget = function(tier, el) {
  wizardData.budget = tier;
  document.querySelectorAll('.wiz-budget-btn').forEach(btn => {
    btn.classList.remove('border-2', 'border-[#D4AF37]');
    btn.classList.add('border', 'border-[#D4AF37]/30');
  });
  if (el) {
    el.classList.remove('border-[#D4AF37]/30');
    el.classList.add('border-2', 'border-[#D4AF37]');
  }
};

window.nextWizardStep = function() {
  if (currentWizardStep < 3) {
    currentWizardStep++;
    window.renderWizardStep();
  } else {
    window.finishSmartWizard();
  }
};

window.prevWizardStep = function() {
  if (currentWizardStep > 1) {
    currentWizardStep--;
    window.renderWizardStep();
  }
};

window.finishSmartWizard = function() {
  window.closeSmartWizardModal();
  const resModal = document.getElementById('modal-smart-wizard-results');
  const container = document.getElementById('wizard-results-container');
  if (!resModal || !container) return;

  const top3 = (typeof vendors !== 'undefined' && vendors.length > 0) ? vendors.slice(0, 3) : [];

  container.innerHTML = top3.map((v, i) => `
    <div class="p-4 bg-[#1E293B] border border-[#D4AF37]/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
      <div class="flex items-center gap-3.5">
        <span class="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0F251A] font-black text-xs flex items-center justify-center shrink-0">#${i + 1}</span>
        <img src="${v.image}" alt="${v.name}" class="w-16 h-16 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0">
        <div class="space-y-1">
          <h4 class="text-sm font-black text-white">${v.name}</h4>
          <span class="text-xs text-amber-200 block font-bold">${v.category} • ${v.district || 'صفائیه یزد'}</span>
          <span class="text-[11px] text-slate-300 font-medium">پایه قیمت: <strong class="text-[#D4AF37]">${v.priceRange || 'استعلام'}</strong></span>
        </div>
      </div>
      <div class="flex items-center gap-2 self-end sm:self-auto shrink-0">
        <button type="button" onclick="closeSmartWizardResultsModal(); openVendorDetailModal(${v.id})" class="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#0F251A] text-xs font-black py-2 px-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer">
          مشاهده پروفایل
        </button>
      </div>
    </div>
  `).join('');

  resModal.classList.remove('hidden');
  resModal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

/* ==========================================================================
   PEARL WHITE / DARK LUXURY THEME TOGGLE
   ========================================================================== */
window.toggleThemeMode = function() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('aroosi_theme_mode', newTheme);
  } catch(e) {}

  const btnText = document.getElementById('theme-toggle-text');
  const icon = document.getElementById('theme-toggle-icon');

  if (newTheme === 'light') {
    if (btnText) btnText.innerText = 'روز / Sunlit';
    if (icon) icon.className = "w-4 h-4 text-[#A37F38]";
    if (typeof showToast === 'function') showToast('تم دیداری: روز / Sunlit (روشن) فعال شد.', 'info');
  } else {
    if (btnText) btnText.innerText = 'شب / Midnight';
    if (icon) icon.className = "w-4 h-4 text-[#D4AF37]";
    if (typeof showToast === 'function') showToast('تم دیداری: شب / Midnight Editorial (تاریک) فعال شد.', 'info');
  }

  if (window.lucide) lucide.createIcons();
};

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('aroosi_theme_mode') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const btnText = document.getElementById('theme-toggle-text');
  const icon = document.getElementById('theme-toggle-icon');
  if (savedTheme === 'light') {
    if (btnText) btnText.innerText = 'روز / Sunlit';
    if (icon) icon.className = "w-4 h-4 text-[#A37F38]";
  } else {
    if (btnText) btnText.innerText = 'شب / Midnight';
    if (icon) icon.className = "w-4 h-4 text-[#D4AF37]";
  }
});

/* ==========================================================================
   IMMERSIVE STORY LIGHTBOX LOGIC
   ========================================================================== */
const storyHighlightsData = {
  1: {
    vendorId: 2,
    vendorName: "استودیو و آتلیه تخصصی کویر یزد",
    category: "آتلیه عکاسی & فیلمبرداری",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80",
    caption: "کلیپ اختصاصی فرمالیته کویر یزد با تصویربرداری هلی‌شات و نورپردازی حرفه‌ای"
  },
  2: {
    vendorId: 3,
    vendorName: "سالن زیبایی رویال یزد",
    category: "سالن زیبایی & آرایشگاه عروس",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=200&q=80",
    caption: "نمونه میکاپ و شینیون VIP عروس با گریم تخصصی و محصولات برند درجه یک"
  },
  3: {
    vendorId: 1,
    vendorName: "هتل باغ و تشریفات مشیرالممالک یزد",
    category: "باغ تالار & تشریفات عروسی",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=200&q=80",
    caption: "فضای مجلل باغ مشیرالممالک با منوی شام VIP و گل‌آرایی طبیعی"
  },
  4: {
    vendorId: 4,
    vendorName: "مزون عروس لورنت یزد",
    category: "مزون & لباس عروس",
    image: "https://images.unsplash.com/photo-1544078751-58fed2d3cdcc?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1544078751-58fed2d3cdcc?auto=format&fit=crop&w=200&q=80",
    caption: "کالکشن جدید لباس عروس با دانتل فرانسوی و امکان دوخت سفارشی"
  },
  5: {
    vendorId: 1,
    vendorName: "تشریفات عقد سنتی مشیر",
    category: "سفره عقد & تشریفات",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=200&q=80",
    caption: "چیدمان سفره عقد اسلیمی سنتی در بافت تاریخی یزد"
  }
};

window.openStoryLightbox = function(storyId) {
  const modal = document.getElementById('modal-story-lightbox');
  const img = document.getElementById('story-lightbox-img');
  const avatar = document.getElementById('story-lightbox-avatar');
  const vendorName = document.getElementById('story-lightbox-vendor-name');
  const category = document.getElementById('story-lightbox-category');
  const caption = document.getElementById('story-lightbox-caption');
  const profileBtn = document.getElementById('story-lightbox-profile-btn');

  if (!modal) return;
  const data = storyHighlightsData[storyId] || storyHighlightsData[1];

  if (img) img.src = data.image;
  if (avatar) avatar.src = data.avatar;
  if (vendorName) vendorName.innerText = data.vendorName;
  if (category) category.innerText = data.category;
  if (caption) caption.innerText = data.caption;
  if (profileBtn) {
    profileBtn.setAttribute('onclick', `closeStoryLightbox(); openVendorDetailModal(${data.vendorId})`);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
};

window.closeStoryLightbox = function() {
  const modal = document.getElementById('modal-story-lightbox');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};
