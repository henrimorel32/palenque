// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Palenque Eco Hostel</h3>
          <p>Carrera 1 # 23-58<br />Palenque, Bolívar</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p>
            <a 
              href="https://wa.me/573001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              WhatsApp: +57 5 123 4567
            </a>
            <br />
            Email: info@palenque.co
          </p>
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
  )
}
