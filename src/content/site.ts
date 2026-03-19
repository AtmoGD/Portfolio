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
      "Klare Ownership und transparente Beiträge",
      "Starkes Unity/C# Fundament mit Unreal-Erfahrung",
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
    tagline: "Arena combat built around responsive core systems",
    summary:
      "A student production where I focused on robust gameplay systems and clean technical ownership.",
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
      "Implemented and iterated core combat/game-state systems",
      "Set up architecture patterns to keep feature work stable",
      "Collaborated across design and engineering to align scope",
    ],
    outcomes: [
      "Released publicly on itch.io",
      "Delivered stable gameplay loop under student project constraints",
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
        "Built in a student team production cycle with fixed submission deadlines and rotating contributor availability.",
      challenge:
        "Combat readability dropped quickly whenever new enemy behaviors were added, which risked late-stage balancing churn.",
      approach:
        "I split combat state handling into clearer modules (player state, enemy reaction, global encounter flow) and added lightweight debug hooks so designers could tune timing without code rewrites.",
      impact:
        "The team shipped on time with fewer regressions in late polish, and we kept combat changes predictable through final balancing.",
    },
    links: {
      playUrl: "https://atmogd.itch.io/unthroned",
    },
  },
  {
    slug: "oasis",
    title: "Oasis",
    tagline: "VR interaction prototype with embodied feedback",
    summary:
      "A VR-focused project exploring interaction quality and technical feasibility in immersive spaces.",
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
      "Built core interaction flows and technical prototype foundations",
      "Integrated motion-focused interaction behaviors",
      "Validated gameplay concepts through rapid iteration",
    ],
    outcomes: ["Produced a working VR teaser", "Informed bachelor-thesis-adjacent exploration"],
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
        "Prototype created to test whether motion-driven interactions could feel precise enough for a larger VR concept.",
      challenge:
        "Early interactions felt floaty and inconsistent between test users, especially during grab-and-release actions.",
      approach:
        "I iterated on interaction timing, hand-state transitions, and feedback cues, then compared short test sessions to isolate where tracking noise hurt player confidence.",
      impact:
        "The teaser demonstrated stable interaction quality and gave a concrete technical baseline for further thesis-related experimentation.",
    },
    links: {
      videoUrl: "https://youtu.be/Wh6ieci--3E",
    },
  },
  {
    slug: "witch-way",
    title: "Witch Way?",
    tagline: "Game jam design with fast iteration and polish discipline",
    summary:
      "A short-cycle project where speed, clarity, and playful readability drove technical decisions.",
    year: "2022",
    status: "Shipped",
    featured: true,
    cover: witchWayImage,
    stack: ["Unity", "C#", "Game Jam"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Gameplay loop owner",
      timeline: "48-hour game jam",
      teamSize: "3-person jam team",
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
      "Scoped and delivered a complete gameplay loop inside jam constraints",
      "Balanced controls and moment-to-moment readability",
      "Kept implementation lean for rapid delivery",
    ],
    outcomes: ["Public itch.io release", "Demonstrated high-speed execution"],
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
    tagline: "Small-scope loop emphasizing feel and timing",
    summary: "A hobby/game-jam style build centered on tight feedback and approachable mechanics.",
    year: "2022",
    status: "Shipped",
    cover: pumpkinHarvestImage,
    stack: ["Unity", "C#", "Gameplay"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Solo developer",
      timeline: "1-week hobby sprint",
      teamSize: "1 person",
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
      "Implemented player loop and tuning passes",
      "Refined feedback timing for better player clarity",
    ],
    outcomes: ["Playable public build"],
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
      context:
        "A compact personal project used to sharpen juice and responsiveness in a simple harvest loop.",
      challenge:
        "Initial pacing felt flat because action feedback and scoring cadence did not reinforce player momentum.",
      approach:
        "I tuned spawn rhythm, pickup timing windows, and audiovisual responses so the loop rewarded consistent play without complexity creep.",
      impact:
        "Resulted in a cleaner minute-to-minute loop and a public build that communicated mechanics quickly.",
    },
    links: {
      playUrl: "https://atmogd.itch.io/pumpkin-harvest",
    },
  },
  {
    slug: "gravity-pong",
    title: "Gravity Pong",
    tagline: "Classic mechanic remix with physics-driven constraints",
    summary: "Experimental project blending pong fundamentals with gravity-informed behavior.",
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
      "Implemented gravity-dependent paddle/ball logic",
      "Explored alternative control and balancing strategies",
    ],
    outcomes: ["Validated mechanic concept and technical direction"],
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
        "Experiment to test whether gravity modifiers could create a fresh competitive twist on familiar pong behavior.",
      challenge:
        "Without constraints, gravity effects produced chaotic rallies that felt random rather than skill-based.",
      approach:
        "I iterated on force caps, rebound rules, and arena tuning to keep matches readable while preserving the novelty of variable gravity.",
      impact:
        "Established a workable prototype rule set and clear limits for future expansion or ML-assisted balancing.",
    },
    links: {
      playUrl: "https://atmogd.itch.io/gravity-pong",
    },
  },
  {
    slug: "aurea",
    title: "Aurea",
    tagline: "Augmented reality multiplayer concept for mobile",
    summary: "AR student project focused on low-poly style, shared interaction, and accessible onboarding.",
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
    contributions: ["Implemented mobile AR interactions", "Shaped core loop pacing", "Integrated production assets"],
    outcomes: ["Playable multiplayer prototype", "Validated AR concept for social gameplay"],
    evidence: [{ title: "Aurea prototype", type: "image", sourceUrl: aureaImage.src, caption: "Prototype frame.", supports: "Supports claim: complete AR vertical slice." }],
    narrative: {
      context: "Student project to explore AR-first multiplayer interactions on smartphone devices.",
      challenge: "Maintain spatial clarity and stable performance while supporting real-time AR interactions.",
      approach: "Built a lightweight interaction architecture and optimized asset setup for reliable mobile behavior.",
      impact: "The team delivered a fully playable prototype with clear onboarding and stable core interactions.",
    },
    links: {},
  },
  {
    slug: "cozy-winter-market",
    title: "Cozy Winter Market",
    tagline: "Relaxed builder loop centered on atmosphere and progression",
    summary: "A cozy management prototype where decoration and layout choices drive visitor behavior and economy.",
    year: "2021",
    status: "Prototype",
    cover: cozyWinterMarketImage,
    stack: ["Unity", "Game Design", "Simulation"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: "Gameplay loop owner",
      timeline: "Short student prototype sprint",
      teamSize: "Small student team",
      impact: "Established a complete decorate-build-earn progression loop",
    },
    ownership: { owned: ["Economy loop setup", "Placement and progression logic", "Balancing pass"] },
    contributions: ["Implemented progression systems", "Balanced customer-spend behavior", "Connected decoration to reward pacing"],
    outcomes: ["Playable cozy prototype", "Validated low-pressure progression model"],
    evidence: [{ title: "Cozy Winter Market frame", type: "image", sourceUrl: cozyWinterMarketImage.src, caption: "Prototype scene.", supports: "Supports claim: completed decorate-and-grow loop." }],
    narrative: {
      context: "Prototype focused on calm pacing and easy-to-understand management gameplay.",
      challenge: "Keep progression satisfying without introducing complexity spikes.",
      approach: "Coupled decoration density and shop upgrades to a clear income-feedback system.",
      impact: "Resulted in a readable, relaxing loop with visible player-driven growth.",
    },
    links: {},
  },
  {
    slug: "bomberman",
    title: "Bomberman",
    tagline: "Classic ruleset recreation in a custom engine course",
    summary: "Course project rebuilding Bomberman mechanics with FUDGE engine constraints and clean system logic.",
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
    contributions: ["Implemented core Bomberman interactions", "Built tile-based destruction rules", "Polished round readability"],
    outcomes: ["Playable clone with classic rules"],
    evidence: [{ title: "Bomberman prototype", type: "image", sourceUrl: bombermanImage.src, caption: "In-engine gameplay frame.", supports: "Supports claim: complete core loop implementation." }],
    narrative: {
      context: "Built in an interactive applications course using the FUDGE engine.",
      challenge: "Recreate a known ruleset while handling deterministic timing and map interactions.",
      approach: "Separated movement, explosion, and tile logic into predictable systems.",
      impact: "Produced a stable and understandable clone suitable for course evaluation.",
    },
    links: {},
  },
  {
    slug: "arc-reactor",
    title: "Arc Reactor",
    tagline: "PBR hard-surface prop built for game-ready presentation",
    summary: "Student 3D asset project focused on modeling precision, clean topology, and texture presentation.",
    year: "2020",
    status: "Shipped",
    cover: arcReactorImage,
    stack: ["Blender", "Substance Painter", "3D Modeling"],
    roles: ["3D Artist"],
    proof: {
      role: "Modeling and texturing",
      timeline: "Asset production assignment",
      teamSize: "1 person",
      impact: "Delivered game-ready showcase asset",
    },
    ownership: { owned: ["High/low-poly modeling", "UV setup and baking", "PBR material workflow"] },
    contributions: ["Created hard-surface model", "Produced textured presentation render"],
    outcomes: ["Published model showcase"],
    evidence: [{ title: "Arc Reactor model", type: "image", sourceUrl: arcReactorImage.src, caption: "Asset presentation frame.", supports: "Supports claim: complete game-asset pipeline execution." }],
    narrative: {
      context: "Modeling assignment with focus on real-time-ready asset quality.",
      challenge: "Preserve detail and material readability within practical poly limits.",
      approach: "Applied clean topology, efficient UV layout, and controlled PBR values.",
      impact: "Final asset reached a presentation quality suitable for portfolio use.",
    },
    links: {
      detailUrl: "https://sketchfab.com/atmo_gd",
    },
  },
  {
    slug: "mjolnir",
    title: "Mjölnir",
    tagline: "Stylized hero prop with game-asset production workflow",
    summary: "Student prop project focused on shape language, material definition, and reliable export pipeline.",
    year: "2020",
    status: "Shipped",
    cover: mjolnirImage,
    stack: ["Blender", "Substance Painter", "3D Modeling"],
    roles: ["3D Artist"],
    proof: {
      role: "Modeling and texturing",
      timeline: "Asset production assignment",
      teamSize: "1 person",
      impact: "Produced complete stylized hero prop",
    },
    ownership: { owned: ["Model and silhouette pass", "Material authoring", "Portfolio presentation"] },
    contributions: ["Built complete prop from blockout to texture", "Prepared game-ready export"],
    outcomes: ["Published portfolio-ready model"],
    evidence: [{ title: "Mjölnir model", type: "image", sourceUrl: mjolnirImage.src, caption: "Asset showcase frame.", supports: "Supports claim: full model-to-presentation execution." }],
    narrative: {
      context: "Student task to create a full game asset from concept to presentation.",
      challenge: "Balance stylization with material readability and believable scale.",
      approach: "Iterated on silhouette and detail density, then finalized in a PBR texturing workflow.",
      impact: "Resulted in a clean, portfolio-ready hero prop model.",
    },
    links: {
      detailUrl: "https://sketchfab.com/atmo_gd",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
