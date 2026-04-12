// components/LanguageSwitcher.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Locale } from '@/lib/i18n/translations'
import { getBaseSlugFromLocalized, generateLocalizedUrl } from '@/lib/i18n/routes'

const languages = [
  { code: 'es', label: 'ES', flag: '🇨🇴' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
] as const

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'navbar'
}

export default function LanguageSwitcher({ variant = 'navbar' }: LanguageSwitcherProps) {
  const pathname = usePathname()

  // Détecte la locale actuelle depuis l'URL
  const currentLocale = useMemo((): Locale => {
    if (!pathname) return 'es'
    const firstSegment = pathname.split('/')[1]
    if (firstSegment === 'en' || firstSegment === 'fr') {
      return firstSegment
    }
    return 'es' // Default
  }, [pathname])

  const switchLanguage = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) return

    // Supprime le préfixe de langue actuel du pathname
    let cleanPath = pathname || '/'
    
    // Détermine la locale source (celle de l'URL actuelle)
    let sourceLocale: Locale = 'es'
    if (cleanPath.startsWith('/en')) {
      sourceLocale = 'en'
      cleanPath = cleanPath.replace(/^\/en/, '') || '/'
    } else if (cleanPath.startsWith('/fr')) {
      sourceLocale = 'fr'
      cleanPath = cleanPath.replace(/^\/fr/, '') || '/'
    }
    
    // Convertit les slugs de la langue source vers les slugs de base (ES)
    const segments = cleanPath.split('/').filter(Boolean)
    const baseSegments = segments.map(segment => {
      return getBaseSlugFromLocalized(segment, sourceLocale)
    })
    
    const basePath = baseSegments.length > 0 ? `/${baseSegments.join('/')}` : '/'
    
    // Génère la nouvelle URL avec les slugs traduits vers la langue cible
    let newUrl = generateLocalizedUrl(basePath, targetLocale)
    
    // Ajoute un paramètre pour indiquer au middleware que c'est un changement manuel
    // et qu'il ne doit pas rediriger automatiquement
    newUrl += (newUrl.includes('?') ? '&' : '?') + '_locale=' + targetLocale
    
    // Navigation avec rechargement
    window.location.href = newUrl
  }

  // Styles spécifiques pour le top bar (fond jaune) - haut contraste
  if (variant === 'topbar') {
    return (
      <div className="flex items-center gap-1">
        {languages.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => switchLanguage(code as Locale)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 border-2 ${
              currentLocale === code
                ? 'bg-yellow-900 text-yellow-100 border-yellow-900 shadow-md'
                : 'bg-transparent text-yellow-900 border-transparent hover:bg-yellow-500/50 hover:border-yellow-600'
            }`}
          >
            <span className="text-base">{flag}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    )
  }

  // Styles pour la navbar
  return (
    <div className="flex items-center gap-1">
      {languages.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => switchLanguage(code as Locale)}
          className={`flex items-center gap-1 px-2 py-1 text-sm font-medium rounded transition-all duration-200 ${
            currentLocale === code
              ? 'text-yellow-600 bg-yellow-100'
              : 'text-gray-600 hover:text-yellow-600 hover:bg-gray-100'
          }`}
        >
          <span>{flag}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}
