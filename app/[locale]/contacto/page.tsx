import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'
import ContactPage from '@/components/ContactPage'

const locales: Locale[] = ['es', 'en', 'fr']

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!locales.includes(params.locale)) {
    notFound()
  }
  return generateI18nMetadata('contact', params.locale)
}

export default function ContactoPage({ params }: PageProps) {
  if (!locales.includes(params.locale)) {
    notFound()
  }

  const structuredData = generateStructuredData('contact', params.locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPage locale={params.locale} />
    </>
  )
}
