import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/testDataManager';

test('User can add item to cart', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await expect(inventoryPage.page.locator('.cart_item')).toHaveCount(1);
});
