'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

interface RoomImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
  onClick?: () => void;
  onImageChange?: (index: number) => void;
  locale?: Locale;
}

const loadingText: Record<Locale, string> = {
  es: 'Cargando imagen...',
  en: 'Loading image...',
  fr: 'Chargement de l\'image...',
};

export default function RoomImageCarousel({
  images,
  alt,
  interval = 4000,
  onClick,
  onImageChange,
  locale = 'es',
}: RoomImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Stabilise onImageChange pour éviter les boucles infinies dans next/useEffect
  const onImageChangeRef = useRef(onImageChange);
  useEffect(() => {
    onImageChangeRef.current = onImageChange;
  }, [onImageChange]);

  const next = useCallback(() => {
    setCurrent((prev) => {
      const nextIdx = (prev + 1) % images.length;
      onImageChangeRef.current?.(nextIdx);
      return nextIdx;
    });
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, images.length]);

  useEffect(() => {
    setIsLoading(true);
  }, [current]);

  if (images.length === 0) return null;

  return (
    <div
      className={`relative w-full h-full ${onClick ? 'cursor-pointer group' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Ver galería de fotos' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick();
            }
          : undefined
      }
    >
      {/* Loader style hero */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-800 z-10">
          <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center mb-3 animate-pulse">
            <Camera className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-stone-400">{loadingText[locale] || loadingText.es}</span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${alt} - ${current + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={current === 0}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hover zoom icon */}
      {onClick && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <svg
            className="w-10 h-10 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </div>
      )}

      {/* Pagination dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
                onImageChangeRef.current?.(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-white w-4'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Voir photo ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
