import os
from playwright.sync_api import sync_playwright

def verify_homepage_layout():
    html_path = f"file://{os.path.abspath('index.html')}"
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 3200})
        page.goto(html_path)
        page.wait_for_timeout(1000)

        # Take full page screenshot
        screenshot_path = "/home/jules/verification/homepage_full_10_sections.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")
        browser.close()

if __name__ == "__main__":
    verify_homepage_layout()
