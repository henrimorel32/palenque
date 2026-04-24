// app/[locale]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HeroParallax from '@/components/HeroParallax'
import PreloadHeroAssets from '@/components/PreloadHeroAssets'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturesSection from '@/components/FeaturesSection'
import RoomsSection from '@/components/RoomsSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'

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
  
  const structuredData = generateStructuredData('home', params.locale)
  
  return (
    <>
      {/* Préchargement des assets du hero */}
      <PreloadHeroAssets />

      {/* Structured Data pour Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero avec effet parallax */}
      <HeroParallax locale={params.locale} />
      
      {/* Section Bienvenue */}
      <WelcomeSection locale={params.locale} />
      
      {/* Section Caractéristiques */}
      <FeaturesSection locale={params.locale} />
      
      {/* Section Chambres */}
      <RoomsSection locale={params.locale} />
  
      {/* Section Services */}
      <ServicesSection locale={params.locale} />
      
      {/* Section Galerie */}
      <GallerySection locale={params.locale} />
      
      {/* Section Témoignages */}
      <TestimonialsSection locale={params.locale} />
      
      {/* Section CTA */}
      <CTASection locale={params.locale} />
    </>
  )
}
