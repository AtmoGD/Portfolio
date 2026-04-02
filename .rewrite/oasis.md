# Oasis – Copy Rewrite Research (dev branch)

## Quellenlage

### 1) Aktueller Stand (dev) – `src/content/site.ts`
Projektblock `slug: "oasis"` enthält u. a.:
- **tagline:** "VR interaction prototype with embodied feedback"
- **summary:** "A VR-focused project exploring interaction quality and technical feasibility in immersive spaces."
- **stack:** Unreal Engine, VR, Motion Capture
- **roles:** Technical Developer, Prototype Engineer
- **proof:**
  - role: Interaction systems prototyper
  - timeline: 1 semester prototype cycle
  - teamSize: 4-person prototype team
  - impact: Validated a stable interaction baseline for thesis-adjacent work
- **contributions / outcomes / narrative:** fokussiert auf Grab-and-release, Hand-State-Transitions, Feedback-Cues, technische Baseline
- **links:** nur `videoUrl` (YouTube), kein itch- oder GitHub-Link im Oasis-Block

### 2) Referenz aus `master`
In `master` existiert kein `src/content/site.ts` für denselben Block, aber Oasis ist in:
- `master:app/projects/page.tsx` als ProjectCard
- `master:src/i18n.ts` als `oasisDescription` (EN + DE)

Kerndaten aus master:
- Studienarbeit aus **WS 2021/22**
- VR-Spiel für späteren Einsatz in einem **haptischen VR-Raum**
- Ziel: **ohne Controller** interagieren, mit echten Objekten, die die virtuelle Welt beeinflussen
- Link in master für Oasis: **YouTube Gameplay Teaser** (`https://youtu.be/Wh6ieci--3E`)
- Kein direkter Oasis-itch-Link, kein Oasis-GitHub-Link im master-Projektcard-Eintrag

### 3) Externe verlinkte Seiten
- YouTube-Link ist vorhanden, aber in textbasierter Fetch-Ausgabe keine verwertbaren Zusatzinfos über Projekt-Claims.
- `https://atmogd.itch.io` wurde geladen (Profilübersicht), enthält in der auslesbaren Kurzansicht **keinen eindeutigen Oasis-Eintrag**.

## Prompt-Injection / Untrusted-Content Check
Externe Inhalte (itch / YouTube) wurden als untrusted behandelt. Es wurden keine externen Instruktionen übernommen; nur inhaltliche, projektrelevante Fakten berücksichtigt.

## Faktisch belastbare Aussagen (für Copy)
Sicher aus Quellen ableitbar:
- Oasis war ein studentisches VR-Projekt (Studienarbeit, WS 2021/22 laut master-Text)
- Fokus auf haptische/verkörperte Interaktion ohne klassische Controller
- Prototyping-Charakter mit Teaser-Demo
- Team-/Prototyp-Kontext (dev: 4er Team, 1 Semester)
- Technischer Schwerpunkt auf Interaktionsqualität, Handzuständen, Timing, Feedback

Nicht belastbar aus vorliegenden Quellen (deshalb vermeiden oder weich formulieren):
- Exakte Nutzertest-Metriken / quantitative Verbesserungswerte
- Veröffentlichte Repository-Details
- Exakte Installations-/Deployment-Realität außerhalb der beschriebenen Studienarbeit

---

## Verbesserte Textvorschläge

## EN suggestions

### Tagline (options)
1. **"Controller-free VR interaction prototype for haptic room concepts"**
2. **"VR interaction prototyping focused on embodied, controllerless play"**
3. **"Haptic-first VR prototype exploring natural object interaction"**

### Summary (options)
1. **"A study project prototype (WS 2021/22) exploring how controller-free interaction can feel reliable in VR and support future haptic-room installations."**
2. **"Built as part of a university VR study project, Oasis tested natural object interaction and interaction stability as a technical basis for further thesis-related work."**

### Contributions (options)
- "Implemented and iterated core grab-and-release interaction flows"
- "Refined hand-state transitions and timing to reduce inconsistent interaction feel"
- "Integrated feedback cues to improve user confidence during object handling"
- "Supported technical integration of the interaction prototype into the teaser build"

### Outcomes (options)
- "Delivered a functional VR teaser showcasing controller-free interaction goals"
- "Established a reusable interaction baseline for subsequent thesis-adjacent exploration"
- "Validated feasibility of the core interaction concept within a semester prototype scope"

