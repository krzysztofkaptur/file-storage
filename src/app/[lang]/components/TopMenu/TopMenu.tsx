import { TopMenuProps } from './types'

export const TopMenu = ({ children, ...rest }: TopMenuProps) => {
  return (
    <nav
      className='flex items-center justify-between gap-4 border-b p-4'
      {...rest}
    >
      {children}
    </nav>
  )
}
