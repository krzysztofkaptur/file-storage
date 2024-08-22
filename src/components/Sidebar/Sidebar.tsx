import { cn } from '@/lib/utils'

import { SidebarProps } from './types'

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <aside className={cn('flex min-w-64 flex-col', className)}>
      {children}
    </aside>
  )
}
