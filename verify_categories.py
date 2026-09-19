import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")
        await page.wait_for_timeout(1000)

        # Scroll to Category Grid
        cat_section = page.locator("#category-cards-grid")
        await cat_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/category_grid_collapsed.png")
        print("Captured category_grid_collapsed.png")

        # Click expand button
        expand_btn = page.locator("#toggle-categories-btn")
        await expand_btn.click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/category_grid_expanded.png")
        print("Captured category_grid_expanded.png")

        await browser.close()

asyncio.run(main())
