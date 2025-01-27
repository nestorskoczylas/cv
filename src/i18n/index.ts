import { createI18n } from 'vue-i18n'

import constants from './constants'
import fr_Constants from './fr/constants'
import fr_BioCard from './fr/components/aboutMe/BioCard'
import fr_TitledContent from './fr/components/common/TitledContent'
import fr_Experience from './fr/pages/Experience'
import fr_Projects from './fr/pages/Projects'
import fr_Resume from './fr/pages/Resume'

const messages = {
  fr: {
    untranslatable: constants,
    constants: fr_Constants,
    bioCard: fr_BioCard,
    titledContent: fr_TitledContent,
    pages: {
      experience: fr_Experience,
      projects: fr_Projects,
      resume: fr_Resume,
    },
  },
}

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages,
})

export default i18n
