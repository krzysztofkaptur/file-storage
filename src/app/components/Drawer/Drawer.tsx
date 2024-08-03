import type { PropsWithChildren } from 'react'

import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui'

type DrawerProps = PropsWithChildren<any>

export const Drawer = ({ trigger, children }: DrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </Sheet>
  )
}
