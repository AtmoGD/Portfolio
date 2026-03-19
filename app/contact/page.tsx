import { profile } from "@/src/content/site";

export default function ContactPage() {
  return (
    <section className="stack-lg">
      <header className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about gameplay, systems, and product-ready prototypes</h1>
        <p className="muted">Reliable channels only for MVP.</p>
      </header>

      <article className="card stack-md">
        <h2>Best way to reach me</h2>
        <p>
          Email is preferred for opportunities and project discussions. I usually respond within 1–2 business days.
        </p>
        <div className="link-row">
          <a href={`mailto:${profile.email}`} className="button">
            {profile.email}
          </a>
        </div>
      </article>

      <article className="card stack-md">
        <h2>Professional links</h2>
        <div className="link-row">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub
          </a>
          <a href={profile.links.itch} target="_blank" rel="noreferrer" className="text-link">
            itch.io
          </a>
          <a href={profile.links.sketchfab} target="_blank" rel="noreferrer" className="text-link">
            Sketchfab
          </a>
        </div>
      </article>
    </section>
  );
}
