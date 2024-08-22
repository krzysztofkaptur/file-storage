import type { PropsWithChildren } from 'react'
import type { ReactNode } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  VisuallyHidden,
} from '@/ui'

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
      <SheetContent>
        {/* needs to be here to remove warnings */}
        <VisuallyHidden>
          <SheetTitle>Drawer</SheetTitle>
          <SheetDescription></SheetDescription>
        </VisuallyHidden>
        {children}
      </SheetContent>
    </Sheet>
  )
}
