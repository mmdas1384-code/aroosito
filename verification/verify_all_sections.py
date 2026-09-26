import os
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.route('**/*', lambda route: route.continue_() if route.request.url.startswith('file://') else route.abort())

        filepath = f"file://{os.path.abspath('index.html')}"
        page.goto(filepath)
        page.wait_for_timeout(1000)

        # Take full page screenshot
        os.makedirs('verification', exist_ok=True)
        screenshot_path = os.path.abspath('verification/homepage_all_10_sections.png')
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to: {screenshot_path}")

if __name__ == '__main__':
    verify()
