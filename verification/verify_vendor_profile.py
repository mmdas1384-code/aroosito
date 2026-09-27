import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 900})
        page = await context.new_page()

        # Load local index.html
        file_path = f"file://{os.path.abspath('index.html')}"
        await page.goto(file_path)
        await page.wait_for_load_state('domcontentloaded')

        # Click Vendor Profile demo tab
        await page.click('#demo-tab-vendor-profile')
        await page.wait_for_timeout(1000)

        # Verify #tab-vendor-profile is visible
        profile_tab = page.locator('#tab-vendor-profile')
        assert await profile_tab.is_visible(), "Vendor profile tab should be visible"

        # Capture overview screenshot
        await page.screenshot(path='verification/vendor_profile_overview.png', full_page=False)
        print("Captured verification/vendor_profile_overview.png")

        # Scroll to calendar section
        calendar_section = page.locator('#vp-calendar-grid')
        await calendar_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)

        # Click an available green day button in calendar (e.g., day 10)
        day_10_btn = page.locator('#vp-calendar-grid button:has-text("10")')
        if await day_10_btn.count() > 0:
            await day_10_btn.click()
            await page.wait_for_timeout(500)

        # Verify inquiry modal appears
        inquiry_modal = page.locator('#inquiry-modal')
        assert await inquiry_modal.is_visible(), "Inquiry modal should be visible after clicking available calendar day"

        # Capture calendar inquiry screenshot
        await page.screenshot(path='verification/vendor_profile_calendar_inquiry.png', full_page=False)
        print("Captured verification/vendor_profile_calendar_inquiry.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
