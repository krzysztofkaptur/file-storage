import { Metadata } from 'next'

import { SocialAuth } from '@/components'

import { LoginContent } from './parts'

export const metadata: Metadata = {
  title: 'Sign in | FilesFront',
}

export default async function Login() {
  return (
    <>
      <LoginContent>
        <SocialAuth />
      </LoginContent>
    </>
  )
}
