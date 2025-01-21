# Projet CV

## Description

Ce projet est un CV (Curriculum Vitae) en ligne construit avec des technologies web. Il permet de mettre en avant des informations personnelles et professionnelles, notamment l’expérience, les compétences, les projets et bien plus, le tout dans un format interactif et esthétique. L’application est développée avec Quasar Framework, un framework UI basé sur Vue.js 3, et utilise des fonctionnalités comme la composition d’API et TypeScript

## Fonctionnalités

- **Informations personnelles** : Affichage des détails essentiels comme le nom, les informations de contact et les liens vers les réseaux sociaux.
- **Expérience professionnelle** : Une section dédiée à l’historique professionnel avec des descriptions des rôles et réalisations.
- **Projets** : Mise en avant des projets notables avec descriptions, technologies utilisées et liens (si disponibles).
- **Téléchargement du CV** : Fonctionnalité d’intégration pour télécharger le CV au format PDF.
- **Composants personnalisables** : Composants Vue.js modulaires et réutilisables pour des mises à jour faciles.

## Technologies utilisées

- **Vue.js** : Un framework JavaScript progressif pour la construction d’interfaces utilisateur.
- **Quasar Framework** : Un framework UI basé sur Vue pour des applications riches et adaptatives.
- **TypeScript** : Pour un développement avec typage statique.
- **SCSS** : Gestion des styles et des thèmes personnalisés.
- **ESLint & Prettier** : Pour garantir la qualité et la cohérence du code.

## Installation

Suivez ces étapes pour configurer le projet en local :

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/nestorskoczylas/cv
   cd cv
   ```

2. **Installer les dépendances** :

   ```bash
   # Avec Yarn
   yarn
   # Ou avec npm
   npm install
   # Ou avec pnpm
   pnpm install
   ```

3. **Lancer le serveur de développement** :

   ```bash
   yarn local
   # Ou
   npm run local
   # Ou
   pnpm local
   ```

L’application sera accessible à l’adresse `http://localhost:8080`.

## Commandes

- **Linter les fichiers** :

  ```bash
  yarn lint
  # Ou
  npm run lint
  # Ou
  pnpm lint
  ```

- **Formater les fichiers** :

  ```bash
  yarn format
  # Ou
  npm run format
  # Ou
  pnpm format
  ```

- **Construire pour la production** :

  ```bash
  yarn build
  # Ou
  npm run build
  # Ou
  pnpm build
  ```

## Structure du projet

```bash
CV/
├── public/                # Assets statiques (icônes, PDF du CV, etc.)
├── src/
│   ├── assets/           # Images, logos, etc.
│   ├── components/       # Composants Vue réutilisables
│   ├── layouts/          # Layout de l’application
│   ├── pages/            # Composants de pages (About Me, Projects, etc.)
│   ├── router/           # Routes de l’application
│   ├── css/              # Styles SCSS
│   └── utils/            # Fonctions utilitaires
├── package.json          # Dépendances et scripts
├── quasar.config.js      # Configuration Quasar
└── tsconfig.json         # Configuration TypeScript
```

## Branches

- **main** : Branche principale, contenant la version stable du projet.
- **dev** : Branche de développement pour les nouvelles fonctionnalités et correctifs.
- **gh-pages** : Branche dédiée au déploiement sur GitHub Pages.

## Crédits

- Auteur : **Nestor Skoczylas**
- Construit avec **Quasar Framework** et **Vue.js**.
- Icônes et assets inclus dans le dossier `public/`.

## Licence

Ce projet est sous licence [MIT](LICENSE).

## Ressources supplémentaires

- [Documentation de Quasar Framework](https://quasar.dev/)
- [Documentation de Vue.js](https://vuejs.org/)
- [Documentation de TypeScript](https://www.typescriptlang.org/)
