import { Select } from '@/components'
import { i18n } from '@/lib/i18n'

import type { Locale } from '@/lib/i18n'

type LanguageSwitcherProps = {
  currentLang: Locale
}

export const LanguageSwitcher = async ({
  currentLang,
}: LanguageSwitcherProps) => {
  return (
    // todo: implement i18n
    <Select
      name='language'
      defaultValue={currentLang}
      options={i18n.locales.map((local) => ({
        value: local,
        label: local,
      }))}
    />
  )
}
