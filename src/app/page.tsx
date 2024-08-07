import Link from 'next/link'

import { Text } from '@/components'

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center gap-4'>
      <Text variant='h1'>This is my project</Text>
      <Link href='/auth/login'>Login</Link>
    </main>
  )
}
