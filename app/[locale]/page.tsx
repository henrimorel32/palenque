// app/[locale]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HeroParallax from '@/components/HeroParallax'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'
import { getTranslations } from '@/lib/i18n/utils'

const locales: Locale[] = ['es', 'en', 'fr']

interface PageProps {
  params: { locale: Locale }
}

// Métadonnées dynamiques pour SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  return generateI18nMetadata('home', params.locale)
}

export default function HomePage({ params }: PageProps) {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  const t = getTranslations(params.locale)
  const structuredData = generateStructuredData('home', params.locale)
  
  return (
    <>
      {/* Structured Data pour Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <HeroParallax locale={params.locale} />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {params.locale === 'es' && 'Bienvenido al Paraíso Caribeño'}
            {params.locale === 'en' && 'Welcome to the Caribbean Paradise'}
            {params.locale === 'fr' && 'Bienvenue au Paradis Caraïbe'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>
    </>
  )
}