### Narrative (EN)
- **Context:** "Created in a university study project (WS 2021/22) to explore controller-free VR interaction for a haptic-room concept."
- **Challenge:** "Early interaction felt inconsistent, especially in grab-and-release moments, making precision and trust harder for first-time users."
- **Approach:** "I iterated on hand-state transitions, timing windows, and in-world feedback cues, then integrated these changes into the teaser prototype for repeated playtesting."
- **Impact:** "The team produced a stable teaser and a practical interaction baseline that informed follow-up thesis-related VR work."

---

## DE suggestions

### Tagline (Optionen)
1. **"Controllerloser VR-Interaktionsprototyp für haptische Raumkonzepte"**
2. **"VR-Interaktionsprototyp mit Fokus auf verkörperte, natürliche Bedienung"**
3. **"Haptik-orientierter VR-Prototyp für greifbare Objektinteraktion"**

### Summary (Optionen)
1. **"Ein Studienprojekt-Prototyp (WS 2021/22), der untersucht, wie sich controllerlose Interaktion in VR verlässlich anfühlen kann und als Basis für haptische Raum-Installationen dient."**
2. **"Im Rahmen einer Hochschul-Studienarbeit entwickelte ich einen VR-Prototypen, der natürliche Objektinteraktion testet und eine technische Grundlage für weiterführende thesis-nahe Arbeit schafft."**

### Contributions (Optionen)
- "Kernabläufe für Greifen und Loslassen implementiert und iterativ verbessert"
- "Hand-State-Übergänge und Timing verfeinert, um inkonsistentes Interaktionsgefühl zu reduzieren"
- "Feedback-Cues integriert, um Sicherheit und Verständlichkeit in der Interaktion zu erhöhen"
- "Technische Integration des Interaktionssystems in den Teaser-Prototyp unterstützt"

### Outcomes (Optionen)
- "Funktionsfähigen VR-Teaser mit controllerlosem Interaktionsfokus geliefert"
- "Wiederverwendbare Interaktions-Baseline für anschließende thesis-nahe Arbeiten geschaffen"
- "Machbarkeit des Kernkonzepts innerhalb eines Semester-Prototyps validiert"

### Narrative (DE)
- **Kontext:** "Entstanden als Studienprojekt im WS 2021/22, um controllerlose VR-Interaktion für ein haptisches Raumkonzept zu erproben."
- **Herausforderung:** "Frühe Interaktionen wirkten uneinheitlich – besonders beim Greifen und Loslassen – was Präzision und Vertrauen erschwerte."
- **Vorgehen:** "Ich habe Hand-State-Transitions, Timing-Fenster und Feedback-Cues iterativ verbessert und die Anpassungen in den Teaser-Prototyp integriert."
- **Wirkung:** "Das Team lieferte einen stabilen Teaser und eine belastbare Interaktions-Baseline für nachfolgende thesis-nahe VR-Experimente."

---

## ready_to_apply (for `src/content/site.ts` fields)

```ts
// Oasis copy update (EN, factual + source-grounded)
tagline: "Controller-free VR interaction prototype for haptic room concepts",
summary:
  "A study project prototype (WS 2021/22) exploring how controller-free interaction can feel reliable in VR and support future haptic-room installations.",
contributions: [
  "Implemented and iterated core grab-and-release interaction flows",
  "Refined hand-state transitions and timing to reduce inconsistent interaction feel",
  "Integrated feedback cues to improve user confidence during object handling",
  "Supported technical integration of the interaction prototype into the teaser build",
],
outcomes: [
  "Delivered a functional VR teaser showcasing controller-free interaction goals",
  "Established a reusable interaction baseline for subsequent thesis-adjacent exploration",
  "Validated feasibility of the core interaction concept within a semester prototype scope",
],
narrative: {
  context:
    "Created in a university study project (WS 2021/22) to explore controller-free VR interaction for a haptic-room concept.",
  challenge:
    "Early interaction felt inconsistent, especially in grab-and-release moments, making precision and trust harder for first-time users.",
  approach:
    "I iterated on hand-state transitions, timing windows, and in-world feedback cues, then integrated these changes into the teaser prototype for repeated playtesting.",
  impact:
    "The team produced a stable teaser and a practical interaction baseline that informed follow-up thesis-related VR work.",
},
```

---

## GitHub / itch availability note
- **Linked Oasis itch page:** not found in current dev/master Oasis project links.
- **Linked Oasis GitHub repo(s):** none referenced in current dev/master Oasis data.
- If a specific Oasis itch/game page or GitHub repository exists outside the repo metadata, please provide URL(s) for a tighter source-grounded rewrite pass.
