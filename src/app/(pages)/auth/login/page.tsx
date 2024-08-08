import { SocialAuth } from '@/components'

import { LoginContent } from './parts'

export default async function Login() {
  return (
    <>
      <LoginContent>
        <SocialAuth />
      </LoginContent>
    </>
  )
}
