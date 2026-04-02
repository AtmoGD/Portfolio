# Arc Reactor – Copy Rewrite Research

## Sources used
1. **Current dev block**: `src/content/site.ts` (slug `arc-reactor`)
2. **Master branch reference**:
   - `master:app/projects/page.tsx` (Arc Reactor card + model link)
   - `master:src/i18n.ts` (`arcReactorDescription` in EN/DE)
3. **External project pages**:
   - High-poly model: `https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2`
   - Low-poly model (linked from high-poly page): `https://sketchfab.com/3d-models/arc-reactor-tony-stark-low-poly-5ed0cd01251c44948950d0e8705364db`
   - Sketchfab profile: `https://sketchfab.com/atmo_gd`
   - Itch profile checked for project relevance: `https://atmogd.itch.io/`

---

## Summary of findings (factual)
- Dev currently frames the project as a **student 3D asset assignment** with focus on hard-surface modeling and PBR texturing.
- Master branch confirms this is a **student project** and links directly to the Arc Reactor Sketchfab model page.
- Sketchfab high-poly page provides verifiable metadata:
  - Title: *Arc Reactor - Tony Stark - HIGH POLY*
  - Published: **Jul 6, 2021**
  - License: **Creative Commons Attribution (CC BY)**
  - Geometry shown: **123.7k triangles / 62k vertices**
  - Mentions linked low-poly counterpart.
- Sketchfab low-poly page provides companion metadata:
  - Title: *Arc Reactor - Tony Stark - LOW POLY*
  - Published: **Jul 7, 2021**
  - Geometry shown: **15.2k triangles / 7.8k vertices**
- Itch profile appears game-focused; no clear Arc Reactor model page found there.
- No project-specific GitHub repo link for Arc Reactor was found in dev/master project data.

---

## Copy direction
Suggested tone: practical, portfolio-friendly, and evidence-backed (avoid overstating production usage). Keep emphasis on **asset pipeline execution** and **high/low-poly pair** as concrete output.

---

## Improved text suggestions

### Tagline
- **EN**: `Hard-surface Arc Reactor prop with high/low-poly PBR workflow`
- **DE**: `Hard-Surface-Arc-Reactor-Prop mit High-/Low-Poly-PBR-Workflow`

### Summary
- **EN**: `Student 3D asset project: recreated Marvel’s Arc Reactor as a complete hard-surface pipeline from high-poly sculpt to low-poly game-ready variant with baked PBR textures.`
- **DE**: `3D-Asset-Studentenprojekt: Marvels Arc Reactor als vollständige Hard-Surface-Pipeline umgesetzt – vom High-Poly-Modell bis zur game-ready Low-Poly-Variante mit gebackenen PBR-Texturen.`

### Contributions
- **EN**:
  - `Modeled and textured a high-poly Arc Reactor presentation asset`
  - `Built a low-poly companion version for real-time use`
  - `Executed UV, baking, and PBR material setup in Blender/Substance workflow`
- **DE**:
  - `High-Poly-Arc-Reactor als Präsentations-Asset modelliert und texturiert`
  - `Begleitende Low-Poly-Version für Echtzeitnutzung erstellt`
  - `UVs, Baking und PBR-Materialsetup im Blender-/Substance-Workflow umgesetzt`

### Outcomes
- **EN**:
  - `Published high-poly model on Sketchfab (CC BY, Jul 2021)`
  - `Published low-poly variant as separate Sketchfab model`
  - `Documented two optimization targets: ~123.7k tris (high-poly) and ~15.2k tris (low-poly)`
- **DE**:
  - `High-Poly-Modell auf Sketchfab veröffentlicht (CC BY, Juli 2021)`
  - `Low-Poly-Variante als separates Sketchfab-Modell veröffentlicht`
  - `Zwei Optimierungsziele dokumentiert: ca. 123,7k Tris (High-Poly) und ca. 15,2k Tris (Low-Poly)`

