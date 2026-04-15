"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExpBar } from "@/components/arcade/ExpBar";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { skills } from "@/content/skills";

export function SkillsPreview() {
  const { t } = useTranslation();
  const topSkills = skills.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          kicker="STATS"
          title={t("cv.skills")}
          accent="amber"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-5">
          {topSkills.map((skill) => (
            <ExpBar
              key={skill.name}
              label={skill.name}
              level={skill.level}
              accent={skill.accent}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={"/cv" as any}>
            <Button variant="outline" size="md">
              {t("nav.cv")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
