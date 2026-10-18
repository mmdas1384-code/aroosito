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

        # Navigate to local file
        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")
        await page.wait_for_selector("#tab-home")

        print("Testing Export Guests CSV...")
        # Switch to Guests tab
        await page.evaluate("switchTab('guests')")
        await page.wait_for_timeout(500)

        # Trigger guest export
        async with page.expect_download() as download_info:
            await page.click("#tab-guests button:has-text('خروجی اکسل / چاپ')")
        download = await download_info.value
        print("Guest export file downloaded:", download.suggested_filename)
        assert "لیست_مهمانان" in download.suggested_filename or "csv" in download.suggested_filename

        print("Testing Export Checklist CSV...")
        # Switch to Planner tab
        await page.evaluate("switchTab('planner')")
        await page.wait_for_timeout(500)

        # Trigger checklist export
        async with page.expect_download() as download_info_checklist:
            await page.click("#planner-panel-checklist button:has-text('خروجی اکسل / چاپ')")
        download_cl = await download_info_checklist.value
        print("Checklist export file downloaded:", download_cl.suggested_filename)
        assert "چک_لیست" in download_cl.suggested_filename or "csv" in download_cl.suggested_filename

        print("Testing Export Budget CSV...")
        # Switch to Budget Wizard tab
        await page.evaluate("switchTab('tools')")
        await page.wait_for_timeout(500)
        # Advance directly to step 5
        await page.evaluate("bwState.currentStep = 4; navigateBwStep(1);")
        await page.wait_for_timeout(500)

        async with page.expect_download() as download_info_budget:
            await page.click("#bw-step-result button:has-text('دانلود خروجی CSV / چاپ')")
        download_bg = await download_info_budget.value
        print("Budget export file downloaded:", download_bg.suggested_filename)
        assert "برآورد_بودجه" in download_bg.suggested_filename or "csv" in download_bg.suggested_filename

        print("Browser errors:", errors)
        assert len(errors) == 0, f"Errors found: {errors}"
        print("Export & Print verification SUCCESS!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
