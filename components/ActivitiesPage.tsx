import ActivitiesContent from './ActivitiesContent';
import { Locale } from '@/lib/i18n/translations';

interface ActivitiesPageProps {
  locale: Locale;
}

export default function ActivitiesPage({ locale }: ActivitiesPageProps) {
  return <ActivitiesContent locale={locale} />;
}
