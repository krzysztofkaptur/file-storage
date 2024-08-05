'use client'

import Link from 'next/link'

import { Drawer, FileUploader, PageHeader } from '@/components'

import {
  Button,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/ui'

export const FileUploadDrawer = () => {
  return (
    <>
      <Drawer trigger={<Button variant='ghost'>Add image</Button>}>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4 h-full'>
            <SheetHeader>
              <SheetTitle>Add image</SheetTitle>
              <SheetDescription>Add new image</SheetDescription>
            </SheetHeader>
            <div className='flex flex-col flex-1 justify-between'>
              <FileUploader
                render={({ handleSaveFile }) => {
                  return (
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type='submit' onClick={handleSaveFile}>
                          Add image
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  )
                }}
              />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
