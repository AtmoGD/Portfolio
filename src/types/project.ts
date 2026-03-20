import type { StaticImageData } from "next/image";

export type ProjectStatus = "Shipped" | "Prototype" | "Research";

export interface ProjectLinks {
  playUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  detailUrl?: string;
}

export type LocalizedText = { en: string; de: string };
export type MaybeLocalizedText = string | LocalizedText;

export interface ProjectNarrative {
  context: MaybeLocalizedText;
  challenge: MaybeLocalizedText;
  approach: MaybeLocalizedText;
  impact: MaybeLocalizedText;
}

export interface ProjectProof {
  role: MaybeLocalizedText;
  timeline: MaybeLocalizedText;
  teamSize: MaybeLocalizedText;
  impact: MaybeLocalizedText;
}

export interface ProjectOwnership {
  owned: MaybeLocalizedText[];
  collaboratedWith?: MaybeLocalizedText[];
}

export type EvidenceType = "video" | "image";

export interface ProjectEvidence {
  title: MaybeLocalizedText;
  type: EvidenceType;
  sourceUrl: string;
  thumbnailUrl?: string;
  caption: MaybeLocalizedText;
  supports: MaybeLocalizedText;
}

export interface Project {
  slug: string;
  title: string;
  tagline: MaybeLocalizedText;
  summary: MaybeLocalizedText;
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  stack: string[];
  roles: string[];
  proof: ProjectProof;
  ownership: ProjectOwnership;
  contributions: MaybeLocalizedText[];
  outcomes: MaybeLocalizedText[];
  evidence: ProjectEvidence[];
  narrative: ProjectNarrative;
  cover?: StaticImageData;
  links: ProjectLinks;
}
