// lib/i18n/translations.ts
export type Locale = 'es' | 'en' | 'fr'

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      restaurant: 'Restaurante',
      directions: 'Cómo llegar',
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
    home: {
      welcomeTitle: 'Bienvenido al Paraíso',
      welcomeSubtitle: 'Un refugio sostenible donde la naturaleza caribeña se encuentra con el lujo consciente',
      welcomeText: 'En Palenque Eco Hotel, cada amanecer trae una nueva oportunidad de conectar con lo esencial. Nuestro compromiso con el medio ambiente y tu confort crean una experiencia única e inolvidable.',
      features: {
        title: '¿Por qué elegirnos?',
        beach: {
          title: 'Frente al Mar',
          desc: 'Acceso directo a playas de arena blanca y aguas cristalinas del Caribe colombiano',
        },
        eco: {
          title: 'Eco-Friendly',
          desc: 'Energía solar, agua reciclada y arquitectura sostenible en armonía con la naturaleza',
        },
        comfort: {
          title: 'Confort Único',
          desc: 'Habitaciones diseñadas para el descanso con vistas panorámicas al océano',
        },
        cuisine: {
          title: 'Gastronomía Local',
          desc: 'Sabores auténticos de la región preparados con ingredientes frescos y locales',
        },
      },
      rooms: {
        title: 'Nuestras Habitaciones',
        subtitle: 'Espacios diseñados para tu descanso',
        standard: {
          title: 'Habitación Estándar',
          desc: 'Cama queen size, baño privado, ventilador y vista al jardín',
          price: 'Desde $120/noche',
        },
        deluxe: {
          title: 'Suite Deluxe',
          desc: 'Cama king size, baño privado, A/C, balcón con vista al mar',
          price: 'Desde $180/noche',
        },
        bungalow: {
          title: 'Bungalow Frente al Mar',
          desc: 'Villa privada con terraza, hamaca, A/C y acceso directo a la playa',
          price: 'Desde $250/noche',
        },
        cta: 'Ver todas las habitaciones',
      },
      services: {
        title: 'Servicios & Experiencias',
        subtitle: 'Todo lo que necesitas para una estancia perfecta',
        restaurant: {
          title: 'Restaurante',
          desc: 'Cocina local e internacional con productos frescos del mar y la tierra',
        },
        directions: {
          title: 'Cómo Llegar',
          desc: 'Encuentra nuestra ubicación y las mejores rutas para llegar al hotel',
        },
        activities: {
          title: 'Actividades',
          desc: 'Excursiones, snorkel, kayak y tours culturales por el pueblo palenquero',
        },
        pool: {
          title: 'Piscina Natural',
          desc: 'Relájate en nuestra piscina ecológica con vistas al mar Caribe',
        },
      },
      gallery: {
        title: 'Galería',
        subtitle: 'Descubre nuestro paraíso en imágenes',
      },
      testimonials: {
        title: 'Lo que dicen nuestros huéspedes',
        subtitle: 'Experiencias reales de quienes nos visitaron',
        review1: {
          text: 'Un lugar mágico. La atención es increíble y el entorno natural es simplemente espectacular. Volveremos pronto.',
          author: 'María G.',
          from: 'Madrid, España',
        },
        review2: {
          text: 'El mejor hotel eco-friendly en el que he estado. La comida deliciosa y las habitaciones son un sueño.',
          author: 'Jean P.',
          from: 'París, Francia',
        },
        review3: {
          text: 'Experiencia inolvidable. El bungalow frente al mar superó todas nuestras expectativas.',
          author: 'Carlos M.',
          from: 'Bogotá, Colombia',
        },
      },
      cta: {
        title: '¿Listo para tu escapada?',
        subtitle: 'Reserva ahora y vive la experiencia Palenque',
        button: 'Reservar ahora',
        contact: 'O contáctanos por WhatsApp',
      },
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
      directions: 'How to get there',
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
    home: {
      welcomeTitle: 'Welcome to Paradise',
      welcomeSubtitle: 'A sustainable refuge where Caribbean nature meets conscious luxury',
      welcomeText: 'At Palenque Eco Hotel, every dawn brings a new opportunity to connect with what matters. Our commitment to the environment and your comfort create a unique and unforgettable experience.',
      features: {
        title: 'Why Choose Us?',
        beach: {
          title: 'Beachfront',
          desc: 'Direct access to white sand beaches and crystal clear waters of the Colombian Caribbean',
        },
        eco: {
          title: 'Eco-Friendly',
          desc: 'Solar energy, recycled water and sustainable architecture in harmony with nature',
        },
        comfort: {
          title: 'Unique Comfort',
          desc: 'Rooms designed for rest with panoramic ocean views',
        },
        cuisine: {
          title: 'Local Cuisine',
          desc: 'Authentic flavors of the region prepared with fresh local ingredients',
        },
      },
      rooms: {
        title: 'Our Rooms',
        subtitle: 'Spaces designed for your rest',
        standard: {
          title: 'Standard Room',
          desc: 'Queen size bed, private bathroom, fan and garden view',
          price: 'From $120/night',
        },
        deluxe: {
          title: 'Deluxe Suite',
          desc: 'King size bed, private bathroom, A/C, balcony with sea view',
          price: 'From $180/night',
        },
        bungalow: {
          title: 'Beachfront Bungalow',
          desc: 'Private villa with terrace, hammock, A/C and direct beach access',
          price: 'From $250/night',
        },
        cta: 'View all rooms',
      },
      services: {
        title: 'Services & Experiences',
        subtitle: 'Everything you need for a perfect stay',
        restaurant: {
          title: 'Restaurant',
          desc: 'Local and international cuisine with fresh products from sea and land',
        },
        directions: {
          title: 'How to Get There',
          desc: 'Find our location and the best routes to get to the hotel',
        },
        activities: {
          title: 'Activities',
          desc: 'Excursions, snorkeling, kayaking and cultural tours of Palenque village',
        },
        pool: {
          title: 'Natural Pool',
          desc: 'Relax in our eco-friendly pool with views of the Caribbean Sea',
        },
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Discover our paradise in pictures',
      },
      testimonials: {
        title: 'What our guests say',
        subtitle: 'Real experiences from those who visited us',
        review1: {
          text: 'A magical place. The attention is incredible and the natural environment is simply spectacular. We will be back soon.',
          author: 'María G.',
          from: 'Madrid, Spain',
        },
        review2: {
          text: 'The best eco-friendly hotel I have ever stayed at. The food is delicious and the rooms are a dream.',
          author: 'Jean P.',
          from: 'Paris, France',
        },
        review3: {
          text: 'Unforgettable experience. The beachfront bungalow exceeded all our expectations.',
          author: 'Carlos M.',
          from: 'Bogotá, Colombia',
        },
      },
      cta: {
        title: 'Ready for your getaway?',
        subtitle: 'Book now and live the Palenque experience',
        button: 'Book now',
        contact: 'Or contact us via WhatsApp',
      },
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
      directions: 'Comment arriver',
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
    home: {
      welcomeTitle: 'Bienvenue au Paradis',
      welcomeSubtitle: 'Un refuge durable où la nature caraïbe rencontre le luxe conscient',
      welcomeText: 'Au Palenque Eco Hotel, chaque aube apporte une nouvelle opportunité de se connecter à l\'essentiel. Notre engagement envers l\'environnement et votre confort créent une expérience unique et inoubliable.',
      features: {
        title: 'Pourquoi nous choisir ?',
        beach: {
          title: 'Front de Mer',
          desc: 'Accès direct aux plages de sable blanc et aux eaux cristallines de la Caraïbe colombienne',
        },
        eco: {
          title: 'Éco-Responsable',
          desc: 'Énergie solaire, eau recyclée et architecture durable en harmonie avec la nature',
        },
        comfort: {
          title: 'Confort Unique',
          desc: 'Chambres conçues pour le repos avec vues panoramiques sur l\'océan',
        },
        cuisine: {
          title: 'Gastronomie Locale',
          desc: 'Saveurs authentiques de la région préparées avec des ingrédients frais et locaux',
        },
      },
      rooms: {
        title: 'Nos Chambres',
        subtitle: 'Des espaces conçus pour votre repos',
        standard: {
          title: 'Chambre Standard',
          desc: 'Lit queen size, salle de bain privée, ventilateur et vue sur le jardin',
          price: 'À partir de 120€/nuit',
        },
        deluxe: {
          title: 'Suite Deluxe',
          desc: 'Lit king size, salle de bain privée, A/C, balcon avec vue sur la mer',
          price: 'À partir de 180€/nuit',
        },
        bungalow: {
          title: 'Bungalow Front de Mer',
          desc: 'Villa privée avec terrasse, hamac, A/C et accès direct à la plage',
          price: 'À partir de 250€/nuit',
        },
        cta: 'Voir toutes les chambres',
      },
      services: {
        title: 'Services & Expériences',
        subtitle: 'Tout ce dont vous avez besoin pour un séjour parfait',
        restaurant: {
          title: 'Restaurant',
          desc: 'Cuisine locale et internationale avec des produits frais de la mer et de la terre',
        },
        directions: {
          title: 'Accès',
          desc: 'Trouvez notre emplacement et les meilleurs itinéraires pour rejoindre l\'hôtel',
        },
        activities: {
          title: 'Activités',
          desc: 'Excursions, snorkeling, kayak et visites culturelles du village palenquero',
        },
        pool: {
          title: 'Piscine Naturelle',
          desc: 'Détendez-vous dans notre piscine écologique avec vue sur la mer des Caraïbes',
        },
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Découvrez notre paradis en images',
      },
      testimonials: {
        title: 'Ce que disent nos hôtes',
        subtitle: 'Expériences réelles de ceux qui nous ont visités',
        review1: {
          text: 'Un lieu magique. L\'attention est incroyable et l\'environnement naturel est tout simplement spectaculaire. Nous reviendrons bientôt.',
          author: 'María G.',
          from: 'Madrid, Espagne',
        },
        review2: {
          text: 'Le meilleur hôtel éco-responsable dans lequel j\'ai séjourné. La nourriture est délicieuse et les chambres sont un rêve.',
          author: 'Jean P.',
          from: 'Paris, France',
        },
        review3: {
          text: 'Expérience inoubliable. Le bungalow front de mer a dépassé toutes nos attentes.',
          author: 'Carlos M.',
          from: 'Bogotá, Colombie',
        },
      },
      cta: {
        title: 'Prêt pour votre escapade ?',
        subtitle: 'Réservez maintenant et vivez l\'expérience Palenque',
        button: 'Réserver maintenant',
        contact: 'Ou contactez-nous par WhatsApp',
      },
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
