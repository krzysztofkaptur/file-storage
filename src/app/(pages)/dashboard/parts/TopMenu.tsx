import { Bell, Mail } from '@/lib/icons'
import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

import { Avatar, DropdownMenu, Text, ThemeToggle, TopMenu } from '@/components'

import { EmailDropdown, NotificationDropdown, UserDropdown } from '../parts'

export const DashboardTopMenu = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/auth/login')
  }

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
              <Text className='text-sm'>{data.user.email}</Text>
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
