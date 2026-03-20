import type { Project } from "@/src/types/project";

import unthronedImage from "@/assets/Unthroned.png";
import witchWayImage from "@/assets/WitchWay.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";
import oasisImage from "@/assets/Oasis.jpg";
import gravityPongImage from "@/assets/GravityPong.png";
import aureaImage from "@/assets/Aurea.png";
import cozyWinterMarketImage from "@/assets/CozyWinterMarket.png";
import bombermanImage from "@/assets/Bomb.png";
import arcReactorImage from "@/assets/Arc.png";
import mjolnirImage from "@/assets/Hammer.png";
import type { Localized } from "@/src/i18n";

export const profile = {
  name: "Dennis Hawran",
  title: {
    en: "Gameplay & Systems Developer",
    de: "Gameplay- & Systems-Entwickler",
  } as Localized,
  location: {
    en: "Augsburg, Germany",
    de: "Augsburg, Deutschland",
  } as Localized,
  email: "dennishawran@gmail.com",
  intro: {
    en: "I design and implement playable systems that feel clear for players and maintainable for teams.",
    de: "Ich entwickle spielbare Systeme, die für Spieler klar wirken und für Teams langfristig wartbar bleiben.",
  } as Localized,
  valuePoints: {
    en: [
      "Playable prototypes fast",
      "Clear ownership and contribution visibility",
      "Strong Unity/C# foundation with Unreal experience",
    ],
    de: [
      "Schnelle, spielbare Prototypen",
      "Klare Verantwortungsbereiche und transparente Beiträge",
      "Starkes Unity/C#-Fundament mit Unreal-Erfahrung",
    ],
  } as Localized<string[]>,
  links: {
    github: "https://github.com/AtmoGD",
    linkedin: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
    itch: "https://atmogd.itch.io/",
    sketchfab: "https://sketchfab.com/atmo_gd",
  },
};

export const aboutContent = {
  summary: {
    en: "I’m a gameplay-focused developer with strong Unity/C# foundations and practical Unreal/VR exposure. I enjoy translating design intent into clean, testable systems and making contribution boundaries visible so teams and recruiters can quickly understand impact.",
    de: "Ich bin ein gameplay-fokussierter Entwickler mit starkem Unity/C#-Fundament und praktischer Unreal/VR-Erfahrung. Ich übersetze Design-Intention in saubere, testbare Systeme und mache Beiträge sichtbar, damit Teams und Recruiter Wirkung schnell erkennen können.",
  } as Localized,
  strengths: {
    en: [
      "Gameplay systems architecture and implementation",
      "Rapid prototyping with disciplined scope control",
      "Cross-functional collaboration with designers and artists",
      "Documentation and handover quality for maintainability",
    ],
    de: [
      "Architektur und Implementierung von Gameplay-Systemen",
      "Schnelles Prototyping mit sauberem Scope-Management",
      "Interdisziplinäre Zusammenarbeit mit Design und Art",
      "Dokumentation und Übergabequalität für Wartbarkeit",
    ],
  } as Localized<string[]>,
};

