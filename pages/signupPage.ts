import { Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the signup page
  async navigateToSignup() {
    await this.page.click('.KH34gk4');   //click on signin/signup drawdown menu 
	await this.page.click('[data-testid="signup-link"]');   //click on signup
  }

  // Fill in the signup form fields
  async fillSignupForm(email: string, firstName: string, lastName: string, password: string) {
	await this.page.fill('#Email', email);  // Email input selector
    await this.page.fill('#FirstName', firstName);  // Name input selector
    await this.page.fill('#LastName', lastName);  // Name input selector
    await this.page.fill('#Password', password);  // Password input selector
  }

  //setup DOB selection
  async selectDOBValue(value: string) {
    await this.page.selectOption('#BirthDay', value);
  }
   async fillDOBForm() {
    await this.page.click('#BirthDay');  // Submit Day Value
	await this.selectDOBValue('1');
  }
  //setup MOB selection
  async selectMOBValue(value: string) {
    await this.page.selectOption('#BirthMonth', value);
  }
  async fillMOBForm() {
    await this.page.click('#BirthMonth');  // Submit Month Value
	await this.selectMOBValue('2');
  }
  //setup YOB selection
  async selectYOBValue(value: string) {
    await this.page.selectOption('#BirthYear', value);
  }
  async fillYOBForm() {
    await this.page.click('#BirthYear');  // Submit Year selector
	await this.selectYOBValue('1992');
  }
  
 // agree to email communications
  async submitUserPreferences() {
    await this.page.click('#clear-all-checkbox-button');   
  }
  
  // Submit the signup form
  async submitSignupForm() {
    await this.page.click('#register');  // Submit button selector
  }
  
}


