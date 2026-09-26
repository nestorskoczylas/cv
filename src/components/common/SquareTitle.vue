<template>
  <div class="square-title">
    <div class="square-title__indicator" />

    <span class="square-title__text" :style="textStyle">
      {{ title }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  title: string
  textColor?: string
  textSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  textColor: '#1d1d1d',
  textSize: '1.6rem',
})

const textStyle = computed(() => ({
  color: props.textColor,
  fontSize: props.textSize,
}))
</script>

<style lang="scss" scoped>
.square-title {
  display: flex;
  align-items: center;
}

.square-title__indicator {
  width: $square-size;
  height: $square-size;
  background-color: $primary;
  margin-right: $square-size;
}

.square-title__text {
  text-align: center;
  font-weight: 700;
}
</style>
