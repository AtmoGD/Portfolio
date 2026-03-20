"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "de" | "en";

const STORAGE_KEY = "portfolio-language";

const text = {
  en: {
    navHome: "Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navProjects: "Projects",
    navAbout: "About",
    navCv: "CV",
    navContact: "Contact",
    switchToGerman: "Switch language to German",
    switchToEnglish: "Switch language to English",
    heroEyebrow: "Builder profile",
    exploreProjects: "See featured projects",
    contactIntro: "Get in touch",
    statusRailLabel: "Status rail",
    statusOpenTo: "Open to",
    statusOpenToValue: "Gameplay/System roles · practical collaborations",
    statusLocation: "Location",
    statusResponse: "Response",
    statusResponseValue: "Usually within 24h (Mon–Fri)",
    statusRoleFocus: "Role focus",
    buildStatsTitle: "Build stats",
    buildStatProjects: "projects in this portfolio",
    buildStatShipped: "public shipped builds",
    buildStatFeatured: "featured case studies",
    buildStatYears: "years of gameplay/system work",
    decisionEntriesEyebrow: "Decision entry points",
    decisionEntriesTitle: "Jump in by the decision you care about",
    decisionEntrySystemsTitle: "Need stable gameplay systems?",
    decisionEntrySystemsCopy: "Open projects focused on system architecture and reliable iteration.",
    decisionEntryPrototypeTitle: "Need fast prototype validation?",
    decisionEntryPrototypeCopy: "Open prototype cases built around testing interaction risk quickly.",
    decisionEntryShippedTitle: "Need evidence from shipped work?",
    decisionEntryShippedCopy: "Open shipped builds with concrete role and outcome proof.",
    projectFilters: "Filter projects",
    filterAll: "All",
    filterSystems: "Gameplay/Systems",
    filterPrototype: "Prototype",
    filterShipped: "Shipped",
    filterJam: "Jam",
    filterArt: "3D/Art",
    filteredResults: "Filtered results",
    noProjectsForFilter: "No projects match this filter yet.",
    heroHeadline: "I build gameplay systems players can feel and teams can extend.",
    heroSubline: "From jam prototypes to shipped student productions: clear state logic, readable interactions, reliable iteration.",
    heroImpactStripLabel: "Builder signals",
    heroQuickFitLabel: "Role fit snapshot",
    heroQuickFitRoleLabel: "Role",
    heroQuickFitRoleValue: "Gameplay & systems developer (Unity/C#)",
    heroQuickFitFocusLabel: "Focus",
    heroQuickFitFocusValue: "Combat state flow, interaction reliability, and practical tooling",
    heroQuickFitOutcomeLabel: "Typical outcome",
    heroQuickFitOutcomeValue: "Playable builds with clear contribution, stable handoff, and fewer late regressions",
    selectedSystems: "Selected work",
    selectedSystemsTitle: "Systems, prototypes, and jams with concrete implementation ownership",
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
    outcomeMetric: "Outcome metric",
    play: "Play",
    watch: "Watch",
    code: "Code",
    projectsHeader: "Projects with clear role, timeline, implementation, and outcome",
    projectsSub: "Start with featured builds, then open the broader project archive.",
    featuredProjectsTitle: "Featured projects",
    moreProjectsTitle: "More projects",
    showMoreProjects: "Show more projects",
    showLessProjects: "Show fewer projects",
    about: "About",
    aboutTitle: "Gameplay developer profile shaped by jams, prototypes, and production constraints",
    summary: "Background",
    coreStrengths: "How I work",
    timelineTitle: "Path so far",
    skills: "Skills",
    focus: "Focus",
    detailedCv: "Detailed CV",
    detailedCvTeaser: "Need the full timeline with responsibilities and tech stack?",
    openCv: "Open full CV",
    contactTitle: "Tell me your intent, I’ll route the conversation fast",
    contactSub: "Pick hiring, collaboration, or question so we can move directly to the useful details.",
    intentHiring: "Hiring",
    intentHiringCopy: "Share role scope, level, location, and team setup.",
    intentCollaboration: "Collaboration",
    intentCollaborationCopy: "Share project scope, timeline, constraints, and expected output.",
    intentQuestion: "Question",
    intentQuestionCopy: "Share your question directly. I reply clearly and quickly.",
    contactIntentCta: "Start this conversation",
    bestReach: "Best way to reach me",
    bestReachCopy: "Email is preferred for opportunities and project discussions. I usually respond within 24 hours on weekdays.",
    professionalLinks: "Professional links",
    recruiterPath: "Rollenabgleich",
    recruiterPathCopy: "For gameplay/system roles, share role scope, seniority, and location.",
    hiringPath: "Hiring manager",
    hiringPathCopy: "Want to validate technical fit fast? Share your current challenge and team setup.",
    collaborationPath: "Collaboration",
    collaborationPathCopy: "For prototypes or short projects, include scope, timeline, and expected outcome.",
    availabilityTitle: "Availability & response",
    availabilityCopy: "Open for full-time gameplay/system roles and focused collaborations. Typical response window: within 24h (Mon–Fri).",
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
    caseTlDr: "TL;DR outcome",
    decisionBlocks: "Key decisions",
    decision: "Decision",
    why: "Why",
    tradeoff: "Trade-off",
  },
  de: {
    navHome: "Start",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    navProjects: "Projekte",
    navAbout: "Über mich",
    navCv: "Lebenslauf",
    navContact: "Kontakt",
    switchToGerman: "Sprache auf Deutsch umstellen",
    switchToEnglish: "Sprache auf Englisch umstellen",
    heroEyebrow: "Builder-Profil",
    exploreProjects: "Ausgewählte Projekte ansehen",
    contactIntro: "Kontakt aufnehmen",
    statusRailLabel: "Status-Leiste",
    statusOpenTo: "Offen für",
    statusOpenToValue: "Gameplay-/System-Rollen · fokussierte Zusammenarbeit",
    statusLocation: "Standort",
    statusResponse: "Antwortzeit",
    statusResponseValue: "Meist innerhalb von 24h (Mo–Fr)",
    statusRoleFocus: "Rollenfokus",
    buildStatsTitle: "Build-Statistik",
    buildStatProjects: "Projekte im Portfolio",
    buildStatShipped: "öffentlich veröffentlichte Builds",
    buildStatFeatured: "hervorgehobene Fallstudien",
    buildStatYears: "Jahre Gameplay-/Systemarbeit",
    decisionEntriesEyebrow: "Entscheidungs-Einstiege",
    decisionEntriesTitle: "Spring direkt zur Entscheidung, die dir wichtig ist",
    decisionEntrySystemsTitle: "Du brauchst stabile Gameplay-Systeme?",
    decisionEntrySystemsCopy: "Öffne Projekte mit Fokus auf Systemarchitektur und verlässliche Iteration.",
    decisionEntryPrototypeTitle: "Du brauchst schnelle Prototyp-Validierung?",
    decisionEntryPrototypeCopy: "Öffne Prototyp-Cases, die Interaktionsrisiken schnell testen.",
    decisionEntryShippedTitle: "Du brauchst Belege aus veröffentlichten Builds?",
    decisionEntryShippedCopy: "Öffne veröffentlichte Arbeiten mit klarem Rollen- und Ergebnisbeleg.",
    projectFilters: "Projekte filtern",
    filterAll: "Alle",
    filterSystems: "Gameplay/Systeme",
    filterPrototype: "Prototyp",
    filterShipped: "Veröffentlicht",
    filterJam: "Jam",
    filterArt: "3D/Art",
    filteredResults: "Gefilterte Ergebnisse",
    noProjectsForFilter: "Für diesen Filter gibt es aktuell keine Projekte.",
    heroHeadline: "Ich entwickle Gameplay-Systeme, die sich gut spielen und im Team sauber weiterbauen lassen.",
    heroSubline: "Von Jam-Prototypen bis zu veröffentlichten Hochschulprojekten: klare State-Logik, lesbare Interaktion, verlässliche Iteration.",
    heroImpactStripLabel: "Builder-Signale",
    heroQuickFitLabel: "Rollen-Fit auf einen Blick",
    heroQuickFitRoleLabel: "Rolle",
    heroQuickFitRoleValue: "Gameplay- & Systems-Entwickler (Unity/C#)",
    heroQuickFitFocusLabel: "Fokus",
    heroQuickFitFocusValue: "Combat-State-Flows, Interaktionsstabilität und praxisnahe Tooling-Ansätze",
    heroQuickFitOutcomeLabel: "Typisches Ergebnis",
    heroQuickFitOutcomeValue: "Spielbare Builds mit klarem Beitrag, sauberer Übergabe und weniger Spätphasen-Regressionen",
    selectedSystems: "Ausgewählte Arbeiten",
    selectedSystemsTitle: "Systeme, Prototypen und Jams mit konkreter Implementierungsverantwortung",
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
    outcomeMetric: "Ergebnis-Metrik",
    play: "Spielen",
    watch: "Ansehen",
    code: "Code",
    projectsHeader: "Projekte mit klarer Rolle, Zeitraum, Umsetzung und Ergebnis",
    projectsSub: "Starte mit den hervorgehobenen Builds und öffne danach das breitere Projektarchiv.",
    featuredProjectsTitle: "Hervorgehobene Projekte",
    moreProjectsTitle: "Weitere Projekte",
    showMoreProjects: "Mehr Projekte anzeigen",
    showLessProjects: "Weniger Projekte anzeigen",
    about: "Über mich",
    aboutTitle: "Gameplay-Profil, geprägt durch Jams, Prototyping und Produktionsrealität",
    summary: "Hintergrund",
    coreStrengths: "So arbeite ich",
    timelineTitle: "Bisheriger Weg",
    skills: "Fähigkeiten",
    focus: "Fokus",
    detailedCv: "Detaillierter Lebenslauf",
    detailedCvTeaser: "Du brauchst den vollständigen Zeitstrahl mit Aufgaben und Technologie-Stack?",
    openCv: "Vollen Lebenslauf öffnen",
    contactTitle: "Sag mir kurz dein Anliegen, ich route das Gespräch direkt",
    contactSub: "Wähle Hiring, Zusammenarbeit oder Frage – dann sind wir sofort im richtigen Kontext.",
    intentHiring: "Hiring",
    intentHiringCopy: "Bitte teile Rollen-Scope, Level, Standort und Team-Setup.",
    intentCollaboration: "Zusammenarbeit",
    intentCollaborationCopy: "Bitte teile Scope, Zeitrahmen, Rahmenbedingungen und gewünschtes Ergebnis.",
    intentQuestion: "Frage",
    intentQuestionCopy: "Stell deine Frage direkt – ich antworte klar und schnell.",
    contactIntentCta: "Gespräch starten",
    bestReach: "Bester Kontaktweg",
    bestReachCopy: "Für Jobanfragen und Projektgespräche ist E-Mail am besten. Ich antworte an Werktagen meist innerhalb von 24 Stunden.",
    professionalLinks: "Professionelle Profile",
    recruiterPath: "Recruiter",
    recruiterPathCopy: "Für Gameplay-/System-Rollen bitte Scope, Senioritätsniveau und Standort teilen.",
    hiringPath: "Hiring Manager",
    hiringPathCopy: "Für eine technische Einordnung helfen aktuelle Herausforderung und Team-Setup.",
    collaborationPath: "Zusammenarbeit",
    collaborationPathCopy: "Bei Prototypen oder kurzen Projekten bitte Scope, Zeitrahmen und Zielbild ergänzen.",
    availabilityTitle: "Verfügbarkeit & Antwortzeit",
    availabilityCopy: "Offen für Vollzeitrollen in Gameplay/Systemen sowie fokussierte Zusammenarbeit. Typisches Antwortfenster: innerhalb von 24h (Mo–Fr).",
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
    caseTlDr: "TL;DR Ergebnis",
    decisionBlocks: "Schlüsselentscheidungen",
    decision: "Entscheidung",
    why: "Warum",
    tradeoff: "Trade-off",
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
