'use client'

import { X } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

import { Button } from '@/components'

import { TextEllipsis } from '@/ui'

type ThumbProps = PropsWithChildren<{
  className?: string
  name: string
  deleteFile?: (name: string) => void
}>

export const Thumb = ({
  name,
  className,
  children,
  deleteFile,
}: ThumbProps) => {
  const handelRemoveFile = () => {
    deleteFile && deleteFile(name)
  }

  return (
    <div className={cn('w-24 relative', className)}>
      <Button
        size='sm'
        variant='destructive'
        className='absolute rounded-full h-6 w-6 p-0 -right-3 -top-3'
        onClick={handelRemoveFile}
      >
        <X size={12} />
      </Button>
      <div className='w-full'>
        <div>{children}</div>
        <TextEllipsis>
          <p className='text-sm mt-2 text-center'>{name}</p>
        </TextEllipsis>
      </div>
    </div>
  )
}
