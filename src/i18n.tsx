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
    decisionEntriesEyebrow: "Where you want proof first",
    decisionEntriesTitle: "Start with the decision you need to make",
    decisionEntrySystemsTitle: "Need gameplay systems that stay stable?",
    decisionEntrySystemsCopy: "See cases where I kept systems readable while features kept moving.",
    decisionEntryPrototypeTitle: "Need a fast prototype to de-risk an idea?",
    decisionEntryPrototypeCopy: "See how I test one risky interaction first, then expand from what works.",
    decisionEntryShippedTitle: "Need shipped proof, not promises?",
    decisionEntryShippedCopy: "See shipped projects with clear ownership, trade-offs, and outcomes.",
    projectFilters: "Filter projects",
    filterAll: "All",
    filterSystems: "Gameplay/Systems",
    filterPrototype: "Prototype",
    filterShipped: "Shipped",
    filterJam: "Jam",
    filterArt: "3D/Art",
    filteredResults: "Filtered results",
    noProjectsForFilter: "No projects match this filter yet.",
    heroHeadline: "I build gameplay systems that feel good in-hand and stay workable in-team.",
    heroHeadlineMobile: "I build gameplay systems that feel good and stay team-workable.",
    heroSubline: "From jam weekends to shipped student projects: clear states, readable interactions, steady iteration.",
    homeVoiceMarker: "I keep systems clean, then prove it in shipped loops and stable handoffs below.",
    heroImpactStripLabel: "Builder signals",
    heroQuickFitLabel: "Role fit snapshot",
    heroQuickFitRoleLabel: "Role",
    heroQuickFitRoleValue: "Gameplay & systems developer (Unity/C#)",
    heroQuickFitFocusLabel: "Focus",
    heroQuickFitFocusValue: "Combat state flow, interaction reliability, and practical tooling",
    heroQuickFitOutcomeLabel: "Typical outcome",
    heroQuickFitOutcomeValue: "Playable builds with clear contribution, stable handoff, and fewer late regressions",
    selectedSystems: "Selected work",
    selectedSystemsTitle: "Systems, prototypes, and jams where my implementation role is explicit",
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
    aboutTitle: "Gameplay developer shaped by jams, prototypes, and real production constraints",
    aboutVoiceMarker: "I’m calm in production chaos, and I’m not precious about rewriting my own code.",
    summary: "Background",
    coreStrengths: "How I work",
    timelineTitle: "Path so far",
    skills: "Skills",
    focus: "Focus",
    detailedCv: "Detailed CV",
    detailedCvTeaser: "Need the full timeline with responsibilities and tech stack?",
    openCv: "Open full CV",
    contactTitle: "Tell me what you need — I’ll keep the conversation practical",
    contactSub: "Hiring, collaboration, or a question — one short mail is enough to get started.",
    contactVoiceMarker: "A short, honest brief is enough — response time and collaboration scope are listed right here.",
    intentHiring: "Hiring",
    intentHiringCopy: "Send role scope, level, location, and team setup.",
    intentCollaboration: "Collaboration",
    intentCollaborationCopy: "Send project scope, timeline, constraints, and what “done” should look like.",
    intentQuestion: "Question",
    intentQuestionCopy: "Ask directly. I answer clearly and without detours.",
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
    availabilityCopy: "Open for full-time gameplay/system roles and selected collaborations. Typical response: within 24h (Mon–Fri).",
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
    caseTlDr: "TL;DR",
    caseVoiceMarker: "If you only skim once, skim this block — it ties the claim directly to measurable impact.",
    decisionBlocks: "Real decisions made",
    decision: "What I decided",
    why: "Why this route",
    tradeoff: "Trade-off I accepted",
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
    decisionEntriesEyebrow: "Wo du zuerst Belege sehen willst",
    decisionEntriesTitle: "Starte bei der Entscheidung, die du gerade treffen musst",
    decisionEntrySystemsTitle: "Du brauchst Gameplay-Systeme, die stabil bleiben?",
    decisionEntrySystemsCopy: "Hier siehst du Cases, in denen Systeme trotz Feature-Druck sauber geblieben sind.",
    decisionEntryPrototypeTitle: "Du willst eine Idee schnell per Prototyp absichern?",
    decisionEntryPrototypeCopy: "Hier siehst du, wie ich erst das riskante Interaktionsstück teste und dann ausbaue.",
    decisionEntryShippedTitle: "Du willst shipped Belege statt Versprechen?",
    decisionEntryShippedCopy: "Hier findest du veröffentlichte Projekte mit klarer Verantwortung, Trade-offs und Ergebnissen.",
    projectFilters: "Projekte filtern",
    filterAll: "Alle",
    filterSystems: "Gameplay/Systeme",
    filterPrototype: "Prototyp",
    filterShipped: "Veröffentlicht",
    filterJam: "Jam",
    filterArt: "3D/Art",
    filteredResults: "Gefilterte Ergebnisse",
    noProjectsForFilter: "Für diesen Filter gibt es aktuell keine Projekte.",
    heroHeadline: "Ich entwickle Gameplay-Systeme, die sich gut anfühlen und im Team sauber weiterbauen lassen.",
    heroHeadlineMobile: "Ich entwickle Gameplay-Systeme, die gut wirken und im Team sauber weiterlaufen.",
    heroSubline: "Von Jam-Wochenenden bis zu veröffentlichten Hochschulprojekten: klare States, lesbare Interaktion, verlässliche Iteration.",
    homeVoiceMarker: "Ich halte Systeme sauber — und belege das unten mit shipped Loops und stabilen Übergaben.",
    heroImpactStripLabel: "Builder-Signale",
    heroQuickFitLabel: "Rollen-Fit auf einen Blick",
    heroQuickFitRoleLabel: "Rolle",
    heroQuickFitRoleValue: "Gameplay- & Systems-Entwickler (Unity/C#)",
    heroQuickFitFocusLabel: "Fokus",
    heroQuickFitFocusValue: "Combat-State-Flows, Interaktionsstabilität und praxisnahe Tooling-Ansätze",
    heroQuickFitOutcomeLabel: "Typisches Ergebnis",
    heroQuickFitOutcomeValue: "Spielbare Builds mit klarem Beitrag, sauberer Übergabe und weniger Spätphasen-Regressionen",
    selectedSystems: "Ausgewählte Arbeiten",
    selectedSystemsTitle: "Systeme, Prototypen und Jams, bei denen mein Implementierungsanteil klar benannt ist",
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
    aboutTitle: "Gameplay-Entwicklerprofil, geprägt durch Jams, Prototyping und echte Produktionsrealität",
    aboutVoiceMarker: "Ich bleibe ruhig im Produktionschaos und hänge nicht am eigenen Code.",
    summary: "Hintergrund",
    coreStrengths: "So arbeite ich",
    timelineTitle: "Bisheriger Weg",
    skills: "Fähigkeiten",
    focus: "Fokus",
    detailedCv: "Detaillierter Lebenslauf",
    detailedCvTeaser: "Du brauchst den vollständigen Zeitstrahl mit Aufgaben und Technologie-Stack?",
    openCv: "Vollen Lebenslauf öffnen",
    contactTitle: "Sag mir kurz, was du brauchst — ich halte das Gespräch praktisch",
    contactSub: "Hiring, Zusammenarbeit oder Frage – eine kurze Mail reicht für den Start.",
    contactVoiceMarker: "Ein kurzes, ehrliches Briefing reicht — Antwortzeit und Zusammenarbeitsrahmen stehen direkt hier.",
    intentHiring: "Hiring",
    intentHiringCopy: "Schick Rollen-Scope, Level, Standort und Team-Setup.",
    intentCollaboration: "Zusammenarbeit",
    intentCollaborationCopy: "Schick Scope, Zeitrahmen, Rahmenbedingungen und wie „fertig“ aussehen soll.",
    intentQuestion: "Frage",
    intentQuestionCopy: "Frag direkt – ich antworte klar und ohne Umwege.",
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
    availabilityCopy: "Offen für Vollzeitrollen in Gameplay/Systemen sowie ausgewählte Zusammenarbeit. Typische Antwortzeit: innerhalb von 24h (Mo–Fr).",
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
    caseTlDr: "TL;DR",
    caseVoiceMarker: "Wenn du nur einmal überfliegst, dann diesen Block — hier ist der Claim direkt mit messbarer Wirkung verknüpft.",
    decisionBlocks: "Echte Entscheidungen im Projekt",
    decision: "Meine Entscheidung",
    why: "Warum dieser Weg",
    tradeoff: "Akzeptierter Trade-off",
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
