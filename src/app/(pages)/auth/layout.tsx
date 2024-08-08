import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <section className='flex min-h-screen w-full'>
        <div className='hidden flex-1 items-center justify-center rounded-r-2xl bg-slate-300 lg:flex'>
          banner
        </div>
        <div className='flex flex-1 items-center justify-center'>
          {children}
        </div>
      </section>
    </main>
  )
}
