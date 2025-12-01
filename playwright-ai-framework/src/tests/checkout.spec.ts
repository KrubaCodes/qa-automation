import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/testDataManager';

test('User can complete checkout', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await cartPage.clickCheckout();
  await checkoutPage.checkoutFlow();
  await expect(checkoutPage.page.locator(checkoutPage.confirmation)).toHaveText('THANK YOU FOR YOUR ORDER');
});
