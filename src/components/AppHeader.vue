<template>
  <q-header class="bg-white q-pa-md">
    <q-toolbar class="q-pa-md">
      <!-- Partie gauche : Nom et profession -->
      <div class="header__left">
        <div class="header__square-name">
          <div class="square-indicator"></div>
          <span class="header__name">Nestor Skoczylas</span>
        </div>
        <span class="header__profession">DÉVELOPPEUR C# .NET VUEJS</span>
      </div>

      <!-- Espacement entre les deux sections -->
      <q-space />

      <!-- Partie droite : Navigation pour grand écran -->
      <div class="header__right row items-center header__hidden-xs">
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

      <!-- Menu burger pour mobile -->
      <q-btn flat round dense icon="menu" color="primary" class="header__visible-xs">
        <q-menu anchor="bottom right" self="top right" menu-anchor="body">
          <q-list>
            <q-item
              v-for="item in menuItems"
              :key="item.label"
              clickable
              v-ripple
              @click="navigateTo(router, item.route)"
            >
              <q-item-section :class="{ 'header__active-page': isActivePage(item.route) }">{{
                item.label
              }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
  width: $square-size;
  height: $square-size;
  background-color: $primary;
  margin-right: $square-size;
}

.header__left {
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
  font-size: $font-size-name;
  color: $dark;
}

.header__profession {
  font-size: $font-size-profession;
  font-weight: 300;
  color: $dark;
  text-transform: uppercase;
}

.header__right .q-btn {
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

.header__visible-xs {
  display: none;
}

.header__hidden-xs {
  display: flex;
}

/* Media queries */
@media (max-width: 768px) {
  .header__left {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .header__right {
    display: none;
  }

  .header__visible-xs {
    display: flex;
  }
}
</style>
