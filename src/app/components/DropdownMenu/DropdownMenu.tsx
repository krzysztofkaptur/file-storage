import { PropsWithChildren } from 'react'

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu as UiDropdownMenu,
} from '@/ui'

type DropdownMenuProps = PropsWithChildren<{
  trigger: JSX.Element
}>

export const DropdownMenu = ({ trigger, children }: DropdownMenuProps) => {
  return (
    <UiDropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>{children}</DropdownMenuContent>
    </UiDropdownMenu>
  )
}
