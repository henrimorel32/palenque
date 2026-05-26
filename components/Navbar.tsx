// components/Navbar.tsx
'use client'

import { useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Waves, Phone, MapPin, MessageCircle } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { Locale } from '@/lib/i18n/translations'
import { getTranslations } from '@/lib/i18n/utils'
import { generateLocalizedUrl } from '@/lib/i18n/routes'

export default function Navbar() {
  const pathname = usePathname()
  
  // Détecte la locale depuis l'URL
  const locale = useMemo((): Locale => {
    if (!pathname) return 'es'
    const firstSegment = pathname.split('/')[1]
    if (firstSegment === 'en' || firstSegment === 'fr') {
      return firstSegment
    }
    return 'es' // Default
  }, [pathname])
  
  const t = getTranslations(locale)
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Génère les liens avec les URLs localisées
  const navLinks = [
    { name: t.nav.home, href: generateLocalizedUrl('/', locale) },
    { name: t.nav.rooms, href: `/${locale === 'es' ? 'habitaciones' : locale === 'en' ? 'en/rooms' : 'fr/chambres'}` },
    { name: t.nav.restaurant, href: generateLocalizedUrl('/restaurante', locale) },
    { name: t.nav.directions, href: `/${locale === 'es' ? 'como-llegar' : locale === 'en' ? 'directions' : 'acces'}` },
    { name: t.nav.activities, href: generateLocalizedUrl('/actividades', locale) },
    { name: t.nav.contact, href: generateLocalizedUrl('/contacto', locale) },
    { name: t.nav.gallery, href: `${generateLocalizedUrl('/', locale)}#galeria` },
  ]

  // Vérifie si un lien est actif
  const isActive = (href: string) => {
    // Enlève le préfixe de langue du pathname actuel
    let cleanPathname = pathname || '/'
    if (cleanPathname.startsWith('/en') || cleanPathname.startsWith('/fr')) {
      cleanPathname = cleanPathname.replace(/^\/(en|fr)/, '') || '/'
    }
    
    // Enlève le préfixe de langue du href
    let cleanHref = href
    if (cleanHref.startsWith('/en') || cleanHref.startsWith('/fr')) {
      cleanHref = cleanHref.replace(/^\/(en|fr)/, '') || '/'
    }
    
    return cleanPathname === cleanHref
  }

  return (
    <>
      {/* Top bar - fixe */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-yellow-400 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6 text-[#5489a0]">
                <a href="https://wa.me/573105270542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                  <Phone className="w-4 h-4" />
                  <span>+57 310 527 05 42</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=9.773722,-75.645361" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 font-medium hover:text-white transition-colors"
                  title="Ver ubicación en Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t.nav.location}</span>
                </a>
              </div>
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale - fixe et non dynamique */}
      <nav className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href={generateLocalizedUrl('/', locale)} className="flex items-center gap-3 group">
              <div className="p-3 rounded-2xl bg-yellow-400 shadow-lg shadow-yellow-400/30">
                <Waves className="w-8 h-8 text-[#5489a0]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#5489a0]">
                  Palenque
                </span>
                <span className="text-xs uppercase tracking-[0.3em] -mt-1 text-[#5489a0]">
                  Eco Hotel
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg group ${
                    isActive(link.href)
                      ? 'text-[#5489a0] bg-yellow-50'
                      : 'text-gray-700 hover:text-[#5489a0] hover:bg-yellow-50'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-1/2 rounded-full ${
                    isActive(link.href)
                      ? 'w-1/2'
                      : ''
                  } bg-yellow-500`} />
                </a>
              ))}
            </div>

            {/* CTA - WhatsApp */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/573105270542"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-green-700 bg-green-100 hover:bg-green-200 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 rounded-xl text-gray-800 hover:bg-yellow-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Bordure inférieure subtile */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-100" />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 xl:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header avec sélecteur de langue intégré */}
            <div className="flex items-center justify-between p-6 bg-yellow-400">
              <a href={generateLocalizedUrl('/', locale)} className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-yellow-950">
                  <Waves className="w-6 h-6 text-[#5489a0]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#5489a0]">Palenque</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5489a0]">Eco Hotel</span>
                </div>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-[#5489a0] hover:bg-yellow-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Language Switcher dans le menu mobile */}
            <div className="px-6 py-4 bg-yellow-50 border-b border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5489a0] font-medium">Idioma / Language / Langue</span>
                <LanguageSwitcher variant="topbar" />
              </div>
            </div>

            {/* Contact rapide */}
            <div className="px-6 py-4 border-b border-gray-100">
              <a href="https://wa.me/573105270542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-4 rounded-xl transition-all duration-200 group ${
                      isActive(link.href)
                        ? 'text-[#5489a0] bg-yellow-50'
                        : 'text-gray-800 hover:text-[#5489a0] hover:bg-yellow-50'
                    }`}
                  >
                    <span className="text-base font-semibold uppercase tracking-wider">{link.name}</span>
                    <svg
                      className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#5489a0]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t bg-gray-50">
              <a 
              href="https://maps.google.com/?q=9.773722,-75.645361" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#5489a0] transition-colors"
            >
                <MapPin className="w-4 h-4" />
                <span>{t.nav.location}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
