<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <div class="resume__section">
        <template v-for="(section, index) in resumeSections" :key="index">
          <ResumeSection :title="section.title">
            <ResumeCard v-for="(item, index) in section.items" :key="index">
              <template #header>
                <div v-if="item.title && item.organization" class="resume__position-company">
                  <strong class="position"> {{ item.title }} — {{ item.organization }} </strong>
                </div>
                <div v-if="item.period && item.location" class="resume__period">
                  <em>{{ item.period }} — {{ item.location }}</em>
                </div>
              </template>
              <template #content>
                <div v-if="item.skills && !item.skillTitle">
                  <ResumeChipList label="Compétences" :items="item.skills" />
                </div>
                <div v-if="item.skills && item.skillTitle">
                  <ResumeChipList :label="item.skillTitle" :items="item.skills" />
                </div>
                <div v-if="item.achievements">
                  <div class="resume__achievements">
                    <strong>Descriptions :</strong>
                    <ul>
                      <li v-for="(achievement, index) in item.achievements" :key="index">
                        <span class="indent">{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
              <template #footer v-if="item.link">
                <a :href="item.link" target="_blank" class="q-mt-md">
                  <q-btn label="Voir le diplôme" color="primary" flat />
                </a>
              </template>
            </ResumeCard>
          </ResumeSection>
        </template>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import ResumeSection from 'src/components/ResumeSection.vue'
import ResumeCard from 'src/components/ResumeCard.vue'
import ResumeChipList from 'src/components/ResumeChipList.vue'

type ResumeItems = {
  title?: string
  organization?: string
  period?: string
  location?: string
  skillTitle?: string
  skills?: string[]
  achievements?: string[]
  link?: string
}

type ResumeSection = {
  title: string
  items: ResumeItems[]
}

const resumeSections: ResumeSection[] = [
  {
    title: 'Expériences professionnelles',
    items: [
      {
        title: 'Développeur Full Stack C# VueJs',
        organization: 'Access It',
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
        title: 'Développeur Full Stack C# VueJs',
        organization: 'Opalean',
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
        title: 'Développeur Web ReactJS',
        organization: 'Vallourec Tubes France',
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
        title: 'Pyrotechnicien',
        organization: 'Wagnon Artifices',
        period: 'Juin 2022 - Aujourd’hui',
        location: 'Haut de France, France',
        skills: ['Rigueur', 'Autonomie', 'Respect des consignes de sécurité', 'Créativité'],
        achievements: [
          'Préparation, installation et manipulation des feux d’artifices en veillant à la sécurité du public et du personnel',
          'Prise en charge individuelle de tâches spécifiques liées à la mise en place et au déclenchement des feux d’artifices',
          'Application stricte des procédures de sécurité et des réglementations en vigueur lors de la manipulation des feux d’artifices',
        ],
      },
    ],
  },
  {
    title: 'Diplômes',
    items: [
      {
        title: 'Master Informatique Mention E-Services',
        organization: 'Université de Lille',
        period: 'Septembre 2022 - 2024',
        location: 'Lille, France',
        achievements: [
          'Concentration sur la conception et le développement de services numériques accessibles via divers moyens de communication numérique',
          'Compétences opérationnelles en conception de services numériques, interfaces homme-machine, gestion de projets et design applicatif',
          'Projet Platine : Développement de projets complets allant de la conception à la réalisation et à la promotion, en mettant l’accent sur les aspects utilisateurs, usages, IHM, UX, et l’innovation technologique',
        ],
        link: 'https://diplome-certificat.univ-lille.fr/index.html?key=32F0228C0686248CF67AF8A7B5A3BC3C0534D9298DF12B73D6DF112E8FC0E73DNC9IOXhYeFNPdlZiS1JKM1dZVnJpVFJDcVBOdCtpSTlFcXJTV25wVzFhYk5mRkZw',
      },
      {
        title: 'Licence Informatique',
        organization: 'Université de Lille',
        period: 'Septembre 2019 - 2022',
        location: 'Lille, France',
        achievements: [
          'Formation complète en informatique avec un enseignement théorique et appliqué',
          'Développement de compétences professionnelles avancées et transversales',
          'Préparation efficace pour des masters spécialisés et insertion professionnelle dans divers secteurs',
        ],
        link: 'https://diplome-certificat.univ-lille.fr/index.html?key=BD95D280568A85A981956D380DC9D395A25AFBF672EBECBB0DDEBDFB75D359B5S05BUGVhdWh1ai9NR1VZNU1kRVlLaElsUy8xS282NEFzOGZzTUgrUm02TEVaZkVI',
      },
    ],
  },
  {
    title: 'Formations',
    items: [
      {
        title: 'Certificat de Qualification Pyrotechnique F4T2',
        organization: 'Association Nationale Européenne Instruction Pyrotechnique',
        period: 'Juin 2019',
        location: 'Caudry, France',
        achievements: [
          'Formation intensive sur les protocoles et les procédures de sécurité en pyrotechnie, assurant une mise en œuvre sans risque des feux d’artifice',
          'Apprentissage approfondi des techniques de manipulation et de gestion des explosifs, assurant une expertise dans le domaine pyrotechnique',
          'Préparation complète pour la planification et l’exécution de spectacles pyrotechniques spectaculaires, garantissant une expérience immersive et sécurisée pour le public',
        ],
      },
      {
        title: 'Brevet d’Aptitude aux Fonctions d’Animateur',
        organization: 'Éclaireuses Éclaireurs de France',
        period: 'Février 2018 - Mai 2019',
        location: 'Haut de France, France',
        achievements: [
          'Formation pratique et théorique pour développer des techniques d’animation adaptées à différents publics',
          'Apprentissage des bases légales et des responsabilités liées à l’encadrement de groupes de jeunes',
          'Réalisation et mise en pratique de projets d’animation favorisant la créativité et l’interaction sociale',
        ],
      },
    ],
  },
  {
    title: 'Compétences',
    items: [
      {
        skillTitle: 'Langages de programmation',
        skills: ['C#', '.Net', 'Javascript', 'Typescript', 'Java', 'Python'],
      },
      {
        skillTitle: 'Compétences en développement web',
        skills: [
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
      },
      {
        skillTitle: 'Gestion de version',
        skills: ['GitHub', 'GitLab', 'Azure DevOps', 'Trello', 'Jira'],
      },
      {
        skillTitle: 'Outils de développement',
        skills: [
          'Visual Studio',
          'Visual Studio Code',
          'SQL Server Management Studio',
          'Postman',
          'JetBrains',
        ],
      },
    ],
  },
  {
    title: 'Qualités',
    items: [
      {
        skillTitle: 'Qualités professionnelles',
        skills: [
          'Rigueur',
          'Motivation',
          'Capacité d’adaptation',
          'Esprit d’analyse',
          'Créativité',
        ],
      },
      {
        skillTitle: 'Qualités humaines',
        skills: ['Capacité d’écoute', 'Volontaire', 'Conciliant', 'Esprit d’équipe', 'Empathie'],
      },
    ],
  },
  {
    title: 'Expériences personnelles',
    items: [
      {
        title: 'Adhérent - Animateur',
        organization: 'Éclaireuses et Éclaireurs de France',
        period: '2006 - Aujourd’hui',
        location: 'Villeneuve d’Ascq, France',
        skills: ['Gestion de projet', 'Animation', 'Formation'],
        achievements: [
          'Organisation et animation de réunions hebdomadaires pour les jeunes membres',
          'Planification et organisation de week-ends et camps de formation en plein air',
          'Formateur pour les jeunes sur divers sujets liés au scoutisme et à la vie en plein air',
          'Participation à des formations continues pour améliorer les compétences d’animation et de leadership',
        ],
      },
      {
        title: 'Animateur',
        organization: 'Mairie',
        period: 'Août 2018 - Décembre 2021',
        location: 'Villeneuve d’Ascq, France',
        skills: ['Gestion de groupe', 'Gestion du stress', 'Volontariat'],
        achievements: [
          'Encadrement quotidien et activités récréatives pour les enfants de la ville',
          'Planification et organisation d’activités éducatives et récréatives',
          'Résolution de conflits entre les enfants et gestion des problèmes d’urgence',
          'Participation à des événements communautaires et projets de volontariat',
        ],
      },
    ],
  },
]
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
  margin-bottom: 20px;
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
