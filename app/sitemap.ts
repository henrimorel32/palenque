// app/sitemap.ts
import { MetadataRoute } from 'next'
import { Locale } from '@/lib/i18n/translations'
import { allRoutes, generateLocalizedUrl } from '@/lib/i18n/routes'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palenque.co'
const locales: Locale[] = ['es', 'en', 'fr']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Génère les entrées pour chaque route dans chaque langue
  allRoutes.forEach(route => {
    locales.forEach(locale => {
      const url = generateLocalizedUrl(route.path, locale)
      
      // Crée les alternatives hreflang
      const alternates: Record<string, string> = {}
      locales.forEach(loc => {
        alternates[loc] = `${baseUrl}${generateLocalizedUrl(route.path, loc)}`
      })
      
      sitemapEntries.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
        priority: route.priority,
        alternates: {
          languages: alternates,
        },
      })
    })
  })
  
  return sitemapEntries
}
