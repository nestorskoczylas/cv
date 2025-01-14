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
              <div class="experience__position-company">
                <strong class="position"
                  >{{ experience.position }} — {{ experience.company }}</strong
                >
              </div>

              <div class="experience__period">
                <em>{{ experience.period }} – {{ experience.location }}</em>
              </div>

              <div class="experience__skills">
                <strong>Compétences :</strong>
                <div class="experience__skills-list">
                  <q-chip v-for="(skill, index) in experience.skills" :key="index" class="q-mr-sm">
                    {{ skill }}
                  </q-chip>
                </div>
              </div>

              <div class="experience__achievements">
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

.experience__position-company {
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}

.experience__period {
  font-size: 14px;
  color: $gray;
  margin-top: 5px;
}

.experience__skills {
  margin-top: 20px;
  font-size: 16px;
  color: $gray-blue;
}

.experience__skills-list {
  margin-top: 10px;
}

.experience__achievements {
  margin-top: 20px;
}

.experience__achievements ul {
  list-style-type: none;
  padding-left: 0;
}

.experience__achievements li {
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
