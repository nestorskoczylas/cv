<template>
  <q-card style="box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)">
    <q-card-section class="q-pa-lg profil-card__background-section text-center">
      <div class="profil-card__image-container">
        <img
          src="/public/icons/favicon-425x425.png"
          alt="me"
          :width="200"
          :height="200"
          class="profil-card__image"
        />
      </div>
      <div class="profil-card__name">
        <p class="text-bold">Nestor</p>
        <p class="text-bold">Skoczylas</p>
      </div>
      <q-separator
        horizontal
        color="primary"
        size="0.2rem"
        class="profil-card__separator"
      />
      <span class="profil-card__profession">Développeur C# .NET VueJS</span>
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
.profil-card__background-section {
  background: $secondary;
}

.profil-card__image {
  border-radius: 50%;
  object-fit: cover;
  background-color: $white;
}

.text-center .profil-card__name {
  margin: 1.5rem 0;
}

.profil-card__name .text-bold {
  margin: 0;
  font-size: 1.75rem;
}

.profil-card__separator {
  margin-bottom: 2rem;
}

.profil-card__profession {
  margin-top: 0.5rem;
  letter-spacing: 0.1rem;
  font-size: 1.15rem;
  font-weight: 300;
}
</style>
