// app/[locale]/actividades/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'

const locales: Locale[] = ['es', 'en', 'fr']

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  return generateI18nMetadata('activities', params.locale)
}

export default function ActividadesPage({ params }: PageProps) {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  const content = {
    es: {
      title: 'Actividades',
      subtitle: 'Explora la magia de Palenque',
    },
    en: {
      title: 'Activities',
      subtitle: 'Explore the magic of Palenque',
    },
    fr: {
      title: 'Activités',
      subtitle: 'Explorez la magie de Palenque',
    },
  }
  
  const c = content[params.locale]
  const structuredData = generateStructuredData('activities', params.locale)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-xl text-gray-600">{c.subtitle}</p>
          </div>
        </div>
      </section>
    </>
  )
}
