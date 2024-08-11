import { Menu } from '@/lib/icons'

import { Sheet, SheetContent, SheetTrigger } from '@/ui'

import { DashboardSidebar } from '.'

export const DashboardSidebarDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='md:hidden' />
      </SheetTrigger>
      <SheetContent>
        <DashboardSidebar />
      </SheetContent>
    </Sheet>
  )
}
