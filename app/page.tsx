"use client";

import Image from "next/image";
import ProjectCard from "@/components/project-card";
import DualCta from "@/components/dual-cta";
import { featuredProjects, profile } from "@/src/content/site";
import profileImage from "@/assets/profile_compressed.jpg";
import { localize, useI18n } from "@/src/i18n";

export default function HomePage() {
  const { language, t } = useI18n();


  return (
    <div className="stack-xl">
      <section className="hero card home-workbench orbit-spot enter-rise" data-enter="1">
        <div className="workbench-main stack-md">
          <p className="eyebrow">{t("heroEyebrow")}</p>
          <h1 className="signal-line">{t("heroHeadline")}</h1>
          <p className="lead">{t("heroSubline")}</p>
          <p className="muted hero-voice-marker">{t("homeVoiceMarker")}</p>
          <p className="hero-intro-copy">{localize(profile.intro, language)}</p>
          <div className="impact-strip hero-impact-strip" aria-label={t("heroImpactStripLabel")}>
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
          <Image src={profileImage} alt={`${profile.name} portrait`} width={120} height={120} className="profile-avatar" priority />
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

      <section className="stack-lg">
        <div className="section-heading">
          <p className="eyebrow">{t("selectedSystems")}</p>
          <h2>{t("featuredProjectsTitle")}</h2>
        </div>

        <div className="stack-lg">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard project={project} key={project.slug} teaser />
          ))}
        </div>
      </section>
    </div>
  );
}
