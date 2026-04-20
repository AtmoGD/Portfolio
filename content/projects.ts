import type { StaticImageData } from "next/image";

import unthroned from "@/assets/Unthroned.png";
import oasis from "@/assets/Oasis.jpg";
import aurea from "@/assets/Aurea.png";
import cozyWinter from "@/assets/CozyWinterMarket.png";
import pumpkinHarvest from "@/assets/PumpkinHarvest@0.25x.png";
import witchWay from "@/assets/WitchWay.png";
import gravityPong from "@/assets/GravityPong.png";
import bomberman from "@/assets/Bomb.png";
import profile from "@/assets/profile_compressed.jpg";

export type ProjectContext =
  | "Master Thesis"
  | "Bachelor Thesis"
  | "Student Project"
  | "Game Jam"
  | "Hobby";

export type ProjectCategory = "game" | "model";

export type ProjectLinkKind = "play" | "gameplayTeaser" | "modelViewer";

export type Project = {
  slug: string;
  title: string;
  coverImage: StaticImageData;
  year: number;
  roleKey: string;
  teamSize: number;
  duration: string; // English duration, we translate at render if needed
  context: ProjectContext;
  category: ProjectCategory;
  tagKeys: string[];
  techKeys: string[];
  /** Optional external link (itch.io, Sketchfab, download, etc.). Omit when
   *  the only external destination is a trailer that's already embedded. */
  externalLink?: string;
  linkLabel?: ProjectLinkKind;
  descriptionKey: string;
  /** YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  trailerUrl?: string;
  featured?: boolean;
  secret?: boolean;
  accent: "pink" | "cyan" | "amber" | "lime" | "violet";
};

export const projects: Project[] = [
  {
    slug: "unthroned",
    title: "Unthroned",
    coverImage: unthroned,
    year: 2024,
    roleKey: "gameplayProgrammer",
    teamSize: 3,
    duration: "2 semesters",
    context: "Master Thesis",
    category: "game",
    tagKeys: [
      "unity",
      "masterThesis",
      "twinStick",
      "towerDefense",
      "programming",
    ],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/unthroned",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.unthroned",
    trailerUrl: "https://www.youtube.com/embed/_aoRbVDb870",
    featured: true,
    accent: "pink",
  },
  {
    slug: "oasis",
    title: "Oasis",
    coverImage: oasis,
    year: 2022,
    roleKey: "gameplayProgrammer",
    teamSize: 1,
    duration: "2 semesters",
    context: "Bachelor Thesis",
    category: "game",
    tagKeys: ["unreal", "vr", "bachelorThesis", "hardware"],
    techKeys: ["unreal", "vr", "hardware", "programming"],
    descriptionKey: "projects.descriptions.oasis",
    trailerUrl: "https://www.youtube.com/embed/Wh6ieci--3E",
    featured: true,
    accent: "cyan",
  },
  {
    slug: "aurea",
    title: "Aurea",
    coverImage: aurea,
    year: 2021,
    roleKey: "gameplayProgrammer",
    teamSize: 6,
    duration: "2 semesters",
    context: "Student Project",
    category: "game",
    tagKeys: ["unity", "ar", "multiplayer", "studentProject"],
    techKeys: ["unity", "programming", "gameDesign", "ar"],
    descriptionKey: "projects.descriptions.aurea",
    trailerUrl: "https://www.youtube.com/embed/t9RwqJnLjy8",
    featured: true,
    accent: "amber",
  },
  {
    slug: "little-critters",
    title: "Little Critters",
    coverImage: profile,
    year: 2024,
    roleKey: "programmer",
    teamSize: 7,
    duration: "3 days (jam)",
    context: "Game Jam",
    category: "game",
    tagKeys: ["unity", "cozy", "gameJam", "gameDesign"],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/little-critters",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.littleCritters",
    accent: "amber",
  },
  {
    slug: "professor-papillon",
    title: "Professor Papillon",
    coverImage: profile,
    year: 2025,
    roleKey: "programmer",
    teamSize: 8,
    duration: "3 days (jam)",
    context: "Game Jam",
    category: "game",
    tagKeys: ["unity", "cozy", "gameJam", "gameDesign"],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/professor-papillon",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.professorPapillon",
    accent: "lime",
  },
  {
    slug: "cozy-winter-market",
    title: "Cozy Winter Market",
    coverImage: cozyWinter,
    year: 2022,
    roleKey: "programmerDesigner",
    teamSize: 2,
    duration: "3 days (jam)",
    context: "Game Jam",
    category: "game",
    tagKeys: ["unity", "cozy", "gameJam", "gameDesign"],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/cozy-winter-market",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.cozyWinter",
    accent: "cyan",
  },
  {
    slug: "pumpkin-harvest",
    title: "Pumpkin Harvest",
    coverImage: pumpkinHarvest,
    year: 2021,
    roleKey: "soloDeveloper",
    teamSize: 1,
    duration: "3 days (jam)",
    context: "Game Jam",
    category: "game",
    tagKeys: ["unity", "cozy", "gameJam", "gameDesign"],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/pumpkin-harvest",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.pumpkinHarvest",
    accent: "amber",
  },
  {
    slug: "witch-way",
    title: "Witch Way?",
    coverImage: witchWay,
    year: 2021,
    roleKey: "gameplayProgrammer",
    teamSize: 3,
    duration: "2 days (jam)",
    context: "Student Project",
    category: "game",
    tagKeys: ["unity", "arcade", "gameJam", "studentProject"],
    techKeys: ["unity", "programming", "gameDesign"],
    externalLink: "https://atmogd.itch.io/witch-way",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.witchWay",
    accent: "violet",
  },
  {
    slug: "gravity-pong",
    title: "Gravity Pong",
    coverImage: gravityPong,
    year: 2020,
    roleKey: "soloDeveloper",
    teamSize: 1,
    duration: "a few weeks",
    context: "Hobby",
    category: "game",
    tagKeys: ["unity", "machineLearning", "hobby"],
    techKeys: ["unity", "programming", "machineLearning"],
    externalLink: "https://atmogd.itch.io/gravity-pong",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.gravityPong",
    accent: "lime",
  },
  {
    slug: "bomberman",
    title: "Bomberman",
    coverImage: bomberman,
    year: 2020,
    roleKey: "soloDeveloper",
    teamSize: 1,
    duration: "1-2 weeks",
    context: "Student Project",
    category: "game",
    tagKeys: ["fudge", "studentProject", "programming"],
    techKeys: ["fudge", "programming", "engineDevelopment"],
    externalLink: "https://atmogd.github.io/BomberMan/html/Game.html",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.bomberman",
    accent: "pink",
  },
  {
    slug: "coffee-exe",
    title: "Coffee.exe",
    coverImage: profile,
    year: new Date().getFullYear(),
    roleKey: "soloDeveloper",
    teamSize: 1,
    duration: "28 years",
    context: "Hobby",
    category: "game",
    tagKeys: ["hobby", "programming", "gameDesign"],
    techKeys: ["programming", "gameDesign"],
    externalLink: "mailto:dennishawran@gmail.com",
    linkLabel: "play",
    descriptionKey: "projects.descriptions.coffeeExe",
    secret: true,
    accent: "violet",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string, includeSecret = false) {
  const pool = includeSecret ? projects : projects.filter((p) => !p.secret);
  const idx = pool.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prev = idx > 0 ? pool[idx - 1] : pool[pool.length - 1];
  const next = idx < pool.length - 1 ? pool[idx + 1] : pool[0];
  return { prev, next };
}

export function getAllTagKeys(): string[] {
  const set = new Set<string>();
  for (const p of projects) p.tagKeys.forEach((t) => set.add(t));
  return Array.from(set);
}
