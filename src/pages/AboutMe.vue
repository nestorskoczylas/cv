<template>
  <div class="background__linear-gradient">
    <q-page class="q-pa-md flex flex-center scroll-content borders">
      <ProfileCard />

      <ProfilInfoCard />
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import ProfileCard from 'src/components/ProfileCard.vue'
import ProfilInfoCard from 'src/components/ProfilInfoCard.vue'
</script>

<style lang="scss" scoped>
.background__linear-gradient {
  background:
    linear-gradient(to right, $background 40%, $white 40%) no-repeat,
    $white;
}
</style>
