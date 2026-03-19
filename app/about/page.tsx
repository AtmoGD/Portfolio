import { profile } from "@/src/content/site";

const timeline = [
  { period: "2022 – Present", title: "Working Student · University of Hohenheim" },
  { period: "2022 – 2024", title: "M.A. Interactive Media Systems · University of Augsburg" },
  { period: "2019 – 2022", title: "B.Sc. Media Informatics · University of Furtwangen" },
  { period: "2020 – 2022", title: "Unity Tutor & GameLab Internship" },
];

export default function AboutPage() {
  return (
    <section className="stack-lg">
      <header className="section-heading">
        <p className="eyebrow">About</p>
        <h1>Technical gameplay profile with production-aware execution</h1>
        <p className="muted">{profile.location}</p>
      </header>

      <article className="card stack-md">
        <h2>Summary</h2>
        <p>
          I’m a gameplay-focused developer with strong Unity/C# foundations and practical Unreal/VR exposure. I
          enjoy translating design intent into clean, testable systems and making contribution boundaries visible so
          teams and recruiters can quickly understand impact.
        </p>
      </article>

      <article className="card stack-md">
        <h2>Core strengths</h2>
        <ul>
          <li>Gameplay systems architecture and implementation</li>
          <li>Rapid prototyping with disciplined scope control</li>
          <li>Cross-functional collaboration with designers and artists</li>
          <li>Documentation and handover quality for maintainability</li>
        </ul>
      </article>

      <article className="card stack-md">
        <h2>Skills</h2>
        <div className="meta-grid">
          <div>
            <h4>Engines</h4>
            <p>Unity, Unreal Engine</p>
          </div>
          <div>
            <h4>Languages</h4>
            <p>C#, C++, Java, Python</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Git, Blender, Substance Painter, Motion Capture Pipelines</p>
          </div>
          <div>
            <h4>Focus</h4>
            <p>Playable systems, interaction quality, prototype-to-delivery flow</p>
          </div>
        </div>
      </article>

      <article className="card stack-md">
        <h2>Timeline</h2>
        <ul>
          {timeline.map((item) => (
            <li key={item.title}>
              <strong>{item.period}</strong> — {item.title}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
