import { SidebarProps } from './types'

export const Sidebar = ({ children }: SidebarProps) => {
  return <aside className='flex min-w-64 flex-col border-r'>{children}</aside>
}
