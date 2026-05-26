'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UtensilsCrossed, Wine, Clock, Phone, ChefHat, Leaf,
  Star, MapPin, CalendarCheck, Flame, Fish, Citrus, Coffee,
  Quote
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

function DishImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-stone-300/80 flex items-center justify-center mb-3">
            <UtensilsCrossed className="w-8 h-8 text-stone-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-stone-500">Loading...</span>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

interface VideoHeroProps {
  locale: Locale;
}

function VideoHero({ locale }: VideoHeroProps) {
  const c = {
    es: {
      badge: 'Palenque Eco Hotel',
      title: 'Restaurante',
      subtitle: 'Un viaje gastronómico por el Caribe colombiano',
      intro: 'Nuestro restaurante celebra los sabores auténticos de la región con ingredientes frescos del mar, la tierra y el corazón de Palenque. Cada plato es una historia de tradición, sostenibilidad y pasión.',
    },
    en: {
      badge: 'Palenque Eco Hotel',
      title: 'Restaurant',
      subtitle: 'A culinary journey through the Colombian Caribbean',
      intro: 'Our restaurant celebrates the authentic flavors of the region with fresh ingredients from the sea, the land, and the heart of Palenque. Every dish is a story of tradition, sustainability, and passion.',
    },
    fr: {
      badge: 'Palenque Eco Hotel',
      title: 'Restaurant',
      subtitle: 'Un voyage culinaire à travers la Caraïbe colombienne',
      intro: 'Notre restaurant célèbre les saveurs authentiques de la région avec des ingrédients frais de la mer, de la terre et du cœur de Palenque. Chaque plat est une histoire de tradition, de durabilité et de passion.',
    },
  }[locale];

  return (
    <div className="absolute inset-0 z-0">
      {/* Image background */}
      <Image
        src="/images/Hero-Restaurant/bar.webp"
        alt="Restaurant Palenque"
        fill
        className="object-cover"
        sizes="100vw"
        priority
        unoptimized
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/40 to-stone-900/70" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute top-1/4 left-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px] pb-20 min-h-[70vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-[#5489a0] text-sm font-medium mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            {c.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {c.title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8">{c.subtitle}</p>
          <p className="text-stone-200 leading-relaxed text-lg">{c.intro}</p>
        </motion.div>
      </div>
    </div>
  );
}

interface RestaurantPageProps {
  locale: Locale;
}

