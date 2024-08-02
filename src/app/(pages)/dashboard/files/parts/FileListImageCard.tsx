'use client'

import { Download, Trash } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components'

import { Card, CardContent, CardFooter, TextEllipsis } from '@/ui'

import { deleteFile } from '@/actions/storage'

import type { FileListImage } from './types'

type FileListImageCardProps = {
  image: FileListImage
}

export const FileListImageCard = ({ image }: FileListImageCardProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    await deleteFile([image.name])
    setIsLoading(false)
  }

  const handleDownload = () => {
    downloadFile(image.name, image.url)
  }

  return (
    <Card>
      <header>
        <Image src={image.url} alt={image.name} width={100} height={100} />
      </header>
      <CardContent>
        <TextEllipsis>
          <h4>{image.name}</h4>
        </TextEllipsis>
      </CardContent>
      <CardFooter className='flex justify-between'>
        {/* todo: create dropdown menu */}
        <Button isLoading={isLoading} onClick={handleDownload}>
          <Download size={16} />
        </Button>
        <Button isLoading={isLoading} onClick={handleDelete}>
          <Trash size={16} />
        </Button>
      </CardFooter>
    </Card>
  )
}

const downloadFile = (name: string, url: string) => {
  var link = document.createElement('a')
  link.setAttribute('download', name)
  link.setAttribute('target', '_blank')
  link.href = url
  document.body.appendChild(link)
  link.click()
  link.remove()
}
