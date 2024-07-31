import { ReactNode } from 'react'

import { DashboardSidebar, DashboardTopMenu } from './parts'

import type { Locale } from '@/lib/i18n'

export default async function DashboardLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { lang: Locale } }>) {
  return (
    <main className='flex min-h-screen'>
      <DashboardSidebar />

      <div className='flex-1'>
        <DashboardTopMenu lang={params.lang} />
        <section className='px-4 py-10'>{children}</section>
      </div>
    </main>
  )
}
