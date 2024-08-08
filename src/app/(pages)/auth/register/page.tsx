import { SocialAuth } from '@/components'

import { RegisterContent } from './parts'

export default async function Register() {
  return (
    <RegisterContent>
      <SocialAuth />
    </RegisterContent>
  )
}
