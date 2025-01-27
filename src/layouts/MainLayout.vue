<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader />

    <q-page-container style="padding-bottom: 0">
      <router-view />
    </q-page-container>

    <AppFooter />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
</script>
