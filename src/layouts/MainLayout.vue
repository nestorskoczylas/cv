<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Nestor Skoczylas / Développeur C# .Net VueJS
        </q-toolbar-title>
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

<script lang="ts" setup></script>

<style scoped>
.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}
</style>
