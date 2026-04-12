// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routeTranslations, getBaseSlugFromLocalized, generateLocalizedUrl } from './lib/i18n/routes'
import { Locale } from './lib/i18n/translations'

const locales: Locale[] = ['es', 'en', 'fr']
const defaultLocale = 'es'

// Cookie pour stocker la préférence de langue
const COOKIE_NAME = 'NEXT_LOCALE'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Ne pas traiter les fichiers statiques et API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/robots') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Vérifie si c'est un changement manuel de langue (paramètre _locale)
  const manualLocale = searchParams.get('_locale') as Locale | null
  if (manualLocale && locales.includes(manualLocale)) {
    // C'est un changement manuel, on ne redirige pas
    // On supprime juste le paramètre de l'URL proprement
    const newUrl = request.nextUrl.clone()
    newUrl.searchParams.delete('_locale')
    
    // Stocke la préférence dans un cookie
    const response = NextResponse.redirect(newUrl)
    response.cookies.set(COOKIE_NAME, manualLocale, { 
      maxAge: 60 * 60 * 24 * 365, // 1 an
      path: '/' 
    })
    return response
  }

  // Vérifie si le pathname contient déjà un locale
  const pathnameLocale = pathname.split('/')[1] as Locale
  const hasLocalePrefix = locales.includes(pathnameLocale)
  
  // Si on a un locale dans l'URL, on valide et on continue
  if (hasLocalePrefix) {
    // Supprime le locale du pathname pour obtenir le chemin
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${pathnameLocale}`), '') || '/'
    
    // Vérifie si les slugs sont dans la bonne langue
    const segments = pathWithoutLocale.split('/').filter(Boolean)
    const translatedSegments = segments.map(segment => {
      const baseSlug = getBaseSlugFromLocalized(segment, pathnameLocale)
      return routeTranslations[baseSlug]?.[pathnameLocale] || segment
    })
    
    const expectedPath = translatedSegments.length > 0 
      ? `/${translatedSegments.join('/')}` 
      : '/'
    
    // Si le chemin est différent, redirige vers la bonne URL
    if (pathWithoutLocale !== expectedPath && pathWithoutLocale !== '/') {
      const newUrl = pathnameLocale === defaultLocale 
        ? expectedPath 
        : `/${pathnameLocale}${expectedPath}`
      return NextResponse.redirect(new URL(newUrl, request.url))
    }
    
    // Stocke la préférence dans un cookie
    const response = NextResponse.next()
    response.cookies.set(COOKIE_NAME, pathnameLocale, { 
      maxAge: 60 * 60 * 24 * 365,
      path: '/' 
    })
    return response
  }

  // Pas de locale dans l'URL, on est sur une page ES (défaut)
  // On vérifie juste que les slugs sont corrects
  const segments = pathname.split('/').filter(Boolean)
  const translatedSegments = segments.map(segment => {
    const baseSlug = getBaseSlugFromLocalized(segment, defaultLocale)
    return routeTranslations[baseSlug]?.[defaultLocale] || segment
  })
  
  const expectedPath = translatedSegments.length > 0 
    ? `/${translatedSegments.join('/')}` 
    : '/'
  
  if (pathname !== expectedPath) {
    return NextResponse.redirect(new URL(expectedPath, request.url))
  }

  // Continue normalement pour le locale par défaut (es)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|images|sitemap|robots|.*\\..*).*)'],
}
