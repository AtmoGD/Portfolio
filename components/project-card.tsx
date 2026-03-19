import Image from "next/image";
import type { Project } from "@/src/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="project-head">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            className="project-cover"
            placeholder="blur"
          />
        ) : null}
        <div>
          <p className="eyebrow">
            {project.year} · {project.status}
          </p>
          <h3>{project.title}</h3>
          <p className="muted">{project.tagline}</p>
          <p>{project.summary}</p>
        </div>
      </div>

      <div className="meta-grid">
        <div>
          <h4>Role</h4>
          <ul>
            {project.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Stack</h4>
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
        <h4>Contribution</h4>
        <ul>
          {project.contributions.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Outcome</h4>
        <ul>
          {project.outcomes.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </div>

      <div className="link-row">
        <a href={`/case-study/${project.slug}`} className="text-link">
          Case study
        </a>
        {project.links.playUrl ? (
          <a href={project.links.playUrl} target="_blank" rel="noreferrer" className="text-link">
            Play
          </a>
        ) : null}
        {project.links.videoUrl ? (
          <a href={project.links.videoUrl} target="_blank" rel="noreferrer" className="text-link">
            Watch
          </a>
        ) : null}
        {project.links.repoUrl ? (
          <a href={project.links.repoUrl} target="_blank" rel="noreferrer" className="text-link">
            Code
          </a>
        ) : null}
      </div>
    </article>
  );
}
