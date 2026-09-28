import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # Desktop test
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        cwd = os.getcwd()
        file_url = f"file://{cwd}/index.html"
        await page.goto(file_url, wait_until="domcontentloaded")
        await page.wait_for_timeout(1000)

        # Unhide modal directly via DOM
        await page.evaluate("""
            const m = document.getElementById('vendor-detail-modal');
            if (m) {
                m.classList.remove('hidden');
                m.classList.add('active', 'is-open');
                m.style.display = 'flex';
                m.style.opacity = '1';
                m.style.visibility = 'visible';
            }
        """)
        await page.wait_for_timeout(1000)

        os.makedirs("verification", exist_ok=True)
        await page.screenshot(path="verification/modal_light_desktop.png", full_page=False)
        print("Desktop screenshot captured!")

        # Mobile test
        context_mobile = await browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True)
        page_mobile = await context_mobile.new_page()
        await page_mobile.goto(file_url, wait_until="domcontentloaded")
        await page_mobile.wait_for_timeout(1000)

        await page_mobile.evaluate("""
            const m = document.getElementById('vendor-detail-modal');
            if (m) {
                m.classList.remove('hidden');
                m.classList.add('active', 'is-open');
                m.style.display = 'flex';
                m.style.opacity = '1';
                m.style.visibility = 'visible';
            }
        """)
        await page_mobile.wait_for_timeout(1000)

        await page_mobile.screenshot(path="verification/modal_light_mobile.png", full_page=False)
        print("Mobile screenshot captured!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
