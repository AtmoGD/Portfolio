"use client";

import ProjectCard from "@/components/project-card";
import DualCta from "@/components/dual-cta";
import { featuredProjects, profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function HomePage() {
  const { language, t } = useI18n();

  return (
    <div className="stack-xl">
      <section className="hero card enter-rise" data-enter="1">
        <p className="eyebrow">{t("heroEyebrow")}</p>
        <h1>{t("heroHeadline")}</h1>
        <p className="lead">{t("heroSubline")}</p>
        <p className="muted">{profile.name} · {localize(profile.title, language)}</p>
        <p>{localize(profile.intro, language)}</p>

        <div className="impact-strip" aria-label={t("heroImpactStripLabel")}>
          {localize(profile.valuePoints, language).map((point) => (
            <span className="impact-pill" key={point}>
              {point}
            </span>
          ))}
        </div>

        <DualCta />
      </section>

      <section className="stack-lg">
        <div className="section-heading">
          <p className="eyebrow">{t("selectedSystems")}</p>
          <h2>{t("selectedSystemsTitle")}</h2>
        </div>

        <div className="stack-lg">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} featuredSnapshot />
          ))}
        </div>
      </section>
    </div>
  );
}
