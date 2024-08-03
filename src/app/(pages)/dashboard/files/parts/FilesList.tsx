'use client'

import { Text } from '@/lib/icons'
import { bytesToSize, formatDate } from '@/lib/utils'

import { Drawer } from '@/components'

import {
  Button,
  Input,
  Label,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui'

import type { FilesListProps } from './types'

export const FilesList = ({ images }: FilesListProps) => {
  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Size</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images?.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.name}</TableCell>
              <TableCell>{formatDate(image.created_at)}</TableCell>
              <TableCell>{formatDate(image.updated_at)}</TableCell>
              <TableCell>{bytesToSize(image.metadata?.size)}</TableCell>
              <TableCell>
                <Drawer
                  trigger={
                    <Button variant='ghost'>
                      <Text size={16} />
                    </Button>
                  }
                >
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here.
                    </SheetDescription>
                  </SheetHeader>
                  <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='name' className='text-right'>
                        Name
                      </Label>
                      <Input
                        id='name'
                        value='Pedro Duarte'
                        className='col-span-3'
                      />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='username' className='text-right'>
                        Username
                      </Label>
                      <Input
                        id='username'
                        value='@peduarte'
                        className='col-span-3'
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type='submit'>Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </Drawer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
