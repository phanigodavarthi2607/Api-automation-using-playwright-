# Playwright API Automation Framework

Enterprise-grade API automation framework built with Playwright and JavaScript.

## Tech Stack

- **Runtime:** Node.js >= 18
- **Test Framework:** Playwright Test
- **Language:** JavaScript

## Quick Start

```bash
# Install dependencies
npm install

# Run all API tests
npm run test:api

# View HTML report
npm run test:report
```

## Project Structure

```
├── playwright.config.js    # Framework configuration
├── tests/
│   └── api/                # API test specifications
├── package.json            # Dependencies and scripts
└── .gitignore              # Git exclusions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:api` | Run API tests only |
| `npm run test:report` | Open HTML report |
