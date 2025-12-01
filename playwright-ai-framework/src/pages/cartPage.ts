import { Page } from '@playwright/test';

export default class CartPage {
  readonly page: Page;
  readonly checkoutBtn = '[data-test="checkout"]';

  constructor(page: Page) {
    this.page = page;
  }

  async clickCheckout() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(()=>{}),
      this.page.click(this.checkoutBtn)
    ]);
  }
}
