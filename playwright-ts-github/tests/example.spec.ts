import { test, expect } from '@playwright/test';

test('homepage tiene título y link Get started', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);

  const getStarted = page.getByRole('link', { name: /get started/i });
  await expect(getStarted).toBeVisible();
});
