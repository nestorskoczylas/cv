import constants from './locales/constants'

import en from './locales/en'
import fr from './locales/fr'

const messages = {
  en: {
    untranslatable: constants,
    ...en,
  },
  fr: {
    untranslatable: constants,
    ...fr,
  },
}

export default messages
