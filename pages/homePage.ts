import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    await this.page.click('#onetrust-accept-btn-handler');
  }
  
  // Scroll down by a specific amount
  async scrollByAmount(amount: number) {
    await this.page.evaluate((scrollAmount) => {
      window.scrollBy(0, scrollAmount);
    }, amount);
  }
  
  //product search on homePage
  async searchProduct(product: string) {
    await this.page.fill('#chrome-search', product);
    await this.page.press('#chrome-search', 'Enter');
	await this.scrollByAmount(600);
	await this.page.click('#pta-product-206733855-5');
  }
  
  //women section on homePage
  async selectWOmenSection() {
    await this.page.click('.src-GlobalBanner-Button-Button_button');
	await this.scrollByAmount(600);
	await this.page.click('#pta-product-206037188-4');
  }
}
