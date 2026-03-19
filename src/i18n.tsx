"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "de" | "en";

const STORAGE_KEY = "portfolio-language";

const text = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navCv: "CV",
    navContact: "Contact",
    switchToGerman: "Switch language to German",
    switchToEnglish: "Switch language to English",
    heroEyebrow: "Gameplay engineering portfolio",
    exploreProjects: "Explore projects",
    selectedSystems: "Selected systems",
    selectedSystemsTitle: "Work with clear ownership and measurable contribution",
    contactLead: "Contact",
    caseStudy: "Case study",
    role: "Role",
    timeline: "Timeline",
    team: "Team",
    impact: "Impact",
    roles: "Roles",
    stack: "Stack",
    contribution: "Contribution",
    outcome: "Outcome",
    play: "Play",
    watch: "Watch",
    code: "Code",
    projectsHeader: "Playable systems, prototypes, and shipped experiments",
    projectsSub: "Recruiter-first view: each project shows role, technical contribution, and outcomes.",
    about: "About",
    aboutTitle: "Technical gameplay profile with production-aware execution",
    summary: "Summary",
    coreStrengths: "Core strengths",
    skills: "Skills",
    focus: "Focus",
    detailedCv: "Detailed CV",
    detailedCvTeaser: "Need the full timeline with responsibilities and tech stack?",
    openCv: "Open full CV",
    contactTitle: "Let’s talk about gameplay, systems, and product-ready prototypes",
    contactSub: "Reliable channels only for MVP.",
    bestReach: "Best way to reach me",
    bestReachCopy: "Email is preferred for opportunities and project discussions. I usually respond within 1–2 business days.",
    professionalLinks: "Professional links",
    cvTitle: "Curriculum Vitae",
    cvSub: "Detailed timeline of education, professional experience, and tutoring work.",
    education: "Education",
    workExperience: "Work Experience",
    certificates: "Certificates & Foundations",
    onThisPage: "On this page",
    progress: "Progress",
    jumpToSection: "Jump to section",
    caseImpactAtGlance: "Impact at a glance",
    context: "Context",
    challenge: "Challenge",
    approach: "Approach",
    ownership: "Ownership",
    implementationHighlights: "Implementation highlights",
    playableEvidence: "Playable evidence",
    evidenceCopy: "Each artifact is tied to a claim above and requires an explicit click to play.",
    outcomes: "Outcomes",
    links: "Links",
    backToProjects: "Back to projects",
    playBuild: "Play build",
    watchVideo: "Watch video",
    sourceCode: "Source code",
    directOwnership: "Direct ownership",
    keyCollaborators: "Key collaborators",
    playEvidence: "Play evidence",
  },
  de: {
    navHome: "Start",
    navProjects: "Projekte",
    navAbout: "Über mich",
    navCv: "Lebenslauf",
    navContact: "Kontakt",
    switchToGerman: "Sprache auf Deutsch umstellen",
    switchToEnglish: "Sprache auf Englisch umstellen",
    heroEyebrow: "Gameplay-Engineering Portfolio",
    exploreProjects: "Projekte ansehen",
    selectedSystems: "Ausgewählte Systeme",
    selectedSystemsTitle: "Arbeit mit klarer Ownership und messbarem Beitrag",
    contactLead: "Kontakt",
    caseStudy: "Fallstudie",
    role: "Rolle",
    timeline: "Zeitraum",
    team: "Team",
    impact: "Wirkung",
    roles: "Rollen",
    stack: "Stack",
    contribution: "Beitrag",
    outcome: "Ergebnis",
    play: "Spielen",
    watch: "Ansehen",
    code: "Code",
    projectsHeader: "Spielbare Systeme, Prototypen und veröffentlichte Experimente",
    projectsSub: "Recruiter-Ansicht: Jedes Projekt zeigt Rolle, technischen Beitrag und Ergebnisse.",
    about: "Über mich",
    aboutTitle: "Technisches Gameplay-Profil mit produktionsnaher Umsetzung",
    summary: "Zusammenfassung",
    coreStrengths: "Kernstärken",
    skills: "Skills",
    focus: "Fokus",
    detailedCv: "Detaillierter Lebenslauf",
    detailedCvTeaser: "Du brauchst den vollständigen Zeitstrahl mit Aufgaben und Tech-Stack?",
    openCv: "Vollen Lebenslauf öffnen",
    contactTitle: "Lass uns über Gameplay, Systeme und produktionsreife Prototypen sprechen",
    contactSub: "Für den MVP nur verlässliche Kanäle.",
    bestReach: "Bester Kontaktweg",
    bestReachCopy: "Für Jobchancen und Projektgespräche ist E-Mail am besten. Ich antworte meist innerhalb von 1–2 Werktagen.",
    professionalLinks: "Professionelle Links",
    cvTitle: "Lebenslauf",
    cvSub: "Detaillierter Verlauf von Ausbildung, Berufserfahrung und Tutorentätigkeiten.",
    education: "Ausbildung",
    workExperience: "Berufserfahrung",
    certificates: "Abschlüsse & Grundlagen",
    onThisPage: "Auf dieser Seite",
    progress: "Fortschritt",
    jumpToSection: "Zum Abschnitt springen",
    caseImpactAtGlance: "Wirkung auf einen Blick",
    context: "Kontext",
    challenge: "Herausforderung",
    approach: "Vorgehen",
    ownership: "Ownership",
    implementationHighlights: "Implementierungs-Highlights",
    playableEvidence: "Nachvollziehbare Evidenz",
    evidenceCopy: "Jedes Artefakt ist einem Claim zugeordnet und startet erst nach explizitem Klick.",
    outcomes: "Ergebnisse",
    links: "Links",
    backToProjects: "Zurück zu Projekten",
    playBuild: "Build spielen",
    watchVideo: "Video ansehen",
    sourceCode: "Quellcode",
    directOwnership: "Direkte Ownership",
    keyCollaborators: "Wichtige Zusammenarbeit",
    playEvidence: "Evidenz abspielen",
  },
};

type CopyKey = keyof (typeof text)["en"];

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: CopyKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "de" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: (key) => text[language][key],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}

export type Localized<T = string> = {
  en: T;
  de: T;
};

export function localize<T>(value: Localized<T>, language: Language): T {
  return value[language];
}
