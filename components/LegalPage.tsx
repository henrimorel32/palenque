'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/translations';
import { termsContent, privacyContent, LegalSection } from '@/lib/i18n/legal';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  locale: Locale;
}

const titles: Record<string, Record<Locale, string>> = {
  terms: {
    es: 'Términos y Condiciones',
    en: 'Terms and Conditions',
    fr: 'Conditions Générales',
  },
  privacy: {
    es: 'Política de Privacidad',
    en: 'Privacy Policy',
    fr: 'Politique de Confidentialité',
  },
};

const backLabels: Record<Locale, string> = {
  es: 'Volver al inicio',
  en: 'Back to home',
  fr: 'Retour à l\'accueil',
};

const lastUpdated: Record<Locale, string> = {
  es: 'Última actualización: mayo 2025',
  en: 'Last updated: May 2025',
  fr: 'Dernière mise à jour : mai 2025',
};

export default function LegalPage({ type, locale }: LegalPageProps) {
  const sections: LegalSection[] = useMemo(() => {
    return type === 'terms' ? termsContent[locale] : privacyContent[locale];
  }, [type, locale]);

  const homePath = locale === 'es' ? '/' : `/${locale}`;

  return (
    <main className="min-h-screen bg-stone-50 pt-[140px] md:pt-[160px] pb-24">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href={homePath}
            className="inline-flex items-center gap-2 text-stone-400 hover:text-[#5489a0] transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabels[locale]}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
              {type === 'terms' ? (
                <Scale className="w-6 h-6 text-[#5489a0]" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-[#5489a0]" />
              )}
            </div>
            <span className="text-sm font-medium text-stone-400 uppercase tracking-wider">
              Palenque Eco Hostel
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {titles[type][locale]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-400 text-sm"
          >
            {lastUpdated[locale]}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={idx > 0 ? 'mt-10 pt-10 border-t border-stone-100' : ''}
            >
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-stone-600 leading-relaxed ${
                      paragraph.startsWith('•') ? 'pl-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-stone-100 text-center">
            <p className="text-sm text-stone-400">
              {locale === 'es'
                ? 'Para cualquier duda, contacta con nosotros a info@palenquerincondelmar.co'
                : locale === 'en'
                ? 'For any questions, contact us at info@palenquerincondelmar.co'
                : 'Pour toute question, contactez-nous à info@palenquerincondelmar.co'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
