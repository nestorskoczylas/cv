import { defineRouter } from '#q-app'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import i18n from '@/i18n'
import routes from './routes'
import type { AvailableLanguage } from '@/utils/i18n'
import { availableLanguages, getBrowserLanguage } from '@/utils/i18n'

export default defineRouter(() => {
  const createHistory = import.meta.env.QUASAR_SERVER
    ? createMemoryHistory
    : import.meta.env.QUASAR_VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(import.meta.env.QUASAR_VUE_ROUTER_BASE),
  })

  router.beforeEach((to) => {
    const lang = to.params.lang as AvailableLanguage

    if (!lang || !availableLanguages.includes(lang)) {
      const fallbackLang = getBrowserLanguage()

      return `/${fallbackLang}${to.fullPath.replace(/^\/[a-z]{2}/, '')}`
    }

    if (lang !== i18n.global.locale.value) {
      i18n.global.locale.value = lang
    }

    return true
  })

  return router
})
