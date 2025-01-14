<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <div class="experience-section">
        <div class="flex items-center">
          <div class="square-indicator"></div>
          <h2 class="title">Expériences professionnelles</h2>
        </div>
      </div>
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

.experience-section {
  width: 100%;
  max-width: 800px;
}

.square-indicator {
  width: 16px;
  height: 16px;
  background-color: $primary;
  margin-right: 16px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: $gray-blue;
}
</style>
