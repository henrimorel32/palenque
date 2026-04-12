// components/I18nProvider.tsx
import { Locale } from '@/lib/i18n/translations'
import { getTranslations } from '@/lib/i18n/utils'

interface I18nProviderProps {
  locale: Locale
  children: React.ReactNode
}

export default function I18nProvider({ locale, children }: I18nProviderProps) {
  const t = getTranslations(locale)
  
  return (
    <>
      {/* Metadata pour SEO */}
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <html lang={locale} />
      {children}
    </>
  )
}
