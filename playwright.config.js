// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * Playwright configuration optimized for API-only testing.
 * No browsers are launched - this keeps execution fast and CI-friendly.
 *
 * Equivalent concept: TestNG suite XML or Maven Surefire plugin configuration.
 */
module.exports = defineConfig({
  testDir: './tests',

  /* Maximum time one test can run */
  timeout: 30000,

  /* Fail the build on CI if test.only is left in source code */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI to handle flakiness */
  retries: process.env.CI ? 2 : 0,

  /* Number of parallel workers */
  workers: process.env.CI ? 4 : undefined,

  /* Reporter configuration */
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  projects: [
    {
      name: 'api-tests',
      testDir: './tests/api',
      use: {
        extraHTTPHeaders: {
          'Accept': 'application/json',
        },
      },
    },
  ],
});
