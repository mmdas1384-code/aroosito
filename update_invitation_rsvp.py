with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

old_rsvp_form = '''                  <div>
                    <label class="block mb-1 text-[11px]">پیام تبریک برای عروس و داماد:</label>
                    <textarea id="guest-rsvp-note" rows="2" placeholder="پیام خود را بنویسید..." class="w-full bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium focus:outline-none focus:border-primary"></textarea>
                  </div>'''

new_rsvp_form = '''                  <div>
                    <label class="block mb-1 text-[11px]">ترجیح منوی غذایی (Menu Preference):</label>
                    <select id="guest-rsvp-menu" class="w-full bg-bgCustom border border-accent rounded-xl p-2 text-xs font-bold text-graphite focus:outline-none focus:border-primary cursor-pointer">
                      <option value="کباب و جوجه کلاسیک" selected>🍖 منوی کباب & جوجه کلاسیک</option>
                      <option value="خورش سنتی یزدی (قیمه یزدی)">🍲 منوی خورش سنتی یزدی (قیمه یزدی)</option>
                      <option value="گیاه‌خواری / وگان">🥗 منوی گیاه‌خواری / وگان</option>
                    </select>
                  </div>

                  <div>
                    <label class="block mb-1 text-[11px]">نیازمندی‌های خاص / حساسیت غذایی:</label>
                    <input type="text" id="guest-rsvp-special-needs" placeholder="مثلاً: حساسیت به باقلا، نیاز به صندلی چرخدار..." class="w-full bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium focus:outline-none focus:border-primary">
                  </div>

                  <div>
                    <label class="block mb-1 text-[11px]">پیام تبریک برای عروس و داماد:</label>
                    <textarea id="guest-rsvp-note" rows="2" placeholder="پیام خود را بنویسید..." class="w-full bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium focus:outline-none focus:border-primary"></textarea>
                  </div>'''

if old_rsvp_form in content:
    content = content.replace(old_rsvp_form, new_rsvp_form)

# Update handleGuestRsvpSubmit JS to capture menu and specialNeeds
old_rsvp_js = '''    function handleGuestRsvpSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('guest-rsvp-name').value.trim();
      const status = document.querySelector('input[name="guest-rsvp-status"]:checked').value;
      const count = parseInt(document.getElementById('guest-rsvp-count').value) || 1;
      const note = document.getElementById('guest-rsvp-note').value.trim();'''

new_rsvp_js = '''    function handleGuestRsvpSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('guest-rsvp-name').value.trim();
      const status = document.querySelector('input[name="guest-rsvp-status"]:checked').value;
      const count = parseInt(document.getElementById('guest-rsvp-count').value) || 1;
      const menuPref = document.getElementById('guest-rsvp-menu')?.value || 'کباب و جوجه کلاسیک';
      const specialNeeds = document.getElementById('guest-rsvp-special-needs')?.value.trim() || '';
      const note = document.getElementById('guest-rsvp-note').value.trim();'''

if old_rsvp_js in content:
    content = content.replace(old_rsvp_js, new_rsvp_js)

old_rsvp_push = '''      invitationState.rsvps.unshift({
        id: Date.now(),
        name,
        status,
        guestsCount: status === 'attending' ? count : 0,
        note
      });'''

new_rsvp_push = '''      const fullNote = [
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
      });'''

if old_rsvp_push in content:
    content = content.replace(old_rsvp_push, new_rsvp_push)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated invitation RSVP form with menu preference and special needs successfully!")
