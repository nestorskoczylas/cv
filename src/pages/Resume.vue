<template>
  <div class="background">
    <q-page class="q-pa-md flex flex-center borders">
      <div class="resume__section">
        <template v-for="(section, index) in resume" :key="index">
          <TitledContent :title="section.title" :downloadResume="index === 0">
            <ContentCard
              v-for="(item, index) in section.items"
              :key="index"
              :id="item.id || ''"
              :title="item.title || ''"
              :organization="item.organization || ''"
              :period="item.period || ''"
              :location="item.location || ''"
              :skills="item.skills || []"
              :skillTitle="item.skillTitle || ''"
              :achievements="item.achievements || []"
              :links="item.links || []"
            />
          </TitledContent>
        </template>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TitledContent from '@/components/common/TitledContent.vue'
import ContentCard from '@/components/common/ContentCard.vue'
import type { Resume } from '@/types/resume'

const { tm } = useI18n()

const resume = computed(() => tm('pages.resume.resumes') as Resume[])
</script>

<style lang="scss" scoped>
.resume__position-company {
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}

.resume__period {
  font-size: 14px;
  color: $gray;
  margin-top: 5px;
  margin-bottom: 20px;
}

.resume__achievements {
  margin-top: 20px;
}

.resume__achievements ul {
  list-style-type: none;
  padding-left: 0;
}

.resume__achievements li {
  font-size: 14px;
  color: $gray-blue;
  margin-bottom: 8px;
  text-indent: 20px;
}
</style>
