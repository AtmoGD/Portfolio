"use client";

import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Coffee, Zap, Code2, Rocket } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { unlock } from "@/lib/achievements";

export function AboutSection() {
  const { t } = useTranslation();
  const endRef = useRef<HTMLDivElement>(null);
  const inView = useInView(endRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (inView) unlock("scrolledAbout");
  }, [inView]);

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const stats = [
    {
      key: "coffeeConsumed",
      value: "∞",
      icon: <Coffee className="w-4 h-4" />,
      accent: "pink" as const,
    },
    {
      key: "gameJams",
      value: "12+",
      icon: <Zap className="w-4 h-4" />,
      accent: "amber" as const,
    },
    {
      key: "yearsCoding",
      value: "8",
      icon: <Code2 className="w-4 h-4" />,
      accent: "cyan" as const,
    },
    {
      key: "projectsShipped",
      value: "10",
      icon: <Rocket className="w-4 h-4" />,
      accent: "lime" as const,
    },
  ];

  const accentClasses = {
    pink: "border-neon-pink text-neon-pink",
    amber: "border-neon-amber text-neon-amber",
    cyan: "border-neon-cyan text-neon-cyan",
    lime: "border-neon-lime text-neon-lime",
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          kicker={t("about.subtitle")}
          title={t("about.title")}
          accent="cyan"
        />

        <div className="mt-10 grid md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-start">
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-phosphor/90">
            {paragraphs.map((p: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                dangerouslySetInnerHTML={{
                  __html: formatText(p),
                }}
              />
            ))}
            <div ref={endRef} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-ink-100 border-2 p-5 sm:p-6 flex flex-col gap-3 ${accentClasses[stat.accent]}`}
              >
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
                  {stat.icon}
                  {t(`about.stats.${stat.key}`)}
                </div>
                <span className="arcade-title text-3xl sm:text-4xl">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatText(s: string) {
  // Convert *word* to italic <em>
  return s.replace(
    /\*(.+?)\*/g,
    '<em class="text-neon-amber not-italic font-semibold">$1</em>'
  );
}
