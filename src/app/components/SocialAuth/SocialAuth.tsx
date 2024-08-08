'use server'

import { Github } from '@/lib/icons'

import { Button } from '@/components'

import { loginWithOAuth } from '@/actions/auth'

export const SocialAuth = () => {
  const signIn = async () => {
    'use server'
    await loginWithOAuth({ provider: 'github' })
  }

  return (
    <form action={signIn}>
      <Button type='submit' variant='secondary'>
        <Github />
      </Button>
    </form>
  )
}
