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
  school: <GraduationCap className="w-3.5 h-3.5" />,
  college: <BookOpen className="w-3.5 h-3.5" />,
  desk: <Laptop className="w-3.5 h-3.5" />,
  briefcase: <Briefcase className="w-3.5 h-3.5" />,
  wrench: <Wrench className="w-3.5 h-3.5" />,
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
    <ol className="relative border-l-2 border-phosphor/20 ml-3 space-y-10">
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
                "absolute -left-[13px] top-1 flex items-center justify-center w-6 h-6 bg-ink border-2",
                entry.highlight ? a.border : "border-phosphor/40",
                entry.highlight && a.text
              )}
            >
              {iconMap[entry.icon]}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-sm uppercase tracking-widest text-phosphor-dim font-bold">
                {period}
              </span>
              <h3
                className={cn(
                  "arcade-title text-base sm:text-lg",
                  entry.highlight ? a.text : "text-phosphor"
                )}
              >
                {institution}
              </h3>
              <span className="text-base sm:text-lg text-phosphor">
                {title}
              </span>
              {description && (
                <p className="text-sm sm:text-base text-phosphor/80 max-w-xl mt-1 leading-relaxed">
                  {description}
                </p>
              )}
              {grade && (
                <span className="mt-2 inline-flex self-start items-center gap-2 font-mono text-sm uppercase tracking-widest text-phosphor-dim font-bold">
                  <span className="w-1.5 h-1.5 bg-phosphor-dim" />
                  Note: {grade}
                </span>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
