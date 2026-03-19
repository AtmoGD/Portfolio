"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyNav from "@/components/case-study-nav";
import EvidencePanel from "@/components/evidence-panel";
import { projects } from "@/src/content/site";
import { useI18n } from "@/src/i18n";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { t } = useI18n();
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { id: "impact", label: t("impact") },
    { id: "context", label: t("context") },
    { id: "challenge", label: t("challenge") },
    { id: "approach", label: t("approach") },
    { id: "ownership", label: t("ownership") },
    { id: "highlights", label: t("implementationHighlights") },
    { id: "evidence", label: t("playableEvidence") },
    { id: "outcomes", label: t("outcomes") },
    { id: "links", label: t("links") },
  ];

  return (
    <article className="case-layout">
      <div className="stack-lg">
        <header className="card stack-md">
          <p className="eyebrow">{t("caseStudy")}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.tagline}</p>
          <p>{project.summary}</p>
          <p className="muted">
            {project.year} · {project.status}
          </p>
        </header>

        {project.cover ? (
          <Image src={project.cover} alt={`${project.title} screenshot`} className="case-image" placeholder="blur" />
        ) : null}

        <section id="impact" className="card impact-strip" aria-labelledby="impact-heading">
          <h2 id="impact-heading">{t("caseImpactAtGlance")}</h2>
          <dl className="proof-row">
            <div>
              <dt>{t("role")}</dt>
              <dd>{project.proof.role}</dd>
            </div>
            <div>
              <dt>{t("timeline")}</dt>
              <dd>{project.proof.timeline}</dd>
            </div>
            <div>
              <dt>{t("team")}</dt>
              <dd>{project.proof.teamSize}</dd>
            </div>
            <div>
              <dt>{t("impact")}</dt>
              <dd>{project.proof.impact}</dd>
            </div>
          </dl>
        </section>

        <section id="context" className="card stack-md">
          <h2>{t("context")}</h2>
          <p>{project.narrative.context}</p>
        </section>

        <section id="challenge" className="card stack-md">
          <h2>{t("challenge")}</h2>
          <p>{project.narrative.challenge}</p>
        </section>

        <section id="approach" className="card stack-md">
          <h2>{t("approach")}</h2>
          <p>{project.narrative.approach}</p>
        </section>

        <section id="ownership" className="card stack-md">
          <h2>{t("ownership")}</h2>
          <div className="meta-grid">
            <div>
              <h3>{t("directOwnership")}</h3>
              <ul>
                {project.ownership.owned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {project.ownership.collaboratedWith?.length ? (
              <div>
                <h3>{t("keyCollaborators")}</h3>
                <ul>
                  {project.ownership.collaboratedWith.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        <section id="highlights" className="card stack-md">
          <h2>{t("implementationHighlights")}</h2>
          <ul>
            {project.contributions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="evidence" className="card stack-md">
          <h2>{t("playableEvidence")}</h2>
          <p className="muted">{t("evidenceCopy")}</p>
          <EvidencePanel evidence={project.evidence} />
        </section>

        <section id="outcomes" className="card stack-md">
          <h2>{t("outcomes")}</h2>
          <ul>
            {project.outcomes.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
          <p>{project.narrative.impact}</p>
        </section>

        <section id="links" className="card stack-md">
          <h2>{t("links")}</h2>
          <div className="link-row">
            <Link href="/projects" className="text-link">
              {t("backToProjects")}
            </Link>
            {project.links.playUrl ? (
              <a href={project.links.playUrl} target="_blank" rel="noreferrer" className="text-link">
                {t("playBuild")}
              </a>
            ) : null}
            {project.links.videoUrl ? (
              <a href={project.links.videoUrl} target="_blank" rel="noreferrer" className="text-link">
                {t("watchVideo")}
              </a>
            ) : null}
            {project.links.repoUrl ? (
              <a href={project.links.repoUrl} target="_blank" rel="noreferrer" className="text-link">
                {t("sourceCode")}
              </a>
            ) : null}
          </div>
        </section>
      </div>

      <aside>
        <CaseStudyNav sections={sections} />
      </aside>
    </article>
  );
}
