<template>
  <div class="social-links__container">
    <q-btn
      v-for="link in socialLinksList"
      :key="link.icon"
      flat
      square
      :icon="link.icon"
      class="social-links__icon"
      :aria-label="link.label"
      @click="openExternalLink(link.url)"
    />
  </div>
</template>

<script lang="ts" setup>
import { openExternalLink } from '@/utils/navigation'

interface SocialLink {
  icon: string
  label: string
  url: string
}

const socialLinksList: SocialLink[] = [
  {
    icon: 'mdi-linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nestorskoczylas',
  },
  {
    icon: 'mdi-github',
    label: 'GitHub',
    url: 'https://github.com/nestorskoczylas',
  },
]
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
