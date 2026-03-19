"use client";

import { useMemo, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/types/project";
import { localizeWithFallback, useI18n } from "@/src/i18n";

export default function ProjectCard({ project, featuredSnapshot = false }: { project: Project; featuredSnapshot?: boolean }) {
  const { language, t } = useI18n();
  const [tiltStyle, setTiltStyle] = useState<Record<string, string>>({});

  const snapshot = useMemo(
    () => [
      { label: t("challenge"), copy: localizeWithFallback(project.narrative.challenge, language) },
      { label: t("action"), copy: localizeWithFallback(project.narrative.approach, language) },
      { label: t("outcome"), copy: localizeWithFallback(project.narrative.impact, language) },
    ],
    [language, project.narrative.approach, project.narrative.challenge, project.narrative.impact, t],
  );

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setTiltStyle({
      "--spotlight-x": `${x}px`,
      "--spotlight-y": `${y}px`,
      "--tilt-x": `${((0.5 - py) * 2.2).toFixed(2)}deg`,
      "--tilt-y": `${((px - 0.5) * 2.2).toFixed(2)}deg`,
    });
  }

  function resetTilt() {
    setTiltStyle({});
  }

  return (
    <article
      className="card project-card enter-rise"
      style={tiltStyle as CSSProperties}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onBlur={resetTilt}
      data-enter="2"
    >
      <div className="project-head">
        {project.cover ? (
          <Image src={project.cover} alt={`${project.title} cover`} className="project-cover" placeholder="blur" />
        ) : null}
        <div className="stack-md">
          <p className="eyebrow">
            {project.year} · {project.status}
          </p>
          <h3>{project.title}</h3>
          <p className="muted">{localizeWithFallback(project.tagline, language)}</p>
          <p>{localizeWithFallback(project.summary, language)}</p>
        </div>
      </div>

      <dl className="proof-row" aria-label="Project proof at a glance">
        <div>
          <dt>{t("role")}</dt>
          <dd>{localizeWithFallback(project.proof.role, language)}</dd>
        </div>
        <div>
          <dt>{t("timeline")}</dt>
          <dd>{localizeWithFallback(project.proof.timeline, language)}</dd>
        </div>
        <div>
          <dt>{t("team")}</dt>
          <dd>{localizeWithFallback(project.proof.teamSize, language)}</dd>
        </div>
        <div>
          <dt>{t("impact")}</dt>
          <dd>{localizeWithFallback(project.proof.impact, language)}</dd>
        </div>
      </dl>

      {featuredSnapshot ? (
        <section className="snapshot-grid" aria-label="Challenge action outcome snapshot">
          {snapshot.map((item) => (
            <article key={item.label} className="snapshot-item">
              <h4>{item.label}</h4>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>
      ) : (
        <>
          <div className="meta-grid">
            <div>
              <h4>{t("roles")}</h4>
              <ul>
                {project.roles.map((role) => (
                  <li key={String(localizeWithFallback(role, language))}>{localizeWithFallback(role, language)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{t("stack")}</h4>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4>{t("contribution")}</h4>
            <ul>
              {project.contributions.map((point) => (
                <li key={String(localizeWithFallback(point, language))}>{localizeWithFallback(point, language)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t("outcome")}</h4>
            <ul>
              {project.outcomes.map((result) => (
                <li key={String(localizeWithFallback(result, language))}>{localizeWithFallback(result, language)}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="link-row card-cta-row">
        <Link href={`/case-study/${project.slug}`} className="text-link primary-cta-link">
          {t("caseStudy")}
        </Link>
        {project.links.playUrl ? (
          <a href={project.links.playUrl} target="_blank" rel="noreferrer" className="text-link">
            {t("play")}
          </a>
        ) : null}
        {project.links.videoUrl ? (
          <a href={project.links.videoUrl} target="_blank" rel="noreferrer" className="text-link">
            {t("watch")}
          </a>
        ) : null}
        {project.links.repoUrl ? (
          <a href={project.links.repoUrl} target="_blank" rel="noreferrer" className="text-link">
            {t("code")}
          </a>
        ) : null}
      </div>
    </article>
  );
}
