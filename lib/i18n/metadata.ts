// lib/i18n/metadata.ts
import { Metadata } from 'next'
import { Locale } from './translations'
import { getTranslations } from './utils'
import { generateLocalizedUrl } from './routes'

type MetaPage = 'home' | 'rooms' | 'restaurant' | 'directions' | 'activities' | 'contact'

const pageMetadata: Record<MetaPage, Record<Locale, { title: string; description: string }>> = {
  home: {
    es: {
      title: 'Palenque Eco Hotel - Paraíso en la Costa Caribe Colombiana',
      description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas, y gastronomía local. Reserva tu escapada paradisíaca.',
    },
    en: {
      title: 'Palenque Eco Hotel - Paradise on the Colombian Caribbean Coast',
      description: 'Discover the magic of Palenque at our Eco Hotel. White sand beaches, crystal clear waters, luxury spa and local gastronomy. Book your paradise getaway.',
    },
    fr: {
      title: 'Palenque Eco Hotel - Paradis sur la Côte Caraïbe Colombienne',
      description: 'Découvrez la magie de Palenque dans notre Eco Hôtel. Plages de sable blanc, eaux cristallines, spa de luxe et gastronomie locale. Réservez votre escapade paradisiaque.',
    },
  },
  rooms: {
    es: {
      title: 'Habitaciones & Suites - Palenque Eco Hotel',
      description: 'Nuestras habitaciones y suites ofrecen vistas panorámicas al mar, decoración sostenible y todas las comodidades para una estancia inolvidable.',
    },
    en: {
      title: 'Rooms & Suites - Palenque Eco Hotel',
      description: 'Our rooms and suites offer panoramic sea views, sustainable decoration and all amenities for an unforgettable stay.',
    },
    fr: {
      title: 'Chambres & Suites - Palenque Eco Hotel',
      description: 'Nos chambres et suites offrent des vues panoramiques sur la mer, une décoration durable et tout le confort pour un séjour inoubliable.',
    },
  },
  restaurant: {
    es: {
      title: 'Restaurante - Gastronomía Caribeña | Palenque Eco Hotel',
      description: 'Disfruta de la auténtica cocina caribeña con ingredientes locales y frescos. Vista al mar, ambiente romántico y los mejores sabores de la región.',
    },
    en: {
      title: 'Restaurant - Caribbean Cuisine | Palenque Eco Hotel',
      description: 'Enjoy authentic Caribbean cuisine with fresh local ingredients. Sea view, romantic atmosphere and the best flavors of the region.',
    },
    fr: {
      title: 'Restaurant - Cuisine Caraïbe | Palenque Eco Hotel',
      description: 'Dégustez une cuisine caraïbe authentique avec des ingrédients locaux frais. Vue sur la mer, ambiance romantique et les meilleures saveurs de la région.',
    },
  },
  directions: {
    es: {
      title: 'Cómo Llegar - Ubicación | Palenque Eco Hotel',
      description: 'Encuentra cómo llegar a Palenque Eco Hotel. A 45 minutos de Cartagena, en la costa caribe colombiana. Dirección, coordenadas GPS y opciones de transporte.',
    },
    en: {
      title: 'How to Get There - Location | Palenque Eco Hotel',
      description: 'Find how to get to Palenque Eco Hotel. 45 minutes from Cartagena, on the Colombian Caribbean coast. Address, GPS coordinates and transport options.',
    },
    fr: {
      title: 'Comment Arriver - Accès | Palenque Eco Hotel',
      description: 'Trouvez comment arriver au Palenque Eco Hotel. À 45 minutes de Carthagène, sur la côte caraïbe colombienne. Adresse, coordonnées GPS et options de transport.',
    },
  },
  activities: {
    es: {
      title: 'Tours y Excursiones en Rincón del Mar | Palenque Beach House',
      description: 'Descubre los mejores tours en Rincón del Mar, Sucre: tour islas San Bernardo, plancton bioluminiscente, manglar, pesca artesanal, cabalgata al atardecer y Fantasy Island. Reserva tu experiencia caribeña.',
    },
    en: {
      title: 'Tours and Excursions in Rincón del Mar | Palenque Beach House',
      description: 'Discover the best tours in Rincón del Mar, Sucre: San Bernardo islands tour, bioluminescent plankton, mangrove, artisanal fishing, sunset horseback riding and Fantasy Island. Book your Caribbean experience.',
    },
    fr: {
      title: 'Excursions et Tours à Rincón del Mar | Palenque Beach House',
      description: 'Découvrez les meilleures excursions à Rincón del Mar, Sucre : tour îles San Bernardo, plancton bioluminescent, mangrove, pêche artisanale, balade à cheval au coucher du soleil et Fantasy Island. Réservez votre expérience caribéenne.',
    },
  },
  contact: {
    es: {
      title: 'Contacto & Reservas - Palenque Eco Hotel',
      description: 'Contáctanos para reservar tu estancia en el paraíso. Estamos aquí para hacer tu experiencia inolvidable. Respuesta en menos de 24h.',
    },
    en: {
      title: 'Contact & Reservations - Palenque Eco Hotel',
      description: 'Contact us to book your stay in paradise. We are here to make your experience unforgettable. Response within 24 hours.',
    },
    fr: {
      title: 'Contact & Réservations - Palenque Eco Hotel',
      description: 'Contactez-nous pour réserver votre séjour au paradis. Nous sommes là pour rendre votre expérience inoubliable. Réponse sous 24h.',
    },
  },
}

