import type { RouteRecordRaw } from 'vue-router';
import AboutMe from '../pages/AboutMe.vue';
import Resume from '../pages/Resume.vue';
import Projects from '../pages/Projects.vue';
import ErrorNotFound from '../pages/ErrorNotFound.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: AboutMe, name: 'aboutMe' },
  { path: '/resume', component: Resume, name: 'resume' },
  { path: '/projects', component: Projects, name: 'projects' },

  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
