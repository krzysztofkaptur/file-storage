import { Bell } from 'lucide-react'

import { Sidebar, SidebarItem, SidebarLabel, Logo } from '@/components'
import { ScrollArea } from '@/ui'

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <div className='flex items-center justify-center p-4'>
        <Logo />
      </div>

      <div className='flex flex-col'>
        <SidebarLabel label='Label' />
        <ScrollArea className='h-[calc(100vh-80px)]'>
          <SidebarItem href='/dashboard' label='Dashboard' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
          <SidebarItem href='/' label='Item 1' icon={<Bell />} />
          <SidebarItem href='/' label='Item 2' icon={<Bell />} />
          <SidebarItem href='/' label='Item 3' icon={<Bell />} />
          <SidebarItem href='/' label='Item 4' icon={<Bell />} />
        </ScrollArea>
      </div>
    </Sidebar>
  )
}
