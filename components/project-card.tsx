"use client";

import { useMemo, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/types/project";
import { localizeWithFallback, useI18n } from "@/src/i18n";

const INTERACTION_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function ProjectCard({ project, featuredSnapshot = false }: { project: Project; featuredSnapshot?: boolean }) {
  const { language, t } = useI18n();
  const cardRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const snapshot = useMemo(
    () => [
      { label: t("challenge"), copy: localizeWithFallback(project.narrative.challenge, language) },
      { label: t("action"), copy: localizeWithFallback(project.narrative.approach, language) },
      { label: t("outcome"), copy: localizeWithFallback(project.narrative.impact, language) },
    ],
    [language, project.narrative.approach, project.narrative.challenge, project.narrative.impact, t],
  );

  function supportsFinePointer() {
    if (typeof window === "undefined") return false;
    return window.matchMedia(INTERACTION_QUERY).matches && !window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  function setStyleVar(name: string, value: string) {
    cardRef.current?.style.setProperty(name, value);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (!supportsFinePointer()) return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      setStyleVar("--spotlight-x", `${x}px`);
      setStyleVar("--spotlight-y", `${y}px`);
      setStyleVar("--tilt-x", `${((0.5 - py) * 2.2).toFixed(2)}deg`);
      setStyleVar("--tilt-y", `${((px - 0.5) * 2.2).toFixed(2)}deg`);
      rafRef.current = null;
    });
  }

  function resetTilt() {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    cardRef.current?.style.removeProperty("--spotlight-x");
    cardRef.current?.style.removeProperty("--spotlight-y");
    cardRef.current?.style.removeProperty("--tilt-x");
    cardRef.current?.style.removeProperty("--tilt-y");
  }

  return (
    <article
      ref={cardRef}
      className="card project-card stack-md enter-rise"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      data-enter="2"
    >
      <div className="project-head">
        {project.cover ? <Image src={project.cover} alt={`${project.title} cover`} className="project-cover" placeholder="blur" /> : null}
        <div className="stack-md">
          <p className="eyebrow">
            {project.year} · {project.status}
          </p>
          <h3>{project.title}</h3>
          <p className="muted">{localizeWithFallback(project.tagline, language)}</p>
          <p>{localizeWithFallback(project.summary, language)}</p>
        </div>
      </div>

      <dl className="proof-row" aria-label={t("projectProofAtGlance")}>
        <div>
          <dt>{t("role")}</dt>
          <dd>{localizeWithFallback(project.proof.role, language)}</dd>
        </div>
        <div>
          <dt>{t("timeline")}</dt>
          <dd>{localizeWithFallback(project.proof.timeline, language)}</dd>
        </div>
        <div>
          <dt>{t("outcome")}</dt>
          <dd>{localizeWithFallback(project.proof.impact, language)}</dd>
        </div>
      </dl>

      {featuredSnapshot ? (
        <section className="snapshot-grid" aria-label={t("challengeActionOutcomeSnapshot")}>
          {snapshot.map((item) => (
            <article key={item.label} className="snapshot-item">
              <h4>{item.label}</h4>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>
      ) : (
        <>
          <div className="meta-grid card-meta">
            <section className="card-section">
              <h4>{t("roles")}</h4>
              <ul>
                {project.roles.map((role) => (
                  <li key={String(localizeWithFallback(role, language))}>{localizeWithFallback(role, language)}</li>
                ))}
              </ul>
            </section>
            <section className="card-section">
              <h4>{t("stack")}</h4>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="card-section">
            <h4>{t("contribution")}</h4>
            <ul>
              {project.contributions.map((point) => (
                <li key={String(localizeWithFallback(point, language))}>{localizeWithFallback(point, language)}</li>
              ))}
            </ul>
          </section>

          <section className="card-section">
            <h4>{t("outcome")}</h4>
            <ul>
              {project.outcomes.map((result) => (
                <li key={String(localizeWithFallback(result, language))}>{localizeWithFallback(result, language)}</li>
              ))}
            </ul>
          </section>
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
