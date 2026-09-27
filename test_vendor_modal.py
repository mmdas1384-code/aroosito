import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 800})
        page = await context.new_page()

        os.makedirs("verification", exist_ok=True)

        # 1. Open local page
        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        await page.goto(file_url)
        await page.wait_for_timeout(1000)

        # 2. Switch to directory tab
        await page.click("button:has-text('دایرکتوری جامع تامین‌کنندگان')")
        await page.wait_for_timeout(500)

        # Verify #directory-view is visible
        dir_visible = await page.is_visible("#directory-view")
        print(f"Directory View Visible: {dir_visible}")

        # 3. Click 'مشاهده پروفایل کامل' on first vendor card in directory
        profile_btns = page.locator("button:has-text('مشاهده پروفایل کامل')")
        if await profile_btns.count() > 0:
            await profile_btns.first.click()
            await page.wait_for_timeout(500)

        # Check modal visibility and directory visibility
        modal_visible = await page.is_visible("#vendor-detail-modal")
        dir_still_visible = await page.is_visible("#directory-view")
        print(f"Modal Floating Overlay Visible: {modal_visible}")
        print(f"Directory View Still Visible Underneath: {dir_still_visible}")

        # Take screenshot of directory floating overlay
        await page.screenshot(path="verification/vendor_modal_directory_overlay.png")

        # 4. Close modal via close button
        close_btn = page.locator("#vendor-detail-modal button:has-text('✕'), #vendor-detail-modal button:has-text('×')")
        if await close_btn.count() > 0:
            await close_btn.first.click()
        else:
            await page.click("#vendor-detail-modal .btn-modal-close, #vendor-detail-modal [onclick*='closeVendorDetailModal']")
        await page.wait_for_timeout(500)

        modal_closed = not (await page.is_visible("#vendor-detail-modal"))
        print(f"Modal Closed Successfully: {modal_closed}")

        # 5. Go to homepage and click vendor card profile
        await page.click("button:has-text('صفحه اصلی (Home)')")
        await page.wait_for_timeout(500)

        home_profile_btn = page.locator("#home-view button:has-text('مشاهده پروفایل')").first
        if await home_profile_btn.count() > 0:
            await home_profile_btn.click()
            await page.wait_for_timeout(500)

        modal_home_visible = await page.is_visible("#vendor-detail-modal")
        home_still_visible = await page.is_visible("#home-view")
        print(f"Modal Floating Overlay over Home Visible: {modal_home_visible}")
        print(f"Home View Still Visible Underneath: {home_still_visible}")

        # Take screenshot of home floating overlay
        await page.screenshot(path="verification/vendor_modal_home_overlay.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
