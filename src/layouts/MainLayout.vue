<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <AppFooter />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
</script>

<style lang="scss">
@media (max-width: 768px) {
  .q-page-container {
    padding-bottom: 0 !important;
  }
}
</style>
