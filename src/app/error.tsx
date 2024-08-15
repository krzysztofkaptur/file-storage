'use client'

import Link from 'next/link'

import { Text } from '@/components'

export default function Error() {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-8 p-4 text-center'>
      <Text>Something's gone wrong</Text>
      <Link href='/'>Go back to the home page</Link>
    </main>
  )
}
