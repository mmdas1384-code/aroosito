import os
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 900})
        page = context.new_page()

        file_path = f"file://{os.path.abspath('index.html')}"
        page.goto(file_path)
        page.wait_for_load_state("domcontentloaded")

        os.makedirs("verification", exist_ok=True)

        # Click Digital Invitation tab
        page.click("#demo-tab-invitation")
        time.sleep(0.5)

        # 1. Capture initial split screen view with envelope
        page.screenshot(path="verification/invitation_builder_initial.png")

        # 2. Click open envelope
        page.click("text=باز کردن پاکت نامه")
        time.sleep(0.5)
        page.screenshot(path="verification/invitation_builder_envelope_opened.png")

        # 3. Change theme to "مینی‌مال طلایی"
        page.click("#inv-theme-gold")
        time.sleep(0.5)
        page.screenshot(path="verification/invitation_theme_gold.png")

        # 4. Open QR Code modal
        page.click("text=دانلود QR Code")
        time.sleep(0.5)
        page.screenshot(path="verification/invitation_qr_modal.png")

        browser.close()

if __name__ == "__main__":
    run()
