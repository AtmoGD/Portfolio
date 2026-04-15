"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CvTimeline } from "@/components/sections/CvTimeline";
import { ExpBar } from "@/components/arcade/ExpBar";
import { skills } from "@/content/skills";
import { education, work } from "@/content/cv";
import { unlock } from "@/lib/achievements";

export default function CvPage() {
  const { t } = useTranslation();

  useEffect(() => {
    unlock("visitedCv");
  }, []);

  return (
    <PageShell>
      <SectionTitle
        kicker={t("cv.subtitle")}
        title={t("cv.title")}
        accent="amber"
      />

      <div className="mt-12 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
        <section className="space-y-5">
          <h2 className="arcade-title text-lg text-neon-pink">
            ▸ {t("cv.skills")}
          </h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <ExpBar
                key={skill.name}
                label={skill.name}
                level={skill.level}
                accent={skill.accent}
              />
            ))}
          </div>
        </section>

        <div className="space-y-16">
          <section>
            <h2 className="arcade-title text-lg text-neon-cyan mb-6">
              ▸ {t("cv.education")}
            </h2>
            <CvTimeline
              entries={education}
              translationNamespace="cv.educationEntries"
              accent="cyan"
            />
          </section>

          <section>
            <h2 className="arcade-title text-lg text-neon-amber mb-6">
              ▸ {t("cv.work")}
            </h2>
            <CvTimeline
              entries={work}
              translationNamespace="cv.workEntries"
              accent="amber"
            />
          </section>
        </div>
      </div>
    </PageShell>
  );
}
