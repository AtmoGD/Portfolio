"use client";

import Link from "next/link";
import { type CopyKey, useI18n } from "@/src/i18n";

interface DualCtaProps {
  compact?: boolean;
  primaryLabelKey?: CopyKey;
  secondaryLabelKey?: CopyKey;
}

export default function DualCta({
  compact = false,
  primaryLabelKey = "exploreProjects",
  secondaryLabelKey = "contactIntro",
}: DualCtaProps) {
  const { t } = useI18n();

  return (
    <div className={`link-row dual-cta ${compact ? "is-compact" : ""}`}>
      <Link className="button" href="/projects">
        {t(primaryLabelKey)}
      </Link>
      <Link className="button button-secondary" href="/contact">
        {t(secondaryLabelKey)}
      </Link>
    </div>
  );
}
