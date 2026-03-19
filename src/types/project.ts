import type { StaticImageData } from "next/image";

export type ProjectStatus = "Shipped" | "Prototype" | "Research";

export interface ProjectLinks {
  playUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  detailUrl?: string;
}

export interface ProjectNarrative {
  context: string;
  challenge: string;
  approach: string;
  impact: string;
}

export interface ProjectProof {
  role: string;
  timeline: string;
  teamSize: string;
  impact: string;
}

export interface ProjectOwnership {
  owned: string[];
  collaboratedWith?: string[];
}

export type EvidenceType = "video" | "image";

export interface ProjectEvidence {
  title: string;
  type: EvidenceType;
  sourceUrl: string;
  thumbnailUrl?: string;
  caption: string;
  supports: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  stack: string[];
  roles: string[];
  proof: ProjectProof;
  ownership: ProjectOwnership;
  contributions: string[];
  outcomes: string[];
  evidence: ProjectEvidence[];
  narrative: ProjectNarrative;
  cover?: StaticImageData;
  links: ProjectLinks;
}
