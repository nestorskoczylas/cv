<template>
  <div class="background-container">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <ProfileCard />

      <ProfilInfoCard />
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import ProfileCard from 'src/components/ProfileCard.vue';
import ProfilInfoCard from 'src/components/ProfilInfoCard.vue';
</script>

<style lang="scss" scoped>
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
