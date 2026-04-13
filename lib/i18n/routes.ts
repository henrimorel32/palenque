// lib/i18n/routes.ts
import { Locale } from './translations'

// Structure des routes traduites pour SEO optimal
export const routeTranslations: Record<string, Record<Locale, string>> = {
  // Page d'accueil
  '/': {
    es: '/',
    en: '/',
    fr: '/',
  },
  // Habitaciones
  habitaciones: {
    es: 'habitaciones',
    en: 'rooms',
    fr: 'chambres',
  },
  // Restaurante
  restaurante: {
    es: 'restaurante',
    en: 'restaurant',
    fr: 'restaurant',
  },
  // Como llegar / Directions
  directions: {
    es: 'como-llegar',
    en: 'directions',
    fr: 'acces',
  },
  // Actividades
  actividades: {
    es: 'actividades',
    en: 'activities',
    fr: 'activites',
  },
  // Contacto
  contacto: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
  },
  // Términos
  terminos: {
    es: 'terminos',
    en: 'terms',
    fr: 'conditions',
  },
  // Privacidad
  privacidad: {
    es: 'privacidad',
    en: 'privacy',
    fr: 'confidentialite',
  },
}

// Fonction pour obtenir le slug traduit
export function getLocalizedSlug(
  baseSlug: string,
  targetLocale: Locale,
  currentLocale: Locale = 'es'
): string {
  const translations = routeTranslations[baseSlug]
  if (!translations) return baseSlug
  return translations[targetLocale] || baseSlug
}

// Fonction pour générer une URL complète localisée
export function generateLocalizedUrl(
  path: string,
  locale: Locale,
  includePrefix: boolean = true
): string {
  // Supprime les slashes au début et à la fin
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '')
  
  if (!cleanPath || cleanPath === '') {
    return locale === 'es' ? '/' : `/${locale}`
  }
  
  // Découpe le chemin
  const segments = cleanPath.split('/')
  
  // Traduit chaque segment
  const translatedSegments = segments.map(segment => {
    const translations = routeTranslations[segment]
    return translations ? translations[locale] : segment
  })
  
  // Construit l'URL
  const translatedPath = translatedSegments.join('/')
  
  if (locale === 'es') {
    return `/${translatedPath}`
  }
  
  return includePrefix ? `/${locale}/${translatedPath}` : `/${translatedPath}`
}

// Fonction pour récupérer le slug de base à partir d'un slug traduit
export function getBaseSlugFromLocalized(
  localizedSlug: string,
  locale: Locale
): string {
  for (const [baseSlug, translations] of Object.entries(routeTranslations)) {
    if (translations[locale] === localizedSlug) {
      return baseSlug
    }
  }
  return localizedSlug
}

// Liste de toutes les routes pour le sitemap
export const allRoutes = [
  { path: '/', priority: 1.0, changeFreq: 'daily' },
  { path: '/habitaciones', priority: 0.9, changeFreq: 'weekly' },
  { path: '/restaurante', priority: 0.8, changeFreq: 'weekly' },
  { path: '/como-llegar', priority: 0.8, changeFreq: 'monthly' },
  { path: '/actividades', priority: 0.7, changeFreq: 'weekly' },
  { path: '/contacto', priority: 0.6, changeFreq: 'monthly' },
  { path: '/terminos', priority: 0.3, changeFreq: 'yearly' },
  { path: '/privacidad', priority: 0.3, changeFreq: 'yearly' },
]
