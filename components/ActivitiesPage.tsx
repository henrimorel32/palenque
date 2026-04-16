'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Ship, Trees, Moon, Sun, Clock, CheckCircle2,
  ArrowRight, Phone, Star, Shield, Wallet, Heart
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import VideoLoader from './VideoLoader';

interface ActivitiesPageProps {
  locale: Locale;
}

export default function ActivitiesPage({ locale }: ActivitiesPageProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }
    const timeout = setTimeout(() => setVideoLoaded(true), 3000);
    return () => clearTimeout(timeout);
  }, []);
  const content = {
    es: {
      badge: 'Rincón del Mar',
      title: 'Actividades & Excursiones',
      subtitle: 'Descubre la magia del Caribe colombiano',
      description: 'Explora experiencias únicas diseñadas para conectar con la naturaleza, la cultura local y la belleza del archipiélago de San Bernardo.',
      activities: [
        {
          id: 'plancton',
          title: 'Plancton Tour',
          tag: 'Experiencia nocturna',
          desc: 'Avistamiento de aves al atardecer en Isla Pájaros y bioluminiscencia en el archipiélago de San Bernardo.',
          schedule: 'Todos los días: 5:30 - 8:00 pm',
          price: '$50.000',
          unit: 'por persona',
          features: ['Avistamiento de aves', 'Nado con bioluminiscencia', 'Experiencia nocturna única'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'islands',
          title: 'Islands Tour',
          tag: 'Tour de islas',
          desc: 'Paseo en lancha por las islas del archipiélago de San Bernardo.',
          schedule: 'Todos los días: 8:30 am - 2:30 pm',
          price: '$70.000',
          unit: 'por persona',
          features: ['Isla Tintinpán', 'Isla Palma', 'Isla Mucura'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Reservar ahora',
        },
        {
          id: 'manglar',
          title: 'Manglar Ecotour',
          tag: 'Ecoturismo',
          desc: 'Paseo en canoa por el manglar y caminata por el bosque tropical.',
          schedule: 'Todos los días: 8 - 10 am / 4 - 6 pm',
          price: '$40.000',
          unit: 'por persona',
          features: ['Avistamiento de aves', 'Osos perezosos', 'Caminata guiada'],
          image: '/images/activites/hamac.webp',
          cta: 'Reservar ahora',
        },
      ],
      trust: {
        title: '¿Por qué reservar con nosotros?',
        items: [
          { icon: Shield, title: 'Seguro incluido', desc: 'Todas nuestras excursiones cuentan con seguro de viaje' },
          { icon: Star, title: 'Guía local experto', desc: 'Conoce cada rincón con guías bilingües certificados' },
          { icon: Wallet, title: 'Mejor precio directo', desc: 'Sin intermediarios. Precio justo para viajeros' },
        ],
      },
      contact: {
        title: '¿Listo para la aventura?',
        desc: 'Reserva tu excursión favorita con nosotros. Te ayudamos a planificar cada detalle de tu experiencia.',
        cta: 'Contactar por WhatsApp',
        or: 'o llámanos al',
        phone: '+57 314 748 0855',
      },
    },
    en: {
      badge: 'Rincón del Mar',
      title: 'Activities & Excursions',
      subtitle: 'Discover the magic of the Colombian Caribbean',
      description: 'Explore unique experiences designed to connect with nature, local culture, and the beauty of the San Bernardo archipelago.',
      activities: [
        {
          id: 'plancton',
          title: 'Plancton Tour',
          tag: 'Night experience',
          desc: 'Bird watching at sunset on Bird Island and bioluminescence in the San Bernardo archipelago.',
          schedule: 'Daily: 5:30 - 8:00 pm',
          price: '$50,000',
          unit: 'per person',
          features: ['Bird watching', 'Bioluminescence swim', 'Unique night experience'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Book now',
        },
        {
          id: 'islands',
          title: 'Islands Tour',
          tag: 'Island hopping',
          desc: 'Boat ride through the islands of the San Bernardo archipelago.',
          schedule: 'Daily: 8:30 am - 2:30 pm',
          price: '$70,000',
          unit: 'per person',
          features: ['Tintinpán Island', 'Palma Island', 'Mucura Island'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Book now',
        },
        {
          id: 'manglar',
          title: 'Manglar Ecotour',
          tag: 'Ecotourism',
          desc: 'Canoe ride through the mangrove and walk through the tropical forest.',
          schedule: 'Daily: 8 - 10 am / 4 - 6 pm',
          price: '$40,000',
          unit: 'per person',
          features: ['Bird watching', 'Sloths', 'Guided walk'],
          image: '/images/activites/hamac.webp',
          cta: 'Book now',
        },
      ],
      trust: {
        title: 'Why book with us?',
        items: [
          { icon: Shield, title: 'Insurance included', desc: 'All our excursions include travel insurance' },
          { icon: Star, title: 'Expert local guide', desc: 'Know every corner with certified bilingual guides' },
          { icon: Wallet, title: 'Best direct price', desc: 'No intermediaries. Fair price for travelers' },
        ],
      },
      contact: {
        title: 'Ready for adventure?',
        desc: 'Book your favorite excursion with us. We help you plan every detail of your experience.',
        cta: 'Contact via WhatsApp',
        or: 'or call us at',
        phone: '+57 314 748 0855',
      },
    },
    fr: {
      badge: 'Rincón del Mar',
      title: 'Activités & Excursions',
      subtitle: 'Découvrez la magie de la Caraïbe colombienne',
      description: 'Explorez des expériences uniques conçues pour vous connecter avec la nature, la culture locale et la beauté de l\'archipel de San Bernardo.',
      activities: [
        {
          id: 'plancton',
          title: 'Plancton Tour',
          tag: 'Expérience nocturne',
          desc: 'Observation des oiseaux au coucher du soleil sur l\'île des Oiseaux et bioluminescence dans l\'archipel de San Bernardo.',
          schedule: 'Tous les jours : 17h30 - 20h',
          price: '50 000',
          unit: 'par personne',
          features: ['Observation des oiseaux', 'Baignade bioluminescente', 'Expérience nocturne unique'],
          image: '/images/activites/couchesoleil.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'islands',
          title: 'Islands Tour',
          tag: 'Tour des îles',
          desc: 'Promenade en bateau dans les îles de l\'archipel de San Bernardo.',
          schedule: 'Tous les jours : 8h30 - 14h30',
          price: '70 000',
          unit: 'par personne',
          features: ['Île Tintinpán', 'Île Palma', 'Île Mucura'],
          image: '/images/activites/jeuBallon.webp',
          cta: 'Réserver maintenant',
        },
        {
          id: 'manglar',
          title: 'Manglar Ecotour',
          tag: 'Écotourisme',
          desc: 'Promenade en pirogue dans la mangrove et randonnée dans la forêt tropicale.',
          schedule: 'Tous les jours : 8h - 10h / 16h - 18h',
          price: '40 000',
          unit: 'par personne',
          features: ['Observation des oiseaux', 'Paresseux', 'Randonnée guidée'],
          image: '/images/activites/hamac.webp',
          cta: 'Réserver maintenant',
        },
      ],
      trust: {
        title: 'Pourquoi réserver avec nous ?',
        items: [
          { icon: Shield, title: 'Assurance incluse', desc: 'Toutes nos excursions incluent une assurance voyage' },
          { icon: Star, title: 'Guide local expert', desc: 'Connaissez chaque coin avec des guides bilingues certifiés' },
          { icon: Wallet, title: 'Meilleur prix direct', desc: 'Sans intermédiaires. Prix juste pour les voyageurs' },
        ],
      },
      contact: {
        title: 'Prêt pour l\'aventure ?',
        desc: 'Réservez votre excursion favorite avec nous. Nous vous aidons à planifier chaque détail de votre expérience.',
        cta: 'Contacter par WhatsApp',
        or: 'ou appelez-nous au',
        phone: '+57 314 748 0855',
      },
    },
  };

  const c = content[locale] || content.es;

  const getActivityStyle = (id: string) => {
    switch (id) {
      case 'plancton':
        return {
          bg: 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950',
          border: 'border-indigo-500/20',
          accent: 'text-indigo-300',
          accentBg: 'bg-indigo-500',
          badge: 'bg-indigo-500/20 text-indigo-300',
          price: 'text-indigo-300',
          icon: Sparkles,
        };
      case 'islands':
        return {
          bg: 'bg-gradient-to-br from-cyan-950 via-slate-900 to-cyan-950',
          border: 'border-cyan-500/20',
          accent: 'text-cyan-300',
          accentBg: 'bg-cyan-500',
          badge: 'bg-cyan-500/20 text-cyan-300',
          price: 'text-cyan-300',
          icon: Ship,
        };
      case 'manglar':
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950',
          border: 'border-emerald-500/20',
          accent: 'text-emerald-300',
          accentBg: 'bg-emerald-500',
          badge: 'bg-emerald-500/20 text-emerald-300',
          price: 'text-emerald-300',
          icon: Trees,
        };
      default:
        return {
          bg: 'bg-stone-900',
          border: 'border-white/10',
          accent: 'text-yellow-400',
          accentBg: 'bg-yellow-500',
          badge: 'bg-yellow-400/20 text-yellow-400',
          price: 'text-yellow-400',
          icon: Star,
        };
    }
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] bg-stone-900 overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <VideoLoader isLoading={!videoLoaded} locale={locale} />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.05) saturate(1.1)' }}
          >
            <source src="/videos/plongee1.MP4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-10" />
        <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4 fill-yellow-400" />
              {c.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {c.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 drop-shadow-md">{c.subtitle}</p>
            <p className="text-white/70 max-w-2xl mx-auto drop-shadow">{c.description}</p>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {c.activities.map((activity, i) => {
              const style = getActivityStyle(activity.id);
              const Icon = style.icon;
              const isNight = activity.id === 'plancton';

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative ${style.bg} rounded-3xl overflow-hidden shadow-2xl border ${style.border}`}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                  <div className={`absolute top-0 right-0 w-32 h-32 ${style.accentBg.replace('bg-', 'bg-')}/10 rounded-full blur-2xl`} />

                  {/* Activity image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.badge}`}>
                        {isNight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                        {activity.tag}
                      </span>
                      <div className={`w-14 h-14 ${style.accentBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-3xl font-bold text-white mb-2">{activity.title}</h2>
                    <p className="text-stone-300 mb-6 leading-relaxed flex-grow">{activity.desc}</p>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-sm text-stone-400 mb-6">
                      <Clock className="w-4 h-4" />
                      {activity.schedule}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {activity.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-stone-300">
                          <CheckCircle2 className={`w-4 h-4 ${style.accent}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-6 pt-6 border-t border-white/10">
                      <p className="text-stone-400 text-sm mb-1">{activity.unit}</p>
                      <p className={`text-3xl font-bold ${style.price}`}>{activity.price}</p>
                      <span className="text-stone-400 text-sm">COP</span>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://wa.me/573147480855"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-stone-900 rounded-xl font-bold transition-colors"
                    >
                      {activity.cta}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold text-stone-900 mb-12">{c.trust.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {c.trust.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{c.contact.title}</h2>
          <p className="text-stone-800 text-lg mb-8">{c.contact.desc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573147480855"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {c.contact.cta}
            </a>
            <span className="text-stone-700 font-medium">{c.contact.or}</span>
            <a href="tel:+573147480855" className="text-stone-900 font-bold text-xl hover:underline">
              {c.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
