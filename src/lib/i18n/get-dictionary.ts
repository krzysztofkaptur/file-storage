// don't put export in index.ts file. Doesn't work with "server-only" import
import 'server-only'
import type { Locale } from './'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./locales/en').then((module) => module.default),
  de: () => import('./locales/de').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
