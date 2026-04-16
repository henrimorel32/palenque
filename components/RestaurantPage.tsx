'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UtensilsCrossed, Wine, Clock, Phone, ChefHat, Leaf,
  Star, ArrowRight, MapPin, CalendarCheck, Flame, Fish, Citrus, Coffee
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

function DishImage({ src, alt }: { src: string; alt: string }) {
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
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
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
            image: '/images/restaurant/plat1.webp',
            name: 'Pesca del Día',
            desc: 'Pescado fresco capturado por pescadores locales, acompañado de arroz con coco y patacón.',
            price: '$45.000 COP',
            tag: 'Más pedido',
          },
          {
            icon: Flame,
            image: '/images/restaurant/plat2.webp',
            name: 'Cazuela de Mariscos',
            desc: 'Langostinos, calamares, mejillones y pescado en una rica salsa caribeña con hierbas locales.',
            price: '$58.000 COP',
            tag: 'Para compartir',
          },
          {
            icon: Citrus,
            image: '/images/restaurant/plat3.webp',
            name: 'Ceviche Palenquero',
            desc: 'Ceviche tradicional con limón tahití, cilantro fresco, cebolla morada y maíz tostado.',
            price: '$32.000 COP',
            tag: 'Frescura',
          },
          {
            icon: Coffee,
            image: '/images/restaurant/cafe1.webp',
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
        phone: '+57 314 748 0855',
      },
      trust: {
        title: '¿Por qué comer con nosotros?',
        items: [
          { icon: Leaf, title: 'Ingredientes Locales', desc: 'Trabajamos directamente con pescadores y agricultores de Palenque.' },
          { icon: Star, title: 'Cocina de Origen', desc: 'Recetas auténticas que honran la tradición afrocolombiana.' },
          { icon: Coffee, title: 'Atención Cálida', desc: 'Un servicio cercano que te hace sentir como en casa.' },
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
        phone: '+57 314 748 0855',
      },
      trust: {
        title: 'Why dine with us?',
        items: [
          { icon: Leaf, title: 'Local Ingredients', desc: 'We work directly with fishermen and farmers from Palenque.' },
          { icon: Star, title: 'Farm-to-Table', desc: 'Authentic recipes that honor Afro-Colombian tradition.' },
          { icon: Coffee, title: 'Warm Service', desc: 'Friendly service that makes you feel right at home.' },
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
        phone: '+57 314 748 0855',
      },
      trust: {
        title: 'Pourquoi dîner chez nous ?',
        items: [
          { icon: Leaf, title: 'Ingrédients Locaux', desc: 'Nous travaillons directement avec les pêcheurs et agriculteurs de Palenque.' },
          { icon: Star, title: 'Cuisine d\'Origine', desc: 'Des recettes authentiques qui honorent la tradition afro-colombienne.' },
          { icon: Coffee, title: 'Service Chaleureux', desc: 'Un service attentionné qui vous fait vous sentir comme chez vous.' },
        ],
      },
    },
  };

  const c = content[locale] || content.es;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        <div className="absolute top-1/4 left-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <UtensilsCrossed className="w-4 h-4" />
              {c.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {c.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 mb-8">{c.subtitle}</p>
            <p className="text-stone-300 leading-relaxed text-lg">{c.intro}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
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
                  <DishImage src={item.image} alt={item.name} />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-yellow-400 text-stone-900 rounded-full text-xs font-bold shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.name}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{item.desc}</p>
                  <p className="text-xl font-bold text-stone-900">{item.price}</p>
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
                  <item.icon className="w-10 h-10 text-yellow-400" />
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
                  <CalendarCheck className="w-10 h-10 text-yellow-400 mb-4" />
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
                  <item.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.desc}</p>
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
              href="https://wa.me/573147480855"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {c.cta.button}
            </a>
            <span className="text-stone-700 font-medium">{c.cta.or}</span>
            <a href="tel:+573147480855" className="text-stone-900 font-bold text-xl hover:underline">
              {c.cta.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
