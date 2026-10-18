import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Load index.html locally
        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        await page.goto(file_url)
        await page.wait_for_load_state("networkidle")

        # 1. Test Admin Dashboard view
        await page.evaluate("switchRole('admin')")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/subscription_admin.png")
        print("Captured verification/subscription_admin.png")

        # 2. Test Vendor Dashboard view
        await page.evaluate("switchRole('vendor')")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/subscription_vendor.png")
        print("Captured verification/subscription_vendor.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
