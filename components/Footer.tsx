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

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

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
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@palenquerincondelmar', label: 'TikTok' },
    { icon: Globe, href: 'https://www.instagram.com/palenquerincondelmar/', label: 'Instagram' },
    { icon: Share2, href: 'https://www.facebook.com/profile.php?id=61551764957161&locale=es_LA', label: 'Facebook' },
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
                  <span className="text-xl font-bold text-[#5489a0] tracking-tight">Palenque</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#5489a0] -mt-0.5">Eco Hotel</span>
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
                    className="p-2.5 rounded-lg bg-stone-800/50 text-stone-400 hover:text-[#5489a0] hover:bg-stone-800 transition-all duration-300"
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
                      className="text-stone-400 hover:text-[#5489a0] text-sm transition-colors duration-200 flex items-center gap-2 group"
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
                    className="text-stone-400 hover:text-[#5489a0] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-400 transition-all duration-200" />
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a
                    href={generateLocalizedUrl('/privacidad', locale)}
                    className="text-stone-400 hover:text-[#5489a0] text-sm transition-colors duration-200 flex items-center gap-2 group"
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
                    className="text-stone-400 hover:text-[#5489a0] text-sm transition-colors duration-200 flex items-start gap-3 group"
                  >
                    <MapPin className="w-5 h-5 text-[#5489a0] shrink-0 mt-0.5" />
                    <span>
                      {t.footer.address}<br />
                      <span className="text-stone-500">{t.footer.city}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573105270542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
                    WhatsApp +57 310 527 0542
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@palenquerincondelmar.co"
                    className="text-stone-400 hover:text-[#5489a0] text-sm transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <Mail className="w-5 h-5 text-[#5489a0] shrink-0" />
                    info@palenquerincondelmar.co
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
                <span className="text-[#5489a0] font-medium text-xs group-hover:text-[#5489a0] transition-colors">
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
