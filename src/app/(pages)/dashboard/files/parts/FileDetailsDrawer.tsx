'use client'

import { Download } from '@/lib/icons'
import type { FileObject } from '@/lib/storage'
import { bytesToSize } from '@/lib/utils'
import Image from 'next/image'
import { useTransition } from 'react'

import { Button, Drawer } from '@/components'
import type { DrawerProps } from '@/components'

import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/ui'

import { deleteFile, downloadFile } from '@/actions/storage'

type FileDetailsDrawerProps = DrawerProps & {
  imageData: FileObject & { url: string }
}

export const FileDetailsDrawer = ({
  open,
  trigger,
  imageData,
  onOpenChange,
}: FileDetailsDrawerProps) => {
  const [pending, startTransition] = useTransition()
  const handleDelete = () => {
    startTransition(() => deleteFile([imageData.name]))
  }

  const handleDownload = async () => {
    // todo: handle download
    const { data, error } = await downloadFile(imageData.name)

    console.log({ data, error })
  }

  return (
    <Drawer open={open} trigger={trigger} onOpenChange={onOpenChange}>
      {open && (
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4'>
            <SheetHeader>
              <SheetTitle>Image details</SheetTitle>
              <SheetDescription>
                Detailed information about the image
              </SheetDescription>
            </SheetHeader>
            <div>
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
              <Button onClick={handleDownload}>
                <Download size={16} />
              </Button>
            </div>
          </div>
          <SheetFooter>
            <Button isLoading={pending} onClick={handleDelete}>
              Delete
            </Button>
          </SheetFooter>
        </div>
      )}
    </Drawer>
  )
}
