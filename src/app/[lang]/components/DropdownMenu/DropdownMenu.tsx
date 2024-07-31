import { ReactNode } from 'react'

import {
  DropdownMenu as UiDropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui'

type DropdownMenuProps = {
  trigger: JSX.Element
  children: ReactNode
}

export const DropdownMenu = ({ trigger, children }: DropdownMenuProps) => {
  return (
    <UiDropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>{children}</DropdownMenuContent>
    </UiDropdownMenu>
  )
}
