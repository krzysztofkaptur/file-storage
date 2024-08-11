import { Files, LayoutDashboard } from '@/lib/icons'

import { Logo, Sidebar, SidebarItem, SidebarLabel } from '@/components'

import { ScrollArea } from '@/ui'

const ICON_SIZE = 14

type DashboardSidebarProps = {
  className?: string
}

export const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
  return (
    <Sidebar className={className}>
      <div className='flex items-center justify-center p-4'>
        <Logo />
      </div>

      <div className='flex flex-col'>
        <ScrollArea className='h-[calc(100vh-132px)]'>
          <SidebarItem
            href='/dashboard'
            label='Dashboard'
            icon={<LayoutDashboard size={ICON_SIZE} />}
          />
          <SidebarLabel label='Storage' />
          <SidebarItem
            href='/dashboard/files'
            label='Files'
            icon={<Files size={ICON_SIZE} />}
          />
        </ScrollArea>
      </div>
    </Sidebar>
  )
}
