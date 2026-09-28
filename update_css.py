with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace dark modal card styles with light clean styles
old_card_css = """/* Modal Inner Main Card - Royal Persian Luxury Transformation */
.clean-vmodal-card {
    background: linear-gradient(145deg, #12281D 0%, #0B1B13 100%) !important;
    color: #FBF9F5 !important;
    width: 95% !important;
    max-width: 960px !important;
    max-height: 90vh !important;
    border-radius: 24px !important;
    position: relative !important;
    direction: rtl !important;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.8), inset 0 0 1px rgba(212, 175, 55, 0.2) !important;
    border: 1px solid rgba(212, 175, 55, 0.35) !important;
    overflow-y: auto !important;
    display: flex !important;
    flex-direction: column !important;
    margin: auto !important;
    animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}"""

new_card_css = """/* Modal Inner Main Card - Light Clean Canvas Modern Transformation */
.clean-vmodal-card {
    background: #FAF9F5 !important;
    color: #1A1A1A !important;
    width: 95% !important;
    max-width: 980px !important;
    max-height: 90vh !important;
    border-radius: 20px !important;
    position: relative !important;
    direction: rtl !important;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25) !important;
    border: 1px solid #E5E7EB !important;
    overflow-y: auto !important;
    display: flex !important;
    flex-direction: column !important;
    margin: auto !important;
    animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}"""

css = css.replace(old_card_css, new_card_css)

# Update clean-vmodal-tabs in css
old_tabs_css = """.clean-vmodal-tabs {
    display: flex !important;
    gap: 12px !important;
    background: #0B1B13 !important;
    padding: 12px 20px 0 20px !important;
    border-bottom: 1px solid rgba(212, 175, 55, 0.35) !important;
    overflow-x: auto !important;
    scrollbar-width: none; /* Firefox */
}"""

new_tabs_css = """.clean-vmodal-tabs {
    display: flex !important;
    gap: 12px !important;
    background: #FFFFFF !important;
    padding: 0 24px !important;
    border-bottom: 1px solid #E5E7EB !important;
    overflow-x: auto !important;
    scrollbar-width: none; /* Firefox */
}"""

css = css.replace(old_tabs_css, new_tabs_css)

# Update clean-vmodal-body in css
old_body_css = """.clean-vmodal-body {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
    gap: 20px !important;
    padding: 25px !important;
}"""

new_body_css = """.clean-vmodal-body {
    display: block !important;
    padding: 24px !important;
    background-color: #FAF9F5 !important;
}"""

css = css.replace(old_body_css, new_body_css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("style.css updated successfully!")
