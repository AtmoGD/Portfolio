"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/types/project";
import { useI18n } from "@/src/i18n";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();

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
          <p className="muted">{project.tagline}</p>
          <p>{project.summary}</p>
        </div>
      </div>

      <dl className="proof-row" aria-label="Project proof at a glance">
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

      <div className="meta-grid">
        <div>
          <h4>{t("roles")}</h4>
          <ul>
            {project.roles.map((role) => (
              <li key={role}>{role}</li>
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
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>{t("outcome")}</h4>
        <ul>
          {project.outcomes.map((result) => (
            <li key={result}>{result}</li>
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
