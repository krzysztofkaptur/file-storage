import { Text } from '@/components'

import { SidebarLabelProps } from './types'

export const SidebarLabel = ({ label }: SidebarLabelProps) => {
  return (
    <Text className='px-4 text-sm font-semibold uppercase text-muted-foreground'>
      {label}
    </Text>
  )
}
