"use client";

import { useEffect, useMemo, useRef } from "react";
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/types/project";
import { localizeWithFallback, useI18n, type Language } from "@/src/i18n";

const INTERACTION_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function inferStoryFrame(project: Project, language: Language): { label: { en: string; de: string }; copy: string } {
  const stack = project.stack.join(" ").toLowerCase();
  const timeline = localizeWithFallback(project.proof.timeline, language).toLowerCase();
  const summary = localizeWithFallback(project.summary, language).toLowerCase();

  if (stack.includes("jam") || timeline.includes("jam") || summary.includes("jam")) {
    return {
      label: { en: "Jam pressure", de: "Jam-Druck" },
      copy: "jam",
    };
  }

  if (stack.includes("blender") || stack.includes("3d") || stack.includes("substance")) {
    return {
      label: { en: "Asset pipeline", de: "Asset-Pipeline" },
      copy: "asset",
    };
  }

  if (project.status === "Prototype") {
    return {
      label: { en: "Prototype goal", de: "Prototyp-Ziel" },
      copy: "prototype",
    };
  }

  return {
    label: { en: "System focus", de: "Systemfokus" },
    copy: "system",
  };
}

function storyCopy(frame: string, language: Language) {
  const copy = {
    en: {
      jam: "Time-boxed delivery with ruthless scope cuts, then polish where player readability matters most.",
      asset: "End-to-end production pass from blockout/high-poly through optimization and presentation-ready output.",
      prototype: "Fast validation loop: isolate one interaction risk, iterate quickly, keep findings reusable.",
      system: "Gameplay systems built for predictable iteration, stable integration, and clean handoff under production pressure.",
    },
    de: {
      jam: "Zeitlich harte Box: Scope konsequent reduzieren, dann dort polieren, wo Spiel-Lesbarkeit am meisten zählt.",
      asset: "Durchgängiger Produktionspass vom Blockout/High-Poly über Optimierung bis zum präsentationsreifen Output.",
      prototype: "Schneller Validierungszyklus: ein Interaktionsrisiko isolieren, zügig iterieren, Erkenntnisse wiederverwendbar halten.",
      system: "Gameplay-Systeme für planbare Iteration, stabile Integration und saubere Übergaben unter Produktionsdruck.",
    },
  };

  return copy[language][frame as keyof (typeof copy)["en"]];
}

export default function ProjectCard({ project, featuredSnapshot = false, teaser = false }: { project: Project; featuredSnapshot?: boolean; teaser?: boolean }) {
  const { language, t } = useI18n();
  const cardRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!cardRef.current || typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    cardRef.current.dataset.pointer = isCoarse ? "coarse" : "fine";
  }, []);

  const snapshot = useMemo(() => {
    const frame = inferStoryFrame(project, language);

    return [
      { label: frame.label[language], copy: storyCopy(frame.copy, language) },
      { label: t("action"), copy: localizeWithFallback(project.narrative.approach, language) },
      { label: t("outcome"), copy: localizeWithFallback(project.narrative.impact, language) },
    ];
  }, [language, project, t]);

  function supportsFinePointer() {
    if (typeof window === "undefined") return false;
    return window.matchMedia(INTERACTION_QUERY).matches && !window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  function setStyleVar(name: string, value: string) {
    cardRef.current?.style.setProperty(name, value);
  }

  function updateSpotlightAt(card: HTMLElement, clientX: number, clientY: number) {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setStyleVar("--spotlight-x", `${x}px`);
    setStyleVar("--spotlight-y", `${y}px`);
    setStyleVar("--tilt-x", `${((0.5 - py) * 1.35).toFixed(2)}deg`);
    setStyleVar("--tilt-y", `${((px - 0.5) * 1.35).toFixed(2)}deg`);
  }

  function handlePointerEnter(event: ReactPointerEvent<HTMLElement>) {
    if (!supportsFinePointer()) return;
    const card = event.currentTarget;
    card.dataset.hovering = "true";
    card.style.setProperty("--spotlight-opacity", "1");
    updateSpotlightAt(card, event.clientX, event.clientY);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLElement> | ReactMouseEvent<HTMLElement>) {
    if (!supportsFinePointer()) return;

    const card = event.currentTarget;
    card.dataset.hovering = "true";
    card.style.setProperty("--spotlight-opacity", "1");

    const { clientX, clientY } = event;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      updateSpotlightAt(card, clientX, clientY);
      rafRef.current = null;
    });
  }

  function resetTilt() {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (cardRef.current) {
      cardRef.current.dataset.hovering = "false";
      cardRef.current.style.removeProperty("--spotlight-opacity");
      cardRef.current.style.removeProperty("--spotlight-x");
      cardRef.current.style.removeProperty("--spotlight-y");
      cardRef.current.style.removeProperty("--tilt-x");
      cardRef.current.style.removeProperty("--tilt-y");
    }
  }

  return (
    <article
      ref={cardRef}
      className="card project-card stack-md enter-rise"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onMouseMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
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
          <dt>{t("context")}</dt>
          <dd>{localizeWithFallback(project.narrative.context, language)}</dd>
        </div>
        <div>
          <dt>{t("timeline")}</dt>
          <dd>{localizeWithFallback(project.proof.timeline, language)}</dd>
        </div>
        <div>
          <dt>{t("outcomeMetric")}</dt>
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
      ) : null}

      {!teaser && !featuredSnapshot ? (
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
      ) : null}

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
