'use client'

import { Text } from '@/lib/icons'
import type { FileObject } from '@/lib/storage'
import { bytesToSize, formatDate } from '@/lib/utils'
import { useCallback, useEffect, useState } from 'react'

import { Button, TableCell, TableRow } from '@/ui'

import { fetchUrl } from '@/actions/storage'

import { FileDetailsDrawer } from './FileDetailsDrawer'

type FileListRowProps = {
  image: FileObject
}

export const FileListRow = ({ image }: FileListRowProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [imageData, setImageData] = useState({
    ...image,
    url: '',
  })

  const fetchImage = useCallback(async () => {
    const { data } = await fetchUrl(image.name)

    setImageData((prev) => ({ ...prev, url: data?.publicUrl }))
  }, [image.name])

  useEffect(() => {
    if (isOpen) {
      fetchImage()
    }
  }, [isOpen, fetchImage])

  return (
    <TableRow>
      <TableCell>{image.name}</TableCell>
      <TableCell>{formatDate(image.created_at)}</TableCell>
      <TableCell>{formatDate(image.updated_at)}</TableCell>
      <TableCell>{bytesToSize(image.metadata?.size)}</TableCell>
      <TableCell>
        <FileDetailsDrawer
          trigger={
            <Button variant='ghost'>
              <Text size={16} />
            </Button>
          }
          imageData={imageData}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </TableCell>
    </TableRow>
  )
}
