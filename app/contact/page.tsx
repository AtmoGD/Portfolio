"use client";

import DualCta from "@/components/dual-cta";
import { profile } from "@/src/content/site";
import { useI18n } from "@/src/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <section className="stack-lg">
      <header className="section-heading">
        <p className="eyebrow">{t("navContact")}</p>
        <h1>{t("contactTitle")}</h1>
        <p className="muted">{t("contactSub")}</p>
      </header>

      <article className="card stack-md">
        <h2>{t("bestReach")}</h2>
        <p>{t("bestReachCopy")}</p>
        <div className="link-row">
          <a href={`mailto:${profile.email}`} className="button">
            {profile.email}
          </a>
        </div>
      </article>

      <article className="card stack-md">
        <h2>{t("availabilityTitle")}</h2>
        <p>{t("availabilityCopy")}</p>
      </article>

      <section className="intent-grid" aria-label={t("contactLead")}>
        <article className="card stack-md">
          <h2>{t("recruiterPath")}</h2>
          <p>{t("recruiterPathCopy")}</p>
          <a href={`mailto:${profile.email}?subject=Recruiter%20Inquiry`} className="text-link primary-cta-link">
            {t("contactIntro")}
          </a>
        </article>
        <article className="card stack-md">
          <h2>{t("hiringPath")}</h2>
          <p>{t("hiringPathCopy")}</p>
          <a href={`mailto:${profile.email}?subject=Hiring%20Manager%20Inquiry`} className="text-link primary-cta-link">
            {t("contactIntro")}
          </a>
        </article>
        <article className="card stack-md">
          <h2>{t("collaborationPath")}</h2>
          <p>{t("collaborationPathCopy")}</p>
          <a href={`mailto:${profile.email}?subject=Collaboration%20Inquiry`} className="text-link primary-cta-link">
            {t("contactIntro")}
          </a>
        </article>
      </section>

      <article className="card stack-md">
        <h2>{t("professionalLinks")}</h2>
        <div className="link-row">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub
          </a>
          <a href={profile.links.itch} target="_blank" rel="noreferrer" className="text-link">
            itch.io
          </a>
          <a href={profile.links.sketchfab} target="_blank" rel="noreferrer" className="text-link">
            Sketchfab
          </a>
        </div>
      </article>

      <DualCta compact primaryLabelKey="exploreProjects" secondaryLabelKey="contactIntro" />
    </section>
  );
}
