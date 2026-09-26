import asyncio
from playwright.async_api import async_playwright

async def verify_subgroup_modal():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        # Open index.html via local file or local server
        await page.goto("http://localhost:8000/index.html")
        await page.wait_for_load_state("domcontentloaded")
        await asyncio.sleep(1)

        # 1. Click on Category Card 1 (تشریفات قانونی، عقد و مشاوره)
        card1 = page.locator(".category-card").first
        await card1.click()
        await asyncio.sleep(0.5)

        # 2. Check modal visibility and content
        modal = page.locator("#subgroupModal")
        assert await modal.is_visible(), "Subgroup modal should be visible after clicking category card"

        cat_title = await page.locator("#modalCatTitle").inner_text()
        print("Modal Title:", cat_title)

        grid_items = page.locator("#subgroupGridList .subgroup-item-card")
        item_count = await grid_items.count()
        print("Subgroup Grid Items Count:", item_count)
        assert item_count > 0, "Subgroup items should be populated in modal grid"

        # Screenshot modal
        await page.screenshot(path="subgroup_modal_exact.png")
        print("Saved subgroup_modal_exact.png screenshot")

        # 3. Click one subgroup item view button
        sub_btn = grid_items.first.locator(".btn-subgroup-view")
        await sub_btn.click()
        await asyncio.sleep(0.5)

        # 4. Verify modal closed and directory view active
        assert not await modal.is_visible(), "Modal should close after selecting subgroup"
        directory_view = page.locator("#tab-directory")
        assert await directory_view.is_visible(), "Directory view should be visible"

        await page.screenshot(path="directory_after_subgroup_click.png")
        print("Saved directory_after_subgroup_click.png screenshot")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_subgroup_modal())
