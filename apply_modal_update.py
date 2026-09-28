import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_idx = html.find('<div id="vendor-detail-modal"')
end_idx = html.find('<!-- Inquiry Modal -->')

modal_html = """<div id="vendor-detail-modal" class="clean-vmodal-overlay hidden" onclick="if(event.target === this) closeVendorDetailModal()">
    <div class="clean-vmodal-card relative text-right flex flex-col bg-[#FAF9F5] text-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-stone-200" onclick="event.stopPropagation()">

      <!-- Minimalist Header -->
      <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between text-[#1A1A1A] shadow-sm">
        <div class="flex items-center gap-3">
          <div id="vdm-avatar" class="w-12 h-12 rounded-full border-2 border-[#D4AF37] overflow-hidden bg-white shadow-sm flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=150" alt="Vendor Avatar" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 id="vdm-title" class="text-xl font-bold text-[#1B3B2B]">هتل باغ و تشریفات مشیرالممالک یزد</h2>
              <span id="vdm-verified" class="bg-[#D4AF37]/15 text-[#1B3B2B] border border-[#D4AF37]/40 text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                <svg class="w-3.5 h-3.5 fill-[#D4AF37]" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                تاییدشده عروسی تو
              </span>
            </div>
            <p id="vdm-[#vdm-subtitle]" class="text-xs text-stone-500 mt-0.5 flex items-center gap-2">
              <span id="vdm-category" class="font-medium">تالار و باغ تالار عروسی</span> •
              <span id="vdm-address" class="flex items-center gap-1 text-stone-600">
                <svg class="w-3.5 h-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                یزد، صفائیه & اطلسی
              </span>
            </p>
          </div>
        </div>

        <button onclick="closeVendorDetailModal()" class="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors border border-stone-200" title="بستن">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Hero Gallery & Key Highlights (Light Canvas) -->
      <div class="p-6 pb-2 bg-[#FAF9F5]">
        <!-- Key Metrics Row with Clean Chips -->
        <div class="flex items-center justify-between mb-4 flex-wrap gap-2 text-xs">
          <div class="flex items-center gap-2 flex-wrap">
            <span id="vdm-rating" class="bg-white text-[#1B3B2B] border border-stone-200 text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
              ⭐️ 4.9 (۳۸ نظر ثبت‌شده)
            </span>
            <span class="bg-white text-stone-700 text-xs px-3 py-1.5 rounded-full border border-stone-200 font-medium shadow-sm">
              💳 اقتصادی / VIP
            </span>
            <span class="bg-emerald-50 text-emerald-800 text-xs px-3 py-1.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 shadow-sm">
              ⚡ پاسخگویی زیر ۲ ساعت
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="toggleFavoriteVendorModal(event)" class="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-red-500 flex items-center justify-center transition-colors shadow-sm" title="افزودن به علاقه‌مندی‌ها">
              <svg class="w-4 h-4 fill-current text-stone-400 hover:text-red-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <button onclick="shareVendorModal(event)" class="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#D4AF37] flex items-center justify-center transition-colors shadow-sm" title="اشتراک‌گذاری">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
          </div>
        </div>

        <!-- 5-Photo Asymmetrical Gallery Grid -->
        <div id="vdm-gallery-grid" class="grid grid-cols-1 md:grid-cols-4 gap-2.5 rounded-2xl overflow-hidden h-72 sm:h-80 relative shadow-md">
          <!-- Main Large Photo (Right in RTL, spans 2 cols & 2 rows) -->
          <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden cursor-pointer" onclick="openLightbox(document.getElementById('vdm-cover').src)">
            <img id="vdm-cover" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200" alt="Vendor Cover" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
          <!-- 4 Smaller Stacked Photos -->
          <div class="hidden md:block relative group overflow-hidden cursor-pointer" onclick="switchModalTab(3)">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Gallery Photo 2">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
          <div class="hidden md:block relative group overflow-hidden cursor-pointer" onclick="switchModalTab(3)">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Gallery Photo 3">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
          <div class="hidden md:block relative group overflow-hidden cursor-pointer" onclick="switchModalTab(3)">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Gallery Photo 4">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
          <div class="hidden md:block relative group overflow-hidden cursor-pointer" onclick="switchModalTab(3)">
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Gallery Photo 5">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>

          <!-- Floating Overlay Button -->
          <button onclick="switchModalTab(3)" class="absolute bottom-3 left-3 bg-white/90 hover:bg-white text-[#1B3B2B] text-xs font-bold px-3.5 py-2 rounded-xl shadow-md border border-stone-200 flex items-center gap-1.5 transition-all backdrop-blur-sm z-10">
            <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            مشاهده تمام تصاویر (۱۲+)
          </button>
        </div>
      </div>

      <!-- Navigation Tabs Bar -->
      <div class="clean-vmodal-tabs border-b border-stone-200 bg-white px-6 flex items-center gap-1 sm:gap-6 text-sm font-medium text-stone-500 overflow-x-auto scrollbar-none sticky top-[73px] z-20">
        <button class="vtab-btn active py-3.5 px-3 whitespace-nowrap transition-colors flex items-center gap-1.5 border-b-2 border-[#D4AF37] text-[#1B3B2B] font-bold" onclick="switchModalTab(0)">
          📖 درباره & معرفی
        </button>
        <button class="vtab-btn py-3.5 px-3 whitespace-nowrap transition-colors flex items-center gap-1.5 border-b-2 border-transparent hover:text-[#1B3B2B]" onclick="switchModalTab(1)">
          💎 پکیج‌ها & قیمت‌ها
        </button>
        <button class="vtab-btn py-3.5 px-3 whitespace-nowrap transition-colors flex items-center gap-1.5 border-b-2 border-transparent hover:text-[#1B3B2B]" onclick="switchModalTab(2)">
          📅 تقویم روزهای آزاد
        </button>
        <button class="vtab-btn py-3.5 px-3 whitespace-nowrap transition-colors flex items-center gap-1.5 border-b-2 border-transparent hover:text-[#1B3B2B]" onclick="switchModalTab(3)">
          ✨ خدمات & امکانات
        </button>
        <button class="vtab-btn py-3.5 px-3 whitespace-nowrap transition-colors flex items-center gap-1.5 border-b-2 border-transparent hover:text-[#1B3B2B]" onclick="switchModalTab(4)">
          ⭐ نظرات & تجربیات زوجین
        </button>
      </div>

      <!-- Modal Body Tab Panes -->
      <div class="clean-vmodal-body p-6 space-y-6 text-[#1A1A1A] bg-[#FAF9F5]">

        <!-- Tab 0: About & Story -->
        <div id="vtab-pane-0" class="vtab-pane space-y-6">
          <div class="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 class="text-base font-bold text-[#1B3B2B] flex items-center gap-2">
              <svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              تاریخچه و درباره مجموعه
            </h3>
            <p id="vdm-about" class="text-sm text-stone-600 leading-relaxed">
              هتل باغ مشیرالممالک یزد اولین هتل موزه باغ ایرانی با فضایی کاملاً سنتی، درختان کهنسال، نظرهای جاری و معماری اصیل یزدی است که در کنار امکانات تشریفاتی مدرن و منوهای پذیرایی متنوع، خاطره‌انگیزترین جشن ازدواج را برای شما و مهمانانتان رقم می‌زند.
            </p>
          </div>

          <!-- Quick Features & Map Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h3 class="text-sm font-bold text-[#1B3B2B] flex items-center gap-2">
                <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                موقعیت مکانی & ساعات کاری
              </h3>
              <ul class="space-y-2.5 text-xs text-stone-600">
                <li class="flex items-start gap-2">
                  <span class="text-[#1B3B2B] font-bold">📍 آدرس:</span>
                  <span id="vdm-full-address">استان یزد، صفائیه، خیابان دانشگاه</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#1B3B2B] font-bold">⏰ ساعات پاسخگویی:</span>
                  <span>همه روزه از ۱۰:۰۰ الی ۲۲:۰۰</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#1B3B2B] font-bold">📞 تلفن مستقیم:</span>
                  <span id="vdm-phone" class="text-stone-800 font-bold font-mono dir-ltr">۰۳۵-۳۸۲۴۰۰۰۰</span>
                </li>
              </ul>
            </div>

            <!-- Map CTAs -->
            <div class="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <span class="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block mb-2">مسیریابی هوشمند</span>
                <h4 class="text-sm font-bold text-[#1A1A1A]">آدرس روی نقشه یزد</h4>
                <p class="text-xs text-stone-500 mt-1">امکان دسترسی آسان با تمام اپلیکیشن‌های مسیریاب شهری</p>
              </div>
              <div class="grid grid-cols-3 gap-2 pt-2">
                <a id="vdm-map-balad" href="#" target="_blank" class="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold py-2 px-2 rounded-xl border border-stone-200 text-center transition-colors">بلد</a>
                <a id="vdm-map-neshan" href="#" target="_blank" class="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold py-2 px-2 rounded-xl border border-stone-200 text-center transition-colors">نشان</a>
                <a id="vdm-map-google" href="#" target="_blank" class="bg-[#1B3B2B] hover:bg-[#2E533F] text-white text-xs font-bold py-2 px-2 rounded-xl text-center transition-colors">گوگل‌مپ</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 1: Packages -->
        <div id="vtab-pane-1" class="vtab-pane hidden space-y-4">
          <h3 class="text-base font-bold text-[#1B3B2B] flex items-center gap-2 mb-2">
            💎 پکیج‌های تشریفاتی و خدمات
          </h3>
          <div id="vdm-packages-container" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Rendered via JS -->
          </div>
        </div>

        <!-- Tab 2: Calendar -->
        <div id="vtab-pane-2" class="vtab-pane hidden space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-[#1B3B2B] flex items-center gap-2">
              📅 وضعیت رزرو و روزهای آزاد (شمسی)
            </h3>
            <span class="text-xs text-stone-500">برای رزرو روی روز موردنظر کلیک کنید</span>
          </div>
          <div id="vdm-calendar-container" class="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <!-- Rendered via JS -->
          </div>
        </div>

        <!-- Tab 3: Amenities & Services -->
        <div id="vtab-pane-3" class="vtab-pane hidden space-y-4">
          <h3 class="text-base font-bold text-[#1B3B2B] flex items-center gap-2 mb-2">
            ✨ امکانات و خدمات ویژه
          </h3>
          <div id="vdm-amenities-container" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <!-- Rendered via JS -->
          </div>
        </div>

        <!-- Tab 4: Reviews -->
        <div id="vtab-pane-4" class="vtab-pane hidden space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-[#1B3B2B] flex items-center gap-2">
              ⭐ نظرات و تجربیات واقعی زوجین
            </h3>
            <button onclick="toggleReviewSubmitDrawer()" class="text-xs text-[#1B3B2B] bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/50 px-3 py-1.5 rounded-xl font-bold transition-colors">
              + ثبت نظر جدید
            </button>
          </div>
          <div id="vdm-reviews-container" class="space-y-3">
            <!-- Rendered via JS -->
          </div>
        </div>

      </div>

      <!-- Sticky Modal Bottom Action Footer -->
      <div class="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-stone-200 flex items-center justify-between text-[#1A1A1A] shadow-lg">
        <div>
          <span class="text-xs text-stone-500 block font-medium">شروع قیمت از:</span>
          <span id="vdm-price" class="text-lg font-black text-[#1B3B2B]">۹۵,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div class="flex items-center gap-3">
          <button id="vdm-modal-chat-cta" onclick="openVendorChatFromModal()" class="bg-[#1B3B2B] hover:bg-[#2E533F] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow">
            💬 ارسال پیام مستقیم (چت)
          </button>
          <button id="vdm-modal-inquire-cta" onclick="openInquireFromVendorModal()" class="bg-gradient-to-r from-[#D4AF37] to-[#E2C258] hover:from-[#B88E28] hover:to-[#D4AF37] text-[#1B3B2B] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all shadow-md">
            📝 استعلام قیمت آنلاین & رزرو
          </button>
        </div>
      </div>

    </div>
  </div>"""

new_html = html[:start_idx] + modal_html + "\n\n  " + html[end_idx:]
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html updated successfully!")
