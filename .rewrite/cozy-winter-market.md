# Cozy Winter Market – Rewrite Research

## Quellen geprüft
1. **Dev (aktuell):** `src/content/site.ts` (Projektblock `slug: "cozy-winter-market"`)
2. **Master (historisch):**
   - `app/projects/page.tsx` (Projektkarte + itch-Link)
   - `src/i18n.ts` (`cozyWinterDescription` EN/DE)
3. **Externe Quelle:** itch-Projektseite: `https://atmogd.itch.io/cozy-winter-market`
4. **GitHub (relevant):**
   - **Direkt verlinkte GitHub-Repos auf der itch-Seite:** keine gefunden
   - **Wahrscheinlich zugehörig (Namens-/Zeitbezug):** `https://github.com/AtmoGD/CozyWinterJam` (öffentlich, C#, erstellt 2022-12, enthält Unity-WebGL `docs/index.html` mit Produktname `CozyWinter`)

## Kurzfazit (faktenbasiert)
- Das Kern-Loop-Narrativ ist über alle Quellen konsistent: **bauen → mehr Besucher → mehr Ausgaben durch Deko/Happiness**.
- Master-Text (i18n) und itch sind deutlich menschlicher und stimmungsvoller formuliert als der aktuelle Dev-Block.
- itch liefert konkrete Spielmechaniken, die im Dev-Text kaum auftauchen:
  - Menüs/Modi: Settings, Shop, Edit, Delete
  - Zwei zentrale Systeme: **Customer Bar** (Kapazität) und **Happiness Bar** (Ausgaben)
  - Teamcredits: Music/Sound (Joshua Hank), Programming & Level Design (Dennis Hawran)
- Der aktuelle Dev-Block ist strukturell gut für Recruiter, kann aber sprachlich natürlicher und greifbarer werden.

---

## Textvorschläge (DE + EN)

### 1) Tagline
- **DE:** Gemütliches Aufbauspiel mit klarer Build-Deko-Ökonomie
- **EN:** Cozy builder prototype with a clear build-and-decorate economy loop

### 2) Summary
- **DE:**
  Ein ruhiges Management-Prototyping-Projekt aus der Cozy Winter Jam 2022: Spielende bauen ihren eigenen Weihnachtsmarkt auf, erweitern Gebäude und steigern über Dekoration die Zufriedenheit – wodurch Besucher:innen mehr ausgeben.
- **EN:**
  A calm management prototype from Cozy Winter Jam 2022: players build their own Christmas market, expand with new buildings, and use decoration to raise visitor happiness—so customers spend more.

### 3) Contributions
- **DE:**
  - Implementierte den zentralen Progressions-Loop (Bauen → Besucherwachstum → Einnahmen)
  - Verknüpfte Dekoration mit Zufriedenheit und Ausgabeverhalten
  - Entwickelte Platzierungs-, Verschiebe- und Lösch-Logik für Marktobjekte
- **EN:**
  - Implemented the core progression loop (build → visitor growth → income)
  - Connected decoration choices to happiness and spending behavior
  - Built placement, edit, and delete logic for market objects

### 4) Outcomes
- **DE:**
  - Spielbarer Prototyp mit entspannter, niedrigschwelliger Progression
  - Wirtschafts- und Zufriedenheitsmodell durch sichtbare Ingame-Feedbacks validiert (Customer/Happiness-Bars)
- **EN:**
  - Playable prototype with a relaxed, low-pressure progression curve
  - Economy and happiness model validated through clear in-game feedback (customer and happiness bars)

### 5) Narrative (Context / Challenge / Approach / Impact)
- **DE – Context:**
  Entstanden für die Cozy Winter Jam 2022 mit Fokus auf entspannte Stimmung statt Stress-Optimierung.
- **EN – Context:**
  Built for Cozy Winter Jam 2022, with a focus on a relaxing atmosphere rather than high-pressure optimization.

- **DE – Challenge:**
  Progression sollte motivierend bleiben, ohne komplex oder überladen zu wirken.
- **EN – Challenge:**
  Progression had to stay motivating without becoming complex or overwhelming.

- **DE – Approach:**
  Ich habe Gebäudewachstum, Deko-Wert und Besucherzufriedenheit in einen leicht lesbaren Kreislauf überführt: mehr Ausbau erhöht Besucheraufkommen, mehr Zufriedenheit erhöht Ausgaben.
- **EN – Approach:**
  I tied building expansion, decoration value, and visitor happiness into a readable loop: more development increases traffic, and higher happiness increases spending.

- **DE – Impact:**
  Ergebnis war ein klar verständlicher Cozy-Loop mit sichtbarem Spieler-Impact auf Marktgröße und Einnahmen.
- **EN – Impact:**
  The result was a clear cozy gameplay loop where player decisions visibly shaped market growth and revenue.

---

## ready_to_apply (für `src/content/site.ts`)

```ts
{
  slug: "cozy-winter-market",
  title: "Cozy Winter Market",
  tagline: "Cozy builder prototype with a clear build-and-decorate economy loop",
  summary:
    "A calm management prototype from Cozy Winter Jam 2022: players build their own Christmas market, expand with new buildings, and use decoration to raise visitor happiness—so customers spend more.",
  proof: {
    role: "Gameplay loop owner (programming & level design)",
    timeline: "Cozy Winter Jam 2022 prototype sprint",
    teamSize: "Small jam team",
    impact: "Delivered a complete build-and-decorate progression loop with visible economy feedback",
  },
  contributions: [
    "Implemented the core progression loop (build → visitor growth → income)",
    "Connected decoration choices to happiness and customer spending behavior",
    "Built placement, edit, and delete logic for market objects",
  ],
  outcomes: [
    "Playable cozy prototype with relaxed, low-pressure progression",
    "Validated economy readability through customer and happiness feedback bars",
  ],
  narrative: {
    context:
      "Built for Cozy Winter Jam 2022, with a focus on a relaxing atmosphere instead of high-pressure optimization.",
    challenge:
      "Keep progression motivating and readable without introducing complexity spikes.",
    approach:
      "Linked building expansion, decoration value, and visitor happiness in one clear loop: more development increased traffic, and higher happiness increased spending.",
    impact:
      "Resulted in a clear cozy management loop where player decisions visibly shaped market growth and revenue.",
  },
}
```

## Hinweise für den Main-Agent
- Keine direkte GitHub-Verlinkung auf der itch-Seite gefunden.
- Potenziell zugehöriges Repo mit hoher Plausibilität: `AtmoGD/CozyWinterJam` (`https://github.com/AtmoGD/CozyWinterJam`).
- Keine ungesicherten Leistungsclaims (z. B. Zahlen/Retention/Umsatz) ergänzt; alle Aussagen bleiben bei beobachtbaren Mechaniken und den vorhandenen Quellen.
