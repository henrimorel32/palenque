'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Waves, Sun, Wind, Snowflake,
  Heart, ChevronRight, ArrowLeft, BedDouble
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import RoomImageCarousel from '@/components/RoomImageCarousel';
import RoomImageLightbox from '@/components/RoomImageLightbox';

interface ApuRoomPageProps {
  locale: Locale;
}

const content = {
  es: {
    back: 'Volver a habitaciones',
    badge: 'Nuestra joya de la corona',
    title: 'Cabaña APU',
    tagline: 'Frente al mar, donde las olas cantan tu sueño',
    description:
      'Nuestra joya de la corona. Una cabaña privada a solo metros del océano, con terraza propia y hamaca bajo las estrellas. Despierta con el sonido de las olas y el aroma del mar.',
    price: 'Desde $280.000',
    period: 'por noche',
    bestFor: 'Luna de miel o escapada romántica',
    features: [
      'Vista directa al mar',
      'Terraza privada',
      'Hamaca',
      'Aire acondicionado',
      'Cama King',
      'Baño exterior tipo spa',
      'Mini bar',
    ],
    amenities: [
      { icon: Waves, label: 'Frente al mar' },
      { icon: Sun, label: 'Amanecer privado' },
      { icon: Wind, label: 'Brisa natural' },
      { icon: Snowflake, label: 'A/C' },
    ],
    cta: 'Reservar esta habitación',
  },
  en: {
    back: 'Back to rooms',
    badge: 'Our crown jewel',
    title: 'APU Cabin',
    tagline: 'Beachfront, where the waves sing you to sleep',
    description:
      'Our crown jewel. A private cabin just meters from the ocean, with its own terrace and hammock under the stars. Wake up to the sound of the waves and the scent of the sea.',
    price: 'From $280,000',
    period: 'per night',
    bestFor: 'Honeymoon or romantic getaway',
    features: [
      'Direct ocean view',
      'Private terrace',
      'Hammock',
      'Air conditioning',
      'King bed',
      'Outdoor spa-style bathroom',
      'Mini bar',
    ],
    amenities: [
      { icon: Waves, label: 'Beachfront' },
      { icon: Sun, label: 'Private sunrise' },
      { icon: Wind, label: 'Natural breeze' },
      { icon: Snowflake, label: 'A/C' },
    ],
    cta: 'Book this room',
  },
  fr: {
    back: 'Retour aux chambres',
    badge: 'Notre joyau',
    title: 'Cabane APU',
    tagline: 'Front de mer, où les vagues chantent votre sommeil',
    description:
      'Notre joyau. Une cabane privée à quelques mètres de l\'océan, avec sa propre terrasse et son hamac sous les étoiles. Réveillez-vous au son des vagues et à l\'odeur de la mer.',
    price: 'À partir de 280 000 $',
    period: 'par nuit',
    bestFor: 'Lune de miel ou escapade romantique',
    features: [
      'Vue directe sur la mer',
      'Terrasse privée',
      'Hamac',
      'Climatisation',
      'Lit King',
      'Salle de bain extérieure spa',
      'Mini bar',
    ],
    amenities: [
      { icon: Waves, label: 'Front de mer' },
      { icon: Sun, label: 'Lever de soleil privé' },
      { icon: Wind, label: 'Brise naturelle' },
      { icon: Snowflake, label: 'A/C' },
    ],
    cta: 'Réserver cette chambre',
  },
};

const images = [
  '/images/apu/apu1.webp',
  '/images/apu/apu2.webp',
  '/images/apu/apu3.webp',
  '/images/apu/apu4.webp',
  '/images/apu/apu5.webp',
  '/images/apu/apu6.webp',
];

export default function ApuRoomPage({ locale }: ApuRoomPageProps) {
  const c = content[locale];
  const backHref =
    locale === 'es'
      ? '/habitaciones'
      : locale === 'en'
      ? '/en/rooms'
      : '/fr/chambres';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero / Carousel */}
      <section className="relative w-full bg-stone-900">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] max-h-[70vh]">
          <RoomImageCarousel
            images={images}
            alt={c.title}
            onClick={openLightbox}
            onImageChange={(idx) => setLightboxIndex(idx)}
          />
        </div>

        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900/80 to-transparent pointer-events-none" />

        {/* Back link */}
        <div className="absolute top-6 left-6 z-20">
          <a
            href={backHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </a>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-6 left-6 z-20 text-white">
          <span className="inline-block px-3 py-1 bg-yellow-500/90 text-yellow-950 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
            {c.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">{c.title}</h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-yellow-600 font-medium mb-2">{c.tagline}</p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">{c.description}</p>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-stone-600 mb-8 border border-stone-200 shadow-sm">
                <Heart className="w-4 h-4 text-yellow-500" />
                {c.bestFor}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {c.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-600">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-stone-100 shadow-sm">
                      <amenity.icon className="w-5 h-5 text-stone-500" />
                    </div>
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {c.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white text-stone-600 text-sm rounded-full border border-stone-200 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="https://wa.me/573147480855"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20"
              >
                {c.cta}
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right: price card + thumbnail grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Price card */}
              <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="text-4xl font-bold text-stone-900">{c.price}</p>
                </div>
                <p className="text-stone-500 mb-6">{c.period}</p>

                <div className="space-y-3 mb-8">
                  {c.features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-600">
                      <BedDouble className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/573147480855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3.5 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
                >
                  {c.cta}
                </a>
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-3 gap-3">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setLightboxIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="relative aspect-square rounded-2xl overflow-hidden group shadow-md border border-stone-100"
                  >
                    <img
                      src={src}
                      alt={`${c.title} ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <RoomImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={images}
        currentIndex={lightboxIndex}
        onPrev={goPrev}
        onNext={goNext}
        roomName={c.title}
      />
    </div>
  );
}
