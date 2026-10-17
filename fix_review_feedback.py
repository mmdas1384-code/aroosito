import re

# 1. Remove leftover script file
import os
if os.path.exists('replace_bento_grid.py'):
    os.remove('replace_bento_grid.py')

# 2. Fix inline quotes in index.html for chat action button
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace single quotes inside data-lucide and class attributes in sendChatMessageQuickAction
old_onclick = "onclick=\"sendChatMessageQuickAction('<i data-lucide='clipboard-list' class='w-4 h-4'></i> اطلاعات عروسی من: تاریخ ۱۵ شهریور | ۲۰۰ نفر مهمان')\""
new_onclick = "onclick=\"sendChatMessageQuickAction('<i data-lucide=&quot;clipboard-list&quot; class=&quot;w-4 h-4&quot;></i> اطلاعات عروسی من: تاریخ ۱۵ شهریور | ۲۰۰ نفر مهمان')\""

html = html.replace(old_onclick, new_onclick)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 3. Fix window.restoreDirectoryState check in script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace("typeof restoreDirectoryState === 'function'", "typeof window.restoreDirectoryState === 'function'")
js = js.replace("restoreDirectoryState();", "window.restoreDirectoryState();")

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print('Successfully applied fixes for code review feedback!')
