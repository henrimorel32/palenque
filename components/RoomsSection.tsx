'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Waves, Wind, Snowflake, Sun, Heart, ChevronRight,
  BedDouble, Wifi, Coffee, Droplets, Star, ArrowRight
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { DotsPattern, BlobShape, CirclesPattern } from './BackgroundPatterns';
import {
  YellowGradientTop, YellowCornerTL, YellowCornerBR, YellowBar, YellowDots
} from './YellowAccents';
import RoomImageCarousel from './RoomImageCarousel';
import RoomImageLightbox from './RoomImageLightbox';

interface RoomsSectionProps {
  locale: Locale;
}

export default function RoomsSection({ locale }: RoomsSectionProps) {
  const t = getTranslations(locale);

  const [lightboxRoomIdx, setLightboxRoomIdx] = useState<number | null>(null);
  const [lightboxImageIdx, setLightboxImageIdx] = useState(0);

  const rooms = [
    {
      key: 'apu',
      badge:
        locale === 'es'
          ? 'Nuestra Joya'
          : locale === 'en'
          ? 'Our Crown Jewel'
          : 'Notre Joyau',
      title:
        locale === 'es'
          ? 'Cabaña APU'
          : locale === 'en'
          ? 'APU Cabin'
          : 'Cabane APU',
      tagline:
        locale === 'es'
          ? 'Frente al mar, donde las olas cantan tu sueño'
          : locale === 'en'
          ? 'Beachfront, where the waves sing you to sleep'
          : 'Front de mer, où les vagues chantent votre sommeil',
      description:
        locale === 'es'
          ? 'Una cabaña privada a solo metros del océano, con terraza propia y hamaca bajo las estrellas.'
          : locale === 'en'
          ? 'A private cabin just meters from the ocean, with its own terrace and hammock under the stars.'
          : 'Une cabane privée à quelques mètres de l\'océan, avec sa propre terrasse et son hamac sous les étoiles.',
      price:
        locale === 'es'
          ? 'Desde $280.000'
          : locale === 'en'
          ? 'From $280,000'
          : 'À partir de 280 000 $',
      period:
        locale === 'es'
          ? 'por noche'
          : locale === 'en'
          ? 'per night'
          : 'par nuit',
      bestFor:
        locale === 'es'
          ? 'Luna de miel'
          : locale === 'en'
          ? 'Honeymoon'
          : 'Lune de miel',
      features:
        locale === 'es'
          ? ['Vista al mar', 'Terraza privada', 'Hamaca', 'A/C', 'Cama King']
          : locale === 'en'
          ? ['Ocean view', 'Private terrace', 'Hammock', 'A/C', 'King bed']
          : ['Vue mer', 'Terrasse privée', 'Hamac', 'A/C', 'Lit King'],
      amenities: [
        { icon: Waves, label: locale === 'es' ? 'Frente al mar' : locale === 'en' ? 'Beachfront' : 'Front de mer' },
        { icon: Sun, label: locale === 'es' ? 'Amanecer' : locale === 'en' ? 'Sunrise' : 'Lever soleil' },
        { icon: Wind, label: locale === 'es' ? 'Brisa' : locale === 'en' ? 'Breeze' : 'Brise' },
        { icon: Snowflake, label: 'A/C' },
      ],
      images: [
        '/images/apu/apu1.webp',
        '/images/apu/apu2.webp',
        '/images/apu/apu3.webp',
        '/images/apu/apu4.webp',
        '/images/apu/apu5.webp',
        '/images/apu/apu6.webp',
      ],
      color: 'from-amber-400 to-orange-500',
    },
    {
      key: 'deluxe',
      badge:
        locale === 'es'
          ? 'Elegancia'
          : locale === 'en'
          ? 'Elegance'
          : 'Élégance',
      title: (t.home.rooms as any).deluxe.title,
      tagline:
        locale === 'es'
          ? 'Vistas panorámicas que enamoran'
          : locale === 'en'
          ? 'Breathtaking panoramic views'
          : 'Vues panoramiques à couper le souffle',
      description:
        locale === 'es'
          ? 'Suite espaciosa con ventanales que enmarcan el océano como una pintura viviente.'
          : locale === 'en'
          ? 'Spacious suite with floor-to-ceiling windows framing the ocean like a living painting.'
          : 'Suite spacieuse avec des fenêtres du sol au plafond encadrant l\'océan comme un tableau vivant.',
      price:
        locale === 'es'
          ? 'Desde $180.000'
          : locale === 'en'
          ? 'From $180,000'
          : 'À partir de 180 000 $',
      period:
        locale === 'es'
          ? 'por noche'
          : locale === 'en'
          ? 'per night'
          : 'par nuit',
      bestFor:
        locale === 'es'
          ? 'Estancias largas'
          : locale === 'en'
          ? 'Extended stays'
          : 'Séjours longs',
      features:
        locale === 'es'
          ? ['Vista panorámica', 'Balcón', 'Sala de estar', 'Cama King', 'Tina']
          : locale === 'en'
          ? ['Panoramic view', 'Balcony', 'Living room', 'King bed', 'Bathtub']
          : ['Vue panoramique', 'Balcon', 'Salon', 'Lit King', 'Baignoire'],
      amenities: [
        { icon: Star, label: 'Smart TV' },
        { icon: Coffee, label: locale === 'es' ? 'Café' : locale === 'en' ? 'Coffee' : 'Café' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Droplets, label: locale === 'es' ? 'Tina' : locale === 'en' ? 'Tub' : 'Baignoire' },
      ],
      images: ['/images/chambre1..webp'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      key: 'bungalow',
      badge:
        locale === 'es'
          ? 'Villa Privada'
          : locale === 'en'
          ? 'Private Villa'
          : 'Villa Privée',
      title: (t.home.rooms as any).bungalow.title,
      tagline:
        locale === 'es'
          ? 'Tu refugio junto al mar'
          : locale === 'en'
          ? 'Your seaside refuge'
          : 'Votre refuge au bord de la mer',
      description:
        locale === 'es'
          ? 'Villa privada con terraza, hamaca, A/C y acceso directo a la playa.'
          : locale === 'en'
          ? 'Private villa with terrace, hammock, A/C and direct beach access.'
          : 'Villa privée avec terrasse, hamac, A/C et accès direct à la plage.',
      price:
        locale === 'es'
          ? 'Desde $250.000'
          : locale === 'en'
          ? 'From $250,000'
          : 'À partir de 250 000 $',
      period:
        locale === 'es'
          ? 'por noche'
          : locale === 'en'
          ? 'per night'
          : 'par nuit',
      bestFor:
        locale === 'es'
          ? 'Familias'
          : locale === 'en'
          ? 'Families'
          : 'Familles',
      features:
        locale === 'es'
          ? ['Acceso playa', 'Terraza', 'Hamaca', 'A/C', 'Mini bar']
          : locale === 'en'
          ? ['Beach access', 'Terrace', 'Hammock', 'A/C', 'Mini bar']
          : ['Accès plage', 'Terrasse', 'Hamac', 'A/C', 'Mini bar'],
      amenities: [
        { icon: Waves, label: locale === 'es' ? 'Frente al mar' : locale === 'en' ? 'Beachfront' : 'Front de mer' },
        { icon: Sun, label: locale === 'es' ? 'Amanecer' : locale === 'en' ? 'Sunrise' : 'Lever soleil' },
        { icon: BedDouble, label: 'King' },
        { icon: Coffee, label: locale === 'es' ? 'Desayuno' : locale === 'en' ? 'Breakfast' : 'Petit-déj.' },
      ],
      images: ['/images/plageChaises.webp'],
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const openLightbox = (roomIdx: number, imgIdx = 0) => {
    setLightboxRoomIdx(roomIdx);
    setLightboxImageIdx(imgIdx);
  };

  const closeLightbox = () => setLightboxRoomIdx(null);
  const goPrev = () => {
    if (lightboxRoomIdx === null) return;
    const imgs = rooms[lightboxRoomIdx].images;
    setLightboxImageIdx((i) => (i - 1 + imgs.length) % imgs.length);
  };
  const goNext = () => {
    if (lightboxRoomIdx === null) return;
    const imgs = rooms[lightboxRoomIdx].images;
    setLightboxImageIdx((i) => (i + 1) % imgs.length);
  };

  const currentRoom = lightboxRoomIdx !== null ? rooms[lightboxRoomIdx] : null;

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Décors de fond */}
      <DotsPattern className="text-stone-900" />
      <CirclesPattern />
      <BlobShape color="bg-yellow-400" className="w-[600px] h-[600px] -top-40 -right-40 opacity-10" />
      <BlobShape color="bg-blue-200" className="w-[400px] h-[400px] bottom-0 left-0" />
      <YellowGradientTop />
      <YellowCornerTL />
      <YellowCornerBR />
      <YellowBar side="right" />
      <YellowDots className="top-20 right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4 border border-yellow-200">
            <Star className="w-4 h-4" />
            {locale === 'es' ? 'Alojamiento' : locale === 'en' ? 'Accommodation' : 'Hébergement'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.home.rooms.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.rooms.subtitle}
          </p>
        </motion.div>

        {/* Cards — single row */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {rooms.map((room, index) => (
            <motion.div
              key={room.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <RoomImageCarousel
                  images={room.images}
                  alt={room.title}
                  interval={5000}
                  onClick={() => openLightbox(index)}
                  onImageChange={(idx) => setLightboxImageIdx(idx)}
                />

                {/* Floating price badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-5 left-5 bg-white rounded-2xl shadow-lg p-3 border-2 border-yellow-400 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${room.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      <span className="text-sm">💎</span>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm leading-tight">{room.price}</p>
                      <p className="text-[10px] text-stone-500">{room.period}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${room.color} text-white rounded-full text-xs font-medium mb-3 w-fit shadow-sm`}
                >
                  <Award className="w-3 h-3" />
                  {room.badge}
                </span>

                <h3 className="text-xl font-bold text-stone-900 mb-1">{room.title}</h3>
                <p className="text-yellow-600 text-xs font-medium mb-3">{room.tagline}</p>

                <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-stone-50 text-stone-600 text-xs font-medium rounded-full border border-stone-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/573147480855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-800 transition-colors w-full"
                >
                  {locale === 'es'
                    ? 'Reservar'
                    : locale === 'en'
                    ? 'Book'
                    : 'Réserver'}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href={
              locale === 'es'
                ? '/habitaciones'
                : locale === 'en'
                ? '/en/rooms'
                : '/fr/chambres'
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-full font-semibold hover:from-stone-800 hover:to-stone-700 transition-all duration-300 group shadow-lg shadow-stone-900/20"
          >
            {t.home.rooms.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox global */}
      {currentRoom && (
        <RoomImageLightbox
          isOpen={lightboxRoomIdx !== null}
          onClose={closeLightbox}
          images={currentRoom.images}
          currentIndex={lightboxImageIdx}
          onPrev={goPrev}
          onNext={goNext}
          roomName={currentRoom.title}
        />
      )}
    </section>
  );
}
