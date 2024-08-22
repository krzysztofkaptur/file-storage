import { Bell, Mail } from '@/lib/icons'
import { fetchMe } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

import { Avatar, DropdownMenu, Text, ThemeToggle, TopMenu } from '@/components'

import {
  DashboardSidebarDrawer,
  EmailDropdown,
  NotificationDropdown,
  UserDropdown,
} from '../parts'

export const DashboardTopMenu = async () => {
  const { data, error } = await fetchMe()

  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <TopMenu>
      <DashboardSidebarDrawer />
      <div className='hidden md:block'></div>
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
              <Text className='hidden text-sm md:block'>{data.user.email}</Text>
              <Avatar
                src={data.user?.user_metadata?.avatar_url}
                alt=''
                fallback='KK'
              />
            </div>
          }
        >
          <UserDropdown />
        </DropdownMenu>
      </div>
    </TopMenu>
  )
}
