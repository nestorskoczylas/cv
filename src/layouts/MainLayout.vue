<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader :currentPage="currentPage" @onNavigate="navigateTo" />

    <q-page-container class="background-container">
      <q-page class="q-pa-md flex flex-center scroll-content borders">
        <ProfileCard />

        <q-card flat class="q-pa-md" style="max-width: 25vw">
          <q-card-section class="q-pa-lg">
            <h1 class="text-bold title">Hello</h1>
            <h4>Qui suis-je ? Que fais-je ?</h4>

            <q-card-actions class="flex justify-evenly">
              <q-btn
                label="CV"
                color="primary"
                outline
                @click="navigateTo('cv')"
              />
              <q-btn
                label="Projets"
                color="primary"
                @click="navigateTo('projects')"
              />
            </q-card-actions>

            <div class="q-mt-lg description">
              <p>
                Développeur Full Stack spécialisé en C# et Vue.js, titulaire
                d’un Master en E-Services de l’Université de Lille, j’allie
                expertise technique et polyvalence. Fort d’expériences
                enrichissantes chez Opalean et Access-it, j’ai contribué au
                développement de solutions variées : applications CRM, API,
                logiciels vidéo, pour des projets internes comme externes.
              </p>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

    <q-footer class="bg-white q-pa-none">
      <q-toolbar class="q-pa-md">
        <div class="footer-left">
          <span class="footer-text">© 2025 - Nestor SKOCZYLAS</span>
        </div>

        <q-space />

        <div class="footer-right row items-center">
          <span class="footer-info">Permis B</span>
          <q-separator vertical spaced class="footer-separator" />
          <span class="footer-info">(+33) 7 83 59 04 23</span>
          <q-separator vertical spaced class="footer-separator" />
          <span
            class="footer-info cursor-pointer"
            @click="openLink('mailto:nestor.skoczylas23@gmail.com')"
            >nestor.skoczylas23@gmail.com</span
          >
          <q-separator vertical spaced class="footer-separator" />
          <SocialLinks />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import AppHeader from 'src/components/AppHeader.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import SocialLinks from 'src/components/SocialLinks.vue';
import { ref } from 'vue';

const currentPage = ref('aboutMe');

const navigateTo = (route: string) => {
  currentPage.value = route;
  console.log(`Navigué vers : ${route}`);
};

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
/* Home Page */
.background-container {
  background: linear-gradient(to right, $background 40%, $white 40%) no-repeat,
    $white;
}

.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}

.borders {
  border: 1px solid $background;
}

.title {
  margin: 0;
}

.description p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
}

/* Footer */
.footer-left {
  font-size: 0.9rem;
  font-weight: 300;
  color: $dark;
}

.footer-right {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.footer-info {
  font-weight: 300;
  color: $dark;
}

.footer-separator {
  margin: 0 8px;
  height: 16px;
  background-color: $white;
}

.icon {
  color: $dark;
  font-size: 1.2rem;
  margin-left: 8px;
  transition: color 0.2s ease-in-out;
}
</style>
