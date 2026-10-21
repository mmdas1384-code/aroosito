with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Make sure switchTab calls renderBwWizard whenever tabId === 'tools'
target = "if (tabId === 'guests') renderGuestsAndGifts();"
replacement = "if (tabId === 'guests') renderGuestsAndGifts();\n      if (tabId === 'tools' && typeof window.renderBwWizard === 'function') setTimeout(() => { window.renderBwWizard(); }, 20);"

if target in js and "tabId === 'tools'" not in js:
    js = js.replace(target, replacement, 1)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Added switchTab('tools') renderBwWizard trigger to script.js!")
