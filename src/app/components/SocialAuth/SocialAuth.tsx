'use server'

import { Github } from '@/lib/icons'
import { createClient } from '@/lib/utils/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { Button } from '@/components'

export const SocialAuth = () => {
  const signIn = async () => {
    'use server'
    // 1. Create a Supabase client
    const supabase = createClient()
    const origin = headers().get('origin')
    // 2. Sign in with GitHub
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.log(error)
    } else {
      return redirect(data.url)
    }
  }

  return (
    <form action={signIn}>
      <Button type='submit' variant='secondary'>
        <Github />
      </Button>
    </form>
  )
}
