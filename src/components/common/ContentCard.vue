<template>
  <q-card class="generic-card q-mb-md" bordered>
    <q-card-section>
      <div v-if="title && organization" class="generic-card__header">
        <strong>{{ title }} — {{ organization }}</strong>
      </div>

      <div v-else-if="title" class="generic-card__header">
        <strong>{{ title }} — {{ period }}</strong>
      </div>

      <div v-if="period && location" class="generic-card__period">
        <em>{{ period }} — {{ location }}</em>
      </div>

      <div v-if="description" class="generic-card__period">
        <em>{{ description }}</em>
      </div>

      <div v-if="skills?.length && !skillTitle">
        <ChipList :label="$t('contentCard.skills')" :items="skills" />
      </div>

      <div v-if="skills?.length && skillTitle">
        <ChipList :label="skillTitle" :items="skills" />
      </div>

      <div v-if="achievements?.length">
        <div class="generic-card__achievements">
          <strong>{{ $t('contentCard.achievements') }}</strong>

          <ul>
            <li v-for="(achievement, index) in achievements" :key="index">
              <span class="indent">{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </q-card-section>

    <q-card-actions v-if="links?.length || id">
      <div v-for="(link, index) in links" :key="index" class="q-ma-sm">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">
          <q-btn :label="link.label" color="primary" outline />
        </a>
      </div>

      <div v-if="id" class="q-ml-md">
        <router-link
          :to="{
            name: 'experience',
            params: { id },
          }"
        >
          <q-btn :label="$t('contentCard.readMore')" color="primary" />
        </router-link>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import ChipList from './ChipList.vue'

interface Link {
  url: string
  label: string
}

interface Props {
  id?: string
  title?: string
  organization?: string
  period?: string
  description?: string
  location?: string
  skillTitle?: string
  skills?: string[]
  achievements?: string[]
  links?: Link[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.generic-card {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.q-card__section--vert {
  padding: 0;
}

.generic-card__header {
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}

.generic-card__period {
  font-size: 14px;
  color: $gray;
  margin-top: 5px;
  margin-bottom: 20px;
}

.generic-card__achievements {
  margin-top: 20px;
}

.generic-card__achievements ul {
  list-style-type: none;
  padding-left: 0;
}

.generic-card__achievements li {
  font-size: 14px;
  color: $gray-blue;
  margin-bottom: 8px;
  text-indent: 20px;
}
</style>
