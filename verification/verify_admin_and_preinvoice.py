import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    os.makedirs("verification", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        file_path = os.path.abspath("index.html")
        url = f"file://{file_path}"
        print(f"Loading {url}...")
        await page.goto(url)
        await page.wait_for_timeout(1000)

        # 1. Test Admin Login with fixed credentials (admin / admin123)
        print("Testing Admin Login...")
        await page.evaluate("openAuthModal('admin')")
        await page.wait_for_timeout(500)

        # Fill credentials
        await page.fill("#auth-admin-user", "admin")
        await page.fill("#auth-admin-password", "admin123")

        # Click submit
        await page.click("#auth-form-admin button[type='submit']")
        await page.wait_for_timeout(1000)

        # Check if tab-admin is visible and role is admin
        is_admin_visible = await page.is_visible("#tab-admin")
        role_state = await page.evaluate("localStorage.getItem('currentUserRole')")
        print(f"Admin tab visible: {is_admin_visible}, Role in localStorage: {role_state}")

        await page.screenshot(path="verification/verification_admin_dashboard.png")

        # 2. Test Official Pre-Invoice Print Modal
        print("Testing Official Pre-Invoice Print Modal...")
        await page.evaluate("openPreInvoicePrintModal()")
        await page.wait_for_timeout(1000)

        is_invoice_modal_visible = await page.is_visible("#modal-preinvoice-print")
        print(f"Pre-Invoice modal visible: {is_invoice_modal_visible}")

        await page.screenshot(path="verification/verification_preinvoice_modal.png")

        await browser.close()
        print("Verification completed successfully!")

if __name__ == "__main__":
    asyncio.run(verify())
