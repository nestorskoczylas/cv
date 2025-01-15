<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <p>Experience</p>
    </q-page>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.background-container {
  background: $background;
}

.scroll-content {
  max-height: 100%;
  overflow-y: auto;
}

.borders {
  border: 1px solid $background;
}
</style>
