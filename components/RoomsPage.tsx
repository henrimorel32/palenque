'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Moon, Star, Wind, Waves, Wifi, Coffee, Droplets, Sun,
  BedDouble, Bath, Tv, Snowflake, ChevronRight, CheckCircle2,
  Phone, Calendar, Sparkles, Heart
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

interface RoomsPageProps {
  locale: Locale;
}

export default function RoomsPage({ locale }: RoomsPageProps) {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

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
          price: 'Desde $280.000',
          period: 'por noche',
          features: ['Vista directa al mar', 'Terraza privada', 'Hamaca', 'Aire acondicionado', 'Cama King', 'Baño exterior tipo spa', 'Mini bar'],
          amenities: [
            { icon: Waves, label: 'Frente al mar' },
            { icon: Sun, label: 'Amanecer privado' },
            { icon: Wind, label: 'Brisa natural' },
            { icon: Snowflake, label: 'A/C' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Luna de miel o escapada romántica'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Elegancia costera con vistas panorámicas',
          description: 'Espaciosa suite con ventanales desde el suelo hasta el techo que enmarcan el océano como una pintura viviente. El equilibrio perfecto entre lujo y naturaleza.',
          price: 'Desde $180.000',
          period: 'por noche',
          features: ['Vista panorámica', 'Balcón privado', 'Sala de estar', 'Cama King', 'Baño con tina', 'Ropa de cama premium'],
          amenities: [
            { icon: Tv, label: 'Smart TV' },
            { icon: Coffee, label: 'Café de origen' },
            { icon: Wifi, label: 'WiFi alta velocidad' },
            { icon: Bath, label: 'Tina con vista' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Estancias prolongadas'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 10,
          name: 'Habitación Makunguri',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
        },
        {
          id: 13,
          name: 'Habitación Asinaria',
          tagline: 'Abrazada por la vegetación tropical',
          description: 'Un refugio íntimo rodeado de palmeras y flores tropicales. La naturaleza entra por las ventanas abiertas mientras duermes envuelto en frescura.',
          price: 'Desde $120.000',
          period: 'por noche',
          features: ['Vista al jardín', 'Ventilador natural', 'Cama Queen', 'Baño privado', 'Patio privado', 'Desayuno incluido'],
          amenities: [
            { icon: Droplets, label: 'Ducha caliente' },
            { icon: BedDouble, label: 'Cama Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Desayuno' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Viajeros conscientes'
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
          price: 'From $280,000',
          period: 'per night',
          features: ['Direct ocean view', 'Private terrace', 'Hammock', 'Air conditioning', 'King bed', 'Outdoor spa bathroom', 'Mini bar'],
          amenities: [
            { icon: Waves, label: 'Beachfront' },
            { icon: Sun, label: 'Private sunrise' },
            { icon: Wind, label: 'Natural breeze' },
            { icon: Snowflake, label: 'A/C' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Honeymoon or romantic getaway'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Coastal elegance with panoramic views',
          description: 'Spacious suite with floor-to-ceiling windows that frame the ocean like a living painting. The perfect balance between luxury and nature.',
          price: 'From $180,000',
          period: 'per night',
          features: ['Panoramic view', 'Private balcony', 'Living room', 'King bed', 'Bathtub', 'Premium bedding'],
          amenities: [
            { icon: Tv, label: 'Smart TV' },
            { icon: Coffee, label: 'Local coffee' },
            { icon: Wifi, label: 'High-speed WiFi' },
            { icon: Bath, label: 'Bathtub with view' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Extended stays'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 10,
          name: 'Habitación Makunguri',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
        },
        {
          id: 13,
          name: 'Habitación Asinaria',
          tagline: 'Embraced by tropical vegetation',
          description: 'An intimate refuge surrounded by palm trees and tropical flowers. Nature enters through open windows while you sleep wrapped in freshness.',
          price: 'From $120,000',
          period: 'per night',
          features: ['Garden view', 'Natural ventilation', 'Queen bed', 'Private bathroom', 'Private patio', 'Breakfast included'],
          amenities: [
            { icon: Droplets, label: 'Hot shower' },
            { icon: BedDouble, label: 'Queen bed' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Breakfast' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Conscious travelers'
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
          price: 'À partir de 280 000',
          period: 'par nuit',
          features: ['Vue directe sur la mer', 'Terrasse privée', 'Hamac', 'Climatisation', 'Lit King', 'Salle de bain extérieure spa', 'Mini bar'],
          amenities: [
            { icon: Waves, label: 'Front de mer' },
            { icon: Sun, label: 'Lever de soleil privé' },
            { icon: Wind, label: 'Brise naturelle' },
            { icon: Snowflake, label: 'A/C' }
          ],
          color: 'from-amber-400 to-orange-500',
          bestFor: 'Lune de miel ou escapade romantique'
        },
        {
          id: 2,
          name: 'Usukulu',
          tagline: 'Élégance côtière avec vues panoramiques',
          description: 'Suite spacieuse avec des fenêtres du sol au plafond qui encadrent l\'océan comme un tableau vivant. L\'équilibre parfait entre luxe et nature.',
          price: 'À partir de 180 000',
          period: 'par nuit',
          features: ['Vue panoramique', 'Balcon privé', 'Salon', 'Lit King', 'Baignoire', 'Linge de lit premium'],
          amenities: [
            { icon: Tv, label: 'Smart TV' },
            { icon: Coffee, label: 'Café local' },
            { icon: Wifi, label: 'WiFi haut débit' },
            { icon: Bath, label: 'Baignoire avec vue' }
          ],
          color: 'from-blue-400 to-cyan-500',
          bestFor: 'Séjours prolongés'
        },
        {
          id: 3,
          name: 'Habitación Lumbalu',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 4,
          name: 'Habitación Sangaria',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 5,
          name: 'Habitación Kombilesa',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 6,
          name: 'Habitación Amalaya',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 7,
          name: 'Habitación Pekao',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 8,
          name: 'Habitación Kolaso',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 9,
          name: 'Habitación Abalenga',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 10,
          name: 'Habitación Makunguri',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 11,
          name: 'Habitación Eskurana',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 12,
          name: 'Habitación Makano',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
        },
        {
          id: 13,
          name: 'Habitación Asinaria',
          tagline: 'Enlacée par la végétation tropicale',
          description: 'Un refuge intime entouré de palmiers et de fleurs tropicales. La nature entre par les fenêtres ouvertes pendant que vous dormez enveloppé de fraîcheur.',
          price: 'À partir de 120 000',
          period: 'par nuit',
          features: ['Vue sur le jardin', 'Ventilation naturelle', 'Lit Queen', 'Salle de bain privée', 'Patio privé', 'Petit-déjeuner inclus'],
          amenities: [
            { icon: Droplets, label: 'Douche chaude' },
            { icon: BedDouble, label: 'Lit Queen' },
            { icon: Wifi, label: 'WiFi' },
            { icon: Coffee, label: 'Petit-déjeuner' }
          ],
          color: 'from-green-400 to-emerald-500',
          bestFor: 'Voyageurs conscients'
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
      }
    }
  };

  const c = content[locale] || content.es;

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const borderRadius = useTransform(scrollY, [0, 400], ['0px', '48px']);

  const roomsSectionRef = useRef<HTMLElement>(null);
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!roomsSectionRef.current) return;
      const sectionTop = roomsSectionRef.current.offsetTop;
      const scrollPos = window.scrollY - sectionTop;
      const viewportHeight = window.innerHeight;
      const index = Math.max(0, Math.min(
        c.rooms.length - 1,
        Math.floor(scrollPos / viewportHeight + 0.2)
      ));
      setActiveRoomIndex(index);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [c.rooms.length]);

  useEffect(() => {
    if (!roomsSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowNav(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(roomsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToRoom = (index: number) => {
    if (!roomsSectionRef.current) return;
    const targetY = roomsSectionRef.current.offsetTop + index * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero - Vidéo immersive qui rétrécit au scroll */}
      <section className="relative h-[150vh] bg-stone-950">
        <motion.div
          style={{ scale, borderRadius }}
          className={`sticky top-0 h-screen w-full z-20 will-change-transform shadow-2xl flex items-center justify-center ${isSafari ? 'bg-black' : 'overflow-hidden'}`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
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

      {/* Menu latéral de navigation des chambres */}
      <nav className={`fixed right-2 xl:right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 max-h-[88vh] overflow-y-visible no-scrollbar py-2 pr-2 transition-all duration-500 ${showNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
        {c.rooms.map((room, idx) => (
          <button
            key={room.id}
            onClick={() => scrollToRoom(idx)}
            className={`
              group relative flex items-stretch w-[200px] h-[90px] rounded-2xl overflow-hidden transition-all duration-300 shadow-md bg-white
              ${idx === activeRoomIndex 
                ? 'ring-[3px] ring-yellow-400 scale-105 shadow-xl shadow-yellow-400/20' 
                : 'ring-1 ring-stone-200 hover:ring-stone-300 hover:scale-105 hover:shadow-lg'}
            `}
            aria-label={`Ver ${room.name}`}
          >
            {/* Infos à gauche */}
            <div className="w-[110px] px-4 flex items-center justify-center bg-stone-50 border-r border-stone-100">
              <span className="text-[13px] font-semibold text-stone-800 leading-tight line-clamp-2 text-center">
                {room.name}
              </span>
            </div>
            {/* Miniature dégradée à droite */}
            <div className={`flex-1 bg-gradient-to-br ${room.color} flex items-center justify-center`}>
              <BedDouble className="w-8 h-8 text-white/90" />
            </div>
            
            {/* Tooltip au hover */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-stone-700 bg-white px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg border border-stone-100 pointer-events-none z-50">
              {room.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile bottom indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm shadow-xl">
        <span className="text-yellow-400 font-bold">{String(activeRoomIndex + 1).padStart(2, '0')}</span>
        <span className="w-px h-4 bg-white/20" />
        <span className="max-w-[140px] truncate">{c.rooms[activeRoomIndex]?.name}</span>
      </div>

      {/* Rooms - Effet cartes superposées */}
      <section ref={roomsSectionRef} className="relative bg-stone-100">
        {c.rooms.map((room, index) => (
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
                {/* Numéro de chambre en filigrane */}
                <span className="absolute top-8 right-8 text-8xl lg:text-9xl font-bold text-stone-200/40 select-none pointer-events-none">
                  {String(room.id).padStart(2, '0')}
                </span>

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image placeholder */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div 
                      whileInView={{ scale: [0.95, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${room.color} flex items-center justify-center overflow-hidden shadow-2xl`}
                    >
                      <div className="text-center text-white/90">
                        <BedDouble className="w-20 h-20 mx-auto mb-4 opacity-60" />
                        <p className="text-lg font-medium">{room.name}</p>
                      </div>
                    </motion.div>
                    {/* Price badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-stone-100"
                    >
                      <p className="text-3xl font-bold text-stone-900">{room.price}</p>
                      <p className="text-stone-500 text-sm">{room.period}</p>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-yellow-600 font-medium mb-2">{room.tagline}</p>
                    <h3 className="text-4xl font-bold text-stone-900 mb-4">{room.name}</h3>
                    <p className="text-stone-600 text-lg mb-6 leading-relaxed">{room.description}</p>
                    
                    {/* Best for */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full text-sm text-stone-600 mb-8 border border-stone-100">
                      <Heart className="w-4 h-4 text-yellow-500" />
                      {room.bestFor}
                    </div>

                    {/* Amenities */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-3 text-stone-600">
                          <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center border border-stone-100">
                            <amenity.icon className="w-5 h-5 text-stone-500" />
                          </div>
                          <span className="text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.features.map((feature, i) => (
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
