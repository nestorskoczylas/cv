import type { Router } from 'vue-router';

export const navigateTo = (router: Router, route: string) => {
  router.push({ name: route });
};

export const openExternalLink = (url: string) => {
  window.open(url, '_blank');
};
