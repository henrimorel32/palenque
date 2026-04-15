'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Wind, Waves } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { generateLocalizedUrl } from '@/lib/i18n/routes';
import { DiagonalStripes, BlobShape } from './BackgroundPatterns';
import { YellowBar, YellowCornerTL, YellowCornerBR, YellowTopLine, YellowDots } from './YellowAccents';

interface RoomsSectionProps {
  locale: Locale;
}

export default function RoomsSection({ locale }: RoomsSectionProps) {
  const t = getTranslations(locale);

  const rooms = [
    {
      key: 'standard',
      image: '/images/room-standard.webp',
      icon: Users,
      features: ['Queen Size', 'Ventilador', 'WiFi'],
    },
    {
      key: 'deluxe',
      image: '/images/room-deluxe.webp',
      icon: Wind,
      features: ['King Size', 'A/C', 'Balcón'],
    },
    {
      key: 'bungalow',
      image: '/images/room-bungalow.webp',
      icon: Waves,
      features: ['Villa Privada', 'Hamaca', 'Frente al Mar'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Décors de fond */}
      <DiagonalStripes className="text-stone-900" />
      <BlobShape color="bg-purple-200" className="w-[600px] h-[600px] top-1/2 -translate-y-1/2 -right-60" />
      <BlobShape color="bg-pink-200" className="w-[400px] h-[400px] bottom-0 left-0" />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-yellow-200/50 rounded-full" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-4 border-purple-200/50 rotate-45" />
      
      {/* Accents jaunes subtils */}
      <YellowTopLine />
      <YellowCornerTL />
      <YellowCornerBR />
      <YellowBar side="right" />
      <YellowDots className="bottom-20 left-20" />
      
      {/* Bande jaune subtile horizontale */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
      
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
            <Wind className="w-4 h-4" />
            Alojamiento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {t.home.rooms.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.rooms.subtitle}
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 hover:-translate-y-2 hover:border-yellow-200"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 animate-pulse" />
                <room.icon className="w-16 h-16 text-stone-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-stone-100">
                  <span className="text-stone-900 font-bold text-sm">
                    {/* eslint-disable-next-line */}
                    {(t.home.rooms as any)[room.key].price}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {/* eslint-disable-next-line */}
                  {(t.home.rooms as any)[room.key].title}
                </h3>
                <p className="text-stone-600 mb-4">
                  {/* eslint-disable-next-line */}
                  {(t.home.rooms as any)[room.key].desc}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-stone-50 text-stone-600 text-xs font-medium rounded-full border border-stone-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={`/${locale === 'es' ? 'habitaciones' : locale === 'en' ? 'en/rooms' : 'fr/chambres'}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-full font-semibold hover:from-stone-800 hover:to-stone-700 transition-all duration-300 group shadow-lg shadow-stone-900/20"
          >
            {t.home.rooms.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
