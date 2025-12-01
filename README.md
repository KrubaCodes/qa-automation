# QA-Automation Portfolio

This repository is a portfolio of automation projects demonstrating leadership in QA automation.
It contains multiple projects showcasing best practices, frameworks, and automation utilities.

## Projects

1. **playwright-ai-framework**
   - Playwright + TypeScript
   - Page Object Model, fixtures, test data manager
   - AI test generation scaffold
   - 5 end-to-end tests hitting https://www.saucedemo.com
   - GitHub Actions workflow: `playwright-ai-framework/.github/workflows/playwright.yml`

2. **api-automation**
   - Jest + Axios API tests
   - Swagger-to-tests generator script that pulls an OpenAPI JSON and emits basic test stubs
   - GitHub Actions workflow: `api-automation/.github/workflows/api.yml`

## How to use locally

### Playwright project
```bash
cd playwright-ai-framework
npm install
npx playwright install
npm test
```

### API project
```bash
cd api-automation
npm install
npm test
# generate tests from swagger (network required)
npm run generate:swagger
```

## CI / GitHub Actions
Both projects include GitHub Actions workflows that run on push and pull requests limited to their respective project folders.

## Notes & Next steps
- The AI generator included is a scaffold; replace the placeholder with your preferred LLM CLI or API.
- The swagger-to-tests script is a generator demo; you can improve data-driven parameter handling and authentication support.
- Consider adding: centralized CI reporting, test flakiness detection, dependency scanning, and example secrets handling.

---

If you want, I can:
- Commit this repo to a new GitHub repository for you (I can't push without your token) or provide the git commands to do so.
- Add more projects (Cypress, mobile test, security scan POC).
- Expand CI with matrix runs and annotation reporting.
