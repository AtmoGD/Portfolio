import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "de",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                projectsTitle: "Projects",
                cvTitle: "CV",
                educationTitle: "Education",
                workExperienceTitle: "Work Experience",
                universityAugsburg: "Technical University of Applied Sciences Augsburg",
                interactiveMediaSystems: "Interactive Media Systems -/ Game Development",
                universityFurtwangen: "Furtwangen University",
                mediaInformatics: "Media Informatics",
                vocationalCollege: "Vocational College Weil am Rhein",
                collegeCertificate: "Advanced technical college certificate",
                apprenticeship: "Apprenticeship",
                productionMechanicTextile: "Production mechanic -/ Textile",
                productionMechanic: "Production mechanic",
                productionMechanicDescription: "Programming and repairing of CNC sewing machines and laser cutters",
                schillerSchool: "Schiller School Rheinfelden",
                secondarySchool: "Secondary School",
                primarySchool: "Primary School",
                universityHohenheim: "University of Hohenheim",
                today: "Today",
                march: "March",
                workingStudent: "Working Student",
                workingStudentDescription: "Developing a chatbot specialized in teaching",
                september: "September",
                tutorUnity: "Tutor \"Unity Engine\"",
                tutorUnityDescription: "Supporting students in developing games with the Unity Engine",
                august: "August",
                tutorInteractiveApps: "Tutor \"Development of Interactive Applications\"",
                tutorInteractiveAppsDescription: "Supporting students in developing games with the FUDGE Engine",
                internshipGamelab: "Internship at the Gamelab Furtwangen University",
                internshipGamelabDescription: "Organization of the game lab, supporting students and developing various applications",
                july: "July",
            }
        },
        de: {
            translation: {
                projectsTitle: "Projekte",
                cvTitle: "Lebenslauf",
                educationTitle: "Bildung",
                workExperienceTitle: "Berufserfahrung",
                universityAugsburg: "Technische Hochschule Augsburg",
                interactiveMediaSystems: "Interaktive Mediensysteme -/ Game Development",
                universityFurtwangen: "Fachhochschule Furtwangen",
                mediaInformatics: "Medieninformatik",
                vocationalCollege: "Berufskolleg Weil am Rhein",
                collegeCertificate: "Allgemeine Fachhochschulreife",
                apprenticeship: "Ausbildung",
                productionMechanicTextile: "Produktionsmechaniker -/ Textil",
                productionMechanic: "Produktionsmechaniker",
                productionMechanicDescription: "Programmieren und Reparieren von CNC Nähmaschinen und Laser Cuttern",
                schillerSchool: "Schillerschule Rheinfelden",
                secondarySchool: "Realschule",
                primarySchool: "Grundschule",
                universityHohenheim: "Universität Hohenheim",
                today: "Heute",
                march: "März",
                workingStudent: "Werkstudent",
                workingStudentDescription: "Entwickeln eines Chatbots spezialisiert auf die Lehre",
                september: "September",
                tutorUnity: "Tutor \"Unity Engine\"",
                tutorUnityDescription: "Unterstützen von Studenten bei der Entwicklung von Spielen mit der Unity Engine",
                august: "August",
                tutorInteractiveApps: "Tutor \"Entwicklung Interaktive Anwendungen\"",
                tutorInteractiveAppsDescription: "Unterstützen von Studenten bei der Entwicklung von Spielen mit der FUDGE Engine",
                internshipGamelab: "Praktikum im Spiellabor der Hochschule Furtwangen",
                internshipGamelabDescription: "Organisation des Spielelabors, unterstützen von Studierenden und entwicklung verschiedener Anwendungen",
                july: "Juli",
            }

        }
    }
});

export default i18n;