<template>
  <OverviewCard
    cardClass="profil-card__card"
    sectionClass="q-pa-lg profil-card__background-section text-center"
  >
    <template #header>
      <div class="profil-card__image-container">
        <img :src="image_URL" alt="me" width="200vw" height="200vw" class="profil-card__image" />
      </div>
      <div class="profil-card__name">
        <p class="text-bold">Nestor</p>
        <p class="text-bold">Skoczylas</p>
      </div>
      <q-separator horizontal color="primary" size="0.2rem" class="profil-card__separator" />
      <span class="profil-card__profession">Développeur C# .NET VueJS</span>
    </template>

    <template #actions>
      <SocialLinks />
    </template>
  </OverviewCard>
</template>

<script lang="ts" setup>
import OverviewCard from './OverviewCard.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'

const image_URL = `${process.env.BASE_URL}icons/favicon-425x425.png`
</script>

<style lang="scss" scoped>
.profil-card__image-container {
  padding: 1.5rem 0;
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
