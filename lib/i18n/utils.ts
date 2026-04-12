// lib/i18n/utils.ts
import { Locale, translations } from './translations'

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es
}

export function getAlternateUrls(pathname: string, currentLocale: Locale) {
  const locales: Locale[] = ['es', 'en', 'fr']
  
  // Supprime le locale du pathname s'il existe
  const pathWithoutLocale = pathname.replace(/^\/(es|en|fr)/, '') || '/'
  
  return locales.map(locale => ({
    locale,
    url: locale === 'es' 
      ? pathWithoutLocale  // Default locale sans prefix
      : `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`,
  }))
}

// Mapping des slugs pour SEO localisé
export const slugMapping: Record<string, Record<Locale, string>> = {
  habitaciones: {
    es: 'habitaciones',
    en: 'rooms',
    fr: 'chambres',
  },
  restaurante: {
    es: 'restaurante',
    en: 'restaurant',
    fr: 'restaurant',
  },
  contacto: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
  },
}
