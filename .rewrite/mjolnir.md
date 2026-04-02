# Mjölnir Rewrite Research (slug: `mjolnir`)

## Sources reviewed
1. **Current dev block**: `src/content/site.ts` (project object with `slug: "mjolnir"`)
2. **Master branch legacy content**:
   - `master:app/projects/page.tsx` (project card + Sketchfab model URL)
   - `master:src/i18n.ts` (`mjolnirDescription` in EN/DE)
3. **External links**:
   - Sketchfab model page: `https://sketchfab.com/3d-models/thors-hammer-mjolnir-high-poly-b5ab1f0f032e40abbe33ef47e53cc7c0`
   - Sketchfab profile: `https://sketchfab.com/atmo_gd`
   - itch profile (linked globally in site profile): `https://atmogd.itch.io/`
   - GitHub profile (linked globally in site profile): `https://github.com/AtmoGD`

---

## Summary of findings
- Dev already has a structured, professional block, but phrasing is generic and slightly repetitive.
- Master copy was very short and rough ("A model i made as a student project...").
- The Mjölnir model is publicly presented on Sketchfab as a **high-poly** model; page text includes:
  - "This is Thors Hammer."
  - Published date shown as **Jun 29th 2021**
  - Geometry shown as approximately **125.4k triangles / 63.5k vertices**.
  - Link to a low-poly version is mentioned on the model page.
- No clearly project-specific GitHub repository for this Mjölnir model was identified from the linked profile.
- itch.io profile appears game-focused; no direct Mjölnir asset page was identified there.

> Factuality note: Suggestions below avoid claiming engine integration, shipped-in-game usage, or team collaboration that are not directly evidenced.

---

## Improved copy suggestions (EN + DE)

## Tagline
- **EN:** `Student-built Mjölnir hero prop, from blockout to polished high-poly presentation.`
- **DE:** `Als Studienprojekt erstelltes Mjölnir-Hero-Prop – vom Blockout bis zur auspolierten High-Poly-Präsentation.`

## Summary
- **EN:** `A personal/study asset project focused on hard-surface modeling, material readability, and clean portfolio presentation in Sketchfab.`
- **DE:** `Ein Asset-Projekt aus Studium/Portfolio mit Fokus auf Hard-Surface-Modelling, klare Materiallesbarkeit und eine saubere Präsentation auf Sketchfab.`

## Contributions
- **EN suggestions:**
  - `Developed the model from initial blockout to final high-poly pass`
  - `Authored textures/materials for readable metal and leather surfaces`
  - `Prepared presentation-ready renders and viewer upload`
- **DE suggestions:**
  - `Modell vom ersten Blockout bis zum finalen High-Poly-Stand ausgearbeitet`
  - `Texturen/Materialien für gut lesbare Metall- und Lederoberflächen erstellt`
  - `Portfolio-taugliche Präsentation aufbereitet und im Viewer veröffentlicht`

## Outcomes
- **EN suggestions:**
  - `Publicly published 3D model on Sketchfab`
  - `Demonstrated end-to-end individual asset workflow`
  - `Created a reusable portfolio piece for hard-surface prop work`
- **DE suggestions:**
  - `Öffentlich auf Sketchfab veröffentlichtes 3D-Modell`
  - `Durchgängigen Solo-Asset-Workflow demonstriert`
  - `Wiederverwendbares Portfolio-Stück für Hard-Surface-Props erstellt`

## Narrative (context / challenge / approach / impact)
- **Context**
  - EN: `Created as a student asset exercise to practice complete prop production and presentation quality.`
  - DE: `Entstanden als Studienübung, um den vollständigen Prop-Produktionsprozess bis zur Präsentationsqualität zu trainieren.`
- **Challenge**
  - EN: `Keeping the iconic silhouette and engraved detail readable while maintaining clean forms and material separation.`
  - DE: `Die ikonische Silhouette und Gravurdetails klar lesbar zu halten und gleichzeitig saubere Formen sowie klare Materialtrennung zu sichern.`
- **Approach**
  - EN: `Iterated on proportion and silhouette first, then refined hard-surface detail and finalized textures/material response for viewer presentation.`
  - DE: `Zuerst Proportionen und Silhouette iteriert, danach Hard-Surface-Details verfeinert und zum Schluss Texturen/Materialwirkung für die Viewer-Präsentation finalisiert.`
- **Impact**
  - EN: `Delivered a complete, publicly visible hero-prop case that demonstrates individual execution from modeling through final presentation.`
  - DE: `Ein vollständiges, öffentlich sichtbares Hero-Prop-Beispiel geliefert, das die eigenständige Umsetzung von Modellierung bis finaler Präsentation zeigt.`

---

## ready_to_apply (for `src/content/site.ts` fields)

```ts
{
  slug: "mjolnir",
  title: "Mjölnir",
  tagline: "Student-built Mjölnir hero prop, from blockout to polished high-poly presentation",
  summary:
    "A study asset project focused on hard-surface modeling, material readability, and clean portfolio presentation on Sketchfab.",
  year: "2020",
  status: "Shipped",
  stack: ["Blender", "Substance Painter", "3D Modeling"],
  roles: ["3D Artist"],
  proof: {
    role: "Modeling and texturing",
    timeline: "Student asset project",
    teamSize: "1 person",
    impact: "Delivered a complete hero-prop workflow from blockout to public presentation",
  },
  ownership: {
    owned: [
      "Blockout and silhouette refinement",
      "Hard-surface detail pass",
      "Material/texturing and final presentation",
    ],
  },
  contributions: [
    "Developed the model from initial blockout to final high-poly pass",
    "Authored textures/materials for readable metal and leather surfaces",
    "Prepared presentation-ready output and published the model viewer entry",
  ],
  outcomes: [
    "Publicly published 3D model on Sketchfab",
    "Demonstrated end-to-end individual asset workflow",
    "Created a reusable portfolio piece for hard-surface prop work",
  ],
  narrative: {
    context:
      "Created as a student exercise to practice complete prop production and presentation quality.",
    challenge:
      "Maintain iconic shape readability and engraved detail while keeping forms clean and materials clearly separated.",
    approach:
      "Iterated on proportion and silhouette first, then refined hard-surface detail and finalized materials for viewer presentation.",
    impact:
      "Resulted in a complete, publicly visible hero-prop case demonstrating individual execution from modeling through final presentation.",
  },
  links: {
    detailUrl: "https://sketchfab.com/atmo_gd",
  },
}
```

---

## GitHub availability / relevance note
- No project-specific GitHub repository for **Mjölnir** was identified from the linked profile (`https://github.com/AtmoGD`).
- No GitHub access-denied error occurred during this research.
