import asyncio
import os
from playwright.async_api import async_playwright

async def verify_vendor_step2():
    console_errors = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 900})
        page = await context.new_page()

        # Listen for console errors
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")
        await page.wait_for_timeout(1000)

        print("1. Switching to Vendor Dashboard...")
        await page.click("#demo-tab-vendor-dash")
        await page.wait_for_timeout(500)

        # 2. Test Promotions & Discount Badges
        print("2. Testing Promotions & Discount Badges...")
        promo_list = await page.inner_html("#vd-promo-badges-list")
        assert "تخفیف ۲۰٪" in promo_list or "تخفیف" in promo_list, "Promo list missing default badges"

        # Open promo badge modal
        await page.click("button:has-text('افزودن نشان تخفیف اختصاصی')")
        await page.wait_for_timeout(300)
        assert await page.is_visible("#modal-vendor-promo-badge"), "Promo badge modal failed to open"

        await page.fill("#promo-title", "تخفیف ۳۰٪ ویژه بهار")
        await page.fill("#promo-discount-pct", "30")
        await page.fill("#promo-expiry-days", "10")
        await page.fill("#promo-description", "ویژه رزرو پکیج‌های اختصاصی عکاسی")
        await page.click("button:has-text('ذخیره نشان تخفیف')")
        await page.wait_for_timeout(500)

        updated_promo_list = await page.inner_text("#vd-promo-badges-list")
        assert "تخفیف ۳۰٪ ویژه بهار" in updated_promo_list, "New promo badge failed to render in list"

        # 3. Test Service & Package Management
        print("3. Testing Service & Package Management...")
        await page.click("button:has-text('افزودن پکیج خدمات جدید')")
        await page.wait_for_timeout(300)
        assert await page.is_visible("#modal-vendor-package"), "Package modal failed to open"

        await page.fill("#pkg-title", "پکیج VIP الماس کویر")
        await page.fill("#pkg-price", "۶۵,۰۰۰,۰۰۰ تومان")
        await page.fill("#pkg-badge", "ویژه عروسی تو")
        await page.fill("#pkg-features", "عکاسی ۳ نوبت\nتصویربرداری ۴K با هلی‌شات\nآلبوم ایتالیایی ۶۰ در ۴۰")
        await page.fill("#pkg-requirements", "حداقل ۲ ترابایت فایل هارد و رزرو ۳۰ روز قبل")
        await page.click("button:has-text('ذخیره پکیج')")
        await page.wait_for_timeout(500)

        packages_html = await page.inner_text("#vd-packages-list")
        assert "پکیج VIP الماس کویر" in packages_html, "New package failed to render in package list"

        # 4. Test Jalali Calendar Day Blocking
        print("4. Testing Jalali Calendar Day Blocking...")
        calendar_days = page.locator("#calendar-grid button")
        count = await calendar_days.count()
        assert count >= 30, f"Expected calendar days >= 30, got {count}"

        # Click day 10 to toggle blocking
        day_10 = page.locator("#calendar-grid button:has-text('10')").first
        await day_10.click()
        await page.wait_for_timeout(300)

        # 5. Test Leads Table
        print("5. Testing Leads Table...")
        await page.fill("#vd-inquiry-search-input", "امیرحسین")
        await page.wait_for_timeout(300)
        inquiry_html = await page.inner_text("#inquiry-list")
        assert "امیرحسین" in inquiry_html, "Leads search failed to filter inquiries"
        await page.fill("#vd-inquiry-search-input", "")
        await page.wait_for_timeout(300)

        # 6. Test Customer Review Response Manager
        print("6. Testing Customer Review Response Manager...")
        assert await page.is_visible("#vd-reviews-manager"), "Reviews manager section not visible"
        reply_input = page.locator("#vd-review-reply-input-0")
        await reply_input.fill("با تشکر فراوان از نظر لطف و اعتماد شما به استودیو کویر یزد.")
        await page.click("button:has-text('ثبت پاسخ'):first-of-type")
        await page.wait_for_timeout(500)

        reviews_html = await page.inner_text("#vd-reviews-manager")
        assert "پاسخ ثبت‌شده مدیر کسب‌وکار:" in reviews_html or "با تشکر فراوان" in reviews_html, "Review reply failed to save or render"

        # 7. Take screenshot
        os.makedirs("verification", exist_ok=True)
        screenshot_path = "verification/vendor_step2.png"
        await page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        # Check console errors
        print(f"Console errors caught: {len(console_errors)}")
        for err in console_errors:
            print("Console Error:", err)

        assert len(console_errors) == 0, f"Encountered {len(console_errors)} console errors during test run."
        print("All Step 2 Vendor Dashboard tests passed successfully!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_vendor_step2())
