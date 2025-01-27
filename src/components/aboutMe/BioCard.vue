<template>
  <OverviewCard
    cardClass="profil-info-card__card"
    :isFlat="true"
    sectionClass="profil-info-card__background-section"
  >
    <template #header>
      <div class="profil-info-card__section-title">
        <h2 class="text-bold profil-info-card__title q-pb-lg">{{ $t('bioCard.title') }}</h2>
        <h4 class="q-mt-none q-mb-none q-pb-lg">{{ $t('bioCard.subtitle') }}</h4>
      </div>
    </template>

    <template #body>
      <div class="profil-info-card__description">
        <p>{{ $t('bioCard.description') }}</p>
      </div>
    </template>

    <template #actions>
      <q-btn
        :label="$t('constants.resume')"
        color="primary"
        outline
        class="profil-info-card__button"
        @click="navigateTo(router, 'resume')"
      />
      <q-btn
        :label="$t('constants.projects')"
        color="primary"
        class="profil-info-card__button"
        @click="navigateTo(router, 'projects')"
      />
    </template>
  </OverviewCard>
</template>

<script lang="ts" setup>
import OverviewCard from './OverviewCard.vue'
import { navigateTo } from '@/utils/navigation'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.profil-info-card__section-title {
  text-align: start;
}

.profil-info-card__title {
  margin: 0;
}

.profil-info-card__description {
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1.5;
  text-align: start;
}

.profil-info-card__button {
  width: 8rem;
}
</style>
