"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const accentBorder: Record<Project["accent"], string> = {
  pink: "border-neon-pink hover:shadow-neon-pink",
  cyan: "border-neon-cyan hover:shadow-neon-cyan",
  amber: "border-neon-amber hover:shadow-neon-amber",
  lime: "border-neon-lime hover:shadow-[0_0_20px_rgba(155,255,107,0.5)]",
  violet:
    "border-neon-violet hover:shadow-[0_0_20px_rgba(185,103,255,0.5)]",
};

const accentText: Record<Project["accent"], string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

const accentBadge: Record<
  Project["accent"],
  "pink" | "cyan" | "amber" | "lime" | "violet"
> = {
  pink: "pink",
  cyan: "cyan",
  amber: "amber",
  lime: "lime",
  violet: "violet",
};

interface ProjectCartridgeProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCartridge({
  project,
  priority,
}: ProjectCartridgeProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full"
    >
      <Link
        href={`/projects/${project.slug}` as any}
        className={cn(
          "relative block h-full bg-ink-100 border-2 overflow-hidden transition-all duration-200",
          accentBorder[project.accent]
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[75%]">
            <Badge variant={accentBadge[project.accent]}>
              {t(`projects.contexts.${project.context}`)}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={cn(
                "font-mono text-base font-bold px-3 py-1 bg-black/75 border-2",
                accentText[project.accent],
                accentBorder[project.accent]
              )}
            >
              {project.year}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={cn(
                "arcade-title text-lg sm:text-xl",
                accentText[project.accent]
              )}
            >
              {project.title}
            </h3>
            <ArrowUpRight
              className={cn(
                "w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1",
                accentText[project.accent]
              )}
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tagKeys.slice(0, 4).map((tag) => (
              <Badge key={tag}>{t(`tags.${tag}`)}</Badge>
            ))}
          </div>
          <div className="mt-1 flex items-center gap-3 font-mono text-base uppercase tracking-wider text-phosphor font-semibold">
            <span>{t(`projects.roles.${project.roleKey}`)}</span>
            <span className="w-1.5 h-1.5 bg-neon-cyan" />
            <span className="text-phosphor-dim">
              {project.teamSize === 1
                ? "Solo"
                : `${project.teamSize} devs`}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
