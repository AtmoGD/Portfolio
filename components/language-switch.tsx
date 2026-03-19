"use client";

import { useI18n } from "@/src/i18n";

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="lang-switch" role="group" aria-label="Language switch">
      <button
        type="button"
        className={`nav-link ${language === "de" ? "is-active" : ""}`}
        onClick={() => setLanguage("de")}
        aria-label={t("switchToGerman")}
        aria-pressed={language === "de"}
      >
        DE
      </button>
      <button
        type="button"
        className={`nav-link ${language === "en" ? "is-active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-label={t("switchToEnglish")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
