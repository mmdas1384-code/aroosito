import asyncio
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        # Open local index.html
        await page.goto("file:///app/index.html")
        await page.wait_for_timeout(1000)

        # Click on Guests demo tab
        await page.evaluate("switchTab('guests')")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/guests_kpi_and_list.png")
        print("Captured guests_kpi_and_list.png")

        # Open Add Guest Modal
        await page.evaluate("openGuestModal()")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/guest_add_modal.png")
        print("Captured guest_add_modal.png")

        # Fill Guest Modal
        await page.fill("#guest-modal-name", "مهندس کامران جمشیدی")
        await page.fill("#guest-modal-phone", "09129998877")
        await page.fill("#guest-modal-companions", "3")
        await page.fill("#guest-modal-table", "میز VIP ۵")
        await page.click("button[type='submit']:has-text('ذخیره اطلاعات')")
        await page.wait_for_timeout(1000)

        # Switch to Cash Gift subtab
        await page.click("#guest-subtab-gifts")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/cash_gift_ledger.png")
        print("Captured cash_gift_ledger.png")

        # Open Add Gift Modal
        await page.evaluate("openGiftModal()")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/gift_add_modal.png")
        print("Captured gift_add_modal.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_test())
