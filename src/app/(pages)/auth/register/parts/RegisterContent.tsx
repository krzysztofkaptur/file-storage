'use client'

import { RegisterSchema, schemaResolver } from '@/lib/validation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Divider, Form, InputGroup, Text } from '@/components'

import { Button } from '@/ui'

import { register } from '@/actions/auth'

export const RegisterContent = () => {
  const form = useForm({
    resolver: schemaResolver(RegisterSchema),
  })

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    const response = await register({ email, password })

    if (response?.message) {
      form.setError('email', { type: 'custom', message: response.message })
    }
  })

  return (
    <div className='w-full max-w-md'>
      <Form {...form} onSubmit={onSubmit}>
        <div className='flex w-full max-w-md flex-col gap-6 self-center p-4'>
          <Text className='text-xl'>Sign up</Text>
          <InputGroup
            label='Email'
            placeholder='yourname@provider.com'
            error={form.formState?.errors?.email?.message}
            {...form.register('email')}
          />
          <InputGroup
            label='Password'
            type='password'
            error={form.formState?.errors?.password?.message}
            {...form.register('password')}
          />
          <Button>Sign up</Button>
          <Divider />
          <Text className='text-sm'>
            Already have an account? <Link href='/auth/login'>Login</Link>
          </Text>
        </div>
      </Form>
    </div>
  )
}
