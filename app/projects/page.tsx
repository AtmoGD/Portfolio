"use client";

import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <PageShell>
      <SectionTitle
        kicker={t("projects.subtitle")}
        title={t("projects.title")}
        accent="pink"
      />
      <div className="mt-12">
        <ProjectsGrid />
      </div>
    </PageShell>
  );
}
