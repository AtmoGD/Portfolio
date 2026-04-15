"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Github, Mail, Gamepad2, Linkedin, RotateCcw, Box } from "lucide-react";
import { usePreferences } from "@/lib/usePreferences";
import { unlock } from "@/lib/achievements";
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
      href: "https://sketchfab.com/atmo_gd",
      label: "Sketchfab",
      icon: <Box className="w-4 h-4" />,
    },
    {
      href: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
      label: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="mt-32 border-t-2 border-phosphor/10 bg-ink-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col md:flex-row gap-10 md:gap-14 justify-between">
        <div className="flex flex-col gap-3">
          <span className="arcade-title text-sm text-neon-pink">
            DENNIS HAWRAN
          </span>
          <span className="font-mono text-sm text-phosphor-dim max-w-xs">
            {t("footer.madeWith")}.
          </span>
          <span className="font-mono text-xs text-phosphor-dim/70">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm uppercase tracking-widest text-phosphor font-bold">
            Links
          </span>
          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href as any}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 border-2 border-phosphor/25 text-phosphor hover:text-neon-pink hover:border-neon-pink transition-colors font-mono text-sm uppercase font-semibold"
                >
                  {s.icon}
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm uppercase tracking-widest text-phosphor font-bold">
            Settings
          </span>
          <ToggleRow
            label={t("footer.toggleCrt")}
            value={hydrated ? prefs.crt : true}
            onChange={(v) => {
              if (!v) unlock("retroMode");
              update({ crt: v });
            }}
            labelOn={t("footer.on")}
            labelOff={t("footer.off")}
          />
          <ResetDataButton
            label={t("footer.resetData")}
            hint={t("footer.resetDataHint")}
          />
          <span className="font-mono text-xs text-phosphor-dim max-w-[20em]">
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
      className="inline-flex self-start items-center justify-between gap-4 font-mono text-sm text-phosphor hover:text-neon-cyan transition-colors"
      aria-pressed={value}
    >
      <span>{label}</span>
      <span
        className={cn(
          "px-2.5 py-1 border-2 font-bold",
          value
            ? "border-neon-lime text-neon-lime"
            : "border-phosphor-dim/50 text-phosphor-dim"
        )}
      >
        {value ? labelOn : labelOff}
      </span>
    </button>
  );
}

function ResetDataButton({ label, hint }: { label: string; hint: string }) {
  function handleReset() {
    try {
      window.localStorage.clear();
      window.sessionStorage.clear();
      // Clear all cookies scoped to current origin
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim();
        if (!name) return;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      });
    } catch {
      // ignore — proceed with reload anyway
    }
    window.location.reload();
  }

  return (
    <button
      onClick={handleReset}
      title={hint}
      className="inline-flex self-start items-center gap-2 px-3 py-2 border-2 border-phosphor-dim/40 text-phosphor-dim font-mono text-sm hover:border-neon-pink hover:text-neon-pink transition-colors"
    >
      <RotateCcw className="w-4 h-4" />
      {label}
    </button>
  );
}
