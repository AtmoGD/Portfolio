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
    heroEyebrow: "Gameplay systems developer",
    exploreProjects: "See featured projects",
    contactIntro: "Start a conversation",
    heroHeadline: "I build gameplay systems that ship and stay maintainable.",
    heroSubline: "Unity-first implementation with clear ownership, fast prototyping, and recruiter-ready outcomes.",
    heroImpactStripLabel: "Trust signals",
    heroQuickFitLabel: "Quick fit for recruiters",
    heroQuickFitRoleLabel: "Role",
    heroQuickFitRoleValue: "Gameplay & systems developer (Unity/C#)",
    heroQuickFitFocusLabel: "Focus",
    heroQuickFitFocusValue: "Combat loops, interaction systems, and implementation clarity",
    heroQuickFitOutcomeLabel: "Typical outcome",
    heroQuickFitOutcomeValue: "Playable builds with visible contribution and stable delivery",
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
    projectsHeader: "Projects with clear role, timeline, and measurable outcome",
    projectsSub: "Start with featured work, then expand the rest if needed.",
    featuredProjectsTitle: "Featured projects",
    moreProjectsTitle: "More projects",
    showMoreProjects: "Show more projects",
    showLessProjects: "Show fewer projects",
    about: "About",
    aboutTitle: "Technical gameplay profile with production-aware execution",
    summary: "Summary",
    coreStrengths: "Core strengths",
    skills: "Skills",
    focus: "Focus",
    detailedCv: "Detailed CV",
    detailedCvTeaser: "Need the full timeline with responsibilities and tech stack?",
    openCv: "Open full CV",
    contactTitle: "Choose your fastest path to a useful conversation",
    contactSub: "Three intent-based options so you can reach the right context quickly.",
    bestReach: "Best way to reach me",
    bestReachCopy: "Email is preferred for opportunities and project discussions. I usually respond within 24 hours on weekdays.",
    professionalLinks: "Professional links",
    recruiterPath: "Recruiter",
    recruiterPathCopy: "Need a quick fit-check for a gameplay role? Send role title, level, and location.",
    hiringPath: "Hiring manager",
    hiringPathCopy: "Want to validate technical fit fast? Share your current challenge and team setup.",
    collaborationPath: "Collaboration",
    collaborationPathCopy: "For prototypes or short projects, include scope, timeline, and expected outcome.",
    availabilityTitle: "Availability & response",
    availabilityCopy: "Open for full-time gameplay/system roles and focused collaborations. Typical response: within 24h (Mon–Fri).",
    cvTitle: "Curriculum Vitae",
    cvSub: "Detailed timeline of education, professional experience, and tutoring work.",
    education: "Education",
    workExperience: "Work Experience",
    certificates: "Certificates & Foundations",
    onThisPage: "On this page",
    progress: "Progress",
    jumpToSection: "Jump to section",
    caseImpactAtGlance: "Project snapshot",
    context: "Context",
    challenge: "Challenge",
    action: "Action",
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
    projectProofAtGlance: "Project proof at a glance",
    challengeActionOutcomeSnapshot: "Challenge action outcome snapshot",
    outcomeOneLiner: "Outcome one-liner",
  },
  de: {
    navHome: "Start",
    navProjects: "Projekte",
    navAbout: "Über mich",
    navCv: "Lebenslauf",
    navContact: "Kontakt",
    switchToGerman: "Sprache auf Deutsch umstellen",
    switchToEnglish: "Sprache auf Englisch umstellen",
    heroEyebrow: "Entwickler für Gameplay-Systeme",
    exploreProjects: "Ausgewählte Projekte ansehen",
    contactIntro: "Gespräch starten",
    heroHeadline: "Ich entwickle Gameplay-Systeme, die auslieferbar und langfristig wartbar sind.",
    heroSubline: "Unity-nahe Umsetzung mit klarer Verantwortung, schnellem Prototyping und nachvollziehbaren Ergebnissen.",
    heroImpactStripLabel: "Vertrauenssignale",
    heroQuickFitLabel: "Schneller Fit-Check für Recruiter",
    heroQuickFitRoleLabel: "Rolle",
    heroQuickFitRoleValue: "Gameplay- & Systems-Entwickler (Unity/C#)",
    heroQuickFitFocusLabel: "Fokus",
    heroQuickFitFocusValue: "Combat-Loops, Interaktionssysteme und saubere Implementierung",
    heroQuickFitOutcomeLabel: "Typisches Ergebnis",
    heroQuickFitOutcomeValue: "Spielbare Builds mit sichtbarem Beitrag und stabiler Lieferung",
    selectedSystems: "Ausgewählte Systeme",
    selectedSystemsTitle: "Arbeit mit klarer Verantwortung und messbarem Beitrag",
    contactLead: "Kontakt",
    caseStudy: "Fallstudie",
    role: "Rolle",
    timeline: "Zeitraum",
    team: "Team",
    impact: "Wirkung",
    roles: "Rollen",
    stack: "Technologien",
    contribution: "Beitrag",
    outcome: "Ergebnis",
    play: "Spielen",
    watch: "Ansehen",
    code: "Code",
    projectsHeader: "Projekte mit klarer Rolle, Zeitraum und messbarem Ergebnis",
    projectsSub: "Starte mit den drei wichtigsten Projekten und öffne danach den Rest bei Bedarf.",
    featuredProjectsTitle: "Hervorgehobene Projekte",
    moreProjectsTitle: "Weitere Projekte",
    showMoreProjects: "Mehr Projekte anzeigen",
    showLessProjects: "Weniger Projekte anzeigen",
    about: "Über mich",
    aboutTitle: "Technisches Gameplay-Profil mit produktionsnaher Umsetzung",
    summary: "Zusammenfassung",
    coreStrengths: "Kernstärken",
    skills: "Fähigkeiten",
    focus: "Fokus",
    detailedCv: "Detaillierter Lebenslauf",
    detailedCvTeaser: "Du brauchst den vollständigen Zeitstrahl mit Aufgaben und Technologie-Stack?",
    openCv: "Vollen Lebenslauf öffnen",
    contactTitle: "Wähle den schnellsten Weg zum passenden Gespräch",
    contactSub: "Drei kontaktbezogene Einstiege, damit du direkt im richtigen Kontext landest.",
    bestReach: "Bester Kontaktweg",
    bestReachCopy: "Für Jobanfragen und Projektgespräche ist E-Mail am besten. Ich antworte an Werktagen meist innerhalb von 24 Stunden.",
    professionalLinks: "Professionelle Profile",
    recruiterPath: "Recruiter",
    recruiterPathCopy: "Du möchtest einen schnellen Fit-Check für eine Gameplay-Rolle? Sende Rolle, Seniorität und Standort.",
    hiringPath: "Hiring Manager",
    hiringPathCopy: "Du willst den technischen Fit schnell prüfen? Teile aktuelle Herausforderung und Team-Setup.",
    collaborationPath: "Zusammenarbeit",
    collaborationPathCopy: "Für Prototypen oder kurze Projekte bitte Scope, Zeitrahmen und Zielergebnis mitschicken.",
    availabilityTitle: "Verfügbarkeit & Antwortzeit",
    availabilityCopy: "Offen für Vollzeitrollen in Gameplay/Systemen sowie fokussierte Zusammenarbeit. Typische Antwortzeit: innerhalb von 24h (Mo–Fr).",
    cvTitle: "Lebenslauf",
    cvSub: "Detaillierter Verlauf von Ausbildung, Berufserfahrung und Tutorentätigkeiten.",
    education: "Ausbildung",
    workExperience: "Berufserfahrung",
    certificates: "Abschlüsse & Grundlagen",
    onThisPage: "Auf dieser Seite",
    progress: "Fortschritt",
    jumpToSection: "Zum Abschnitt springen",
    caseImpactAtGlance: "Projekt-Snapshot",
    context: "Kontext",
    challenge: "Herausforderung",
    action: "Aktion",
    approach: "Vorgehen",
    ownership: "Verantwortung",
    implementationHighlights: "Implementierungs-Highlights",
    playableEvidence: "Nachvollziehbare Evidenz",
    evidenceCopy: "Jedes Artefakt ist einem Claim zugeordnet und startet erst nach explizitem Klick.",
    outcomes: "Ergebnisse",
    links: "Links",
    backToProjects: "Zurück zu Projekten",
    playBuild: "Build spielen",
    watchVideo: "Video ansehen",
    sourceCode: "Quellcode",
    directOwnership: "Direkte Verantwortung",
    keyCollaborators: "Wichtige Zusammenarbeit",
    playEvidence: "Evidenz abspielen",
    projectProofAtGlance: "Projektbeleg auf einen Blick",
    challengeActionOutcomeSnapshot: "Kurzbild aus Herausforderung, Umsetzung und Ergebnis",
    outcomeOneLiner: "Ergebnis in einem Satz",
  },
};

export type CopyKey = keyof (typeof text)["en"];

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
      setLanguage: (nextLanguage) => {
        if (nextLanguage === language) {
          return;
        }

        const active = typeof document !== "undefined" ? (document.activeElement as HTMLElement | null) : null;
        const previousY = typeof window !== "undefined" ? window.scrollY : 0;

        if (typeof document !== "undefined") {
          document.documentElement.classList.add("is-language-transition");
        }

        setLanguageState(nextLanguage);

        if (typeof window !== "undefined") {
          window.requestAnimationFrame(() => {
            window.scrollTo({ top: previousY, behavior: "auto" });
            active?.focus({ preventScroll: true });
            window.setTimeout(() => {
              document.documentElement.classList.remove("is-language-transition");
            }, 180);
          });
        }
      },
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

/**
 * Allows progressive i18n migration for content data.
 * If a value is still plain (English-first legacy strings), we return it as-is.
 * If it is localized, we resolve the current language.
 */
export function localizeWithFallback<T>(value: T | Localized<T>, language: Language): T {
  if (typeof value === "object" && value !== null && "en" in value && "de" in value) {
    return (value as Localized<T>)[language];
  }
  return value as T;
}
