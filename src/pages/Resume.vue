<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <div class="resume__section">
        <ResumeSection title="Expériences professionnelles">
          <ResumeCard v-for="(experience, index) in experiences" :key="index">
            <template #header>
              <div class="resume__position-company">
                <strong class="position">
                  {{ experience.position }} — {{ experience.company }}
                </strong>
              </div>
              <div class="resume__period">
                <em>{{ experience.period }} – {{ experience.location }}</em>
              </div>
            </template>
            <template #content>
              <ResumeChipList label="Compétences" :items="experience.skills" />

              <div class="resume__achievements">
                <strong>Réalisations :</strong>
                <ul>
                  <li v-for="(achievement, index) in experience.achievements" :key="index">
                    <span class="indent">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </ResumeCard>
        </ResumeSection>

        <ResumeSection title="Diplômes">
          <ResumeCard v-for="(diploma, index) in diplomas" :key="index">
            <template #header>
              <div class="resume__position-company">
                <strong class="position"> {{ diploma.position }} — {{ diploma.school }} </strong>
              </div>
              <div class="resume__period">
                <em>{{ diploma.period }} – {{ diploma.location }}</em>
              </div>
            </template>
            <template #content>
              <div class="resume__achievements">
                <strong>Descriptions :</strong>
                <ul>
                  <li v-for="(desc, index) in diploma.descriptions" :key="index">
                    <span class="indent">{{ desc }}</span>
                  </li>
                </ul>
              </div>
            </template>
            <template #footer v-if="diploma.link">
              <div class="experience__link">
                <a :href="diploma.link" target="_blank" class="q-mt-md">
                  <q-btn label="Voir le diplôme" color="primary" flat />
                </a>
              </div>
            </template>
          </ResumeCard>
        </ResumeSection>

        <ResumeSection title="Formations">
          <ResumeCard v-for="(formation, index) in formations" :key="index">
            <template #header>
              <div class="resume__position-company">
                <strong class="position">{{ formation.title }} — {{ formation.organism }}</strong>
              </div>
              <div class="resume__period">
                <em>{{ formation.period }} – {{ formation.location }}</em>
              </div>
            </template>
            <template #content>
              <div class="resume__achievements">
                <strong>Descriptions :</strong>
                <ul>
                  <li v-for="(desc, index) in formation.descriptions" :key="index">
                    <span class="indent">{{ desc }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </ResumeCard>
        </ResumeSection>

        <ResumeSection title="Compétences">
          <ResumeCard>
            <template #content>
              <ResumeChipList label="Langages de programmation" :items="competencies.languages" />

              <ResumeChipList
                label="Compétences en développement web"
                :items="competencies.webDevelopment"
              />

              <ResumeChipList label="Gestion de version" :items="competencies.versionControl" />

              <ResumeChipList
                label="Outils de développement"
                :items="competencies.developmentTools"
              />
            </template>
          </ResumeCard>
        </ResumeSection>

        <ResumeSection title="Qualités">
          <ResumeCard>
            <template #content>
              <ResumeChipList label="Qualités professionnelles" :items="qualities.professional" />

              <ResumeChipList label="Qualités humaines" :items="qualities.human" />
            </template>
          </ResumeCard>
        </ResumeSection>

        <ResumeSection title="Expériences personnelles">
          <ResumeCard v-for="(personalExperience, index) in personalExperiences" :key="index">
            <template #header>
              <div class="resume__position-company">
                <strong class="position">
                  {{ personalExperience.position }} — {{ personalExperience.company }}
                </strong>
              </div>
              <div class="resume__period">
                <em>{{ personalExperience.period }} – {{ personalExperience.location }}</em>
              </div>
            </template>
            <template #content>
              <ResumeChipList label="Compétences" :items="personalExperience.skills" />

              <div class="resume__achievements">
                <strong>Missions :</strong>
                <ul>
                  <li v-for="(mission, index) in personalExperience.missions" :key="index">
                    <span class="indent">{{ mission }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </ResumeCard>
        </ResumeSection>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ResumeSection from 'src/components/ResumeSection.vue'
import ResumeCard from 'src/components/ResumeCard.vue'
import ResumeChipList from 'src/components/ResumeChipList.vue'

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

const qualities = ref({
  professional: [
    'Rigueur',
    'Motivation',
    'Capacité d’adaptation',
    'Esprit d’analyse',
    'Créativité',
  ],
  human: ['Capacité d’écoute', 'Volontaire', 'Conciliant', 'Esprit d’équipe', 'Empathie'],
})

const personalExperiences = ref([
  {
    position: 'Adhérent - Animateur',
    company: 'Éclaireuses et Éclaireurs de France',
    period: '2006 - Aujourd’hui',
    location: 'Villeneuve d’Ascq, France',
    skills: ['Gestion de projet', 'Animation', 'Formation'],
    missions: [
      'Organisation et animation de réunions hebdomadaires pour les jeunes membres',
      'Planification et organisation de week-ends et camps de formation en plein air',
      'Formateur pour les jeunes sur divers sujets liés au scoutisme et à la vie en plein air',
      'Participation à des formations continues pour améliorer les compétences d’animation et de leadership',
    ],
  },
  {
    position: 'Animateur',
    company: 'Mairie',
    period: 'Août 2018 - Décembre 2021',
    location: 'Villeneuve d’Ascq, France',
    skills: ['Gestion de groupe', 'Gestion du stress', 'Volontariat'],
    missions: [
      'Encadrement quotidien et activités récréatives pour les enfants de la ville',
      'Planification et organisation d’activités éducatives et récréatives',
      'Résolution de conflits entre les enfants et gestion des problèmes d’urgence',
      'Participation à des événements communautaires et projets de volontariat',
    ],
  },
])
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
</style>
