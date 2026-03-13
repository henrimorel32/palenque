// app/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Hotel Paradiso',
    default: 'Hotel Paradiso - Paraíso en la Costa Caribe',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="/" className="text-2xl font-bold text-yellow-500">
                Palenque Eco Hostel
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-yellow-500">Inicio</a>
                <a href="/habitaciones" className="text-gray-700 hover:text-yellow-500">Habitaciones</a>
                <a href="/restaurante" className="text-gray-700 hover:text-yellow-500">Restaurante</a>
                <a href="/spa" className="text-gray-700 hover:text-yellow-500">Spa</a>
                <a href="/contacto" className="text-gray-700 hover:text-yellow-500">Contacto</a>
              </div>
              {/* <a 
                href="/reserva" 
                className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition"
              >
                Reservar
              </a> */}
            </div>
          </div>
        </nav>

        <div className="pt-16">
          {children}
        </div>

        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Palenque Eco Hostel</h3>
              <p>Carrera 1 # 23-58<br />Palenque, Bolívar</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <p>Tel: +57 5 123 4567<br />Email: info@palenque.co</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/terminos" className="hover:text-white">Términos y condiciones</a></li>
                <li><a href="/privacidad" className="hover:text-white">Política de privacidad</a></li>
              </ul>
            </div>
            <div>
              {/* <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              /> */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}