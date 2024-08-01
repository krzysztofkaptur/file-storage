import { Bell } from 'lucide-react'

import { Logo, Sidebar, SidebarItem, SidebarLabel } from '@/components'

import { ScrollArea } from '@/ui'

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <div className='flex items-center justify-center p-4'>
        <Logo />
      </div>

      <div className='flex flex-col'>
        <ScrollArea className='h-[calc(100vh-132px)]'>
          <SidebarItem
            href='/dashboard'
            label='Dashboard'
            icon={<Bell size={16} />}
          />
          <SidebarLabel label='Image transformations' />
          <SidebarItem
            href='/dashboard/files'
            label='Files'
            icon={<Bell size={16} />}
          />
        </ScrollArea>
      </div>
    </Sidebar>
  )
}
