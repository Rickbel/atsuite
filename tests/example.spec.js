import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/');
  await page.getByRole('link', { name: 'Search Pens' }).click();
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/ozb1l\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.goto('https://codepen.io/');
  await page.locator('[data-test-id="search-input"]').click();
  await page.locator('[data-test-id="search-input"]').fill('chicken');
  await page.locator('[data-test-id="search-input"]').press('Enter');
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/50ry8\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.goto('https://codepen.io/search/pens?q=chicken');
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/mjszy\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.goto('https://codepen.io/');
});