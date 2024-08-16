import { fetchMe } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

import { PageHeader } from '@/components'

import { ProfileUserData } from './parts'

export default async function ProfilePage() {
  const { data, error } = await fetchMe()

  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div className='flex flex-col gap-8'>
      <PageHeader title='Profile' />
      <ProfileUserData user={data.user} />
    </div>
  )
}
