<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader :currentPage="currentPage" @onNavigate="navigateTo" />

    <q-page-container class="background-container">
      <q-page class="q-pa-md flex flex-center scroll-content borders">
        <ProfileCard />

        <ProfilInfoCard />
      </q-page>
    </q-page-container>

    <AppFooter />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from 'src/components/AppFooter.vue';
import AppHeader from 'src/components/AppHeader.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import ProfilInfoCard from 'src/components/ProfilInfoCard.vue';
import { ref } from 'vue';

const currentPage = ref('aboutMe');

const navigateTo = (route: string) => {
  currentPage.value = route;
  console.log(`Navigué vers : ${route}`);
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
</style>
