import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})

        # Load local index.html
        await page.goto("file:///app/index.html")
        await page.wait_for_timeout(1000)

        # 1. Switch to Messages tab
        await page.click("#demo-tab-messages")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/chat_system_split_view.png")

        # 2. Type a message in chat input and send
        await page.fill("#chat-message-input", "سلام، امکان ارسال نمونه کارهای بیشتر وجود دارد؟")
        await page.click("#chat-main-thread-panel button[type='submit']")

        # Wait for simulated 1-second auto-reply
        await page.wait_for_timeout(1500)
        await page.screenshot(path="/home/jules/verification/chat_system_message_sent.png")

        # 3. Test Price Inquiry Modal
        await page.click("#demo-tab-home")
        await page.wait_for_timeout(500)
        await page.click("#vendor-grid button:has-text('استعلام قیمت')")
        await page.wait_for_timeout(800)
        await page.screenshot(path="/home/jules/verification/price_inquiry_modal.png")

        await browser.close()

asyncio.run(run())
