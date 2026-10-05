import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))

        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")
        await page.wait_for_selector("#tab-home")

        print("Navigating to Invitation Tab...")
        await page.evaluate("switchTab('invitation')")
        await page.wait_for_timeout(500)

        # Test Language Toggle to English
        print("Testing Language Toggle to EN...")
        await page.evaluate("setInvDisplayLang('en')")
        await page.wait_for_timeout(300)
        names_text = await page.inner_text("#env-couple-names")
        assert "Ali & Sara" in names_text, f"Expected 'Ali & Sara' in envelope names, got '{names_text}'"

        # Test Language Toggle back to Persian
        print("Testing Language Toggle back to FA...")
        await page.evaluate("setInvDisplayLang('fa')")
        await page.wait_for_timeout(300)
        names_text_fa = await page.inner_text("#env-couple-names")
        assert "علی & سارا" in names_text_fa, f"Expected 'علی & سارا' in envelope names, got '{names_text_fa}'"

        # Test Theme Toggle
        print("Testing Theme Switcher...")
        await page.evaluate("setInvTheme('dark-minimal')")
        await page.wait_for_timeout(300)

        # Test Music Toggle
        print("Testing Audio Toggle...")
        await page.evaluate("toggleInvMusic()")
        await page.wait_for_timeout(300)

        # Screenshot invitation view
        await page.screenshot(path="verification/invitation_view.png")
        print("Saved screenshot to verification/invitation_view.png")

        print("Browser errors:", errors)
        assert len(errors) == 0, f"Errors found: {errors}"
        print("Invitation landing view verification SUCCESS!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
