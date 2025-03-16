import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  
  //steps
  //select input textbox is visible
  await expect(page.locator('#newButtonName')).toBeVisible();
  //select input and type text
  await page.locator('#newButtonName').fill('Playwright');
  await page.pause();
  //click button
  await page.locator('#updatingButton').click();
  //verify text button changed
  await expect(page.locator('#updatingButton')).toHaveText('Playwright');




});