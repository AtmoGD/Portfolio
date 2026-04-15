"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  ExternalLink,
  Tag,
  Users,
} from "lucide-react";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject } from "@/content/projects";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { unlock } from "@/lib/achievements";
import { useCheatMode } from "@/lib/useCheatMode";

const accentText = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

const accentBorder = {
  pink: "border-neon-pink",
  cyan: "border-neon-cyan",
  amber: "border-neon-amber",
  lime: "border-neon-lime",
  violet: "border-neon-violet",
};

const accentBadge = {
  pink: "pink",
  cyan: "cyan",
  amber: "amber",
  lime: "lime",
  violet: "violet",
} as const;

const accentGlow = {
  pink: "text-glow-pink",
  cyan: "text-glow-cyan",
  amber: "text-glow-amber",
  lime: "text-glow-cyan",
  violet: "text-glow-pink",
};

export default function ProjectDetailPage() {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const project = slug ? getProject(slug) : undefined;
  const cheating = useCheatMode();

  useEffect(() => {
    if (project && !(project.secret && !cheating)) {
      unlock("openedProject");
    }
  }, [project, cheating]);

  if (!project || (project.secret && !cheating)) {
    if (typeof window !== "undefined") notFound();
    return null;
  }

  const { prev, next } = getAdjacentProjects(project.slug, cheating);
  const description = t(project.descriptionKey);
  const paragraphs = description.split(/\n\n+/);

  const meta = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: t("projects.year"),
      value: String(project.year),
    },
    {
      icon: <Tag className="w-4 h-4" />,
      label: t("projects.context"),
      value: t(`projects.contexts.${project.context}`),
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: t("projects.teamSize"),
      value:
        project.teamSize === 1
          ? "Solo"
          : `${project.teamSize} devs`,
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: t("projects.duration"),
      value: project.duration,
    },
  ];

  return (
    <>
      <section className="relative">
        <div className="relative h-[40vh] sm:h-[55vh] min-h-[320px] w-full overflow-hidden border-b-2 border-phosphor/10">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-scanline-overlay opacity-40 pointer-events-none" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-10 w-full">
              <Link
                href={"/projects" as any}
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-phosphor hover:text-neon-cyan mb-4 font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("projects.backToAll")}
              </Link>
              <h1
                className={cn(
                  "arcade-title text-3xl sm:text-5xl md:text-6xl",
                  accentText[project.accent],
                  accentGlow[project.accent]
                )}
              >
                {project.title}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tagKeys.map((tag) => (
                  <Badge key={tag} variant={accentBadge[project.accent]}>
                    {t(`tags.${tag}`)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageShell>
        <section className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
          <div className="space-y-5">
            <p
              className={cn(
                "font-display text-sm sm:text-base uppercase tracking-widest",
                accentText[project.accent]
              )}
            >
              {t(`projects.roles.${project.roleKey}`)}
            </p>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-phosphor/90"
              >
                {p}
              </p>
            ))}

            {project.externalLink && project.linkLabel && (
              <div className="pt-4">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={project.accent === "pink" ? "primary" : "cyan"} size="lg">
                    <ExternalLink className="w-4 h-4" />
                    {t(`projects.linkLabels.${project.linkLabel}`)}
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            )}
          </div>

          <aside
            className={cn(
              "bg-ink-100 border-2 p-6 sm:p-8 w-full lg:w-[22rem] flex flex-col gap-6",
              accentBorder[project.accent]
            )}
          >
            <span
              className={cn(
                "font-mono text-base sm:text-lg uppercase tracking-widest font-bold",
                accentText[project.accent]
              )}
            >
              ▸ Project Info
            </span>
            <ul className="flex flex-col gap-5">
              {meta.map((m) => (
                <li key={m.label} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-1 shrink-0",
                      accentText[project.accent]
                    )}
                  >
                    {m.icon}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-sm uppercase tracking-widest text-phosphor-dim font-bold">
                      {m.label}
                    </span>
                    <span className="font-mono text-lg text-phosphor font-bold">
                      {m.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-phosphor/15 pt-5">
              <span className="font-mono text-sm uppercase tracking-widest text-phosphor font-bold mb-3 block">
                {t("projects.tech")}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techKeys.map((tk) => (
                  <Badge key={tk}>{t(`tags.${tk}`)}</Badge>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {project.trailerUrl && (
          <section className="mt-16">
            <h2
              className={cn(
                "arcade-title text-base sm:text-lg mb-5",
                accentText[project.accent]
              )}
            >
              ▸ Trailer
            </h2>
            <div
              className={cn(
                "relative aspect-video w-full border-2 overflow-hidden",
                accentBorder[project.accent]
              )}
            >
              <iframe
                src={project.trailerUrl}
                title={`${project.title} — trailer`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {(prev || next) && (
          <section className="mt-20 grid sm:grid-cols-2 gap-4 border-t-2 border-phosphor/10 pt-8">
            {prev && (
              <Link
                href={`/projects/${prev.slug}` as any}
                className="group bg-ink-100 border-2 border-phosphor/20 hover:border-neon-cyan p-5 flex items-center gap-4 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-phosphor-dim group-hover:text-neon-cyan group-hover:-translate-x-1 transition-all" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-phosphor-dim font-bold">
                    {t("projects.prevProject")}
                  </span>
                  <span className="arcade-title text-base text-phosphor group-hover:text-neon-cyan">
                    {prev.title}
                  </span>
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}` as any}
                className="group bg-ink-100 border-2 border-phosphor/20 hover:border-neon-pink p-5 flex items-center gap-4 justify-end text-right transition-colors sm:ml-auto w-full"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-phosphor-dim font-bold">
                    {t("projects.nextProject")}
                  </span>
                  <span className="arcade-title text-base text-phosphor group-hover:text-neon-pink">
                    {next.title}
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-phosphor-dim group-hover:text-neon-pink group-hover:translate-x-1 transition-all" />
              </Link>
            )}
          </section>
        )}
      </PageShell>
    </>
  );
}
