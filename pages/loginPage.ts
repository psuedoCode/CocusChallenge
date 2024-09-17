
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //setting up the login scenario
  async login(username: string, password: string) {
	await this.page.click('.KH34gk4');   //click on signin/signup drawdown menu
	await this.page.click('.U32RJ0i');   //click on signin
    await this.page.fill('#EmailAddress', username);  // Email field selector
    await this.page.fill('#Password', password);      // Password field selector
    await this.page.click('#signin');                 // Sign-in button selector
  }
}


