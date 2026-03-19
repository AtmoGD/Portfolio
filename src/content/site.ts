import type { Project } from "@/src/types/project";

import unthronedImage from "@/assets/Unthroned.png";
import witchWayImage from "@/assets/WitchWay.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";
import oasisImage from "@/assets/Oasis.jpg";
import gravityPongImage from "@/assets/GravityPong.png";

export const profile = {
  name: "Dennis Hawran",
  title: "Gameplay & Systems Developer",
  location: "Augsburg, Germany",
  email: "dennishawran@gmail.com",
  intro:
    "I design and implement playable systems that feel clear for players and maintainable for teams.",
  valuePoints: [
    "Playable prototypes fast",
    "Clear ownership and contribution visibility",
    "Strong Unity/C# foundation with Unreal experience",
  ],
  links: {
    github: "https://github.com/AtmoGD",
    linkedin: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
    itch: "https://atmogd.itch.io/",
    sketchfab: "https://sketchfab.com/atmo_gd",
  },
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
];

export const featuredProjects = projects.filter((project) => project.featured);
