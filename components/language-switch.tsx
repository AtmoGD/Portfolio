"use client";

import { useI18n } from "@/src/i18n";

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="locale-toggle" role="radiogroup" aria-label="Locale">
      <button
        type="button"
        role="radio"
        className={`locale-option ${language === "de" ? "is-active" : ""}`}
        onClick={() => setLanguage("de")}
        aria-label={t("switchToGerman")}
        aria-checked={language === "de"}
      >
        DE
      </button>
      <button
        type="button"
        role="radio"
        className={`locale-option ${language === "en" ? "is-active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-label={t("switchToEnglish")}
        aria-checked={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
