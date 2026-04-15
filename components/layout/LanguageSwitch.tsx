"use client";

import { useTranslation } from "react-i18next";
import { usePreferences } from "@/lib/usePreferences";
import { cn } from "@/lib/cn";
import { unlock } from "@/lib/achievements";

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const { prefs, update, hydrated } = usePreferences();
  const current = hydrated ? prefs.language : i18n.language;

  function switchTo(lang: "de" | "en") {
    if (current !== lang) unlock("bilingual");
    update({ language: lang });
    i18n.changeLanguage(lang);
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center font-mono text-base uppercase border-2 border-phosphor/40"
    >
      {(["de", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={cn(
            "px-3.5 py-2 transition-colors font-bold tracking-wider",
            current === lang
              ? "bg-neon-pink text-black"
              : "text-phosphor hover:text-neon-cyan hover:bg-phosphor/5"
          )}
          aria-pressed={current === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
