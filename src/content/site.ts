import type { Project } from "@/src/types/project";

import unthronedImage from "@/assets/Unthroned.png";
import witchWayImage from "@/assets/WitchWay.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";
import oasisImage from "@/assets/Oasis.jpg";
import gravityPongImage from "@/assets/GravityPong.png";
import aureaImage from "@/assets/Aurea.png";
import cozyWinterMarketImage from "@/assets/CozyWinterMarket.png";
import bombermanImage from "@/assets/Bomb.png";
import arcReactorImage from "@/assets/Arc.png";
import mjolnirImage from "@/assets/Hammer.png";
import type { Localized } from "@/src/i18n";

export const profile = {
  name: "Dennis Hawran",
  title: {
    en: "Gameplay & Systems Developer",
    de: "Gameplay- & Systems-Entwickler",
  } as Localized,
  location: {
    en: "Augsburg, Germany",
    de: "Augsburg, Deutschland",
  } as Localized,
  email: "dennishawran@gmail.com",
  intro: {
    en: "I build gameplay and interaction systems from first prototype to final handoff — with clear state logic and practical teamwork.",
    de: "Ich entwickle Gameplay- und Interaktionssysteme vom ersten Prototyp bis zur finalen Übergabe — mit klarer State-Logik und praxistauglicher Zusammenarbeit.",
  } as Localized,
  valuePoints: {
    en: [
      "Fast prototypes without messy systems",
      "Readable gameplay states plus useful debug hooks",
      "Unity/C# core with hands-on Unreal/VR experience",
    ],
    de: [
      "Schnelle Prototypen ohne System-Chaos",
      "Lesbare Gameplay-States plus hilfreiche Debug-Hooks",
      "Unity/C# als Kern mit praktischer Unreal-/VR-Erfahrung",
    ],
  } as Localized<string[]>,
  links: {
    github: "https://github.com/AtmoGD",
    linkedin: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
    itch: "https://atmogd.itch.io/",
    sketchfab: "https://sketchfab.com/atmo_gd",
  },
};

export const aboutContent = {
  summary: {
    en: "My way into game development wasn’t linear: I started in technical production, moved through media informatics, then specialized in gameplay and systems. That mix still defines how I work — explore widely, implement cleanly, and turn rough ideas into playable features people can maintain.",
    de: "Mein Weg in die Spieleentwicklung war nicht linear: Erst technische Produktion, dann Medieninformatik, danach der Fokus auf Gameplay und Systeme. Genau diese Mischung prägt meine Arbeit bis heute — breit erkunden, sauber umsetzen und aus groben Ideen spielbare Features machen, die auch später wartbar bleiben.",
  } as Localized,
  strengths: {
    en: [
      "Jam mindset: cut scope early, keep the core loop playable",
      "System thinking for gameplay states, interactions, and balancing",
      "Calm collaboration with design, art, and playtesting",
      "Clean handoff through clear naming, docs, and maintainable structure",
    ],
    de: [
      "Jam-Mindset: Scope früh schneiden, Core Loop spielbar halten",
      "Systemisches Denken für Gameplay-States, Interaktionen und Balancing",
      "Ruhige Zusammenarbeit mit Design, Art und Playtesting",
      "Saubere Übergaben durch klare Benennung, Doku und wartbare Struktur",
    ],
  } as Localized<string[]>,
};

