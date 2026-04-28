import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/i18n/metadata';
import ActivitiesPage from '@/components/ActivitiesPage';

export const metadata: Metadata = genMeta('activities', 'es');

export default function Page() {
  return <ActivitiesPage locale="es" />;
}
