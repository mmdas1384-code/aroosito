with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Render Capability Tags in openVendorDetailModal
old_vdm_header = 'if (bottomPriceEl) bottomPriceEl.innerText = `شروع قیمت از ${vendor.priceRange}`;'
new_vdm_header = '''if (bottomPriceEl) bottomPriceEl.innerText = `شروع قیمت از ${vendor.priceRange}`;

      // Render Capability Tags Badges in Modal
      const tagsContainer = document.getElementById('vdm-capability-tags');
      if (tagsContainer) {
        const tags = vendor.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"];
        tagsContainer.innerHTML = tags.map(t => `<span class="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><i data-lucide="check-circle" class="w-3 h-3 text-amber-600"></i>${t}</span>`).join('');
      }'''

if old_vdm_header in content and 'vdm-capability-tags' not in content:
    content = content.replace(old_vdm_header, new_vdm_header)

# Add vdm-capability-tags container in vendor-detail-modal HTML
old_vdm_title_html = '<span id="vdm-district" class="text-slate-300 font-normal">صفائیه & اطلسی یزد</span>'
new_vdm_title_html = '''<span id="vdm-district" class="text-slate-300 font-normal">صفائیه & اطلسی یزد</span>
              </div>
              <div id="vdm-capability-tags" class="flex flex-wrap gap-1.5 pt-1">
                <!-- Capability tags rendered dynamically -->
              </div>'''

if old_vdm_title_html in content and 'id="vdm-capability-tags"' not in content:
    content = content.replace(old_vdm_title_html, new_vdm_title_html, 1)

# Enhance Package Comparison Table inside #vdm-subpanel-packages
old_packages_html = '''        <!-- SUB-TAB 2: PACKAGES & PRICING TABLE -->
        <div id="vdm-subpanel-packages" class="hidden space-y-4">
          <span class="text-xs font-bold text-secondary block">مقایسه ۳ سطح پکیج‌های پیشنهادی (تعرفه‌های یزد):</span>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-graphite">
            <!-- Bronze Package -->
            <div class="bg-bgCustom border border-accent rounded-2xl p-4 space-y-3 relative">
              <div class="border-b border-accent pb-2">
                <span class="text-amber-700 font-bold block">پکیج برنزی (Standard)</span>
                <span class="text-lg font-black text-primary">۴۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>منوی شام ۲ رنگ سلف سرویس</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>ورودی مجلل باغ تالار</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>نورپردازی استاندارد</span></li>
              </ul>
            </div>

            <!-- Silver Package -->
            <div class="bg-emerald-50/60 border-2 border-primary rounded-2xl p-4 space-y-3 relative shadow-xs">
              <span class="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">محبوب‌ترین</span>
              <div class="border-b border-primary/20 pb-2">
                <span class="text-primary font-bold block">پکیج نقره‌ای (Silver VIP)</span>
                <span class="text-lg font-black text-primary">۷۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>منوی شام ۳ رنگ + کترینگ شیرینی یزدی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>شمع‌آرایی کامل و آتش‌بازی ورودی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تست رایگان برای ۴ نفر</span></li>
              </ul>
            </div>

            <!-- Gold Package -->
            <div class="bg-bgCustom border border-accent rounded-2xl p-4 space-y-3 relative">
              <div class="border-b border-accent pb-2">
                <span class="text-amber-600 font-bold block">پکیج طلایی (Luxury Gold)</span>
                <span class="text-lg font-black text-primary">۱۲۰,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تمام خدمات نقره‌ای + سفره عقد اختصاصی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تصویربرداری هلی‌شات هوایی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>اقامت رایگان سوئیت عروس داماد</span></li>
              </ul>
            </div>
          </div>
        </div>'''

