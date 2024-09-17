import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test('User adds an out of stock product to cart', async ({ page }) => {
  //initializing Page Objects
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  //navigating to langingPage
  await page.goto('/');
  await homePage.acceptCookies();  //Accepting all cookies
  await homePage.searchProduct('Shoes');    //shoes as a product of choice 
  await productPage.optionsOnShoeProduct(); //colour and size choices
  //Assertion
  await expect(await page.isVisible('text=Sign in/Join')).toBe(true);
});



