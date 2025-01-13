<template>
  <q-header class="bg-white q-pa-md">
    <q-toolbar class="q-pa-md">
      <div class="header-left row items-center">
        <div class="square-indicator"></div>
        <div class="name-title">
          <span class="name">Nestor Skoczylas</span>
          <span class="profession">/ DÉVELOPPEUR C# .NET VUEJS</span>
        </div>
      </div>

      <q-space />
      <div class="header-right row items-center">
        <q-btn
          v-for="item in menuItems"
          :key="item.label"
          flat
          :label="item.label"
          :class="{ 'active-page': item.route === currentPage }"
          @click="navigateTo(router, item.route)"
          class="q-mx-sm navigation-btn"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { navigateTo } from 'src/utils/navigation';

const menuItems = ref([
  { label: 'À PROPOS DE MOI', route: 'aboutMe' },
  { label: 'CV', route: 'resume' },
  { label: 'PROJETS', route: 'projects' },
]);

const route = useRoute();
const router = useRouter();

const currentPage = computed(() => route.name);
</script>

<style lang="scss" scoped>
.square-indicator {
  width: 16px;
  height: 16px;
  background-color: $primary;
  margin-right: 16px;
}

.name-title {
  display: flex;
  align-items: baseline;
}

.name {
  font-weight: 700;
  font-size: 1.6rem;
  color: $dark;
}

.profession {
  margin-left: 8px;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 300;
  color: $dark;
}

.header-right .q-btn {
  color: $gray;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
}

.navigation-btn {
  color: $white;
  transition: color 0.2s ease-in-out;
}

.navigation-btn:hover {
  color: $primary;
}

.active-page {
  color: $primary !important;
}
</style>
