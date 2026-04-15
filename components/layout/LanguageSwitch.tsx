"use client";

import { useTranslation } from "react-i18next";
import { usePreferences } from "@/lib/usePreferences";
import { cn } from "@/lib/cn";

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const { prefs, update, hydrated } = usePreferences();
  const current = hydrated ? prefs.language : i18n.language;

  function switchTo(lang: "de" | "en") {
    update({ language: lang });
    i18n.changeLanguage(lang);
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-1 font-mono text-xs uppercase border-2 border-phosphor/20"
    >
      {(["de", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={cn(
            "px-2 py-1 transition-colors",
            current === lang
              ? "bg-neon-pink text-black"
              : "text-phosphor-dim hover:text-neon-cyan"
          )}
          aria-pressed={current === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
