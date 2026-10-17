with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

helper_code = '''
  // Filter directory vendors by area/neighborhood
  window.filterVendorsByArea = function(areaName) {
    if (typeof switchTab === 'function') {
      switchTab('directory');
    }
    const searchInput = document.getElementById('directory-instant-search');
    if (searchInput) {
      searchInput.value = areaName;
    }
    if (typeof filterVendors === 'function') {
      filterVendors();
    }
  };
'''

if 'window.filterVendorsByArea' not in js_content:
    js_content += helper_code
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print('Added filterVendorsByArea helper to script.js')
else:
    print('filterVendorsByArea already present in script.js')
