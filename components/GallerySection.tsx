'use client';

import { motion } from 'framer-motion';
import { Camera, Images } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { YellowCornerTL, YellowCornerBR, YellowBar, YellowTopLine } from './YellowAccents';
import { MeshGradient, CirclesPattern } from './BackgroundPatterns';

interface GallerySectionProps {
  locale: Locale;
}

export default function GallerySection({ locale }: GallerySectionProps) {
  const t = getTranslations(locale);

  // Placeholder images - à remplacer par les vraies photos
  const galleryItems = [
    { id: 1, label: 'Playa', span: 'col-span-2 row-span-2', color: 'from-blue-400 to-cyan-400' },
    { id: 2, label: 'Habitación', span: 'col-span-1 row-span-1', color: 'from-yellow-400 to-orange-400' },
    { id: 3, label: 'Restaurante', span: 'col-span-1 row-span-1', color: 'from-green-400 to-emerald-400' },
    { id: 4, label: 'Piscina', span: 'col-span-1 row-span-2', color: 'from-purple-400 to-pink-400' },
    { id: 5, label: 'Spa', span: 'col-span-1 row-span-1', color: 'from-rose-400 to-red-400' },
    { id: 6, label: 'Atardecer', span: 'col-span-2 row-span-1', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-stone-50 to-white relative overflow-hidden">
      {/* Décors de fond */}
      <MeshGradient />
      <CirclesPattern />
      
      {/* Formes décoratives */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl" />
      
      {/* Accents jaunes */}
      <YellowTopLine />
      <YellowCornerTL />
      <YellowCornerBR />
      <YellowBar side="left" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Images className="w-4 h-4" />
            Fotos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {t.home.gallery.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.gallery.subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span} relative group rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-yellow-300 transition-colors`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8" />
                </div>
                <span className="text-lg font-semibold drop-shadow-lg">{item.label}</span>
              </div>

              {/* Coming Soon Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium text-stone-600">
                  {locale === 'es' ? 'Próximamente' : locale === 'en' ? 'Coming soon' : 'Bientôt'}
                </span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Upload Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-stone-400 text-sm mt-8 bg-white/50 backdrop-blur-sm inline-block px-6 py-3 rounded-full mx-auto block w-fit"
        >
          {locale === 'es' 
            ? 'Las fotos reales se añadirán próximamente'
            : locale === 'en'
            ? 'Real photos will be added soon'
            : 'Les vraies photos seront ajoutées bientôt'}
        </motion.p>
      </div>
    </section>
  );
}
