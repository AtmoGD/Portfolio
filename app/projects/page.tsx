import ProjectCard from "@/components/project-card";
import { projects } from "@/src/content/site";

export default function ProjectsPage() {
  return (
    <section className="stack-lg">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1>Playable systems, prototypes, and shipped experiments</h1>
        <p className="muted">
          Recruiter-first view: each project shows role, technical contribution, and outcomes.
        </p>
      </div>

      <div className="stack-lg">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
