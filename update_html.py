import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add capabilityTags to vendor array definition
yazd_tags = 'capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],'

# Inject capabilityTags into vendor objects in JS if not present
if "capabilityTags:" not in content:
    content = content.replace('priceRange: "', f'{yazd_tags}\n        priceRange: "')

# 2. Add getPrivateNote and savePrivateNote JS helpers
private_notes_js = '''
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
'''

if "function getPrivateNote" not in content:
    content = content.replace("function renderVendors(list) {", private_notes_js + "\n    function renderVendors(list) {")

# 3. Update renderVendors to include Yazd Capability Tags and Private Note Input block
render_vendor_old = '''            <div class="p-5 space-y-3">
              <div>
                <span class="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md inline-block mb-1">${v.category}</span>
                <h3 class="text-base font-bold text-graphite leading-tight group-hover:text-primary transition-colors">${v.name}</h3>
                <span class="text-xs text-secondary flex items-center gap-1 mt-1 font-medium">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-primary"></i>
                  <span>${v.city}</span>
                </span>
              </div>

              <div class="text-xs font-bold text-graphite bg-bgCustom p-3 rounded-2xl border border-accent flex justify-between items-center">
                <span class="text-secondary font-normal">قیمت پایه شروع از:</span>
                <span class="text-primary font-black text-sm">${v.priceRange}</span>
              </div>
            </div>'''

render_vendor_new = '''            <div class="p-5 space-y-3">
              <div>
                <span class="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md inline-block mb-1">${v.category}</span>
                <h3 class="text-base font-bold text-graphite leading-tight group-hover:text-primary transition-colors">${v.name}</h3>
                <span class="text-xs text-secondary flex items-center gap-1 mt-1 font-medium">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-primary"></i>
                  <span>${v.city}</span>
                </span>
              </div>

              <!-- Yazd Capability Tags -->
              <div class="flex flex-wrap gap-1 pt-1">
                ${(v.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"]).map(tag => `
                  <span class="bg-amber-50 text-amber-900 border border-amber-200/80 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-2.5 h-2.5 text-amber-600"></i>
                    <span>${tag}</span>
                  </span>
                `).join('')}
              </div>

              <div class="text-xs font-bold text-graphite bg-bgCustom p-3 rounded-2xl border border-accent flex justify-between items-center">
                <span class="text-secondary font-normal">قیمت پایه شروع از:</span>
                <span class="text-primary font-black text-sm">${v.priceRange}</span>
              </div>

              <!-- Private Note Block for Couple -->
              <div class="pt-2 border-t border-accent/60 space-y-1" onclick="event.stopPropagation()">
                <label class="block text-[10px] font-bold text-secondary flex items-center gap-1">
                  <i data-lucide="lock" class="w-3 h-3 text-primary"></i>
                  <span>یادداشت خصوصی زوجین (فقط شما می‌بینید):</span>
                </label>
                <div class="flex gap-1.5">
                  <input type="text" id="private-note-input-${v.id}" value="${getPrivateNote(v.id)}" placeholder="مثلا: هماهنگی جهت تخفیف ۱۰٪..." class="w-full bg-slate-50 border border-accent rounded-xl px-2.5 py-1 text-[11px] font-medium text-graphite focus:outline-none focus:border-primary">
                  <button onclick="savePrivateNote(${v.id})" class="bg-primary hover:bg-emerald-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-xl shrink-0 transition-colors">ثبت</button>
                </div>
              </div>
            </div>'''

if render_vendor_old in content:
    content = content.replace(render_vendor_old, render_vendor_new)

# Save updated HTML
with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated vendor profiles and local tags successfully!")
