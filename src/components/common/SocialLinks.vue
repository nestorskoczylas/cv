<template>
  <div class="social-links__container">
    <q-btn
      v-for="link in socialLinksList"
      :key="link.icon"
      flat
      square
      :icon="link.icon"
      @click="openExternalLink(link.url)"
      class="social-links__icon"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { openExternalLink } from '@/utils/navigation'

const socialLinksList = ref([
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/nestorskoczylas' },
  { icon: 'mdi-github', url: 'https://github.com/nestorskoczylas' },
])
</script>

<style lang="scss" scoped>
.social-links__icon {
  color: $dark;
  font-size: 1.2rem;
  margin-left: 8px;
}

.social-links__container {
  display: flex;
  align-items: center;
}
</style>
