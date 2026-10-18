import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 900})
        page = await context.new_page()

        # Listen to console errors
        page.on("console", lambda msg: print(f"Browser Console [{msg.type}]: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Browser Error: {err}"))

        url = f"file://{os.path.abspath('index.html')}"
        await page.goto(url)
        await page.wait_for_timeout(1000)

        os.makedirs("verification", exist_ok=True)

        # 1. Homepage & Vendor Cards
        await page.screenshot(path="verification/1_homepage_vendor_cards.png")
        print("Captured 1_homepage_vendor_cards.png")

        # 2. Open Vendor Detail Modal
        await page.evaluate("openVendorDetailModal(1)")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/2_vendor_detail_modal.png")
        print("Captured 2_vendor_detail_modal.png")

        # Switch to packages tab in modal
        await page.evaluate("switchVdmSubTab('packages')")
        await page.wait_for_timeout(300)
        await page.screenshot(path="verification/3_vendor_packages_comparison.png")
        print("Captured 3_vendor_packages_comparison.png")

        # Switch to calendar tab in modal
        await page.evaluate("switchVdmSubTab('calendar')")
        await page.wait_for_timeout(300)
        await page.screenshot(path="verification/4_vendor_calendar_preview.png")
        print("Captured 4_vendor_calendar_preview.png")

        # Close modal
        await page.evaluate("closeVendorDetailModal()")

        # 3. Chat & Pre-invoice
        await page.evaluate("switchTab('messages')")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/5_chat_preinvoice.png")
        print("Captured 5_chat_preinvoice.png")

        # 4. Budget & Confectionery Calculator
        await page.evaluate("switchTab('tools')")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/6_budget_confectionery_calculator.png")
        print("Captured 6_budget_confectionery_calculator.png")

        # 5. Digital Invitation
        await page.evaluate("switchTab('invitation')")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/7_digital_invitation.png")
        print("Captured 7_digital_invitation.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
