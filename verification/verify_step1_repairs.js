import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Collect console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('1. Navigating to index.html...');
  await page.goto(`file://${process.cwd()}/index.html`);
  await page.waitForLoadState('networkidle');

  console.log('2. Testing Quick Budget Calculator...');
  const range = page.locator('#home-calc-range');
  if (await range.isVisible()) {
    await range.fill('400');
    await range.dispatchEvent('input');
    const guestText = await page.locator('#home-calc-guest-tag').innerText();
    console.log('  Updated guest tag:', guestText);

    await page.locator('#home-style-luxury').click();
    const priceText = await page.locator('#home-calc-result-price').innerText();
    console.log('  Updated luxury price:', priceText);
  }

  console.log('3. Testing Vendor Directory View & Cards...');
  await page.evaluate(() => switchTab('directory'));
  await page.waitForTimeout(500);

  const vendorCards = page.locator('.vendor-card, #vendor-grid > div');
  const count = await vendorCards.count();
  console.log(`  Found ${count} vendor cards in directory.`);

  console.log('4. Testing Category-Aware Inquiry Modal...');
  // Open inquiry for vendor #2 (Studio)
  await page.evaluate(() => openInquiryModal(2, 'استودیو کویر'));
  await page.waitForTimeout(500);

  const guestContainerHidden = await page.locator('#inquiry-guests-container').evaluate(el => el.classList.contains('hidden'));
  console.log('  Guest container hidden for Studio vendor:', guestContainerHidden);

  await page.locator('#inquiry-modal button[onclick*="closeInquiryModal"]').click();
  await page.waitForTimeout(300);

  console.log('5. Testing Branded Pre-Invoice Modal...');
  await page.evaluate(() => openPreInvoicePrintModal());
  await page.waitForTimeout(500);

  const pipVendor = await page.locator('#pip-vendor-name').innerText();
  console.log('  Pre-invoice vendor name:', pipVendor);

  await page.locator('#modal-preinvoice-print button[onclick*="closePreInvoicePrintModal"]').click();
  await page.waitForTimeout(300);

  console.log('6. Testing Guests & Gifts Modal...');
  await page.evaluate(() => switchTab('guests'));
  await page.waitForTimeout(500);

  await page.evaluate(() => openGuestModal());
  await page.waitForTimeout(300);
  const guestModalVisible = await page.locator('#guest-modal').isVisible();
  console.log('  Guest modal visible:', guestModalVisible);
  await page.evaluate(() => closeGuestModal());

  await page.evaluate(() => openGiftModal());
  await page.waitForTimeout(300);
  const giftModalVisible = await page.locator('#gift-modal').isVisible();
  console.log('  Gift modal visible:', giftModalVisible);
  await page.evaluate(() => closeGiftModal());

  console.log('7. Capturing screenshot...');
  await page.screenshot({ path: 'verification/step1_repairs.png', fullPage: true });

  console.log('Console errors:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console Errors:', consoleErrors);
  }

  await browser.close();
})();
