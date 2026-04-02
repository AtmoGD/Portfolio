# Pumpkin Harvest — Copy Rewrite Research

## Sources used
1. `dev` branch: `src/content/site.ts` (current `pumpkin-harvest` project block)
2. `master` branch: legacy project copy from:
   - `app/projects/page.tsx` (project card + itch link)
   - `src/i18n.ts` (`pumpkinHarvestDescription` in EN + DE)
3. Itch page: <https://atmogd.itch.io/pumpkin-harvest>

## Summary of findings (factual)
- The game is presented publicly as a **Cozy Fall Jam 2022** entry.
- Itch credits two creators: **Dennis Hawran (AtmoGD)** and **Joshua Hank (JoshntQ)**.
- Core loop on itch: **plant seeds → water → wait/grow → harvest → deliver pumpkins to customers**.
- Progression on itch: earn money to **upgrade farm/fields** and optionally buy a **truck**.
- Tone/positioning on itch: intentionally **cozy**, explicitly not focused on highscore/time pressure.
- Current `dev` portfolio block emphasizes gameplay feel/timing, but currently states **solo developer / 1-person team**, which conflicts with itch credits.

## GitHub repo check
- On the Pumpkin Harvest itch page, no relevant GitHub repository link was found.
- Direct scan of the project page HTML found **no github.com links**.

## Improved text suggestions (EN + DE)

### Tagline
- **EN:** Cozy farming loop with clear feedback and low-pressure progression
- **DE:** Gemütlicher Farming-Loop mit klarem Feedback und entschleunigter Progression

### Summary
- **EN:** A small game-jam project where players plant, water, harvest, and deliver pumpkins. The focus is a relaxing pace, readable interactions, and satisfying moment-to-moment feedback.
- **DE:** Ein kleines Game-Jam-Projekt, in dem Spieler*innen Kürbisse pflanzen, gießen, ernten und ausliefern. Fokus sind ein entspannter Spielfluss, gut lesbare Interaktionen und ein befriedigendes Moment-to-Moment-Feedback.

### Contributions
- **EN suggestions:**
  - Implemented and tuned the core harvest loop (planting, watering, harvesting, delivery)
  - Polished interaction timing and feedback cadence for clearer player flow
  - Integrated progression touches (earnings-based upgrades such as fields/truck)
- **DE suggestions:**
  - Den zentralen Harvest-Loop umgesetzt und getunt (Pflanzen, Gießen, Ernten, Ausliefern)
  - Interaktions-Timing und Feedback-Rhythmus für klareren Spielfluss verfeinert
  - Progressions-Elemente integriert (verdienstbasierte Upgrades wie Felder/Truck)

### Outcomes
- **EN suggestions:**
  - Shipped a public Cozy Fall Jam 2022 build on itch.io
  - Delivered a readable, low-pressure gameplay loop aligned with the game’s cozy intent
- **DE suggestions:**
  - Öffentlichen Cozy Fall Jam 2022 Build auf itch.io veröffentlicht
  - Einen gut lesbaren, entschleunigten Gameplay-Loop im Sinne des Cozy-Ansatzes geliefert

### Narrative
#### Context
- **EN:** Built during Cozy Fall Jam 2022 as a compact cozy farming game.
- **DE:** Entstanden im Cozy Fall Jam 2022 als kompaktes Cozy-Farming-Spiel.

#### Challenge
- **EN:** Keep the loop relaxing while still making each action feel meaningful and responsive.
- **DE:** Den Loop entspannt halten und gleichzeitig jede Aktion spürbar und responsiv machen.

#### Approach
- **EN:** Focused scope on one clear loop (grow and deliver pumpkins), then tuned timing, interaction readability, and progression beats.
- **DE:** Fokus auf einen klaren Kern-Loop (Kürbisse anbauen und liefern), anschließend Timing, Lesbarkeit der Interaktionen und Progressionsrhythmus geschärft.

#### Impact
- **EN:** Resulted in a coherent public jam build with approachable mechanics and a calm, cozy player experience.
- **DE:** Ergebnis war ein stimmiger öffentlicher Jam-Build mit zugänglichen Mechaniken und ruhigem Cozy-Spielgefühl.

---

## ready_to_apply (for `src/content/site.ts` fields)

```ts
{
  tagline: "Cozy farming loop with clear feedback and low-pressure progression",
  summary:
    "A small game-jam project where players plant, water, harvest, and deliver pumpkins. The focus is a relaxing pace, readable interactions, and satisfying moment-to-moment feedback.",
  contributions: [
    "Implemented and tuned the core harvest loop (planting, watering, harvesting, delivery)",
    "Polished interaction timing and feedback cadence for clearer player flow",
    "Integrated progression touches (earnings-based upgrades such as fields/truck)",
  ],
  outcomes: [
    "Shipped a public Cozy Fall Jam 2022 build on itch.io",
    "Delivered a readable, low-pressure gameplay loop aligned with the game’s cozy intent",
  ],
  narrative: {
    context:
      "Built during Cozy Fall Jam 2022 as a compact cozy farming game.",
    challenge:
      "Keep the loop relaxing while still making each action feel meaningful and responsive.",
    approach:
      "Focused scope on one clear loop (grow and deliver pumpkins), then tuned timing, interaction readability, and progression beats.",
    impact:
      "Resulted in a coherent public jam build with approachable mechanics and a calm, cozy player experience.",
  },
}
```

## Notes for application
- Recommend reconciling metadata fields (`proof.teamSize`, `proof.role`, `ownership`) with itch credits to avoid contradiction.
- Current rewrite keeps claims conservative and source-grounded.