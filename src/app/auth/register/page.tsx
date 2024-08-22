import { Metadata } from 'next'

import { SocialAuth } from '@/components'

import { RegisterContent } from './parts'

export const metadata: Metadata = {
  title: 'Sign up | FilesFront',
}

export default async function Register() {
  return (
    <RegisterContent>
      <SocialAuth />
    </RegisterContent>
  )
}
