'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { generateLocalizedUrl } from '@/lib/i18n/routes';
import { YellowBar } from './YellowAccents';

interface CTASectionProps {
  locale: Locale;
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = getTranslations(locale);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient avec animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      {/* Accents jaunes subtils */}
      <YellowBar side="right" />
      <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-400 text-sm font-medium mb-6 border border-white/10"
          >
            <Sparkles className="w-4 h-4" />
            {locale === 'es' ? 'Reserva hoy' : locale === 'en' ? 'Book today' : 'Réservez aujourd\'hui'}
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.home.cta.title}
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
            {t.home.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book Button */}
            <motion.a
              href={generateLocalizedUrl('/contacto', locale)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-stone-900 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all shadow-xl shadow-yellow-500/25 group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t.home.cta.button}
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/573147480855"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 group"
            >
              <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              {t.home.cta.contact}
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 text-stone-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>{locale === 'es' ? 'Reserva segura' : locale === 'en' ? 'Secure booking' : 'Réservation sécurisée'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>{locale === 'es' ? 'Cancelación gratuita' : locale === 'en' ? 'Free cancellation' : 'Annulation gratuite'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>{locale === 'es' ? 'Mejor precio' : locale === 'en' ? 'Best price' : 'Meilleur prix'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
