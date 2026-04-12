// app/[locale]/habitaciones/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'
import { getTranslations } from '@/lib/i18n/utils'

const locales: Locale[] = ['es', 'en', 'fr']

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  return generateI18nMetadata('rooms', params.locale)
}

export default function HabitacionesPage({ params }: PageProps) {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  const t = getTranslations(params.locale)
  const structuredData = generateStructuredData('rooms', params.locale)
  
  const content = {
    es: {
      title: 'Nuestras Habitaciones',
      subtitle: 'Descubre espacios diseñados para tu confort',
    },
    en: {
      title: 'Our Rooms',
      subtitle: 'Discover spaces designed for your comfort',
    },
    fr: {
      title: 'Nos Chambres',
      subtitle: 'Découvrez des espaces conçus pour votre confort',
    },
  }
  
  const c = content[params.locale]
  
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
          
          {/* Placeholder pour les chambres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((room) => (
              <div key={room} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {params.locale === 'es' && `Habitación ${room}`}
                    {params.locale === 'en' && `Room ${room}`}
                    {params.locale === 'fr' && `Chambre ${room}`}
                  </h3>
                  <p className="text-gray-600">
                    {params.locale === 'es' && 'Descripción de la habitación...'}
                    {params.locale === 'en' && 'Room description...'}
                    {params.locale === 'fr' && 'Description de la chambre...'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
