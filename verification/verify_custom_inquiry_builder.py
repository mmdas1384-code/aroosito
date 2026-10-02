import os
import time
from playwright.sync_api import sync_playwright

def test_custom_inquiry_builder():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 900})
        page = context.new_page()

        page.on("console", lambda msg: print(f"BROWSER LOG: {msg.text}"))
        page.on("pageerror", lambda err: print(f"BROWSER ERROR: {err}"))

        # Path to index.html
        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        print(f"Navigating to {file_url}")
        page.goto(file_url)
        page.wait_for_load_state("networkidle")

        # Step 1: Switch to Vendor Dashboard
        print("Switching to Vendor Dashboard...")
        page.click("#demo-tab-vendor-dash")
        page.wait_for_timeout(1000)

        # Step 2: Open custom question modal and add a new question
        print("Opening custom question modal...")
        page.click("button:has-text('افزودن سوال اختصاصی جدید')")
        page.wait_for_timeout(500)

        page.fill("#cq-label", "حدود زمان شروع مراسم مدنظر شما؟")
        page.select_option("#cq-type", "select")
        page.wait_for_timeout(200)
        page.fill("#cq-options", "ساعت ۱۷ الی ۲۲، ساعت ۱۹ الی ۲۴، ساعت ۲۰ الی ۲ بامداد")

        # Save question
        page.click("#custom-question-form button[type='submit']")
        page.wait_for_timeout(500)

        # Capture screenshot of Vendor Dashboard with custom questions
        os.makedirs("verification", exist_ok=True)
        page.screenshot(path="verification/custom_inquiry_builder_dash.png")

        # Step 3: Open vendor detail modal and click inquiry button
        print("Opening Vendor Detail Modal...")
        page.click("#demo-tab-home")
        page.wait_for_timeout(500)

        page.click("button:has-text('استعلام قیمت سریع')")
        page.wait_for_timeout(500)

        # Check if custom fields container is visible in inquiry modal
        custom_container = page.query_selector("#inquiry-custom-fields-container")
        assert custom_container is not None and custom_container.is_visible(), "Inquiry custom fields container should be visible!"

        page.screenshot(path="verification/custom_inquiry_modal_rendered.png")

        # Step 4: Submit inquiry
        print("Submitting inquiry with custom answers...")
        page.fill("#inquiry-name", "مریم و رضا")
        page.fill("#inquiry-phone", "09139876543")

        # Click submit
        page.click("#inquiry-form button[type='submit']")
        page.wait_for_timeout(1000)

        # Close inquiry modal explicitly if still open
        page.evaluate("closeInquiryModal()")
        page.wait_for_timeout(500)

        # Step 5: Return to Vendor Dashboard and check received inquiry
        print("Checking Vendor Dashboard for received inquiry...")
        page.click("#demo-tab-vendor-dash")
        page.wait_for_timeout(800)

        page.screenshot(path="verification/custom_inquiry_received_dash.png")

        print("Verification successful!")
        browser.close()

if __name__ == "__main__":
    test_custom_inquiry_builder()
