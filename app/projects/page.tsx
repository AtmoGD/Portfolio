"use client";

import { useEffect, useMemo, useState } from "react";
import DualCta from "@/components/dual-cta";
import ProjectCard from "@/components/project-card";
import { projects } from "@/src/content/site";
import { useI18n } from "@/src/i18n";

const MOBILE_COLLAPSED_COUNT = 3;

export default function ProjectsPage() {
  const { t } = useI18n();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured).slice(0, 3), []);
  const otherProjects = useMemo(() => projects.filter((project) => !project.featured), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 780px)");
    const apply = () => setIsMobile(mediaQuery.matches);

    apply();
    mediaQuery.addEventListener("change", apply);
    return () => mediaQuery.removeEventListener("change", apply);
  }, []);

  const visibleMoreProjects = !isMobile || showAll ? otherProjects : otherProjects.slice(0, MOBILE_COLLAPSED_COUNT);

  return (
    <section className="stack-lg">
      <div className="section-heading">
        <p className="eyebrow">{t("navProjects")}</p>
        <h1>{t("projectsHeader")}</h1>
        <p className="muted">{t("projectsSub")}</p>
      </div>

      <DualCta compact primaryLabelKey="exploreProjects" secondaryLabelKey="contactIntro" />

      <section className="stack-md" aria-label={t("featuredProjectsTitle")}>
        <h2>{t("featuredProjectsTitle")}</h2>
        <div className="stack-lg">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="stack-md" aria-label={t("moreProjectsTitle")}>
        <h2>{t("moreProjectsTitle")}</h2>
        <div className="stack-lg">
          {visibleMoreProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {isMobile && otherProjects.length > MOBILE_COLLAPSED_COUNT ? (
          <button type="button" className="button button-secondary show-more-btn" onClick={() => setShowAll((prev) => !prev)} aria-expanded={showAll}>
            {showAll ? t("showLessProjects") : t("showMoreProjects")}
          </button>
        ) : null}
      </section>
    </section>
  );
}
