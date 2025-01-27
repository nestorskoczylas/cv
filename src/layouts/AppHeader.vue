<template>
  <q-header class="bg-white q-pa-md">
    <q-toolbar class="q-pa-md">
      <div class="header__left">
        <SquareTitle :title="title" />
        <span class="header__profession">{{ $t('constants.profession') }}</span>
      </div>

      <q-space />

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

        <q-select
          v-model="currentLanguage"
          :options="availableLanguages"
          option-label="label"
          option-value="value"
          @update:model-value="switchLanguage"
          dense
          hide-dropdown-icon
          outlined
        >
          <template v-slot:prepend>
            <q-avatar>
              <img :src="currentLanguage!.icon" alt="Language flag" />
            </q-avatar>
          </template>
        </q-select>
      </div>

      <q-btn flat round dense icon="menu" color="primary" class="header__visible-xs">
        <q-menu :offset="[0, 0]" menu-anchor="body" class="header__menu" v-model="menuOpen">
          <q-item class="header__menu-close" clickable v-ripple @click="menuOpen = false">
            <q-item-section><q-icon name="close" size="2rem" /></q-item-section>
          </q-item>

          <q-list class="header__menu-list">
            <q-item
              v-for="item in menuItems"
              :key="item.label"
              clickable
              v-ripple
              @click="handleMenuItemClick(item.route)"
              class="header__menu-item"
            >
              <q-item-section
                class="header__menu-item-section"
                :class="{ 'header__active-page': isActivePage(item.route) }"
              >
                {{ item.label }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-select
                  v-model="currentLanguage"
                  :options="availableLanguages"
                  emit-value
                  map-options
                  @update:model-value="switchLanguage"
                />
              </q-item-section>
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
import { navigateTo } from '@/utils/navigation'
import SquareTitle from '@/components/common/SquareTitle.vue'
import { useI18n } from 'vue-i18n'

const menuOpen = ref(false)

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const availableLanguages = [
  { label: 'English', value: 'en', icon: 'https://flagcdn.com/w320/gb.png' },
  { label: 'Français', value: 'fr', icon: 'https://flagcdn.com/w320/fr.png' },
]

const currentLanguage = computed({
  get: () => availableLanguages.find((lang) => lang.value === locale.value),
  set: () => switchLanguage,
})

const switchLanguage = (lang: { label: string; value: string }) => {
  locale.value = lang.value

  const newPath = `/${lang.value}${route.fullPath.replace(/^\/[a-z]{2}/, '')}`
  router.push(newPath)
}

const menuItems = computed(() => [
  { label: t('constants.aboutMe'), route: 'aboutMe' },
  { label: t('constants.resume'), route: 'resume' },
  { label: t('constants.projects'), route: 'projects' },
])

const title = `${t('untranslatable.firstName')} ${t('untranslatable.lastName')}`

const currentPage = computed(() => route.name)

const isActivePage = computed(() => (page: string) => {
  if (typeof currentPage.value === 'string') return currentPage.value.includes(page)
  return false
})

const handleMenuItemClick = (route: string) => {
  navigateTo(router, route)
  menuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header__left {
  display: flex;
  align-items: baseline;
  gap: 1rem;
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

@mixin header-mobile {
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

@media (max-width: 768px) {
  .header__left {
    @include header-mobile;
  }

  .header__right {
    display: none;
  }

  .header__visible-xs {
    display: flex;
  }
}

@media (max-width: 1024px) {
  .header__left {
    @include header-mobile;
  }
}
</style>
