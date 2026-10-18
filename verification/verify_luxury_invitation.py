import os
from playwright.sync_api import sync_playwright

def run():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

        index_path = os.path.abspath("index.html")
        page.goto(f"file://{index_path}")
        page.wait_for_load_state("networkidle")

        print("1. Navigating to Invitation Builder...")
        page.evaluate("window.switchTab('invitation')")
        page.wait_for_timeout(500)

        print("2. Testing Theme Preset Switcher...")
        page.evaluate("window.setInvTheme('emerald-gold')")
        page.wait_for_timeout(300)
        page.evaluate("window.setInvTheme('royal-classic')")
        page.wait_for_timeout(300)

        print("3. Testing Font Selector...")
        font_select = page.locator("#inv-select-font-fa")
        if font_select.is_visible():
            font_select.select_option("nastaliq")
            page.wait_for_timeout(300)

        print("4. Testing Interactive Envelope Opening...")
        page.evaluate("window.openEnvelopeAnimation()")
        page.wait_for_timeout(500)

        print("5. Testing 1-Click Quick RSVP...")
        attending_btn = page.locator("button:has-text('با کمال میل شرکت می‌کنم')")
        if attending_btn.is_visible():
            attending_btn.click()
            page.wait_for_timeout(500)

        # Scroll to view mobile preview
        page.locator("#inv-preview-panel").scroll_into_view_if_needed()
        page.wait_for_timeout(300)

        screenshot_path = "verification/luxury_invitation_studio.png"
        page.screenshot(path=screenshot_path)
        print(f"✓ Screenshot saved to {screenshot_path}")

        print(f"Browser Console Errors: {errors}")
        assert len(errors) == 0, f"Detected browser errors: {errors}"

        browser.close()

if __name__ == "__main__":
    run()
