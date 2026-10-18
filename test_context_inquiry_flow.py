import os
import sys
import json
from playwright.sync_api import sync_playwright

def run_test():
    console_errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        def handle_console(msg):
            if msg.type == 'error':
                console_errors.append(msg.text)
        page.on("console", handle_console)

        html_path = 'file://' + os.path.abspath('index.html')
        page.goto(html_path)
        page.wait_for_timeout(1000)

        # 1. Package Inquiry Context
        print("Testing Package Inquiry Context Banner...")
        page.evaluate("openInquiryModal(1, 'هتل باغ مشیرالممالک', 'پکیج VIP عروسی کویر', '۱۲۰,۰۰۰,۰۰۰ تومان', 'پکیج', 'pkg-1', 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3')")
        page.wait_for_timeout(300)

        banner_visible = page.is_visible('#inquiry-context-banner')
        assert banner_visible, "Context banner should be visible for package inquiry"

        title_text = page.inner_text('#inquiry-context-title')
        assert 'پکیج VIP عروسی کویر' in title_text, f"Expected package title, got: {title_text}"
        print(f"  Context title verified: {title_text}")

        # Screenshot of Package Inquiry Modal
        os.makedirs('verification', exist_ok=True)
        page.screenshot(path='verification/package_inquiry_context.png')
        print("  Screenshot saved at verification/package_inquiry_context.png")

        # Submit package inquiry
        page.evaluate("document.getElementById('inquiry-form').dispatchEvent(new Event('submit'))")
        page.wait_for_timeout(500)

        # Check localStorage aroosi_inquiries_db
        db_json = page.evaluate("localStorage.getItem('aroosi_inquiries_db')")
        db_items = json.loads(db_json) if db_json else []
        assert len(db_items) > 0, "Expected submitted inquiry in localStorage"
        first_item = db_items[0]
        assert first_item.get('itemTitle') == 'پکیج VIP عروسی کویر', f"Expected itemTitle in payload, got {first_item}"
        print("  Package inquiry payload context verified in localStorage.")

        # 2. Idea Inquiry Context
        print("Testing Idea Inquiry Context Banner...")
        page.evaluate("openInquiryModal(2, 'استودیو کویر', 'دیزاین سفره عقد سنتی یزدی', '', 'ایده/ژورنال', 'idea-102')")
        page.wait_for_timeout(300)

        idea_banner_visible = page.is_visible('#inquiry-context-banner')
        assert idea_banner_visible, "Context banner should be visible for idea inquiry"

        idea_title_text = page.inner_text('#inquiry-context-title')
        assert 'دیزاین سفره عقد سنتی یزدی' in idea_title_text, f"Expected idea title, got: {idea_title_text}"
        print(f"  Idea context title verified: {idea_title_text}")

        # Screenshot of Idea Inquiry Modal
        page.screenshot(path='verification/idea_inquiry_context.png')
        print("  Screenshot saved at verification/idea_inquiry_context.png")

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
    run_test()
