// lib/i18n/translations.ts
export type Locale = 'es' | 'en' | 'fr'

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      restaurant: 'Restaurante',
      spa: 'Spa',
      activities: 'Actividades',
      contact: 'Contacto',
      phone: 'Contactar',
      location: 'Palenque, Bolívar, Colombia',
    },
    hero: {
      badge: 'Palenque Eco Hotel',
      title: 'La evasión comienza Aquí',
      subtitle: 'Descubre un santuario donde el tiempo se detiene y cada ola canta tu libertad',
      cta: 'Ver habitaciones',
    },
    footer: {
      title: 'Palenque Eco Hotel',
      address: 'Carrera 1 # 23-58',
      contact: 'Contacto',
      quickLinks: 'Enlaces rápidos',
      terms: 'Términos y condiciones',
      privacy: 'Política de privacidad',
    },
    meta: {
      title: 'Palenque Eco Hotel - Paraíso en la Costa Caribe',
      description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas y el mejor servicio.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      restaurant: 'Restaurant',
      spa: 'Spa',
      activities: 'Activities',
      contact: 'Contact',
      phone: 'Contact Us',
      location: 'Palenque, Bolivar, Colombia',
    },
    hero: {
      badge: 'Palenque Eco Hotel',
      title: 'Escape Begins Here',
      subtitle: 'Discover a sanctuary where time stops and every wave sings your freedom',
      cta: 'View Rooms',
    },
    footer: {
      title: 'Palenque Eco Hotel',
      address: 'Carrera 1 # 23-58',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
    },
    meta: {
      title: 'Palenque Eco Hotel - Paradise on the Caribbean Coast',
      description: 'Discover the magic of Palenque at our Eco Hotel. White sand beaches, crystal clear waters and the best service.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      rooms: 'Chambres',
      restaurant: 'Restaurant',
      spa: 'Spa',
      activities: 'Activités',
      contact: 'Contact',
      phone: 'Nous contacter',
      location: 'Palenque, Bolívar, Colombie',
    },
    hero: {
      badge: 'Palenque Eco Hotel',
      title: 'L\'évasion commence Ici',
      subtitle: 'Découvrez un sanctuaire où le temps s\'arrête et chaque vague chante votre liberté',
      cta: 'Voir les chambres',
    },
    footer: {
      title: 'Palenque Eco Hotel',
      address: 'Carrera 1 # 23-58',
      contact: 'Contact',
      quickLinks: 'Liens rapides',
      terms: 'Conditions générales',
      privacy: 'Politique de confidentialité',
    },
    meta: {
      title: 'Palenque Eco Hotel - Paradis sur la Côte Caraïbe',
      description: 'Découvrez la magie de Palenque dans notre Eco Hôtel. Plages de sable blanc, eaux cristallines et meilleur service.',
    },
  },
} as const

export type Translations = typeof translations
export type TranslationKey = keyof typeof translations.es
