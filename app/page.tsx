// app/page.tsx
import type { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import HeroParallax from '@/components/HeroParallax'
import PreloadHeroAssets from '@/components/PreloadHeroAssets'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'

// Lazy-load des sections below-the-fold pour réduire le JS initial
const WelcomeSection = dynamic(() => import('@/components/WelcomeSection'), { ssr: true })
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), { ssr: true })
const RoomsSection = dynamic(() => import('@/components/RoomsSection'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), { ssr: true })
const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: true })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: true })

// Fallback minimal pour éviter le CLS pendant le streaming
function SectionFallback({ className = '' }: { className?: string }) {
  return <div className={`min-h-[40vh] ${className}`} aria-hidden="true" />
}

// Métadonnées dynamiques pour SEO
export async function generateMetadata(): Promise<Metadata> {
  // Par défaut en espagnol pour la racine
  return generateI18nMetadata('home', 'es')
}

export default function InicioPage() {
  // JSON-LD pour Rich Snippets
  const structuredData = generateStructuredData('home', 'es')

  return (
    <>
      {/* Préchargement des assets du hero */}
      <PreloadHeroAssets />

      {/* Structured Data pour Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero avec effet parallax — above the fold, synchrone */}
      <HeroParallax locale="es" />

      {/* Sections below-the-fold lazy-loadées */}
      <Suspense fallback={<SectionFallback />}>
        <WelcomeSection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <RoomsSection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <GallerySection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection locale="es" />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection locale="es" />
      </Suspense>
    </>
  )
}
