<template>
  <q-header class="bg-white q-pa-md">
    <q-toolbar class="q-pa-md">
      <div class="header-left">
        <div class="header__square-name">
          <div class="square-indicator"></div>
          <span class="header__name">Nestor Skoczylas</span>
        </div>
        <span class="header__profession">DÉVELOPPEUR C# .NET VUEJS</span>
      </div>

      <q-space />

      <div class="header-right row items-center">
        <q-btn
          v-for="item in menuItems"
          :key="item.label"
          flat
          :label="item.label"
          :class="{ 'header__active-page': isActivePage(item.route) }"
          @click="navigateTo(router, item.route)"
          class="q-mx-sm header__navigation"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navigateTo } from 'src/utils/navigation'

const menuItems = ref([
  { label: 'À PROPOS DE MOI', route: 'aboutMe' },
  { label: 'CV', route: 'resume' },
  { label: 'PROJETS', route: 'projects' },
])

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => route.name)

const isActivePage = computed(() => (page: string) => {
  if (typeof currentPage.value === 'string') return currentPage.value.includes(page)
  return false
})
</script>

<style lang="scss" scoped>
.square-indicator {
  width: 1rem;
  height: 1rem;
  background-color: $primary;
  margin-right: 1rem;
}

.header-left {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.header__square-name {
  display: flex;
  align-items: center;
}

.header__name {
  font-weight: 700;
  font-size: 1.6rem;
  color: $dark;
}

.header__profession {
  font-size: 1.15rem;
  font-weight: 300;
  color: $dark;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .header-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .header__name {
    font-size: 1.4rem;
  }

  .header__profession {
    font-size: 1rem;
  }

  .header-right {
    display: none;
  }
}

@media (max-width: 1024px) {
  .header-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
}

.header-right .q-btn {
  color: $gray;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
}

.header__navigation {
  color: $white;
  transition: color 0.2s ease-in-out;
}

.header__navigation:hover {
  color: $primary;
}

.header__active-page {
  color: $primary !important;
}
</style>
