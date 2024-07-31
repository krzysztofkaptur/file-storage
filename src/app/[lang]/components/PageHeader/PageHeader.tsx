import { Text } from '@/components'

type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className='pb-8'>
      <Text variant='h1' className='font-bold uppercase'>
        {title}
      </Text>
    </header>
  )
}
