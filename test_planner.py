import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        filepath = os.path.abspath("index.html")
        await page.goto(f"file://{filepath}")
        await page.wait_for_timeout(1000)

        # Scroll to checklist section
        checklist = page.locator("text=زمان‌بندی و چک‌لیست حرفه‌ای عروسی")
        await checklist.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)

        os.makedirs("verification", exist_ok=True)
        await page.screenshot(path="verification/planner_timeline_overview.png")
        print("Captured overview screenshot")

        # Click on one of the timeframe buttons in #checklist-timeframe-buttons
        filter_btn = page.locator("#checklist-timeframe-buttons button").nth(2)
        await filter_btn.click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/planner_timeframe_filter.png")
        print("Captured filter screenshot")

        # Test clicking "+ اتصال تأمین‌کننده از دایرکتوری" on a task
        connect_btn = page.locator("button:has-text('اتصال تأمین‌کننده')").first
        await connect_btn.scroll_into_view_if_needed()
        await connect_btn.click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/planner_vendor_modal.png")
        print("Captured vendor select modal screenshot")

        # Submit modal
        save_btn = page.locator("#vendor-select-modal button[type='submit']")
        await save_btn.click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/planner_vendor_attached.png")
        print("Captured vendor attached screenshot")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
