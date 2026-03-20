import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and shows key portfolio content', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Dennis Hawran/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const impactStrip = page.locator('[aria-label]').filter({ hasText: /Unity|Unreal|Live Ops/i });
    await expect(impactStrip.first()).toBeVisible();
  });

  test('has a working projects navigation link', async ({ page }) => {
    await page.goto('/');

    const projectsLink = page.locator('a[href="/projects"]').first();
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
