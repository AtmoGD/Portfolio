import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { featuredProjects, profile } from "@/src/content/site";

export default function HomePage() {
  return (
    <div className="stack-xl">
      <section className="hero card">
        <p className="eyebrow">Gameplay engineering portfolio</p>
        <h1>{profile.name}</h1>
        <p className="lead">{profile.title}</p>
        <p>{profile.intro}</p>

        <div className="chip-row" aria-label="Value highlights">
          {profile.valuePoints.map((point) => (
            <span className="chip" key={point}>
              {point}
            </span>
          ))}
        </div>

        <div className="link-row">
          <Link className="button" href="/projects">
            Explore projects
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="stack-lg">
        <div className="section-heading">
          <p className="eyebrow">Selected systems</p>
          <h2>Work with clear ownership and measurable contribution</h2>
        </div>

        <div className="stack-lg">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
