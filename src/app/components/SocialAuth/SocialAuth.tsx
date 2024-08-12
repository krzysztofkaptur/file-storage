'use server'

import { Github } from '@/lib/icons'

import { Button } from '@/components'

import { loginWithOAuth } from '@/actions/auth'

const signIn = async () => {
  'use server'
  await loginWithOAuth({ provider: 'github' })
}

export const SocialAuth = () => {
  return (
    <form action={signIn}>
      <Button type='submit' variant='secondary'>
        <Github />
      </Button>
    </form>
  )
}
