import os
import asyncio
from playwright.async_api import async_playwright

path = os.path.abspath('index.html')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto(f'file://{path}')

        os.makedirs('verification', exist_ok=True)

        header_el = page.locator('header')
        main_el = page.locator('main')
        hero_el = page.locator('#tab-home section').first

        header_box = await header_el.bounding_box()
        main_box = await main_el.bounding_box()
        hero_box = await hero_el.bounding_box()

        print(f'Header bottom y: {header_box["y"] + header_box["height"]}')
        print(f'Main top y: {main_box["y"]}')
        print(f'Hero top y: {hero_box["y"]}')

        # Take screenshot of seamless header and main alignment
        screenshot_path = 'verification/header_no_white_strip.png'
        await page.screenshot(path=screenshot_path)
        print(f'Screenshot saved to {screenshot_path}')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
