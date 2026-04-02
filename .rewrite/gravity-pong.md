# Gravity Pong – Rewrite Research (dev branch)

## 1) Source findings (factual)

### A) Current `dev` entry (`src/content/site.ts`)
- Current positioning: physics remix of Pong, prototype, 2-week solo experiment.
- Current stack includes `Unity`, `Machine Learning`, `Gameplay`.
- Current copy already claims: gravity-dependent logic, tuning for readable rallies, possible ML-assisted balancing.

### B) `master` branch legacy copy
- In `master`, the project card uses `gravityPongDescription` from `src/i18n.ts`.
- Legacy EN text states:
  - Pong with a twist
  - Ball affected by gravity
  - Paddles controlled by a machine-learning algorithm
  - Built in Unity with Unity ML-Agents toolkit
- Legacy DE text says the same in German.

### C) External sources
- Itch page: <https://atmogd.itch.io/gravity-pong>
  - Gravity changes after random intervals.
  - Green indicator bar (top/bottom) shows pull direction.
  - Ball speed increases over time.
  - Supports local play vs friends or AI.
  - Notes AI behavior limitation (“responding after the ball hit the enemy paddle”).
- Likely relevant GitHub repo (public): <https://github.com/AtmoGD/GPong>
  - Unity/C# repository.
  - Contains `Assets/ML-Agents/...` ONNX models and timers.
  - `EnemyController.cs` uses `Unity.MLAgents` and `Agent`.
  - `LevelController.cs` shows randomized gravity direction switching and increasing timescale.

## 2) Suggested improved copy (EN + DE)

### Tagline
- **EN:** `Pong with shifting gravity and ML-driven opponents`
- **DE:** `Pong mit wechselnder Schwerkraft und ML-gesteuerten Gegnern`

### Summary
- **EN:** `A Unity prototype that reimagines Pong with randomly flipping gravity, rising ball speed, and optional AI paddles trained with Unity ML-Agents.`
- **DE:** `Ein Unity-Prototyp, der Pong mit zufällig wechselnder Schwerkraft, steigender Ballgeschwindigkeit und optionalen KI-Paddles (Unity ML-Agents) neu interpretiert.`

### Contributions
- **EN:**
  1. `Implemented gravity-flip match logic with visual direction indicators for readability.`
  2. `Built and tuned core rally systems (rebound behavior, pacing, speed scaling).`
  3. `Integrated ML-Agents-based paddle opponents and exposed difficulty-related behavior parameters.`
- **DE:**
  1. `Logik für wechselnde Schwerkraft inklusive visueller Richtungsindikatoren umgesetzt.`
  2. `Kernsysteme der Ballwechsel (Abprallverhalten, Pace, Geschwindigkeitsanstieg) gebaut und getunt.`
  3. `ML-Agents-basierte Paddle-Gegner integriert und verhaltensrelevante Schwierigkeitsparameter angebunden.`

### Outcomes
- **EN:**
  1. `Validated a playable gravity-variant Pong ruleset with clearer rally readability.`
  2. `Delivered both local multiplayer and AI opponent modes in a public prototype build.`
- **DE:**
  1. `Einen spielbaren Pong-Regelsatz mit variabler Schwerkraft und besserer Rally-Lesbarkeit validiert.`
  2. `Lokalen Multiplayer und KI-Gegnermodus in einem öffentlich spielbaren Prototyp bereitgestellt.`

### Narrative
- **Context**
  - **EN:** `Gravity Pong started as a compact Unity experiment to test whether a familiar arcade loop could stay readable under constantly changing physical conditions.`
  - **DE:** `Gravity Pong begann als kompaktes Unity-Experiment mit der Frage, ob ein vertrauter Arcade-Loop trotz ständig wechselnder physikalischer Bedingungen gut lesbar bleibt.`
- **Challenge**
  - **EN:** `Random gravity shifts can quickly feel unfair, especially when rally speed ramps up. The design challenge was to preserve surprise without turning matches into chaos.`
  - **DE:** `Zufällige Schwerkraftwechsel können sich schnell unfair anfühlen – besonders bei steigender Rally-Geschwindigkeit. Die Herausforderung war, Überraschung zu erhalten, ohne Matches chaotisch werden zu lassen.`
- **Approach**
  - **EN:** `I combined timed gravity inversions with explicit top/bottom direction indicators, tuned bounce and speed behavior, and added AI paddles via Unity ML-Agents to test solo and competitive play patterns.`
  - **DE:** `Ich habe zeitgesteuerte Schwerkraft-Inversionen mit klaren Richtungsindikatoren (oben/unten) kombiniert, Abprall- und Geschwindigkeitsverhalten getunt und KI-Paddles über Unity ML-Agents integriert, um Solo- und Wettkampf-Patterns zu testen.`
- **Impact**
  - **EN:** `The prototype established a clear, replayable game feel for a gravity-driven Pong variant and demonstrated a practical base for further balancing and polish.`
  - **DE:** `Der Prototyp etablierte ein klares, wiederholbar spielbares Gefühl für eine schwerkraftgetriebene Pong-Variante und schuf eine belastbare Basis für weiteres Balancing und Polishing.`

---

## 3) ready_to_apply (for `src/content/site.ts`)

```ts
{
  slug: "gravity-pong",
  title: "Gravity Pong",
  tagline: "Pong with shifting gravity and ML-driven opponents",
  summary:
    "A Unity prototype that reimagines Pong with randomly flipping gravity, rising ball speed, and optional AI paddles trained with Unity ML-Agents.",
  year: "2021",
  status: "Prototype",
  // keep existing cover/stack/roles/proof links as-is unless you want a broader refactor
  contributions: [
    "Implemented gravity-flip match logic with visual direction indicators for readability",
    "Built and tuned core rally systems (rebound behavior, pacing, speed scaling)",
    "Integrated ML-Agents-based paddle opponents and exposed difficulty-related behavior parameters",
  ],
  outcomes: [
    "Validated a playable gravity-variant Pong ruleset with clearer rally readability",
    "Delivered local multiplayer and AI-opponent modes in a public prototype build",
  ],
  narrative: {
    context:
      "Gravity Pong started as a compact Unity experiment to test whether a familiar arcade loop could stay readable under constantly changing physical conditions.",
    challenge:
      "Random gravity shifts can quickly feel unfair, especially when rally speed ramps up. The design challenge was to preserve surprise without turning matches into chaos.",
    approach:
      "I combined timed gravity inversions with explicit top/bottom direction indicators, tuned bounce and speed behavior, and added AI paddles via Unity ML-Agents to test solo and competitive play patterns.",
    impact:
      "The prototype established a clear, replayable game feel for a gravity-driven Pong variant and demonstrated a practical base for further balancing and polish.",
  },
}
```

## Notes / caveats
- No access denial occurred for the likely relevant repo (`AtmoGD/GPong` is publicly reachable via GitHub API).
- To stay factual, I avoided unsupported claims like metrics, user counts, or formal performance benchmarks.
