"use client";

import Link from "next/link";
import { aboutContent, profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

const timeline = [
  { period: "2022 – Present", title: { en: "Working Student · University of Hohenheim", de: "Werkstudent · Universität Hohenheim" } },
  { period: "2022 – 2024", title: { en: "M.A. Interactive Media Systems · University of Augsburg", de: "M.A. Interaktive Mediensysteme · Hochschule Augsburg" } },
  { period: "2019 – 2022", title: { en: "B.Sc. Media Informatics · University of Furtwangen", de: "B.Sc. Medieninformatik · Hochschule Furtwangen" } },
  { period: "2020 – 2022", title: { en: "Unity Tutor & GameLab Internship", de: "Unity Tutor & GameLab Praktikum" } },
];

export default function AboutPage() {
  const { language, t } = useI18n();

  return (
    <section className="stack-lg">
      <header className="section-heading">
        <p className="eyebrow">{t("about")}</p>
        <h1>{t("aboutTitle")}</h1>
        <p className="muted">{localize(profile.location, language)}</p>
      </header>

      <article className="card stack-md">
        <h2>{t("summary")}</h2>
        <p>{localize(aboutContent.summary, language)}</p>
      </article>

      <article className="card stack-md">
        <h2>{t("coreStrengths")}</h2>
        <ul>
          {localize(aboutContent.strengths, language).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="card stack-md">
        <h2>{t("skills")}</h2>
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
            <h4>{t("focus")}</h4>
            <p>Playable systems, interaction quality, prototype-to-delivery flow</p>
          </div>
        </div>
      </article>

      <article className="card stack-md">
        <h2>Timeline</h2>
        <ul>
          {timeline.map((item) => (
            <li key={item.period + item.title.en}>
              <strong>{item.period}</strong> — {localize(item.title, language)}
            </li>
          ))}
        </ul>
      </article>

      <article className="card stack-md">
        <h2>{t("detailedCv")}</h2>
        <p>{t("detailedCvTeaser")}</p>
        <div className="link-row">
          <Link className="button" href="/cv">
            {t("openCv")}
          </Link>
        </div>
      </article>
    </section>
  );
}
