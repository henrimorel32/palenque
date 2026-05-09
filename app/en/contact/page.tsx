import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateStructuredData } from '@/lib/i18n/metadata';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = genMeta('contact', 'en');

export default function Page() {
  const structuredData = generateStructuredData('contact', 'en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPage locale="en" />
    </>
  );
}
