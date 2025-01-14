<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <div class="resume__section">
        <div class="flex items-center">
          <div class="resume__indicator"></div>
          <h2 class="resume__title">Expériences professionnelles</h2>
        </div>

        <div class="resume__cards">
          <q-card
            v-for="(experience, index) in experiences"
            :key="index"
            class="resume__card q-mb-md"
            bordered
            shadow="2"
          >
            <q-card-section>
              <div class="resume__position-company">
                <strong class="position"
                  >{{ experience.position }} — {{ experience.company }}</strong
                >
              </div>

              <div class="resume__period">
                <em>{{ experience.period }} – {{ experience.location }}</em>
              </div>

              <div class="resume__skills">
                <strong>Compétences :</strong>
                <div class="resume__skills-list">
                  <q-chip v-for="(skill, index) in experience.skills" :key="index" class="q-mr-sm">
                    {{ skill }}
                  </q-chip>
                </div>
              </div>

              <div class="resume__achievements">
                <strong>Réalisations :</strong>
                <ul>
                  <li v-for="(achievement, index) in experience.achievements" :key="index">
                    <span class="indent">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="flex items-center">
          <div class="resume__indicator"></div>
          <h2 class="resume__title">Diplômes</h2>
        </div>

        <div class="resume__cards">
          <q-card
            v-for="(diploma, index) in diplomas"
            :key="index"
            class="resume__card q-mb-md"
            bordered
            shadow="2"
          >
            <q-card-section>
              <div class="resume__position-company">
                <strong class="position">{{ diploma.position }} — {{ diploma.school }}</strong>
              </div>

              <div class="resume__period">
                <em>{{ diploma.period }} – {{ diploma.location }}</em>
              </div>

              <div class="resume__achievements">
                <strong>Descriptions :</strong>
                <ul>
                  <li v-for="(desc, index) in diploma.descriptions" :key="index">
                    <span class="indent">{{ desc }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="diploma.link" class="experience__link">
                <a :href="diploma.link" target="_blank" class="q-mt-md">
                  <q-btn label="Voir le diplôme" color="primary" flat />
                </a>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="flex items-center">
          <div class="resume__indicator"></div>
          <h2 class="resume__title">Formations</h2>
        </div>
        <div class="resume__cards">
          <q-card
            v-for="(formation, index) in formations"
            :key="index"
            class="resume__card q-mb-md"
            bordered
            shadow="2"
          >
            <q-card-section>
              <div class="resume__position-company">
                <strong class="position">{{ formation.title }} — {{ formation.organism }}</strong>
              </div>
              <div class="resume__period">
                <em>{{ formation.period }} – {{ formation.location }}</em>
              </div>
              <div class="resume__achievements">
                <strong>Descriptions :</strong>
                <ul>
                  <li v-for="(desc, index) in formation.descriptions" :key="index">
                    <span class="indent">{{ desc }}</span>
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="flex items-center">
          <div class="resume__indicator"></div>
          <h2 class="resume__title">Compétences</h2>
        </div>

        <div class="resume__cards">
          <q-card class="resume__card q-mb-md" bordered shadow="2">
            <q-card-section>
              <div class="resume__skills">
                <strong>Langages de programmation :</strong>
                <div class="resume__skills-list">
                  <q-chip
                    v-for="(language, index) in competencies.languages"
                    :key="index"
                    class="q-mr-sm"
                  >
                    {{ language }}
                  </q-chip>
                </div>
              </div>

              <div class="resume__skills">
                <strong>Compétences en développement web :</strong>
                <div class="resume__skills-list">
                  <q-chip
                    v-for="(webDev, index) in competencies.webDevelopment"
                    :key="index"
                    class="q-mr-sm"
                  >
                    {{ webDev }}
                  </q-chip>
                </div>
              </div>

              <div class="resume__skills">
                <strong>Gestion de version :</strong>
                <div class="resume__skills-list">
                  <q-chip
                    v-for="(versionControl, index) in competencies.versionControl"
                    :key="index"
                    class="q-mr-sm"
                  >
                    {{ versionControl }}
                  </q-chip>
                </div>
              </div>

              <div class="resume__skills">
                <strong>Outils de développement :</strong>
                <div class="resume__skills-list">
                  <q-chip
                    v-for="(devTool, index) in competencies.developmentTools"
                    :key="index"
                    class="q-mr-sm"
                  >
                    {{ devTool }}
                  </q-chip>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const experiences = ref([
  {
    position: 'Développeur Full Stack C# VueJs',
    company: 'Access It',
    period: 'Octobre 2024 - Novembre 2024',
    location: 'Lille, France',
    skills: ['C#', 'VueJs', 'Postgresql', 'Azure DevOps'],
    achievements: [
      'Maintenance et ajout de fonctionnalités sur une application de gestion des seuils des AO (C#, VueJS)',
      'Ajout de fonctionnalité pour gérer les fichiers vidéo volumineux dans un logiciel de débriefing vidéo (C#)',
      'Ajout de fonctionnalités au logiciel d’accompagnement des utilisateurs à la recette (C#, Postgres, VueJS)',
      'Tests unitaires pour une bibliothèque de composants (vitest)',
    ],
  },
  {
    position: 'Développeur Full Stack C# VueJs',
    company: 'Opalean',
    period: 'Septembre 2022 - Septembre 2024',
    location: 'Lille, France',
    skills: ['C#', 'VB.Net', 'SQL Server', 'Vue.js'],
    achievements: [
      'Développement d’une application CRM pour la gestion des profils clients (C#)',
      'Ajout de nouvelles routes à une API existante (VB.Net)',
      'Création d’un prototype de drag-and-drop pour les fichiers CSV et XLS (Vue 2.js)',
      'Migration d’une API existante de VB.Net à C#',
    ],
  },
  {
    position: 'Développeur Web ReactJS',
    company: 'Vallourec Tubes France',
    period: 'Avril 2022 - Juillet 2022',
    location: 'Valenciennes, France',
    skills: ['React', 'TypeScript', 'Cypress', 'Méthodologie Scrum'],
    achievements: [
      'Développement d’un CRM de gestion d’inventaire (React JS, Java)',
      'Contribution à l’analyse technique de la solution',
      'Rédaction de tests fonctionnels et unitaires (Cypress)',
    ],
  },
  {
    position: 'Pyrotechnicien',
    company: 'Wagnon Artifices',
    period: 'Juin 2022 - Aujourd’hui',
    location: 'Haut de France, France',
    skills: ['Rigueur', 'Autonomie', 'Respect des consignes de sécurité', 'Créativité'],
    achievements: [
      'Préparation, installation et manipulation des feux d’artifices en veillant à la sécurité du public et du personnel',
      'Prise en charge individuelle de tâches spécifiques liées à la mise en place et au déclenchement des feux d’artifices',
      'Application stricte des procédures de sécurité et des réglementations en vigueur lors de la manipulation des feux d’artifices',
    ],
  },
])

const diplomas = ref([
  {
    position: 'Master Informatique Mention E-Services',
    school: 'Université de Lille',
    period: 'Septembre 2022 - 2024',
    location: 'Lille, France',
    descriptions: [
      'Concentration sur la conception et le développement de services numériques accessibles via divers moyens de communication numérique',
      'Compétences opérationnelles en conception de services numériques, interfaces homme-machine, gestion de projets et design applicatif',
      'Projet Platine : Développement de projets complets allant de la conception à la réalisation et à la promotion, en mettant l’accent sur les aspects utilisateurs, usages, IHM, UX, et l’innovation technologique',
    ],
    link: 'https://diplome-certificat.univ-lille.fr/index.html?key=32F0228C0686248CF67AF8A7B5A3BC3C0534D9298DF12B73D6DF112E8FC0E73DNC9IOXhYeFNPdlZiS1JKM1dZVnJpVFJDcVBOdCtpSTlFcXJTV25wVzFhYk5mRkZw',
  },
  {
    position: 'Licence Informatique',
    school: 'Université de Lille',
    period: 'Septembre 2019 - 2022',
    location: 'Lille, France',
    descriptions: [
      'Formation complète en informatique avec un enseignement théorique et appliqué',
      'Développement de compétences professionnelles avancées et transversales',
      'Préparation efficace pour des masters spécialisés et insertion professionnelle dans divers secteurs',
    ],
    link: 'https://diplome-certificat.univ-lille.fr/index.html?key=BD95D280568A85A981956D380DC9D395A25AFBF672EBECBB0DDEBDFB75D359B5S05BUGVhdWh1ai9NR1VZNU1kRVlLaElsUy8xS282NEFzOGZzTUgrUm02TEVaZkVI',
  },
])

const formations = ref([
  {
    title: 'Certificat de Qualification Pyrotechnique F4T2',
    organism: 'Association Nationale Européenne Instruction Pyrotechnique',
    period: 'Juin 2019',
    location: 'Caudry, France',
    descriptions: [
      'Formation intensive sur les protocoles et les procédures de sécurité en pyrotechnie, assurant une mise en œuvre sans risque des feux d’artifice',
      'Apprentissage approfondi des techniques de manipulation et de gestion des explosifs, assurant une expertise dans le domaine pyrotechnique',
      'Préparation complète pour la planification et l’exécution de spectacles pyrotechniques spectaculaires, garantissant une expérience immersive et sécurisée pour le public',
    ],
  },
  {
    title: 'Brevet d’Aptitude aux Fonctions d’Animateur',
    organism: 'Éclaireuses Éclaireurs de France',
    period: 'Février 2018 - Mai 2019',
    location: 'Haut de France, France',
    descriptions: [
      'Formation pratique et théorique pour développer des techniques d’animation adaptées à différents publics',
      'Apprentissage des bases légales et des responsabilités liées à l’encadrement de groupes de jeunes',
      'Réalisation et mise en pratique de projets d’animation favorisant la créativité et l’interaction sociale',
    ],
  },
])

const competencies = ref({
  languages: ['C#', '.Net', 'Javascript', 'Typescript', 'Java', 'Python'],
  webDevelopment: [
    'Vue.js',
    'ReactJS',
    'ASP.NET Core',
    'ASP.NET MVC',
    'ASP.NET Web API',
    'Blazor',
    'HTML',
    'CSS',
    'Bootstrap',
  ],
  versionControl: ['GitHub', 'GitLab', 'Azure DevOps', 'Trello', 'Jira'],
  developmentTools: [
    'Visual Studio',
    'Visual Studio Code',
    'SQL Server Management Studio',
    'Postman',
    'JetBrains',
  ],
})
</script>

<style lang="scss" scoped>
.background-container {
  background: $background;
}

.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}

.borders {
  border: 1px solid $background;
}

.resume__section {
  width: 100%;
  max-width: 800px;
}

.resume__indicator {
  width: 16px;
  height: 16px;
  background-color: $primary;
  margin-right: 16px;
}

.resume__title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: $gray-blue;
}

.resume__cards {
  display: flex;
  flex-direction: column;
}

.resume__card {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.resume__position-company {
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}

.resume__period {
  font-size: 14px;
  color: $gray;
  margin-top: 5px;
}

.resume__skills {
  margin-top: 20px;
  font-size: 16px;
  color: $gray-blue;
}

.resume__skills:first-of-type {
  margin-top: 0;
}

.resume__skills-list {
  margin-top: 10px;
}

.resume__achievements {
  margin-top: 20px;
}

.resume__achievements ul {
  list-style-type: none;
  padding-left: 0;
}

.resume__achievements li {
  font-size: 14px;
  color: $gray-blue;
  margin-bottom: 8px;
  text-indent: 20px;
}

.q-chip {
  margin: 5px;
  background-color: transparent;
  border: 1px solid $primary;
}
</style>
