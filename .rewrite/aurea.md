# Aurea — Rewrite Research (dev branch)

## Sources checked
1. **Current dev data**: `src/content/site.ts` (project block `slug: "aurea"`)
2. **master branch reference**:
   - `master:app/projects/page.tsx` (Aurea card + link)
   - `master:src/i18n.ts` (`aureaDescription` EN/DE)
3. **External links**:
   - YouTube teaser from master: `https://www.youtube.com/watch?v=t9RwqJnLjy8`
   - oEmbed metadata for that video: title **"AUREA GameTrailer"**, author **Nick Häcker**
   - itch profile likely tied to portfolio projects: `https://atmogd.itch.io`

## Factual findings summary
- Aurea is consistently described as a **student project** and **AR multiplayer game** for **smartphones**.
- Tech/tools backed by sources:
  - Unity (master badges + old description)
  - AR on mobile (dev + master)
  - Low-poly style (master i18n)
  - Blender + Maya for models (master i18n)
- Dev branch currently frames this as a **4-person semester prototype** with a complete playable slice.
- master branch included a **gameplay teaser link (YouTube)** but not a GitHub repository.
- On the referenced itch creator page, I did **not** find a dedicated Aurea game page.

## External access / repo availability
- No linked or clearly attributable GitHub repo for Aurea was found in the inspected source files and linked pages.
- If a repo exists privately, it is not discoverable from available project links.

---

## Improved copy suggestions (EN + DE)

### Tagline
- **EN:** AR multiplayer prototype that brings low-poly game moments into your living room.
- **DE:** AR-Multiplayer-Prototyp, das Low-Poly-Spielmomente ins Wohnzimmer holt.

### Summary
- **EN:** Aurea is a Unity-based student project exploring shared AR gameplay on smartphones. Built as a semester prototype in a 4-person team, it focuses on clear onboarding, stable interaction flow, and a stylized low-poly presentation.
- **DE:** Aurea ist ein Unity-basiertes Studienprojekt, das gemeinsames AR-Gameplay auf Smartphones untersucht. Als Semester-Prototyp in einem 4er-Team entwickelt, liegt der Fokus auf klarem Onboarding, stabilem Interaktionsfluss und einem stilisierten Low-Poly-Look.

### Contributions
- **EN:**
  - Implemented mobile AR interaction flow and core gameplay logic.
  - Integrated and optimized production assets for reliable device performance.
  - Supported pacing and onboarding decisions for first-time AR users.
- **DE:**
  - Mobile AR-Interaktionen und zentrale Gameplay-Logik umgesetzt.
  - Produktions-Assets integriert und für stabile Laufzeit auf Geräten optimiert.
  - Pacing und Onboarding für den Einstieg in AR aktiv mitgestaltet.

### Outcomes
- **EN:**
  - Delivered a playable multiplayer AR prototype within semester scope.
  - Validated that social interaction can be communicated clearly in a low-poly AR setup.
- **DE:**
  - Ein spielbarer Multiplayer-AR-Prototyp wurde im Semesterrahmen fertiggestellt.
  - Das Konzept bestätigte, dass soziale Interaktion im Low-Poly-AR-Setup verständlich vermittelbar ist.

### Narrative
#### Context
- **EN:** Created as a student project to test how shared AR interactions work on everyday smartphones.
- **DE:** Entstanden als Studienprojekt, um zu testen, wie gemeinsames AR-Gameplay auf alltäglichen Smartphones funktioniert.

#### Challenge
- **EN:** Keep interactions readable and performance stable while multiple players share an AR play space.
- **DE:** Interaktionen klar lesbar halten und gleichzeitig stabile Performance sichern, während mehrere Spieler denselben AR-Spielraum nutzen.

#### Approach
- **EN:** Built a lightweight AR interaction structure in Unity, integrated low-poly assets, and iterated onboarding to make first contact intuitive.
- **DE:** Eine schlanke AR-Interaktionsstruktur in Unity aufgebaut, Low-Poly-Assets integriert und das Onboarding iterativ verbessert, damit der Einstieg intuitiv bleibt.

#### Impact
- **EN:** Resulted in a complete vertical slice that demonstrates feasible multiplayer AR moment-to-moment play.
- **DE:** Ergebnis war ein vollständiger Vertical Slice, der umsetzbares Multiplayer-AR-Gameplay im Moment-zu-Moment-Ablauf zeigt.

---

## ready_to_apply (formatted for `src/content/site.ts` fields)

```ts
{
  tagline: "AR multiplayer prototype that brings low-poly game moments into your living room.",
  summary:
    "Aurea is a Unity-based student project exploring shared AR gameplay on smartphones. Built as a semester prototype in a 4-person team, it focuses on clear onboarding, stable interaction flow, and a stylized low-poly presentation.",
  contributions: [
    "Implemented mobile AR interaction flow and core gameplay logic",
    "Integrated and optimized production assets for reliable device performance",
    "Supported pacing and onboarding decisions for first-time AR users",
  ],
  outcomes: [
    "Delivered a playable multiplayer AR prototype within semester scope",
    "Validated that social interaction can be communicated clearly in a low-poly AR setup",
  ],
  narrative: {
    context:
      "Created as a student project to test how shared AR interactions work on everyday smartphones.",
    challenge:
      "Keep interactions readable and performance stable while multiple players share an AR play space.",
    approach:
      "Built a lightweight AR interaction structure in Unity, integrated low-poly assets, and iterated onboarding to make first contact intuitive.",
    impact:
      "Resulted in a complete vertical slice that demonstrates feasible multiplayer AR moment-to-moment play.",
  },
}
```

### Optional German variant (if multilingual project content is desired)

```ts
{
  tagline: "AR-Multiplayer-Prototyp, das Low-Poly-Spielmomente ins Wohnzimmer holt.",
  summary:
    "Aurea ist ein Unity-basiertes Studienprojekt, das gemeinsames AR-Gameplay auf Smartphones untersucht. Als Semester-Prototyp in einem 4er-Team entwickelt, liegt der Fokus auf klarem Onboarding, stabilem Interaktionsfluss und einem stilisierten Low-Poly-Look.",
  contributions: [
    "Mobile AR-Interaktionen und zentrale Gameplay-Logik umgesetzt",
    "Produktions-Assets integriert und für stabile Laufzeit auf Geräten optimiert",
    "Pacing und Onboarding für den Einstieg in AR aktiv mitgestaltet",
  ],
  outcomes: [
    "Ein spielbarer Multiplayer-AR-Prototyp wurde im Semesterrahmen fertiggestellt",
    "Das Konzept bestätigte, dass soziale Interaktion im Low-Poly-AR-Setup verständlich vermittelbar ist",
  ],
  narrative: {
    context:
      "Entstanden als Studienprojekt, um zu testen, wie gemeinsames AR-Gameplay auf alltäglichen Smartphones funktioniert.",
    challenge:
      "Interaktionen klar lesbar halten und gleichzeitig stabile Performance sichern, während mehrere Spieler denselben AR-Spielraum nutzen.",
    approach:
      "Eine schlanke AR-Interaktionsstruktur in Unity aufgebaut, Low-Poly-Assets integriert und das Onboarding iterativ verbessert, damit der Einstieg intuitiv bleibt.",
    impact:
      "Ergebnis war ein vollständiger Vertical Slice, der umsetzbares Multiplayer-AR-Gameplay im Moment-zu-Moment-Ablauf zeigt.",
  },
}
```
