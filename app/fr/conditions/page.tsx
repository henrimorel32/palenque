import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Conditions Générales | Palenque Eco Hotel',
  description: 'Conditions générales de Palenque Eco Hostel. Droit colombien du tourisme.',
};

export default function ConditionsPage() {
  return <LegalPage type="terms" locale="fr" />;
}
