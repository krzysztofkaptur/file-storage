import Link from 'next/link'

import { SidebarItemProps } from './types'

export const SidebarItem = ({ href, label, icon }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className='flex items-center gap-4 p-4  hover:bg-slate-400'
    >
      {icon && icon}
      {label}
    </Link>
  )
}
