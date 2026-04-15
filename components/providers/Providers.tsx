"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/src/i18n";
import { usePreferences } from "@/lib/usePreferences";
import { unlock } from "@/lib/achievements";

export function Providers({ children }: { children: React.ReactNode }) {
  const { prefs, hydrated } = usePreferences();

  useEffect(() => {
    if (!hydrated) return;
    if (i18n.language !== prefs.language) {
      i18n.changeLanguage(prefs.language);
    }
  }, [hydrated, prefs.language]);

  useEffect(() => {
    if (!hydrated) return;
    const timer = setTimeout(() => unlock("firstVisit"), 1500);
    return () => clearTimeout(timer);
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.dataset.crt = prefs.crt ? "on" : "off";
  }, [hydrated, prefs.crt]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
