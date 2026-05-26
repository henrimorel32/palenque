'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { WavePattern, BlobShape } from './BackgroundPatterns';
import { YellowAccentLeft, YellowAccentRight, YellowBar, YellowDots } from './YellowAccents';

interface TestimonialsSectionProps {
  locale: Locale;
}

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = getTranslations(locale);

  const testimonials = [
    {
      image: '/images/commentaireHomepage/commentaire3-crop.jpeg',
      quote: {
        es: 'Y tú te preguntarás, pero dónde queda eso tan lindo. El lugar se llama Palenque y fue todo lo que soñábamos para celebrar nuestro aniversario y hasta más. Gracias Familia Palenque, nos sentimos muy felices de principio a fin. Una joya paradisíaca escondida en Sucre.',
        en: 'And you will ask yourself, where is that beautiful place. The place is called Palenque and it was everything we dreamed of to celebrate our anniversary and more. Thank you Palenque Family, we felt very happy from start to finish. A paradisiacal jewel hidden in Sucre.',
        fr: 'Et vous vous demanderez, où se trouve cet endroit si beau. L\'endroit s\'appelle Palenque et c\'était tout ce dont nous rêvions pour célébrer notre anniversaire et plus encore. Merci Famille Palenque, nous nous sommes sentis très heureux du début à la fin. Un joyau paradisiaque caché à Sucre.',
      },
      author: '@amazonicawild',
    },
    {
      image: '/images/commentaireHomepage/commentaire4-crop.jpeg',
      quote: {
        es: 'Mi hamaca especial. El relajo en este lugar, es otro cuento. Las playas desoladas son lo mío. Honestamente siempre intento ir a lugares tranquilos porque el tumulto y las playas turísticas me generan ansiedad.',
        en: 'My special hammock. The relaxation in this place is another story. Desolate beaches are my thing. Honestly I always try to go to quiet places because the hustle and tourist beaches give me anxiety.',
        fr: 'Mon hamac spécial. La détente dans cet endroit, c\'est une autre histoire. Les plages désertes sont mon truc. Honnêtement j\'essaie toujours d\'aller dans des endroits tranquilles parce que la cohue et les plages touristiques me donnent de l\'anxiété.',
      },
      author: '@amazonicawild',
    },
    {
      image: '/images/commentaireHomepage/commentaire5-crop.jpeg',
      quote: {
        es: 'Los mejores atardeceres están aquí 🤎. No miento.',
        en: 'The best sunsets are here 🤎. I\'m not lying.',
        fr: 'Les plus beaux couchers de soleil sont ici 🤎. Je ne mens pas.',
      },
      author: '@amazonicawild',
    },
    {
      image: '/images/commentaireHomepage/commentaire7-crop.jpeg',
      quote: {
        es: 'Todas las mañanas, despertando con esta vista y el sonido de las olas. No necesitas nada más ✨.',
        en: 'Every morning, waking up to this view and the sound of the waves. You don\'t need anything more ✨.',
        fr: 'Tous les matins, se réveiller avec cette vue et le bruit des vagues. Tu n\'as besoin de rien de plus ✨.',
      },
      author: '@amazonicawild',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Décors de fond */}
      <WavePattern className="text-stone-200 top-0" />
      <WavePattern className="text-stone-200 bottom-0 rotate-180" flip />
      <BlobShape color="bg-yellow-200" className="w-[500px] h-[500px] -top-60 -left-60" />
      <BlobShape color="bg-blue-200" className="w-[400px] h-[400px] -bottom-40 -right-40" />
      
      {/* Étoiles décoratives */}
      <div className="absolute top-20 right-20 text-[#5489a0]/40 text-6xl animate-pulse">✦</div>
      <div className="absolute bottom-40 left-20 text-[#5489a0]/30 text-4xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
      <div className="absolute top-1/2 right-10 text-[#5489a0]/20 text-3xl animate-pulse" style={{ animationDelay: '2s' }}>✦</div>
      
      {/* Accents jaunes */}
      <YellowAccentLeft className="opacity-30" />
      <YellowAccentRight className="opacity-20" />
      <YellowBar side="right" />
      <YellowDots className="top-40 left-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-[#5489a0] rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Instagram
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {t.home.testimonials.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-stone-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 flex flex-col"
            >
              {/* Image */}
              <div className="bg-stone-900 flex items-start justify-center p-4 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.image}
                  alt={`Instagram story ${testimonial.author}`}
                  className="h-auto max-h-[360px] w-auto rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-stone-600 leading-relaxed mb-4 italic text-sm flex-1">
                  &ldquo;{testimonial.quote[locale]}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-stone-500">Instagram</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-stone-100 rounded-br-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
