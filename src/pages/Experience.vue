<template>
  <div class="background-container">
    <q-page class="q-pa-md borders">
      <q-toolbar class="q-mb-md">
        <q-btn icon="arrow_back" label="Retour" color="primary" to="/resume" flat outline />
      </q-toolbar>

      <q-card
        v-if="experience"
        class="experience__card q-mb-md"
        bordered
        shadow="2"
        style="width: 100%"
      >
        <q-card-section>
          <div class="experience__grid">
            <div class="experience__left-column">
              <div class="experience__header">
                <strong>{{ experience.title }} — {{ experience.company }}</strong>
              </div>
              <div class="experience__period-location">
                <em>{{ experience.period }} — {{ experience.location }}</em>
              </div>
            </div>

            <div class="experience__right-column">
              <ChipList :items="experience.keywords" :outlined="true" />
            </div>
          </div>

          <div class="experience__content">
            <div class="experience__context">
              <em>{{ experience.context }}</em>
            </div>
            <div class="experience__envrionment-methodology">
              <ChipList
                label="Environnements"
                :items="experience.environments"
                class="experience__chip-list"
              />
              <ChipList
                label="Méthodologies"
                :items="experience.methodologies"
                class="experience__chip-list"
              />
            </div>
          </div>

          <div class="experience__achievements">
            <div class="experience__achievement">
              <strong>Réalisations générales :</strong>
              <ul>
                <li v-for="(achievement, index) in experience.achievements.general" :key="index">
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
            <div class="experience__achievement">
              <strong>Réalisations méthodologiques :</strong>
              <ul>
                <li
                  v-for="(methodology, index) in experience.achievements.methodology"
                  :key="index"
                >
                  <span>{{ methodology }}</span>
                </li>
              </ul>
            </div>
            <div class="experience__achievement">
              <strong>Interventions :</strong>
              <ul>
                <li
                  v-for="(intervention, index) in experience.achievements.interventions"
                  :key="index"
                >
                  <span>{{ intervention }}</span>
                </li>
              </ul>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ChipList from 'src/components/ChipList.vue'

const route = useRoute()

type Experience = {
  id: string
  company: string
  title: string
  years: string
  period: string
  location: string
  keywords: string[]
  context: string
  environments: string[]
  methodologies: string[]
  achievements: {
    general: string[]
    methodology: string[]
    interventions: string[]
  }
}

