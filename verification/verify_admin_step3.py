import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def verify_admin_step3():
    server_process = subprocess.Popen(["python3", "-m", "http.server", "8000"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.5)

    console_errors = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1400, "height": 900})
        page = await context.new_page()

        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        try:
            print("Navigating to Aroosi No SPA...")
            await page.goto("http://localhost:8000/index.html")
            await page.wait_for_timeout(1000)

            # 1. Switch to Admin Panel
            print("Switching to Admin Tab...")
            await page.click("#nav-admin")
            await page.wait_for_timeout(500)

            # 2. Test Category CRUD & Sync
            print("Testing Parent Category Creation...")
            await page.click("button:has-text('افزودن دسته اصلی جدید')")
            await page.wait_for_timeout(300)
            await page.fill("#parent-cat-title", "دسته جدید اداری دمو")
            await page.fill("#parent-cat-badge", "تست دمو")
            await page.click("button:has-text('ذخیره دسته اصلی')")
            await page.wait_for_timeout(500)

            print("Checking dynamic sync in Admin & Top Nav Category Menu...")
            admin_cat_text = await page.inner_text("#admin-category-groups-list")
            assert "دسته جدید اداری دمو" in admin_cat_text, "New category missing from Admin Category Groups list!"

            mega_text = await page.text_content("#mega-category-menu")
            assert "دسته جدید اداری دمو" in mega_text, "New category missing from Top Nav Mega Menu!"

            # 3. Test Showcase Text & Banner Editor
            print("Testing Showcase Text Editor...")
            await page.fill("#admin-hero-title-input", "عنوان بروزرسانی شده هیرو توسط مدیر پلتفرم")
            await page.click("button:has-text('ذخیره و بروزرسانی ویترین')")
            await page.wait_for_timeout(500)

            await page.click("#demo-tab-home")
            await page.wait_for_timeout(500)
            hero_h1 = await page.inner_text("#hero h1")
            assert "عنوان بروزرسانی شده هیرو" in hero_h1, "Hero headline update failed!"

            # 4. Switch back to Admin to check Traffic Metrics, Subscription Tiers, Reviews
            await page.click("#nav-admin")
            await page.wait_for_timeout(500)

            print("Checking Analytics & Traffic Table...")
            traffic_table = await page.inner_text("#admin-vendor-traffic-table")
            assert len(traffic_table.strip()) > 0, "Vendor traffic table is empty!"

            print("Checking System Logs...")
            logs_text = await page.inner_text("#admin-system-logs-container")
            assert "SYSTEM" in logs_text, "System audit logs missing!"

            print("Testing Subscription Tier Assignment...")
            tier_select = page.locator("#admin-vendor-table select").first
            await tier_select.select_option("GOLD_VIP")
            await page.wait_for_timeout(300)

            print("Testing Review Moderation & Verified Couple Badge...")
            await page.click("#admin-reviews-moderation-table button:has-text('زوج تاییدشده')")
            await page.wait_for_timeout(300)

            print("Testing User Accounts Block Toggle...")
            await page.click("#admin-user-accounts-table button:has-text('مسدودسازی حساب')")
            await page.wait_for_timeout(300)

            # Capture Screenshot
            os.makedirs("verification", exist_ok=True)
            screenshot_path = "verification/admin_step3.png"
            await page.screenshot(path=screenshot_path, full_page=True)
            print(f"Screenshot saved to {screenshot_path}")

            print("Console Errors:", console_errors)
            assert len(console_errors) == 0, f"Console errors detected: {console_errors}"
            print("Verification Step 3 Successful!")

        finally:
            await browser.close()
            server_process.terminate()

if __name__ == "__main__":
    asyncio.run(verify_admin_step3())
