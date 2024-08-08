'use client'

import { LoginSchema, schemaResolver } from '@/lib/validation'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Divider, Form, InputGroup, Text } from '@/components'

import { login } from '@/actions/auth'

type LoginContentProps = PropsWithChildren<{}>

export const LoginContent = ({ children }: LoginContentProps) => {
  const form = useForm({
    resolver: schemaResolver(LoginSchema),
  })

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    const response = await login({ email, password })

    if (response?.message) {
      form.setError('email', { type: 'custom', message: response.message })
    }
  })

  return (
    <div className='w-full max-w-md'>
      <div className='flex flex-col gap-6 p-4'>
        <Text className='text-xl'>Sign in</Text>
        {children}
        <Divider />
      </div>
      <Form {...form} onSubmit={onSubmit}>
        <div className='flex w-full flex-col gap-6 self-center p-4'>
          <InputGroup
            label='Email'
            placeholder='yourname@provider.com'
            error={form.formState?.errors?.email?.message}
            {...form.register('email')}
          />
          <InputGroup
            label='Password'
            type='password'
            {...form.register('password')}
          />
          <Button type='submit'>Sign in</Button>
          <Text className='text-center text-sm'>
            <Link href='/'>Forgot password</Link>
          </Text>
          <Divider />
          <Text className='text-sm'>
            Don&apos;t have an account{' '}
            <Link href='/auth/register'>Register</Link>
          </Text>
        </div>
      </Form>
    </div>
  )
}
