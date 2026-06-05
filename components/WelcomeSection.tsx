'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Heart } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { DotsPattern, BlobShape, CirclesPattern } from './BackgroundPatterns';
import { YellowGradientTop, YellowCornerTL, YellowCornerBR, YellowBar, YellowDots } from './YellowAccents';
import RoomImageCarousel from './RoomImageCarousel';
import RoomImageLightbox from './RoomImageLightbox';

interface WelcomeSectionProps {
  locale: Locale;
}

const paraisoImages = [
  '/images/paraiso/paraisso2..webp',
  '/images/paraiso/paraisso3.webp',
  '/images/paraiso/paraisso4.webp',
  '/images/paraiso/paraisso5.webp',
  '/images/paraiso/paraisso6.webp',
  '/images/paraiso/paraisso7.webp',
  '/images/paraiso/paraisso8.webp',
];

export default function WelcomeSection({ locale }: WelcomeSectionProps) {
  const t = getTranslations(locale);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const highlights = [
    { icon: MapPin, text: t.home.welcomeHighlights.location },
    { icon: Award, text: t.home.welcomeHighlights.ecoHotel },
    { icon: Heart, text: t.home.welcomeHighlights.sustainability },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-palenque-sand-light via-white to-palenque-sand-light/70 relative overflow-hidden">
      {/* Décors de fond */}
      <DotsPattern className="text-stone-900" />
      <CirclesPattern />
      <BlobShape color="bg-palenque-sand" className="w-[600px] h-[600px] -top-40 -right-40 opacity-10" />
      <BlobShape color="bg-palenque-turquoise" className="w-[400px] h-[400px] bottom-0 left-0" />
      
      {/* Accents jaunes subtils */}
      <YellowGradientTop />
      <YellowCornerTL />
      <YellowCornerBR />
      <YellowBar side="left" />
      <YellowDots className="top-20 right-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/75 text-palenque-blue rounded-full text-sm font-medium mb-6 border border-palenque-sand/40">
              <Award className="w-4 h-4" />
              {locale === 'es' ? 'Sobre Nosotros' : locale === 'en' ? 'About Us' : 'À Propos'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-palenque-night mb-6 leading-tight font-display">
              {t.home.welcomeTitle}
            </h2>
            <p className="text-lg text-palenque-earth leading-relaxed mb-6">
              {t.home.welcomeDescription}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-palenque-blue to-palenque-turquoise rounded-full mb-8" />

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/85 backdrop-blur-sm rounded-full shadow-sm border border-palenque-sand/30 hover:border-palenque-blue/40 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-palenque-blue" />
                  <span className="text-sm font-medium text-palenque-earth">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-palenque-earth/15 border-2 border-palenque-sand/35 relative">
              <RoomImageCarousel
                images={paraisoImages}
                alt={t.home.welcomeTitle}
                interval={5000}
                locale={locale}
                onClick={() => setLightboxOpen(true)}
                onImageChange={(idx) => setLightboxIndex(idx)}
              />
            </div>

            {/* Floating Badge avec bordure jaune */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-palenque-sand z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-palenque-sand to-palenque-warm-sand rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-palenque-night">4.9/5</p>
                  <p className="text-xs text-stone-500">
                    {locale === 'es' ? 'Basado en 200+ reseñas' : locale === 'en' ? 'Based on 200+ reviews' : 'Basé sur 200+ avis'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-palenque-sand/25 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      <RoomImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={paraisoImages}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + paraisoImages.length) % paraisoImages.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % paraisoImages.length)}
        roomName="Palenque Eco Hotel"
      />
    </section>
  );
}