export const cvContent = {
  education: [
    {
      period: "2022 – 2024",
      title: {
        en: "M.A. Interactive Media Systems (Game Development) · University of Augsburg",
        de: "M.A. Interaktive Mediensysteme (Game Development) · Hochschule Augsburg",
      } as Localized,
      details: {
        en: ["Focus on game development, prototyping, and applied interaction systems."],
        de: ["Schwerpunkt auf Game Development, Prototyping und interaktiven Systemen."],
      } as Localized<string[]>,
    },
    {
      period: "2019 – 2022",
      title: {
        en: "B.Sc. Media Informatics · Furtwangen University",
        de: "B.Sc. Medieninformatik · Hochschule Furtwangen",
      } as Localized,
      details: {
        en: ["Core modules in programming, interactive applications, and technical media production."],
        de: ["Kernmodule in Programmierung, interaktiven Anwendungen und technischer Medienproduktion."],
      } as Localized<string[]>,
    },
  ],
  work: [
    {
      period: "03/2022 – Today",
      title: {
        en: "Working Student · University of Hohenheim",
        de: "Werkstudent · Universität Hohenheim",
      } as Localized,
      details: {
        en: ["Development of a teaching-focused chatbot.", "Product iteration with practical academic constraints."],
        de: ["Entwicklung eines lehrfokussierten Chatbots.", "Produktiteration unter realen akademischen Rahmenbedingungen."],
      } as Localized<string[]>,
    },
    {
      period: "09/2021 – 02/2024",
      title: {
        en: "Tutor · Unity Engine",
        de: "Tutor · Unity Engine",
      } as Localized,
      details: {
        en: ["Supported students in gameplay implementation and debugging workflows."],
        de: ["Unterstützung von Studierenden bei Gameplay-Implementierung und Debugging."],
      } as Localized<string[]>,
    },
    {
      period: "08/2020 – 02/2024",
      title: {
        en: "Tutor · Development of Interactive Applications (FUDGE)",
        de: "Tutor · Entwicklung Interaktiver Anwendungen (FUDGE)",
      } as Localized,
      details: {
        en: ["Guided project teams from concept to playable prototype."],
        de: ["Begleitung von Projektteams von der Idee bis zum spielbaren Prototyp."],
      } as Localized<string[]>,
    },
    {
      period: "07/2021 – 02/2024",
      title: {
        en: "Internship · GameLab, Furtwangen University",
        de: "Praktikum · GameLab, Hochschule Furtwangen",
      } as Localized,
      details: {
        en: ["Lab organization, student support, and prototype implementation."],
        de: ["Labororganisation, Studierenden-Support und Prototyp-Implementierung."],
      } as Localized<string[]>,
    },
  ],
  foundations: [
    {
      period: "2014 – 2016",
      title: {
        en: "Advanced technical college certificate · Vocational College Weil am Rhein",
        de: "Allgemeine Fachhochschulreife · Berufskolleg Weil am Rhein",
      } as Localized,
    },
    {
      period: "2012 – 2014",
      title: {
        en: "Apprenticeship: Production Mechanic Textile",
        de: "Ausbildung: Produktionsmechaniker Textil",
      } as Localized,
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "unthroned",
    title: "Unthroned",
    tagline: "Twin-stick action meets base building and tower defense in a focused student project.",
    summary:
      "Unthroned is a master-level student production combining twin-stick shooting with base building and tower defense. You play as Dave, a necromancer collecting souls to upgrade skills and strengthen your home base. I focused on robust gameplay and systems structure to keep balancing reliable through release on itch.io.",
    year: "2024",
    status: "Shipped",
    featured: true,
    cover: unthronedImage,
    stack: ["Unity", "C#", "System Design"],
    roles: ["Gameplay Programmer", "Systems Designer"],
    proof: {
      role: "Gameplay & systems owner",
      timeline: "5-month student production",
      teamSize: "7-person cross-discipline team",
      impact: "Shipped on time with fewer late-stage combat regressions",
    },
    ownership: {
      owned: [
        "Combat state architecture and encounter flow",
        "Debug hooks for balancing and tuning",
        "Core game-state reliability during polish",
      ],
      collaboratedWith: ["Game design", "QA playtest peers", "Audio/FX contributors"],
    },
    contributions: [
      "Implemented and iterated core gameplay and game-state logic",
      "Built a system structure that kept feature integration stable and reduced regressions",
      "Aligned with design and playtesting to improve combat readability and speed up tuning",
    ],
    outcomes: [
      "Published publicly on itch.io",
      "Delivered a stable core loop under student project time and scope constraints",
    ],
    evidence: [
      {
        title: "Public gameplay footage",
        type: "video",
        sourceUrl: "https://www.youtube.com/embed/Wh6ieci--3E",
        caption: "Representative combat and pacing footage from the release window.",
        supports: "Supports claim: stable, readable combat loop through final balancing.",
      },
      {
        title: "Release build screenshot",
        type: "image",
        sourceUrl: unthronedImage.src,
        caption: "In-game encounter readability in shipped build.",
        supports: "Supports claim: feedback hierarchy remained clear under pressure.",
      },
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
    links: {
      playUrl: "https://atmogd.itch.io/unthroned",
    },
  },
  {
    slug: "oasis",
    title: "Oasis",
    tagline: "Controller-free VR interaction prototype for haptic room concepts",
    summary:
      "A study project prototype (WS 2021/22) exploring how controller-free interaction can feel reliable in VR and support future haptic-room installations.",
    year: "2023",
    status: "Prototype",
    featured: true,
    cover: oasisImage,
    stack: ["Unreal Engine", "VR", "Motion Capture"],
    roles: ["Technical Developer", "Prototype Engineer"],
    proof: {
      role: "Interaction systems prototyper",
      timeline: "1 semester prototype cycle",
      teamSize: "4-person prototype team",
      impact: "Validated a stable interaction baseline for thesis-adjacent work",
    },
    ownership: {
      owned: [
        "Hand-state transition logic and timing",
        "Interaction feedback cues and iteration loop",
        "Technical prototype integration for VR teaser",
      ],
      collaboratedWith: ["3D art", "Playtest participants"],
    },
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
    evidence: [
      {
        title: "VR teaser walkthrough",
        type: "video",
        sourceUrl: "https://www.youtube.com/embed/Wh6ieci--3E",
        caption: "Short prototype walkthrough showing grab-and-release behavior.",
        supports: "Supports claim: interaction quality reached a stable confidence threshold.",
      },
      {
        title: "Prototype still",
        type: "image",
        sourceUrl: oasisImage.src,
        caption: "Prototype environment and embodied interaction context.",
        supports: "Supports claim: system integrated cleanly with final teaser scene.",
      },
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
    links: {
      videoUrl: "https://youtu.be/Wh6ieci--3E",
    },
  },
  {
    slug: "witch-way",
    title: "Witch Way?",
    tagline: "Fast-paced jam project built for readable chaos and quick iteration",
    summary:
      "A Cozy Fall Jam project where I focused on shipping a clear, playful core loop under extreme time pressure, with readability and control feel prioritized over feature sprawl.",
    year: "2022",
    status: "Shipped",
    featured: true,
    cover: witchWayImage,
    stack: ["Unity", "C#", "Game Jam"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Gameplay loop owner",
      timeline: "48-hour game jam",
      teamSize: "5-person jam team",
      impact: "Delivered complete build with strong first-play clarity",
    },
    ownership: {
      owned: [
        "Core mechanics implementation",
        "Input and hazard readability tuning",
        "Final build stability for submission",
      ],
      collaboratedWith: ["Jam designer", "2D artist"],
    },
    contributions: [
      "Scoped and delivered a complete gameplay loop within jam constraints",
      "Reduced mechanic overlap to keep hazard readability high",
      "Polished controls and feedback to maintain first-play clarity",
    ],
    outcomes: ["Published publicly on itch.io", "Shipped a complete, understandable jam build in 48 hours"],
    evidence: [
      {
        title: "Shipped jam build",
        type: "image",
        sourceUrl: witchWayImage.src,
        caption: "Final jam build frame showing mechanic clarity under hazard pressure.",
        supports: "Supports claim: system readability prioritized over feature sprawl.",
      },
    ],
    narrative: {
      context:
        "Developed in a jam timeframe where every feature decision had immediate schedule impact.",
      challenge:
        "The core mechanic was fun in isolation but became confusing when multiple hazards stacked on screen.",
      approach:
        "I reduced mechanic overlap, simplified input edge cases, and prioritized feedback readability over adding new systems.",
      impact:
        "We released a complete, understandable build during the jam window with strong first-play clarity.",
    },
    links: {
      playUrl: "https://atmogd.itch.io/witch-way",
    },
  },
  {
    slug: "pumpkin-harvest",
    title: "Pumpkin Harvest",
    tagline: "Cozy farming loop with clear feedback and low-pressure progression",
    summary:
      "A small game-jam project where players plant, water, harvest, and deliver pumpkins. The focus is a relaxing pace, readable interactions, and satisfying moment-to-moment feedback.",
    year: "2022",
    status: "Shipped",
    cover: pumpkinHarvestImage,
    stack: ["Unity", "C#", "Gameplay"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Gameplay programmer",
      timeline: "Cozy Fall Jam 2022",
      teamSize: "2-person team",
      impact: "Improved pacing and feedback rhythm in final public build",
    },
    ownership: {
      owned: [
        "Complete gameplay loop implementation",
        "Cadence, pickup, and scoring polish",
        "Release packaging and deployment",
      ],
    },
    contributions: [
      "Implemented and tuned the core harvest loop (planting, watering, harvesting, delivery)",
      "Polished interaction timing and feedback cadence for clearer player flow",
      "Integrated progression touches (earnings-based upgrades such as fields/truck)",
    ],
    outcomes: [
      "Shipped a public Cozy Fall Jam 2022 build on itch.io",
      "Delivered a readable, low-pressure gameplay loop aligned with the game's cozy intent",
    ],
    evidence: [
      {
        title: "Gameplay still",
        type: "image",
        sourceUrl: pumpkinHarvestImage.src,
        caption: "Moment-to-moment harvesting loop from public version.",
        supports: "Supports claim: tighter cadence and clearer reward feedback.",
      },
    ],
    narrative: {
      context: "Built during Cozy Fall Jam 2022 as a compact cozy farming game.",
      challenge:
        "Keep the loop relaxing while still making each action feel meaningful and responsive.",
      approach:
        "Focused scope on one clear loop (grow and deliver pumpkins), then tuned timing, interaction readability, and progression beats.",
      impact:
        "Resulted in a coherent public jam build with approachable mechanics and a calm, cozy player experience.",
    },
    links: {
      playUrl: "https://atmogd.itch.io/pumpkin-harvest",
    },
  },
  {
    slug: "gravity-pong",
    title: "Gravity Pong",
    tagline: "Pong with shifting gravity and ML-driven opponents",
    summary:
      "A Unity prototype that reimagines Pong with randomly flipping gravity, rising ball speed, and optional AI paddles trained with Unity ML-Agents.",
    year: "2021",
    status: "Prototype",
    cover: gravityPongImage,
    stack: ["Unity", "Machine Learning", "Gameplay"],
    roles: ["Developer"],
    proof: {
      role: "Prototype mechanic designer/developer",
      timeline: "2-week experiment",
      teamSize: "1 person",
      impact: "Defined viable ruleset for readable gravity-based rallies",
    },
    ownership: {
      owned: [
        "Physics constraint and rebound tuning",
        "Arena parameter experimentation",
        "Prototype balancing rules",
      ],
    },
    contributions: [
      "Implemented gravity-flip match logic with visual direction indicators for readability",
      "Built and tuned core rally systems (rebound behavior, pacing, speed scaling)",
      "Integrated ML-Agents-based paddle opponents and exposed difficulty-related behavior parameters",
    ],
    outcomes: [
      "Validated a playable gravity-variant Pong ruleset with clearer rally readability",
      "Delivered local multiplayer and AI-opponent modes in a public prototype build",
    ],
    evidence: [
      {
        title: "Prototype frame",
        type: "image",
        sourceUrl: gravityPongImage.src,
        caption: "Readability-focused gravity behavior in an experimental rally.",
        supports: "Supports claim: constraints reduced randomness while keeping novelty.",
      },
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
    links: {
      playUrl: "https://atmogd.itch.io/gravity-pong",
    },
  },
  {
    slug: "aurea",
    title: "Aurea",
    tagline: "AR multiplayer prototype that brings low-poly game moments into your living room.",
    summary:
      "Aurea is a Unity-based student project exploring shared AR gameplay on smartphones. Built as a semester prototype in a 4-person team, it focuses on clear onboarding, stable interaction flow, and a stylized low-poly presentation.",
    year: "2021",
    status: "Prototype",
    cover: aureaImage,
    stack: ["Unity", "AR", "Mobile"],
    roles: ["Gameplay Programmer", "Technical Artist"],
    proof: {
      role: "Core gameplay and AR integration",
      timeline: "Semester project",
      teamSize: "4-person student team",
      impact: "Delivered a complete multiplayer AR slice",
    },
    ownership: {
      owned: ["AR setup and interaction flow", "Core gameplay loop", "Model integration and optimization"],
    },
    contributions: [
      "Implemented mobile AR interaction flow and core gameplay logic",
      "Integrated and optimized production assets for reliable device performance",
      "Supported pacing and onboarding decisions for first-time AR users",
    ],
    outcomes: [
      "Delivered a playable multiplayer AR prototype within semester scope",
      "Validated that social interaction can be communicated clearly in a low-poly AR setup",
    ],
    evidence: [{ title: "Aurea prototype", type: "image", sourceUrl: aureaImage.src, caption: "Prototype frame.", supports: "Supports claim: complete AR vertical slice." }],
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
    links: {},
  },
  {
    slug: "cozy-winter-market",
    title: "Cozy Winter Market",
    tagline: "Cozy builder prototype with a clear build-and-decorate economy loop",
    summary:
      "A calm management prototype from Cozy Winter Jam 2022: players build their own Christmas market, expand with new buildings, and use decoration to raise visitor happiness—so customers spend more.",
    year: "2021",
    status: "Prototype",
    cover: cozyWinterMarketImage,
    stack: ["Unity", "Game Design", "Simulation"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Gameplay loop owner (programming & level design)",
      timeline: "Cozy Winter Jam 2022 prototype sprint",
      teamSize: "Small jam team",
      impact: "Delivered a complete build-and-decorate progression loop with visible economy feedback",
    },
    ownership: { owned: ["Economy loop setup", "Placement and progression logic", "Balancing pass"] },
    contributions: [
      "Implemented the core progression loop (build → visitor growth → income)",
      "Connected decoration choices to happiness and customer spending behavior",
      "Built placement, edit, and delete logic for market objects",
    ],
    outcomes: [
      "Playable cozy prototype with relaxed, low-pressure progression",
      "Validated economy readability through customer and happiness feedback bars",
    ],
    evidence: [{ title: "Cozy Winter Market frame", type: "image", sourceUrl: cozyWinterMarketImage.src, caption: "Prototype scene.", supports: "Supports claim: completed decorate-and-grow loop." }],
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
    links: {},
  },
  {
    slug: "bomberman",
    title: "Bomberman",
    tagline: "Classic Bomberman mechanics rebuilt in FUDGE Engine with deterministic gameplay systems.",
    summary:
      "University course project recreating the Bomberman core loop in FUDGE Engine: grid movement, bomb timing, destructible tiles, enemy pressure, score, and lives.",
    year: "2020",
    status: "Prototype",
    cover: bombermanImage,
    stack: ["FUDGE Engine", "TypeScript", "Gameplay"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Mechanics and systems implementation",
      timeline: "Semester module",
      teamSize: "Student team",
      impact: "Delivered a faithful and playable clone baseline",
    },
    ownership: { owned: ["Bomb and explosion logic", "Grid movement systems", "Collision and timing behavior"] },
    contributions: [
      "Implemented bomb placement, fuse timing, and explosion propagation.",
      "Built grid-based movement and collision behavior for walls, boxes, and bombs.",
      "Implemented core round loop logic including lives, scoring, and restart/game-over flow.",
    ],
    outcomes: [
      "Playable browser prototype published via GitHub Pages.",
      "Faithful Bomberman-style baseline validating core mechanics under course constraints.",
    ],
    evidence: [{ title: "Bomberman prototype", type: "image", sourceUrl: bombermanImage.src, caption: "In-engine gameplay frame.", supports: "Supports claim: complete core loop implementation." }],
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
    links: {},
  },
  {
    slug: "arc-reactor",
    title: "Arc Reactor",
    tagline: "Hard-surface Arc Reactor prop with high/low-poly PBR workflow",
    summary:
      "Student 3D asset project: recreated Marvel's Arc Reactor as a complete hard-surface pipeline from high-poly sculpt to low-poly game-ready variant with baked PBR textures.",
    year: "2020",
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
    evidence: [{ title: "Arc Reactor model", type: "image", sourceUrl: arcReactorImage.src, caption: "Asset presentation frame.", supports: "Supports claim: complete game-asset pipeline execution." }],
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
      detailUrl: "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2",
    },
  },
  {
    slug: "mjolnir",
    title: "Mjölnir",
    tagline: "Student-built Mjölnir hero prop, from blockout to polished high-poly presentation",
    summary:
      "A study asset project focused on hard-surface modeling, material readability, and clean portfolio presentation on Sketchfab.",
    year: "2020",
    status: "Shipped",
    cover: mjolnirImage,
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
    evidence: [{ title: "Mjölnir model", type: "image", sourceUrl: mjolnirImage.src, caption: "Asset showcase frame.", supports: "Supports claim: full model-to-presentation execution." }],
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
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
