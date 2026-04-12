// lib/i18n/metadata.ts
import { Metadata } from 'next'
import { Locale } from './translations'
import { getTranslations } from './utils'
import { generateLocalizedUrl } from './routes'

type MetaPage = 'home' | 'rooms' | 'restaurant' | 'spa' | 'activities' | 'contact'

const pageMetadata: Record<MetaPage, Record<Locale, { title: string; description: string }>> = {
  home: {
    es: {
      title: 'Palenque Eco Hotel - Paraíso en la Costa Caribe Colombiana',
      description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas, spa de lujo y gastronomía local. Reserva tu escapada paradisíaca.',
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
  spa: {
    es: {
      title: 'Spa & Bienestar - Palenque Eco Hotel',
      description: 'Relájate en nuestro spa con tratamientos naturales, masajes terapéuticos y vistas al océano. Un santuario de bienestar en medio de la naturaleza.',
    },
    en: {
      title: 'Spa & Wellness - Palenque Eco Hotel',
      description: 'Relax at our spa with natural treatments, therapeutic massages and ocean views. A wellness sanctuary in the heart of nature.',
    },
    fr: {
      title: 'Spa & Bien-être - Palenque Eco Hotel',
      description: 'Détendez-vous dans notre spa avec des soins naturels, des massages thérapeutiques et vue sur l\'océan. Un sanctuaire de bien-être au cœur de la nature.',
    },
  },
  activities: {
    es: {
      title: 'Actividades & Excursiones - Palenque Eco Hotel',
      description: 'Explora Palenque con nuestras excursiones guiadas: playas vírgenes, cultura afrocolombiana, senderismo ecológico y más aventuras.',
    },
    en: {
      title: 'Activities & Excursions - Palenque Eco Hotel',
      description: 'Explore Palenque with our guided excursions: pristine beaches, Afro-Colombian culture, eco-hiking and more adventures.',
    },
    fr: {
      title: 'Activités & Excursions - Palenque Eco Hotel',
      description: 'Explorez Palenque avec nos excursions guidées : plages vierges, culture afro-colombienne, randonnée écologique et plus d\'aventures.',
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
  baseUrl: string = 'https://palenque.co'
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
          url: `${baseUrl}/images/og-image.jpg`,
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
      images: [`${baseUrl}/images/og-image.jpg`],
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

// JSON-LD structured data pour Rich Snippets
export function generateStructuredData(
  page: MetaPage,
  locale: Locale,
  baseUrl: string = 'https://palenque.co'
) {
  const url = generateLocalizedUrl(
    page === 'home' ? '/' : `/${page}`,
    locale
  )
  
  const hotelSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Palenque Eco Hotel',
    image: `${baseUrl}/images/hotel-exterior.jpg`,
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
