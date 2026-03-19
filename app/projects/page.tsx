"use client";

import ProjectCard from "@/components/project-card";
import { projects } from "@/src/content/site";
import { useI18n } from "@/src/i18n";

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <section className="stack-lg">
      <div className="section-heading">
        <p className="eyebrow">{t("navProjects")}</p>
        <h1>{t("projectsHeader")}</h1>
        <p className="muted">{t("projectsSub")}</p>
      </div>

      <div className="stack-lg">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
