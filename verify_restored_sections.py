import asyncio
from playwright.async_api import async_playwright

async def verify_restored_sections():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1000})

        await page.goto("http://localhost:8000/index.html")
        await page.wait_for_load_state("domcontentloaded")
        await asyncio.sleep(1)

        # Check section visibility
        why_us = page.locator(".why-choose-us-section").first
        real_wed = page.locator(".real-weddings-section").first
        cta_banner = page.locator(".vendor-cta-banner").first
        footer = page.locator("footer").first

        assert await why_us.is_visible(), "Why Choose Us section should be visible"
        assert await real_wed.is_visible(), "Real Weddings section should be visible"
        assert await cta_banner.is_visible(), "Vendor CTA Banner should be visible"
        assert await footer.is_visible(), "Footer should be visible"

        print("All 4 restored sections are visible.")

        # Scroll to why choose us section and screenshot
        await why_us.scroll_into_view_if_needed()
        await asyncio.sleep(0.5)
        await page.screenshot(path="restored_sections_overview.png")
        print("Saved restored_sections_overview.png")

        # Scroll to footer and screenshot
        await footer.scroll_into_view_if_needed()
        await asyncio.sleep(0.5)
        await page.screenshot(path="restored_footer_overview.png")
        print("Saved restored_footer_overview.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_restored_sections())
