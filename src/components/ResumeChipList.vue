<template>
  <div class="resume__skills">
    <strong>{{ label }} :</strong>
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
  font-size: 14px;
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
