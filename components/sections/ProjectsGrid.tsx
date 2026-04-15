"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "@/content/projects";
import { ProjectCartridge } from "@/components/arcade/ProjectCartridge";
import { cn } from "@/lib/cn";

const FILTERS = [
  { key: "all", tagKeys: null },
  { key: "games", tagKeys: null, category: "game" as const },
  { key: "models", tagKeys: null, category: "model" as const },
  { key: "unity", tagKeys: ["unity"] },
  { key: "unreal", tagKeys: ["unreal"] },
  { key: "vr", tagKeys: ["vr", "ar"] },
  { key: "gameJam", tagKeys: ["gameJam"] },
];

export function ProjectsGrid() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const f = FILTERS.find((ff) => ff.key === activeFilter);
    if (!f || f.key === "all") return projects;
    if (f.category) return projects.filter((p) => p.category === f.category);
    if (f.tagKeys)
      return projects.filter((p) =>
        p.tagKeys.some((tag) => f.tagKeys!.includes(tag))
      );
    return projects;
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((filter) => {
          const label =
            filter.key === "all"
              ? t("projects.allFilter")
              : filter.key === "games"
              ? t("projects.gamesCategory")
              : filter.key === "models"
              ? t("projects.modelsCategory")
              : t(`tags.${filter.tagKeys![0]}`);
          const active = filter.key === activeFilter;
          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                "px-4 py-2 font-mono text-xs uppercase tracking-wider border-2 transition-colors",
                active
                  ? "bg-neon-pink border-neon-pink text-black shadow-neon-pink"
                  : "border-phosphor/20 text-phosphor-dim hover:border-neon-cyan hover:text-neon-cyan"
              )}
              aria-pressed={active}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-phosphor-dim">{t("projects.noneFound")}</p>
      ) : (
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCartridge project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
