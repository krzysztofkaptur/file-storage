import Link from 'next/link'

import { Text } from '@/components'

export default function NotFound() {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-8 p-4 text-center'>
      <Text>Page you're trying to reach doesn't exist.</Text>
      <Link href='/'>Go back to the home page</Link>
    </main>
  )
}
