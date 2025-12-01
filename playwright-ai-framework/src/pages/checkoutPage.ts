import { Page } from '@playwright/test';

export default class CheckoutPage {
  readonly page: Page;
  readonly firstName = '#first-name';
  readonly lastName = '#last-name';
  readonly postalCode = '#postal-code';
  readonly continueBtn = '#continue';
  readonly finishBtn = '#finish';
  readonly confirmation = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async checkoutFlow(first='John', last='Doe', zip='12345') {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(()=>{}),
      this.page.click(this.continueBtn)
    ]);
    await this.page.click(this.finishBtn);
  }
}
