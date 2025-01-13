<template>
  <q-footer class="bg-white q-pa-none">
    <q-toolbar class="q-pa-md">
      <div class="footer-left">
        <span class="footer-text">© 2025 - Nestor SKOCZYLAS</span>
      </div>

      <q-space />

      <div class="footer-right row items-center">
        <span class="footer-info">Permis B</span>
        <q-separator vertical spaced class="footer-separator" />
        <span class="footer-info">(+33) 7 83 59 04 23</span>
        <q-separator vertical spaced class="footer-separator" />
        <span
          class="footer-info cursor-pointer"
          @click="openLink('mailto:nestor.skoczylas23@gmail.com')"
          >nestor.skoczylas23@gmail.com</span
        >
        <q-separator vertical spaced class="footer-separator" />
        <SocialLinks />
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts" setup>
import SocialLinks from 'src/components/SocialLinks.vue';

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
.footer-left {
  font-size: 0.9rem;
  font-weight: 300;
  color: $dark;
}

.footer-right {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.footer-info {
  font-weight: 300;
  color: $dark;
}

.footer-separator {
  margin: 0 8px;
  height: 16px;
  background-color: $white;
}
</style>
