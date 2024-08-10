import { createClient } from '@/lib/utils/supabase/server'
import Link from 'next/link'

import { Text } from '@/components'

export default async function Home() {
  const supabase = createClient()

  const { error } = await supabase.auth.getUser()

  return (
    <main className='flex min-h-screen flex-col justify-center items-center gap-4'>
      <Text variant='h1'>This is my project</Text>
      {error ? (
        <Link href='/auth/login'>Login</Link>
      ) : (
        <Link href='/dashboard'>Dashboard</Link>
      )}
    </main>
  )
}