const experiences: Experience[] = [
  {
    id: '3',
    company: 'Access It',
    title: 'Développeur Full Stack C# VueJs',
    years: '2 mois',
    period: 'Octobre 2024 à Novembre 2024',
    location: 'Lille, France',
    keywords: [
      'C#',
      'VueJs',
      'PostgreSQL',
      'Azure DevOps',
      'Développement logiciel',
      'Partenaire Microsoft',
      'Agilité',
    ],
    context:
      'Access It est une société de services spécialisée dans le développement d’applications sur mesure. Partenaire certifié Microsoft, Access It accompagne les entreprises dans la mise en place et l’évolution de leurs systèmes d’information avec une approche humaine et transparente. En tant que Développeur Full Stack, j’ai contribué à divers projets en maintenance, amélioration et ajout de nouvelles fonctionnalités sur des logiciels stratégiques, en utilisant des technologies modernes comme C#, VueJs et PostgreSQL.',
    environments: ['C#', 'VueJs', 'PostgreSQL', 'Azure DevOps', 'Vitest'],
    methodologies: [
      'Maintenance logicielle',
      'Développement itératif',
      'Approche orientée objet',
      'Tests unitaires',
      'Design Patterns',
    ],
    achievements: {
      general: [
        'Maintenance et amélioration d’applications sur mesure',
        'Développement de nouvelles fonctionnalités',
        'Gestion et optimisation de bases de données',
        'Réalisation de tests unitaires',
        'Collaboration avec des équipes pluridisciplinaires et clients via Azure DevOps',
      ],
      methodology: [
        'Conception et implémentation de solutions pour des besoins métiers spécifiques',
        'Mise en place d’une organisation rigoureuse et orientée résultats',
        'Documentation claire des modifications pour la maintenance future',
        'Communication efficace avec les parties prenantes des projets',
        'Capacité d’adaptation rapide à un environnement technique en évolution constante',
      ],
      interventions: [
        'Maintenance et ajout de fonctionnalités sur une application de gestion des seuils des AO (C#, VueJs)',
        'Ajout d’une fonctionnalité pour gérer des fichiers vidéo volumineux dans un logiciel de débriefing vidéo (C#)',
        'Amélioration du logiciel d’accompagnement des utilisateurs à la recette (C#, Postgres, VueJs)',
        'Réalisation de tests unitaires pour une bibliothèque de composants (Vitest)',
      ],
    },
  },
  {
    id: '2',
    company: 'Opalean',
    title: 'Développeur Full Stack C# VueJs',
    years: '2 ans',
    period: 'Septembre 2022 à Septembre 2024',
    location: 'Lille, France',
    keywords: ['Microsoft', 'Projet', 'Refonte', 'Supply chain', 'Microsoft'],
    context:
      'Opalean, une entreprise spécialisée dans le développement d’applications web, a conçu et mis en place une solution CRM pour accompagner ses clients dans la gestion de leurs supports de manutention. Cette solution, conçue pour optimiser les flux de transport, est aujourd’hui utilisée par de nombreuses entreprises dans des secteurs d’activités variés. En tant que Développeur Full Stack (en alternance), j’ai eu l’opportunité de contribuer activement au développement et à l’amélioration de cette solution WMS, en m’impliquant dans des projets concrets.',
    environments: ['C#', 'VueJS', 'Trello', 'Suite Google', 'VB.NET', 'SQL Server'],
    methodologies: ['Cycle en V', 'Monolithique', 'MVC', 'Cascade'],
    achievements: {
      general: [
        'Développement d’applications web',
        'Développement d’API',
        'Gestion de bases de données',
        'Intégration de solutions tierces',
        'Déploiement et maintenance d’applications',
      ],
      methodology: [
        'Adaptation à un environnement de travail sans méthodologie Agile',
        'Mise en place d’une organisation personnelle et rigoureuse',
        'Capacité d’adaptation et d’apprentissage rapide dans un environnement en constante évolution',
        'Documentation détaillée des solutions développées pour faciliter la maintenance et l’évolution du code',
        'Lecture de documentation technique et participation à des formations',
      ],
      interventions: [
        'Développement d’une nouvelle fonctionnalité de gestion des profils clients',
        'Correction de bugs et optimisation des performances de l’application',
        'Développement d’une application CRM pour la gestion des profils clients',
        'Création d’un prototype d’importation de fichier csv et xls',
        'Migration d’une API existante de VB.Net à C#',
      ],
    },
  },
  {
    id: '1',
    company: 'Vallourec Tubes France',
    title: 'Développeur Web',
    years: '4 mois',
    period: 'Avril 2022 à Juillet 2022',
    location: 'Aulnoye-Aymeries, France',
    keywords: ['React', 'Java', 'Agile', 'Scrum', 'Refonte', 'R&D', 'Tests unitaires'],
    context:
      'Vallourec, acteur mondial des solutions tubulaires en acier, conçoit, produit et distribue des tubes sans soudure et des composants pour les secteurs de l’énergie et de l’industrie. Mon stage s’est déroulé au sein du département R&D, où j’ai contribué au développement d’une application web de gestion d’inventaire. Ce projet visait à refondre et améliorer l’expérience utilisateur tout en garantissant la qualité du code grâce à une méthodologie Agile.',
    environments: [
      'React',
      'TypeScript',
      'Cypress',
      'Scrum',
      'Java',
      'Jira',
      'Confluence',
      'Git',
      'GitLab',
    ],
    methodologies: ['Agile', 'Scrum', 'Sprints', 'User Stories', 'Tests fonctionnels et unitaires'],
    achievements: {
      general: [
        'Développement d’interfaces utilisateur',
        'Intégration d’API',
        'Mise en place de tests unitaires',
        'Rédaction de documentation technique',
      ],
      methodology: [
        'Participation aux rituels Agile : réunions de planification, sprints quotidiens, revues de sprint',
        'Utilisation d’outils de gestion de version comme Git et GitLab pour le suivi des modifications',
        'Respect des bonnes pratiques de développement pour assurer la maintenabilité du code',
        'Collaboration active avec l’équipe de développement via les outils Jira et Confluence',
      ],
      interventions: [
        'Développement d’une nouvelle interface utilisateur pour le CRM de gestion d’inventaire',
        'Refonte du design de l’application web pour améliorer l’expérience utilisateur',
        'Participation aux cérémonies Agile avec l’équipe de développement',
        'Rédaction de tests fonctionnels et unitaires pour garantir la qualité et la fiabilité de l’application',
      ],
    },
  },
]

const experience = ref<Experience>()

onMounted(() => {
  const experienceId = route.params.id
  experience.value = experiences.find((exp) => exp.id === experienceId)
})
</script>

<style lang="scss" scoped>
.background-container {
  background: $background;
}

.borders {
  border: 1px solid $background;
}

.q-toolbar .q-btn {
  background-color: $white;
}

.experience__card {
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.experience__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.experience__left-column {
  display: flex;
  flex-direction: column;
}

.experience__header {
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}

.experience__period-location {
  font-size: 14px;
  color: $gray;
  margin-top: 5px;
  margin-bottom: 20px;
}

.experience__right-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.experience__content {
  display: flex;
  justify-content: space-between;
  margin: 3vh 0;
}

.experience__context {
  font-size: 14px;
  color: $gray;
  margin-right: 5vw;
  flex: 2;
  min-width: 25%;
}

.experience__envrionment-methodology {
  display: flex;
  flex-wrap: nowrap;
  gap: 5vw;
  flex: 1;
  min-width: 50%;
  justify-content: flex-end;
}

.experience__envrionment-methodology .experience__chip-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.experience__achievement {
  margin-top: 20px;
}

.experience__achievement li {
  font-size: 14px;
  margin-bottom: 8px;
}

.experience__achievements {
  display: flex;
  margin-top: 5vh;
}

.experience__achievements .experience__achievement {
  margin-right: 20px;
}
</style>
