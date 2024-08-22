import { cn } from '@/lib/utils'

import { TopMenuProps } from './types'

export const TopMenu = ({ children, className, ...rest }: TopMenuProps) => {
  return (
    <nav
      className={cn(
        'flex items-center justify-between gap-4 border-b p-4',
        className
      )}
      {...rest}
    >
      {children}
    </nav>
  )
}
