// app/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Palenque Eco Hotel',
    default: 'Palenque Eco Hotel - Paraíso en la Costa Caribe',
  },
  description: 'Descubre la magia de Palenque en nuestro Eco Hotel. Playas de arena blanca, aguas cristalinas y el mejor servicio.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