new_packages_html = '''        <!-- SUB-TAB 2: 3-TIER PACKAGE COMPARISON TABLE -->
        <div id="vdm-subpanel-packages" class="hidden space-y-5">
          <div class="flex justify-between items-center border-b border-accent pb-2">
            <span class="text-xs font-bold text-graphite flex items-center gap-1.5">
              <i data-lucide="gem" class="w-4 h-4 text-primary"></i>
              <span>جدول مقایسه ۳ سطح پکیج‌های اختصاصی (برنز / نقره‌ای / طلایی):</span>
            </span>
            <span class="text-[11px] text-primary font-bold">تضمین نرخ بازار استان یزد</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-graphite">
            <div class="bg-bgCustom border border-accent rounded-2xl p-4 space-y-3">
              <div class="border-b border-accent pb-2">
                <span class="text-amber-800 font-bold block">پکیج برنزی (Standard)</span>
                <span class="text-lg font-black text-primary">۴۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>منوی شام سلف‌سرویس استاندارد</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>ورودی سالن یا باغ</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>نورپردازی پایه</span></li>
              </ul>
            </div>

            <div class="bg-emerald-50/80 border-2 border-primary rounded-2xl p-4 space-y-3 relative shadow-xs">
              <span class="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">محبوب‌ترین (انتخاب اول زوجین)</span>
              <div class="border-b border-primary/20 pb-2">
                <span class="text-primary font-black block">پکیج نقره‌ای (Silver VIP)</span>
                <span class="text-lg font-black text-primary">۷۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>منوی شام کامل + کترینگ شیرینی سنتی یزد (حاج خلیفه)</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>شمع‌آرایی کامل و ورودی آتش‌بازی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تست رایگان غذا برای ۴ نفر</span></li>
              </ul>
            </div>

            <div class="bg-bgCustom border border-accent rounded-2xl p-4 space-y-3">
              <div class="border-b border-accent pb-2">
                <span class="text-amber-600 font-bold block">پکیج طلایی (Luxury Gold)</span>
                <span class="text-lg font-black text-primary">۱۲۰,۰۰۰,۰۰۰ تومان</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تمام خدمات نقره‌ای + سفره عقد سنتی اختصاصی</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>تجهیزات هلی‌شات & نور کویر</span></li>
                <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>اقامت رایگان سوئیت عروس داماد</span></li>
              </ul>
            </div>
          </div>

          <!-- Package Feature Matrix Table -->
          <div class="overflow-x-auto border border-accent rounded-2xl">
            <table class="w-full text-right text-xs">
              <thead class="bg-bgCustom text-secondary border-b border-accent font-bold">
                <tr>
                  <th class="p-3">ویژگی‌ها & امکانات</th>
                  <th class="p-3 text-center">برنزی</th>
                  <th class="p-3 text-center text-primary">نقره‌ای (VIP)</th>
                  <th class="p-3 text-center text-amber-600">طلایی (Luxury)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-accent font-medium text-graphite">
                <tr>
                  <td class="p-3 font-bold">پذیرایی شیرینی سنتی یزد (حاج خلیفه)</td>
                  <td class="p-3 text-center text-secondary">اختیاری</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔ رایگان (شامل)</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔ رایگان (VIP)</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">فرمالیته و تجهیزات هلی‌شات کویر</td>
                  <td class="p-3 text-center text-rose-500">❌</td>
                  <td class="p-3 text-center text-secondary">با ۵۰٪ تخفیف</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔ رایگان (شامل)</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">فضای باز & سالن سرپوشیده</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔</td>
                  <td class="p-3 text-center text-emerald-700 font-bold">✔ اختصاصی کامل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>'''

if old_packages_html in content:
    content = content.replace(old_packages_html, new_packages_html)

