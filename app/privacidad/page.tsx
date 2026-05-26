import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Política de Privacidad | Palenque Eco Hotel',
  description: 'Política de privacidad y tratamiento de datos personales de Palenque Eco Hostel. Ley 1581 de 2012, Colombia.',
};

export default function PrivacidadPage() {
  return <LegalPage type="privacy" locale="es" />;
}
