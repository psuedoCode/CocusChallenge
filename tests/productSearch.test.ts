import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';

test('User browse a product in the women section', async ({ page }) => {
  //initializing Page Objects
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  //navigating to langingPage
  await page.goto('/');
  await homePage.acceptCookies();    //Accepting all cookies
  await homePage.selectWOmenSection(); //one product out of the women section 
  await productPage.optionsOnProduct();     //colour and size choices
  //Assertion
  await expect(await page.isVisible('text=Navy')).toBe(true);   //colour of the browsed product
 
});

