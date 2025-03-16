import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.locator('#title'); //id
  await page.locator('.alert'); //clase
  await page.locator('a.navbar-brand').click(); //etiqueta
  //await page.getByText('Aristotle').click();
  //await page.locator('text=Aristotle').click();
  //await page.getByRole('link', { name: 'Resources' }).click();
  //await page.getByRole('link', { name: 'Home' }).click();
  //await page.getByRole('link', { name: 'Click' }).click();
  //await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});