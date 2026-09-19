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

        # Click Quizzes tab
        page.click("#demo-tab-quizzes")
        time.sleep(0.5)

        # 1. Capture Quiz Catalog Screen
        page.screenshot(path="verification/quiz_catalog_view.png")

        # 2. Click "شروع تست هوشمند" on first quiz card
        page.click("text=شروع تست هوشمند")
        time.sleep(0.5)
        page.screenshot(path="verification/quiz_runner_question1.png")

        # 3. Select an option and advance through 5 questions
        for i in range(5):
            page.click("#quiz-runner-view img")
            time.sleep(0.3)

        time.sleep(0.5)
        # 4. Capture Quiz Result Board
        page.screenshot(path="verification/quiz_result_dashboard.png")

        browser.close()

if __name__ == "__main__":
    run()
