import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 900})
        page = await context.new_page()

        # Get absolute file path
        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        await page.goto(file_url)
        await page.wait_for_timeout(1000)

        # Switch to directory view
        await page.click("button:has-text('دایرکتوری جامع تامین‌کنندگان')")
        await page.wait_for_timeout(1000)

        # Capture Desktop Directory View Screenshot
        os.makedirs("verification", exist_ok=True)
        await page.screenshot(path="verification/directory_view_desktop.png")
        print("Desktop directory screenshot captured.")

        # Test view mode switch to list
        await page.click("#view-mode-list")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/directory_view_list_mode.png")
        print("List view mode screenshot captured.")

        # Switch back to grid mode
        await page.click("#view-mode-grid")
        await page.wait_for_timeout(500)

        # Test capacity slider interaction
        await page.fill("#sidebar-capacity-slider", "300")
        await page.dispatch_event("#sidebar-capacity-slider", "input")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/directory_view_capacity_filter.png")
        print("Capacity slider screenshot captured.")

        # Test Mobile Viewport
        mobile_context = await browser.new_context(viewport={'width': 390, 'height': 844})
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto(file_url)
        await mobile_page.wait_for_timeout(1000)
        await mobile_page.click("button:has-text('دایرکتوری جامع تامین‌کنندگان')")
        await mobile_page.wait_for_timeout(1000)
        await mobile_page.screenshot(path="verification/directory_view_mobile.png")
        print("Mobile directory screenshot captured.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
