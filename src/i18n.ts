import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "@/locales/de.json";
import en from "@/locales/en.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "de",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
  });
}

export default i18n;
