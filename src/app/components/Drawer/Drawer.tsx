import type { PropsWithChildren } from 'react'
import type { ReactNode } from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/ui'

export type DrawerProps = PropsWithChildren<{
  open?: boolean
  trigger: ReactNode
  onOpenChange?: (e: any) => void
}>

export const Drawer = ({
  trigger,
  children,
  open,
  onOpenChange,
}: DrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </Sheet>
  )
}
