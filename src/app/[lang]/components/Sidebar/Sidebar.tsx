import { SidebarProps } from './types'

export const Sidebar = ({ children }: SidebarProps) => {
  return <div className='flex min-w-64 flex-col border-r'>{children}</div>
}
