import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  await page.goto('https://automationexercise.com/category_products');
  
  //steps
  //deslizar para ver productos
  await page.mouse.wheel(0, 500);
  //click en ver detalles del primer producto
  await page.locator("a[href='/product_details/1']").click();
//añadir 3 productos
await page.locator('#quantity').fill('3');
//añadir al carrito
await page.getByText('Add to cart').click();
//validate success message
await expect(page.locator('.modal-content')).toBeEnabled();
await expect(page.locator('.modal-header')).toContainText('Added!');
//verificar que el modal ya no es visible
await page.locator('.close-modal').click();


});