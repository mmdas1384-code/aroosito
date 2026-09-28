with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

target = "function openVendorDetailModal(vendorId) {"
replacement = "function openVendorDetailModal(vendorId) {\n    window.openVendorDetailModal = openVendorDetailModal;\n    window.closeVendorDetailModal = closeVendorDetailModal;"

if target in js:
    js = js.replace(target, "window.openVendorDetailModal = function openVendorDetailModal(vendorId) {\n    window.closeVendorDetailModal = closeVendorDetailModal;")
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("Exposed openVendorDetailModal on window!")
else:
    print("Target not found")
