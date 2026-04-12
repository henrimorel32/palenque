// app/[locale]/layout.tsx
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { Locale } from '@/lib/i18n/translations'

const locales: Locale[] = ['es', 'en', 'fr']

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  // Valide le locale
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <>
      {children}
    </>
  )
}
