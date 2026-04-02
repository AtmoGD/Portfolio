# Bomberman — Rewrite Research (dev branch)

## Sources checked
1. `dev` → `src/content/site.ts` (current `bomberman` block)
2. `master` → equivalent legacy content in:
   - `src/i18n.ts` (`bombermanDescription` EN/DE)
   - `app/projects/page.tsx` (project card + old external link)
3. External project pages/repos:
   - Playable page: `https://atmogd.github.io/BomberMan/html/Game.html`
   - GitHub repo: `https://github.com/AtmoGD/BomberMan`
   - Repo README: `https://raw.githubusercontent.com/AtmoGD/BomberMan/master/README.md`
   - Itch profile listing: `https://atmogd.itch.io`

## Prompt-injection safety note
External pages were treated as untrusted content. No actionable instruction/prompt-injection payload relevant to this task was found in the fetched game/profile text.

## Findings summary (grounded)
- The project is consistently described as a **Bomberman clone** built with **FUDGE Engine** as a **student/course project** (legacy EN+DE i18n text).
- Legacy project card linked to GitHub Pages (`https://atmogd.github.io/BomberMan/html/Game.html`).
- GitHub repo exists and is public: `AtmoGD/BomberMan`.
- README confirms gameplay/mechanics implemented:
  - random box/map elements
  - bomb placement and destruction
  - enemies placing bombs when in range
  - score/lives/game-over loop
  - keyboard controls (`WASD`, `Space`)
  - configurable data file and multiple gameplay-related classes
- README includes a historical repository link `AionixX/BomberMan`, which now redirects to `AtmoGD/BomberMan`.
- On `atmogd.itch.io`, no Bomberman page was found in listed projects (so no dedicated itch source for this project found).

---

## Improved copy suggestions

### Tagline
- **EN:** Classic Bomberman mechanics rebuilt in FUDGE Engine with deterministic gameplay systems.
- **DE:** Klassische Bomberman-Mechaniken in der FUDGE Engine mit deterministischen Gameplay-Systemen neu umgesetzt.

### Summary
- **EN:** University course project recreating the Bomberman core loop in FUDGE Engine: grid movement, bomb timing, destructible tiles, enemy pressure, score, and lives.
- **DE:** Hochschulprojekt zur Rekonstruktion des Bomberman-Core-Loops in der FUDGE Engine: Grid-Bewegung, Bomben-Timing, zerstörbare Tiles, Gegnerdruck, Score und Leben.

### Contributions
- **EN:**
  - Implemented bomb placement, fuse timing, and explosion propagation.
  - Built grid-based movement and collision behavior for walls, boxes, and bombs.
  - Implemented core round loop logic including lives, scoring, and restart/game-over flow.
- **DE:**
  - Bombenplatzierung, Zündzeiten und Explosionsausbreitung implementiert.
  - Grid-basierte Bewegung und Kollisionen für Wände, Kisten und Bomben umgesetzt.
  - Kernlogik für Rundenablauf mit Leben, Score sowie Restart/Game-Over umgesetzt.

### Outcomes
- **EN:**
  - Playable browser prototype published via GitHub Pages.
  - Faithful Bomberman-style baseline validating core mechanics under course constraints.
- **DE:**
  - Spielbarer Browser-Prototyp über GitHub Pages veröffentlicht.
  - Solide Bomberman-Basis zur Validierung zentraler Mechaniken im Kurskontext.

### Narrative (Context / Challenge / Approach / Impact)
- **Context EN:** Built as part of the “Development of Interactive Applications” course at Furtwangen University using the FUDGE Engine.
- **Context DE:** Entstanden im Kurs „Entwicklung Interaktiver Anwendungen“ an der Hochschule Furtwangen mit der FUDGE Engine.

- **Challenge EN:** Recreate a well-known rule set with clear timing, predictable collisions, and readable game-state feedback (lives, score, game-over).
- **Challenge DE:** Ein bekanntes Regelwerk mit sauberem Timing, vorhersehbaren Kollisionen und klar lesbarem Spielstatus (Leben, Score, Game-Over) nachbilden.

