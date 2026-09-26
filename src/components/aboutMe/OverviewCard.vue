<template>
  <q-card :class="cardClass" :flat="isFlat">
    <q-card-section :class="sectionClass">
      <slot name="header" /> <slot name="body" />
    </q-card-section>
    <q-card-actions v-if="$slots.actions" class="flex justify-evenly">
      <slot name="actions" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
interface Props {
  cardClass?: string
  isFlat?: boolean
  sectionClass?: string
}
withDefaults(defineProps<Props>(), { cardClass: '', isFlat: false, sectionClass: '' })
</script>

<style lang="scss" scoped>
.profil-card__card {
  width: 20rem;
  height: 37rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profil-info-card__card {
  width: 20rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: transparent;
}
.profil-card__background-section {
  background: $secondary;
}
</style>
