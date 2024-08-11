import { createClient } from '@/lib/utils/supabase/server'
import Link from 'next/link'

import { Logo, Text, TopMenu } from '@/components'

export default async function Home() {
  const supabase = createClient()

  const { error } = await supabase.auth.getUser()

  return (
    <main className='min-h-screen'>
      <TopMenu>
        <Logo width={30} height={20} />
        <div>
          {error ? (
            <Link href='/auth/login'>Login</Link>
          ) : (
            <Link href='/dashboard'>Dashboard</Link>
          )}
        </div>
      </TopMenu>
      <div className='grid grid-cols-2 min-h-[calc(100vh-70px)]'>
        <div className='flex items-center justify-center'>
          <Text
            variant='h1'
            className='text-3xl px-4 flex flex-col gap-4 items-end'
          >
            <span>Secure Your Files</span>
            <span>Anytime</span>
            <span>Anywhere</span>
          </Text>
        </div>
        <div className='bg-landing-banner bg-no-repeat bg-center bg-cover'></div>
      </div>
    </main>
  )
}
