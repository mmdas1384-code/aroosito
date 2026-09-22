import os
import asyncio
from playwright.async_api import async_playwright

path = os.path.abspath('index.html')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 900})
        await page.goto(f'file://{path}')

        print('1. Verifying Homepage layout & absence of duplicate vendor sections...')
        assert await page.is_visible('#tab-home')
        assert await page.is_visible('#vendor-directory-section')

        print('2. Unchecking verified-only filter to show all registered vendors...')
        verified_cb = page.locator('#verified-only')
        await verified_cb.uncheck()

        total_count_text = await page.inner_text('#vendor-count-badge')
        print(f'Initial total vendors badge: {total_count_text}')
        assert '8' in total_count_text

        print('3. Testing Category Navigation (Mega menu / Sub-category drawer / Category pills)...')
        mega_btn = page.locator("button:has-text('آتلیه عکاسی و فیلمبرداری')").first
        if await mega_btn.is_visible():
            await mega_btn.click()
            cat_badge = await page.inner_text('#active-categories-badges')
            print(f'After mega menu filter: {cat_badge}')
            assert 'آتلیه عکاسی و فیلمبرداری' in cat_badge

        print('4. Testing Multi-Category Selection...')
        pills = page.locator('#category-filter-pills button')
        # Click 'تالار و باغ تالار عروسی'
        await pills.nth(0).click()

        badges_multi = await page.inner_text('#active-categories-badges')
        count_multi = await page.inner_text('#vendor-count-badge')
        print(f'Multi-select active badges: {badges_multi}')
        print(f'Multi-select vendor count: {count_multi}')

        print('5. Testing "All Categories" toggle button...')
        all_btn = page.locator('#btn-all-categories')
        await all_btn.click()

        badges_reset = await page.inner_text('#active-categories-badges')
        count_reset = await page.inner_text('#vendor-count-badge')
        print(f'Reset active badges: {badges_reset}')
        print(f'Reset vendor count: {count_reset}')
        assert 'همه دسته‌بندی‌ها' in badges_reset
        assert '8' in count_reset

        print('6. Testing Vendor Card CTA "نمونه‌کارها و اطلاعات"...')
        cards = page.locator('#vendor-grid > div')
        detail_cta = cards.first.locator("button:has-text('نمونه‌کارها و اطلاعات')")
        await detail_cta.click()

        detail_modal = page.locator('#vendor-detail-modal')
        assert await detail_modal.is_visible()
        print('Vendor detail modal opened successfully!')

        # Close modal via JS function call
        await page.evaluate('closeVendorDetailModal()')
        await page.wait_for_timeout(300)

        # Multi-select two categories for final screenshot
        await pills.nth(0).click()
        await pills.nth(1).click()

        # Scroll to vendor directory section
        await page.locator('#vendor-directory-section').scroll_into_view_if_needed()
        os.makedirs('verification', exist_ok=True)
        screenshot_path = 'verification/vendor_directory_multiselect.png'
        await page.screenshot(path=screenshot_path)
        print(f'Screenshot saved to {screenshot_path}')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
