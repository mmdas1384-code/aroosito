import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("Original file length:", len(content))

# 1. Update vendors array to ensure capabilityTags exist on all vendors
yazd_tags_js = 'capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],'

# 2. Add private note helper functions to JS if not present
private_note_js = '''
    // PRIVATE COUPLE NOTES LOCALSTORAGE HELPERS
    function getPrivateNote(vendorId) {
      try {
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        return notes[vendorId] || '';
      } catch (e) {
        return '';
      }
    }

    function savePrivateNote(vendorId) {
      try {
        const input = document.getElementById('private-note-input-' + vendorId);
        if (!input) return;
        const val = input.value.trim();
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        notes[vendorId] = val;
        localStorage.setItem('aroosi_private_notes', JSON.stringify(notes));
        showToast('یادداشت خصوصی شما برای این تامین‌کننده ذخیره شد.', 'success');
      } catch (e) {
        console.error('Failed to save private note:', e);
      }
    }
'''

if 'function savePrivateNote' not in content:
    content = content.replace('function renderVendors(list) {', private_note_js + '\n    function renderVendors(list) {')

# 3. Enhance renderVendors to display capability tags and Private Note block
old_render_vendors = '''            <div class="p-5 space-y-3">
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

new_render_vendors = '''            <div class="p-5 space-y-3">
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
                ${(v.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"]).slice(0, 3).map(tag => `
                  <span class="bg-amber-50 text-amber-900 border border-amber-200/80 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <i data-lucide="check" class="w-2.5 h-2.5 text-amber-600"></i>
                    <span>${tag}</span>
                  </span>
                `).join('')}
              </div>

              <div class="text-xs font-bold text-graphite bg-bgCustom p-3 rounded-2xl border border-accent flex justify-between items-center">
                <span class="text-secondary font-normal">قیمت پایه شروع از:</span>
                <span class="text-primary font-black text-sm">${v.priceRange}</span>
              </div>

              <!-- Private Note block visible only to user -->
              <div class="pt-2 border-t border-accent/60 space-y-1">
                <label class="block text-[10px] font-bold text-secondary flex items-center justify-between">
                  <span class="flex items-center gap-1 text-primary">
                    <i data-lucide="lock" class="w-3 h-3"></i>
                    <span>یادداشت خصوصی زوجین:</span>
                  </span>
                  <span class="text-[9px] text-slate-400 font-normal">(فقط برای شما قابل دیدن است)</span>
                </label>
                <div class="flex gap-1.5">
                  <input type="text" id="private-note-input-${v.id}" value="${getPrivateNote(v.id)}" placeholder="مثلا: استعلام قیمت داده شد، تخفیف ۱۰٪ دادن..." class="w-full bg-bgCustom border border-accent rounded-xl px-2.5 py-1 text-[11px] font-medium text-graphite focus:outline-none focus:border-primary">
                  <button type="button" onclick="savePrivateNote(${v.id})" class="bg-primary hover:bg-emerald-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-xl shrink-0 transition-colors shadow-xs">ثبت</button>
                </div>
              </div>
            </div>'''

if old_render_vendors in content:
    content = content.replace(old_render_vendors, new_render_vendors)
    print("Updated renderVendors successfully!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
