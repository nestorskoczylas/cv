<template>
  <div class="chip">
    <strong v-if="label">{{ label }}</strong>

    <div>
      <q-chip v-for="(item, index) in items" :key="index" class="q-mr-sm" :class="{ outlined }">
        {{ item }}
      </q-chip>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label?: string
  items: string[]
  outlined?: boolean
}

withDefaults(defineProps<Props>(), {
  label: '',
  outlined: false,
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
