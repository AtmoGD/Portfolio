import type { StaticImageData } from "next/image";

export type ProjectStatus = "Shipped" | "Prototype" | "Research";

export interface ProjectLinks {
  playUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  detailUrl?: string;
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
  contributions: string[];
  outcomes: string[];
  cover?: StaticImageData;
  links: ProjectLinks;
}
