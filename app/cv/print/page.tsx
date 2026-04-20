"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Gamepad2, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { education, work } from "@/content/cv";
import { skills } from "@/content/skills";
import { cn } from "@/lib/cn";

type IconKey = "school" | "college" | "desk" | "briefcase" | "wrench";

export default function CvPrintPage() {
  const { t, i18n } = useTranslation();
  const params = useSearchParams();

  // Auto-trigger print when URL says so (?print=1). User gesture came from
  // clicking "Download CV" on the parent page — legit trigger.
  useEffect(() => {
    if (params?.get("print") !== "1") return;
    const id = window.setTimeout(() => window.print(), 400);
    return () => window.clearTimeout(id);
  }, [params]);

  const name = "Dennis Hawran";
  const role = t("hero.role");
  const location = t("hero.location");
  const tagline = t("hero.tagline");
  const profileSentence = (() => {
    const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
    return Array.isArray(paragraphs) ? paragraphs[0] : "";
  })();

  return (
    <main className="cv-print-page min-h-screen bg-white text-[#15151c] py-10 print:py-0">
      <article className="cv-print-sheet mx-auto w-full max-w-[210mm] px-8 sm:px-14 py-10 print:p-0 print:mx-0 bg-white">
        {/* Header */}
        <header className="flex flex-col gap-4 border-b-2 border-[#ff2e63] pb-6 mb-7">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff2e63] mb-1 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Portfolio · Gameplay Programmer
              </div>
              <h1 className="arcade-title text-3xl sm:text-4xl text-[#15151c] leading-tight">
                {name}
              </h1>
              <p className="mt-2 font-mono text-base text-[#15151c]">
                &gt; {role}{" "}
                <span className="text-[#6c7078]">· {tagline}</span>
              </p>
            </div>
            <div className="text-right font-mono text-xs leading-relaxed">
              <a
                href="mailto:dennishawran@gmail.com"
                className="block text-[#15151c] hover:text-[#ff2e63]"
              >
                <Mail className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                dennishawran@gmail.com
              </a>
              <a
                href="https://github.com/AtmoGD"
                className="block text-[#15151c]"
              >
                <Github className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                github.com/AtmoGD
              </a>
              <a
                href="https://www.linkedin.com/in/dennis-hawran-30497b19a/"
                className="block text-[#15151c]"
              >
                <Linkedin className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                linkedin.com/in/dennis-hawran
              </a>
              <span className="block text-[#15151c]">
                <MapPin className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                {location}
              </span>
            </div>
          </div>
        </header>

        {/* Profile */}
        {profileSentence && (
          <PrintSection title={t("cv.profile", { defaultValue: "Profile" })} accent="#ff2e63">
            <p className="text-[13px] leading-relaxed text-[#15151c]">
              {profileSentence}
            </p>
          </PrintSection>
        )}

        {/* Skills */}
        <PrintSection title={t("cv.skills")} accent="#ff2e63">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5 text-[13px]">
            {skills.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between border-b border-dotted border-[#15151c]/20 pb-0.5"
              >
                <span className="font-semibold">{s.name}</span>
                <span className="font-mono text-[11px] text-[#15151c]/70">
                  {s.level}/99
                </span>
              </li>
            ))}
          </ul>
        </PrintSection>

        {/* Work */}
        <PrintSection title={t("cv.work")} accent="#ffa800">
          <PrintTimeline
            entries={work}
            namespace="cv.workEntries"
            t={t}
            accent="#ffa800"
            fieldName="company"
          />
        </PrintSection>

        {/* Education */}
        <PrintSection title={t("cv.education")} accent="#0099cc">
          <PrintTimeline
            entries={education}
            namespace="cv.educationEntries"
            t={t}
            accent="#0099cc"
            fieldName="institution"
            showGrade
          />
        </PrintSection>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-[#15151c]/15 flex items-center justify-between font-mono text-[10px] text-[#15151c]/60">
          <span>Dennis Hawran — Portfolio CV</span>
          <span>
            {i18n.language === "de" ? "Stand:" : "Generated:"}{" "}
            {new Date().toLocaleDateString(
              i18n.language === "de" ? "de-DE" : "en-US",
              { year: "numeric", month: "long" },
            )}
          </span>
          <span>dennis-hawran.dev</span>
        </footer>
      </article>
    </main>
  );
}

function PrintSection({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6 print:break-inside-avoid">
      <h2
        className="arcade-title text-sm uppercase mb-3 flex items-center gap-3"
        style={{ color: accent }}
      >
        <span
          className="inline-block w-3 h-[3px]"
          style={{ backgroundColor: accent }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}

function PrintTimeline({
  entries,
  namespace,
  t,
  accent,
  fieldName,
  showGrade = false,
}: {
  entries: { key: string; icon: IconKey; highlight?: boolean }[];
  namespace: string;
  t: (k: string, o?: any) => string;
  accent: string;
  fieldName: "company" | "institution";
  showGrade?: boolean;
}) {
  return (
    <ol className="space-y-3.5">
      {entries.map((entry) => {
        const base = `${namespace}.${entry.key}`;
        const title = t(`${base}.title`);
        const org = t(`${base}.${fieldName}`);
        const period = t(`${base}.period`);
        const description = t(`${base}.description`, { defaultValue: "" });
        const grade = showGrade ? t(`${base}.grade`, { defaultValue: "" }) : "";

        return (
          <li
            key={entry.key}
            className="relative pl-4 print:break-inside-avoid"
            style={{ borderLeft: `2px solid ${accent}33` }}
          >
            <span
              className="absolute -left-[5px] top-1 w-2 h-2"
              style={{ backgroundColor: accent }}
            />
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#15151c]/70 font-bold">
                {period}
              </span>
              {grade && (
                <span
                  className="font-mono text-[10px] uppercase tracking-wider font-bold"
                  style={{ color: accent }}
                >
                  Note: {grade}
                </span>
              )}
            </div>
            <div className="text-[14px] font-semibold text-[#15151c] leading-snug mt-0.5">
              {title}
              <span className="font-normal text-[#15151c]/70">
                {" "}· {org}
              </span>
            </div>
            {description && (
              <p className="mt-1 text-[12px] leading-relaxed text-[#15151c]/85">
                {description}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
