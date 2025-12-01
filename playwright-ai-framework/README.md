# Playwright AI Framework

This project showcases a Playwright + TypeScript automation framework with:
- Page Object Model (POM)
- Fixtures
- Test data management
- AI test generation scaffold
- 5 real end-to-end tests against https://www.saucedemo.com

## Quickstart

1. Install dependencies:
```bash
cd playwright-ai-framework
npm install
npx playwright install
```

2. Run tests:
```bash
npm test
```

3. Generate an AI scaffold test (example):
```bash
npm run generate:test -- --url=https://www.saucedemo.com --objective="Login flow"
```
