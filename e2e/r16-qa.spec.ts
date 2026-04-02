import { test, expect } from '@playwright/test';

test.describe('R16 mobile polish QA', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test('mobile hero is compact with trust signal + clearer CTA hierarchy + earlier projects teaser', async ({ page }) => {
    await page.goto('/');

    const hero = page.locator('.hero').first();
    await expect(hero).toBeVisible();

    await expect(page.locator('.hero-headline-mobile')).toBeVisible();
    await expect(page.locator('.hero-headline-desktop')).toBeHidden();

    const trust = page.locator('.hero-trust-line');
    await expect(trust).toBeVisible();

    await expect(page.locator('.hero-intro-copy')).toBeHidden();
    await expect(page.locator('.hero-impact-strip')).toBeHidden();
    await expect(page.locator('.status-rail')).toBeHidden();

    const primary = page.locator('.hero .dual-cta .button').first();
    const secondary = page.locator('.hero .dual-cta .button-secondary').first();
    await expect(primary).toBeVisible();
    await expect(secondary).toBeVisible();

    const buttonStyles = await primary.evaluate((el) => {
      const cs = getComputedStyle(el);
      return { boxShadow: cs.boxShadow };
    });
    const secondaryStyles = await secondary.evaluate((el) => {
      const cs = getComputedStyle(el);
      return { boxShadow: cs.boxShadow };
    });
    expect(buttonStyles.boxShadow).not.toBe('none');
    expect(secondaryStyles.boxShadow).toBe('none');

    const heroBottom = await hero.evaluate((el) => el.getBoundingClientRect().bottom);
    const featuredTop = await page.locator('h2').filter({ hasText: /Featured projects|Hervorgehobene Projekte/i }).first().evaluate((el) => el.getBoundingClientRect().top);
    expect(featuredTop - heroBottom).toBeLessThan(220);
  });

  test('project-card body text is readable on mobile', async ({ page }) => {
    await page.goto('/projects');
    const body = page.locator('.project-card .project-head > .stack-md p').nth(1).first();
    await expect(body).toBeVisible();

    const metrics = await body.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        fontSize: Number.parseFloat(cs.fontSize),
        lineHeight: Number.parseFloat(cs.lineHeight),
      };
    });

    expect(metrics.fontSize).toBeGreaterThanOrEqual(15.5);
    expect(metrics.lineHeight).toBeGreaterThanOrEqual(25);
  });

  test('locale switch still works and nav still works on mobile', async ({ page }) => {
    await page.goto('/');

    await page.locator('.menu-toggle').click();
    await page.getByRole('radio', { name: /switch to german|auf deutsch/i }).click();
    await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.mobile-nav-links .nav-link').first()).toContainText(/Start|Home/i);

    await page.getByRole('link', { name: /projekte|projects/i }).first().click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
