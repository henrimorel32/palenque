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

const images = [
  { url: '/images/plage.webp', alt: 'Plage paradisiaque' },
  { url: '/images/plageSoleil.webp', alt: 'Coucher de soleil océan' },
  { url: '/images/hamacDansEau.webp', alt: 'Bungalow sur l\'eau' },
  { url: '/images/vueAerienne1.webp', alt: 'Vue aérienne de la propriété' },
];

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
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [videoSupported, setVideoSupported] = useState(false);
  const [supportChecked, setSupportChecked] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
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
    
    const supported = !isMobile && !isSafari && supportsWebm;
    setVideoSupported(supported);
    setSupportChecked(true);
    if (!supported) {
      setVideoLoaded(true);
    }
  }, []);

  // Timeout de secours pour le loader vidéo (12s pour les connexions lentes)
  useEffect(() => {
    if (!videoSupported) return;
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
      return;
    }
    const timeout = setTimeout(() => {
      setVideoLoaded(true);
      setVideoPlaying(true);
    }, 12000);
    return () => clearTimeout(timeout);
  }, [videoSupported]);

  // Barre de progression via onTimeUpdate (évite RAF + setState à 60fps)
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoProgress(video.currentTime / video.duration);
    }
  };

  // Suivi du buffering pour la barre de progression du loader
  const handleProgress = () => {
    const video = videoRef.current;
    if (video && video.buffered.length > 0 && video.duration) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const progress = (bufferedEnd / video.duration) * 100;
      setLoadingProgress(progress);
    }
  };

  // Confirme que la vidéo joue vraiment
  const handlePlaying = () => {
    setVideoLoaded(true);
    setVideoPlaying(true);
  };

  // Préchargement léger des images
  useEffect(() => {
    if (typeof window === 'undefined') return;
    images.forEach((img) => {
      const image = new Image();
      image.src = img.url;
    });
  }, []);

  // Détermine si les images doivent être visibles
  const showImages = !videoSupported || videoError || (videoLoaded && !videoVisible);

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

    // Fait disparaître la vidéo très vite au scroll pour ne pas bloquer l'expérience
    const shouldShowVideo = latest < 0.02;
    if (shouldShowVideo !== videoVisible) {
      setVideoVisible(shouldShowVideo);
    }
  });

  // Transformations fluides
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Texte invisible sur la vidéo, visible sur la 1ère image, puis s'efface
  const textOpacity = useTransform(scrollYProgress, [0, 0.06, 0.15, 0.25], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.06, 0.15, 0.25], [40, 0, 0, -80]);
  
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
      {/* Hauteur du scroll - plus longue pour laisser du temps à chaque image */}
      <div className="h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-900 z-20">
          {/* Loader global — visible immédiatement dès l'arrivée */}
          <VideoLoader 
            isLoading={!supportChecked || (videoSupported && !videoPlaying && !videoError)} 
            locale={locale} 
            progress={loadingProgress}
          />
          
          {/* Vidéo de fond */}
          {videoSupported && (
            <motion.div
              className="absolute inset-0 w-full h-full z-20"
              initial={{ opacity: 1 }}
              animate={{ opacity: videoVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ pointerEvents: videoVisible ? 'auto' : 'none' }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => {
                  // Scroll doux vers la première image du parallax
                  const container = containerRef.current;
                  if (container && scrollYProgress.get() < 0.05) {
                    const scrollTarget = 0.1 * (container.scrollHeight - window.innerHeight);
                    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                  }
                }}
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
                onPlaying={handlePlaying}
                onError={() => setVideoError(true)}
                onTimeUpdate={handleTimeUpdate}
                onProgress={handleProgress}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(1.05) saturate(1.1)' }}
              >
                <source src="/videos/light/video-palenque-light.mp4" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

              {/* Barre de progression vidéo */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10 z-30 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"
                  style={{ width: `${videoProgress * 100}%`, transition: 'width 0.05s linear' }}
                />
              </div>

              {/* Indicateur scroll flottant à 85% */}
              {videoProgress > 0.85 && videoVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                >
                  <span className="text-xs text-white/80 uppercase tracking-widest font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    {locale === 'es' ? 'Scroll para descubrir' : locale === 'en' ? 'Scroll to discover' : 'Défilez pour découvrir'}
                  </span>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  >
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Images avec transition crossfade */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${showImages ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
              style={{ y: currentImage === index ? y : 0, willChange: 'transform, opacity' }}
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
          </div>

          {/* Progress bar verticale */}
          {showImages && (
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
          {showImages && (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = containerRef.current;
                  if (container) {
                    const targetScroll = (index / (numImages - 1));
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
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30"
            style={{ opacity: textOpacity, y: textY, willChange: 'transform, opacity' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: (videoLoaded || !videoSupported) ? 1 : 0, y: (videoLoaded || !videoSupported) ? 0 : -20 }}
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
              animate={{ opacity: (videoLoaded || !videoSupported) ? 1 : 0, y: (videoLoaded || !videoSupported) ? 0 : 30 }}
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
          {showImages && (
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
