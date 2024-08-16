import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

import { Button, Card, PageHeader } from '@/components'

import { Input, Label } from '@/ui'

export default async function ProfilePage() {
  const authSupabase = createClient()
  const { data, error } = await authSupabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div className='flex flex-col gap-8'>
      <PageHeader title='Profile' />
      <section className='flex flex-col items-start gap-4'>
        <Card>
          <Label>Email</Label>
          <Input name='email' value={data.user.email} disabled />
        </Card>
        <Button variant='destructive' className='inline-block'>
          Delete account
        </Button>
      </section>
    </div>
  )
}
