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
                collegeCertificate: "Allgemeine Fachhochschulreife"
            }

        }
    }
});

export default i18n;