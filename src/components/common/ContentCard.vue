<template>
  <q-card class="generic-card q-mb-md" bordered shadow="2">
    <q-card-section>
      <div v-if="title && organization" class="generic-card__header">
        <strong>{{ title }} — {{ organization }}</strong>
      </div>
      <div v-if="title && !organization" class="generic-card__header">
        <strong>{{ title }} — {{ period }}</strong>
      </div>
      <div v-if="period && location" class="generic-card__period">
        <em>{{ period }} — {{ location }}</em>
      </div>
      <div v-if="description" class="generic-card__period">
        <em>{{ description }}</em>
      </div>

      <div v-if="skills && skills.length > 0 && !skillTitle">
        <ChipList label="Compétences" :items="skills" />
      </div>
      <div v-if="skills && skillTitle">
        <ChipList :label="skillTitle" :items="skills" />
      </div>
      <div v-if="achievements && achievements.length > 0">
        <div class="generic-card__achievements">
          <strong>Réalisations :</strong>
          <ul>
            <li v-for="(achievement, index) in achievements" :key="index">
              <span class="indent">{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </q-card-section>
    <template v-if="links || id">
      <q-card-actions>
        <div v-for="(link, index) in links" :key="index" class="q-ma-sm">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            <q-btn :label="link.label" color="primary" outlined />
          </a>
        </div>
        <div v-if="id" class="q-ml-md">
          <router-link :to="{ name: 'experience', params: { id: id } }">
            <q-btn label="En savoir plus" color="primary" />
          </router-link>
        </div>
      </q-card-actions>
    </template>
  </q-card>
</template>

<script lang="ts" setup>
import ChipList from './ChipList.vue'

defineProps({
  id: { type: String, required: false },
  title: { type: String, required: false },
  organization: { type: String, required: false },
  period: { type: String, required: false },
  description: { type: String, required: false },
  location: { type: String, required: false },
  skillTitle: { type: String, required: false },
  skills: { type: Array, required: false },
  achievements: { type: Array, required: false },
  links: { type: Array as () => { url: string; label: string }[], required: false },
})
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
