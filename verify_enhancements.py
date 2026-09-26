import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        # Load local index.html
        await page.goto("file:///app/index.html")
        await page.wait_for_timeout(1000)

        # 1. Test Subgroup Modal opening
        await page.evaluate("openCategorySubgroups(1, 'تشریفات قانونی، عقد و مشاوره')")
        await page.wait_for_timeout(500)

        # Check if modal is visible
        modal_visible = await page.is_visible("#subgroupModal")
        print("Subgroup Modal visible:", modal_visible)

        title_text = await page.inner_text("#modalCategoryTitle")
        print("Modal Category Title:", title_text)

        await page.screenshot(path="subgroup_modal_redesigned_screenshot.png")

        # Click close button
        await page.click("#subgroupModal .modal-close-btn")
        await page.wait_for_timeout(300)

        modal_hidden = not (await page.is_visible("#subgroupModal"))
        print("Subgroup Modal hidden after close click:", modal_hidden)

        # 2. Test showcase scroll container presence
        showcase_exists = await page.locator("#vip-showcase-container").count() > 0
        print("VIP Showcase container present:", showcase_exists)

        await browser.close()

asyncio.run(run())
