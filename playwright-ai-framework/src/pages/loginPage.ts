import { Page } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly username = '#user-name';
  readonly password = '#password';
  readonly loginBtn = '#login-button';
  readonly errorMsg = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(()=>{}),
      this.page.click(this.loginBtn)
    ]);
  }
}
