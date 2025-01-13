<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader :currentPage="currentPage" @onNavigate="navigateTo" />

    <q-page-container class="background-container">
      <q-page class="q-pa-md flex flex-center scroll-content borders">
        <ProfileCard />

        <ProfilInfoCard />
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
import ProfilInfoCard from 'src/components/ProfilInfoCard.vue';
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
