<template>
  <div class="social-links">
    <q-btn
      v-for="link in socialLinks"
      :key="link.icon"
      flat
      square
      :icon="link.icon"
      @click="openLink(link.url)"
      class="icon"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const socialLinks = ref([
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/nestorskoczylas' },
  { icon: 'mdi-github', url: 'https://github.com/nestorskoczylas' },
]);

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
.icon {
  color: $dark;
  font-size: 1.2rem;
  margin-left: 8px;
}

.social-links {
  display: flex;
  align-items: center;
}
</style>
