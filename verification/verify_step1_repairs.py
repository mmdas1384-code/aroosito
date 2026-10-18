import os
import time
from playwright.sync_api import sync_playwright

def verify_step1_repairs():
    print("Starting Playwright verification for Step 1 Repairs...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")
        page.wait_for_load_state("networkidle")

        # 1. Quick Budget Calculator Test
        print("1. Testing Quick Budget Calculator...")
        range_input = page.locator("#home-calc-range")
        if range_input.is_visible():
            range_input.fill("400")
            range_input.dispatch_event("input")
            page.wait_for_timeout(300)
            guest_val = page.locator("#home-calc-guest-tag").inner_text()
            print(f"  Guest value tag: {guest_val}")
            assert "۴۰۰" in guest_val or "400" in guest_val

            page.locator("#home-style-luxury").click()
            page.wait_for_timeout(300)
            price_val = page.locator("#home-calc-result-price").inner_text()
            print(f"  Luxury calculated price: {price_val}")

        # 2. Directory View & Streamlined Cards Test
        print("2. Testing Directory View & Streamlined Cards...")
        page.evaluate("switchTab('directory')")
        page.wait_for_timeout(500)

        badge_count = page.locator("#directory-vendor-count-badge").inner_text()
        print(f"  Directory badge text: {badge_count}")

        # 3. Category-Aware Inquiry Modal Test
        print("3. Testing Category-Aware Inquiry Modal for Studio Vendor (#2)...")
        page.evaluate("openInquiryModal(2, 'استودیو کویر')")
        page.wait_for_timeout(500)

        is_guests_hidden = page.locator("#inquiry-guests-container").evaluate("el => el.classList.contains('hidden')")
        print(f"  Guest count container hidden for studio vendor: {is_guests_hidden}")
        assert is_guests_hidden is True

        page.locator("#inquiry-modal button[onclick*='closeInquiryModal']").click()
        page.wait_for_timeout(300)

        # 4. Branded Pre-Invoice Modal Test
        print("4. Testing Branded Pre-Invoice Modal...")
        page.evaluate("openPreInvoicePrintModal()")
        page.wait_for_timeout(500)

        pip_vendor = page.locator("#pip-vendor-name").inner_text()
        print(f"  Pre-invoice vendor name: {pip_vendor}")
        assert "مشیرالممالک" in pip_vendor

        page.locator("#modal-preinvoice-print button[onclick*='closePreInvoicePrintModal']").click()
        page.wait_for_timeout(300)

        # 5. Guests & Gifts Modals Test
        print("5. Testing Guests & Gifts Modals...")
        page.evaluate("switchTab('guests')")
        page.wait_for_timeout(500)

        page.evaluate("openGuestModal()")
        page.wait_for_timeout(300)
        assert page.locator("#guest-modal").is_visible()
        page.evaluate("closeGuestModal()")

        page.evaluate("openGiftModal()")
        page.wait_for_timeout(300)
        assert page.locator("#gift-modal").is_visible()
        page.evaluate("closeGiftModal()")

        # Capture verification screenshot
        screenshot_path = "verification/step1_repairs.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        print(f"Console errors count: {len(console_errors)}")
        if console_errors:
            print("Console Errors:", console_errors)

        browser.close()

if __name__ == "__main__":
    verify_step1_repairs()
