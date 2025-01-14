<template>
  <div>
    <div class="flex items-center">
      <div class="resume__indicator"></div>
      <h2 class="resume__title">{{ title }}</h2>
    </div>
    <div class="resume__cards">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.resume__indicator {
  width: 16px;
  height: 16px;
  background-color: $primary;
  margin-right: 16px;
}

.resume__title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: $gray-blue;
}

.resume__cards {
  display: flex;
  flex-direction: column;
}
</style>
