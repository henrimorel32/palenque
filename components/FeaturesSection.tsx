'use client';

import { motion } from 'framer-motion';
import { Waves, Leaf, BedDouble, UtensilsCrossed } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { GridPattern, BlobShape } from './BackgroundPatterns';
import { YellowTopLine, YellowAccentLeft, YellowAccentRight, YellowWaveLine } from './YellowAccents';

interface FeaturesSectionProps {
  locale: Locale;
}

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = getTranslations(locale);

  const features = [
    {
      icon: Waves,
      title: t.home.features.beach.title,
      description: t.home.features.beach.desc,
      color: 'from-blue-400 to-cyan-500',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: Leaf,
      title: t.home.features.eco.title,
      description: t.home.features.eco.desc,
      color: 'from-green-400 to-emerald-500',
      shadowColor: 'shadow-green-500/20',
    },
    {
      icon: BedDouble,
      title: t.home.features.comfort.title,
      description: t.home.features.comfort.desc,
      color: 'from-yellow-400 to-orange-500',
      shadowColor: 'shadow-yellow-500/20',
    },
    {
      icon: UtensilsCrossed,
      title: t.home.features.cuisine.title,
      description: t.home.features.cuisine.desc,
      color: 'from-orange-400 to-red-500',
      shadowColor: 'shadow-orange-500/20',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Décors de fond */}
      <GridPattern className="text-stone-900" />
      <BlobShape color="bg-yellow-400" className="w-[500px] h-[500px] -top-40 -left-40 opacity-10" />
      <BlobShape color="bg-blue-200" className="w-[400px] h-[400px] -bottom-40 -right-40" />
      
      {/* Accents jaunes */}
      <YellowTopLine />
      <YellowAccentLeft className="opacity-50" />
      <YellowAccentRight className="opacity-30" />
      <YellowWaveLine position="top" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-50 text-[#5489a0] rounded-full text-sm font-medium mb-4 border border-yellow-100">
            {t.home.features.title}
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 hover:-translate-y-1 hover:border-yellow-200"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${feature.shadowColor} shadow-lg`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Ligne jaune subtile sous chaque carte */}
              <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-yellow-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
