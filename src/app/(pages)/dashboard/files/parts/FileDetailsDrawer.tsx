'use client'

import { Download, File } from '@/lib/icons'
import type { FileObject } from '@/lib/storage'
import { bytesToSize, downloadFile as downloadFileUtil } from '@/lib/utils'
import Image from 'next/image'
import { useTransition } from 'react'

import { Button, Drawer } from '@/components'
import type { DrawerProps } from '@/components'

import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/ui'

import { deleteFile, downloadFile } from '@/actions/storage'

type FileDetailsDrawerProps = DrawerProps & {
  fileData: FileObject & { url: string }
}

export const FileDetailsDrawer = ({
  open,
  trigger,
  fileData,
  onOpenChange,
}: FileDetailsDrawerProps) => {
  const [pending, startTransition] = useTransition()
  const handleDelete = () => {
    startTransition(async () => {
      // todo: handle error
      const { data, error } = await deleteFile(fileData.name)
    })
  }

  const handleDownload = async () => {
    const { data, error } = await downloadFile(fileData.name)

    // todo: handle error
    if (error) {
      console.log(error)
      return
    }

    downloadFileUtil(fileData.name, data.publicUrl)
  }

  return (
    <Drawer open={open} trigger={trigger} onOpenChange={onOpenChange}>
      {open && (
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4'>
            <SheetHeader>
              <SheetTitle>File details</SheetTitle>
              <SheetDescription>
                Detailed information about the file
              </SheetDescription>
            </SheetHeader>
            <div>
              {fileData.url ? (
                <figure className='flex justify-center'>
                  {/* todo: add file loader */}
                  <Image
                    src={fileData.url}
                    width={100}
                    height={100}
                    alt={fileData.name}
                  />
                </figure>
              ) : (
                <div className='flex justify-center'>
                  <File size={32} />
                </div>
              )}
              <div className='flex gap-4'>
                <span className='text-right flex-1'>Name</span>
                <span className='break-all flex-1'>{fileData.name}</span>
              </div>
              <div className='flex gap-4'>
                <span className='text-right flex-1'>Size</span>
                <span className='break-all flex-1'>
                  {bytesToSize(fileData.metadata?.size)}
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
