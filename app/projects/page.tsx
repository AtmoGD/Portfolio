"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DualCta from "@/components/dual-cta";
import ProjectCard from "@/components/project-card";
import { projects } from "@/src/content/site";
import { localizeWithFallback, useI18n } from "@/src/i18n";
import type { Project } from "@/src/types/project";

const MOBILE_COLLAPSED_COUNT = 3;

type FilterId = "all" | "systems" | "prototype" | "shipped" | "jam" | "art";

function matchesFilter(project: Project, filter: FilterId, language: "de" | "en") {
  const stack = project.stack.join(" ").toLowerCase();
  const summary = String(localizeWithFallback(project.summary, language)).toLowerCase();
  const tagline = String(localizeWithFallback(project.tagline, language)).toLowerCase();
  const haystack = `${stack} ${summary} ${tagline}`;

  switch (filter) {
    case "systems":
      return /gameplay|systems|interaction|unity|vr|ar|simulation/.test(haystack);
    case "prototype":
      return project.status === "Prototype";
    case "shipped":
      return project.status === "Shipped";
    case "jam":
      return /jam/.test(haystack);
    case "art":
      return /blender|substance|3d|model|asset|hard-surface/.test(haystack);
    default:
      return true;
  }
}

export default function ProjectsPage() {
  const { t, language } = useI18n();
  const searchParams = useSearchParams();
  const initialFilter = (searchParams.get("filter") || "all") as FilterId;

  const [activeFilter, setActiveFilter] = useState<FilterId>(["all", "systems", "prototype", "shipped", "jam", "art"].includes(initialFilter) ? initialFilter : "all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fromUrl = (searchParams.get("filter") || "all") as FilterId;
    if (["all", "systems", "prototype", "shipped", "jam", "art"].includes(fromUrl)) {
      setActiveFilter(fromUrl);
      setShowAll(false);
    }
  }, [searchParams]);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured).slice(0, 3), []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => matchesFilter(project, activeFilter, language));
  }, [activeFilter, language]);

  const nonFeaturedFiltered = useMemo(() => filteredProjects.filter((project) => !project.featured), [filteredProjects]);

  useEffect(() => {
    const apply = () => {
      const compactByWidth = window.innerWidth <= 780;
      const compactByPointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      setIsMobile(compactByWidth || compactByPointer);
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const visibleMoreProjects = !isMobile || showAll ? nonFeaturedFiltered : nonFeaturedFiltered.slice(0, MOBILE_COLLAPSED_COUNT);

  const filters: { id: FilterId; label: string; count: number }[] = [
    { id: "all", label: t("filterAll"), count: projects.length },
    { id: "systems", label: t("filterSystems"), count: projects.filter((p) => matchesFilter(p, "systems", language)).length },
    { id: "prototype", label: t("filterPrototype"), count: projects.filter((p) => matchesFilter(p, "prototype", language)).length },
    { id: "shipped", label: t("filterShipped"), count: projects.filter((p) => matchesFilter(p, "shipped", language)).length },
    { id: "jam", label: t("filterJam"), count: projects.filter((p) => matchesFilter(p, "jam", language)).length },
    { id: "art", label: t("filterArt"), count: projects.filter((p) => matchesFilter(p, "art", language)).length },
  ];

  return (
    <section className="stack-lg">
      <div className="section-heading">
        <p className="eyebrow">{t("navProjects")}</p>
        <h1>{t("projectsHeader")}</h1>
        <p className="muted">{t("projectsSub")}</p>
      </div>

      <section className="card stack-sm" aria-label={t("projectFilters")}> 
        <h2 className="filters-title">{t("projectFilters")}</h2>
        <div className="filter-chip-row" role="group" aria-label={t("projectFilters") }>
          {filters.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                className={`filter-chip ${active ? "is-active" : ""}`}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowAll(false);
                }}
                aria-pressed={active}
              >
                <span>{filter.label}</span>
                <span className="filter-chip-count" aria-hidden>
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <DualCta compact primaryLabelKey="exploreProjects" secondaryLabelKey="contactIntro" />

      {activeFilter === "all" ? (
        <section className="stack-md" aria-label={t("featuredProjectsTitle")}>
          <h2>{t("featuredProjectsTitle")}</h2>
          <div className="stack-lg">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} teaser />
            ))}
          </div>
        </section>
      ) : null}

      <section className="stack-md" aria-label={t("moreProjectsTitle")}>
        <h2>{activeFilter === "all" ? t("moreProjectsTitle") : t("filteredResults")}</h2>
        <div className="stack-lg">
          {visibleMoreProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} teaser />
          ))}
        </div>
        {visibleMoreProjects.length === 0 ? <p className="muted">{t("noProjectsForFilter")}</p> : null}
        {isMobile && nonFeaturedFiltered.length > MOBILE_COLLAPSED_COUNT ? (
          <button type="button" className="button button-secondary show-more-btn" onClick={() => setShowAll((prev) => !prev)} aria-expanded={showAll}>
            {showAll ? t("showLessProjects") : t("showMoreProjects")}
          </button>
        ) : null}
      </section>
    </section>
  );
}
