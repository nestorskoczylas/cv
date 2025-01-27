export const availableLanguages = ['en', 'fr'] as const
export type AvailableLanguage = (typeof availableLanguages)[number]

/**
 * Get the browser language or fallback to 'en'.
 */
export const getBrowserLanguage = (): AvailableLanguage => {
  const browserLang = navigator.language.split('-')[0] as AvailableLanguage
  return availableLanguages.includes(browserLang) ? browserLang : 'en'
}