# Enhance Calendar Preview in #vdm-subpanel-calendar
old_calendar_html = '''        <!-- SUB-TAB 3: AVAILABILITY CALENDAR GRID -->
        <div id="vdm-subpanel-calendar" class="hidden space-y-3">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-graphite">وضعیت روزهای آزاد و رزرو شده (اردیبهشت و خرداد ۱۴۰۳):</span>
            <div class="flex items-center gap-3 text-[11px]">
              <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> آزاد</span>
              <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> رزرو شده</span>
            </div>
          </div>

          <div class="grid grid-cols-7 gap-1.5 text-center text-xs font-bold">
            <div class="p-2 bg-emerald-100 text-emerald-900 rounded-xl">۱ (آزاد)</div>
            <div class="p-2 bg-emerald-100 text-emerald-900 rounded-xl">۲ (آزاد)</div>
            <div class="p-2 bg-rose-100 text-rose-800 rounded-xl">۳ (رزرو)</div>
            <div class="p-2 bg-emerald-100 text-emerald-900 rounded-xl">۴ (آزاد)</div>
            <div class="p-2 bg-rose-100 text-rose-800 rounded-xl">۵ (رزرو)</div>
            <div class="p-2 bg-emerald-100 text-emerald-900 rounded-xl">۶ (آزاد)</div>
            <div class="p-2 bg-emerald-100 text-emerald-900 rounded-xl">۷ (آزاد)</div>
          </div>
        </div>'''

new_calendar_html = '''        <!-- SUB-TAB 3: INTERACTIVE AVAILABILITY CALENDAR PREVIEW -->
        <div id="vdm-subpanel-calendar" class="hidden space-y-4">
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-accent pb-2 text-xs">
            <span class="font-bold text-graphite flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-4 h-4 text-primary"></i>
              <span>تقویم تعاملی تقاضا و روزهای آزاد (اردیبهشت و خرداد ۱۴۰۳):</span>
            </span>
            <div class="flex items-center gap-3 text-[11px] font-bold">
              <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-md bg-emerald-500 inline-block"></span> آزاد (جهت رزرو کلیک کنید)</span>
              <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-md bg-rose-500 inline-block"></span> پر / رزرو شده</span>
            </div>
          </div>

          <div id="vdm-interactive-calendar-grid" class="grid grid-cols-7 gap-1.5 text-center text-xs font-bold">
            <!-- Days rendered dynamically or via static grid -->
            <button onclick="handleSelectCalendarDay(1, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۱ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(2, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۲ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(3, false)" class="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl cursor-not-allowed">۳ اردیبهشت<br><span class="text-[10px] text-rose-600">رزرو شد</span></button>
            <button onclick="handleSelectCalendarDay(4, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۴ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(5, false)" class="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl cursor-not-allowed">۵ اردیبهشت<br><span class="text-[10px] text-rose-600">رزرو شد</span></button>
            <button onclick="handleSelectCalendarDay(6, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۶ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(7, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۷ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(8, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۸ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(9, false)" class="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl cursor-not-allowed">۹ اردیبهشت<br><span class="text-[10px] text-rose-600">رزرو شد</span></button>
            <button onclick="handleSelectCalendarDay(10, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۱۰ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(11, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۱۱ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(12, false)" class="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl cursor-not-allowed">۱۲ اردیبهشت<br><span class="text-[10px] text-rose-600">رزرو شد</span></button>
            <button onclick="handleSelectCalendarDay(13, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۱۳ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
            <button onclick="handleSelectCalendarDay(14, true)" class="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl hover:bg-emerald-100 transition-colors">۱۴ اردیبهشت<br><span class="text-[10px] text-emerald-700">آزاد</span></button>
          </div>
        </div>'''

if old_calendar_html in content:
    content = content.replace(old_calendar_html, new_calendar_html)

# Add handleSelectCalendarDay JS function
if "function handleSelectCalendarDay" not in content:
    calendar_js = '''
    function handleSelectCalendarDay(dayNum, isAvailable) {
      if (!isAvailable) {
        showToast('این تاریخ توسط زوج دیگری رزرو شده است. لطفاً روز دیگری را انتخاب فرمایید.', 'warning');
      } else {
        showToast(`تاریخ ${dayNum} اردیبهشت جهت استعلام و رزرو اولیه انتخاب گردید.`, 'success');
      }
    }
'''
    content = content.replace("function openVendorDetailModal", calendar_js + "\n    function openVendorDetailModal")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Enriched vendor detail modal with comparison table and interactive calendar successfully!")
