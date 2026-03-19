# Portfolio MVP Implementation Plan (Dev Branch)

## 1) Product Goal
Build a premium, dark-first portfolio optimized for recruiter scan speed and proof of contribution.

### Positioning
- Core message: **I build playable systems** (gameplay + technical design + implementation quality).
- Visual tone: focused, modern, high-contrast, restrained motion.
- UX principle: show evidence fast (role, contribution, outcomes, links).

## 2) MVP Scope (Shippable)
Pages:
- Home (`/`)
- Projects (`/projects`)
- Case Study Template (`/case-study/[slug]`)
- About/CV (`/about`)
- Contact (`/contact`)

Deferred:
- heavy/parallax interactions
- multilingual layer refresh
- CMS integration

## 3) Architecture
### App framework
- Next.js App Router (existing project)
- Server components by default
- Static in-repo content model for maintainability

### Folder additions
- `src/types/project.ts` – type-safe project schema
- `src/content/site.ts` – author profile + project data source
- `components/site-shell.tsx` – top nav + layout shell

### Route map
- `/` Home (value proposition + selected work + CTA)
- `/projects` Full project index with contribution metadata
- `/case-study/[slug]` Narrative template driven by project data
- `/about` Career profile + skills + timeline
- `/contact` Reliable contact paths (email + LinkedIn + itch + GitHub)
- `/cv` redirects to `/about` for backward compatibility

## 4) Data Model
`Project` type:
- `slug`, `title`, `tagline`
- `summary`, `year`, `status`
- `stack[]`
- `roles[]`
- `contributions[]`
- `outcomes[]`
- `featured` boolean
- optional links: `playUrl`, `videoUrl`, `repoUrl`, `detailUrl`
- optional image: `cover`

Why:
- supports recruiter scan (role + impact)
- supports storytelling detail page
- supports future filters/tags without refactor

## 5) Content Structure
### Home
- Hero: name, positioning, quick proof chips
- "Selected systems" cards (featured projects)
- CTA row: view all projects + contact

### Projects
- Intro + all project cards
- Each card includes:
  - short summary
  - stack/roles
  - explicit contribution bullets
  - outcomes
  - links + case study entry

### Case Study
Template sections:
- context
- responsibilities
- system decisions
- implementation highlights
- outcomes
- links

### About
- profile narrative
- strengths list
- compact timeline
- skills grouped (engines, languages, tools)

### Contact
- direct email mailto
- professional links
- expected response window

## 6) Design Tokens + UI Decisions
In `app/globals.css`:
- semantic color tokens (dark-first)
- spacing scale
- radius + shadow tokens
- readable typography scale

Interaction design:
- subtle card hover lift + border glow
- accessible focus ring
- no motion-heavy effects

Accessibility baseline:
- WCAG-aware contrast
- keyboard-focus states
- semantic headings/landmarks

Performance baseline:
- minimal client JS
- Next/Image where practical
- no heavy animation libs for MVP

## 7) Implementation Task Breakdown
1. Replace legacy shell with unified `SiteShell` navigation.
2. Create typed content layer (`Project`, profile, links).
3. Rebuild Home page with hero + featured work.
4. Rebuild Projects page with contribution-first cards.
5. Implement dynamic Case Study route (`[slug]`).
6. Rebuild About page and redirect `/cv` to `/about`.
7. Rebuild Contact page around reliable channels.
8. Refresh global theme/CSS for premium dark-first look.
9. Run lint/build and fix issues.

## 8) Vertical Slice Priority (if time constrained)
- Complete `/`, `/projects`, `/case-study/[slug]` with shared content model.
- Keep `/about` and `/contact` simple but functional.
- Defer polish details and micro-copy tuning.

## 9) Expected Follow-ups (Post-MVP)
- add filtering/sorting on projects
- richer case-study modules (media gallery, architecture diagrams)
- downloadable one-page CV PDF
- optional CMS/MDX content ingestion
- analytics for recruiter behavior (privacy-safe)
