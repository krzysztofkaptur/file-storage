'use client'

import { useState } from 'react'

import { Button, Drawer, FileUploader } from '@/components'

import { SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/ui'

export const FileUploadDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Drawer
        trigger={<Button variant='secondary'>Add file</Button>}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-4 h-full'>
            <SheetHeader>
              <SheetTitle>Add file</SheetTitle>
              <SheetDescription>Add new file</SheetDescription>
            </SheetHeader>
            <div className='flex flex-col flex-1 justify-between'>
              <FileUploader
                onFinish={closeDrawer}
                render={({ handleSaveFile, pending }) => {
                  return (
                    <SheetFooter>
                      <Button
                        type='submit'
                        isLoading={pending}
                        onClick={handleSaveFile}
                      >
                        Submit
                      </Button>
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
