import { PropsWithChildren } from 'react'

import { Text } from '@/components'

type PageHeaderProps = PropsWithChildren<{
  title: string
  className?: string
}>

export const PageHeader = ({ title, className, children }: PageHeaderProps) => {
  return (
    <header className={`pb-8 ${className}`}>
      <Text variant='h1' className='font-bold uppercase'>
        {title}
      </Text>
      {children}
    </header>
  )
}
