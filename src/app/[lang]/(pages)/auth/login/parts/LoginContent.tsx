'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { Form, InputGroup, Text, Divider } from '@/components'
import { Button } from '@/ui'
import { LoginSchema, schemaResolver } from '@/lib/validation'

import type { getDictionary } from '@/lib/i18n/get-dictionary'

export const LoginContent = ({
  t,
}: {
  t: Awaited<ReturnType<typeof getDictionary>>['login']
}) => {
  const form = useForm({
    resolver: schemaResolver(LoginSchema),
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log({ values })
  })

  return (
    <div className='w-full max-w-md'>
      <Form {...form} onSubmit={onSubmit}>
        <div className='flex w-full max-w-md flex-col gap-6 self-center p-4'>
          <Text className='text-xl'>{t.title}</Text>
          <InputGroup
            label={t.email}
            placeholder='yourname@provider.com'
            error={form.formState?.errors?.email?.message}
            {...form.register('email')}
          />
          <InputGroup
            label={t.password}
            type='password'
            {...form.register('password')}
          />
          <Button>{t.submitBtn}</Button>
          <Text className='text-center text-sm'>
            <Link href='/'>{t.forgotPassword}</Link>
          </Text>
          <Divider />
          <Text className='text-sm'>
            {t.registerText} <Link href='/auth/register'>{t.link}</Link>
          </Text>
        </div>
      </Form>
    </div>
  )
}
