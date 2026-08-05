export const ecoleProjects = [
  {
    id: "ecole-1",
    title: "Projet École 1",
    description: "Description du projet réalisé en formation.",
    videoSrc: "",
    tools: ["React", "CSS"],
  },
  {
    id: "ecole-2",
    title: "Projet École 2",
    description: "Description du projet réalisé en formation.",
    videoSrc: "",
    tools: ["JavaScript", "Node.js"],
  },
  {
    id: "ecole-3",
    title: "Projet École 3",
    description: "Déscription du projet réalisé en formation.",
    videoSrc: "",
    tools: ["MySQL", "Express"],
  },
];

export const personnelsProjects = [
  {
    id: "perso-1",
    title: "Projet Personnel 1",
    description: "Déscription du projet réalisé en formation.",
    videoSrc: "",
    url: "",
    image: "",
    tools: ["React Native", "Firebase"],
  },
  {
    id: "perso-2",
    title: "CPK Academy",
    description:
      "Plateforme de coaching Poker : Suivi de la progression et entraînement des élèves.",
    longDescription:
      "CPK Academy est une plateforme de coaching poker que j'ai développée en solo, de la conception à la mise en production, pour un coach professionnel et sa communauté d'élèves. L'objectif : donner au coach des outils pour suivre la progression de chaque élève, et aux élèves un espace d'entraînement structuré (analyse de mains, quiz, suivi d'objectifs).\n\nLe projet est en production réelle depuis 05/07/2026, utilisé par un coach professionnel d'une part pour sa visibilité et présentation de quelques contenus pédagogiques, d'autre part pour ses élèves au quotidien grâce à un système de connexion sécurisé.",
    videoSrc: "",
    url: "www.cpkacademy.com",
    image: "/assets/cpk-academy.png",
    hosting: ["Vercel", "Railway"],
    tools: [
      "React",
      "Node",
      "Express",
      "MySQL",
      "TypeScript",
      "Vite",
      "Recharts",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "Resend",
      "Helmet",
      "EmailJs",
    ],
    features: [
      "**Replayer de mains de poker** : rejeu interactif street par street (board, actions, stacks) pour analyser une main comme sur un vrai logiciel de tracking, avec parseur d'import de historiques (format Betclic)",
      "**Quiz pédagogiques** avec suivi de session, score, et détail des réponses (y compris réponses alternatives acceptées)",
      "**Système Beck 5 colonnes** et **Hand History Mentale**, deux outils de coaching mental utilisés en poker, avec export PDF/impression",
      "**Suivi d'objectifs** : objectif final décomposé en paliers, avec graphiques de progression",
      "**Espace coach** : dashboard élèves, notifications, retours hebdomadaires, gestion de modules pédagogiques et de vidéos d'introduction",
      "**Emploi du temps** avec impression au format paysage",
      "**Authentification par rôle** (coach / élève), gestion de compte avec expiration, réinitialisation de mot de passe autonome",
      "Attention portée à la **sécurité** (JWT, bcrypt, rate-limiting, sanitizationXSS, CORS strict) et au **responsive mobile**",
    ],
  },
];
