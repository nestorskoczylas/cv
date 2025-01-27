<template>
  <q-footer class="bg-white q-pa-none footer">
    <q-toolbar class="q-pa-md footer__toolbar">
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
import SocialLinks from 'src/components/common/SocialLinks.vue'
import { openExternalLink } from 'src/utils/navigation'
</script>

<style lang="scss" scoped>
.footer {
  /* La position fixe par défaut */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.footer__toolbar {
  flex-wrap: wrap;
}

.footer__left-section {
  font-size: 0.9rem;
  font-weight: 300;
  color: $dark;
}

.footer__right-section {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footer__info-item {
  font-weight: 300;
  color: $dark;
}

.footer__separator {
  margin: 0 8px;
  height: 1rem;
  background-color: $white;

  @media (max-width: 764px) {
    display: none;
  }
}

.footer__text {
  font-size: 0.9rem;
  color: $dark;
}

@media (max-width: 1024px) {
  .footer__toolbar {
    flex-direction: column;
    align-items: center;
  }

  .footer__left-section {
    order: 2;
  }

  .footer__right-section {
    gap: 0.7rem;
  }

  .footer__info-item {
    font-size: 0.8rem;
  }

  .footer__text {
    font-size: 0.8rem;
  }
}

@media (max-width: 764px) {
  .footer {
    position: relative;
  }
}
</style>
