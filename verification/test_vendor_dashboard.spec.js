import { test, expect } from '@playwright/test';
import path from 'path';

test('Verify Vendor Dashboard Upgrades', async ({ page }) => {
  const filePath = `file://${path.resolve('index.html')}`;
  await page.goto(filePath);

  // Switch to Vendor Dashboard
  await page.click('#demo-tab-vendor-dash');
  await page.waitForTimeout(500);

  // 1. Subscription Matrix Modal
  await page.click('button:has-text("ارتقا / تمدید اشتراک")');
  await page.waitForTimeout(300);
  const matrixModal = page.locator('#modal-subscription-matrix');
  await expect(matrixModal).toBeVisible();
  await page.screenshot({ path: 'verification/vendor_subscription_matrix.png' });

  // Close matrix modal
  await page.click('#modal-subscription-matrix button[title="بستن"]');
  await page.waitForTimeout(300);

  // 2. Pre-Invoice Builder Modal
  await page.click('button:has-text("ایجاد و صدور پیش‌فاکتور جدید")');
  await page.waitForTimeout(300);
  const invoiceModal = page.locator('#modal-vendor-invoice-builder');
  await expect(invoiceModal).toBeVisible();
  await page.screenshot({ path: 'verification/vendor_invoice_builder.png' });

  // Submit invoice
  await page.click('#modal-vendor-invoice-builder button[type="submit"]');
  await page.waitForTimeout(300);

  // 3. Billing History Drawer Toggle
  await page.click('button:has-text("تاریخچه پرداخت‌ها")');
  await page.waitForTimeout(300);
  const billingDrawer = page.locator('#vd-billing-history-drawer');
  await expect(billingDrawer).toBeVisible();

  // 4. Discount Preset Toggle
  await page.click('button:has-text("تغییر وضعیت فعال/غیرفعال")');
  await page.waitForTimeout(300);

  await page.screenshot({ path: 'verification/vendor_dashboard_complete.png' });
});
