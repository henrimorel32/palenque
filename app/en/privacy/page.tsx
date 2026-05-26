import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Palenque Eco Hotel',
  description: 'Privacy policy and personal data processing of Palenque Eco Hostel. Law 1581 of 2012, Colombia.',
};

export default function PrivacyPage() {
  return <LegalPage type="privacy" locale="en" />;
}