export function generateMetadata(
  page: MetaPage,
  locale: Locale,
  baseUrl: string = 'https://palenquerincondelmar.co'
): Metadata {
  const meta = pageMetadata[page][locale]
  const t = getTranslations(locale)
  
  // Génère les URLs alternatives pour hreflang
  const alternates: Record<string, string> = {}
  const locales: Locale[] = ['es', 'en', 'fr']
  
  locales.forEach(loc => {
    const url = generateLocalizedUrl(
      page === 'home' ? '/' : `/${page}`,
      loc
    )
    alternates[loc] = `${baseUrl}${url}`
  })
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'hotel palenque',
      'eco hotel colombia',
      'hotel caribe colombiano',
      'playa palenque',
      'alojamiento sostenible',
      'spa caribe',
      locale === 'es' ? 'turismo palenque' : locale === 'en' ? 'palenque tourism' : 'tourisme palenque',
    ],
    alternates: {
      canonical: alternates[locale],
      languages: {
        'es-CO': alternates.es,
        'es': alternates.es,
        'en-US': alternates.en,
        'en': alternates.en,
        'fr-FR': alternates.fr,
        'fr': alternates.fr,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: alternates[locale],
      siteName: t.meta.title,
      locale: locale === 'es' ? 'es_CO' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/og-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Données des tours pour JSON-LD
const toursData: Record<Locale, Array<{ name: string; description: string; price: string; priceCurrency: string }>> = {
  es: [
    { name: 'Tour Manglar', description: 'Navegación por los manglares de Rincón del Mar con avistamiento de fauna.', price: '40000', priceCurrency: 'COP' },
    { name: 'Tour Islas – Archipiélago de San Bernardo', description: 'Viaje en lancha por Isla Palma, Múcura y Tintipán.', price: '70000', priceCurrency: 'COP' },
    { name: 'Tour Islas Palenque', description: 'Tour premium con visita a Isla Saycén y snorkel.', price: '90000', priceCurrency: 'COP' },
    { name: 'Tour de Plancton Bioluminiscente', description: 'Atardecer en Isla Cabruna y plancton bioluminiscente en manglares.', price: '50000', priceCurrency: 'COP' },
    { name: 'Cabalgata al Atardecer', description: 'Paseo a caballo por senderos de bosque tropical y orilla del mar.', price: '120000', priceCurrency: 'COP' },
    { name: 'Pesca Artesanal + Snorkel + Almuerzo', description: 'Experiencia de pesca local, snorkel y almuerzo en Isla Mangle.', price: '130000', priceCurrency: 'COP' },
    { name: 'Fantasy Island Tour', description: 'Bioparque, playa privada, snorkel y jacuzzis de mar.', price: '230000', priceCurrency: 'COP' },
  ],
  en: [
    { name: 'Mangrove Tour', description: 'Mangrove navigation in Rincón del Mar with wildlife spotting.', price: '40000', priceCurrency: 'COP' },
    { name: 'Islands Tour – San Bernardo Archipelago', description: 'Boat trip to Palma, Múcura and Tintipán islands.', price: '70000', priceCurrency: 'COP' },
    { name: 'Palenque Islands Tour', description: 'Premium tour with Saycén Island visit and snorkel.', price: '90000', priceCurrency: 'COP' },
    { name: 'Bioluminescent Plankton Tour', description: 'Sunset at Cabruna Island and bioluminescent plankton.', price: '50000', priceCurrency: 'COP' },
    { name: 'Sunset Horseback Ride', description: 'Horseback ride through tropical forest and seashore.', price: '120000', priceCurrency: 'COP' },
    { name: 'Artisanal Fishing + Snorkel + Lunch', description: 'Local fishing experience, snorkel and lunch at Mangle Island.', price: '130000', priceCurrency: 'COP' },
    { name: 'Fantasy Island Tour', description: 'Biopark, private beach, snorkel and sea jacuzzis.', price: '230000', priceCurrency: 'COP' },
  ],
  fr: [
    { name: 'Tour Mangrove', description: 'Navigation en mangrove à Rincón del Mar avec observation de la faune.', price: '40000', priceCurrency: 'COP' },
    { name: 'Tour Îles – Archipel de San Bernardo', description: 'Excursion en bateau vers les îles Palma, Múcura et Tintipán.', price: '70000', priceCurrency: 'COP' },
    { name: 'Tour Îles Palenque', description: 'Tour premium avec visite de l\'île Saycén et snorkeling.', price: '90000', priceCurrency: 'COP' },
    { name: 'Tour du Plancton Bioluminescent', description: 'Coucher de soleil à l\'île Cabruna et plancton bioluminescent.', price: '50000', priceCurrency: 'COP' },
    { name: 'Balade à Cheval au Coucher du Soleil', description: 'Promenade à cheval dans la forêt tropicale et le bord de mer.', price: '120000', priceCurrency: 'COP' },
    { name: 'Pêche Artisanale + Snorkeling + Déjeuner', description: 'Expérience de pêche locale, snorkeling et déjeuner.', price: '130000', priceCurrency: 'COP' },
    { name: 'Fantasy Island Tour', description: 'Bioparc, plage privée, snorkeling et jacuzzis de mer.', price: '230000', priceCurrency: 'COP' },
  ],
}

// JSON-LD structured data pour Rich Snippets
export function generateStructuredData(
  page: MetaPage,
  locale: Locale,
  baseUrl: string = 'https://palenquerincondelmar.co'
) {
  const url = generateLocalizedUrl(
    page === 'home' ? '/' : `/${page}`,
    locale
  )

  if (page === 'activities') {
    const tours = toursData[locale] || toursData.es
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: pageMetadata.activities[locale].title,
      description: pageMetadata.activities[locale].description,
      url: `${baseUrl}${url}`,
      inLanguage: locale,
      itemListElement: tours.map((tour, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristAttraction',
          name: tour.name,
          description: tour.description,
          url: `${baseUrl}${url}`,
          offers: {
            '@type': 'Offer',
            price: tour.price,
            priceCurrency: tour.priceCurrency,
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    }
  }
  
  const hotelSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Palenque Eco Hotel',
    image: `${baseUrl}/og-default.jpg`,
    url: `${baseUrl}${url}`,
    telephone: '+57-5-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrera 1 # 23-58',
      addressLocality: 'Palenque',
      addressRegion: 'Bolívar',
      postalCode: '131060',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.7500,
      longitude: -74.6667,
    },
    priceRange: '$$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.5',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Spa' },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
      { '@type': 'LocationFeatureSpecification', name: 'Beach Access' },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
    ],
    inLanguage: locale,
  }
  
  return hotelSchema
}
