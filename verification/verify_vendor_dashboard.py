import os
from playwright.sync_api import sync_playwright

def run_verification():
    html_file = os.path.abspath("index.html")
    file_url = f"file://{html_file}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 900})
        page.goto(file_url)

        # Switch to Vendor Dashboard
        page.click("#demo-tab-vendor-dash")
        page.wait_for_timeout(500)

        # 1. Test Subscription Matrix Modal
        page.click("button:has-text('ارتقا / تمدید اشتراک')")
        page.wait_for_timeout(300)
        assert page.is_visible("#modal-subscription-matrix")
        page.screenshot(path="verification/vendor_subscription_matrix.png")

        # Close Matrix Modal
        page.click("#modal-subscription-matrix button[title='بستن']")
        page.wait_for_timeout(300)

        # 2. Test Digital Invoice Builder Modal
        page.click("button:has-text('ایجاد و صدور پیش‌فاکتور جدید')")
        page.wait_for_timeout(300)
        assert page.is_visible("#modal-vendor-invoice-builder")
        page.screenshot(path="verification/vendor_invoice_builder.png")

        # Submit Invoice
        page.click("#modal-vendor-invoice-builder button[type='submit']")
        page.wait_for_timeout(300)

        # 3. Test Billing History Drawer
        page.click("button:has-text('تاریخچه پرداخت‌ها')")
        page.wait_for_timeout(300)
        assert page.is_visible("#vd-billing-history-drawer")

        # 4. Screenshot full Vendor Dashboard
        page.screenshot(path="verification/vendor_dashboard_complete.png")
        print("Vendor dashboard verification successful!")

        browser.close()

if __name__ == "__main__":
    os.makedirs("verification", exist_ok=True)
    run_verification()
