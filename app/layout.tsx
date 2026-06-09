// app/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import ThemePicker from '@/components/ThemePicker'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-body' })

export const metadata = {
  title: {
    template: '%s | Palenque Eco Hotel',
    default: 'Palenque Eco Hotel - Paraíso en la Costa Caribe',
  },
  description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas y el mejor servicio.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Palenque Eco Hotel - Paraíso en la Costa Caribe',
    description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas y el mejor servicio.',
    url: 'https://palenquerincondelmar.co',
    siteName: 'Palenque Eco Hotel',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://palenquerincondelmar.co/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Palenque Eco Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palenque Eco Hotel - Paraíso en la Costa Caribe',
    description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas y el mejor servicio.',
    images: ['https://palenquerincondelmar.co/og-default.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html className="scroll-smooth">
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          
          <main>
            {children}
          </main>

          <Footer />
          <ThemePicker />
        </ThemeProvider>
      </body>
    </html>
  )
}
