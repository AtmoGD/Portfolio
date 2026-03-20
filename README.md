# Portfolio (Next.js)

Personal portfolio built with Next.js 14.

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open <http://localhost:3000>.

## Production build + run

```bash
npm run build
npm run start
```

## Quality checks

### Lint

```bash
npm run lint
```

### End-to-end tests (Playwright)

This repo uses Playwright with a production-style server (`next build` + `next start`) to keep tests close to real deployment behavior.

```bash
# one-shot CI/local run
npm run e2e

# interactive runner
npm run e2e:ui

# headed browser run
npm run e2e:headed

# open HTML report after a run
npm run e2e:report
```

Notes:
- Tests live in `e2e/`.
- Playwright config is in `playwright.config.ts`.

### Lighthouse CI audits

Lighthouse CI is configured for two key pages:
- `/`
- `/projects`

```bash
# build + collect + assert + upload temporary report URLs
npm run lh:autorun

# optional split commands
npm run lh:collect
npm run lh:assert
```

Config file: `lighthouserc.js`

The current assertion policy is intentionally pragmatic:
- Accessibility has a strict minimum (error on regression)
- Performance, SEO, and Best Practices are warning thresholds

This keeps audits useful in CI without overfailing on non-critical, noisy checks.
