with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add Hidden Costs Buffer (+10%) toggle to Budget Wizard Step 1
old_step1_presets = '''            <!-- Yazd Presets & Location Selection -->
            <div class="space-y-3 md:col-span-2">'''

new_step1_presets = '''            <!-- Hidden Costs Buffer (+10%) Toggle -->
            <div class="md:col-span-2 bg-amber-50/80 border border-amber-200/80 p-3.5 rounded-2xl flex items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <i data-lucide="shield-alert" class="w-5 h-5 text-amber-700 shrink-0"></i>
                <div>
                  <span class="block text-xs font-bold text-amber-900">بافر هزینه‌های پنهان و غیرمنتظره (+۱۰٪)</span>
                  <span class="text-[11px] text-amber-800 font-medium">ذخیره ۱۰٪ بودجه برای هزینه‌های پیش‌بینی‌نشده (انعام، ایاب‌واذهاب، تشریفات جانبی)</span>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer shrink-0">
                <input type="checkbox" id="bw-hidden-buffer-toggle" onchange="toggleHiddenCostsBuffer(this.checked)" class="sr-only peer">
                <div class="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <!-- Yazd Presets & Location Selection -->
            <div class="space-y-3 md:col-span-2">'''

if old_step1_presets in content and 'bw-hidden-buffer-toggle' not in content:
    content = content.replace(old_step1_presets, new_step1_presets)