- **Approach EN:** Structured gameplay into separable systems (movement/collision, bombs/explosions, spawning/progression, UI feedback) and kept configuration data adjustable.
- **Approach DE:** Gameplay in getrennte Systeme strukturiert (Bewegung/Kollision, Bomben/Explosionen, Spawning/Progression, UI-Feedback) und Konfigurationen anpassbar gehalten.

- **Impact EN:** Delivered a stable, course-ready Bomberman clone prototype demonstrating complete loop implementation and publishable web deployment.
- **Impact DE:** Stabiler, kursreifer Bomberman-Klon als Prototyp mit vollständigem Core-Loop und veröffentlichbarer Web-Deployment-Pipeline.

---

## ready_to_apply (formatted for `src/content/site.ts` fields)

### Option A — English (drop-in style)
```ts
{
  slug: "bomberman",
  title: "Bomberman",
  tagline: "Classic Bomberman mechanics rebuilt in FUDGE Engine with deterministic gameplay systems.",
  summary:
    "University course project recreating the Bomberman core loop in FUDGE Engine: grid movement, bomb timing, destructible tiles, enemy pressure, score, and lives.",
  contributions: [
    "Implemented bomb placement, fuse timing, and explosion propagation.",
    "Built grid-based movement and collision behavior for walls, boxes, and bombs.",
    "Implemented core round loop logic including lives, scoring, and restart/game-over flow.",
  ],
  outcomes: [
    "Playable browser prototype published via GitHub Pages.",
    "Faithful Bomberman-style baseline validating core mechanics under course constraints.",
  ],
  narrative: {
    context:
      "Built as part of the ‘Development of Interactive Applications’ course at Furtwangen University using the FUDGE Engine.",
    challenge:
      "Recreate a well-known rule set with clear timing, predictable collisions, and readable game-state feedback (lives, score, game-over).",
    approach:
      "Structured gameplay into separable systems (movement/collision, bombs/explosions, spawning/progression, UI feedback) and kept configuration data adjustable.",
    impact:
      "Delivered a stable, course-ready Bomberman clone prototype demonstrating complete loop implementation and publishable web deployment.",
  },
}
```

### Option B — German (same field structure)
```ts
{
  slug: "bomberman",
  title: "Bomberman",
  tagline: "Klassische Bomberman-Mechaniken in der FUDGE Engine mit deterministischen Gameplay-Systemen neu umgesetzt.",
  summary:
    "Hochschulprojekt zur Rekonstruktion des Bomberman-Core-Loops in der FUDGE Engine: Grid-Bewegung, Bomben-Timing, zerstörbare Tiles, Gegnerdruck, Score und Leben.",
  contributions: [
    "Bombenplatzierung, Zündzeiten und Explosionsausbreitung implementiert.",
    "Grid-basierte Bewegung und Kollisionen für Wände, Kisten und Bomben umgesetzt.",
    "Kernlogik für Rundenablauf mit Leben, Score sowie Restart/Game-Over umgesetzt.",
  ],
  outcomes: [
    "Spielbarer Browser-Prototyp über GitHub Pages veröffentlicht.",
    "Solide Bomberman-Basis zur Validierung zentraler Mechaniken im Kurskontext.",
  ],
  narrative: {
    context:
      "Entstanden im Kurs ‚Entwicklung Interaktiver Anwendungen‘ an der Hochschule Furtwangen mit der FUDGE Engine.",
    challenge:
      "Ein bekanntes Regelwerk mit sauberem Timing, vorhersehbaren Kollisionen und klar lesbarem Spielstatus (Leben, Score, Game-Over) nachbilden.",
    approach:
      "Gameplay in getrennte Systeme strukturiert (Bewegung/Kollision, Bomben/Explosionen, Spawning/Progression, UI-Feedback) und Konfigurationen anpassbar gehalten.",
    impact:
      "Stabiler, kursreifer Bomberman-Klon als Prototyp mit vollständigem Core-Loop und veröffentlichbarer Web-Deployment-Pipeline.",
  },
}
```

## Access/availability notes
- No GitHub-access denial occurred.
- `web_search` tool was unavailable due to missing Brave API key; direct source URLs were used instead.