export const cvContent = {
  education: [
    {
      period: "2022 – 2024",
      title: {
        en: "M.A. Interactive Media Systems (Game Development) · University of Augsburg",
        de: "M.A. Interaktive Mediensysteme (Game Development) · Hochschule Augsburg",
      } as Localized,
      details: {
        en: ["Focus on game development, prototyping, and applied interaction systems."],
        de: ["Schwerpunkt auf Game Development, Prototyping und interaktiven Systemen."],
      } as Localized<string[]>,
    },
    {
      period: "2019 – 2022",
      title: {
        en: "B.Sc. Media Informatics · Furtwangen University",
        de: "B.Sc. Medieninformatik · Hochschule Furtwangen",
      } as Localized,
      details: {
        en: ["Core modules in programming, interactive applications, and technical media production."],
        de: ["Kernmodule in Programmierung, interaktiven Anwendungen und technischer Medienproduktion."],
      } as Localized<string[]>,
    },
  ],
  work: [
    {
      period: "03/2022 – Today",
      title: {
        en: "Working Student · University of Hohenheim",
        de: "Werkstudent · Universität Hohenheim",
      } as Localized,
      details: {
        en: ["Development of a teaching-focused chatbot.", "Product iteration with practical academic constraints."],
        de: ["Entwicklung eines lehrfokussierten Chatbots.", "Produktiteration unter realen akademischen Rahmenbedingungen."],
      } as Localized<string[]>,
    },
    {
      period: "09/2021 – 02/2024",
      title: {
        en: "Tutor · Unity Engine",
        de: "Tutor · Unity Engine",
      } as Localized,
      details: {
        en: ["Supported students in gameplay implementation and debugging workflows."],
        de: ["Unterstützung von Studierenden bei Gameplay-Implementierung und Debugging."],
      } as Localized<string[]>,
    },
    {
      period: "08/2020 – 02/2024",
      title: {
        en: "Tutor · Development of Interactive Applications (FUDGE)",
        de: "Tutor · Entwicklung Interaktiver Anwendungen (FUDGE)",
      } as Localized,
      details: {
        en: ["Guided project teams from concept to playable prototype."],
        de: ["Begleitung von Projektteams von der Idee bis zum spielbaren Prototyp."],
      } as Localized<string[]>,
    },
    {
      period: "07/2021 – 02/2024",
      title: {
        en: "Internship · GameLab, Furtwangen University",
        de: "Praktikum · GameLab, Hochschule Furtwangen",
      } as Localized,
      details: {
        en: ["Lab organization, student support, and prototype implementation."],
        de: ["Labororganisation, Studierenden-Support und Prototyp-Implementierung."],
      } as Localized<string[]>,
    },
  ],
  foundations: [
    {
      period: "2014 – 2016",
      title: {
        en: "Advanced technical college certificate · Vocational College Weil am Rhein",
        de: "Allgemeine Fachhochschulreife · Berufskolleg Weil am Rhein",
      } as Localized,
    },
    {
      period: "2012 – 2014",
      title: {
        en: "Apprenticeship: Production Mechanic Textile",
        de: "Ausbildung: Produktionsmechaniker Textil",
      } as Localized,
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "unthroned",
    title: "Unthroned",
    tagline: {
      en: "Twin-stick action meets base building and tower defense in a focused student project.",
      de: "Twin-Stick-Action trifft Base-Building und Tower Defense in einem fokussierten Studienprojekt.",
    } as Localized,
    summary: {
      en: "Unthroned is a master-level student production combining twin-stick shooting with base building and tower defense. You play as Dave, a necromancer collecting souls to upgrade skills and strengthen your home base. I focused on robust gameplay and systems structure to keep balancing reliable through release on itch.io.",
      de: "Unthroned ist eine Masterproduktion, die Twin-Stick-Shooter, Base-Building und Tower-Defense verbindet. Man spielt Dave, einen Nekromanten, der Seelen sammelt, um Fähigkeiten auszubauen und die eigene Basis zu stärken. Mein Schwerpunkt lag auf robustem Gameplay und einer klaren Systemstruktur, damit das Balancing bis zum Release auf itch.io verlässlich blieb.",
    } as Localized,
    year: "2024",
    status: "Shipped",
    featured: true,
    cover: unthronedImage,
    stack: ["Unity", "C#", "System Design"],
    roles: ["Gameplay Programmer", "Systems Designer"],
    proof: {
      role: {
        en: "Gameplay & systems owner",
        de: "Verantwortlich für Gameplay und Systeme",
      } as Localized,
      timeline: {
        en: "5-month student production",
        de: "5-monatige Studierendenproduktion",
      } as Localized,
      teamSize: {
        en: "7-person cross-discipline team",
        de: "7-köpfiges, interdisziplinäres Team",
      } as Localized,
      impact: {
        en: "Shipped on time with fewer late-stage combat regressions",
        de: "Pünktlich veröffentlicht, mit weniger Combat-Regressionen in der Spätphase",
      } as Localized,
    },
    ownership: {
      owned: [
        {
          en: "Combat state architecture and encounter flow",
          de: "Architektur der Combat-States und Encounter-Flow",
        } as Localized,
        {
          en: "Debug hooks for balancing and tuning",
          de: "Debug-Hooks für Balancing und Feintuning",
        } as Localized,
        {
          en: "Core game-state reliability during polish",
          de: "Verlässlichkeit der zentralen Game-States in der Polishing-Phase",
        } as Localized,
      ],
      collaboratedWith: [
        {
          en: "Game design",
          de: "Game Design",
        } as Localized,
        {
          en: "QA playtest peers",
          de: "QA-Playtest-Kolleg:innen",
        } as Localized,
        {
          en: "Audio/FX contributors",
          de: "Audio/FX-Mitwirkende",
        } as Localized,
      ],
    },
    contributions: [
      {
        en: "Implemented and iterated core gameplay and game-state logic",
        de: "Kern-Gameplay und Game-State-Logik implementiert und iterativ verbessert",
      } as Localized,
      {
        en: "Built a system structure that kept feature integration stable and reduced regressions",
        de: "Eine Systemstruktur aufgebaut, die Feature-Integration stabil hielt und Regressionen reduzierte",
      } as Localized,
      {
        en: "Aligned with design and playtesting to improve combat readability and speed up tuning",
        de: "Mit Design und Playtesting abgestimmt, um Combat-Lesbarkeit zu verbessern und Tuning zu beschleunigen",
      } as Localized,
    ],
    outcomes: [
      {
        en: "Published publicly on itch.io",
        de: "Öffentlich auf itch.io veröffentlicht",
      } as Localized,
      {
        en: "Delivered a stable core loop under student project time and scope constraints",
        de: "Einen stabilen Core-Loop trotz enger Zeit- und Scope-Rahmenbedingungen geliefert",
      } as Localized,
    ],
    evidence: [
      {
        title: {
          en: "Public gameplay footage",
          de: "Öffentliche Gameplay-Aufnahmen",
        } as Localized,
        type: "video",
        sourceUrl: "https://www.youtube.com/embed/Wh6ieci--3E",
        caption: {
          en: "Representative combat and pacing footage from the release window.",
          de: "Repräsentative Aufnahmen zu Combat und Spieltempo aus dem Release-Zeitraum.",
        } as Localized,
        supports: {
          en: "Supports claim: stable, readable combat loop through final balancing.",
          de: "Belegt die Aussage: stabiler, gut lesbarer Combat-Loop bis zum finalen Balancing.",
        } as Localized,
      },
      {
        title: {
          en: "Release build screenshot",
          de: "Screenshot des Release-Builds",
        } as Localized,
        type: "image",
        sourceUrl: unthronedImage.src,
        caption: {
          en: "In-game encounter readability in shipped build.",
          de: "Lesbarkeit von Ingame-Encountern im veröffentlichten Build.",
        } as Localized,
        supports: {
          en: "Supports claim: feedback hierarchy remained clear under pressure.",
          de: "Belegt die Aussage: Die Feedback-Hierarchie blieb auch unter Druck klar.",
        } as Localized,
      },
    ],
    narrative: {
      context: {
        en: "Unthroned was built as a master-level student production with fixed deadlines and fluctuating team availability.",
        de: "Unthroned entstand als Masterprojekt mit festen Deadlines und schwankender Teamverfügbarkeit.",
      } as Localized,
      challenge: {
        en: "Combat readability dropped quickly whenever new enemy behaviors were introduced, slowing balancing and polish.",
        de: "Sobald neue Gegnerverhalten hinzukamen, sank die Combat-Lesbarkeit schnell, was Balancing und Polishing ausbremste.",
      } as Localized,
      approach: {
        en: "I split combat flow into clearer responsibilities (player state, enemy reaction, encounter flow) and added lightweight debug/tuning hooks for faster iteration without major rewrites.",
        de: "Ich habe den Combat-Flow in klarere Verantwortlichkeiten aufgeteilt (Player-State, Enemy-Reaktion, Encounter-Flow) und leichte Debug-/Tuning-Hooks ergänzt, um schneller iterieren zu können, ohne große Umbauten.",
      } as Localized,
      impact: {
        en: "The team could iterate predictably through release and keep gameplay stable through final delivery.",
        de: "Das Team konnte bis zum Release planbar iterieren und das Gameplay bis zur finalen Abgabe stabil halten.",
      } as Localized,
    },
    links: {
      playUrl: "https://atmogd.itch.io/unthroned",
    },
  } as unknown as Project,
  {
    slug: "oasis",
    title: "Oasis",
    tagline: {
      en: "Controller-free VR interaction prototype for haptic room concepts",
      de: "Controllerloser VR-Interaktionsprototyp für haptische Raumkonzepte",
    } as Localized,
    summary: {
      en: "A study project prototype (WS 2021/22) exploring how controller-free interaction can feel reliable in VR and support future haptic-room installations.",
      de: "Ein Studienprojekt-Prototyp (WS 2021/22), der untersucht, wie sich controllerlose Interaktion in VR verlässlich anfühlen kann und als Basis für haptische Raumkonzepte dient.",
    } as Localized,
    year: "2023",
    status: "Prototype",
    featured: true,
    cover: oasisImage,
    stack: ["Unreal Engine", "VR", "Motion Capture"],
    roles: ["Technical Developer", "Prototype Engineer"],
    proof: {
      role: {
        en: "Interaction systems prototyper",
        de: "Prototyping von Interaktionssystemen",
      } as Localized,
      timeline: {
        en: "1 semester prototype cycle",
        de: "1 Semester Prototyping-Zyklus",
      } as Localized,
      teamSize: {
        en: "4-person prototype team",
        de: "4-köpfiges Prototyping-Team",
      } as Localized,
      impact: {
        en: "Validated a stable interaction baseline for thesis-adjacent work",
        de: "Eine stabile Interaktions-Baseline für thesis-nahe Arbeiten validiert",
      } as Localized,
    },
    ownership: {
      owned: [
        { en: "Hand-state transition logic and timing", de: "Hand-State-Transitions und Timing-Logik" } as Localized,
        { en: "Interaction feedback cues and iteration loop", de: "Feedback-Cues und Iterationsschleife für Interaktionen" } as Localized,
        { en: "Technical prototype integration for VR teaser", de: "Technische Integration des Prototyps für den VR-Teaser" } as Localized,
      ],
      collaboratedWith: [
        { en: "3D art", de: "3D-Art" } as Localized,
        { en: "Playtest participants", de: "Playtest-Teilnehmende" } as Localized,
      ],
    },
    contributions: [
      { en: "Implemented and iterated core grab-and-release interaction flows", de: "Kernabläufe für Greifen und Loslassen implementiert und iteriert" } as Localized,
      { en: "Refined hand-state transitions and timing to reduce inconsistent interaction feel", de: "Hand-State-Transitions und Timing verfeinert, um inkonsistentes Interaktionsgefühl zu reduzieren" } as Localized,
      { en: "Integrated feedback cues to improve user confidence during object handling", de: "Feedback-Cues integriert, um Sicherheit beim Objekt-Handling zu erhöhen" } as Localized,
      { en: "Supported technical integration of the interaction prototype into the teaser build", de: "Technische Integration des Interaktionsprototyps in den Teaser-Build unterstützt" } as Localized,
    ],
    outcomes: [
      { en: "Delivered a functional VR teaser showcasing controller-free interaction goals", de: "Einen funktionsfähigen VR-Teaser mit controllerlosem Interaktionsfokus geliefert" } as Localized,
      { en: "Established a reusable interaction baseline for subsequent thesis-adjacent exploration", de: "Eine wiederverwendbare Interaktions-Baseline für anschließende thesis-nahe Exploration geschaffen" } as Localized,
      { en: "Validated feasibility of the core interaction concept within a semester prototype scope", de: "Die Machbarkeit des Kernkonzepts im Rahmen eines Semester-Prototyps validiert" } as Localized,
    ],
    evidence: [
      {
        title: { en: "VR teaser walkthrough", de: "VR-Teaser-Walkthrough" } as Localized,
        type: "video",
        sourceUrl: "https://www.youtube.com/embed/Wh6ieci--3E",
        caption: { en: "Short prototype walkthrough showing grab-and-release behavior.", de: "Kurzer Prototyp-Walkthrough mit Greif-und-Loslass-Verhalten." } as Localized,
        supports: { en: "Supports claim: interaction quality reached a stable confidence threshold.", de: "Belegt die Aussage: Die Interaktionsqualität erreichte eine stabile Vertrauensschwelle." } as Localized,
      },
      {
        title: { en: "Prototype still", de: "Prototyp-Szene" } as Localized,
        type: "image",
        sourceUrl: oasisImage.src,
        caption: { en: "Prototype environment and embodied interaction context.", de: "Prototyp-Umgebung mit verkörpertem Interaktionskontext." } as Localized,
        supports: { en: "Supports claim: system integrated cleanly with final teaser scene.", de: "Belegt die Aussage: Das System integrierte sich sauber in die finale Teaser-Szene." } as Localized,
      },
    ],
    narrative: {
      context: {
        en: "Created in a university study project (WS 2021/22) to explore controller-free VR interaction for a haptic-room concept.",
        de: "Entstanden in einem Hochschul-Studienprojekt (WS 2021/22), um controllerlose VR-Interaktion für ein haptisches Raumkonzept zu erforschen.",
      } as Localized,
      challenge: {
        en: "Early interaction felt inconsistent, especially in grab-and-release moments, making precision and trust harder for first-time users.",
        de: "Frühe Interaktionen wirkten uneinheitlich – besonders beim Greifen und Loslassen – und erschwerten Präzision und Vertrauen für Erstnutzer.",
      } as Localized,
      approach: {
        en: "I iterated on hand-state transitions, timing windows, and in-world feedback cues, then integrated these changes into the teaser prototype for repeated playtesting.",
        de: "Ich habe Hand-State-Transitions, Timing-Fenster und Ingame-Feedback-Cues iterativ verbessert und diese Anpassungen in den Teaser-Prototyp für wiederholte Playtests integriert.",
      } as Localized,
      impact: {
        en: "The team produced a stable teaser and a practical interaction baseline that informed follow-up thesis-related VR work.",
        de: "Das Team lieferte einen stabilen Teaser und eine praxisnahe Interaktions-Baseline für nachfolgende thesis-nahe VR-Arbeiten.",
      } as Localized,
    },
    links: {
      videoUrl: "https://youtu.be/Wh6ieci--3E",
    },
  },
  {
    slug: "witch-way",
    title: "Witch Way?",
    tagline: {
      en: "Fast-paced jam project built for readable chaos and quick iteration",
      de: "Schnelles Jam-Projekt mit gut lesbarem Chaos und schneller Iteration",
    } as unknown as string,
    summary: {
      en: "A Cozy Fall Jam project where I focused on shipping a clear, playful core loop under extreme time pressure, with readability and control feel prioritized over feature sprawl.",
      de: "Ein Cozy-Fall-Jam-Projekt, bei dem ich unter extremem Zeitdruck einen klaren, spielerischen Core Loop ausgeliefert habe – mit priorisierter Lesbarkeit und gutem Control-Feel statt Feature-Overload.",
    } as unknown as string,
    year: "2022",
    status: "Shipped",
    featured: true,
    cover: witchWayImage,
    stack: ["Unity", "C#", "Game Jam"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: {
        en: "Gameplay loop owner",
        de: "Verantwortlich für den Gameplay-Loop",
      } as unknown as string,
      timeline: {
        en: "48-hour game jam",
        de: "48-Stunden-Game-Jam",
      } as unknown as string,
      teamSize: {
        en: "5-person jam team",
        de: "5-köpfiges Jam-Team",
      } as unknown as string,
      impact: {
        en: "Delivered complete build with strong first-play clarity",
        de: "Vollständigen Build mit hoher Erstspiel-Klarheit geliefert",
      } as unknown as string,
    },
    ownership: {
      owned: [
        { en: "Core mechanics implementation", de: "Implementierung der Kernmechaniken" } as Localized,
        { en: "Input and hazard readability tuning", de: "Tuning von Input und Gefahren-Lesbarkeit" } as Localized,
        { en: "Final build stability for submission", de: "Stabilität des finalen Builds für die Abgabe" } as Localized,
      ],
      collaboratedWith: [
        { en: "Jam designer", de: "Jam-Design" } as Localized,
        { en: "2D artist", de: "2D-Art" } as Localized,
      ],
    },
    contributions: [
      { en: "Scoped and delivered a complete gameplay loop within jam constraints", de: "Einen vollständigen Gameplay-Loop im engen Jam-Rahmen geplant und umgesetzt" } as Localized,
      { en: "Reduced mechanic overlap to keep hazard readability high", de: "Mechanik-Überschneidungen reduziert, um die Lesbarkeit von Gefahren hoch zu halten" } as Localized,
      { en: "Polished controls and feedback to maintain first-play clarity", de: "Steuerung und Feedback poliert, um die Klarheit im ersten Spieldurchlauf zu sichern" } as Localized,
    ],
    outcomes: [
      { en: "Published publicly on itch.io", de: "Öffentlich auf itch.io veröffentlicht" } as Localized,
      { en: "Shipped a complete, understandable jam build in 48 hours", de: "In 48 Stunden einen vollständigen, verständlichen Jam-Build ausgeliefert" } as Localized,
    ],
    evidence: [
      {
        title: {
          en: "Shipped jam build",
          de: "Veröffentlichter Jam-Build",
        } as unknown as string,
        type: "image",
        sourceUrl: witchWayImage.src,
        caption: {
          en: "Final jam build frame showing mechanic clarity under hazard pressure.",
          de: "Ausschnitt aus dem finalen Jam-Build, der die klare Lesbarkeit der Mechaniken unter Hazard-Druck zeigt.",
        } as unknown as string,
        supports: {
          en: "Supports claim: system readability prioritized over feature sprawl.",
          de: "Belegt die Aussage: System-Lesbarkeit wurde höher priorisiert als Feature-Ausweitung.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Developed in a jam timeframe where every feature decision had immediate schedule impact.",
        de: "Entwickelt in einem Jam-Zeitfenster, in dem jede Feature-Entscheidung sofort Auswirkungen auf den Zeitplan hatte.",
      } as unknown as string,
      challenge: {
        en: "The core mechanic was fun in isolation but became confusing when multiple hazards stacked on screen.",
        de: "Die Kernmechanik funktionierte isoliert gut, wurde aber verwirrend, sobald mehrere Gefahren gleichzeitig auf dem Bildschirm lagen.",
      } as unknown as string,
      approach: {
        en: "I reduced mechanic overlap, simplified input edge cases, and prioritized feedback readability over adding new systems.",
        de: "Ich habe Mechanik-Überschneidungen reduziert, Input-Edge-Cases vereinfacht und die Lesbarkeit des Feedbacks höher priorisiert als neue Systeme.",
      } as unknown as string,
      impact: {
        en: "We released a complete, understandable build during the jam window with strong first-play clarity.",
        de: "Wir haben im Jam-Zeitfenster einen vollständigen, verständlichen Build mit hoher Erstspiel-Klarheit veröffentlicht.",
      } as unknown as string,
    },
    links: {
      playUrl: "https://atmogd.itch.io/witch-way",
    },
  },
  {
    slug: "pumpkin-harvest",
    title: "Pumpkin Harvest",
    tagline: {
      en: "Cozy farming loop with clear feedback and low-pressure progression",
      de: "Gemütlicher Farming-Loop mit klarem Feedback und druckarmer Progression",
    } as Localized,
    summary: {
      en: "A small game-jam project where players plant, water, harvest, and deliver pumpkins. The focus is a relaxing pace, readable interactions, and satisfying moment-to-moment feedback.",
      de: "Ein kleines Game-Jam-Projekt, in dem Spielende Kürbisse pflanzen, gießen, ernten und ausliefern. Im Fokus stehen ein entspannter Rhythmus, gut lesbare Interaktionen und befriedigendes Moment-to-Moment-Feedback.",
    } as Localized,
    year: "2022",
    status: "Shipped",
    cover: pumpkinHarvestImage,
    stack: ["Unity", "C#", "Gameplay"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: { en: "Gameplay programmer", de: "Gameplay-Programmierer" } as Localized,
      timeline: { en: "Cozy Fall Jam 2022", de: "Cozy Fall Jam 2022" } as Localized,
      teamSize: { en: "2-person team", de: "2-köpfiges Team" } as Localized,
      impact: {
        en: "Improved pacing and feedback rhythm in final public build",
        de: "Pacing und Feedback-Rhythmus im finalen öffentlichen Build verbessert",
      } as Localized,
    },
    ownership: {
      owned: [
        { en: "Complete gameplay loop implementation", de: "Vollständige Implementierung des Gameplay-Loops" } as Localized,
        { en: "Cadence, pickup, and scoring polish", de: "Feinschliff bei Rhythmus, Pickup-Handling und Scoring" } as Localized,
        { en: "Release packaging and deployment", de: "Release-Paketierung und Deployment" } as Localized,
      ],
    },
    contributions: [
      { en: "Implemented and tuned the core harvest loop (planting, watering, harvesting, delivery)", de: "Den Kern-Loop umgesetzt und getunt (Pflanzen, Gießen, Ernten, Ausliefern)" } as Localized,
      { en: "Polished interaction timing and feedback cadence for clearer player flow", de: "Interaktions-Timing und Feedback-Rhythmus für klareren Spielfluss verfeinert" } as Localized,
      { en: "Integrated progression touches (earnings-based upgrades such as fields/truck)", de: "Progressions-Elemente integriert (einkommensbasierte Upgrades wie Felder/Truck)" } as Localized,
    ],
    outcomes: [
      { en: "Shipped a public Cozy Fall Jam 2022 build on itch.io", de: "Öffentlichen Cozy-Fall-Jam-2022-Build auf itch.io veröffentlicht" } as Localized,
      { en: "Delivered a readable, low-pressure gameplay loop aligned with the game's cozy intent", de: "Einen gut lesbaren, druckarmen Gameplay-Loop im Sinne des Cozy-Ansatzes geliefert" } as Localized,
    ],
    evidence: [
      {
        title: { en: "Gameplay still", de: "Gameplay-Szene" } as Localized,
        type: "image",
        sourceUrl: pumpkinHarvestImage.src,
        caption: {
          en: "Moment-to-moment harvesting loop from public version.",
          de: "Moment-to-Moment-Harvest-Loop aus der öffentlichen Version.",
        } as Localized,
        supports: {
          en: "Supports claim: tighter cadence and clearer reward feedback.",
          de: "Belegt die Aussage: strafferer Rhythmus und klareres Reward-Feedback.",
        } as Localized,
      },
    ],
    narrative: {
      context: {
        en: "Built during Cozy Fall Jam 2022 as a compact cozy farming game.",
        de: "Entstanden im Cozy Fall Jam 2022 als kompaktes Cozy-Farming-Spiel.",
      } as Localized,
      challenge: {
        en: "Keep the loop relaxing while still making each action feel meaningful and responsive.",
        de: "Den Loop entspannt halten und trotzdem jede Aktion spürbar und responsiv machen.",
      } as Localized,
      approach: {
        en: "Focused scope on one clear loop (grow and deliver pumpkins), then tuned timing, interaction readability, and progression beats.",
        de: "Den Scope auf einen klaren Loop fokussiert (anbauen und ausliefern) und anschließend Timing, Interaktions-Lesbarkeit und Progressionsrhythmus getunt.",
      } as Localized,
      impact: {
        en: "Resulted in a coherent public jam build with approachable mechanics and a calm, cozy player experience.",
        de: "Ergebnis war ein stimmiger öffentlicher Jam-Build mit zugänglichen Mechaniken und ruhigem Cozy-Spielgefühl.",
      } as Localized,
    },
    links: {
      playUrl: "https://atmogd.itch.io/pumpkin-harvest",
    },
  },
  {
    slug: "gravity-pong",
    title: "Gravity Pong",
    tagline: {
      en: "Pong with shifting gravity and ML-driven opponents",
      de: "Pong mit wechselnder Schwerkraft und ML-gesteuerten Gegnern",
    } as Localized,
    summary: {
      en: "A Unity prototype that reimagines Pong with randomly flipping gravity, rising ball speed, and optional AI paddles trained with Unity ML-Agents.",
      de: "Ein Unity-Prototyp, der Pong mit zufällig wechselnder Schwerkraft, steigender Ballgeschwindigkeit und optionalen KI-Paddles auf Basis von Unity ML-Agents neu interpretiert.",
    } as Localized,
    year: "2021",
    status: "Prototype",
    cover: gravityPongImage,
    stack: ["Unity", "Machine Learning", "Gameplay"],
    roles: ["Developer"],
    proof: {
      role: {
        en: "Prototype mechanic designer/developer",
        de: "Prototypen-Designer und Entwickler der Kernmechanik",
      } as Localized,
      timeline: { en: "2-week experiment", de: "2-wöchiges Experiment" } as Localized,
      teamSize: { en: "1 person", de: "1 Person" } as Localized,
      impact: {
        en: "Defined viable ruleset for readable gravity-based rallies",
        de: "Einen tragfähigen Regelrahmen für gut lesbare, schwerkraftbasierte Rallyes definiert",
      } as Localized,
    },
    ownership: {
      owned: [
        { en: "Physics constraint and rebound tuning", de: "Tuning von Physikgrenzen und Abprallverhalten" } as Localized,
        { en: "Arena parameter experimentation", de: "Experimentieren mit Arena-Parametern" } as Localized,
        { en: "Prototype balancing rules", de: "Balancing-Regeln für den Prototyp" } as Localized,
      ],
    },
    contributions: [
      { en: "Implemented gravity-flip match logic with visual direction indicators for readability", de: "Match-Logik mit Schwerkraftwechsel inklusive visueller Richtungsindikatoren für bessere Lesbarkeit umgesetzt" } as Localized,
      { en: "Built and tuned core rally systems (rebound behavior, pacing, speed scaling)", de: "Kernsysteme der Rallyes aufgebaut und getunt (Abprallverhalten, Spieltempo, Geschwindigkeitsanstieg)" } as Localized,
      { en: "Integrated ML-Agents-based paddle opponents and exposed difficulty-related behavior parameters", de: "ML-Agents-basierte Paddle-Gegner integriert und verhaltensrelevante Schwierigkeitsparameter angebunden" } as Localized,
    ],
    outcomes: [
      { en: "Validated a playable gravity-variant Pong ruleset with clearer rally readability", de: "Einen spielbaren Pong-Regelsatz mit variabler Schwerkraft und klarerer Rallye-Lesbarkeit validiert" } as Localized,
      { en: "Delivered local multiplayer and AI-opponent modes in a public prototype build", de: "Lokalen Multiplayer und KI-Gegner-Modus in einem öffentlichen Prototyp-Build bereitgestellt" } as Localized,
    ],
    evidence: [
      {
        title: { en: "Prototype frame", de: "Prototyp-Frame" } as Localized,
        type: "image",
        sourceUrl: gravityPongImage.src,
        caption: {
          en: "Readability-focused gravity behavior in an experimental rally.",
          de: "Auf Lesbarkeit ausgelegtes Schwerkraftverhalten in einer experimentellen Rallye.",
        } as Localized,
        supports: {
          en: "Supports claim: constraints reduced randomness while keeping novelty.",
          de: "Belegt die Aussage: Begrenzungen reduzierten Zufall bei gleichbleibender Neuerung.",
        } as Localized,
      },
    ],
    narrative: {
      context: {
        en: "Gravity Pong started as a compact Unity experiment to test whether a familiar arcade loop could stay readable under constantly changing physical conditions.",
        de: "Gravity Pong startete als kompaktes Unity-Experiment, um zu prüfen, ob ein vertrauter Arcade-Loop trotz ständig wechselnder physikalischer Bedingungen lesbar bleibt.",
      } as Localized,
      challenge: {
        en: "Random gravity shifts can quickly feel unfair, especially when rally speed ramps up. The design challenge was to preserve surprise without turning matches into chaos.",
        de: "Zufällige Schwerkraftwechsel können sich schnell unfair anfühlen, besonders wenn das Tempo steigt. Die Herausforderung war, Überraschung zu erhalten, ohne Matches ins Chaos kippen zu lassen.",
      } as Localized,
      approach: {
        en: "I combined timed gravity inversions with explicit top/bottom direction indicators, tuned bounce and speed behavior, and added AI paddles via Unity ML-Agents to test solo and competitive play patterns.",
        de: "Ich kombinierte zeitgesteuerte Schwerkraft-Inversionen mit klaren Top-/Bottom-Indikatoren, tunte Abprall- und Geschwindigkeitsverhalten und ergänzte KI-Paddles via Unity ML-Agents für Solo- und Competitive-Tests.",
      } as Localized,
      impact: {
        en: "The prototype established a clear, replayable game feel for a gravity-driven Pong variant and demonstrated a practical base for further balancing and polish.",
        de: "Der Prototyp etablierte ein klares, wiederholbar spielbares Game-Feel für eine schwerkraftgetriebene Pong-Variante und eine praktikable Basis für weiteres Balancing und Polishing.",
      } as Localized,
    },
    links: {
      playUrl: "https://atmogd.itch.io/gravity-pong",
    },
  },
  {
    slug: "aurea",
    title: "Aurea",
    tagline: {
      en: "AR multiplayer prototype that brings low-poly game moments into your living room.",
      de: "AR-Multiplayer-Prototyp, der Low-Poly-Game-Momente ins eigene Wohnzimmer bringt.",
    } as unknown as string,
    summary: {
      en: "Aurea is a Unity-based student project exploring shared AR gameplay on smartphones. Built as a semester prototype in a 4-person team, it focuses on clear onboarding, stable interaction flow, and a stylized low-poly presentation.",
      de: "Aurea ist ein Unity-basiertes Studierendenprojekt, das gemeinsames AR-Gameplay auf Smartphones untersucht. Als Semesterprototyp in einem vierköpfigen Team umgesetzt, liegt der Fokus auf klarem Onboarding, stabilem Interaktionsfluss und einer stilisierten Low-Poly-Präsentation.",
    } as unknown as string,
    year: "2021",
    status: "Prototype",
    cover: aureaImage,
    stack: ["Unity", "AR", "Mobile"],
    roles: ["Gameplay Programmer", "Technical Artist"],
    proof: {
      role: {
        en: "Core gameplay and AR integration",
        de: "Core-Gameplay und AR-Integration",
      } as unknown as string,
      timeline: {
        en: "Semester project",
        de: "Semesterprojekt",
      } as unknown as string,
      teamSize: {
        en: "4-person student team",
        de: "4-köpfiges Studierenden-Team",
      } as unknown as string,
      impact: {
        en: "Delivered a complete multiplayer AR slice",
        de: "Einen vollständigen Multiplayer-AR-Vertical-Slice ausgeliefert",
      } as unknown as string,
    },
    ownership: {
      owned: [
        {
          en: "AR setup and interaction flow",
          de: "AR-Setup und Interaktionsfluss",
        } as unknown as string,
        {
          en: "Core gameplay loop",
          de: "Core-Gameplay-Loop",
        } as unknown as string,
        {
          en: "Model integration and optimization",
          de: "Modellintegration und Optimierung",
        } as unknown as string,
      ],
    },
    contributions: [
      {
        en: "Implemented mobile AR interaction flow and core gameplay logic",
        de: "Mobilen AR-Interaktionsfluss und die Core-Gameplay-Logik umgesetzt",
      } as unknown as string,
      {
        en: "Integrated and optimized production assets for reliable device performance",
        de: "Produktions-Assets für zuverlässige Geräte-Performance integriert und optimiert",
      } as unknown as string,
      {
        en: "Supported pacing and onboarding decisions for first-time AR users",
        de: "Pacing- und Onboarding-Entscheidungen für AR-Erstnutzer unterstützt",
      } as unknown as string,
    ],
    outcomes: [
      {
        en: "Delivered a playable multiplayer AR prototype within semester scope",
        de: "Einen spielbaren Multiplayer-AR-Prototypen im Rahmen des Semesters ausgeliefert",
      } as unknown as string,
      {
        en: "Validated that social interaction can be communicated clearly in a low-poly AR setup",
        de: "Validiert, dass soziale Interaktion in einem Low-Poly-AR-Setup klar vermittelt werden kann",
      } as unknown as string,
    ],
    evidence: [
      {
        title: {
          en: "Aurea prototype",
          de: "Aurea-Prototyp",
        } as unknown as string,
        type: "image",
        sourceUrl: aureaImage.src,
        caption: {
          en: "Prototype frame.",
          de: "Prototyp-Frame.",
        } as unknown as string,
        supports: {
          en: "Supports claim: complete AR vertical slice.",
          de: "Belegt die Aussage: vollständiger AR-Vertical-Slice.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Created as a student project to test how shared AR interactions work on everyday smartphones.",
        de: "Als Studierendenprojekt entstanden, um zu testen, wie gemeinsame AR-Interaktionen auf alltäglichen Smartphones funktionieren.",
      } as unknown as string,
      challenge: {
        en: "Keep interactions readable and performance stable while multiple players share an AR play space.",
        de: "Interaktionen lesbar und die Performance stabil halten, während mehrere Spieler denselben AR-Spielraum teilen.",
      } as unknown as string,
      approach: {
        en: "Built a lightweight AR interaction structure in Unity, integrated low-poly assets, and iterated onboarding to make first contact intuitive.",
        de: "Eine schlanke AR-Interaktionsstruktur in Unity aufgebaut, Low-Poly-Assets integriert und das Onboarding iteriert, um den Ersteinstieg intuitiv zu machen.",
      } as unknown as string,
      impact: {
        en: "Resulted in a complete vertical slice that demonstrates feasible multiplayer AR moment-to-moment play.",
        de: "Resultierte in einem vollständigen Vertical Slice, der umsetzbares Multiplayer-AR-Moment-to-Moment-Gameplay zeigt.",
      } as unknown as string,
    },
    links: {},
  } as unknown as Project,
  {
    slug: "cozy-winter-market",
    title: "Cozy Winter Market",
    tagline: {
      en: "Cozy builder prototype with a clear build-and-decorate economy loop",
      de: "Gemütlicher Builder-Prototyp mit klarem Build-and-Decorate-Ökonomie-Loop",
    } as unknown as string,
    summary: {
      en: "A calm management prototype from Cozy Winter Jam 2022: players build their own Christmas market, expand with new buildings, and use decoration to raise visitor happiness—so customers spend more.",
      de: "Ein ruhiger Management-Prototyp aus dem Cozy Winter Jam 2022: Spielende bauen ihren eigenen Weihnachtsmarkt, erweitern ihn mit neuen Gebäuden und steigern durch Dekoration die Besucherzufriedenheit – damit Kundschaft mehr ausgibt.",
    } as unknown as string,
    year: "2021",
    status: "Prototype",
    cover: cozyWinterMarketImage,
    stack: ["Unity", "Game Design", "Simulation"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: {
        en: "Gameplay loop owner (programming & level design)",
        de: "Verantwortlich für den Gameplay-Loop (Programmierung & Leveldesign)",
      } as unknown as string,
      timeline: {
        en: "Cozy Winter Jam 2022 prototype sprint",
        de: "Prototypen-Sprint im Cozy Winter Jam 2022",
      } as unknown as string,
      teamSize: {
        en: "Small jam team",
        de: "Kleines Jam-Team",
      } as unknown as string,
      impact: {
        en: "Delivered a complete build-and-decorate progression loop with visible economy feedback",
        de: "Einen vollständigen Build-and-Decorate-Progressionsloop mit sichtbarem Ökonomie-Feedback ausgeliefert",
      } as unknown as string,
    },
    ownership: {
      owned: [
        { en: "Economy loop setup", de: "Aufbau des Ökonomie-Loops" } as Localized,
        { en: "Placement and progression logic", de: "Platzierungs- und Progressionslogik" } as Localized,
        { en: "Balancing pass", de: "Balancing-Pass" } as Localized,
      ],
    },
    contributions: [
      { en: "Implemented the core progression loop (build → visitor growth → income)", de: "Den zentralen Progressionsloop umgesetzt (bauen → Besucherwachstum → Einkommen)" } as Localized,
      { en: "Connected decoration choices to happiness and customer spending behavior", de: "Dekorationsentscheidungen mit Zufriedenheit und Ausgabeverhalten der Kundschaft verknüpft" } as Localized,
      { en: "Built placement, edit, and delete logic for market objects", de: "Platzierungs-, Bearbeitungs- und Löschlogik für Marktobjekte entwickelt" } as Localized,
    ],
    outcomes: [
      { en: "Playable cozy prototype with relaxed, low-pressure progression", de: "Spielbarer Cozy-Prototyp mit entspannter, druckarmer Progression" } as Localized,
      { en: "Validated economy readability through customer and happiness feedback bars", de: "Lesbarkeit der Ökonomie über Kunden- und Zufriedenheitsbalken validiert" } as Localized,
    ],
    evidence: [
      {
        title: {
          en: "Cozy Winter Market frame",
          de: "Cozy-Winter-Market-Szene",
        } as unknown as string,
        type: "image",
        sourceUrl: cozyWinterMarketImage.src,
        caption: {
          en: "Prototype scene.",
          de: "Szene aus dem Prototyp.",
        } as unknown as string,
        supports: {
          en: "Supports claim: completed decorate-and-grow loop.",
          de: "Belegt die Aussage: vollständiger Decorate-and-Grow-Loop umgesetzt.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Built for Cozy Winter Jam 2022, with a focus on a relaxing atmosphere instead of high-pressure optimization.",
        de: "Entstanden für den Cozy Winter Jam 2022, mit Fokus auf eine entspannte Atmosphäre statt auf Hochdruck-Optimierung.",
      } as unknown as string,
      challenge: {
        en: "Keep progression motivating and readable without introducing complexity spikes.",
        de: "Die Progression motivierend und gut lesbar halten, ohne Komplexitätsspitzen einzuführen.",
      } as unknown as string,
      approach: {
        en: "Linked building expansion, decoration value, and visitor happiness in one clear loop: more development increased traffic, and higher happiness increased spending.",
        de: "Gebäudeausbau, Dekorationswert und Besucherzufriedenheit in einem klaren Loop verbunden: mehr Ausbau erhöhte den Andrang, höhere Zufriedenheit steigerte die Ausgaben.",
      } as unknown as string,
      impact: {
        en: "Resulted in a clear cozy management loop where player decisions visibly shaped market growth and revenue.",
        de: "Resultierte in einem klaren Cozy-Management-Loop, in dem Spielerentscheidungen das Marktwachstum und die Einnahmen sichtbar prägten.",
      } as unknown as string,
    },
    links: {},
  },
  {
    slug: "bomberman",
    title: "Bomberman",
    tagline: {
      en: "Classic Bomberman mechanics rebuilt in FUDGE Engine with deterministic gameplay systems.",
      de: "Klassische Bomberman-Mechaniken in der FUDGE Engine mit deterministischen Gameplay-Systemen neu umgesetzt.",
    } as unknown as string,
    summary: {
      en: "University course project recreating the Bomberman core loop in FUDGE Engine: grid movement, bomb timing, destructible tiles, enemy pressure, score, and lives.",
      de: "Universitäres Kursprojekt, das den Bomberman-Core-Loop in der FUDGE Engine nachbildet: Grid-Bewegung, Bomben-Timing, zerstörbare Kacheln, Gegnerdruck, Punkte und Leben.",
    } as unknown as string,
    year: "2020",
    status: "Prototype",
    cover: bombermanImage,
    stack: ["FUDGE Engine", "TypeScript", "Gameplay"],
    roles: ["Gameplay Programmer"],
    proof: {
      role: {
        en: "Mechanics and systems implementation",
        de: "Implementierung von Mechaniken und Systemen",
      } as unknown as string,
      timeline: {
        en: "Semester module",
        de: "Semester-Modul",
      } as unknown as string,
      teamSize: {
        en: "Student team",
        de: "Studierendenteam",
      } as unknown as string,
      impact: {
        en: "Delivered a faithful and playable clone baseline",
        de: "Eine werkgetreue und spielbare Clone-Basis geliefert",
      } as unknown as string,
    },
    ownership: {
      owned: [
        { en: "Bomb and explosion logic", de: "Bomben- und Explosionslogik" } as Localized,
        { en: "Grid movement systems", de: "Grid-Bewegungssysteme" } as Localized,
        { en: "Collision and timing behavior", de: "Kollisions- und Timingverhalten" } as Localized,
      ],
    },
    contributions: [
      { en: "Implemented bomb placement, fuse timing, and explosion propagation.", de: "Bombenplatzierung, Zündzeit-Timing und Ausbreitung der Explosionen implementiert." } as Localized,
      { en: "Built grid-based movement and collision behavior for walls, boxes, and bombs.", de: "Grid-basierte Bewegung und Kollision für Wände, Kisten und Bomben umgesetzt." } as Localized,
      { en: "Implemented core round loop logic including lives, scoring, and restart/game-over flow.", de: "Die Kernlogik der Runde inklusive Leben, Punktestand sowie Neustart/Game-Over-Flow implementiert." } as Localized,
    ],
    outcomes: [
      { en: "Playable browser prototype published via GitHub Pages.", de: "Spielbaren Browser-Prototyp über GitHub Pages veröffentlicht." } as Localized,
      { en: "Faithful Bomberman-style baseline validating core mechanics under course constraints.", de: "Werkgetreue Bomberman-Basis, die die Kernmechaniken unter Kursvorgaben validiert." } as Localized,
    ],
    evidence: [
      {
        title: {
          en: "Bomberman prototype",
          de: "Bomberman-Prototyp",
        } as unknown as string,
        type: "image",
        sourceUrl: bombermanImage.src,
        caption: {
          en: "In-engine gameplay frame.",
          de: "Gameplay-Ausschnitt direkt aus der Engine.",
        } as unknown as string,
        supports: {
          en: "Supports claim: complete core loop implementation.",
          de: "Belegt die Aussage: vollständige Implementierung des Core Loops.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Built as part of the ‘Development of Interactive Applications’ course at Furtwangen University using the FUDGE Engine.",
        de: "Im Rahmen des Kurses ‚Entwicklung interaktiver Anwendungen‘ an der Hochschule Furtwangen mit der FUDGE Engine entwickelt.",
      } as unknown as string,
      challenge: {
        en: "Recreate a well-known rule set with clear timing, predictable collisions, and readable game-state feedback (lives, score, game-over).",
        de: "Einen bekannten Regelkatalog mit klarem Timing, vorhersagbaren Kollisionen und gut lesbarem Game-State-Feedback (Leben, Punkte, Game Over) nachbauen.",
      } as unknown as string,
      approach: {
        en: "Structured gameplay into separable systems (movement/collision, bombs/explosions, spawning/progression, UI feedback) and kept configuration data adjustable.",
        de: "Das Gameplay in trennbare Systeme gegliedert (Bewegung/Kollision, Bomben/Explosionen, Spawning/Progression, UI-Feedback) und Konfigurationsdaten anpassbar gehalten.",
      } as unknown as string,
      impact: {
        en: "Delivered a stable, course-ready Bomberman clone prototype demonstrating complete loop implementation and publishable web deployment.",
        de: "Einen stabilen, kursreifen Bomberman-Clone-Prototyp ausgeliefert, der die vollständige Loop-Implementierung und eine veröffentlichbare Web-Deployment-Pipeline zeigt.",
      } as unknown as string,
    },
    links: {},
  },
  {
    slug: "arc-reactor",
    title: "Arc Reactor",
    tagline: {
      en: "Hard-surface Arc Reactor prop with high/low-poly PBR workflow",
      de: "Arc-Reactor-Prop im Hard-Surface-Stil mit High-/Low-Poly-PBR-Workflow",
    } as unknown as string,
    summary: {
      en: "Student 3D asset project: recreated Marvel's Arc Reactor as a complete hard-surface pipeline from high-poly sculpt to low-poly game-ready variant with baked PBR textures.",
      de: "3D-Asset-Projekt im Studium: Marvels Arc Reactor wurde als vollständige Hard-Surface-Pipeline umgesetzt – vom High-Poly-Sculpt bis zur game-ready Low-Poly-Variante mit gebackenen PBR-Texturen.",
    } as unknown as string,
    year: "2020",
    status: "Shipped",
    cover: arcReactorImage,
    stack: ["Blender", "Substance Painter", "3D Modeling"],
    roles: ["3D Artist"],
    proof: {
      role: {
        en: "Modeling, texturing, and optimization pass (high/low-poly)",
        de: "Modeling, Texturing und Optimierung (High-/Low-Poly)",
      } as unknown as string,
      timeline: {
        en: "Student asset project (published Jul 2021)",
        de: "Asset-Projekt im Studium (veröffentlicht Juli 2021)",
      } as unknown as string,
      teamSize: {
        en: "1 person",
        de: "1 Person",
      } as unknown as string,
      impact: {
        en: "Published both presentation and game-ready variants on Sketchfab",
        de: "Sowohl Präsentations- als auch game-ready Variante auf Sketchfab veröffentlicht",
      } as unknown as string,
    },
    ownership: {
      owned: [
        { en: "High-poly hard-surface modeling", de: "Hard-Surface-Modeling in High-Poly" } as Localized,
        { en: "Low-poly derivation and optimization", de: "Ableitung und Optimierung der Low-Poly-Version" } as Localized,
        { en: "UV setup, baking, and PBR material authoring", de: "UV-Setup, Baking und Erstellung der PBR-Materialien" } as Localized,
      ],
    },
    contributions: [
      { en: "Modeled and textured a high-poly Arc Reactor presentation asset", de: "Ein High-Poly-Arc-Reactor-Asset für die Präsentation modelliert und texturiert" } as Localized,
      { en: "Built a low-poly companion version for real-time use", de: "Eine begleitende Low-Poly-Version für den Echtzeit-Einsatz erstellt" } as Localized,
      { en: "Executed UV, baking, and PBR material setup in Blender/Substance workflow", de: "UVs, Baking und PBR-Material-Setup im Blender-/Substance-Workflow umgesetzt" } as Localized,
    ],
    outcomes: [
      { en: "Published high-poly model on Sketchfab (CC BY, Jul 2021)", de: "High-Poly-Modell auf Sketchfab veröffentlicht (CC BY, Juli 2021)" } as Localized,
      { en: "Published low-poly variant as separate Sketchfab model", de: "Low-Poly-Variante als separates Sketchfab-Modell veröffentlicht" } as Localized,
      { en: "Documented geometry budgets: ~123.7k tris (high-poly) and ~15.2k tris (low-poly)", de: "Geometrie-Budgets dokumentiert: ~123,7k Tris (High-Poly) und ~15,2k Tris (Low-Poly)" } as Localized,
    ],
    evidence: [
      {
        title: {
          en: "Arc Reactor model",
          de: "Arc-Reactor-Modell",
        } as unknown as string,
        type: "image",
        sourceUrl: arcReactorImage.src,
        caption: {
          en: "Asset presentation frame.",
          de: "Präsentationsansicht des Assets.",
        } as unknown as string,
        supports: {
          en: "Supports claim: complete game-asset pipeline execution.",
          de: "Belegt die Aussage: vollständige Umsetzung einer Game-Asset-Pipeline.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Created as a student asset exercise to demonstrate a full game-asset production pipeline.",
        de: "Als studentische Asset-Übung erstellt, um eine vollständige Game-Asset-Produktionspipeline zu zeigen.",
      } as unknown as string,
      challenge: {
        en: "Translate a recognizable sci-fi prop into clean hard-surface forms while producing both showcase and real-time versions.",
        de: "Ein bekanntes Sci-Fi-Prop in saubere Hard-Surface-Formen übertragen und dabei sowohl eine Showcase- als auch eine Echtzeit-Version erstellen.",
      } as unknown as string,
      approach: {
        en: "Produced a high-poly source model, derived a low-poly counterpart, then finalized UVs, texture baking, and PBR materials for presentation.",
        de: "Ein High-Poly-Quellmodell erstellt, daraus eine Low-Poly-Version abgeleitet und anschließend UVs, Texture-Baking und PBR-Materialien für die Präsentation finalisiert.",
      } as unknown as string,
      impact: {
        en: "Delivered an evidence-backed portfolio piece with public high/low-poly releases and measurable geometry budgets.",
        de: "Ein belegbares Portfolio-Projekt mit öffentlichen High-/Low-Poly-Releases und messbaren Geometrie-Budgets geliefert.",
      } as unknown as string,
    },
    links: {
      detailUrl: "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2",
    },
  },
  {
    slug: "mjolnir",
    title: "Mjölnir",
    tagline: {
      en: "Student-built Mjölnir hero prop, from blockout to polished high-poly presentation",
      de: "Als Studienprojekt entstandenes Mjölnir-Hero-Prop – vom Blockout bis zur ausgearbeiteten High-Poly-Präsentation.",
    } as unknown as string,
    summary: {
      en: "A study asset project focused on hard-surface modeling, material readability, and clean portfolio presentation on Sketchfab.",
      de: "Ein Studien-Assetprojekt mit Fokus auf Hard-Surface-Modelling, klare Materiallesbarkeit und eine saubere Portfolio-Präsentation auf Sketchfab.",
    } as unknown as string,
    year: "2020",
    status: "Shipped",
    cover: mjolnirImage,
    stack: ["Blender", "Substance Painter", "3D Modeling"],
    roles: ["3D Artist"],
    proof: {
      role: {
        en: "Modeling and texturing",
        de: "Modelling und Texturing",
      } as unknown as string,
      timeline: {
        en: "Student asset project",
        de: "Studierenden-Assetprojekt",
      } as unknown as string,
      teamSize: {
        en: "1 person",
        de: "1 Person",
      } as unknown as string,
      impact: {
        en: "Delivered a complete hero-prop workflow from blockout to public presentation",
        de: "Einen vollständigen Hero-Prop-Workflow vom Blockout bis zur öffentlichen Präsentation umgesetzt",
      } as unknown as string,
    },
    ownership: {
      owned: [
        {
          en: "Blockout and silhouette refinement",
          de: "Blockout und Verfeinerung der Silhouette",
        } as unknown as string,
        {
          en: "Hard-surface detail pass",
          de: "Hard-Surface-Detail-Pass",
        } as unknown as string,
        {
          en: "Material/texturing and final presentation",
          de: "Material-/Texturing-Arbeit und finale Präsentation",
        } as unknown as string,
      ],
    },
    contributions: [
      {
        en: "Developed the model from initial blockout to final high-poly pass",
        de: "Das Modell vom initialen Blockout bis zum finalen High-Poly-Pass entwickelt",
      } as unknown as string,
      {
        en: "Authored textures/materials for readable metal and leather surfaces",
        de: "Texturen und Materialien für gut lesbare Metall- und Lederoberflächen erstellt",
      } as unknown as string,
      {
        en: "Prepared presentation-ready output and published the model viewer entry",
        de: "Präsentationsreifes Ergebnis vorbereitet und den Modelleintrag veröffentlicht",
      } as unknown as string,
    ],
    outcomes: [
      {
        en: "Publicly published 3D model on Sketchfab",
        de: "3D-Modell öffentlich auf Sketchfab veröffentlicht",
      } as unknown as string,
      {
        en: "Demonstrated end-to-end individual asset workflow",
        de: "Einen durchgängigen individuellen Asset-Workflow nachgewiesen",
      } as unknown as string,
      {
        en: "Created a reusable portfolio piece for hard-surface prop work",
        de: "Ein wiederverwendbares Portfolio-Stück für Hard-Surface-Prop-Arbeiten erstellt",
      } as unknown as string,
    ],
    evidence: [
      {
        title: {
          en: "Mjölnir model",
          de: "Mjölnir-Modell",
        } as unknown as string,
        type: "image",
        sourceUrl: mjolnirImage.src,
        caption: {
          en: "Asset showcase frame.",
          de: "Präsentationsansicht des Assets.",
        } as unknown as string,
        supports: {
          en: "Supports claim: full model-to-presentation execution.",
          de: "Belegt die Aussage: vollständige Umsetzung von Modell bis Präsentation.",
        } as unknown as string,
      },
    ],
    narrative: {
      context: {
        en: "Created as a student exercise to practice complete prop production and presentation quality.",
        de: "Als Studienübung erstellt, um eine vollständige Prop-Produktion und hochwertige Präsentation zu trainieren.",
      } as unknown as string,
      challenge: {
        en: "Maintain iconic shape readability and engraved detail while keeping forms clean and materials clearly separated.",
        de: "Die ikonische Formlesbarkeit und gravierte Details erhalten und gleichzeitig saubere Formen sowie klar getrennte Materialien sicherstellen.",
      } as unknown as string,
      approach: {
        en: "Iterated on proportion and silhouette first, then refined hard-surface detail and finalized materials for viewer presentation.",
        de: "Zuerst Proportionen und Silhouette iteriert, anschließend Hard-Surface-Details verfeinert und die Materialien für die Viewer-Präsentation finalisiert.",
      } as unknown as string,
      impact: {
        en: "Resulted in a complete, publicly visible hero-prop case demonstrating individual execution from modeling through final presentation.",
        de: "Ergab ein vollständiges, öffentlich sichtbares Hero-Prop-Case, das die individuelle Umsetzung vom Modelling bis zur finalen Präsentation zeigt.",
      } as unknown as string,
    },
    links: {
      detailUrl: "https://sketchfab.com/atmo_gd",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
