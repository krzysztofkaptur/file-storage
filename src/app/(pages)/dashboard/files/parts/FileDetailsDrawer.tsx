'use client'

import type { FileObject } from '@/lib/storage'
import { bytesToSize } from '@/lib/utils'
import Image from 'next/image'

import { Drawer } from '@/components'
import { DrawerProps } from '@/components'

import {
  Button,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/ui'

type FileDetailsDrawerProps = DrawerProps & {
  imageData: FileObject & { url: string }
}

export const FileDetailsDrawer = ({
  open,
  trigger,
  imageData,
  onOpenChange,
}: FileDetailsDrawerProps) => {
  return (
    <Drawer open={open} trigger={trigger} onOpenChange={onOpenChange}>
      {open && (
        <div className='flex flex-col justify-between h-full'>
          <div>
            <SheetHeader>
              <SheetTitle>Image details</SheetTitle>
              <SheetDescription>
                Detailed information about the image
              </SheetDescription>
            </SheetHeader>
            {imageData.url && (
              <figure className='flex justify-center'>
                {/* todo: add image loader */}
                <Image
                  src={imageData.url}
                  width={100}
                  height={100}
                  alt={imageData.name}
                />
              </figure>
            )}
            <div className='flex gap-2'>
              <span className='text-right flex-1'>Name</span>
              <span className='break-all flex-1'>{imageData.name}</span>
            </div>
            <div className='flex gap-2'>
              <span className='text-right flex-1'>Size</span>
              <span className='break-all flex-1'>
                {bytesToSize(imageData.metadata?.size)}
              </span>
            </div>
          </div>
          {/* todo: add image deletion */}
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      )}
    </Drawer>
  )
}
