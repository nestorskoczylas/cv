<template>
  <q-header class="bg-white q-pa-md">
    <q-toolbar class="q-pa-md">
      <div class="header__left">
        <SquareTitle :title="title" />

        <span class="header__profession">
          {{ $t('constants.profession') }}
        </span>
      </div>

      <q-space />

      <div class="header__right row items-center header__hidden-xs">
        <q-btn
          v-for="item in menuItems"
          :key="item.route"
          flat
          :label="item.label"
          :class="{ 'header__active-page': isActivePage(item.route) }"
          class="q-mx-sm header__navigation"
          @click="navigateTo(router, item.route)"
        />

        <q-select
          v-model="currentLanguage"
          :options="availableLanguages"
          option-label="label"
          option-value="value"
          dense
          hide-dropdown-icon
          outlined
        >
          <template #prepend>
            <q-avatar>
              <img
                v-if="currentLanguage"
                :src="currentLanguage.icon"
                :alt="currentLanguage.label"
              />
            </q-avatar>
          </template>
        </q-select>
      </div>

      <q-btn flat round dense icon="menu" color="primary" class="header__visible-xs">
        <q-menu v-model="menuOpen" :offset="[0, 0]" menu-anchor="body" class="header__menu">
          <q-item class="header__menu-close" clickable v-ripple @click="menuOpen = false">
            <q-item-section>
              <q-icon name="close" size="2rem" />
            </q-item-section>
          </q-item>

          <q-list class="header__menu-list">
            <q-item
              v-for="item in menuItems"
              :key="item.route"
              clickable
              v-ripple
              class="header__menu-item"
              @click="handleMenuItemClick(item.route)"
            >
              <q-item-section
                class="header__menu-item-section"
                :class="{ 'header__active-page': isActivePage(item.route) }"
              >
                {{ item.label }}
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
import { useI18n } from 'vue-i18n'
import { navigateTo } from '@/utils/navigation'
import SquareTitle from '@/components/common/SquareTitle.vue'

interface LanguageOption {
  label: string
  value: string
  icon: string
}

interface MenuItem {
  label: string
  route: string
}

const menuOpen = ref(false)

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const availableLanguages: LanguageOption[] = [
  {
    label: 'English',
    value: 'en',
    icon: 'https://flagcdn.com/w320/gb.png',
  },
  {
    label: 'Français',
    value: 'fr',
    icon: 'https://flagcdn.com/w320/fr.png',
  },
]

const switchLanguage = (lang: LanguageOption) => {
  if (lang.value === locale.value) {
    return
  }

  locale.value = lang.value

  const newPath = `/${lang.value}${route.fullPath.replace(/^\/[a-z]{2}/, '')}`

  router.push(newPath)
}

const currentLanguage = computed<LanguageOption | undefined>({
  get: () => availableLanguages.find((lang) => lang.value === locale.value),
  set: (lang) => {
    if (lang) {
      switchLanguage(lang)
    }
  },
})

const menuItems = computed<MenuItem[]>(() => [
  {
    label: t('constants.aboutMe'),
    route: 'aboutMe',
  },
  {
    label: t('constants.resume'),
    route: 'resume',
  },
  {
    label: t('constants.projects'),
    route: 'projects',
  },
])

const title = computed(() => `${t('untranslatable.firstName')} ${t('untranslatable.lastName')}`)

const currentPage = computed(() => route.name)

const isActivePage = (page: string) => {
  if (typeof currentPage.value !== 'string') {
    return false
  }

  return currentPage.value.includes(page)
}

const handleMenuItemClick = (routeName: string) => {
  navigateTo(router, routeName)
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
