import { useLocale as useNextIntlLocale } from 'next-intl'

const SUPPORTED_LOCALES = ['en', 'zh-HK']

export default function useLocale() {
  const locale = useNextIntlLocale()

  // @ts-expect-error
  if (SUPPORTED_LOCALES.includes(locale)) {
    // @ts-expect-error
    return locale
  }

  return 'en'
}
