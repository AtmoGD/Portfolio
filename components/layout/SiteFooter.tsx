"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Github, Mail, Gamepad2, Linkedin } from "lucide-react";
import { usePreferences } from "@/lib/usePreferences";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  const { t } = useTranslation();
  const { prefs, update, hydrated } = usePreferences();

  const socials = [
    {
      href: "mailto:dennishawran@gmail.com",
      label: "Email",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      href: "https://github.com/AtmoGD",
      label: "GitHub",
      icon: <Github className="w-4 h-4" />,
    },
    {
      href: "https://atmogd.itch.io/",
      label: "itch.io",
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      href: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
      label: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="mt-32 border-t-2 border-phosphor/10 bg-ink-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
        <div className="flex flex-col gap-3">
          <span className="arcade-title text-xs text-neon-pink">
            DENNIS HAWRAN
          </span>
          <span className="font-mono text-xs text-phosphor-dim max-w-xs">
            {t("footer.madeWith")}.
          </span>
          <span className="font-mono text-[10px] text-phosphor-dim/60">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-phosphor-dim">
            Links
          </span>
          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href as any}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border-2 border-phosphor/20 text-phosphor-dim hover:text-neon-pink hover:border-neon-pink transition-colors font-mono text-xs uppercase"
                >
                  {s.icon}
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-phosphor-dim">
            Settings
          </span>
          <div className="flex flex-col gap-2">
            <ToggleRow
              label={t("footer.toggleCrt")}
              value={hydrated ? prefs.crt : true}
              onChange={(v) => update({ crt: v })}
              labelOn={t("footer.on")}
              labelOff={t("footer.off")}
            />
          </div>
          <span className="font-mono text-[10px] text-phosphor-dim/60 max-w-[18em]">
            {t("footer.konamiHint")}: ↑↑↓↓←→←→BA
          </span>
        </div>
      </div>
    </footer>
  );
}

function ToggleRow({
  label,
  value,
  onChange,
  labelOn,
  labelOff,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  labelOn: string;
  labelOff: string;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="inline-flex items-center gap-3 font-mono text-xs text-phosphor-dim hover:text-neon-cyan transition-colors"
      aria-pressed={value}
    >
      <span className="min-w-[6em]">{label}</span>
      <span
        className={cn(
          "px-2 py-0.5 border-2",
          value
            ? "border-neon-lime text-neon-lime"
            : "border-phosphor-dim/40 text-phosphor-dim"
        )}
      >
        {value ? labelOn : labelOff}
      </span>
    </button>
  );
}
