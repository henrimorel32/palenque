import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/i18n/metadata';
import ActivitiesPage from '@/components/ActivitiesPage';

export const metadata: Metadata = genMeta('activities', 'fr');

export default function Page() {
  return <ActivitiesPage locale="fr" />;
}
