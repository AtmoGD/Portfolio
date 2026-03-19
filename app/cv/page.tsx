"use client";

import { cvContent } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function CvPage() {
  const { language, t } = useI18n();

  return (
    <section className="stack-lg">
      <header className="section-heading">
        <p className="eyebrow">{t("navCv")}</p>
        <h1>{t("cvTitle")}</h1>
        <p className="muted">{t("cvSub")}</p>
      </header>

      <article className="card stack-md">
        <h2>{t("workExperience")}</h2>
        <ul>
          {cvContent.work.map((item) => (
            <li key={item.period + item.title.en}>
              <strong>{item.period}</strong> — {localize(item.title, language)}
              <ul>
                {localize(item.details, language).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>

      <article className="card stack-md">
        <h2>{t("education")}</h2>
        <ul>
          {cvContent.education.map((item) => (
            <li key={item.period + item.title.en}>
              <strong>{item.period}</strong> — {localize(item.title, language)}
              <ul>
                {localize(item.details, language).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>

      <article className="card stack-md">
        <h2>{t("certificates")}</h2>
        <ul>
          {cvContent.foundations.map((item) => (
            <li key={item.period + item.title.en}>
              <strong>{item.period}</strong> — {localize(item.title, language)}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
