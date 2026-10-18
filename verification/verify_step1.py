import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 900})
        page = await context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        file_path = f"file://{os.path.abspath('index.html')}"
        print("1. Navigating to Aroosi To SPA...")
        await page.goto(file_path)
        await page.wait_for_timeout(1000)

        # 1. Test Support Modal
        print("2. Testing Top Nav 'Contact Support' trigger...")
        support_btn = page.locator("button:has-text('ارتباط با پشتیبانی')").first
        await support_btn.click()
        await page.wait_for_timeout(500)

        modal_support = page.locator("#modal-support")
        is_visible = await modal_support.is_visible()
        print(f"   Support Modal Visible: {is_visible}")
        assert is_visible, "Support modal should be visible after clicking support link"

        # Take screenshot of Support Modal
        os.makedirs("verification", exist_ok=True)
        await page.screenshot(path="verification/step1_support_modal.png")

        # Fill and submit Support Form
        print("3. Submitting Support Inquiry Form...")
        await page.fill("#supp-name", "رضا احمدی")
        await page.fill("#supp-phone", "09139998877")
        await page.select_option("#supp-topic", "مشاوره")
        await page.fill("#supp-message", "سلام، درخواست راهنمایی جهت انتخاب رزرو باغ تالار دارم.")

        await page.click("#support-modal-form button[type='submit']")
        await page.wait_for_timeout(500)

        # Verify Support Modal Closed
        is_visible_after = await modal_support.is_visible()
        assert not is_visible_after, "Support modal should close after submit"

        # 2. Verify VIP Showcase
        print("4. Checking VIP Showcase vertical layout...")
        vip_container = page.locator("#vip-showcase-container")
        await vip_container.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/step1_vip_showcase.png")

        # 3. Verify Directory Cards
        print("5. Navigating to Directory and verifying luxury cards...")
        dir_btn = page.locator("button:has-text('دایرکتوری جامع تامین‌کنندگان')").first
        await dir_btn.click()
        await page.wait_for_timeout(500)

        await page.screenshot(path="verification/step1_directory_cards.png")

        # 4. Verify Admin Support Queue
        print("6. Verifying Super Admin Support Queue...")
        await page.evaluate("switchRole('admin')")
        await page.wait_for_timeout(300)
        await page.evaluate("switchTab('admin')")
        await page.wait_for_timeout(500)

        admin_supp_table = page.locator("#admin-support-inquiries-table")
        await admin_supp_table.scroll_into_view_if_needed()
        await page.screenshot(path="verification/step1_admin_support_queue.png")

        print(f"Console Errors: {console_errors}")
        assert len(console_errors) == 0, f"Found console errors: {console_errors}"
        print("Step 1 Playwright Verification Successful!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
