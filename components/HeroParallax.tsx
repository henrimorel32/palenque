// components/HeroParallax.tsx
'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Locale } from '@/lib/i18n/translations';
import { getTranslations } from '@/lib/i18n/utils';
import { usePathname } from 'next/navigation';
import VideoLoader from './VideoLoader';

interface HeroParallaxProps {
  locale?: Locale;
}

export default function HeroParallax({ locale: propLocale }: HeroParallaxProps) {
  const pathname = usePathname();
  
  // Détecte la locale
  const locale = useMemo((): Locale => {
    if (propLocale) return propLocale;
    if (!pathname) return 'es';
    const firstSegment = pathname.split('/')[1];
    if (firstSegment === 'en' || firstSegment === 'fr') {
      return firstSegment;
    }
    return 'es';
  }, [pathname, propLocale]);
  
  const t = getTranslations(locale);
  
  const images = [
    { url: '/images/plage.webp', alt: 'Plage paradisiaque' },
    { url: '/images/plageSoleil.webp', alt: 'Coucher de soleil océan' },
    { url: '/images/plageChaises.webp', alt: 'Eaux turquoise' },
    { url: '/images/hamacDansEau.webp', alt: 'Bungalow sur l\'eau' },
    { url: '/images/vueAerienne1.webp', alt: 'Vue aérienne de la propriété' },
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [videoSupported, setVideoSupported] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Détecte si on peut utiliser la vidéo webm
  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
    
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const video = document.createElement('video');
    const supportsWebm = video.canPlayType('video/webm; codecs="vp8, vorbis"') !== '' ||
                         video.canPlayType('video/webm; codecs="vp9"') !== '' ||
                         video.canPlayType('video/webm') !== '';
    
    setVideoSupported(!isMobile && !isSafari && supportsWebm);
  }, []);

  // Timeout de secours pour le loader vidéo
  useEffect(() => {
    if (!videoSupported) return;
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
      return;
    }
    const timeout = setTimeout(() => setVideoLoaded(true), 2500);
    return () => clearTimeout(timeout);
  }, [videoSupported]);

  // Calcule l'index de l'image basé sur le scroll progress
  const numImages = images.length;
  
  // Utilise useMotionValueEvent pour une mise à jour plus fluide
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * numImages),
      numImages - 1
    );
    
    if (newIndex !== currentImage) {
      setCurrentImage(newIndex);
    }
    
    // Détecte si l'utilisateur est en train de scroller
    setIsScrolling(true);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  });

  // Transformations fluides
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  
  // Content translations
  const content = {
    es: {
      badge: 'Palenque Eco Hotel',
      line1: 'La evasión',
      line2Highlight: 'comienza Aquí',
      subtitle: 'Descubre un santuario donde el tiempo se detiene y cada ola canta tu libertad',
      cta: 'Ver habitaciones',
      scroll: 'Scroll'
    },
    en: {
      badge: 'Palenque Eco Hotel',
      line1: 'Escape',
      line2Highlight: 'Begins Here',
      subtitle: 'Discover a sanctuary where time stops and every wave sings your freedom',
      cta: 'View Rooms',
      scroll: 'Scroll'
    },
    fr: {
      badge: 'Palenque Eco Hotel',
      line1: 'L\'évasion',
      line2Highlight: 'commence Ici',
      subtitle: 'Découvrez un sanctuaire où le temps s\'arrête et chaque vague chante votre liberté',
      cta: 'Voir les chambres',
      scroll: 'Défiler'
    }
  };
  
  const c = content[locale];

  return (
    <div ref={containerRef} className="relative">
      {/* Hauteur du scroll - plus courte pour un scroll plus réactif */}
      <div className="h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-900">
          
          {/* Vidéo de fond */}
          {videoSupported && (
            <motion.div
              className="absolute inset-0 w-full h-full z-20"
              initial={{ opacity: 1 }}
              animate={{ opacity: videoVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ pointerEvents: videoVisible ? 'auto' : 'none' }}
            >
              <VideoLoader isLoading={!videoLoaded} locale={locale} />
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setVideoVisible(false)}
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(1.05) saturate(1.1)' }}
              >
                <source src="/images/outputHome.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </motion.div>
          )}

          {/* Images avec transition crossfade */}
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.05
              }}
              transition={{ 
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" }
              }}
              style={{ y: currentImage === index ? y : 0 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${img.url})`,
                  filter: 'brightness(1.05) saturate(1.1)'
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </motion.div>
          ))}

          {/* Progress bar verticale */}
          {(!videoSupported || !videoVisible) && (
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-1 h-48 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-yellow-400 rounded-full"
              style={{ 
                height: `${((currentImage + 1) / numImages) * 100}%`,
                transition: 'height 0.3s ease-out'
              }}
            />
          </div>
          )}

          {/* Navigation latérale numérotée */}
          {(!videoSupported || !videoVisible) && (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  const targetScroll = (index / (numImages - 1)) * 0.9;
                  const container = containerRef.current;
                  if (container) {
                    const scrollTarget = targetScroll * (container.scrollHeight - window.innerHeight);
                    window.scrollTo({ 
                      top: scrollTarget,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group relative flex items-center justify-center w-8 h-8"
              >
                <span className={`text-xs font-medium transition-all duration-300 ${
                  currentImage === index ? 'text-yellow-400 scale-125' : 'text-white/50 group-hover:text-white/80'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
          )}

          {/* Contenu principal */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ opacity: textOpacity, y: textY }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {c.badge}
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-4xl border border-white/10 shadow-2xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {c.line1}
                <br />
                <span className="text-yellow-300">
                  {c.line2Highlight}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-light leading-relaxed">
                {c.subtitle}
              </p>
              
              <a
                href="#rooms"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-semibold transition-all backdrop-blur-sm border border-white/30 hover:scale-105"
              >
                {c.cta}
              </a>
            </motion.div>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
            style={{ opacity: textOpacity }}
            animate={{ y: isScrolling ? 0 : [0, 8, 0] }}
            transition={{ 
              y: { repeat: isScrolling ? 0 : Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <span className="text-xs text-white/60 uppercase tracking-[0.3em] font-medium">{c.scroll}</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>

          {/* Compteur */}
          {(!videoSupported || !videoVisible) && (
          <div className="absolute bottom-8 left-8 flex items-center gap-2 text-white/70 font-mono text-sm">
            <span className="text-yellow-400 font-bold text-xl">
              {String(currentImage + 1).padStart(2, '0')}
            </span>
            <span className="text-white/30">/</span>
            <span>{String(numImages).padStart(2, '0')}</span>
          </div>
          )}
        </div>
      </div>

      {/* Section suivante */}
      <div id="rooms" className="relative bg-white z-10">
        <div className="min-h-screen flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
              {locale === 'es' ? 'Bienvenido' : locale === 'en' ? 'Welcome' : 'Bienvenue'}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Palenque Eco Hotel
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {locale === 'es' 
                ? 'Un refugio sostenible donde la naturaleza caribeña se encuentra con el lujo consciente. Cada amanecer trae una nueva oportunidad de conectar con lo esencial.'
                : locale === 'en'
                ? 'A sustainable refuge where Caribbean nature meets conscious luxury. Each dawn brings a new opportunity to connect with what matters.'
                : 'Un refuge durable où la nature caraïbe rencontre le luxe conscient. Chaque aube apporte une nouvelle opportunité de se connecter à l\'essentiel.'
              }
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
