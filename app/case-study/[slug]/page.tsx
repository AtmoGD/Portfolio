import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/src/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="stack-lg">
      <header className="card stack-md">
        <p className="eyebrow">Case study</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.tagline}</p>
        <p>{project.summary}</p>
        <p className="muted">
          {project.year} · {project.status}
        </p>
      </header>

      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          className="case-image"
          placeholder="blur"
        />
      ) : null}

      <section className="card stack-md">
        <h2>Context</h2>
        <p>
          This template highlights delivery context, responsibilities, and implementation decisions. For each
          project, tailor this section with production constraints (team size, timeline, risk) and project goals.
        </p>
      </section>

      <section className="card stack-md">
        <h2>Responsibilities</h2>
        <ul>
          {project.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="card stack-md">
        <h2>Implementation highlights</h2>
        <ul>
          {project.contributions.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="card stack-md">
        <h2>Outcomes</h2>
        <ul>
          {project.outcomes.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>

      <section className="card stack-md">
        <h2>Links</h2>
        <div className="link-row">
          <Link href="/projects" className="text-link">
            Back to projects
          </Link>
          {project.links.playUrl ? (
            <a href={project.links.playUrl} target="_blank" rel="noreferrer" className="text-link">
              Play build
            </a>
          ) : null}
          {project.links.videoUrl ? (
            <a href={project.links.videoUrl} target="_blank" rel="noreferrer" className="text-link">
              Watch video
            </a>
          ) : null}
          {project.links.repoUrl ? (
            <a href={project.links.repoUrl} target="_blank" rel="noreferrer" className="text-link">
              Source code
            </a>
          ) : null}
        </div>
      </section>
    </article>
  );
}
