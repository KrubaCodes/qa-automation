import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/testDataManager';

test('Valid user can log in', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await inventoryPage.validateLoggedIn();
  await expect(inventoryPage.page.locator(inventoryPage.title)).toHaveText('Products');
});
