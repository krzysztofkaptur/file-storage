'use client'

import { Button, Card } from '@/components'

import { Input, Label } from '@/ui'

type ProfileUserDataProps = {
  user: {
    email?: string
  }
}

export const ProfileUserData = ({ user }: ProfileUserDataProps) => {
  const handleDeleteAccount = () => {
    console.log('handleDeleteAccount')
  }

  return (
    <section className='flex flex-col items-start gap-4'>
      <Card>
        <Label>Email</Label>
        <Input name='email' value={user?.email} disabled />
      </Card>
      <Button
        variant='destructive'
        className='inline-block'
        onClick={handleDeleteAccount}
      >
        Delete account
      </Button>
    </section>
  )
}
