import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1280, height: 900 });

  const filePath = `file://${path.resolve('index.html')}`;
  await page.goto(filePath);
  await page.waitForTimeout(1000);

  // 1. Screenshot homepage with hero search bar
  await page.screenshot({ path: 'verification/hero_search_homepage.png', fullPage: false });

  // 2. Fill search inputs
  await page.fill('#hero-search-input', 'کویر');
  await page.selectOption('#hero-city-select', 'استان یزد');
  await page.selectOption('#hero-cat-select', 'آتلیه عکاسی و فیلمبرداری');

  await page.screenshot({ path: 'verification/hero_search_filled.png', fullPage: false });

  // 3. Click search button
  await page.click('button:has-text("جستجوی سریع 🔍")');
  await page.waitForTimeout(1000);

  // 4. Screenshot directory view with filtered results
  await page.screenshot({ path: 'verification/hero_search_results_directory.png', fullPage: false });

  await browser.close();
  console.log('Hero Search Verification Screenshots captured successfully.');
})();
