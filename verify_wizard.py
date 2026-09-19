import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        abs_path = os.path.abspath("index.html")
        await page.goto(f"file://{abs_path}")
        await page.wait_for_selector("#tab-home")

        # Switch to Budget Wizard Tab
        await page.click("#demo-tab-tools")
        await page.wait_for_selector("#tab-tools", state="visible")

        # Step 1 Screenshot
        await page.screenshot(path="verification/wizard_step1.png")

        # Go to Step 2
        await page.click("#bw-next-btn")
        await page.screenshot(path="verification/wizard_step2.png")

        # Go to Step 3
        await page.click("#bw-next-btn")
        await page.screenshot(path="verification/wizard_step3.png")

        # Go to Step 4
        await page.click("#bw-next-btn")
        await page.screenshot(path="verification/wizard_step4.png")

        # Go to Final Result View
        await page.click("#bw-next-btn")
        await page.screenshot(path="verification/wizard_result.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
