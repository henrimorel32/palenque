'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Locale } from '@/lib/i18n/translations';

interface VideoLoaderProps {
  isLoading: boolean;
  locale: Locale;
}

const messages: Record<Locale, { main: string; sub: string }> = {
  es: { main: 'Cargando experiencia', sub: 'Por favor espera un momento' },
  en: { main: 'Loading experience', sub: 'Please wait a moment' },
  fr: { main: 'Chargement de l\'expérience', sub: 'Veuillez patienter un instant' },
};

export default function VideoLoader({ isLoading, locale }: VideoLoaderProps) {
  const t = messages[locale] || messages.es;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-stone-900/80 backdrop-blur-sm"
        >
          {/* Spinner animation */}
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-yellow-400/20"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-300"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            </motion.div>
          </div>

          <motion.h3
            className="text-white text-xl font-semibold mb-2 tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            {t.main}
          </motion.h3>
          <p className="text-stone-400 text-sm">{t.sub}</p>

          {/* Bouncing dots */}
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
