import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyNav from "@/components/case-study-nav";
import EvidencePanel from "@/components/evidence-panel";
import { projects } from "@/src/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { id: "impact", label: "Impact" },
    { id: "context", label: "Context" },
    { id: "challenge", label: "Challenge" },
    { id: "approach", label: "Approach" },
    { id: "ownership", label: "Ownership" },
    { id: "highlights", label: "Implementation" },
    { id: "evidence", label: "Evidence" },
    { id: "outcomes", label: "Outcomes" },
    { id: "links", label: "Links" },
  ];

  return (
    <article className="case-layout">
      <div className="stack-lg">
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

        <section id="impact" className="card impact-strip" aria-labelledby="impact-heading">
          <h2 id="impact-heading">Impact at a glance</h2>
          <dl className="proof-row">
            <div>
              <dt>Role</dt>
              <dd>{project.proof.role}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.proof.timeline}</dd>
            </div>
            <div>
              <dt>Team size</dt>
              <dd>{project.proof.teamSize}</dd>
            </div>
            <div>
              <dt>Impact</dt>
              <dd>{project.proof.impact}</dd>
            </div>
          </dl>
        </section>

        <section id="context" className="card stack-md">
          <h2>Context</h2>
          <p>{project.narrative.context}</p>
        </section>

        <section id="challenge" className="card stack-md">
          <h2>Challenge</h2>
          <p>{project.narrative.challenge}</p>
        </section>

        <section id="approach" className="card stack-md">
          <h2>Approach</h2>
          <p>{project.narrative.approach}</p>
        </section>

        <section id="ownership" className="card stack-md">
          <h2>Ownership</h2>
          <div className="meta-grid">
            <div>
              <h3>Direct ownership</h3>
              <ul>
                {project.ownership.owned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {project.ownership.collaboratedWith?.length ? (
              <div>
                <h3>Key collaborators</h3>
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
          <h2>Implementation highlights</h2>
          <ul>
            {project.contributions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="evidence" className="card stack-md">
          <h2>Playable evidence</h2>
          <p className="muted">
            Each artifact is tied to a claim above and requires an explicit click to play.
          </p>
          <EvidencePanel evidence={project.evidence} />
        </section>

        <section id="outcomes" className="card stack-md">
          <h2>Outcomes</h2>
          <ul>
            {project.outcomes.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
          <p>{project.narrative.impact}</p>
        </section>

        <section id="links" className="card stack-md">
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
      </div>

      <aside>
        <CaseStudyNav sections={sections} />
      </aside>
    </article>
  );
}
