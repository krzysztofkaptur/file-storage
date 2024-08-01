import { Bell, Mail } from 'lucide-react'

import { Avatar, DropdownMenu, Text, ThemeToggle, TopMenu } from '@/components'

import { EmailDropdown, NotificationDropdown, UserDropdown } from '../parts'

export const DashboardTopMenu = () => {
  return (
    <TopMenu>
      {/* todo: search? breadcrumbs? page title? */}
      <div>something</div>
      <div className='flex items-center gap-4 '>
        <ThemeToggle />
        <DropdownMenu trigger={<Bell size={16} />}>
          <NotificationDropdown />
        </DropdownMenu>
        <DropdownMenu trigger={<Mail size={16} />}>
          <EmailDropdown />
        </DropdownMenu>
        <DropdownMenu
          trigger={
            <div className='flex items-center gap-4'>
              <Text>email@gmail.com</Text>
              <Avatar src='' alt='' fallback='KK' />
            </div>
          }
        >
          <UserDropdown />
        </DropdownMenu>
      </div>
    </TopMenu>
  )
}
