import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Politique de Confidentialité | Palenque Eco Hotel',
  description: 'Politique de confidentialité et traitement des données personnelles de Palenque Eco Hostel. Loi 1581 de 2012, Colombie.',
};

export default function ConfidentialitePage() {
  return <LegalPage type="privacy" locale="fr" />;
}
