import os
import asyncio
from playwright.async_api import async_playwright

path = os.path.abspath('index.html')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 900})
        await page.goto(f'file://{path}')

        os.makedirs('verification', exist_ok=True)

        # 1. Hover mega category menu
        mega_btn = page.locator('#nav-mega-cat-btn')
        await mega_btn.hover()
        await page.wait_for_timeout(300)

        mega_menu = page.locator('#mega-category-menu')
        assert await mega_menu.is_visible()
        screenshot_path1 = 'verification/header_mega_menu_styled.png'
        await page.screenshot(path=screenshot_path1)
        print(f'Captured {screenshot_path1}')

        # Hover away to hide
        await page.mouse.move(0, 0)
        await page.wait_for_timeout(300)
        assert not (await mega_menu.is_visible())

        # 2. Hover Planning Tools dropdown
        tools_btn = page.locator("button:has-text('ابزارهای برنامه‌ریزی')")
        await tools_btn.hover()
        await page.wait_for_timeout(300)
        screenshot_path2 = 'verification/header_tools_menu_styled.png'
        await page.screenshot(path=screenshot_path2)
        print(f'Captured {screenshot_path2}')

        # 3. Hover Services & Ideas dropdown
        ideas_btn = page.locator("button:has-text('خدمات & ایده‌ها')")
        await ideas_btn.hover()
        await page.wait_for_timeout(300)
        screenshot_path3 = 'verification/header_ideas_menu_styled.png'
        await page.screenshot(path=screenshot_path3)
        print(f'Captured {screenshot_path3}')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
