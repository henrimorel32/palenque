import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Términos y Condiciones | Palenque Eco Hotel',
  description: 'Términos y condiciones de uso de Palenque Eco Hostel. Ley 300 de 1996, Ley 1581 de 2012, Colombia.',
};

export default function TerminosPage() {
  return <LegalPage type="terms" locale="es" />;
}
