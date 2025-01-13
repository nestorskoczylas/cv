<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-white q-pa-md">
      <q-toolbar class="q-pa-md">
        <div class="header-left row items-center">
          <div class="square-indicator"></div>
          <div class="name-title">
            <span class="name">Nestor Skoczylas</span>
            <span class="profession">/ DÉVELOPPEUR C# .NET VUEJS</span>
          </div>
        </div>

        <q-space />
        <div class="header-right row items-center">
          <q-btn
            v-for="item in menuItems"
            :key="item.label"
            flat
            :label="item.label"
            :class="{ 'active-page': item.route === currentPage }"
            @click="navigateTo(item.route)"
            class="q-mx-sm navigation-btn"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="scroll-content">
          <h1>Bienvenue</h1>
        </div>
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
          <q-btn
            flat
            square
            icon="mdi-linkedin"
            @click="openLink('https://www.linkedin.com/in/nestorskoczylas')"
            class="footer-icon"
          />
          <q-separator vertical spaced class="footer-separator" />
          <q-btn
            flat
            square
            icon="mdi-github"
            @click="openLink('https://github.com/nestorskoczylas')"
            class="footer-icon small"
          />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const currentPage = ref('home');
const menuItems = ref([
  { label: 'À PROPOS DE MOI', route: 'aboutMe' },
  { label: 'CV', route: 'cv' },
  { label: 'PROJETS', route: 'projects' },
]);

onMounted(() => {
  currentPage.value = 'aboutMe';
});

const navigateTo = (route: string) => {
  currentPage.value = route;
  console.log(`Navigué vers : ${route}`);
};

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}

.square-indicator {
  width: 16px;
  height: 16px;
  background-color: $primary;
  margin-right: 16px;
}

.name-title {
  display: flex;
  align-items: baseline;
}

.name {
  font-weight: 700;
  font-size: 1.6rem;
  color: $dark;
}

.profession {
  margin-left: 8px;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 300;
  color: $dark;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right .q-btn {
  color: $gray;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
}

.navigation-btn {
  color: $white;
  transition: color 0.2s ease-in-out;
}

.navigation-btn:hover {
  color: $primary;
}

.active-page {
  color: $primary !important;
}

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

.footer-icon {
  color: $dark;
  font-size: 1.2rem;
  margin-left: 8px;
  transition: color 0.2s ease-in-out;
}
</style>
