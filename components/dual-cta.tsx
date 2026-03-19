"use client";

import Link from "next/link";
import { useI18n } from "@/src/i18n";

export default function DualCta({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();

  return (
    <div className={`link-row dual-cta ${compact ? "is-compact" : ""}`}>
      <Link className="button" href="/projects">
        {t("exploreProjects")}
      </Link>
      <Link className="button button-secondary" href="/contact">
        {t("contactIntro")}
      </Link>
    </div>
  );
}
