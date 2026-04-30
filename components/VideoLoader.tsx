'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Locale } from '@/lib/i18n/translations';

interface VideoLoaderProps {
  isLoading: boolean;
  locale: Locale;
  progress?: number; // 0-100
}

const messages: Record<Locale, { main: string; sub: string; slow: string }> = {
  es: { main: 'Cargando experiencia', sub: 'Preparando tu aventura...', slow: 'Esto está tardando más de lo usual...' },
  en: { main: 'Loading experience', sub: 'Preparing your adventure...', slow: 'This is taking longer than usual...' },
  fr: { main: 'Chargement de l\'expérience', sub: 'Préparation de votre aventure...', slow: 'Cela prend plus de temps que prévu...' },
};

export default function VideoLoader({ isLoading, locale, progress }: VideoLoaderProps) {
  const t = messages[locale] || messages.es;
  const showProgress = progress !== undefined && progress >= 0;
  const displayProgress = Math.min(100, Math.max(0, Math.round(progress || 0)));

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-md"
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
          <p className="text-stone-400 text-sm mb-6">{t.sub}</p>

          {/* Progress bar */}
          <div className="w-64 max-w-[80vw] mb-2">
            <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
          <div className="flex justify-between w-64 max-w-[80vw] text-xs text-stone-500 mb-8">
            <span>{showProgress ? `${displayProgress}%` : ''}</span>
            <span>{showProgress && displayProgress < 100 ? t.slow : ''}</span>
          </div>

          {/* Bouncing dots */}
          <div className="flex gap-2">
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
