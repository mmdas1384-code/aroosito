import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        file_path = f"file://{os.path.abspath('index.html')}"
        await page.goto(file_path, wait_until="networkidle")
        await page.wait_for_timeout(1000)

        os.makedirs("/home/jules/verification", exist_ok=True)

        # 1. Homepage default view verification
        await page.screenshot(path="/home/jules/verification/homepage_clean.png", full_page=False)

        # Confirm homepage is visible and vendor directory section is NOT in tab-home
        home_visible = await page.is_visible("#tab-home")
        directory_visible = await page.is_visible("#tab-directory")
        print(f"Home visible: {home_visible}, Directory visible default: {directory_visible}")

        # 2. Click "دایرکتوری جامع تامین‌کنندگان"
        await page.click("text=دایرکتوری جامع تامین‌کنندگان")
        await page.wait_for_timeout(1000)

        dir_visible_after = await page.is_visible("#tab-directory")
        home_visible_after = await page.is_visible("#tab-home")
        print(f"After click -> Directory visible: {dir_visible_after}, Home visible: {home_visible_after}")

        await page.screenshot(path="/home/jules/verification/directory_view_standalone.png", full_page=False)

        # 3. Test Sidebar Category Checklist filter interaction
        checkbox = page.locator("#sidebar-category-checkboxes input[type='checkbox']").first
        if await checkbox.count() > 0:
            await checkbox.click()
            await page.wait_for_timeout(500)

        await page.screenshot(path="/home/jules/verification/directory_sidebar_filtered.png", full_page=False)

        # 4. Click "بازگشت به صفحه اصلی"
        await page.click("text=بازگشت به صفحه اصلی")
        await page.wait_for_timeout(1000)

        home_returned = await page.is_visible("#tab-home")
        dir_hidden = not await page.is_visible("#tab-directory")
        print(f"After return -> Home visible: {home_returned}, Directory hidden: {dir_hidden}")

        await page.screenshot(path="/home/jules/verification/homepage_returned.png", full_page=False)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