export default function RestaurantPage({ locale }: RestaurantPageProps) {
  const content = {
    es: {
      title: 'Restaurante',
      subtitle: 'Un viaje gastronómico por el Caribe colombiano',
      badge: 'Palenque Eco Hotel',
      intro: 'Nuestro restaurante celebra los sabores auténticos de la región con ingredientes frescos del mar, la tierra y el corazón de Palenque. Cada plato es una historia de tradición, sostenibilidad y pasión.',
      highlights: {
        title: 'Especialidades de la Casa',
        items: [
          {
            icon: Fish,
            image: '/images/restaurant/plat1_optimized.webp',
            name: 'Pesca del Día',
            desc: 'Pescado fresco capturado por pescadores locales, acompañado de arroz con coco y patacón.',
            price: '$45.000 COP',
            tag: 'Más pedido',
          },
          {
            icon: Flame,
            image: '/images/restaurant/plat2_optimized.webp',
            name: 'Cazuela de Mariscos',
            desc: 'Langostinos, calamares, mejillones y pescado en una rica salsa caribeña con hierbas locales.',
            price: '$58.000 COP',
            tag: 'Para compartir',
          },
          {
            icon: Citrus,
            image: '/images/restaurant/plat3_optimized.webp',
            name: 'Ceviche Palenquero',
            desc: 'Ceviche tradicional con limón tahití, cilantro fresco, cebolla morada y maíz tostado.',
            price: '$32.000 COP',
            tag: 'Frescura',
          },
          {
            icon: Coffee,
            image: '/images/restaurant/cafe_optimized.webp',
            name: 'Café de la Región',
            desc: 'Café recién preparado de los Andes colombianos, con notas de chocolate y caramelo.',
            price: '$8.000 COP',
            tag: 'Esencial',
          },
        ],
      },
      experience: {
        title: 'Una Experiencia Sensorial',
        subtitle: 'Más que una comida, un momento inolvidable',
        items: [
          { icon: MapPin, title: 'Vista al Mar', desc: 'Disfruta tu cena con la brisa del Caribe y el sonido de las olas.' },
          { icon: Wine, title: 'Barra de Cocteles', desc: 'Cócteles artesanales con frutas tropicales y ron de la región.' },
          { icon: ChefHat, title: 'Chef Local', desc: 'Nuestro chef rescata recetas ancestrales de la cocina palenquera.' },
        ],
      },
      hours: {
        title: 'Horario de Atención',
        breakfast: { label: 'Desayuno', time: '7:00 AM – 10:00 AM' },
        lunch: { label: 'Almuerzo', time: '12:30 PM – 3:30 PM' },
        dinner: { label: 'Cena', time: '6:30 PM – 10:00 PM' },
        bar: { label: 'Bar', time: '10:00 AM – 11:00 PM' },
        note: 'Abierto todos los días. Reservas recomendadas para la cena.',
      },
      cta: {
        title: 'Reserva tu Mesa',
        subtitle: 'Déjanos preparar una experiencia gastronómica inolvidable para ti.',
        button: 'Reservar por WhatsApp',
        or: 'o llámanos al',
        phone: '+57 310 527 0542',
      },
      trust: {
        title: '¿Por qué comer con nosotros?',
        items: [
          { icon: Leaf, title: 'Ingredientes Locales', desc: 'Trabajamos directamente con pescadores y agricultores de la región' },
          { icon: Star, title: 'Cocina de Origen', desc: 'Recetas auténticas que honran la tradición afrocolombiana.' },
          { icon: Coffee, title: 'Atención Cálida', desc: 'Un servicio cercano que te hace sentir como en casa.' },
        ],
      },
      testimonials: {
        title: 'Nos clientes nos dicen',
        subtitle: 'Experiencias reales compartidas en Instagram',
        items: [
          {
            image: '/images/restaurant/commentaire1-crop.webp',
            quote: 'Una deliciaaaaaaaaa 🍌🍌🍌 Hago énfasis en la comida porque fue de otro mundo.',
            author: '@amazonicawild',
          },
          {
            image: '/images/restaurant/commentaire2-crop.webp',
            quote: 'No puedo explicar lo consentida que me sentí. ¡Desayuno incluido y la comida de mar MÁS DELICIOSA! Llegas acá y es real: no tienes que preocuparte por nada.',
            author: '@amazonicawild',
          },
        ],
      },
    },
    en: {
      title: 'Restaurant',
      subtitle: 'A culinary journey through the Colombian Caribbean',
      badge: 'Palenque Eco Hotel',
      intro: 'Our restaurant celebrates the authentic flavors of the region with fresh ingredients from the sea, the land, and the heart of Palenque. Every dish is a story of tradition, sustainability, and passion.',
      highlights: {
        title: 'House Specialties',
        items: [
          {
            icon: Fish,
            image: '/images/restaurant/plat1.webp',
            name: 'Catch of the Day',
            desc: 'Fresh fish caught by local fishermen, served with coconut rice and fried plantain.',
            price: '$45,000 COP',
            tag: 'Most popular',
          },
          {
            icon: Flame,
            image: '/images/restaurant/plat2.webp',
            name: 'Seafood Casserole',
            desc: 'Prawns, squid, mussels, and fish in a rich Caribbean sauce with local herbs.',
            price: '$58,000 COP',
            tag: 'For sharing',
          },
          {
            icon: Citrus,
            image: '/images/restaurant/plat3.webp',
            name: 'Palenque Ceviche',
            desc: 'Traditional ceviche with tahitian lime, fresh cilantro, red onion, and toasted corn.',
            price: '$32,000 COP',
            tag: 'Fresh',
          },
          {
            icon: Coffee,
            image: '/images/restaurant/cafe1.webp',
            name: 'Regional Coffee',
            desc: 'Freshly brewed coffee from the Colombian Andes, with notes of chocolate and caramel.',
            price: '$8,000 COP',
            tag: 'Essential',
          },
        ],
      },
      experience: {
        title: 'A Sensory Experience',
        subtitle: 'More than a meal, an unforgettable moment',
        items: [
          { icon: MapPin, title: 'Sea View', desc: 'Enjoy your dinner with the Caribbean breeze and the sound of the waves.' },
          { icon: Wine, title: 'Cocktail Bar', desc: 'Handcrafted cocktails with tropical fruits and local rum.' },
          { icon: ChefHat, title: 'Local Chef', desc: 'Our chef rescues ancestral recipes from Palenque cuisine.' },
        ],
      },
      hours: {
        title: 'Opening Hours',
        breakfast: { label: 'Breakfast', time: '7:00 AM – 10:00 AM' },
        lunch: { label: 'Lunch', time: '12:30 PM – 3:30 PM' },
        dinner: { label: 'Dinner', time: '6:30 PM – 10:00 PM' },
        bar: { label: 'Bar', time: '10:00 AM – 11:00 PM' },
        note: 'Open every day. Reservations recommended for dinner.',
      },
      cta: {
        title: 'Book Your Table',
        subtitle: 'Let us prepare an unforgettable dining experience for you.',
        button: 'Book via WhatsApp',
        or: 'or call us at',
        phone: '+57 310 527 0542',
      },
      trust: {
        title: 'Why dine with us?',
        items: [
          { icon: Leaf, title: 'Local Ingredients', desc: 'We work directly with fishermen and farmers from Palenque.' },
          { icon: Star, title: 'Farm-to-Table', desc: 'Authentic recipes that honor Afro-Colombian tradition.' },
          { icon: Coffee, title: 'Warm Service', desc: 'Friendly service that makes you feel right at home.' },
        ],
      },
      testimonials: {
        title: 'What our guests say',
        subtitle: 'Real experiences shared on Instagram',
        items: [
          {
            image: '/images/restaurant/commentaire1-crop.webp',
            quote: 'A deliciousssss treat 🍌🍌🍌 I emphasize the food because it was out of this world.',
            author: '@amazonicawild',
          },
          {
            image: '/images/restaurant/commentaire2-crop.webp',
            quote: "I can't explain how pampered I felt. Breakfast included and the MOST DELICIOUS seafood! You arrive here and it's true: you don't have to worry about a thing.",
            author: '@amazonicawild',
          },
        ],
      },
    },
    fr: {
      title: 'Restaurant',
      subtitle: 'Un voyage culinaire à travers la Caraïbe colombienne',
      badge: 'Palenque Eco Hotel',
      intro: 'Notre restaurant célèbre les saveurs authentiques de la région avec des ingrédients frais de la mer, de la terre et du cœur de Palenque. Chaque plat est une histoire de tradition, de durabilité et de passion.',
      highlights: {
        title: 'Spécialités de la Maison',
        items: [
          {
            icon: Fish,
            image: '/images/restaurant/plat1.webp',
            name: 'Poisson du Jour',
            desc: 'Poisson frais pêché par des pêcheurs locaux, accompagné de riz coco et de patacón.',
            price: '45 000 COP',
            tag: 'Le plus demandé',
          },
          {
            icon: Flame,
            image: '/images/restaurant/plat2.webp',
            name: 'Casserole de Fruits de Mer',
            desc: 'Crevettes, calamars, moules et poisson dans une riche sauce caraïbe aux herbes locales.',
            price: '58 000 COP',
            tag: 'À partager',
          },
          {
            icon: Citrus,
            image: '/images/restaurant/plat3.webp',
            name: 'Ceviche Palenquero',
            desc: 'Ceviche traditionnel au citron tahitien, coriandre fraîche, oignon rouge et maïs grillé.',
            price: '32 000 COP',
            tag: 'Fraîcheur',
          },
          {
            icon: Coffee,
            image: '/images/restaurant/cafe1.webp',
            name: 'Café Régional',
            desc: 'Café fraîchement préparé des Andes colombiennes, aux notes de chocolat et de caramel.',
            price: '8 000 COP',
            tag: 'Essentiel',
          },
        ],
      },
      experience: {
        title: 'Une Expérience Sensorielle',
        subtitle: 'Plus qu\'un repas, un moment inoubliable',
        items: [
          { icon: MapPin, title: 'Vue sur la Mer', desc: 'Profitez de votre dîner avec la brise des Caraïbes et le bruit des vagues.' },
          { icon: Wine, title: 'Bar à Cocktails', desc: 'Cocktails artisanaux aux fruits tropicaux et au rhum local.' },
          { icon: ChefHat, title: 'Chef Local', desc: 'Notre chef sauvegarde les recettes ancestrales de la cuisine palenquera.' },
        ],
      },
      hours: {
        title: 'Horaires d\'Ouverture',
        breakfast: { label: 'Petit-déjeuner', time: '7h00 – 10h00' },
        lunch: { label: 'Déjeuner', time: '12h30 – 15h30' },
        dinner: { label: 'Dîner', time: '18h30 – 22h00' },
        bar: { label: 'Bar', time: '10h00 – 23h00' },
        note: 'Ouvert tous les jours. Réservation recommandée pour le dîner.',
      },
      cta: {
        title: 'Réservez votre Table',
        subtitle: 'Laissez-nous préparer une expérience gastronomique inoubliable pour vous.',
        button: 'Réserver par WhatsApp',
        or: 'ou appelez-nous au',
        phone: '+57 310 527 0542',
      },
      trust: {
        title: 'Pourquoi dîner chez nous ?',
        items: [
          { icon: Leaf, title: 'Ingrédients Locaux', desc: 'Nous travaillons directement avec les pêcheurs et agriculteurs de Palenque.' },
          { icon: Star, title: 'Cuisine d\'Origine', desc: 'Des recettes authentiques qui honorent la tradition afro-colombienne.' },
          { icon: Coffee, title: 'Service Chaleureux', desc: 'Un service attentionné qui vous fait vous sentir comme chez vous.' },
        ],
      },
      testimonials: {
        title: 'Ce que nos clients disent',
        subtitle: 'Expériences réelles partagées sur Instagram',
        items: [
          {
            image: '/images/restaurant/commentaire1-crop.webp',
            quote: 'Un délicieuuuuux moment 🍌🍌🍌 J\'insiste sur la nourriture parce que c\'était hors du commun.',
            author: '@amazonicawild',
          },
          {
            image: '/images/restaurant/commentaire2-crop.webp',
            quote: "Je ne peux pas expliquer à quel point je me suis sentie choyée. Petit-déjeuner inclus et la nourriture de la mer la PLUS DÉLICIEUSE ! Vous arrivez ici et c'est vrai : vous n'avez rien à craindre.",
            author: '@amazonicawild',
          },
        ],
      },
    },
  };

  const c = content[locale] || content.es;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-stone-900 overflow-hidden">
        {/* Video background */}
        <VideoHero locale={locale} />

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-4">{c.highlights.title}</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {c.highlights.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-yellow-200 transition-all hover:shadow-xl"
              >
                <div className="relative">
                  <DishImage src={item.image} alt={item.name} priority />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-yellow-400 text-stone-900 rounded-full text-xs font-bold shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-4">{c.experience.title}</h2>
            <p className="text-xl text-stone-600">{c.experience.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-stone-900 to-stone-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-[#5489a0]" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 text-white">
                <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                  <Clock className="w-7 h-7 text-stone-900" />
                </div>
                <h3 className="text-3xl font-bold mb-8">{c.hours.title}</h3>
                <div className="space-y-5">
                  {[
                    c.hours.breakfast,
                    c.hours.lunch,
                    c.hours.dinner,
                    c.hours.bar,
                  ].map((h, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-stone-300 text-lg">{h.label}</span>
                      <span className="text-white font-semibold text-lg">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-stone-700 to-stone-800 p-10 md:p-12 flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <CalendarCheck className="w-10 h-10 text-[#5489a0] mb-4" />
                  <p className="text-white text-lg font-medium mb-2">{c.hours.note}</p>
                  <p className="text-stone-400 text-sm">
                    {locale === 'es' ? 'También ofrecemos menús vegetarianos y veganos bajo solicitud.' :
                     locale === 'en' ? 'We also offer vegetarian and vegan menus upon request.' :
                     'Nous proposons également des menus végétariens et végétaliens sur demande.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
                  <item.icon className="w-8 h-8 text-[#5489a0]" />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-4">{c.testimonials.title}</h2>
            <p className="text-xl text-stone-600">{c.testimonials.subtitle}</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {c.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl border border-stone-100 shadow-lg overflow-hidden flex flex-col"
              >
                <div className="bg-stone-900 flex items-start justify-center p-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`Instagram story ${item.author}`}
                    className="h-auto max-h-[480px] w-auto rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <Quote className="w-8 h-8 text-[#5489a0] mb-3" />
                  <p className="text-stone-700 italic text-lg leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{item.author}</p>
                      <p className="text-sm text-stone-500">Instagram</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{c.cta.title}</h2>
          <p className="text-stone-800 text-lg mb-8">{c.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573105270542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {c.cta.button}
            </a>
            <span className="text-stone-700 font-medium">{c.cta.or}</span>
            <a href="tel:+573105270542" className="text-stone-900 font-bold text-xl hover:underline">
              {c.cta.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
