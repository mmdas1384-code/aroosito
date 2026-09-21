with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

old_chat_btns = '''                  <div class="flex gap-2">
                    <button onclick="openAppointmentModal('${activeThread.id}', '${msg.id}')" class="flex-1 bg-primary hover:bg-emerald-900 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1">
                      <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                      <span>تایید اولیه & رزرو جلسه حضوری</span>
                    </button>
                    <button onclick="openRevisionModal('${activeThread.id}', '${msg.id}')" class="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3 py-2.5 rounded-xl text-xs font-bold transition-all">
                      اصلاحات
                    </button>
                  </div>'''

new_chat_btns = '''                  <div class="flex gap-2">
                    <button onclick="acceptPreInvoiceAndPayDeposit('${activeThread.id}', '${msg.id}')" class="flex-1 bg-primary hover:bg-emerald-900 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer">
                      <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                      <span>تایید پیش‌فاکتور</span>
                    </button>
                    <button onclick="openRevisionModal('${activeThread.id}', '${msg.id}')" class="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      <span>درخواست تغییرات</span>
                    </button>
                  </div>'''

if old_chat_btns in content:
    content = content.replace(old_chat_btns, new_chat_btns)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated chat pre-invoice buttons successfully!")
else:
    print("Pattern not found!")
