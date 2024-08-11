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
      <div className='md:grid grid-cols-2 min-h-[calc(100vh-70px)] relative'>
        <div className='min-h-[calc(100vh-70px)] flex items-center justify-center'>
          <Text
            variant='h1'
            className='text-3xl px-4 flex flex-col gap-4 items-end'
          >
            <span>Secure Your Files</span>
            <span>Anytime</span>
            <span>Anywhere</span>
          </Text>
        </div>
        <div className='opacity-20 md:opacity-100 bg-landing-banner bg-no-repeat bg-center bg-cover absolute left-0 right-0 bottom-0 top-0 md:relative -z-10'></div>
      </div>
    </main>
  )
}
