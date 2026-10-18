import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def verify_rbac_isolation():
    server_process = subprocess.Popen(["python3", "-m", "http.server", "8000"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1.5)

    console_errors = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1400, "height": 900})
        page = await context.new_page()

        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        try:
            print("1. Navigating to Aroosi No SPA as default public visitor...")
            await page.goto("http://localhost:8000/index.html")
            await page.wait_for_timeout(1000)

            print("2. Checking that Admin Nav button (#nav-admin) is HIDDEN for public users...")
            nav_admin_visible = await page.is_visible("#nav-admin")
            assert not nav_admin_visible, "FAILURE: #nav-admin is visible to default visitor!"

            print("3. Attempting direct navigation to Admin tab via JS execution switchTab('admin')...")
            await page.evaluate("switchTab('admin')")
            await page.wait_for_timeout(500)

            # Confirm tab-admin is hidden and home view is visible
            admin_tab_hidden = await page.eval_on_selector("#tab-admin", "el => el.classList.contains('hidden')")
            assert admin_tab_hidden, "FAILURE: Unauthenticated user accessed Admin Tab!"

            # Check toast presence for access denied
            toast_text = await page.inner_text("#toast-container")
            assert "دسترسی محدود" in toast_text or "دسترسی غیرمجاز" in toast_text, "FAILURE: Security guard toast not shown!"

            print("4. Attempting admin action execution (openParentCategoryModal)...")
            await page.evaluate("openParentCategoryModal()")
            await page.wait_for_timeout(300)
            parent_modal_hidden = await page.eval_on_selector("#parent-cat-modal", "el => el.classList.contains('hidden')")
            assert parent_modal_hidden, "FAILURE: Parent Category Modal opened for non-admin!"

            print("5. Switching role to Admin via switchRole('admin')...")
            await page.evaluate("switchRole('admin')")
            await page.wait_for_timeout(500)

            nav_admin_visible_admin = await page.is_visible("#nav-admin")
            assert nav_admin_visible_admin, "FAILURE: #nav-admin not visible after switching to Admin role!"

            admin_tab_active = await page.eval_on_selector("#tab-admin", "el => !el.classList.contains('hidden')")
            assert admin_tab_active, "FAILURE: Admin tab did not open for Admin role!"

            print("6. Switching back to Couple role via switchRole('couple')...")
            await page.evaluate("switchRole('couple')")
            await page.wait_for_timeout(500)

            nav_admin_hidden_again = await page.eval_on_selector("#nav-admin", "el => el.classList.contains('hidden')")
            assert nav_admin_hidden_again, "FAILURE: #nav-admin is not hidden after switching back to Couple!"

            # Capture screenshot of public page
            os.makedirs("verification", exist_ok=True)
            screenshot_path = "verification/rbac_public_clean.png"
            await page.screenshot(path=screenshot_path, full_page=True)
            print(f"Screenshot saved to {screenshot_path}")

            print("Console Errors:", console_errors)
            assert len(console_errors) == 0, f"Console errors detected: {console_errors}"
            print("RBAC Isolation Verification Successful!")

        finally:
            await browser.close()
            server_process.terminate()

if __name__ == "__main__":
    asyncio.run(verify_rbac_isolation())
