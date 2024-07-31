import { Bell, Mail } from 'lucide-react'

import {
  Avatar,
  DropdownMenu,
  Text,
  TopMenu,
  LanguageSwitcher,
  ThemeToggle,
} from '@/components'

import { UserDropdown, EmailDropdown, NotificationDropdown } from '../parts'

import type { Locale } from '@/lib/i18n'

export const DashboardTopMenu = ({ lang }: { lang: Locale }) => {
  return (
    <TopMenu>
      {/* todo: search? breadcrumbs? page title? */}
      <div>something</div>
      <div className='flex items-center gap-4 '>
        <ThemeToggle />
        <LanguageSwitcher currentLang={lang} />
        <DropdownMenu trigger={<Bell />}>
          <NotificationDropdown />
        </DropdownMenu>
        <DropdownMenu trigger={<Mail />}>
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
