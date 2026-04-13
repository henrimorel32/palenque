'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle } from 'lucide-react';
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
    { key: 'review1', rating: 5 },
    { key: 'review2', rating: 5 },
    { key: 'review3', rating: 5 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Décors de fond */}
      <WavePattern className="text-stone-200 top-0" />
      <WavePattern className="text-stone-200 bottom-0 rotate-180" flip />
      <BlobShape color="bg-yellow-200" className="w-[500px] h-[500px] -top-60 -left-60" />
      <BlobShape color="bg-blue-200" className="w-[400px] h-[400px] -bottom-40 -right-40" />
      
      {/* Étoiles décoratives */}
      <div className="absolute top-20 right-20 text-yellow-400/40 text-6xl animate-pulse">✦</div>
      <div className="absolute bottom-40 left-20 text-yellow-400/30 text-4xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
      <div className="absolute top-1/2 right-10 text-yellow-400/20 text-3xl animate-pulse" style={{ animationDelay: '2s' }}>✦</div>
      
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {t.home.testimonials.title}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.home.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 leading-relaxed mb-6 italic">
                {/* eslint-disable-next-line */}
                &ldquo;{(t.home.testimonials as any)[testimonial.key].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {/* eslint-disable-next-line */}
                  {(t.home.testimonials as any)[testimonial.key].author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-stone-900">
                    {/* eslint-disable-next-line */}
                    {(t.home.testimonials as any)[testimonial.key].author}
                  </p>
                  <p className="text-sm text-stone-500">
                    {/* eslint-disable-next-line */}
                    {(t.home.testimonials as any)[testimonial.key].from}
                  </p>
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
