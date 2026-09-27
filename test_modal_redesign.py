from playwright.sync_api import sync_playwright, expect
import os

def run():
    os.makedirs("/home/jules/verification", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        # Open index.html
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")
        page.wait_for_timeout(1000)

        # Call JS directly
        page.evaluate("openVendorDetailModal(1)")
        page.wait_for_timeout(500)

        modal = page.locator("#vendor-detail-modal")
        expect(modal).to_be_visible()

        # Tab 0 Screenshot
        page.screenshot(path="/home/jules/verification/modal_redesign_tab0.png")
        print("Tab 0 verified")

        # Tab 1: Packages & Prices
        page.locator(".vtab-btn", has_text="پکیج‌ها").click()
        page.wait_for_timeout(300)
        page.screenshot(path="/home/jules/verification/modal_redesign_tab1.png")
        print("Tab 1 verified")

        # Tab 2: Availability Calendar
        page.locator(".vtab-btn", has_text="تقویم").click()
        page.wait_for_timeout(300)
        page.screenshot(path="/home/jules/verification/modal_redesign_tab2.png")
        print("Tab 2 verified")

        # Tab 3: Amenities & Services
        page.locator(".vtab-btn", has_text="خدمات").click()
        page.wait_for_timeout(300)
        page.screenshot(path="/home/jules/verification/modal_redesign_tab3.png")
        print("Tab 3 verified")

        # Tab 4: Reviews
        page.locator(".vtab-btn", has_text="نظرات").click()
        page.wait_for_timeout(300)
        page.screenshot(path="/home/jules/verification/modal_redesign_tab4.png")
        print("Tab 4 verified")

        browser.close()

if __name__ == "__main__":
    run()
