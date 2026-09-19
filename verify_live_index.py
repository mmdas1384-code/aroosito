import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        file_path = f"file://{os.path.abspath('index.html')}"
        print(f"Loading {file_path}")
        await page.goto(file_path)
        await page.wait_for_timeout(1000)

        os.makedirs("verification", exist_ok=True)

        # Screenshot 1: Home Page & Checklist
        await page.screenshot(path="verification/index_home.png", full_page=False)

        # Switch to Admin Tab
        await page.click("#nav-admin")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/index_admin.png", full_page=False)

        # Open Vendor Onboarding Modal
        await page.click("button:has-text('ثبت‌نام کسب‌وکارها')")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/index_onboarding_modal.png", full_page=False)

        await browser.close()
        print("Playwright verification completed successfully.")

if __name__ == '__main__':
    asyncio.run(main())
