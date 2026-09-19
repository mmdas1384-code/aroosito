import asyncio
import os
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        file_path = f"file://{os.path.abspath('index.html')}"
        await page.goto(file_path)
        await page.wait_for_load_state("networkidle")

        os.makedirs('/home/jules/verification', exist_ok=True)

        # 1. Click Inspiration / Moodboard tab in top switcher
        await page.click('#demo-tab-inspiration')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/inspiration_gallery_grid.png')

        # 2. Click a category pill e.g. "لباس و تور عروس"
        category_btns = page.locator('#insp-category-pills button')
        await category_btns.nth(1).click()
        await page.wait_for_timeout(300)
        await page.screenshot(path='/home/jules/verification/inspiration_category_filtered.png')

        # 3. Toggle heart bookmark on an item to test toast notification and state change
        heart_btns = page.locator('#insp-gallery-grid button')
        if await heart_btns.count() > 0:
            await heart_btns.first.click()
            await page.wait_for_timeout(400)

        # 4. Switch to "مودبورد من" sub-tab
        await page.click('#insp-subtab-moodboard')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/inspiration_moodboard_workspace.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(run_test())
