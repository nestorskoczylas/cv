<template>
  <div class="resume__skills">
    <strong>{{ label }}</strong>
    <div class="resume__skills-list">
      <q-chip v-for="(item, index) in items" :key="index" class="q-mr-sm">
        {{ item }}
      </q-chip>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.resume__skills {
  margin-top: 20px;
  font-size: 16px;
  color: $gray-blue;
}

.resume__skills:first-of-type {
  margin-top: 0;
}

.resume__skills-list {
  margin-top: 10px;
}

.q-chip {
  margin: 5px;
  background-color: transparent;
  border: 1px solid $primary;
}
</style>
