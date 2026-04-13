// components/Footer.tsx
'use client'

import { usePathname } from 'next/navigation'
import { 
  MapPin, 
  Mail, 
  MessageCircle,
  Waves,
  ExternalLink,
  Globe,
  Share2
} from 'lucide-react'
import { Locale } from '@/lib/i18n/translations'
import { getTranslations } from '@/lib/i18n/utils'
import { generateLocalizedUrl } from '@/lib/i18n/routes'

export default function Footer() {
  const pathname = usePathname()
  
  // Détecte la locale depuis l'URL
  const locale: Locale = (() => {
    if (!pathname) return 'es'
    const firstSegment = pathname.split('/')[1]
    if (firstSegment === 'en' || firstSegment === 'fr') {
      return firstSegment
    }
    return 'es'
  })()
  
  const t = getTranslations(locale)
  const currentYear = new Date().getFullYear()

  // Navigation links
  const navLinks = [
    { name: t.nav.home, href: generateLocalizedUrl('/', locale) },
    { name: t.nav.rooms, href: `/${locale === 'es' ? 'habitaciones' : locale === 'en' ? 'en/rooms' : 'fr/chambres'}` },
    { name: t.nav.restaurant, href: generateLocalizedUrl('/restaurante', locale) },
    { name: t.nav.directions, href: `/${locale === 'es' ? 'como-llegar' : locale === 'en' ? 'directions' : 'acces'}` },
    { name: t.nav.activities, href: generateLocalizedUrl('/actividades', locale) },
    { name: t.nav.contact, href: generateLocalizedUrl('/contacto', locale) },
  ]

  // Social links
  const socialLinks = [
    { icon: Globe, href: 'https://instagram.com/palenqueecohotel', label: 'Instagram' },
    { icon: Share2, href: 'https://facebook.com/palenqueecohotel', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section avec bordure décorative */}
        <div className="relative pt-16 pb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href={generateLocalizedUrl('/', locale)} className="flex items-center gap-3 group mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/20 group-hover:shadow-yellow-400/40 transition-shadow duration-300">
                  <Waves className="w-7 h-7 text-stone-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">Palenque</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-yellow-400 -mt-0.5">Eco Hotel</span>
                </div>
              </a>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                {t.footer.about}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-lg bg-stone-800/50 text-stone-400 hover:text-yellow-400 hover:bg-stone-800 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-yellow-400 transition-all duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={generateLocalizedUrl('/terminos', locale)}
                    className="text-stone-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-400 transition-all duration-200" />
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a
                    href={generateLocalizedUrl('/privacidad', locale)}
                    className="text-stone-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-400 transition-all duration-200" />
                    {t.footer.privacy}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                {t.footer.contact}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://maps.google.com/?q=9.773722,-75.645361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-start gap-3 group"
                  >
                    <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      {t.footer.address}<br />
                      <span className="text-stone-500">{t.footer.city}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573147480855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
                    WhatsApp +57 314 748 0855
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@palenque.co"
                    className="text-stone-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                    info@palenque.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-stone-500 text-xs">
              © {currentYear} {t.footer.title}. {t.footer.rights}.
            </p>
            
            {/* Powered by - SEO Optimisé */}
            <div className="flex items-center gap-2">
              <span className="text-stone-600 text-xs">{t.footer.poweredBy}</span>
              <a
                href="https://henrimorel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/50 hover:bg-stone-800 transition-all duration-300"
                aria-label={`${t.footer.webDeveloper} - ${t.footer.webDevDescription}`}
                title={`${t.footer.webDeveloper} - ${t.footer.webDevDescription}`}
              >
                <span className="text-yellow-400 font-medium text-xs group-hover:text-yellow-300 transition-colors">
                  henrimorel.com
                </span>
                <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
