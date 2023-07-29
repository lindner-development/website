import { test, expect } from '@playwright/test';

test.use({
    locale: 'en-US',
});

test('language navigation [en-US]', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/.*en/);
});

test.use({
    locale: 'de-DE',
});

test('language navigation [de-DE]', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/.*de/);
});