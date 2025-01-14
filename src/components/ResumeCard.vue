<template>
  <q-card class="resume__card q-mb-md" bordered shadow="2">
    <q-card-section>
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup></script>

<style scoped>
.resume__card {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
