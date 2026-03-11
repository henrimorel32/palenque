// components/HeroParallax.jsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    alt: 'Plage paradisiaque',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80',
    alt: 'Coucher de soleil océan',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    alt: 'Eaux turquoise',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    alt: 'Palmiers et plage',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
    alt: 'Bungalow sur l\'eau',
    position: 'center'
  }
];

export default function HeroParallax() {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transition entre les 5 images selon le scroll (0-20%, 20-40%, etc.)
  const imageIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, 1, 2, 3, 4]);
  
  // Opacité du texte qui s'estompe
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  useEffect(() => {
    const unsubscribe = imageIndex.on('change', (latest) => {
      setCurrentImage(Math.round(latest));
    });
    return () => unsubscribe();
  }, [imageIndex]);

  return (
    <div className="relative">
      {/* Section sticky qui occupe 500vh pour permettre le scroll */}
      <div className="h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Images en arrière-plan avec transition fluide */}
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.1
              }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms]"
                style={{ 
                  backgroundImage: `url(${img.url})`,
                  backgroundPosition: img.position
                }}
              />
              {/* Overlay gradient pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            </motion.div>
          ))}

          {/* Contenu texte fixe au centre */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              L'Évasion Commence
              <br />
              <span className="text-cyan-300">Ici</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 font-light"
            >
              Découvrez un sanctuaire où le temps s'arrête et où chaque vague chante votre liberté
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full text-lg font-semibold transition-colors shadow-lg shadow-cyan-500/30"
            >
              Réserver mon séjour
            </motion.button>

            {/* Indicateur de scroll */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-sm text-white/70 uppercase tracking-widest">Découvrir</span>
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Indicateur de progression des images */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentImage === index ? 'bg-white h-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Compteur d'images */}
          <div className="absolute bottom-8 right-8 text-white/60 font-mono text-sm">
            {String(currentImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Contenu suivant qui arrive par-dessus */}
      <div className="relative bg-white z-10">
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue à l'Hôtel [Nom]
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Votre séjour exceptionnel commence ici. Découvrez nos chambres, nos services et laissez-vous porter par l'océan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}