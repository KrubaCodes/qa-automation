import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/testDataManager';

test('Invalid login shows error', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(users.invalid.username, users.invalid.password);
  await expect(loginPage.page.locator(loginPage.errorMsg)).toBeVisible();
});
