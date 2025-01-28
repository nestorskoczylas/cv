import { createI18n } from 'vue-i18n'
import messages from './messages'
import { getBrowserLanguage } from '@/utils/i18n'

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
