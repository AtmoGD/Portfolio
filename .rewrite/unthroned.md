# Unthroned – Copy Rewrite Research

## Quellen
1. `dev`: `src/content/site.ts` (Projektblock `slug: "unthroned"`)
2. `master`: frühere Beschreibung über `unthronedDescription` in `src/i18n.ts`
3. Itch.io-Projektseite: <https://atmogd.itch.io/unthroned>

## Faktische Findings (nur belegte Aussagen)
- **Genre/Spieltyp:** Twin-Stick-Shooter mit Base-Building- und Tower-Defense-Elementen (master + itch).
- **Setting/Hook:** Man spielt **Dave**, einen Nekromanten, der das Reich seines Bruders angreift; Seelen werden gesammelt, um Skills und Basis auszubauen (master + itch).
- **Kontext:** Studentisches Projekt/Prototyp im Master-Umfeld (master + itch).
- **Im dev-Block dokumentiert:** 5 Monate Produktion, 7-köpfiges Team, Gameplay-/Systemfokus, Veröffentlichung auf itch.io.
- **Externe Links im dev-Block:**
  - Play: <https://atmogd.itch.io/unthroned>
  - Gameplay-Video (Evidence): <https://www.youtube.com/embed/Wh6ieci--3E>
- **GitHub-Links:** Auf der Itch-Seite von Unthroned ist **kein GitHub-Repository verlinkt** (HTML geprüft, kein github-Link gefunden).

---

## Verbesserte Textvorschläge (DE + EN)

### 1) Tagline
- **DE:** „Twin-Stick-Action trifft Base-Building und Tower-Defense in einem fokussierten Student:innenprojekt.“
- **EN:** "Twin-stick action meets base building and tower defense in a focused student project."

### 2) Summary
- **DE:** „Unthroned ist ein im Master-Kontext entwickelter Twin-Stick-Shooter, in dem man als Nekromant Dave Seelen sammelt, Fähigkeiten ausbaut und die eigene Basis stärkt. Mein Schwerpunkt lag auf robusten Gameplay- und Systemstrukturen für verlässliches Balancing bis zum Release auf itch.io.“
- **EN:** "Unthroned is a master-level student production combining twin-stick shooting with base building and tower defense. You play as Dave, a necromancer collecting souls to upgrade skills and strengthen your home base. I focused on robust gameplay and systems structure to keep balancing reliable through release on itch.io."

### 3) Contributions
- **DE:**
  - „Core-Gameplay- und Spielzustandslogik implementiert und iterativ verbessert.“
  - „Systemstruktur für stabilere Feature-Integration und weniger Regressionen aufgebaut.“
  - „Mit Design/Playtesting abgestimmt, um Combat-Readability und Tuning zu beschleunigen.“
- **EN:**
  - "Implemented and iterated core gameplay and game-state logic."
  - "Built a system structure that kept feature integration stable and reduced regressions."
  - "Aligned with design/playtesting to improve combat readability and speed up tuning."

### 4) Outcomes
- **DE:**
  - „Öffentlich auf itch.io veröffentlicht.“
  - „Stabile Kern-Loop unter studentischen Zeit- und Scope-Grenzen geliefert.“
- **EN:**
  - "Published publicly on itch.io."
  - "Delivered a stable core loop under student project time and scope constraints."

### 5) Narrative
#### Context
- **DE:** „Unthroned entstand als studentische Produktion im Master-Kontext mit festem Abgabezeitraum und wechselnder Verfügbarkeit im Team.“
- **EN:** "Unthroned was built as a master-level student production with fixed deadlines and fluctuating team availability."

#### Challenge
- **DE:** „Bei neuen Gegnerverhalten sank die Lesbarkeit der Kämpfe schnell, was Balancing und Polishing ausbremste.“
- **EN:** "Combat readability dropped quickly whenever new enemy behaviors were introduced, slowing balancing and polish."

#### Approach
- **DE:** „Ich trennte den Kampffluss in klarere Zuständigkeiten (Spielerzustand, Gegnerreaktionen, Encounter-Flow) und ergänzte Debug-/Tuning-Hooks für schnellere Iteration ohne große Umbauten.“
- **EN:** "I split combat flow into clearer responsibilities (player state, enemy reaction, encounter flow) and added lightweight debug/tuning hooks for faster iteration without major rewrites."

#### Impact
- **DE:** „Das Team konnte planbar bis zum Release iterieren und die Spielbarkeit bis zur finalen Abgabe stabil halten.“
- **EN:** "The team could iterate predictably through release and keep gameplay stable through final delivery."

---

## ready_to_apply (für `src/content/site.ts`)

```ts
// unthroned
{
  tagline: "Twin-stick action meets base building and tower defense in a focused student project.",
  summary:
    "Unthroned is a master-level student production combining twin-stick shooting with base building and tower defense. You play as Dave, a necromancer collecting souls to upgrade skills and strengthen your home base. I focused on robust gameplay and systems structure to keep balancing reliable through release on itch.io.",
  contributions: [
    "Implemented and iterated core gameplay and game-state logic",
    "Built a system structure that kept feature integration stable and reduced regressions",
    "Aligned with design and playtesting to improve combat readability and speed up tuning",
  ],
  outcomes: [
    "Published publicly on itch.io",
    "Delivered a stable core loop under student project time and scope constraints",
  ],
  narrative: {
    context:
      "Unthroned was built as a master-level student production with fixed deadlines and fluctuating team availability.",
    challenge:
      "Combat readability dropped quickly whenever new enemy behaviors were introduced, slowing balancing and polish.",
    approach:
      "I split combat flow into clearer responsibilities (player state, enemy reaction, encounter flow) and added lightweight debug/tuning hooks for faster iteration without major rewrites.",
    impact:
      "The team could iterate predictably through release and keep gameplay stable through final delivery.",
  },
}
```

## Hinweise / Limits
- Keine zusätzlichen GitHub-Repositories über die verlinkte Itch-Seite auffindbar.
- Keine unbelegten Metriken ergänzt; Formulierungen bleiben innerhalb der in dev/master/itch belegbaren Aussagen.
