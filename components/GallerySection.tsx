'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import {
  YellowCornerTL,
  YellowCornerBR,
  YellowBar,
  YellowTopLine,
} from './YellowAccents';
import { MeshGradient, CirclesPattern } from './BackgroundPatterns';

interface GallerySectionProps {
  locale: Locale;
}

const galleryImages = [
  {
    src: '/images/apu/apu1_opt.webp',
    alt: 'Cabaña APU',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/plageChaises_opt.webp',
    alt: 'Plage',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/paraiso/paraisso3_opt.webp',
    alt: 'Paraíso',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/usukulu/usukulu1_opt.webp',
    alt: 'Usukulu',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/cocktail_opt.webp',
    alt: 'Cocktail',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/vueAerienne1_opt.webp',
    alt: 'Vue aérienne',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/kolaso/kolaso1_opt.webp',
    alt: 'Kolaso',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/hamacDansEau_opt.webp',
    alt: 'Hamac',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/comida_opt.webp',
    alt: 'Gastronomía',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/makano/makano1_opt.webp',
    alt: 'Makano',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/plageSoleil_opt.webp',
    alt: 'Plage au soleil',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/abalenga/abalenga1_opt.webp',
    alt: 'Abalenga',
    span: 'col-span-2 row-span-1',
  },
];

export default function GallerySection({ locale }: GallerySectionProps) {
  const t = getTranslations(locale);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const goPrev = () =>
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const goNext = () =>
    setCurrentIndex((i) => (i + 1) % galleryImages.length);

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-white via-stone-50 to-white relative overflow-hidden">
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
            {locale === 'es' ? 'Fotos' : locale === 'en' ? 'Photos' : 'Photos'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {t.home.gallery.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.gallery.subtitle}
          </p>
        </motion.div>

        {/* Patchwork Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${item.span} relative group rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-yellow-300 transition-all duration-300 shadow-md hover:shadow-xl`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.span.includes('col-span-2') ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
                priority={index < 4}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold rounded-full shadow-sm">
                  {item.alt}
                </span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/90 text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-12"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
