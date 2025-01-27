import { route } from 'quasar/wrappers'
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

export default route(function () {
  let createHistory

  if (process.env.SERVER) {
    createHistory = createMemoryHistory
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory
  } else {
    createHistory = createWebHashHistory
  }

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  Router.beforeEach((to, from, next) => {
    const lang = to.params.lang as AvailableLanguage

    if (!lang || !availableLanguages.includes(lang)) {
      const fallbackLang = getBrowserLanguage()
      return next(`/${fallbackLang}${to.fullPath.replace(/^\/[a-z]{2}/, '')}`)
    }

    if (lang !== i18n.global.locale) {
      i18n.global.locale = lang
    }

    next()
  })

  return Router
})
