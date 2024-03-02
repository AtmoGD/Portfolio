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
                unthronedDescription: "Unthroned is a twin-stick shooter with base building and tower defense elements. It was developed as a student project for our masters degree. You are playing dave, a cool necromancer who is trying to invade his brothers empire. Go and farm enough souls to upgrade your skills and your home base.",
                oasisDescription: "This work was created as part of a study project in WS 2021/22. A VR game was developed which is later to be installed and played in a haptic VR room. The haptic VR room is about not needing any controllers for control in the virtual environment anymore. For this there will be real objects that can be picked up and used to manipulate the virtual world.",
                aureaDescription: "Aurea is an augmented reality multiplayer game in low-poly style for your smartphone. It was developed with the Unity Engine and the 3D programs Blender and Maya were used for the models. With the AR function you can dive into the action and bring the world of Aurea into your living room.",
                cozyWinterDescription: "In this game your only goal is to relax and to build your own Christmas market. First get a nice cozy blanket, grab a cup off tee (or mulled wine) and then start building. The more buildings you have the more customers will visit your Christmas market. But don't forget the decoration! The more decoration you have the more money the customers will spend!",
                pumpkinHarvestDescription: "The people in the small suburb near your farm have pretty basic needs: pumpkins. Luckily, that's exactly what you're focused on! So you can plant, water, harvest and deliver your pumpkins - or just take a relieving walk in the woods and enjoy the beauty mother nature presents to you.",
                witchWayDescription: "In a world that keeps getting faster and more chaotic even witches have to be careful not to get stuck. Help the witch to survive as long as possible by making her environment as pleasant as imaginable. In Witch Way? you won't take control of the witch herself, but of the magical world she lives in. Place various objects and set directions to lead her through the dark forest. But be aware, even well-intentioned help can cause trouble!",
                gravityPongDescription: "This is a pong game with a twist. The ball is affected by gravity and the paddles are controlled by a machine learning algorithm. The game was developed in Unity and the machine learning algorithm was trained with the Unity ML-Agents toolkit.",
                bombermanDescription: "This is a Bomberman clone developed with the FUDGE Engine. It was developed as a student project for the course \"Development of Interactive Applications\" at Furtwangen University.",
                arcReactorDescription: "A model i made as a student project. Goal was to create any game any game asset.",
                mjolnirDescription: "A model i made as a student project. Goal was to create any game any game asset."

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
                unthronedDescription: "Unthroned ist ein Twin-Stick-Shooter mit Base-Building und Tower-Defense-Elementen. Es wurde als Studentenprojekt für unseren Masterabschluss entwickelt. Du spielst Dave, einen coolen Nekromanten, der versucht, das Reich seines Bruders zu überfallen. Geh und farme genug Seelen, um deine Fähigkeiten und deine Heimatbasis zu verbessern.",
                oasisDescription: "Diese Arbeit wurde im Rahmen einer Studienarbeit im WS 2021/22 erstellt. Es wurde ein VR-Spiel entwickelt welches später in einem haptischen VR-Raum installiert und gespielt werden soll. Bei dem haptischen VR-Raum geht es darum keine Controller zur Steuerung in der virtuellen Umgebung mehr zu benötigen. Dafür wird es echte Gegenstände geben, welche in die Hand genommen werden können und mit welchen die virtuelle Welt manipuliert werden kann.",
                aureaDescription: "Aurea ist ein Augmented-Reality Multiplayer Spiel im Low-Poly-Stil für dein Smartphone. Es wurde mit der Unity Engine entwickelt und für die Modelle wurden die 3D Programme Blender und Maya benutzt. Mit der AR-Funktion kannst du hautnah ins Geschehen eintauchen und dir die Welt der Aurea in dein Wohnzimmer holen.",
                cozyWinterDescription: "In diesem Spiel ist dein einziges Ziel zu entspannen und deinen eigenen Weihnachtsmarkt zu bauen. Hol dir zuerst eine schöne kuschelige Decke, schnapp dir eine Tasse Tee (oder Glühwein) und dann fang an zu bauen. Je mehr Gebäude du hast, desto mehr Kunden werden deinen Weihnachtsmarkt besuchen. Aber vergiss die Dekoration nicht! Je mehr Dekoration du hast, desto mehr Geld werden die Kunden ausgeben!",
                pumpkinHarvestDescription: "Die Leute in der kleinen Vorstadt in der Nähe deiner Farm haben ziemlich einfache Bedürfnisse: Kürbisse. Zum Glück ist das genau das, worauf du dich konzentrierst! Also kannst du deine Kürbisse pflanzen, gießen, ernten und liefern - oder einfach einen erleichternden Spaziergang im Wald machen und die Schönheit genießen, die dir die Mutter Natur präsentiert.",
                witchWayDescription: "In einer Welt, die immer schneller und chaotischer wird, müssen selbst Hexen aufpassen, nicht stecken zu bleiben. Hilf der Hexe, so lange wie möglich zu überleben, indem du ihre Umgebung so angenehm wie möglich gestaltest. In Witch Way? übernimmst du nicht die Kontrolle über die Hexe selbst, sondern über die magische Welt, in der sie lebt. Platziere verschiedene Objekte und setze Richtungen, um sie durch den dunklen Wald zu führen. Aber sei vorsichtig, auch gut gemeinte Hilfe kann Ärger verursachen!",
                gravityPongDescription: "Dies ist ein Pong-Spiel mit einem Twist. Der Ball wird von der Schwerkraft beeinflusst und die Paddel werden von einem maschinellen Lernalgorithmus gesteuert. Das Spiel wurde in Unity entwickelt und der maschinelle Lernalgorithmus wurde mit dem Unity ML-Agents-Toolkit trainiert.",
                bombermanDescription: "Dies ist ein Bomberman-Klon, der mit der FUDGE Engine entwickelt wurde. Es wurde als Studentenprojekt für den Kurs \"Entwicklung Interaktiver Anwendungen\" an der Hochschule Furtwangen entwickelt.",
                arcReactorDescription: "Ein Modell, das ich als Studentenprojekt gemacht habe. Ziel war es, ein beliebiges Spiel-Asset zu erstellen.",
                mjolnirDescription: "Ein Modell, das ich als Studentenprojekt gemacht habe. Ziel war es, ein beliebiges Spiel-Asset zu erstellen."

            }
        }
    }
});

export default i18n;