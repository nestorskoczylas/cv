<template>
  <div class="chip">
    <strong v-if="label">{{ label }} :</strong>
    <div class="chip-list">
      <q-chip v-for="(item, index) in items" :key="index" class="q-mr-sm" :class="{ outlined }">
        {{ item }}
      </q-chip>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    required: true,
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.chip {
  font-size: 14px;
}

.q-chip {
  margin: 5px;
  background-color: transparent;
  border: 1px solid $primary;
}

.q-chip.outlined {
  background-color: $primary;
  color: $white;
}
</style>