### Narrative
#### Context
- **EN**: `Created as a student asset exercise to demonstrate a full game-asset production pipeline.`
- **DE**: `Entstanden als studentische Asset-Übung, um eine vollständige Game-Asset-Produktionspipeline zu zeigen.`

#### Challenge
- **EN**: `Translate a recognizable sci-fi prop into clean hard-surface forms while producing both showcase and real-time versions.`
- **DE**: `Ein ikonisches Sci-Fi-Prop in saubere Hard-Surface-Formen übertragen und gleichzeitig Showcase- sowie Echtzeit-Version erzeugen.`

#### Approach
- **EN**: `Produced a high-poly source model, derived a low-poly counterpart, then finalized UVs, texture baking, and PBR materials for presentation.`
- **DE**: `Ein High-Poly-Quellmodell erstellt, daraus eine Low-Poly-Version abgeleitet und anschließend UVs, Texture-Bakes und PBR-Materialien für die Präsentation finalisiert.`

#### Impact
- **EN**: `Delivered an evidence-backed portfolio piece with public high/low-poly releases and measurable geometry budgets.`
- **DE**: `Ein belastbares Portfolio-Stück mit öffentlich verfügbaren High-/Low-Poly-Releases und nachvollziehbaren Geometriebudgets geliefert.`

---

## ready_to_apply (for `src/content/site.ts`)

```ts
{
  slug: "arc-reactor",
  title: "Arc Reactor",
  tagline: "Hard-surface Arc Reactor prop with high/low-poly PBR workflow",
  summary:
    "Student 3D asset project: recreated Marvel’s Arc Reactor as a complete hard-surface pipeline from high-poly sculpt to low-poly game-ready variant with baked PBR textures.",
  year: "2021",
  status: "Shipped",
  cover: arcReactorImage,
  stack: ["Blender", "Substance Painter", "3D Modeling"],
  roles: ["3D Artist"],
  proof: {
    role: "Modeling, texturing, and optimization pass (high/low-poly)",
    timeline: "Student asset project (published Jul 2021)",
    teamSize: "1 person",
    impact: "Published both presentation and game-ready variants on Sketchfab",
  },
  ownership: {
    owned: [
      "High-poly hard-surface modeling",
      "Low-poly derivation and optimization",
      "UV setup, baking, and PBR material authoring",
    ],
  },
  contributions: [
    "Modeled and textured a high-poly Arc Reactor presentation asset",
    "Built a low-poly companion version for real-time use",
    "Executed UV, baking, and PBR material setup in Blender/Substance workflow",
  ],
  outcomes: [
    "Published high-poly model on Sketchfab (CC BY, Jul 2021)",
    "Published low-poly variant as separate Sketchfab model",
    "Documented geometry budgets: ~123.7k tris (high-poly) and ~15.2k tris (low-poly)",
  ],
  evidence: [
    {
      title: "Arc Reactor (high-poly)",
      type: "image",
      sourceUrl: arcReactorImage.src,
      caption: "Hard-surface Arc Reactor model showcased on Sketchfab.",
      supports:
        "Supports claim: complete high-poly to low-poly PBR asset workflow with public release.",
    },
  ],
  narrative: {
    context:
      "Created as a student asset exercise to demonstrate a full game-asset production pipeline.",
    challenge:
      "Translate a recognizable sci-fi prop into clean hard-surface forms while producing both showcase and real-time versions.",
    approach:
      "Produced a high-poly source model, derived a low-poly counterpart, then finalized UVs, texture baking, and PBR materials for presentation.",
    impact:
      "Delivered an evidence-backed portfolio piece with public high/low-poly releases and measurable geometry budgets.",
  },
  links: {
    detailUrl:
      "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2",
  },
}
```

---

## Availability notes
- **Project-specific GitHub repository**: none identified from current dev/master project links.
- **Project-specific itch page**: none identified (itch profile checked, Arc Reactor model appears on Sketchfab).
- **Web search tool limitation**: Brave API key missing, so broad indexed search was unavailable in this environment.