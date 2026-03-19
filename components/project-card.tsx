"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/types/project";
import { localizeWithFallback, useI18n } from "@/src/i18n";

export default function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useI18n();

  return (
    <article className="card project-card">
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

      <div className="link-row">
        <Link href={`/case-study/${project.slug}`} className="text-link">
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
