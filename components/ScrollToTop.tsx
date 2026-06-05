'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

interface ScrollToTopProps {
  locale: Locale;
}

const labels: Record<Locale, string> = {
  es: 'Volver arriba',
  en: 'Back to top',
  fr: 'Retour en haut',
};

export default function ScrollToTop({ locale }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label={labels[locale]}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 btn-icon hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palenque-sand focus:ring-offset-2"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
