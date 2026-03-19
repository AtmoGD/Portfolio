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
    contributions: [
      "Implemented and iterated core combat/game-state systems",
      "Set up architecture patterns to keep feature work stable",
      "Collaborated across design and engineering to align scope",
    ],
    outcomes: [
      "Released publicly on itch.io",
      "Delivered stable gameplay loop under student project constraints",
    ],
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
    contributions: [
      "Built core interaction flows and technical prototype foundations",
      "Integrated motion-focused interaction behaviors",
      "Validated gameplay concepts through rapid iteration",
    ],
    outcomes: ["Produced a working VR teaser", "Informed bachelor-thesis-adjacent exploration"],
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
    contributions: [
      "Scoped and delivered a complete gameplay loop inside jam constraints",
      "Balanced controls and moment-to-moment readability",
      "Kept implementation lean for rapid delivery",
    ],
    outcomes: ["Public itch.io release", "Demonstrated high-speed execution"],
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
    contributions: [
      "Implemented player loop and tuning passes",
      "Refined feedback timing for better player clarity",
    ],
    outcomes: ["Playable public build"],
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
    contributions: [
      "Implemented gravity-dependent paddle/ball logic",
      "Explored alternative control and balancing strategies",
    ],
    outcomes: ["Validated mechanic concept and technical direction"],
    links: {
      playUrl: "https://atmogd.itch.io/gravity-pong",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
