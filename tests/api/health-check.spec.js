// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Framework Smoke Test
 *
 * Purpose: Validates that Playwright API testing infrastructure is correctly
 * configured. This is the equivalent of a "ping" test in any enterprise
 * test suite - it proves the framework can make HTTP calls and assert responses.
 *
 * We use JSONPlaceholder as a stable public API for framework validation.
 * In production, this would hit your service's /health or /actuator/health endpoint.
 */
test.describe('Framework Health Check', () => {

  test('should make a successful GET request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
    expect(body).toHaveProperty('userId');
  });

  test('should validate response headers', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
  });

});
