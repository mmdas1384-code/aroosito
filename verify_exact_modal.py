import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Load index.html
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")
        await page.wait_for_timeout(1000)

        # 1. Verify Category Showcase is visible
        cat_section = await page.query_selector('.main-categories-section')
        print(f"Categories section found: {cat_section is not None}")

        cards = await page.query_selector_all('.category-card')
        print(f"Category cards count: {len(cards)}")

        # 2. Click on Card 1
        print("Clicking Card 1...")
        await cards[0].click()
        await page.wait_for_timeout(500)

        # 3. Check Subgroup Modal visibility and content
        modal = await page.query_selector('#subgroupModal')
        is_visible = await modal.is_visible() if modal else False
        print(f"Subgroup modal visible after click: {is_visible}")

        title = await page.text_content('#modalCatTitle')
        badge = await page.text_content('#modalCatBadge')
        icon = await page.text_content('#modalCatIcon')
        print(f"Modal Title: '{title}', Badge: '{badge}', Icon: '{icon}'")

        items = await page.query_selector_all('#subgroupGridList .subgroup-item-card')
        print(f"Subgroup items count in modal: {len(items)}")

        # Take screenshot of open modal
        await page.screenshot(path="subgroup_modal_exact.png")
        print("Screenshot saved to subgroup_modal_exact.png")

        # 4. Click 'مشاهده لیست ←' on first subgroup item
        first_btn = await page.query_selector('#subgroupGridList .btn-subgroup-view')
        if first_btn:
            sub_text = await page.text_content('#subgroupGridList .subgroup-name')
            print(f"Clicking subgroup button for: {sub_text}")
            await first_btn.click()
            await page.wait_for_timeout(500)

            # Check if directory view is now active
            dir_view = await page.query_selector('#directory-view')
            is_dir_visible = await dir_view.is_visible() if dir_view else False
            print(f"Directory view visible: {is_dir_visible}")

            # Modal should be closed
            is_modal_visible_now = await modal.is_visible() if modal else False
            print(f"Modal visible after selecting subgroup: {is_modal_visible_now}")

        await page.screenshot(path="directory_after_subgroup_click.png")
        print("Screenshot saved to directory_after_subgroup_click.png")

        await browser.close()

asyncio.run(run())
