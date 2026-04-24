// app/page.tsx
import type { Metadata } from 'next'
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
      
      {/* Hero avec effet parallax */}
      <HeroParallax locale="es" />
      
      {/* Section Bienvenue */}
      <WelcomeSection locale="es" />
      
      {/* Section Caractéristiques */}
      <FeaturesSection locale="es" />
      
      {/* Section Chambres */}
      <RoomsSection locale="es" />
      
      {/* Section Services */}
      <ServicesSection locale="es" />
      
      {/* Section Galerie */}
      <GallerySection locale="es" />
      
      {/* Section Témoignages */}
      <TestimonialsSection locale="es" />
      
      {/* Section CTA */}
      <CTASection locale="es" />
    </>
  )
}
