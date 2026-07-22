# Portfolio — Aurélie Dumotier

Frontend React (Vite).

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur http://localhost:5173

## Structure

```
src/
  components/
    Navbar.jsx        -> barre de nav en haut
    Hero.jsx           -> titre "Mon Portfolio"
    BusinessCard.jsx    -> carte citation + coordonnées
    ProjectsSection.jsx -> une section (École ou Personnels)
    ProjectCard.jsx      -> une carte de projet (vidéo + outils)
  data/
    projects.js -> contenu des projets (à modifier avec tes vraies vidéos/outils)
```

## Pour ajouter des projets

Modifie `src/data/projects.js` :

- `videoSrc` : chemin vers la vidéo
- `tools` : liste des technos utilisées
- `description` : court résumé du projet

## Prochaine étape

- Une API Express qui sert les projets depuis MySQL
- Un formulaire de contact fonctionnel (section "Me contacter")
- Le déploiement
