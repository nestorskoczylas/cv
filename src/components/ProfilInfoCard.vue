<template>
  <q-card flat class="profil-info-card__card">
    <q-card-section class="profil-info-card__background-section">
      <div class="profil-info-card__section-title">
        <h2 class="text-bold profil-info-card__title q-pb-lg">Hello</h2>
        <h4 class="q-mt-none q-mb-none q-pb-lg">Qui suis-je ? Que fais-je ?</h4>
      </div>
      <div class="profil-info-card__description">
        <p>{{ description }}</p>
      </div>
    </q-card-section>

    <q-card-actions class="flex justify-evenly">
      <q-btn
        label="CV"
        color="primary"
        outline
        class="profil-info-card__button"
        @click="navigateTo(router, 'resume')"
      />
      <q-btn
        label="Projets"
        color="primary"
        class="profil-info-card__button"
        @click="navigateTo(router, 'projects')"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { navigateTo } from 'src/utils/navigation'
import { useRouter } from 'vue-router'

const router = useRouter()

const description =
  'Développeur Full Stack spécialisé en C# et Vue.js, titulaire d’un Master en E-Services de l’Université de Lille, j’allie expertise Opalean et Access-it, j’ai contribué au développement de solutions variées : applications CRM, API, logiciels vidéo, pour des projets internes comme externes.'
</script>

<style lang="scss" scoped>
.profil-info-card__card {
  width: 20rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: transparent;
}

.profil-info-card__section-title {
  text-align: start;
}

.profil-info-card__title {
  margin: 0;
}

.profil-info-card__separator {
  margin-bottom: 2rem;
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
