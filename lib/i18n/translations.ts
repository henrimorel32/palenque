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
      city: 'Palenque, Bolívar, Colombia',
      contact: 'Contacto',
      quickLinks: 'Enlaces rápidos',
      terms: 'Términos y condiciones',
      privacy: 'Política de privacidad',
      about: 'Descubre un oasis de tranquilidad en la costa caribeña colombiana. Disfruta de playas paradisíacas, gastronomía local y una experiencia única de hospedaje ecológico.',
      rights: 'Todos los derechos reservados',
      poweredBy: 'Desarrollado por',
      webDeveloper: 'Henri Morel - Desarrollador Web Full Stack',
      webDevDescription: 'Desarrollo web profesional, SEO y aplicaciones modernas',
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
      city: 'Palenque, Bolivar, Colombia',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      about: 'Discover an oasis of tranquility on the Colombian Caribbean coast. Enjoy paradise beaches, local gastronomy and a unique eco-lodging experience.',
      rights: 'All rights reserved',
      poweredBy: 'Developed by',
      webDeveloper: 'Henri Morel - Full Stack Web Developer',
      webDevDescription: 'Professional web development, SEO and modern applications',
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
      city: 'Palenque, Bolívar, Colombie',
      contact: 'Contact',
      quickLinks: 'Liens rapides',
      terms: 'Conditions générales',
      privacy: 'Politique de confidentialité',
      about: 'Découvrez une oasis de tranquillité sur la côte caraïbe colombienne. Profitez de plages paradisiaques, d\'une gastronomie locale et d\'une expérience unique d\'hébergement écologique.',
      rights: 'Tous droits réservés',
      poweredBy: 'Développé par',
      webDeveloper: 'Henri Morel - Développeur Web Full Stack',
      webDevDescription: 'Développement web professionnel, SEO et applications modernes',
    },
    meta: {
      title: 'Palenque Eco Hotel - Paradis sur la Côte Caraïbe',
      description: 'Découvrez la magie de Palenque dans notre Eco Hôtel. Plages de sable blanc, eaux cristallines et meilleur service.',
    },
  },
} as const

export type Translations = typeof translations
export type TranslationKey = keyof typeof translations.es
