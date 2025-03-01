<template>
  <div class="background">
    <q-page class="q-pa-md borders">
      <q-toolbar class="q-mb-md">
        <q-btn
          icon="arrow_back"
          :label="$t('pages.experience.back')"
          color="primary"
          :to="to"
          flat
          outline
        />
      </q-toolbar>

      <q-card v-if="experience" class="q-pa-md" bordered shadow="2">
        <q-card-section>
          <div class="experience__grid">
            <div class="experience__left-column">
              <div class="experience__header">
                <strong>{{ experience.title }} — {{ experience.company }}</strong>
              </div>
              <div class="experience__period-location q-pb-md q-pt-sm">
                <em>{{ experience.period }} — {{ experience.location }}</em>
              </div>
            </div>

            <div class="experience__right-column">
              <ChipList :items="experience.keywords" :outlined="true" />

              <div v-if="experience.reference" class="experience__reference">
                <a
                  :href="experience.reference.linkedin"
                  target="_blank"
                  class="experience__reference-linkedin"
                >
                  <q-btn icon="mdi-linkedin" color="primary" flat />
                </a>
                <strong>{{ experience.reference.name }}</strong>
                <div>{{ experience.reference.role }}</div>
              </div>
            </div>
          </div>

          <div class="experience__context">
            <strong>{{ $t('pages.experience.contextTitle') }}</strong>
            <em>{{ experience.context }}</em>
          </div>
          <div class="experience__environment-methodology">
            <ChipList
              :label="$t('pages.experience.environments')"
              :items="experience.environments"
            />
            <ChipList
              :label="$t('pages.experience.methodologies')"
              :items="experience.methodologies"
            />
          </div>

          <div class="experience__achievements">
            <div class="experience__achievement">
              <strong>{{ $t('pages.experience.generalAchievements') }}</strong>
              <ul>
                <li v-for="(achievement, index) in experience.achievements.general" :key="index">
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
            <div class="experience__achievement">
              <strong>{{ $t('pages.experience.methodologyAchievements') }}</strong>
              <ul>
                <li
                  v-for="(methodology, index) in experience.achievements.methodology"
                  :key="index"
                >
                  <span>{{ methodology }}</span>
                </li>
              </ul>
            </div>
            <div class="experience__achievement">
              <strong>{{ $t('pages.experience.interventions') }}</strong>
              <ul>
                <li
                  v-for="(intervention, index) in experience.achievements.interventions"
                  :key="index"
                >
                  <span>{{ intervention }}</span>
                </li>
              </ul>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ChipList from '@/components/common/ChipList.vue'
import type { Experience } from '@/types/experience'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { tm, locale } = useI18n()

const to = computed(() => `/${locale.value}/resume`)

const experiences = computed(() => tm('pages.experience.experiences') as Experience[])

const experienceId = computed(() => route.params.id)

const experience = computed(() => {
  return experiences.value.find((exp) => exp.id === experienceId.value)
})
</script>

<style lang="scss" scoped>
.q-toolbar .q-btn {
  background-color: $white;
}
.experience__header {
  font-size: 1.6rem;
  font-weight: bold;
  color: $primary;
}

.experience__period-location {
  font-size: 0.9rem;
  color: $gray;
}

.experience__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

.experience__right-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
}

.experience__reference {
  color: $gray;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
}

.experience__content {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.experience__context strong {
  font-size: 1rem;
  color: $gray-blue;
}

.experience__context em {
  color: $gray;
}

.experience__environment-methodology {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2.5rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
    gap: 1rem;
  }
}

.experience__achievements {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
