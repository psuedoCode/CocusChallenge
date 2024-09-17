import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //seting a specific shoe size for product search testcase
  async selectShoeSizeByValue(value: string) {
    await this.page.selectOption('#variantSelector', value);
  }
  //initializing a specific shoe size for product search testcase
  async optionsOnProduct() {
    await this.page.click('#variantSelector');
	await this.selectShoeSizeByValue('206037203');
  }
  
  //initializing a specific size for women product out of stock testcase
  async optionsOnShoeProduct(){
    await this.page.click('#variantSelector');
	await this.selectShoeSizeByValue('206733858');
	await this.page.click('#back-in-stock-button');
  }
}
