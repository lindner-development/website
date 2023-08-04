import { test, expect } from '@playwright/test';

test.describe("When locale is set to en-US", () => {
    test.use({
        locale: 'en-US',
        timezoneId: 'America/New_York',
    });

    test('GET / redirects to /en/', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/.*en/);
    });
})

test.describe("When locale is set to de-DE", () => {
    test.use({
        locale: 'de-DE',
        timezoneId: 'Europe/Berlin',
    });

    test('GET / redirects to /de/', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/.*de/);
    });
})