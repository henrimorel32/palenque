'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Plane, Car, Bus, Clock, Phone, Navigation,
  ArrowRight, CheckCircle2, AlertCircle, Info, Copy,
  Star, Shield, Wallet, Clock3, ChevronRight
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';

interface DirectionsPageProps {
  locale: Locale;
}

function CopyButton({ text, label, locale }: { text: string; label: string; locale: Locale }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const copiedText = locale === 'es' ? '¡Copiado!' : locale === 'en' ? 'Copied!' : 'Copié!';
  
  return (
    <button 
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors"
    >
      <Copy className="w-3.5 h-3.5" />
      {copied ? copiedText : label}
    </button>
  );
}

export default function DirectionsPage({ locale }: DirectionsPageProps) {
  const content = {
    es: {
      title: 'Cómo Llegar',
      subtitle: 'Tu camino hacia el paraíso comienza aquí',
      from: 'Desde el Aeropuerto de Santa Marta',
      airport: 'Simón Bolívar (SMR)',
      stats: {
        duration: '1h 30min - 2h',
        distance: '75 km',
        route: 'Costa Caribe Colombiana'
      },
      byPlane: {
        badge: 'Más cómodo',
        title: 'Transporte Privado',
        subtitle: 'Te recogemos en el aeropuerto',
        desc: 'Servicio puerta a puerta con vehículo climatizado. El conductor te esperará en la salida con un cartel con tu nombre.',
        features: ['WiFi a bordo', 'Aire acondicionado', 'Agua incluida', 'Sin paradas'],
        price: '$80.000 - $120.000 COP',
        cta: 'Reservar transporte',
      },
      byCar: {
        badge: 'Independencia',
        title: 'Alquiler de Vehículo',
        subtitle: 'Explora a tu ritmo',
        desc: 'Conduce por una de las carreteras costeras más hermosas de Colombia. Estacionamiento gratuito en el hotel.',
        steps: [
          { icon: Navigation, title: 'Salida', desc: 'Aeropuerto SMR → Vía al Mar' },
          { icon: Clock3, title: 'Tiempo', desc: '45 min hasta el peaje' },
          { icon: MapPin, title: 'Destino', desc: 'Palenque, Bolívar' },
        ],
        tip: 'Últimos 2 km son de terracería. Cualquier vehículo puede transitar.',
      },
      byBus: {
        badge: 'Económico',
        title: 'Transporte Público',
        subtitle: 'Experiencia local',
        desc: 'Opción auténtica para viajeros aventureros. Te recogemos en el peaje si nos avisas.',
        steps: [
          { title: 'Terminal Santa Marta', desc: 'Calle 41 # 9-10' },
          { title: 'Bus a Barranquilla', desc: 'Berlinas, Marsol o Copetran' },
          { title: 'Peaje Palenque', desc: 'Bájate aquí (50 min)' },
          { title: 'Moto-taxi', desc: '$10.000 COP al hotel' },
        ],
        price: '$15.000 COP',
        time: '1h 15min total',
      },
      contact: {
        title: '¿Necesitas ayuda con tu trayecto?',
        desc: 'Nuestro equipo te orienta paso a paso. También coordinamos tu recogida personalizada.',
        cta: 'Contactar por WhatsApp',
        or: 'o llámanos al',
        phone: '+57 314 748 0855'
      },
      location: {
        title: 'Ubicación Exacta',
        address: 'Carrera 1 # 23-58, Palenque',
        coords: '9.773722, -75.645361',
        copy: 'Copiar coordenadas',
      },
      trust: {
        title: '¿Por qué elegirnos?',
        items: [
          { icon: Shield, title: 'Seguro incluido', desc: 'Todos nuestros transportes están asegurados' },
          { icon: Clock, title: 'Puntualidad', desc: 'Valoramos tu tiempo. Siempre a tiempo.' },
          { icon: Wallet, title: 'Mejor precio', desc: 'Sin intermediarios. Precio directo.' },
        ]
      }
    },
    en: {
      title: 'How to Get There',
      subtitle: 'Your journey to paradise starts here',
      from: 'From Santa Marta Airport',
      airport: 'Simón Bolívar (SMR)',
      stats: {
        duration: '1h 30min - 2h',
        distance: '75 km',
        route: 'Colombian Caribbean Coast'
      },
      byPlane: {
        badge: 'Most comfortable',
        title: 'Private Transport',
        subtitle: 'We pick you up at the airport',
        desc: 'Door-to-door service with air-conditioned vehicle. The driver will wait at the exit with a sign with your name.',
        features: ['WiFi on board', 'Air conditioning', 'Water included', 'No stops'],
        price: '$80,000 - $120,000 COP',
        cta: 'Book transport',
      },
      byCar: {
        badge: 'Independence',
        title: 'Car Rental',
        subtitle: 'Explore at your pace',
        desc: 'Drive one of Colombia\'s most beautiful coastal roads. Free parking at the hotel.',
        steps: [
          { icon: Navigation, title: 'Departure', desc: 'SMR Airport → Vía al Mar' },
          { icon: Clock3, title: 'Time', desc: '45 min to toll' },
          { icon: MapPin, title: 'Destination', desc: 'Palenque, Bolívar' },
        ],
        tip: 'Last 2 km are dirt road. Any vehicle can pass.',
      },
      byBus: {
        badge: 'Economical',
        title: 'Public Transport',
        subtitle: 'Local experience',
        desc: 'Authentic option for adventurous travelers. We pick you up at the toll if you let us know.',
        steps: [
          { title: 'Santa Marta Terminal', desc: 'Calle 41 # 9-10' },
          { title: 'Bus to Barranquilla', desc: 'Berlinas, Marsol or Copetran' },
          { title: 'Palenque Toll', desc: 'Get off here (50 min)' },
          { title: 'Moto-taxi', desc: '$10,000 COP to hotel' },
        ],
        price: '$15,000 COP',
        time: '1h 15min total',
      },
      contact: {
        title: 'Need help with your journey?',
        desc: 'Our team guides you step by step. We also coordinate your personalized pickup.',
        cta: 'Contact via WhatsApp',
        or: 'or call us at',
        phone: '+57 314 748 0855'
      },
      location: {
        title: 'Exact Location',
        address: 'Carrera 1 # 23-58, Palenque',
        coords: '9.773722, -75.645361',
        copy: 'Copy coordinates',
      },
      trust: {
        title: 'Why choose us?',
        items: [
          { icon: Shield, title: 'Insurance included', desc: 'All our transports are insured' },
          { icon: Clock, title: 'Punctuality', desc: 'We value your time. Always on time.' },
          { icon: Wallet, title: 'Best price', desc: 'No intermediaries. Direct price.' },
        ]
      }
    },
    fr: {
      title: 'Comment Arriver',
      subtitle: 'Votre voyage vers le paradis commence ici',
      from: 'De l\'aéroport de Santa Marta',
      airport: 'Simón Bolívar (SMR)',
      stats: {
        duration: '1h 30min - 2h',
        distance: '75 km',
        route: 'Côte Caraïbe Colombienne'
      },
      byPlane: {
        badge: 'Plus confortable',
        title: 'Transport Privé',
        subtitle: 'Nous venons vous chercher',
        desc: 'Service porte-à-porte avec véhicule climatisé. Le chauffeur vous attend à la sortie avec une pancarte à votre nom.',
        features: ['WiFi à bord', 'Climatisation', 'Eau incluse', 'Sans arrêt'],
        price: '80 000 - 120 000 COP',
        cta: 'Réserver transport',
      },
      byCar: {
        badge: 'Indépendance',
        title: 'Location de Voiture',
        subtitle: 'Explorez à votre rythme',
        desc: 'Conduisez sur l\'une des plus belles routes côtières de Colombie. Parking gratuit à l\'hôtel.',
        steps: [
          { icon: Navigation, title: 'Départ', desc: 'Aéroport SMR → Vía al Mar' },
          { icon: Clock3, title: 'Temps', desc: '45 min jusqu\'au péage' },
          { icon: MapPin, title: 'Destination', desc: 'Palenque, Bolívar' },
        ],
        tip: '2 derniers km en route de terre. Tout véhicule peut passer.',
      },
      byBus: {
        badge: 'Économique',
        title: 'Transport Public',
        subtitle: 'Expérience locale',
        desc: 'Option authentique pour voyageurs aventureux. Nous venons vous chercher au péage si vous nous prévenez.',
        steps: [
          { title: 'Terminal Santa Marta', desc: 'Calle 41 # 9-10' },
          { title: 'Bus vers Barranquilla', desc: 'Berlinas, Marsol ou Copetran' },
          { title: 'Péage Palenque', desc: 'Descendez ici (50 min)' },
          { title: 'Moto-taxi', desc: '10 000 COP jusqu\'à l\'hôtel' },
        ],
        price: '15 000 COP',
        time: '1h 15min total',
      },
      contact: {
        title: 'Besoin d\'aide pour votre trajet ?',
        desc: 'Notre équipe vous guide pas à pas. Nous coordonnons aussi votre prise en charge personnalisée.',
        cta: 'Contacter par WhatsApp',
        or: 'ou appelez-nous au',
        phone: '+57 314 748 0855'
      },
      location: {
        title: 'Emplacement Exact',
        address: 'Carrera 1 # 23-58, Palenque',
        coords: '9.773722, -75.645361',
        copy: 'Copier coordonnées',
      },
      trust: {
        title: 'Pourquoi nous choisir ?',
        items: [
          { icon: Shield, title: 'Assurance incluse', desc: 'Tous nos transports sont assurés' },
          { icon: Clock, title: 'Ponctualité', desc: 'Nous valorisons votre temps. Toujours à l\'heure.' },
          { icon: Wallet, title: 'Meilleur prix', desc: 'Sans intermédiaires. Prix direct.' },
        ]
      }
    },
  };

  const c = content[locale] || content.es;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-stone-900 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        <div className="absolute top-1/4 left-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {c.from}
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {c.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 mb-2">{c.subtitle}</p>
            <p className="text-yellow-400 font-medium text-lg">{c.airport}</p>

            {/* Stats Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Clock, label: c.stats.duration, color: 'bg-blue-500' },
                { icon: MapPin, label: c.stats.distance, color: 'bg-green-500' },
                { icon: Navigation, label: c.stats.route, color: 'bg-yellow-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Option 1: Private Transport (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl mb-8"
          >
            {/* Yellow accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left content */}
              <div className="text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium mb-4">
                  <Star className="w-3 h-3" />
                  {c.byPlane.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{c.byPlane.title}</h2>
                <p className="text-xl text-yellow-400 mb-4">{c.byPlane.subtitle}</p>
                <p className="text-stone-300 mb-6 leading-relaxed">{c.byPlane.desc}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {c.byPlane.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">{c.byPlane.price}</span>
                </div>
              </div>

              {/* Right - CTA Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
                    <Plane className="w-8 h-8 text-stone-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{c.byPlane.cta}</h3>
                  <p className="text-stone-400 text-sm mb-6">Confirmación inmediata</p>
                  <a
                    href="https://wa.me/573147480855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-stone-900 rounded-xl font-bold transition-colors"
                  >
                    {c.byPlane.cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Options 2 & 3: Car & Bus */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Car Rental */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 border border-stone-100 hover:border-yellow-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  {c.byCar.badge}
                </span>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{c.byCar.title}</h3>
              <p className="text-orange-500 font-medium mb-4">{c.byCar.subtitle}</p>
              <p className="text-stone-600 text-sm mb-6">{c.byCar.desc}</p>

              {/* Steps */}
              <div className="space-y-4 mb-6">
                {c.byCar.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white border-2 border-stone-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{step.title}</p>
                      <p className="text-stone-500 text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-stone-100 rounded-xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">{c.byCar.tip}</p>
              </div>
            </motion.div>

            {/* Public Bus */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {c.byBus.badge}
                </span>
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{c.byBus.title}</h3>
              <p className="text-green-600 font-medium mb-4">{c.byBus.subtitle}</p>
              <p className="text-stone-600 text-sm mb-6">{c.byBus.desc}</p>

              {/* Steps */}
              <div className="space-y-3 mb-6">
                {c.byBus.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-stone-900 text-sm">{step.title}</p>
                      <p className="text-stone-500 text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-green-100">
                <div>
                  <p className="text-2xl font-bold text-green-600">{c.byBus.price}</p>
                  <p className="text-stone-400 text-xs">{c.byBus.time}</p>
                </div>
              </div>
            </motion.div>
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

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Map placeholder */}
              <div className="h-64 md:h-auto bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <p className="text-stone-300">Google Maps</p>
                </div>
                {/* Yellow corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-yellow-400 to-transparent" />
                </div>
              </div>
              
              {/* Info */}
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">{c.location.title}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-stone-400 text-sm mb-1">{c.location.address}</p>
                    <p className="text-lg font-medium">Carrera 1 # 23-58</p>
                    <p className="text-stone-300">Palenque, Bolívar, Colombia</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-stone-400 text-sm mb-2">{c.location.coords}</p>
                    <code className="text-yellow-400 font-mono text-lg">9.773722, -75.645361</code>
                    <div className="mt-3">
                      <CopyButton text="9.773722, -75.645361" label={c.location.copy} locale={locale} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-400 to-orange-400 relative overflow-hidden">
        {/* Decorative circles */}
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
