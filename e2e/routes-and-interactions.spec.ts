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
  });
});

test.describe('Projects mobile progressive disclosure', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test('show more/less reveals additional projects on mobile', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const page = await context.newPage();

    await page.goto('/projects');

    const cards = page.locator('.project-card');
    const toggle = page.locator('.show-more-btn');

    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    const initialCount = await cards.count();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(cards.count()).resolves.toBeGreaterThan(initialCount);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await context.close();
  });
});

test.describe('Mobile navigation drawer', () => {
  test('opens and closes via backdrop tap', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const page = await context.newPage();
    await page.goto('/');

    const menuToggle = page.locator('.menu-toggle');
    await expect(menuToggle).toBeVisible();

    await expect
      .poll(async () => {
        await menuToggle.click({ force: true });
        return menuToggle.getAttribute('aria-expanded');
      }, { timeout: 5000 })
      .toBe('true');

    await page.locator('.mobile-nav-backdrop').click({ force: true, position: { x: 10, y: 10 } });
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    await context.close();
  });
});

test.describe('Project card interaction by input mode', () => {
  test('desktop hover/fine pointer activates spotlight + tilt state', async ({ page }) => {
    await page.goto('/projects');
    const card = page.locator('.project-card').first();
    await expect(card).toBeVisible();

    await expect.poll(async () => card.getAttribute('data-pointer')).not.toBeNull();

    const box = await card.boundingBox();
    if (!box) throw new Error('card bounding box unavailable');
    await page.mouse.move(box.x + 20, box.y + 20);
    await page.mouse.move(box.x + 120, box.y + 90);

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
    await context.close();
  });
});

test.describe('Spacing consistency smoke checks', () => {
  test('projects page has non-zero section and card rhythm gaps', async ({ page }) => {
    await page.goto('/projects');

    const spacing = await page.evaluate(() => {
      const pageStack = document.querySelector('main .stack-lg');
      const firstCard = document.querySelector('.project-card');
      if (!pageStack || !firstCard) return null;

      const stackStyles = getComputedStyle(pageStack as HTMLElement);
      const cardStyles = getComputedStyle(firstCard as HTMLElement);

      return {
        sectionGap: Number.parseFloat(stackStyles.rowGap || stackStyles.gap || '0') || 0,
        cardInternalGap: Number.parseFloat(cardStyles.rowGap || cardStyles.gap || '0') || 0,
      };
    });

    expect(spacing).not.toBeNull();
    expect(spacing!.sectionGap).toBeGreaterThan(0);
    expect(spacing!.cardInternalGap).toBeGreaterThan(0);
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
