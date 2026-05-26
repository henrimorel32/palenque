'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles, Compass, Droplets } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { generateLocalizedUrl } from '@/lib/i18n/routes';
import { YellowBar, YellowDots, YellowGlow } from './YellowAccents';

interface ServicesSectionProps {
  locale: Locale;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getTranslations(locale);

  const services = [
    {
      key: 'restaurant',
      icon: UtensilsCrossed,
      color: 'from-orange-400 to-red-500',
      shadowColor: 'shadow-orange-500/25',
      href: '/restaurante',
    },
    {
      key: 'directions',
      icon: Sparkles,
      color: 'from-purple-400 to-pink-500',
      shadowColor: 'shadow-purple-500/25',
      href: `/${locale === 'es' ? 'como-llegar' : locale === 'en' ? 'directions' : 'acces'}`,
    },
    {
      key: 'activities',
      icon: Compass,
      color: 'from-green-400 to-teal-500',
      shadowColor: 'shadow-green-500/25',
      href: '/actividades',
    },
    {
      key: 'pool',
      icon: Droplets,
      color: 'from-blue-400 to-cyan-500',
      shadowColor: 'shadow-blue-500/25',
      href: '#',
    },
  ];

  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Décors de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Cercles décoratifs lumineux */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Lignes décoratives */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Accents jaunes subtils sur fond sombre */}
      <YellowBar side="left" />
      <YellowDots className="top-40 right-20" />
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-yellow-400/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-[#5489a0] rounded-full text-sm font-medium mb-4 border border-white/10">
            <Sparkles className="w-4 h-4" />
            Experiencias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.home.services.title}
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            {t.home.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.key}
              href={generateLocalizedUrl(service.href, locale)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${service.shadowColor} shadow-lg relative z-10`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#5489a0] transition-colors relative z-10">
                {/* eslint-disable-next-line */}
                {(t.home.services as any)[service.key].title}
              </h3>
              <p className="text-stone-400 leading-relaxed relative z-10">
                {/* eslint-disable-next-line */}
                {(t.home.services as any)[service.key].desc}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-[#5489a0] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-sm font-medium">{locale === 'es' ? 'Ver más' : locale === 'en' ? 'See more' : 'Voir plus'}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
