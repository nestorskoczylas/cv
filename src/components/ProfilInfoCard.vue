<template>
  <q-card flat class="q-pa-md" style="max-width: 25vw">
    <q-card-section class="q-pa-lg">
      <h1 class="text-bold profil-info-card__title">Hello</h1>
      <h4>Qui suis-je ? Que fais-je ?</h4>

      <q-card-actions class="flex justify-evenly">
        <q-btn
          label="CV"
          color="primary"
          outline
          @click="navigateToPage('cv')"
        />
        <q-btn
          label="Projets"
          color="primary"
          @click="navigateToPage('projects')"
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
const navigateToPage = (route: string) => {
  console.log(`Navigué vers : ${route}`);
};
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
</style>
