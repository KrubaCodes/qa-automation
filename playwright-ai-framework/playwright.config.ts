import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    actionTimeout: 10000,
    baseURL: 'https://www.saucedemo.com'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
  reporter: [['github'], ['html', { open: 'never' }]]
});
