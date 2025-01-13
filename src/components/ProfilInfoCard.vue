<template>
  <q-card flat class="q-pa-md" style="max-width: 25vw">
    <q-card-section class="q-pa-lg">
      <h1 class="text-bold profil-info-card__title">Hello</h1>
      <h4>Qui suis-je ? Que fais-je ?</h4>

      <q-card-actions class="flex justify-evenly">
        <q-btn
          class="profil-info-card__buttonSize"
          label="CV"
          color="primary"
          outline
          @click="navigateTo(router, 'resume')"
        />
        <q-btn
          class="profil-info-card__buttonSize"
          label="Projets"
          color="primary"
          @click="navigateTo(router, 'projects')"
        />
      </q-card-actions>

      <div class="q-mt-lg profil-info-card__description">
        <p>
          Développeur Full Stack spécialisé en C# et Vue.js, titulaire d’un
          Master en E-Services de l’Université de Lille, j’allie expertise
          technique et polyvalence. Fort d’expériences enrichissantes chez
          Opalean et Access-it, j’ai contribué au développement de solutions
          variées : applications CRM, API, logiciels vidéo, pour des projets
          internes comme externes.
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { navigateTo } from 'src/utils/navigation';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.profil-info-card__title {
  margin: 0;
}

.profil-info-card__description p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
}

.profil-info-card__buttonSize {
  width: 7vw;
}
</style>
