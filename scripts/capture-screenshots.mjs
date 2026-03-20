import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000';
const outDir = path.resolve(process.env.OUT_DIR || 'artifacts/round6');

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1366, height: 768 },
  { name: 'desktop', width: 1920, height: 1080 },
];

const routes = [
  { slug: 'home', path: '/' },
  { slug: 'projects', path: '/projects' },
  { slug: 'about', path: '/about' },
  { slug: 'cv', path: '/cv' },
  { slug: 'contact', path: '/contact' },
  { slug: 'case-unthroned', path: '/case-study/unthroned' },
  { slug: 'case-oasis', path: '/case-study/oasis' },
];

const langs = ['de', 'en'];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const lang of langs) {
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    await context.addInitScript((l) => {
      window.localStorage.setItem('portfolio-language', l);
    }, lang);
    const page = await context.newPage();

    for (const route of routes) {
      const url = `${baseURL}${route.path}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const target = path.join(outDir, `${lang}_${vp.name}_${route.slug}.png`);
      await page.screenshot({ path: target, fullPage: true });
      console.log(`saved ${target}`);
    }

    await context.close();
  }
}

await browser.close();
console.log('done');
