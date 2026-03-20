import { test, expect } from '@playwright/test';

const CORE_ROUTES = ['/', '/projects', '/about', '/cv', '/contact'] as const;

test.describe('Core route rendering', () => {
  for (const route of CORE_ROUTES) {
    test(`renders ${route}`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });
  }

  test('renders valid case-study route', async ({ page }) => {
    const response = await page.goto('/case-study/unthroned');
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole('heading', { level: 1, name: /unthroned/i })).toBeVisible();
    await expect(page.locator('#impact')).toBeVisible();
  });

  test('invalid case-study route returns 404', async ({ page }) => {
    const response = await page.goto('/case-study/not-a-real-slug');
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/not found|could not be found/i)).toBeVisible();
  });
});

test.describe('Projects mobile progressive disclosure', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test('show more/less reveals additional projects on mobile', async ({ page }) => {
    await page.goto('/projects');

    const cards = page.locator('.project-card');
    await expect(cards).toHaveCount(6);

    const toggle = page.locator('.show-more-btn');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(cards).toHaveCount(10);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(cards).toHaveCount(6);
  });
});

test.describe('Project card interaction by input mode', () => {
  test('desktop hover/fine pointer activates spotlight + tilt state', async ({ page }) => {
    await page.goto('/projects');
    const card = page.locator('.project-card').first();
    await expect(card).toBeVisible();

    await card.hover({ position: { x: 80, y: 80 } });

    const styles = await card.evaluate((el) => {
      const style = (el as HTMLElement).style;
      const computed = getComputedStyle(el as HTMLElement, '::after');
      return {
        tiltX: style.getPropertyValue('--tilt-x').trim(),
        tiltY: style.getPropertyValue('--tilt-y').trim(),
        spotlightX: style.getPropertyValue('--spotlight-x').trim(),
        spotlightY: style.getPropertyValue('--spotlight-y').trim(),
        afterOpacity: computed.opacity,
      };
    });

    expect(styles.tiltX).not.toBe('');
    expect(styles.tiltY).not.toBe('');
    expect(styles.spotlightX).not.toBe('');
    expect(styles.spotlightY).not.toBe('');
    expect(Number(styles.afterOpacity)).toBeGreaterThan(0);
  });

  test('keyboard focus has visible focus state and does not depend on hover spotlight', async ({ page }) => {
    await page.goto('/projects');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const focusedLink = page.locator('.project-card .primary-cta-link').first();
    await focusedLink.focus();
    await expect(focusedLink).toBeFocused();

    const card = page.locator('.project-card').first();

    const state = await card.evaluate((el) => {
      const style = (el as HTMLElement).style;
      const link = el.querySelector('.primary-cta-link') as HTMLElement | null;
      const cardStyles = getComputedStyle(el as HTMLElement);
      const linkStyles = link ? getComputedStyle(link) : null;
      return {
        spotlightX: style.getPropertyValue('--spotlight-x').trim(),
        spotlightY: style.getPropertyValue('--spotlight-y').trim(),
        borderColor: cardStyles.borderColor,
        linkColor: linkStyles?.color ?? '',
      };
    });

    expect(state.spotlightX).toBe('');
    expect(state.spotlightY).toBe('');
    expect(state.borderColor).not.toBe('rgb(38, 48, 69)');
    expect(state.linkColor).not.toBe('rgb(110, 231, 255)');
  });

  test('mobile touch does not show hover spotlight artifact on tap', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await context.newPage();

    await page.goto('/projects');
    const card = page.locator('.project-card').first();
    await expect(card).toBeVisible();

    await card.tap();

    const styles = await card.evaluate((el) => {
      const style = (el as HTMLElement).style;
      const after = getComputedStyle(el as HTMLElement, '::after');
      return {
        spotlightX: style.getPropertyValue('--spotlight-x').trim(),
        spotlightY: style.getPropertyValue('--spotlight-y').trim(),
        tiltX: style.getPropertyValue('--tilt-x').trim(),
        tiltY: style.getPropertyValue('--tilt-y').trim(),
        afterOpacity: after.opacity,
      };
    });

    expect(styles.spotlightX).toBe('');
    expect(styles.spotlightY).toBe('');
    expect(styles.tiltX).toBe('');
    expect(styles.tiltY).toBe('');
    expect(styles.afterOpacity).toBe('0');

    await context.close();
  });
});

test.describe('Spacing consistency smoke checks', () => {
  test('projects page has non-zero section and card rhythm gaps', async ({ page }) => {
    await page.goto('/projects');

    const spacing = await page.evaluate(() => {
      const sectionHeading = document.querySelector('.section-heading');
      const dualCta = document.querySelector('.dual-cta');
      const featuredSection = document.querySelector('section[aria-label]');
      const cards = Array.from(document.querySelectorAll('.project-card')).slice(0, 2);

      if (!sectionHeading || !dualCta || !featuredSection || cards.length < 2) {
        return null;
      }

      const headingRect = sectionHeading.getBoundingClientRect();
      const ctaRect = dualCta.getBoundingClientRect();
      const featuredRect = featuredSection.getBoundingClientRect();
      const firstCardRect = cards[0].getBoundingClientRect();
      const secondCardRect = cards[1].getBoundingClientRect();

      return {
        headingToCta: ctaRect.top - headingRect.bottom,
        ctaToFeatured: featuredRect.top - ctaRect.bottom,
        cardToCard: secondCardRect.top - firstCardRect.bottom,
      };
    });

    expect(spacing).not.toBeNull();
    expect(spacing!.headingToCta).toBeGreaterThan(0);
    expect(spacing!.ctaToFeatured).toBeGreaterThan(0);
    expect(spacing!.cardToCard).toBeGreaterThan(0);
  });

  test('case-study section heading/content blocks maintain non-zero internal spacing', async ({ page }) => {
    await page.goto('/case-study/unthroned');

    const gaps = await page.evaluate(() => {
      const section = document.querySelector('#challenge');
      if (!section) return null;

      const heading = section.querySelector('h2');
      const paragraph = section.querySelector('p');
      if (!heading || !paragraph) return null;

      const headingRect = heading.getBoundingClientRect();
      const paragraphRect = paragraph.getBoundingClientRect();
      return {
        headingToParagraph: paragraphRect.top - headingRect.bottom,
      };
    });

    expect(gaps).not.toBeNull();
    expect(gaps!.headingToParagraph).toBeGreaterThan(0);
  });
});
