# QA-Automation Portfolio

This repository is a portfolio of automation projects demonstrating leadership in QA automation.
It contains multiple projects showcasing best practices, frameworks, and automation utilities.

## Projects

**playwright-ai-framework**
   - Playwright + TypeScript
   - Page Object Model, fixtures, test data manager
   - AI test generation scaffold
   - 5 end-to-end tests hitting https://www.saucedemo.com
   - GitHub Actions workflow: `playwright-ai-framework/.github/workflows/playwright.yml`

## How to use locally

### Playwright project
```bash
cd playwright-ai-framework
npm install
npx playwright install
npm test
```
## CI / GitHub Actions
The project include GitHub Actions workflows that run on push and pull requests limited to their respective project folders.
