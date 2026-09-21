import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    os.makedirs("verification", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")
        await page.wait_for_selector("#vendor-grid", timeout=5000)
        await page.wait_for_timeout(1000)

        # 1. Capture Vendor Profile & Cards
        await page.screenshot(path="verification/1_vendor_cards_tags.png")
        print("Captured 1_vendor_cards_tags.png")

        # 2. Click on first vendor card button to open detail modal
        modal_btn = page.locator("#vendor-grid button").first
        if await modal_btn.count() > 0:
            await modal_btn.click()
            await page.wait_for_timeout(500)
            await page.screenshot(path="verification/2_vdm_modal.png")
            print("Captured 2_vdm_modal.png")

        # 3. Switch tabs using demo bar buttons
        await page.click("#demo-tab-messages")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/3_chat_messages.png")
        print("Captured 3_chat_messages.png")

        await page.click("#demo-tab-tools")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/4_budget_confectionery.png")
        print("Captured 4_budget_confectionery.png")

        await page.click("#demo-tab-invitation")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/5_invitation_rsvp.png")
        print("Captured 5_invitation_rsvp.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
