<template>
  <q-footer class="bg-white q-pa-none">
    <q-toolbar class="q-pa-md">
      <div class="footer__left-section">
        <span class="footer__text">© 2025 - Nestor SKOCZYLAS</span>
      </div>

      <q-space />

      <div class="footer__right-section row items-center">
        <span class="footer__info-item">Permis B</span>
        <q-separator vertical spaced class="footer__separator" />
        <span class="footer__info-item">(+33) 7 83 59 04 23</span>
        <q-separator vertical spaced class="footer__separator" />
        <span
          class="footer__info-item cursor-pointer"
          @click="openExternalLink('mailto:nestor.skoczylas23@gmail.com')"
        >
          nestor.skoczylas23@gmail.com
        </span>
        <q-separator vertical spaced class="footer__separator" />
        <SocialLinks />
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts" setup>
import SocialLinks from 'src/components/SocialLinks.vue';
import { openExternalLink } from 'src/utils/navigation';
</script>

<style lang="scss" scoped>
.footer__left-section {
  font-size: 0.9rem;
  font-weight: 300;
  color: $dark;
}

.footer__right-section {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.footer__info-item {
  font-weight: 300;
  color: $dark;
}

.footer__separator {
  margin: 0 8px;
  height: 16px;
  background-color: $white;
}

.footer__text {
  font-size: 0.9rem;
  color: $dark;
}
</style>
