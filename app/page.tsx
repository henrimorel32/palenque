// app/page.tsx
import type { Metadata } from 'next'
import HeroParallax from '@/components/HeroParallax'
import { generateMetadata as generateI18nMetadata, generateStructuredData } from '@/lib/i18n/metadata'
import { Locale } from '@/lib/i18n/translations'

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
      {/* Structured Data pour Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <HeroParallax />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Bienvenido al Paraíso Caribeño
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la magia de palenque en nuestro Eco hotel. 
            Playas de arena blanca, aguas cristalinas y el mejor servicio.
          </p>
        </div>
      </section>
    </>
  )
}
