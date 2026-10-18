import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        index_path = os.path.abspath("index.html")
        page.goto(f"file://{index_path}")
        page.wait_for_load_state("networkidle")

        # 1. Test Verified Couple Badge in Vendor Detail Modal
        print("1. Testing Verified Couple Badge in Vendor Detail Modal...")
        page.evaluate("window.openVendorDetailModal('v-moshir')")
        page.wait_for_timeout(500)
        page.evaluate("window.switchModalTab('reviews')")
        page.wait_for_timeout(500)

        badge = page.locator("#vdm-reviews-container >> text=زوج تاییدشده")
        assert badge.count() > 0, "Verified Couple Badge not found in vendor reviews!"
        print("✓ Verified Couple Badge successfully verified!")

        page.evaluate("window.closeVendorDetailModal()")
        page.wait_for_timeout(300)

        # 2. Test Dual Budget Split in Planner Budget Tab
        print("2. Testing Dual Budget Split in Planner Budget Tab...")
        page.evaluate("window.switchTab('planner')")
        page.wait_for_timeout(300)
        page.evaluate("window.switchPlannerSubTab('budget')")
        page.wait_for_timeout(500)

        groom = page.locator("text=سهم خانواده داماد")
        bride = page.locator("text=سهم خانواده عروس")
        shared = page.locator("text=مخارج مشترک (۵۰ / ۵۰)")

        assert groom.is_visible(), "Groom budget card not visible!"
        assert bride.is_visible(), "Bride budget card not visible!"
        assert shared.is_visible(), "Shared budget card not visible!"

        table_header = page.locator("th >> text=سهم‌بندی")
        assert table_header.is_visible(), "Table party column header not visible!"

        # Scroll to Dual Budget Split container for clear screenshot
        groom.scroll_into_view_if_needed()
        page.wait_for_timeout(300)

        page.screenshot(path="verification/verified_couple_dual_budget.png")
        print("✓ Screenshot saved to verification/verified_couple_dual_budget.png")

        browser.close()

if __name__ == "__main__":
    run()
