"use client";

import Link from "next/link";
import type { UrlObject } from "url";
import ProjectCard from "@/components/project-card";
import DualCta from "@/components/dual-cta";
import { featuredProjects, profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function HomePage() {
  const { language, t } = useI18n();

  const decisionEntries: { key: string; href: UrlObject; title: string; copy: string }[] = [
    { key: "systems", href: { pathname: "/projects", query: { filter: "systems" } }, title: t("decisionEntrySystemsTitle"), copy: t("decisionEntrySystemsCopy") },
    { key: "prototype", href: { pathname: "/projects", query: { filter: "prototype" } }, title: t("decisionEntryPrototypeTitle"), copy: t("decisionEntryPrototypeCopy") },
    { key: "shipped", href: { pathname: "/projects", query: { filter: "shipped" } }, title: t("decisionEntryShippedTitle"), copy: t("decisionEntryShippedCopy") },
  ];

  return (
    <div className="stack-xl">
      <section className="hero card home-workbench enter-rise" data-enter="1">
        <div className="workbench-main stack-md">
          <p className="eyebrow">{t("heroEyebrow")}</p>
          <h1>{t("heroHeadline")}</h1>
          <p className="lead">{t("heroSubline")}</p>
          <p>{localize(profile.intro, language)}</p>
          <div className="impact-strip" aria-label={t("heroImpactStripLabel")}>
            {localize(profile.valuePoints, language).map((point) => (
              <span className="impact-pill" key={point}>
                {point}
              </span>
            ))}
          </div>
          <DualCta primaryLabelKey="exploreProjects" secondaryLabelKey="contactIntro" />
        </div>

        <aside className="status-rail" aria-label={t("statusRailLabel")}>
          <h2>{t("statusRailLabel")}</h2>
          <dl>
            <div>
              <dt>{t("statusOpenTo")}</dt>
              <dd>{t("statusOpenToValue")}</dd>
            </div>
            <div>
              <dt>{t("statusLocation")}</dt>
              <dd>{localize(profile.location, language)}</dd>
            </div>
            <div>
              <dt>{t("statusResponse")}</dt>
              <dd>{t("statusResponseValue")}</dd>
            </div>
            <div>
              <dt>{t("statusRoleFocus")}</dt>
              <dd>{localize(profile.title, language)}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="card stack-md" aria-label={t("buildStatsTitle")}>
        <h2>{t("buildStatsTitle")}</h2>
        <div className="build-stats-grid">
          <article>
            <h3>10+</h3>
            <p>{t("buildStatProjects")}</p>
          </article>
          <article>
            <h3>4+</h3>
            <p>{t("buildStatShipped")}</p>
          </article>
          <article>
            <h3>3</h3>
            <p>{t("buildStatFeatured")}</p>
          </article>
          <article>
            <h3>5y+</h3>
            <p>{t("buildStatYears")}</p>
          </article>
        </div>
      </section>

      <section className="stack-md" aria-label={t("decisionEntriesTitle")}>
        <div className="section-heading">
          <p className="eyebrow">{t("decisionEntriesEyebrow")}</p>
          <h2>{t("decisionEntriesTitle")}</h2>
        </div>
        <div className="decision-entry-grid">
          {decisionEntries.map((entry) => (
            <Link key={entry.key} href={entry.href} className="card decision-entry-card">
              <h3>{entry.title}</h3>
              <p className="muted">{entry.copy}</p>
            </Link>
          ))}
        </div>
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
