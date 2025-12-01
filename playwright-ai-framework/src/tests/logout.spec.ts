import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/testDataManager';

test('User can logout', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);

  await inventoryPage.page.click('#react-burger-menu-btn');
  await inventoryPage.page.click('#logout_sidebar_link');

  await expect(loginPage.page.locator(loginPage.loginBtn)).toBeVisible();
});
