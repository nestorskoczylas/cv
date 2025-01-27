<template>
  <div class="background">
    <q-page class="q-pa-md flex flex-center borders">
      <div class="project__section">
        <TitledContent title="Projets personnels">
          <ContentCard
            v-for="(item, index) in projects"
            :key="index"
            :title="item.title"
            :period="item.period"
            :description="item.description"
            :skills="item.skills"
            :skillTitle="item.skillTitle"
            :links="item.links"
          />
        </TitledContent>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import TitledContent from '@/components/common/TitledContent.vue'
import ContentCard from '@/components/common/ContentCard.vue'
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Application CV en VueJS',
    period: '2024',
    description:
      'Ce projet a pour objectif de présenter mon CV sous forme d’application web. Le projet est développé en VueJS avec le framework Quasar et l’implémentation VueJS Options API. Il permet de mettre en avant mes compétences, mes expériences professionnelles et mes réalisations de manière interactive et dynamique.',
    skillTitle: 'Technologies utilisées',
    skills: ['VueJS', 'Quasar', 'TypeScript', 'Vue Router', 'Vuex', 'Vue-i18n', 'GitHub Pages'],
    links: [
      {
        label: 'GitHub : My CV App',
        url: 'https://github.com/nestorskoczylas/my-cv-app',
      },
      {
        label: 'Démo : My CV App',
        url: 'https://nestorskoczylas.github.io/my-cv-app/#/aboutme',
      },
    ],
  },
  {
    title: 'Projet de fin d’études : Stud’Hunt',
    period: 'Septembre 2023 - Janvier 2024',
    description:
      'Stud’Hunt est un projet de fin d’études réalisé en équipe dans le cadre de mon Master Informatique, en collaboration avec l’IAE et son Master MCC. Il s’agit d’une application web de recherche de stages et d’alternances, qui met en relation les étudiants et les entreprises.',
    skillTitle: 'Technologies utilisées',
    skills: [
      'Flutter',
      'Spring Boot',
      'Spring Security',
      'BLoC',
      'GitHub Actions',
      'Docker',
      'Google Compute Engine',
    ],
    links: [
      {
        label: 'GitHub : Stud’Hunt',
        url: 'https://github.com/Stud-Hunt',
      },
      {
        label: 'LinkedIn : Stud’Hunt',
        url: 'https://www.linkedin.com/company/stud-hunt/',
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
.project__section {
  width: 100%;
  max-width: 800px;
}
</style>
