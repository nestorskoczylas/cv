<template>
  <div class="background__linear-gradient">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <AboutMeCard />
      <BioCard />
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import AboutMeCard from '@/components/aboutMe/AboutMeCard.vue'
import BioCard from '@/components/aboutMe/BioCard.vue'
</script>

<style lang="scss" scoped>
.background__linear-gradient {
  background:
    linear-gradient(to right, $background 40%, $white 40%) no-repeat,
    $white;

  @media (max-width: 673px) {
    background:
      linear-gradient(to bottom, $white 30%, $background 30%) no-repeat,
      $background;
  }
}
</style>
