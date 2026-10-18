import sys
import os
from playwright.sync_api import sync_playwright

def run_step2_verification():
    file_path = os.path.abspath("index.html")
    url = f"file://{file_path}"

    print(f"Loading page: {url}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))
        page.on("console", lambda msg: print(f"[Browser Console] {msg.type}: {msg.text}") if msg.type == "error" else None)

        page.goto(url)
        page.wait_for_load_state("domcontentloaded")

        # Test 1: Dynamic Services Sync for General Inquiry
        print("Testing Test 1: General Inquiry modal and dynamic services sync...")
        page.evaluate("openInquiryModal(1, 'عمارت قصر یزد')")
        page.wait_for_selector("#inquiry-modal:not(.hidden)")

        # Verify services checklist is present
        checklist_visible = page.is_visible("#inquiry-services-container:not(.hidden)")
        print(f"Services Checklist visible for general inquiry: {checklist_visible}")
        assert checklist_visible, "Services checklist should be visible for general inquiries!"

        page.screenshot(path="verification/step2_general_inquiry.png")
        page.evaluate("closeInquiryModal()")

        # Test 2: Streamlined Package / Idea Inquiry
        print("Testing Test 2: Package/Idea streamlined inquiry modal...")
        page.evaluate("openInquiryModal(1, 'عمارت قصر یزد', 'پکیج فرمالیته VIP', '۲۵,۰۰۰,۰۰۰ تومان', 'پکیج', 'pkg-1')")
        page.wait_for_selector("#inquiry-modal:not(.hidden)")

        services_hidden = not page.is_visible("#inquiry-services-container:not(.hidden)")
        venue_fields_hidden = not page.is_visible("#inquiry-fields-venue:not(.hidden)")
        context_banner_visible = page.is_visible("#inquiry-context-banner:not(.hidden)")

        print(f"Services checklist hidden for package inquiry: {services_hidden}")
        print(f"Venue general fields hidden for package inquiry: {venue_fields_hidden}")
        print(f"Context banner visible for package inquiry: {context_banner_visible}")

        assert services_hidden, "Services checklist should be hidden for package inquiries!"
        assert context_banner_visible, "Context banner should be visible for package inquiries!"

        page.screenshot(path="verification/step2_package_inquiry.png")
        page.evaluate("closeInquiryModal()")

        # Test 3: Vendor Direct Reply Modal
        print("Testing Test 3: Vendor lead direct reply button...")
        page.evaluate("switchTab('vendor-dash')")
        page.wait_for_selector("#tab-vendor-dash:not(.hidden)")

        page.evaluate("openInquiryReplyModal('inq-1', 'سارا و علی')")
        reply_modal_visible = page.is_visible("#modal-inquiry-reply:not(.hidden)")
        couple_name_text = page.inner_text("#reply-couple-name")
        print(f"Reply Modal visible: {reply_modal_visible}, Couple Name: {couple_name_text}")
        assert reply_modal_visible, "Vendor inquiry reply modal should be visible!"

        page.screenshot(path="verification/step2_vendor_reply_modal.png")
        page.evaluate("closeInquiryReplyModal()")

        # Test 4: Chat Appointment & Revision Modals
        print("Testing Test 4: Chat coordination and revision modals...")
        page.evaluate("switchTab('messages')")
        page.wait_for_selector("#tab-messages:not(.hidden)")

        page.evaluate("openAppointmentModal('thread-1', 'msg-1')")
        appt_modal_visible = page.is_visible("#modal-schedule-appointment:not(.hidden)")
        print(f"Schedule Appointment Modal visible: {appt_modal_visible}")
        assert appt_modal_visible, "Schedule appointment modal should open without error!"
        page.evaluate("closeAppointmentModal()")

        page.evaluate("openRevisionModal('thread-1', 'msg-1')")
        rev_modal_visible = page.is_visible("#modal-preinvoice-revision:not(.hidden)")
        print(f"Pre-invoice Revision Modal visible: {rev_modal_visible}")
        assert rev_modal_visible, "Pre-invoice revision modal should open without error!"
        page.evaluate("closeRevisionModal()")

        page.screenshot(path="verification/step2_chat_modals.png")

        if errors:
            print("Console Error Summary:")
            for err in errors:
                print(f" - {err}")
            sys.exit(1)

        print("All Step 2 Verification tests passed successfully with 0 console errors!")
        browser.close()

if __name__ == "__main__":
    run_step2_verification()
