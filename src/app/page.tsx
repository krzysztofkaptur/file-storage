import { fetchMe } from '@/lib/utils/supabase/server'
import Link from 'next/link'

import { Logo, Text, TopMenu } from '@/components'

export default async function Home() {
  const { error } = await fetchMe()

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
      <div className='relative min-h-[calc(100vh-70px)] grid-cols-2 md:grid'>
        <div className='flex min-h-[calc(100vh-70px)] items-center justify-center'>
          <Text
            variant='h1'
            className='flex flex-col items-end gap-4 px-4 text-3xl'
          >
            <span>Secure Your Files</span>
            <span>Anytime</span>
            <span>Anywhere</span>
          </Text>
        </div>
        <div className='absolute bottom-0 left-0 right-0 top-0 -z-10 bg-landing-banner bg-cover bg-center bg-no-repeat opacity-20 md:relative md:opacity-100'></div>
      </div>
    </main>
  )
}
