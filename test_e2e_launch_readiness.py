import os
import sys
from playwright.sync_api import sync_playwright

def run_e2e_test():
    console_errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Listen to console errors
        def handle_console(msg):
            if msg.type == 'error':
                console_errors.append(msg.text)
        page.on("console", handle_console)

        html_path = 'file://' + os.path.abspath('index.html')
        print(f"Loading page: {html_path}")
        page.goto(html_path)
        page.wait_for_timeout(1000)

        # 1. Header Multi-Criteria Search & Directory Sync
        print("Testing Search & Multi-Criteria Filters...")
        page.evaluate("switchTab('directory')")
        page.evaluate("document.getElementById('verified-only').checked = false; filterVendors();")
        page.wait_for_timeout(300)

        # Economic Price Filter
        page.select_option('#header-price-select', 'economic')
        page.wait_for_timeout(300)
        econ_count = page.locator('#vendor-grid > div').count()
        assert econ_count > 0, f"Expected economic vendors, got {econ_count}"
        print(f"  Economic price filter returned {econ_count} vendors.")

        # Luxury Price Filter
        page.select_option('#header-price-select', 'luxury')
        page.wait_for_timeout(300)
        lux_count = page.locator('#vendor-grid > div').count()
        assert lux_count > 0, f"Expected luxury vendors, got {lux_count}"
        print(f"  Luxury price filter returned {lux_count} vendors.")

        # Reset Price & Filter City Safaieh
        page.select_option('#header-price-select', 'all')
        page.select_option('#header-city-select', 'صفائیه')
        page.wait_for_timeout(300)
        safaie_count = page.locator('#vendor-grid > div').count()
        assert safaie_count > 0, f"Expected Safaie vendors, got {safaie_count}"
        print(f"  City Safaie filter returned {safaie_count} vendors.")

        # Reset City
        page.select_option('#header-city-select', 'استان یزد')
        page.wait_for_timeout(300)

        # 2. Vendor Detail Modal
        print("Testing Vendor Detail Modal...")
        page.evaluate('openVendorDetailModal(1)')
        page.wait_for_timeout(500)
        assert page.is_visible('#vendor-detail-modal'), "Vendor detail modal should be visible"

        # Switch Modal Tab to Packages via switchVdmSubTab
        page.evaluate("switchVdmSubTab('packages')")
        page.wait_for_timeout(300)

        # Close Vendor Detail Modal
        page.evaluate('closeVendorDetailModal()')
        page.wait_for_timeout(300)

        # 3. Informational & Auxiliary Modals
        print("Testing Auxiliary Modals...")
        page.evaluate('openAboutModal()')
        page.wait_for_timeout(300)
        assert page.is_visible('#modal-about'), "About modal should be visible"
        page.evaluate('closeAboutModal()')

        page.evaluate('openFaqModal()')
        page.wait_for_timeout(300)
        assert page.is_visible('#modal-faq'), "FAQ modal should be visible"
        page.evaluate('closeFaqModal()')

        page.evaluate('openTermsModal()')
        page.wait_for_timeout(300)
        assert page.is_visible('#modal-terms'), "Terms modal should be visible"
        page.evaluate('closeTermsModal()')

        page.evaluate('openCounselorModal()')
        page.wait_for_timeout(300)
        assert page.is_visible('#modal-counselor-consultation'), "Counselor modal should be visible"
        page.evaluate('closeCounselorModal()')

        # 4. Invitation Card Creator
        print("Testing Digital Invitation Creator...")
        page.evaluate("switchTab('invitation')")
        page.wait_for_timeout(500)
        assert page.is_visible('#tab-invitation'), "Invitation tab should be visible"
        page.evaluate("setInvTheme('emerald-gold')")
        page.wait_for_timeout(300)

        # 5. Guests & RSVP Manager
        print("Testing Guest Manager...")
        page.evaluate("switchTab('guests')")
        page.wait_for_timeout(500)
        assert page.is_visible('#tab-guests'), "Guests tab should be visible"

        # 6. Planner Tab
        print("Testing Planner Tab...")
        page.evaluate("switchTab('planner')")
        page.wait_for_timeout(500)
        assert page.is_visible('#tab-planner'), "Planner tab should be visible"

        # Capture final verification screenshot
        os.makedirs('verification', exist_ok=True)
        screenshot_path = 'verification/launch_readiness_e2e.png'
        page.screenshot(path=screenshot_path, full_page=False)
        print(f"Verification screenshot saved at: {screenshot_path}")

        browser.close()

    print("\n--- Console Error Audit ---")
    if console_errors:
        print(f"FAILED: Found {len(console_errors)} console errors:")
        for err in console_errors:
            print("  -", err)
        sys.exit(1)
    else:
        print("PASSED: Zero console errors detected!")

if __name__ == '__main__':
    run_e2e_test()