# 2. Add Confectionery Calculator section inside tab-tools
confectionery_calc_html = '''
      <!-- ========================================== -->
      <!-- YAZDI TRADITIONAL CONFECTIONERY CALCULATOR -->
      <!-- ========================================== -->
      <section class="bg-white border border-accent rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div class="border-b border-accent pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div class="space-y-1">
            <div class="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">
              <i data-lucide="cake" class="w-3.5 h-3.5 text-amber-700"></i>
              <span>محاسبه‌گر بومی استان یزد</span>
            </div>
            <h3 class="text-xl font-bold text-graphite flex items-center gap-2">
              <span>محاسبه‌گر آنلاین کیک و شیرینی سنتی یزد (قطاب، باقلوا، کیک یزدی)</span>
            </h3>
            <p class="text-xs text-secondary font-medium">برآورد دقیق وزن بر حسب کیلوگرم و هزینه شیرینی‌های اصیل حاج خلیفه متناسب با تعداد مهمانان</p>
          </div>

          <span class="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-xl border border-primary/20 shrink-0">
            نرخ روز حاج خلیفه یزد
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-bgCustom p-6 rounded-2xl border border-accent">
          <div class="space-y-2 md:col-span-1">
            <label class="block text-xs font-bold text-graphite">تعداد کل مهمانان جشن (نفر):</label>
            <div class="flex items-center gap-2">
              <input type="number" id="sweets-guest-count" value="250" min="20" max="2000" oninput="calculateYazdiSweets()" class="w-full bg-white border border-accent rounded-xl p-3 text-sm font-black text-primary focus:outline-none focus:border-primary">
              <span class="text-xs font-bold text-graphite shrink-0">نفر</span>
            </div>
            <span class="text-[11px] text-secondary font-medium block">استاندارد پذیرایی: حدود ۷۵ گرم شیرینی به ازای هر مهمان</span>
          </div>

          <!-- Quick Preset Guest Buttons -->
          <div class="md:col-span-2 space-y-2">
            <label class="block text-xs font-bold text-graphite">انتخاب سریع تعداد مهمان:</label>
            <div class="flex flex-wrap gap-2 text-xs font-bold">
              <button onclick="setSweetsGuests(150)" class="px-3.5 py-2 rounded-xl bg-white border border-accent hover:border-primary text-graphite transition-all">۱۵۰ نفر (صمیمی)</button>
              <button onclick="setSweetsGuests(250)" class="px-3.5 py-2 rounded-xl bg-primary text-white transition-all shadow-xs">۲۵۰ نفر (متوسط)</button>
              <button onclick="setSweetsGuests(400)" class="px-3.5 py-2 rounded-xl bg-white border border-accent hover:border-primary text-graphite transition-all">۴۰۰ نفر (بزرگ)</button>
              <button onclick="setSweetsGuests(600)" class="px-3.5 py-2 rounded-xl bg-white border border-accent hover:border-primary text-graphite transition-all">۶۰۰ نفر (شلوغ)</button>
            </div>
          </div>
        </div>

        <!-- Calculated Sweets Breakdown Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Ghotab -->
          <div class="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-2">
            <div class="flex justify-between items-center border-b border-amber-200 pb-2">
              <span class="font-black text-amber-900 text-sm">🥟 قطاب اصیل یزدی</span>
              <span class="text-[11px] font-bold text-amber-800">۲۰ گرم / نفر</span>
            </div>
            <div class="flex justify-between items-end pt-1">
              <div>
                <span class="text-[11px] text-secondary block">وزن برآوردی:</span>
                <span id="sweets-ghotab-kg" class="text-xl font-black text-graphite">۵ کیلوگرم</span>
              </div>
              <span id="sweets-ghotab-cost" class="text-xs font-bold text-primary">۱,۴۰۰,۰۰۰ تومان</span>
            </div>
          </div>

          # Baklava
          <div class="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 space-y-2">
            <div class="flex justify-between items-center border-b border-emerald-200 pb-2">
              <span class="font-black text-emerald-900 text-sm">🥮 باقلوا یزدی (پسته‌ای)</span>
              <span class="text-[11px] font-bold text-emerald-800">۲۵ گرم / نفر</span>
            </div>
            <div class="flex justify-between items-end pt-1">
              <div>
                <span class="text-[11px] text-secondary block">وزن برآوردی:</span>
                <span id="sweets-baklava-kg" class="text-xl font-black text-graphite">۶.۳ کیلوگرم</span>
              </div>
              <span id="sweets-baklava-cost" class="text-xs font-bold text-primary">۲,۲۰۰,۰۰۰ تومان</span>
            </div>
          </div>

          # Yazdi Cake & Loz
          <div class="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-2">
            <div class="flex justify-between items-center border-b border-amber-200 pb-2">
              <span class="font-black text-amber-900 text-sm">🧁 کیک یزدی & لوز پسته/نارگیل</span>
              <span class="text-[11px] font-bold text-amber-800">۳۰ گرم / نفر</span>
            </div>
            <div class="flex justify-between items-end pt-1">
              <div>
                <span class="text-[11px] text-secondary block">وزن برآوردی:</span>
                <span id="sweets-loz-kg" class="text-xl font-black text-graphite">۷.۵ کیلوگرم</span>
              </div>
              <span id="sweets-loz-cost" class="text-xs font-bold text-primary">۱,۳۵۰,۰۰۰ تومان</span>
            </div>
          </div>
        </div>

        <!-- Total Sweets Summary Banner -->
        <div class="bg-primary/10 border border-primary/30 p-5 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
              <i data-lucide="calculator" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-secondary">مجموع کل وزن و بودجه شیرینی‌پزی یزد:</span>
              <div class="flex items-center gap-2 mt-0.5">
                <span id="sweets-total-weight-text" class="text-base font-black text-graphite">۱۸.۸ کیلوگرم انواع شیرینی</span>
              </div>
            </div>
          </div>

          <div class="text-right sm:text-left">
            <span class="text-[11px] font-bold text-secondary block">برآورد کل هزینه شیرینی سنتی:</span>
            <span id="sweets-total-cost-text" class="text-2xl font-black text-primary">۴,۹۵۰,۰۰۰ تومان</span>
          </div>
        </div>
      </section>
'''

if confectionery_calc_html not in content:
    # Insert right before </section> inside tab-tools
    content = content.replace("</section>\n    </div>\n\n    <!-- ========================================== -->\n    <!-- VIEW 9: MESSAGES & DIRECT CHAT SYSTEM VIEW -->", confectionery_calc_html + "\n      </section>\n    </div>\n\n    <!-- ========================================== -->\n    <!-- VIEW 9: MESSAGES & DIRECT CHAT SYSTEM VIEW -->")

