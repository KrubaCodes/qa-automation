import { Page } from '@playwright/test';

export default class InventoryPage {
  readonly page: Page;
  readonly title = '.title';
  readonly addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  readonly cartIcon = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async validateLoggedIn() {
    await this.page.waitForSelector(this.title, { state: 'visible' });
  }

  async addItemToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(()=>{}),
      this.page.click(this.cartIcon)
    ]);
  }
}
