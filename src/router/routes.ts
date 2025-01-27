import type { RouteRecordRaw } from 'vue-router'
import AboutMe from '@/pages/AboutMe.vue'
import Resume from '@/pages/Resume.vue'
import Experience from '@/pages/Experience.vue'
import Projects from '@/pages/Projects.vue'
import ErrorNotFound from '@/pages/ErrorNotFound.vue'
import { getBrowserLanguage } from '@/utils/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => {
      const fallbackLang = getBrowserLanguage()
      return `/${fallbackLang}/about-me`
    },
  },
  {
    path: '/:lang',
    children: [
      {
        path: 'about-me',
        component: AboutMe,
        name: 'aboutMe',
      },
      {
        path: 'resume',
        component: Resume,
        name: 'resume',
      },
      {
        path: 'resume/experience/:id',
        component: Experience,
        name: 'experience',
      },
      {
        path: 'projects',
        component: Projects,
        name: 'projects',
      },
    ],
  },
  {
    path: '/:lang/:catchAll(.*)*',
    component: ErrorNotFound,
  },
]

export default routes
