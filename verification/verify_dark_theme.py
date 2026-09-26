import os
from playwright.sync_api import sync_playwright

def verify_dark_theme():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        abs_path = os.path.abspath("index.html")
        page.goto(f"file://{abs_path}")
        page.wait_for_timeout(1000)

        # Scroll to Budget Calculator
        calc_section = page.locator(".budget-calculator-section")
        calc_section.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/dark_section_calc.png")

        # Scroll to Vendor Banner Dark
        vendor_banner = page.locator(".vendor-banner-dark")
        vendor_banner.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/dark_section_vendor_banner.png")

        # Scroll to Footer
        footer = page.locator(".site-footer")
        footer.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/dark_section_footer.png")

        browser.close()

if __name__ == "__main__":
    verify_dark_theme()
