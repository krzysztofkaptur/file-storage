import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type ThumbProps = PropsWithChildren<{ className: string }>

export const Thumb = ({ className, children }: ThumbProps) => {
  return <div className={cn('w-24', className)}>{children}</div>
}
