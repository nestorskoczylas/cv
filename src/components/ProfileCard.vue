<template>
  <q-card style="box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)">
    <q-card-section class="q-pa-lg background-card-section text-center">
      <div class="image-container">
        <img
          src="/public/icons/favicon-425x425.png"
          alt="me"
          :width="200"
          :height="200"
          class="profile-image"
        />
      </div>
      <div class="card-name">
        <p class="text-bold">Nestor</p>
        <p class="text-bold">Skoczylas</p>
      </div>
      <q-separator horizontal color="primary" size="0.2rem" class="separator" />
      <span class="profession">Développeur C# .NET VueJS</span>
    </q-card-section>

    <q-card-actions class="flex justify-evenly">
      <SocialLinks />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import SocialLinks from './SocialLinks.vue';
</script>

<style lang="scss" scoped>
.background-card-section {
  background: $secondary;
}

.profile-image {
  border-radius: 50%;
  object-fit: cover;
  background-color: $white;
}

.text-center .card-name {
  margin: 1.5rem 0;
}

.card-name .text-bold {
  margin: 0;
  font-size: 1.75rem;
}

.separator {
  margin-bottom: 2rem;
}

.profession {
  margin-top: 0.5rem;
  letter-spacing: 0.1rem;
  font-size: 1.15rem;
  font-weight: 300;
}
</style>
