<template>
  <div class="background">
    <q-page class="q-pa-md flex flex-center borders">
      <div class="project__section">
        <TitledContent :title="$t('pages.projects.title')">
          <ContentCard
            v-for="(item, index) in projects"
            :key="index"
            :title="item.title"
            :period="item.period"
            :description="item.description"
            :skills="item.skills"
            :skillTitle="item.skillTitle"
            :links="item.links"
          />
        </TitledContent>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TitledContent from '@/components/common/TitledContent.vue'
import ContentCard from '@/components/common/ContentCard.vue'
import type { Project } from '@/types/project'

const { tm } = useI18n()

const projects = computed(() => tm('pages.projects.projects') as Project[])
</script>

<style lang="scss" scoped>
.project__section {
  width: 100%;
  max-width: 800px;
}
</style>
