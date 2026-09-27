import os
from playwright.sync_api import sync_playwright

def run():
    os.makedirs("verification", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        index_path = f"file://{os.path.abspath('index.html')}"
        page.goto(index_path)
        page.wait_for_timeout(1000)

        # 1. Homepage Hero Search Bar Screenshot
        page.screenshot(path="verification/hero_search_homepage.png", full_page=False)

        # 2. Fill search inputs
        page.fill("#hero-search-input", "کویر")
        page.select_option("#hero-city-select", "استان یزد")
        page.select_option("#hero-cat-select", "آتلیه عکاسی و فیلمبرداری")

        page.screenshot(path="verification/hero_search_filled.png", full_page=False)

        # 3. Click Hero Search Button
        page.click('button:has-text("جستجوی سریع 🔍")')
        page.wait_for_timeout(1000)

        # 4. Directory View Results Screenshot
        page.screenshot(path="verification/hero_search_results_directory.png", full_page=False)

        browser.close()
        print("Hero search verification screenshots captured successfully.")

if __name__ == "__main__":
    run()
