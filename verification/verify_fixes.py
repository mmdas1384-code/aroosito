import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        await page.goto(file_url)
        await page.wait_for_load_state("networkidle")

        # 1. Test Vendor Registration Modal Trigger
        print("Testing Vendor Registration Modal trigger...")
        vendor_signup_btn = page.locator("button:has-text('ثبت‌نام کسب‌وکارها')").first
        await vendor_signup_btn.click()
        await page.wait_for_timeout(500)

        modal = page.locator("#vendor-register-modal")
        is_visible = await modal.is_visible()
        print(f"Vendor Register Modal visible after click: {is_visible}")
        assert is_visible, "Vendor Register Modal should be visible!"

        await page.screenshot(path="verification/vendor_modal_opened.png")

        # Close vendor modal
        close_btn = modal.locator("button[title='بستن']")
        await close_btn.click()
        await page.wait_for_timeout(300)

        # 2. Test Category Card / Subgroup Modal trigger
        print("Testing Parent Category Card click...")
        cat_card = page.locator(".category-card").first
        await cat_card.click()
        await page.wait_for_timeout(500)

        subgroups_modal = page.locator("#subgroups-modal")
        is_sub_visible = await subgroups_modal.is_visible()
        print(f"Subgroups Modal visible after category card click: {is_sub_visible}")
        assert is_sub_visible, "Subgroups Modal should be visible!"

        await page.screenshot(path="verification/subgroups_modal_opened.png")

        await browser.close()
        print("Verification completed successfully!")

if __name__ == "__main__":
    asyncio.run(run())
