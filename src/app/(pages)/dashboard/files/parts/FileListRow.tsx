'use client'

import { File, Image as ImageIcon, Text } from '@/lib/icons'
import type { FileObject } from '@/lib/storage'
import { bytesToSize, formatDate } from '@/lib/utils'
import { useCallback, useEffect, useState } from 'react'

import { Button, TableCell, TableRow } from '@/ui'

import { fetchUrl } from '@/actions/storage'

import { FileDetailsDrawer } from './FileDetailsDrawer'

type FileListRowProps = {
  file: FileObject
}

export const FileListRow = ({ file }: FileListRowProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [fileData, setFileData] = useState({
    ...file,
    url: '',
  })

  const fetchImage = useCallback(async () => {
    const { data } = await fetchUrl(file.name)

    setFileData((prev) => ({ ...prev, url: data?.publicUrl || '' }))
  }, [file.name])

  useEffect(() => {
    if (isOpen && file?.metadata?.mimetype.includes('image')) {
      fetchImage()
    }
  }, [isOpen, fetchImage, file?.metadata?.mimetype])

  return (
    <TableRow>
      <TableCell>
        {file.metadata?.mimetype.includes('image') ? <ImageIcon /> : <File />}
      </TableCell>
      <TableCell>{file.name}</TableCell>
      <TableCell>{formatDate(file.created_at)}</TableCell>
      <TableCell>{formatDate(file.updated_at)}</TableCell>
      <TableCell>{file.metadata?.mimetype}</TableCell>
      <TableCell>{bytesToSize(file.metadata?.size)}</TableCell>
      <TableCell>
        <FileDetailsDrawer
          trigger={
            <Button variant='ghost'>
              <Text size={16} />
            </Button>
          }
          fileData={fileData}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </TableCell>
    </TableRow>
  )
}
