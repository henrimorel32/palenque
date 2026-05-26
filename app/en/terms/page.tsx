import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms and Conditions | Palenque Eco Hotel',
  description: 'Terms and conditions of Palenque Eco Hostel. Colombian tourism law.',
};

export default function TermsPage() {
  return <LegalPage type="terms" locale="en" />;
}
