<template>
  <div>
    <div class="flex justify-between items-center">
      <SquareTitle class="q-pa-md" :title="title" textColor="#2c3e50" :textSize="textSize" />

      <q-btn
        v-if="downloadResume"
        icon="mdi-download"
        label="Télécharger le CV"
        @click="download"
        outlined
        color="primary"
      />
    </div>
    <div class="resume__cards">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import SquareTitle from './SquareTitle.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  downloadResume: {
    type: Boolean,
    default: false,
  },
})

const textSize = window.innerWidth < 768 ? '1.4rem' : '2rem'

const downloadResume = ref(props.downloadResume)

onMounted(() => {
  downloadResume.value = window.innerWidth >= 768 && props.downloadResume
})

const document_URL = `${process.env.BASE_URL}documents/resume.pdf`
const download = () => {
  const link = document.createElement('a')
  link.href = document_URL
  link.target = '_blank'
  link.click()
}
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
