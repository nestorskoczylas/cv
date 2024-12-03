<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white q-px-md">
      <q-toolbar class="q-py-md">
        <div class="header-left">
          <div class="text-h6">SKOCZYLAS Nestor</div>
          <div class="text-caption">Développeur C# .Net VueJS</div>
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title> © 2024 - Nestor SKOCZYLAS </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const currentPage = ref('home');
const menuItems = ref([
  { label: 'A propos de moi', route: 'aboutMe' },
  { label: 'CV', route: 'cv' },
  { label: 'Projets', route: 'projects' },
]);

onMounted(() => {
  currentPage.value = 'aboutMe';
});

const navigateTo = (route: string) => {
  currentPage.value = route;
  console.log(`Navigué vers : ${route}`);
};
</script>

<style scoped>
.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}

q-header {
  height: 120px;
}

.header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right .q-btn {
  color: white;
}

.navigation-btn {
  color: white;
  transition: color 0.2s ease-in-out;
}

.navigation-btn:hover {
  color: #ffeb3b;
}

.active-page {
  color: #03a9f4 !important;
}
</style>
