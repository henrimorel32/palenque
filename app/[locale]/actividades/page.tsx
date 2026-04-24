// app/[locale]/actividades/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'
import ActivitiesPage from '@/components/ActivitiesPage'

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

  const structuredData = generateStructuredData('activities', params.locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ActivitiesPage locale={params.locale} />
    </>
  )
}
