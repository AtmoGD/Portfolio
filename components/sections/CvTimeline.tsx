"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Wrench,
  BookOpen,
  Laptop,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/cn";

type IconKey = "school" | "college" | "desk" | "briefcase" | "wrench";

const iconMap: Record<IconKey, React.ReactNode> = {
  school: <GraduationCap className="w-4 h-4" />,
  college: <BookOpen className="w-4 h-4" />,
  desk: <Laptop className="w-4 h-4" />,
  briefcase: <Briefcase className="w-4 h-4" />,
  wrench: <Wrench className="w-4 h-4" />,
};

interface Entry {
  key: string;
  icon: IconKey;
  highlight?: boolean;
}

interface CvTimelineProps {
  entries: Entry[];
  translationNamespace: string; // e.g. "cv.educationEntries" or "cv.workEntries"
  accent?: "pink" | "cyan" | "amber";
}

const accentClasses = {
  pink: {
    text: "text-neon-pink",
    border: "border-neon-pink",
    bg: "bg-neon-pink",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    bg: "bg-neon-cyan",
  },
  amber: {
    text: "text-neon-amber",
    border: "border-neon-amber",
    bg: "bg-neon-amber",
  },
};

export function CvTimeline({
  entries,
  translationNamespace,
  accent = "cyan",
}: CvTimelineProps) {
  const { t } = useTranslation();
  const a = accentClasses[accent];

  return (
    <ol className="relative border-l-2 border-phosphor/20 ml-3 space-y-8">
      {entries.map((entry, i) => {
        const base = `${translationNamespace}.${entry.key}`;
        const title = t(`${base}.title`);
        const institution = t(
          `${base}.${translationNamespace.includes("education") ? "institution" : "company"}`
        );
        const period = t(`${base}.period`);
        let description: string | null = null;
        try {
          const d = t(`${base}.description`, {
            defaultValue: "",
          });
          description = d || null;
        } catch {
          description = null;
        }
        const grade =
          translationNamespace.includes("education") &&
          t(`${base}.grade`, { defaultValue: "" });

        return (
          <motion.li
            key={entry.key}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative pl-6"
          >
            <span
              className={cn(
                "absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 bg-ink border-2",
                entry.highlight ? a.border : "border-phosphor/40",
                entry.highlight && a.text
              )}
            >
              {iconMap[entry.icon]}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-phosphor-dim">
                {period}
              </span>
              <h3
                className={cn(
                  "arcade-title text-sm sm:text-base",
                  entry.highlight ? a.text : "text-phosphor"
                )}
              >
                {institution}
              </h3>
              <span className="text-sm text-phosphor/90">{title}</span>
              {description && (
                <p className="text-xs text-phosphor-dim max-w-xl mt-1">
                  {description}
                </p>
              )}
              {grade && (
                <span className="mt-1 inline-flex self-start items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-phosphor-dim">
                  <span className="w-1 h-1 bg-phosphor-dim" />
                  {t("cv.skills")}: {grade}
                </span>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
