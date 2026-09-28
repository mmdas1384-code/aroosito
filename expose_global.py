with open('script.js', 'a', encoding='utf-8') as f:
    f.write("\n\n// Expose modal functions to window globally\ntry { window.openVendorDetailModal = openVendorDetailModal; window.closeVendorDetailModal = closeVendorDetailModal; } catch(e) {}\n")
print("Appended global exports!")
