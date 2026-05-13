'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles, Ship, Trees, Moon, Sun, Clock, CheckCircle2,
  ArrowRight, Phone, Star, Shield, Wallet, Heart
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import VideoLoader from '@/components/VideoLoader';


interface ActivitiesPageProps {
  locale: Locale;
}

export default function ActivitiesContent({ locale }: ActivitiesPageProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [supportChecked, setSupportChecked] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                       (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      setSupportChecked(true);
      if (isMobile) {
        setVideoLoaded(true);
        setVideoPlaying(true);
      }
    }
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
      setVideoPlaying(true);
    }
    const timeout = setTimeout(() => {
      setVideoLoaded(true);
      setVideoPlaying(true);
    }, 12000);
    return () => clearTimeout(timeout);
  }, []);
  const content = {
    es: {
      badge: 'Rincón del Mar',
      title: 'Tours Palenque Beach House',
      subtitle: 'Experiencias que solo existen en Rincón del Mar, Sucre – Colombia',
      description: 'En Palenque Beach House no solo duermes frente al mar… vives el Caribe en su estado más puro. Cada tour ha sido diseñado para que descubras la magia natural, cultural y ancestral de este rincón único del planeta.',
      activities: [
        {
          id: 'manglar',
          title: 'Tour Manglar',
          tag: 'Ecoturismo',
          desc: 'Sumérgete en un ecosistema vivo donde el mar y el bosque se abrazan. Navegarás por los manglares de Rincón del Mar mientras conoces sus diferentes especies y las iniciativas locales que los protegen.',
          schedule: 'Salidas: 8:00am / 10:00am / 4:00pm • Duración: 1 hora',
          price: '$40.000',
          unit: 'por persona',
          features: ['Avistamiento de osos perezosos, iguanas, mapaches', 'Aves tropicales', 'Navegación por manglares'],
          image: '/images/activites/hamac.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'islas-san-bernardo',
          title: 'Tour Islas – Archipiélago de San Bernardo',
          tag: 'Tour de islas',
          desc: 'Un viaje en lancha por uno de los archipiélagos más hermosos del Caribe colombiano.',
          schedule: 'Salida: 8:45am • Duración: 6 horas',
          price: '$70.000',
          unit: 'por persona',
          features: ['Isla Palma, recorrido panorámico', 'Islote de Santa Cruz, la isla más densamente poblada del mundo (ingreso opcional $10.000 COP)', 'Isla Múcura – 2 horas de playa paradisíaca', 'Isla Tintipán – 1 hora de playa + opción de almuerzo'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'buceo',
          title: 'Experiencia Buceo',
          tag: 'Buceo',
          desc: 'Descubre la magia del buceo en las aguas cristalinas de Rincón del Mar. Explora arrecifes coloridos, vida marina exuberante y paisajes submarinos únicos en el Caribe colombiano. Sumérgete en aguas turquesa donde peces tropicales y corales te esperan. Una experiencia inolvidable para aventureros, amantes del mar y exploradores del Caribe.',
          schedule: 'Salidas: 9:00am / 11:00am / 2:00pm • Duración: 2 horas',
          price: '$80.000',
          unit: 'por persona',
          features: ['Arrecifes de coral', 'Vida marina tropical', 'Aguas cristalinas', 'Paisajes submarinos únicos'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'plancton',
          title: 'Tour de Plancton Bioluminiscente',
          tag: 'Experiencia nocturna',
          desc: 'Una experiencia que parece magia. Primero navegarás hacia Isla Cabruna para disfrutar un atardecer inolvidable con avistamiento de aves. Luego te adentrarás en los manglares del archipiélago para presenciar el espectáculo natural del plancton bioluminiscente, donde cada movimiento en el agua se convierte en destellos de luz.',
          schedule: 'Salida: 5:30pm • Duración: 2.5 horas',
          price: '$50.000',
          unit: 'por persona',
          features: ['Atardecer en Isla Cabruna con avistamiento de aves', 'Plancton bioluminiscente en manglares', 'Recuerdo inolvidable'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'cabalgata',
          title: 'Cabalgata al Atardecer',
          tag: 'Experiencia romántica',
          desc: 'Recorre senderos de bosque tropical y la orilla del mar montando caballo mientras el sol cae sobre Rincón del Mar. Una experiencia tranquila, romántica y profundamente caribeña.',
          schedule: 'Salida: 4:30pm • Duración: 1 hora',
          price: '$120.000',
          unit: 'por persona',
          features: ['Senderos de bosque tropical', 'Orilla del mar a caballo', 'Atardecer sobre Rincón del Mar'],
          image: '/images/activites/hamac.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'pesca-artesanal',
          title: 'Pesca Artesanal + Snorkel + Almuerzo',
          tag: 'Experiencia cultural',
          desc: 'Vive un día como un pescador local. Saldrás en bote a realizar pesca artesanal, luego harás snorkel frente a Isla Tintipán, y más tarde llegarás a Isla Mangle, donde prepararás tu propio almuerzo con la pesca del día, acompañado de patacón y ensalada.',
          schedule: 'Salidas: 7:00am / 8:00am / 9:00am • Duración: 6 horas',
          price: '$130.000',
          unit: 'por persona (mínimo 2 personas)',
          features: ['Pesca artesanal en bote', 'Snorkel frente a Isla Tintipán', 'Almuerzo en Isla Mangle con la pesca del día', 'Patacón y ensalada incluidos'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'fantasy-island',
          title: 'Fantasy Island Tour – Experiencia Exclusiva',
          tag: 'Experiencia exclusiva',
          desc: 'Nuestro tour estrella. Comienza con una visita al Bioparque de Isla Palma, hogar de flamencos, monos, venados y otras especies. Luego disfrutarás de una playa privada en Isla Ceycén, con cóctel de bienvenida y almuerzo incluido. La tarde será para nadar, hacer snorkel entre corales y relajarte en los famosos jacuzzis de mar, un fenómeno natural donde burbujas emergen desde el fondo del océano.',
          schedule: 'Salida: 8:30am • Duración: 7 horas',
          price: '$230.000',
          unit: 'por persona (mínimo 4 personas)',
          features: ['Bioparque de Isla Palma', 'Playa privada en Isla Ceycén', 'Cóctel de bienvenida y almuerzo incluido', 'Snorkel entre corales', 'Jacuzzis de mar – fenómeno natural'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Reservar ahora',
        },
      ],
      trust: {
        title: '¿Por qué reservar con nosotros?',
        items: [
          { icon: Shield, title: '', desc: '' },
          { icon: Star, title: 'Guía local experto', desc: '' },
          { icon: Wallet, title: 'Mejor precio directo', desc: 'Sin intermediarios. Precio justo para viajeros' },
        ],
      },
      contact: {
        title: '¿Listo para la aventura?',
        desc: 'Reserva tu excursión favorita con nosotros. Te ayudamos a planificar cada detalle de tu experiencia.',
        cta: 'Contactar por WhatsApp',
        or: 'o llámanos al',
        phone: '#ERROR!',
      },
    },
    en: {
      badge: 'Rincón del Mar',
      title: 'Tours Palenque Beach House',
      subtitle: 'Experiences that only exist in Rincón del Mar, Sucre – Colombia',
      description: 'At Palenque Beach House you don\'t just sleep in front of the sea… you live the Caribbean in its purest state. Each tour is designed for you to discover the natural, cultural and ancestral magic of this unique corner of the planet.',
      activities: [
        {
          id: 'manglar',
          title: 'Mangrove Tour',
          tag: 'Ecotourism',
          desc: 'Immerse yourself in a living ecosystem where the sea and the forest embrace. You will navigate through the mangroves of Rincón del Mar while learning about its different species and the local initiatives that protect them.',
          schedule: 'Departures: 8:00am / 10:00am / 4:00pm • Duration: 1 hour',
          price: '$40,000',
          unit: 'per person',
          features: ['Sloths, iguanas, raccoons', 'Tropical birds', 'Mangrove navigation'],
          image: '/images/activites/hamac.webp',
          cta: 'Book now',
        },
        {
          id: 'islas-san-bernardo',
          title: 'Islands Tour – San Bernardo Archipelago',
          tag: 'Island tour',
          desc: 'A boat trip through one of the most beautiful archipelagos in the Colombian Caribbean.',
          schedule: 'Departure: 8:45am • Duration: 6 hours',
          price: '$70,000',
          unit: 'per person',
          features: ['Palma Island, panoramic tour', 'Santa Cruz Islet, the most densely populated island in the world (optional entry $10,000 COP)', 'Múcura Island – 2 hours of paradise beach', 'Tintipán Island – 1 hour of beach + lunch option'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Book now',
        },
        {
          id: 'buceo',
          title: 'Diving Experience',
          tag: 'Diving',
          desc: 'Discover the magic of diving in the crystal clear waters of Rincón del Mar. Explore colorful reefs, abundant marine life and unique underwater landscapes in the Colombian Caribbean. Immerse yourself in turquoise waters where tropical fish and corals await you. An unforgettable experience for adventurers, sea lovers and Caribbean explorers.',
          schedule: 'Departures: 9:00am / 11:00am / 2:00pm • Duration: 2 hours',
          price: '$80,000',
          unit: 'per person',
          features: ['Coral reefs', 'Tropical marine life', 'Crystal clear waters', 'Unique underwater landscapes'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Book now',
        },
        {
          id: 'plancton',
          title: 'Bioluminescent Plankton Tour',
          tag: 'Night experience',
          desc: 'An experience that seems like magic. First you will sail to Cabruna Island to enjoy an unforgettable sunset with bird watching. Then you will enter the mangroves of the archipelago to witness the natural spectacle of bioluminescent plankton, where every movement in the water becomes flashes of light.',
          schedule: 'Departure: 5:30pm • Duration: 2.5 hours',
          price: '$50,000',
          unit: 'per person',
          features: ['Sunset at Cabruna Island with bird watching', 'Bioluminescent plankton in mangroves', 'Unforgettable memory'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Book now',
        },
        {
          id: 'cabalgata',
          title: 'Sunset Horseback Ride',
          tag: 'Romantic experience',
          desc: 'Ride through tropical forest trails and along the seashore on horseback as the sun sets over Rincón del Mar. A quiet, romantic and deeply Caribbean experience.',
          schedule: 'Departure: 4:30pm • Duration: 1 hour',
          price: '$120,000',
          unit: 'per person',
          features: ['Tropical forest trails', 'Seashore on horseback', 'Sunset over Rincón del Mar'],
          image: '/images/activites/hamac.webp',
          cta: 'Book now',
        },
        {
          id: 'pesca-artesanal',
          title: 'Artisanal Fishing + Snorkel + Lunch',
          tag: 'Cultural experience',
          desc: 'Live a day like a local fisherman. You will go out on a boat for artisanal fishing, then snorkel off Tintipán Island, and later arrive at Mangle Island, where you will prepare your own lunch with the day\'s catch, accompanied by patacón and salad.',
          schedule: 'Departures: 7:00am / 8:00am / 9:00am • Duration: 6 hours',
          price: '$130,000',
          unit: 'per person (minimum 2 people)',
          features: ['Artisanal fishing by boat', 'Snorkel off Tintipán Island', 'Lunch at Mangle Island with the day\'s catch', 'Patacón and salad included'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Book now',
        },
        {
          id: 'fantasy-island',
          title: 'Fantasy Island Tour – Exclusive Experience',
          tag: 'Exclusive experience',
          desc: 'Our star tour. It begins with a visit to the Biopark of Palma Island, home to flamingos, monkeys, deer and other species. Then you will enjoy a private beach on Ceycén Island, with a welcome cocktail and lunch included. The afternoon will be for swimming, snorkeling among corals and relaxing in the famous sea jacuzzis, a natural phenomenon where bubbles emerge from the bottom of the ocean.',
          schedule: 'Departure: 8:30am • Duration: 7 hours',
          price: '$230,000',
          unit: 'per person (minimum 4 people)',
          features: ['Biopark of Palma Island', 'Private beach on Ceycén Island', 'Welcome cocktail and lunch included', 'Snorkel among corals', 'Sea jacuzzis – natural phenomenon'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Book now',
        },
      ],
      trust: {
        title: 'Why book with us?',
        items: [
          { icon: Shield, title: 'Insurance included', desc: 'All our excursions include travel insurance' },
          { icon: Star, title: 'Expert local guide', desc: 'Know every corner with certified bilingual guides' },
          { icon: Wallet, title: 'Best direct price', desc: 'No intermediaries. Fair price for travelers' },
        ],
      },
      contact: {
        title: 'Ready for adventure?',
        desc: 'Book your favorite excursion with us. We help you plan every detail of your experience.',
        cta: 'Contact via WhatsApp',
        or: 'or call us at',
        phone: '+57 310 527 0542',
      },
    },
    fr: {
      badge: 'Rincón del Mar',
      title: 'Tours Palenque Beach House',
      subtitle: 'Des expériences qui n\'existent qu\'à Rincón del Mar, Sucre – Colombie',
      description: 'À Palenque Beach House, vous ne dormez pas seulement face à la mer… vous vivez les Caraïbes dans leur état le plus pur. Chaque tour a été conçu pour vous faire découvrir la magie naturelle, culturelle et ancestrale de ce coin unique de la planète.',
      activities: [
        {
          id: 'manglar',
          title: 'Tour Mangrove',
          tag: 'Écotourisme',
          desc: 'Plongez dans un écosystème vivant où la mer et la forêt s\'étreignent. Vous naviguerez dans les mangroves de Rincón del Mar tout en découvrant leurs différentes espèces et les initiatives locales qui les protègent.',
          schedule: 'Départs : 8h00 / 10h00 / 16h00 • Durée : 1 heure',
          price: '40 000',
          unit: 'par personne',
          features: ['Paresseux, iguanes, ratons laveurs', 'Oiseaux tropicaux', 'Navigation en mangrove'],
          image: '/images/activites/hamac.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'islas-san-bernardo',
          title: 'Tour Îles – Archipel de San Bernardo',
          tag: 'Tour des îles',
          desc: 'Un voyage en bateau dans l\'un des plus beaux archipels des Caraïbes colombiennes.',
          schedule: 'Départ : 8h45 • Durée : 6 heures',
          price: '70 000',
          unit: 'par personne',
          features: ['Île Palma, visite panoramique', 'Îlot Santa Cruz, l\'île la plus densément peuplée au monde (entrée optionnelle 10 000 COP)', 'Île Múcura – 2 heures de plage paradisiaque', 'Île Tintipán – 1 heure de plage + option déjeuner'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'buceo',
          title: 'Expérience Plongée',
          tag: 'Plongée',
          desc: 'Découvrez la magie de la plongée dans les eaux cristallines de Rincón del Mar. Explorez des récifs colorés, une vie marine exubérante et des paysages sous-marins uniques dans les Caraïbes colombiennes. Plongez dans des eaux turquoise où poissons tropicaux et coraux vous attendent. Une expérience inoubliable pour aventuriers, amoureux de la mer et explorateurs des Caraïbes.',
          schedule: 'Départs : 9h00 / 11h00 / 14h00 • Durée : 2 heures',
          price: '80 000',
          unit: 'par personne',
          features: ['Récifs de corail', 'Vie marine tropicale', 'Eaux cristallines', 'Paysages sous-marins uniques'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'plancton',
          title: 'Tour du Plancton Bioluminescent',
          tag: 'Expérience nocturne',
          desc: 'Une expérience qui semble magique. Vous naviguerez d\'abord vers l\'île Cabruna pour profiter d\'un coucher de soleil inoubliable avec l\'observation des oiseaux. Puis vous pénétrerez dans les mangroves de l\'archipel pour assister au spectacle naturel du plancton bioluminescent, où chaque mouvement dans l\'eau se transforme en éclats de lumière.',
          schedule: 'Départ : 17h30 • Durée : 2,5 heures',
          price: '50 000',
          unit: 'par personne',
          features: ['Coucher de soleil à l\'île Cabruna avec observation des oiseaux', 'Plancton bioluminescent dans les mangroves', 'Souvenir inoubliable'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'cabalgata',
          title: 'Balade à Cheval au Coucher du Soleil',
          tag: 'Expérience romantique',
          desc: 'Parcourez les sentiers de la forêt tropicale et le bord de la mer à cheval pendant que le soleil se couche sur Rincón del Mar. Une expérience tranquille, romantique et profondément caribéenne.',
          schedule: 'Départ : 16h30 • Durée : 1 heure',
          price: '120 000',
          unit: 'par personne',
          features: ['Sentiers de forêt tropicale', 'Bord de mer à cheval', 'Coucher de soleil sur Rincón del Mar'],
          image: '/images/activites/hamac.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'pesca-artesanal',
          title: 'Pêche Artisanale + Snorkeling + Déjeuner',
          tag: 'Expérience culturelle',
          desc: 'Vivez une journée comme un pêcheur local. Vous partirez en bateau pour faire de la pêche artisanale, puis vous ferez du snorkeling face à l\'île Tintipán, et plus tard vous arriverez à l\'île Mangle, où vous préparerez votre propre déjeuner avec la pêche du jour, accompagné de patacón et de salade.',
          schedule: 'Départs : 7h00 / 8h00 / 9h00 • Durée : 6 heures',
          price: '130 000',
          unit: 'par personne (minimum 2 personnes)',
          features: ['Pêche artisanale en bateau', 'Snorkeling face à l\'île Tintipán', 'Déjeuner à l\'île Mangle avec la pêche du jour', 'Patacón et salade inclus'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'fantasy-island',
          title: 'Fantasy Island Tour – Expérience Exclusive',
          tag: 'Expérience exclusive',
          desc: 'Notre tour phare. Commencez par une visite au Bioparc de l\'île Palma, refuge de flamants roses, singes, cerfs et autres espèces. Puis profitez d\'une plage privée sur l\'île Ceycén, avec cocktail de bienvenue et déjeuner inclus. L\'après-midi sera consacrée à la baignade, au snorkeling parmi les coraux et à la détente dans les célèbres jacuzzis de mer, un phénomène naturel où des bulles émergent du fond de l\'océan.',
          schedule: 'Départ : 8h30 • Durée : 7 heures',
          price: '230 000',
          unit: 'par personne (minimum 4 personnes)',
          features: ['Bioparc de l\'île Palma', 'Plage privée sur l\'île Ceycén', 'Cocktail de bienvenue et déjeuner inclus', 'Snorkeling parmi les coraux', 'Jacuzzis de mer – phénomène naturel'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Réserver maintenant',
        },
      ],
      trust: {
        title: 'Pourquoi réserver avec nous ?',
        items: [
          { icon: Shield, title: 'Assurance incluse', desc: 'Toutes nos excursions incluent une assurance voyage' },
          { icon: Star, title: 'Guide local expert', desc: 'Connaissez chaque coin avec des guides bilingues certifiés' },
          { icon: Wallet, title: 'Meilleur prix direct', desc: 'Sans intermédiaires. Prix juste pour les voyageurs' },
        ],
      },
      contact: {
        title: 'Prêt pour l\'aventure ?',
        desc: 'Réservez votre excursion favorite avec nous. Nous vous aidons à planifier chaque détail de votre expérience.',
        cta: 'Contacter par WhatsApp',
        or: 'ou appelez-nous au',
        phone: '+57 310 527 0542',
      },
    },
  };

  const c = content[locale] || content.es;

  const getActivityStyle = (id: string) => {
    switch (id) {
      case 'manglar':
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950',
          border: 'border-emerald-500/20',
          accent: 'text-emerald-300',
          accentBg: 'bg-emerald-500',
          badge: 'bg-emerald-500/20 text-emerald-300',
          price: 'text-emerald-300',
          icon: Trees,
        };
      case 'islas-san-bernardo':
        return {
          bg: 'bg-gradient-to-br from-cyan-950 via-slate-900 to-cyan-950',
          border: 'border-cyan-500/20',
          accent: 'text-cyan-300',
          accentBg: 'bg-cyan-500',
          badge: 'bg-cyan-500/20 text-cyan-300',
          price: 'text-cyan-300',
          icon: Ship,
        };
      case 'buceo':
        return {
          bg: 'bg-gradient-to-br from-teal-950 via-slate-900 to-teal-950',
          border: 'border-teal-500/20',
          accent: 'text-teal-300',
          accentBg: 'bg-teal-500',
          badge: 'bg-teal-500/20 text-teal-300',
          price: 'text-teal-300',
          icon: Sun,
        };
      case 'plancton':
        return {
          bg: 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950',
          border: 'border-indigo-500/20',
          accent: 'text-indigo-300',
          accentBg: 'bg-indigo-500',
          badge: 'bg-indigo-500/20 text-indigo-300',
          price: 'text-indigo-300',
          icon: Sparkles,
        };
      case 'cabalgata':
        return {
          bg: 'bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950',
          border: 'border-amber-500/20',
          accent: 'text-amber-300',
          accentBg: 'bg-amber-500',
          badge: 'bg-amber-500/20 text-amber-300',
          price: 'text-amber-300',
          icon: Heart,
        };
      case 'pesca-artesanal':
        return {
          bg: 'bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950',
          border: 'border-blue-500/20',
          accent: 'text-blue-300',
          accentBg: 'bg-blue-500',
          badge: 'bg-blue-500/20 text-blue-300',
          price: 'text-blue-300',
          icon: Star,
        };
      case 'fantasy-island':
        return {
          bg: 'bg-gradient-to-br from-purple-950 via-slate-900 to-purple-950',
          border: 'border-purple-500/20',
          accent: 'text-purple-300',
          accentBg: 'bg-purple-500',
          badge: 'bg-purple-500/20 text-purple-300',
          price: 'text-purple-300',
          icon: Moon,
        };
      default:
        return {
          bg: 'bg-stone-900',
          border: 'border-white/10',
          accent: 'text-yellow-400',
          accentBg: 'bg-yellow-500',
          badge: 'bg-yellow-400/20 text-yellow-400',
          price: 'text-yellow-400',
          icon: Star,
        };
    }
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] bg-stone-900 overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <VideoLoader
            isLoading={!supportChecked || (!videoPlaying && !videoError)}
            locale={locale}
            progress={loadingProgress}
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/activites/video-poster.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => {
              setVideoLoaded(true);
              setVideoPlaying(true);
            }}
            onError={() => setVideoError(true)}
            onProgress={() => {
              const video = videoRef.current;
              if (video && video.buffered.length > 0 && video.duration) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                setLoadingProgress((bufferedEnd / video.duration) * 100);
              }
            }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.05) saturate(1.1)' }}
          >
            <source src="/videos/plongee1-compressed.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-10" />
        <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4 fill-yellow-400" />
              {c.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {c.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 drop-shadow-md">{c.subtitle}</p>
            <p className="text-white/70 max-w-2xl mx-auto drop-shadow">{c.description}</p>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {c.activities.map((activity, i) => {
              const style = getActivityStyle(activity.id);
              const Icon = style.icon;
              const isNight = activity.id === 'plancton';

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative ${style.bg} rounded-3xl overflow-hidden shadow-2xl border ${style.border}`}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                  <div className={`absolute top-0 right-0 w-32 h-32 ${style.accentBg.replace('bg-', 'bg-')}/10 rounded-full blur-2xl`} />

                  {/* Activity image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                      priority={i < 2}
                      loading={i < 2 ? undefined : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.badge}`}>
                        {isNight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                        {activity.tag}
                      </span>
                      <div className={`w-14 h-14 ${style.accentBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-3xl font-bold text-white mb-2">{activity.title}</h2>
                    <p className="text-stone-300 mb-6 leading-relaxed flex-grow">{activity.desc}</p>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-sm text-stone-400 mb-6">
                      <Clock className="w-4 h-4" />
                      {activity.schedule}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {activity.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-stone-300">
                          <CheckCircle2 className={`w-4 h-4 ${style.accent}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-6 pt-6 border-t border-white/10">
                      <p className="text-stone-400 text-sm mb-1">{activity.unit}</p>
                      <p className={`text-3xl font-bold ${style.price}`}>{activity.price}</p>
                      <span className="text-stone-400 text-sm">COP</span>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://wa.me/573105270542"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-stone-900 rounded-xl font-bold transition-colors"
                    >
                      {activity.cta}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold text-stone-900 mb-12">{c.trust.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {c.trust.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{c.contact.title}</h2>
          <p className="text-stone-800 text-lg mb-8">{c.contact.desc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573105270542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {c.contact.cta}
            </a>
            <span className="text-stone-700 font-medium">{c.contact.or}</span>
            <a href="tel:+573105270542" className="text-stone-900 font-bold text-xl hover:underline">
              {c.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
