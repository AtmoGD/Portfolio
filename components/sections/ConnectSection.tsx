"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";

type Accent = "pink" | "cyan" | "amber" | "violet";

const LINKS: {
  href: string;
  label: string;
  handle: string;
  icon: typeof Mail;
  accent: Accent;
  desc: { en: string; de: string };
}[] = [
  {
    href: "mailto:dennishawran@gmail.com",
    label: "Email",
    handle: "dennishawran@gmail.com",
    icon: Mail,
    accent: "pink",
    desc: {
      en: "Fastest way to my inbox.",
      de: "Schnellster Weg zu meinem Postfach.",
    },
  },
  {
    href: "https://github.com/AtmoGD",
    label: "GitHub",
    handle: "@AtmoGD",
    icon: Github,
    accent: "cyan",
    desc: {
      en: "Where the code lives.",
      de: "Wo der Code wohnt.",
    },
  },
  {
    href: "https://atmogd.itch.io/",
    label: "itch.io",
    handle: "@atmogd",
    icon: Gamepad2,
    accent: "amber",
    desc: {
      en: "Play my games.",
      de: "Spiel meine Games.",
    },
  },
  {
    href: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
    label: "LinkedIn",
    handle: "Dennis Hawran",
    icon: Linkedin,
    accent: "violet",
    desc: {
      en: "The formal version.",
      de: "Die formale Version.",
    },
  },
];

const accentBorder: Record<Accent, string> = {
  pink: "hover:border-neon-pink hover:shadow-neon-pink",
  cyan: "hover:border-neon-cyan hover:shadow-neon-cyan",
  amber: "hover:border-neon-amber hover:shadow-neon-amber",
  violet:
    "hover:border-neon-violet hover:shadow-[0_0_20px_rgba(185,103,255,0.5)]",
};

const accentText: Record<Accent, string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  violet: "text-neon-violet",
};

const accentBg: Record<Accent, string> = {
  pink: "bg-neon-pink/10",
  cyan: "bg-neon-cyan/10",
  amber: "bg-neon-amber/10",
  violet: "bg-neon-violet/10",
};

export function ConnectSection() {
  const { i18n } = useTranslation();
  const lang: "de" | "en" = (i18n.language as "de" | "en") === "de" ? "de" : "en";

  return (
    <section className="py-20 sm:py-28 bg-ink-50 border-y-2 border-phosphor/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          kicker="MULTIPLAYER"
          title={lang === "de" ? "Let's Connect" : "Let's Connect"}
          accent="cyan"
          align="center"
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={link.href as any}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative block bg-ink border-2 border-phosphor/15 p-5 h-full transition-all hover:-translate-y-1",
                    accentBorder[link.accent]
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border-2",
                        accentBg[link.accent],
                        accentText[link.accent]
                      )}
                      style={{ borderColor: "currentColor" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "w-4 h-4 text-phosphor-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        `group-hover:${accentText[link.accent]}`
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "arcade-title text-base sm:text-lg",
                        accentText[link.accent]
                      )}
                    >
                      {link.label}
                    </span>
                    <span className="font-mono text-base sm:text-lg text-phosphor truncate font-bold">
                      {link.handle}
                    </span>
                    <span className="text-base text-phosphor-dim mt-2">
                      {link.desc[lang]}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
