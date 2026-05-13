'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Headphones,
  Zap,
  Calendar,
} from 'lucide-react';
import { Locale } from '@/lib/i18n/translations';
import { YellowTopLine, YellowCornerTL, YellowCornerBR } from './YellowAccents';

interface ContactPageProps {
  locale: Locale;
}

export default function ContactPage({ locale }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AAsunto: ${subject}%0D%0AMensaje:%0D%0A${message}`;
    window.location.href = `mailto:info@palenque.co?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const content = {
    es: {
      hero: {
        badge: 'Estamos aquí para ti',
        title: 'Contacto',
        subtitle: 'Escríbenos y comienza tu aventura en el Caribe',
      },
      stats: [
        { icon: Zap, label: 'Respuesta en', value: '< 24h' },
        { icon: Clock, label: 'Disponibles', value: '24 / 7' },
        { icon: Globe, label: 'Idiomas', value: 'ES · EN · FR' },
      ],
      cards: {
        whatsapp: {
          title: 'WhatsApp',
          desc: 'La forma más rápida de contactarnos. Respuesta inmediata.',
          cta: 'Escríbenos',
          value: '+57 310 527 0542',
        },
        email: {
          title: 'Correo electrónico',
          desc: 'Para consultas detalladas y reservas grupales.',
          cta: 'Enviar email',
          value: 'info@palenque.co',
        },
        phone: {
          title: 'Teléfono',
          desc: 'Llámanos directamente para resolver tus dudas.',
          cta: 'Llamar ahora',
          value: '+57 310 527 0542',
        },
        address: {
          title: 'Dirección',
          desc: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombia',
          cta: 'Ver en mapa',
          value: 'Palenque, Bolívar',
        },
      },
      form: {
        title: 'Envíanos un mensaje',
        subtitle: 'Completa el formulario y te responderemos lo antes posible.',
        name: 'Nombre completo',
        email: 'Correo electrónico',
        subject: 'Asunto',
        subjectOptions: [
          'Reserva de habitación',
          'Consulta general',
          'Tour o actividad',
          'Restaurante',
          'Transporte',
          'Otro',
        ],
        message: 'Tu mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        sent: '¡Mensaje enviado!',
      },
      map: {
        title: 'Nuestra ubicación',
        subtitle: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombia',
      },
      info: {
        title: 'Información práctica',
        items: [
          { icon: Clock, title: 'Check-in / Check-out', desc: '14:00 / 12:00' },
          { icon: Globe, title: 'Idiomas', desc: 'Español, inglés y francés' },
          { icon: Headphones, title: 'Soporte', desc: 'Respuesta garantizada en menos de 24 horas' },
          { icon: Calendar, title: 'Reservas', desc: 'Recomendamos reservar con al menos 1 semana de anticipación' },
        ],
      },
      cta: {
        title: '¿Prefieres hablar directamente?',
        subtitle: 'Nuestro equipo está listo para atenderte por WhatsApp y hacer realidad tu escapada al paraíso.',
        button: 'Contactar por WhatsApp',
        or: 'o llámanos al',
        phone: '+57 310 527 0542',
      },
    },
    en: {
      hero: {
        badge: "We're here for you",
        title: 'Contact',
        subtitle: 'Write to us and start your Caribbean adventure',
      },
      stats: [
        { icon: Zap, label: 'Reply within', value: '< 24h' },
        { icon: Clock, label: 'Available', value: '24 / 7' },
        { icon: Globe, label: 'Languages', value: 'ES · EN · FR' },
      ],
      cards: {
        whatsapp: {
          title: 'WhatsApp',
          desc: 'The fastest way to reach us. Immediate response.',
          cta: 'Message us',
          value: '+57 310 527 0542',
        },
        email: {
          title: 'Email',
          desc: 'For detailed inquiries and group bookings.',
          cta: 'Send email',
          value: 'info@palenque.co',
        },
        phone: {
          title: 'Phone',
          desc: 'Call us directly to resolve your questions.',
          cta: 'Call now',
          value: '+57 310 527 0542',
        },
        address: {
          title: 'Address',
          desc: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombia',
          cta: 'View on map',
          value: 'Palenque, Bolívar',
        },
      },
      form: {
        title: 'Send us a message',
        subtitle: 'Fill out the form and we will get back to you as soon as possible.',
        name: 'Full name',
        email: 'Email address',
        subject: 'Subject',
        subjectOptions: [
          'Room reservation',
          'General inquiry',
          'Tour or activity',
          'Restaurant',
          'Transport',
          'Other',
        ],
        message: 'Your message',
        messagePlaceholder: 'Tell us how we can help you...',
        submit: 'Send message',
        sending: 'Sending...',
        sent: 'Message sent!',
      },
      map: {
        title: 'Our location',
        subtitle: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombia',
      },
      info: {
        title: 'Practical information',
        items: [
          { icon: Clock, title: 'Check-in / Check-out', desc: '14:00 / 12:00' },
          { icon: Globe, title: 'Languages', desc: 'Spanish, English and French' },
          { icon: Headphones, title: 'Support', desc: 'Guaranteed reply within 24 hours' },
          { icon: Calendar, title: 'Bookings', desc: 'We recommend booking at least 1 week in advance' },
        ],
      },
      cta: {
        title: 'Prefer to talk directly?',
        subtitle: 'Our team is ready to assist you on WhatsApp and make your paradise getaway a reality.',
        button: 'Contact us on WhatsApp',
        or: 'or call us at',
        phone: '+57 310 527 0542',
      },
    },
    fr: {
      hero: {
        badge: 'Nous sommes là pour vous',
        title: 'Contact',
        subtitle: 'Écrivez-nous et commencez votre aventure caraïbe',
      },
      stats: [
        { icon: Zap, label: 'Réponse sous', value: '< 24h' },
        { icon: Clock, label: 'Disponible', value: '24 / 7' },
        { icon: Globe, label: 'Langues', value: 'ES · EN · FR' },
      ],
      cards: {
        whatsapp: {
          title: 'WhatsApp',
          desc: 'Le moyen le plus rapide de nous contacter. Réponse immédiate.',
          cta: 'Nous écrire',
          value: '+57 310 527 0542',
        },
        email: {
          title: 'Email',
          desc: 'Pour demandes détaillées et réservations de groupe.',
          cta: 'Envoyer un email',
          value: 'info@palenque.co',
        },
        phone: {
          title: 'Téléphone',
          desc: 'Appelez-nous directement pour résoudre vos questions.',
          cta: 'Appeler maintenant',
          value: '+57 310 527 0542',
        },
        address: {
          title: 'Adresse',
          desc: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombie',
          cta: 'Voir sur la carte',
          value: 'Palenque, Bolívar',
        },
      },
      form: {
        title: 'Envoyez-nous un message',
        subtitle: 'Remplissez le formulaire et nous vous répondrons dès que possible.',
        name: 'Nom complet',
        email: 'Adresse email',
        subject: 'Sujet',
        subjectOptions: [
          'Réservation de chambre',
          'Demande générale',
          'Excursion ou activité',
          'Restaurant',
          'Transport',
          'Autre',
        ],
        message: 'Votre message',
        messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
        submit: 'Envoyer le message',
        sending: 'Envoi...',
        sent: 'Message envoyé !',
      },
      map: {
        title: 'Notre emplacement',
        subtitle: 'Carrera 1 # 23-58, Palenque, Bolívar, Colombie',
      },
      info: {
        title: 'Informations pratiques',
        items: [
          { icon: Clock, title: 'Arrivée / Départ', desc: '14:00 / 12:00' },
          { icon: Globe, title: 'Langues', desc: 'Espagnol, anglais et français' },
          { icon: Headphones, title: 'Support', desc: 'Réponse garantie sous 24 heures' },
          { icon: Calendar, title: 'Réservations', desc: 'Nous recommandons de réserver au moins 1 semaine à l\'avance' },
        ],
      },
      cta: {
        title: 'Vous préférez parler directement ?',
        subtitle: 'Notre équipe est prête à vous assister sur WhatsApp et à faire de votre escapade au paradis une réalité.',
        button: 'Nous contacter sur WhatsApp',
        or: 'ou appelez-nous au',
        phone: '+57 310 527 0542',
      },
    },
  };

  const c = content[locale] || content.es;

  const contactCards = [
    {
      key: 'whatsapp',
      icon: MessageCircle,
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-100',
      href: 'https://wa.me/573105270542',
      external: true,
    },
    {
      key: 'email',
      icon: Mail,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-100',
      href: 'mailto:info@palenque.co',
      external: false,
    },
    {
      key: 'phone',
      icon: Phone,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-100',
      href: 'tel:+573105270542',
      external: false,
    },
    {
      key: 'address',
      icon: MapPin,
      color: 'bg-stone-700',
      lightColor: 'bg-stone-50',
      textColor: 'text-stone-700',
      borderColor: 'border-stone-200',
      href: 'https://maps.google.com/?q=9.773722,-75.645361',
      external: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <YellowTopLine />
        <div className="absolute top-1/4 left-0 w-px h-48 bg-gradient-to-b from-yellow-400/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <YellowCornerTL className="opacity-60" />
        <YellowCornerBR className="opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <Headphones className="w-4 h-4" />
              {c.hero.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {c.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto">
              {c.hero.subtitle}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {c.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-stone-900" />
                  </div>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-stone-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => {
              const cardContent = c.cards[card.key as keyof typeof c.cards];
              return (
                <motion.a
                  key={card.key}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-gradient-to-br from-white to-stone-50 rounded-2xl p-6 border ${card.borderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">{cardContent.title}</h3>
                  <p className="text-stone-500 text-sm mb-4 leading-relaxed">{cardContent.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${card.textColor}`}>{cardContent.value}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-400 group-hover:text-stone-600 transition-colors">
                      {cardContent.cta}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-100"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{c.form.title}</h2>
                <p className="text-stone-500">{c.form.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    {c.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    {c.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                    {c.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {c.form.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 hover:bg-yellow-300 text-stone-900 shadow-lg shadow-yellow-400/20'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      {c.form.sent}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {c.form.submit}
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-100 flex-1 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{c.map.title}</h2>
                  <p className="text-stone-500">{c.map.subtitle}</p>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-stone-200 min-h-[320px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0!2d-75.645361!3d9.773722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDYnMjUuNCJOIDc1wrAzOCc0My4zIlc!5e0!3m2!1ses!2sco!4v1609459200000!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '320px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Palenque Eco Hotel Location"
                    className="absolute inset-0"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=9.773722,-75.645361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-semibold hover:bg-stone-800 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {c.cards.address.cta}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12"
          >
            {c.info.title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.info.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-yellow-200 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-yellow-400/20">
                  <item.icon className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-400 to-orange-400">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-stone-900 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              WhatsApp
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{c.cta.title}</h2>
            <p className="text-stone-800 text-lg mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573105270542"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {c.cta.button}
              </a>
              <span className="text-stone-700 font-medium">{c.cta.or}</span>
              <a href="tel:+573105270542" className="text-stone-900 font-bold text-xl hover:underline">
                {c.cta.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
