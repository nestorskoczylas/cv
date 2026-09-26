<template>
  <div>
    <div class="flex justify-between items-center">
      <SquareTitle class="q-pa-md" :title="title" textColor="#2c3e50" :textSize="textSize" />

      <q-btn
        v-if="showDownloadButton"
        icon="mdi-download"
        :label="$t('titledContent.downloadButtonLabel')"
        color="primary"
        outline
        @click="download"
      />
    </div>

    <div class="resume__cards">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SquareTitle from './SquareTitle.vue'

interface Props {
  title: string
  downloadResume?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  downloadResume: false,
})

const textSize = computed(() => (window.innerWidth < 768 ? '1.4rem' : '2rem'))

const showDownloadButton = computed(() => window.innerWidth >= 768 && props.downloadResume)

const documentUrl = `${import.meta.env.BASE_URL}documents/resume.pdf`

const download = () => {
  const link = document.createElement('a')

  link.href = documentUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
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
