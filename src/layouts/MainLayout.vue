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
import AppFooter from 'src/components/AppFooter.vue'
import AppHeader from 'src/components/AppHeader.vue'
</script>
