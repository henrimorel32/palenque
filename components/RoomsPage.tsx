'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Moon, Star, Wind, Waves, Wifi, Coffee, Droplets, Sun,
  BedDouble, Bath, Tv, Snowflake, ChevronRight, CheckCircle2,
  Phone, Calendar, Sparkles, Heart, Compass, CloudMoon
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import VideoLoader from '@/components/VideoLoader';
import RoomImageCarousel from '@/components/RoomImageCarousel';
import RoomImageLightbox from '@/components/RoomImageLightbox';
import Image from 'next/image';

interface RoomsPageProps {
  locale: Locale;
}

const content = {
    es: {
      hero: {
        badge: 'Descanso Perfecto',
        title: 'Nuestras Habitaciones',
        subtitle: 'Santuarios de paz donde cada detalle está pensado para tu descanso',
        cta: 'Reservar ahora'
      },
      intro: {
        title: 'Dormir bien es el mejor regalo',
        desc: 'Cada habitación ha sido diseñada como un refugio íntimo, con materiales naturales, iluminación cálida y vistas que invitan al reposo. Aquí, el sueño profundo no es un lujo, es nuestra promesa.'
      },
      rooms: [
        {
          id: 1,
          name: 'Cabaña APU',
          tagline: 'Frente al mar, donde las olas cantan tu sueño',
          description: 'Nuestra joya de la corona. Una cabaña privada a solo metros del océano, con terraza propia y hamaca bajo las estrellas. Despierta con el sonido de las olas y el aroma del mar.',
          price: 'Desde $160.000',
          period: 'por persona por noche',
          features: ['1 cama doble', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 cama doble' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Luna de miel o escapada romántica',
          images: ['/images/apu/apu1.webp', '/images/apu/apu2.webp', '/images/apu/apu3.webp', '/images/apu/apu4.webp', '/images/apu/apu5.webp', '/images/apu/apu6.webp'],
          thumbnail: '/images/apu/apu1.webp'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Elegancia costera con vistas panorámicas',
          description: 'Espaciosa suite con ventanales desde el suelo hasta el techo que enmarcan el océano como una pintura viviente. El equilibrio perfecto entre lujo y naturaleza.',
          price: 'Desde $115.000',
          period: 'por persona por noche',
          features: ['1 cama doble', '1 cama sencilla', 'Baño privado exterior'],
          amenities: [
            { icon: BedDouble, label: '1 doble + 1 sencilla' },
            { icon: Bath, label: 'Baño privado exterior' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Estancias prolongadas',
          images: ['/images/usukulu/usukulu1.webp', '/images/usukulu/usukulu2.webp'],
          thumbnail: '/images/usukulu/usukulu1.webp'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $110.000',
          period: 'por persona por noche',
          features: ['1 cama doble', '1 camarote', 'Baño exterior compartido'],
          amenities: [
            { icon: BedDouble, label: '1 doble + 1 camarote' },
            { icon: Bath, label: 'Baño compartido' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $140.000',
          period: 'por persona por noche',
          features: ['1 cama doble', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 cama doble' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/sambuli/sambuli1.webp', '/images/sambuli/sambuli2.webp', '/images/sambuli/sambuli3.webp', '/images/sambuli/sambuli4.webp'],
          thumbnail: '/images/sambuli/sambuli1.webp'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $110.000',
          period: 'por persona por noche',
          features: ['1 cama doble', '1 camarote', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 doble + 1 camarote' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/kombelisa/kombelisa1.webp', '/images/kombelisa/kombelisa2.webp', '/images/kombelisa/kombelisa3.webp', '/images/kombelisa/kombelisa4.webp'],
          thumbnail: '/images/kombelisa/kombelisa1.webp'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $130.000',
          period: 'por persona por noche',
          features: ['1 cama doble', 'Baño privado exterior'],
          amenities: [
            { icon: BedDouble, label: '1 cama doble' },
            { icon: Bath, label: 'Baño privado exterior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/amalaya/amalaya1.webp', '/images/amalaya/amalaya2.webp'],
          thumbnail: '/images/amalaya/amalaya1.webp'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $140.000',
          period: 'por persona por noche',
          features: ['1 cama doble', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 cama doble' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/pekao/pekao1.webp', '/images/pekao/pekao2.webp', '/images/pekao/pekao3.webp', '/images/pekao/pekao4.webp'],
          thumbnail: '/images/pekao/pekao1.webp'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $150.000',
          period: 'por persona por noche',
          features: ['1 cama Queen', '1 cama doble', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 Queen + 1 doble' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/kolaso/kolaso1.webp', '/images/kolaso/kolaso2.webp', '/images/kolaso/kolaso3.webp', '/images/kolaso/kolaso4.webp', '/images/kolaso/kolaso5.webp', '/images/kolaso/kolaso6.webp'],
          thumbnail: '/images/kolaso/kolaso1.webp'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $160.000',
          period: 'por persona por noche',
          features: ['1 cama doble', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 cama doble' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/abalenga/abalenga1.webp', '/images/abalenga/abalenga2.webp', '/images/abalenga/abalenga3.webp', '/images/abalenga/abalenga4.webp'],
          thumbnail: '/images/abalenga/abalenga1.webp'
        },
        {
          id: 10,
          name: 'Dormitorio Makunguri',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $95.000',
          period: 'por persona por noche',
          features: ['2 camarotes (1 doble + 1 sencilla arriba c/u)', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '2 camarotes' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/makunguri/makunguri1.webp', '/images/makunguri/makunguri2.webp', '/images/makunguri/makunguri3.webp', '/images/makunguri/makunguri4.webp'],
          thumbnail: '/images/makunguri/makunguri1.webp'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por persona por noche',
          features: ['1 camarote (1 doble + 1 sencilla arriba)', 'Baño exterior compartido'],
          amenities: [
            { icon: BedDouble, label: '1 camarote' },
            { icon: Bath, label: 'Baño compartido' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/eskurana/eskurana1.webp', '/images/eskurana/eskurana2.webp', '/images/eskurana/eskurana3.webp', '/images/eskurana/eskurana4.webp'],
          thumbnail: '/images/eskurana/eskurana1.webp'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $125.000',
          period: 'por persona por noche',
          features: ['1 cama doble', '1 camarote', 'Baño interior'],
          amenities: [
            { icon: BedDouble, label: '1 doble + 1 camarote' },
            { icon: Bath, label: 'Baño interior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/makano/makano1.webp', '/images/makano/makano2.webp', '/images/makano/makano3.webp', '/images/makano/makano4.webp'],
          thumbnail: '/images/makano/makano1.webp'
        },
        {
          id: 13,
          name: 'Dormitorio Asinaria',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $90.000',
          period: 'por persona por noche',
          features: ['2 camarotes (cama sencilla)', 'Baño exterior'],
          amenities: [
            { icon: BedDouble, label: '2 camarotes' },
            { icon: Bath, label: 'Baño exterior' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes',
          images: ['/images/asinaria/asinaria1.webp', '/images/asinaria/asinaria2.webp', '/images/asinaria/asinaria3.webp'],
          thumbnail: '/images/asinaria/asinaria1.webp'
        }
      ],
      features: {
        title: 'En todas nuestras habitaciones',
        items: [
          { icon: BedDouble, title: 'Ropa de cama egipcia', desc: '300 hilos de suavidad' },
          { icon: Droplets, title: 'Agua caliente solar', desc: 'Ecológica y abundante' },
          { icon: Wifi, title: 'WiFi gratuito', desc: 'Conexión estable' },
          { icon: Coffee, title: 'Café de la región', desc: 'Recién molido cada mañana' },
          { icon: Sparkles, title: 'Limpieza diaria', desc: 'Productos biodegradables' },
          { icon: Heart, title: 'Atención personalizada', desc: '24/7 para ti' }
        ]
      },
      sleep: {
        title: 'El arte de dormir bien',
        quote: '"Crear el ambiente perfecto para el descanso es nuestra obsesión. Desde la temperatura ideal hasta el silencio absoluto, todo está calculado para que tu cuerpo y mente se rindan al sueño."',
        author: 'María Elena, Anfitriona'
      },
      cta: {
        title: '¿Listo para el descanso que mereces?',
        desc: 'Reserva directamente y obtén el mejor precio garantizado, desayuno incluido y late check-out disponible.',
        button: 'Reservar habitación',
        subtext: 'Cancelación gratuita hasta 48h antes'
      },
      sectionBabor: {
        title: 'Babor',
        subtitle: 'Para el alma aventurera que busca experiencias únicas',
        cta: 'Ver habitaciones Babor'
      },
      sectionEstribor: {
        title: 'Estribor',
        subtitle: 'Para quien busca descanso profundo y reconexión',
        cta: 'Ver habitaciones Estribor'
      }
    },
    en: {
      hero: {
        badge: 'Perfect Rest',
        title: 'Our Rooms',
        subtitle: 'Sanctuaries of peace where every detail is designed for your rest',
        cta: 'Book now'
      },
      intro: {
        title: 'Sleeping well is the greatest gift',
        desc: 'Each room has been designed as an intimate refuge, with natural materials, warm lighting and views that invite rest. Here, deep sleep is not a luxury, it is our promise.'
      },
      rooms: [
        {
          id: 1,
          name: 'Cabaña APU',
          tagline: 'Oceanfront, where waves sing you to sleep',
          description: 'Our crown jewel. A private cabin just meters from the ocean, with its own terrace and hammock under the stars. Wake up to the sound of waves and the scent of the sea.',
          price: 'From $160,000',
          period: 'per person per night',
          features: ['1 double bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double bed' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Honeymoon or romantic getaway',
          images: ['/images/apu/apu1.webp', '/images/apu/apu2.webp', '/images/apu/apu3.webp', '/images/apu/apu4.webp', '/images/apu/apu5.webp', '/images/apu/apu6.webp'],
          thumbnail: '/images/apu/apu1.webp'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Coastal elegance with panoramic views',
          description: 'Spacious suite with floor-to-ceiling windows that frame the ocean like a living painting. The perfect balance between luxury and nature.',
          price: 'From $115,000',
          period: 'per person per night',
          features: ['1 double bed', '1 single bed', 'Private outdoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 single' },
            { icon: Bath, label: 'Private outdoor bathroom' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Extended stays',
          images: ['/images/usukulu/usukulu1.webp', '/images/usukulu/usukulu2.webp'],
          thumbnail: '/images/usukulu/usukulu1.webp'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $110,000',
          period: 'per person per night',
          features: ['1 double bed', '1 bunk bed', 'Shared outdoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 bunk' },
            { icon: Bath, label: 'Shared bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $140,000',
          period: 'per person per night',
          features: ['1 double bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double bed' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/sambuli/sambuli1.webp', '/images/sambuli/sambuli2.webp', '/images/sambuli/sambuli3.webp', '/images/sambuli/sambuli4.webp'],
          thumbnail: '/images/sambuli/sambuli1.webp'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $110,000',
          period: 'per person per night',
          features: ['1 double bed', '1 bunk bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 bunk' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/kombelisa/kombelisa1.webp', '/images/kombelisa/kombelisa2.webp', '/images/kombelisa/kombelisa3.webp', '/images/kombelisa/kombelisa4.webp'],
          thumbnail: '/images/kombelisa/kombelisa1.webp'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $130,000',
          period: 'per person per night',
          features: ['1 double bed', 'Private outdoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double bed' },
            { icon: Bath, label: 'Private outdoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/amalaya/amalaya1.webp', '/images/amalaya/amalaya2.webp'],
          thumbnail: '/images/amalaya/amalaya1.webp'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $140,000',
          period: 'per person per night',
          features: ['1 double bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double bed' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/pekao/pekao1.webp', '/images/pekao/pekao2.webp', '/images/pekao/pekao3.webp', '/images/pekao/pekao4.webp'],
          thumbnail: '/images/pekao/pekao1.webp'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $150,000',
          period: 'per person per night',
          features: ['1 Queen bed', '1 double bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 Queen + 1 double' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/kolaso/kolaso1.webp', '/images/kolaso/kolaso2.webp', '/images/kolaso/kolaso3.webp', '/images/kolaso/kolaso4.webp', '/images/kolaso/kolaso5.webp', '/images/kolaso/kolaso6.webp'],
          thumbnail: '/images/kolaso/kolaso1.webp'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $160,000',
          period: 'per person per night',
          features: ['1 double bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double bed' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/abalenga/abalenga1.webp', '/images/abalenga/abalenga2.webp', '/images/abalenga/abalenga3.webp', '/images/abalenga/abalenga4.webp'],
          thumbnail: '/images/abalenga/abalenga1.webp'
        },
        {
          id: 10,
          name: 'Dormitory Makunguri',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $95,000',
          period: 'per person per night',
          features: ['2 bunk beds (1 double + 1 single on top each)', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '2 bunk beds' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/makunguri/makunguri1.webp', '/images/makunguri/makunguri2.webp', '/images/makunguri/makunguri3.webp', '/images/makunguri/makunguri4.webp'],
          thumbnail: '/images/makunguri/makunguri1.webp'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per person per night',
          features: ['1 bunk bed (1 double + 1 single on top)', 'Shared outdoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 bunk bed' },
            { icon: Bath, label: 'Shared bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/eskurana/eskurana1.webp', '/images/eskurana/eskurana2.webp', '/images/eskurana/eskurana3.webp', '/images/eskurana/eskurana4.webp'],
          thumbnail: '/images/eskurana/eskurana1.webp'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $125,000',
          period: 'per person per night',
          features: ['1 double bed', '1 bunk bed', 'Indoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 bunk' },
            { icon: Bath, label: 'Indoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/makano/makano1.webp', '/images/makano/makano2.webp', '/images/makano/makano3.webp', '/images/makano/makano4.webp'],
          thumbnail: '/images/makano/makano1.webp'
        },
        {
          id: 13,
          name: 'Dormitory Asinaria',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $90,000',
          period: 'per person per night',
          features: ['2 bunk beds (single)', 'Outdoor bathroom'],
          amenities: [
            { icon: BedDouble, label: '2 bunk beds' },
            { icon: Bath, label: 'Outdoor bathroom' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers',
          images: ['/images/asinaria/asinaria1.webp', '/images/asinaria/asinaria2.webp', '/images/asinaria/asinaria3.webp'],
          thumbnail: '/images/asinaria/asinaria1.webp'
        }
      ],
      features: {
        title: 'In all our rooms',
        items: [
          { icon: BedDouble, title: 'Egyptian cotton linens', desc: '300 thread count softness' },
          { icon: Droplets, title: 'Solar hot water', desc: 'Eco-friendly and abundant' },
          { icon: Wifi, title: 'Free WiFi', desc: 'Stable connection' },
          { icon: Coffee, title: 'Regional coffee', desc: 'Freshly ground each morning' },
          { icon: Sparkles, title: 'Daily cleaning', desc: 'Biodegradable products' },
          { icon: Heart, title: 'Personalized attention', desc: '24/7 for you' }
        ]
      },
      sleep: {
        title: 'The art of sleeping well',
        quote: '"Creating the perfect environment for rest is our obsession. From the ideal temperature to absolute silence, everything is calculated so that your body and mind surrender to sleep."',
        author: 'Maria Elena, Host'
      },
      cta: {
        title: 'Ready for the rest you deserve?',
        desc: 'Book directly and get the best guaranteed price, breakfast included and late check-out available.',
        button: 'Book room',
        subtext: 'Free cancellation up to 48h before'
      },
      sectionBabor: {
        title: 'Babor',
        subtitle: 'For the adventurous soul seeking unique experiences',
        cta: 'See Babor rooms'
      },
      sectionEstribor: {
        title: 'Estribor',
        subtitle: 'For those seeking deep rest and reconnection',
        cta: 'See Estribor rooms'
      }
    },
    fr: {
      hero: {
        badge: 'Repos Parfait',
        title: 'Nos Chambres',
        subtitle: 'Sanctuaires de paix où chaque détail est pensé pour votre repos',
        cta: 'Réserver maintenant'
      },
      intro: {
        title: 'Bien dormir est le plus beau cadeau',
        desc: 'Chaque chambre a été conçue comme un refuge intime, avec des matériaux naturels, un éclairage chaleureux et des vues qui invitent au repos. Ici, le sommeil profond n\'est pas un luxe, c\'est notre promesse.'
      },
      rooms: [
        {
          id: 1,
          name: 'Cabaña APU',
          tagline: 'Face à la mer, où les vagues vous bercent',
          description: 'Notre joyau. Une cabane privée à quelques mètres de l\'océan, avec sa propre terrasse et hamac sous les étoiles. Réveillez-vous au son des vagues et à l\'odeur de la mer.',
          price: 'À partir de 160 000',
          period: 'par personne par nuit',
          features: ['1 lit double', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 lit double' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Lune de miel ou escapade romantique',
          images: ['/images/apu/apu1.webp', '/images/apu/apu2.webp', '/images/apu/apu3.webp', '/images/apu/apu4.webp', '/images/apu/apu5.webp', '/images/apu/apu6.webp'],
          thumbnail: '/images/apu/apu1.webp'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Élégance côtière avec vues panoramiques',
          description: 'Suite spacieuse avec des fenêtres du sol au plafond qui encadrent l\'océan comme un tableau vivant. L\'équilibre parfait entre luxe et nature.',
          price: 'À partir de 115 000',
          period: 'par personne par nuit',
          features: ['1 lit double', '1 lit simple', 'Salle de bain privée extérieure'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 simple' },
            { icon: Bath, label: 'Salle de bain privée ext.' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Séjours prolongés',
          images: ['/images/usukulu/usukulu1.webp', '/images/usukulu/usukulu2.webp'],
          thumbnail: '/images/usukulu/usukulu1.webp'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 110 000',
          period: 'par personne par nuit',
          features: ['1 lit double', '1 lit superposé', 'Salle de bain ext. partagée'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 superposé' },
            { icon: Bath, label: 'Salle de bain partagée' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 140 000',
          period: 'par personne par nuit',
          features: ['1 lit double', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 lit double' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/sambuli/sambuli1.webp', '/images/sambuli/sambuli2.webp', '/images/sambuli/sambuli3.webp', '/images/sambuli/sambuli4.webp'],
          thumbnail: '/images/sambuli/sambuli1.webp'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 110 000',
          period: 'par personne par nuit',
          features: ['1 lit double', '1 lit superposé', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 superposé' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/kombelisa/kombelisa1.webp', '/images/kombelisa/kombelisa2.webp', '/images/kombelisa/kombelisa3.webp', '/images/kombelisa/kombelisa4.webp'],
          thumbnail: '/images/kombelisa/kombelisa1.webp'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 130 000',
          period: 'par personne par nuit',
          features: ['1 lit double', 'Salle de bain privée extérieure'],
          amenities: [
            { icon: BedDouble, label: '1 lit double' },
            { icon: Bath, label: 'Salle de bain privée ext.' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/amalaya/amalaya1.webp', '/images/amalaya/amalaya2.webp'],
          thumbnail: '/images/amalaya/amalaya1.webp'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 140 000',
          period: 'par personne par nuit',
          features: ['1 lit double', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 lit double' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/pekao/pekao1.webp', '/images/pekao/pekao2.webp', '/images/pekao/pekao3.webp', '/images/pekao/pekao4.webp'],
          thumbnail: '/images/pekao/pekao1.webp'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 150 000',
          period: 'par personne par nuit',
          features: ['1 lit Queen', '1 lit double', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 Queen + 1 double' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/kolaso/kolaso1.webp', '/images/kolaso/kolaso2.webp', '/images/kolaso/kolaso3.webp', '/images/kolaso/kolaso4.webp', '/images/kolaso/kolaso5.webp', '/images/kolaso/kolaso6.webp'],
          thumbnail: '/images/kolaso/kolaso1.webp'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 160 000',
          period: 'par personne par nuit',
          features: ['1 lit double', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 lit double' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/abalenga/abalenga1.webp', '/images/abalenga/abalenga2.webp', '/images/abalenga/abalenga3.webp', '/images/abalenga/abalenga4.webp'],
          thumbnail: '/images/abalenga/abalenga1.webp'
        },
        {
          id: 10,
          name: 'Dortoir Makunguri',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 95 000',
          period: 'par personne par nuit',
          features: ['2 lits superposés (1 double + 1 simple en haut chacun)', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '2 lits superposés' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/makunguri/makunguri1.webp', '/images/makunguri/makunguri2.webp', '/images/makunguri/makunguri3.webp', '/images/makunguri/makunguri4.webp'],
          thumbnail: '/images/makunguri/makunguri1.webp'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par personne par nuit',
          features: ['1 lit superposé (1 double + 1 simple en haut)', 'Salle de bain ext. partagée'],
          amenities: [
            { icon: BedDouble, label: '1 lit superposé' },
            { icon: Bath, label: 'Salle de bain partagée' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/eskurana/eskurana1.webp', '/images/eskurana/eskurana2.webp', '/images/eskurana/eskurana3.webp', '/images/eskurana/eskurana4.webp'],
          thumbnail: '/images/eskurana/eskurana1.webp'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 125 000',
          period: 'par personne par nuit',
          features: ['1 lit double', '1 lit superposé', 'Salle de bain intérieure'],
          amenities: [
            { icon: BedDouble, label: '1 double + 1 superposé' },
            { icon: Bath, label: 'Salle de bain intérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/makano/makano1.webp', '/images/makano/makano2.webp', '/images/makano/makano3.webp', '/images/makano/makano4.webp'],
          thumbnail: '/images/makano/makano1.webp'
        },
        {
          id: 13,
          name: 'Dortoir Asinaria',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 90 000',
          period: 'par personne par nuit',
          features: ['2 lits superposés (lit simple)', 'Salle de bain extérieure'],
          amenities: [
            { icon: BedDouble, label: '2 lits superposés' },
            { icon: Bath, label: 'Salle de bain extérieure' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients',
          images: ['/images/asinaria/asinaria1.webp', '/images/asinaria/asinaria2.webp', '/images/asinaria/asinaria3.webp'],
          thumbnail: '/images/asinaria/asinaria1.webp'
        }
      ],
      features: {
        title: 'Dans toutes nos chambres',
        items: [
          { icon: BedDouble, title: 'Draps en coton égyptien', desc: 'Douceur 300 fils' },
          { icon: Droplets, title: 'Eau chaude solaire', desc: 'Écologique et abondante' },
          { icon: Wifi, title: 'WiFi gratuit', desc: 'Connexion stable' },
          { icon: Coffee, title: 'Café régional', desc: 'Moulu frais chaque matin' },
          { icon: Sparkles, title: 'Ménage quotidien', desc: 'Produits biodégradables' },
          { icon: Heart, title: 'Attention personnalisée', desc: '24/7 pour vous' }
        ]
      },
      sleep: {
        title: 'L\'art de bien dormir',
        quote: '"Créer l\'environnement parfait pour le repos est notre obsession. De la température idéale au silence absolu, tout est calculé pour que votre corps et esprit se laissent aller au sommeil."',
        author: 'Maria Elena, Hôtesse'
      },
      cta: {
        title: 'Prêt pour le repos que vous méritez ?',
        desc: 'Réservez directement et obtenez le meilleur prix garanti, petit-déjeuner inclus et late check-out disponible.',
        button: 'Réserver une chambre',
        subtext: 'Annulation gratuite jusqu\'à 48h avant'
      },
      sectionBabor: {
        title: 'Babor',
        subtitle: 'Pour l\'âme aventurière en quête d\'expériences uniques',
        cta: 'Voir les chambres Babor'
      },
      sectionEstribor: {
        title: 'Estribor',
        subtitle: 'Pour qui cherche le repos profond et la reconnexion',
        cta: 'Voir les chambres Estribor'
      }
    }
  };

export default function RoomsPage({ locale }: RoomsPageProps) {
  const c = content[locale] || content.es;
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [lightboxRoomId, setLightboxRoomId] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (roomId: number, startIndex = 0) => {
    setLightboxRoomId(roomId);
    setLightboxIndex(startIndex);
  };

  const closeLightbox = () => {
    setLightboxRoomId(null);
    setLightboxIndex(0);
  };

  const goPrev = () => {
    setLightboxIndex((prev) => {
      const room = content[locale]?.rooms.find((r: any) => r.id === lightboxRoomId) || content.es.rooms.find((r: any) => r.id === lightboxRoomId);
      const count = room?.images?.length || 1;
      return (prev - 1 + count) % count;
    });
  };

  const goNext = () => {
    setLightboxIndex((prev) => {
      const room = content[locale]?.rooms.find((r: any) => r.id === lightboxRoomId) || content.es.rooms.find((r: any) => r.id === lightboxRoomId);
      const count = room?.images?.length || 1;
      return (prev + 1) % count;
    });
  };

  const lightboxRoom = lightboxRoomId !== null
    ? (content[locale]?.rooms.find((r: any) => r.id === lightboxRoomId) || content.es.rooms.find((r: any) => r.id === lightboxRoomId))
    : undefined;
  const lightboxImages = lightboxRoom?.images || [];
  const lightboxRoomName = lightboxRoom?.name || '';


  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const borderRadius = useTransform(scrollY, [0, 400], ['0px', '48px']);

  const baborIds = [3, 4, 5, 7, 8, 11, 13];
  const estriborIds = [2, 12, 10, 6, 1, 9];

  const baborRooms = baborIds.map(id => c.rooms.find((r: any) => r.id === id)).filter(Boolean) as any[];
  const estriborRooms = estriborIds.map(id => c.rooms.find((r: any) => r.id === id)).filter(Boolean) as any[];

  const baborSectionRef = useRef<HTMLElement>(null);
  const estriborSectionRef = useRef<HTMLElement>(null);
  const [activeBaborIndex, setActiveBaborIndex] = useState(0);
  const [activeEstriborIndex, setActiveEstriborIndex] = useState(0);
  const [showBaborNav, setShowBaborNav] = useState(false);
  const [showEstriborNav, setShowEstriborNav] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);
  }, []);

  useEffect(() => {
    const handleScrollBabor = () => {
      if (!baborSectionRef.current) return;
      const sectionTop = baborSectionRef.current.offsetTop;
      const sectionHeight = baborSectionRef.current.offsetHeight;
      const scrollPos = window.scrollY - sectionTop;
      const viewportHeight = window.innerHeight;
      const index = Math.max(0, Math.min(
        baborRooms.length - 1,
        Math.floor(scrollPos / viewportHeight + 0.2)
      ));
      setActiveBaborIndex(index);
      setShowBaborNav(scrollPos >= -viewportHeight * 0.5 && scrollPos < sectionHeight - viewportHeight * 0.5);
    };
    window.addEventListener('scroll', handleScrollBabor, { passive: true });
    handleScrollBabor();
    return () => window.removeEventListener('scroll', handleScrollBabor);
  }, [baborRooms.length]);

  useEffect(() => {
    const handleScrollEstribor = () => {
      if (!estriborSectionRef.current) return;
      const sectionTop = estriborSectionRef.current.offsetTop;
      const sectionHeight = estriborSectionRef.current.offsetHeight;
      const scrollPos = window.scrollY - sectionTop;
      const viewportHeight = window.innerHeight;
      const index = Math.max(0, Math.min(
        estriborRooms.length - 1,
        Math.floor(scrollPos / viewportHeight + 0.2)
      ));
      setActiveEstriborIndex(index);
      setShowEstriborNav(scrollPos >= -viewportHeight * 0.5 && scrollPos < sectionHeight - viewportHeight * 0.5);
    };
    window.addEventListener('scroll', handleScrollEstribor, { passive: true });
    handleScrollEstribor();
    return () => window.removeEventListener('scroll', handleScrollEstribor);
  }, [estriborRooms.length]);

  const scrollToBaborRoom = (index: number) => {
    if (!baborSectionRef.current) return;
    const targetY = baborSectionRef.current.offsetTop + index * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const scrollToEstriborRoom = (index: number) => {
    if (!estriborSectionRef.current) return;
    const targetY = estriborSectionRef.current.offsetTop + index * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  useEffect(() => {
    // Si la vidéo est déjà prête (cache), on cache le loader immédiatement
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
      return;
    }
    // Timeout de secours pour ne pas bloquer l'UI si l'événement est manqué
    const timeout = setTimeout(() => setVideoLoaded(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  // Préchargement initial de toutes les photos des chambres
  useEffect(() => {
    const imagesToPreload = new Set<string>();
    c.rooms.forEach((room: any) => {
      if (room.thumbnail) imagesToPreload.add(room.thumbnail);
      if (room.images && room.images.length > 0) {
        room.images.forEach((src: string) => imagesToPreload.add(src));
      }
    });
    // Précharger par petits lots pour ne pas saturer le navigateur
    const srcs = Array.from(imagesToPreload);
    let index = 0;
    const batchSize = 6;
    const loadBatch = () => {
      for (let i = 0; i < batchSize && index < srcs.length; i++, index++) {
        const img = new window.Image();
        img.src = srcs[index];
      }
      if (index < srcs.length) {
        setTimeout(loadBatch, 200);
      }
    };
    loadBatch();
  }, [locale]);

  return (
    <>
      {/* Hero - Vidéo immersive qui rétrécit au scroll */}
      <section className="relative h-[150vh] bg-stone-950">
        <motion.div
          style={{ scale, borderRadius }}
          className={`sticky top-0 h-screen w-full z-20 will-change-transform shadow-2xl flex items-center justify-center ${isSafari ? 'bg-black' : 'overflow-hidden'}`}
        >
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
            className={`transition-all duration-500 ${isSafari ? 'w-[75%] max-w-[1200px] aspect-video object-cover rounded-2xl' : 'w-full h-full object-cover'}`}
          >
            <source src="/images/output-hero.mp4" type="video/mp4" />
            <source src="/images/output-hero.webm" type="video/webm" />
          </video>
          
          {/* Overlay sombre pour la lisibilité */}
          <div className={`bg-black/40 ${isSafari ? 'absolute inset-[12.5%] xl:inset-x-[calc(50%-600px)] rounded-2xl' : 'absolute inset-0'}`} />
          
          {/* Contenu */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Moon className="w-4 h-4" />
                {c.hero.badge}
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                {c.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-12 drop-shadow-md">
                {c.hero.subtitle}
              </p>
              
              <motion.a
                href="https://wa.me/573147480855"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-900 rounded-full font-bold text-lg shadow-xl shadow-yellow-500/20"
              >
                <Calendar className="w-5 h-5" />
                {c.hero.cta}
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-stone-300 text-sm drop-shadow">Descubre</span>
              <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-yellow-400 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              {c.intro.title}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {c.intro.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Bar */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-y border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <button
              onClick={() => baborSectionRef.current && baborSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-lg md:text-xl font-bold text-stone-900 group-hover:text-cyan-700 transition-colors">
                  {c.sectionBabor.title}
                </span>
                <span className="hidden md:block text-sm text-stone-500">
                  {c.sectionBabor.cta}
                </span>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-stone-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={() => estriborSectionRef.current && estriborSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <CloudMoon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-lg md:text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {c.sectionEstribor.title}
                </span>
                <span className="hidden md:block text-sm text-stone-500">
                  {c.sectionEstribor.cta}
                </span>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </section>

      {/* Menu latéral de navigation Babor */}
      <nav className={`fixed right-2 xl:right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 max-h-[88vh] overflow-y-visible no-scrollbar py-2 pr-2 transition-all duration-500 ${showBaborNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
        {baborRooms.map((room: any, idx: number) => (
          <button
            key={room.id}
            onClick={() => scrollToBaborRoom(idx)}
            className={`
              group relative flex items-stretch w-[200px] h-[90px] rounded-2xl overflow-hidden transition-all duration-300 shadow-md bg-white
              ${idx === activeBaborIndex 
                ? 'ring-[3px] ring-cyan-400 scale-105 shadow-xl shadow-cyan-400/20' 
                : 'ring-1 ring-stone-200 hover:ring-stone-300 hover:scale-105 hover:shadow-lg'}
            `}
            aria-label={`Ver ${room.name}`}
          >
            <div className="w-[110px] px-4 flex items-center justify-center bg-stone-50 border-r border-stone-100">
              <span className="text-[13px] font-semibold text-stone-800 leading-tight line-clamp-2 text-center">
                {room.name}
              </span>
            </div>
            {room.thumbnail ? (
              <div className="flex-1 relative">
                <Image src={room.thumbnail} alt={room.name} fill className="object-cover" sizes="200px" />
              </div>
            ) : (
              <div className={`flex-1 bg-gradient-to-br ${room.color} flex items-center justify-center`}>
                <BedDouble className="w-8 h-8 text-white/90" />
              </div>
            )}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-stone-700 bg-white px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg border border-stone-100 pointer-events-none z-50">
              {room.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Menu latéral de navigation Estribor */}
      <nav className={`fixed right-2 xl:right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 max-h-[88vh] overflow-y-visible no-scrollbar py-2 pr-2 transition-all duration-500 ${showEstriborNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
        {estriborRooms.map((room: any, idx: number) => (
          <button
            key={room.id}
            onClick={() => scrollToEstriborRoom(idx)}
            className={`
              group relative flex items-stretch w-[200px] h-[90px] rounded-2xl overflow-hidden transition-all duration-300 shadow-md bg-white
              ${idx === activeEstriborIndex 
                ? 'ring-[3px] ring-amber-400 scale-105 shadow-xl shadow-amber-400/20' 
                : 'ring-1 ring-stone-200 hover:ring-stone-300 hover:scale-105 hover:shadow-lg'}
            `}
            aria-label={`Ver ${room.name}`}
          >
            <div className="w-[110px] px-4 flex items-center justify-center bg-stone-50 border-r border-stone-100">
              <span className="text-[13px] font-semibold text-stone-800 leading-tight line-clamp-2 text-center">
                {room.name}
              </span>
            </div>
            {room.thumbnail ? (
              <div className="flex-1 relative">
                <Image src={room.thumbnail} alt={room.name} fill className="object-cover" sizes="200px" />
              </div>
            ) : (
              <div className={`flex-1 bg-gradient-to-br ${room.color} flex items-center justify-center`}>
                <BedDouble className="w-8 h-8 text-white/90" />
              </div>
            )}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-stone-700 bg-white px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg border border-stone-100 pointer-events-none z-50">
              {room.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile bottom indicator Babor */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm shadow-xl transition-all duration-300 ${showBaborNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-cyan-400 font-bold">{String(activeBaborIndex + 1).padStart(2, '0')}</span>
        <span className="w-px h-4 bg-white/20" />
        <span className="max-w-[140px] truncate">{baborRooms[activeBaborIndex]?.name}</span>
      </div>

      {/* Mobile bottom indicator Estribor */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm shadow-xl transition-all duration-300 ${showEstriborNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-amber-400 font-bold">{String(activeEstriborIndex + 1).padStart(2, '0')}</span>
        <span className="w-px h-4 bg-white/20" />
        <span className="max-w-[140px] truncate">{estriborRooms[activeEstriborIndex]?.name}</span>
      </div>

      {/* Section Hero Babor */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl shadow-cyan-500/20"
          >
            <Compass className="w-14 h-14 text-cyan-300" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {c.sectionBabor.title}
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100/80 max-w-2xl mx-auto">
            {c.sectionBabor.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-100 to-transparent" />
      </section>

      {/* Rooms Babor */}
      <section ref={baborSectionRef} className="relative bg-stone-100">
        {baborRooms.map((room: any, index: number) => (
          <div
            key={room.id}
            className="sticky top-0 min-h-screen flex items-center justify-center py-12"
            style={{ zIndex: index + 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-72 ${index > 0 ? 'pt-8' : ''}`}
            >
              <div 
                className={`relative rounded-[3rem] shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-amber-50/95 via-white to-orange-50/90' :
                  index % 3 === 1 ? 'from-blue-50/95 via-white to-cyan-50/90' :
                  'from-green-50/95 via-white to-emerald-50/90'
                } border border-white/60 p-8 lg:p-16`}
              >
                <span className="absolute top-8 right-8 text-8xl lg:text-9xl font-bold text-stone-200/40 select-none pointer-events-none">
                  {String(room.id).padStart(2, '0')}
                </span>

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${room.color} flex items-center justify-center overflow-hidden shadow-2xl relative`}
                    >
                      {room.images && room.images.length > 0 ? (
                        <RoomImageCarousel images={room.images} alt={room.name} onClick={() => openLightbox(room.id)} />
                      ) : (
                        <div className="text-center text-white/90">
                          <BedDouble className="w-20 h-20 mx-auto mb-4 opacity-60" />
                          <p className="text-lg font-medium">{room.name}</p>
                        </div>
                      )}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-stone-100"
                    >
                      <p className="text-sm font-medium text-stone-900">{room.price}</p>
                      <p className="text-stone-500 text-sm">{room.period}</p>
                    </motion.div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-yellow-600 font-medium mb-2">{room.tagline}</p>
                    <h3 className="text-4xl font-bold text-stone-900 mb-4">{room.name}</h3>
                    <p className="text-stone-600 text-lg mb-6 leading-relaxed">{room.description}</p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full text-sm text-stone-600 mb-8 border border-stone-100">
                      <Heart className="w-4 h-4 text-yellow-500" />
                      {room.bestFor}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {room.amenities.map((amenity: any, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-stone-600">
                          <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center border border-stone-100">
                            <amenity.icon className="w-5 h-5 text-stone-500" />
                          </div>
                          <span className="text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.features.map((feature: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 bg-white/60 text-stone-600 text-sm rounded-full border border-stone-200">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/573147480855"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
                    >
                      Reservar esta habitación
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Section Hero Estribor */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-28 h-28 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl shadow-amber-500/20"
          >
            <CloudMoon className="w-14 h-14 text-amber-300" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {c.sectionEstribor.title}
          </h2>
          <p className="text-xl md:text-2xl text-amber-100/80 max-w-2xl mx-auto">
            {c.sectionEstribor.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-100 to-transparent" />
      </section>

      {/* Rooms Estribor */}
      <section ref={estriborSectionRef} className="relative bg-stone-100">
        {estriborRooms.map((room: any, index: number) => (
          <div
            key={room.id}
            className="sticky top-0 min-h-screen flex items-center justify-center py-12"
            style={{ zIndex: index + 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-72 ${index > 0 ? 'pt-8' : ''}`}
            >
              <div 
                className={`relative rounded-[3rem] shadow-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-amber-50/95 via-white to-orange-50/90' :
                  index % 3 === 1 ? 'from-blue-50/95 via-white to-cyan-50/90' :
                  'from-green-50/95 via-white to-emerald-50/90'
                } border border-white/60 p-8 lg:p-16`}
              >
                <span className="absolute top-8 right-8 text-8xl lg:text-9xl font-bold text-stone-200/40 select-none pointer-events-none">
                  {String(room.id).padStart(2, '0')}
                </span>

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${room.color} flex items-center justify-center overflow-hidden shadow-2xl relative`}
                    >
                      {room.images && room.images.length > 0 ? (
                        <RoomImageCarousel images={room.images} alt={room.name} onClick={() => openLightbox(room.id)} />
                      ) : (
                        <div className="text-center text-white/90">
                          <BedDouble className="w-20 h-20 mx-auto mb-4 opacity-60" />
                          <p className="text-lg font-medium">{room.name}</p>
                        </div>
                      )}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-stone-100"
                    >
                      <p className="text-sm font-medium text-stone-900">{room.price}</p>
                      <p className="text-stone-500 text-sm">{room.period}</p>
                    </motion.div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-yellow-600 font-medium mb-2">{room.tagline}</p>
                    <h3 className="text-4xl font-bold text-stone-900 mb-4">{room.name}</h3>
                    <p className="text-stone-600 text-lg mb-6 leading-relaxed">{room.description}</p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full text-sm text-stone-600 mb-8 border border-stone-100">
                      <Heart className="w-4 h-4 text-yellow-500" />
                      {room.bestFor}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {room.amenities.map((amenity: any, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-stone-600">
                          <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center border border-stone-100">
                            <amenity.icon className="w-5 h-5 text-stone-500" />
                          </div>
                          <span className="text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.features.map((feature: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 bg-white/60 text-stone-600 text-sm rounded-full border border-stone-200">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/573147480855"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
                    >
                      Reservar esta habitación
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
      {/* Common Features */}
      <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">{c.features.title}</h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.features.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sleep Quote */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-8" />
            <h3 className="text-3xl font-bold text-stone-900 mb-8">{c.sleep.title}</h3>
            <blockquote className="text-xl md:text-2xl text-stone-600 italic leading-relaxed mb-6">
              &ldquo;{c.sleep.quote}&rdquo;
            </blockquote>
            <p className="text-stone-500 font-medium">— {c.sleep.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <RoomImageLightbox
        isOpen={lightboxRoomId !== null}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onPrev={goPrev}
        onNext={goNext}
        roomName={lightboxRoomName}
      />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{c.cta.title}</h2>
          <p className="text-xl text-stone-800 mb-8">{c.cta.desc}</p>
          
          <a
            href="https://wa.me/573147480855"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-lg hover:bg-stone-800 transition-colors shadow-xl mb-4"
          >
            <Phone className="w-5 h-5" />
            {c.cta.button}
          </a>
          
          <p className="text-stone-700 text-sm">{c.cta.subtext}</p>
        </div>
      </section>
    </>
  );
}
