"use client";

import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { featuredProjects, profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function HomePage() {
  const { language, t } = useI18n();

  return (
    <div className="stack-xl">
      <section className="hero card">
        <p className="eyebrow">{t("heroEyebrow")}</p>
        <h1>{profile.name}</h1>
        <p className="lead">{localize(profile.title, language)}</p>
        <p>{localize(profile.intro, language)}</p>

        <div className="chip-row" aria-label="Value highlights">
          {localize(profile.valuePoints, language).map((point) => (
            <span className="chip" key={point}>
              {point}
            </span>
          ))}
        </div>

        <div className="link-row">
          <Link className="button" href="/projects">
            {t("exploreProjects")}
          </Link>
          <Link className="button button-secondary" href="/contact">
            {t("contactLead")}
          </Link>
        </div>
      </section>

      <section className="stack-lg">
        <div className="section-heading">
          <p className="eyebrow">{t("selectedSystems")}</p>
          <h2>{t("selectedSystemsTitle")}</h2>
        </div>

        <div className="stack-lg">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
