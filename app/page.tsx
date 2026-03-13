// app/page.tsx
import HeroParallax from '@/components/HeroParallax'

export default function InicioPage() {
  return (
    <>
      <HeroParallax />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Bienvenido al Paraíso Caribeño
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la magia de palenque en nuestro Eco hotel. 
            Playas de arena blanca, aguas cristalinas y el mejor servicio.
          </p>
        </div>
      </section>
    </>
  )
}