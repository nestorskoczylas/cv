<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="resume__indicator"></div>
        <h2 class="resume__title">{{ title }}</h2>
      </div>
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
defineProps({
  title: {
    type: String,
    required: true,
  },
  downloadResume: {
    type: Boolean,
    default: false,
  },
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