# Add JS functions for Sweets Calculator and Hidden Buffer Toggle
sweets_js = '''
    let isHiddenCostsBufferActive = false;

    function toggleHiddenCostsBuffer(isActive) {
      isHiddenCostsBufferActive = isActive;
      if (typeof calculateAndRenderBwResults === 'function') {
        calculateAndRenderBwResults();
      }
      showToast(isActive ? 'بافر ۱۰٪ هزینه‌های پنهان به محاسبات اضافه شد' : 'بافر ۱۰٪ غیرفعال گردید', 'info');
    }

    function setSweetsGuests(cnt) {
      const input = document.getElementById('sweets-guest-count');
      if (input) {
        input.value = cnt;
        calculateYazdiSweets();
      }
    }

    function calculateYazdiSweets() {
      const guestCnt = parseInt(document.getElementById('sweets-guest-count')?.value) || 250;

      # Rates per guest in kg
      const ghotabKg = (guestCnt * 0.02).toFixed(1);
      const baklavaKg = (guestCnt * 0.025).toFixed(1);
      const lozKg = (guestCnt * 0.03).toFixed(1);

      # Prices per kg (Toman)
      const ghotabPricePerKg = 280000;
      const baklavaPricePerKg = 350000;
      const lozPricePerKg = 180000;

      const ghotabCost = Math.round(ghotabKg * ghotabPricePerKg);
      const baklavaCost = Math.round(baklavaKg * baklavaPricePerKg);
      const lozCost = Math.round(lozKg * lozPricePerKg);
      const totalCost = ghotabCost + baklavaCost + lozCost;
      const totalKg = (parseFloat(ghotabKg) + parseFloat(baklavaKg) + parseFloat(lozKg)).toFixed(1);

      if (document.getElementById('sweets-ghotab-kg')) document.getElementById('sweets-ghotab-kg').innerText = `${ghotabKg} کیلوگرم`;
      if (document.getElementById('sweets-ghotab-cost')) document.getElementById('sweets-ghotab-cost').innerText = `${ghotabCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-baklava-kg')) document.getElementById('sweets-baklava-kg').innerText = `${baklavaKg} کیلوگرم`;
      if (document.getElementById('sweets-baklava-cost')) document.getElementById('sweets-baklava-cost').innerText = `${baklavaCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-loz-kg')) document.getElementById('sweets-loz-kg').innerText = `${lozKg} کیلوگرم`;
      if (document.getElementById('sweets-loz-cost')) document.getElementById('sweets-loz-cost').innerText = `${lozCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-total-weight-text')) document.getElementById('sweets-total-weight-text').innerText = `${totalKg} کیلوگرم شیرینی سنتی یزد`;
      if (document.getElementById('sweets-total-cost-text')) document.getElementById('sweets-total-cost-text').innerText = `${totalCost.toLocaleString('fa-IR')} تومان`;
    }
'''

if "function calculateYazdiSweets" not in content:
    content = content.replace("function calculateAndRenderBwResults", sweets_js + "\n    function calculateAndRenderBwResults")

# Update calculateAndRenderBwResults to account for isHiddenCostsBufferActive
old_bw_calc_code = "document.getElementById('res-total-budget').innerText = `${totalBudget.toLocaleString('fa-IR')} تومان`;"
new_bw_calc_code = '''let effectiveTotal = totalBudget;
      if (isHiddenCostsBufferActive) {
        effectiveTotal = Math.round(totalBudget * 1.1);
      }
      document.getElementById('res-total-budget').innerText = isHiddenCostsBufferActive ? `${effectiveTotal.toLocaleString('fa-IR')} تومان (+۱۰٪ بافر پنهان)` : `${totalBudget.toLocaleString('fa-IR')} تومان`;'''

if old_bw_calc_code in content:
    content = content.replace(old_bw_calc_code, new_bw_calc_code)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Added calculators and confectionery tool successfully!")
