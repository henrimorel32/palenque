// components/HeroParallax.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from 'framer-motion';

const images = [
  {
    url: '/images/plage.webp',
    alt: 'Plage paradisiaque',
    location: 'Palenque Eco Hotel'
  },
  {
    url: '/images/plageSoleil.webp',
    alt: 'Coucher de soleil océan',
    location: 'Palenque Eco Hotel'
  },
  {
    url: '/images/plageChaises.webp',
    alt: 'Eaux turquoise',
    location: 'Palenque Eco Hotel'
  },
  {
    url: '/images/hamacDansEau.webp',
    alt: 'Bungalow sur l\'eau',
    location: 'Palenque Eco Hotel'
  },
  {
    url: '/images/vueAerienne1.webp',
    alt: 'Vue aérienne de la propriété',
    location: 'Palenque Eco Hotel'
  }
];

export default function HeroParallax() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Valeurs fluides pour les animations
  const imageIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, 1, 2, 3, 4]);
  const smoothImageIndex = useSpring(imageIndex, { stiffness: 100, damping: 30 });
  
  // Parallaxe multi-couches
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Texte qui s'envole
  const textOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.12], [0, -100]);
  const textScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.8]);

  useEffect(() => {
    const unsubscribe = smoothImageIndex.on('change', (latest) => {
      setCurrentImage(Math.round(latest));
    });
    return () => unsubscribe();
  }, [smoothImageIndex]);

  return (
    <div ref={containerRef} className="relative">
      <div className="h-[600vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-900">
          
          {/* COUCHE 1: Images de fond avec Ken Burns effect */}
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.15
              }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 8, ease: "linear" }
              }}
              style={{ y: y1 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${img.url})`,
                  filter: 'brightness(1.1) saturate(1.1)'
                }}
              />
              {/* Vignette dynamique */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </motion.div>
          ))}

          {/* COUCHE 2: Particules flottantes (simulation) */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: [null, "-10%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                style={{ y: y2 }}
              />
            ))}
          </div>

          {/* COUCHE 3: Vague animée en bas */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
            style={{ y: y2 }}
          >
            <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d">
              <motion.path
                d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                fill="white"
                animate={{ d: [
                  "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",
                  "M0,60 C360,0 1080,120 1440,60 L1440,120 L0,120 Z",
                  "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                ]}}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* CONTENU PRINCIPAL */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ opacity: textOpacity, y: textY, scale: textScale }}
          >
            {/* Badge location animé */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {images[currentImage]?.location}
              </span>
            </motion.div>

            {/* Carte principale avec effet glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-4xl border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.3)]"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ rotate: rotate }}
              >
                La evasión
                <br />
                <motion.span 
                  className="text-yellow-300 inline-block"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(253,224,71,0.5)",
                      "0 0 40px rgba(253,224,71,0.8)",
                      "0 0 20px rgba(253,224,71,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  comienza Aquí
                </motion.span>
              </motion.h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 font-light leading-relaxed">
                Descubre un santuario donde el tiempo se detiene y cada ola canta tu libertad
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234,179,8,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full text-lg font-bold transition-all shadow-lg"
                >
                  Reservar ahora
                </motion.button> */}
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-semibold transition-all backdrop-blur-sm border border-white/30"
                >
                  Ver habitaciones
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Indicateur de scroll amélioré */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-xs text-white/60 uppercase tracking-[0.3em] font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>

          {/* Navigation latérale avec preview */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
            {images.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  // Scroll vers la section correspondante
                  const targetScroll = (index / 4) * 0.8;
                  window.scrollTo({ 
                    top: targetScroll * document.body.scrollHeight * 0.6,
                    behavior: 'smooth'
                  });
                }}
                className="group relative flex items-center gap-3"
                whileHover={{ x: -5 }}
              >
                <span className={`text-sm font-medium transition-colors ${
                  currentImage === index ? 'text-white' : 'text-white/50'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={`w-12 h-1 rounded-full transition-all ${
                  currentImage === index ? 'bg-yellow-400 w-16' : 'bg-white/30 group-hover:bg-white/50'
                }`} />
                
                {/* Preview au hover */}
                <div className="absolute right-full mr-4 w-24 h-16 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.url})` }}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Compteur avec animation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white/80 font-mono text-sm">
            <span className="text-yellow-400 font-bold text-lg">
              {String(currentImage + 1).padStart(2, '0')}
            </span>
            <span className="text-white/40">/</span>
            <span>{String(images.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* SECTION SUIVANTE avec transition fluide */}
      <div className="relative bg-white z-10">
        <div className="min-h-screen flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Bienvenido
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Palenque Eco Hotel
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Un refugio sostenible donde la naturaleza caribeña se encuentra con el lujo consciente. 
              Cada amanecer trae una nueva oportunidad de conectar con lo esencial.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}